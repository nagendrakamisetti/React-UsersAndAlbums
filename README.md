This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

This project is created to demonstrate the React learnings.

Let us use JSON place holder as our API to get the required data for this application.
JSON placeholder: https://jsonplaceholder.typicode.com/

1. Create a new react app with `create-react-app` command
2. App should have a menu with ‘Users’, ‘Albums’ (menu can be at left, right or a top of your page)
3. Users:
   a. Get users data from https://jsonplaceholder.typicode.com/users
   b. Display all Users in a grid format with below details. (To improvise the look and feel you can display as user card)
   i. Name, Email, phone/website & Address
   c. Build Users and User components. Users component should iterate through JSON data and render a `User` component.
   d. Each `User` component should have two action buttons `Posts` & `todos`
   i. Posts – Should show all posts related to a user - https://jsonplaceholder.typicode.com/users/1/posts 1. Search capability for posts. Provide search on title or body 2. Display all posts with title as clickable. 3. Click on a title, should show associated comments of that post. This could be a DIV on the same page but not necessary to navigate to another page.
   ii. Todos – should show all todos related to a user - https://jsonplaceholder.typicode.com/users/1/todos or https://jsonplaceholder.typicode.com/todos?userId=3 1. Search capability for todos. Provide search on ToDo title 2. If a todo is complete (completed: true) then, bgColor should be green
   e. A HTML5 form which submits a new user
   i. Name, Email and Address (street, suite, city) are mandatory fields
   ii. On submit action, the data should show up in console.
4. Albums: -
   a. Fetch albums from https://jsonplaceholder.typicode.com/albums
   b. Display all albums grouping by user
   i. Display username as a sub header
   ii. Display album titles associated to that user as clickable.
   c. By clicking on an album title, display all phots of that album (https://jsonplaceholder.typicode.com/photos)
   d. Show thumbnail first, on click action, show the full image (in a popup – find a good third-party module for this)

Note: -
• Make sure your component should not exceed 20 lines of JSX code
• Try to derive as many numbers of components as possible for better understanding of code. Each component should have a unique responsibility
• Search feature should be a separate and single component for all other features.
• Demonstrate parent child communication using props and methods
• Use PropTypes for all mandatory properties.
• Strictly follow below guidelines: https://github.com/airbnb/javascript/tree/master/react
• Separate files for CSS
• Simple routing for ‘Users’ and ‘Albums’ links
