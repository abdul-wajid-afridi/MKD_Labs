# Task

All this task must be done in 1 day

- in src/utils/MkdSDK.jsx implement Line 17
- in src/utils/MkdSDK.jsx implement Line 91
- in src/pages/AdminLoginPage.jsx implement Line 30
- once login successful, call snackbar component to show logged in toast. DONT use 3rd party library
- in src/authContext.jsx implement 16
- in src/authContext.jsx implement 40 to check if token still valid
- There's a bug that it flickers Page Not Found
- once logged in go to dashboard page like figma file
  https://www.figma.com/file/veiESwD61KJBa7BpEHtbdl/react-task-2?node-id=1086%3A15525

- Call paginate api as shown below to get video data. Show 10 per page. Have a next button at bottom when clicked, load next 10 videos

- Call paginate api as shown below to get video data. Show 10 per page. Have a prev button at bottom when clicked, load prev 10 videos

- Implement logout button

- Please READ SDK file and reuse code when you can. DO NOT REINVENT THE WHEEL.
- Use React Drag and drop library https://react-dnd.github.io/react-dnd/about to be able to rearrange the rows and columns in the table in dashboard. On Refresh, the columns go back to default

## Login

```
https://reacttask.mkdlabs.com/v2/api/lambda/login
Method POST
content-type application/json
x-project cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==
body
{
  "email": "adminreacttask@manaknight.com",
  "password": "a123456",
  "role": "admin"
}
Response
{
    "error": false,
    "role": "admin",
    "token": "",
    "expire_at": 3600,
    "user_id": 1
}
```

## Check

```
Check if token still valid
https://reacttask.mkdlabs.com/v2/api/lambda/check
Method POST
Header
x-project cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==
Bearer <token>
body
{
  "role": "admin"
}
Response
http code 200
```

## Video Paginate

```
https://reacttask.mkdlabs.com/v1/api/rest/video/PAGINATE
Method POST
Header
x-project cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==
Bearer <token>
body
{
    "payload": {},
    "page": 1,
    "limit": 10
}
Response
http code 200
{
    "error": false,
    "list": [
        {
            "id": 1,
            "title": "Rune raises $100,000 for marketing through NFT butterflies sale",
            "photo": "https://picsum.photos/200/200",
            "user_id": 1,
            "username": "boss",
            "create_at": "2022-01-01",
            "update_at": "2022-01-01T04:00:00.000Z",
            "like": 10
        }
    ],
    "page": 1,
    "limit": 10,
    "total": 112,
    "num_pages": 12
}

```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
