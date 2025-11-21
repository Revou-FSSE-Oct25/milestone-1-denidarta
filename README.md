# Software Developer Portfolio - Module 1 Assignment

## About The Project

This project is a personal portfolio website of a software developer. It showcases my work experience, projects, and contact information. The website is designed to be a single-page application with smooth scrolling to different sections, featuring a modern dark-themed aesthetic.

## Link to the live demo

You can view the live demo of the project [here](https://revou-fsse-oct25.github.io/milestone-1-denidarta/)

## Installation

To clone this project to your local machine, run the following command:

```bash
git clone https://github.com/Revou-FSSE-Oct25/milestone-1-denidarta.git
```

## Project Features

The website has the following features:

- **Welcome:** A hero section with a brief introduction about me.
- **About Me:** A detailed section about my background and philosophy.
- **Work History:** A timeline of my professional experience.
- **Core Discipline:** A showcase of my key skills (Design System, Software Engineering, Interface Design).
- **Tech Stack:** A grid of technologies I use.
- **Selected Works:** A gallery of my projects with interactive hover effects.
- **Contact Me:** A styled form to send me a message.

## Folder Structure

```
milestone-1-denidarta
├───index.html
├───README.md
├───assets/
│   ├───documents/
│   ├───icons/
│   ├───images/
│   └───logos/
├───css/
│   ├───variables.css
│   ├───new-style.css
│   ├───index-desktop.css
│   └───reset.css
└───pages/
    ├───about-me.html
    └───projects.html
```

## Variable Management

This project uses a centralized CSS variable system to maintain design consistency. The variables are defined in `css/variables.css` and consumed by other stylesheets.

- **`css/variables.css`**: Defines the design tokens such as colors (`--page-background`, `--tint-purple`), fonts (`--primary-type`, `--display-type`), and common styles.
- **`css/new-style.css`**: The main stylesheet that applies these variables to the mobile-first layout.
- **`css/index-desktop.css`**: Contains desktop-specific overrides and layout adjustments (min-width: 768px).

Key variables include:

- `--page-background`: The main dark background color (#101010).
- `--text-primary`: The primary text color (#ffffff).
- `--tint-purple`: The accent purple color used for highlights and buttons.
- `--display-type`: The font family for headings ('Permanent Marker').

## Workflow

1. **Design:** The website concept was first designed in Figma to get a clear idea of the project's look and feel.
2. **Inspect:** The Figma design was handed off to Zeplin for easy inspection of HTML elements and styles.
3. **Build:** The website was built using HTML and CSS, following a mobile-first approach.
4. **Publish:** The project was published to GitHub Pages, hosted on this repository.

## Tools Used

- **HTML**
- **CSS** (Variables, Flexbox, Grid)
- **Figma**
- **Zeplin**
- **GitHub Pages**

## Future Updates

- Add more projects to the portfolio.
- Add a blog section to share articles and tutorials.
- Make the contact form functional using a backend service.
- Add animations and transitions to improve the user experience.
