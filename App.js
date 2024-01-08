import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MetalDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";
import { Provider } from 'react-redux';

import { Ionicons } from "@expo/vector-icons";
import IConButton from './components/IconButton';
import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function AppTabs() {

  const navigation = useNavigation();

  function openDrawer() {
    navigation.toggleDrawer();
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#ab4646' },
        headerTintColor: 'white',
        drawerContentStyle: { backgroundColor: '#a77070' },
        drawerActiveTintColor: '#e1dede',
        drawerInactiveTintColor: '#6a6666',
        drawerActiveBackgroundColor: '#ab4646',
        tabBarLabelStyle: { paddingTop: 0, paddingBottom: 8 },
        //tabBarStyle: { height: 56 },
        headerShown: true,
        headerLeft: (
          () => <IConButton
            title="menu"
            onPress={() => openDrawer()}
            icon="menu"
            color="white"
            styles={{ marginLeft: 8 }}
          />
        )
      }}>

      {/* <Tab.Screen
        name='Drawer'
        component={AppDrawer}
        options={{
          headerShown: false,
          title: 'All Categories',
          tabBarIcon: (({ color, size }) => <Ionicons color={color} size={size} name='list' />)
        }}
      /> */}

      <Tab.Screen
        name="MealsCatogories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          tabBarIcon: (({ color, size }) => <Ionicons color={color} size={size} name='list' />)
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: (({ color, size }) => <Ionicons color={color} size={size} name='home' />)
        }} />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          title: 'Setting',
          tabBarIcon: (({ color, size }) => <Ionicons color={color} size={size} name='settings' />)
        }}
      />
    </Tab.Navigator>
  );
}

function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#ab4646' },
        headerTintColor: 'white',
        drawerContentStyle: { backgroundColor: '#a77070' },
        drawerActiveTintColor: '#e1dede',
        drawerInactiveTintColor: '#6a6666',
        drawerActiveBackgroundColor: '#ab4646'
      }}>

      <Drawer.Screen
        name='Main'
        component={AppTabs}
        options={{
          headerShown: false,
          drawerIcon: (({ color, size }) => <Ionicons color={color} size={size} name='list' />)
        }}
      />

      {/* <Drawer.Screen
        name="MealsCatogories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: (({ color, size }) => <Ionicons color={color} size={size} name='list' />)
        }}
      /> */}

      {/* <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: (({ color, size }) => <Ionicons color={color} size={size} name='star' />)
        }}
      /> */}

      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: 'Favorite',
          drawerIcon: (({ color, size }) => <Ionicons color={color} size={size} name='star' />)
        }}
      />
      {/* <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Setting',
          drawerIcon: (({ color, size }) => <Ionicons color={color} size={size} name='settings' />)
        }}
      /> */}
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <>

      <Provider store={store}>
        <FavoritesContextProvider>
          <StatusBar style='dark' />

          <NavigationContainer>
            <Stack.Navigator
              //initialRouteName='MealsCatogories'
              screenOptions={{
                headerStyle: { backgroundColor: '#ab4646' },
                headerTintColor: 'white',
                headerBackTitle: 'Back'
              }}
            >
              {/* 1st screen of the app */}
              {/* <Stack.Screen
                  name='MealsCatogories'
                  component={CategoriesScreen}
                  options={{
                    title: 'Meals Catogories',
                  }}
                /> */}

              {/* <Stack.Screen
                  name='Tab'
                  component={AppTabs}
                  options={{
                    headerShown: false
                  }}
                /> */}

              <Stack.Screen
                name='Drawer'
                component={AppDrawer}
                options={{
                  headerShown: false
                }}
              />

              <Stack.Screen
                name='MealsOverview'
                component={MealsOverviewScreen}
              // options={({ route,navigation }) => {
              //   const id = route.params.id;
              //   return {
              //     title: 'Meals Overview',
              //   }           
              // }}
              />
              <Stack.Screen
                name='MealDetail'
                component={MetalDetailScreen}
                options={{
                  title: 'Meal Detail',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>

        </FavoritesContextProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
