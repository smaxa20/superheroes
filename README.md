## Final Project Synopsis
This final project was worked on by Mason Caird and Scott Maxa. The goal of this final project is to present data regarding superheros and display the results on a simple webpage [http://superherowiki.tk/](superherowiki.tk)

This webpage has three features. The first feature has a look up text box for finding one character and displaying the superheros stats. The second feature is the superhero comparison. You can now scroll on both columns to check out who has higher strength or maybe you want to check who has a cooler dad name? The third feature lets you as a user to share this information in a tweet to your webpage. Unfortunately, twitter's API server was done according to our record. The status code was 500.

## Design
As your look through the directories in the project, you will notice numerous folders and files. We organized everything in folder by different parts of the webpage as your dig into each of the folders.

You will first encounter three folders that are labeled Node_Modules, Public, and SRC. Node_Modules carries libraries that React uses. Not all libraries are used but could be used. The Public folder is currently holding the index.html file and the supermanLogo.png. These files are not primarily that important. 

In SRC, you will notice three folders and nine files left out. You will want to check out the APP.jsx if you want to see the meat of this project. The compare folder shows how the compare functions were made and the implementations of the compare bar. The Search folder displays the implementation of the SearchBar, results, and the search function in general.

## Styled Components
If your looking for the styled components for the search bar and the columns and how all objects are placed together, styled.jsx is your target.

## Analysis
The SuperHero API calls are relatively fast. There is a slight delay but its nothing to be to concerned about. When the API completes its call, the information will show below in its own reserved column. If the user enters an invalid response, nothing will return in return. If a user enters a name that does not exist, nothing will return.

## Discussion of Work (Scott and Mason's Work)
- Developed React (Scott & Mason)
- Server Running/Heroku (Scott & Mason)
- API Set-Up (Mason)
- Comparison bar (Scott)
- Twitter Configuration (Scott & Mason)
- Parsing JSON API (Scott & Mason)

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
