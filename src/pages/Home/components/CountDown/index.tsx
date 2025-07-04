import { useContext, useEffect } from "react";
import { CountdownContainer, Separator } from "./styles";
import { CyclesContext } from "../..";
import { differenceInSeconds } from "date-fns";

export function CountDown() {
  const { activeCycle, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed } = useContext(CyclesContext);
  const totalSeconds = activeCycle ? activeCycle?.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;
  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDiference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDiference >= totalSeconds) {
          markCurrentCycleAsFinished();
          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDiference);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, markCurrentCycleAsFinished, setSecondsPassed, totalSeconds]);

    useEffect(() => {
      if (activeCycle) {
        document.title = `${minutes}:${seconds} - ${activeCycle.task}`;
      }
    }, [activeCycle, minutes, seconds]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
