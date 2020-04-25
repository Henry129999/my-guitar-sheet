import Taro, { useState } from '@tarojs/taro'
import { View, Text } from "@tarojs/components";
import { AtButton, AtIcon, AtInput } from 'taro-ui';
import './Header.css';

function Header() {
  const [searchVal, setSearchVal] = useState('');

  const handleInputChange = (value) => {
    setSearchVal(value);
  };

  const onSearch = () => {
    console.log('搜索')
  };

  return (
    <View className='header'>
      <AtButton type='primary'>
        <AtIcon value='add' size='12' />
        <Text>添加簿</Text>
      </AtButton>
      <View className='search'>
        <AtInput
          name='value'
          title=''
          type='text'
          placeholder='请输入谱名'
          value={searchVal}
          onChange={handleInputChange}
        />
        <AtButton
          type='primary'
          onClick={onSearch}
        >
          <AtIcon value='search' size='12' />
          <Text>搜索</Text>
        </AtButton>
      </View>
    </View>
  )
}

export default Header;
