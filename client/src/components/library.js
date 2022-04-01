import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import AdeezCard from "./adeezCard";
import NinedeezCard from "./ninedeeCard";
import OtzCard from "./otzCard";

function Library() {
  return (
    <div key={Library}>
      <Container>
        <br />
        <h1>Museum of Logos</h1>
        <br />
        <div>
          <h3>1980's</h3>
          <div className="eighties">
            <AdeezCard />
          </div>
          <br />
          <h3>1990's</h3>
          <div className="nineties">
            <NinedeezCard />
          </div>
          <br />
          <h3>2000's</h3>
          <div className="millennials">
            <OtzCard />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Library;
