import "./../styles/gallery.css";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

function Gallery() {

  const images = [
    gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6
  ];

  return (
    <section className="gallery">

      <div className="container">

        <div className="gallery-heading">

          <span>OUR GALLERY</span>

          <h2>Inside Forge Fitness</h2>

          <p>
            A glimpse of our training environment,
            equipment and fitness community.
          </p>

        </div>


        <div className="gallery-grid">

          {images.map((image, index) => (

            <div className="gallery-item" key={index}>

              <img
                src={image}
                alt={`Forge Fitness ${index + 1}`}
                loading="lazy"
              />

              <div className="gallery-overlay">
                <span>FORGE FITNESS</span>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;