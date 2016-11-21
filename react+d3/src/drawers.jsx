import React from 'react'
import * as d3 from 'd3'

export class Histogram extends React.Component {
  constructor(props) {
    super(props)
    this.histogram = d3.histogram()
    this.widthScale = d3.scaleLinear()
    this.yScale = d3.scaleLinear()
    this.state = { bars: []}
  }

  componentDidMount() {
    this.updateD3(this.props)
  }

  componentWillReceiveProps(props) {
    this.updateD3(props)
  }

  updateD3 = (props) => {
    this.histogram
      .thresholds(props.thresholds)
      .value(this.props.value)

    const bars = this.histogram(props.data)
    const counts = bars.map(d => d.length)

    this.setState({bars})

    this.widthScale
      .domain([d3.min(counts), d3.max(counts)])
      .range([9, props.width - props.axisMargin])

    this.yScale
      .domain([0, d3.max(bars.map(d => d.x1))])
      .range([0, props.height - props.topMargin - props.bottomMargin])
  }

  makeBar = (bar) => {
    const percent = bar.length / this.props.data.length * 100;

    return React.createElement(HistogramBar, {
      percent,
      x: this.props.axisMargin,
      y: this.yScale(bar.x0),
      width: this.widthScale(bar.length),
      height: this.yScale(bar.x1 - bar.x0),
      key: `histogram-bar-${bar.x0}-${bar.length}`,
    })
  }

  render() {
    const translate = `translate(0, ${this.props.topMargin})`
    return (
      <g className="histogram" transform={translate}>
        <g className="bars">
          {this.state.bars.map(this.makeBar)}
        </g>
      </g>
    )
  }
}

class HistogramBar extends React.Component {
  render() {
    const { x, y, width, height, percent } = this.props;
    const translate = `translate(${x}, ${y})`;
    let label = `${percent.toFixed(0)}%`;
    if (percent < 1) label = `${percent.toFixed(0)}%`;
    if (width < 20) label = label.replace('%', '');
    if (width < 10) label = '';

    return (
      <g transform={translate} className="bar">
        <rect width={width} height={height - 2}
          transform="translate(0, 1)" />
        <text textAnchor="end"
          x={width - 5} y={height / 2 + 3}>
          {label}
        </text>
      </g>
    )
  }
}
