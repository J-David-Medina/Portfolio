import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ContextApp } from "./context/ContextApp";

function App() {
  return (
    <ContextApp>
      <div className="dark:bg-black">
        <Header />
        <Body />
        {/* <Footer />  */}
      </div>
    </ContextApp>
  );
}

export default App;
