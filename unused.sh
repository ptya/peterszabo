#!/bin/bash
files="$(git ls-files ./src)"
for file in $files
    do
        git grep $(basename "$file" .js) > /dev/null || echo "would remove $file"
    done
echo "done"