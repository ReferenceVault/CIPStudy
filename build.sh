#!/bin/bash


echo "🔄 Pulling latest code..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building project..."
npm run build


echo "📤 Exporting static files..."
#npm run export

echo "📂 Copying files to nginx root..."
#rm -rf /var/www/CipStudy/frontend/out/*
#cp -r out/* /var/www/CipStudy/frontend/out/
