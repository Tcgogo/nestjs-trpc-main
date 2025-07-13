import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_asyncToGenerator } from "./asyncToGenerator-CDlr4A8U.js";

//#region ../../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/utils-DdbbrDku.mjs
/**
* JSON-RPC 2.0 Error codes
*
* `-32000` to `-32099` are reserved for implementation-defined server-errors.
* For tRPC we're copying the last digits of HTTP 4XX errors.
*/
const TRPC_ERROR_CODES_BY_KEY = {
	PARSE_ERROR: -32700,
	BAD_REQUEST: -32600,
	INTERNAL_SERVER_ERROR: -32603,
	NOT_IMPLEMENTED: -32603,
	BAD_GATEWAY: -32603,
	SERVICE_UNAVAILABLE: -32603,
	GATEWAY_TIMEOUT: -32603,
	UNAUTHORIZED: -32001,
	PAYMENT_REQUIRED: -32002,
	FORBIDDEN: -32003,
	NOT_FOUND: -32004,
	METHOD_NOT_SUPPORTED: -32005,
	TIMEOUT: -32008,
	CONFLICT: -32009,
	PRECONDITION_FAILED: -32012,
	PAYLOAD_TOO_LARGE: -32013,
	UNSUPPORTED_MEDIA_TYPE: -32015,
	UNPROCESSABLE_CONTENT: -32022,
	TOO_MANY_REQUESTS: -32029,
	CLIENT_CLOSED_REQUEST: -32099
};
const TRPC_ERROR_CODES_BY_NUMBER = {
	[-32700]: "PARSE_ERROR",
	[-32600]: "BAD_REQUEST",
	[-32603]: "INTERNAL_SERVER_ERROR",
	[-32001]: "UNAUTHORIZED",
	[-32002]: "PAYMENT_REQUIRED",
	[-32003]: "FORBIDDEN",
	[-32004]: "NOT_FOUND",
	[-32005]: "METHOD_NOT_SUPPORTED",
	[-32008]: "TIMEOUT",
	[-32009]: "CONFLICT",
	[-32012]: "PRECONDITION_FAILED",
	[-32013]: "PAYLOAD_TOO_LARGE",
	[-32015]: "UNSUPPORTED_MEDIA_TYPE",
	[-32022]: "UNPROCESSABLE_CONTENT",
	[-32029]: "TOO_MANY_REQUESTS",
	[-32099]: "CLIENT_CLOSED_REQUEST"
};
/**
* tRPC error codes that are considered retryable
* With out of the box SSE, the client will reconnect when these errors are encountered
*/
const retryableRpcCodes = [
	TRPC_ERROR_CODES_BY_KEY.BAD_GATEWAY,
	TRPC_ERROR_CODES_BY_KEY.SERVICE_UNAVAILABLE,
	TRPC_ERROR_CODES_BY_KEY.GATEWAY_TIMEOUT,
	TRPC_ERROR_CODES_BY_KEY.INTERNAL_SERVER_ERROR
];
/**
* Ensures there are no duplicate keys when building a procedure.
* @internal
*/
function mergeWithoutOverrides(obj1, ...objs) {
	const newObj = Object.assign(Object.create(null), obj1);
	for (const overrides of objs) for (const key in overrides) {
		if (key in newObj && newObj[key] !== overrides[key]) throw new Error(`Duplicate key ${key}`);
		newObj[key] = overrides[key];
	}
	return newObj;
}
/**
* Check that value is object
* @internal
*/
function isObject(value) {
	return !!value && !Array.isArray(value) && typeof value === "object";
}
function isFunction(fn) {
	return typeof fn === "function";
}
/**
* Create an object without inheriting anything from `Object.prototype`
* @internal
*/
function omitPrototype(obj) {
	return Object.assign(Object.create(null), obj);
}
const asyncIteratorsSupported = typeof Symbol === "function" && !!Symbol.asyncIterator;
function isAsyncIterable(value) {
	return asyncIteratorsSupported && isObject(value) && Symbol.asyncIterator in value;
}
/**
* Run an IIFE
*/
const run = function(fn) {
	return fn();
};
function identity(it) {
	return it;
}

//#endregion
//#region ../../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/getErrorShape-Uhlrl4Bk.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
	return function() {
		return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
	};
};
var __copyProps = function(to, from, except, desc) {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: function(k) {
				return from[k];
			}.bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM$1 = function(mod, isNodeMode, target) {
	return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod);
};
const noop = function() {};
const freezeIfAvailable = function(obj) {
	if (Object.freeze) Object.freeze(obj);
};
function createInnerProxy(callback, path, memo$1) {
	var _memo$cacheKey;
	const cacheKey = path.join(".");
	(_memo$cacheKey = memo$1[cacheKey]) !== null && _memo$cacheKey !== void 0 || (memo$1[cacheKey] = new Proxy(noop, {
		get(_obj, key) {
			if (typeof key !== "string" || key === "then") return void 0;
			return createInnerProxy(callback, [...path, key], memo$1);
		},
		apply(_1, _2, args) {
			const lastOfPath = path[path.length - 1];
			let opts = {
				args,
				path
			};
			if (lastOfPath === "call") opts = {
				args: args.length >= 2 ? [args[1]] : [],
				path: path.slice(0, -1)
			};
			else if (lastOfPath === "apply") opts = {
				args: args.length >= 2 ? args[1] : [],
				path: path.slice(0, -1)
			};
			freezeIfAvailable(opts.args);
			freezeIfAvailable(opts.path);
			return callback(opts);
		}
	}));
	return memo$1[cacheKey];
}
/**
* Creates a proxy that calls the callback with the path and arguments
*
* @internal
*/
const createRecursiveProxy = function(callback) {
	return createInnerProxy(callback, [], Object.create(null));
};
const JSONRPC2_TO_HTTP_CODE = {
	PARSE_ERROR: 400,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_SUPPORTED: 405,
	TIMEOUT: 408,
	CONFLICT: 409,
	PRECONDITION_FAILED: 412,
	PAYLOAD_TOO_LARGE: 413,
	UNSUPPORTED_MEDIA_TYPE: 415,
	UNPROCESSABLE_CONTENT: 422,
	TOO_MANY_REQUESTS: 429,
	CLIENT_CLOSED_REQUEST: 499,
	INTERNAL_SERVER_ERROR: 500,
	NOT_IMPLEMENTED: 501,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503,
	GATEWAY_TIMEOUT: 504
};
function getStatusCodeFromKey(code) {
	var _JSONRPC2_TO_HTTP_COD;
	return (_JSONRPC2_TO_HTTP_COD = JSONRPC2_TO_HTTP_CODE[code]) !== null && _JSONRPC2_TO_HTTP_COD !== void 0 ? _JSONRPC2_TO_HTTP_COD : 500;
}
function getHTTPStatusCode(json) {
	const arr = Array.isArray(json) ? json : [json];
	const httpStatuses = new Set(arr.map(function(res) {
		if ("error" in res && isObject(res.error.data)) {
			var _res$error$data;
			if (typeof ((_res$error$data = res.error.data) === null || _res$error$data === void 0 ? void 0 : _res$error$data["httpStatus"]) === "number") return res.error.data["httpStatus"];
			const code = TRPC_ERROR_CODES_BY_NUMBER[res.error.code];
			return getStatusCodeFromKey(code);
		}
		return 200;
	}));
	if (httpStatuses.size !== 1) return 207;
	const httpStatus = httpStatuses.values().next().value;
	return httpStatus;
}
function getHTTPStatusCodeFromError(error) {
	return getStatusCodeFromKey(error.code);
}
var require_typeof = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(exports, module) {
	function _typeof$2(o) {
		"@babel/helpers - typeof";
		return module.exports = _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
			return typeof o$1;
		} : function(o$1) {
			return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
		}, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof$2(o);
	}
	module.exports = _typeof$2, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_toPrimitive = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(exports, module) {
	var _typeof$1 = require_typeof()["default"];
	function toPrimitive$1(t, r) {
		if ("object" != _typeof$1(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof$1(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	module.exports = toPrimitive$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_toPropertyKey = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(exports, module) {
	var _typeof = require_typeof()["default"];
	var toPrimitive = require_toPrimitive();
	function toPropertyKey$1(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	module.exports = toPropertyKey$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_defineProperty = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(exports, module) {
	var toPropertyKey = require_toPropertyKey();
	function _defineProperty(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_objectSpread2 = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(exports, module) {
	var defineProperty = require_defineProperty();
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r$1) {
				return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
				defineProperty(e, r$1, t[r$1]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
				Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
			});
		}
		return e;
	}
	module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var import_objectSpread2$4 = __toESM$1(require_objectSpread2(), 1);
/**
* @internal
*/
function getErrorShape(opts) {
	const { path, error, config } = opts;
	const { code } = opts.error;
	const shape = {
		message: error.message,
		code: TRPC_ERROR_CODES_BY_KEY[code],
		data: {
			code,
			httpStatus: getHTTPStatusCodeFromError(error)
		}
	};
	if (config.isDev && typeof opts.error.stack === "string") shape.data.stack = opts.error.stack;
	if (typeof path === "string") shape.data.path = path;
	return config.errorFormatter((0, import_objectSpread2$4.default)((0, import_objectSpread2$4.default)({}, opts), {}, { shape }));
}

//#endregion
//#region ../../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/tracked-gU3ttYjg.mjs
var import_asyncToGenerator$4 = __toESM(require_asyncToGenerator(), 1);
const defaultFormatter = function({ shape }) {
	return shape;
};
var import_defineProperty$2 = __toESM$1(require_defineProperty(), 1);
var UnknownCauseError = class extends Error {};
function getCauseFromUnknown(cause) {
	if (cause instanceof Error) return cause;
	const type = typeof cause;
	if (type === "undefined" || type === "function" || cause === null) return void 0;
	if (type !== "object") return new Error(String(cause));
	if (isObject(cause)) return Object.assign(new UnknownCauseError(), cause);
	return void 0;
}
function getTRPCErrorFromUnknown(cause) {
	if (cause instanceof TRPCError) return cause;
	if (cause instanceof Error && cause.name === "TRPCError") return cause;
	const trpcError = new TRPCError({
		code: "INTERNAL_SERVER_ERROR",
		cause
	});
	if (cause instanceof Error && cause.stack) trpcError.stack = cause.stack;
	return trpcError;
}
var TRPCError = class extends Error {
	constructor(opts) {
		var _ref, _opts$message, _this$cause;
		const cause = getCauseFromUnknown(opts.cause);
		const message = (_ref = (_opts$message = opts.message) !== null && _opts$message !== void 0 ? _opts$message : cause === null || cause === void 0 ? void 0 : cause.message) !== null && _ref !== void 0 ? _ref : opts.code;
		super(message, { cause });
		(0, import_defineProperty$2.default)(this, "cause", void 0);
		(0, import_defineProperty$2.default)(this, "code", void 0);
		this.code = opts.code;
		this.name = "TRPCError";
		(_this$cause = this.cause) !== null && _this$cause !== void 0 || (this.cause = cause);
	}
};
var import_objectSpread2$1$4 = __toESM$1(require_objectSpread2(), 1);
/**
* @internal
*/
function getDataTransformer(transformer) {
	if ("input" in transformer) return transformer;
	return {
		input: transformer,
		output: transformer
	};
}
/**
* @internal
*/
const defaultTransformer = {
	input: {
		serialize: function(obj) {
			return obj;
		},
		deserialize: function(obj) {
			return obj;
		}
	},
	output: {
		serialize: function(obj) {
			return obj;
		},
		deserialize: function(obj) {
			return obj;
		}
	}
};
function transformTRPCResponseItem(config, item) {
	if ("error" in item) return (0, import_objectSpread2$1$4.default)((0, import_objectSpread2$1$4.default)({}, item), {}, { error: config.transformer.output.serialize(item.error) });
	if ("data" in item.result) return (0, import_objectSpread2$1$4.default)((0, import_objectSpread2$1$4.default)({}, item), {}, { result: (0, import_objectSpread2$1$4.default)((0, import_objectSpread2$1$4.default)({}, item.result), {}, { data: config.transformer.output.serialize(item.result.data) }) });
	return item;
}
/**
* Takes a unserialized `TRPCResponse` and serializes it with the router's transformers
**/
function transformTRPCResponse(config, itemOrItems) {
	return Array.isArray(itemOrItems) ? itemOrItems.map(function(item) {
		return transformTRPCResponseItem(config, item);
	}) : transformTRPCResponseItem(config, itemOrItems);
}
var import_objectSpread2$5 = __toESM$1(require_objectSpread2(), 1);
const lazySymbol = Symbol("lazy");
function once(fn) {
	const uncalled = Symbol();
	let result = uncalled;
	return function() {
		if (result === uncalled) result = fn();
		return result;
	};
}
function isLazy(input) {
	return typeof input === "function" && lazySymbol in input;
}
function isRouter(value) {
	return isObject(value) && isObject(value["_def"]) && "router" in value["_def"];
}
const emptyRouter = {
	_ctx: null,
	_errorShape: null,
	_meta: null,
	queries: {},
	mutations: {},
	subscriptions: {},
	errorFormatter: defaultFormatter,
	transformer: defaultTransformer
};
/**
* Reserved words that can't be used as router or procedure names
*/
const reservedWords = [
	"then",
	"call",
	"apply"
];
/**
* @internal
*/
function createRouterFactory(config) {
	function createRouterInner(input) {
		const reservedWordsUsed = new Set(Object.keys(input).filter(function(v) {
			return reservedWords.includes(v);
		}));
		if (reservedWordsUsed.size > 0) throw new Error("Reserved words used in `router({})` call: " + Array.from(reservedWordsUsed).join(", "));
		const procedures = omitPrototype({});
		const lazy$1 = omitPrototype({});
		function createLazyLoader(opts) {
			return {
				ref: opts.ref,
				load: once((0, import_asyncToGenerator$4.default)(function* () {
					const router$1 = yield opts.ref();
					const lazyPath = [...opts.path, opts.key];
					const lazyKey = lazyPath.join(".");
					opts.aggregate[opts.key] = step(router$1._def.record, lazyPath);
					delete lazy$1[lazyKey];
					for (const [nestedKey, nestedItem] of Object.entries(router$1._def.lazy)) {
						const nestedRouterKey = [...lazyPath, nestedKey].join(".");
						lazy$1[nestedRouterKey] = createLazyLoader({
							ref: nestedItem.ref,
							path: lazyPath,
							key: nestedKey,
							aggregate: opts.aggregate[opts.key]
						});
					}
				}))
			};
		}
		function step(from, path = []) {
			const aggregate = omitPrototype({});
			for (const [key, item] of Object.entries(from !== null && from !== void 0 ? from : {})) {
				if (isLazy(item)) {
					lazy$1[[...path, key].join(".")] = createLazyLoader({
						path,
						ref: item,
						key,
						aggregate
					});
					continue;
				}
				if (isRouter(item)) {
					aggregate[key] = step(item._def.record, [...path, key]);
					continue;
				}
				if (!isProcedure(item)) {
					aggregate[key] = step(item, [...path, key]);
					continue;
				}
				const newPath = [...path, key].join(".");
				if (procedures[newPath]) throw new Error(`Duplicate key: ${newPath}`);
				procedures[newPath] = item;
				aggregate[key] = item;
			}
			return aggregate;
		}
		const record = step(input);
		const _def = (0, import_objectSpread2$5.default)((0, import_objectSpread2$5.default)({
			_config: config,
			router: true,
			procedures,
			lazy: lazy$1
		}, emptyRouter), {}, { record });
		const router = (0, import_objectSpread2$5.default)((0, import_objectSpread2$5.default)({}, record), {}, {
			_def,
			createCaller: createCallerFactory()({ _def })
		});
		return router;
	}
	return createRouterInner;
}
function isProcedure(procedureOrRouter) {
	return typeof procedureOrRouter === "function";
}
/**
* @internal
*/
function getProcedureAtPath(_x, _x2) {
	return _getProcedureAtPath.apply(this, arguments);
}
function _getProcedureAtPath() {
	_getProcedureAtPath = (0, import_asyncToGenerator$4.default)(function* (router, path) {
		const { _def } = router;
		let procedure = _def.procedures[path];
		while (!procedure) {
			const key = Object.keys(_def.lazy).find(function(key$1) {
				return path.startsWith(key$1);
			});
			if (!key) return null;
			const lazyRouter = _def.lazy[key];
			yield lazyRouter.load();
			procedure = _def.procedures[path];
		}
		return procedure;
	});
	return _getProcedureAtPath.apply(this, arguments);
}
/**
* @internal
*/
function callProcedure(_x3) {
	return _callProcedure.apply(this, arguments);
}
function _callProcedure() {
	_callProcedure = (0, import_asyncToGenerator$4.default)(function* (opts) {
		const { type, path } = opts;
		const proc = yield getProcedureAtPath(opts.router, path);
		if (!proc || !isProcedure(proc) || proc._def.type !== type && !opts.allowMethodOverride) throw new TRPCError({
			code: "NOT_FOUND",
			message: `No "${type}"-procedure on path "${path}"`
		});
		/* istanbul ignore if -- @preserve */
		if (proc._def.type !== type && opts.allowMethodOverride && proc._def.type === "subscription") throw new TRPCError({
			code: "METHOD_NOT_SUPPORTED",
			message: `Method override is not supported for subscriptions`
		});
		return proc(opts);
	});
	return _callProcedure.apply(this, arguments);
}
function createCallerFactory() {
	return function createCallerInner(router) {
		const { _def } = router;
		return function createCaller(ctxOrCallback, opts) {
			return createRecursiveProxy(function() {
				var _ref3 = (0, import_asyncToGenerator$4.default)(function* ({ path, args }) {
					const fullPath = path.join(".");
					if (path.length === 1 && path[0] === "_def") return _def;
					const procedure = yield getProcedureAtPath(router, fullPath);
					let ctx = void 0;
					try {
						if (!procedure) throw new TRPCError({
							code: "NOT_FOUND",
							message: `No procedure found on path "${path}"`
						});
						ctx = isFunction(ctxOrCallback) ? yield Promise.resolve(ctxOrCallback()) : ctxOrCallback;
						return yield procedure({
							path: fullPath,
							getRawInput: function() {
								var _ref2 = (0, import_asyncToGenerator$4.default)(function* () {
									return args[0];
								});
								return function getRawInput() {
									return _ref2.apply(this, arguments);
								};
							}(),
							ctx,
							type: procedure._def.type,
							signal: opts === null || opts === void 0 ? void 0 : opts.signal
						});
					} catch (cause) {
						var _opts$onError, _procedure$_def$type;
						opts === null || opts === void 0 || (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, {
							ctx,
							error: getTRPCErrorFromUnknown(cause),
							input: args[0],
							path: fullPath,
							type: (_procedure$_def$type = procedure === null || procedure === void 0 ? void 0 : procedure._def.type) !== null && _procedure$_def$type !== void 0 ? _procedure$_def$type : "unknown"
						});
						throw cause;
					}
				});
				return function(_x4) {
					return _ref3.apply(this, arguments);
				};
			}());
		};
	};
}
function mergeRouters(...routerList) {
	var _routerList$;
	const record = mergeWithoutOverrides({}, ...routerList.map(function(r) {
		return r._def.record;
	}));
	const errorFormatter = routerList.reduce(function(currentErrorFormatter, nextRouter) {
		if (nextRouter._def._config.errorFormatter && nextRouter._def._config.errorFormatter !== defaultFormatter) {
			if (currentErrorFormatter !== defaultFormatter && currentErrorFormatter !== nextRouter._def._config.errorFormatter) throw new Error("You seem to have several error formatters");
			return nextRouter._def._config.errorFormatter;
		}
		return currentErrorFormatter;
	}, defaultFormatter);
	const transformer = routerList.reduce(function(prev, current) {
		if (current._def._config.transformer && current._def._config.transformer !== defaultTransformer) {
			if (prev !== defaultTransformer && prev !== current._def._config.transformer) throw new Error("You seem to have several transformers");
			return current._def._config.transformer;
		}
		return prev;
	}, defaultTransformer);
	const router = createRouterFactory({
		errorFormatter,
		transformer,
		isDev: routerList.every(function(r) {
			return r._def._config.isDev;
		}),
		allowOutsideOfServer: routerList.every(function(r) {
			return r._def._config.allowOutsideOfServer;
		}),
		isServer: routerList.every(function(r) {
			return r._def._config.isServer;
		}),
		$types: (_routerList$ = routerList[0]) === null || _routerList$ === void 0 ? void 0 : _routerList$._def._config.$types
	})(record);
	return router;
}
const trackedSymbol = Symbol();
function isTrackedEnvelope(value) {
	return Array.isArray(value) && value[2] === trackedSymbol;
}

//#endregion
//#region ../../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/initTRPC-IT_6ZYJd.mjs
var import_asyncToGenerator$3 = __toESM(require_asyncToGenerator(), 1);
var import_objectSpread2$2$1 = __toESM$1(require_objectSpread2(), 1);
/** @internal */
const middlewareMarker = "middlewareMarker";
/**
* @internal
*/
function createMiddlewareFactory() {
	function createMiddlewareInner(middlewares) {
		return {
			_middlewares: middlewares,
			unstable_pipe(middlewareBuilderOrFn) {
				const pipedMiddleware = "_middlewares" in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [middlewareBuilderOrFn];
				return createMiddlewareInner([...middlewares, ...pipedMiddleware]);
			}
		};
	}
	function createMiddleware(fn) {
		return createMiddlewareInner([fn]);
	}
	return createMiddleware;
}
/**
* @internal
* Please note, `trpc-openapi` uses this function.
*/
function createInputMiddleware(parse) {
	const inputMiddleware = /* @__PURE__ */ function() {
		var _inputValidatorMiddleware = (0, import_asyncToGenerator$3.default)(function* (opts) {
			let parsedInput;
			const rawInput = yield opts.getRawInput();
			try {
				parsedInput = yield parse(rawInput);
			} catch (cause) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					cause
				});
			}
			const combinedInput = isObject(opts.input) && isObject(parsedInput) ? (0, import_objectSpread2$2$1.default)((0, import_objectSpread2$2$1.default)({}, opts.input), parsedInput) : parsedInput;
			return opts.next({ input: combinedInput });
		});
		function inputValidatorMiddleware(_x) {
			return _inputValidatorMiddleware.apply(this, arguments);
		}
		return inputValidatorMiddleware;
	}();
	inputMiddleware._type = "input";
	return inputMiddleware;
}
/**
* @internal
*/
function createOutputMiddleware(parse) {
	const outputMiddleware = /* @__PURE__ */ function() {
		var _outputValidatorMiddleware = (0, import_asyncToGenerator$3.default)(function* ({ next }) {
			const result = yield next();
			if (!result.ok) return result;
			try {
				const data = yield parse(result.data);
				return (0, import_objectSpread2$2$1.default)((0, import_objectSpread2$2$1.default)({}, result), {}, { data });
			} catch (cause) {
				throw new TRPCError({
					message: "Output validation failed",
					code: "INTERNAL_SERVER_ERROR",
					cause
				});
			}
		});
		function outputValidatorMiddleware(_x2) {
			return _outputValidatorMiddleware.apply(this, arguments);
		}
		return outputValidatorMiddleware;
	}();
	outputMiddleware._type = "output";
	return outputMiddleware;
}
var import_defineProperty$1 = __toESM$1(require_defineProperty(), 1);
/** A schema error with useful information. */
var StandardSchemaV1Error = class extends Error {
	/**
	* Creates a schema error with useful information.
	*
	* @param issues The schema issues.
	*/
	constructor(issues) {
		var _issues$;
		super((_issues$ = issues[0]) === null || _issues$ === void 0 ? void 0 : _issues$.message);
		(0, import_defineProperty$1.default)(this, "issues", void 0);
		this.name = "SchemaError";
		this.issues = issues;
	}
};
function getParseFn(procedureParser) {
	const parser = procedureParser;
	const isStandardSchema = "~standard" in parser;
	if (typeof parser === "function" && typeof parser.assert === "function") return parser.assert.bind(parser);
	if (typeof parser === "function" && !isStandardSchema) return parser;
	if (typeof parser.parseAsync === "function") return parser.parseAsync.bind(parser);
	if (typeof parser.parse === "function") return parser.parse.bind(parser);
	if (typeof parser.validateSync === "function") return parser.validateSync.bind(parser);
	if (typeof parser.create === "function") return parser.create.bind(parser);
	if (typeof parser.assert === "function") return function(value) {
		parser.assert(value);
		return value;
	};
	if (isStandardSchema) return function() {
		var _ref = (0, import_asyncToGenerator$3.default)(function* (value) {
			const result = yield parser["~standard"].validate(value);
			if (result.issues) throw new StandardSchemaV1Error(result.issues);
			return result.value;
		});
		return function(_x3) {
			return _ref.apply(this, arguments);
		};
	}();
	throw new Error("Could not find a validator fn");
}
var require_objectWithoutPropertiesLoose = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (e.includes(n)) continue;
			t[n] = r[n];
		}
		return t;
	}
	module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_objectWithoutProperties = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js"(exports, module) {
	var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
	function _objectWithoutProperties$1(e, t) {
		if (null == e) return {};
		var o, r, i = objectWithoutPropertiesLoose(e, t);
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
	}
	module.exports = _objectWithoutProperties$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var import_objectWithoutProperties = __toESM$1(require_objectWithoutProperties(), 1);
var import_objectSpread2$1$3 = __toESM$1(require_objectSpread2(), 1);
const _excluded = [
	"middlewares",
	"inputs",
	"meta"
];
function createNewBuilder(def1, def2) {
	const { middlewares = [], inputs, meta } = def2, rest = (0, import_objectWithoutProperties.default)(def2, _excluded);
	return createBuilder((0, import_objectSpread2$1$3.default)((0, import_objectSpread2$1$3.default)({}, mergeWithoutOverrides(def1, rest)), {}, {
		inputs: [...def1.inputs, ...inputs !== null && inputs !== void 0 ? inputs : []],
		middlewares: [...def1.middlewares, ...middlewares],
		meta: def1.meta && meta ? (0, import_objectSpread2$1$3.default)((0, import_objectSpread2$1$3.default)({}, def1.meta), meta) : meta !== null && meta !== void 0 ? meta : def1.meta
	}));
}
function createBuilder(initDef = {}) {
	const _def = (0, import_objectSpread2$1$3.default)({
		procedure: true,
		inputs: [],
		middlewares: []
	}, initDef);
	const builder = {
		_def,
		input(input) {
			const parser = getParseFn(input);
			return createNewBuilder(_def, {
				inputs: [input],
				middlewares: [createInputMiddleware(parser)]
			});
		},
		output(output) {
			const parser = getParseFn(output);
			return createNewBuilder(_def, {
				output,
				middlewares: [createOutputMiddleware(parser)]
			});
		},
		meta(meta) {
			return createNewBuilder(_def, { meta });
		},
		use(middlewareBuilderOrFn) {
			const middlewares = "_middlewares" in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [middlewareBuilderOrFn];
			return createNewBuilder(_def, { middlewares });
		},
		unstable_concat(builder$1) {
			return createNewBuilder(_def, builder$1._def);
		},
		concat(builder$1) {
			return createNewBuilder(_def, builder$1._def);
		},
		query(resolver) {
			return createResolver((0, import_objectSpread2$1$3.default)((0, import_objectSpread2$1$3.default)({}, _def), {}, { type: "query" }), resolver);
		},
		mutation(resolver) {
			return createResolver((0, import_objectSpread2$1$3.default)((0, import_objectSpread2$1$3.default)({}, _def), {}, { type: "mutation" }), resolver);
		},
		subscription(resolver) {
			return createResolver((0, import_objectSpread2$1$3.default)((0, import_objectSpread2$1$3.default)({}, _def), {}, { type: "subscription" }), resolver);
		},
		experimental_caller(caller) {
			return createNewBuilder(_def, { caller });
		}
	};
	return builder;
}
function createResolver(_defIn, resolver) {
	const finalBuilder = createNewBuilder(_defIn, {
		resolver,
		middlewares: [/* @__PURE__ */ function() {
			var _resolveMiddleware = (0, import_asyncToGenerator$3.default)(function* (opts) {
				const data = yield resolver(opts);
				return {
					marker: middlewareMarker,
					ok: true,
					data,
					ctx: opts.ctx
				};
			});
			function resolveMiddleware(_x4) {
				return _resolveMiddleware.apply(this, arguments);
			}
			return resolveMiddleware;
		}()]
	});
	const _def = (0, import_objectSpread2$1$3.default)((0, import_objectSpread2$1$3.default)({}, finalBuilder._def), {}, {
		type: _defIn.type,
		experimental_caller: Boolean(finalBuilder._def.caller),
		meta: finalBuilder._def.meta,
		$types: null
	});
	const invoke = createProcedureCaller(finalBuilder._def);
	const callerOverride = finalBuilder._def.caller;
	if (!callerOverride) return invoke;
	const callerWrapper = function() {
		var _ref2 = (0, import_asyncToGenerator$3.default)(function* (...args) {
			return yield callerOverride({
				args,
				invoke,
				_def
			});
		});
		return function callerWrapper$1() {
			return _ref2.apply(this, arguments);
		};
	}();
	callerWrapper._def = _def;
	return callerWrapper;
}
const codeblock = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim();
function callRecursive(_x5, _x6, _x7) {
	return _callRecursive.apply(this, arguments);
}
function _callRecursive() {
	_callRecursive = (0, import_asyncToGenerator$3.default)(function* (index, _def, opts) {
		try {
			const middleware = _def.middlewares[index];
			const result = yield middleware((0, import_objectSpread2$1$3.default)((0, import_objectSpread2$1$3.default)({}, opts), {}, {
				meta: _def.meta,
				input: opts.input,
				next(_nextOpts) {
					var _nextOpts$getRawInput;
					const nextOpts = _nextOpts;
					return callRecursive(index + 1, _def, (0, import_objectSpread2$1$3.default)((0, import_objectSpread2$1$3.default)({}, opts), {}, {
						ctx: (nextOpts === null || nextOpts === void 0 ? void 0 : nextOpts.ctx) ? (0, import_objectSpread2$1$3.default)((0, import_objectSpread2$1$3.default)({}, opts.ctx), nextOpts.ctx) : opts.ctx,
						input: nextOpts && "input" in nextOpts ? nextOpts.input : opts.input,
						getRawInput: (_nextOpts$getRawInput = nextOpts === null || nextOpts === void 0 ? void 0 : nextOpts.getRawInput) !== null && _nextOpts$getRawInput !== void 0 ? _nextOpts$getRawInput : opts.getRawInput
					}));
				}
			}));
			return result;
		} catch (cause) {
			return {
				ok: false,
				error: getTRPCErrorFromUnknown(cause),
				marker: middlewareMarker
			};
		}
	});
	return _callRecursive.apply(this, arguments);
}
function createProcedureCaller(_def) {
	function procedure(_x8) {
		return _procedure.apply(this, arguments);
	}
	function _procedure() {
		_procedure = (0, import_asyncToGenerator$3.default)(function* (opts) {
			if (!opts || !("getRawInput" in opts)) throw new Error(codeblock);
			const result = yield callRecursive(0, _def, opts);
			if (!result) throw new TRPCError({
				code: "INTERNAL_SERVER_ERROR",
				message: "No result from middlewares - did you forget to `return next()`?"
			});
			if (!result.ok) throw result.error;
			return result.data;
		});
		return _procedure.apply(this, arguments);
	}
	procedure._def = _def;
	procedure.procedure = true;
	procedure.meta = _def.meta;
	return procedure;
}
var _globalThis$process, _globalThis$process2, _globalThis$process3;
/**
* The default check to see if we're in a server
*/
const isServerDefault = typeof window === "undefined" || "Deno" in window || ((_globalThis$process = globalThis.process) === null || _globalThis$process === void 0 || (_globalThis$process = _globalThis$process.env) === null || _globalThis$process === void 0 ? void 0 : _globalThis$process["NODE_ENV"]) === "test" || !!((_globalThis$process2 = globalThis.process) === null || _globalThis$process2 === void 0 || (_globalThis$process2 = _globalThis$process2.env) === null || _globalThis$process2 === void 0 ? void 0 : _globalThis$process2["JEST_WORKER_ID"]) || !!((_globalThis$process3 = globalThis.process) === null || _globalThis$process3 === void 0 || (_globalThis$process3 = _globalThis$process3.env) === null || _globalThis$process3 === void 0 ? void 0 : _globalThis$process3["VITEST_WORKER_ID"]);
var import_objectSpread2$3 = __toESM$1(require_objectSpread2(), 1);
var TRPCBuilder = class TRPCBuilder$1 {
	/**
	* Add a context shape as a generic to the root object
	* @see https://trpc.io/docs/v11/server/context
	*/
	context() {
		return new TRPCBuilder$1();
	}
	/**
	* Add a meta shape as a generic to the root object
	* @see https://trpc.io/docs/v11/quickstart
	*/
	meta() {
		return new TRPCBuilder$1();
	}
	/**
	* Create the root object
	* @see https://trpc.io/docs/v11/server/routers#initialize-trpc
	*/
	create(opts) {
		var _opts$transformer, _opts$isDev, _globalThis$process$1, _opts$allowOutsideOfS, _opts$errorFormatter, _opts$isServer;
		const config = (0, import_objectSpread2$3.default)((0, import_objectSpread2$3.default)({}, opts), {}, {
			transformer: getDataTransformer((_opts$transformer = opts === null || opts === void 0 ? void 0 : opts.transformer) !== null && _opts$transformer !== void 0 ? _opts$transformer : defaultTransformer),
			isDev: (_opts$isDev = opts === null || opts === void 0 ? void 0 : opts.isDev) !== null && _opts$isDev !== void 0 ? _opts$isDev : ((_globalThis$process$1 = globalThis.process) === null || _globalThis$process$1 === void 0 ? void 0 : _globalThis$process$1.env["NODE_ENV"]) !== "production",
			allowOutsideOfServer: (_opts$allowOutsideOfS = opts === null || opts === void 0 ? void 0 : opts.allowOutsideOfServer) !== null && _opts$allowOutsideOfS !== void 0 ? _opts$allowOutsideOfS : false,
			errorFormatter: (_opts$errorFormatter = opts === null || opts === void 0 ? void 0 : opts.errorFormatter) !== null && _opts$errorFormatter !== void 0 ? _opts$errorFormatter : defaultFormatter,
			isServer: (_opts$isServer = opts === null || opts === void 0 ? void 0 : opts.isServer) !== null && _opts$isServer !== void 0 ? _opts$isServer : isServerDefault,
			$types: null
		});
		{
			var _opts$isServer2;
			const isServer = (_opts$isServer2 = opts === null || opts === void 0 ? void 0 : opts.isServer) !== null && _opts$isServer2 !== void 0 ? _opts$isServer2 : isServerDefault;
			if (!isServer && (opts === null || opts === void 0 ? void 0 : opts.allowOutsideOfServer) !== true) throw new Error(`You're trying to use @trpc/server in a non-server environment. This is not supported by default.`);
		}
		return {
			_config: config,
			procedure: createBuilder({ meta: opts === null || opts === void 0 ? void 0 : opts.defaultMeta }),
			middleware: createMiddlewareFactory(),
			router: createRouterFactory(config),
			mergeRouters,
			createCallerFactory: createCallerFactory()
		};
	}
};
/**
* Builder to initialize the tRPC root object - use this exactly once per backend
* @see https://trpc.io/docs/v11/quickstart
*/
const initTRPC = new TRPCBuilder();

//#endregion
//#region ../../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/parseTRPCMessage-ByIHyFRz.mjs
const procedureTypes = [
	"query",
	"mutation",
	"subscription"
];
/* istanbul ignore next -- @preserve */
function assertIsObject(obj) {
	if (!isObject(obj)) throw new Error("Not an object");
}
/* istanbul ignore next -- @preserve */
function assertIsProcedureType(obj) {
	if (!procedureTypes.includes(obj)) throw new Error("Invalid procedure type");
}
/* istanbul ignore next -- @preserve */
function assertIsRequestId(obj) {
	if (obj !== null && typeof obj === "number" && isNaN(obj) && typeof obj !== "string") throw new Error("Invalid request id");
}
/* istanbul ignore next -- @preserve */
function assertIsString(obj) {
	if (typeof obj !== "string") throw new Error("Invalid string");
}
/* istanbul ignore next -- @preserve */
function assertIsJSONRPC2OrUndefined(obj) {
	if (typeof obj !== "undefined" && obj !== "2.0") throw new Error("Must be JSONRPC 2.0");
}
/** @public */
function parseTRPCMessage(obj, transformer) {
	assertIsObject(obj);
	const { id, jsonrpc, method, params } = obj;
	assertIsRequestId(id);
	assertIsJSONRPC2OrUndefined(jsonrpc);
	if (method === "subscription.stop") return {
		id,
		jsonrpc,
		method
	};
	assertIsProcedureType(method);
	assertIsObject(params);
	const { input: rawInput, path, lastEventId } = params;
	assertIsString(path);
	if (lastEventId !== void 0) assertIsString(lastEventId);
	const input = transformer.input.deserialize(rawInput);
	return {
		id,
		jsonrpc,
		method,
		params: {
			input,
			path,
			lastEventId
		}
	};
}

//#endregion
//#region ../../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/observable-UMO3vUa_.mjs
var import_asyncToGenerator$2 = __toESM(require_asyncToGenerator(), 1);
/** @public */
function isObservable(x) {
	return typeof x === "object" && x !== null && "subscribe" in x;
}
/**
* @internal
*/
function observableToReadableStream(observable$1, signal) {
	let unsub = null;
	const onAbort = function() {
		unsub === null || unsub === void 0 || unsub.unsubscribe();
		unsub = null;
		signal.removeEventListener("abort", onAbort);
	};
	return new ReadableStream({
		start(controller) {
			unsub = observable$1.subscribe({
				next(data) {
					controller.enqueue({
						ok: true,
						value: data
					});
				},
				error(error) {
					controller.enqueue({
						ok: false,
						error
					});
					controller.close();
				},
				complete() {
					controller.close();
				}
			});
			if (signal.aborted) onAbort();
			else signal.addEventListener("abort", onAbort, { once: true });
		},
		cancel() {
			onAbort();
		}
	});
}
/** @internal */
function observableToAsyncIterable(observable$1, signal) {
	const stream = observableToReadableStream(observable$1, signal);
	const reader = stream.getReader();
	const iterator = {
		next() {
			return (0, import_asyncToGenerator$2.default)(function* () {
				const value = yield reader.read();
				if (value.done) return {
					value: void 0,
					done: true
				};
				const { value: result } = value;
				if (!result.ok) throw result.error;
				return {
					value: result.value,
					done: false
				};
			})();
		},
		return() {
			return (0, import_asyncToGenerator$2.default)(function* () {
				yield reader.cancel();
				return {
					value: void 0,
					done: true
				};
			})();
		}
	};
	return { [Symbol.asyncIterator]() {
		return iterator;
	} };
}

//#endregion
//#region ../../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/resolveResponse-CzlbRpCI.mjs
var import_asyncToGenerator$1 = __toESM(require_asyncToGenerator(), 1);
function parseConnectionParamsFromUnknown(parsed) {
	try {
		if (parsed === null) return null;
		if (!isObject(parsed)) throw new Error("Expected object");
		const nonStringValues = Object.entries(parsed).filter(function([_key, value]) {
			return typeof value !== "string";
		});
		if (nonStringValues.length > 0) throw new Error(`Expected connectionParams to be string values. Got ${nonStringValues.map(function([key, value]) {
			return `${key}: ${typeof value}`;
		}).join(", ")}`);
		return parsed;
	} catch (cause) {
		throw new TRPCError({
			code: "PARSE_ERROR",
			message: "Invalid connection params shape",
			cause
		});
	}
}
function parseConnectionParamsFromString(str) {
	let parsed;
	try {
		parsed = JSON.parse(str);
	} catch (cause) {
		throw new TRPCError({
			code: "PARSE_ERROR",
			message: "Not JSON-parsable query params",
			cause
		});
	}
	return parseConnectionParamsFromUnknown(parsed);
}
var import_objectSpread2$1 = __toESM$1(require_objectSpread2(), 1);
/**
* Memoize a function that takes no arguments
* @internal
*/
function memo(fn) {
	let promise = null;
	const sym = Symbol.for("@trpc/server/http/memo");
	let value = sym;
	return {
		read: function() {
			var _ref3 = (0, import_asyncToGenerator$1.default)(function* () {
				var _promise;
				if (value !== sym) return value;
				(_promise = promise) !== null && _promise !== void 0 || (promise = fn().catch(function(cause) {
					if (cause instanceof TRPCError) throw cause;
					throw new TRPCError({
						code: "BAD_REQUEST",
						message: cause instanceof Error ? cause.message : "Invalid input",
						cause
					});
				}));
				value = yield promise;
				promise = null;
				return value;
			});
			return function read() {
				return _ref3.apply(this, arguments);
			};
		}(),
		result: function() {
			return value !== sym ? value : void 0;
		}
	};
}
const jsonContentTypeHandler = {
	isMatch(req) {
		var _req$headers$get;
		return !!((_req$headers$get = req.headers.get("content-type")) === null || _req$headers$get === void 0 ? void 0 : _req$headers$get.startsWith("application/json"));
	},
	parse(opts) {
		return (0, import_asyncToGenerator$1.default)(function* () {
			var _types$values$next$va;
			const { req } = opts;
			const isBatchCall = opts.searchParams.get("batch") === "1";
			const paths = isBatchCall ? opts.path.split(",") : [opts.path];
			const getInputs = memo((0, import_asyncToGenerator$1.default)(function* () {
				let inputs = void 0;
				if (req.method === "GET") {
					const queryInput = opts.searchParams.get("input");
					if (queryInput) inputs = JSON.parse(queryInput);
				} else inputs = yield req.json();
				if (inputs === void 0) return {};
				if (!isBatchCall) return { 0: opts.router._def._config.transformer.input.deserialize(inputs) };
				if (!isObject(inputs)) throw new TRPCError({
					code: "BAD_REQUEST",
					message: "\"input\" needs to be an object when doing a batch call"
				});
				const acc = {};
				for (const index of paths.keys()) {
					const input = inputs[index];
					if (input !== void 0) acc[index] = opts.router._def._config.transformer.input.deserialize(input);
				}
				return acc;
			}));
			const calls = yield Promise.all(paths.map(function() {
				var _ref5 = (0, import_asyncToGenerator$1.default)(function* (path, index) {
					const procedure = yield getProcedureAtPath(opts.router, path);
					return {
						path,
						procedure,
						getRawInput: function() {
							var _ref4 = (0, import_asyncToGenerator$1.default)(function* () {
								const inputs = yield getInputs.read();
								let input = inputs[index];
								if ((procedure === null || procedure === void 0 ? void 0 : procedure._def.type) === "subscription") {
									var _ref, _opts$headers$get;
									const lastEventId = (_ref = (_opts$headers$get = opts.headers.get("last-event-id")) !== null && _opts$headers$get !== void 0 ? _opts$headers$get : opts.searchParams.get("lastEventId")) !== null && _ref !== void 0 ? _ref : opts.searchParams.get("Last-Event-Id");
									if (lastEventId) if (isObject(input)) input = (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, input), {}, { lastEventId });
									else {
										var _input;
										(_input = input) !== null && _input !== void 0 || (input = { lastEventId });
									}
								}
								return input;
							});
							return function getRawInput() {
								return _ref4.apply(this, arguments);
							};
						}(),
						result: function() {
							var _getInputs$result;
							return (_getInputs$result = getInputs.result()) === null || _getInputs$result === void 0 ? void 0 : _getInputs$result[index];
						}
					};
				});
				return function(_x5, _x6) {
					return _ref5.apply(this, arguments);
				};
			}()));
			const types = new Set(calls.map(function(call) {
				var _call$procedure;
				return (_call$procedure = call.procedure) === null || _call$procedure === void 0 ? void 0 : _call$procedure._def.type;
			}).filter(Boolean));
			/* istanbul ignore if -- @preserve */
			if (types.size > 1) throw new TRPCError({
				code: "BAD_REQUEST",
				message: `Cannot mix procedure types in call: ${Array.from(types).join(", ")}`
			});
			const type = (_types$values$next$va = types.values().next().value) !== null && _types$values$next$va !== void 0 ? _types$values$next$va : "unknown";
			const connectionParamsStr = opts.searchParams.get("connectionParams");
			const info = {
				isBatchCall,
				accept: req.headers.get("trpc-accept"),
				calls,
				type,
				connectionParams: connectionParamsStr === null ? null : parseConnectionParamsFromString(connectionParamsStr),
				signal: req.signal,
				url: opts.url
			};
			return info;
		})();
	}
};
const formDataContentTypeHandler = {
	isMatch(req) {
		var _req$headers$get2;
		return !!((_req$headers$get2 = req.headers.get("content-type")) === null || _req$headers$get2 === void 0 ? void 0 : _req$headers$get2.startsWith("multipart/form-data"));
	},
	parse(opts) {
		return (0, import_asyncToGenerator$1.default)(function* () {
			const { req } = opts;
			if (req.method !== "POST") throw new TRPCError({
				code: "METHOD_NOT_SUPPORTED",
				message: "Only POST requests are supported for multipart/form-data requests"
			});
			const getInputs = memo((0, import_asyncToGenerator$1.default)(function* () {
				const fd = yield req.formData();
				return fd;
			}));
			const procedure = yield getProcedureAtPath(opts.router, opts.path);
			return {
				accept: null,
				calls: [{
					path: opts.path,
					getRawInput: getInputs.read,
					result: getInputs.result,
					procedure
				}],
				isBatchCall: false,
				type: "mutation",
				connectionParams: null,
				signal: req.signal,
				url: opts.url
			};
		})();
	}
};
const octetStreamContentTypeHandler = {
	isMatch(req) {
		var _req$headers$get3;
		return !!((_req$headers$get3 = req.headers.get("content-type")) === null || _req$headers$get3 === void 0 ? void 0 : _req$headers$get3.startsWith("application/octet-stream"));
	},
	parse(opts) {
		return (0, import_asyncToGenerator$1.default)(function* () {
			const { req } = opts;
			if (req.method !== "POST") throw new TRPCError({
				code: "METHOD_NOT_SUPPORTED",
				message: "Only POST requests are supported for application/octet-stream requests"
			});
			const getInputs = memo((0, import_asyncToGenerator$1.default)(function* () {
				return req.body;
			}));
			return {
				calls: [{
					path: opts.path,
					getRawInput: getInputs.read,
					result: getInputs.result,
					procedure: yield getProcedureAtPath(opts.router, opts.path)
				}],
				isBatchCall: false,
				accept: null,
				type: "mutation",
				connectionParams: null,
				signal: req.signal,
				url: opts.url
			};
		})();
	}
};
const handlers = [
	jsonContentTypeHandler,
	formDataContentTypeHandler,
	octetStreamContentTypeHandler
];
function getContentTypeHandler(req) {
	const handler = handlers.find(function(handler$1) {
		return handler$1.isMatch(req);
	});
	if (handler) return handler;
	if (!handler && req.method === "GET") return jsonContentTypeHandler;
	throw new TRPCError({
		code: "UNSUPPORTED_MEDIA_TYPE",
		message: req.headers.has("content-type") ? `Unsupported content-type "${req.headers.get("content-type")}` : "Missing content-type header"
	});
}
function getRequestInfo(_x7) {
	return _getRequestInfo.apply(this, arguments);
}
function _getRequestInfo() {
	_getRequestInfo = (0, import_asyncToGenerator$1.default)(function* (opts) {
		const handler = getContentTypeHandler(opts.req);
		return yield handler.parse(opts);
	});
	return _getRequestInfo.apply(this, arguments);
}
function isAbortError(error) {
	return isObject(error) && error["name"] === "AbortError";
}
function throwAbortError(message = "AbortError") {
	throw new DOMException(message, "AbortError");
}
var import_defineProperty = __toESM$1(require_defineProperty(), 1);
let _Symbol$toStringTag;
/** Memory safe (weakmapped) cache of the ProxyPromise for each Promise,
* which is retained for the lifetime of the original Promise.
*/
const subscribableCache = /* @__PURE__ */ new WeakMap();
/** A NOOP function allowing a consistent interface for settled
* SubscribedPromises (settled promises are not subscribed - they resolve
* immediately). */
const NOOP = function() {};
_Symbol$toStringTag = Symbol.toStringTag;
/**
* Every `Promise<T>` can be shadowed by a single `ProxyPromise<T>`. It is
* created once, cached and reused throughout the lifetime of the Promise. Get a
* Promise's ProxyPromise using `Unpromise.proxy(promise)`.
*
* The `ProxyPromise<T>` attaches handlers to the original `Promise<T>`
* `.then()` and `.catch()` just once. Promises derived from it use a
* subscription- (and unsubscription-) based mechanism that monitors these
* handlers.
*
* Every time you call `.subscribe()`, `.then()` `.catch()` or `.finally()` on a
* `ProxyPromise<T>` it returns a `SubscribedPromise<T>` having an additional
* `unsubscribe()` method. Calling `unsubscribe()` detaches reference chains
* from the original, potentially long-lived Promise, eliminating memory leaks.
*
* This approach can eliminate the memory leaks that otherwise come about from
* repeated `race()` or `any()` calls invoking `.then()` and `.catch()` multiple
* times on the same long-lived native Promise (subscriptions which can never be
* cleaned up).
*
* `Unpromise.race(promises)` is a reference implementation of `Promise.race`
* avoiding memory leaks when using long-lived unsettled Promises.
*
* `Unpromise.any(promises)` is a reference implementation of `Promise.any`
* avoiding memory leaks when using long-lived unsettled Promises.
*
* `Unpromise.resolve(promise)` returns an ephemeral `SubscribedPromise<T>` for
* any given `Promise<T>` facilitating arbitrary async/await patterns. Behind
* the scenes, `resolve` is implemented simply as
* `Unpromise.proxy(promise).subscribe()`. Don't forget to call `.unsubscribe()`
* to tidy up!
*
*/
var Unpromise = class Unpromise$1 {
	constructor(arg) {
		var _this = this;
		(0, import_defineProperty.default)(this, "promise", void 0);
		(0, import_defineProperty.default)(this, "subscribers", []);
		(0, import_defineProperty.default)(this, "settlement", null);
		(0, import_defineProperty.default)(this, _Symbol$toStringTag, "Unpromise");
		if (typeof arg === "function") this.promise = new Promise(arg);
		else this.promise = arg;
		const thenReturn = this.promise.then(function(value) {
			const { subscribers } = _this;
			_this.subscribers = null;
			_this.settlement = {
				status: "fulfilled",
				value
			};
			subscribers === null || subscribers === void 0 || subscribers.forEach(function({ resolve }) {
				resolve(value);
			});
		});
		if ("catch" in thenReturn) thenReturn.catch(function(reason) {
			const { subscribers } = _this;
			_this.subscribers = null;
			_this.settlement = {
				status: "rejected",
				reason
			};
			subscribers === null || subscribers === void 0 || subscribers.forEach(function({ reject }) {
				reject(reason);
			});
		});
	}
	/** Create a promise that mitigates uncontrolled subscription to a long-lived
	* Promise via .then() and .catch() - otherwise a source of memory leaks.
	*
	* The returned promise has an `unsubscribe()` method which can be called when
	* the Promise is no longer being tracked by application logic, and which
	* ensures that there is no reference chain from the original promise to the
	* new one, and therefore no memory leak.
	*
	* If original promise has not yet settled, this adds a new unique promise
	* that listens to then/catch events, along with an `unsubscribe()` method to
	* detach it.
	*
	* If original promise has settled, then creates a new Promise.resolve() or
	* Promise.reject() and provided unsubscribe is a noop.
	*
	* If you call `unsubscribe()` before the returned Promise has settled, it
	* will never settle.
	*/
	subscribe() {
		var _this2 = this;
		let promise;
		let unsubscribe;
		const { settlement } = this;
		if (settlement === null) {
			if (this.subscribers === null) throw new Error("Unpromise settled but still has subscribers");
			const subscriber = withResolvers();
			this.subscribers = listWithMember(this.subscribers, subscriber);
			promise = subscriber.promise;
			unsubscribe = function() {
				if (_this2.subscribers !== null) _this2.subscribers = listWithoutMember(_this2.subscribers, subscriber);
			};
		} else {
			const { status } = settlement;
			if (status === "fulfilled") promise = Promise.resolve(settlement.value);
			else promise = Promise.reject(settlement.reason);
			unsubscribe = NOOP;
		}
		return Object.assign(promise, { unsubscribe });
	}
	/** STANDARD PROMISE METHODS (but returning a SubscribedPromise) */
	then(onfulfilled, onrejected) {
		const subscribed = this.subscribe();
		const { unsubscribe } = subscribed;
		return Object.assign(subscribed.then(onfulfilled, onrejected), { unsubscribe });
	}
	catch(onrejected) {
		const subscribed = this.subscribe();
		const { unsubscribe } = subscribed;
		return Object.assign(subscribed.catch(onrejected), { unsubscribe });
	}
	finally(onfinally) {
		const subscribed = this.subscribe();
		const { unsubscribe } = subscribed;
		return Object.assign(subscribed.finally(onfinally), { unsubscribe });
	}
	/** Unpromise STATIC METHODS */
	/** Create or Retrieve the proxy Unpromise (a re-used Unpromise for the VM lifetime
	* of the provided Promise reference) */
	static proxy(promise) {
		const cached = Unpromise$1.getSubscribablePromise(promise);
		return typeof cached !== "undefined" ? cached : Unpromise$1.createSubscribablePromise(promise);
	}
	/** Create and store an Unpromise keyed by an original Promise. */
	static createSubscribablePromise(promise) {
		const created = new Unpromise$1(promise);
		subscribableCache.set(promise, created);
		subscribableCache.set(created, created);
		return created;
	}
	/** Retrieve a previously-created Unpromise keyed by an original Promise. */
	static getSubscribablePromise(promise) {
		return subscribableCache.get(promise);
	}
	/** Promise STATIC METHODS */
	/** Lookup the Unpromise for this promise, and derive a SubscribedPromise from
	* it (that can be later unsubscribed to eliminate Memory leaks) */
	static resolve(value) {
		const promise = typeof value === "object" && value !== null && "then" in value && typeof value.then === "function" ? value : Promise.resolve(value);
		return Unpromise$1.proxy(promise).subscribe();
	}
	static any(values) {
		return (0, import_asyncToGenerator$1.default)(function* () {
			const valuesArray = Array.isArray(values) ? values : [...values];
			const subscribedPromises = valuesArray.map(Unpromise$1.resolve);
			try {
				return yield Promise.any(subscribedPromises);
			} finally {
				subscribedPromises.forEach(function({ unsubscribe }) {
					unsubscribe();
				});
			}
		})();
	}
	static race(values) {
		return (0, import_asyncToGenerator$1.default)(function* () {
			const valuesArray = Array.isArray(values) ? values : [...values];
			const subscribedPromises = valuesArray.map(Unpromise$1.resolve);
			try {
				return yield Promise.race(subscribedPromises);
			} finally {
				subscribedPromises.forEach(function({ unsubscribe }) {
					unsubscribe();
				});
			}
		})();
	}
	/** Create a race of SubscribedPromises that will fulfil to a single winning
	* Promise (in a 1-Tuple). Eliminates memory leaks from long-lived promises
	* accumulating .then() and .catch() subscribers. Allows simple logic to
	* consume the result, like...
	* ```ts
	* const [ winner ] = await Unpromise.race([ promiseA, promiseB ]);
	* if(winner === promiseB){
	*   const result = await promiseB;
	*   // do the thing
	* }
	* ```
	* */
	static raceReferences(promises) {
		return (0, import_asyncToGenerator$1.default)(function* () {
			const selfPromises = promises.map(resolveSelfTuple);
			try {
				return yield Promise.race(selfPromises);
			} finally {
				for (const promise of selfPromises) promise.unsubscribe();
			}
		})();
	}
};
/** Promises a 1-tuple containing the original promise when it resolves. Allows
* awaiting the eventual Promise ***reference*** (easy to destructure and
* exactly compare with ===). Avoids resolving to the Promise ***value*** (which
* may be ambiguous and therefore hard to identify as the winner of a race).
* You can call unsubscribe on the Promise to mitigate memory leaks.
* */
function resolveSelfTuple(promise) {
	return Unpromise.proxy(promise).then(function() {
		return [promise];
	});
}
/** VENDORED (Future) PROMISE UTILITIES */
/** Reference implementation of https://github.com/tc39/proposal-promise-with-resolvers */
function withResolvers() {
	let resolve;
	let reject;
	const promise = new Promise(function(_resolve, _reject) {
		resolve = _resolve;
		reject = _reject;
	});
	return {
		promise,
		resolve,
		reject
	};
}
/** IMMUTABLE LIST OPERATIONS */
function listWithMember(arr, member) {
	return [...arr, member];
}
function listWithoutIndex(arr, index) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
function listWithoutMember(arr, member) {
	const index = arr.indexOf(member);
	if (index !== -1) return listWithoutIndex(arr, index);
	return arr;
}
var _Symbol, _Symbol$dispose, _Symbol2, _Symbol2$asyncDispose;
(_Symbol$dispose = (_Symbol = Symbol).dispose) !== null && _Symbol$dispose !== void 0 || (_Symbol.dispose = Symbol());
(_Symbol2$asyncDispose = (_Symbol2 = Symbol).asyncDispose) !== null && _Symbol2$asyncDispose !== void 0 || (_Symbol2.asyncDispose = Symbol());
/**
* Takes a value and a dispose function and returns a new object that implements the Disposable interface.
* The returned object is the original value augmented with a Symbol.dispose method.
* @param thing The value to make disposable
* @param dispose Function to call when disposing the resource
* @returns The original value with Symbol.dispose method added
*/
function makeResource(thing, dispose) {
	const it = thing;
	const existing = it[Symbol.dispose];
	it[Symbol.dispose] = function() {
		dispose();
		existing === null || existing === void 0 || existing();
	};
	return it;
}
/**
* Takes a value and an async dispose function and returns a new object that implements the AsyncDisposable interface.
* The returned object is the original value augmented with a Symbol.asyncDispose method.
* @param thing The value to make async disposable
* @param dispose Async function to call when disposing the resource
* @returns The original value with Symbol.asyncDispose method added
*/
function makeAsyncResource(thing, dispose) {
	const it = thing;
	const existing = it[Symbol.asyncDispose];
	it[Symbol.asyncDispose] = (0, import_asyncToGenerator$1.default)(function* () {
		yield dispose();
		yield existing === null || existing === void 0 ? void 0 : existing();
	});
	return it;
}
const disposablePromiseTimerResult = Symbol();
function timerResource(ms) {
	let timer = null;
	return makeResource({ start() {
		if (timer) throw new Error("Timer already started");
		const promise = new Promise(function(resolve) {
			timer = setTimeout(function() {
				return resolve(disposablePromiseTimerResult);
			}, ms);
		});
		return promise;
	} }, function() {
		if (timer) clearTimeout(timer);
	});
}
var require_usingCtx = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js"(exports, module) {
	function _usingCtx() {
		var r = "function" == typeof SuppressedError ? SuppressedError : function(r$1, e$1) {
			var n$1 = Error();
			return n$1.name = "SuppressedError", n$1.error = r$1, n$1.suppressed = e$1, n$1;
		}, e = {}, n = [];
		function using(r$1, e$1) {
			if (null != e$1) {
				if (Object(e$1) !== e$1) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
				if (r$1) var o = e$1[Symbol.asyncDispose || Symbol["for"]("Symbol.asyncDispose")];
				if (void 0 === o && (o = e$1[Symbol.dispose || Symbol["for"]("Symbol.dispose")], r$1)) var t = o;
				if ("function" != typeof o) throw new TypeError("Object is not disposable.");
				t && (o = function o$1() {
					try {
						t.call(e$1);
					} catch (r$2) {
						return Promise.reject(r$2);
					}
				}), n.push({
					v: e$1,
					d: o,
					a: r$1
				});
			} else r$1 && n.push({
				d: e$1,
				a: r$1
			});
			return e$1;
		}
		return {
			e,
			u: using.bind(null, !1),
			a: using.bind(null, !0),
			d: function d() {
				var o, t = this.e, s = 0;
				function next() {
					for (; o = n.pop();) try {
						if (!o.a && 1 === s) return s = 0, n.push(o), Promise.resolve().then(next);
						if (o.d) {
							var r$1 = o.d.call(o.v);
							if (o.a) return s |= 2, Promise.resolve(r$1).then(next, err);
						} else s |= 1;
					} catch (r$2) {
						return err(r$2);
					}
					if (1 === s) return t !== e ? Promise.reject(t) : Promise.resolve();
					if (t !== e) throw t;
				}
				function err(n$1) {
					return t = t !== e ? new r(n$1, t) : n$1, next();
				}
				return next();
			}
		};
	}
	module.exports = _usingCtx, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_OverloadYield = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/OverloadYield.js"(exports, module) {
	function _OverloadYield(e, d) {
		this.v = e, this.k = d;
	}
	module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_awaitAsyncGenerator = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js"(exports, module) {
	var OverloadYield$2 = require_OverloadYield();
	function _awaitAsyncGenerator$5(e) {
		return new OverloadYield$2(e, 0);
	}
	module.exports = _awaitAsyncGenerator$5, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var require_wrapAsyncGenerator = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js"(exports, module) {
	var OverloadYield$1 = require_OverloadYield();
	function _wrapAsyncGenerator$6(e) {
		return function() {
			return new AsyncGenerator(e.apply(this, arguments));
		};
	}
	function AsyncGenerator(e) {
		var r, t;
		function resume(r$1, t$1) {
			try {
				var n = e[r$1](t$1), o = n.value, u = o instanceof OverloadYield$1;
				Promise.resolve(u ? o.v : o).then(function(t$2) {
					if (u) {
						var i = "return" === r$1 ? "return" : "next";
						if (!o.k || t$2.done) return resume(i, t$2);
						t$2 = e[i](t$2).value;
					}
					settle(n.done ? "return" : "normal", t$2);
				}, function(e$1) {
					resume("throw", e$1);
				});
			} catch (e$1) {
				settle("throw", e$1);
			}
		}
		function settle(e$1, n) {
			switch (e$1) {
				case "return":
					r.resolve({
						value: n,
						done: !0
					});
					break;
				case "throw":
					r.reject(n);
					break;
				default: r.resolve({
					value: n,
					done: !1
				});
			}
			(r = r.next) ? resume(r.key, r.arg) : t = null;
		}
		this._invoke = function(e$1, n) {
			return new Promise(function(o, u) {
				var i = {
					key: e$1,
					arg: n,
					resolve: o,
					reject: u,
					next: null
				};
				t ? t = t.next = i : (r = t = i, resume(e$1, n));
			});
		}, "function" != typeof e["return"] && (this["return"] = void 0);
	}
	AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
		return this;
	}, AsyncGenerator.prototype.next = function(e) {
		return this._invoke("next", e);
	}, AsyncGenerator.prototype["throw"] = function(e) {
		return this._invoke("throw", e);
	}, AsyncGenerator.prototype["return"] = function(e) {
		return this._invoke("return", e);
	};
	module.exports = _wrapAsyncGenerator$6, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var import_usingCtx$4 = __toESM$1(require_usingCtx(), 1);
var import_awaitAsyncGenerator$4 = __toESM$1(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$5 = __toESM$1(require_wrapAsyncGenerator(), 1);
function iteratorResource(iterable) {
	const iterator = iterable[Symbol.asyncIterator]();
	if (iterator[Symbol.asyncDispose]) return iterator;
	return makeAsyncResource(iterator, (0, import_asyncToGenerator$1.default)(function* () {
		var _iterator$return;
		yield (_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator);
	}));
}
/**
* Derives a new {@link AsyncGenerator} based on {@link iterable}, that automatically aborts after the specified duration.
*/
function withMaxDuration(_x, _x2) {
	return _withMaxDuration.apply(this, arguments);
}
function _withMaxDuration() {
	_withMaxDuration = (0, import_wrapAsyncGenerator$5.default)(function* (iterable, opts) {
		try {
			var _usingCtx$1 = (0, import_usingCtx$4.default)();
			const iterator = _usingCtx$1.a(iteratorResource(iterable));
			const timer = _usingCtx$1.u(timerResource(opts.maxDurationMs));
			const timerPromise = timer.start();
			let result;
			while (true) {
				result = yield (0, import_awaitAsyncGenerator$4.default)(Unpromise.race([iterator.next(), timerPromise]));
				if (result === disposablePromiseTimerResult) throwAbortError();
				if (result.done) return result;
				yield result.value;
				result = null;
			}
		} catch (_) {
			_usingCtx$1.e = _;
		} finally {
			yield (0, import_awaitAsyncGenerator$4.default)(_usingCtx$1.d());
		}
	});
	return _withMaxDuration.apply(this, arguments);
}
/**
* Derives a new {@link AsyncGenerator} based of {@link iterable}, that yields its first
* {@link count} values. Then, a grace period of {@link gracePeriodMs} is started in which further
* values may still come through. After this period, the generator aborts.
*/
function takeWithGrace(_x3, _x4) {
	return _takeWithGrace.apply(this, arguments);
}
function _takeWithGrace() {
	_takeWithGrace = (0, import_wrapAsyncGenerator$5.default)(function* (iterable, opts) {
		try {
			var _usingCtx3 = (0, import_usingCtx$4.default)();
			const iterator = _usingCtx3.a(iteratorResource(iterable));
			let result;
			const timer = _usingCtx3.u(timerResource(opts.gracePeriodMs));
			let count = opts.count;
			let timerPromise = new Promise(function() {});
			while (true) {
				result = yield (0, import_awaitAsyncGenerator$4.default)(Unpromise.race([iterator.next(), timerPromise]));
				if (result === disposablePromiseTimerResult) throwAbortError();
				if (result.done) return result.value;
				yield result.value;
				if (--count === 0) timerPromise = timer.start();
				result = null;
			}
		} catch (_) {
			_usingCtx3.e = _;
		} finally {
			yield (0, import_awaitAsyncGenerator$4.default)(_usingCtx3.d());
		}
	});
	return _takeWithGrace.apply(this, arguments);
}
function createDeferred() {
	let resolve;
	let reject;
	const promise = new Promise(function(res, rej) {
		resolve = res;
		reject = rej;
	});
	return {
		promise,
		resolve,
		reject
	};
}
var import_usingCtx$3 = __toESM$1(require_usingCtx(), 1);
var import_awaitAsyncGenerator$3 = __toESM$1(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$4 = __toESM$1(require_wrapAsyncGenerator(), 1);
function createManagedIterator(iterable, onResult) {
	const iterator = iterable[Symbol.asyncIterator]();
	let state = "idle";
	function cleanup() {
		state = "done";
		onResult = function() {};
	}
	function pull() {
		if (state !== "idle") return;
		state = "pending";
		const next = iterator.next();
		next.then(function(result) {
			if (result.done) {
				state = "done";
				onResult({
					status: "return",
					value: result.value
				});
				cleanup();
				return;
			}
			state = "idle";
			onResult({
				status: "yield",
				value: result.value
			});
		}).catch(function(cause) {
			onResult({
				status: "error",
				error: cause
			});
			cleanup();
		});
	}
	return {
		pull,
		destroy: function() {
			var _ref6 = (0, import_asyncToGenerator$1.default)(function* () {
				var _iterator$return;
				cleanup();
				yield (_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator);
			});
			return function destroy() {
				return _ref6.apply(this, arguments);
			};
		}()
	};
}
/**
* Creates a new async iterable that merges multiple async iterables into a single stream.
* Values from the input iterables are yielded in the order they resolve, similar to Promise.race().
*
* New iterables can be added dynamically using the returned {@link MergedAsyncIterables.add} method, even after iteration has started.
*
* If any of the input iterables throws an error, that error will be propagated through the merged stream.
* Other iterables will not continue to be processed.
*
* @template TYield The type of values yielded by the input iterables
*/
function mergeAsyncIterables() {
	let state = "idle";
	let flushSignal = createDeferred();
	/**
	* used while {@link state} is `idle`
	*/
	const iterables = [];
	/**
	* used while {@link state} is `pending`
	*/
	const iterators = /* @__PURE__ */ new Set();
	const buffer = [];
	function initIterable(iterable) {
		if (state !== "pending") return;
		const iterator = createManagedIterator(iterable, function(result) {
			if (state !== "pending") return;
			switch (result.status) {
				case "yield":
					buffer.push([iterator, result]);
					break;
				case "return":
					iterators.delete(iterator);
					break;
				case "error":
					buffer.push([iterator, result]);
					iterators.delete(iterator);
					break;
			}
			flushSignal.resolve();
		});
		iterators.add(iterator);
		iterator.pull();
	}
	return {
		add(iterable) {
			switch (state) {
				case "idle":
					iterables.push(iterable);
					break;
				case "pending":
					initIterable(iterable);
					break;
				case "done": break;
			}
		},
		[Symbol.asyncIterator]() {
			return (0, import_wrapAsyncGenerator$4.default)(function* () {
				try {
					var _usingCtx$1 = (0, import_usingCtx$3.default)();
					if (state !== "idle") throw new Error("Cannot iterate twice");
					state = "pending";
					const _finally = _usingCtx$1.a(makeAsyncResource({}, (0, import_asyncToGenerator$1.default)(function* () {
						state = "done";
						const errors = [];
						yield Promise.all(Array.from(iterators.values()).map(function() {
							var _ref7 = (0, import_asyncToGenerator$1.default)(function* (it) {
								try {
									yield it.destroy();
								} catch (cause) {
									errors.push(cause);
								}
							});
							return function(_x8) {
								return _ref7.apply(this, arguments);
							};
						}()));
						buffer.length = 0;
						iterators.clear();
						flushSignal.resolve();
						if (errors.length > 0) throw new AggregateError(errors);
					})));
					while (iterables.length > 0) initIterable(iterables.shift());
					while (iterators.size > 0) {
						yield (0, import_awaitAsyncGenerator$3.default)(flushSignal.promise);
						while (buffer.length > 0) {
							const [iterator, result] = buffer.shift();
							switch (result.status) {
								case "yield":
									yield result.value;
									iterator.pull();
									break;
								case "error": throw result.error;
							}
						}
						flushSignal = createDeferred();
					}
				} catch (_) {
					_usingCtx$1.e = _;
				} finally {
					yield (0, import_awaitAsyncGenerator$3.default)(_usingCtx$1.d());
				}
			})();
		}
	};
}
/**
* Creates a ReadableStream from an AsyncIterable.
*
* @param iterable - The source AsyncIterable to stream from
* @returns A ReadableStream that yields values from the AsyncIterable
*/
function readableStreamFrom(iterable) {
	const iterator = iterable[Symbol.asyncIterator]();
	return new ReadableStream({
		cancel() {
			return (0, import_asyncToGenerator$1.default)(function* () {
				var _iterator$return;
				yield (_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator);
			})();
		},
		pull(controller) {
			return (0, import_asyncToGenerator$1.default)(function* () {
				const result = yield iterator.next();
				if (result.done) {
					controller.close();
					return;
				}
				controller.enqueue(result.value);
			})();
		}
	});
}
var import_usingCtx$2 = __toESM$1(require_usingCtx(), 1);
var import_awaitAsyncGenerator$2 = __toESM$1(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$3 = __toESM$1(require_wrapAsyncGenerator(), 1);
const PING_SYM = Symbol("ping");
/**
* Derives a new {@link AsyncGenerator} based of {@link iterable}, that yields {@link PING_SYM}
* whenever no value has been yielded for {@link pingIntervalMs}.
*/
function withPing(_x, _x2) {
	return _withPing.apply(this, arguments);
}
function _withPing() {
	_withPing = (0, import_wrapAsyncGenerator$3.default)(function* (iterable, pingIntervalMs) {
		try {
			var _usingCtx$1 = (0, import_usingCtx$2.default)();
			const iterator = _usingCtx$1.a(iteratorResource(iterable));
			let result;
			let nextPromise = iterator.next();
			while (true) try {
				var _usingCtx3 = (0, import_usingCtx$2.default)();
				const pingPromise = _usingCtx3.u(timerResource(pingIntervalMs));
				result = yield (0, import_awaitAsyncGenerator$2.default)(Unpromise.race([nextPromise, pingPromise.start()]));
				if (result === disposablePromiseTimerResult) {
					yield PING_SYM;
					continue;
				}
				if (result.done) return result.value;
				nextPromise = iterator.next();
				yield result.value;
				result = null;
			} catch (_) {
				_usingCtx3.e = _;
			} finally {
				_usingCtx3.d();
			}
		} catch (_) {
			_usingCtx$1.e = _;
		} finally {
			yield (0, import_awaitAsyncGenerator$2.default)(_usingCtx$1.d());
		}
	});
	return _withPing.apply(this, arguments);
}
var require_asyncIterator = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(exports, module) {
	function _asyncIterator$2(r) {
		var n, t, o, e = 2;
		for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) {
			if (t && null != (n = r[t])) return n.call(r);
			if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
			t = "@@asyncIterator", o = "@@iterator";
		}
		throw new TypeError("Object is not async iterable");
	}
	function AsyncFromSyncIterator(r) {
		function AsyncFromSyncIteratorContinuation(r$1) {
			if (Object(r$1) !== r$1) return Promise.reject(/* @__PURE__ */ new TypeError(r$1 + " is not an object."));
			var n = r$1.done;
			return Promise.resolve(r$1.value).then(function(r$2) {
				return {
					value: r$2,
					done: n
				};
			});
		}
		return AsyncFromSyncIterator = function AsyncFromSyncIterator$1(r$1) {
			this.s = r$1, this.n = r$1.next;
		}, AsyncFromSyncIterator.prototype = {
			s: null,
			n: null,
			next: function next() {
				return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
			},
			"return": function _return(r$1) {
				var n = this.s["return"];
				return void 0 === n ? Promise.resolve({
					value: r$1,
					done: !0
				}) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
			},
			"throw": function _throw(r$1) {
				var n = this.s["return"];
				return void 0 === n ? Promise.reject(r$1) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
			}
		}, new AsyncFromSyncIterator(r);
	}
	module.exports = _asyncIterator$2, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var import_awaitAsyncGenerator$1 = __toESM$1(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$2 = __toESM$1(require_wrapAsyncGenerator(), 1);
var import_usingCtx$1 = __toESM$1(require_usingCtx(), 1);
var import_asyncIterator$1 = __toESM$1(require_asyncIterator(), 1);
function isPlainObject(value) {
	return Object.prototype.toString.call(value) === "[object Object]";
}
const CHUNK_VALUE_TYPE_PROMISE = 0;
const CHUNK_VALUE_TYPE_ASYNC_ITERABLE = 1;
const PROMISE_STATUS_FULFILLED = 0;
const PROMISE_STATUS_REJECTED = 1;
const ASYNC_ITERABLE_STATUS_RETURN = 0;
const ASYNC_ITERABLE_STATUS_YIELD = 1;
const ASYNC_ITERABLE_STATUS_ERROR = 2;
function isPromise(value) {
	return (isObject(value) || isFunction(value)) && typeof (value === null || value === void 0 ? void 0 : value["then"]) === "function" && typeof (value === null || value === void 0 ? void 0 : value["catch"]) === "function";
}
var MaxDepthError = class extends Error {
	constructor(path) {
		super("Max depth reached at path: " + path.join("."));
		this.path = path;
	}
};
function createBatchStreamProducer(_x3) {
	return _createBatchStreamProducer.apply(this, arguments);
}
function _createBatchStreamProducer() {
	_createBatchStreamProducer = (0, import_wrapAsyncGenerator$2.default)(function* (opts) {
		const { data } = opts;
		let counter = 0;
		const placeholder = 0;
		const mergedIterables = mergeAsyncIterables();
		function registerAsync(callback) {
			const idx = counter++;
			const iterable$1 = callback(idx);
			mergedIterables.add(iterable$1);
			return idx;
		}
		function encodePromise(promise, path) {
			return registerAsync(/* @__PURE__ */ function() {
				var _ref = (0, import_wrapAsyncGenerator$2.default)(function* (idx) {
					const error = checkMaxDepth(path);
					if (error) {
						promise.catch(function(cause) {
							var _opts$onError;
							(_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, {
								error: cause,
								path
							});
						});
						promise = Promise.reject(error);
					}
					try {
						const next = yield (0, import_awaitAsyncGenerator$1.default)(promise);
						yield [
							idx,
							PROMISE_STATUS_FULFILLED,
							encode(next, path)
						];
					} catch (cause) {
						var _opts$onError2, _opts$formatError;
						(_opts$onError2 = opts.onError) === null || _opts$onError2 === void 0 || _opts$onError2.call(opts, {
							error: cause,
							path
						});
						yield [
							idx,
							PROMISE_STATUS_REJECTED,
							(_opts$formatError = opts.formatError) === null || _opts$formatError === void 0 ? void 0 : _opts$formatError.call(opts, {
								error: cause,
								path
							})
						];
					}
				});
				return function(_x) {
					return _ref.apply(this, arguments);
				};
			}());
		}
		function encodeAsyncIterable(iterable$1, path) {
			return registerAsync(/* @__PURE__ */ function() {
				var _ref2 = (0, import_wrapAsyncGenerator$2.default)(function* (idx) {
					try {
						var _usingCtx$1 = (0, import_usingCtx$1.default)();
						const error = checkMaxDepth(path);
						if (error) throw error;
						const iterator = _usingCtx$1.a(iteratorResource(iterable$1));
						try {
							while (true) {
								const next = yield (0, import_awaitAsyncGenerator$1.default)(iterator.next());
								if (next.done) {
									yield [
										idx,
										ASYNC_ITERABLE_STATUS_RETURN,
										encode(next.value, path)
									];
									break;
								}
								yield [
									idx,
									ASYNC_ITERABLE_STATUS_YIELD,
									encode(next.value, path)
								];
							}
						} catch (cause) {
							var _opts$onError3, _opts$formatError2;
							(_opts$onError3 = opts.onError) === null || _opts$onError3 === void 0 || _opts$onError3.call(opts, {
								error: cause,
								path
							});
							yield [
								idx,
								ASYNC_ITERABLE_STATUS_ERROR,
								(_opts$formatError2 = opts.formatError) === null || _opts$formatError2 === void 0 ? void 0 : _opts$formatError2.call(opts, {
									error: cause,
									path
								})
							];
						}
					} catch (_) {
						_usingCtx$1.e = _;
					} finally {
						yield (0, import_awaitAsyncGenerator$1.default)(_usingCtx$1.d());
					}
				});
				return function(_x2) {
					return _ref2.apply(this, arguments);
				};
			}());
		}
		function checkMaxDepth(path) {
			if (opts.maxDepth && path.length > opts.maxDepth) return new MaxDepthError(path);
			return null;
		}
		function encodeAsync(value, path) {
			if (isPromise(value)) return [CHUNK_VALUE_TYPE_PROMISE, encodePromise(value, path)];
			if (isAsyncIterable(value)) {
				if (opts.maxDepth && path.length >= opts.maxDepth) throw new Error("Max depth reached");
				return [CHUNK_VALUE_TYPE_ASYNC_ITERABLE, encodeAsyncIterable(value, path)];
			}
			return null;
		}
		function encode(value, path) {
			if (value === void 0) return [[]];
			const reg = encodeAsync(value, path);
			if (reg) return [[placeholder], [null, ...reg]];
			if (!isPlainObject(value)) return [[value]];
			const newObj = {};
			const asyncValues = [];
			for (const [key, item] of Object.entries(value)) {
				const transformed = encodeAsync(item, [...path, key]);
				if (!transformed) {
					newObj[key] = item;
					continue;
				}
				newObj[key] = placeholder;
				asyncValues.push([key, ...transformed]);
			}
			return [[newObj], ...asyncValues];
		}
		const newHead = {};
		for (const [key, item] of Object.entries(data)) newHead[key] = encode(item, [key]);
		yield newHead;
		let iterable = mergedIterables;
		if (opts.pingMs) iterable = withPing(mergedIterables, opts.pingMs);
		var _iteratorAbruptCompletion = false;
		var _didIteratorError = false;
		var _iteratorError;
		try {
			for (var _iterator = (0, import_asyncIterator$1.default)(iterable), _step; _iteratorAbruptCompletion = !(_step = yield (0, import_awaitAsyncGenerator$1.default)(_iterator.next())).done; _iteratorAbruptCompletion = false) {
				const value = _step.value;
				yield value;
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (_iteratorAbruptCompletion && _iterator.return != null) yield (0, import_awaitAsyncGenerator$1.default)(_iterator.return());
			} finally {
				if (_didIteratorError) throw _iteratorError;
			}
		}
	});
	return _createBatchStreamProducer.apply(this, arguments);
}
/**
* JSON Lines stream producer
* @see https://jsonlines.org/
*/
function jsonlStreamProducer(opts) {
	let stream = readableStreamFrom(createBatchStreamProducer(opts));
	const { serialize } = opts;
	if (serialize) stream = stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		if (chunk === PING_SYM) controller.enqueue(PING_SYM);
		else controller.enqueue(serialize(chunk));
	} }));
	return stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		if (chunk === PING_SYM) controller.enqueue(" ");
		else controller.enqueue(JSON.stringify(chunk) + "\n");
	} })).pipeThrough(new TextEncoderStream());
}
var require_asyncGeneratorDelegate = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncGeneratorDelegate.js"(exports, module) {
	var OverloadYield = require_OverloadYield();
	function _asyncGeneratorDelegate$1(t) {
		var e = {}, n = !1;
		function pump(e$1, r) {
			return n = !0, r = new Promise(function(n$1) {
				n$1(t[e$1](r));
			}), {
				done: !1,
				value: new OverloadYield(r, 1)
			};
		}
		return e["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function() {
			return this;
		}, e.next = function(t$1) {
			return n ? (n = !1, t$1) : pump("next", t$1);
		}, "function" == typeof t["throw"] && (e["throw"] = function(t$1) {
			if (n) throw n = !1, t$1;
			return pump("throw", t$1);
		}), "function" == typeof t["return"] && (e["return"] = function(t$1) {
			return n ? (n = !1, t$1) : pump("return", t$1);
		}), e;
	}
	module.exports = _asyncGeneratorDelegate$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
} });
var import_asyncIterator = __toESM$1(require_asyncIterator(), 1);
var import_awaitAsyncGenerator = __toESM$1(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$1 = __toESM$1(require_wrapAsyncGenerator(), 1);
var import_asyncGeneratorDelegate = __toESM$1(require_asyncGeneratorDelegate(), 1);
var import_usingCtx = __toESM$1(require_usingCtx(), 1);
const PING_EVENT = "ping";
const SERIALIZED_ERROR_EVENT = "serialized-error";
const CONNECTED_EVENT = "connected";
const RETURN_EVENT = "return";
/**
*
* @see https://html.spec.whatwg.org/multipage/server-sent-events.html
*/
function sseStreamProducer(opts) {
	var _opts$ping$enabled, _opts$ping, _opts$ping$intervalMs, _opts$ping2, _opts$client;
	const { serialize = identity } = opts;
	const ping = {
		enabled: (_opts$ping$enabled = (_opts$ping = opts.ping) === null || _opts$ping === void 0 ? void 0 : _opts$ping.enabled) !== null && _opts$ping$enabled !== void 0 ? _opts$ping$enabled : false,
		intervalMs: (_opts$ping$intervalMs = (_opts$ping2 = opts.ping) === null || _opts$ping2 === void 0 ? void 0 : _opts$ping2.intervalMs) !== null && _opts$ping$intervalMs !== void 0 ? _opts$ping$intervalMs : 1e3
	};
	const client = (_opts$client = opts.client) !== null && _opts$client !== void 0 ? _opts$client : {};
	if (ping.enabled && client.reconnectAfterInactivityMs && ping.intervalMs > client.reconnectAfterInactivityMs) throw new Error(`Ping interval must be less than client reconnect interval to prevent unnecessary reconnection - ping.intervalMs: ${ping.intervalMs} client.reconnectAfterInactivityMs: ${client.reconnectAfterInactivityMs}`);
	function generator() {
		return _generator.apply(this, arguments);
	}
	function _generator() {
		_generator = (0, import_wrapAsyncGenerator$1.default)(function* () {
			yield {
				event: CONNECTED_EVENT,
				data: JSON.stringify(client)
			};
			let iterable = opts.data;
			if (opts.emitAndEndImmediately) iterable = takeWithGrace(iterable, {
				count: 1,
				gracePeriodMs: 1
			});
			if (opts.maxDurationMs && opts.maxDurationMs > 0 && opts.maxDurationMs !== Infinity) iterable = withMaxDuration(iterable, { maxDurationMs: opts.maxDurationMs });
			if (ping.enabled && ping.intervalMs !== Infinity && ping.intervalMs > 0) iterable = withPing(iterable, ping.intervalMs);
			let value;
			let chunk;
			var _iteratorAbruptCompletion = false;
			var _didIteratorError = false;
			var _iteratorError;
			try {
				for (var _iterator = (0, import_asyncIterator.default)(iterable), _step; _iteratorAbruptCompletion = !(_step = yield (0, import_awaitAsyncGenerator.default)(_iterator.next())).done; _iteratorAbruptCompletion = false) {
					value = _step.value;
					{
						if (value === PING_SYM) {
							yield {
								event: PING_EVENT,
								data: ""
							};
							continue;
						}
						chunk = isTrackedEnvelope(value) ? {
							id: value[0],
							data: value[1]
						} : { data: value };
						chunk.data = JSON.stringify(serialize(chunk.data));
						yield chunk;
						value = null;
						chunk = null;
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (_iteratorAbruptCompletion && _iterator.return != null) yield (0, import_awaitAsyncGenerator.default)(_iterator.return());
				} finally {
					if (_didIteratorError) throw _iteratorError;
				}
			}
		});
		return _generator.apply(this, arguments);
	}
	function generatorWithErrorHandling() {
		return _generatorWithErrorHandling.apply(this, arguments);
	}
	function _generatorWithErrorHandling() {
		_generatorWithErrorHandling = (0, import_wrapAsyncGenerator$1.default)(function* () {
			try {
				yield* (0, import_asyncGeneratorDelegate.default)((0, import_asyncIterator.default)(generator()));
				yield {
					event: RETURN_EVENT,
					data: ""
				};
			} catch (cause) {
				var _opts$formatError, _opts$formatError2;
				if (isAbortError(cause)) return;
				const error = getTRPCErrorFromUnknown(cause);
				const data = (_opts$formatError = (_opts$formatError2 = opts.formatError) === null || _opts$formatError2 === void 0 ? void 0 : _opts$formatError2.call(opts, { error })) !== null && _opts$formatError !== void 0 ? _opts$formatError : null;
				yield {
					event: SERIALIZED_ERROR_EVENT,
					data: JSON.stringify(serialize(data))
				};
			}
		});
		return _generatorWithErrorHandling.apply(this, arguments);
	}
	const stream = readableStreamFrom(generatorWithErrorHandling());
	return stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		if ("event" in chunk) controller.enqueue(`event: ${chunk.event}\n`);
		if ("data" in chunk) controller.enqueue(`data: ${chunk.data}\n`);
		if ("id" in chunk) controller.enqueue(`id: ${chunk.id}\n`);
		if ("comment" in chunk) controller.enqueue(`: ${chunk.comment}\n`);
		controller.enqueue("\n\n");
	} })).pipeThrough(new TextEncoderStream());
}
const sseHeaders = {
	"Content-Type": "text/event-stream",
	"Cache-Control": "no-cache, no-transform",
	"X-Accel-Buffering": "no",
	Connection: "keep-alive"
};
var import_wrapAsyncGenerator = __toESM$1(require_wrapAsyncGenerator(), 1);
var import_objectSpread2$2 = __toESM$1(require_objectSpread2(), 1);
function errorToAsyncIterable(err) {
	return run((0, import_wrapAsyncGenerator.default)(function* () {
		throw err;
	}));
}
const TYPE_ACCEPTED_METHOD_MAP = {
	mutation: ["POST"],
	query: ["GET"],
	subscription: ["GET"]
};
const TYPE_ACCEPTED_METHOD_MAP_WITH_METHOD_OVERRIDE = {
	mutation: ["POST"],
	query: ["GET", "POST"],
	subscription: ["GET", "POST"]
};
function initResponse(initOpts) {
	var _responseMeta, _info$calls$find$proc, _info$calls$find;
	const { ctx, info, responseMeta, untransformedJSON, errors = [], headers } = initOpts;
	let status = untransformedJSON ? getHTTPStatusCode(untransformedJSON) : 200;
	const eagerGeneration = !untransformedJSON;
	const data = eagerGeneration ? [] : Array.isArray(untransformedJSON) ? untransformedJSON : [untransformedJSON];
	const meta = (_responseMeta = responseMeta === null || responseMeta === void 0 ? void 0 : responseMeta({
		ctx,
		info,
		paths: info === null || info === void 0 ? void 0 : info.calls.map(function(call) {
			return call.path;
		}),
		data,
		errors,
		eagerGeneration,
		type: (_info$calls$find$proc = info === null || info === void 0 || (_info$calls$find = info.calls.find(function(call) {
			var _call$procedure;
			return (_call$procedure = call.procedure) === null || _call$procedure === void 0 ? void 0 : _call$procedure._def.type;
		})) === null || _info$calls$find === void 0 || (_info$calls$find = _info$calls$find.procedure) === null || _info$calls$find === void 0 ? void 0 : _info$calls$find._def.type) !== null && _info$calls$find$proc !== void 0 ? _info$calls$find$proc : "unknown"
	})) !== null && _responseMeta !== void 0 ? _responseMeta : {};
	if (meta.headers) {
		if (meta.headers instanceof Headers) for (const [key, value] of meta.headers.entries()) headers.append(key, value);
		else
 /**
		* @deprecated, delete in v12
		*/
		for (const [key, value] of Object.entries(meta.headers)) if (Array.isArray(value)) for (const v of value) headers.append(key, v);
		else if (typeof value === "string") headers.set(key, value);
	}
	if (meta.status) status = meta.status;
	return { status };
}
function caughtErrorToData(cause, errorOpts) {
	const { router, req, onError } = errorOpts.opts;
	const error = getTRPCErrorFromUnknown(cause);
	onError === null || onError === void 0 || onError({
		error,
		path: errorOpts.path,
		input: errorOpts.input,
		ctx: errorOpts.ctx,
		type: errorOpts.type,
		req
	});
	const untransformedJSON = { error: getErrorShape({
		config: router._def._config,
		error,
		type: errorOpts.type,
		path: errorOpts.path,
		input: errorOpts.input,
		ctx: errorOpts.ctx
	}) };
	const transformedJSON = transformTRPCResponse(router._def._config, untransformedJSON);
	const body = JSON.stringify(transformedJSON);
	return {
		error,
		untransformedJSON,
		body
	};
}
/**
* Check if a value is a stream-like object
* - if it's an async iterable
* - if it's an object with async iterables or promises
*/
function isDataStream(v) {
	if (!isObject(v)) return false;
	if (isAsyncIterable(v)) return true;
	return Object.values(v).some(isPromise) || Object.values(v).some(isAsyncIterable);
}
function resolveResponse(_x14) {
	return _resolveResponse.apply(this, arguments);
}
function _resolveResponse() {
	_resolveResponse = (0, import_asyncToGenerator$1.default)(function* (opts) {
		var _ref, _opts$allowBatching, _opts$batching, _opts$allowMethodOver, _config$sse$enabled, _config$sse;
		const { router, req } = opts;
		const headers = new Headers([["vary", "trpc-accept"]]);
		const config = router._def._config;
		const url = new URL(req.url);
		if (req.method === "HEAD") return new Response(null, { status: 204 });
		const allowBatching = (_ref = (_opts$allowBatching = opts.allowBatching) !== null && _opts$allowBatching !== void 0 ? _opts$allowBatching : (_opts$batching = opts.batching) === null || _opts$batching === void 0 ? void 0 : _opts$batching.enabled) !== null && _ref !== void 0 ? _ref : true;
		const allowMethodOverride = ((_opts$allowMethodOver = opts.allowMethodOverride) !== null && _opts$allowMethodOver !== void 0 ? _opts$allowMethodOver : false) && req.method === "POST";
		const infoTuple = yield run((0, import_asyncToGenerator$1.default)(function* () {
			try {
				return [void 0, yield getRequestInfo({
					req,
					path: decodeURIComponent(opts.path),
					router,
					searchParams: url.searchParams,
					headers: opts.req.headers,
					url
				})];
			} catch (cause) {
				return [getTRPCErrorFromUnknown(cause), void 0];
			}
		}));
		const ctxManager = run(function() {
			let result = void 0;
			return {
				valueOrUndefined: function() {
					if (!result) return void 0;
					return result[1];
				},
				value: function() {
					const [err, ctx] = result;
					if (err) throw err;
					return ctx;
				},
				create: function() {
					var _ref9 = (0, import_asyncToGenerator$1.default)(function* (info) {
						if (result) throw new Error("This should only be called once - report a bug in tRPC");
						try {
							const ctx = yield opts.createContext({ info });
							result = [void 0, ctx];
						} catch (cause) {
							result = [getTRPCErrorFromUnknown(cause), void 0];
						}
					});
					return function create(_x11) {
						return _ref9.apply(this, arguments);
					};
				}()
			};
		});
		const methodMapper = allowMethodOverride ? TYPE_ACCEPTED_METHOD_MAP_WITH_METHOD_OVERRIDE : TYPE_ACCEPTED_METHOD_MAP;
		/**
		* @deprecated
		*/
		const isStreamCall = req.headers.get("trpc-accept") === "application/jsonl";
		const experimentalSSE = (_config$sse$enabled = (_config$sse = config.sse) === null || _config$sse === void 0 ? void 0 : _config$sse.enabled) !== null && _config$sse$enabled !== void 0 ? _config$sse$enabled : true;
		try {
			const [infoError, info] = infoTuple;
			if (infoError) throw infoError;
			if (info.isBatchCall && !allowBatching) throw new TRPCError({
				code: "BAD_REQUEST",
				message: `Batching is not enabled on the server`
			});
			/* istanbul ignore if -- @preserve */
			if (isStreamCall && !info.isBatchCall) throw new TRPCError({
				message: `Streaming requests must be batched (you can do a batch of 1)`,
				code: "BAD_REQUEST"
			});
			yield ctxManager.create(info);
			const rpcCalls = info.calls.map(function() {
				var _ref10 = (0, import_asyncToGenerator$1.default)(function* (call) {
					const proc = call.procedure;
					try {
						if (opts.error) throw opts.error;
						if (!proc) throw new TRPCError({
							code: "NOT_FOUND",
							message: `No procedure found on path "${call.path}"`
						});
						if (!methodMapper[proc._def.type].includes(req.method)) throw new TRPCError({
							code: "METHOD_NOT_SUPPORTED",
							message: `Unsupported ${req.method}-request to ${proc._def.type} procedure at path "${call.path}"`
						});
						if (proc._def.type === "subscription") {
							/* istanbul ignore if -- @preserve */
							if (info.isBatchCall) throw new TRPCError({
								code: "BAD_REQUEST",
								message: `Cannot batch subscription calls`
							});
						}
						const data = yield proc({
							path: call.path,
							getRawInput: call.getRawInput,
							ctx: ctxManager.value(),
							type: proc._def.type,
							signal: opts.req.signal
						});
						return [void 0, { data }];
					} catch (cause) {
						var _opts$onError, _call$procedure$_def$, _call$procedure2;
						const error = getTRPCErrorFromUnknown(cause);
						const input = call.result();
						(_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, {
							error,
							path: call.path,
							input,
							ctx: ctxManager.valueOrUndefined(),
							type: (_call$procedure$_def$ = (_call$procedure2 = call.procedure) === null || _call$procedure2 === void 0 ? void 0 : _call$procedure2._def.type) !== null && _call$procedure$_def$ !== void 0 ? _call$procedure$_def$ : "unknown",
							req: opts.req
						});
						return [error, void 0];
					}
				});
				return function(_x12) {
					return _ref10.apply(this, arguments);
				};
			}());
			if (!info.isBatchCall) {
				const [call] = info.calls;
				const [error, result] = yield rpcCalls[0];
				switch (info.type) {
					case "unknown":
					case "mutation":
					case "query": {
						headers.set("content-type", "application/json");
						if (isDataStream(result === null || result === void 0 ? void 0 : result.data)) throw new TRPCError({
							code: "UNSUPPORTED_MEDIA_TYPE",
							message: "Cannot use stream-like response in non-streaming request - use httpBatchStreamLink"
						});
						const res = error ? { error: getErrorShape({
							config,
							ctx: ctxManager.valueOrUndefined(),
							error,
							input: call.result(),
							path: call.path,
							type: info.type
						}) } : { result: { data: result.data } };
						const headResponse$1 = initResponse({
							ctx: ctxManager.valueOrUndefined(),
							info,
							responseMeta: opts.responseMeta,
							errors: error ? [error] : [],
							headers,
							untransformedJSON: [res]
						});
						return new Response(JSON.stringify(transformTRPCResponse(config, res)), {
							status: headResponse$1.status,
							headers
						});
					}
					case "subscription": {
						const iterable = run(function() {
							if (error) return errorToAsyncIterable(error);
							if (!experimentalSSE) return errorToAsyncIterable(new TRPCError({
								code: "METHOD_NOT_SUPPORTED",
								message: "Missing experimental flag \"sseSubscriptions\""
							}));
							if (!isObservable(result.data) && !isAsyncIterable(result.data)) return errorToAsyncIterable(new TRPCError({
								message: `Subscription ${call.path} did not return an observable or a AsyncGenerator`,
								code: "INTERNAL_SERVER_ERROR"
							}));
							const dataAsIterable = isObservable(result.data) ? observableToAsyncIterable(result.data, opts.req.signal) : result.data;
							return dataAsIterable;
						});
						const stream = sseStreamProducer((0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, config.sse), {}, {
							data: iterable,
							serialize: function(v) {
								return config.transformer.output.serialize(v);
							},
							formatError(errorOpts) {
								var _call$procedure$_def$2, _call$procedure3, _opts$onError2;
								const error$1 = getTRPCErrorFromUnknown(errorOpts.error);
								const input = call === null || call === void 0 ? void 0 : call.result();
								const path = call === null || call === void 0 ? void 0 : call.path;
								const type = (_call$procedure$_def$2 = call === null || call === void 0 || (_call$procedure3 = call.procedure) === null || _call$procedure3 === void 0 ? void 0 : _call$procedure3._def.type) !== null && _call$procedure$_def$2 !== void 0 ? _call$procedure$_def$2 : "unknown";
								(_opts$onError2 = opts.onError) === null || _opts$onError2 === void 0 || _opts$onError2.call(opts, {
									error: error$1,
									path,
									input,
									ctx: ctxManager.valueOrUndefined(),
									req: opts.req,
									type
								});
								const shape = getErrorShape({
									config,
									ctx: ctxManager.valueOrUndefined(),
									error: error$1,
									input,
									path,
									type
								});
								return shape;
							}
						}));
						for (const [key, value] of Object.entries(sseHeaders)) headers.set(key, value);
						const headResponse$1 = initResponse({
							ctx: ctxManager.valueOrUndefined(),
							info,
							responseMeta: opts.responseMeta,
							errors: [],
							headers,
							untransformedJSON: null
						});
						return new Response(stream, {
							headers,
							status: headResponse$1.status
						});
					}
				}
			}
			if (info.accept === "application/jsonl") {
				headers.set("content-type", "application/json");
				headers.set("transfer-encoding", "chunked");
				const headResponse$1 = initResponse({
					ctx: ctxManager.valueOrUndefined(),
					info,
					responseMeta: opts.responseMeta,
					errors: [],
					headers,
					untransformedJSON: null
				});
				const stream = jsonlStreamProducer((0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, config.jsonl), {}, {
					maxDepth: Infinity,
					data: rpcCalls.map(function() {
						var _ref11 = (0, import_asyncToGenerator$1.default)(function* (res) {
							const [error, result] = yield res;
							const call = info.calls[0];
							if (error) {
								var _procedure$_def$type, _procedure;
								return { error: getErrorShape({
									config,
									ctx: ctxManager.valueOrUndefined(),
									error,
									input: call.result(),
									path: call.path,
									type: (_procedure$_def$type = (_procedure = call.procedure) === null || _procedure === void 0 ? void 0 : _procedure._def.type) !== null && _procedure$_def$type !== void 0 ? _procedure$_def$type : "unknown"
								}) };
							}
							/**
							* Not very pretty, but we need to wrap nested data in promises
							* Our stream producer will only resolve top-level async values or async values that are directly nested in another async value
							*/
							const iterable = isObservable(result.data) ? observableToAsyncIterable(result.data, opts.req.signal) : Promise.resolve(result.data);
							return { result: Promise.resolve({ data: iterable }) };
						});
						return function(_x13) {
							return _ref11.apply(this, arguments);
						};
					}()),
					serialize: config.transformer.output.serialize,
					onError: function(cause) {
						var _opts$onError3, _info$type;
						(_opts$onError3 = opts.onError) === null || _opts$onError3 === void 0 || _opts$onError3.call(opts, {
							error: getTRPCErrorFromUnknown(cause),
							path: void 0,
							input: void 0,
							ctx: ctxManager.valueOrUndefined(),
							req: opts.req,
							type: (_info$type = info === null || info === void 0 ? void 0 : info.type) !== null && _info$type !== void 0 ? _info$type : "unknown"
						});
					},
					formatError(errorOpts) {
						var _call$procedure$_def$3, _call$procedure4;
						const call = info === null || info === void 0 ? void 0 : info.calls[errorOpts.path[0]];
						const error = getTRPCErrorFromUnknown(errorOpts.error);
						const input = call === null || call === void 0 ? void 0 : call.result();
						const path = call === null || call === void 0 ? void 0 : call.path;
						const type = (_call$procedure$_def$3 = call === null || call === void 0 || (_call$procedure4 = call.procedure) === null || _call$procedure4 === void 0 ? void 0 : _call$procedure4._def.type) !== null && _call$procedure$_def$3 !== void 0 ? _call$procedure$_def$3 : "unknown";
						const shape = getErrorShape({
							config,
							ctx: ctxManager.valueOrUndefined(),
							error,
							input,
							path,
							type
						});
						return shape;
					}
				}));
				return new Response(stream, {
					headers,
					status: headResponse$1.status
				});
			}
			/**
			* Non-streaming response:
			* - await all responses in parallel, blocking on the slowest one
			* - create headers with known response body
			* - return a complete HTTPResponse
			*/
			headers.set("content-type", "application/json");
			const results = (yield Promise.all(rpcCalls)).map(function(res) {
				const [error, result] = res;
				if (error) return res;
				if (isDataStream(result.data)) return [new TRPCError({
					code: "UNSUPPORTED_MEDIA_TYPE",
					message: "Cannot use stream-like response in non-streaming request - use httpBatchStreamLink"
				}), void 0];
				return res;
			});
			const resultAsRPCResponse = results.map(function([error, result], index) {
				const call = info.calls[index];
				if (error) {
					var _call$procedure$_def$4, _call$procedure5;
					return { error: getErrorShape({
						config,
						ctx: ctxManager.valueOrUndefined(),
						error,
						input: call.result(),
						path: call.path,
						type: (_call$procedure$_def$4 = (_call$procedure5 = call.procedure) === null || _call$procedure5 === void 0 ? void 0 : _call$procedure5._def.type) !== null && _call$procedure$_def$4 !== void 0 ? _call$procedure$_def$4 : "unknown"
					}) };
				}
				return { result: { data: result.data } };
			});
			const errors = results.map(function([error]) {
				return error;
			}).filter(Boolean);
			const headResponse = initResponse({
				ctx: ctxManager.valueOrUndefined(),
				info,
				responseMeta: opts.responseMeta,
				untransformedJSON: resultAsRPCResponse,
				errors,
				headers
			});
			return new Response(JSON.stringify(transformTRPCResponse(config, resultAsRPCResponse)), {
				status: headResponse.status,
				headers
			});
		} catch (cause) {
			var _info$type2;
			const [_infoError, info] = infoTuple;
			const ctx = ctxManager.valueOrUndefined();
			const { error, untransformedJSON, body } = caughtErrorToData(cause, {
				opts,
				ctx: ctxManager.valueOrUndefined(),
				type: (_info$type2 = info === null || info === void 0 ? void 0 : info.type) !== null && _info$type2 !== void 0 ? _info$type2 : "unknown"
			});
			const headResponse = initResponse({
				ctx,
				info,
				responseMeta: opts.responseMeta,
				untransformedJSON,
				errors: [error],
				headers
			});
			return new Response(body, {
				status: headResponse.status,
				headers
			});
		}
	});
	return _resolveResponse.apply(this, arguments);
}

//#endregion
//#region ../../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/node-http-ZvZKxPic.mjs
var import_asyncToGenerator = __toESM(require_asyncToGenerator(), 1);
function createBody(req, opts) {
	if ("body" in req) {
		if (req.body === void 0) return void 0;
		if (typeof req.body === "string") return req.body;
		return JSON.stringify(req.body);
	}
	let size = 0;
	let hasClosed = false;
	return new ReadableStream({
		start(controller) {
			const onData = function(chunk) {
				size += chunk.length;
				if (!opts.maxBodySize || size <= opts.maxBodySize) {
					controller.enqueue(new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength));
					return;
				}
				controller.error(new TRPCError({ code: "PAYLOAD_TOO_LARGE" }));
				hasClosed = true;
				req.off("data", onData);
				req.off("end", onEnd);
			};
			const onEnd = function() {
				if (hasClosed) return;
				hasClosed = true;
				req.off("data", onData);
				req.off("end", onEnd);
				controller.close();
			};
			req.on("data", onData);
			req.on("end", onEnd);
		},
		cancel() {
			req.destroy();
		}
	});
}
function createURL(req) {
	try {
		var _ref, _req$headers$host;
		const protocol = req.headers[":scheme"] && req.headers[":scheme"] === "https" || req.socket && "encrypted" in req.socket && req.socket.encrypted ? "https:" : "http:";
		const host = (_ref = (_req$headers$host = req.headers.host) !== null && _req$headers$host !== void 0 ? _req$headers$host : req.headers[":authority"]) !== null && _ref !== void 0 ? _ref : "localhost";
		return new URL(req.url, `${protocol}//${host}`);
	} catch (cause) {
		throw new TRPCError({
			code: "BAD_REQUEST",
			message: "Invalid URL",
			cause
		});
	}
}
function createHeaders(incoming) {
	const headers = new Headers();
	for (const key in incoming) {
		const value = incoming[key];
		if (typeof key === "string" && key.startsWith(":")) continue;
		if (Array.isArray(value)) for (const item of value) headers.append(key, item);
		else if (value != null) headers.append(key, value);
	}
	return headers;
}
/**
* Convert an [`IncomingMessage`](https://nodejs.org/api/http.html#class-httpincomingmessage) to a [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)
*/
function incomingMessageToRequest(req, res, opts) {
	const ac = new AbortController();
	const onAbort = function() {
		res.off("close", onAbort);
		req.off("aborted", onAbort);
		ac.abort();
	};
	res.once("close", onAbort);
	req.once("aborted", onAbort);
	const url = createURL(req);
	const init = {
		headers: createHeaders(req.headers),
		method: req.method,
		signal: ac.signal
	};
	if (req.method !== "GET" && req.method !== "HEAD") {
		init.body = createBody(req, opts);
		init.duplex = "half";
	}
	const request = new Request(url, init);
	return request;
}
function writeResponseBodyChunk(_x, _x2) {
	return _writeResponseBodyChunk.apply(this, arguments);
}
function _writeResponseBodyChunk() {
	_writeResponseBodyChunk = (0, import_asyncToGenerator.default)(function* (res, chunk) {
		if (res.write(chunk) === false) yield new Promise(function(resolve, reject) {
			const onError = function(err) {
				reject(err);
				cleanup();
			};
			const onDrain = function() {
				resolve();
				cleanup();
			};
			const cleanup = function() {
				res.off("error", onError);
				res.off("drain", onDrain);
			};
			res.once("error", onError);
			res.once("drain", onDrain);
		});
	});
	return _writeResponseBodyChunk.apply(this, arguments);
}
/**
* @internal
*/
function writeResponseBody(_x3) {
	return _writeResponseBody.apply(this, arguments);
}
function _writeResponseBody() {
	_writeResponseBody = (0, import_asyncToGenerator.default)(function* (opts) {
		const { res } = opts;
		try {
			const writableStream = new WritableStream({ write(chunk) {
				return (0, import_asyncToGenerator.default)(function* () {
					var _res$flush;
					yield writeResponseBodyChunk(res, chunk);
					(_res$flush = res.flush) === null || _res$flush === void 0 || _res$flush.call(res);
				})();
			} });
			yield opts.body.pipeTo(writableStream, { signal: opts.signal });
		} catch (err) {
			if (isAbortError(err)) return;
			throw err;
		}
	});
	return _writeResponseBody.apply(this, arguments);
}
/**
* @internal
*/
function writeResponse(_x4) {
	return _writeResponse.apply(this, arguments);
}
function _writeResponse() {
	_writeResponse = (0, import_asyncToGenerator.default)(function* (opts) {
		const { response, rawResponse } = opts;
		if (rawResponse.statusCode === 200) rawResponse.statusCode = response.status;
		for (const [key, value] of response.headers) rawResponse.setHeader(key, value);
		try {
			if (response.body) yield writeResponseBody({
				res: rawResponse,
				signal: opts.request.signal,
				body: response.body
			});
		} catch (err) {
			if (!rawResponse.headersSent) rawResponse.statusCode = 500;
			throw err;
		} finally {
			rawResponse.end();
		}
	});
	return _writeResponse.apply(this, arguments);
}
var import_objectSpread2 = __toESM$1(require_objectSpread2(), 1);
/**
* @internal
*/
function internal_exceptionHandler(opts) {
	return function(cause) {
		var _opts$onError;
		const { res, req } = opts;
		const error = getTRPCErrorFromUnknown(cause);
		const shape = getErrorShape({
			config: opts.router._def._config,
			error,
			type: "unknown",
			path: void 0,
			input: void 0,
			ctx: void 0
		});
		(_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, {
			req,
			error,
			type: "unknown",
			path: void 0,
			input: void 0,
			ctx: void 0
		});
		const transformed = transformTRPCResponse(opts.router._def._config, { error: shape });
		res.statusCode = shape.data.httpStatus;
		res.end(JSON.stringify(transformed));
	};
}
/**
* @remark the promise never rejects
*/
function nodeHTTPRequestHandler(_x6) {
	return _nodeHTTPRequestHandler.apply(this, arguments);
}
function _nodeHTTPRequestHandler() {
	_nodeHTTPRequestHandler = (0, import_asyncToGenerator.default)(function* (opts) {
		return new Promise(function(resolve) {
			var _opts$middleware;
			const handleViaMiddleware = (_opts$middleware = opts.middleware) !== null && _opts$middleware !== void 0 ? _opts$middleware : function(_req, _res, next) {
				return next();
			};
			opts.res.once("finish", function() {
				resolve();
			});
			return handleViaMiddleware(opts.req, opts.res, function(err) {
				run((0, import_asyncToGenerator.default)(function* () {
					var _opts$maxBodySize;
					const request = incomingMessageToRequest(opts.req, opts.res, { maxBodySize: (_opts$maxBodySize = opts.maxBodySize) !== null && _opts$maxBodySize !== void 0 ? _opts$maxBodySize : null });
					const createContext = function() {
						var _ref2 = (0, import_asyncToGenerator.default)(function* (innerOpts) {
							var _opts$createContext;
							return yield (_opts$createContext = opts.createContext) === null || _opts$createContext === void 0 ? void 0 : _opts$createContext.call(opts, (0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, opts), innerOpts));
						});
						return function createContext$1(_x5) {
							return _ref2.apply(this, arguments);
						};
					}();
					const response = yield resolveResponse((0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, opts), {}, {
						req: request,
						error: err ? getTRPCErrorFromUnknown(err) : null,
						createContext,
						onError(o) {
							var _opts$onError2;
							opts === null || opts === void 0 || (_opts$onError2 = opts.onError) === null || _opts$onError2 === void 0 || _opts$onError2.call(opts, (0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, o), {}, { req: opts.req }));
						}
					}));
					yield writeResponse({
						request,
						response,
						rawResponse: opts.res
					});
				})).catch(internal_exceptionHandler(opts));
			});
		});
	});
	return _nodeHTTPRequestHandler.apply(this, arguments);
}

//#endregion
export { TRPCError, Unpromise, __toESM$1 as __toESM, callProcedure, createURL, getErrorShape, getTRPCErrorFromUnknown, incomingMessageToRequest, initTRPC, internal_exceptionHandler, isAsyncIterable, isObject, isObservable, isTrackedEnvelope, iteratorResource, nodeHTTPRequestHandler, observableToAsyncIterable, parseConnectionParamsFromUnknown, parseTRPCMessage, require_objectSpread2, require_usingCtx, resolveResponse, run, transformTRPCResponse };
//# sourceMappingURL=node-http-ZvZKxPic-xWxFTMZn.js.map