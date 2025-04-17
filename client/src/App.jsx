import AddUser from "./adduser/AddUser";
import GetUser from "./getuser/GetUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateUser from "./updateuser/UpdateUser";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <GetUser />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <UpdateUser />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default App;
