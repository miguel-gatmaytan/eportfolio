import * as React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import Classic from "modules/classic";
import LandingPage from "modules/landing-page";
import Interactive from "modules/interactive";

import Overlay from "./components/Overlay";
import AppContainer from "./components/AppContainer";

function Layout() {
  return (
    <AppContainer>
      <Overlay />
      <Outlet />
    </AppContainer>
  );
}
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="interactive/:section" element={<Interactive />} />
        <Route path="interactive" element={<Interactive/>} />
        <Route path="classic/:section" element={<Classic/>} />
        <Route path="classic" element={<Classic/>} />
      </Route>
    </Routes>
  );
};

export default App;
