export const getYears = (): { label: string; value: string }[] => {
  return Array.from({ length: 6 }, (_, index) => {
    return {
      label: (new Date().getFullYear() - index).toString(),
      value: (new Date().getFullYear() - index).toString(),
    };
  });
};
export const getLastDayOfMonth = (year, month) => {
  if (month === "02") {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
      ? "29"
      : "28";
  } else {
    return ["04", "06", "09", "11"].includes(month) ? "30" : "31";
  }
};
