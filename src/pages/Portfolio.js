import React from 'react';
import Ecommerce from '../images/e-commerce.png';
import Notes from '../images/notes-app.png';
import Park from '../images/parkhopper.png';
import Readme from '../images/readme.png';
import Stock from '../images/stock-app.png';
import Text from '../images/text-editor.png';

export default function Portfolio() {
  return (
    <div className="px-3">
      <h2>Portfolio</h2>
      <div class="container">
        <div class="row justify-content-around">
          <a href="https://github.com/rtcottle/notes" class="col-md m-2">
            <img src={Notes} alt="Note app" class="screenshot"></img>
          </a>
          <a href="https://github.com/rtcottle/Park-Hopper" class="col-md m-2">
            <img src={Park} alt="ParkHopper" class="screenshot"></img>
          </a>
        </div>
        <div class="row">
          <a
            href="https://github.com/rtcottle/readme-generator"
            class="col-md m-2"
          >
            <img src={Readme} alt="Readme Generator" class="screenshot"></img>
          </a>
          <a
            href="https://github.com/rtcottle/text-editor-pwa"
            class="col-md m-2"
          >
            <img src={Text} alt="Text Editor PWA" class="screenshot"></img>
          </a>
        </div>
        <div class="row">
          <a
            href="https://github.com/rtcottle/StockArticleComparison"
            class="col-md m-2"
          >
            <img src={Stock} alt="Stock Article App" class="screenshot"></img>
          </a>
          <a
            href="https://github.com/rtcottle/ecommerce-backend"
            class="col-md m-2"
          >
            {/*TODO: fix this image  */}
            <img
              src={Ecommerce}
              alt="E-commerce Backend App"
              class="screenshot"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
