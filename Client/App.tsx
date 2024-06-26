
import React from 'react';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ions from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import store from './src/store';
import Navigation from './src/configs/Navigation';
Icon.loadFont()
MaterialIcon.loadFont()
AntDesign.loadFont()
Fontisto.loadFont()
Ions.loadFont()

const App: React.FunctionComponent = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
};

export default App;
