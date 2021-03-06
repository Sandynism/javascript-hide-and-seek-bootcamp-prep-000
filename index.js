function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const parents = document.querySelectorAll('.ranked-list')

  for (let a = 0, b = parents.length; a < b; a++) {
    let children = parents[a].children

    for (let c = 0, d = children.length; c < d; c++) {
      children[c].innerHTML = parseInt(children[c].innerHTML) + n
    }
  }
}

function deepestChild() {
  var parent = document.getElementById("grand-node")
  var children = parent.children[0]

  while (children) {
    parent = children
    children = parent.children[0]
  }
  return parent
}
