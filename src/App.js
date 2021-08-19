import "./App.css";
import HeaderImage from "./components/HeaderImage";
import Container from "./UI/Container";
import OrderWrapper from "./components/OrderWrapper";

function App() {
  return (
    <div>
      <Container>
        <HeaderImage />
        <OrderWrapper />
      </Container>
    </div>
  );
}

export default App;
