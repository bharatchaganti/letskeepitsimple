import "../App.css";
import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./Coin.js";
import HandleError from "./HandleError.js";
class Search extends React.Component{
  //We assign the state variable listOfCoins with an empty array
  //We use the function setListOfCoins to assign value to the state variable
      constructor(props)
      {
          super(props);
          this.state = 
          {
              value: "",
              query: "", //TO store the user query
              results: [], //TO store the results of the query
              loading: false, //To show the data is loading
              message: "", //Store any error message
              final_loading: false,
              currentPage : 1,
              postsPerPage : 10
          };
          this.cancel = "";

 
      }


   fetchSearchResults = (query) => 
  {
    console.log("In Functions");
    const url = "https://jsonplaceholder.typicode.com/todos";
    console.log("After API");
    Axios.get(url).then( 
      (response) => {
          console.log(response.data);
          this.setState({results : response.data});
          this.setState({loading:true});
          this.setState({final_loading : true})
          console.log(query);
          console.log("Printing results");
          console.log(this.state.results);
      }
    )
    .catch(function(error){
          <h5> Error!!!</h5>
        
    });
  }

  handleChange = (event) => {
     this.setState({value: event.target.value});
     this.setState({loading:false});
     this.setState({final_loading : false});
     console.log(this.indexOfLastPage);
  };

  handleClick = () => {
      const query=this.state.value;
      this.setState({ query: query, loading: true, message: "" }, () => {
      this.fetchSearchResults(query); //TO call the function
      console.log(this.indexOfLastPage);
      console.log(query);
      }); //loading:true and message empty: So When typed it moves away
  };

  render(){
    return (
      <div className="App">
        <div className="cryptoHead">
            <h1> "Let's keep it simple" </h1>
        </div>
        <div className="cryptoHeader">
        <input
            type="text"
            placeholder="Search here..."
            onChange= {this.handleChange}
          />
          <button type="button" class="btn btn-secondary" onClick = {this.handleClick}>
              Search
          </button>
        </div>
        <div className = "cryptoDisplay">
              <Coin Posts={this.state.results} loading={this.state.loading} final_loading={this.state.final_loading} value={this.state.value}/>
        </div>
      </div>
    );


  }
}
export default Search;
