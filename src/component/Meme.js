import { arrMeme } from "../meme-array";

import React from "react";


export function Meme(param){
    const [meme, setMeme] = React.useState(
       {
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg",
    } 
    )
    const [allMemeImage] = React.useState(arrMeme)
    
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
        
    }

    function clicked(){
        
        const memeArray = allMemeImage.data.memes
        const random = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[random].url
        setMeme(prev => ({
            ...prev,
            randomImage: url,

        }))
        
        
    }
    return(
        <main>
            <div className="form">
               
                <input 
                type="text" 
                className="form--input" 
                placeholder="left"
                name="topText"               
                value={meme.topText}
                onChange={handleChange}
                ></input>
                <input 
                type="text" 
                className="form--input" 
                placeholder="right"
                name="bottomText"
                value={meme.bottomText}     
                onChange={handleChange}         
                ></input>
                <button onClick={clicked} className="form--button">Get a new meme image  🖼</button>
                
                                
                            
                
            </div>
            <div className="img-container">
                <img src={meme.randomImage} alt=""></img> 
                <h2 className="topText">{meme.topText}</h2>
                <h2 className="bottomText">{meme.bottomText}</h2>
            </div>
        </main>
    )   
    
    
}