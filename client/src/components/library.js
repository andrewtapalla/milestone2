import { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container'


function Library() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/library/museum")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(err => {
        console.log("warn error");
      });
  }, []);

  let logosFormatted = data.map(logo => {
    return (
      <div className="cards">
          <div key={logo.company} className="cardBody">
          
          <li className="cardTitle">{logo.company}</li>
      
          <img src={logo.url} className="cardImg"></img>

        </div>
      </div>
    );
  });
  
  

  return (
    <div key={Library}>
      <Container>
      <br />
      <h1>Museum of Logos</h1>
      <br />
      <div>
          <h3>1980's</h3>
          <div className="eighties">
          {logosFormatted}
          </div>
          <br />
          <h3>1990's</h3>
          <div className="nineties">
          {logosFormatted}
          </div>
          <br />
          <h3>2000's</h3>
          <div className="millennials">
          {logosFormatted}
          </div>
      </div>
      </Container>
    </div>
  );
}

export default Library;
