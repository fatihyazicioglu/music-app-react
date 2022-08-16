import "./App.css";
import { useState } from "react";

function App() {
  const [songs, setSongs] = useState([
    { title: "", artist: "", img_src: "", src: "" },
    { title: "", artist: "", img_src: "", src: "" },
    { title: "", artist: "", img_src: "", src: "" },
    { title: "", artist: "", img_src: "", src: "" },
  ]);
  return <div className="App">App</div>;
}

export default App;
