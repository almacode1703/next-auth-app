import Image from "next/image";
import img1 from "../../public/assets/101.jpeg";
import img2 from "../../public/assets/102.jpg";
import img3 from "../../public/assets/103.jpg";
import img4 from "../../public/assets/104.jpg";
import img5 from "../../public/assets/105.jpg";

const RandomBackground = () => {
  const imageUrls = [img1, img2, img3, img4, img5];

  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const selectedImageUrl = imageUrls[randomIndex];
  
  const style = {
    opacity: '0.55'
  };

  return (
    <Image
      src={selectedImageUrl}
      alt="Random background image"
      layout="fill"
      objectFit="cover"
      style={style}
    />
  );
};

export default RandomBackground;
