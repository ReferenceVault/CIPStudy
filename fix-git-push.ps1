# Run this OUTSIDE Cursor: close Source Control, then open a NEW PowerShell window.
# Removes foundervedio.mp4 from Git history so you can push to GitHub.

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "1. Soft reset to before the large file was added..." -ForegroundColor Cyan
git reset --soft dfb692b
if ($LASTEXITCODE -ne 0) { exit 1 }

Write-Host "2. Unstaging public/foundervedio.mp4..." -ForegroundColor Cyan
git reset HEAD -- public/foundervedio.mp4 2>$null

Write-Host "3. Staging other changes and committing..." -ForegroundColor Cyan
git add .
git commit -m "Changes till Jan 26th (founder video via YouTube placeholder)"

Write-Host "4. Force pushing to Jan4CIPS..." -ForegroundColor Cyan
git push origin Jan4CIPS --force

Write-Host "`nDone. Push should have succeeded." -ForegroundColor Green
