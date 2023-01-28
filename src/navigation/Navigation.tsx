import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreensNames, screensNavigation } from "../consts/screensNavigation";
import { Icon } from "react-native-elements";
import { Account, Home, Search } from "../views";
import { ParamListBase, RouteProp } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => getIcon(route, color, size),
      })}
    >
      {screensNavigation.map(({ component, name }) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};

export default Navigation;

const getIcon = (
  route: RouteProp<ParamListBase, string>,
  color: string,
  size: number
) => {
  let iconName = "";

  switch (route.name) {
    case ScreensNames.Home:
      iconName = "home-outline";
      break;
    case ScreensNames.Search:
      iconName = "magnify";
      break;
    case ScreensNames.Account:
      iconName = "account-outline";
      break;
  }
  return (
    <Icon type="material-community" color={color} name={iconName} size={size} />
  );
};
