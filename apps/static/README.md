# @kth/static

Static files for all KTH

---

Structure:

- `/src/` includes human-readable files or things that need to be compiled. For example Sass files
- `/dist/` includes files that are readable by a web browser and optimized for it. Images, fonts, svgs, minified CSS, etc.

The `/dist` directory can be served as static storage "as it is"

## Maintenance instructions

- The script `npm run build` creates the `/dist` directory and its contents from `/src/`.
- Generated files must include a hash of its content in its name to be able to invalidate cache.
- Make sure that any "build" script that you create manages dependencies and paths properly.
