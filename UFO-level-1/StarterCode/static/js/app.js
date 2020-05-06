// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the button
var button = d3.select("#button");

const tbody = d3.select("tbody");

function build_table (data) {
    tbody.html("");
    data.forEach(element => {
       const row = tbody.append("tr");
       Object.values(element).forEach(value => {
          row.append("td").text(value);
       });
    });
};

build_table(data);

button.on("click", function() {
  
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  //var inputValue = tbody2.property("value");

  console.log(inputValue);
  //console.log(tableData);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  function filter_table (filteredData) {
    tbody.html("");
    filteredData.forEach(element => {
       const row = tbody.append("tr");
       Object.values(element).forEach(value => {
          row.append("td").text(value);
       });
    });
};

filter_table(filteredData) 
  
  console.log(filteredData);
});
