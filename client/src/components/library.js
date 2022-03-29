import { useEffect, useState } from "react";

function Library() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/library")
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
      <div key={logo.company}>
        <li>{logo.company}</li>
      </div>
    );
  });

  return (
    <div key={Library}>
      <h1>Museum of Logos</h1>

      <div>
        <h2>Decades</h2>
        <h3>80's</h3>
        {logosFormatted}
        <h3>90's</h3>
        {logosFormatted}
        <h3>00's</h3>
        {logosFormatted}
      </div>
    </div>
  );
}

export default Library;
