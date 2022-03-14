import React from "react";
//import { useEffect, useState } from 'react';
import JsonData from './data.json';
import './App.css'
//var fs = require('fs'); //File System for Node JS will help us till Databases arri


const fetch = require('node-fetch')


let options = {
    method: 'GET'
  };

  
 /* function fetchData(){
      const data = fetch(`https://via.inex.ga/api/songs/top`, options)
    .then(function(response) { return response.json(); })
    .then(function(jsondata) {
       // fs.writeFileSync('src/data.json', JSON.stringify(json));
            console.log(jsondata);
        });
    }

        function fetchData2(){
        const data = fetch(`http://localhost:8080/top`, options)
    .then(function(response) { return response.json(); })
    .then(async function(jsondata) {
       // fs.writeFileSync('src/data.json', JSON.stringify(json));
       console.log(jsondata)
    })
  } */

 function JsonDataDisplay() {
    
    const DisplayData = JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.name}</td>
                    <td>{info.artist}</td>
                    <td>{info.album}</td>
                    <td>{info.link}</td>
                    <td>{info.streak}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Link</th>
                    <th>Streak</th>
                    </tr>
                </thead>
                <tbody>
                 
                {DisplayData}
                   
                    
                </tbody>
            </table>
             
        </div>
    )
 }

 export default JsonDataDisplay;