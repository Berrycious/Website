//import logo from './logo.svg';
import './App.css';
import JsonDataDisplay from './table';
import { useEffect } from 'react';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

let options = {
  method: 'GET'
};


Sentry.init({
  dsn: "https://d4689097fdef46be943ca9eed1ba1754@o1166757.ingest.sentry.io/6257300",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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
