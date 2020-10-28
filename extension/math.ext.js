Object.assign(Math, {
  randomRange (minValue, maxValue) {
    var range = maxValue - minValue
    return(minValue + Math.round(Math.random() * range))
  }
})