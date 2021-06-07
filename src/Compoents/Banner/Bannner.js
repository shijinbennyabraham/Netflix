import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Bannner() {
    let max=19,min=0
    let random=Math.floor(Math.random() * (max - min + 1)) + min;
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}`).then((responce)=>{
            // console.log(responce.data.results[0])
            setMovie(responce.data.results[random])
        })
    }, [])
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
        className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title: ""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h5 className="description">{movie ? movie.overview: ""}</h5>
            </div>
        <div className="fade_bottom"></div>

        </div>
    )
}

export default Bannner
