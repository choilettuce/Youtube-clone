import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header/>
      <div className='app_page'>
      <Sidebar />

      <RecommendedVideos />
      
      </div>
      
    </div>
  );
}

export default App;
