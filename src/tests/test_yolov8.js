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
const TestYoloV8DetCoco = ()=>{
    Gallery.showByPath(Attach.getPath("123.png"));
    Thread.sleep(1000);
    let labels = ["person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat", "traffic light",
    "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow",
    "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
    "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard",
    "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
    "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
    "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote", "keyboard", "cell phone",
    "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear",
    "hair drier", "toothbrush"];
    let soPath = Attach.getPath(`libs/${App.archite}/libYoloV8.so`);
    let detCocoBin = Attach.getPath(`yolov8/yolov8m.ncnn.bin`);
    let detCocoParam = Attach.getPath(`yolov8/yolov8m.ncnn.param`);
    YoloV8DetCoco.init(soPath,detCocoParam,detCocoBin,320,true);
    let bitmap = Display.capture();
    let list = YoloV8DetCoco.detect(bitmap);
    list.forEach(element => {
        element.text = labels[element.label];
    });
    drawRect(list);
    Gallery.close();
}

export {
    TestYoloV8DetCoco
}