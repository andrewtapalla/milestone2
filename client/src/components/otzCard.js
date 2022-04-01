import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

function OtzCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/library/museum/00")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log("warn error");
      });
  }, []);

  let logosFormatted = data.map((logo) => {
    return (
      <div className="cards">
        <div key={logo.company} className="cardBody">
          <li className="cardTitle">{logo.company}</li>

          <img src={logo.url} className="cardImg"></img>
        </div>
      </div>
    );
  });

  return <div key={OtzCard}>{logosFormatted}</div>;
}

export default OtzCard;
