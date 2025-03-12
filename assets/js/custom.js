document.addEventListener("DOMContentLoaded", function () {
    const currentMonthIndex = new Date().getMonth(); // Get current month (0 = Jan, 11 = Dec)
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    // Update current month name in header
    document.getElementById("current-month-name").textContent = monthNames[currentMonthIndex];

    // Get table rows
    const rows = document.querySelectorAll("table tbody tr");
    const eventsList = document.getElementById("events-list");
    
    let hasEvents = false; // Flag to check if there are events

    rows.forEach(row => {
        const monthCell = row.cells[0]; // Get Month column
        if (monthCell) {
            const monthText = monthCell.textContent.trim();
            if (monthText === monthNames[currentMonthIndex]) {
                row.style.display = "table-row"; // Show current month events
                
                // Add event to the current month section
                const eventCell = row.cells[2]?.textContent.trim();
                const dateCell = row.cells[1]?.textContent.trim();
                if (eventCell && dateCell) {
                    const eventItem = document.createElement("p");
                    eventItem.textContent = `${dateCell}: ${eventCell}`;
                    eventsList.appendChild(eventItem);
                    hasEvents = true;
                }
            } else {
                row.style.display = "none"; // Hide other months
            }
        }
    });

    // Show a message if no events are found
    if (!hasEvents) {
        eventsList.innerHTML = "<p>No upcoming events this month.</p>";
    }
});
