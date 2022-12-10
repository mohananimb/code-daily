Array.prototype.myReduce = function (cb, initial) {
  let acc = initial
  for (let i = 0; i < this.length; i++) {
    if (acc) {
      acc = cb.call(undefined, acc, this[i], i, this)
    } else {
      acc = this[i]
    }
    }
    
    return acc
}

let arr = [2, 4, 6, 7]

console.log(arr.myReduce((curr, acc) => curr * acc))
