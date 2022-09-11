//coded by Steve Muindi

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import { useState } from 'react'; // useState will be used to store the data from the API
import { useEffect } from 'react'; // useEffect hook will be used to fetch the data from the API
//import Filter from './Components/Filter/Filter';
//import Search from './Components/Search/Search';
///import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';
//import Pagination from './Components/Pagination/Pagination';




function App() {

  // Rick-Morty API
  let api = `https://rickandmortyapi.com/api/character/`;


  // useEffect hook will be used to fetch the data from the API
  useEffect (() => { 
    (async function () {  // makes request to the API ansynchorously
      let data = await fetch(api) // await the response from the API until it is executed
          .then((response) => response.json()); // convert the response to JSON
          updateFetchedData(data); // update the fetched data
    })();
  }, [api])

  // useState will store data from API
  let [fetchedData, updateFetchedData] = useState([]);
  //fetchedData will store the data from the API
  //updateFetchedData will update the data from the API


  // eslint-disable-next-line no-unused-vars
  let {info, results} = fetchedData; // destructure the data from the API into info and results
                      //means unpacking the data from the API into info and results
                      //unpacking values from arrays into distinct variables


  return (
    <div className="App">
      <h1 style={{color: 'red' , 
      textAlign: 'center', 
      fontFamily: 'cursive',
      fontSize: 50}}>REACT - RICK AND MORTY API</h1>
    <h1 className="text-center mb-3">Characters</h1>
    <div className="container">
    <div className="row">
      {/* Filter component will be placed here */}
      <div className="col-lg-8 col-12">
        <div className="row">
          <Card results={results}/>
        </div>
      </div>
    </div>
    </div>
</div>
  );
}

export default App;
