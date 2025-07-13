import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common, require_objectSpread2 } from "./common-AJXMMmZt.js";
import { require_asyncToGenerator } from "./asyncToGenerator-CDlr4A8U.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { TRPCError, Unpromise, __toESM as __toESM$1, callProcedure, createURL, getErrorShape, getTRPCErrorFromUnknown, incomingMessageToRequest, isAsyncIterable, isObject, isObservable, isTrackedEnvelope, iteratorResource, observableToAsyncIterable, parseConnectionParamsFromUnknown, parseTRPCMessage, require_objectSpread2 as require_objectSpread2$1, require_usingCtx, resolveResponse, run, transformTRPCResponse } from "./node-http-ZvZKxPic-xWxFTMZn.js";

//#region ../../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/ws-DsZkVWpZ.mjs
var import_asyncToGenerator$2 = __toESM(require_asyncToGenerator(), 1);
var import_objectSpread2$3 = __toESM$1(require_objectSpread2$1(), 1);
var import_usingCtx = __toESM$1(require_usingCtx(), 1);
/**
* Importing ws causes a build error
* @see https://github.com/trpc/trpc/pull/5279
*/
const WEBSOCKET_OPEN = 1;
function getWSConnectionHandler(opts) {
	const { createContext, router } = opts;
	const { transformer } = router._def._config;
	return function(client, req) {
		var _opts$keepAlive;
		const clientSubscriptions = /* @__PURE__ */ new Map();
		const abortController = new AbortController();
		if ((_opts$keepAlive = opts.keepAlive) === null || _opts$keepAlive === void 0 ? void 0 : _opts$keepAlive.enabled) {
			const { pingMs, pongWaitMs } = opts.keepAlive;
			handleKeepAlive(client, pingMs, pongWaitMs);
		}
		function respond(untransformedJSON) {
			client.send(JSON.stringify(transformTRPCResponse(router._def._config, untransformedJSON)));
		}
		function createCtxPromise(_x) {
			return _createCtxPromise.apply(this, arguments);
		}
		function _createCtxPromise() {
			_createCtxPromise = (0, import_asyncToGenerator$2.default)(function* (getConnectionParams) {
				try {
					return yield run((0, import_asyncToGenerator$2.default)(function* () {
						ctx = yield createContext === null || createContext === void 0 ? void 0 : createContext({
							req,
							res: client,
							info: {
								connectionParams: getConnectionParams(),
								calls: [],
								isBatchCall: false,
								accept: null,
								type: "unknown",
								signal: abortController.signal,
								url: null
							}
						});
						return {
							ok: true,
							value: ctx
						};
					}));
				} catch (cause) {
					var _opts$onError, _globalThis$setImmedi;
					const error = getTRPCErrorFromUnknown(cause);
					(_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, {
						error,
						path: void 0,
						type: "unknown",
						ctx,
						req,
						input: void 0
					});
					respond({
						id: null,
						error: getErrorShape({
							config: router._def._config,
							error,
							type: "unknown",
							path: void 0,
							input: void 0,
							ctx
						})
					});
					((_globalThis$setImmedi = globalThis.setImmediate) !== null && _globalThis$setImmedi !== void 0 ? _globalThis$setImmedi : globalThis.setTimeout)(function() {
						client.close();
					});
					return {
						ok: false,
						error
					};
				}
			});
			return _createCtxPromise.apply(this, arguments);
		}
		let ctx = void 0;
		/**
		* promise for initializing the context
		*
		* - the context promise will be created immediately on connection if no connectionParams are expected
		* - if connection params are expected, they will be created once received
		*/
		let ctxPromise = createURL(req).searchParams.get("connectionParams") === "1" ? null : createCtxPromise(function() {
			return null;
		});
		function handleRequest(msg) {
			const { id, jsonrpc } = msg;
			if (id === null) {
				var _opts$onError2;
				const error = getTRPCErrorFromUnknown(new TRPCError({
					code: "PARSE_ERROR",
					message: "`id` is required"
				}));
				(_opts$onError2 = opts.onError) === null || _opts$onError2 === void 0 || _opts$onError2.call(opts, {
					error,
					path: void 0,
					type: "unknown",
					ctx,
					req,
					input: void 0
				});
				respond({
					id,
					jsonrpc,
					error: getErrorShape({
						config: router._def._config,
						error,
						type: "unknown",
						path: void 0,
						input: void 0,
						ctx
					})
				});
				return;
			}
			if (msg.method === "subscription.stop") {
				var _clientSubscriptions$;
				(_clientSubscriptions$ = clientSubscriptions.get(id)) === null || _clientSubscriptions$ === void 0 || _clientSubscriptions$.abort();
				return;
			}
			const { path, lastEventId } = msg.params;
			let { input } = msg.params;
			const type = msg.method;
			if (lastEventId !== void 0) if (isObject(input)) input = (0, import_objectSpread2$3.default)((0, import_objectSpread2$3.default)({}, input), {}, { lastEventId });
			else {
				var _input;
				(_input = input) !== null && _input !== void 0 || (input = { lastEventId });
			}
			run((0, import_asyncToGenerator$2.default)(function* () {
				const res = yield ctxPromise;
				if (!res.ok) throw res.error;
				const abortController$1 = new AbortController();
				const result = yield callProcedure({
					router,
					path,
					getRawInput: function() {
						var _ref = (0, import_asyncToGenerator$2.default)(function* () {
							return input;
						});
						return function getRawInput() {
							return _ref.apply(this, arguments);
						};
					}(),
					ctx,
					type,
					signal: abortController$1.signal
				});
				const isIterableResult = isAsyncIterable(result) || isObservable(result);
				if (type !== "subscription") {
					if (isIterableResult) throw new TRPCError({
						code: "UNSUPPORTED_MEDIA_TYPE",
						message: `Cannot return an async iterable or observable from a ${type} procedure with WebSockets`
					});
					respond({
						id,
						jsonrpc,
						result: {
							type: "data",
							data: result
						}
					});
					return;
				}
				if (!isIterableResult) throw new TRPCError({
					message: `Subscription ${path} did not return an observable or a AsyncGenerator`,
					code: "INTERNAL_SERVER_ERROR"
				});
				/* istanbul ignore next -- @preserve */
				if (client.readyState !== WEBSOCKET_OPEN) return;
				/* istanbul ignore next -- @preserve */
				if (clientSubscriptions.has(id)) throw new TRPCError({
					message: `Duplicate id ${id}`,
					code: "BAD_REQUEST"
				});
				const iterable = isObservable(result) ? observableToAsyncIterable(result, abortController$1.signal) : result;
				run((0, import_asyncToGenerator$2.default)(function* () {
					try {
						var _usingCtx = (0, import_usingCtx.default)();
						const iterator = _usingCtx.a(iteratorResource(iterable));
						const abortPromise = new Promise(function(resolve) {
							abortController$1.signal.onabort = function() {
								return resolve("abort");
							};
						});
						let next;
						let result$1;
						while (true) {
							next = yield Unpromise.race([iterator.next().catch(getTRPCErrorFromUnknown), abortPromise]);
							if (next === "abort") {
								var _iterator$return;
								yield (_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator);
								break;
							}
							if (next instanceof Error) {
								var _opts$onError3;
								const error = getTRPCErrorFromUnknown(next);
								(_opts$onError3 = opts.onError) === null || _opts$onError3 === void 0 || _opts$onError3.call(opts, {
									error,
									path,
									type,
									ctx,
									req,
									input
								});
								respond({
									id,
									jsonrpc,
									error: getErrorShape({
										config: router._def._config,
										error,
										type,
										path,
										input,
										ctx
									})
								});
								break;
							}
							if (next.done) break;
							result$1 = {
								type: "data",
								data: next.value
							};
							if (isTrackedEnvelope(next.value)) {
								const [id$1, data] = next.value;
								result$1.id = id$1;
								result$1.data = {
									id: id$1,
									data
								};
							}
							respond({
								id,
								jsonrpc,
								result: result$1
							});
							next = null;
							result$1 = null;
						}
						respond({
							id,
							jsonrpc,
							result: { type: "stopped" }
						});
						clientSubscriptions.delete(id);
					} catch (_) {
						_usingCtx.e = _;
					} finally {
						yield _usingCtx.d();
					}
				})).catch(function(cause) {
					var _opts$onError4;
					const error = getTRPCErrorFromUnknown(cause);
					(_opts$onError4 = opts.onError) === null || _opts$onError4 === void 0 || _opts$onError4.call(opts, {
						error,
						path,
						type,
						ctx,
						req,
						input
					});
					respond({
						id,
						jsonrpc,
						error: getErrorShape({
							config: router._def._config,
							error,
							type,
							path,
							input,
							ctx
						})
					});
					abortController$1.abort();
				});
				clientSubscriptions.set(id, abortController$1);
				respond({
					id,
					jsonrpc,
					result: { type: "started" }
				});
			})).catch(function(cause) {
				var _opts$onError5;
				const error = getTRPCErrorFromUnknown(cause);
				(_opts$onError5 = opts.onError) === null || _opts$onError5 === void 0 || _opts$onError5.call(opts, {
					error,
					path,
					type,
					ctx,
					req,
					input
				});
				respond({
					id,
					jsonrpc,
					error: getErrorShape({
						config: router._def._config,
						error,
						type,
						path,
						input,
						ctx
					})
				});
			});
		}
		client.on("message", function(rawData) {
			const msgStr = rawData.toString();
			if (msgStr === "PONG") return;
			if (msgStr === "PING") {
				if (!opts.dangerouslyDisablePong) client.send("PONG");
				return;
			}
			if (!ctxPromise) {
				ctxPromise = createCtxPromise(function() {
					let msg;
					try {
						msg = JSON.parse(msgStr);
						if (!isObject(msg)) throw new Error("Message was not an object");
					} catch (cause) {
						throw new TRPCError({
							code: "PARSE_ERROR",
							message: `Malformed TRPCConnectionParamsMessage`,
							cause
						});
					}
					const connectionParams = parseConnectionParamsFromUnknown(msg.data);
					return connectionParams;
				});
				return;
			}
			const parsedMsgs = run(function() {
				try {
					const msgJSON = JSON.parse(msgStr);
					const msgs = Array.isArray(msgJSON) ? msgJSON : [msgJSON];
					return msgs.map(function(raw) {
						return parseTRPCMessage(raw, transformer);
					});
				} catch (cause) {
					const error = new TRPCError({
						code: "PARSE_ERROR",
						cause
					});
					respond({
						id: null,
						error: getErrorShape({
							config: router._def._config,
							error,
							type: "unknown",
							path: void 0,
							input: void 0,
							ctx
						})
					});
					return [];
				}
			});
			parsedMsgs.map(handleRequest);
		});
		client.on("error", function(cause) {
			var _opts$onError6;
			(_opts$onError6 = opts.onError) === null || _opts$onError6 === void 0 || _opts$onError6.call(opts, {
				ctx,
				error: getTRPCErrorFromUnknown(cause),
				input: void 0,
				path: void 0,
				type: "unknown",
				req
			});
		});
		client.once("close", function() {
			for (const sub of clientSubscriptions.values()) sub.abort();
			clientSubscriptions.clear();
			abortController.abort();
		});
	};
}
/**
* Handle WebSocket keep-alive messages
*/
function handleKeepAlive(client, pingMs = 3e4, pongWaitMs = 5e3) {
	let timeout = void 0;
	let ping = void 0;
	const schedulePing = function() {
		const scheduleTimeout = function() {
			timeout = setTimeout(function() {
				client.terminate();
			}, pongWaitMs);
		};
		ping = setTimeout(function() {
			client.send("PING");
			scheduleTimeout();
		}, pingMs);
	};
	const onMessage = function() {
		clearTimeout(ping);
		clearTimeout(timeout);
		schedulePing();
	};
	client.on("message", onMessage);
	client.on("close", function() {
		clearTimeout(ping);
		clearTimeout(timeout);
	});
	schedulePing();
}

//#endregion
//#region ../../node_modules/.pnpm/@trpc+server@11.4.3_typescript@5.8.3/node_modules/@trpc/server/dist/adapters/fastify/index.mjs
var import_asyncToGenerator$1 = __toESM(require_asyncToGenerator(), 1);
var import_objectSpread2$1 = __toESM$1(require_objectSpread2$1(), 1);
function fastifyRequestHandler(_x2) {
	return _fastifyRequestHandler.apply(this, arguments);
}
function _fastifyRequestHandler() {
	_fastifyRequestHandler = (0, import_asyncToGenerator$1.default)(function* (opts) {
		const createContext = function() {
			var _ref = (0, import_asyncToGenerator$1.default)(function* (innerOpts) {
				var _opts$createContext;
				return yield (_opts$createContext = opts.createContext) === null || _opts$createContext === void 0 ? void 0 : _opts$createContext.call(opts, (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, opts), innerOpts));
			});
			return function createContext$1(_x) {
				return _ref.apply(this, arguments);
			};
		}();
		const incomingMessage = opts.req.raw;
		if ("body" in opts.req) incomingMessage.body = opts.req.body;
		const req = incomingMessageToRequest(incomingMessage, opts.res.raw, { maxBodySize: null });
		const res = yield resolveResponse((0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, opts), {}, {
			req,
			error: null,
			createContext,
			onError(o) {
				var _opts$onError;
				opts === null || opts === void 0 || (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, o), {}, { req: opts.req }));
			}
		}));
		yield opts.res.send(res);
	});
	return _fastifyRequestHandler.apply(this, arguments);
}
var import_objectSpread2$2 = __toESM$1(require_objectSpread2$1(), 1);
function fastifyTRPCPlugin(fastify, opts, done) {
	var _opts$prefix;
	fastify.removeContentTypeParser("application/json");
	fastify.addContentTypeParser("application/json", { parseAs: "string" }, function(_, body, _done) {
		_done(null, body);
	});
	let prefix = (_opts$prefix = opts.prefix) !== null && _opts$prefix !== void 0 ? _opts$prefix : "";
	if (typeof fastifyTRPCPlugin.default !== "function") prefix = "";
	fastify.all(`${prefix}/:path`, function() {
		var _ref2 = (0, import_asyncToGenerator$1.default)(function* (req, res) {
			const path = req.params.path;
			yield fastifyRequestHandler((0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, opts.trpcOptions), {}, {
				req,
				res,
				path
			}));
		});
		return function(_x3, _x4) {
			return _ref2.apply(this, arguments);
		};
	}());
	if (opts.useWSS) {
		var _prefix;
		const trpcOptions = opts.trpcOptions;
		const onConnection = getWSConnectionHandler((0, import_objectSpread2$2.default)({}, trpcOptions));
		fastify.get((_prefix = prefix) !== null && _prefix !== void 0 ? _prefix : "/", { websocket: true }, function(socket, req) {
			var _trpcOptions$keepAliv;
			onConnection(socket, req.raw);
			if (trpcOptions === null || trpcOptions === void 0 || (_trpcOptions$keepAliv = trpcOptions.keepAlive) === null || _trpcOptions$keepAliv === void 0 ? void 0 : _trpcOptions$keepAliv.enabled) {
				const { pingMs, pongWaitMs } = trpcOptions.keepAlive;
				handleKeepAlive(socket, pingMs, pongWaitMs);
			}
		});
	}
	done();
}

//#endregion
//#region lib/drivers/fastify.driver.ts
var import_common = __toESM(require_common(), 1);
var import_objectSpread2 = __toESM(require_objectSpread2(), 1);
var import_asyncToGenerator = __toESM(require_asyncToGenerator(), 1);
var import_decorate = __toESM(require_decorate(), 1);
let FastifyDriver = class FastifyDriver$1 {
	start(options, app, appRouter, contextInstance) {
		return (0, import_asyncToGenerator.default)(function* () {
			var _options$basePath;
			app.register(fastifyTRPCPlugin, {
				prefix: (_options$basePath = options.basePath) !== null && _options$basePath !== void 0 ? _options$basePath : "/trpc",
				trpcOptions: (0, import_objectSpread2.default)({ router: appRouter }, options.context != null && contextInstance != null ? { createContext: function(opts) {
					return contextInstance.create(opts);
				} } : {})
			});
		})();
	}
};
FastifyDriver = (0, import_decorate.default)([(0, import_common.Injectable)()], FastifyDriver);

//#endregion
export { FastifyDriver };
//# sourceMappingURL=fastify.driver-D__pY79n.js.map