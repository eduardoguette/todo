import React, { useEffect, useState } from "react";

export const ActualDate = () => {
  const [date, setDtate] = useState({
    day: "",
    data: "",
  });
  const calculateDay = () => {
    let dateTop = new Intl.DateTimeFormat("en", {
      month: "long",
      year: "numeric",
      
    });
    let dateBottom = new Intl.DateTimeFormat("en", {
      weekday: "short",
      day: "numeric",
    });
    const day =  `${dateTop.format(Date.now())}`;
    const date = `${dateBottom.format(Date.now())}.`;
    setDtate({
      day,
      date,
    });
  };
  useEffect(() => {
    calculateDay();
  }, []);
  return (
    <h2 className="text-midnight-500 font-bold flex flex-col mb-4">
      <span className="font-sans text-lg"> {date.day} </span>
      <span className="font-serif text-6xl">{date.date}</span>
    </h2>
  );
};
