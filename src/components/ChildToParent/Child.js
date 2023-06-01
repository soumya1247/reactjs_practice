import React from 'react';

function ChildComponent({ onChildData }) {
  const sendDataToParent = () => {
    const data = 'Hello from child';
    onChildData(data);
  };

  return (
    <div>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
