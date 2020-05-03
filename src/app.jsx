import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import Shelf from './pages/shelf/index';
import Community from './pages/community/index';
import User from './pages/User/index';
import configStore from './store';
import Management from './pages/management/index';
import FileOperate from './pages/fileOperate/index';
import SheetEdit from './pages/sheetEdit';
import './app.scss';

const store = configStore();

class App extends Component {

  config = {
    pages: [
      'pages/shelf/index',
      'pages/management/index',
      'pages/fileOperate/index',
      'pages/community/index',
      'pages/user/index',
      'pages/sheetEdit/index'
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
      },{
        pagePath: "pages/management/index",
        text: "管理",
        iconPath: "./images/manage.png",
        selectedIconPath: "./images/manage.png",

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
        <Management />
        <FileOperate />
        <Community />
        <User />
        <SheetEdit />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
