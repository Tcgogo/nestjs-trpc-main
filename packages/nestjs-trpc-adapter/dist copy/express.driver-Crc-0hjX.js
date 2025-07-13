import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common, require_objectSpread2 } from "./common-AJXMMmZt.js";
import { require_asyncToGenerator } from "./asyncToGenerator-CDlr4A8U.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { __toESM as __toESM$1, internal_exceptionHandler, nodeHTTPRequestHandler, require_objectSpread2 as require_objectSpread2$1, run } from "./node-http-ZvZKxPic-xWxFTMZn.js";

//#region ../../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/adapters/express.mjs
var import_asyncToGenerator$1 = __toESM(require_asyncToGenerator(), 1);
var import_objectSpread2$1 = __toESM$1(require_objectSpread2$1(), 1);
function createExpressMiddleware(opts) {
	return function(req, res) {
		let path = "";
		run((0, import_asyncToGenerator$1.default)(function* () {
			path = req.path.slice(req.path.lastIndexOf("/") + 1);
			yield nodeHTTPRequestHandler((0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, opts), {}, {
				req,
				res,
				path
			}));
		})).catch(internal_exceptionHandler((0, import_objectSpread2$1.default)({
			req,
			res,
			path
		}, opts)));
	};
}

//#endregion
//#region lib/drivers/express.driver.ts
var import_common = __toESM(require_common(), 1);
var import_objectSpread2 = __toESM(require_objectSpread2(), 1);
var import_asyncToGenerator = __toESM(require_asyncToGenerator(), 1);
var import_decorate = __toESM(require_decorate(), 1);
let ExpressDriver = class ExpressDriver$1 {
	start(options, app, appRouter, contextInstance) {
		return (0, import_asyncToGenerator.default)(function* () {
			var _options$basePath;
			app.use((_options$basePath = options.basePath) !== null && _options$basePath !== void 0 ? _options$basePath : "/trpc", createExpressMiddleware((0, import_objectSpread2.default)({ router: appRouter }, options.context != null && contextInstance != null ? { createContext: function(opts) {
				return contextInstance.create(opts);
			} } : {})));
		})();
	}
};
ExpressDriver = (0, import_decorate.default)([(0, import_common.Injectable)()], ExpressDriver);

//#endregion
export { ExpressDriver };
//# sourceMappingURL=express.driver-Crc-0hjX.js.map