import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState('');
  const [ receivedFromChild, setReceivedFromChild ] = useState('');

  // Callback function to receive data from the child component
  const handleChildData = (childData) => {
    setDataFromChild(childData);
  };

  const ChildData = (datafromChild) =>{
    setReceivedFromChild(datafromChild)
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {dataFromChild} {receivedFromChild}</p>
      <ChildComponent 
        sendDataToParent={handleChildData}
        dataToParent = {ChildData} 
      />
    </div>
  );
};

export default ParentComponent;
