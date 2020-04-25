import Taro, { } from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { AtIcon } from 'taro-ui';
import './FootBar.css';

const itemList = [
  {
    text: '谱库',
    icon: 'folder',
    route: '/pages/shelf/shelf',
  }, {
    text: '社区',
    icon: 'home',
    route: '/pages/community/shelf',
  }, {
    text: '我的',
    icon: 'user',
    route: '/pages/user/shelf',
  }
];

function FootBar() {

  const onLinkTo = (route) => {
    console.log('route', route);
    Taro.navigateTo({
      url: route
    })
  };

  return (
    <View className='footBar'>
      {itemList.map(item => (
        <View
          onClick={() => onLinkTo(item.route)}
          key={item.text}
          className='footItem'
        >
          <AtIcon value={item.icon} size='30' color='#797979' />
          <Text>{item.text}</Text>
        </View>
      ))}
    </View>
  )
}

export default FootBar;
