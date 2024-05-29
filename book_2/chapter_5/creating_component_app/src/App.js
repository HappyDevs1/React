import React from "react";
import Products from "./Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Rating from "./Rating";
import JumbotronComponent from "./JumbotronComponent";

function App() {
  return (
    <div>
      <JumbotronComponent>
        This is a long sentence, and I want to insert content into the jumbotron
        component from the outside.
      </JumbotronComponent>
    </div>
  );
}

export default App;
