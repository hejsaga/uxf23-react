import Image from "./Image";

const ImageGrid = () => {
  return (
    <div className="grid">
      <Image
        imageSrc="https://hips.hearstapps.com/hmg-prod/images/close-up-of-purple-crocus-flowers-united-kingdom-uk-royalty-free-image-1674159456.jpg"
        altText="En blomma"
      />
      <Image
        imageSrc="https://hips.hearstapps.com/hmg-prod/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg"
        altText="En blomma 2"
      />
      <Image
        imageSrc="https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg"
        altText="En blomma 3"
      />
      <Image
        imageSrc="https://hips.hearstapps.com/hmg-prod/images/rose-royalty-free-image-1703109087.jpg?crop=0.447xw:1.00xh;0.359xw,0&resize=980:*"
        altText="En blomma 4"
      />
    </div>
  );
};

export default ImageGrid;
