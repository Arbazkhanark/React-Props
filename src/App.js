import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <>
      {data.map((data) => (
        <Card icon={data.icon} title={data.name} desc={data.desc} />
      ))}
    </>
  );
}

export default App;
