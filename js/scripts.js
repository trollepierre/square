// Define square as a js variable for reuse without mistake
var square = $(".square")
var numberOfSquare = 1
var squareDimension = 512

// Get Browser Dimension
var windowWidth = $(window).width()
var windowHeight = $(window).height()

// Define margin value to place randomly the square
var placeSquare = function () {
  var marginLeft = Math.floor(Math.random() * (windowWidth - squareDimension))
  var marginTop = Math.floor(Math.random() * (windowHeight - squareDimension))
  square.css({ marginLeft: marginLeft + "px", marginTop: marginTop + "px" })
}

placeSquare()

var addSquares = function (times) {

  while (times !== 0) {
    console.log(times)
    $(".container").add("div").addClass("square")
    times -= 1
  }
}

var bigBangActivation = function () {
  addSquares(3 * numberOfSquare)
  numberOfSquare *= 4
  squareDimension /= 4
  alert("One square has been clicked")
  placeSquare()
}
square.click(bigBangActivation)
