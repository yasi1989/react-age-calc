type AgeCalcFormProps = {
  formAction: (formData: FormData) => void;
  pending: boolean;
  error: string;
};

const AgeCalcForm = ({ formAction, pending, error }: AgeCalcFormProps) => {
  const eraList = {
    items: [
      { label: "西暦", value: "seireki" },
      { label: "明治", value: "meiji" },
      { label: "大正", value: "taisho" },
      { label: "昭和", value: "showa" },
      { label: "平成", value: "heisei" },
      { label: "令和", value: "reiwa" },
    ],
  };
  const monthOfYears = [...Array(12)].map((_, i) => i + 1);
  const dayOfMonth = [...Array(31)].map((_, i) => i + 1);
  return (
    <form
      className="grid grid-cols-[auto_1fr] gap-8 items-center justify-center"
      action={formAction}
    >
      <div className="flex justify-center items-center gap-2">
        <select name="era" id="era" className="p-2 rounded-md border">
          {eraList.items.map((era) => (
            <option value={era.value} key={era.value}>
              {era.label}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="year"
          id="year"
          className="p-2 rounded-md border"
        />
        <span>年</span>
        <select name="month" id="month" className="p-2 rounded-md border">
          {monthOfYears.map((m) => (
            <option value={m} key={m}>
              {m}
            </option>
          ))}
        </select>
        <span>月</span>
        <select name="day" id="day" className="p-2 rounded-md border">
          {dayOfMonth.map((d) => (
            <option value={d} key={d}>
              {d}
            </option>
          ))}
        </select>
        <span>日生</span>
      </div>
      <button
        className={`bg-slate-200 py-2 px-4 rounded-md hover:bg-slate-600 transition-all duration-300 ${
          pending && "cursor-not-allowed"
        }`}
        disabled={pending}
      >
        計算
      </button>
      <p className="text-red-500 row-span-2">{error}</p>
    </form>
  );
};

export default AgeCalcForm;
