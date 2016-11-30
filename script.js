// hints!
// 1. find the element in index.html that you want to copy
// 2.

var elementsList = $("#elements-list")

colorList.forEach(function(color) {
  var newEl = el.clone()
  newEl.css({background: color})
  elementsList.append(newEl)
})