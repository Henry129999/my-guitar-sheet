import Taro, { useState } from '@tarojs/taro';
import { useSelector } from '@tarojs/redux'
import { View, Text, Button } from "@tarojs/components";
import {
  AtModal, AtModalHeader, AtModalContent, AtModalAction
} from "taro-ui";
import Header from './components/Header';
import Directory from './components/Directory';
import SheetList from './components/SheetList';
import FloatSettingButton from './components/FloatSettingButton';
import AddFileModal from "./components/AddFileModal";
import './index.scss';

function Shelf() {
  const [isAddFileModalShow, setIsAddFileModalShow] = useState(false);
  const onSettingEditType = (type) => {
    console.log('type', type)
    switch (type) {
      case 'addFile':
        setIsAddFileModalShow(true);
        break;
      case 'addMusic':
        Taro.navigateTo({
          url: '/pages/sheetEdit/index?type=addNew'
        });
        break;
      default: break;
    }
  };

  const onModalCancel = () => {
    setIsAddFileModalShow(false);
  };

  const onModalConfirm = () => {

  };

  return (
    <View className='container'>
      <Header />
      <View className='content' style='height: calc(100% - 12.3vw)'>
        <Directory />
        <SheetList />
        <FloatSettingButton
          onSettingEditType={onSettingEditType}
        />
      </View>
      <AddFileModal
        isShow={isAddFileModalShow}
        onModalCancel={onModalCancel}
        onModalConfirm={onModalConfirm}
      />
    </View>
  )
}

Shelf.config = {
  navigationBarTitleText: '我的谱库',
};

export default Shelf;
