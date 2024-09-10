import React from "react";

const useGetProperDateAndTime = () => {
  function getDayOrdinal(day) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function formatDate(val, format = "default") {
    const date = new Date(val);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedDay = `${day}${getDayOrdinal(day)}`;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    if (format == "dateOnly") {
      return `${formattedDay} ${month} ${year}`;
    } else {
      return `${formattedDay} ${month} ${year}, ${formattedTime}`;
    }
  }

  return {
    formatDate,
  };
};

export default useGetProperDateAndTime;
