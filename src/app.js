import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1 className='text-4xl text-amber-300'>Hello, React with Parcel and Babel!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)