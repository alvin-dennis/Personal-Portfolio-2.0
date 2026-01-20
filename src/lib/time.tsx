import moment from "moment-timezone";
import { useEffect, useState } from "react";

export const Clock = ({ timezone }: { timezone: string }) => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(timezone);
      setDateTime(now.format("ddd, DD MMM YYYY h:mm:ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  if (!dateTime)
    return (
      <span className="text-[10px] font-bold uppercase tracking-tight text-secondary">
        Loading...
      </span>
    );

  return <span className="text-[10px] font-bold tracking-tight text-primary">{dateTime}</span>;
};
