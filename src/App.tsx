import { Container } from "reactstrap";
import Router from "./Route/route";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <Container>
        <Router />
      </Container>
    </FormProvider>
  );
}

export default App;
