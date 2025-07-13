import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";

//#region lib/utils/validate-each.util.ts
var import_defineProperty = __toESM(require_defineProperty(), 1);
var InvalidDecoratorItemException = class extends Error {
	constructor(decorator, item, context) {
		const message = `Invalid ${item} passed to ${decorator}() decorator (${context}).`;
		super(message);
		(0, import_defineProperty.default)(this, "msg", void 0);
		this.msg = message;
	}
	what() {
		return this.msg;
	}
};
function validateEach(context, arr, predicate, decorator, item) {
	if (!context || !context.name) return true;
	const errors = arr.some(function(str) {
		return !predicate(str);
	});
	if (errors) throw new InvalidDecoratorItemException(decorator, item, context.name);
	return true;
}

//#endregion
export { InvalidDecoratorItemException, validateEach };
//# sourceMappingURL=validate-each.util-CgXvGFOJ.js.map