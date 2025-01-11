import Footer from "./components/Footer";
import Header from "./components/Header";
import AgeCalc from "./features/calc/AgeCalc";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <AgeCalc />
      <Footer />
    </div>
  );
}

export default App;
