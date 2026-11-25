/* Portfolio interactions using jQuery.
   Includes mobile navigation, scroll effects, active links,
   back-to-top behavior, and contact form validation. */
$(function () {
    const $menuButton = $("#menu-btn");
    const $mobileMenu = $("#mobile-menu");
    const $navbar = $("#navbar");
    const $navLinks = $(".nav-link");
    const $sections = $("main section[id]");

    function closeMenu() {
        $mobileMenu
            .removeClass("translate-y-0 opacity-100 pointer-events-auto")
            .addClass("-translate-y-full opacity-0 pointer-events-none");

        $menuButton
            .html('<i class="fa-solid fa-bars text-lg"></i>')
            .attr("aria-expanded", "false");
    }

    $menuButton.attr("aria-expanded", "false").on("click", function () {
        const isOpening = !$mobileMenu.hasClass("translate-y-0");

        $mobileMenu.toggleClass("translate-y-0", isOpening)
            .toggleClass("opacity-100", isOpening)
            .toggleClass("pointer-events-auto", isOpening)
            .toggleClass("-translate-y-full", !isOpening)
            .toggleClass("opacity-0", !isOpening)
            .toggleClass("pointer-events-none", !isOpening);

        $(this)
            .html(isOpening
                ? '<i class="fa-solid fa-xmark text-lg"></i>'
                : '<i class="fa-solid fa-bars text-lg"></i>')
            .attr("aria-expanded", String(isOpening));
    });

    $(".mobile-link").on("click", closeMenu);

    function updatePageOnScroll() {
        const scrolled = $(window).scrollTop() > 40;
        $navbar.toggleClass("shadow-xl border-white/10", scrolled);

        let currentSection = "";
        const scrollPosition = $(window).scrollTop();

        $sections.each(function () {
            if (scrollPosition >= $(this).offset().top - 140) {
                currentSection = this.id;
            }
        });

        $navLinks.each(function () {
            const active = $(this).attr("href") === "#" + currentSection;
            $(this)
                .toggleClass("text-cyan-400", active)
                .toggleClass("text-slate-300", !active);
        });
    }

    $(window).on("scroll", updatePageOnScroll);
    updatePageOnScroll();

    $("#back-to-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    // Frontend-only form validation. A backend/form service is required to send messages.
    $("#contact-form").on("submit", function (event) {
        event.preventDefault();

        const $form = $(this);
        const fields = {
            name: $("#name"),
            email: $("#email"),
            subject: $("#subject"),
            message: $("#message")
        };

        const errorIds = {
            name: "#name-error",
            email: "#email-error",
            subject: "#subject-error",
            message: "#message-error"
        };

        $("#form-success, #form-error").addClass("hidden");

        $.each(fields, function (key, $field) {
            $(errorIds[key]).addClass("hidden");
            $field.removeClass("border-rose-500");
        });

        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.val().trim());
        const valid = {
            name: fields.name.val().trim().length > 0,
            email: emailIsValid,
            subject: fields.subject.val().trim().length > 0,
            message: fields.message.val().trim().length >= 10
        };

        let allValid = true;

        $.each(valid, function (key, isValid) {
            if (!isValid) {
                allValid = false;
                $(errorIds[key]).removeClass("hidden");
                fields[key].addClass("border-rose-500");
            }
        });

        if (!allValid) {
            $("#error-msg").text("Please correct the highlighted fields and try again.");
            $("#form-error").removeClass("hidden");
            return;
        }

        $("#form-success").removeClass("hidden");
        $form[0].reset();

        window.setTimeout(function () {
            $("#form-success").addClass("hidden");
        }, 6000);
    });
});
