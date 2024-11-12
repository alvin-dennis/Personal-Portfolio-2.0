export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInIndia(): Date {
  const now = new Date();

  const offsetIndia = 5.5;
  now.setHours(now.getUTCHours() + offsetIndia);

  return now;
}

export function formatTimeForIndia(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, 
    timeZone: "Asia/Kolkata",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  formattedTime += " IST";
  return formattedTime;
}
