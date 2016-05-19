'use strict';

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    console.log(this.props);
    var photos = this.state.data.map(function(photo) {
      return <img alt={photo.name} src={photo.url} />;
    });
    
    return (
              <div id="photoList">
                {photos}
              </div>
    );
  }
}

class Forward extends React.Component {
    handleChange() {
        console.log('click');
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
                        <PhotoList url="/api/images" />
                        <Forward />
                        <Chart />
                    </div>
        , document.getElementById('container'));
})();