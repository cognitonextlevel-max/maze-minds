# Maza Minds Tutor - Marketing Website

Next.js 14 marketing website for Maza Minds Tutor, featuring a 3D animated hero section, smooth scrolling, and dynamic Framer Motion interactions.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS + shadcn/ui
- Three.js + React Three Fiber + Drei (3D Hero)
- Framer Motion (Animations)
- Lenis (Smooth Scroll)
- React Parallax Tilt (Mentor Cards)

## Local Development

Since we are using App Router, make sure you have Node.js 18.17+ installed.

1. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Note: This project requires `react-parallax-tilt`, `class-variance-authority`, `@radix-ui/react-slot` which are included in the package.json. Run `npm install` to get everything).*

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Vercel

This project is fully ready for zero-config Vercel deployment.

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project into your Vercel dashboard.
3. Vercel will automatically detect Next.js and use the optimal build settings (`npm run build` and output directory `.next`).
4. Click **Deploy**.

*The `vercel.json` file is included at the root to ensure standard Next.js build steps are strictly enforced.*
