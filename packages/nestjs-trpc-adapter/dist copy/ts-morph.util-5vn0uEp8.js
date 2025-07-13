import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_asyncToGenerator } from "./asyncToGenerator-CDlr4A8U.js";
import { SourceFile } from "ts-morph";

//#region lib/utils/ts-morph.util.ts
var import_asyncToGenerator = __toESM(require_asyncToGenerator(), 1);
function saveOrOverrideFile(_x) {
	return _saveOrOverrideFile.apply(this, arguments);
}
function _saveOrOverrideFile() {
	_saveOrOverrideFile = (0, import_asyncToGenerator.default)(function* (sourceFile) {
		sourceFile.formatText({ indentSize: 2 });
		yield sourceFile.save();
	});
	return _saveOrOverrideFile.apply(this, arguments);
}

//#endregion
export { saveOrOverrideFile };
//# sourceMappingURL=ts-morph.util-5vn0uEp8.js.map