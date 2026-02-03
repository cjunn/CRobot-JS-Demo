const TestUI = () => {
    console.log("==========测试UI获取===========");
    let key = "";
    let val;
    key = "primaryServerIp";
    val = UI.setValue(key,"ccc");
    val = UI.getValue(key);
    console.log(`${key}: ${val}`);
    key = "enablePrimaryServer";
    val = UI.getValue(key);
    console.log(`${key}: ${val}`);
    key = "secondaryServerIp";
    val = UI.getValue(key);
    console.log(`${key}: ${val}`);
}
export {
    TestUI
}