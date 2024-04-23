const Image = ({ imageSrc, altText }) => {
  return (
    <div className="image-container">
      <img src={imageSrc} alt={altText} />
    </div>
  );
};

export default Image;
