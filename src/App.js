import { Store } from "./Store";
import { Container } from "./components/Container.jsx";
import { QuoteBox } from "./components/QuoteBox.jsx";

function App() {
  return (
    <div className="App">
      <Store>
        <Container>
          <QuoteBox />
        </Container>
      </Store>
    </div>
  );
}

export default App;
