import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Feed from  './Feed';
import Widgets from './Widgets';

//declare your functions below


function App() {
  return (
    <div className="app">
     <h3 class="cream"></h3>
      {/* sideBar */}
    <Sidebar />

      {/* Feed */}
    <Feed />

      {/* Widgets */}
    <Widgets /> 


    </div>
  );
}

export default App;