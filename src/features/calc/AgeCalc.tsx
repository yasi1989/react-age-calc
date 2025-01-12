import { useActionState } from "react";
import { calcurateAge } from "./lib/actions";
import { initialState } from "./lib/calcResultTypes";
import AgeCalcForm from "./components/AgeCalcForm";
import ResultDisplay from "./components/ResultDisplay";
import GraduationTable from "./components/GraduationTable";

const AgeCalc = () => {
  const [state, formAction, pending] = useActionState(
    calcurateAge,
    initialState
  );

  return (
    <main className="flex flex-col justify-start items-center constainer mx-auto px-8 md:px-16 lg:px-24 my-24 gap-4">
      <AgeCalcForm formAction={formAction} pending={pending} error={state.error} />
      {state.graduationsYear.length > 0 && (
        <div className="flex flex-col gap-16 w-full justify-center items-center">
          <ResultDisplay state={state} />
          <GraduationTable state={state} />
        </div>
      )}
    </main>
  );
};

export default AgeCalc;
