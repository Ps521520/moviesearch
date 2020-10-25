import React , {useState} from 'react';
import Moviecontent from './Moviecontent.js';

const Content=()=>{
    const [moviename,setName]=useState('');
    const [movies,setMovies]=useState([]);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${moviename}&page=1&include_adult=false`;


    const getMovies= async (e)=>{
        try{
        e.preventDefault();
        const result = await fetch(url);
        const data = await result.json();
        setMovies(data.results);
        console.log(movies);
        }
        catch(error){
           console.log('fetch error ',error.message);
        }
        
    }
    return(
    <>
        <div className="form">
            <form onSubmit={getMovies}>
            <label>MOVIE NAME</label>
            <input type="text" name="moviename" placeholder="Enter Movie Name" required onChange={e => setName(e.target.value)} />
            <button type="submit" >Search</button>
        </form>
        </div>
        
        <div className="cardlist" >

            {movies.filter(movie => movie.poster_path).map(movie => <Moviecontent item={movie} key={movie.id} />)}

        </div>
    </>
    );
};

export default Content;