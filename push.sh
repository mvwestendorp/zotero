#!/bin/bash

set -e

##
## Tag releases manually.
##
#TAG=$(grep '<em:version' install.rdf | sed -e 's/.*>\(.*\)<.*/\1/' | sed -e 's/\.SOURCE//')
#git tag $TAG
#git push --tags

if [ "" = "$1" ]; then
  echo Set branch name as first argument
  exit 1
fi

BRANCH="$1"

SOURCE_REPO_URL="https://github.com/Juris-M/zotero"
CI_ZIP="ci/client"

branch="$BRANCH"

HASH=$(git ls-remote --exit-code $SOURCE_REPO_URL $branch | cut -f 1)

if [ "" = "$HASH" ]; then
	echo Remote branch does not exist, apparently
	exit 1
fi

git checkout $HASH

rm -fR build

node ./scripts/build.js

cd build

zip -r $HASH.zip *

cd ..

node ./deployer/index.js -u ./build/"$HASH.zip" "$CI_ZIP"/"$HASH.zip"

rm ./build/"$HASH.zip"

git checkout "$BRANCH"

echo "Pushed $HASH"
