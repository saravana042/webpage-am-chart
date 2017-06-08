import React,{Component,PropTypes} from 'react';
import Barchart from './Barchart.jsx';
import Piechart from './Piechart.jsx';

class Charts extends React.Component {
	constructor(props) {
	    super(props);
	    
	    this.state = { value: 'Piechart'};
  	}
  	onChange(e) {
	    this.setState({
	      value: e.target.value
	    })
  	}
  	render() {
  			let getchart = null;
  			if (this.state.value == "Piechart") {
		     getchart = <Piechart/>
		    } else {
		      getchart = <Barchart/>
		    }
	    return (
	    <div className="wrapper">
	    	<h2>Charts</h2>
	      <div className="form-group">
	        <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
	          <option value="Piechart">Piechart</option>
	          <option value="Barchart">Barchart</option>
	        </select>
	       	{getchart}	       	
	      </div>
	    </div>
	    )
  	}
}

export default Charts;