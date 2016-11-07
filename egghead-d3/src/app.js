var scores = [
  { name: "Alice", score: 96 },
  { name: "Billy", score: 83 },
  { name: "Cindy", score: 91 },
  { name: "David", score: 96 },
  { name: "Emily", score: 88 },
]

var bar = d3.select('.chart')
  .append('svg')
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('g')
  .data(scores)
  .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(0, ${i * 33})`)

bar.append('rect')
    .style('width', d => d.score)
    .classed('bar', true)

bar.append('text')
    .attr('y', 20)
    .attr('x', 5)
    .text(d => `${d.name} (${d.score})`)
