const AgeCalc = () => {
  const eraList = {
    items: [
      { label: "西暦", value: "seireki", era: 0 },
      { label: "明治", value: "meiji", era: 1868 },
      { label: "昭和", value: "showa", era: 1926 },
      { label: "平成", value: "heisei", era: 1989 },
      { label: "令和", value: "reiwa", era: 2019 },
    ],
  };

  const dayOfMonth = [...Array(31)].map((_, i) => i + 1);

  return (
    <main className="flex justify-center items-start constainer mx-auto px-8 md:px-16 lg:px-24 my-24">
      <form className="grid grid-cols-[auto_1fr] gap-8 items-center justify-center">
        <div className="flex justify-center items-center gap-2">
          <select
            name="birth-era"
            id="birth-era"
            className="p-2 rounded-md border"
          >
            {eraList.items.map((era) => (
              <option value={era.value}>{era.label}</option>
            ))}
          </select>
          <input
            type="number"
            name="birth-year"
            id="birth-year"
            max={3000}
            step={1}
            className="p-2 rounded-md border"
          />
          <span>年</span>
          <select
            name="birth-month"
            id="birth-month"
            className="p-2 rounded-md border"
          >
            {dayOfMonth.map((d) => (
              <option value={d}>{d}</option>
            ))}
          </select>
          <span>月</span>
          <select
            name="birth-day"
            id="birth-day"
            className="p-2 rounded-md border"
          >
            {dayOfMonth.map((d) => (
              <option value={d}>{d}</option>
            ))}
          </select>
          <span>日生</span>
        </div>
        <button className="bg-slate-200 py-2 px-4 rounded-md hover:bg-slate-600 transition-all duration-300">
          計算
        </button>
      </form>
    </main>
  );
};

export default AgeCalc;
