import React, {useState} from 'react';

const Greetings = () => {
  const [wasClicked, setWasClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setWasClicked(true)}>Click me</button>
      {wasClicked && <p>Button was clicked</p>}
      {!wasClicked && <p>Button was NOT clicked</p>}
      <p>Hello World!</p>
    </div>
  );
};

export default Greetings;