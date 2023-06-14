import React, { useState } from "react";

import Header from "./components/Header";
import BottomInfoBar from "./components/BottomInfoBar";
import ButtonBar from "./components/ButtonBar";

function App() {
  const [headerTitle, setHeaderTitle] = useState("Software Engineer");
  const [buttonNames, setButtonNames] = useState(["Experience", "Projects", "Education", "Interests"]);
  
  const handleChangeTitle = (e) => {
    
    setHeaderTitle(e.target.name);
  };

  return (
    <div style={{height: "100vh"}}>
      <Header headerTitle={headerTitle}/>
      <ButtonBar buttonNames={buttonNames}/>
      <BottomInfoBar />
    </div>
  );
}

export default App;
