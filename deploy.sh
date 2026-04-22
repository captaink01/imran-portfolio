#!/bin/bash
# ==============================================
# Deploy Angular Portfolio to GitHub Pages
# ==============================================

REPO_NAME="imran-portfolio"   # <-- Change to your actual GitHub repo name

echo "🔨 Building Angular app..."
ng build --configuration=production --base-href="/${REPO_NAME}/"

echo "📁 Copying build to docs/ folder..."
rm -rf docs
cp -r dist/imran-portfolio/browser docs

echo "📄 Adding 404.html for SPA routing..."
cp docs/index.html docs/404.html

echo "✅ Build complete! Files are in the docs/ folder."
echo ""
echo "Next steps:"
echo "  1. git add ."
echo "  2. git commit -m 'Deploy portfolio to GitHub Pages'"
echo "  3. git push origin main"
echo "  4. Go to GitHub repo → Settings → Pages"
echo "     → Source: Deploy from branch"
echo "     → Branch: main, Folder: /docs"
echo "  5. Your site will be live at:"
echo "     https://captaink01.github.io/${REPO_NAME}/"
