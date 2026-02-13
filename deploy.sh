#!/bin/bash




echo "🔍 Testing nginx config..."
sudo nginx -t

echo "🔁 Reloading nginx..."
sudo systemctl reload nginx

echo "✅ Deployment completed successfully!"

