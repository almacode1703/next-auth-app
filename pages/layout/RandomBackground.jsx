import Image from "next/image";
import img1 from "../../public/assets/101.jpeg";
import img2 from "../../public/assets/102.jpg";
import img3 from "../../public/assets/103.jpg";
import img4 from "../../public/assets/104.jpg";
import img6 from "../../public/assets/106.png";
import {useState, useEffect} from 'react'

const RandomBackground = () => {
  const imageUrls = [img1, img2, img3, img4, img6];
  const [backgroundImage, setBackgroundImage] = useState("");

  const getRandomImageUrl = () => imageUrls[Math.floor(Math.random() * imageUrls.length)];

  
  const style = {
    opacity: '0.55',
    transition: 'all 2s ease-in-out', 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage(getRandomImageUrl());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={backgroundImage ? backgroundImage :img1}
      alt="Random background image"
      layout="fill"
      objectFit="cover"
      style={style}
    />
  );
};

export default RandomBackground;
