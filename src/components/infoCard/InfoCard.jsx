import "./InfoCard.css";
import cardClip from "../../../public/assets/cardClip.svg";

function InfoCard({ dataVal, data }) {
  console.log(dataVal);
  console.log(data?.country);

  return (
    <div className="infoCard">
      <img src={cardClip} alt="card clip" />
      <div className="cardMain">
        <span className="stateAbbr">{data?.country}</span>
        <span className="stateAbbr">{dataVal?.["state abbreviation"]}</span>
        <div className="info">
          <span className="state">{dataVal?.["place name"]}</span>
          <span className="place">{dataVal?.state}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
