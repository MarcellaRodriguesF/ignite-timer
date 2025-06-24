import { useContext } from "react";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCircleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const {register} =useFormContext();
  
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em </label>

      <TaskInput
        id="task"
        disabled={!!activeCycle}
        list="task-sugestion"
        placeholder="Dê um nome para o seu projeto"
        {...register("task")}
      />
      <datalist id="task-sugestion">
        <option value={"Projeto 1"} />
        <option value={"Projeto 2"} />
        <option value={"Projeto 3"} />
      </datalist>
      <label htmlFor="minutesAmount">durante</label>

      <MinutesAmountInput
        id="minutesAmount"
        type={"number"}
        disabled={!!activeCycle}
        placeholder="00"
        // step={5}
        // min={1}
        // max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos</span>
    </FormContainer>
  );
}
