#!/bin/bash
# only set for files under ./src
# it will list MD files but no worries there
files="$(git ls-files ./src)"
for file in $files
    do
        git grep $(basename "$file" .js) > /dev/null || echo "would remove $file"
    done
echo "done"