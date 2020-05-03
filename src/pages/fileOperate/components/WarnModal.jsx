import Taro from '@tarojs/taro';
import {
  AtModal, AtModalHeader, AtModalContent, AtModalAction,
} from 'taro-ui';
import { View, Button } from "@tarojs/components";

function WarnModal(props) {
  const {
    isShow, onModalCancel, onModalConfirm, title, type
  } = props;


  return(
    <AtModal isOpened={isShow}>
      <AtModalHeader>删除{type === 'file' ? '簿' : '歌曲'}</AtModalHeader>
      <AtModalContent>
        <View style={{ margin: '1.2vw 2.3vw', fontSize: '4.6vw' }}>
          你确定要删除 {title} 吗？
        </View>
      </AtModalContent>
      <AtModalAction>
        <Button onClick={onModalCancel}>取消</Button>
        <Button onClick={onModalConfirm}>确定</Button>
      </AtModalAction>
    </AtModal>
  )
}

export default WarnModal;
