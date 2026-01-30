type ConfigValue = number | string | boolean | null;
interface Bitmap {
  rect: (sx1: number, sy1: number, sx2: number, sy2: number) => Bitmap;
  rotation: (degree: number) => Bitmap;
  scale: (scale: number) => Bitmap;
  toBytes: () => ArrayBuffer;
  toBase64: () => string;
}
interface Canvas {
  setStyle: (style: number) => void;
  setStrokeWidth: (width: number) => void;
  setAntiAlias: (antiAlias: boolean) => void;
  drawRect: (x: number, y: number, width: number, height: number) => void;
  setTextSize: (size: number) => void;
  drawText: (x: number, y: number, text: string) => void;
  invalidate: () => void;
  remove: () => void;
}

interface Cursor {
  getCount: () => number;
  getPosition: () => number;
  move: (offset: number) => boolean;
  moveToPosition: (position: number) => boolean;
  moveToFirst: () => boolean;
  moveToLast: () => boolean;
  moveToNext: () => boolean;
  moveToPrevious: () => boolean;
  isFirst: () => boolean;
  isLast: () => boolean;
  isBeforeFirst: () => boolean;
  isAfterLast: () => boolean;
  getColumnIndex: (columnName: string) => number;
  getColumnName: (index: number) => string;
  getColumnNames: () => string[];
  getColumnCount: () => number;
  getBlob: (columnIndex: number) => ArrayBuffer;
  getString: (columnIndex: number) => string;
  getShort: (columnIndex: number) => number;
  getInt: (columnIndex: number) => number;
  getLong: (columnIndex: number) => number;
  getFloat: (columnIndex: number) => number;
  getDouble: (columnIndex: number) => number;
  getType: (columnIndex: number) => number;
  isNull: (columnIndex: number) => boolean;
  close: () => void;
}

interface SQLite {
  getVersion: () => number;
  beginTransaction: () => void;
  endTransaction: () => void;
  execSQL: (sql: string, ...arg: any) => void;
  query: (sql: string, ...arg: any) => Cursor;
  queryList: (sql: string, ...arg: any) => any[];
  update: (sql: string, ...arg: any) => number;
  insert: (sql: string, ...arg: any) => number;
  close: () => void;
}


declare global {
  function openSQLite(path: string): SQLite;
  function getConfig(module: string): {
    getValue: (key: string) => ConfigValue;
    setValue: (key: string, value: ConfigValue) => void;
  };
  const UI: {
    getValue: (key: string) => ConfigValue;
    setValue: (key: string, value: ConfigValue) => void;
  }
  const Attach: {
    getPath: (child: string) => string;
  }
  const App: {
    appVer: string;
    coreVer: string;
    archite: string;
    coreNum: number;
    currentPackage: () => string;
  }
  const OcrLite: {
    init: (soPath: string, angleParam: string, angleBin: string, dbParam: string, dbBin: string, crnnParam: string, crnnBin: string, keys: string, coreNum: number, useGPU: boolean) => void;
    detect: (bitmap: Bitmap, padding: number, boxScoreThresh: number, boxThresh: number, unClipRatio: number, doAngle: boolean, mostAngle: boolean) => any;
  }
  const Display: {
    capture: () => Bitmap;
  }
  const Canvas: {
    create: () => Canvas;
  }
  const Thread: {
    sleep: (ms: number) => void;
  }
  const Gallery: {
    showByPath: (path: string) => void;
    close: () => void;
  }

  const YoloV8DetCoco: {
    init: (soPath: string, param: string, bin: string, coreNum: number, useGPU: boolean) => void;
    detect: (bitmap: Bitmap) => any[];
  }

  const SQLite: {

  }
  const Findscr: {
    findMultiColor: (x1: number, y1: number, x2: number, y2: number, color: string, feature: string, dir: number, sim: number) => [number, number] | null;
    findComplexMultiColor: (x1: number, y1: number, x2: number, y2: number, color: string, feature: string, exFeature: string, dir: number, sim: number, tolerance: number) => [number, number] | null;
  }

  const Input: {
    tap: (x: number, y: number, time: number) => void;
  }

}

export { };