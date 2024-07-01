import Home from "../pages/Home";
import Books from "../pages/Books";
import BookDetails from "../pages/Books/BookDetails";
import Favorites from "../pages/Favorites";
import Characters from "../pages/Characters";
import CharacterDetails from "../pages/Characters/CharacterDetails";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/Movies/MovieDetails";
import Potions from "../pages/Potions";
import PotionDetails from "../pages/Potions/PotionDetails";
import Spells from "../pages/Spells";
import SpellDetails from "../pages/Spells/SpellDetails";
import PageLayout from "../pages/PageLayout";

const routes = [
  {
    name: "home",
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        name: "home",
        path: "home",
        element: <Home />,
      },
      {
        name: "books",
        path: "books",
        element: <Books />,
      },
      {
        name: "books",
        path: "books/:bookId",
        element: <BookDetails />,
      },
      {
        name: "favorites",
        path: "favorites",
        element: <Favorites />,
      },
      {
        name: "characters",
        path: "characters",
        element: <Characters />,
      },
      {
        name: "characters",
        path: "characters/:characterId",
        element: <CharacterDetails />,
      },
      {
        name: "movies",
        path: "movies",
        element: <Movies />,
      },
      {
        name: "movies",
        path: "movies/:movieId",
        element: <MovieDetails />,
      },
      {
        name: "potions",
        path: "potions",
        element: <Potions />,
      },
      {
        name: "potions",
        path: "potions/:potionId",
        element: <PotionDetails />,
      },
      {
        name: "spells",
        path: "spells",
        element: <Spells />,
      },
      {
        name: "spells",
        path: "spells/:spellId",
        element: <SpellDetails />,
      },
    ],
  },
];

const routeMap = (routes) =>
  routes.map((route) => {
    if (route?.children) {
      route.children = routeMap(route.children);
    }
    return route;
  });

export default routeMap(routes);
