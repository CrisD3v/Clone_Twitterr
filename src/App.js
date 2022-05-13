import React from 'react';
import GlobalStyle from './Styles/GlobalStyles';
import { Home } from './Components/Home/Home';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Widgets } from './Components/Widgets/Widgets';

function App() {
  return (
    <div className="App">
      {/* SideBar */}
      <Sidebar />

      {/* Home */}
      <Home />


      {/* Widgets */}
      <Widgets />


      <GlobalStyle />
    </div>
  );
}

export default App;
