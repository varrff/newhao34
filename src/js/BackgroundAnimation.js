/**
 * 传入开始和结束的位置，通过getScrollFraction获取其滚动的进度,
 * 缺省分别是0和200
 **/
export default class ScrollProgress {
  constructor(startHeight, endHeight) {
    this.startHeight = startHeight* window.innerHeight / 100 || 0; // 开始的滚动位置
    this.endHeight = endHeight* window.innerHeight / 100 || 200 * window.innerHeight / 100; // 结束的滚动位置
    this.scrollFraction = 0; // 滚动比例

    this.scroll(); // 监听滚动事件
  }

  // 监听滚动事件
  scroll() {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      // 检查滚动位置是否在指定范围内
      if (scrollTop >= this.startHeight && scrollTop <= this.endHeight) {
        const maxScrollTop = this.endHeight - this.startHeight;
        this.scrollFraction = (scrollTop - this.startHeight) / maxScrollTop;
      }
    });
  }

  // 获取滚动进度的方法
  getScrollFraction() {
    return this.scrollFraction;
  }
}
