import React from 'react'
import d3 from 'd3'

class H1BGraph extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <svg width="700" height="500">
          </svg>
        </div>
      </div>
    )
  }
}

React.render(
  <H1BGraph url='data/h1bs.csv' />,
  document.querySelectorAll('.h1bgraph')[0]
)
