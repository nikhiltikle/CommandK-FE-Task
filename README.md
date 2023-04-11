# CommandK Test Task

This application provides a keyboard shortcut library with following features:

1. Allow any component to bind/unbind shortcuts
2. Any component can provide a key combination and a callback to be triggered when the key is pressed
3. This stores all the active shortcuts which helps users to navigate through keyboard, we can show this in help section

You can access the application [here](https://madhavkabra.github.io/CommandK-Test-task/)

## Requirment to run the application

You must have installed Node Package Manager(npm)

## How to run the application

In the project directory,

1. Run `npm install`, this installs required packages
2. Run `npm start`, this runs application in development mode.Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Additional Information

1. To store the shortcut combos at component mounting time we store the value of combo as object to carry additional info like(description and component name). We are storing this only for presentation purpose
2. To de-register the combo we can access `combo-keys` from the store using `Object.keys(shortcuts)`

## Limitations

1. We tried to install [keypress.js](http://dmauro.github.io/Keypress/) as module by both file and github and it is installing, but when we try to access it in the code, it throws the below error:

```
Uncaught TypeError: Cannot read properties of undefined (reading 'Listener')
```

Although, I can solve this error, but due to limited time I import `keypress.js` using script in `index.html` file
