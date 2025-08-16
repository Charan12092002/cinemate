import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white  shadow-sm dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2030{" "}
          <Link href="/" className="hover:underline">
            cinemate
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/mr___charan___cherry___?igsh=emQzYjUwbjMxZ3N1 "
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              Instgram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/charandeep-royal"
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              Linkdin
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@charantechpro3922"
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Charan12092002"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
