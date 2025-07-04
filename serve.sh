#!/bin/bash
# Simple script to serve your portfolio website

echo "🚀 Starting Triston's Portfolio Website..."
echo "📂 Serving from: $(pwd)/out"
echo "🌐 Open your browser to: http://localhost:8080"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

cd out
python3 -m http.server 8080