// import { useState, useEffect } from 'react'

// function MyComponent() {
//     const [status, setStatus] = useState('initial');
  
//     useEffect(() => {
//       const { promise, cancel } = makeCancellable(fetchData());
  
//       promise.then(() => setStatus('success')).catch(() => setStatus('error'));
  
//       return () => {
//         cancel();
//       };
//     }, []);
  
//     const text = (() => {
//       switch (status) {
//         case 'pending':
//           return 'Fetching…';
//         case 'success':
//           return 'Success';
//         case 'error':
//           return 'Error!';
//         default:
//           return 'Click to fetch';
//       }
//     })();
  
//     return <p>{text}</p>;
//   }