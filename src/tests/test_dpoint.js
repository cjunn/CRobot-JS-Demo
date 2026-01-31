import { seeMul, tapFix, tapMul, tapSwi } from "../libs/DPoint"



const TestDPoint = () => {
    console.log("==========测试DPoint===========");
    Thread.sleep(500);
    let val;
    val = seeMul("系统配置");
    console.log(`see 系统配置:${val}`);
    val = tapMul("系统配置");
    console.log(`tap 系统配置:${val}`);
    Thread.sleep(300);
    tapFix("固定点");
    Thread.sleep(300);
    tapSwi("滑动点");
    Thread.sleep(300);
}
export {
    TestDPoint
}