import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <div className="mt-12 bg-whitesmoke rounded-lg shadow m-4 dark:bg-gray-800 justify-evenly">
      <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Rewolucyjne rozwiązanie</p>
      <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Dla branży transportowej</h3>
      <img className="mx-auto" src={process.env.PUBLIC_URL + '/images/kary.png'} alt="search panel" />
      <Button />
        <Link to="/Results" className="common-button-style">
          Wyszukaj
        </Link>
      <p className="mt-8 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Teraz nie musisz się męczyć i monotonnie przejrzewać całość dokumentu w poszukiwaniu jednego konkretnego artykułu</p>
    </div>
  );
};

export default Hero;
