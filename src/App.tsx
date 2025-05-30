import { useState } from 'react';

function App() {
  // useState hook to manage the counter's state
  const [count, setCount] = useState(0);
  // Retrieves the application title from environment variables (VITE_APP_TITLE)
  // Falls back to a default title if the environment variable is not set.
  const appTitle = import.meta.env.VITE_APP_TITLE || 'Vite + React (Default)';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      {/* Responsive text size, using environment variable for title */}
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl">{appTitle}</h1>
      {/* Responsive card with adjusted padding and width */}
      <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-md sm:w-auto sm:p-6">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 sm:w-auto"
          // The button's text `count is {count}` clearly indicates its state and purpose,
          // making additional aria attributes for live regions less critical for this specific case.
          // Ensuring the button has adequate touch target size via padding.
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="rounded bg-gray-200 px-1 py-0.5">src/App.tsx</code> and save to test
          HMR
        </p>
      </div>
      {/* The paragraphs below were placeholders from the default Vite template and have been removed. */}
      {/* You can add more relevant introductory content or remove this space. */}
    </div>
  );
}

export default App;
