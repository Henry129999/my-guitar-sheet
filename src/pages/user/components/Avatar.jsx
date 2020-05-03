import Taro from '@tarojs/taro';
import { View, Text, Image } from "@tarojs/components";
import './Avatar.css';

function Avatar() {
  return(
    <View className='avatar'>
      <View className='image-box'>
        <Image
          className='avatar-image'
          src='../../../images/avatar.jpeg'
        />
      </View>
      <Text className='avatar-name'>黄浩</Text>
    </View>
  )
}

export default Avatar;
