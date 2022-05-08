// Pages
import Prediction from "layouts/pages/prediction";
import Main from "layouts/pages/main";

const routes = [
  {
    name: "Home",
    route: "/pages/main",
    component: <Main />,
  },
  {
    name: "Prediction",
    route: "/pages/prediction",
    component: <Prediction />,
  },
];

export default routes;
