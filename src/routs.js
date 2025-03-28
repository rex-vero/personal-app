import MainContent from "./components/main/MainContent";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";

export const routs = [
    {
        path: '/', element: <MainLayout />, children: [
            { path: '/', element: <MainContent /> },
        ]
    },
    {
        path: '/auth', element: <AuthLayout />, children: []
    },
    { path: '*', element: <NotFound /> }
]