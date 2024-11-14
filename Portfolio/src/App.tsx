import Body from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ContextApp } from "./context/ContextApp";

function App() {
  return (
    <div className="dark:bg-[#121212]">
      <div className=" lg:w-[70%] mx-auto ">
        <ContextApp>
          <Header />

          <Body />

          <Footer />
        </ContextApp>
      </div>
    </div>
  );
}

export default App;
