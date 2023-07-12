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
        <Route path="interactive" element={<Interactive />}>
          <Route path=":section" element={<Interactive />} />
          <Route path=":section/:work" element={<Interactive />} />
        </Route>
        <Route path="classic" element={<Classic />}>
          <Route path=":section" element={<Classic />} />
          <Route path=":section/:work" element={<Classic />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
