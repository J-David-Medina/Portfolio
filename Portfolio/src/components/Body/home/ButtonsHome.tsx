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
        className="w-14 h-14 rounded-full border-2 flex items-center justify-center border-[#2fb371]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <path
            fill="#2fb371"
            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
          ></path>
        </svg>
      </a>

      <a
  href="https://github.com/J-David-Medina"
  target="_blank"
  className="w-14 h-14 rounded-full border-2 flex items-center justify-center border-[#2fb371]"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
    <path
      fill="#2fb371"
      d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
    ></path>
  </svg>
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
