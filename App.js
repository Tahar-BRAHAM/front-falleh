



import  React from 'react';
import DrawerNavigation from './src/navigations/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////   TeamWork makes the dream Work        //////////////////////////////////////////////////
/////////////////////////////////////////////////        Riadh & Khalil & Tahar          ///////////////////////////////////////////////////
////////////////////////////////////////////////              HighFalleh                ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const App = () => {

  return (
    
    <NavigationContainer>
      <AuthNavigator/>
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
