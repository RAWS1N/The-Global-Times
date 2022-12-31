import React from "react";
import { Route } from "react-router-dom";
import { Homepage } from "./pages";
import { PageContainer } from "./containers";
import ArticlePage from "./components/ArticlePage";
function App() {
  return (
    <PageContainer>
          <Route e path="/article/:id" element={<ArticlePage/>}/>
          <Route path="/" element={<Homepage />} />
    </PageContainer>
  );
}

export default App;
