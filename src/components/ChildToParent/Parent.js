//In React, data can be passed from a child component to its parent component by utilizing callback functions. The parent component can pass a function as a prop to the child component, which the child component can then invoke and pass the desired data as an argument.

import React, { useState } from 'react';
import ChildComponent from './Child';

function ParentComponent() {
  const [childData, setChildData] = useState('');

  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <ChildComponent onChildData={handleChildData} />
      <p>Data from child: {childData}</p>
    </div>
  );
}

export default ParentComponent;
