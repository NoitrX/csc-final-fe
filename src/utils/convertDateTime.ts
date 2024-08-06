export function convertDateTime(date: string) {
  const newDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = newDate.toLocaleDateString("en-US", options);
  const time = newDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  return `${formattedDate}  ${time}`;
}
