import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="txt-color-primary text-center px-10 h-full flex flex-col justify-center">
      <h1 className="font-bold text-8xl my-4">404</h1>
      <p className="text-lg font-medium mb-[20%]">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="text-sm font-medium underline mb-8" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default ErrorPage;
