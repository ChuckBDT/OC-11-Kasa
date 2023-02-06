import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="txt-color-primary text-center px-10 xl:px-24 grow flex flex-col justify-center">
      <h1 className="font-bold text-8xl xl:text-[18rem] my-4">404</h1>
      <p className="text-lg xl:text-4xl font-medium mb-[20%] xl:mb-20">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="text-sm xl:text-lg font-medium underline my-12" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default ErrorPage;
