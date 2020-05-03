import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { AtIcon } from 'taro-ui';
import './index.css';

function Manage() {
  Taro.setNavigationBarTitle({
    title: '曲薄管理'
  });

  const onLinkToOperatePage = (type) => {
    Taro.navigateTo({
      url: `/pages/fileOperate/index?type=${type}`
    })
  };

  return(
    <View className='manage'>
      <View
        className='manage-bar'
        style={{
          backgroundColor: '#1386ff'
        }}
        onClick={() => onLinkToOperatePage('file')}
      >
        <Text className='manage-text'>管理簿</Text>
        <AtIcon value='chevron-right' size='30' color='#FFF' />
      </View>
      <View
        className='manage-bar'
        style={{
          backgroundColor: '#13c5ff',
          marginBottom: '20vw'
        }}
        onClick={() => onLinkToOperatePage('sheet')}
      >
        <Text className='manage-text'>管理歌曲</Text>
        <AtIcon value='chevron-right' size='30' color='#FFF' />
      </View>
    </View>
  )
}

export default Manage;
