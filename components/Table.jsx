import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Table extends React.Component {
   constructor(props){
      super(props);
      this.state = {appData: []};
   }

   componentDidMount() {
      axios.get('tabledata.json')
      .then((result)=> {
         this.setState({
            appData: result.data
         });
      }
      )
      .catch(function (error) {
         console.log(error);
      });
   }
   
   render() {
      return (
         <div>
            <Content data ={this.state.appData}/>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      let articles = this.props.data.map(function(articleData, index){
         return(
            <tr key = {index}>
               <td>{articleData.id}</td>
               <td>{articleData.name}</td>
               <td>{articleData.address}</td>
               <td>{articleData.phone}</td>
            </tr>
         )
      });
      return (
      	<div className="wrapper">
         <table>
            <tbody>
               <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>ADDRESS</th>
                  <th>PHONE</th>
               </tr>
               {articles}
           </tbody>
         </table>
         </div>
      );
   }
}

export default Table;
