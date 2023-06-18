# Snapshot.io

## A fully functional MERN stack application that allows you to capture cities in real time

Around the time this project was created, New York City dealt with heavy air contamination caused by the Canadian Wildfires. The Breaking Bad Mexico filter that plagued the city at the time made it difficult for people in the city to go outside, even for a split second.
This app was created to allow users to plan ahead to go outside. This is very useful for people with health conditions such as asthma.

* Allows users to access News and Weather Information with a single search
* Information retrieved and aggregated from the NewsAPI and OpenMeteoAPI
* Displays relevant news stories for a queries city as well as temperature and air quality information for that city
* Retrieved data stored on MongoDB for faster retrieval times
* Data cache system for deletion of outdated documents and to provide the most up-to-date news and weather information


View site here: https://snapshot-frontend.vercel.app/

## How to use

Using Snapshot is very simple. Just search up any major city in the world and the app will capture it for you, in real time. The world is your oyster.

![ezgif com-crop](https://github.com/Sajid2001/real-time-app/assets/60523377/3a665421-3b2d-4778-bb6c-f8991eb98b3a)

## How to contribute

1. Download the project and add the environment variables to both the backend and frontend folders (```.env``` in the back and ```.env.local``` in the front). 
2. Run ```npm install``` inside both folders to download all dependecies. 
3. Run ```nodemon app.js``` on the backend and ```npm start``` on the frontend.

For database access, you can either create your own mongodb database and plug in your connection URI or you can manipulate the project files so you can use your database of choice. You can also contact one of the main contributors if you would like to be added to the mongodb project connected to the deployed site.

### Environment Variables Needed:
Backend: 
* ```PORT``` = Your port number of choice (anything but 3000)
* ```MONGODB_URI``` = The connection URI to your MongoDB database
* ```NEWS_API_KEY``` = Log in to NewsAPI and get your API key

Frontend:
* ```REACT_APP_API_QUERY_URL``` = your server link, whether it's deployed or on localhost

## Find any bugs?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a Pull Request with a fix, reference the issue that you created.

## Known Issues

### Why does the first search take a while to load on the deployed site?

The deployed server shuts down whenever the page is not being used by anyone. It takes a bit of time for the server to reboot for the first time. The server is also based in Ohio and is on a free plan, so connectivity may not be optimal and the CPU is a bit limited at the moment.

### Why is the site a bit laggy when the search completes?

React Chart JS appears to be the cause of this lag. If anyone knows how to optimize the library, we would love to know how.

## Future Ideas

We plan to integrate OpenAI for feedback on current events and weather patterns. We also plan to allow for user registration and a search history feature to allow for a more seamless user experience.


