import { Container } from "reactstrap";
import Router from "./route/router";
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
