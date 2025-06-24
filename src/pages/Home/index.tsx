import { HandPalm, Play } from "phosphor-react";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useContext } from "react";
import { NewCircleForm } from "./components/NewCircleForm";
import { CountDown } from "./components/CountDown";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCircleFormValidationSchema = zod.object({
  task: zod.string().min(1, { message: "Informe a tarefa" }),
  minutesAmount: zod.number().min(1).max(60, "Informe um valor entre 5 e 60"),
});


export function Home() {
  const { createNewCircle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm({
    resolver: zodResolver(newCircleFormValidationSchema),
  });

  const { handleSubmit, watch } = newCycleForm;

  const isSubmitDisabled = watch("task") === "";

  return (
    <>
      <HomeContainer>
        <form action="" onSubmit={handleSubmit(createNewCircle)}>
          <FormProvider {...newCycleForm}>
            <NewCircleForm />
          </FormProvider>
          <CountDown />
          {activeCycle ? (
            <StopCountdownButton onClick={interruptCurrentCycle} type="button">
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton disabled={isSubmitDisabled} type="submit">
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )}
        </form>
      </HomeContainer>
    </>
  );
}
