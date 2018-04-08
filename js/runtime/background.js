import Sprite from '../base/sprite.js'

const screenWidth  = window.innerWidth;
const screenHeight = window.innerHeight;

const BG_FILL_COLOR = '#e1e2e8';
const BG_IMG_SRC   = 'images/bg.jpg';
const BG_WIDTH     = 512;
const BG_HEIGHT    = 512;

const DEFAULT_CELL_COLOR = '#fff';
const CELL_LENTH =15;
const CELL_ROWS = 30;
const CELL_COLS = 10;
const CELL_BORDER = 1;

const MAIN_LEFT = 10;
const MAIN_TOP = 10;

const NEXT_LEFT = screenWidth - 100;
const NEXT_TOP = 150;
const NEXT_ROWS = 4;
const NEXT_COLS = 4;

const PREVIEW_COLOR = '#a1a1a1';
const FINISH_COLOR = '#000';

const NULL_STATUS = 0;
const LIVE_STATUS = 1;
const PREVIEW_STATUS = 2;
const FINISH_STATUS = 10;

const DEFAULT_CELL_LAYOUT = [
    [0,0,0,0,10,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];

const NEXT_CELL = [
    [0,10,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,10,0]
];
/**
 * 背景类
 */
export default class Background extends Sprite {
    constructor(ctx) {
        super();
        this.renderBack(ctx, 0, 0, screenWidth, screenHeight);
        this.render(ctx);
    }

    render(ctx) {
        // 底图渲染
        this.renderScore(ctx);
        this.renderCell(ctx);
        this.renderNextArea(ctx);
    }
    /**
     * 渲染底图
     * @param  {[type]} ctx    [description]
     * @param  {[type]} x   [description]
     * @param  {[type]} y    [description]
     * @param  {[type]} width  [description]
     * @param  {[type]} height [description]
     * @return {[type]}        [description]
     */
    renderBack(ctx, x, y, width, height) {
        ctx.fillstyle = BG_FILL_COLOR;
        ctx.fillRect(
            x,
            y,
            width,
            height
        );
    }

    /**
     * 生成格子
     * @return {[type]} [description]
     */
    renderCell(ctx) {
        for (let i = 0; i < CELL_ROWS; i++) {
            for (let j = 0; j < CELL_COLS; j++ ) {
                ctx.fillStyle = this.getCellColor(DEFAULT_CELL_LAYOUT[i][j]);
                ctx.fillRect(
                    MAIN_LEFT + j * CELL_LENTH + CELL_BORDER,
                    MAIN_TOP + i * CELL_LENTH + CELL_BORDER,
                    CELL_LENTH - CELL_BORDER,
                    CELL_LENTH - CELL_BORDER
                )
            }
        }
    }
    /**
     * 渲染分数
     * @return {[type]} [description]
     */
    renderScore(ctx){
        ctx.fillStyle = '#555';
        ctx.fillText(
            '分数：',
            screenWidth - 50,
            50
        );
    }
    /**
     * 绘制下一个区域
     * @param  {[type]} ctx [description]
     * @return {[type]}     [description]
     */
    renderNextArea(ctx) {
        for (let i = 0; i < NEXT_ROWS; i++) {
            for (let j = 0; j < NEXT_COLS; j++) {
                ctx.fillStyle = this.getCellColor(NEXT_CELL[i][j])
                ctx.fillRect(
                    NEXT_LEFT + j * CELL_LENTH + CELL_BORDER,
                    NEXT_TOP + i * CELL_LENTH + CELL_BORDER,
                    CELL_LENTH - CELL_BORDER,
                    CELL_LENTH - CELL_BORDER
                )
            }
        }
    }
    /**
     * 根据格子状态，设置对应的颜色
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    getCellColor(value){
        let color = DEFAULT_CELL_COLOR;
        switch (value) {
            case NULL_STATUS:
                color = DEFAULT_CELL_COLOR;
                break;
            case PREVIEW_STATUS:
                color = PREVIEW_COLOR;
                break;
            case LIVE_STATUS:
            case FINISH_STATUS:
                color = FINISH_COLOR;
                break;
            default:
                color = DEFAULT_CELL_COLOR;
        }
        return color;
    }
}