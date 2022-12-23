import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "../layouts/root";
import Index from "../pages";
import Contact, { loader as contactLoader, action as contactAction } from "../pages/contact";
import { action as destroyAction } from "../pages/destroy";
import EditContact, { action as editAction } from "../pages/edit";
import ErrorPage from "../pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
