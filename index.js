function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < ranks.length; i++) {
    let rank = ranks[i].children
    for (let i = 0; i < rank.length; i++) {
      rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.querySelector('#grand-node')

  while (node.children[0]) {
    node = node.children[0]
  }

  return node
}
