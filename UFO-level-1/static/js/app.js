// Assign the data from `data.js` to a descriptive variable
var tableData = data;
console.log(tableData);

// Get reference to table body
var tbody = d3.select("tbody");

// UFO sighting values for each column
tableData.forEach(function(sighting){
    console.log(sighting)
    // append one table row for each sighting object
    var row = tbody.append("tr");
    // use 'object.entries' to console.log each UFO sighting value
    Object.entries(sighting).forEach(function([key,value]) {
        console.log(key,value);
        // append cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");
// Create event handler
button.on("click", runFilterTable);

// Complete the event handler function for the button
function runFilterTable() {
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value properties of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    // Filter data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(selections){
    console.log(selections);
    // append one table row for each sighting object
    var row = tbody.append("tr");
    // use 'object.entries' to console.log each UFO sighting value
    Object.entries(selections).forEach(function([key,value]) {
        console.log(key,value);
        // append cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
};
