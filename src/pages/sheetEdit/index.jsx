import Taro, {useState} from '@tarojs/taro';
import {View, Text, Button} from "@tarojs/components";
import {AtInput, AtTextarea, AtImagePicker} from 'taro-ui';
import './index.css';

const editTypeConfig = {
  'addNew': '添加歌曲',
  'edit': '编辑'
};

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

const selectStyle = {
  color: '#e45649',
  border: '1px solid #e45649'
};

function SheetEdit() {
  const editType = this.$router.params.type || 'addNew';
  Taro.setNavigationBarTitle({
    title: editTypeConfig[editType]
  });
  const [selectFileIndex, setSelectFileIndex] = useState(0);
  const [imageFiles, setImageFiles] = useState([{
    url: 'https://jimczj.gitee.io/lazyrepay/aragaki1.jpeg',
  },
    {
      url: 'https://jimczj.gitee.io/lazyrepay/aragaki2.jpeg',
    },
    {
      url: 'https://jimczj.gitee.io/lazyrepay/aragaki3.png',
    }]);

  const onChangeName = (value) => {

  };

  const onChangeSummary = (value) => {

  };

  const onChangeImageFiles = (files) => {
    setImageFiles(files);
  };

  const onCancelEdit = () => {

  };

  const onConfirmEdit = () => {

  };

  return (
    <View className='sheet-edit'>
      <View className='header'>
        <View>曲薄：</View>
        <View className='select'>
          {nameList.map((item, index) => (
            <View
              key={item}
              className='select-item'
              style={
                selectFileIndex === index
                  ? {...selectStyle}
                  : null
              }
              onClick={() => setSelectFileIndex(index)}
            >
              {item}
            </View>
          ))}
        </View>
      </View>
      <View className='form'>
        <AtInput
          name='value'
          title='歌曲名：'
          type='text'
          placeholder='请输入'
          border={false}
          value={this.state.value}
          onChange={onChangeName}
        />
        <View className='summary'>
          <Text>简介：</Text>
          <View style={{flex: '1'}}>
            <AtTextarea
              value={this.state.value}
              onChange={onChangeSummary}
              maxLength={200}
              placeholder='请输入'
            />
          </View>
        </View>
        <View className='summary'>
          <Text>图片：</Text>
          <View style={{flex: '1'}} className='image-box'>
            <AtImagePicker
              files={imageFiles}
              onChange={onChangeImageFiles}
            />
          </View>
        </View>
      </View>
      <View className='bottom-btn'>
        <Button
          onClick={onCancelEdit}
          className='btn-style'
        >取消</Button>
        <Button onClick={onConfirmEdit}>确定</Button>
      </View>
    </View>
  )
}

export default SheetEdit;
