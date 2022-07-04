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
          };
          this.cancel = "";
      }

fetchSearchResults = (query) => 
  {
    const url = `https://serpapi.com/search.json?engine=google&q=${query}&api_key=4cf5a118b49b252e2078c2ffd799a905c598ecd74fc8c09252f72b68d20b1349`;
    Axios.get(url).then( 
      (response) => {
          this.setState({results : response.data.organic_results});
          this.setState({loading:true});
          this.setState({final_loading : true})
          if(Object.keys(this.state.results).length==0){
              throw "Error Found"
          }
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
  };

  handleClick = () => {
      const query=this.state.value;
      this.setState({ query: query, loading: true, message: "" }, () => {
      this.fetchSearchResults(query); //TO call the function
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
        {
          //We extract the individual data from the array
                
                  this.state.results && this.state.results.length ?
                  this.state.results.map((result) => {
                    //return <h1>{coin.name}</h1>; //Returning coin name ..You can check in the inspect element.
                    //We can also pass to the component and return it from there
                    return (
                      <Coin
                        //passing props
                        title={result.title}
                        link={result.link}
                        description={result.snippet}
                      />
                    ); //To use we need to import - See above
                  })  : this.state.loading ? this.state.value!=""? this.state.final_loading? <h3> No data found </h3> : null : null : null
        }
        {
           this.state.loading? this.state.value =="" ? <h3> Enter some data</h3> : null : null
        }
        
      
        </div>
        
      </div>
    );


  }
  
}

export default Search;
