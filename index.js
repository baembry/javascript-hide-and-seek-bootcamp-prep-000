function getFirstSelector(selector) {
  var firstMatch = document.querySelector(selector)
  return firstMatch
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n)
  }
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node').querySelectorAll('div')
  return grandNode[3]
} 