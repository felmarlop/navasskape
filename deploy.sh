#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# deploy to a custom domain
echo 'navasskape.online' > CNAME

if [[ ! -d "./.git" ]]
then
  echo "Initializing git..."
  git init
fi

git add -A
git commit -m "new deployment `date +'%d-%m-%Y %H:%M'`"

# push to gh-pages branch
git push -f https://github.com/felmarlop/navasskape.git master:gh-pages

cd -