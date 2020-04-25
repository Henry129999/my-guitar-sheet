import Taro, { useState } from '@tarojs/taro';
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

function SheetList() {
  return(
    <View className='sheet-list'>
      <View className='sheet-list-sub'>
        {sheetList.map((item, index) => (
          <SheetCard key={index} {...item} />
        ))}
      </View>
    </View>
  )
}

export default SheetList;
