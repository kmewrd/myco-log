# Myco-Log

**A front end application built by Kim Ward.**

Myco-Log is the final solo project built during Mod 3 of Turing School of Software & Design. For emerging mushroom enthusiasts, this is the perfect application to discover common fungi in your region and record sightings in the wild! This app was designed for mobile first, but is responsive for various screen sizes.

Visit the deployed site here: [Myco-Log](https://myco-log.herokuapp.com/)

View wireframes on Figma: [Myco-Log Wireframes](https://www.figma.com/file/7n6XyOI7JQknK1UQ2xbrCt/U.F.O.---Unidentified-Fungus-Outdoors?node-id=0%3A1)

Read the specs: [Project Specs](https://frontend.turing.edu/projects/module-3/showcase.html)

## Goals

- Use React's component-based architecture to design and build an application
- Use React Router to simulate a multi-page experience
- Use Asynchronous JavaScript to send and retrieve data from an API
- Write end-to-end tests with Cypress

<img width="1440" alt="Login page for Myco-Log" src="https://user-images.githubusercontent.com/79027364/165003112-e79b147e-14dd-408a-8d72-e089c8e9edd7.png">

## How to Run

1. Clone the repo down to your machine
3. Open the root directory and run `npm i` to install dependencies
4. Run `npm start` to initialize the webpage
5. Open the site by copying and pasting the server location http://localhost:3000/ in your address bar

---

## Features

**Login:**
On page load, the user sees a login form. To log in, enter `mycophile5044` as the username and `fungi` as the password.

**Dashboard:**
After a successful login the user is redirected to their dashboard, which contains their geographic region, stats, and a list of all their mushroom sightings. Sightings can be permanently deleted by clicking the delete button on a card.

<img width="1439" alt="Myco-Log dashboard view" src="https://user-images.githubusercontent.com/79027364/165003280-ed1295cb-70d7-4953-bb63-795ad0e3d46c.png">

**Explore Page:**
To discover fungi local to their geographic region, users can navigate to the Explore page. This page retrieves a list of regional fungi including an image, common name, and scientific name. To view more detailed information about a specific fungus, simply tap the arrow button.

**Detail View:**
The detail page for each fungus includes additional information such as common regions where it's found and a short description. In the future, I would love to expand this page to include ecology, spore print, and more.

![Explore and detail page demo](https://user-images.githubusercontent.com/79027364/165003810-9311ad4f-dcc7-44dd-b17e-0177f4044be0.gif)

**Record A Sighting:**
To record a sighting in the wild, a user can navigate to the fungus they want to record and press the Record Sighting button. This brings the user to a form where they can enter a date, location, and any notes they'd like to include. After successful submission, the sighting can now be viewed on the user's dashboard.

![Demo of the sighting submission process](https://user-images.githubusercontent.com/79027364/165004215-61a2bf3d-0c67-40c3-b7a9-b31143120d94.gif)

**Search & Filter:**
From the Explore page, users can filter fungi listings by entering terms in the search bar. This feature filters listings based on the fungus's name and characteristics. Users can clear the search terms to view all listings again.

![Demo of search and filter feature](https://user-images.githubusercontent.com/79027364/165004834-1b210d3f-b4e6-431d-95b1-d020b3ead692.gif)

#### Mobile First Design
This application was designed first and foremost for mobile devices. It is best viewed on small screens, but the layout is responsive and adjusts to tablet and desktop views as well. It is expected that users will be using this application while outside their home.

![Mobile view](https://user-images.githubusercontent.com/79027364/165005459-f17d95d0-0c63-4f5d-90ca-387cacacb44d.gif)

---

### Project Challenges
This project was not without its challenges! React recently released v18, which has compatibility issues with React Router v5 (used in this project). Being relatively new to Router, I puzzled over routing issues with components not displaying correctly until I realized it could be solved by moving `<React.StrictMode>` to the inside of my `<BrowserRouter>` component.

This project is the first I've built without class components, opting instead to use functional components with hooks. It took some getting used to and I started by using class components and refactoring them halfway through. By the end of the project, I felt confident that I could quickly create another application using only functional components.

### Project Wins
- Extensive end to end testing with Cypress
- Typechecking with PropTypes
- Implementing React Hooks such as `useState` and `useEffect`
- Building out my own API with Express, including endpoints for POST and DELETE
- Deploying my API and application to Heroku

### Technologies Used
- React
- React Hooks
- JavaScript
- React Router
- PropTypes
- Express
- Postman
- SCSS
- HTML
- Cypress
- Heroku
- VS Code

#### Future Additions & Improvements
- Add an edit link to the user's Dashboard so they can update their Geographic region. (Will need to create a new PUT endpoint.)
- Add a redirect after a sighting is successfully recorded.

#### Design Inspiration
The light and neutral earth-toned palette was inspired by Dribble creator Matthew Gledhill's [Interior Design Website](https://dribbble.com/shots/9523892-Interior-Design-Website-Concept). The style of the listings on the Explore page were borrowed from Daniel Wiklund's [Mushroom app](https://dribbble.com/shots/1285755-Mushroom-app) on Dribbble.

#### Credit

- Arrow icons from [React Icons](https://react-icons.github.io/react-icons)