import SearchSection from './SearchSection'
import React from "react"
import { useState } from 'react'
import {useEffect} from "react"



function App() {
  
    const [url,setUrl] = React.useState(`https://www.omdbapi.com/?s="top"&type=movie&page=1&[apikey]`)
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputValue, setInputValue] = useState("")
    const [btn, setBtn] = useState(true)
    const [title, setTitle] = useState("")


    const handleInputChange = (event) => {
      setInputValue(event.target.value)// Ruft die übergebene Funktion mit dem aktuellen Wert auf
    };

    function toggle(){

      setUrl(`https://www.omdbapi.com/?s=${inputValue}&type=movie&page=1&[apikey]`)
      setBtn(x=>!x)

      
    }
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json()) // Erstes `.then()` verarbeitet die Antwort als JSON
        .then((data) => {
          if (data.Search) {
            setMovies(data.Search.slice(0, 20)); // Speichert die ersten 20 Filme
            console.log(data)
            
        }})
        .catch((error) => {
          console.error("Fehler beim Abrufen der Filmdaten:", error);
        })
        .finally(() => {
          setLoading(false); // Ladezustand beenden
        })
        setTitle(inputValue)
    }, [btn]);
  
    return (
      <>
      <SearchSection
        
        handleInputChange={handleInputChange }
        toggle = {toggle}


      />

      

      
      <div>
        <h2>{title ? `You searched for ${title}`:"Trending Movies" }</h2>
        {loading ? (
          <p>Loading</p>
        ) : (

          
          <div className='container'>
            {movies.map((movie) => (
                
                <div className="container">

                <div className="movie">
                        <h3>{movie.Title}</h3>
                        <div className="image-wrapper">
                            <img alt={movie.alt} width="140" src={movie.Poster}/>
                            <p>{movie.Year}</p>
                        </div>
                        
                        
                        </div>
        
        
                </div>

                
            ))}
          </div>
        )}
      </div>
      </> 
    );
    
    
  };
  
  


export default App
