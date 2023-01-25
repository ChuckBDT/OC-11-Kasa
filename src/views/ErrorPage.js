import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="txt-color-primary flex flex-col justify-center items-center flex-1">
      <h1 className="font-bold text-18rem">404</h1>
      <p className="text-4xl font-medium">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link
        className="flex-1 text-lg underline flex justify-center items-center"
        to="/"
      >
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default ErrorPage;
