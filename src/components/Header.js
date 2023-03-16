import React from 'react';

export default function Header() {
  return (
    <header className="p-1 text-center">
      <h1 className="mb-0">
        <a id="name" href="/" alt="About Ryan Cottle">
          Ryan Cottle
        </a>
      </h1>
      <a href="mailto:cottlert@gmail.com" id="email">
        cottlert@gmail.com
      </a>
    </header>
  );
}
