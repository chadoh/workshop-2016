var ordinalScale = d3.scaleOrdinal()
  .domain(["poor", "good", "great"])
  .range(["red", "gray", "green"])

console.log(ordinalScale("poor"))
console.log(ordinalScale("good"))
console.log(ordinalScale("great"))
