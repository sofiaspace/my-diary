export const dateConverter = (date: string) => {
  const datePart = date.split("T")[0];
  const [year, month, day] = datePart.split("-");
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

export const timeConverter = (date: string) => {
  const timePart = date.split("T")[1].split(".")[0];
  const [hours, minutes] = timePart.split(":");
  const time = `${hours}:${minutes}`;

  return time;
};
