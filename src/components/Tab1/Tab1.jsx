import React, { useState } from "react";
import Button from "../Button";

export default function Tab1(props) {
  const [condition, setCondition] = useState(false);
  const [consoleLog, setConsoleLog] = useState([]);

  const handleClick = () => {
    setConsoleLog([]);
    init();
  };

  const updateConsole = (...args) => {
    setConsoleLog((prev) => {
      return [...prev, `${args.join(" ")}`];
    });
  };

  const init = async function () {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (condition) {
          reject("Error");
        }
        resolve("dadsasd");
      }, 1000);
    });
    promise
      .finally((res) => {
        console.log("Finally 1");
        updateConsole("Finally 1");
      })
      .then((res) => {
        console.log("Promise resolved 1", res);
        updateConsole("Promise resolved 1", res);
        return "from then 1";
      })
      .catch((err) => {
        console.error("Catch - 1", err);
        updateConsole("Catch - 1", err);
      })
      .then((res) => {
        console.log("Then - 2", res);
        updateConsole("Then - 2", res);
      })
      .finally((res) => {
        console.log("Finally - 2");
        updateConsole("Finally - 2");
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <Button onClick={handleClick}>Press Me!</Button>
      <Button
        onClick={() => setCondition((prev) => !prev)}
        className={`${condition ? "bg-red-700" : "bg-teal-700"}`}
      >
        Throw error - {`${condition}`}
      </Button>
      {consoleLog.length > 0 && (
        <div className="console">
          <div className="font-bold">Console Logs in order</div>
          <div>
            {consoleLog.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
