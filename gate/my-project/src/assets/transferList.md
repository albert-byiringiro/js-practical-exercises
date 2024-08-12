/*

import { useState, useEffect } from 'react';

function NameTransfer() {
  const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const [names, setNames] = useState(initialNames);
  const [transferredNames, setTransferredNames] = useState([]);

  useEffect(()=> {
    const timer = setInterval(()=> {
      if(names.length > 0){
          const named = names[0];
          setNames(names.slice(1))
          setTransferredNames(transName => [...transName, named])
      }
    }, 2000)

    return () => clearInterval(timer)
  }, [names, transferredNames])

  return (
    <div>
      <h3>Original Names</h3>
      <ul style={{backgroundColor:"red"}}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul style={{backgroundColor:"green"}}>
        {transferredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;


*/

<!-- 2nd response -->


import { useState, useEffect } from 'react';

function NameTransfer() {
  const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const [names, setNames] = useState(initialNames);
  const [transferredNames, setTransferredNames] = useState([]);

  
  useEffect(()=> {
    
    const transferringNames = () => {
      if (names.length > 0) {
        const [name, ...rest] = names;
        setNames(rest);
        setTransferredNames(prevTrans => [...prevTrans, name]);
      }
    }

    const timer = setInterval(() => {
      transferringNames();
    }, 2000);

    return () => clearInterval(timer);
  }, [names])

  return (
    <div>
      <h3>Original Names</h3>
      <ul style={{backgroundColor:"red"}}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul style={{backgroundColor:"green"}}>
        {transferredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;