import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cv from "../../../assets/pdf/CV.pdf";

export const ButtonsHome = () => {
  return (
    <div className="flex space-x-5 ">
      <div className="flex border-[#2fb371] border-2 w-44 items-center justify-center rounded-3xl cursor-pointer py-1 text-[#2fb371] space-x-2">
        <a href={Cv} download="Mi_CV" className="flex items-center space-x-2">
          <button>Descargar CV</button>
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>

      <a
        href="https://www.linkedin.com/in/juan-david-agudelo-30b24b22b/"
        target="_blank"
        className="w-12 rounded-full border-2 flex items-center justify-center"
      >
        <LinkedInIcon />
      </a>

      <a href="https://github.com/J-David-Medina" target="_blank">
        <GitHubIcon />
      </a>
    </div>
  );
};

export const LinkedInIcon = ({
  size = 48,
  color = "#2fb371",
  className = "",
}) => {
  return (
    <a
      href="https://www.linkedin.com/in/juan-david-agudelo-30b24b22b/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`text-${color} ${className}`}
      >
        <path d="M4.98 3.5C4.98 2.12 6.12 1 7.5 1s2.52 1.12 2.52 2.5c0 1.38-1.14 2.5-2.52 2.5S4.98 4.88 4.98 3.5zM2 9h5v12H2zM9 9h5v1h-.04c-.56 0-1.1.24-1.46.62-.26.29-.42.67-.42 1.07V21h-4V9zm5.4-2.25C14.65 6.25 16 7.71 16 9.5c0 1.76-1.37 3.25-3.07 3.25-1.24 0-2.31-.72-2.81-1.7h-.02v-3.1h5.51v3h-3.54z" />
      </svg>
    </a>
  );
};

export const GitHubIcon = ({
  size = 50,
  color = "blue-600",
  className = "",
}) => {
  return (
    <a
      href="https://github.com/J-David-Medina"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`text-${color} ${className}`}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.78c-2.77.6-3.36-1.29-3.36-1.29-.45-1.14-1.1-1.45-1.1-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04 1.35 2.3 3.54 1.64 4.41 1.26.13-.98.52-1.64.95-2.02-2.57-.29-5.26-1.29-5.26-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.48.11-3.09 0 0 1-.32 3.26 1.23.95-.26 1.98-.38 2.99-.38 1.01 0 2.04.12 2.99.38 2.26-1.55 3.26-1.23 3.26-1.23.63 1.61.24 2.8.11 3.09.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.43-5.27 5.72.53.46.99 1.37.99 2.75v4.13c0 .28.18.58.69.48 3.97-1.32 6.83-5.08 6.83-9.48 0-5.52-4.48-10-10-10z" />
      </svg>
    </a>
  );
};
