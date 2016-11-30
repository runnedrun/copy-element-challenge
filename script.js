// hints!
// 1. find the element in index.html that you want to copy
// 2. select it somehow (by class . or id #)
// 3. google 'jquery copy element'
// 4. copy the element and add the new ele it to the element list

var elementsList = $("#elements-list")

colorList.forEach(function(color) {
  var newEl = el.clone()
  newEl.css({background: color})
  elementsList.append(newEl)
})