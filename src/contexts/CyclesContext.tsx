import { createContext, useState } from "react";

interface CreateNewCircleFormData {
  task: string;
  minutesAmount: number;
}

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptDate?: Date;
  finishedDate?: Date;
  status?: "completed" | "inProgress" | "interrupted";
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
  amountSecondsPassed: number;
  setSecondsPassed: (seconds: number) => void;
  createNewCircle: (data: CreateNewCircleFormData) => void;
  interruptCurrentCycle: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: React.ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            status: "completed",
            finishedDate: new Date(),
          };
        }
        return cycle;
      })
    );
  }

  function createNewCircle(data: CreateNewCircleFormData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id: id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    setCycles([...cycles, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
    // reset();
  }

  function interruptCurrentCycle() {
    setCycles((state) =>
      state.map((cycles) => {
        if (cycles.id === activeCycleId) {
          return {
            ...cycles,
            status: "interrupted",
            interruptDate: new Date(),
          };
        }
        return cycles;
      })
    );
    setActiveCycleId(null);
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCircle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
