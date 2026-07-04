# AI Agents Guide (`AGENTS.md`)

Welcome, AI Agents! This document provides essential context, constraints, and instructions for operating within this repository. Please adhere to these guidelines to ensure consistency and correctness while working on this codebase.

## 📁 Repository Architecture

This project uses a monorepo structure currently focused on a frontend React application.
- **Frontend Workspace:** Located in the `./client` directory. It uses **Vite**, **React**, and **TypeScript**.
- **Deployment Strategy:** Automated via GitHub Actions (`.github/workflows/deploy.yml`). Pushes to the `master` branch trigger a build process that deploys the `client/dist` output to the `gh-pages` branch.
- **Custom Domain:** `krishnamurti.dev` (Configured via `client/public/CNAME`).

## 🤖 Core Directives for Agents

1. **Context Awareness:** When working on frontend features or dependencies, always set your working directory to `./client`. Do not run frontend commands from the root.
2. **Build System:** We use Vite. 
   - Development server: `npm run dev`
   - Production build: `npm run build` (Outputs to `dist/`, not `build/`).
3. **Package Manager:** Use `npm` exclusively within the `./client` directory for dependency management.
4. **CI/CD Constraints:** Do not add deployment scripts (e.g., `gh-pages` CLI tools) to `package.json`. Deployment is strictly handled by the GitHub Actions workflow.
5. **Styling & Aesthetics:** Prioritize modern, premium web design. Utilize the existing CSS structure or Tailwind setup (if present) inside the client workspace to deliver rich, responsive UI components.

## 🛠️ Common Commands

When proposing terminal commands, ensure you navigate to the correct directory:

- **Install dependencies:** `cd client && npm install`
- **Add a new package:** `cd client && npm install <package>`
- **Run linter:** `cd client && npm run lint`
- **Test production build:** `cd client && npm run build && npm run preview`
