# Chatbot Smart Widget UI (Angular)

With the chatbot smart widget you can simply implement a chatbot in any page.

You will also need the BFF package in order to get the chatbot smart widget to work: [http://github.com/TriangleJuice/chatbot_service_nodejs](http://github.com/TriangleJuice/chatbot_service_nodejs)

<img src="screenshot.png" alt="Chatbot screenshot" style="max-width:410px;width:100%">

There is a demo app, see below for instructions on running it.

## How to use

### Installing

Copy the .npmrc file from this repo to your local repo to set up the link to nexusrepo.antwerpen.be npm repository.

Then install (you will need to be connected to the Digipolis network):

```sh
> npm install @acpaas-ui-widgets/ngx/chatbot
```

Import the component in your module:

```ts
@NgModule({
  imports: [
    ...,
    ChatbotModule
  ],
  ...
})
```

In the index.html, include the core branding stylesheet:

```html
<link rel="stylesheet" href="https://cdn.antwerpen.be/core_branding_scss/2.1.1/main.min.css">
```

### In your template

```html
<aui-chatbot
  url="http://localhost:3000/api/bff"
  session="123456789"
  title="My chatbot"
  placeholder="Typ your message here…"
  [pinned]="false"
  [delay]="200"
  [height]="400">
</aui-chatbot>
```

### Supported attributes

#### **url**
*string* - BFF URL

#### **session**
*string* - Required session ID to easily retrieve the chat history if necessary

#### **title**
*string* - Title above the chat window

#### **pinned**
*boolean* - Whether the chatbot is inline or pinned to the bottom of the application

#### **placeholder**
*string* - Placeholder string in the chat input field

#### **delay**
*number* - Delay between multiple messages received from the chatbot engine

#### **height**
*number* - Height of the chatbot in pixels


## Run the demo app

Set up the .npmrc (see above), then run:

```sh
> npm install
> npm start
```

Browse to [localhost:4200](http://localhost:4200)

To use the chatbot widget, you will need to have also started the corresponding back-end service.

## Contributing

We welcome your bug reports and pull requests.

Please see our [contribution guide](CONTRIBUTING.md).

## License

This project is published under the [MIT license](LICENSE.md).
