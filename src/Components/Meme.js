import React from "react";
import memesData from "./MemesData";

export default function Meme(props){
    //Initial state
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url)
    }

    console.log(memeImage)
    return(
        <div className="container-fluid pt-4">
            <div className="row">
                <div className="col-6">
                    <input type="text" className="form-control" id="top-text" placeholder="Top Text" />
                </div>

                <div className="col-6">
                    <input type="text" className="form-control" id="top-text" placeholder="Bottom Text" />
                </div>
            </div>
            <div className="d-grid pt-4">
                <button className="btn custom-button text-white" onClick={getMemeImage} type="button">Get a new meme image  <i className="bi bi-image"/></button>
            </div>

            <div className="d-flex justify-content-center pt-4">
                <img src={memeImage} className="img-fluid custom-meme-img rounded" alt="Generated Meme Image" />
            </div>
        </div>
    )
}