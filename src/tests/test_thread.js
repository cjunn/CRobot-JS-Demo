const TestThread = async () => {
    console.log("==========测试Thread===========");
    Thread.setValue("shard", "shardValue");
    let async = Thread.start(function (p1, p2) {
        console.log("测试子线程01", p1, p2);
        console.log(`当前子线程01 ID: ${Thread.name()}`);
        console.log(`当前子线程01 获得变量: ${Thread.getValue("shard")}`)
    }, 'arg0', 'arg1');
    await wrap(async);
    Thread.start(function (p1, p2) {
        console.log("测试子线程02", p1, p2);
        console.log(`当前子线程02 ID: ${Thread.name()}`)
        console.log(`当前子线程02 获得变量: ${Thread.getValue("shard")}`)
    }, 'arg0', 'arg1').take(5000);
    console.log(`当前主线程ID: ${Thread.name()}`);
    console.log(`测试异步等待开始: ${System.currentTimeMillis()}`);
    await wrap(Thread.delay(500));
    Thread.sleep(500);
    console.log(`测试异步等待结束: ${System.currentTimeMillis()}`);
}

export {
    TestThread
}