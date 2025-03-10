# Weather Search App
A simple and interactive weather application that allows users to check the current weather conditions for any city. The app also keeps track of recent searches and dynamically changes the background based on the weather condition. Thanks to OpenWeatherMap for providing the weather data API. This project is inspired by various weather applications and tutorials.

## Features
- **Real-time Weather Data**: Fetches current weather information for any city based on https://openweathermap.org/.
- **Search History**: Keeps a list of the 5 most recent searches for quick access.
- **Dynamic Background**: Changes the background color based on the weather condition (e.g., sunny, rainy, cloudy).
- **Perceptive UI**: Simple but reactive buttons give the perception of interactivity to the user.
- **Responsive Design**: Works seamlessly on different screen sizes.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/duke-low/Weather_Search.git
2. Navigate to the project directory:
   ```bash
   cd weather_app
3. Start the server:
   ```bash
   node server/server.js
4. Open the `index.html` file in your browser to run the app.

## Usage
1. Enter the name of a city in the input field.
2. Click the "Get Weather" button to fetch the weather data.
3. View the current weather conditions, including temperature and weather description.
4. The app will save your recent searches, which you can click to quickly check the weather again.

## Technologies Used
- HTML: Structure of the web page.
- CSS: Styling and animations.
- JavaScript: Fetching weather data and handling user interactions.
- OpenWeatherMap API: Provides real-time weather data.
