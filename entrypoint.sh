#!/bin/sh

npm rebuild esbuild && yarn dev --host 0.0.0.0

exec "$@"
