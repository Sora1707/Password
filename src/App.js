import {
    BrowserRouter as Router,
    Routes,
    Route,
    useSearchParams,
} from "react-router-dom";
import { publicRoutes } from "~/routes";
import DefaultLayout from "~/layouts/DefaultLayout";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout
                            ? route.layout
                            : DefaultLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Layout />}
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
