'use strict';

class Photo extends React.Component {
  render() {
    return <img alt={this.props.caption} src={this.props.src} />;
  }
}

class Forward extends React.Component {
    handleChange() {
        barData[0].name = "CODEY";
        console.log(barData);
        console.log(BarChart());
    }

    render() {
        return <button onClick={this.handleChange}>Forward</button>;
    }
}

var BarChart = rd3.BarChart
var barData = [
  {
    "name": "Series A",
    "values": [
      { "x": 1, "y":  91},
      { "x": 2, "y": 290},
      { "x": 3, "y": -25},
    ]
  },
  {  
    "name": "Series B",
    "values": [
      { "x": 1, "y":  9},
      { "x": 2, "y": 49},
      { "x": 3, "y": -20},
    ]
  },
  {  
    "name": "Series C",
    "values": [
      { "x": 1, "y":  14},
      { "x": 2, "y": 77},
      { "x": 3, "y": -70},
    ]
  }
];

class Chart extends React.Component {
    render() {
        return <BarChart
                  data={barData}
                  width={500}
                  height={300}
                  title="Bar Chart"
                  xAxisLabel="Value"
                  yAxisLabel="Label"
                  />
    }
}


(function() {
    ReactDOM.render(<div>
                        <Photo caption="codey" src="image.jpg" />
                        <Forward />
                        <Chart />
                    </div>
        , document.getElementById('container'));
})();