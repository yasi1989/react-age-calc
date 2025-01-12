import { State } from "../lib/calcResultTypes";

type ResultDisplayProps = {
  state: State;
};

const ResultDisplay = ({ state }: ResultDisplayProps) => {
  return (
    <section className="bg-white py-8 rounded-lg w-2/3 flex flex-col items-center justify-center">
      <p>
        生年月日：
        {`${state.birthDate?.getFullYear() ?? ""}年
        ${state.birthDate?.getMonth() !== undefined ? state.birthDate.getMonth() + 1 : ""}月
        ${state.birthDate?.getDate() ?? ""}`}日生
      </p>
      <p>年齢：{state.age}歳</p>
      <p>数年：{state.countAge}歳</p>
    </section>
  );
};

export default ResultDisplay;
