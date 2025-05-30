# Production-Ready Vite + React + TypeScript Starter Template

This template provides a robust foundation for building modern, mobile-first web applications using React 19, Vite, TypeScript, and Tailwind CSS. It's configured with industry-standard tooling for linting, testing, and error handling, aiming to accelerate development and ensure high-quality code.

## Overview

This starter template is designed to get you up and running quickly with a feature-rich development environment. It emphasizes best practices, including responsive design, accessibility considerations, and a secure setup.

**Core Stack:**

*   **React 19:** Leverages the latest React features for building dynamic user interfaces.
*   **Vite:** Provides a blazing-fast development server and optimized build process.
*   **TypeScript:** Enhances code quality and maintainability with static typing.
*   **Tailwind CSS:** A utility-first CSS framework for rapid, responsive UI development.

## Features

This template comes pre-configured with:

*   **Modern Frontend Stack:** React 19, Vite, and TypeScript.
*   **Responsive Design:** Tailwind CSS setup for easy mobile-first development. Example usage in `src/App.tsx`.
*   **Comprehensive Linting & Formatting:**
    *   ESLint with recommended rules for JavaScript, TypeScript, React, and React Hooks.
    *   `eslint-plugin-jsx-a11y` for accessibility checks.
    *   `eslint-plugin-tailwindcss` for linting Tailwind CSS class usage.
    *   Prettier for consistent code formatting, integrated with ESLint.
*   **Unit Testing:**
    *   Vitest configured for fast and efficient unit and component testing.
    *   Includes `@testing-library/react` for React component testing.
    *   Sample tests for `App.tsx` are provided in `src/App.test.tsx`.
    *   Setup file `src/test/setup.ts` for global test configurations (e.g., `jest-dom` matchers).
*   **Environment Variables:**
    *   `.env.example` provided as a template.
    *   Support for `VITE_` prefixed environment variables, accessible via `import.meta.env`.
*   **Error Handling:**
    *   A React `ErrorBoundary` component (`src/components/ErrorBoundary.tsx`) is implemented to catch and handle runtime errors gracefully, preventing UI crashes.
*   **Basic Security:**
    *   Security-related HTTP headers (CSP, X-Content-Type-Options, etc.) added via `index.html` meta tags.
*   **Mobile-First Example:** The initial example in `src/App.tsx` has been replaced by the E-commerce Dashboard itself, which is built with mobile-first principles.
*   **Path Aliases:** `@/*` alias configured to `src/*` for cleaner import paths.
*   **E-commerce Dashboard Example:**
    *   A comprehensive dashboard interface is implemented as the primary example application.
    *   **Layout:** Features a responsive `DashboardLayout` with a collapsible sidebar (mobile-friendly) and a main content area.
    *   **Header:** Includes a dynamic title and placeholder controls (language, notifications, user profile) with a burger menu for mobile sidebar toggle.
    *   **Sidebar:** Contains a logo, section titles, and a list of static navigation items with icons.
    *   **Overview Page (`src/pages/OverviewPage.tsx`):** This is the main page displayed, showcasing various data visualization cards:
        *   **KPI Cards:** Displaying "Total Profit", "Total Orders", and "Impressions" with indicators and icons.
        *   **Sales Trend Chart:** A placeholder card for a line chart.
        *   **Sales Target Card:** Displays target progress with a circular progress bar (SVG).
        *   **Top Products List:** Shows a list of products with units sold and percentage change.
        *   **Top Countries List:** Includes a world map placeholder and a list of countries with sales percentages shown via progress bars.
        *   **Channel Revenue Card:** Displays revenue distribution by channel using horizontal progress bars.
    *   **Iconography:** Utilizes `lucide-react` for clear and consistent icons throughout the dashboard.
    *   **Accessibility:** Incorporates basic accessibility features like ARIA labels for icon-only buttons and focus management.
    *   Built with React, TypeScript, and Tailwind CSS, demonstrating the template's capabilities.

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm (v9.x or later) or yarn

### Installation

1.  Clone the repository (or use this template to create a new one):
    ```bash
    # Example: git clone <repository-url> your-project-name
    cd your-project-name
    ```
2.  Install NPM packages:
    ```bash
    npm install
    ```

### Development

*   **Running the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`.

*   **Building for production:**
    ```bash
    npm run build
    ```
    This command bundles the application into the `dist` directory for deployment.

*   **Previewing the production build:**
    ```bash
    npm run preview
    ```
    This command serves the `dist` folder locally to preview the production build.

### Testing and Quality Assurance

*   **Running unit tests:**
    ```bash
    npm run test
    ```
    This will execute tests using Vitest. Use `npm run test:ui` to open the Vitest UI.

*   **Linting files:**
    ```bash
    npm run lint
    ```
    To automatically fix linting issues:
    ```bash
    npm run lint -- --fix
    ```

*   **Formatting code:**
    ```bash
    npm run format
    ```
    This runs Prettier to format all project files.

## Environment Variables

This project uses environment variables for configuration. Vite exposes environment variables prefixed with `VITE_` on the `import.meta.env` object.

1.  Create a `.env` file by copying `.env.example`:
    ```bash
    cp .env.example .env
    ```
2.  Modify the `.env` file to include your specific configuration values (e.g., API URLs, application titles).
    ```env
    VITE_API_URL="http://yourapi.com/api"
    VITE_APP_TITLE="My Awesome App"
    ```
    **Note:** Only variables prefixed with `VITE_` will be exposed to your client-side code.

## Folder Structure

Here's a brief overview of the key directories:

*   `public/`: Contains static assets that are copied directly to the `dist` root (e.g., `favicon.ico`, `robots.txt`).
*   `src/`: Contains all the application source code.
    *   `components/`: Reusable React components (e.g., `ErrorBoundary.tsx`).
    *   `lib/`: Utility functions or libraries.
    *   `test/`: Test configuration files (e.g., `setup.ts`) and potentially integration tests.
    *   `App.tsx`: The main application component.
    *   `main.tsx`: The entry point of the application.
    *   `index.css`: Global styles and Tailwind CSS imports.
*   `dist/`: The output directory for production builds (generated by `npm run build`).

## Contributing

Contributions are welcome! If you have suggestions or improvements, please follow these steps:

1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

This project is licensed under the MIT License. (Consider adding a `LICENSE` file to the repository if one doesn't exist).

---

Happy Coding!
