# Project Structure Overview
src/
 └── app/
     ├── common_component/
     ├── core_services/
     │   └── icon.service.ts
     ├── pages/
     │   └── about/
     │       ├── about.component.html
     │       ├── about.component.scss
     │       ├── about.component.spec.ts
     │       └── about.component.ts
     ├── app.component.html
     ├── app.component.scss
     ├── app.component.spec.ts
     ├── app.component.ts
     ├── app.config.ts
     ├── app.routes.ts
 ├── assets/
 │   ├── images/
 │   └── svg-icons/
 │       ├── check.svg
 │       ├── facebook.svg
 │       ├── instagram.svg
 │       ├── linkedin.svg
 │       └── x.svg
 ├── index.html
 └── main.ts

 # Common Components (common_component/)

        1. Contains reusable UI components.

        2. Designed to be shared across multiple pages and features.

        3. Helps maintain consistency and reduce duplication.

 # Core Services (core_services/)

        icon.service.ts

            Centralized service to manage SVG icons.

            Loads and registers SVG icons from assets/svg-icons.

            Promotes reusability and performance optimization.

        Use Case:

        Injected wherever icons are required (e.g., buttons, headers).

# Pages Module (pages/)

            About Page (pages/about/)

            Feature-specific folder structure.

            Contains:

                    about.component.ts – Component logic

                    about.component.html – UI template

                    about.component.scss – Styling

                    about.component.spec.ts – Unit tests

            This pattern supports lazy loading and feature isolation.

# Root Application Files
            app.component.*

            Root component of the application.

            Acts as the main layout/container.

            app.routes.ts

            Defines application routes.

            Enables navigation between pages like /about.

            app.config.ts

            Centralized application-level configuration.

# Assets Management (assets/)
            SVG Icons (assets/svg-icons/)

            Stores scalable vector icons.

            Icons such as Facebook, Instagram, LinkedIn, etc.

            Used via IconService for consistency and performance.

            Images (assets/images/)

            Reserved for static image assets.

# Bootstrap Files

            main.ts – Application entry point.

            index.html – Root HTML file where Angular mounts.
