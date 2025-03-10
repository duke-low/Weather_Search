async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`);
        if (!response.ok) throw new Error("Weather data not found");

        const data = await response.json();

        document.getElementById("weatherResult").innerHTML =
        `<h2>${data.name}, ${data.sys.country}</h2>
         <p>Temperature: ${data.main.temp}°C</p>
         <p>Condition: ${data.weather[0].description}</p>`;
    
        saveSearch(city); // Save search to history

        // Get weather details
        const temp = data.main.temp;
        const condition = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Update UI
        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <img class="weather-icon" src="${iconUrl}" alt="Weather icon">
            <p>Temperature: ${temp}°C</p>
            <p>${condition}</p>
        `;

        // Apply fade-in effect after data loads
        const weatherDiv = document.getElementById("weatherResult");
        weatherDiv.style.opacity = "1";
        weatherDiv.style.transform = "translateY(0)";

        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.style.opacity = "1";
        weatherIcon.style.transform = "scale(1)";

        // Change background color based on weather condition
        changeBackground(condition);
    } catch (error) {
        console.error("Fetch error:", error);
        alert("Failed to fetch weather data. Please try again.");
    }
}

// Function to change background dynamically
function changeBackground(condition) {
    let bg;
    if (condition.includes("cloud")) {
        bg = "linear-gradient(to right, #bdc3c7, #2c3e50)";
    } else if (condition.includes("rain")) {
        bg = "linear-gradient(to right, #3a7bd5, #3a6073)";
    } else if (condition.includes("clear")) {
        bg = "linear-gradient(to right, #ff7e5f, #feb47b)";
    } else {
        bg = "linear-gradient(to right, #4facfe, #00f2fe)";
    }
    document.body.style.background = bg;
}

// Function to save recent searches in local storage
function saveSearch(city) {
    let searches = JSON.parse(localStorage.getItem("searchHistory")) || [];
    
    // Remove the city if it already exists to avoid duplicates
    searches = searches.filter(item => item !== city);
    
    // Add the new search to the beginning
    searches.unshift(city);
    
    // Keep only the last 5 searches
    if (searches.length > 5) searches.pop();
    
    // Save the updated array to localStorage
    localStorage.setItem("searchHistory", JSON.stringify(searches));

    // Refresh the displayed history
    displaySearchHistory();
}

// Function to display search history as buttons
function displaySearchHistory() {
    const historyDiv = document.getElementById("searchHistory");
    historyDiv.innerHTML = ""; // Clear previous history

    let searches = JSON.parse(localStorage.getItem("searchHistory")) || [];
    
    searches.forEach(city => {
        let button = document.createElement("button");
        button.textContent = city;
        button.classList.add("history-btn");
        button.onclick = () => {
            document.getElementById("cityInput").value = city;
            getWeather();
        };
        historyDiv.appendChild(button);
    });
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", displaySearchHistory);
