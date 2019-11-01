# Gulp Lightweight
This is starter template for HTML development.
It includes Sass/SCSS, JS, HTML and images compilers. 

### How to use: 
All output files already are compressed, prefixed, minified and renamed.
1. Your work folder - `./build`.
2. `app` folder contains raw files that converts and outputs to `build` folder, so you should work with `Build` folder when type paths to the files;
3. Gulp's tasks are in `gulp` folder. I decided to split up tasks to several files. If you want change tasks - go to the folder.
4. There are 5 initial tasks: 
  * `scripts`, 
  * `styles`, 
  * `html`, 
  * `server` 
  * `images`.
5. Task `scripts` consists of 2 tasks: 
* `scripts-libs` for libraries, that contains in `app/scripts/libs` folder where you can put your .js libraries, that compiles your custom js to `build/scripts/libs.min.js`
* `scripts-main` that compiles your custom .js to `build/scripts/scripts.min.js`.
6. Task `style` converts Sass/SCSS file `style.{scss, sass}` to `build/styles/style.min.css`. 
7. Task `images` compress all image .png/.jpg/.jpeg types and converts to .webp format.

### StyleLint
I included StyleLint and its' plugins for better code accuracy and unified style guide. Plugins that were used:
`stylelint, stylelint-config-htmlacademy, stylelint-config-rational-order, stylelint-order`.
To use Linter you should write: 
- `npm run style:lint` to see the necessary changes according to Linter's config 
- `npm run style:fix` to fix the issues.

Well, thats all. Enjoy! :D