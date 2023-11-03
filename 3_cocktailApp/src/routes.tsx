import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Random from "./pages/Random";
import CocktailDetail from "./pages/CocktailDetail";
import NotFound from "./pages/NotFound";
import AdvancedSearch from "./pages/AdvancedSearch";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/random",
    element: <Random />,
  },
  {
    path: "/cocktail/:id",
    element: <CocktailDetail />,
  },
  {
    path: "/advanced-search",
    element: <AdvancedSearch />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export { Router };
