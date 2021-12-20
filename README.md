## Book Lookup Application

This application uses React as the front end, located in the **client** folder, and uses __NestJS__ as the backend with additional integration from __Typeorm__.


- The react front end will consist of a state being managed by a reducer function, and a sort of react redux type of state, being able to be accessed in every part of the application due to context being passed from the topmost parent component down to every child component. There will be Routers implemented in the application from the npm package _react-router-dom_, and also there will be integration in the components from the npm package _react-bootstrap_ to increase the overall look of the application.

- The NestJS back end integration will consist of mostly basic functionality, and the Typeorm integration allows us flexibility to use different types of databases on-the-fly rather then use mongoose and rely on the database being a MongoDB no-sql database