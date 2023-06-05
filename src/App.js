import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

{
  /*
   *
   * Head
   * Body
   *   SideBar
   *      MenuBar
   *   MainContaiber
   *      ButtonList
   *      VideoContainer
   *      VideoCard
   *  */
}

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path : "/",
      element: <MainContainer/>
    },
    {
      path : "/watch",
      element: <WatchPage/>
    }
  ],
}]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
