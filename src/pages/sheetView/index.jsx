import Taro, { useState, useEffect } from '@tarojs/taro';
import {
  View, Button, Image, Swiper, SwiperItem,
} from "@tarojs/components";
import { AtFab, AtIcon, AtDrawer } from "taro-ui";
import './index.css';

const sheetDetail = {
  imageArr: [
    'https://img.jitatang.com/wp-content/uploads/2020/03/2020030506134950.jpeg',
    'https://img.jitatang.com/wp-content/uploads/2019/03/2019030612522731.jpg',
    'https://img.jitatang.com/wp-content/uploads/2019/03/2019030612522731.jpg',
    'https://img.jitatang.com/wp-content/uploads/2019/03/2019030612522731.jpg',
    'https://img.jitatang.com/wp-content/uploads/2019/03/2019030612522731.jpg'
  ],
  title: '后来',
  summary: '刘若英的一首歌曲好看的哈大声疾呼将大煞风景哈大家发挥将卡还是短发',
  date: '2019/7/8',
  number: '5'
};

function SheetView() {
  const { id, name } = this.$router.params;
  Taro.setNavigationBarTitle({
    title: `《${name}》`
  });
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const { imageArr = [] } = sheetDetail;

  const onSelectCurrentImage = (value) => {
    console.log('value', value);
    setCurrentIdx(value.detail.current);
  };

  const onFullScreenView = () => {
    Taro.previewImage({
      urls: imageArr,
      current: imageArr[currentIdx],
    })
  };

  console.log('imageArr', imageArr);

  return(
    <View className='view'>
      <View className='image-box'>
        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular={false}
          indicatorDots
          onChange={onSelectCurrentImage}
        >
          {imageArr.map((item, index) => (
            <SwiperItem
              key={index}
              className='swiper-item'
              onClick={onFullScreenView}
            >
              <Image
                src={item}
                className='image'
                mode='widthFix'
              />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
      <AtFab
        size='normal'
        className='setting-btn'
        onClick={() => setDrawerVisible(true)}
      >
        <AtIcon
          value='menu'
          size='24'
          color='#FFF'
        />
      </AtFab>
      <AtDrawer
        show={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        mask
      >
        <View className='drawer'>
          <View className='drawer-item'>
            <View className='drawer-item-title'>
              简介
            </View>
            <View className='drawer-item-text'>
              {sheetDetail.summary}
            </View>
          </View>
          <View className='drawer-item'>
            <View className='drawer-item-title'>
              创建日期
            </View>
            <View className='drawer-item-text'>
              {sheetDetail.date}
            </View>
          </View>
        </View>
      </AtDrawer>
    </View>
  )
}

export default SheetView;
