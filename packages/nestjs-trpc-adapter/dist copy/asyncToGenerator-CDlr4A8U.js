import { __commonJS } from "./chunk-BLXvPPr8.js";

//#region ../../node_modules/.pnpm/@oxc-project+runtime@0.76.0/node_modules/@oxc-project/runtime/src/helpers/asyncToGenerator.js
var require_asyncToGenerator = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.76.0/node_modules/@oxc-project/runtime/src/helpers/asyncToGenerator.js"(exports, module) {
	function asyncGeneratorStep(n, t, e, r, o, a, c) {
		try {
			var i = n[a](c), u = i.value;
		} catch (n$1) {
			return void e(n$1);
		}
		i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator(n) {
		return function() {
			var t = this, e = arguments;
			return new Promise(function(r, o) {
				var a = n.apply(t, e);
				function _next(n$1) {
					asyncGeneratorStep(a, r, o, _next, _throw, "next", n$1);
				}
				function _throw(n$1) {
					asyncGeneratorStep(a, r, o, _next, _throw, "throw", n$1);
				}
				_next(void 0);
			});
		};
	}
	module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });

//#endregion
export { require_asyncToGenerator };
//# sourceMappingURL=asyncToGenerator-CDlr4A8U.js.map