#!/bin/bash

set -e

##
## Tag releases manually.
##
#TAG=$(grep '<em:version' install.rdf | sed -e 's/.*>\(.*\)<.*/\1/' | sed -e 's/\.SOURCE//')
#git tag $TAG
#git push --tags

SOURCE_REPO_URL="https://github.com/Juris-M/zotero"
CI_ZIP="ci/client"

branch="jurism-5.0"

HASH=$(git ls-remote --exit-code $SOURCE_REPO_URL $branch | cut -f 1)

git checkout $HASH

rm -fR build

node ./scripts/build.js

cd build

zip -r $HASH.zip *

cd ..

node ./deployer/index.js -u ./build/"$HASH.zip" "$CI_ZIP"/"$HASH.zip"

rm ./build/"$HASH.zip"

git checkout jurism-5.0
