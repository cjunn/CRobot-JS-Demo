const TestApp = () => {
    console.log("==========测试APP===========");
    console.log(`appVer: ${App.appVer}`);
    console.log(`coreVer: ${App.coreVer}`);
    console.log(`currentPackage: ${App.currentPackage()}`);
}

export {
    TestApp
}