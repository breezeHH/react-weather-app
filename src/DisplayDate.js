import React from "react";

export default function DisplayDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[props.date.getDay()];
  const hours = props.date.getHours();
  if (hours < 0) {
    hours = `0${hours}`;
  }
  const minutes = props.date.getMinutes();
  if (minutes < 0) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}
