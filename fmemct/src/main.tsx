import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import WorkplaceFormPage from "./pages/WorkplaceFormPage.tsx";
import {Home} from "./pages/Home.tsx";
import {MainLayout} from "./layouts/MainLayout.tsx";
import {ApolloProvider} from "@apollo/client/react";
import client from "./apollo/client.ts";
import WorkplaceListPage from "./pages/WorkplaceListPage.tsx";

const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/workplace_form", element: <WorkplaceFormPage/>},
            {path: "/workplace_list", element: <WorkplaceListPage/>},
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ApolloProvider client={client}>
        <RouterProvider router={router}/>
    </ApolloProvider>
);
