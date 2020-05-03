import Taro from '@tarojs/taro';
import {View, Text, Image} from "@tarojs/components";
import Avatar from './components/Avatar';
import './index.css';

const configInfo = [{
  icon: '../../images/manage.png',
  text: '消息中心',
  isShowDetail: false,
  unit: '',
  number: 0,
}, {
  icon: '../../images/manage.png',
  text: '我的歌曲',
  isShowDetail: true,
  unit: '首',
  number: 36,
}, {
  icon: '../../images/manage.png',
  text: '分享',
  isShowDetail: true,
  unit: '首',
  number: 34,
}, {
  icon: '../../images/manage.png',
  text: '点赞',
  isShowDetail: true,
  unit: '首',
  number: 123,
}, {
  icon: '../../images/manage.png',
  text: '收藏',
  isShowDetail: true,
  unit: '首',
  number: 32,
}];

function User() {
  return(
    <View className='user'>
      <Avatar />
      <View className='list'>
        {configInfo.map((item, index) => (
          <View
            className='list-item'
            style={{
              borderBottom: index === configInfo.length - 1 ? '' : '1px solid  #e6e6e6'
            }}
          >
            <Image
              className='list-item-image'
              src={item.icon}
            />
            <Text className='list-item-title'>{item.text}</Text>
            {item.isShowDetail &&
              <View style={{ color: '#949093' }}>
                <Text style={{ marginRight: '2vw' }}>{item.number}</Text>
                <Text>{item.unit}</Text>
              </View>
            }
          </View>
        ))}
      </View>
      <View className='list'>
        <View
          className='list-item'
        >
          <Image
            className='list-item-image'
            src='../../images/manage.png'
          />
          <Text className='list-item-title'>意见反馈</Text>
        </View>
      </View>
      <View style={{ flex: '1' }} />
      <View className='version'>
        <Text>我的吉他谱小程序</Text>
        <Text>版本号 1.12.3</Text>
      </View>
    </View>
  )
}

User.config = {
  navigationBarTitleText: '个人信息',
};

export default User;
