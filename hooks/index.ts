import { useEffect, useState } from "react";
import { DeadlineValue } from "../components";
import { getTimeRemaining, isPast } from "../utils";

const defaultTimeRemaining: Duration = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const useCountdown = (endDate: DeadlineValue) => {
  const isInPast = isPast(endDate);
  const initialTimeRemaining = isInPast
    ? defaultTimeRemaining
    : getTimeRemaining(endDate);
  const [timeRemaining, setTimeRemaining] = useState(initialTimeRemaining);

  useEffect(() => {
    if (!isInPast) {
      const timer = window.setInterval(
        () => setTimeRemaining(getTimeRemaining(endDate)),
        1000
      );
      return () => clearInterval(timer);
    }
  }, [endDate, isInPast]);

  return { isInPast, timeRemaining };
};

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};
