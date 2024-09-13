import React from 'react';

const Button = () => {
  return (
    <button className="bg-customRed text-customDark border-2 border-transparent px-3 py-1 rounded-lg text-sm transition-colors transform duration-200 ease-out hover:text-black hover:border-customDark hover:bg-red-300 hover:scale-105">
      Connect account
    </button>
  );
};

export default Button;
