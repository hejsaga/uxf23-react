import Image from "./Image";

const Gallery = () => {
  return (
    <section>
      <h1>A gallery</h1>
      <Image
        image="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2022/2022-10/rendering-process.png?sfvrsn=447a7b80_3"
        alt="Image 1"
      />
      <Image
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj3UXGR-qv7l3OCJ1LW3ULvLP_R-DnQPmEgNfEg9Khg&s"
        alt="Image 1"
      />
      <Image
        image="https://www.lifewire.com/thmb/1NOvvEvy7NlIBLshEek1-N01kus=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GameofThronesmeme-a6b89f8bba5b4277ba655fb590a4179f.jpg"
        alt="Image 3"
      />
    </section>
  );
};

export default Gallery;
