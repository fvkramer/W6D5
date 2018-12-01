import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
// import Articles from './frontend/articles';

const articles = [
  {title: "RaccoonFartBox", content: "Rear faltulence"},
  {title: "I love coffee", content: "Coffee is great, it keeps me from being late"},
  {title: "The person behind me", content: "Is great"}
];

const Root = () => (
  <div>
    {<Clock />}
    {<Tabs tabs={articles} />}
  </div>
);

export default Root;
