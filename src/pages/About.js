import React from 'react';

export default function About() {
  return (
    <div className="px-3">
      <h2>About Me</h2>
      <p>
        I am a full-stack web developer that is curious about learning how web
        systems work. I find joy in seeing my efforts function in their designed
        capacity. I have been developing a variety of apps through HTML, CSS,
        and JavaScript languages. My experience so far has been very fast-paced,
        and I've been able to keep up and continue learning throughout the
        experience.
      </p>
      {/* <p>Since beginning my coding career, I've had ideas o</p> */}
      <br />
      <h4>Here are some quick things about me:</h4>
      <ul>
        <li>I enjoy learning new technologies</li>
        <li>I work well as a team or individually</li>
        <li>
          Understanding the big picture helps me think more creatively and find
          solutions faster
        </li>
      </ul>
    </div>
  );
}
