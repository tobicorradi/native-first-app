import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screensNavigation } from "../consts/screensNavigation";

import { Account, Home, Search } from "../views";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      {screensNavigation.map(({ component, name }) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};

export default Navigation;
