import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '10px', border: '1px solid gray', borderRadius: '8px', width: '200px', marginLeft: 'auto', marginRight: 'auto' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '20px', marginBottom: '10px' }}>Current Count: {count}</p>
      <button style={{ margin: '5px' }} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{ margin: '5px' }} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={{ margin: '5px' }} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
