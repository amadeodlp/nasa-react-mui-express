This application was made by Amadeo de la Peña. It was created using Create-React-App. It uses Redux Toolkit for state-handling. The Auth-API was created with Express.js. It is crucial to start the Express server before using the app. To launch the application:
1) Type "cd server" in the CLI
2) Launch "npm install"
3) Type "cd ../client" in the CLI
4) Launch "npm install" again.
5) Type "cd.." in the CLI
6) type "node server/index.js" to start the server. Then, on a new terminal, type "cd client" and finally "npm start" to execute the react script. 
The styling is provided by "Material UI" library. The form validation is done with formik and yup. The Modal input is also validated. For the moment, any credential can be used to submit the login form. This can be limited through state-handling of registered users in the future. The Ortex logo and email were gotten through the Ortex official page. The "Money" component refers to the websocket and the box component where its returned information is shown. It does not provide any information on weekends. The app is mobile-responsive, it uses media-queries to adapt the UI to different devices. 
It's a NASA page created with Material UI and Express that consumes NASA "Astronomic Photo of the Day" API and MARS Rover's photos API. it also has a Websocket from stream.tradingeconomics in login page for showing the current EUR/USD XR.
