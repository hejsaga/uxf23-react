const Image = ({ image, alt }) => {
  return (
    <div className="image-container">
      <img src={image} alt={alt} />
    </div>
  );
};

export default Image;
