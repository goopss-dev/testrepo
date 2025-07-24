#!/bin/bash
# Quick deploy script
git add .
git commit -m "Updated video gallery - $(date)"
git push

echo "✅ Changes pushed to GitHub!"
echo "🚀 Site will update automatically in 1-2 minutes"
echo "📱 GitHub Pages: https://goopss-dev.github.io/testrepo"