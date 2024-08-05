/** @jsxImportSource https://esm.sh/react */
import { useState } from "https://esm.sh/react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="stylesheet" href="/styles.css"></link>
        <title>My app</title>
      </head>
      <body>
        <div>
          <h1>Hello DenoLand!</h1>
          <button onClick={() => setCount(count + 1)}>
            Click the 🦕
          </button>
          <p>You clicked the 🦕 {count} times</p>
        </div>
      </body>
    </html>
  );
};

export default App;
