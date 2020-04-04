## FullStackOpen: [Part2c](https://fullstackopen.com/en/part2/getting_data_from_server) Exercises

## Country Info App

**2.12 Data for countries, step1**
The API [https://restcountries.eu](https://restcountries.eu/) provides a lot data for different countries in a machine readable format, a so-called REST API.
The application should probably get the data from the endpoint [all](https://restcountries.eu/rest/v2/all)

The user interface is very simple.

- The country to be shown is found by typing a search query into the search field.
- If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific.
- If there are fewer than ten countries, but more than one, then all countries matching the query are shown.
- When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken in that country are shown.

**2.13: Data for countries, step2**
Improve on the application in the previous exercise, such that:

- when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country.

**2.14: Data for countries, step3**

- Add to the view showing the data of a single country the weather report for the capital of that country. There are dozens of providers for weather data. I used https://weatherstack.com/.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
