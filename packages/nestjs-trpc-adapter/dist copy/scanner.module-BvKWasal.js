import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { FileScanner } from "./file.scanner-DjuJxM_C.js";
import { ImportsScanner } from "./imports.scanner-m3j-zqOP.js";

//#region lib/scanners/scanner.module.ts
var import_common = __toESM(require_common(), 1);
var import_decorate = __toESM(require_decorate(), 1);
let ScannerModule = class ScannerModule$1 {};
ScannerModule = (0, import_decorate.default)([(0, import_common.Module)({
	imports: [],
	providers: [FileScanner, ImportsScanner],
	exports: [FileScanner, ImportsScanner]
})], ScannerModule);

//#endregion
export { ScannerModule };
//# sourceMappingURL=scanner.module-BvKWasal.js.map