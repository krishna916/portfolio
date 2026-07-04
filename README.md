# Portfolio Monorepo

This repository contains the source code for a portfolio web application and its deployment infrastructure. The frontend is built with React and Vite, and it is automatically deployed to GitHub Pages via GitHub Actions.

## Repository Structure

- `/client` - The main React frontend application.
- `/.github/workflows` - Contains the CI/CD pipeline (`deploy.yml`) for automated deployment.

## Tech Stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS (assumed based on standard modern React setups)
- **Node.js Version:** 20
- **CI/CD:** GitHub Actions
- **Hosting:** GitHub Pages

## Getting Started Locally

To run the frontend application on your local machine:

1. Make sure you have Node.js v20+ installed.
2. Navigate to the frontend directory:
   ```bash
   cd client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

Deployment is fully automated using GitHub Actions.

Whenever changes are pushed to the `master` branch and involve the `client/` directory, the [deploy.yml](.github/workflows/deploy.yml) workflow triggers automatically. It builds the Vite application and pushes the resulting `dist` folder to the `gh-pages` branch.

The application is deployed with a custom domain, configured via the `CNAME` file located in `client/public/CNAME`.
