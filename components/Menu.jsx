import React from 'react';
import Header from './Header.jsx';
import { Link } from 'react-router'

class Menu extends React.Component {
	constructor(props){
		super(props);
		this.state = {visible:false};
		this.hide = this.hide.bind(this);
	}

	showLeft(){
		this.show();
	}

	show(){
		this.setState({visible:true});
		document.addEventListener("click", this.hide);
	}

	hide(){
		document.removeEventListener("click", this.hide);
		this.setState({visible:false});
	}

	render(){
		return(
			<div>
			    <div className = "header">
                	<Header/>
	                <div className="menubtn">
						<button className="navbar-toggle" type="button"onClick={this.showLeft.bind(this)}>
							<span className="sr-only"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>
               </div>
				
				<div className = "menu" >
						<div className={"left"+" "+ (this.state.visible ? "visible " : "")}>
						<ul>
							<li><Link to="home">Home</Link></li>
							<li><Link to="table">Table</Link></li>
							<li><Link to="charts">Charts</Link></li>
						</ul>
						</div>
				</div>
			</div>
		)
	}
}

export default Menu;