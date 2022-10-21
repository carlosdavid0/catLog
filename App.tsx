import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/config/Route';
import { NotificationProvider } from 'react-native-internal-notification';


export default function App() {

    return (
        <NotificationProvider>
            <Routes />
        </NotificationProvider>
    )

}

