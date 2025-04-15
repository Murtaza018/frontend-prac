import "./App.css";
import { BookText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { User } from "lucide-react";
import { FileSpreadsheet } from "lucide-react";
import { useState } from "react";

function App() {
  const [buttonSelected, setButtonSelected] = useState("");
  const updateInput = (selected) => {
    if (buttonSelected === selected) {
      setButtonSelected("");
    } else {
      setButtonSelected(selected);
    }
  };
  const Card1 = () => {
    return (
      <div className="main-cards main-card1">
        <h1 className="heading">
          Just a Few Details to{" "}
          <i style={{ fontFamily: "serif" }}>Get Started</i>
        </h1>
        <div className="card1-inner-div">
          <button
            className={`card1-inner-div-button ${
              buttonSelected === "b1" ? "card1-inner-div-button-selected" : ""
            }`}
            onClick={() => {
              updateInput("b1");
            }}
          >
            <BookText />
            <p>General Information</p>
          </button>
          <button
            className={`card1-inner-div-button ${
              buttonSelected === "b2" ? "card1-inner-div-button-selected" : ""
            }`}
            onClick={() => {
              updateInput("b2");
            }}
          >
            <BriefcaseBusiness />
            <p>Business Solicit</p>
          </button>
          <button
            className={`card1-inner-div-button ${
              buttonSelected === "b3" ? "card1-inner-div-button-selected" : ""
            }`}
            onClick={() => {
              updateInput("b3");
            }}
          >
            <FeedOutlinedIcon />
            <p>Reference Information</p>
          </button>
          <button
            className={`card1-inner-div-button ${
              buttonSelected === "b4" ? "card1-inner-div-button-selected" : ""
            }`}
            onClick={() => {
              updateInput("b4");
            }}
          >
            <User />
            <p>Key People</p>
          </button>
          <button
            className={`card1-inner-div-button ${
              buttonSelected === "b5" ? "card1-inner-div-button-selected" : ""
            }`}
            onClick={() => {
              updateInput("b5");
            }}
          >
            <FileSpreadsheet />
            <p>Compliance Information</p>
          </button>
        </div>
      </div>
    );
  };
  const [city, setCity] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [country, setCountry] = useState(null);
  const [fax, setFax] = useState(null);
  const [pobox, setPobox] = useState(null);
  const [phone, setPhone] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [registrationNumber, setRegistrationNumber] = useState(null);
  const [state, setState] = useState(null);
  const [address, setAddress] = useState(null);
  const [vat, setVat] = useState(null);
  const [website, setWebsite] = useState(null);

  return (
    <div className="main-div">
      <Card1 />
      <div className="main-cards main-card2">
        <div className="card2-inner-div">
          <div className="card2-inner-div-input-div">
            City{" "}
            <input
              className="card2-inner-div-input"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="card2-inner-div-input-div">
            Company Name{" "}
            <input
              className="card2-inner-div-input"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />
          </div>
          <div className="card2-inner-div-input-div">
            Country{" "}
            <input
              className="card2-inner-div-input"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="card2-inner-div-input-div">
            FAX{" "}
            <input
              className="card2-inner-div-input"
              value={fax}
              onChange={(e) => {
                setFax(e.target.value);
              }}
            />
          </div>
          <div className="card2-inner-div-input-div">
            PO Box{" "}
            <input
              className="card2-inner-div-input"
              value={pobox}
              onChange={(e) => {
                setPobox(e.target.value);
              }}
            />
          </div>
          <div className="card2-inner-div-input-div">
            Phone{" "}
            <input
              type="tel"
              className="card2-inner-div-input"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="card2-inner-div-input-div">
            Postal Code{" "}
            <input
              className="card2-inner-div-input"
              value={postalCode}
              onChange={(e) => {
                setPostalCode(e.target.value);
              }}
            />
          </div>
          <div className="card2-inner-div-input-div">
            Registration Number{" "}
            <input
              className="card2-inner-div-input"
              value={registrationNumber}
              onChange={(e) => {
                setRegistrationNumber(e.target.value);
              }}
            />
          </div>
          <div className="card2-inner-div-input-div">
            State{" "}
            <input
              className="card2-inner-div-input"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </div>
          <div className="card2-inner-div-input-div">
            Street Address{" "}
            <input
              className="card2-inner-div-input"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="card2-inner-div-input-div">
            VAT Number{" "}
            <input
              className="card2-inner-div-input"
              value={vat}
              onChange={(e) => {
                setVat(e.target.value);
              }}
            />
          </div>
          <div className="card2-inner-div-input-div">
            Website URL{" "}
            <input
              className="card2-inner-div-input"
              value={website}
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="card2-bottom-div">
          <button className="card2-bottom-div-button">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
