import { Account, Home, Search } from "../views";

interface ScreensNavigation {
  name: string;
  component: React.FC;
}

export const screensNavigation: ScreensNavigation[] = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Search",
    component: Search,
  },
  {
    name: "Account",
    component: Account,
  },
];
