// Get Browser Dimension
var windowWidth = $( window ).width();
var windowHeight = $( window ).height();
console.log({width: windowWidth})
console.log({height: windowHeight})

// Define margin value to place randomly the square
var marginLeft = Math.floor(Math.random() * (windowWidth-500))
var marginTop = Math.floor(Math.random() * (windowHeight-500))

var square = $("#square")
square.css( { marginLeft : marginLeft + "px", marginTop :  marginTop + "px" } );
