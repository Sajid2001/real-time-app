# Snapshot.io

## A fully functional MERN stack application that allows you to capture cities in real time

Around the time this project was created, New York City dealt with heavy air contamination caused by the Canadian Wildfires. The Breaking Bad Mexico filter that plagued the city at the time made it difficult for people in the city to go outside, even for a split second.
This app was created to allow users to plan ahead to go outside. This is very useful for people with health conditions such as asthma.

* Allows users to access News and Weather Information with a single search
* Information retrieved and aggregated from the NewsAPI and OpenMeteoAPI
* Retrieved stored on MongoDB for faster retrieval times
* Timely updates to enable the user to recieve the most up-to-date news and weather information

## How to use

Using Snapshot is very simple, just search up whatever city you want to capture it in real time. The world is your oyster.

![ezgif com-crop](https://github.com/Sajid2001/real-time-app/assets/60523377/3a665421-3b2d-4778-bb6c-f8991eb98b3a)

Deployed Site Link: Coming soon...

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

Render shuts down the server whenever the page is not being used by anyone. The server is also based in Ohio and is on a free plan, so connectivity may not be optimal and the CPU is a bit limited at the moment.

## Future Ideas

We plan to integrate OpenAI for feedback on current events and weather patterns. We also plan to allow for user registration and a search history feature to allow for a more seamless user experience.

