import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { IoIosRefresh } from "react-icons/io";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if (counter === 0) {
      return 0;
    } else {
      setCounter(counter - 1);
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        
        <div className="total_amount_card">
        <h2>COUNTER</h2>
         
          <div className="right">
          <IoIosRefresh className="refresh-icon" onClick={reload} />
          </div>

          <div className="card_text">
            <h3 className="total_amount_heading">{counter}</h3>
          </div>

          <div className="button_collection">
            <Stack spacing={2} direction="row">
              <Button
                onClick={handleClick1}
                variant="contained"
                className="btn_one"
              >
                +
              </Button>
              <Button
                onClick={handleClick2}
                variant="contained"
                className="btn_two"
              >
                -
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
