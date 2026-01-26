const drawRect =(list)=>{
    let canvas = Canvas.create();
    canvas.setStyle(1);
    canvas.setStrokeWidth(2);
    canvas.setAntiAlias(true);
    list.forEach(element => {
        canvas.drawRect(element.x1, element.y1, element.x2, element.y2);
    });
    canvas.setTextSize(22);
    canvas.setStrokeWidth(0.5);
    canvas.setStyle(2);
    list.forEach(element => {
        canvas.drawText( element.x1, element.y1-5, `${element.text||""}  ${element.boxScore || element.prob}`);
    });
    canvas.invalidate();
    Thread.sleep(2000);
    canvas.remove();
}

const TestOcrLite = () => {
    let soPath = Attach.getPath(`libs/${App.archite}/libOcrLite.so`);
    let angleBin = Attach.getPath(`ocrlite/angle_op.bin`);
    let angleParam = Attach.getPath(`ocrlite/angle_op.param`);
    let crnnBin = Attach.getPath(`ocrlite/crnn_lite_op.bin`);
    let crnnParam = Attach.getPath(`ocrlite/crnn_lite_op.param`);
    let dbBin = Attach.getPath(`ocrlite/dbnet_op.bin`);
    let dbParam = Attach.getPath(`ocrlite/dbnet_op.param`);
    let keys = Attach.getPath(`ocrlite/keys.txt`);
    OcrLite.init(soPath, angleParam, angleBin, dbParam, dbBin, crnnParam, crnnBin, keys, App.coreNum ,true);
    let bitmap = Display.capture();
    let map = OcrLite.detect(bitmap, 0, 0.6, 0.3, 3.0, true, true);
    drawRect(map.textBlocks);
}

export {
    TestOcrLite
}