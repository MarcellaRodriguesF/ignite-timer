import { createContext, useReducer, useState } from "react";

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
  cycles: Cycle[];
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
  const [cycles, dispatch] = useReducer((state: Cycle[], action: any) => {
    return state;
  }, []);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: "MARK_CURRENT_CYCLE_AS_FINISHED",
      payload: {
        activeCycleId,
      },
    });
  }

  function createNewCircle(data: CreateNewCircleFormData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id: id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    dispatch({
      type: "ADD_NEW_CYCLE",
      payload: {
        newCycle,
      },
    });
    // setCycles([...cycles, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
    // reset();
  }

  function interruptCurrentCycle() {
    dispatch({
      type: "INTERRUPT_CURRENT_CYCLE",
      payload: {
        activeCycleId,
      },
    });
    // setCycles((state) =>
    //   state.map((cycles) => {
    //     if (cycles.id === activeCycleId) {
    //       return {
    //         ...cycles,
    //         status: "interrupted",
    //         interruptDate: new Date(),
    //       };
    //     }
    //     return cycles;
    //   })
    // );
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
        cycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
