import { useState } from "react";
import Template from "./components/Template";
import "./App.css";
import Editor from "./components/Editor";

function App() {
  const [page, setPage] = useState({
    name: "",
    email: "",
    phone: "",
    education: [
      { id: crypto.randomUUID(), school: "", major: "", date1: "", date2: "" },
    ],
    jobs: [
      {
        id: crypto.randomUUID(),
        name: "",
        title: "",
        resp: "",
        date1: "",
        date2: "",
      },
    ],
  });

  function changePage(newPage) {
    setPage(newPage);
  }

  return (
    <div className="app">
      <Editor handleChange={changePage} info={page} />
      <Template info={page} />
    </div>
  );
}

export default App;
