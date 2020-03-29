import { createMap, randomArr, isMovable, isGameOver } from './utils/index.js'

let _self;
Component({
  mixins: [],
  data: {
    map: [],
    rightMap: []
  },
  props: {
    level: 3,
    width: 300,
    height: 300,
    bgUrl: 'http://p4.music.126.net/qX3ID48PhpAiDIt-VqlNkw==/109951163524169951.jpg',
    onGameOver() {
      my.confirm({
        title: '温馨提示',
        content: '游戏结束',
        confirmButtonText: '再来一次',
        cancelButtonText: '太简单了',
        success: (result) => {
          result.confirm && _self.initGame()
        },
      });
    }
  },
  didMount() {
    _self = this;
    this.initGame()
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    initGame() {
      const map = createMap(this.props.level);
      this.setData({
        rightMap: map,
        map: randomArr(map),
      })
      console.log(map)
    },
    handleItemTap(e) {
      const { idx } = e.target.dataset;
      const { map } = this.data;
      const lastIdx = map.length - 1;
      if (!isMovable(map[idx], map[lastIdx])) {
        return;
      }

      this.setData({
        [`map[${idx}]`]: map[lastIdx],
        [`map[${lastIdx}]`]: map[idx],
      }, () => {
        const { map, rightMap } = this.data;
        isGameOver(map, rightMap) && this.props.onGameOver();
      })

    }
  },
});
