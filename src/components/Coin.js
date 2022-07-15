import React from "react";
import "../App.css";

function Coin({Posts,loading,final_loading,value}){
  console.log("In Coin Class");
  console.log(Posts.length);
  console.log("After Coin Class");
  return(
    
    
    
  //We extract the individual data from the array
          
         
          <ul>
         { Posts.map(Post => (
            //return <h1>{coin.name}</h1>; //Returning coin name ..You can check in the inspect element.
            //We can also pass to the component and return it from there
            //To use we need to import - See above
            <li>
                <h1>Name: {Post.id}</h1>
                <h4>Website: {Post.title} </h4>
                <h6>Description: {Post.completed}</h6>
            </li>
           
          ))}  
          </ul>
          

);
}

export default Coin;
