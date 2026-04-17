#!/bin/bash
echo 'Starting Build Process'

cat ./build/header.html > index.html
cat ./css/*.css >> index.html
cat ./build/css.html >> index.html
cat ./javascript/*.js >> index.html
cat ./build/footer.html >> index.html

echo 'Build done'