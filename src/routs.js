import { createBrowserRouter } from "react-router-dom";
import MainContent from "./components/main/MainContent";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";

export const routs = createBrowserRouter([
    {
        path: '/', element: <MainLayout />, children: [
            { path: '/', element: <MainContent /> },
        ]
    },
    { path: '*', element: <NotFound /> }
])