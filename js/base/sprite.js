/**
 * 视图页基础类
 */
export default class Sprite {
    constructor(ctx) {
      
    }
    drawImage(imgSrc = '', width=  0, height = 0, x = 0, y = 0) {
        this.img     = new Image()
        this.img.src = imgSrc

        this.width  = width
        this.height = height

        this.x = x
        this.y = y

        this.visible = true
    }

  /**
   * 将精灵图绘制在canvas上
   */
  drawToCanvas(ctx) {
    if ( !this.visible )
      return

    ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
    /**
     * 设置当前视图页可点击区域
     * @param pool name   命名
     * @param int top    当前视图页距离顶部
     * @param int left   当前视图页距离左侧
     * @param int width  当前点击区域宽
     * @param int height 当前点击区域高
     */
    setArea(name, top, left, width, height) {
        this.clickArea[name] = {
            name: name,
            top: top,
            left: left,
            w: width,
            h: height
        }
    }
    /**
     * 判断手指触摸位置是否处于当前某个点击区域
     */
    checkFingerPosIsArea(name, fposx, fposy) {
        return !!(   fposx >= this.clickArea[name].left
              && fposy >= this.clickArea[name].top
              && fposx <= this.clickArea[name].left + this.clickArea[name].width
              && fposy <= this.clickArea[name].top + this.clickArea[name].height   )
    }

}