import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout/Layout";
import GainLossPotentialCalculator from "../components/GainLossPotentialCalculator.tsx";
import SharesNumberCalculator from "../components/SharesNumberCalculator.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: "/sharesNumberCalculator",
                element: <SharesNumberCalculator/>
            },
            {
                path: "/gainLossCalculator",
                element: <GainLossPotentialCalculator/>
            },
        ]
    },
]);

export default router;