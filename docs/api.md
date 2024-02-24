# Application Programming Interface

Application Programming Interface ( API ) is a piece of code that allows different applications to communicate with each other and share information and functionality

## Asynchronous JavaScript And XML

The appeal of AJAX is its "asynchronous" nature, which means that it can communicate with the server, exchange data and update the page without having to reload the browser.

[XMLHttpRequest ( XHR )](/api/ajax/xhr.js) is a special JavaScript object that allows asynchronous HTTP requests ( AJAX ) to be made natively from JavaScript.

[Fetch](/api/ajax/fetch.js) is the name of a new API for Javascript with which we can make asynchronous HTTP requests using promises and in a way that makes the code a little simpler.

[Axios](/api/ajax/axios.js) Promise-based library for making requests in Node or in browsers.

```HTML
<head>
  <!-- Axios -->
  <script
    src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"
    defer
  ></script>
</head>
```

## Representational State Transfer

The REST service is a set of constraints with which we can create a software architecture style, which we can use to create web applications respecting the HTTP protocol.

Initialize the folder to be used.

```bash
npm init -y
```

Install dependencies.

```bash
npm install -S express
```

To execute the API we use node

```bash
node .\api.js
```

Use the [rapidAPI client](https://marketplace.visualstudio.com/items?itemName=RapidAPI.vscode-rapidapi-client) extension to send requests.
