import React, {useState} from 'react';
import './App.css';

function App() {

  const [pictures, setPictures] = useState([
    {
      name: "coffee",
      path: "./images/coffee.jpg",
      description: "image of a woman drinking coffee"
    },
    {
      name: "crazy cat",
      path: "./images/crazy_cat.jpg",
      description: "image of an insane cat"
    },
    {
      name: "russian granola",
      path: "./images/russian_granola.jpg",
      description: "image of granola from russia"
    },
    {
      name: "street life",
      path: "./images/street.jpg",
      description: "image of a man riding his bike in tokyo"
    }
  ])

  const [imageNumber, setImageNumber] = useState(0)

  return (
    <div>
      <p>{pictures[imageNumber].name}</p>
      <img src={pictures[imageNumber].path} alt="" aria-label={pictures[imageNumber].description} />
      <button
        onClick={()=> {
          
          //setImageNumber(imageNumber === 0 ? pictures.length-1 : imageNumber-1)
          setImageNumber(imageNumber-1) //fails 'renders street life after previous/
        }}
      >
        Previous
      </button>
      <button
        onClick={()=> {
          setImageNumber((imageNumber+1) % (pictures.length))
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
