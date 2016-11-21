import React from 'react'
import {render} from 'react-dom'
import * as d3 from 'd3'
import { Histogram } from './drawers'
import './style.less'

class H1BGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: [],
    }
  }

  componentWillMount() {
    this.loadRawData();
  }

  loadRawData() {
    const parseDate = d3.timeParse('%m/%d/%Y')
    d3.csv(this.props.url)
      .row(d => {
        if (!d['base salary']) return null;
        return {
          employer: d.employer,
          start_date: parseDate(d['start date']),
          case_status: d['case status'],
          job_title: d['job title'],
          base_salary: Number(d['base salary']),
          salary_to: d['salary to'] ? Number(d['salary to']) : null,
          city: d.city,
          state: d.state,
        }
      })
      .get((error, rows) => {
        if (error) console.error(new Error(error))
        else this.setState({rawData: rows})
      })
  }

  render() {
    if (!this.state.rawData.length) {
      return (
        <h2>Loading about 81,000 H1B visas in the software industry...</h2>
      )
    }

    const params = {
      thresholds: 20,
      width: 500,
      height: 500,
      axisMargin: 83,
      topMargin: 10,
      bottomMargin: 5,
      value: (d) => d.base_salary,
    };
    const fullWidth = 700;

    return (
      <div className="row">
        <div className="col-md-12">
          <svg width={fullWidth} height="500">
            <Histogram {...params} data={this.state.rawData} />
          </svg>
        </div>
      </div>
    )
  }
}

render(
  <H1BGraph url='data/h1bs.csv' />,
  document.querySelectorAll('.h1bgraph')[0]
)
