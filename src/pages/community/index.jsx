import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import './index.css';

function Community() {
  return(
    <View className='community'>
      <Text>暂未开放，敬请期待！～</Text>
    </View>
  )
}

Community.config = {
  navigationBarTitleText: '云社区',
};

export default Community;
