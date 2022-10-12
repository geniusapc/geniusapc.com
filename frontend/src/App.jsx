import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./sass/main.scss";
import "./App.scss";
import Nav from "./component/SideNav/SideNav.lg";
import Intro from "./component/Intro/Intro";
import Skills from "./component/Skills/Skills";
import Contact from "./component/Contact/Contact";

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <main id="main-container">
        <Nav />
        <div style={{ overflow: "hidden" }}>
          <Intro />
          <Skills />
          <Contact />
        </div>
      </main>
    </QueryClientProvider>
  );
};

export default App;
