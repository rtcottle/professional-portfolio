import React from 'react';
import Ecommerce from '../../images/e-commerce.png';
import Notes from '../../images/note-app.png';
import Park from '../../images/parkhopper.png';
import Readme from '../../images/readme.png';
import Stock from '../../images/stock-app.png';
import Text from '../../images/text-editor.png';

export default function Blog() {
  return (
    <div className="px-3">
      <h1>Portfolio</h1>
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-md card m-2">
            <a href="https://github.com/rtcottle/notes">
              {/* <img src={Notes}></img>Notes App */}
            </a>
          </div>
          <div class="col-md card m-2">
            <a href="https://github.com/rtcottle/Park-Hopper">
              Park Hopper App
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-md card m-2">
            <a href="https://github.com/rtcottle/readme-generator">
              README generator
            </a>
          </div>
          <div class="col-md card m-2">
            <a href="https://github.com/rtcottle/text-editor-pwa">
              Text Editor PWA
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-md card m-2">
            <a href="https://github.com/rtcottle/StockArticleComparison">
              Stock Article Comparison App
            </a>
          </div>
          <div class="col-md card m-2">
            <a href="https://github.com/rtcottle/ecommerce-backend">
              E-commerce Backend App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
