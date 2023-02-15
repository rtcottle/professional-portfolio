import React from 'react';
const Ecommerce = './images/e-commerce.png';
const Notes = './images/notes-app.png';
const Park = './images/parkhopper.png';
const Readme = './images/readme.png';
const Stock = './images/stock-app.png';
const Text = './images/text-editor.png';

export default function Portfolio() {
  return (
    <div className="px-3">
      <h1>Portfolio</h1>
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
