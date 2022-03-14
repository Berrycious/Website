//import logo from './logo.svg';
import './App.css';
import JsonDataDisplay from './table';
import { useEffect } from 'react';
let options = {
  method: 'GET'
};

function App() {
  const makeAPICall = async () => {
    try {
      const data = fetch(`http://localhost:8080/top`, options) //Backend Connection
    .then(function(response) { return response.json(); })
    .then(function(jsondata) {
            console.log(jsondata);
        });
        console.log(data);
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div className="App">
      <JsonDataDisplay/>
    </div>
  );
}

export default App;
