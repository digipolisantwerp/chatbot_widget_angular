# Smart Widget UI Starter Kit (Angular)

This is a starter kit for building the Angular 5+ front-end for an ACPaaS UI Smart Widget. To learn more about Smart Widgets and find out the guidelines for how to use this starter kit, see the [Smart Widget index page](https://github.com/digipolisantwerp/smart-widgets).

To build a new widget front-end:

1. Clone this repo.

   `git clone https://github.com/digipolisantwerp/starter-kit_widget_angular.git`

2. Implement your widget in the `src` folder.

3. Implement an example for your widget in the `example` folder

   - If your widget can be used with and without a BFF, please include an example of both.

4. Write some tests for your widget by adding `.spec.ts files` in the src folder.

   - Test using `npm test` to run once, and `npm run test-watch` to run in watch mode.

5. Update all the relevant files to replace the references to `starter-kit`, `Starter Kit` and `example`.

   - `package.json`: ACPaaS UI components you depend on should go into `dependencies`
   - `.angular-cli.json`
   - Any other files that contain the above mentioned words...
   - Delete `package-lock.json` and run `npm install` to regenerate it.

6. Place appropriate README.md and CONTRIBUTING.md files.

   - Replace `README.md` by `README.example.md` and edit it.
   - Replace `CONTRIBUTING.md` by `CONTRIBUTING.example.md` and edit it.

7. Push your widget to a new repo.

8. Follow the instructions from the [Smart Widgets contributing page](https://github.com/digipolisantwerp/starter-kit_widget_angular/blob/master/CONTRIBUTING.md) to notify Digipolis about your widget and get it published.

## License

This project is published under the [MIT license](LICENSE.md).
