import Taro from '@tarojs/taro'
import { View, Image, Text } from "@tarojs/components";
import './SheetCard.css';

function SheetCard(props) {
  const {
    imageUrl, title, summary, number, date, onSheetCardClick
  } = props;
  return(
    <View className='sheet-card' onClick={onSheetCardClick}>
      <Image
        className='sheet-card-image'
        src='../../../images/sheet.jpg'
      />
      <View className='sheet-card-detail'>
        <Text className='s-c-d-title'>《{title}》</Text>
        <Text className='s-c-d-summary'>{summary}</Text>
        <View className='s-c-d-other'>
          <Text className='s-c-d-o-number'>{number} 张</Text>
          <Text>{date}</Text>
        </View>
      </View>
    </View>
  )
}

export default SheetCard;
