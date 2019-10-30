import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./App";
import "./App.css";
import "./css/util.css";
import "./css/mainc.css";
import Background from "./isaret2.jpg";

var imagesection = {
  backgroundImage: `url(${Background})`
};

export default function iletisim() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route>
          <div className="menu">
            <Link to={"/"}>
              <button className="butlar">Geri dön</button>
            </Link>
          </div>
          <div className="container-contact100">
            <div className="wrap-contact100">
              <div
                className="contact100-more flex-col-c-m"
                style={imagesection}
              >
                <div className="ilet">
                  <div className="txt1 p-r-25" />

                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Web Sitesi</span>

                    <span className="txt3">
                      <a href="https://www.demdernek.org/" className="ahref">
                        https://www.demdernek.org/
                      </a>
                    </span>
                  </div>
                  <br />
                  <div className="txt1 p-r-25" />

                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Address</span>

                    <span className="txt3">
                      Mada Center 8th floor, 379 Hudson St, New York, NY 10018
                      US
                    </span>
                  </div>
                  <br />
                  <div className="txt1 p-r-25" />

                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Lets Talk</span>

                    <span className="txt3">+1 800 1236879</span>
                  </div>
                  <br />
                  <div className="txt1 p-r-25" />

                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">General Support</span>

                    <span className="txt3">contact@example.com</span>
                  </div>
                </div>
              </div>
              <form className="contact100-form validate-form">
                <span className="contact100-form-title">Bize Ulaş!</span>

                <label className="label-input100" htmlFor="first-name">
                  Adınız-Soyadınız
                </label>
                <div
                  className="wrap-input100 rs1-wrap-input100 validate-input"
                  data-validate="Adın-Soyadın"
                >
                  <input
                    id="first-name"
                    className="input100"
                    type="text"
                    name="first-name"
                    placeholder="First-Last name"
                    required
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" htmlFor="email">
                  Emailiniz
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    id="email"
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="ornek@email.com"
                    required
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" htmlFor="message">
                  Sorun var mı?
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Message is required"
                >
                  <textarea
                    id="message"
                    className="input100"
                    name="message"
                    placeholder="Burayaz yazınız."
                    required
                  />
                  <span className="focus-input100" />
                </div>

                <div className="container-contact100-form-btn">
                  <button className="contact100-form-btn">Gönder</button>
                </div>
              </form>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
