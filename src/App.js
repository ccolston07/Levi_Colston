//import './stylesheets/App.css';
import Header from "./components/Header";
import BottomInfoBar from "./components/BottomInfoBar";
import React, { useState } from "react";

function App() {
  const [headerTitle, setHeaderTitle] = useState("Software Engineer")
  
  const handleChangeTitle = (e) => {
    
    setHeaderTitle(e.target.name);
  }

  return (
    <div className="App">
      <Header headerTitle={headerTitle}/>
      <BottomInfoBar />
    </div>
  );
}

export default App;
