# pt-grid

miniapp component for taobao

## 安装

```sh
# npm
npm install pt-grid

# yarn
yarn add pt-grid
```

## 示例

<img src="./screenshot.png" alt="screenshot" style="zoom:33%;" />

## 代码片段

##### example.axml

```vue
<pintu
  ref="pintuRef"
  backgroundImage="{{backgroundImage}}"
  width="{{width}}"
  height="{{height}}"
  level="{{level}}"
  onGameOver="onGameOver"
/>
```

##### example.js

```JS
Page({
  data: {
    level:3,
    backgroundImage:"http://p4.music.126.net/qX3ID48PhpAiDIt-VqlNkw==/109951163524169951.jpg",
    width:300,
    height:300
  },
  pintuRef(ref) {
 // 存储自定义组件实例，方便以后调用
    this.pintu = ref;
  },
  onGameOver() {
    let _self =this;
    my.confirm({
      title: '温馨提示',
      content: '游戏结束',
      confirmButtonText: '再来一次',
      cancelButtonText: '太简单了',
      success: (result) => {
        result.confirm && _self.pintu.initGame(_self.data.form.level);
      },
    });
  }

});

```

## 属性

| 名称            | 类型           | 描述                     | 默认值   |
| --------------- | -------------- | :----------------------- | -------- |
| level           | number         | 难度（网格数）           | 3        |
| width           | 宽度           | 宽度                     | 300      |
| height          | string\|number | 高度                     | 300      |
| backgroundImage | string         | 背景图片（最好宽高相等） | “”       |
| onGameOver      | function       | 游戏结束回调             | ()=>void |
