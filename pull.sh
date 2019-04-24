#!/bin/bash

set -e

SOURCE_REPO_URL="https://github.com/Juris-M/assets/releases/download"
CI_ZIP="ci/client"

branch="jurism-5.0"

# Get the hash to pull (required)

HASH=$1

if [ "$HASH" == "" ]; then
	echo "Usage: ./pull.sh <HASH>"
	exit 1
fi

# Then

rm -fR build

mkdir build

echo Fetching: "$SOURCE_REPO_URL"/"$CI_ZIP"/"$HASH.zip"

cd build

wget -q --show-progress "$SOURCE_REPO_URL"/"$CI_ZIP"/"$HASH.zip"

unzip "$HASH.zip"

rm "$HASH.zip"

cd ..

echo "Hash is: $HASH"
