import "./App.css";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { IssuesContainer } from "./modules/issuesContainer";

function App() {
  return (
    <>
      <Header />
      <IssuesContainer />
      <Footer />
    </>
  );
}

export default App;
