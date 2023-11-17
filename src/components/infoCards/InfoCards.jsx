import "./InfoCards.css";
import InfoCard from "../infoCard/InfoCard";

function InfoCards({ data }) {
  console.log(data);
  console.log(data?.places);

  return (
    <div className="infoCards">
      {data?.places?.map((dataVal) => (
        <InfoCard dataVal={dataVal} data={data} key={dataVal?.["place name"]} />
      ))}
    </div>
  );
}

export default InfoCards;
