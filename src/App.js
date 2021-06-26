import './App.css';
import AllComponents from "./helpers/common/allComponents"
function App() {
  return (
    <div className="App">
      <AllComponents.Header />
      <AllComponents.NavLine />
      <AllComponents.FirstGal />
      <AllComponents.SecondGal />
      <AllComponents.Gal3 />
      <AllComponents.PeopleLine />
      <AllComponents.LastLine />
      <AllComponents.Footer />
    </div>
  );
}

export default App;
