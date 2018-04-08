import Background from './runtime/background.js'
import Square from './runtime/square.js'
let ctx = canvas.getContext('2d');
export default class Main {
    // 构造函数
    constructor() {
        this.restart()
    }

    // 开始
    restart() {
        this.bg = new Background(ctx)
        this.square = new Square(ctx)
    }

}