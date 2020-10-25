import React from 'react';

const Moviecontent =({item}) =>{
    const postPath = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`
    return (
    <div className="card">
    <div className="cardinner">
        <div className="poster">
           <img src={postPath} alt={item.title} />
        </div>
        <div className="back">
            <h1>{item.title}</h1>
            <h3>Release Date: {item.release_date}</h3>
            <p>Vote Average : {item.vote_average}</p>
            <div className="overview">
                <h2>Overview:</h2>
                <p>{item.overview}</p>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Moviecontent;