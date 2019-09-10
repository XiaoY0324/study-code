import * as React from "react";
import routes from "../routes/index-server-router";
import { StaticRouter } from "react-router-dom";
import Banner from "../components/Banner";
const App = (url: string) => {
    return (
        <>
            <StaticRouter location={url}>
                <Banner/>
                { routes() }
            </StaticRouter>
        </>
    )
};
export default App;


