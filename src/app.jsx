import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Shelf from './pages/shelf/index'
import Community from './pages/community/index.css'
import User from './pages/User/index'
import configStore from './store'
import './app.scss'

const store = configStore();

class App extends Component {

  config = {
    pages: [
      'pages/shelf/index',
      'pages/community/index',
      'pages/user/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      list: [{
        pagePath: "pages/shelf/index",
        text: "谱库",
        iconPath: "./images/music.png",
        selectedIconPath: "./images/music.png",
      }, {
        pagePath: "pages/community/index",
        text: "云社区",
        iconPath: "./images/cloud-link.png",
        selectedIconPath: "./images/cloud-link.png",
      }, {
        pagePath: "pages/user/index",
        text: "我的",
        iconPath: "./images/user.png",
        selectedIconPath: "./images/user.png",
      }],
    }
  };

  render () {
    return (
      <Provider store={store}>
        <Shelf />
        <Community />
        <User />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
