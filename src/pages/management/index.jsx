import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import './index.css';

function Manage() {
  return(
    <View>
      <Text>暂未开放，敬请期待！～</Text>
    </View>
  )
}

Manage.config = {
  navigationBarTitleText: '曲薄管理',
};

export default Manage;
