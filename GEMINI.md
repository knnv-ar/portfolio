# Project Documentation: Raúl Federico Lacabanne Portfolio

This document provides a comprehensive technical overview of the portfolio website for **Raúl Federico Lacabanne (KNNV)**. It details the project's structure, files, styles, interactive behaviors, and content architecture.

---

## 📂 Project Directory Structure

Below is the layout of the project files and directories:

*   [index.html](file:///D:/code/portfolio/index.html) — The entry point of the website containing the main HTML structure and sections.
*   [style-guide.md](file:///D:/code/portfolio/style-guide.md) — The styling and design specifications (fonts, typography scale, baseline colors).
*   [README.md](file:///D:/code/portfolio/README.md) — Standard README with color palette and project inspiration credit.
*   [index.txt](file:///D:/code/portfolio/index.txt) — Original raw outline, wireframe planning, and drafts for sections.
*   [favicon.svg](file:///D:/code/portfolio/favicon.svg) — Site icon.
*   `assets/` — Folder containing static resources:
    *   [assets/css/style.css](file:///D:/code/portfolio/assets/css/style.css) — Custom stylesheet containing resets, layout rules, and responsiveness media queries.
    *   [assets/js/script.js](file:///D:/code/portfolio/assets/js/script.js) — Interactive scripting for navbar, skills tabs, and theme toggling.
    *   `assets/images/` — Image assets (logos, background images, and project thumbnails).

---

## 🛠️ Technology Stack

1.  **HTML5**: Semantic layout.
2.  **CSS3 (Vanilla)**: Features responsive styling, grid/flexbox layouts, CSS variables, and dark/light theme options.
3.  **JavaScript (ES6+)**: Custom vanilla scripting for UI state management.
4.  **Ionicons**: CDN-delivered icon pack.
5.  **FormSubmit**: Dynamic contact form handler.

---

## 🎨 Design System & Styles

The styles are defined in [style-guide.md](file:///D:/code/portfolio/style-guide.md) and implemented in [assets/css/style.css](file:///D:/code/portfolio/assets/css/style.css).

### 1. Typography
*   **Fonts**:
    *   `Poppins` (wght: 700) — Used for headers and strong titles.
    *   `Roboto` (wght: 400, 700) — Used for body text and descriptive UI.
    *   `Saira Stencil One` — Used for logo styling and decorative typography.
*   **CSS Variables**:
    *   `--ff-saira-stencil-one`
    *   `--ff-poppins`
    *   `--ff-roboto`

### 2. Colors
*   **Base Accent Colors**:
    *   `--raw-seinna`: `#d90429` (Dark Red - Primary Accent)
    *   `--sizzling-sunrise`: `hsl(51, 95%, 54%)` (Yellow Accent)
    *   `--scarlet`: `hsl(13, 96%, 47%)` (Deep Orange/Red)
    *   `--black`: `hsl(0, 0%, 0%)`
    *   `--white`: `hsl(0, 0%, 100%)`

### 3. Theme Modes (Dark & Light)
Theme properties are controlled dynamically by toggling classes on the `<body>` element:

| CSS Variable | Dark Mode (default: `body.dark_theme`) | Light Mode (`body.light_theme`) |
| :--- | :--- | :--- |
| `--bg-primary` | `hsl(0, 0%, 12%)` (Charcoal) | `hsl(0, 0%, 90%)` (Light grey) |
| `--bg-secondary` | `hsl(0, 0%, 19%)` (Medium charcoal) | `hsl(0, 0%, 100%)` (White) |
| `--color-primary` | `hsl(0, 0%, 100%)` (White) | `hsl(0, 0%, 12%)` (Charcoal) |
| `--color-secondary` | `hsl(0, 0%, 62%)` (Medium grey) | `hsl(0, 0%, 37%)` (Dark grey) |
| `--card-shadow` | `hsla(0, 0%, 0%, 0.4)` | `hsla(0, 0%, 0%, 0.1)` |
| `--input-bg` | `hsl(0, 0%, 16%)` | `hsl(0, 0%, 93%)` |

---

## 🧭 Page Sections

The layout in [index.html](file:///D:/code/portfolio/index.html) consists of a single-page responsive design divided into sections:

### 1. Navigation Header
*   **Logo**: Imaged brand logo (`logo-knnv.png`) targeting the home/top anchor.
*   **Theme Toggle**: Button (`[data-theme-btn]`) displaying an animated sun/moon icon.
*   **Hamburger Button**: Toggles responsive navigation drawer on smaller viewports.
*   **Menu Items**: Links scroll smoothly to target anchors (`#home`, `#about`, `#skills`, `#portfolio`, `#contact`).

### 2. Hero Section (`#home`)
*   Responsive responsive banner image using `<picture>` with matching size assets:
    *   `hero-banner.png` (Desktop, width $\ge$ 768px)
    *   `hero-banner-md.png` (Tablet, width $\ge$ 500px)
    *   `hero-banner-sm.png` (Mobile)
*   Intro headline and "Get in Touch" primary CTA.
*   Social Links list (GitHub, LinkedIn, Twitter).

### 3. Stats Section (`#stats`)
Highlights key experience numbers:
*   **20+ years** of experience.
*   **30+ completed** projects.
*   **5+ remarkable** clients.

### 4. About Section (`#about`)
*   Profile picture (`about-banner.png`).
*   Descriptive summary detailing Raúl Federico Lacabanne's experience, passion for building clean web applications, and team collaboration.
*   Action links: "Hire me" (jumps to Contact) and "Go to Resume" (redirects to the external page `https://knnv-ar.github.io/resume/`).

### 5. Skills Section (`#skills`)
*   An interactive area split into two view configurations: **Skills** (development/languages) and **Tools** (software/environments).
*   **Technologies list includes**:
    *   *Skills*: GDScript, Godot Engine, GNU Bash, Git, HTML5, CSS3, Tailwind CSS, PHP, JavaScript, EJS, p5.js, Node.js, Express, React, Next.js, MySQL, MongoDB, Sequelize, Prisma, RESTful APIs, Markdown, Pure Data, Arduino, Ruby, Jekyll.
    *   *Tools*: GitHub, npm, RubyGems, VS Code, Trello, Slack, Moodle, Drupal, Joomla!, WordPress, Open Sound Control, XD, InDesign, Photoshop, Illustrator, Audition, Premiere, OBS Studio, Zoom.

### 6. Portfolio/Projects Section (`#portfolio`)
*   Grid of project cards linking to live websites or source code repositories, including:
    *   *Cursos Ley Micaela 2023* (MinCyT / Universidad Nacional de Quilmes)
    *   *la-piscine galería de arte* (GitHub)
    *   *Curso Ley Micaela 2022* (CONICET)
    *   *Observatorio Cono Sur*
    *   *Casus Belli Studio Corp.* & legacy versions
    *   *Rembrandt, the artist*
    *   *3rd Conference on "Urban Imaginaries"*
    *   *Priority Research Program "Aldea 21"*
    *   *municipio online prototypes*
    *   *Quilmes Town Hall Sketches*
    *   *La ciudad en.red.ada*

### 7. Contact Section (`#contact`)
*   Contact Info panel containing Location (Buenos Aires, Argentina), Phone number (`+54 9 11 5335 5152`), and links to profiles.
*   Form connected to **FormSubmit** API endpoint (`https://formsubmit.co/360947ae96a5da66bb47b6d054a95104`) with subject value `"New contacto KNNV!"`.

---

## ⚙️ Interactive Behaviors (JS Logic)

All custom interactions are managed in [assets/js/script.js](file:///D:/code/portfolio/assets/js/script.js).

### Main Functions and Event Listeners

1.  **Toggle Utility Helper**:
    ```javascript
    const toggleActive = (elem) => elem.classList.toggle("active");
    ```
    Toggles the `.active` class dynamically.

2.  **Sticky Header & Back to Top**:
    Detects scrolling on `window`. When scroll position exceeds $10\text{px}$:
    *   Adds `.active` class to the header for a sticky backdrop.
    *   Shows the "Go to Top" button (`[data-go-top]`).

3.  **Navbar Toggle**:
    Allows responsive toggling of mobile navigation menu. Prevents main body scrolling by toggling `active` class on the body.
    ```javascript
    navToggleBtn.addEventListener("click", () => {
      toggleActive(navToggleBtn);
      toggleActive(navbar);
      toggleActive(body);
    });
    ```

4.  **Skills/Tools Tabs Switching**:
    Listens to changes in the toggle buttons, shifting the layout to show either the languages or tools listing. It prevents duplicate toggling if the clicked tab is already active.
    ```javascript
    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) return;
        toggleActive(toggleBtnBox);
        toggleActive(skillsBox);
        toggleBtns.forEach((tab) => toggleActive(tab));
      });
    });
    ```

5.  **Dark/Light Mode persistence**:
    Theme state is stored in the browser's `localStorage` as `"theme"`.
    *   On load, reads `localStorage.getItem("theme")` (defaults to `"dark_theme"`).
    *   Uses a unified `applyTheme()` helper function to apply the class list adjustments and save state.

6.  **Navbar Auto-Close**:
    Nav link clicks invoke the globally exposed `closeNavbar()` function, which explicitly removes the `.active` class from the header elements and body scroll-lock.
    ```javascript
    const closeNavbar = () => {
      navToggleBtn.classList.remove("active");
      navbar.classList.remove("active");
      body.classList.remove("active");
    };
    ```
