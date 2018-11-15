#!/usr/local/bin/zsh

npm run build
mv dist docs
git add .
git commit -am "update build"
git push