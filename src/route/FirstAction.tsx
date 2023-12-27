import { useState } from 'react';

export default function FirstAction() {
  const [serverData, setServerData] = useState<string | undefined>('');

  function fetchData() {
    async function fetchMessage() {
      const response = await fetch('http://localhost:4444/test');
      const respData = await response.json();
      setServerData(respData.message);
    }
    fetchMessage();
  }

  return (
    <div>
      <p> Data from server</p>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        onClick={fetchData}
      >
        Fetch
      </button>
      <br />

      <span style={{ fontSize: '32px', color: 'red' }}>{serverData}</span>
    </div>
  );
}
