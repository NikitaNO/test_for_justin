import React, { Component } from 'react'
import { Line } from 'react-chartjs'
import { connect } from 'react-redux'
import { setMonthly } from '../redux/modules/accounts'

@connect(
  ({ accounts }) => ({ accounts: accounts.accounts, monthly: accounts.monthly }),
  {
    setMonthly
  }
)
export default class Chart extends Component {
  constructor (props) {
    super(props)

    this.labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
    this.chartData = {
      labels: this.labels.slice(),
      datasets: [
        {
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: []
        }
      ]
    }
    this.chartOptions = {
      responsive: true,
      scaleShowGridLines : true,
      scaleGridLineColor : "rgba(0,0,0,.05)",
      scaleGridLineWidth : 1,
      scaleShowHorizontalLines: true,
      pointDot : true,
      pointDotRadius : 4,
      pointDotStrokeWidth : 1,
      pointHitDetectionRadius : 20,
      datasetStroke : true,
      datasetStrokeWidth : 2,
      offsetGridLines: false
    }
    this.state = {
      values: [],
      sum: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.accounts !== nextProps.accounts || this.props.monthly !== nextProps.monthly) {
      const sum = nextProps.accounts.reduce((acc, val) => acc + val, 0);

      this.setState({
        sum,
        values: this.labels.map((l, i) => sum - (nextProps.monthly * i))
      })
    }
  }

  handleInputChange = e => {
    const value = +e.target.value
    if (value) {
      this.setState({ monthly: value})
      this.props.setMonthly(value);
    }
  };

  render () {
    const { values, sum, monthly } = this.state;

    this.chartData.datasets[0].data = values;
    this.chartData.labels = this.labels.slice();

    return (
      <div className="wrap__content">
        <div className="wrap__content-title">
          <h3>{`Initial balance ${sum}`}</h3>
          <br/>
          <label htmlFor="monthly">Monthly payment</label>
          <input type="number" name="monthly" value={monthly} onChange={this.handleInputChange}/>
        </div>
        <Line data={this.chartData} options={this.chartOptions} />
      </div>
    )
  }
}