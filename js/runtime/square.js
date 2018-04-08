import Sprite from '../base/sprite.js'
const __ = {
  speed: Symbol('square')
}
/**
 * 方块工厂类
 * squareFactory
 */
export default class Square extends Sprite {
    constructor(ctx) {
        super();
    }

    init() {
        return [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ];
    }

    /**
     * 更新每一帧方块位置
     * @return {[type]} [description]
     */
    update() {
        this.y += this[__.speed];
    }
}