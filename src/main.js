import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./css/util.css";
import "./css/mainf1.css";

import tid from "./images.png";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const baslik = {
  color: "orange",
  textAlign: "center",
  fontFamily: "Avenir Next",
  fontSize: "23px"
};

class formMain extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <header className="App-header">
          <img src={tid} className="App-logo" alt="logo" />
          <div className="example2">
            Türk İşaret Dili öğrendim ama pratik yapmak istiyorum diyorsan;
            <br />
            Dem Derneği'nde pratik için iki imkan var: <br />
            <p style={{ textAlign: "left" }}>
              1- TİD PRATİK: Dem Derneği'nin Beyoğlu'ndaki ofisinde Aralık
              ayında 4 cumartesi farklı sağırların ev sahipliğinde
              gerçekleştirilecek pratik buluşmalarına katılmak. <br />
              2- TİD PRATİK KAMPI: ..... tarihlerinde şehirden uzakta sağır ve
              işitme engelli liderler ile işaret dili dolu bir hafta sonu
              geçirmek.
              <br /> Her ikisine de gelmek istiyorum dersen çok seviniriz. Eğer
              öyleyse, lütfen iki formu da doldur. (Pratiklere katılım
              ücretlidir.)
            </p>
          </div>
        </header>

        <div className="kutu">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={baslik}
                    >
                      TİD PRATİK BULUŞMALARI
                    </Typography>
                    Temel İşaret Eğitimi aldın ama pratik imkanı bulamadın. Bu
                    buluşmalar 4 hafta, toplamda 12 saat Aralık ayı boyunca her
                    Cumartesi farklı içerikleri ile işaret pratiği kazanman için
                    tasarlanıyor.
                  </CardContent>
                  <CardActions>
                    <div className="butici">
                      <Link to={"/form"} className="buykay">
                        <button className="butkay">
                          <span className="kayit1">BAŞVUR</span>
                        </button>
                      </Link>
                    </div>
                  </CardActions>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={baslik}
                    >
                      TİD PRATİK <br />
                      KAMPI
                    </Typography>
                    <div className={{ textAlign: "center" }}>
                      Temel İşaret Eğitimi aldın, pratik imkanı aradın hah!
                      dedin Dem’de var ama baktın 4 hafta, yaymak istemiyorsun,
                      bir hafta sonu işaretle yatıp kalkayım diyorsan. Bu kamp
                      tam sana göre!
                    </div>
                  </CardContent>

                  <CardActions>
                    <div className="butici">
                      <Link to={"/form2"} className="buykay">
                        <button className="butkay2">
                          <span className="kayit2">BAŞVUR</span>
                        </button>
                      </Link>
                    </div>
                  </CardActions>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footers">
          <div className="row">
            <div
              className="col-md-6"
              style={{
                paddingBottom: "15px"
              }}
            >
              Tomtom Mah. Yeniçarşı Cad. <br />
              No:68 D:21 Beyoğlu / İstanbul
            </div>
            <div
              className="col-md-6"
              style={{ paddingBottom: "5px", paddingTop: "5px" }}
            >
              info@demdernek.org
              <br /> +90 530 136 02 17
            </div>
          </div>
          <div
            style={{
              marginBottom: "5px",
              paddingTop: "8px"
            }}
          >
            Bu internet sitesi Abdulhak Yusuf Bilici tarafından Dem Derneği için
            hazırlanmıştır.
          </div>
        </div>
      </div>
    );
  }
}

export default formMain;
