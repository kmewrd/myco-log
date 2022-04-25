# Myco-Log

**A front end application built by Kim Ward.**

Myco-Log is the final solo project built during Mod 3 of Turing School of Software & Design.

<!-- This project focused on using Test Driven Development and Object Oriented Programming to build an interactive travel site where users can log in to view their trips and book a new trip. The Fetch API was used to retrieve and post data. Specifications for this project can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html). -->

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

---

### Technologies Used
- JavaScript
- React
- React Router
- Typechecking w/ PropTypes
- Express
- SCSS
- HTML
- Cypress
- VS Code

#### Future Additions & Improvements
- Add an edit link to the user's Dashboard so they can update their Geographic region. (Will need to create a new PUT endpoint.)
- Add a redirect after a sighting is successfully recorded.

#### Design Inspiration
The light and neutral earth-toned palette was inspired by Dribble creator Matthew Gledhill's [Interior Design Website](https://dribbble.com/shots/9523892-Interior-Design-Website-Concept). The style of the listings on the Explore page were borrowed from Daniel Wiklund's [Mushroom app](https://dribbble.com/shots/1285755-Mushroom-app) on Dribbble.