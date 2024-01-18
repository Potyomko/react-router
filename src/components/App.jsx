import { Outlet } from "react-router-dom";
import { Navigation } from "./AppNav";
import { Suspense } from "react";

const App = () => {
  return (
    <Suspense fallback={<div>Loader...</div>}>
      <div className="container">
        <Navigation />
        <Outlet></Outlet>
      </div>
    </Suspense>
  );
};
export default App;
