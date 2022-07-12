
import React from "react";


export function Meme(param){
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function apiCall(){
            const res = await fetch('https://api.imgflip.com/get_memes')
            const json = await res.json()
            setAllMemes(json.data.memes)
        } 
        apiCall()      
    },
    [])

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function clicked(){
        let random = Math.floor(Math.random() * allMemes.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemes[random].url
        })
            
        )
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