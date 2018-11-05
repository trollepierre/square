// Define square as a js variable for reuse without mistake
var square = $(".square")
var numberOfSquare = 1
var squareDimension = 512

// Get Browser Dimension
var windowWidth = $(window).width()
var windowHeight = $(window).height()

// Define margin value to place randomly the square
var placeSquare = function (element, squareDimension) {
  var marginLeft = Math.floor(Math.random() * (windowWidth - squareDimension))
  var marginTop = Math.floor(Math.random() * (windowHeight - squareDimension))
  element.css({
    marginLeft: marginLeft + "px",
    marginTop: marginTop + "px",
    height: squareDimension + "px",
    width: squareDimension + "px",
    position: "absolute"
})
}

// Use only in setRandomColor
function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

// Colorize Randomly
function setRandomColor(element) {
  element.css("background-color", getRandomColor())
}

// First iteration
placeSquare(square, squareDimension)
setRandomColor(square)

// For bigBangActivationPurpose
var addSquares = function (times) {
  while (times !== 0) {
    $("#container").append("<div class='square'></div>")
    times -= 1
  }
}

var bigBangActivation = function () {
  addSquares(3 * numberOfSquare)
  numberOfSquare *= 4
  squareDimension /= 4
  alert("One square has been clicked")

  $(".square").each(function () {
    setRandomColor($(this))
    placeSquare($(this), squareDimension)
    $(this).click(bigBangActivation)
  })
}

square.click(bigBangActivation)
