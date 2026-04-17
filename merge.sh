#!/bin/bash
echo 'Starting Build Process'

cat ./build/header.html > ./build/index.html
cat ./css/*.css >> ./build/index.html
cat ./build/css.html >> ./build/index.html
cat ./javascript/*.js >> ./build/index.html
cat ./build/footer.html >> ./build/index.html

echo 'Build done'