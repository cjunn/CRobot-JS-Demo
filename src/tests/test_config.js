const TestConfig = () => {
    console.log("==========测试配置存取===========");
    let config = getConfig("mytest");
    let key = "aaa";
    let val;
    val = config.getValue(key);
    console.log(`${key}: ${val}`);
    config.setValue(key, "bbb");
    val = config.getValue(key);
    console.log(`${key}: ${val}`);
    config.setValue(key, 3.1415926);
    val = config.getValue(key);
    console.log(`${key}: ${val}`);
}


export {
    TestConfig
}