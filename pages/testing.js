import { useEffect, useState } from "react";


const Testing = () => {

  const [images, setImages] = useState([]);
  const [unsplash, setUnsplash] = useState([]);
  useEffect(() => {
    const getList = async() => {
      const response = await fetch('/list')
      .then(response => response.json())
      .then(image => setImages(image));
      console.log(images);
    }

    getList();
  },[])

  // useEffect(() => {
  //   const getUnsplash = async() => {
  //     const response = await fetch('https://source.unsplash.com/random',{headers:{'Accept':'application/json',}})
  //     .then(response => response.json())
  //     .then(unsplash => setUnsplash(unsplash));
  //     console.log(response);
  //   }

  //   getUnsplash();
  // },[])

  return (
    <div>
      {images.map((image) => {return <img key={image.id} src={image.url} alt={image.author}/>})}
      <img src="https://picsum.photos/200/300?random=1"/>
      <img src="https://picsum.photos/200/300?random=2"/>
    </div>
  )
}

export default Testing;