import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./App";
import Kosullar from "./kosullar";
import Form2 from "./form2";
import "./App.css";
import "./css/util.css";
import "./css/mainf1.css";
import Background from "./hand.jpg";
import axios from "axios";
import { stringify } from "querystring";

var imagesection = {
  backgroundImage: `url(${Background})`
};

class form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isim: "",
      soyisim: "",
      email: "",
      phone: "",
      beforeTID: "",
      beforeTIDOther: "",
      whyTID: "",
      description: "",
      whereYouHeard: "",
      whereYouHeardOther: "",
      deafComminity: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const Employee = {
      FirstName: this.state.isim,
      LastName: this.state.soyisim,
      Email: this.state.email,
      MobilePhone: this.state.phone,
      BeforeTID: this.state.beforeTID,
      BeforeTIDOther: this.state.beforeTIDOther,
      WhyTID: this.state.whyTID,
      Description: this.state.description,
      WhereYouHeard: this.state.whereYouHeard,
      WhereYouHeardOther: this.state.whereYouHeardOther,
      DeafCominity: this.state.deafComminity,
      KVKK: true,
      Type: "Learning1"
    };

    axios
      .post(
        "http://www.enkeyiflitid.com/api/api/Employees/post",
        stringify(Employee)
      )
      .then(function(response) {
        console.log(response);
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        alert("Başvurunuz alınmıştır. Teşekkür Ederiz.");
      })
      .catch(function(err) {
        console.log(err);
      });
    event.preventDefault();

    this.setState({
      isim: "",
      soyisim: "",
      email: "",
      phone: "",
      beforeTID: "",
      beforeTIDOther: "",
      whyTID: "",
      description: "",
      whereYouHeard: "",
      whereYouHeardOther: "",
      deafComminity: ""
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form2" component={Form2} />
          <Route>
            <div className="App2">
              <div className="menu">
                <Link to={"/"}>
                  <button className="butlar">Geri dön</button>
                </Link>
                <Link to={"/form2"}>
                  <button className="butlar">TİD PRATİK KAMPI!</button>
                </Link>
              </div>
              <div className="container-contact100">
                <div className="wrap-contact100">
                  <div
                    className="contact100-more flex-col-c-m"
                    style={imagesection}
                  >
                    <div className="dis-flex size1 p-b-47">
                      <div className="flex-col size2">
                        <span className="txt1 p-b-20">
                          <h4 style={{ color: "white" }}>
                            Türk İşaret Dili Pratik Başvuru Formu (Katılım
                            ücretlidir.)
                          </h4>
                        </span>

                        <span className="txt3">
                          Buluşmalar 7-28 Aralık 2019 tarihleri arasında her
                          cumartesi 11:00’den 14:00’e Dem Derneği’nin Tomtom
                          Mah. Yeniçarşı Cad. No: 68/21 Beyoğlu/İstanbul
                          adresinde bulunan merkez ofisinde
                          gerçekleştirilecektir.
                          <br />
                          <br />
                          <br />
                          <span className="txt2">
                            <h4 style={{ color: "white" }}>
                              Sağ sütunda formun ilk maddesi önkoşul
                            </h4>
                          </span>
                          <br />
                          Bu başvuru formunu doldurarak 7, 14, 21 ve 28 Aralık
                          tarihlerinde (cumartesi günleri) tüm pratik
                          buluşmalarına katılacağınızı göz önünde
                          bulundurduğunuz ve kabul ettiğiniz anlamı taşır.
                          Kısıtlı kontenjanımızı verimli kullanabilmek için bu
                          durumu teyit etmenizi rica ederiz.
                        </span>
                      </div>
                    </div>
                  </div>
                  <form
                    id="form1"
                    onSubmit={this.handleSubmit}
                    className="contact100-form validate-form"
                  >
                    <span className="contact100-form-title">
                      Tanışma Eğitimleri
                    </span>

                    <label className="label-input100" htmlFor="isim">
                      İsİm ve SoyİSİm *
                    </label>
                    <div
                      className="wrap-input100 rs1-wrap-input100 validate-input"
                      data-validate="Type first name"
                    >
                      <input
                        id="isim"
                        className="input100"
                        type="text"
                        name="isim"
                        placeholder="İsim"
                        required
                        value={this.state.isim}
                        onChange={this.handleInputChange}
                      />
                      <span className="focus-input100" />
                    </div>
                    <div
                      className="wrap-input100 rs2-wrap-input100 validate-input"
                      data-validate="Type last name"
                    >
                      <input
                        id="soyisim"
                        className="input100"
                        type="text"
                        name="soyisim"
                        placeholder="Soyisim"
                        required
                        value={this.state.soyisim}
                        onChange={this.handleInputChange}
                      />
                      <span className="focus-input100" />
                    </div>
                    <label className="label-input100" htmlFor="email">
                      E-Posta *
                    </label>
                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Valid email is required: ex@abc.xyz"
                    >
                      <input
                        id="email"
                        className="input100"
                        type="email"
                        name="email"
                        placeholder="ornek@email.com"
                        required
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                      <span className="focus-input100" />
                    </div>
                    <label className="label-input100" htmlFor="phone">
                      Cep Telefonu *
                    </label>
                    <div className="wrap-input100">
                      <input
                        id="phone"
                        className="input100"
                        type="tel"
                        name="phone"
                        placeholder="Örnek Numara : 0523 434 43 54"
                        required
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                      />
                      <span className="focus-input100" />
                    </div>
                    <label className="label-input100" htmlFor="sec1">
                      Daha önce TİD EĞİTİMİ aldın mı? *
                    </label>
                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Type first name"
                    >
                      <select
                        required
                        className="input100"
                        id="sec1"
                        name="beforeTID"
                        value={this.state.beforeTID}
                        onChange={this.handleInputChange}
                      >
                        <option value="">Seç</option>
                        <option value="İSMEK (120 saat)">
                          Evet, İSMEK (120 saat)
                        </option>
                        <option value="İSMEK (200 saat)">
                          Evet, İSMEK (200 saat)
                        </option>
                        <option value="Halk Eğitim Merkezi">
                          Evet, Halk Eğitim Merkezi
                        </option>
                        <option value="Özel bir kurs">
                          Evet, özel bir kurs
                        </option>
                        <option value="Hayır">Hayır</option>
                        <option value="diger" htmlFor="diger">
                          Diğer
                        </option>
                      </select>

                      <input
                        id="diger"
                        className="input100"
                        type="diger"
                        name="beforeTIDOther"
                        placeholder="Bize bir notun var mı?"
                        value={this.state.beforeTIDOther}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <label className="label-input100" htmlFor="sec3">
                      Dem Derneğİnİ nereden duydun? *
                    </label>
                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Type first name"
                    >
                      <select
                        required
                        className="input100"
                        id="sec3"
                        type="sec3"
                        name="whereYouHeard"
                        value={this.state.whereYouHeard}
                        onChange={this.handleInputChange}
                      >
                        <option value="">Seç</option>
                        <option value="Arkadaş Çevresi">Arkadaş Çevresi</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Arama Motoru">Arama Motoru</option>
                        <option value="Diğer">Diğer</option>
                      </select>

                      <input
                        id="diger1"
                        className="input100"
                        type="diger1"
                        name="whereYouHeardOther"
                        placeholder="Başka bir yer?"
                        value={this.state.whereYouHeardOther}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <label className="label-input100" htmlFor="sec2">
                      Ailende ve/veya yakın çevrende sağır ve/veya İşİtme
                      engellİ var mı? *
                    </label>
                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Type first name"
                      style={{ marginBottom: "15px" }}
                    >
                      <select
                        required
                        className="input100"
                        id="sec2"
                        type="sec2"
                        name="deafComminity"
                        value={this.state.deafComminity}
                        onChange={this.handleInputChange}
                      >
                        <option value="">Seç</option>
                        <option value="Var">Var</option>
                        <option value="Yok">Yok</option>
                      </select>
                    </div>
                    <label htmlFor="checkbox_id" className="label-input101">
                      <input
                        type="checkbox"
                        title="Kabul ediyorum"
                        id="checkbox_id"
                        style={{
                          maxwidth: "35px",
                          maxheight: "35px",
                          margin: "10px 10px 10px 0px",
                          background: "orange"
                        }}
                        required
                      />
                      <br />
                      <Kosullar />
                    </label>

                    <div className="container-contact100-form-btn">
                      <button className="contact100-form-btn" id="sendNewSms">
                        Gönder
                      </button>
                    </div>
                  </form>
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
                    Tomtom Mah. <br /> Yeniçarşı Cad. No:68 D:21
                    <br /> Beyoğlu / İstanbul
                  </div>
                  <div
                    className="col-md-6"
                    style={{ paddingBottom: "15px", paddingTop: "15px" }}
                  >
                    info@demdernek.org
                    <br /> +90 530 136 02 17
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    paddingTop: "15px"
                  }}
                >
                  Bu websitesi işitme engelli Abdulhak Yusuf Bilici tarafından
                  Dem Derneği için hazırlanmıştır.
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default form1;
