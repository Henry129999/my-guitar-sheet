import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import './index.css';

function User() {
  return(
    <View>
      <Text>个人信息</Text>
    </View>
  )
}

User.config = {
  navigationBarTitleText: '个人信息',
};

export default User;
