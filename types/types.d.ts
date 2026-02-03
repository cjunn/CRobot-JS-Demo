type ConfigValue = number | string | boolean | null;
interface Bitmap {
  rect: (sx1: number, sy1: number, sx2: number, sy2: number) => Bitmap;
  rotation: (degree: number) => Bitmap;
  scale: (scale: number) => Bitmap;
  toBytes: () => ArrayBuffer;
  toBase64: () => string;
}
interface Canvas {
  // Paint 设置相关
  setStyle: (style: number) => void;
  setStrokeWidth: (width: number) => void;
  setAntiAlias: (antiAlias: boolean) => void;
  setTextSize: (size: number) => void;
  setColor: (color: number) => void;

  // 绘制颜色相关
  drawRGB: (r: number, g: number, b: number) => void;
  drawARGB: (a: number, r: number, g: number, b: number) => void;
  drawColor: (color: number) => void;
  drawColorWithMode: (color: number, mode: number) => void;
  drawPaint: () => void;

  // 绘制几何基础
  drawPoint: (x: number, y: number) => void;
  drawPoints: (pts: number[]) => void;
  drawLine: (startX: number, startY: number, stopX: number, stopY: number) => void;
  drawLines: (pts: number[]) => void;

  // 绘制矩形相关
  drawRect: (left: number, top: number, right: number, bottom: number) => void;
  drawRotateRect: (centerX: number, centerY: number, width: number, height: number, degree: number) => void;
  drawRoundRect: (left: number, top: number, right: number, bottom: number, rx: number, ry: number) => void;

  // 绘制椭圆/圆形/圆弧
  drawOval: (left: number, top: number, right: number, bottom: number) => void;
  drawCircle: (cx: number, cy: number, radius: number) => void;
  drawArc: (left: number, top: number, right: number, bottom: number, startAngle: number, sweepAngle: number, useCenter: boolean) => void;

  // 绘制路径/文字/图片
  drawPath: (path: any) => void; // 对应Java的Path对象，TS侧暂标any，可根据实际封装定义类型
  drawText: (x: number, y: number, text: string) => void;
  drawBitmap: (bitmap: any, left: number, top: number) => void; // 对应Java的Bitmap对象，TS侧暂标any

  // 画布矩阵变换
  translate: (dx: number, dy: number) => void;
  scale: (sx: number, sy: number) => void;
  scaleWithPivot: (sx: number, sy: number, px: number, py: number) => void;
  rotate: (degrees: number) => void;
  rotateWithPivot: (degrees: number, px: number, py: number) => void;
  skew: (sx: number, sy: number) => void;

  // 画布基础信息
  getWidth: () => number;
  getHeight: () => number;

  // 画布生命周期/刷新
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
interface Async {
  take: (timeout: number) => unknown;
  isDone: () => boolean;
  cancel: () => boolean;
}
interface FileOperation {
  getPath: (child: string) => string;
  read: (child: string) => ArrayBuffer;
  exits: (child: string) => boolean;
  write: (child: string, data: ArrayBuffer) => void;
  readText: (child: string) => string;
  writeText: (child: string, text: string) => void;
}
interface App {
  appVer: string;
  coreVer: string;
  archite: string;
  coreNum: number;
  currentPackage: () => string;
  launch: (packageName: string) => boolean;
  uninstall: (packageName: string) => void;
  viewFile: (filePath: string) => boolean;
  editFile: (filePath: string) => boolean;
  openUrl: (url: string) => boolean;
  getInstalledApps: () => string[];
}
interface ConfigOperation {
  getValue: (key: string) => ConfigValue;
  setValue: (key: string, value: ConfigValue) => void;
}
interface OcrLite {
  init: (soPath: string, angleParam: string, angleBin: string, dbParam: string, dbBin: string, crnnParam: string, crnnBin: string, keys: string, coreNum: number, useGPU: boolean) => void;
  detect: (bitmap: Bitmap, padding: number, boxScoreThresh: number, boxThresh: number, unClipRatio: number, doAngle: boolean, mostAngle: boolean) => any;
}
interface Thread {
  start(func: () => void, ...arg: any[]): Async;
  getValue: (key: string) => ConfigValue;
  name: () => string;
  setValue: (key: string, value: ConfigValue) => void;
  sleep: (ms: number) => void;
  delay: (ms: number) => Async;
}
interface Display {
  capture: () => Bitmap;
  updateIfNeed: () => void;
  keepCapture: () => void;
  releaseCapture: () => void;
}
interface Gallery {
  showByPath: (path: string) => void;
  close: () => void;
}
interface YoloV8DetCoco {
  init: (soPath: string, param: string, bin: string, coreNum: number, useGPU: boolean) => void;
  detect: (bitmap: Bitmap) => any[];
}
interface Findscr {
  findMultiColor: (x1: number, y1: number, x2: number, y2: number, color: string, feature: string, dir: number, sim: number) => [number, number] | null;
  findComplexMultiColor: (x1: number, y1: number, x2: number, y2: number, color: string, feature: string, exFeature: string, dir: number, sim: number, tolerance: number) => [number, number] | null;
}
interface Input {
  tap: (x: number, y: number, time: number) => void;
  swipe: (x1: number, y1: number, x2: number, y2: number, time: number) => void;
}
interface System {
  currentTimeMillis: () => number;
  nanoTime: () => number;
}
interface Base64 {
  encode: (data: ArrayBuffer) => string;
  decode: (data: string) => ArrayBuffer;
}

interface FileSystem {

}

interface Digest {
  // MD5 摘要，返回十六进制字符串，失败返回null
  md5: (data: ArrayBuffer) => string | null;
  // SHA-1 摘要，返回十六进制字符串，失败返回null
  sha1: (data: ArrayBuffer) => string | null;
  // SHA-256 摘要，返回十六进制字符串，失败返回null
  sha256: (data: ArrayBuffer) => string | null;
  // SHA-512 摘要，返回十六进制字符串，失败返回null
  sha512: (data: ArrayBuffer) => string | null;
  // AES-CBC加密，失败返回null
  aesEncrypt: (data: ArrayBuffer, key: ArrayBuffer, iv: ArrayBuffer) => ArrayBuffer | null;
  // AES-CBC解密，失败返回null
  aesDecrypt: (encryptedData: ArrayBuffer, key: ArrayBuffer, iv: ArrayBuffer) => ArrayBuffer | null;
  // AES-ECB加密，无IV，失败返回null
  aesEncryptECB: (data: ArrayBuffer, key: ArrayBuffer) => ArrayBuffer | null;
  // AES-ECB解密，无IV，失败返回null
  aesDecryptECB: (encryptedData: ArrayBuffer, key: ArrayBuffer) => ArrayBuffer | null;
  // 生成AES随机密钥（keySize：128/192/256），失败返回null
  generateKey: (keySize: number) => ArrayBuffer | null;
  // 生成16字节AES随机IV，无异常必返回
  generateIV: () => ArrayBuffer;
  // PBKDF2从密码派生密钥，失败返回null
  deriveKey: (password: string, salt: ArrayBuffer, keyLength: number, iterations: number) => ArrayBuffer | null;
}

interface Device {
  buildId: string;
  board: string;
  brand: string;
  device: string;
  model: string;
  product: string;
  hardWard: string;
  getWidth: () => number;
  getHeight: () => number;
}


interface HttpCall {
  code: () => number;
  bytes: () => ArrayBuffer;
  text: () => string;
  contentLength: () => number;
  contentType: () => string;
  saveAsFile: (filePath: string, callback?: (currentBytes: number, totalBytes: number, progress: number) => void) => void;
}

interface HttpClient {
  get(url: string, header: any): HttpCall;
  formPost(url: string, header: any, form: any): HttpCall;
  jsonPost(url: string, header: any, json: string): HttpCall;
}

interface Http {
  open(connectTimeout: number, writeTimeout: number, readTimeout: number): HttpClient;
  default(): HttpClient;
}

interface Progress {
  show: (title: string) => void;
  setProgress: (progress: number) => void;
  close: () => void;
}

interface SelectorNode {
  // 原有基础方法
  text: () => string | null;
  desc: () => string | null;

  // 节点属性获取
  id: () => string;
  className: () => string | null;
  packageName: () => string | null;

  // 点击相关操作
  click: () => boolean;
  longClick: () => boolean;

  // 文本编辑操作
  setText: (text: string) => boolean;
  copy: () => boolean;
  cut: () => boolean;
  paste: () => boolean;
  setSelection: (start: number, end: number) => boolean;

  // 滚动基础操作
  scrollForward: () => boolean;
  scrollBackward: () => boolean;

  // 节点状态操作
  select: () => boolean;
  collapse: () => boolean;
  expand: () => boolean;
  show: () => boolean;

  // 方向滚动操作（封装基础滚动）
  scrollUp: () => boolean;
  scrollDown: () => boolean;
  scrollLeft: () => boolean;
  scrollRight: () => boolean;

  // 节点层级关系操作
  children: () => SelectorNode[];
  childCount: () => number;
  child: (i: number) => SelectorNode | null;
  parent: () => SelectorNode | null;
}

interface SelectorBuilder {
  // 原有基础方法
  text: (text: string) => SelectorBuilder;
  algorithm: (algorithm: string) => SelectorBuilder;
  textContains: (textContains: string) => SelectorBuilder;
  textStartsWith: (textStartsWith: string) => SelectorBuilder;

  // 文本匹配补充方法
  textEndsWith: (textEndsWith: string) => SelectorBuilder;
  textMatches: (textMatches: string) => SelectorBuilder;

  // 描述文案全量匹配方法
  desc: (desc: string) => SelectorBuilder;
  descContains: (descContains: string) => SelectorBuilder;
  descStartsWith: (descStartsWith: string) => SelectorBuilder;
  descEndsWith: (descEndsWith: string) => SelectorBuilder;
  descMatches: (descMatches: string) => SelectorBuilder;

  // 节点ID全量匹配方法
  id: (id: string) => SelectorBuilder;
  idContains: (idContains: string) => SelectorBuilder;
  idStartsWith: (idStartsWith: string) => SelectorBuilder;
  idEndsWith: (idEndsWith: string) => SelectorBuilder;
  idMatches: (idMatches: string) => SelectorBuilder;

  // 类名全量匹配方法
  className: (className: string) => SelectorBuilder;
  classNameContains: (classNameContains: string) => SelectorBuilder;
  classNameStartsWith: (classNameStartsWith: string) => SelectorBuilder;
  classNameEndsWith: (classNameEndsWith: string) => SelectorBuilder;
  classNameMatches: (classNameMatches: string) => SelectorBuilder;

  // 包名全量匹配方法
  packageName: (packageName: string) => SelectorBuilder;
  packageNameContains: (packageNameContains: string) => SelectorBuilder;
  packageNameStartsWith: (packageNameStartsWith: string) => SelectorBuilder;
  packageNameEndsWith: (packageNameEndsWith: string) => SelectorBuilder;
  packageNameMatches: (packageNameMatches: string) => SelectorBuilder;

  // 节点绘制/交互属性匹配
  drawingOrder: (order: number) => SelectorBuilder;
  clickable: (b: boolean) => SelectorBuilder;
  longClickable: (b: boolean) => SelectorBuilder;
  checkable: (b: boolean) => SelectorBuilder;
  selected: (b: boolean) => SelectorBuilder;
  enabled: (b: boolean) => SelectorBuilder;
  scrollable: (b: boolean) => SelectorBuilder;
  editable: (b: boolean) => SelectorBuilder;
  multiLine: (b: boolean) => SelectorBuilder;

  // 核心查询方法（最终执行查询，返回节点）
  findOne: () => SelectorNode | null;
  find: () => SelectorNode[];
}

interface Textual {
  encode: (data:ArrayBuffer,charsetName:string) => string;
  decode: (data:string,charsetName:string) => ArrayBuffer;
}



declare global {
  function wrap(async: Async): Promise<unknown>;
  function openSQLite(path: string): SQLite;
  function getConfig(module: string): ConfigOperation;
  function createCanvas(width?: number, height?: number): Canvas;
  function getFileSystem(module: string): FileOperation;
  function createSelector(): SelectorBuilder;
  function toast(text: string):void;
  const UI: ConfigOperation;
  const Attach: FileOperation;
  const App: App;
  const OcrLite: OcrLite;
  const Display: Display;
  const Thread: Thread;
  const Gallery: Gallery;
  const YoloV8DetCoco: YoloV8DetCoco;
  const Findscr: Findscr;
  const Input: Input;
  const System: System;
  const Base64: Base64;
  const Digest: Crypto;
  const Device: Device;
  const Http: Http;
  const Progress: Progress;
  const Textual: Textual;
}

export { };