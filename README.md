# Gulp Simple
This is starter template for HTML development.
It includes SCSS, JS and HTMLmin compilers. 
How to use: 
- `App` folder contains raw files that compiles to `Build` folder;
- All output files already are prefixed, minified and renamed;
- Task `script` consists of 2 tasks: 
> `scripts-libs` for libraries, that contains in `app/scripts/libs` folder where you can put your .js libraries, that compiles your custom js to `build/scripts/libs.min.js`
> and `scripts-main` that compiles your custom .js to `build/scripts/scripts.min.js`.
- Task `style` converts SCSS file `style.scss` to `build/styles/style.min.css`. 

Well, thats all. Enjoy! :D