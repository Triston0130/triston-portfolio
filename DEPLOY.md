# Deploy Your Portfolio Website

## Quick Deploy Instructions

### Option 1: Manual GitHub Deploy (Recommended)

1. **Go to GitHub.com** and create a new repository:
   - Repository name: `triston-portfolio`
   - Make it **Public**
   - Don't initialize with README (we already have files)

2. **Copy the repository URL** (should look like: `https://github.com/YOUR_USERNAME/triston-portfolio.git`)

3. **Run these commands** in your terminal:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/triston-portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Select your `triston-portfolio` repository
   - Click "Deploy"
   - Your site will be live in 30 seconds!

### Option 2: Netlify Deploy

1. Complete steps 1-3 above to push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign in with GitHub
4. Click "Add new site" → "Import an existing project"
5. Select your repository
6. Deploy!

## Your Website Features

✅ **Modern Design** - Purple/pink gradients, animations, glassmorphism
✅ **Responsive** - Works on mobile, tablet, desktop
✅ **Interactive** - Document uploads, contact forms, dark mode
✅ **Professional** - SEO optimized, fast loading
✅ **Content Management** - Easy to update your information

## Website URL
Once deployed, your website will be available at:
- Vercel: `https://triston-portfolio-YOUR_USERNAME.vercel.app`
- Netlify: `https://your-site-name.netlify.app`

## Updating Content
To update your resume/portfolio information:
1. Edit `/lib/portfolio-data.ts`
2. Commit and push changes
3. Your live site will automatically update!

---
Built with ❤️ using Next.js, TypeScript, and Tailwind CSS