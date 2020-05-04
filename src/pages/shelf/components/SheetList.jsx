import Taro, { useState } from '@tarojs/taro';
import { useSelector } from "@tarojs/redux";
import { View } from "@tarojs/components";
import SheetCard from './SheetCard';
import './SheetList.css';

const sheetList = [{
  imageUrl: 'src/images/sheet.jpg',
  title: '后来',
  summary: '刘若英的一首歌曲',
  date: '2019/7/8',
  number: '5'
}, {
  imageUrl: '',
  title: '后来',
  summary: '刘若英的一首歌曲',
  date: '2019/7/8',
  number: '5'
}, {
  imageUrl: '../../../images/sheet',
  title: '后来',
  summary: '刘若英的一首歌曲',
  date: '2019/7/8',
  number: '5'
}, {
  imageUrl: '../../../images/sheet',
  title: '后来',
  summary: '刘若英的一首歌曲',
  date: '2019/7/8',
  number: '5'
}, {
  imageUrl: '../../../images/sheet',
  title: '后来',
  summary: '刘若英的一首歌曲',
  date: '2019/7/8',
  number: '5'
}, {
  imageUrl: '../../../images/sheet',
  title: '后来',
  summary: '刘若英的一首歌曲',
  date: '2019/7/8',
  number: '5'
}, {
  imageUrl: '../../../images/sheet',
  title: '后来',
  summary: '刘若英的一首歌曲',
  date: '2019/7/8',
  number: '5'
}];

function SheetList(props) {
  const sheetListData = useSelector(state => state.sheetListData);
  const { editType, editStatus } = sheetListData;

  const onSheetCardClick = (item) => {
    console.log('item', item);
    Taro.navigateTo({
      url: `/pages/sheetView/index?name=${item.title}`
    })
  };

  return(
    <View className='sheet-list'>
      <View className='sheet-list-sub'>
        {sheetList.map((item, index) => (
          <SheetCard
            key={index}
            {...item}
            index={index}
            onSheetCardClick={() => onSheetCardClick(item)}
          />
        ))}
      </View>
    </View>
  )
}

export default SheetList;
