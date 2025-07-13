import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import * as fs from "node:fs";
import * as path from "node:path";

//#region lib/scanners/file.scanner.ts
var import_common = __toESM(require_common(), 1);
var import_decorate = __toESM(require_decorate(), 1);
function fileUrlToPath(fileUrl) {
	if (!fileUrl) return "";
	let path$1 = fileUrl.replace(/^file:\/\/\//i, "");
	const driveLetterRepeat = new RegExp("^([a-z]:)\\/(\\1\\/)", "i");
	if (driveLetterRepeat.test(path$1)) path$1 = path$1.replace(driveLetterRepeat, "$2");
	return path$1;
}
let FileScanner = class FileScanner$1 {
	getCallerFilePath(skip = 2) {
		const originalPrepareStackTrace = Error.prepareStackTrace;
		Error.prepareStackTrace = function(_, stack$1) {
			return stack$1;
		};
		const error = /* @__PURE__ */ new Error();
		const stack = error.stack;
		Error.prepareStackTrace = originalPrepareStackTrace;
		const caller = stack[skip];
		const jsFilePath = fileUrlToPath(caller === null || caller === void 0 ? void 0 : caller.getFileName());
		if (jsFilePath == null) throw new Error(`Could not find caller file: ${caller}`);
		try {
			const sourceMap = this.getSourceMapFromJSPath(jsFilePath);
			return this.normalizePath(path.resolve(jsFilePath, "..", sourceMap.sources[0]));
		} catch (error$1) {
			if (process.env.NODE_ENV !== "test") console.warn(`Warning: Could not resolve source map for ${jsFilePath}. Falling back to default path resolution.`);
			return this.normalizePath(jsFilePath);
		}
	}
	normalizePath(p) {
		return path.resolve(p.replace(/\\/g, "/"));
	}
	getPlatformPath(p) {
		const exec = new RegExp("^\\/(\\w*):(.*)", "").exec(p);
		return /^win/.test(process.platform) && exec ? `${exec[1]}:\\${exec[2].replace(/\//g, "\\")}` : p;
	}
	getSourceMapFromJSPath(sourcePath) {
		const SOURCE_MAP_REGEX = new RegExp("\\/\\/# sourceMappingURL=(.*\\.map)$", "m");
		const filePath = this.getPlatformPath(sourcePath);
		let content;
		try {
			content = fs.readFileSync(filePath, { encoding: "utf8" });
		} catch (error) {
			throw new Error(`Could not read source file at path: ${filePath}`);
		}
		const exec = SOURCE_MAP_REGEX.exec(content);
		if (exec == null) throw new Error(`Could not find source map comment in file at path ${sourcePath}. Make sure "sourceMap" is enabled in your tsconfig.`);
		const sourceMapPath = path.resolve(filePath, "..", exec[1]);
		let sourceMapContent;
		try {
			sourceMapContent = fs.readFileSync(sourceMapPath, { encoding: "utf8" });
		} catch (error) {
			throw new Error(`Could not read source map file at path: ${sourceMapPath}`);
		}
		try {
			return JSON.parse(sourceMapContent);
		} catch (error) {
			throw new Error(`Failed to parse source map content from: ${sourceMapPath}`);
		}
	}
};
FileScanner = (0, import_decorate.default)([(0, import_common.Injectable)()], FileScanner);

//#endregion
export { FileScanner };
//# sourceMappingURL=file.scanner-DjuJxM_C.js.map