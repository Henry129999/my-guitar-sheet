import Taro, { useState } from '@tarojs/taro'
import { View, Text } from "@tarojs/components";
import { AtFab, AtIcon } from 'taro-ui'
import Header from './components/Header';
import Directory from './components/Directory';
import SheetList from './components/SheetList';
import './index.scss';

function Shelf() {
  const [count, setCount] = useState(0);

  return (
    <View className='container'>
      <Header />
      <View className='content' style='height: calc(100% - 12.3vw)'>
        <Directory />
        <SheetList />
        <View className='float-btn'>
          <AtFab size='normal' className='add-btn'>
            <AtIcon value='add' size='24' color='#FFF' />
          </AtFab>
        </View>
      </View>
    </View>
  )
}

Shelf.config = {
  navigationBarTitleText: '我的谱库',
};

export default Shelf;
