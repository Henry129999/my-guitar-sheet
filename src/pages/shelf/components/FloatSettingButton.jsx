import Taro, { useState } from '@tarojs/taro'
import { useSelector, useDispatch} from "@tarojs/redux";
import { View, Text } from "@tarojs/components";
import { AtFab, AtIcon } from "taro-ui";
import './FloatSettingButton.css';

const buttonConfigList = [{
  text: '添加簿',
  key: 'addFile',
}, {
  text: '添加歌曲',
  key: 'addMusic',
}];

function FloatSettingButton(props) {
  const [isShowSettingList, setIsShowSettingList] = useState(false);
  const onChangeEditStatus = () => {
    setIsShowSettingList(!isShowSettingList);
  };

  const onButtonItemClick = (value) => {
    props.onSettingEditType(value);
    setIsShowSettingList(false);
  };

  return(
    <View className='float-btn'>
      {isShowSettingList && (
        <View className='button-List'>
          {buttonConfigList.map((item, index) => (
            <View
              key={item.key}
              className='button-item'
              style={{ borderBottom: index !== buttonConfigList.length - 1
                  ? '1px solid #e6e6e6'
                  : 'unset'
              }}
              onClick={() => onButtonItemClick(item.key)}
            >
              {item.text}
            </View>
          ))}
        </View>
      )}
      <View className='setting'>
        <View className='blank' />
        <AtFab
          size='normal'
          className='setting-btn'
          onClick={() => onChangeEditStatus(true)}
        >
          <AtIcon
            value='menu'
            size='24'
            color='#FFF'
          />
        </AtFab>
      </View>
    </View>
  )
}

export default FloatSettingButton;
