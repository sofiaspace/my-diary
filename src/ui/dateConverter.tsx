export const dateConverter = (date: string) => {
  const datePart = date.split("T")[0];
  const [year, month, day] = datePart.split("-");
  const formattedDate = `${day}-${month}-${year}`;

  const timePart = date.split("T")[1].split(".")[0];
  const [hours, minutes] = timePart.split(":");
  const time = `${hours}:${minutes}`;

  const meetingDate = `${formattedDate} at ${time}`;

  return meetingDate;
};
