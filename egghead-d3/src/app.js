var quantizeScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(["red", "gray", "green"])

console.log(quantizeScale(1))
console.log(quantizeScale(32))
console.log(quantizeScale(34))
console.log(quantizeScale(67))
console.log(quantizeScale(100))

console.log(quantizeScale.invertExtent("gray"))
