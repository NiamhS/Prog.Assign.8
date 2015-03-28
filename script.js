// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
	'packages' : ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

	// variable (ie holder) for FRED data
	var arraysData = [];

	//use a 'for' loop to make an array of arrays out of relevant JSON data

	for (var i = 0; i < JsonFredData.observations.length; i++) {

		//Number added as an additional function (within the function) to make a number out of data that is currently formatted as a string

		var itemArray = [];
		itemArray.push(new Date(JsonFredData.observations[i].date));
		itemArray.push(Number(JsonFredData.observations[i].value));

		//add my little array to the "big" array
		arraysData.push(itemArray);

	}

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Date');
	data.addColumn('number', 'GDP');
	data.addRows(arraysData);

	var formatter = new google.visualization.DateFormat({
		formatType : 'short'
	});

	// Reformat our data.
	formatter.format(data, 0);

	// Set chart options
	var options = {
		'title' : 'Pizza Toppings Chart',
		'width' : 400,
		'height' : 300
	};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}