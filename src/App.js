import image1 from "./img/image1.png";
import image2 from "./img/image2.png";
import image3 from "./img/product9.png";
import arrow from "./img/arrow.png";
import logo from "./img/beats-logo.png";
import facebook from "./img/facebook.png";
import twitter from "./img/twitter.png";
import instagram from "./img/instagram.png";

import "./App.css";
import { useState } from "react";

function App() {
  const [image, setImage] = useState(1);

  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
          <img src={logo} style={{}} alt="logo" />
        </div>
        <div className="nav-items">
          <span>Home</span>
          <span>About</span>
          <span>Gallery</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="App-header">
        <span className="upper-circle"></span>
        <div className="title-wrapper">
          <h1>New Era Of Sounds</h1>
          <p>
            Beats by Dre brings you the best in wireless headphones, earbuds and
            music, with style and immersive sound.
          </p>
        </div>
        <img
          src={image1}
          className={` App-image ${
            image === 1 ? "App-image-arr" : "App-image-dep"
          }  `}
          alt="image1"
        />
        <img
          src={image2}
          className={` App-image ${
            image === 2 ? "App-image-arr" : "App-image-dep"
          } `}
          alt="image2"
        />
        <img
          src={image3}
          style={{}}
          className={` App-image ${
            image === 3 ? "App-image-arr" : "App-image-dep"
          } `}
          alt="image3"
        />

        <span className="lower-circle"></span>
        <div
          className="arrow-wrapper"
          onClick={() => {
            if (image < 3) {
              setImage(image + 1);
            } else {
              setImage(1);
            }
          }}
        >
          <img src={arrow} style={{}} alt="arrow" />
        </div>
      </div>
      <div className="footer">
        <div className="footer-items">
          <span>&#169;2024 Dummy</span>
          <span>Terms</span>
          <span>Privacy</span>
        </div>
        <div className="footer-item-icons">
          <img src={facebook} style={{}} alt="facebook" />
          <img src={twitter} style={{}} alt="twitter" />
          <img src={instagram} style={{}} alt="instagram" />
        </div>
      </div>
    </div>
  );
}

export default App;
