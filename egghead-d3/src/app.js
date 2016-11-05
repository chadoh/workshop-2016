// d3.csv('data/data.csv', function(data) {
//   console.log(data)
// })

// d3.tsv('data/data.tsv', function(data) {
//   console.log(data)
// })

d3.json('data/data.json', function(data) {
  var min = d3.min(data, function(d) {
    return d.age
  })
  console.log(min)
  var max = d3.max(data, function(d) {
    return d.age
  })
  console.log(max)
  var extent = d3.extent(data, function(d) {
    return d.age
  })
  console.log(extent)

  var scale = d3.scaleLinear()
    .domain(extent)
    .range([0, 600])
  console.log(scale(14))
  console.log(scale(22))
  console.log(scale(37))

  var ages = d3.set(data, function(d) {
    return d.age;
  })
  console.log(ages.values())
})

