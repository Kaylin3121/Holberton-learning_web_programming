<body>
Kaylins Surface-Pro:6-javascript_continued kaylin$ node 0-parameter.js holberton
Here is the first passed parameter: holberton
Kaylins Surface-Pro:6-javascript_continued sylvain$ node 0-parameter.js 98
Here is the first passed parameter: 98
Kaylins Surface-Pro:6-javascript_continued kaylin$
Here is the first passed parameter: [PARAMETER]

// Store a value passed by the user to the script in the variable my_parameter. Note it takes the second element which corresponds to the first parameter. Third element would correspond to second parameter
let my_parameter = process.argv[2];
// Print the my_parameter variable
console.log(my_parameter)
