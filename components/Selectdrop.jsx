import React,{Component,PropTypes} from 'react';
// a select with dynamically created options

class SelectBox extends React.Component {
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
    return (
      <div className="form-group">
        <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
          <option value="Piechart">Piechart</option>
          <option value="Barchart">Barchart</option>
          <option value="Serialchart">Serialchart</option>
        </select>
       
      </div>
    )
  }
}

export default SelectBox;
