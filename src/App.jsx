import { useState, useEffect } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=2&per_page=10`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
      });
  }, []);

  return (
    <>
      <div>welcome</div>
    </>
  );
}

export default App;
