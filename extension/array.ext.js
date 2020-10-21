Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item)
}

Array.prototype.remove = function (index) {
  this.splice(index, 1)
}

Array.prototype.clear = function () {
  this.splice(0, this.length)
}

Array.prototype.reset = function (...items) {
  this.splice(0, this.length, ...items)
}

Array.prototype.removeByValue = function (val, { many = false } = {}) {
  const evalStr = `
    for (let i = 0; i < this.length; i++) {
      if (this[i] === val) {
        this.splice(i, 1)
        ${many ? '' : 'break'}
      }
    }
  `
  eval(evalStr)
}

Array.prototype.union = function () {
  return [...new Set(this)]
}

Array.prototype.equal = function (array) {
  if (this.length != array.length) {
    return false
  }
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== array[i]) {
      return false
    }
  }
  return true
}

Array.prototype.findItem = function (propName, propValue) {
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    if (item[propName] === propValue) {
      return { ...item }
    }
  }
  return null
}

Array.prototype.findItems = function (propName, propValue) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    if (item[propName] === propValue) {
      result.push({ ...item })
    }
  }
  return result
}

Array.prototype.propToArr = function (propName) {
  const propArr = []
  for (let i = 0; i < this.length; i++) {
    propArr.push(this[i][propName])
  }
  return propArr
}

Array.prototype.sum = function () {
  let sum = 0
  this.forEach(item => sum += item)
  return sum
}
