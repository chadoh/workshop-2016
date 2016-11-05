var timeScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date()])
  .range([0, 100])

console.log(timeScale.invert(50))
console.log(timeScale(new Date()))
