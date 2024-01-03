import React, { useState } from 'react';

export default function Accordion(props) {
  // const { title, description } = props;

  const [open, setOpen] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(10);
  const [randNum, setRandNum] = useState(0);

  const handleClick = () => {
    setOpen(!open);
    init();
  };

  const init = async function () {
    const promise = new Promise((resolve, reject) => {
      // console.log("PROMISE")
      setTimeout(() => {
        if (open) {
          const p1 = new Promise((resolve) => resolve('its resolved'));
          resolve(p1);
        }
        reject('Error');
      }, 100);
    });
    promise
      .finally((res) => {
        console.log('finally 1');
      })
      .then(
        (res) => {
          console.log('promise resolved 1', res);
          return 'gg';
        } /* ,
        (res) => {
          console.log('promise rejected 1', res);
          return 'gg';
        } */
      )
      // .then((res) => {
      //   console.log('promise resolved 2', res);
      // })
      .catch((err) => {
        console.error('promise rejected 2', err);
      })
      .then((res) => {
        console.log("well what's this");
      })
      .finally((res) => console.log('finally 2'));

    // try {
    //   const res = await promise;
    //   console.log('promise resolved 1', res);
    // } catch (e) {
    //   console.log('promise rejected', e);
    // }
  };

  const generateRandomNumber = () => {
    // let random = num1 - num2;
    // while (1 < 2) {
    //   random = new Date().getMilliseconds();
    //   console.log('random', random);
    //   if (random > num1 && random < num2) {
    //     break;
    //   }
    // }
    // setRandNum(random);
  };

  return (
    <div className="w-full">
      <button onClick={handleClick} className="border p-2 rounded mr-4 mb-4">
        BUTTON
      </button>
      {/* <div className="flex gap-4 items-center">
        <button
          className="border p-2 rounded bg-teal-300"
          onClick={() => generateRandomNumber()}
        >
          Generate Random Number
        </button>
        between
        <input
          type="number"
          value={num1}
          className="border w-14 rounded text-center"
          onChange={(e) => setNum1(e.target.value)}
        />
        to
        <input
          type="number"
          value={num2}
          className="border w-14 rounded text-center"
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="mt-4">Random Number is {randNum}</div> */}
    </div>
  );
}
