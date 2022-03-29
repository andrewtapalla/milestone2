import { useEffect, useState } from "react";

function Library() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("hi");
    fetch("/library")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log("warn error");
      });
  }, []);

  let logosFormatted = data.map((logo) => {
    return (
      <div>
        <li key={logo.id}>{logo.company}</li>
      </div>
    );
  });

  return (
    <div className="App" key={Library}>
      <h1>hello world</h1>
      <h2>this is library</h2>
      <div>{logosFormatted}</div>
    </div>
  );
}


export default Library;
