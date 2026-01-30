import { seeMul, tapMul } from "./libs/DPoint";
import { TestApp } from "./tests/test_app";
import { TestConfig } from "./tests/test_config";
import { TestOcrLite } from "./tests/test_ocrlite";
import { TestSQLite } from "./tests/test_sqlite";
import { TestUI } from "./tests/test_ui";
import { TestYoloV8DetCoco } from "./tests/test_yolov8";

export default {
    main: async () => {
        // TestConfig();
        // TestUI();
        // TestApp();
        // TestOcrLite();
        // TestYoloV8DetCoco();
        // TestSQLite();
        let tmp = tapMul("系统配置");
        console.log(tmp);
    }
};    