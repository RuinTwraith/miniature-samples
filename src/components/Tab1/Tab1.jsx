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
    // creating a promise and resolving or rejecting it based on condition
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (condition) {
          reject("Error");
        }
        resolve("Message");
      }, 1000);
    });
    promise
      .finally(() => {
        // always get called in the beginning
        console.log("Finally - 1");
        updateConsole("Finally - 1");
      })
      .then((res) => {
        // called when the promise resolves
        console.log("Then - 1", res);
        updateConsole("Then - 1", res);
        return "Updated Message";
      })
      .catch((err) => {
        // called only when error is thrown
        console.error("Catch - 1", err);
        updateConsole("Catch - 1", err);
        return "Updated Error";
      })
      .then((res) => {
        // always get called even after error
        console.log("Then - 2", res);
        updateConsole("Then - 2", res);
      })
      .finally(() => {
        // always get called in the end
        console.log("Finally - 2");
        updateConsole("Finally - 2");
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <p className="mb-2">
        Example for promises and try, catch, finally. Change if the promise will
        reject or resolve by clicking on <b>'Throw error'</b> button.
      </p>
      <p className="mb-10">
        Click <b>'Press Me!'</b> to get consoles
      </p>
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
