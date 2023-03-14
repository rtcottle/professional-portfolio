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
      <div className="container">
        <div className="row justify-content-around">
          <a href="https://github.com/rtcottle/notes" className="col-md m-2">
            <img src={Notes} alt="Note app" className="screenshot"></img>
          </a>
          <div className="col-md m-2">
            <p>
              <b>Link: </b>
              <a href="https://notes-taker-json-app.herokuapp.com/">
                https://notes-taker-json-app.herokuapp.com/
              </a>
              <br />
              <b>GitHub: </b>
              <a href="https://github.com/rtcottle/notes">
                https://github.com/rtcottle/notes
              </a>
              <br />
              <span>
                <b>Summary: </b>This application is a full-stack application and
                notes taking app that allows the user to add and remove notes
                for quick reference.
              </span>
              <br />
              <span>
                <b>Technologies: </b> Express.js, Express Router, JavaScript,
                HTML, & CSS.
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md m-2">
            <p>
              <b>Link: </b>
              <a href="https://notes-taker-json-app.herokuapp.com/">
                https://notes-taker-json-app.herokuapp.com/
              </a>
              <br />
              <b>GitHub: </b>
              <a href="https://github.com/rtcottle/notes">
                https://github.com/rtcottle/notes
              </a>
              <br />
              <span>
                <b>Summary: </b>This application is a full-stack application and
                notes taking app that allows the user to add and remove notes
                for quick reference.
              </span>
              <br />
              <span>
                <b>Technologies: </b> Express.js, Express Router, JavaScript,
                HTML, & CSS.
              </span>
            </p>
          </div>
          <a
            href="https://github.com/rtcottle/Park-Hopper"
            className="col-md m-2"
          >
            <img src={Park} alt="ParkHopper" className="screenshot"></img>
          </a>
        </div>
        <div className="row">
          <a
            href="https://github.com/rtcottle/readme-generator"
            className="col-md m-2"
          >
            <img
              src={Readme}
              alt="Readme Generator"
              className="screenshot"
            ></img>
          </a>
          <a
            href="https://github.com/rtcottle/text-editor-pwa"
            className="col-md m-2"
          >
            <img src={Text} alt="Text Editor PWA" className="screenshot"></img>
          </a>
        </div>
        <div className="row">
          <a
            href="https://github.com/rtcottle/StockArticleComparison"
            className="col-md m-2"
          >
            <img
              src={Stock}
              alt="Stock Article App"
              className="screenshot"
            ></img>
          </a>
          <a
            href="https://github.com/rtcottle/ecommerce-backend"
            className="col-md m-2"
          >
            {/*TODO: fix this image  */}
            <img
              src={Ecommerce}
              alt="E-commerce Backend App"
              className="screenshot"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
