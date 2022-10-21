import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from "../screens/Login";
import Home from "../screens/dashboard/Home";
import AntDesign from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../assets/theme";
import Vendas from "../screens/dashboard/vendas";
import Produtos from "../screens/produtos/Produtos";
import Middleware from "../hook/midware";
import Venda from "../screens/dashboard/vendas/venda";
import Produto from "../screens/produtos/produto";


export default function Routes() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="middleware" defaultScreenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="middleware" component={Middleware} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="login" component={Login} options={{
                    headerShown: false,
                    gestureEnabled: false
                }} />

                <Stack.Screen name="dashboard" component={Dashboard} options={{
                    headerShown: false,
                    gestureEnabled: false
                }} />

                <Stack.Screen name="venda" component={Venda} options={{
                    headerShown: false,
                    gestureEnabled: false
                }} />

                <Stack.Screen name="produto" component={Produto} options={{
                    headerShown: false,
                    gestureEnabled: false
                }} />
            </Stack.Navigator>




        </NavigationContainer>
    )
}


function Dashboard() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: colors.dark,
                paddingBottom: 10,
                height: 60,
            },
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: colors.grayDark,
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarIcon: ({ color, size, focused }) => (
                    <AntDesign name="home" color={focused ? colors.white : colors.blueGrayLight} size={23} />
                )
            }} />


            <Tab.Screen name="Produtos" component={Produtos} options={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12
                },
                tabBarIcon: ({ color, size, focused }) => (
                    <AntDesign name="book-open" color={focused ? colors.white : colors.blueGrayLight} size={23} />
                )
            }} />

            <Tab.Screen name="Vendas" component={Vendas} options={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12
                },
                tabBarIcon: ({ color, size, focused }) => (
                    <AntDesign name="shopping-bag" color={focused ? colors.white : colors.blueGrayLight} size={23} />
                )
            }} />








        </Tab.Navigator>
    )
}