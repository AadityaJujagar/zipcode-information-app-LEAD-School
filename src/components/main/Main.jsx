import { useState } from "react";
import InfoCards from "../infoCards/InfoCards";
import "./Main.css";

function Main({ data, getDataHandler }) {
  const [inputZipcode, setInputZipcode] = useState("");
  console.log(data);

  const handleInputChange = (event) => {
    setInputZipcode(event.target.value);
  };

  const handleSearchClick = () => {
    getDataHandler(inputZipcode);
  };

  return (
    <div className="main">
      <div className="infoHeadSec">
        <p>Get the Information of Zip_</p>
        <div className="input">
          <input
            type="text"
            placeholder="Enter a Zipcode"
            value={inputZipcode}
            onChange={handleInputChange}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <p>{inputZipcode}</p>
        <p>
          NOTE : DEFAULT ZIP FOR EVERY FIRST RENDER : 400093 <br />
          FOR INVALID ZIP INPUT NO INFO SHALL BE RENDERED <br /> <br />
          Enter the zipcode to get the data of_ <br />
          Place, City, State, and Country.
        </p>
      </div>

      <div className="infoCardSec">
        <InfoCards data={data} />
      </div>
    </div>
  );
}

export default Main;
