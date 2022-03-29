import { useEffect, useState } from "react";

function Library() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/library/logos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

/*   let logosFormatted = data.adeez.map((logo) => {
    return (
      <div>
        <h3>{logo.company}</h3>
      </div>
    );
  }); */

  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>this is library</h2>
      <div></div>
    </div>
  );
}

export default Library;
