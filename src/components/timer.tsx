import { useEffect, useState, useCallback } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        color: "#454444",
      }}
    >
      <div
        style={{
          textAlign: "center",
          margin: "0 10px",
          fontFamily: "Cormorant",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <div style={{ fontSize: "14px", fontFamily: "Cormorant" }}>дней</div>
      </div>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          fontFamily: "Cormorant",
        }}
      >
        :
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "0 10px",
          fontFamily: "Cormorant",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div style={{ fontSize: "14px", fontFamily: "Cormorant" }}>часов</div>
      </div>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          fontFamily: "Cormorant",
        }}
      >
        :
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "0 10px",
          fontFamily: "Cormorant",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div style={{ fontSize: "14px", fontFamily: "Cormorant" }}>минут</div>
      </div>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          fontFamily: "Cormorant",
        }}
      >
        :
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "0 10px",
          fontFamily: "Cormorant",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div style={{ fontSize: "14px", fontFamily: "Cormorant" }}>секунд</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
