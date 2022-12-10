Array.prototype.myMap = function (cb) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this))
  }

  return newArr
}

let arr = [1, 2, 3, 4, 5, 6]

console.log(arr.myMap(item => item * 2))
