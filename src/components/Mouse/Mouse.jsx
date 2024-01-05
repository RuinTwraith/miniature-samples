import { useState, useEffect, useRef } from "react";

export default function Mouse({}) {
  const [mouse, setMouse] = useState({});
  const prevMouse = useRef({});

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const renderDiv = (clientX, clientY) => {
    const randomSize = Math.floor(Math.random() * 12 + 6);
    const randomColor = Math.floor(Math.random() * 5 + 1);
    const colors = ["#361134", "#B0228C", "#EA3788", "#E56B70", "#F391A0"];

    // creating new div and styling it
    const div = document.createElement("div");
    div.style.width = `${randomSize}px`;
    div.style.height = `${randomSize}px`;
    div.style.borderRadius = `${randomSize}px`;
    div.style.position = "absolute";
    div.style.top = `${clientY}px`;
    div.style.left = `${clientX}px`;
    div.style.background = colors[randomColor];
    div.style.opacity = 0.9;
    div.style.transition = "500ms ease";
    div.style.clipPath =
      "polygon(48% 0, 31% 35%, 0 50%, 33% 68%, 49% 100%, 63% 70%, 100% 51%, 62% 33%)";

    // rotating some of the divs randomly
    if (Math.random() * 40 + 1 > 20) {
      div.style.transform = "rotate(45deg)";
    }

    // appending the new div to the body
    document.body.appendChild(div);

    // changing some styles after some time
    setTimeout(() => {
      div.style.opacity = 0.7;
      div.style.transform = "translateY(5px) scale(0.6)";
    }, 400);
    setTimeout(() => {
      div.style.opacity = 0.2;
    }, 700);

    // removing element after specified time
    setTimeout(() => {
      document.body.removeChild(div);
    }, 800);
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMouse({ clientX, clientY });
    if (
      Math.abs(prevMouse.current.clientX - clientX) < 15 &&
      Math.abs(prevMouse.current.clientY - clientY) < 15
    ) {
      //limiting the number of times new elements are created
      return;
    }
    prevMouse.current = { clientX, clientY };
    renderDiv(clientX, clientY);

    const random1 = Math.floor(Math.random() * 14 + 1);
    const random2 = Math.floor(Math.random() * 3 + 1);

    // creating more divs around the original position
    renderDiv(clientX + random1, clientY + random2);
    renderDiv(clientX - random2, clientY - random1);
  };

  return (
    <div className="border bg-slate-200 p-4 rounded">
      Mouse move : {mouse.clientX}, {mouse.clientY}
    </div>
  );
}
