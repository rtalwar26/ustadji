#!/usr/local/bin/zsh
export GITHUB_PUBLISH=true

rm -rf .cache
rm -rf docs
npm run build
mv dist docs
git add .
git commit -am "update build"
git push