import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold">Vite + React</h1>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="rounded bg-gray-200 px-1 py-0.5">src/App.tsx</code> and save to test
          HMR
        </p>
      </div>
      <p className="mt-6 text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
