import Taro, { useState, useEffect } from '@tarojs/taro';
import {
  AtInput , AtModal, AtModalHeader, AtModalContent, AtModalAction,
  AtToast
} from 'taro-ui';
import { View, Button } from "@tarojs/components";


function AddFileModal(props) {
  const { isShow } = props;
  const [inputValue, setInputValue] = useState('');
  const [tipInfo, setTipInfo] = useState({
    isShow: false,
    text: '曲薄名不能为空'
  });

  const onChangeInputValue = (value) => {
    setInputValue(value)
  };

  const onModalConfirm = () => {
    if (inputValue) {
      props.onModalConfirm()
    } else {
      setTipInfo({
        ...tipInfo,
        isShow: true
      })
    }
  };

  useEffect(() => {
    if(tipInfo.isShow === true) {
      setTimeout(() => {
        setTipInfo({
          ...tipInfo,
          isShow: false
        })
      } ,1000)
    }
  }, [tipInfo.isShow]);

  return(
    <View>
      <AtModal isOpened={isShow}>
        <AtModalHeader>添加簿</AtModalHeader>
        <AtModalContent>
          <AtInput
            name='value'
            title='曲薄名'
            type='text'
            required
            border={false}
            placeholder='请输入'
            value={inputValue}
            onChange={onChangeInputValue}
          />
        </AtModalContent>
        <AtModalAction>
          <Button onClick={props.onModalCancel}>取消</Button>
          <Button onClick={onModalConfirm}>确定</Button>
        </AtModalAction>
      </AtModal>
      <AtToast duration={1000} isOpened={tipInfo.isShow} text={tipInfo.text} />
    </View>
  )
}

export default AddFileModal;
