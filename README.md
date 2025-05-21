# LIVE WEATHER MONITOR - FRONT-END PROJECT

🌤️ **ClimaSense – A Smart Weather Forecast Web App**

✅ **Overview:**

**ClimaSense** is an interactive and user-friendly weather forecast web application designed to provide **real-time weather data** and **local time information** for cities across the globe. It utilizes modern web technologies and public weather APIs to help users get accurate, location-based climate updates at their fingertips. It includes features such as temperature unit switching, current location detection, live weather icons, and a theme toggle for better UI experience.


🌟 **Key Features:**

1. **🌍 Global City Search:**

   * Search weather for any city worldwide by name.

2. **📍 Current Location Weather:**

   * Uses Geolocation API to get weather for user's current location.

3. **🌡 Temperature Unit Toggle (°C / °F):**

   * Allows users to switch between Celsius and Fahrenheit.

4. **🕒 Local Time Display:**

   * Shows the local time of the searched city using timezone data from the API.

5. **🎨 Dark/Light Theme Switcher:**

   * Enhances user experience with a customizable interface.

6. **🔍 Clean, Intuitive UI:**

   * Simple and responsive design suitable for all devices.


🧰 **Technologies Used:**

| Technology               | Purpose                               |
| ------------------------ | ------------------------------------- |
| **HTML5**                | Structure of the web page             |
| **CSS3**                 | Styling and responsive layout         |
| **JavaScript (Vanilla)** | Logic, interactivity, API integration |
| **OpenWeatherMap API**   | Fetches weather and timezone data     |
| **Font Awesome**         | Icons (e.g., clock, temperature)      |
| **Geolocation API**      | Detects current location of the user  |




⚙️ **How It Works (Step-by-Step):**

* 🔍 **User Input or Geolocation**:

  * The app either:

    * Detects the user's location using the **Geolocation API**, or
    * Accepts a **city name input** from the user.

* 🌐 **API Request to OpenWeatherMap**:

  * The app sends a request to the **OpenWeatherMap API** using:

    * Either the coordinates (latitude & longitude), or
    * The city name entered by the user.

* ☁️ **Fetch and Process Weather Data**:

  * The API returns real-time weather data including:

    * Temperature
    * Weather conditions (clear, rain, snow, etc.)
    * Humidity and wind speed
    * Timezone offset for calculating local time
    * Weather icon code

* 🕒 **Calculate Local Time**:

  * The app calculates the **local time** of the searched city using:

    * The timezone offset from the API
    * JavaScript's `Date` object

* 🖥️ **Dynamic Display (DOM Manipulation)**:

  * The weather info is displayed on the webpage using:

    * HTML updates through JavaScript
    * Weather icons from OpenWeatherMap
    * Clock/time symbol using **Font Awesome**

* ✨ **User Interface Update**:

  * The app shows:

    * City and country name
    * Local time with clock icon
    * Weather icon, temperature, humidity, and wind speed
    * Weather description (e.g., "clear sky")


💼 **Use Case:**

* **Daily Weather Checks:** Users can plan their day by quickly checking the weather in their city or while traveling.
* **Students and Learners:** Helpful for students learning API integration, JavaScript, or frontend development.
* **Global Application:** Suitable for travelers, remote workers, or anyone who wants to know weather updates globally.
* **College Project / Tech Fest Demo:** Great as a live demo project for a tech fest or portfolio.
  

🌍 **Impact:**

* **Increased Awareness:** Helps users be better prepared for weather changes like storms, heatwaves, etc.
* **Smart UI Experience:** Offers a smooth user interface with modern features like dark mode and live icons.
* **Learning & Development:** Encourages understanding of APIs, JavaScript, and responsive design.
* **Practical Implementation of AI/IoT Concepts:** While not using AI directly, it introduces concepts useful in smart environment and automation systems.
