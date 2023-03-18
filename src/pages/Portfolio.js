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
        {/* first row of picture and description */}
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
        {/* second row of picture and description */}
        <div className="row">
          <div className="col-md m-2">
            <p>
              <b>Link: </b>
              <a href="https://park-hopper-app.herokuapp.com/">
                https://park-hopper-app.herokuapp.com/
              </a>
              <br />
              <b>GitHub: </b>
              <a href="https://github.com/rtcottle/Park-Hopper">
                https://github.com/rtcottle/Park-Hopper
              </a>
              <br />
              <span>
                <b>Summary: </b>This application is a full-stack application
                that allows the user to journal their national park adventures.
                This app relies on Sequelize, MySQL, Handlebars, JQuery, and
                Express.js. This is a team project.
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
        {/* third row of picture and description */}
        <div className="row justify-content-around">
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
          <div className="col-md m-2">
            <p>
              <b>Video Link: </b>
              <a href="https://drive.google.com/file/d/1CFXFXSCEnvwX0oDdUZck_2fa6rP3CxBW/view">
                here
              </a>
              <br />
              <b>GitHub: </b>
              <a href="https://github.com/rtcottle/readme-generator">
                https://github.com/rtcottle/readme-generator
              </a>
              <br />
              <span>
                <b>Summary: </b>This readme generator is a back-end application
                that allows a developer to answer some console questions to
                generate a quality readme.
              </span>
              <br />
              <span>
                <b>Technologies: </b> Express.js, Express Router, Node,
                Inquirer, & JavaScript.
              </span>
            </p>
          </div>
        </div>
        {/* fourth row of picture and description */}
        <div className="row">
          <div className="col-md m-2">
            <p>
              <b>Link: </b>
              <a href="https://pwa-text-editor23.herokuapp.com/">
                https://pwa-text-editor23.herokuapp.com/
              </a>
              <br />
              <b>GitHub: </b>
              <a href="https://github.com/rtcottle/text-editor-pwa">
                https://github.com/rtcottle/text-editor-pwa
              </a>
              <br />
              <span>
                <b>Summary: </b>This is a text editor and progressive web app
                that highlights syntax for javascript.
              </span>
              <br />
              <span>
                <b>Technologies: </b> JavaScript, Webpack, WorkBox, HTML, CSS,
                Express, & Babel.
              </span>
            </p>
          </div>
          <a
            href="https://github.com/rtcottle/text-editor-pwa"
            className="col-md m-2"
          >
            <img src={Text} alt="Text Editor PWA" className="screenshot"></img>
          </a>
        </div>
        {/* fifth row of picture and description */}
        <div className="row justify-content-around">
          <a
            href="https://github.com/rtcottle/StockArticleComparison"
            className="col-md m-2"
          >
            <img
              src={Stock}
              alt="Stock Article Comparison"
              className="screenshot"
            ></img>
          </a>
          <div className="col-md m-2">
            <p>
              <b>Link: </b>
              <a href="https://rtcottle.github.io/StockArticleComparison/">
                https://rtcottle.github.io/StockArticleComparison/
              </a>
              <br />
              <b>GitHub: </b>
              <a href="https://github.com/rtcottle/StockArticleComparison">
                https://github.com/rtcottle/StockArticleComparison
              </a>
              <br />
              <span>
                <b>Summary: </b>This app allows the user to compare stocks and
                articles about the company to make wise stock market decisions.
                This is a team project.
              </span>
              <br />
              <span>
                <b>Technologies: </b> JavaScript, Alphavantage API, EOD API,
                Date Picker, Bulma, HTML, & CSS.
              </span>
            </p>
          </div>
        </div>
        {/* sixth row of picture and description */}
        <div className="row">
          <div className="col-md m-2">
            <p>
              <b>Video Link: </b>
              <a href="https://drive.google.com/file/d/1w_csS1jl8Z70b8mmLtp31pR1dMSHdQZy/view">
                here
              </a>
              <br />
              <b>GitHub: </b>
              <a href="https://github.com/rtcottle/ecommerce-backend">
                https://github.com/rtcottle/ecommerce-backend
              </a>
              <br />
              <span>
                <b>Summary: </b>This is a back-end application that is an
                e-commerce application.
              </span>
              <br />
              <span>
                <b>Technologies: </b> JavaScript, Sequelize, Express, & SQL.
              </span>
            </p>
          </div>
          <a
            href="https://github.com/rtcottle/ecommerce-backend"
            className="col-md m-2"
          >
            <img src={Ecommerce} alt="Ecommerce" className="screenshot"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
