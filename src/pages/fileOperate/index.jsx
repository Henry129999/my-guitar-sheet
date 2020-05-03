import Taro, { useState } from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { AtIcon, AtButton } from 'taro-ui';
import AddFileModal from '../shelf/components/AddFileModal';
import WarnModal from './components/WarnModal';
import './index.css';
import { zIndexUp, zIndexDown, zIndexTop, zIndexBottom } from './utils/arrOperate';

const pageTitle = {
  'file': '簿管理',
  'sheet': '歌曲管理'
};

const selectStyle = {
  color: '#e45649',
  border: '1px solid #e45649'
};

const nameList = [
  '发挥地方就快点恢复健康11',
  '发挥地方就快点恢复健康12',
  '发挥0',
  '发挥1',
  '发挥2',
  '发挥3',
  '发挥4',
  '发挥5',
  '发挥6',
  '发挥7',
  '发挥8',
  '发挥9',
  '发挥10',
  '发挥11',
  '发挥12',
  '发挥13',
  '发挥14',
  '发挥15',
];

function FileOperate() {
  const { type } = this.$router.params;
  Taro.setNavigationBarTitle({
    title: pageTitle[type],
  });
  const [list, setList] = useState(nameList);
  const [selectIdx, setSelectIdx] = useState(-1);
  const [selectFileIndex, setSelectFileIndex] = useState(0);
  const [addFileModalInfo, setAddFileModalInfo] = useState({
    visible: false,
    text: null
  });
  const [warnModalInfo, setWarnModalInfo] = useState({ visible: false, title: '' });

  const onAdd = () => {
    if (type === 'file') {
      setAddFileModalInfo({
        visible: true,
        text: null
      });
    } else {
      // TODO 编辑 sheet
    }
  };

  const onAddFileModalCancel= () => {
    setAddFileModalInfo({
      visible: false,
      text: null
    });
  };

  const onAddFileModalConfirm = () => {
    setAddFileModalInfo({
      visible: false,
      text: null
    });
  };

  const onCancel = () => {
    Taro.switchTab({
      url: '/pages/management/index'
    })
  };

  const onSave = () => {

  };

  const onClickItem = (index) => {
    console.log('点击了', index);
    setSelectIdx(index)
  };

  const onClickDeleteBtn = () => {
    setWarnModalInfo({
      ...warnModalInfo,
      visible: true,
      text: list[selectIdx],
    })
  };

  const onWarmModalCancel = () => {
    setWarnModalInfo({
      ...warnModalInfo,
      visible: false,
    })
  };

  const onWarnModalConfirm = () => {
    list.splice(selectIdx,1);
    setList(list);
    setSelectIdx(-1);
    setWarnModalInfo({
      ...warnModalInfo,
      visible: false,
    })
  };

  const onEdit = (e) => {
    e.stopPropagation();
    if(type === 'file') {
      setAddFileModalInfo({
        visible: true,
        text: list[selectIdx]
      });
    }
  };

  const onMoveToTop = (e) => {
    e.stopPropagation();
    const listTemp = zIndexTop(list, selectIdx);
    if(listTemp) {
      setList(listTemp);
      setSelectIdx(0);
    }
  };

  const onMoveToBottom = (e) => {
    e.stopPropagation();
    const listTemp = zIndexBottom(list, selectIdx, list.length);
    if(listTemp) {
      setList(listTemp);
      setSelectIdx(list.length - 1);
    }
  };

  const onOneStepUp = (e) => {
    e.stopPropagation();
    const listTemp = zIndexUp(list, selectIdx, list.length);
    if(listTemp) {
      setList(listTemp);
      setSelectIdx(selectIdx - 1);
    }
  };

  const onOneStepDown = (e) => {
    e.stopPropagation();
    const listTemp = zIndexDown(list, selectIdx, list.length);
    if(listTemp) {
      setList(listTemp);
      setSelectIdx(selectIdx + 1);
    }
  };

  console.log('selectIdx', selectIdx);
  console.log('list', list);

  return(
    <View className='operate'>
      <View className='header'>
        <View className='summary-title'>所在簿名：</View>
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
      <View className='add-btn'>
        <AtButton
          type='primary'
          size='small'
          onClick={onAdd}
        >
          新增
        </AtButton>
        <View style={{ display: 'flex' }}>
          <AtButton
            type='primary'
            size='small'
            onClick={onCancel}
            customStyle={{
              backgroundColor: '#FFF',
              color: '#6a96e9'
            }}
          >
            取消
          </AtButton>
          <AtButton
            type='primary'
            size='small'
            onClick={onSave}
            customStyle={{
              marginLeft: '1.6vw'
            }}
          >
            保存
          </AtButton>
        </View>
      </View>
      <View className='list'>
        {list.map((item, index) => (
          <View
            key={index}
            className='list-item'
            onClick={() => onClickItem(index)}
            style={{
              borderBottom: index === list.length - 1
                ? ''
                : '1px solid #e6e6e6',
              backgroundColor: index === selectIdx
                ? '#efeff4'
                : '#FFF',
              padding: index === selectIdx
                ? '2.13vw 4.27vw 2.13vw 0'
                : '2.13vw 4.27vw'
            }}
          >
            <View className='list-item-left'>
              {index === selectIdx && <View className='list-item-tag' />}
              <Text className='list-item-title'>{item}</Text>
            </View>

            {index === selectIdx ?
              <View style={{ display: 'flex' }}>
                <View onClick={onEdit}>
                  <AtIcon
                    className='list-item-btn'
                    value='edit'
                    size='20'
                    color='rgb(97, 144, 232)'
                  />
                </View>
                <View onClick={onMoveToTop}>
                  <AtIcon
                    className='list-item-btn'
                    value='arrow-up'
                    size='20'
                    color='rgb(153, 153, 153)'
                  />
                </View>
                <View onClick={onMoveToBottom}>
                  <AtIcon
                    className='list-item-btn'
                    value='arrow-down'
                    size='20'
                    color='rgb(153, 153, 153)'
                  />
                </View>
                <View onClick={onOneStepUp}>
                  <AtIcon
                    className='list-item-btn'
                    value='chevron-up'
                    size='20'
                    color='rgb(97, 144, 232)'
                  />
                </View>
                <View onClick={onOneStepDown}>
                  <AtIcon
                    className='list-item-btn'
                    value='chevron-down'
                    size='20'
                    color='rgb(97, 144, 232)'
                  />
                </View>
                <View onClick={onClickDeleteBtn}>
                  <AtIcon
                    className='list-item-btn'
                    value='close'
                    size='20'
                    color='#ff4949'
                  />
                </View>
              </View>
              :
              <View>
                <AtIcon
                  className='list-item-btn'
                  value='list'
                  size='20'
                  color='rgb(153, 153, 153)'
                />
              </View>
            }
          </View>
        ))}
      </View>

      <AddFileModal
        isShow={addFileModalInfo.visible}
        text={addFileModalInfo.text}
        onModalCancel={onAddFileModalCancel}
        onModalConfirm={onAddFileModalConfirm}
      />

      <WarnModal
        type={type}
        title={warnModalInfo.text}
        isShow={warnModalInfo.visible}
        onModalCancel={onWarmModalCancel}
        onModalConfirm={onWarnModalConfirm}
      />
    </View>
  )
}

export default FileOperate;
