import { Account, Home, Search } from "../views";

interface ScreensNavigation {
  name: string;
  component: React.FC;
}

export enum ScreensNames {
  Home = "Home",
  Search = "Search",
  Account = "Account",
}

export const screensNavigation: ScreensNavigation[] = [
  {
    name: ScreensNames.Home,
    component: Home,
  },
  {
    name: ScreensNames.Search,
    component: Search,
  },
  {
    name: ScreensNames.Account,
    component: Account,
  },
];
