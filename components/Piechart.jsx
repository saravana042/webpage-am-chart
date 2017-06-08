import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import AmCharts from '@amcharts/amcharts3-react';

class Piechart extends React.Component {
	constructor(props) {
	    super(props);
	   
      		dataProvider: {}
    
  	}
	render(){
		const config = {
			"type": "pie",
	"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
	"titleField": "category",
	"valueField": "column-1",
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"align": "center",
		"markerType": "circle"
	},
	"titles": [],
	"dataProvider": [
		{
			"category": "category 1",
			"column-1": 8
		},
		{
			"category": "category 2",
			"column-1": 6
		},
		{
			"category": "category 3",
			"column-1": 2
		}
	]
		};
		console.log(config);
		return(
			<div>
				<h3>Piechart</h3>
				<div className="amPie">
				<AmCharts.React {...config}/>
				</div>
			</div>
		)
	}
}

export default Piechart;