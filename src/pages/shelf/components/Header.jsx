import Taro, { useState } from '@tarojs/taro'
import { View, Text } from "@tarojs/components";
import { AtSearchBar } from 'taro-ui';
import './Header.css';

function Header() {
  const [searchVal, setSearchVal] = useState('');

  const onInputChange = (value) => {
    setSearchVal(value);
  };

  const onSearch = () => {
    console.log('搜索')
  };

  return (
    <View className='search'>
      <AtSearchBar
        placeholder='请输入歌曲名'
        value={searchVal}
        onChange={onInputChange}
        customStyle={{
          width: '100vw',
          fontSize: '20vw'
        }}
      />
    </View>
  )
}

export default Header;
