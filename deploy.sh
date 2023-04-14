#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# deploy to a custom domain
echo 'navasskape.online' > CNAME

git init
git add -A
git commit -m 'new deployment'

# push to gh-pages branch
git push -f https://github.com/felmarlop/navasskape.git master:gh-pages

cd -