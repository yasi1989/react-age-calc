import { State } from "../lib/calcResultTypes";

type GraduationTableProps = {
  state: State;
};

const GraduationTable = ({ state }: GraduationTableProps) => {
  return (
    <section className="bg-white rounded-lg w-full flex items-center justify-center">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium bg-gray-100 rounded-tl rounded-bl">
              教育機関
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium bg-gray-100 rounded-tr">
              卒業年度（見込み）
            </th>
          </tr>
        </thead>
        <tbody>
          {state.graduationsYear.map((item, index) => (
            <tr key={index}>
              <td className="border-t-2 border-gray-200 px-4 py-3">
                {item.label}
              </td>
              <td className="border-t-2 border-gray-200 px-4 py-3">
                {item.year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default GraduationTable;
