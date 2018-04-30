# Example Smart Widget UI (Angular)

[TODO: Description of your widget]

[TODO: link to corresponding bff repo]

[TODO: screenshot of your widget]

There is a demo app, see below for instructions on running it.

## How to use

### Installing

Copy the .npmrc file from this repo to your local repo to set up the link to nexusrepo.antwerpen.be npm repository.

Then install (you will need to be connected to the Digipolis network):

```sh
> npm install @acpaas-ui-widgets/ngx-example
```

Import the component in your module:

```ts
@NgModule({
  imports: [
    ...,
    ExampleModule
  ],
  ...
})
```

In the index.html, include the core branding stylesheet:

```html
<link rel="stylesheet" href="https://cdn.antwerpen.be/core_branding_scss/2.0.1/main.min.css">
```

In your template:

```html
<aui-example></aui-example>
```

Supported attributes:

[describe component attributes here]

Events:

[describe component events here]

## Run the demo app

Set up the .npmrc (see above), then run:

```sh
> npm install
> npm start
```

Browse to [localhost:4200](http://localhost:4200)

To use the example app, you will need to have also started the corresponding back-end service.

## Contributing

We welcome your bug reports and pull requests.

Please see our [contribution guide](CONTRIBUTING.md).

## License

This project is published under the [MIT license](LICENSE.md).
