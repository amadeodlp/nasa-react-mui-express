This application was made by Amadeo de la Peña for Ortex.
It was created using Create-React-App. It uses Redux Toolkit for state-handling. 
The Auth-API was created with Express.js. It is crucial to start the Express server before using the app.
To launch the application, first type "node server/index.js" to start the server. Then, on a new terminal, type "cd client" and 
finally "npm start" to execute the react script. 
The styling is provided by "Material UI" library.
The form validation is done with formik and yup. The Modal input is also validated.
For the moment, any credential can be used to submit the login form. This can be limited through state-handling of registered users
in the future.
The Ortex logo and email were gotten through the Ortex official page.
The "Money" component refers to the websocket and the box component where its returned information is shown. It does not provide
any information on weekends.
The app is mobile-responsive. Though, more media-queries can and will be specified to optimize this in the future.

