import React, { useState, useEffect } from "react";
export default function App() {
  const [input, setInput] = useState("");
  const [randomString, setRandomString] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [alert, setAlert] = useState(false);
  const captcha =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  useEffect(() => {
    let generatedString = "";
    for (let i = 0; i < 5; i++) {
      generatedString += captcha[Math.floor(Math.random() * 62)];
    }
    setRandomString(generatedString);
  }, []);
  function handleInput(e) {
    setInput(e.target.value);
    setAlert(false);
  }
  function handleBtn() {
    setIsClicked(true);
    if (randomString === input && input !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    if (input === "") {
      setAlert(true);
    }
  }
  return (
    <div className="app">
      <h1>Enter captcha </h1>
      <h3>{randomString}</h3>
      <input
        type="text"
        onChange={handleInput}
        value={input}
        placeholder="Enter captcha"
        className="p-1 my-2"
      />
      <button onClick={handleBtn} className="p-2 my-2 btn btn-secondary">
        submit
      </button>
      <div className="text-success">
        {isClicked ? isValid === true ? <h1>Captcha is Valid</h1> : null : null}
      </div>
      <div className="text-danger">
        {isClicked && !alert ? (
          isValid === false ? (
            <h1>Captcha is inValid</h1>
          ) : null
        ) : null}
      </div>
      <div className="text-danger">
        {alert ? <h1>Please Enter Something</h1> : null}
      </div>
    </div>
  );
}
