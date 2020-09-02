import React from 'react';
import './App.css';
import Row from './component/Row';
import requests from './request';
import Banner from './component/Banner';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row 
        title= "NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow = {true} 
      />
     <Row title= "TRENDING NOW" fetchUrl={requests.fetchTrending} />
     <Row title= "Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title= "Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title= "Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title= "Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title= "Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row title= "Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
