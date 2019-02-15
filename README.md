# kim-api

![](https://img.shields.io/npm/v/kim-api.svg?style=for-the-badge) ![](https://img.shields.io/github/repo-size/lieuwe-berg/kim-api.svg?style=for-the-badge)

An API-wrapper for [Kie's Image Machine](https://kim.kieranhowland.co.uk/) (kim). Completely anonymous image hosting.

* Unlimited image uploads
* No api key required
* No config files required
* Built on [request](https://npmjs.org/package/request)

> kim supports the following file extensions: `png`, `jpg`, `jpeg`, `gif`

---

Uploading an image to kim.
```js
// require kim-api
const kim = require('kim-api');
const path = require('path');

// upload
kim.upload(path.join(__dirname, 'image.png'))
    .then(img => {
        console.log(img.url);
    })
    .catch(err => {
        // ...
    })
```

## Installation

npm
```
$ npm install kim-api
```

yarn
```
$ yarn add kim-api
```

## Methods

### *.upload(file)*

Upload an image to kim. Returns a promise.

Example response:

```json
{
    "status":"success",
    "data":{
        "image_id":"DQNMMxSm8SbYSJVt15cecbke8LqsidfE",
        "filetype":"png"
    },
    "url": "https://kim.kieranhowland.co.uk/uploads/DQNMMxSm8SbYSJVt15cecbke8LqsidfE/"
}
```

### *.datauri(imageID)*

Get the datauri of an image uploaded to kim. Returns a promise.

Example response:

```json
{
    "status":"success",
    "data": {
        "uri":"data:image/png;base64,iVBORw0..."
    }
}
```

### *.uploads()*

Get the total amount of images uploaded to kim. Returns a promise.

Example response:

```json
{
    "status":"success",
    "data":{
        "uploads": 4627
    }
}
```

## Errors
If there's an error on kim server-sided, an Error will be thrown.

```js
Error: kim-api error: recieved status code 400 - invalidFileExtension
    // stack trace ...
```

If not all arguments required for a method are provided, a TypeError will be thrown.

```js
TypeError: No image provided.
    // stack trace ...
```

`.catch()` these errors to prevent UnhandledPromiseRejectionWarnings.