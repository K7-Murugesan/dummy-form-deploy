import React, { useState } from 'react';

const ChildComponent = ({ sendDataToParent, dataToParent }) => {
  const [childData, setChildData] = useState('');

  const handleInputChange = (e) => {
    setChildData(e.target.value);
  };

  const sendDataToParentHandler = () => {
    // Call the callback function with the data from the child component
    sendDataToParent(childData);
  };

  const sentData = ()=>{
    dataToParent(childData)
  }

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={childData} onChange={handleInputChange} />
      <button onClick={()=>{sendDataToParentHandler(); sentData()}}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
