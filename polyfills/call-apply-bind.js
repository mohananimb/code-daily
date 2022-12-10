Function.prototype.myCall = function (obj, ...args) {
  obj.fn = this
  return obj.fn(...args)
}

Function.prototype.myApply = function (obj, args) {
  obj.fn = this
  return obj.fn(...args)
}

Function.prototype.myBind = function (obj, ...args) {
  obj.fn = this
  return function (...arg) {
    return obj.fn(...args, ...arg)
  }
}
const obj = {
  name: 'Manish',
  profession: 'SDE',
  age: 26
}

function getData (city, state, r) {
  return `${this.name} is ${this.profession} and ${this.age} years old ${
    city ? `and lives in ${city} ${state} ${r}` : ''
  }`
}

console.log(getData.call(obj))
console.log(getData.myApply(obj, ['Pune', "Mah"]))
const bindFn = getData.myBind(obj, "Pune", "Mah")
console.log(bindFn(67))
