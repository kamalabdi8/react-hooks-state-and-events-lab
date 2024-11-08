// App.js

import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      {/* other components can go here */}
    </div>
  );
}

export default App;
