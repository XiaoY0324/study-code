import * as React from "react";
import routes from "../routes";
const { useContext } = React;
import { BrowserRouter } from "react-router-dom";
import YdStore from "@models/YdStore";
import { observer } from "mobx-react-lite";
const App = observer(() => {
  const ydstore = useContext(YdStore);
  const token = ydstore.token;
  return (
    <>
      <BrowserRouter basename="/">
        {routes(token)}
      </BrowserRouter>
    </>
  );
});
export default App;
