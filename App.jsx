import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import myStyle from './webpage.less';


class App extends React.Component {
   render() {
      return (
         <div>
           
            <div id="container">
                <Menu/>
                  {this.props.children}
                  <Footer/>
            </div>
         </div>
      );
   }
}

export default App;