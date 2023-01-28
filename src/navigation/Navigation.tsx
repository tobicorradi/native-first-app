import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../views";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default Navigation;
