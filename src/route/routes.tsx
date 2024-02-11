import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllUser from "../page/AllUser";
import UserDetails from "../page/UserDetails";
import AddUser from "../page/AddUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllUser />,
      },
      {
        path: '/user-details/:id',
        element: <UserDetails/>,
        loader: ({params})=>fetch(`https://dummyjson.com/users/${params.id}`)
      },
      {
        path: '/add-user',
        element: <AddUser/>
      }
    ],
  },
]);
