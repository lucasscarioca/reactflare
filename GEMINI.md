# ReactFlare SaaS Project

This file serves as a guide and tracker for the development of the ReactFlare SaaS template project.

## Development Guidelines

- **Package Management:** Always use `bun` for installing packages (`bun add <package>`) and running scripts (`bun run <script>`).
- **UI Components:** Use the `shadcn-ui` CLI for adding new components (`bunx shadcn-ui@latest add <component>`).
- **Code Quality:** After any code modifications, run `bun run lint:fix` to ensure the code adheres to the project's linting rules.
- **External Documentation:** When necessary, refer to the official documentation for key technologies used in this project, including but not limited to:
    - Hono.js
    - TanStack Router & Query
    - Drizzle ORM
    - Cloudflare Workers, D1, R2, etc.
    - shadcn/ui
    - Better Auth
    - Stripe

## Project Overview

This is a SaaS template project built with a modern, full-stack TypeScript setup. The goal is to create a robust and scalable foundation for building SaaS applications. The project utilizes a React frontend with Vite and a Cloudflare Worker backend with Hono.

## Technology Stack

- **Frontend:** React, Vite, TanStack Router, TanStack Query, Tailwind CSS, Radix UI (via shadcn/ui).
- **Backend:** Cloudflare Workers, Hono.
- **Database:** DrizzleORM, Cloudflare D1.
- **Payments:** Stripe.
- **Authentication:** Better Auth.
- **Tooling:** TypeScript, ESLint, Husky, Vite, Wrangler, Bun.

## Development Roadmap

- [ ] **1. Authentication & Routing:**
    - [x] Create a `login` page.
    - [x] Create a `register` page.
    - [x] Create a `forgot-password` page.
    - [x] Update the `Sign In` and `Sign Up` buttons on the landing page to use the TanStack Router `<Link>` component to navigate to the `/login` and `/register` routes.
    - [ ] Integrate `better-auth` to handle the actual authentication logic for login, registration, and password reset.
    - [ ] Implement route protection to make `/dashboard` accessible only to authenticated users.
    - [ ] Redirect authenticated users from the landing page and auth pages to the dashboard.

- [ ] **2. Dashboard & Layout:**
    - [ ] Create a unified and persistent layout for all authenticated routes (e.g., dashboard, settings, etc.) to ensure a consistent user experience.
    - [ ] Refine the dashboard navigation and sidebar to be more dynamic and user-specific.

- [ ] **3. Database & User Management:**
    - [ ] Set up and configure a Cloudflare D1 database.
    - [ ] Integrate Drizzle ORM and define a schema for `users`.
    - [ ] Connect the authentication flow to the database, creating a new user record upon sign-up.
    - [ ] Fetch and display user-specific data in the dashboard.

- [ ] **4. Billing & Subscriptions with Stripe:**
    - [ ] Integrate Stripe for payment processing.
    - [ ] Create a billing page where users can select and manage their subscription plans.
    - [ ] Use Stripe webhooks to keep subscription statuses in sync with the database.

- [ ] **5. Advanced Cloudflare Features:**
    - [ ] Integrate Cloudflare R2 for user-specific file storage.
    - [ ] Use Cloudflare KV for caching application data or managing feature flags.
    - [ ] Explore Cloudflare AI and Durable Objects for more advanced functionalities as outlined in the `README.md`.

- [ ] **6. Deployment:**
    - [ ] Create a GitHub Actions CI/CD workflow to automatically deploy the application to Cloudflare.