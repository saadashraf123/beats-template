import image1 from "./img/image1.png";
import image2 from "./img/image2.png";
import image3 from "./img/product9.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [image, setImage] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={image1}
          className={` App-logo ${
            image === 1 ? "App-logo-arr" : "App-logo-dep"
          }  `}
          alt="logo"
        />
        <img
          src={image2}
          className={` App-logo ${
            image === 2 ? "App-logo-arr" : "App-logo-dep"
          } `}
          alt="logo"
        />
        <img
          src={image3}
          style={{}}
          className={` App-logo ${
            image === 3 ? "App-logo-arr" : "App-logo-dep"
          } `}
          alt="logo"
        />

        <button
          onClick={() => {
            if (image < 3) {
              setImage(image + 1);
            } else {
              setImage(1);
            }
          }}
        >
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
