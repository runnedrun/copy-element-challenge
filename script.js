var el = $(".element")
var elementsList = $("#elements-list")

var colorList = ["red", "green", "blue", "yellow", "orange", "purple", "cornsilk", "violet", "magenta", "lightcoral"]

colorList.forEach(function(color) {
  var newEl = el.clone()
  newEl.css({background: color})
  elementsList.append(newEl)
})