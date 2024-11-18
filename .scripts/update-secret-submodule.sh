#!/bin/bash

# Ensure the SECRET_SUBMODULE_PAT environment variable is set
if [ -z "$SECRET_SUBMODULE_PAT" ]; then
  echo "Error: The SECRET_SUBMODULE_PAT environment variable is not set."
  exit 1
fi

# Name of the submodule to update
SUBMODULE_NAME="secrets"

AUTH_URL="https://$SECRET_SUBMODULE_PAT@github.com/berachain/internal-dapps-env.git"

rm -rf secrets

# Update the submodule URL using git commands
git submodule set-url secrets "$AUTH_URL"

# Sync and update the submodule in the Git repository
git submodule sync "$SUBMODULE_NAME"
git submodule update --init --recursive

# echo "The URL of the submodule '$SUBMODULE_NAME' has been updated to '$AUTH_URL'."