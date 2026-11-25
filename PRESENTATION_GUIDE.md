# Portfolio Presentation Guide

## 1. Title Slide
Website: Samira Sadmin Personal Portfolio
Student ID: [Add student ID]
Batch/Section: [Add batch and section]
Course: [Add course name]
Course teacher: [Add teacher name]

## 2. Introduction
The website is a personal portfolio for presenting Samira Sadmin's education, skills, projects and contact details. The target audience includes recruiters, teachers, classmates and collaborators. Its goal is to introduce the portfolio owner and present academic and technical work in one place.

## 3. Website Structure
- Home: introduction, profile photo and quick information.
- About: academic focus, development interests, data and logic, location, career objectives and strengths.
- Skills: programming languages, frontend technologies, tools and soft skills.
- Projects: Personal Portfolio Website, Food Delivery App Prototype (Figma), and Adaptive Multi-Sensory Enemy AI for Intelligent NPC Behavior Using Unreal Engine.
- Education: university and relevant coursework.
- Contact: contact details and a validated contact form.

## 4. HTML or Technology Used
- HTML5: main structure, navigation, headings, paragraphs, lists, links, image and contact form.
- CSS3: pastel color theme, card styling, photo crop, responsive adjustments, hover/focus effects and reduced-motion support.
- JavaScript: language used for page interactions.
- jQuery 3.7.1: element selection, click/scroll/submit events, class changes, form value checks and smooth scrolling.
- Tailwind CSS: utility classes in the HTML for layout, spacing, grid and responsive behavior.
- Font Awesome and Google Fonts: icons and typography.

## 5. Key Features
Single-page navigation, responsive mobile menu, profile photograph, About/Skills/Projects/Education sections, contact form validation, active navigation highlighting, back-to-top control and pastel color theme.

## 6. Code Explanation
HTML profile image:
```html
<img src="assets/profile.jpg" alt="Samira Sadmin" class="profile-image">
```
This places the supplied photo in the profile card and provides alternative text.

jQuery menu event:
```javascript
$menuButton.on("click", function () {
    // toggles the mobile navigation menu
});
```
This listens for a click and updates the menu's open/closed state.

CSS photo crop:
```css
.profile-image {
    object-fit: cover;
    object-position: 30% 50%;
}
```
This crops the photo neatly while keeping the subject positioned toward the center.

## 7. Output & Demo
Open `index.html` in a browser and demonstrate the sections, mobile menu, navigation links, profile image, contact form validation and back-to-top button. Capture screenshots of Home, Skills/Projects and Contact for the presentation.

## 8. Challenges & Solutions
The previous dark theme did not match the reference, so a pastel palette was applied. The photo framing is controlled with CSS object-fit and object-position. jQuery click handlers control mobile navigation. jQuery form checks validate required values and email format before showing feedback.

## 9. Future Improvements
Add project screenshots and working demos and real demos, connect the contact form to a backend or form service, add a downloadable CV, deploy the website online, and add project screenshots and accessibility improvements.

Note: the contact form is frontend-only. It validates fields but does not deliver messages.
