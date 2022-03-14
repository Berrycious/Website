import React from "react";
import JsonData from './data.json';
import './App.css'

function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.name}</td>
                    <td>{info.artist}</td>
                    <td>{info.album}</td>
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