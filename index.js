/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWorld from './components/03/HelloWorld';
import Robot from './components/04_Props/Robot';
import MultipleGreeting from './components/04_Props/MultipleGreetings';
import TextBlink from './components/05_State/TextBlink';
import StyleSheets from './components/06_StyleSheets/StyleSheets';
import FixedDimension from './components/07_width_height_flex/FixedDimension';
import FlexDimension from './components/07_width_height_flex/FlexDimension';
import FlexExample from './components/08_Flex/FlexExample';
import Textinputs from './components/09_TextInput/Textinputs';
import Buttons from './components/10_Button/Buttons';
import touchables from './components/11_Touchable/touchables';
import VerticalScrollView from './components/12_ScrollView/VerticalScrollView';
import HorizontalScrollView from './components/12_ScrollView/HorizontalScrollView';
import ViewPagerExample from './components/12_ScrollView/ViewPagerExample';
import FlatListExample01 from './components/13_FlatList/FlatListExample01'
import ItemFlatListExample02 from './components/13_FlatList/ItemFlatListExample02';
import DeleteFlatListExample03 from './components/13_FlatList/DeleteFlatListExample03';
import FlatListAddButton04 from './components/13_FlatList/FlatListAddButton04';
import ModalBoxFlatListExample05 from './components/13_FlatList/ModalBoxFlatListExample05';
import LyCyclerDemo from './components/LyCyclerDemo';
import HorizontalFlatList from './components/13_FlatList/HorizontalFlatList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HorizontalFlatList);
