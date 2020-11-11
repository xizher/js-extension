exports.randomRange = (minValue, maxValue) => {
  const range = maxValue - minValue
  return minValue + Math.round(Math.random() * range)
}