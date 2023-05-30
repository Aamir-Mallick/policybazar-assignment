import { ListItem } from "./components/listItem/ListItem";
import { Description } from "./components/description/Description";
import ErrorPage from "./components/error/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListItem />,
    errorElement: <ErrorPage />,
  },
  {
    path: "details/:detailsId",
    element: <Description />,
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
