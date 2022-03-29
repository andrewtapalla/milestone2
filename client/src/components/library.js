import { useEffect, useState } from "react";

function Library() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/library")
      .then(res => res.json())
      .then(data => {
        console.log(data);
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
      <h1>hello world</h1>
      <h2>this is library</h2>
      <div>{logosFormatted}</div>
    </div>
  );
}

export default Library;
