import Taro, { useState } from '@tarojs/taro'
import { View, Text } from "@tarojs/components";
import './Directory.css';

const nameList = [
  '发挥地方就快点恢复健康',
  '发挥地方就快点恢复健康',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
  '发挥',
];

function Directory() {
  const [selectIdx, setSelectIdx] = useState(0);
  const onSelectDir = (index) => {
    setSelectIdx(index)
  };

  return(
    <View className='directory'>
      <View>
        {nameList.map((item, index) => (
          <View
            className={`dir-item ${index === selectIdx ? 'dir-select' : '' }`}
            key={index}
            onClick={() => onSelectDir(index)}
          >
            {index === selectIdx && (
              <View className='dir-bar' />
            )}
            <Text className='dir-text'>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Directory;
