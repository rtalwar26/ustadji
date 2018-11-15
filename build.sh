#!/usr/local/bin/zsh
rm -rf .cache
npm run build
mv dist docs
git add .
git commit -am "update build"
git push