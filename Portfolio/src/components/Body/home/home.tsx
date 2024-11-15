import David from "../../../assets/David.png";
import { ButtonsHome } from "./ButtonsHome";

export const Home = () => {
  return (
    <div
      id="home"
      className="flex sm:flex-row flex-col space-x-4 sm:space-x-8 space-y-8  items-center justify-center "
      style={{ height: "calc(100vh - 3rem)" }}
    >
      <div className=" space-y-8 ">
        <h2 className="text-title  text-4xl font-bold ">
          Bienvenidos a mi sitio web
        </h2>
        <p className="dark:text-[#E0E0E0] text-black text-left  max-w-3xl text-lg">
          ¡Hola! Soy Juan David Agudelo Medina, desarrollador web con una gran
          pasión por crear experiencias digitales que no solo sean atractivas,
          sino también funcionales. Me especializo en trabajar tanto en el
          front-end como en el back-end, y disfruto construir aplicaciones web
          que sean robustas, escalables y fáciles de usar. <br />
          <br /> Mi objetivo siempre es que el usuario tenga una experiencia
          fluida y rápida, por lo que me enfoco en la usabilidad y el
          rendimiento, sin dejar de lado las mejores prácticas de desarrollo. Me
          encanta estar en constante aprendizaje, explorar nuevas tecnologías y
          encontrar formas innovadoras de solucionar problemas.
        </p>
        <ButtonsHome />
      </div>
      <div className="w-64 h-64 overflow-hidden">
        <img
          src={David}
          alt="gato"
          className="object-cover w-full h-full object-top scale-125 mix-blend-lighten"
        />
      </div>
    </div>
  );
};
