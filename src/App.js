import {Outlet} from 'react-router-dom';

import NavbarMenu from "./components/NavbarMenu";

function App() {
  return (
    <>
      <NavbarMenu />
      <Outlet />
    </>
  );
}

export default App;
