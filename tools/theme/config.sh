#!/bin/bash
# Update all assets into the assets folder

set -o errexit

THEME=$1

if [ -z "$THEME" ]; then
  THEME="10"
fi

echo "Using theme [${THEME}]:"

ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." && pwd )"

THEMEROOT="themes/${THEME}"

pushd "$ROOT" >/dev/null

  rm -rf .nuxt/ .output/

if [ -d "$THEMEROOT" ]; then
    echo "Theme directory [$THEMEROOT] exists."
else
    echo "Theme ${THEME} does not exist."
    exit 1
fi

  sed 's#${theme}#'$THEMEROOT'#g;w nuxt.config.ts' .nuxt.config.template >/dev/null
  echo "🎉 Genetated nuxt.config.ts with theme [${THEME}]"

popd >/dev/null