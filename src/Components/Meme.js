import React, {useState, useEffect} from "react";

export default function Meme(props){
    const [meme, setMeme] = useState({
        memeImage: "https://i.imgflip.com/4t0m5.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    const [formData, setFormData] =  useState({
        topText : "",
        bottomText : "",
    })

    useEffect(function (){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            memeImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name] : value
        }))
    }

    return(
        <div className="container-fluid pt-4">
            <div className="row">
                <div className="col-6">
                    <input
                        type="text"
                        id="top-text"
                        className="form-control"
                        placeholder="Top Text"
                        name="topText"
                        value={formData.topText}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-6">
                    <input
                        type="text"
                        id="bottom-text"
                        className="form-control"
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={formData.bottomText}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="d-grid pt-4">
                <button className="btn custom-button text-white" onClick={getMemeImage} type="button">Get a new meme image  <i className="bi bi-image"/></button>
            </div>

            <div className="d-flex justify-content-center pt-4 meme">
                <img src={meme.memeImage} className="img-fluid meme-image rounded" alt="Generated Meme Image" />
                <h2 className="meme--text top">{formData.topText}</h2>
                <h2 className="meme--text bottom">{formData.bottomText}</h2>
            </div>
        </div>
    )
}