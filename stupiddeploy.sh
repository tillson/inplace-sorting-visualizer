rm ../sort-homework-build/*
rm -rf ../sort-homework-build/static
yarn build
mv ./build/* ../sort-homework-build/
cd ../sort-homework-build
mv index.html index.php
echo "Ready for deployment."
