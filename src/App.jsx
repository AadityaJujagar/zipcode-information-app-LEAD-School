import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Loader from "./components/loader/Loader";
import { useEffect, useState } from "react";
import { apiURL } from "./apiURL";

function App() {
  const [zipcode, setZipCode] = useState(400093);
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);

  const getDataHandler = async (newZipcode) => {
    setLoader(true);
    try {
      const rawData = await fetch(`${apiURL}/${newZipcode}`);
      const jsonData = await rawData.json();

      console.log(jsonData);
      setData(jsonData);
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
  };

  useEffect(() => {
    getDataHandler(zipcode);
  }, [zipcode]);

  return (
    <div className="app">
      <Navbar />
      {loader ? (
        <Loader />
      ) : (
        <Main data={data} getDataHandler={getDataHandler} />
      )}
    </div>
  );
}

export default App;
