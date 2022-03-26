const React = require("react");

function Library(data) {
  console.log(data);
  let logosFormatted = data.logos.map((logo) => {
    return (
      <div>
        <h3>{logo.company}</h3>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>this is library</h2>
      <div>{logosFormatted}</div>
    </div>
  );
}

export default Library;
