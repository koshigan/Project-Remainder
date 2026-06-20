import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/")
      .then(res => setData(res.data.message));
  }, []);

  return <h1>{data}</h1>;
}

export default App;