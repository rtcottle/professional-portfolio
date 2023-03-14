import React from 'react';
import Github from '../icons/github.png';
import Linkedin from '../icons/linkedin.png';

const GITHUB = process.env.REACT_APP_GITHUB;
const LINKEDIN = process.env.REACT_APP_LINKEDIN;

export default function Footer() {
  return (
    <footer class="fixed-bottom p-3 text-end">
      <a href={GITHUB}>
        <img src={Github} alt="GitHub" class="icon m-3" />
      </a>
      <a href={LINKEDIN}>
        <img src={Linkedin} alt="LinkedIn" class="icon m-3" />
      </a>
    </footer>
  );
}
