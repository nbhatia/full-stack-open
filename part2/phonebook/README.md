## FullStackOpen: [Part2](https://fullstackopen.com/en/part2/forms) Exercises

## Phonebook App

**2.6: The Phonebook Step1**
Create a simple phonebook.
**In this part we will only be adding names to the phonebook.**
Let us start with implementing the addition of a person to phonebook.

**NB:**

- you can use the person’s name as value of the _key_ property
- remember to prevent the default action of submitting HTML forms!

**2.7: The Phonebook Step2**

- Prevent the user from being able to add names that already exist in the phonebook.

- Issue a warning with the [alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) command when such an action is attempted:

**2.8: The Phonebook Step3**
Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second _input_ element to the form (along with its own event handler):

**2.9\*: The Phonebook Step4**
Implement a search field that can be used to filter the list of people by name:

- You can implement the search field as an _input_ element that is placed outside the HTML form. The filtering logic shown in the image is _case insensitive_, meaning that the search term _arto_ also returns results that contain Arto with an uppercase A.

**2.10: The Phonebook Step5**
If you have implemented your application in a single component,

- refactor it by extracting suitable parts into new components.
- Maintain the application’s state and all event handlers in the _App_ root component.
- It is sufficient to extract **three** components from the application. Good candidates for separate components are, for example, the search filter, the form for adding new people into the phonebook, a component that renders all people from the phonebook, and a component that renders a single person’s details.
- The application’s root component could look similar to this after the refactoring. The refactored root component below only renders titles and lets the extracted components take care of the rest.

```javascript
const App = () => {
  // ...

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter ... />

      <h3>Add a new</h3>

      <PersonForm
        ...
      />

      <h3>Numbers</h3>

      <Persons ... />
    </div>
  )
}
```

**2.11: The Phonebook Step6**

- Store the initial state of the application in the file _db.json_, which should be placed in the root of the project.
- Start json-server on port 3001 and make sure that the server returns the list of people by going to the address http://localhost:3001/persons in the browser.
- Modify the application such that the initial state of the data is fetched from the server using the _axios_-library. Complete the fetching with an [Effect hook](https://reactjs.org/docs/hooks-effect.html) .

**2.15: Phonebook step7**
Let’s return to our phonebook application.
Currently the numbers that are added to the phonebook are not saved to a backend server.

- Fix this situation.

**2.16: Phonebook step8**

- Extract the code that handles the communication with the backend into its own module by following the example shown earlier in this part of the course material.

**2.17: Phonebook step9**

- Make it possible for users to delete entries from the phonebook. The deletion can be done through a dedicated button for each person in the phonebook list.
  You can confirm the action from the user by using the [window.confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) method.

The associated resource for a person in the backend can be deleted by making an HTTP DELETE request to the resource’s URL. If we are deleting e.g. a person who has the _id_ 2, we would have to make an HTTP DELETE request to the URL _localhost:3001/persons/2_. No data is sent with the request.
You can make an HTTP DELETE request with the [axios](https://github.com/axios/axios) library in the same way that we make all of the other requests.

**2.18: Phonebook step10**

- Change the functionality so that if a number is added to an already existing user, the new number will replace the old number. It’s recommended to use the HTTP PUT method for updating the phone number.
- If the person’s information is already in the phonebook, the application can confirm the action from the user.

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
