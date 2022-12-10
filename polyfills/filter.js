Array.prototype.myFilter = function (cb) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    const val = cb(this[i], i, this)
    if (val) {
      newArr.push(this[i])
    }
  }

  return newArr
}

let arr = [1, 2, 3, 4, 5, 6]

console.log(arr.myFilter(item => (item % 2) === 0))
