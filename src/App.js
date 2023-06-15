import React, { useState } from "react";

import Header from "./components/Header";
import ContentBar from "./components/ContentBar";

function App() {
  const [headerTitle, setHeaderTitle] = useState("Software Engineer");
  
  const handleChangeTitle = (e) => {
    
    setHeaderTitle(e.target.name);
  };

  return (
    <div style={{height: "100vh"}}>
      <Header headerTitle={headerTitle}/>
      <ContentBar />
    </div>
  );
}

export default App;
