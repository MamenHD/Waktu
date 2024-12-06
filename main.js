function updateDateTime() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const day = days[now.getDay()];
    
    document.getElementById("date").innerText = `Date: ${date} (${day})`;
    document.getElementById("time").innerText = `Time: ${time}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initialize the display
updateDateTime();
