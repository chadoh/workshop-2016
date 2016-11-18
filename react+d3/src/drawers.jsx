import React from 'react'
import * as d3 from 'd3'

export class Histogram extends React.Component {
  constructor(props) {
    super(props)
    this.histogram = d3.histogram()
    this.widthScale = d3.scaleLinear()
    this.yScale = d3.scaleLinear()

    this.updateD3(props)
  }

  componentWillReceiveProps(props) {
    this.updateD3(props)
  }

  updateD3(props) {

  }

  render() {
    const translate = `translate(0, ${this.props.topMargin})`
    return (
      <g className="histogram" transform={translate}>
      </g>
    )
  }
}
