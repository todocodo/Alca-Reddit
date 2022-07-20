
// Import React
import React from "react";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Import other React Component
import CreateThread from "./Components/create-thread.component";
import ThreadList from "./Components/thread-list.component";
import Layout from "./Components/layout/Layout";
import WelcomePage from "./Components/pages/WelcomePage";

// App Component
const App = () => {
  return (
    <div>
      <Layout>
        <div className="wrapper">
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route path="/create-thread" element={<CreateThread />} />
            <Route path="/thread-list" element={<ThreadList />} />
          </Routes>
        </div>
      </Layout>
    </div>
  );
};

export default App;
