import { __commonJS, __require, __toESM } from "./chunk-BLXvPPr8.js";
import { require_ArgumentOutOfRangeError, require_AsyncAction, require_AsyncScheduler, require_AsyncSubject, require_BehaviorSubject, require_ConnectableObservable, require_EmptyError, require_NotFoundError, require_Notification, require_ObjectUnsubscribedError, require_Observable, require_OperatorSubscriber, require_Reflect, require_ReplaySubject, require_Scheduler, require_SequenceError, require_Subject, require_Subscriber, require_Subscription, require_UnsubscriptionError, require_args, require_argsArgArrayOrObject, require_async, require_audit, require_auditTime, require_buffer, require_bufferCount, require_bufferTime, require_bufferToggle, require_bufferWhen, require_catchError, require_cli_colors_util, require_combineAll, require_combineLatest, require_combineLatestAll, require_combineLatestWith, require_common, require_concat, require_concatAll, require_concatMap, require_concatMapTo, require_concatWith, require_config, require_connect, require_constants, require_count, require_createObject, require_debounce, require_debounceTime, require_defaultIfEmpty, require_delay, require_delayWhen, require_dematerialize, require_dist, require_distinct, require_distinctUntilChanged, require_distinctUntilKeyChanged, require_elementAt, require_empty, require_endWith, require_enums, require_every, require_exceptions, require_exhaust, require_exhaustAll, require_exhaustMap, require_expand, require_filter, require_finalize, require_find, require_findIndex, require_first, require_flatMap, require_from, require_groupBy, require_identity, require_ignoreElements, require_innerFrom, require_interfaces, require_interval, require_isArrayLike, require_isEmpty, require_isFunction, require_isScheduler, require_last, require_lib, require_load_package_util, require_logger_service, require_map, require_mapOneOrManyArgs, require_mapTo, require_materialize, require_max, require_mergeAll, require_mergeMap, require_mergeMapTo, require_mergeScan, require_mergeWith, require_min, require_multicast, require_noop, require_not, require_objectSpread2, require_objectWithoutProperties, require_observable, require_observeOn, require_of, require_onErrorResumeNext, require_onErrorResumeNextWith, require_operators, require_pairwise, require_pipe, require_pluck, require_publish, require_publishBehavior, require_publishLast, require_publishReplay, require_race, require_raceWith, require_random_string_generator_util, require_reduce, require_refCount, require_repeat, require_repeatWhen, require_request_method_enum, require_retry, require_retryWhen, require_route_paramtypes_enum, require_sample, require_sampleTime, require_scan, require_scheduleIterable, require_scheduled, require_sequenceEqual, require_share, require_shareReplay, require_shared_utils, require_single, require_skip, require_skipLast, require_skipUntil, require_skipWhile, require_startWith, require_subscribeOn, require_switchAll, require_switchMap, require_switchMapTo, require_switchScan, require_take, require_takeLast, require_takeUntil, require_takeWhile, require_tap, require_throttle, require_throttleTime, require_throwError, require_throwIfEmpty, require_timeInterval, require_timeout, require_timeoutWith, require_timer, require_timestamp, require_toArray, require_version_options_interface, require_window, require_windowCount, require_windowTime, require_windowToggle, require_windowWhen, require_withLatestFrom, require_zip, require_zipAll, require_zipWith } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_asyncToGenerator } from "./asyncToGenerator-CDlr4A8U.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { MIDDLEWARES_KEY, PROCEDURE_METADATA_KEY, PROCEDURE_PARAM_METADATA_KEY, PROCEDURE_TYPE_KEY } from "./trpc.constants-bTuZEOOy.js";
import { ProcedureParamDecoratorType } from "./factory.interface-1IZgsKBO.js";
import { ProcedureType } from "./trpc.enum-XZGct68f.js";
import { require_decorateMetadata } from "./decorateMetadata-BmFM2rdr.js";
import { isEqual, uniqWith } from "lodash-es";

//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/adapters/http-adapter.js
var require_http_adapter = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/adapters/http-adapter.js"(exports) {
	var import_asyncToGenerator$30 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AbstractHttpAdapter = void 0;
	/**
	* @publicApi
	*/
	var AbstractHttpAdapter = class {
		constructor(instance) {
			this.instance = instance;
		}
		init() {
			return (0, import_asyncToGenerator$30.default)(function* () {})();
		}
		use(...args) {
			return this.instance.use(...args);
		}
		get(...args) {
			return this.instance.get(...args);
		}
		post(...args) {
			return this.instance.post(...args);
		}
		head(...args) {
			return this.instance.head(...args);
		}
		delete(...args) {
			return this.instance.delete(...args);
		}
		put(...args) {
			return this.instance.put(...args);
		}
		patch(...args) {
			return this.instance.patch(...args);
		}
		propfind(...args) {
			return this.instance.propfind(...args);
		}
		proppatch(...args) {
			return this.instance.proppatch(...args);
		}
		mkcol(...args) {
			return this.instance.mkcol(...args);
		}
		copy(...args) {
			return this.instance.copy(...args);
		}
		move(...args) {
			return this.instance.move(...args);
		}
		lock(...args) {
			return this.instance.lock(...args);
		}
		unlock(...args) {
			return this.instance.unlock(...args);
		}
		all(...args) {
			return this.instance.all(...args);
		}
		search(...args) {
			return this.instance.search(...args);
		}
		options(...args) {
			return this.instance.options(...args);
		}
		listen(port, hostname, callback) {
			return this.instance.listen(port, hostname, callback);
		}
		getHttpServer() {
			return this.httpServer;
		}
		setHttpServer(httpServer) {
			this.httpServer = httpServer;
		}
		setInstance(instance) {
			this.instance = instance;
		}
		getInstance() {
			return this.instance;
		}
		normalizePath(path) {
			return path;
		}
	};
	exports.AbstractHttpAdapter = AbstractHttpAdapter;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/adapters/index.js
var require_adapters = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/adapters/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$24 = __require("tslib");
	tslib_1$24.__exportStar(require_http_adapter(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/application-config.js
var require_application_config = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/application-config.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ApplicationConfig = void 0;
	var ApplicationConfig = class {
		constructor(ioAdapter = null) {
			this.ioAdapter = ioAdapter;
			this.globalPrefix = "";
			this.globalPrefixOptions = {};
			this.globalPipes = [];
			this.globalFilters = [];
			this.globalInterceptors = [];
			this.globalGuards = [];
			this.globalRequestPipes = [];
			this.globalRequestFilters = [];
			this.globalRequestInterceptors = [];
			this.globalRequestGuards = [];
		}
		setGlobalPrefix(prefix) {
			this.globalPrefix = prefix;
		}
		getGlobalPrefix() {
			return this.globalPrefix;
		}
		setGlobalPrefixOptions(options) {
			this.globalPrefixOptions = options;
		}
		getGlobalPrefixOptions() {
			return this.globalPrefixOptions;
		}
		setIoAdapter(ioAdapter) {
			this.ioAdapter = ioAdapter;
		}
		getIoAdapter() {
			return this.ioAdapter;
		}
		addGlobalPipe(pipe) {
			this.globalPipes.push(pipe);
		}
		useGlobalPipes(...pipes) {
			this.globalPipes = this.globalPipes.concat(pipes);
		}
		getGlobalFilters() {
			return this.globalFilters;
		}
		addGlobalFilter(filter) {
			this.globalFilters.push(filter);
		}
		useGlobalFilters(...filters) {
			this.globalFilters = this.globalFilters.concat(filters);
		}
		getGlobalPipes() {
			return this.globalPipes;
		}
		getGlobalInterceptors() {
			return this.globalInterceptors;
		}
		addGlobalInterceptor(interceptor) {
			this.globalInterceptors.push(interceptor);
		}
		useGlobalInterceptors(...interceptors) {
			this.globalInterceptors = this.globalInterceptors.concat(interceptors);
		}
		getGlobalGuards() {
			return this.globalGuards;
		}
		addGlobalGuard(guard) {
			this.globalGuards.push(guard);
		}
		useGlobalGuards(...guards) {
			this.globalGuards = this.globalGuards.concat(guards);
		}
		addGlobalRequestInterceptor(wrapper) {
			this.globalRequestInterceptors.push(wrapper);
		}
		getGlobalRequestInterceptors() {
			return this.globalRequestInterceptors;
		}
		addGlobalRequestPipe(wrapper) {
			this.globalRequestPipes.push(wrapper);
		}
		getGlobalRequestPipes() {
			return this.globalRequestPipes;
		}
		addGlobalRequestFilter(wrapper) {
			this.globalRequestFilters.push(wrapper);
		}
		getGlobalRequestFilters() {
			return this.globalRequestFilters;
		}
		addGlobalRequestGuard(wrapper) {
			this.globalRequestGuards.push(wrapper);
		}
		getGlobalRequestGuards() {
			return this.globalRequestGuards;
		}
		enableVersioning(options) {
			if (Array.isArray(options.defaultVersion)) options.defaultVersion = Array.from(new Set(options.defaultVersion));
			this.versioningOptions = options;
		}
		getVersioning() {
			return this.versioningOptions;
		}
	};
	exports.ApplicationConfig = ApplicationConfig;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/constants.js
var require_constants$4 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/constants.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ENHANCER_TOKEN_TO_SUBTYPE_MAP = exports.APP_FILTER = exports.APP_GUARD = exports.APP_PIPE = exports.APP_INTERCEPTOR = exports.MESSAGES = void 0;
	exports.MESSAGES = {
		APPLICATION_START: `Starting Nest application...`,
		APPLICATION_READY: `Nest application successfully started`,
		MICROSERVICE_READY: `Nest microservice successfully started`,
		UNKNOWN_EXCEPTION_MESSAGE: "Internal server error",
		ERROR_DURING_SHUTDOWN: "Error happened during shutdown",
		CALL_LISTEN_FIRST: "app.listen() needs to be called before calling app.getUrl()"
	};
	exports.APP_INTERCEPTOR = "APP_INTERCEPTOR";
	exports.APP_PIPE = "APP_PIPE";
	exports.APP_GUARD = "APP_GUARD";
	exports.APP_FILTER = "APP_FILTER";
	exports.ENHANCER_TOKEN_TO_SUBTYPE_MAP = {
		[exports.APP_GUARD]: "guard",
		[exports.APP_INTERCEPTOR]: "interceptor",
		[exports.APP_PIPE]: "pipe",
		[exports.APP_FILTER]: "filter"
	};
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/metadata-scanner.js
var require_metadata_scanner = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/metadata-scanner.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MetadataScanner = void 0;
	const shared_utils_1$46 = require_shared_utils();
	var MetadataScanner$1 = class {
		constructor() {
			this.cachedScannedPrototypes = /* @__PURE__ */ new Map();
		}
		/**
		* @deprecated
		* @see {@link getAllMethodNames}
		* @see getAllMethodNames
		*/
		scanFromPrototype(instance, prototype, callback) {
			if (!prototype) return [];
			const visitedNames = /* @__PURE__ */ new Map();
			const result = [];
			do
				for (const property of Object.getOwnPropertyNames(prototype)) {
					if (visitedNames.has(property)) continue;
					visitedNames.set(property, true);
					const descriptor = Object.getOwnPropertyDescriptor(prototype, property);
					if (descriptor.set || descriptor.get || (0, shared_utils_1$46.isConstructor)(property) || !(0, shared_utils_1$46.isFunction)(prototype[property])) continue;
					const value = callback(property);
					if ((0, shared_utils_1$46.isNil)(value)) continue;
					result.push(value);
				}
			while ((prototype = Reflect.getPrototypeOf(prototype)) && prototype !== Object.prototype);
			return result;
		}
		/**
		* @deprecated
		* @see {@link getAllMethodNames}
		* @see getAllMethodNames
		*/
		*getAllFilteredMethodNames(prototype) {
			yield* this.getAllMethodNames(prototype);
		}
		getAllMethodNames(prototype) {
			if (!prototype) return [];
			if (this.cachedScannedPrototypes.has(prototype)) return this.cachedScannedPrototypes.get(prototype);
			const visitedNames = /* @__PURE__ */ new Map();
			const result = [];
			this.cachedScannedPrototypes.set(prototype, result);
			do
				for (const property of Object.getOwnPropertyNames(prototype)) {
					if (visitedNames.has(property)) continue;
					visitedNames.set(property, true);
					const descriptor = Object.getOwnPropertyDescriptor(prototype, property);
					if (descriptor.set || descriptor.get || (0, shared_utils_1$46.isConstructor)(property) || !(0, shared_utils_1$46.isFunction)(prototype[property])) continue;
					result.push(property);
				}
			while ((prototype = Reflect.getPrototypeOf(prototype)) && prototype !== Object.prototype);
			return result;
		}
	};
	exports.MetadataScanner = MetadataScanner$1;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/modules-container.js
var require_modules_container = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/modules-container.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ModulesContainer = void 0;
	const uid_1$3 = require_dist();
	var ModulesContainer = class extends Map {
		constructor() {
			super(...arguments);
			this._applicationId = (0, uid_1$3.uid)(21);
		}
		get applicationId() {
			return this._applicationId;
		}
		getById(id) {
			return Array.from(this.values()).find(function(moduleRef) {
				return moduleRef.id === id;
			});
		}
	};
	exports.ModulesContainer = ModulesContainer;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/discovery/discoverable-meta-host-collection.js
var require_discoverable_meta_host_collection = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/discovery/discoverable-meta-host-collection.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiscoverableMetaHostCollection = void 0;
	var DiscoverableMetaHostCollection = class DiscoverableMetaHostCollection {
		/**
		* Adds a link between a class reference and a metadata key.
		* @param target The class reference.
		* @param metadataKey The metadata key.
		*/
		static addClassMetaHostLink(target, metadataKey) {
			this.metaHostLinks.set(target, metadataKey);
		}
		/**
		* Inspects a provider instance wrapper and adds it to the collection of providers
		* if it has a metadata key.
		* @param hostContainerRef A reference to the modules container.
		* @param instanceWrapper A provider instance wrapper.
		* @returns void
		*/
		static inspectProvider(hostContainerRef, instanceWrapper) {
			return this.inspectInstanceWrapper(hostContainerRef, instanceWrapper, this.providersByMetaKey);
		}
		/**
		* Inspects a controller instance wrapper and adds it to the collection of controllers
		* if it has a metadata key.
		* @param hostContainerRef A reference to the modules container.
		* @param instanceWrapper A controller's instance wrapper.
		* @returns void
		*/
		static inspectController(hostContainerRef, instanceWrapper) {
			return this.inspectInstanceWrapper(hostContainerRef, instanceWrapper, this.controllersByMetaKey);
		}
		static insertByMetaKey(metaKey, instanceWrapper, collection) {
			if (collection.has(metaKey)) {
				const wrappers = collection.get(metaKey);
				wrappers.add(instanceWrapper);
			} else {
				const wrappers = /* @__PURE__ */ new Set();
				wrappers.add(instanceWrapper);
				collection.set(metaKey, wrappers);
			}
		}
		static getProvidersByMetaKey(hostContainerRef, metaKey) {
			var _wrappersByMetaKey$ge;
			const wrappersByMetaKey = this.providersByMetaKey.get(hostContainerRef);
			return (_wrappersByMetaKey$ge = wrappersByMetaKey === null || wrappersByMetaKey === void 0 ? void 0 : wrappersByMetaKey.get(metaKey)) !== null && _wrappersByMetaKey$ge !== void 0 ? _wrappersByMetaKey$ge : /* @__PURE__ */ new Set();
		}
		static getControllersByMetaKey(hostContainerRef, metaKey) {
			var _wrappersByMetaKey$ge2;
			const wrappersByMetaKey = this.controllersByMetaKey.get(hostContainerRef);
			return (_wrappersByMetaKey$ge2 = wrappersByMetaKey === null || wrappersByMetaKey === void 0 ? void 0 : wrappersByMetaKey.get(metaKey)) !== null && _wrappersByMetaKey$ge2 !== void 0 ? _wrappersByMetaKey$ge2 : /* @__PURE__ */ new Set();
		}
		static inspectInstanceWrapper(hostContainerRef, instanceWrapper, wrapperByMetaKeyMap) {
			const metaKey = DiscoverableMetaHostCollection.getMetaKeyByInstanceWrapper(instanceWrapper);
			if (!metaKey) return;
			let collection;
			if (wrapperByMetaKeyMap.has(hostContainerRef)) collection = wrapperByMetaKeyMap.get(hostContainerRef);
			else {
				collection = /* @__PURE__ */ new Map();
				wrapperByMetaKeyMap.set(hostContainerRef, collection);
			}
			this.insertByMetaKey(metaKey, instanceWrapper, collection);
		}
		static getMetaKeyByInstanceWrapper(instanceWrapper) {
			var _instanceWrapper$inst, _instanceWrapper$inst2;
			return this.metaHostLinks.get(instanceWrapper.metatype || instanceWrapper.inject ? (_instanceWrapper$inst = (_instanceWrapper$inst2 = instanceWrapper.instance) === null || _instanceWrapper$inst2 === void 0 ? void 0 : _instanceWrapper$inst2.constructor) !== null && _instanceWrapper$inst !== void 0 ? _instanceWrapper$inst : instanceWrapper.metatype : instanceWrapper.metatype);
		}
	};
	exports.DiscoverableMetaHostCollection = DiscoverableMetaHostCollection;
	/**
	* A map of class references to metadata keys.
	*/
	DiscoverableMetaHostCollection.metaHostLinks = /* @__PURE__ */ new Map();
	/**
	* A map of metadata keys to instance wrappers (providers) with the corresponding metadata key.
	* The map is weakly referenced by the modules container (unique per application).
	*/
	DiscoverableMetaHostCollection.providersByMetaKey = /* @__PURE__ */ new WeakMap();
	/**
	* A map of metadata keys to instance wrappers (controllers) with the corresponding metadata key.
	* The map is weakly referenced by the modules container (unique per application).
	*/
	DiscoverableMetaHostCollection.controllersByMetaKey = /* @__PURE__ */ new WeakMap();
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/discovery/discovery-service.js
var require_discovery_service = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/discovery/discovery-service.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiscoveryService = void 0;
	const tslib_1$23 = __require("tslib");
	const common_1$32 = require_common();
	const uid_1$2 = require_dist();
	const modules_container_1$4 = require_modules_container();
	const discoverable_meta_host_collection_1$1 = require_discoverable_meta_host_collection();
	/**
	* @publicApi
	*/
	let DiscoveryService = class DiscoveryService$1 {
		constructor(modulesContainer) {
			this.modulesContainer = modulesContainer;
		}
		/**
		* Creates a decorator that can be used to decorate classes and methods with metadata.
		* The decorator will also add the class to the collection of discoverable classes (by metadata key).
		* Decorated classes can be discovered using the `getProviders` and `getControllers` methods.
		* @returns A decorator function.
		*/
		static createDecorator() {
			const metadataKey = (0, uid_1$2.uid)(21);
			const decoratorFn = function(opts) {
				return function(target, key, descriptor) {
					if (!descriptor) discoverable_meta_host_collection_1$1.DiscoverableMetaHostCollection.addClassMetaHostLink(target, metadataKey);
					(0, common_1$32.SetMetadata)(metadataKey, opts !== null && opts !== void 0 ? opts : {})(target, key, descriptor);
				};
			};
			decoratorFn.KEY = metadataKey;
			return decoratorFn;
		}
		/**
		* Returns an array of instance wrappers (providers).
		* Depending on the options, the array will contain either all providers or only providers with the specified metadata key.
		* @param options Discovery options.
		* @param modules A list of modules to filter by.
		* @returns An array of instance wrappers (providers).
		*/
		getProviders(options = {}, modules = this.getModules(options)) {
			if ("metadataKey" in options) {
				const providers$1 = discoverable_meta_host_collection_1$1.DiscoverableMetaHostCollection.getProvidersByMetaKey(this.modulesContainer, options.metadataKey);
				return Array.from(providers$1);
			}
			const providers = modules.map(function(item) {
				return [...item.providers.values()];
			});
			return (0, common_1$32.flatten)(providers);
		}
		/**
		* Returns an array of instance wrappers (controllers).
		* Depending on the options, the array will contain either all controllers or only controllers with the specified metadata key.
		* @param options Discovery options.
		* @param modules A list of modules to filter by.
		* @returns An array of instance wrappers (controllers).
		*/
		getControllers(options = {}, modules = this.getModules(options)) {
			if ("metadataKey" in options) {
				const controllers$1 = discoverable_meta_host_collection_1$1.DiscoverableMetaHostCollection.getControllersByMetaKey(this.modulesContainer, options.metadataKey);
				return Array.from(controllers$1);
			}
			const controllers = modules.map(function(item) {
				return [...item.controllers.values()];
			});
			return (0, common_1$32.flatten)(controllers);
		}
		/**
		* Retrieves metadata from the specified instance wrapper.
		* @param decorator The decorator to retrieve metadata of.
		* @param instanceWrapper Reference to the instance wrapper.
		* @param methodKey An optional method key to retrieve metadata from.
		* @returns Discovered metadata.
		*/
		getMetadataByDecorator(decorator, instanceWrapper, methodKey) {
			var _instanceWrapper$inst, _instanceWrapper$inst2;
			if (methodKey) return Reflect.getMetadata(decorator.KEY, instanceWrapper.instance[methodKey]);
			const clsRef = (_instanceWrapper$inst = (_instanceWrapper$inst2 = instanceWrapper.instance) === null || _instanceWrapper$inst2 === void 0 ? void 0 : _instanceWrapper$inst2.constructor) !== null && _instanceWrapper$inst !== void 0 ? _instanceWrapper$inst : instanceWrapper.metatype;
			return Reflect.getMetadata(decorator.KEY, clsRef);
		}
		/**
		* Returns a list of modules to be used for discovery.
		*/
		getModules(options = {}) {
			const includeInOpts = "include" in options;
			if (!includeInOpts) {
				const moduleRefs = [...this.modulesContainer.values()];
				return moduleRefs;
			}
			const whitelisted = this.includeWhitelisted(options.include);
			return whitelisted;
		}
		includeWhitelisted(include) {
			const moduleRefs = [...this.modulesContainer.values()];
			return moduleRefs.filter(function({ metatype }) {
				return include.some(function(item) {
					return item === metatype;
				});
			});
		}
	};
	exports.DiscoveryService = DiscoveryService;
	exports.DiscoveryService = DiscoveryService = tslib_1$23.__decorate([(0, common_1$32.Injectable)(), tslib_1$23.__metadata("design:paramtypes", [modules_container_1$4.ModulesContainer])], DiscoveryService);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/discovery/discovery-module.js
var require_discovery_module = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/discovery/discovery-module.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiscoveryModule = void 0;
	const tslib_1$22 = __require("tslib");
	const common_1$31 = require_common();
	const metadata_scanner_1$4 = require_metadata_scanner();
	const discovery_service_1 = require_discovery_service();
	/**
	* @publicApi
	*/
	let DiscoveryModule = class DiscoveryModule$1 {};
	exports.DiscoveryModule = DiscoveryModule;
	exports.DiscoveryModule = DiscoveryModule = tslib_1$22.__decorate([(0, common_1$31.Module)({
		providers: [metadata_scanner_1$4.MetadataScanner, discovery_service_1.DiscoveryService],
		exports: [metadata_scanner_1$4.MetadataScanner, discovery_service_1.DiscoveryService]
	})], DiscoveryModule);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/discovery/index.js
var require_discovery = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/discovery/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$21 = __require("tslib");
	tslib_1$21.__exportStar(require_discovery_module(), exports);
	tslib_1$21.__exportStar(require_discovery_service(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js
var require_performanceTimestampProvider = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.performanceTimestampProvider = void 0;
	exports.performanceTimestampProvider = {
		now: function() {
			return (exports.performanceTimestampProvider.delegate || performance).now();
		},
		delegate: void 0
	};
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js
var require_animationFrameProvider = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js"(exports) {
	var __read$3 = void 0 && (void 0).__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray$2 = void 0 && (void 0).__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.animationFrameProvider = void 0;
	var Subscription_1$2 = require_Subscription();
	exports.animationFrameProvider = {
		schedule: function(callback) {
			var request = requestAnimationFrame;
			var cancel = cancelAnimationFrame;
			var delegate = exports.animationFrameProvider.delegate;
			if (delegate) {
				request = delegate.requestAnimationFrame;
				cancel = delegate.cancelAnimationFrame;
			}
			var handle = request(function(timestamp) {
				cancel = void 0;
				callback(timestamp);
			});
			return new Subscription_1$2.Subscription(function() {
				return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
			});
		},
		requestAnimationFrame: function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var delegate = exports.animationFrameProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray$2([], __read$3(args)));
		},
		cancelAnimationFrame: function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var delegate = exports.animationFrameProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray$2([], __read$3(args)));
		},
		delegate: void 0
	};
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js
var require_animationFrames = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.animationFrames = void 0;
	var Observable_1$11 = require_Observable();
	var performanceTimestampProvider_1 = require_performanceTimestampProvider();
	var animationFrameProvider_1$1 = require_animationFrameProvider();
	function animationFrames(timestampProvider) {
		return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
	}
	exports.animationFrames = animationFrames;
	function animationFramesFactory(timestampProvider) {
		return new Observable_1$11.Observable(function(subscriber) {
			var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
			var start = provider.now();
			var id = 0;
			var run = function() {
				if (!subscriber.closed) id = animationFrameProvider_1$1.animationFrameProvider.requestAnimationFrame(function(timestamp) {
					id = 0;
					var now = provider.now();
					subscriber.next({
						timestamp: timestampProvider ? now : timestamp,
						elapsed: now - start
					});
					run();
				});
			};
			run();
			return function() {
				if (id) animationFrameProvider_1$1.animationFrameProvider.cancelAnimationFrame(id);
			};
		});
	}
	var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/Immediate.js
var require_Immediate = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/Immediate.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TestTools = exports.Immediate = void 0;
	var nextHandle = 1;
	var resolved;
	var activeHandles = {};
	function findAndClearHandle(handle) {
		if (handle in activeHandles) {
			delete activeHandles[handle];
			return true;
		}
		return false;
	}
	exports.Immediate = {
		setImmediate: function(cb) {
			var handle = nextHandle++;
			activeHandles[handle] = true;
			if (!resolved) resolved = Promise.resolve();
			resolved.then(function() {
				return findAndClearHandle(handle) && cb();
			});
			return handle;
		},
		clearImmediate: function(handle) {
			findAndClearHandle(handle);
		}
	};
	exports.TestTools = { pending: function() {
		return Object.keys(activeHandles).length;
	} };
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js
var require_immediateProvider = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js"(exports) {
	var __read$2 = void 0 && (void 0).__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray$1 = void 0 && (void 0).__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.immediateProvider = void 0;
	var Immediate_1 = require_Immediate();
	var setImmediate = Immediate_1.Immediate.setImmediate, clearImmediate = Immediate_1.Immediate.clearImmediate;
	exports.immediateProvider = {
		setImmediate: function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var delegate = exports.immediateProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray$1([], __read$2(args)));
		},
		clearImmediate: function(handle) {
			var delegate = exports.immediateProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
		},
		delegate: void 0
	};
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js
var require_AsapAction = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js"(exports) {
	var __extends$6 = void 0 && (void 0).__extends || function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$1, b$1) {
				d$1.__proto__ = b$1;
			} || function(d$1, b$1) {
				for (var p in b$1) if (Object.prototype.hasOwnProperty.call(b$1, p)) d$1[p] = b$1[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	}();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsapAction = void 0;
	var AsyncAction_1$3 = require_AsyncAction();
	var immediateProvider_1 = require_immediateProvider();
	var AsapAction = function(_super) {
		__extends$6(AsapAction$1, _super);
		function AsapAction$1(scheduler, work) {
			var _this = _super.call(this, scheduler, work) || this;
			_this.scheduler = scheduler;
			_this.work = work;
			return _this;
		}
		AsapAction$1.prototype.requestAsyncId = function(scheduler, id, delay) {
			if (delay === void 0) delay = 0;
			if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
			scheduler.actions.push(this);
			return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
		};
		AsapAction$1.prototype.recycleAsyncId = function(scheduler, id, delay) {
			var _a$2;
			if (delay === void 0) delay = 0;
			if (delay != null ? delay > 0 : this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
			var actions = scheduler.actions;
			if (id != null && ((_a$2 = actions[actions.length - 1]) === null || _a$2 === void 0 ? void 0 : _a$2.id) !== id) {
				immediateProvider_1.immediateProvider.clearImmediate(id);
				if (scheduler._scheduled === id) scheduler._scheduled = void 0;
			}
			return void 0;
		};
		return AsapAction$1;
	}(AsyncAction_1$3.AsyncAction);
	exports.AsapAction = AsapAction;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js
var require_AsapScheduler = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js"(exports) {
	var __extends$5 = void 0 && (void 0).__extends || function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$1, b$1) {
				d$1.__proto__ = b$1;
			} || function(d$1, b$1) {
				for (var p in b$1) if (Object.prototype.hasOwnProperty.call(b$1, p)) d$1[p] = b$1[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	}();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsapScheduler = void 0;
	var AsyncScheduler_1$3 = require_AsyncScheduler();
	var AsapScheduler = function(_super) {
		__extends$5(AsapScheduler$1, _super);
		function AsapScheduler$1() {
			return _super !== null && _super.apply(this, arguments) || this;
		}
		AsapScheduler$1.prototype.flush = function(action) {
			this._active = true;
			var flushId = this._scheduled;
			this._scheduled = void 0;
			var actions = this.actions;
			var error;
			action = action || actions.shift();
			do
				if (error = action.execute(action.state, action.delay)) break;
			while ((action = actions[0]) && action.id === flushId && actions.shift());
			this._active = false;
			if (error) {
				while ((action = actions[0]) && action.id === flushId && actions.shift()) action.unsubscribe();
				throw error;
			}
		};
		return AsapScheduler$1;
	}(AsyncScheduler_1$3.AsyncScheduler);
	exports.AsapScheduler = AsapScheduler;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/asap.js
var require_asap = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/asap.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.asap = exports.asapScheduler = void 0;
	var AsapAction_1 = require_AsapAction();
	var AsapScheduler_1 = require_AsapScheduler();
	exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
	exports.asap = exports.asapScheduler;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js
var require_QueueAction = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js"(exports) {
	var __extends$4 = void 0 && (void 0).__extends || function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$1, b$1) {
				d$1.__proto__ = b$1;
			} || function(d$1, b$1) {
				for (var p in b$1) if (Object.prototype.hasOwnProperty.call(b$1, p)) d$1[p] = b$1[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	}();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.QueueAction = void 0;
	var AsyncAction_1$2 = require_AsyncAction();
	var QueueAction = function(_super) {
		__extends$4(QueueAction$1, _super);
		function QueueAction$1(scheduler, work) {
			var _this = _super.call(this, scheduler, work) || this;
			_this.scheduler = scheduler;
			_this.work = work;
			return _this;
		}
		QueueAction$1.prototype.schedule = function(state, delay) {
			if (delay === void 0) delay = 0;
			if (delay > 0) return _super.prototype.schedule.call(this, state, delay);
			this.delay = delay;
			this.state = state;
			this.scheduler.flush(this);
			return this;
		};
		QueueAction$1.prototype.execute = function(state, delay) {
			return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
		};
		QueueAction$1.prototype.requestAsyncId = function(scheduler, id, delay) {
			if (delay === void 0) delay = 0;
			if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
			scheduler.flush(this);
			return 0;
		};
		return QueueAction$1;
	}(AsyncAction_1$2.AsyncAction);
	exports.QueueAction = QueueAction;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js
var require_QueueScheduler = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js"(exports) {
	var __extends$3 = void 0 && (void 0).__extends || function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$1, b$1) {
				d$1.__proto__ = b$1;
			} || function(d$1, b$1) {
				for (var p in b$1) if (Object.prototype.hasOwnProperty.call(b$1, p)) d$1[p] = b$1[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	}();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.QueueScheduler = void 0;
	var AsyncScheduler_1$2 = require_AsyncScheduler();
	var QueueScheduler = function(_super) {
		__extends$3(QueueScheduler$1, _super);
		function QueueScheduler$1() {
			return _super !== null && _super.apply(this, arguments) || this;
		}
		return QueueScheduler$1;
	}(AsyncScheduler_1$2.AsyncScheduler);
	exports.QueueScheduler = QueueScheduler;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/queue.js
var require_queue = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/queue.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.queue = exports.queueScheduler = void 0;
	var QueueAction_1 = require_QueueAction();
	var QueueScheduler_1 = require_QueueScheduler();
	exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
	exports.queue = exports.queueScheduler;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js
var require_AnimationFrameAction = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js"(exports) {
	var __extends$2 = void 0 && (void 0).__extends || function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$1, b$1) {
				d$1.__proto__ = b$1;
			} || function(d$1, b$1) {
				for (var p in b$1) if (Object.prototype.hasOwnProperty.call(b$1, p)) d$1[p] = b$1[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	}();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AnimationFrameAction = void 0;
	var AsyncAction_1$1 = require_AsyncAction();
	var animationFrameProvider_1 = require_animationFrameProvider();
	var AnimationFrameAction = function(_super) {
		__extends$2(AnimationFrameAction$1, _super);
		function AnimationFrameAction$1(scheduler, work) {
			var _this = _super.call(this, scheduler, work) || this;
			_this.scheduler = scheduler;
			_this.work = work;
			return _this;
		}
		AnimationFrameAction$1.prototype.requestAsyncId = function(scheduler, id, delay) {
			if (delay === void 0) delay = 0;
			if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
			scheduler.actions.push(this);
			return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function() {
				return scheduler.flush(void 0);
			}));
		};
		AnimationFrameAction$1.prototype.recycleAsyncId = function(scheduler, id, delay) {
			var _a$2;
			if (delay === void 0) delay = 0;
			if (delay != null ? delay > 0 : this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
			var actions = scheduler.actions;
			if (id != null && id === scheduler._scheduled && ((_a$2 = actions[actions.length - 1]) === null || _a$2 === void 0 ? void 0 : _a$2.id) !== id) {
				animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
				scheduler._scheduled = void 0;
			}
			return void 0;
		};
		return AnimationFrameAction$1;
	}(AsyncAction_1$1.AsyncAction);
	exports.AnimationFrameAction = AnimationFrameAction;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js
var require_AnimationFrameScheduler = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js"(exports) {
	var __extends$1 = void 0 && (void 0).__extends || function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$1, b$1) {
				d$1.__proto__ = b$1;
			} || function(d$1, b$1) {
				for (var p in b$1) if (Object.prototype.hasOwnProperty.call(b$1, p)) d$1[p] = b$1[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	}();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AnimationFrameScheduler = void 0;
	var AsyncScheduler_1$1 = require_AsyncScheduler();
	var AnimationFrameScheduler = function(_super) {
		__extends$1(AnimationFrameScheduler$1, _super);
		function AnimationFrameScheduler$1() {
			return _super !== null && _super.apply(this, arguments) || this;
		}
		AnimationFrameScheduler$1.prototype.flush = function(action) {
			this._active = true;
			var flushId;
			if (action) flushId = action.id;
			else {
				flushId = this._scheduled;
				this._scheduled = void 0;
			}
			var actions = this.actions;
			var error;
			action = action || actions.shift();
			do
				if (error = action.execute(action.state, action.delay)) break;
			while ((action = actions[0]) && action.id === flushId && actions.shift());
			this._active = false;
			if (error) {
				while ((action = actions[0]) && action.id === flushId && actions.shift()) action.unsubscribe();
				throw error;
			}
		};
		return AnimationFrameScheduler$1;
	}(AsyncScheduler_1$1.AsyncScheduler);
	exports.AnimationFrameScheduler = AnimationFrameScheduler;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js
var require_animationFrame = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.animationFrame = exports.animationFrameScheduler = void 0;
	var AnimationFrameAction_1 = require_AnimationFrameAction();
	var AnimationFrameScheduler_1 = require_AnimationFrameScheduler();
	exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
	exports.animationFrame = exports.animationFrameScheduler;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js
var require_VirtualTimeScheduler = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js"(exports) {
	var __extends = void 0 && (void 0).__extends || function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$1, b$1) {
				d$1.__proto__ = b$1;
			} || function(d$1, b$1) {
				for (var p in b$1) if (Object.prototype.hasOwnProperty.call(b$1, p)) d$1[p] = b$1[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	}();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
	var AsyncAction_1 = require_AsyncAction();
	var Subscription_1$1 = require_Subscription();
	var AsyncScheduler_1 = require_AsyncScheduler();
	var VirtualTimeScheduler = function(_super) {
		__extends(VirtualTimeScheduler$1, _super);
		function VirtualTimeScheduler$1(schedulerActionCtor, maxFrames) {
			if (schedulerActionCtor === void 0) schedulerActionCtor = VirtualAction;
			if (maxFrames === void 0) maxFrames = Infinity;
			var _this = _super.call(this, schedulerActionCtor, function() {
				return _this.frame;
			}) || this;
			_this.maxFrames = maxFrames;
			_this.frame = 0;
			_this.index = -1;
			return _this;
		}
		VirtualTimeScheduler$1.prototype.flush = function() {
			var _a$2 = this, actions = _a$2.actions, maxFrames = _a$2.maxFrames;
			var error;
			var action;
			while ((action = actions[0]) && action.delay <= maxFrames) {
				actions.shift();
				this.frame = action.delay;
				if (error = action.execute(action.state, action.delay)) break;
			}
			if (error) {
				while (action = actions.shift()) action.unsubscribe();
				throw error;
			}
		};
		VirtualTimeScheduler$1.frameTimeFactor = 10;
		return VirtualTimeScheduler$1;
	}(AsyncScheduler_1.AsyncScheduler);
	exports.VirtualTimeScheduler = VirtualTimeScheduler;
	var VirtualAction = function(_super) {
		__extends(VirtualAction$1, _super);
		function VirtualAction$1(scheduler, work, index) {
			if (index === void 0) index = scheduler.index += 1;
			var _this = _super.call(this, scheduler, work) || this;
			_this.scheduler = scheduler;
			_this.work = work;
			_this.index = index;
			_this.active = true;
			_this.index = scheduler.index = index;
			return _this;
		}
		VirtualAction$1.prototype.schedule = function(state, delay) {
			if (delay === void 0) delay = 0;
			if (Number.isFinite(delay)) {
				if (!this.id) return _super.prototype.schedule.call(this, state, delay);
				this.active = false;
				var action = new VirtualAction$1(this.scheduler, this.work);
				this.add(action);
				return action.schedule(state, delay);
			} else return Subscription_1$1.Subscription.EMPTY;
		};
		VirtualAction$1.prototype.requestAsyncId = function(scheduler, id, delay) {
			if (delay === void 0) delay = 0;
			this.delay = scheduler.frame + delay;
			var actions = scheduler.actions;
			actions.push(this);
			actions.sort(VirtualAction$1.sortActions);
			return 1;
		};
		VirtualAction$1.prototype.recycleAsyncId = function(scheduler, id, delay) {
			if (delay === void 0) delay = 0;
			return void 0;
		};
		VirtualAction$1.prototype._execute = function(state, delay) {
			if (this.active === true) return _super.prototype._execute.call(this, state, delay);
		};
		VirtualAction$1.sortActions = function(a, b) {
			if (a.delay === b.delay) if (a.index === b.index) return 0;
			else if (a.index > b.index) return 1;
			else return -1;
			else if (a.delay > b.delay) return 1;
			else return -1;
		};
		return VirtualAction$1;
	}(AsyncAction_1.AsyncAction);
	exports.VirtualAction = VirtualAction;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isObservable.js
var require_isObservable = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isObservable.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isObservable = void 0;
	var Observable_1$10 = require_Observable();
	var isFunction_1$2 = require_isFunction();
	function isObservable(obj) {
		return !!obj && (obj instanceof Observable_1$10.Observable || isFunction_1$2.isFunction(obj.lift) && isFunction_1$2.isFunction(obj.subscribe));
	}
	exports.isObservable = isObservable;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/lastValueFrom.js
var require_lastValueFrom = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/lastValueFrom.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.lastValueFrom = void 0;
	var EmptyError_1$2 = require_EmptyError();
	function lastValueFrom(source, config) {
		var hasConfig = typeof config === "object";
		return new Promise(function(resolve, reject) {
			var _hasValue = false;
			var _value;
			source.subscribe({
				next: function(value) {
					_value = value;
					_hasValue = true;
				},
				error: reject,
				complete: function() {
					if (_hasValue) resolve(_value);
					else if (hasConfig) resolve(config.defaultValue);
					else reject(new EmptyError_1$2.EmptyError());
				}
			});
		});
	}
	exports.lastValueFrom = lastValueFrom;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/firstValueFrom.js
var require_firstValueFrom = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/firstValueFrom.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.firstValueFrom = void 0;
	var EmptyError_1$1 = require_EmptyError();
	var Subscriber_1$1 = require_Subscriber();
	function firstValueFrom(source, config) {
		var hasConfig = typeof config === "object";
		return new Promise(function(resolve, reject) {
			var subscriber = new Subscriber_1$1.SafeSubscriber({
				next: function(value) {
					resolve(value);
					subscriber.unsubscribe();
				},
				error: reject,
				complete: function() {
					if (hasConfig) resolve(config.defaultValue);
					else reject(new EmptyError_1$1.EmptyError());
				}
			});
			source.subscribe(subscriber);
		});
	}
	exports.firstValueFrom = firstValueFrom;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js
var require_bindCallbackInternals = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js"(exports) {
	var __read$1 = void 0 && (void 0).__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = void 0 && (void 0).__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bindCallbackInternals = void 0;
	var isScheduler_1$1 = require_isScheduler();
	var Observable_1$9 = require_Observable();
	var subscribeOn_1$1 = require_subscribeOn();
	var mapOneOrManyArgs_1$3 = require_mapOneOrManyArgs();
	var observeOn_1$1 = require_observeOn();
	var AsyncSubject_1$1 = require_AsyncSubject();
	function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
		if (resultSelector) if (isScheduler_1$1.isScheduler(resultSelector)) scheduler = resultSelector;
		else return function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1$3.mapOneOrManyArgs(resultSelector));
		};
		if (scheduler) return function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1$1.subscribeOn(scheduler), observeOn_1$1.observeOn(scheduler));
		};
		return function() {
			var _this = this;
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var subject = new AsyncSubject_1$1.AsyncSubject();
			var uninitialized = true;
			return new Observable_1$9.Observable(function(subscriber) {
				var subs = subject.subscribe(subscriber);
				if (uninitialized) {
					uninitialized = false;
					var isAsync_1 = false;
					var isComplete_1 = false;
					callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read$1(args)), [function() {
						var results = [];
						for (var _i$1 = 0; _i$1 < arguments.length; _i$1++) results[_i$1] = arguments[_i$1];
						if (isNodeStyle) {
							var err = results.shift();
							if (err != null) {
								subject.error(err);
								return;
							}
						}
						subject.next(1 < results.length ? results : results[0]);
						isComplete_1 = true;
						if (isAsync_1) subject.complete();
					}]));
					if (isComplete_1) subject.complete();
					isAsync_1 = true;
				}
				return subs;
			});
		};
	}
	exports.bindCallbackInternals = bindCallbackInternals;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js
var require_bindCallback = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bindCallback = void 0;
	var bindCallbackInternals_1$1 = require_bindCallbackInternals();
	function bindCallback(callbackFunc, resultSelector, scheduler) {
		return bindCallbackInternals_1$1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
	}
	exports.bindCallback = bindCallback;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js
var require_bindNodeCallback = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bindNodeCallback = void 0;
	var bindCallbackInternals_1 = require_bindCallbackInternals();
	function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
		return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
	}
	exports.bindNodeCallback = bindNodeCallback;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/defer.js
var require_defer = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/defer.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.defer = void 0;
	var Observable_1$8 = require_Observable();
	var innerFrom_1$5 = require_innerFrom();
	function defer(observableFactory) {
		return new Observable_1$8.Observable(function(subscriber) {
			innerFrom_1$5.innerFrom(observableFactory()).subscribe(subscriber);
		});
	}
	exports.defer = defer;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/connectable.js
var require_connectable = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/connectable.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.connectable = void 0;
	var Subject_1$1 = require_Subject();
	var Observable_1$7 = require_Observable();
	var defer_1$3 = require_defer();
	var DEFAULT_CONFIG = {
		connector: function() {
			return new Subject_1$1.Subject();
		},
		resetOnDisconnect: true
	};
	function connectable(source, config) {
		if (config === void 0) config = DEFAULT_CONFIG;
		var connection = null;
		var connector = config.connector, _a$2 = config.resetOnDisconnect, resetOnDisconnect = _a$2 === void 0 ? true : _a$2;
		var subject = connector();
		var result = new Observable_1$7.Observable(function(subscriber) {
			return subject.subscribe(subscriber);
		});
		result.connect = function() {
			if (!connection || connection.closed) {
				connection = defer_1$3.defer(function() {
					return source;
				}).subscribe(subject);
				if (resetOnDisconnect) connection.add(function() {
					return subject = connector();
				});
			}
			return connection;
		};
		return result;
	}
	exports.connectable = connectable;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js
var require_forkJoin = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.forkJoin = void 0;
	var Observable_1$6 = require_Observable();
	var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
	var innerFrom_1$4 = require_innerFrom();
	var args_1$1 = require_args();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var mapOneOrManyArgs_1$2 = require_mapOneOrManyArgs();
	var createObject_1 = require_createObject();
	function forkJoin() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var resultSelector = args_1$1.popResultSelector(args);
		var _a$2 = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a$2.args, keys = _a$2.keys;
		var result = new Observable_1$6.Observable(function(subscriber) {
			var length = sources.length;
			if (!length) {
				subscriber.complete();
				return;
			}
			var values = new Array(length);
			var remainingCompletions = length;
			var remainingEmissions = length;
			var _loop_1 = function(sourceIndex$1) {
				var hasValue = false;
				innerFrom_1$4.innerFrom(sources[sourceIndex$1]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
					if (!hasValue) {
						hasValue = true;
						remainingEmissions--;
					}
					values[sourceIndex$1] = value;
				}, function() {
					return remainingCompletions--;
				}, void 0, function() {
					if (!remainingCompletions || !hasValue) {
						if (!remainingEmissions) subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
						subscriber.complete();
					}
				}));
			};
			for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) _loop_1(sourceIndex);
		});
		return resultSelector ? result.pipe(mapOneOrManyArgs_1$2.mapOneOrManyArgs(resultSelector)) : result;
	}
	exports.forkJoin = forkJoin;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js
var require_fromEvent = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js"(exports) {
	var __read = void 0 && (void 0).__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.fromEvent = void 0;
	var innerFrom_1$3 = require_innerFrom();
	var Observable_1$5 = require_Observable();
	var mergeMap_1$1 = require_mergeMap();
	var isArrayLike_1 = require_isArrayLike();
	var isFunction_1$1 = require_isFunction();
	var mapOneOrManyArgs_1$1 = require_mapOneOrManyArgs();
	var nodeEventEmitterMethods = ["addListener", "removeListener"];
	var eventTargetMethods = ["addEventListener", "removeEventListener"];
	var jqueryMethods = ["on", "off"];
	function fromEvent(target, eventName, options, resultSelector) {
		if (isFunction_1$1.isFunction(options)) {
			resultSelector = options;
			options = void 0;
		}
		if (resultSelector) return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1$1.mapOneOrManyArgs(resultSelector));
		var _a$2 = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
			return function(handler) {
				return target[methodName](eventName, handler, options);
			};
		}) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a$2[0], remove = _a$2[1];
		if (!add) {
			if (isArrayLike_1.isArrayLike(target)) return mergeMap_1$1.mergeMap(function(subTarget) {
				return fromEvent(subTarget, eventName, options);
			})(innerFrom_1$3.innerFrom(target));
		}
		if (!add) throw new TypeError("Invalid event target");
		return new Observable_1$5.Observable(function(subscriber) {
			var handler = function() {
				var args = [];
				for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
				return subscriber.next(1 < args.length ? args : args[0]);
			};
			add(handler);
			return function() {
				return remove(handler);
			};
		});
	}
	exports.fromEvent = fromEvent;
	function toCommonHandlerRegistry(target, eventName) {
		return function(methodName) {
			return function(handler) {
				return target[methodName](eventName, handler);
			};
		};
	}
	function isNodeStyleEventEmitter(target) {
		return isFunction_1$1.isFunction(target.addListener) && isFunction_1$1.isFunction(target.removeListener);
	}
	function isJQueryStyleEventEmitter(target) {
		return isFunction_1$1.isFunction(target.on) && isFunction_1$1.isFunction(target.off);
	}
	function isEventTarget(target) {
		return isFunction_1$1.isFunction(target.addEventListener) && isFunction_1$1.isFunction(target.removeEventListener);
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js
var require_fromEventPattern = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.fromEventPattern = void 0;
	var Observable_1$4 = require_Observable();
	var isFunction_1 = require_isFunction();
	var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
	function fromEventPattern(addHandler, removeHandler, resultSelector) {
		if (resultSelector) return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
		return new Observable_1$4.Observable(function(subscriber) {
			var handler = function() {
				var e = [];
				for (var _i = 0; _i < arguments.length; _i++) e[_i] = arguments[_i];
				return subscriber.next(e.length === 1 ? e[0] : e);
			};
			var retValue = addHandler(handler);
			return isFunction_1.isFunction(removeHandler) ? function() {
				return removeHandler(handler, retValue);
			} : void 0;
		});
	}
	exports.fromEventPattern = fromEventPattern;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/generate.js
var require_generate = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/generate.js"(exports) {
	var __generator = void 0 && (void 0).__generator || function(thisArg, body) {
		var _ = {
			label: 0,
			sent: function() {
				if (t[0] & 1) throw t[1];
				return t[1];
			},
			trys: [],
			ops: []
		}, f, y, t, g;
		return g = {
			next: verb(0),
			"throw": verb(1),
			"return": verb(2)
		}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
			return this;
		}), g;
		function verb(n) {
			return function(v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError("Generator is already executing.");
			while (_) try {
				if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
				if (y = 0, t) op = [op[0] & 2, t.value];
				switch (op[0]) {
					case 0:
					case 1:
						t = op;
						break;
					case 4:
						_.label++;
						return {
							value: op[1],
							done: false
						};
					case 5:
						_.label++;
						y = op[1];
						op = [0];
						continue;
					case 7:
						op = _.ops.pop();
						_.trys.pop();
						continue;
					default:
						if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
							_ = 0;
							continue;
						}
						if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
							_.label = op[1];
							break;
						}
						if (op[0] === 6 && _.label < t[1]) {
							_.label = t[1];
							t = op;
							break;
						}
						if (t && _.label < t[2]) {
							_.label = t[2];
							_.ops.push(op);
							break;
						}
						if (t[2]) _.ops.pop();
						_.trys.pop();
						continue;
				}
				op = body.call(thisArg, _);
			} catch (e) {
				op = [6, e];
				y = 0;
			} finally {
				f = t = 0;
			}
			if (op[0] & 5) throw op[1];
			return {
				value: op[0] ? op[1] : void 0,
				done: true
			};
		}
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.generate = void 0;
	var identity_1$1 = require_identity();
	var isScheduler_1 = require_isScheduler();
	var defer_1$2 = require_defer();
	var scheduleIterable_1 = require_scheduleIterable();
	function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
		var _a$2, _b;
		var resultSelector;
		var initialState;
		if (arguments.length === 1) _a$2 = initialStateOrOptions, initialState = _a$2.initialState, condition = _a$2.condition, iterate = _a$2.iterate, _b = _a$2.resultSelector, resultSelector = _b === void 0 ? identity_1$1.identity : _b, scheduler = _a$2.scheduler;
		else {
			initialState = initialStateOrOptions;
			if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
				resultSelector = identity_1$1.identity;
				scheduler = resultSelectorOrScheduler;
			} else resultSelector = resultSelectorOrScheduler;
		}
		function gen() {
			var state;
			return __generator(this, function(_a$3) {
				switch (_a$3.label) {
					case 0:
						state = initialState;
						_a$3.label = 1;
					case 1:
						if (!(!condition || condition(state))) return [3, 4];
						return [4, resultSelector(state)];
					case 2:
						_a$3.sent();
						_a$3.label = 3;
					case 3:
						state = iterate(state);
						return [3, 1];
					case 4: return [2];
				}
			});
		}
		return defer_1$2.defer(scheduler ? function() {
			return scheduleIterable_1.scheduleIterable(gen(), scheduler);
		} : gen);
	}
	exports.generate = generate;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/iif.js
var require_iif = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/iif.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.iif = void 0;
	var defer_1$1 = require_defer();
	function iif(condition, trueResult, falseResult) {
		return defer_1$1.defer(function() {
			return condition() ? trueResult : falseResult;
		});
	}
	exports.iif = iif;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/merge.js
var require_merge = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/merge.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.merge = void 0;
	var mergeAll_1$1 = require_mergeAll();
	var innerFrom_1$2 = require_innerFrom();
	var empty_1$3 = require_empty();
	var args_1 = require_args();
	var from_1$2 = require_from();
	function merge() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var scheduler = args_1.popScheduler(args);
		var concurrent = args_1.popNumber(args, Infinity);
		var sources = args;
		return !sources.length ? empty_1$3.EMPTY : sources.length === 1 ? innerFrom_1$2.innerFrom(sources[0]) : mergeAll_1$1.mergeAll(concurrent)(from_1$2.from(sources, scheduler));
	}
	exports.merge = merge;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/never.js
var require_never = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/never.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.never = exports.NEVER = void 0;
	var Observable_1$3 = require_Observable();
	var noop_1$1 = require_noop();
	exports.NEVER = new Observable_1$3.Observable(noop_1$1.noop);
	function never() {
		return exports.NEVER;
	}
	exports.never = never;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/pairs.js
var require_pairs = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/pairs.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.pairs = void 0;
	var from_1$1 = require_from();
	function pairs(obj, scheduler) {
		return from_1$1.from(Object.entries(obj), scheduler);
	}
	exports.pairs = pairs;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/partition.js
var require_partition = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/partition.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.partition = void 0;
	var not_1 = require_not();
	var filter_1$1 = require_filter();
	var innerFrom_1$1 = require_innerFrom();
	function partition(source, predicate, thisArg) {
		return [filter_1$1.filter(predicate, thisArg)(innerFrom_1$1.innerFrom(source)), filter_1$1.filter(not_1.not(predicate, thisArg))(innerFrom_1$1.innerFrom(source))];
	}
	exports.partition = partition;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/range.js
var require_range = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/range.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.range = void 0;
	var Observable_1$2 = require_Observable();
	var empty_1$2 = require_empty();
	function range(start, count, scheduler) {
		if (count == null) {
			count = start;
			start = 0;
		}
		if (count <= 0) return empty_1$2.EMPTY;
		var end = count + start;
		return new Observable_1$2.Observable(scheduler ? function(subscriber) {
			var n = start;
			return scheduler.schedule(function() {
				if (n < end) {
					subscriber.next(n++);
					this.schedule();
				} else subscriber.complete();
			});
		} : function(subscriber) {
			var n = start;
			while (n < end && !subscriber.closed) subscriber.next(n++);
			subscriber.complete();
		});
	}
	exports.range = range;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/using.js
var require_using = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/using.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.using = void 0;
	var Observable_1$1 = require_Observable();
	var innerFrom_1 = require_innerFrom();
	var empty_1$1 = require_empty();
	function using(resourceFactory, observableFactory) {
		return new Observable_1$1.Observable(function(subscriber) {
			var resource = resourceFactory();
			var result = observableFactory(resource);
			var source = result ? innerFrom_1.innerFrom(result) : empty_1$1.EMPTY;
			source.subscribe(subscriber);
			return function() {
				if (resource) resource.unsubscribe();
			};
		});
	}
	exports.using = using;
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/types.js
var require_types = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/types.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
} });

//#endregion
//#region ../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/index.js
var require_cjs = __commonJS({ "../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/index.js"(exports) {
	var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		Object.defineProperty(o, k2, {
			enumerable: true,
			get: function() {
				return m[k];
			}
		});
	} : function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	});
	var __exportStar = void 0 && (void 0).__exportStar || function(m, exports$1) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, p)) __createBinding(exports$1, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
	exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
	exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.onErrorResumeNextWith = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = void 0;
	exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = void 0;
	var Observable_1 = require_Observable();
	Object.defineProperty(exports, "Observable", {
		enumerable: true,
		get: function() {
			return Observable_1.Observable;
		}
	});
	var ConnectableObservable_1 = require_ConnectableObservable();
	Object.defineProperty(exports, "ConnectableObservable", {
		enumerable: true,
		get: function() {
			return ConnectableObservable_1.ConnectableObservable;
		}
	});
	var observable_1 = require_observable();
	Object.defineProperty(exports, "observable", {
		enumerable: true,
		get: function() {
			return observable_1.observable;
		}
	});
	var animationFrames_1 = require_animationFrames();
	Object.defineProperty(exports, "animationFrames", {
		enumerable: true,
		get: function() {
			return animationFrames_1.animationFrames;
		}
	});
	var Subject_1 = require_Subject();
	Object.defineProperty(exports, "Subject", {
		enumerable: true,
		get: function() {
			return Subject_1.Subject;
		}
	});
	var BehaviorSubject_1 = require_BehaviorSubject();
	Object.defineProperty(exports, "BehaviorSubject", {
		enumerable: true,
		get: function() {
			return BehaviorSubject_1.BehaviorSubject;
		}
	});
	var ReplaySubject_1 = require_ReplaySubject();
	Object.defineProperty(exports, "ReplaySubject", {
		enumerable: true,
		get: function() {
			return ReplaySubject_1.ReplaySubject;
		}
	});
	var AsyncSubject_1 = require_AsyncSubject();
	Object.defineProperty(exports, "AsyncSubject", {
		enumerable: true,
		get: function() {
			return AsyncSubject_1.AsyncSubject;
		}
	});
	var asap_1 = require_asap();
	Object.defineProperty(exports, "asap", {
		enumerable: true,
		get: function() {
			return asap_1.asap;
		}
	});
	Object.defineProperty(exports, "asapScheduler", {
		enumerable: true,
		get: function() {
			return asap_1.asapScheduler;
		}
	});
	var async_1 = require_async();
	Object.defineProperty(exports, "async", {
		enumerable: true,
		get: function() {
			return async_1.async;
		}
	});
	Object.defineProperty(exports, "asyncScheduler", {
		enumerable: true,
		get: function() {
			return async_1.asyncScheduler;
		}
	});
	var queue_1 = require_queue();
	Object.defineProperty(exports, "queue", {
		enumerable: true,
		get: function() {
			return queue_1.queue;
		}
	});
	Object.defineProperty(exports, "queueScheduler", {
		enumerable: true,
		get: function() {
			return queue_1.queueScheduler;
		}
	});
	var animationFrame_1 = require_animationFrame();
	Object.defineProperty(exports, "animationFrame", {
		enumerable: true,
		get: function() {
			return animationFrame_1.animationFrame;
		}
	});
	Object.defineProperty(exports, "animationFrameScheduler", {
		enumerable: true,
		get: function() {
			return animationFrame_1.animationFrameScheduler;
		}
	});
	var VirtualTimeScheduler_1 = require_VirtualTimeScheduler();
	Object.defineProperty(exports, "VirtualTimeScheduler", {
		enumerable: true,
		get: function() {
			return VirtualTimeScheduler_1.VirtualTimeScheduler;
		}
	});
	Object.defineProperty(exports, "VirtualAction", {
		enumerable: true,
		get: function() {
			return VirtualTimeScheduler_1.VirtualAction;
		}
	});
	var Scheduler_1 = require_Scheduler();
	Object.defineProperty(exports, "Scheduler", {
		enumerable: true,
		get: function() {
			return Scheduler_1.Scheduler;
		}
	});
	var Subscription_1 = require_Subscription();
	Object.defineProperty(exports, "Subscription", {
		enumerable: true,
		get: function() {
			return Subscription_1.Subscription;
		}
	});
	var Subscriber_1 = require_Subscriber();
	Object.defineProperty(exports, "Subscriber", {
		enumerable: true,
		get: function() {
			return Subscriber_1.Subscriber;
		}
	});
	var Notification_1 = require_Notification();
	Object.defineProperty(exports, "Notification", {
		enumerable: true,
		get: function() {
			return Notification_1.Notification;
		}
	});
	Object.defineProperty(exports, "NotificationKind", {
		enumerable: true,
		get: function() {
			return Notification_1.NotificationKind;
		}
	});
	var pipe_1 = require_pipe();
	Object.defineProperty(exports, "pipe", {
		enumerable: true,
		get: function() {
			return pipe_1.pipe;
		}
	});
	var noop_1 = require_noop();
	Object.defineProperty(exports, "noop", {
		enumerable: true,
		get: function() {
			return noop_1.noop;
		}
	});
	var identity_1 = require_identity();
	Object.defineProperty(exports, "identity", {
		enumerable: true,
		get: function() {
			return identity_1.identity;
		}
	});
	var isObservable_1 = require_isObservable();
	Object.defineProperty(exports, "isObservable", {
		enumerable: true,
		get: function() {
			return isObservable_1.isObservable;
		}
	});
	var lastValueFrom_1 = require_lastValueFrom();
	Object.defineProperty(exports, "lastValueFrom", {
		enumerable: true,
		get: function() {
			return lastValueFrom_1.lastValueFrom;
		}
	});
	var firstValueFrom_1 = require_firstValueFrom();
	Object.defineProperty(exports, "firstValueFrom", {
		enumerable: true,
		get: function() {
			return firstValueFrom_1.firstValueFrom;
		}
	});
	var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
	Object.defineProperty(exports, "ArgumentOutOfRangeError", {
		enumerable: true,
		get: function() {
			return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
		}
	});
	var EmptyError_1 = require_EmptyError();
	Object.defineProperty(exports, "EmptyError", {
		enumerable: true,
		get: function() {
			return EmptyError_1.EmptyError;
		}
	});
	var NotFoundError_1 = require_NotFoundError();
	Object.defineProperty(exports, "NotFoundError", {
		enumerable: true,
		get: function() {
			return NotFoundError_1.NotFoundError;
		}
	});
	var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
	Object.defineProperty(exports, "ObjectUnsubscribedError", {
		enumerable: true,
		get: function() {
			return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
		}
	});
	var SequenceError_1 = require_SequenceError();
	Object.defineProperty(exports, "SequenceError", {
		enumerable: true,
		get: function() {
			return SequenceError_1.SequenceError;
		}
	});
	var timeout_1 = require_timeout();
	Object.defineProperty(exports, "TimeoutError", {
		enumerable: true,
		get: function() {
			return timeout_1.TimeoutError;
		}
	});
	var UnsubscriptionError_1 = require_UnsubscriptionError();
	Object.defineProperty(exports, "UnsubscriptionError", {
		enumerable: true,
		get: function() {
			return UnsubscriptionError_1.UnsubscriptionError;
		}
	});
	var bindCallback_1 = require_bindCallback();
	Object.defineProperty(exports, "bindCallback", {
		enumerable: true,
		get: function() {
			return bindCallback_1.bindCallback;
		}
	});
	var bindNodeCallback_1 = require_bindNodeCallback();
	Object.defineProperty(exports, "bindNodeCallback", {
		enumerable: true,
		get: function() {
			return bindNodeCallback_1.bindNodeCallback;
		}
	});
	var combineLatest_1 = require_combineLatest();
	Object.defineProperty(exports, "combineLatest", {
		enumerable: true,
		get: function() {
			return combineLatest_1.combineLatest;
		}
	});
	var concat_1 = require_concat();
	Object.defineProperty(exports, "concat", {
		enumerable: true,
		get: function() {
			return concat_1.concat;
		}
	});
	var connectable_1 = require_connectable();
	Object.defineProperty(exports, "connectable", {
		enumerable: true,
		get: function() {
			return connectable_1.connectable;
		}
	});
	var defer_1 = require_defer();
	Object.defineProperty(exports, "defer", {
		enumerable: true,
		get: function() {
			return defer_1.defer;
		}
	});
	var empty_1 = require_empty();
	Object.defineProperty(exports, "empty", {
		enumerable: true,
		get: function() {
			return empty_1.empty;
		}
	});
	var forkJoin_1 = require_forkJoin();
	Object.defineProperty(exports, "forkJoin", {
		enumerable: true,
		get: function() {
			return forkJoin_1.forkJoin;
		}
	});
	var from_1 = require_from();
	Object.defineProperty(exports, "from", {
		enumerable: true,
		get: function() {
			return from_1.from;
		}
	});
	var fromEvent_1 = require_fromEvent();
	Object.defineProperty(exports, "fromEvent", {
		enumerable: true,
		get: function() {
			return fromEvent_1.fromEvent;
		}
	});
	var fromEventPattern_1 = require_fromEventPattern();
	Object.defineProperty(exports, "fromEventPattern", {
		enumerable: true,
		get: function() {
			return fromEventPattern_1.fromEventPattern;
		}
	});
	var generate_1 = require_generate();
	Object.defineProperty(exports, "generate", {
		enumerable: true,
		get: function() {
			return generate_1.generate;
		}
	});
	var iif_1 = require_iif();
	Object.defineProperty(exports, "iif", {
		enumerable: true,
		get: function() {
			return iif_1.iif;
		}
	});
	var interval_1 = require_interval();
	Object.defineProperty(exports, "interval", {
		enumerable: true,
		get: function() {
			return interval_1.interval;
		}
	});
	var merge_1 = require_merge();
	Object.defineProperty(exports, "merge", {
		enumerable: true,
		get: function() {
			return merge_1.merge;
		}
	});
	var never_1 = require_never();
	Object.defineProperty(exports, "never", {
		enumerable: true,
		get: function() {
			return never_1.never;
		}
	});
	var of_1 = require_of();
	Object.defineProperty(exports, "of", {
		enumerable: true,
		get: function() {
			return of_1.of;
		}
	});
	var onErrorResumeNext_1 = require_onErrorResumeNext();
	Object.defineProperty(exports, "onErrorResumeNext", {
		enumerable: true,
		get: function() {
			return onErrorResumeNext_1.onErrorResumeNext;
		}
	});
	var pairs_1 = require_pairs();
	Object.defineProperty(exports, "pairs", {
		enumerable: true,
		get: function() {
			return pairs_1.pairs;
		}
	});
	var partition_1 = require_partition();
	Object.defineProperty(exports, "partition", {
		enumerable: true,
		get: function() {
			return partition_1.partition;
		}
	});
	var race_1 = require_race();
	Object.defineProperty(exports, "race", {
		enumerable: true,
		get: function() {
			return race_1.race;
		}
	});
	var range_1 = require_range();
	Object.defineProperty(exports, "range", {
		enumerable: true,
		get: function() {
			return range_1.range;
		}
	});
	var throwError_1 = require_throwError();
	Object.defineProperty(exports, "throwError", {
		enumerable: true,
		get: function() {
			return throwError_1.throwError;
		}
	});
	var timer_1 = require_timer();
	Object.defineProperty(exports, "timer", {
		enumerable: true,
		get: function() {
			return timer_1.timer;
		}
	});
	var using_1 = require_using();
	Object.defineProperty(exports, "using", {
		enumerable: true,
		get: function() {
			return using_1.using;
		}
	});
	var zip_1 = require_zip();
	Object.defineProperty(exports, "zip", {
		enumerable: true,
		get: function() {
			return zip_1.zip;
		}
	});
	var scheduled_1 = require_scheduled();
	Object.defineProperty(exports, "scheduled", {
		enumerable: true,
		get: function() {
			return scheduled_1.scheduled;
		}
	});
	var empty_2 = require_empty();
	Object.defineProperty(exports, "EMPTY", {
		enumerable: true,
		get: function() {
			return empty_2.EMPTY;
		}
	});
	var never_2 = require_never();
	Object.defineProperty(exports, "NEVER", {
		enumerable: true,
		get: function() {
			return never_2.NEVER;
		}
	});
	__exportStar(require_types(), exports);
	var config_1 = require_config();
	Object.defineProperty(exports, "config", {
		enumerable: true,
		get: function() {
			return config_1.config;
		}
	});
	var audit_1 = require_audit();
	Object.defineProperty(exports, "audit", {
		enumerable: true,
		get: function() {
			return audit_1.audit;
		}
	});
	var auditTime_1 = require_auditTime();
	Object.defineProperty(exports, "auditTime", {
		enumerable: true,
		get: function() {
			return auditTime_1.auditTime;
		}
	});
	var buffer_1 = require_buffer();
	Object.defineProperty(exports, "buffer", {
		enumerable: true,
		get: function() {
			return buffer_1.buffer;
		}
	});
	var bufferCount_1 = require_bufferCount();
	Object.defineProperty(exports, "bufferCount", {
		enumerable: true,
		get: function() {
			return bufferCount_1.bufferCount;
		}
	});
	var bufferTime_1 = require_bufferTime();
	Object.defineProperty(exports, "bufferTime", {
		enumerable: true,
		get: function() {
			return bufferTime_1.bufferTime;
		}
	});
	var bufferToggle_1 = require_bufferToggle();
	Object.defineProperty(exports, "bufferToggle", {
		enumerable: true,
		get: function() {
			return bufferToggle_1.bufferToggle;
		}
	});
	var bufferWhen_1 = require_bufferWhen();
	Object.defineProperty(exports, "bufferWhen", {
		enumerable: true,
		get: function() {
			return bufferWhen_1.bufferWhen;
		}
	});
	var catchError_1 = require_catchError();
	Object.defineProperty(exports, "catchError", {
		enumerable: true,
		get: function() {
			return catchError_1.catchError;
		}
	});
	var combineAll_1 = require_combineAll();
	Object.defineProperty(exports, "combineAll", {
		enumerable: true,
		get: function() {
			return combineAll_1.combineAll;
		}
	});
	var combineLatestAll_1 = require_combineLatestAll();
	Object.defineProperty(exports, "combineLatestAll", {
		enumerable: true,
		get: function() {
			return combineLatestAll_1.combineLatestAll;
		}
	});
	var combineLatestWith_1 = require_combineLatestWith();
	Object.defineProperty(exports, "combineLatestWith", {
		enumerable: true,
		get: function() {
			return combineLatestWith_1.combineLatestWith;
		}
	});
	var concatAll_1 = require_concatAll();
	Object.defineProperty(exports, "concatAll", {
		enumerable: true,
		get: function() {
			return concatAll_1.concatAll;
		}
	});
	var concatMap_1 = require_concatMap();
	Object.defineProperty(exports, "concatMap", {
		enumerable: true,
		get: function() {
			return concatMap_1.concatMap;
		}
	});
	var concatMapTo_1 = require_concatMapTo();
	Object.defineProperty(exports, "concatMapTo", {
		enumerable: true,
		get: function() {
			return concatMapTo_1.concatMapTo;
		}
	});
	var concatWith_1 = require_concatWith();
	Object.defineProperty(exports, "concatWith", {
		enumerable: true,
		get: function() {
			return concatWith_1.concatWith;
		}
	});
	var connect_1 = require_connect();
	Object.defineProperty(exports, "connect", {
		enumerable: true,
		get: function() {
			return connect_1.connect;
		}
	});
	var count_1 = require_count();
	Object.defineProperty(exports, "count", {
		enumerable: true,
		get: function() {
			return count_1.count;
		}
	});
	var debounce_1 = require_debounce();
	Object.defineProperty(exports, "debounce", {
		enumerable: true,
		get: function() {
			return debounce_1.debounce;
		}
	});
	var debounceTime_1 = require_debounceTime();
	Object.defineProperty(exports, "debounceTime", {
		enumerable: true,
		get: function() {
			return debounceTime_1.debounceTime;
		}
	});
	var defaultIfEmpty_1 = require_defaultIfEmpty();
	Object.defineProperty(exports, "defaultIfEmpty", {
		enumerable: true,
		get: function() {
			return defaultIfEmpty_1.defaultIfEmpty;
		}
	});
	var delay_1 = require_delay();
	Object.defineProperty(exports, "delay", {
		enumerable: true,
		get: function() {
			return delay_1.delay;
		}
	});
	var delayWhen_1 = require_delayWhen();
	Object.defineProperty(exports, "delayWhen", {
		enumerable: true,
		get: function() {
			return delayWhen_1.delayWhen;
		}
	});
	var dematerialize_1 = require_dematerialize();
	Object.defineProperty(exports, "dematerialize", {
		enumerable: true,
		get: function() {
			return dematerialize_1.dematerialize;
		}
	});
	var distinct_1 = require_distinct();
	Object.defineProperty(exports, "distinct", {
		enumerable: true,
		get: function() {
			return distinct_1.distinct;
		}
	});
	var distinctUntilChanged_1 = require_distinctUntilChanged();
	Object.defineProperty(exports, "distinctUntilChanged", {
		enumerable: true,
		get: function() {
			return distinctUntilChanged_1.distinctUntilChanged;
		}
	});
	var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
	Object.defineProperty(exports, "distinctUntilKeyChanged", {
		enumerable: true,
		get: function() {
			return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
		}
	});
	var elementAt_1 = require_elementAt();
	Object.defineProperty(exports, "elementAt", {
		enumerable: true,
		get: function() {
			return elementAt_1.elementAt;
		}
	});
	var endWith_1 = require_endWith();
	Object.defineProperty(exports, "endWith", {
		enumerable: true,
		get: function() {
			return endWith_1.endWith;
		}
	});
	var every_1 = require_every();
	Object.defineProperty(exports, "every", {
		enumerable: true,
		get: function() {
			return every_1.every;
		}
	});
	var exhaust_1 = require_exhaust();
	Object.defineProperty(exports, "exhaust", {
		enumerable: true,
		get: function() {
			return exhaust_1.exhaust;
		}
	});
	var exhaustAll_1 = require_exhaustAll();
	Object.defineProperty(exports, "exhaustAll", {
		enumerable: true,
		get: function() {
			return exhaustAll_1.exhaustAll;
		}
	});
	var exhaustMap_1 = require_exhaustMap();
	Object.defineProperty(exports, "exhaustMap", {
		enumerable: true,
		get: function() {
			return exhaustMap_1.exhaustMap;
		}
	});
	var expand_1 = require_expand();
	Object.defineProperty(exports, "expand", {
		enumerable: true,
		get: function() {
			return expand_1.expand;
		}
	});
	var filter_1 = require_filter();
	Object.defineProperty(exports, "filter", {
		enumerable: true,
		get: function() {
			return filter_1.filter;
		}
	});
	var finalize_1 = require_finalize();
	Object.defineProperty(exports, "finalize", {
		enumerable: true,
		get: function() {
			return finalize_1.finalize;
		}
	});
	var find_1 = require_find();
	Object.defineProperty(exports, "find", {
		enumerable: true,
		get: function() {
			return find_1.find;
		}
	});
	var findIndex_1 = require_findIndex();
	Object.defineProperty(exports, "findIndex", {
		enumerable: true,
		get: function() {
			return findIndex_1.findIndex;
		}
	});
	var first_1 = require_first();
	Object.defineProperty(exports, "first", {
		enumerable: true,
		get: function() {
			return first_1.first;
		}
	});
	var groupBy_1 = require_groupBy();
	Object.defineProperty(exports, "groupBy", {
		enumerable: true,
		get: function() {
			return groupBy_1.groupBy;
		}
	});
	var ignoreElements_1 = require_ignoreElements();
	Object.defineProperty(exports, "ignoreElements", {
		enumerable: true,
		get: function() {
			return ignoreElements_1.ignoreElements;
		}
	});
	var isEmpty_1 = require_isEmpty();
	Object.defineProperty(exports, "isEmpty", {
		enumerable: true,
		get: function() {
			return isEmpty_1.isEmpty;
		}
	});
	var last_1 = require_last();
	Object.defineProperty(exports, "last", {
		enumerable: true,
		get: function() {
			return last_1.last;
		}
	});
	var map_1 = require_map();
	Object.defineProperty(exports, "map", {
		enumerable: true,
		get: function() {
			return map_1.map;
		}
	});
	var mapTo_1 = require_mapTo();
	Object.defineProperty(exports, "mapTo", {
		enumerable: true,
		get: function() {
			return mapTo_1.mapTo;
		}
	});
	var materialize_1 = require_materialize();
	Object.defineProperty(exports, "materialize", {
		enumerable: true,
		get: function() {
			return materialize_1.materialize;
		}
	});
	var max_1 = require_max();
	Object.defineProperty(exports, "max", {
		enumerable: true,
		get: function() {
			return max_1.max;
		}
	});
	var mergeAll_1 = require_mergeAll();
	Object.defineProperty(exports, "mergeAll", {
		enumerable: true,
		get: function() {
			return mergeAll_1.mergeAll;
		}
	});
	var flatMap_1 = require_flatMap();
	Object.defineProperty(exports, "flatMap", {
		enumerable: true,
		get: function() {
			return flatMap_1.flatMap;
		}
	});
	var mergeMap_1 = require_mergeMap();
	Object.defineProperty(exports, "mergeMap", {
		enumerable: true,
		get: function() {
			return mergeMap_1.mergeMap;
		}
	});
	var mergeMapTo_1 = require_mergeMapTo();
	Object.defineProperty(exports, "mergeMapTo", {
		enumerable: true,
		get: function() {
			return mergeMapTo_1.mergeMapTo;
		}
	});
	var mergeScan_1 = require_mergeScan();
	Object.defineProperty(exports, "mergeScan", {
		enumerable: true,
		get: function() {
			return mergeScan_1.mergeScan;
		}
	});
	var mergeWith_1 = require_mergeWith();
	Object.defineProperty(exports, "mergeWith", {
		enumerable: true,
		get: function() {
			return mergeWith_1.mergeWith;
		}
	});
	var min_1 = require_min();
	Object.defineProperty(exports, "min", {
		enumerable: true,
		get: function() {
			return min_1.min;
		}
	});
	var multicast_1 = require_multicast();
	Object.defineProperty(exports, "multicast", {
		enumerable: true,
		get: function() {
			return multicast_1.multicast;
		}
	});
	var observeOn_1 = require_observeOn();
	Object.defineProperty(exports, "observeOn", {
		enumerable: true,
		get: function() {
			return observeOn_1.observeOn;
		}
	});
	var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
	Object.defineProperty(exports, "onErrorResumeNextWith", {
		enumerable: true,
		get: function() {
			return onErrorResumeNextWith_1.onErrorResumeNextWith;
		}
	});
	var pairwise_1 = require_pairwise();
	Object.defineProperty(exports, "pairwise", {
		enumerable: true,
		get: function() {
			return pairwise_1.pairwise;
		}
	});
	var pluck_1 = require_pluck();
	Object.defineProperty(exports, "pluck", {
		enumerable: true,
		get: function() {
			return pluck_1.pluck;
		}
	});
	var publish_1 = require_publish();
	Object.defineProperty(exports, "publish", {
		enumerable: true,
		get: function() {
			return publish_1.publish;
		}
	});
	var publishBehavior_1 = require_publishBehavior();
	Object.defineProperty(exports, "publishBehavior", {
		enumerable: true,
		get: function() {
			return publishBehavior_1.publishBehavior;
		}
	});
	var publishLast_1 = require_publishLast();
	Object.defineProperty(exports, "publishLast", {
		enumerable: true,
		get: function() {
			return publishLast_1.publishLast;
		}
	});
	var publishReplay_1 = require_publishReplay();
	Object.defineProperty(exports, "publishReplay", {
		enumerable: true,
		get: function() {
			return publishReplay_1.publishReplay;
		}
	});
	var raceWith_1 = require_raceWith();
	Object.defineProperty(exports, "raceWith", {
		enumerable: true,
		get: function() {
			return raceWith_1.raceWith;
		}
	});
	var reduce_1 = require_reduce();
	Object.defineProperty(exports, "reduce", {
		enumerable: true,
		get: function() {
			return reduce_1.reduce;
		}
	});
	var repeat_1 = require_repeat();
	Object.defineProperty(exports, "repeat", {
		enumerable: true,
		get: function() {
			return repeat_1.repeat;
		}
	});
	var repeatWhen_1 = require_repeatWhen();
	Object.defineProperty(exports, "repeatWhen", {
		enumerable: true,
		get: function() {
			return repeatWhen_1.repeatWhen;
		}
	});
	var retry_1 = require_retry();
	Object.defineProperty(exports, "retry", {
		enumerable: true,
		get: function() {
			return retry_1.retry;
		}
	});
	var retryWhen_1 = require_retryWhen();
	Object.defineProperty(exports, "retryWhen", {
		enumerable: true,
		get: function() {
			return retryWhen_1.retryWhen;
		}
	});
	var refCount_1 = require_refCount();
	Object.defineProperty(exports, "refCount", {
		enumerable: true,
		get: function() {
			return refCount_1.refCount;
		}
	});
	var sample_1 = require_sample();
	Object.defineProperty(exports, "sample", {
		enumerable: true,
		get: function() {
			return sample_1.sample;
		}
	});
	var sampleTime_1 = require_sampleTime();
	Object.defineProperty(exports, "sampleTime", {
		enumerable: true,
		get: function() {
			return sampleTime_1.sampleTime;
		}
	});
	var scan_1 = require_scan();
	Object.defineProperty(exports, "scan", {
		enumerable: true,
		get: function() {
			return scan_1.scan;
		}
	});
	var sequenceEqual_1 = require_sequenceEqual();
	Object.defineProperty(exports, "sequenceEqual", {
		enumerable: true,
		get: function() {
			return sequenceEqual_1.sequenceEqual;
		}
	});
	var share_1 = require_share();
	Object.defineProperty(exports, "share", {
		enumerable: true,
		get: function() {
			return share_1.share;
		}
	});
	var shareReplay_1 = require_shareReplay();
	Object.defineProperty(exports, "shareReplay", {
		enumerable: true,
		get: function() {
			return shareReplay_1.shareReplay;
		}
	});
	var single_1 = require_single();
	Object.defineProperty(exports, "single", {
		enumerable: true,
		get: function() {
			return single_1.single;
		}
	});
	var skip_1 = require_skip();
	Object.defineProperty(exports, "skip", {
		enumerable: true,
		get: function() {
			return skip_1.skip;
		}
	});
	var skipLast_1 = require_skipLast();
	Object.defineProperty(exports, "skipLast", {
		enumerable: true,
		get: function() {
			return skipLast_1.skipLast;
		}
	});
	var skipUntil_1 = require_skipUntil();
	Object.defineProperty(exports, "skipUntil", {
		enumerable: true,
		get: function() {
			return skipUntil_1.skipUntil;
		}
	});
	var skipWhile_1 = require_skipWhile();
	Object.defineProperty(exports, "skipWhile", {
		enumerable: true,
		get: function() {
			return skipWhile_1.skipWhile;
		}
	});
	var startWith_1 = require_startWith();
	Object.defineProperty(exports, "startWith", {
		enumerable: true,
		get: function() {
			return startWith_1.startWith;
		}
	});
	var subscribeOn_1 = require_subscribeOn();
	Object.defineProperty(exports, "subscribeOn", {
		enumerable: true,
		get: function() {
			return subscribeOn_1.subscribeOn;
		}
	});
	var switchAll_1 = require_switchAll();
	Object.defineProperty(exports, "switchAll", {
		enumerable: true,
		get: function() {
			return switchAll_1.switchAll;
		}
	});
	var switchMap_1 = require_switchMap();
	Object.defineProperty(exports, "switchMap", {
		enumerable: true,
		get: function() {
			return switchMap_1.switchMap;
		}
	});
	var switchMapTo_1 = require_switchMapTo();
	Object.defineProperty(exports, "switchMapTo", {
		enumerable: true,
		get: function() {
			return switchMapTo_1.switchMapTo;
		}
	});
	var switchScan_1 = require_switchScan();
	Object.defineProperty(exports, "switchScan", {
		enumerable: true,
		get: function() {
			return switchScan_1.switchScan;
		}
	});
	var take_1 = require_take();
	Object.defineProperty(exports, "take", {
		enumerable: true,
		get: function() {
			return take_1.take;
		}
	});
	var takeLast_1 = require_takeLast();
	Object.defineProperty(exports, "takeLast", {
		enumerable: true,
		get: function() {
			return takeLast_1.takeLast;
		}
	});
	var takeUntil_1 = require_takeUntil();
	Object.defineProperty(exports, "takeUntil", {
		enumerable: true,
		get: function() {
			return takeUntil_1.takeUntil;
		}
	});
	var takeWhile_1 = require_takeWhile();
	Object.defineProperty(exports, "takeWhile", {
		enumerable: true,
		get: function() {
			return takeWhile_1.takeWhile;
		}
	});
	var tap_1 = require_tap();
	Object.defineProperty(exports, "tap", {
		enumerable: true,
		get: function() {
			return tap_1.tap;
		}
	});
	var throttle_1 = require_throttle();
	Object.defineProperty(exports, "throttle", {
		enumerable: true,
		get: function() {
			return throttle_1.throttle;
		}
	});
	var throttleTime_1 = require_throttleTime();
	Object.defineProperty(exports, "throttleTime", {
		enumerable: true,
		get: function() {
			return throttleTime_1.throttleTime;
		}
	});
	var throwIfEmpty_1 = require_throwIfEmpty();
	Object.defineProperty(exports, "throwIfEmpty", {
		enumerable: true,
		get: function() {
			return throwIfEmpty_1.throwIfEmpty;
		}
	});
	var timeInterval_1 = require_timeInterval();
	Object.defineProperty(exports, "timeInterval", {
		enumerable: true,
		get: function() {
			return timeInterval_1.timeInterval;
		}
	});
	var timeout_2 = require_timeout();
	Object.defineProperty(exports, "timeout", {
		enumerable: true,
		get: function() {
			return timeout_2.timeout;
		}
	});
	var timeoutWith_1 = require_timeoutWith();
	Object.defineProperty(exports, "timeoutWith", {
		enumerable: true,
		get: function() {
			return timeoutWith_1.timeoutWith;
		}
	});
	var timestamp_1 = require_timestamp();
	Object.defineProperty(exports, "timestamp", {
		enumerable: true,
		get: function() {
			return timestamp_1.timestamp;
		}
	});
	var toArray_1 = require_toArray();
	Object.defineProperty(exports, "toArray", {
		enumerable: true,
		get: function() {
			return toArray_1.toArray;
		}
	});
	var window_1 = require_window();
	Object.defineProperty(exports, "window", {
		enumerable: true,
		get: function() {
			return window_1.window;
		}
	});
	var windowCount_1 = require_windowCount();
	Object.defineProperty(exports, "windowCount", {
		enumerable: true,
		get: function() {
			return windowCount_1.windowCount;
		}
	});
	var windowTime_1 = require_windowTime();
	Object.defineProperty(exports, "windowTime", {
		enumerable: true,
		get: function() {
			return windowTime_1.windowTime;
		}
	});
	var windowToggle_1 = require_windowToggle();
	Object.defineProperty(exports, "windowToggle", {
		enumerable: true,
		get: function() {
			return windowToggle_1.windowToggle;
		}
	});
	var windowWhen_1 = require_windowWhen();
	Object.defineProperty(exports, "windowWhen", {
		enumerable: true,
		get: function() {
			return windowWhen_1.windowWhen;
		}
	});
	var withLatestFrom_1 = require_withLatestFrom();
	Object.defineProperty(exports, "withLatestFrom", {
		enumerable: true,
		get: function() {
			return withLatestFrom_1.withLatestFrom;
		}
	});
	var zipAll_1 = require_zipAll();
	Object.defineProperty(exports, "zipAll", {
		enumerable: true,
		get: function() {
			return zipAll_1.zipAll;
		}
	});
	var zipWith_1 = require_zipWith();
	Object.defineProperty(exports, "zipWith", {
		enumerable: true,
		get: function() {
			return zipWith_1.zipWith;
		}
	});
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/http-adapter-host.js
var require_http_adapter_host = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/http-adapter-host.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.HttpAdapterHost = void 0;
	const rxjs_1$4 = require_cjs();
	/**
	* Defines the `HttpAdapterHost` object.
	*
	* `HttpAdapterHost` wraps the underlying
	* platform-specific `HttpAdapter`.  The `HttpAdapter` is a wrapper around the underlying
	* native HTTP server library (e.g., Express).  The `HttpAdapterHost` object
	* provides methods to `get` and `set` the underlying HttpAdapter.
	*
	* @see [Http adapter](https://docs.nestjs.com/faq/http-adapter)
	*
	* @publicApi
	*/
	var HttpAdapterHost = class {
		constructor() {
			this._listen$ = new rxjs_1$4.Subject();
			this.isListening = false;
		}
		/**
		* Accessor for the underlying `HttpAdapter`
		*
		* @param httpAdapter reference to the `HttpAdapter` to be set
		*/
		set httpAdapter(httpAdapter) {
			this._httpAdapter = httpAdapter;
		}
		/**
		* Accessor for the underlying `HttpAdapter`
		*
		* @example
		* `const httpAdapter = adapterHost.httpAdapter;`
		*/
		get httpAdapter() {
			return this._httpAdapter;
		}
		/**
		* Observable that allows to subscribe to the `listen` event.
		* This event is emitted when the HTTP application is listening for incoming requests.
		*/
		get listen$() {
			return this._listen$.asObservable();
		}
		/**
		* Sets the listening state of the application.
		*/
		set listening(listening) {
			this.isListening = listening;
			if (listening) {
				this._listen$.next();
				this._listen$.complete();
			}
		}
		/**
		* Returns a boolean indicating whether the application is listening for incoming requests.
		*/
		get listening() {
			return this.isListening;
		}
	};
	exports.HttpAdapterHost = HttpAdapterHost;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/base-exception-filter.js
var require_base_exception_filter = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/base-exception-filter.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BaseExceptionFilter = void 0;
	const tslib_1$20 = __require("tslib");
	const common_1$30 = require_common();
	const shared_utils_1$45 = require_shared_utils();
	const constants_1$29 = require_constants$4();
	const http_adapter_host_1$3 = require_http_adapter_host();
	var BaseExceptionFilter = class BaseExceptionFilter {
		constructor(applicationRef) {
			this.applicationRef = applicationRef;
		}
		catch(exception, host) {
			const applicationRef = this.applicationRef || this.httpAdapterHost && this.httpAdapterHost.httpAdapter;
			if (!(exception instanceof common_1$30.HttpException)) return this.handleUnknownError(exception, host, applicationRef);
			const res = exception.getResponse();
			const message = (0, shared_utils_1$45.isObject)(res) ? res : {
				statusCode: exception.getStatus(),
				message: res
			};
			const response = host.getArgByIndex(1);
			if (!applicationRef.isHeadersSent(response)) applicationRef.reply(response, message, exception.getStatus());
			else applicationRef.end(response);
		}
		handleUnknownError(exception, host, applicationRef) {
			const body = this.isHttpError(exception) ? {
				statusCode: exception.statusCode,
				message: exception.message
			} : {
				statusCode: common_1$30.HttpStatus.INTERNAL_SERVER_ERROR,
				message: constants_1$29.MESSAGES.UNKNOWN_EXCEPTION_MESSAGE
			};
			const response = host.getArgByIndex(1);
			if (!applicationRef.isHeadersSent(response)) applicationRef.reply(response, body, body.statusCode);
			else applicationRef.end(response);
			if (!(exception instanceof common_1$30.IntrinsicException)) BaseExceptionFilter.logger.error(exception);
		}
		isExceptionObject(err) {
			return (0, shared_utils_1$45.isObject)(err) && !!err.message;
		}
		/**
		* Checks if the thrown error comes from the "http-errors" library.
		* @param err error object
		*/
		isHttpError(err) {
			return (err === null || err === void 0 ? void 0 : err.statusCode) && (err === null || err === void 0 ? void 0 : err.message);
		}
	};
	exports.BaseExceptionFilter = BaseExceptionFilter;
	BaseExceptionFilter.logger = new common_1$30.Logger("ExceptionsHandler");
	tslib_1$20.__decorate([
		(0, common_1$30.Optional)(),
		(0, common_1$30.Inject)(),
		tslib_1$20.__metadata("design:type", http_adapter_host_1$3.HttpAdapterHost)
	], BaseExceptionFilter.prototype, "httpAdapterHost", void 0);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/index.js
var require_exceptions$2 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$19 = __require("tslib");
	tslib_1$19.__exportStar(require_base_exception_filter(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/request/request-constants.js
var require_request_constants = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/request/request-constants.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.REQUEST_CONTEXT_ID = exports.REQUEST = void 0;
	exports.REQUEST = "REQUEST";
	exports.REQUEST_CONTEXT_ID = Symbol("REQUEST_CONTEXT_ID");
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/context-id-factory.js
var require_context_id_factory = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/context-id-factory.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ContextIdFactory = void 0;
	exports.createContextId = createContextId;
	const shared_utils_1$44 = require_shared_utils();
	const request_constants_1$6 = require_request_constants();
	function createContextId() {
		/**
		* We are generating random identifier to track asynchronous
		* execution context. An identifier does not have to be neither unique
		* nor unpredictable because WeakMap uses objects as keys (reference comparison).
		* Thus, even though identifier number might be equal, WeakMap would properly
		* associate asynchronous context with its internal map values using object reference.
		* Object is automatically removed once request has been processed (closure).
		*/
		return { id: Math.random() };
	}
	var ContextIdFactory = class ContextIdFactory {
		/**
		* Generates a context identifier based on the request object.
		*/
		static create() {
			return createContextId();
		}
		/**
		* Generates a random identifier to track asynchronous execution context.
		* @param request request object
		*/
		static getByRequest(request, propsToInspect = ["raw"]) {
			if (!request) return ContextIdFactory.create();
			if (request[request_constants_1$6.REQUEST_CONTEXT_ID]) return request[request_constants_1$6.REQUEST_CONTEXT_ID];
			for (const key of propsToInspect) {
				var _request$key;
				if ((_request$key = request[key]) === null || _request$key === void 0 ? void 0 : _request$key[request_constants_1$6.REQUEST_CONTEXT_ID]) return request[key][request_constants_1$6.REQUEST_CONTEXT_ID];
			}
			if (!this.strategy) return ContextIdFactory.create();
			const contextId = createContextId();
			const resolverObjectOrFunction = this.strategy.attach(contextId, request);
			if (this.isContextIdResolverWithPayload(resolverObjectOrFunction)) {
				contextId.getParent = resolverObjectOrFunction.resolve;
				contextId.payload = resolverObjectOrFunction.payload;
			} else contextId.getParent = resolverObjectOrFunction;
			return contextId;
		}
		/**
		* Registers a custom context id strategy that lets you attach
		* a parent context id to the existing context id object.
		* @param strategy strategy instance
		*/
		static apply(strategy) {
			this.strategy = strategy;
		}
		static isContextIdResolverWithPayload(resolverOrResolverFn) {
			return (0, shared_utils_1$44.isObject)(resolverOrResolverFn);
		}
	};
	exports.ContextIdFactory = ContextIdFactory;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/constants.js
var require_constants$3 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/constants.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.STATIC_CONTEXT = exports.CONTROLLER_ID_KEY = void 0;
	exports.CONTROLLER_ID_KEY = "CONTROLLER_ID";
	const STATIC_CONTEXT_ID = 1;
	exports.STATIC_CONTEXT = Object.freeze({ id: STATIC_CONTEXT_ID });
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/context-creator.js
var require_context_creator = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/context-creator.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ContextCreator = void 0;
	const constants_1$28 = require_constants$3();
	var ContextCreator = class {
		createContext(instance, callback, metadataKey, contextId = constants_1$28.STATIC_CONTEXT, inquirerId) {
			const globalMetadata = this.getGlobalMetadata && this.getGlobalMetadata(contextId, inquirerId);
			const classMetadata = this.reflectClassMetadata(instance, metadataKey);
			const methodMetadata = this.reflectMethodMetadata(callback, metadataKey);
			return [
				...this.createConcreteContext(globalMetadata || [], contextId, inquirerId),
				...this.createConcreteContext(classMetadata, contextId, inquirerId),
				...this.createConcreteContext(methodMetadata, contextId, inquirerId)
			];
		}
		reflectClassMetadata(instance, metadataKey) {
			const prototype = Object.getPrototypeOf(instance);
			return Reflect.getMetadata(metadataKey, prototype.constructor);
		}
		reflectMethodMetadata(callback, metadataKey) {
			return Reflect.getMetadata(metadataKey, callback);
		}
		getContextId(contextId, instanceWrapper) {
			return contextId.getParent ? contextId.getParent({
				token: instanceWrapper.token,
				isTreeDurable: instanceWrapper.isDependencyTreeDurable()
			}) : contextId;
		}
	};
	exports.ContextCreator = ContextCreator;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/base-exception-filter-context.js
var require_base_exception_filter_context = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/base-exception-filter-context.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BaseExceptionFilterContext = void 0;
	const constants_1$27 = require_constants();
	const shared_utils_1$43 = require_shared_utils();
	const iterare_1$20 = require_lib();
	const context_creator_1$3 = require_context_creator();
	const constants_2$11 = require_constants$3();
	var BaseExceptionFilterContext = class extends context_creator_1$3.ContextCreator {
		constructor(container) {
			super();
			this.container = container;
		}
		createConcreteContext(metadata, contextId = constants_2$11.STATIC_CONTEXT, inquirerId) {
			var _this = this;
			if ((0, shared_utils_1$43.isEmpty)(metadata)) return [];
			return (0, iterare_1$20.iterate)(metadata).filter(function(instance) {
				return instance && ((0, shared_utils_1$43.isFunction)(instance.catch) || instance.name);
			}).map(function(filter) {
				return _this.getFilterInstance(filter, contextId, inquirerId);
			}).filter(function(item) {
				return !!item;
			}).map(function(instance) {
				return {
					func: instance.catch.bind(instance),
					exceptionMetatypes: _this.reflectCatchExceptions(instance)
				};
			}).toArray();
		}
		getFilterInstance(filter, contextId = constants_2$11.STATIC_CONTEXT, inquirerId) {
			const isObject = !!filter.catch;
			if (isObject) return filter;
			const instanceWrapper = this.getInstanceByMetatype(filter);
			if (!instanceWrapper) return null;
			const instanceHost = instanceWrapper.getInstanceByContextId(this.getContextId(contextId, instanceWrapper), inquirerId);
			return instanceHost && instanceHost.instance;
		}
		getInstanceByMetatype(metatype) {
			if (!this.moduleContext) return;
			const collection = this.container.getModules();
			const moduleRef = collection.get(this.moduleContext);
			if (!moduleRef) return;
			return moduleRef.injectables.get(metatype);
		}
		reflectCatchExceptions(instance) {
			const prototype = Object.getPrototypeOf(instance);
			return Reflect.getMetadata(constants_1$27.FILTER_CATCH_EXCEPTIONS, prototype.constructor) || [];
		}
	};
	exports.BaseExceptionFilterContext = BaseExceptionFilterContext;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+common@11.1.3_class_c23fcd681f6fe858edbff4749ff76a36/node_modules/@nestjs/common/utils/select-exception-filter-metadata.util.js
var require_select_exception_filter_metadata_util = __commonJS({ "../../node_modules/.pnpm/@nestjs+common@11.1.3_class_c23fcd681f6fe858edbff4749ff76a36/node_modules/@nestjs/common/utils/select-exception-filter-metadata.util.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.selectExceptionFilterMetadata = void 0;
	const selectExceptionFilterMetadata = function(filters, exception) {
		return filters.find(function({ exceptionMetatypes }) {
			return !exceptionMetatypes.length || exceptionMetatypes.some(function(ExceptionMetaType) {
				return exception instanceof ExceptionMetaType;
			});
		});
	};
	exports.selectExceptionFilterMetadata = selectExceptionFilterMetadata;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/runtime.exception.js
var require_runtime_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/runtime.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RuntimeException = void 0;
	var RuntimeException = class extends Error {
		constructor(message = ``) {
			super(message);
		}
		what() {
			return this.message;
		}
	};
	exports.RuntimeException = RuntimeException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/messages.js
var require_messages$1 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/messages.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MICROSERVICES_PACKAGE_NOT_FOUND_EXCEPTION = exports.INVALID_EXCEPTION_FILTER = exports.UNHANDLED_RUNTIME_EXCEPTION = exports.INVALID_MIDDLEWARE_CONFIGURATION = exports.UNKNOWN_REQUEST_MAPPING = exports.INVALID_CLASS_SCOPE_MESSAGE = exports.INVALID_CLASS_MESSAGE = exports.UNKNOWN_EXPORT_MESSAGE = exports.UNDEFINED_MODULE_MESSAGE = exports.USING_INVALID_CLASS_AS_A_MODULE_MESSAGE = exports.INVALID_MODULE_MESSAGE = exports.UNDEFINED_FORWARDREF_MESSAGE = exports.INVALID_MIDDLEWARE_MESSAGE = exports.UNKNOWN_DEPENDENCIES_MESSAGE = void 0;
	const shared_utils_1$42 = require_shared_utils();
	/**
	* Returns the name of an instance or `undefined`
	* @param instance The instance which should get the name from
	*/
	const getInstanceName = function(instance) {
		if (instance === null || instance === void 0 ? void 0 : instance.forwardRef) {
			var _instance$forwardRef;
			return (_instance$forwardRef = instance.forwardRef()) === null || _instance$forwardRef === void 0 ? void 0 : _instance$forwardRef.name;
		}
		if (instance === null || instance === void 0 ? void 0 : instance.module) {
			var _instance$module;
			return (_instance$module = instance.module) === null || _instance$module === void 0 ? void 0 : _instance$module.name;
		}
		return instance === null || instance === void 0 ? void 0 : instance.name;
	};
	/**
	* Returns the name of the dependency.
	* Tries to get the class name, otherwise the string value
	* (= injection token). As fallback to any falsy value for `dependency`, it
	* returns `fallbackValue`
	* @param dependency The name of the dependency to be displayed
	* @param fallbackValue The fallback value if the dependency is falsy
	* @param disambiguated Whether dependency's name is disambiguated with double quotes
	*/
	const getDependencyName = function(dependency, fallbackValue, disambiguated = true) {
		return getInstanceName(dependency) || (0, shared_utils_1$42.isSymbol)(dependency) && dependency.toString() || (dependency ? disambiguated ? `"${dependency}"` : dependency : void 0) || fallbackValue;
	};
	/**
	* Returns the name of the module
	* Tries to get the class name. As fallback it returns 'current'.
	* @param module The module which should get displayed
	*/
	const getModuleName = function(module$1) {
		return module$1 && getInstanceName(module$1.metatype) || "current";
	};
	const stringifyScope = function(scope) {
		return (scope || []).map(getInstanceName).join(" -> ");
	};
	const UNKNOWN_DEPENDENCIES_MESSAGE = function(type, unknownDependencyContext, moduleRef) {
		const { index, name, dependencies, key } = unknownDependencyContext;
		const moduleName = getModuleName(moduleRef);
		const dependencyName = getDependencyName(name, "dependency");
		const potentialSolutions = moduleName !== "current" ? `\n
Potential solutions:
- Is ${moduleName} a valid NestJS module?
- If ${dependencyName} is a provider, is it part of the current ${moduleName}?
- If ${dependencyName} is exported from a separate @Module, is that module imported within ${moduleName}?
  @Module({
    imports: [ /* the Module containing ${dependencyName} */ ]
  })
` : `\n
Potential solutions:
- If ${dependencyName} is a provider, is it part of the current Module?
- If ${dependencyName} is exported from a separate @Module, is that module imported within Module?
  @Module({
    imports: [ /* the Module containing ${dependencyName} */ ]
  })
`;
		let message = `Nest can't resolve dependencies of the ${type.toString()}`;
		if ((0, shared_utils_1$42.isNil)(index)) {
			message += `. Please make sure that the "${key.toString()}" property is available in the current context.${potentialSolutions}`;
			return message;
		}
		const dependenciesName = (dependencies || []).map(function(dependencyName$1) {
			return getDependencyName(dependencyName$1, "+", false);
		});
		dependenciesName[index] = "?";
		message += ` (`;
		message += dependenciesName.join(", ");
		message += `). Please make sure that the argument ${dependencyName} at index [${index}] is available in the ${moduleName} context.`;
		message += potentialSolutions;
		return message;
	};
	exports.UNKNOWN_DEPENDENCIES_MESSAGE = UNKNOWN_DEPENDENCIES_MESSAGE;
	const INVALID_MIDDLEWARE_MESSAGE = function(text, name) {
		return `The middleware doesn't provide the 'use' method (${name})`;
	};
	exports.INVALID_MIDDLEWARE_MESSAGE = INVALID_MIDDLEWARE_MESSAGE;
	const UNDEFINED_FORWARDREF_MESSAGE = function(scope) {
		return `Nest cannot create the module instance. Often, this is because of a circular dependency between modules. Use forwardRef() to avoid it.

(Read more: https://docs.nestjs.com/fundamentals/circular-dependency)
Scope [${stringifyScope(scope)}]
`;
	};
	exports.UNDEFINED_FORWARDREF_MESSAGE = UNDEFINED_FORWARDREF_MESSAGE;
	const INVALID_MODULE_MESSAGE = function(parentModule, index, scope) {
		const parentModuleName = (parentModule === null || parentModule === void 0 ? void 0 : parentModule.name) || "module";
		return `Nest cannot create the ${parentModuleName} instance.
Received an unexpected value at index [${index}] of the ${parentModuleName} "imports" array.

Scope [${stringifyScope(scope)}]`;
	};
	exports.INVALID_MODULE_MESSAGE = INVALID_MODULE_MESSAGE;
	const USING_INVALID_CLASS_AS_A_MODULE_MESSAGE = function(metatypeUsedAsAModule, scope) {
		const metatypeNameQuote = `"${getInstanceName(metatypeUsedAsAModule)}"`;
		return `Classes annotated with @Injectable(), @Catch(), and @Controller() decorators must not appear in the "imports" array of a module.
Please remove ${metatypeNameQuote} (including forwarded occurrences, if any) from all of the "imports" arrays.

Scope [${stringifyScope(scope)}]
`;
	};
	exports.USING_INVALID_CLASS_AS_A_MODULE_MESSAGE = USING_INVALID_CLASS_AS_A_MODULE_MESSAGE;
	const UNDEFINED_MODULE_MESSAGE = function(parentModule, index, scope) {
		const parentModuleName = (parentModule === null || parentModule === void 0 ? void 0 : parentModule.name) || "module";
		return `Nest cannot create the ${parentModuleName} instance.
The module at index [${index}] of the ${parentModuleName} "imports" array is undefined.

Potential causes:
- A circular dependency between modules. Use forwardRef() to avoid it. Read more: https://docs.nestjs.com/fundamentals/circular-dependency
- The module at index [${index}] is of type "undefined". Check your import statements and the type of the module.

Scope [${stringifyScope(scope)}]`;
	};
	exports.UNDEFINED_MODULE_MESSAGE = UNDEFINED_MODULE_MESSAGE;
	const UNKNOWN_EXPORT_MESSAGE = function(token = "item", module$1) {
		token = (0, shared_utils_1$42.isSymbol)(token) ? token.toString() : token;
		return `Nest cannot export a provider/module that is not a part of the currently processed module (${module$1}). Please verify whether the exported ${token} is available in this particular context.

Possible Solutions:
- Is ${token} part of the relevant providers/imports within ${module$1}?
`;
	};
	exports.UNKNOWN_EXPORT_MESSAGE = UNKNOWN_EXPORT_MESSAGE;
	const INVALID_CLASS_MESSAGE = function(text, value) {
		return `ModuleRef cannot instantiate class (${value} is not constructable).`;
	};
	exports.INVALID_CLASS_MESSAGE = INVALID_CLASS_MESSAGE;
	const INVALID_CLASS_SCOPE_MESSAGE = function(text, name) {
		return `${name || "This class"} is marked as a scoped provider. Request and transient-scoped providers can't be used in combination with "get()" method. Please, use "resolve()" instead.`;
	};
	exports.INVALID_CLASS_SCOPE_MESSAGE = INVALID_CLASS_SCOPE_MESSAGE;
	const UNKNOWN_REQUEST_MAPPING = function(metatype) {
		const className = metatype.name;
		return className ? `An invalid controller has been detected. "${className}" does not have the @Controller() decorator but it is being listed in the "controllers" array of some module.` : `An invalid controller has been detected. Perhaps, one of your controllers is missing the @Controller() decorator.`;
	};
	exports.UNKNOWN_REQUEST_MAPPING = UNKNOWN_REQUEST_MAPPING;
	exports.INVALID_MIDDLEWARE_CONFIGURATION = `An invalid middleware configuration has been passed inside the module 'configure()' method.`;
	exports.UNHANDLED_RUNTIME_EXCEPTION = `Unhandled Runtime Exception.`;
	exports.INVALID_EXCEPTION_FILTER = `Invalid exception filters (@UseFilters()).`;
	exports.MICROSERVICES_PACKAGE_NOT_FOUND_EXCEPTION = `Unable to load @nestjs/microservices package. (Please make sure that it's already installed.)`;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-exception-filter.exception.js
var require_invalid_exception_filter_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-exception-filter.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InvalidExceptionFilterException = void 0;
	const runtime_exception_1$16 = require_runtime_exception();
	const messages_1$14 = require_messages$1();
	var InvalidExceptionFilterException = class extends runtime_exception_1$16.RuntimeException {
		constructor() {
			super(messages_1$14.INVALID_EXCEPTION_FILTER);
		}
	};
	exports.InvalidExceptionFilterException = InvalidExceptionFilterException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/external-exception-filter.js
var require_external_exception_filter = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/external-exception-filter.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ExternalExceptionFilter = void 0;
	const common_1$29 = require_common();
	var ExternalExceptionFilter = class ExternalExceptionFilter {
		catch(exception, host) {
			if (exception instanceof Error && !(exception instanceof common_1$29.IntrinsicException)) ExternalExceptionFilter.logger.error(exception);
			throw exception;
		}
	};
	exports.ExternalExceptionFilter = ExternalExceptionFilter;
	ExternalExceptionFilter.logger = new common_1$29.Logger("ExceptionsHandler");
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/external-exceptions-handler.js
var require_external_exceptions_handler = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/external-exceptions-handler.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ExternalExceptionsHandler = void 0;
	const select_exception_filter_metadata_util_1$1 = require_select_exception_filter_metadata_util();
	const shared_utils_1$41 = require_shared_utils();
	const invalid_exception_filter_exception_1$1 = require_invalid_exception_filter_exception();
	const external_exception_filter_1 = require_external_exception_filter();
	var ExternalExceptionsHandler = class extends external_exception_filter_1.ExternalExceptionFilter {
		constructor() {
			super(...arguments);
			this.filters = [];
		}
		next(exception, host) {
			const result = this.invokeCustomFilters(exception, host);
			if (result) return result;
			return super.catch(exception, host);
		}
		setCustomFilters(filters) {
			if (!Array.isArray(filters)) throw new invalid_exception_filter_exception_1$1.InvalidExceptionFilterException();
			this.filters = filters;
		}
		invokeCustomFilters(exception, host) {
			if ((0, shared_utils_1$41.isEmpty)(this.filters)) return null;
			const filter = (0, select_exception_filter_metadata_util_1$1.selectExceptionFilterMetadata)(this.filters, exception);
			return filter ? filter.func(exception, host) : null;
		}
	};
	exports.ExternalExceptionsHandler = ExternalExceptionsHandler;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/external-exception-filter-context.js
var require_external_exception_filter_context = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/external-exception-filter-context.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ExternalExceptionFilterContext = void 0;
	const constants_1$26 = require_constants();
	const shared_utils_1$40 = require_shared_utils();
	const iterare_1$19 = require_lib();
	const constants_2$10 = require_constants$3();
	const base_exception_filter_context_1$1 = require_base_exception_filter_context();
	const external_exceptions_handler_1 = require_external_exceptions_handler();
	var ExternalExceptionFilterContext = class extends base_exception_filter_context_1$1.BaseExceptionFilterContext {
		constructor(container, config) {
			super(container);
			this.config = config;
		}
		create(instance, callback, module$1, contextId = constants_2$10.STATIC_CONTEXT, inquirerId) {
			this.moduleContext = module$1;
			const exceptionHandler = new external_exceptions_handler_1.ExternalExceptionsHandler();
			const filters = this.createContext(instance, callback, constants_1$26.EXCEPTION_FILTERS_METADATA, contextId, inquirerId);
			if ((0, shared_utils_1$40.isEmpty)(filters)) return exceptionHandler;
			exceptionHandler.setCustomFilters(filters.reverse());
			return exceptionHandler;
		}
		getGlobalMetadata(contextId = constants_2$10.STATIC_CONTEXT, inquirerId) {
			if (!this.config) return [];
			const globalFilters = this.config.getGlobalFilters();
			if (contextId === constants_2$10.STATIC_CONTEXT && !inquirerId) return globalFilters;
			const scopedFilterWrappers = this.config.getGlobalRequestFilters();
			const scopedFilters = (0, iterare_1$19.iterate)(scopedFilterWrappers).map(function(wrapper) {
				return wrapper.getInstanceByContextId(contextId, inquirerId);
			}).filter(function(host) {
				return !!host;
			}).map(function(host) {
				return host.instance;
			}).toArray();
			return globalFilters.concat(scopedFilters);
		}
	};
	exports.ExternalExceptionFilterContext = ExternalExceptionFilterContext;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/guards/constants.js
var require_constants$2 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/guards/constants.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FORBIDDEN_MESSAGE = void 0;
	exports.FORBIDDEN_MESSAGE = "Forbidden resource";
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/execution-context-host.js
var require_execution_context_host = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/execution-context-host.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ExecutionContextHost = void 0;
	var ExecutionContextHost = class {
		constructor(args, constructorRef = null, handler = null) {
			this.args = args;
			this.constructorRef = constructorRef;
			this.handler = handler;
			this.contextType = "http";
		}
		setType(type) {
			type && (this.contextType = type);
		}
		getType() {
			return this.contextType;
		}
		getClass() {
			return this.constructorRef;
		}
		getHandler() {
			return this.handler;
		}
		getArgs() {
			return this.args;
		}
		getArgByIndex(index) {
			return this.args[index];
		}
		switchToRpc() {
			var _this = this;
			return Object.assign(this, {
				getData: function() {
					return _this.getArgByIndex(0);
				},
				getContext: function() {
					return _this.getArgByIndex(1);
				}
			});
		}
		switchToHttp() {
			var _this2 = this;
			return Object.assign(this, {
				getRequest: function() {
					return _this2.getArgByIndex(0);
				},
				getResponse: function() {
					return _this2.getArgByIndex(1);
				},
				getNext: function() {
					return _this2.getArgByIndex(2);
				}
			});
		}
		switchToWs() {
			var _this3 = this;
			return Object.assign(this, {
				getClient: function() {
					return _this3.getArgByIndex(0);
				},
				getData: function() {
					return _this3.getArgByIndex(1);
				},
				getPattern: function() {
					return _this3.getArgByIndex(_this3.getArgs().length - 1);
				}
			});
		}
	};
	exports.ExecutionContextHost = ExecutionContextHost;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/guards/guards-consumer.js
var require_guards_consumer = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/guards/guards-consumer.js"(exports) {
	var import_asyncToGenerator$29 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.GuardsConsumer = void 0;
	const shared_utils_1$39 = require_shared_utils();
	const rxjs_1$3 = require_cjs();
	const execution_context_host_1$6 = require_execution_context_host();
	var GuardsConsumer = class {
		tryActivate(guards, args, instance, callback, type) {
			return (0, import_asyncToGenerator$29.default)(function* () {
				if (!guards || (0, shared_utils_1$39.isEmpty)(guards)) return true;
				const context = this.createContext(args, instance, callback);
				context.setType(type);
				for (const guard of guards) {
					const result = guard.canActivate(context);
					if (yield this.pickResult(result)) continue;
					return false;
				}
				return true;
			})();
		}
		createContext(args, instance, callback) {
			return new execution_context_host_1$6.ExecutionContextHost(args, instance.constructor, callback);
		}
		pickResult(result) {
			return (0, import_asyncToGenerator$29.default)(function* () {
				if (result instanceof rxjs_1$3.Observable) return (0, rxjs_1$3.lastValueFrom)(result);
				return result;
			})();
		}
	};
	exports.GuardsConsumer = GuardsConsumer;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/guards/guards-context-creator.js
var require_guards_context_creator = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/guards/guards-context-creator.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.GuardsContextCreator = void 0;
	const constants_1$25 = require_constants();
	const shared_utils_1$38 = require_shared_utils();
	const iterare_1$18 = require_lib();
	const context_creator_1$2 = require_context_creator();
	const constants_2$9 = require_constants$3();
	var GuardsContextCreator = class extends context_creator_1$2.ContextCreator {
		constructor(container, config) {
			super();
			this.container = container;
			this.config = config;
		}
		create(instance, callback, module$1, contextId = constants_2$9.STATIC_CONTEXT, inquirerId) {
			this.moduleContext = module$1;
			return this.createContext(instance, callback, constants_1$25.GUARDS_METADATA, contextId, inquirerId);
		}
		createConcreteContext(metadata, contextId = constants_2$9.STATIC_CONTEXT, inquirerId) {
			var _this = this;
			if ((0, shared_utils_1$38.isEmpty)(metadata)) return [];
			return (0, iterare_1$18.iterate)(metadata).filter(function(guard) {
				return guard && (guard.name || guard.canActivate);
			}).map(function(guard) {
				return _this.getGuardInstance(guard, contextId, inquirerId);
			}).filter(function(guard) {
				return !!guard && (0, shared_utils_1$38.isFunction)(guard.canActivate);
			}).toArray();
		}
		getGuardInstance(metatype, contextId = constants_2$9.STATIC_CONTEXT, inquirerId) {
			const isObject = !!metatype.canActivate;
			if (isObject) return metatype;
			const instanceWrapper = this.getInstanceByMetatype(metatype);
			if (!instanceWrapper) return null;
			const instanceHost = instanceWrapper.getInstanceByContextId(this.getContextId(contextId, instanceWrapper), inquirerId);
			return instanceHost && instanceHost.instance;
		}
		getInstanceByMetatype(metatype) {
			if (!this.moduleContext) return;
			const collection = this.container.getModules();
			const moduleRef = collection.get(this.moduleContext);
			if (!moduleRef) return;
			const injectables = moduleRef.injectables;
			return injectables.get(metatype);
		}
		getGlobalMetadata(contextId = constants_2$9.STATIC_CONTEXT, inquirerId) {
			var _this2 = this;
			if (!this.config) return [];
			const globalGuards = this.config.getGlobalGuards();
			if (contextId === constants_2$9.STATIC_CONTEXT && !inquirerId) return globalGuards;
			const scopedGuardWrappers = this.config.getGlobalRequestGuards();
			const scopedGuards = (0, iterare_1$18.iterate)(scopedGuardWrappers).map(function(wrapper) {
				return wrapper.getInstanceByContextId(_this2.getContextId(contextId, wrapper), inquirerId);
			}).filter(function(host) {
				return !!host;
			}).map(function(host) {
				return host.instance;
			}).toArray();
			return globalGuards.concat(scopedGuards);
		}
	};
	exports.GuardsContextCreator = GuardsContextCreator;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/guards/index.js
var require_guards = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/guards/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$18 = __require("tslib");
	tslib_1$18.__exportStar(require_constants$2(), exports);
	tslib_1$18.__exportStar(require_guards_consumer(), exports);
	tslib_1$18.__exportStar(require_guards_context_creator(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/interceptors/interceptors-consumer.js
var require_interceptors_consumer = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/interceptors/interceptors-consumer.js"(exports) {
	var import_asyncToGenerator$28 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InterceptorsConsumer = void 0;
	const shared_utils_1$37 = require_shared_utils();
	const async_hooks_1 = __require("async_hooks");
	const rxjs_1$2 = require_cjs();
	const operators_1$1 = require_operators();
	const execution_context_host_1$5 = require_execution_context_host();
	var InterceptorsConsumer = class {
		intercept(interceptors, args, instance, callback, next, type) {
			var _this = this;
			return (0, import_asyncToGenerator$28.default)(function* () {
				if ((0, shared_utils_1$37.isEmpty)(interceptors)) return next();
				const context = this.createContext(args, instance, callback);
				context.setType(type);
				const nextFn = function() {
					var _ref$1 = (0, import_asyncToGenerator$28.default)(function* (i = 0) {
						if (i >= interceptors.length) return (0, rxjs_1$2.defer)(async_hooks_1.AsyncResource.bind(function() {
							return _this.transformDeferred(next);
						}));
						const handler = { handle: function() {
							return (0, rxjs_1$2.defer)(async_hooks_1.AsyncResource.bind(function() {
								return nextFn$1(i + 1);
							})).pipe((0, operators_1$1.mergeAll)());
						} };
						return interceptors[i].intercept(context, handler);
					});
					return function nextFn$1() {
						return _ref$1.apply(this, arguments);
					};
				}();
				return (0, rxjs_1$2.defer)(function() {
					return nextFn();
				}).pipe((0, operators_1$1.mergeAll)());
			})();
		}
		createContext(args, instance, callback) {
			return new execution_context_host_1$5.ExecutionContextHost(args, instance.constructor, callback);
		}
		transformDeferred(next) {
			return (0, rxjs_1$2.from)(next()).pipe((0, operators_1$1.switchMap)(function(res) {
				const isDeferred = res instanceof Promise || res instanceof rxjs_1$2.Observable;
				return isDeferred ? res : Promise.resolve(res);
			}));
		}
	};
	exports.InterceptorsConsumer = InterceptorsConsumer;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/interceptors/interceptors-context-creator.js
var require_interceptors_context_creator = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/interceptors/interceptors-context-creator.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InterceptorsContextCreator = void 0;
	const constants_1$24 = require_constants();
	const shared_utils_1$36 = require_shared_utils();
	const iterare_1$17 = require_lib();
	const context_creator_1$1 = require_context_creator();
	const constants_2$8 = require_constants$3();
	var InterceptorsContextCreator = class extends context_creator_1$1.ContextCreator {
		constructor(container, config) {
			super();
			this.container = container;
			this.config = config;
		}
		create(instance, callback, module$1, contextId = constants_2$8.STATIC_CONTEXT, inquirerId) {
			this.moduleContext = module$1;
			return this.createContext(instance, callback, constants_1$24.INTERCEPTORS_METADATA, contextId, inquirerId);
		}
		createConcreteContext(metadata, contextId = constants_2$8.STATIC_CONTEXT, inquirerId) {
			var _this = this;
			if ((0, shared_utils_1$36.isEmpty)(metadata)) return [];
			return (0, iterare_1$17.iterate)(metadata).filter(function(interceptor) {
				return interceptor && (interceptor.name || interceptor.intercept);
			}).map(function(interceptor) {
				return _this.getInterceptorInstance(interceptor, contextId, inquirerId);
			}).filter(function(interceptor) {
				return interceptor ? (0, shared_utils_1$36.isFunction)(interceptor.intercept) : false;
			}).toArray();
		}
		getInterceptorInstance(metatype, contextId = constants_2$8.STATIC_CONTEXT, inquirerId) {
			const isObject = !!metatype.intercept;
			if (isObject) return metatype;
			const instanceWrapper = this.getInstanceByMetatype(metatype);
			if (!instanceWrapper) return null;
			const instanceHost = instanceWrapper.getInstanceByContextId(this.getContextId(contextId, instanceWrapper), inquirerId);
			return instanceHost && instanceHost.instance;
		}
		getInstanceByMetatype(metatype) {
			if (!this.moduleContext) return;
			const collection = this.container.getModules();
			const moduleRef = collection.get(this.moduleContext);
			if (!moduleRef) return;
			return moduleRef.injectables.get(metatype);
		}
		getGlobalMetadata(contextId = constants_2$8.STATIC_CONTEXT, inquirerId) {
			var _this2 = this;
			if (!this.config) return [];
			const globalInterceptors = this.config.getGlobalInterceptors();
			if (contextId === constants_2$8.STATIC_CONTEXT && !inquirerId) return globalInterceptors;
			const scopedInterceptorWrappers = this.config.getGlobalRequestInterceptors();
			const scopedInterceptors = (0, iterare_1$17.iterate)(scopedInterceptorWrappers).map(function(wrapper) {
				return wrapper.getInstanceByContextId(_this2.getContextId(contextId, wrapper), inquirerId);
			}).filter(function(host) {
				return !!host;
			}).map(function(host) {
				return host.instance;
			}).toArray();
			return globalInterceptors.concat(scopedInterceptors);
		}
	};
	exports.InterceptorsContextCreator = InterceptorsContextCreator;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/interceptors/index.js
var require_interceptors = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/interceptors/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$17 = __require("tslib");
	tslib_1$17.__exportStar(require_interceptors_consumer(), exports);
	tslib_1$17.__exportStar(require_interceptors_context_creator(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/pipes/params-token-factory.js
var require_params_token_factory = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/pipes/params-token-factory.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ParamsTokenFactory = void 0;
	const route_paramtypes_enum_1$2 = require_route_paramtypes_enum();
	var ParamsTokenFactory = class {
		exchangeEnumForString(type) {
			switch (type) {
				case route_paramtypes_enum_1$2.RouteParamtypes.BODY: return "body";
				case route_paramtypes_enum_1$2.RouteParamtypes.PARAM: return "param";
				case route_paramtypes_enum_1$2.RouteParamtypes.QUERY: return "query";
				default: return "custom";
			}
		}
	};
	exports.ParamsTokenFactory = ParamsTokenFactory;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/pipes/pipes-consumer.js
var require_pipes_consumer = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/pipes/pipes-consumer.js"(exports) {
	var import_asyncToGenerator$27 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PipesConsumer = void 0;
	const params_token_factory_1 = require_params_token_factory();
	var PipesConsumer = class {
		constructor() {
			this.paramsTokenFactory = new params_token_factory_1.ParamsTokenFactory();
		}
		apply(value, { metatype, type, data }, pipes) {
			return (0, import_asyncToGenerator$27.default)(function* () {
				const token = this.paramsTokenFactory.exchangeEnumForString(type);
				return this.applyPipes(value, {
					metatype,
					type: token,
					data
				}, pipes);
			})();
		}
		applyPipes(value, { metatype, type, data }, transforms) {
			return (0, import_asyncToGenerator$27.default)(function* () {
				return transforms.reduce(function() {
					var _ref$1 = (0, import_asyncToGenerator$27.default)(function* (deferredValue, pipe) {
						const val = yield deferredValue;
						const result = pipe.transform(val, {
							metatype,
							type,
							data
						});
						return result;
					});
					return function(_x, _x2) {
						return _ref$1.apply(this, arguments);
					};
				}(), Promise.resolve(value));
			})();
		}
	};
	exports.PipesConsumer = PipesConsumer;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/pipes/pipes-context-creator.js
var require_pipes_context_creator = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/pipes/pipes-context-creator.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PipesContextCreator = void 0;
	const constants_1$23 = require_constants();
	const shared_utils_1$35 = require_shared_utils();
	const iterare_1$16 = require_lib();
	const context_creator_1 = require_context_creator();
	const constants_2$7 = require_constants$3();
	var PipesContextCreator = class extends context_creator_1.ContextCreator {
		constructor(container, config) {
			super();
			this.container = container;
			this.config = config;
		}
		create(instance, callback, moduleKey, contextId = constants_2$7.STATIC_CONTEXT, inquirerId) {
			this.moduleContext = moduleKey;
			return this.createContext(instance, callback, constants_1$23.PIPES_METADATA, contextId, inquirerId);
		}
		createConcreteContext(metadata, contextId = constants_2$7.STATIC_CONTEXT, inquirerId) {
			var _this = this;
			if ((0, shared_utils_1$35.isEmpty)(metadata)) return [];
			return (0, iterare_1$16.iterate)(metadata).filter(function(pipe) {
				return pipe && (pipe.name || pipe.transform);
			}).map(function(pipe) {
				return _this.getPipeInstance(pipe, contextId, inquirerId);
			}).filter(function(pipe) {
				return !!pipe && pipe.transform && (0, shared_utils_1$35.isFunction)(pipe.transform);
			}).toArray();
		}
		getPipeInstance(pipe, contextId = constants_2$7.STATIC_CONTEXT, inquirerId) {
			const isObject = !!pipe.transform;
			if (isObject) return pipe;
			const instanceWrapper = this.getInstanceByMetatype(pipe);
			if (!instanceWrapper) return null;
			const instanceHost = instanceWrapper.getInstanceByContextId(this.getContextId(contextId, instanceWrapper), inquirerId);
			return instanceHost && instanceHost.instance;
		}
		getInstanceByMetatype(metatype) {
			if (!this.moduleContext) return;
			const collection = this.container.getModules();
			const moduleRef = collection.get(this.moduleContext);
			if (!moduleRef) return;
			return moduleRef.injectables.get(metatype);
		}
		getGlobalMetadata(contextId = constants_2$7.STATIC_CONTEXT, inquirerId) {
			var _this2 = this;
			if (!this.config) return [];
			const globalPipes = this.config.getGlobalPipes();
			if (contextId === constants_2$7.STATIC_CONTEXT && !inquirerId) return globalPipes;
			const scopedPipeWrappers = this.config.getGlobalRequestPipes();
			const scopedPipes = (0, iterare_1$16.iterate)(scopedPipeWrappers).map(function(wrapper) {
				return wrapper.getInstanceByContextId(_this2.getContextId(contextId, wrapper), inquirerId);
			}).filter(function(host) {
				return !!host;
			}).map(function(host) {
				return host.instance;
			}).toArray();
			return globalPipes.concat(scopedPipes);
		}
		setModuleContext(context) {
			this.moduleContext = context;
		}
	};
	exports.PipesContextCreator = PipesContextCreator;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/pipes/index.js
var require_pipes = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/pipes/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$16 = __require("tslib");
	tslib_1$16.__exportStar(require_params_token_factory(), exports);
	tslib_1$16.__exportStar(require_pipes_consumer(), exports);
	tslib_1$16.__exportStar(require_pipes_context_creator(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/context-utils.js
var require_context_utils = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/context-utils.js"(exports) {
	var import_objectSpread2$16 = __toESM(require_objectSpread2());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ContextUtils = void 0;
	const constants_1$22 = require_constants();
	const shared_utils_1$34 = require_shared_utils();
	const execution_context_host_1$4 = require_execution_context_host();
	var ContextUtils = class {
		mapParamType(key) {
			const keyPair = key.split(":");
			return keyPair[0];
		}
		reflectCallbackParamtypes(instance, methodName) {
			return Reflect.getMetadata(constants_1$22.PARAMTYPES_METADATA, instance, methodName);
		}
		reflectCallbackMetadata(instance, methodName, metadataKey) {
			return Reflect.getMetadata(metadataKey, instance.constructor, methodName);
		}
		reflectPassthrough(instance, methodName) {
			return Reflect.getMetadata(constants_1$22.RESPONSE_PASSTHROUGH_METADATA, instance.constructor, methodName);
		}
		getArgumentsLength(keys, metadata) {
			return keys.length ? Math.max(...keys.map(function(key) {
				return metadata[key].index;
			})) + 1 : 0;
		}
		createNullArray(length) {
			const a = new Array(length);
			for (let i = 0; i < length; ++i) a[i] = void 0;
			return a;
		}
		mergeParamsMetatypes(paramsProperties, paramtypes) {
			if (!paramtypes) return paramsProperties;
			return paramsProperties.map(function(param) {
				return (0, import_objectSpread2$16.default)((0, import_objectSpread2$16.default)({}, param), {}, { metatype: paramtypes[param.index] });
			});
		}
		getCustomFactory(factory, data, contextFactory) {
			return (0, shared_utils_1$34.isFunction)(factory) ? function(...args) {
				return factory(data, contextFactory(args));
			} : function() {
				return null;
			};
		}
		getContextFactory(contextType, instance, callback) {
			const type = instance && instance.constructor;
			return function(args) {
				const ctx = new execution_context_host_1$4.ExecutionContextHost(args, type, callback);
				ctx.setType(contextType);
				return ctx;
			};
		}
	};
	exports.ContextUtils = ContextUtils;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/external-proxy.js
var require_external_proxy = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/external-proxy.js"(exports) {
	var import_asyncToGenerator$26 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ExternalErrorProxy = void 0;
	const execution_context_host_1$3 = require_execution_context_host();
	var ExternalErrorProxy = class {
		createProxy(targetCallback, exceptionsHandler, type) {
			return (0, import_asyncToGenerator$26.default)(function* (...args) {
				try {
					return yield targetCallback(...args);
				} catch (e) {
					const host = new execution_context_host_1$3.ExecutionContextHost(args);
					host.setType(type);
					return exceptionsHandler.next(e, host);
				}
			});
		}
	};
	exports.ExternalErrorProxy = ExternalErrorProxy;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/handler-metadata-storage.js
var require_handler_metadata_storage = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/handler-metadata-storage.js"(exports) {
	var _a$1;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.HandlerMetadataStorage = exports.HANDLER_METADATA_SYMBOL = void 0;
	const constants_1$21 = require_constants$3();
	exports.HANDLER_METADATA_SYMBOL = Symbol.for("handler_metadata:cache");
	var HandlerMetadataStorage = class {
		constructor() {
			this[_a$1] = /* @__PURE__ */ new Map();
		}
		set(controller, methodName, metadata) {
			const metadataKey = this.getMetadataKey(controller, methodName);
			this[exports.HANDLER_METADATA_SYMBOL].set(metadataKey, metadata);
		}
		get(controller, methodName) {
			const metadataKey = this.getMetadataKey(controller, methodName);
			return this[exports.HANDLER_METADATA_SYMBOL].get(metadataKey);
		}
		getMetadataKey(controller, methodName) {
			const ctor = controller.constructor;
			const controllerKey = ctor && (ctor[constants_1$21.CONTROLLER_ID_KEY] || ctor.name);
			return controllerKey + methodName;
		}
	};
	exports.HandlerMetadataStorage = HandlerMetadataStorage;
	_a$1 = exports.HANDLER_METADATA_SYMBOL;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/external-context-creator.js
var require_external_context_creator = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/external-context-creator.js"(exports) {
	var import_asyncToGenerator$25 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ExternalContextCreator = void 0;
	const common_1$28 = require_common();
	const constants_1$20 = require_constants();
	const shared_utils_1$33 = require_shared_utils();
	const rxjs_1$1 = require_cjs();
	const external_exception_filter_context_1 = require_external_exception_filter_context();
	const guards_1$2 = require_guards();
	const constants_2$6 = require_constants$2();
	const constants_3 = require_constants$3();
	const interceptors_1$1 = require_interceptors();
	const pipes_1$1 = require_pipes();
	const context_utils_1$1 = require_context_utils();
	const external_proxy_1 = require_external_proxy();
	const handler_metadata_storage_1$1 = require_handler_metadata_storage();
	var ExternalContextCreator = class ExternalContextCreator {
		constructor(guardsContextCreator, guardsConsumer, interceptorsContextCreator, interceptorsConsumer, modulesContainer, pipesContextCreator, pipesConsumer, filtersContextCreator) {
			this.guardsContextCreator = guardsContextCreator;
			this.guardsConsumer = guardsConsumer;
			this.interceptorsContextCreator = interceptorsContextCreator;
			this.interceptorsConsumer = interceptorsConsumer;
			this.modulesContainer = modulesContainer;
			this.pipesContextCreator = pipesContextCreator;
			this.pipesConsumer = pipesConsumer;
			this.filtersContextCreator = filtersContextCreator;
			this.contextUtils = new context_utils_1$1.ContextUtils();
			this.externalErrorProxy = new external_proxy_1.ExternalErrorProxy();
			this.handlerMetadataStorage = new handler_metadata_storage_1$1.HandlerMetadataStorage();
		}
		static fromContainer(container) {
			const guardsContextCreator = new guards_1$2.GuardsContextCreator(container, container.applicationConfig);
			const guardsConsumer = new guards_1$2.GuardsConsumer();
			const interceptorsContextCreator = new interceptors_1$1.InterceptorsContextCreator(container, container.applicationConfig);
			const interceptorsConsumer = new interceptors_1$1.InterceptorsConsumer();
			const pipesContextCreator = new pipes_1$1.PipesContextCreator(container, container.applicationConfig);
			const pipesConsumer = new pipes_1$1.PipesConsumer();
			const filtersContextCreator = new external_exception_filter_context_1.ExternalExceptionFilterContext(container, container.applicationConfig);
			const externalContextCreator = new ExternalContextCreator(guardsContextCreator, guardsConsumer, interceptorsContextCreator, interceptorsConsumer, container.getModules(), pipesContextCreator, pipesConsumer, filtersContextCreator);
			externalContextCreator.container = container;
			return externalContextCreator;
		}
		create(instance, callback, methodName, metadataKey, paramsFactory, contextId = constants_3.STATIC_CONTEXT, inquirerId, options = {
			interceptors: true,
			guards: true,
			filters: true
		}, contextType = "http") {
			var _this = this;
			const moduleKey = this.getContextModuleKey(instance.constructor);
			const { argsLength, paramtypes, getParamsMetadata } = this.getMetadata(instance, methodName, metadataKey, paramsFactory, contextType);
			const pipes = this.pipesContextCreator.create(instance, callback, moduleKey, contextId, inquirerId);
			const guards = this.guardsContextCreator.create(instance, callback, moduleKey, contextId, inquirerId);
			const exceptionFilter = this.filtersContextCreator.create(instance, callback, moduleKey, contextId, inquirerId);
			const interceptors = options.interceptors ? this.interceptorsContextCreator.create(instance, callback, moduleKey, contextId, inquirerId) : [];
			const paramsMetadata = getParamsMetadata(moduleKey, contextId, inquirerId);
			const paramsOptions = paramsMetadata ? this.contextUtils.mergeParamsMetatypes(paramsMetadata, paramtypes) : [];
			const fnCanActivate = options.guards ? this.createGuardsFn(guards, instance, callback, contextType) : null;
			const fnApplyPipes = this.createPipesFn(pipes, paramsOptions);
			const handler = function(initialArgs, ...args) {
				return (0, import_asyncToGenerator$25.default)(function* () {
					if (fnApplyPipes) {
						yield fnApplyPipes(initialArgs, ...args);
						return callback.apply(instance, initialArgs);
					}
					return callback.apply(instance, args);
				});
			};
			const target = function() {
				var _ref$1 = (0, import_asyncToGenerator$25.default)(function* (...args) {
					const initialArgs = _this.contextUtils.createNullArray(argsLength);
					fnCanActivate && (yield fnCanActivate(args));
					const result = yield _this.interceptorsConsumer.intercept(interceptors, args, instance, callback, handler(initialArgs, ...args), contextType);
					return _this.transformToResult(result);
				});
				return function target$1() {
					return _ref$1.apply(this, arguments);
				};
			}();
			return options.filters ? this.externalErrorProxy.createProxy(target, exceptionFilter, contextType) : target;
		}
		getMetadata(instance, methodName, metadataKey, paramsFactory, contextType) {
			var _this2 = this;
			const cacheMetadata = this.handlerMetadataStorage.get(instance, methodName);
			if (cacheMetadata) return cacheMetadata;
			const metadata = this.contextUtils.reflectCallbackMetadata(instance, methodName, metadataKey || "") || {};
			const keys = Object.keys(metadata);
			const argsLength = this.contextUtils.getArgumentsLength(keys, metadata);
			const paramtypes = this.contextUtils.reflectCallbackParamtypes(instance, methodName);
			const contextFactory = this.contextUtils.getContextFactory(contextType, instance, instance[methodName]);
			const getParamsMetadata = function(moduleKey, contextId = constants_3.STATIC_CONTEXT, inquirerId) {
				return paramsFactory ? _this2.exchangeKeysForValues(keys, metadata, moduleKey, paramsFactory, contextId, inquirerId, contextFactory) : null;
			};
			const handlerMetadata = {
				argsLength,
				paramtypes,
				getParamsMetadata
			};
			this.handlerMetadataStorage.set(instance, methodName, handlerMetadata);
			return handlerMetadata;
		}
		getContextModuleKey(moduleCtor) {
			const emptyModuleKey = "";
			if (!moduleCtor) return emptyModuleKey;
			const moduleContainerEntries = this.modulesContainer.entries();
			for (const [key, moduleRef] of moduleContainerEntries) if (moduleRef.hasProvider(moduleCtor)) return key;
			return emptyModuleKey;
		}
		exchangeKeysForValues(keys, metadata, moduleContext, paramsFactory, contextId = constants_3.STATIC_CONTEXT, inquirerId, contextFactory = this.contextUtils.getContextFactory("http")) {
			var _this3 = this;
			this.pipesContextCreator.setModuleContext(moduleContext);
			return keys.map(function(key) {
				const { index, data, pipes: pipesCollection } = metadata[key];
				const pipes = _this3.pipesContextCreator.createConcreteContext(pipesCollection, contextId, inquirerId);
				const type = _this3.contextUtils.mapParamType(key);
				if (key.includes(constants_1$20.CUSTOM_ROUTE_ARGS_METADATA)) {
					const { factory } = metadata[key];
					const customExtractValue = _this3.contextUtils.getCustomFactory(factory, data, contextFactory);
					return {
						index,
						extractValue: customExtractValue,
						type,
						data,
						pipes
					};
				}
				const numericType = Number(type);
				const extractValue = function(...args) {
					return paramsFactory.exchangeKeyForValue(numericType, data, args);
				};
				return {
					index,
					extractValue,
					type: numericType,
					data,
					pipes
				};
			});
		}
		createPipesFn(pipes, paramsOptions) {
			var _this4 = this;
			const pipesFn = function() {
				var _ref3$1 = (0, import_asyncToGenerator$25.default)(function* (args, ...params) {
					const resolveParamValue = function() {
						var _ref2$1 = (0, import_asyncToGenerator$25.default)(function* (param) {
							const { index, extractValue, type, data, metatype, pipes: paramPipes } = param;
							const value = extractValue(...params);
							args[index] = yield _this4.getParamValue(value, {
								metatype,
								type,
								data
							}, pipes.concat(paramPipes));
						});
						return function resolveParamValue$1(_x) {
							return _ref2$1.apply(this, arguments);
						};
					}();
					yield Promise.all(paramsOptions.map(resolveParamValue));
				});
				return function pipesFn$1(_x2) {
					return _ref3$1.apply(this, arguments);
				};
			}();
			return paramsOptions.length ? pipesFn : null;
		}
		getParamValue(value, { metatype, type, data }, pipes) {
			return (0, import_asyncToGenerator$25.default)(function* () {
				return (0, shared_utils_1$33.isEmpty)(pipes) ? value : this.pipesConsumer.apply(value, {
					metatype,
					type,
					data
				}, pipes);
			})();
		}
		transformToResult(resultOrDeferred) {
			return (0, import_asyncToGenerator$25.default)(function* () {
				if ((0, rxjs_1$1.isObservable)(resultOrDeferred)) return (0, rxjs_1$1.lastValueFrom)(resultOrDeferred);
				return resultOrDeferred;
			})();
		}
		createGuardsFn(guards, instance, callback, contextType) {
			var _this5 = this;
			const canActivateFn = function() {
				var _ref4 = (0, import_asyncToGenerator$25.default)(function* (args) {
					const canActivate = yield _this5.guardsConsumer.tryActivate(guards, args, instance, callback, contextType);
					if (!canActivate) throw new common_1$28.ForbiddenException(constants_2$6.FORBIDDEN_MESSAGE);
				});
				return function canActivateFn$1(_x3) {
					return _ref4.apply(this, arguments);
				};
			}();
			return guards.length ? canActivateFn : null;
		}
		registerRequestProvider(request, contextId) {
			this.container.registerRequestProvider(request, contextId);
		}
	};
	exports.ExternalContextCreator = ExternalContextCreator;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/index.js
var require_helpers = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$15 = __require("tslib");
	tslib_1$15.__exportStar(require_context_id_factory(), exports);
	tslib_1$15.__exportStar(require_external_context_creator(), exports);
	tslib_1$15.__exportStar(require_http_adapter_host(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/circular-dependency.exception.js
var require_circular_dependency_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/circular-dependency.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CircularDependencyException = void 0;
	const runtime_exception_1$15 = require_runtime_exception();
	var CircularDependencyException = class extends runtime_exception_1$15.RuntimeException {
		constructor(context) {
			const ctx = context ? ` inside ${context}` : ``;
			super(`A circular dependency has been detected${ctx}. Please, make sure that each side of a bidirectional relationships are decorated with "forwardRef()". Note that circular relationships between custom providers (e.g., factories) are not supported since functions cannot be called more than once.`);
		}
	};
	exports.CircularDependencyException = CircularDependencyException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/unknown-element.exception.js
var require_unknown_element_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/unknown-element.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UnknownElementException = void 0;
	const runtime_exception_1$14 = require_runtime_exception();
	var UnknownElementException = class extends runtime_exception_1$14.RuntimeException {
		constructor(name) {
			name = name && name.toString();
			super(`Nest could not find ${name || "given"} element (this provider does not exist in the current context)`);
		}
	};
	exports.UnknownElementException = UnknownElementException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-class-scope.exception.js
var require_invalid_class_scope_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-class-scope.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InvalidClassScopeException = void 0;
	const shared_utils_1$32 = require_shared_utils();
	const messages_1$13 = require_messages$1();
	const runtime_exception_1$13 = require_runtime_exception();
	var InvalidClassScopeException = class extends runtime_exception_1$13.RuntimeException {
		constructor(metatypeOrToken) {
			let name = (0, shared_utils_1$32.isFunction)(metatypeOrToken) ? metatypeOrToken.name : metatypeOrToken;
			name = name && name.toString();
			super((0, messages_1$13.INVALID_CLASS_SCOPE_MESSAGE)`${name}`);
		}
	};
	exports.InvalidClassScopeException = InvalidClassScopeException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-class.exception.js
var require_invalid_class_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-class.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InvalidClassException = void 0;
	const messages_1$12 = require_messages$1();
	const runtime_exception_1$12 = require_runtime_exception();
	var InvalidClassException = class extends runtime_exception_1$12.RuntimeException {
		constructor(value) {
			super((0, messages_1$12.INVALID_CLASS_MESSAGE)`${value}`);
		}
	};
	exports.InvalidClassException = InvalidClassException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/unknown-export.exception.js
var require_unknown_export_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/unknown-export.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UnknownExportException = void 0;
	const messages_1$11 = require_messages$1();
	const runtime_exception_1$11 = require_runtime_exception();
	var UnknownExportException = class extends runtime_exception_1$11.RuntimeException {
		constructor(token, moduleName) {
			super((0, messages_1$11.UNKNOWN_EXPORT_MESSAGE)(token, moduleName));
		}
	};
	exports.UnknownExportException = UnknownExportException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/unknown-module.exception.js
var require_unknown_module_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/unknown-module.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UnknownModuleException = void 0;
	const runtime_exception_1$10 = require_runtime_exception();
	var UnknownModuleException = class extends runtime_exception_1$10.RuntimeException {
		constructor(moduleName) {
			super(`Nest could not select the given module (${moduleName ? `"${moduleName}"` : "it"} does not exist in current context).`);
		}
	};
	exports.UnknownModuleException = UnknownModuleException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/undefined-forwardref.exception.js
var require_undefined_forwardref_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/undefined-forwardref.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UndefinedForwardRefException = void 0;
	const messages_1$10 = require_messages$1();
	const runtime_exception_1$9 = require_runtime_exception();
	var UndefinedForwardRefException = class extends runtime_exception_1$9.RuntimeException {
		constructor(scope) {
			super((0, messages_1$10.UNDEFINED_FORWARDREF_MESSAGE)(scope));
		}
	};
	exports.UndefinedForwardRefException = UndefinedForwardRefException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/index.js
var require_exceptions$1 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$14 = __require("tslib");
	tslib_1$14.__exportStar(require_circular_dependency_exception(), exports);
	tslib_1$14.__exportStar(require_runtime_exception(), exports);
	tslib_1$14.__exportStar(require_unknown_element_exception(), exports);
	tslib_1$14.__exportStar(require_invalid_class_scope_exception(), exports);
	tslib_1$14.__exportStar(require_invalid_class_exception(), exports);
	tslib_1$14.__exportStar(require_unknown_export_exception(), exports);
	tslib_1$14.__exportStar(require_unknown_module_exception(), exports);
	tslib_1$14.__exportStar(require_undefined_forwardref_exception(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/initialize-on-preview.allowlist.js
var require_initialize_on_preview_allowlist = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/initialize-on-preview.allowlist.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InitializeOnPreviewAllowlist = void 0;
	var InitializeOnPreviewAllowlist = class {
		static add(type) {
			this.allowlist.set(type, true);
		}
		static has(type) {
			return this.allowlist.has(type);
		}
	};
	exports.InitializeOnPreviewAllowlist = InitializeOnPreviewAllowlist;
	InitializeOnPreviewAllowlist.allowlist = /* @__PURE__ */ new WeakMap();
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/inquirer/inquirer-constants.js
var require_inquirer_constants = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/inquirer/inquirer-constants.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.INQUIRER = void 0;
	exports.INQUIRER = "INQUIRER";
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/helpers/silent-logger.js
var require_silent_logger = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/helpers/silent-logger.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SilentLogger = void 0;
	const common_1$27 = require_common();
	const noop$3 = function() {};
	var SilentLogger = class extends common_1$27.Logger {
		constructor() {
			super(...arguments);
			this.log = noop$3;
			this.error = noop$3;
			this.warn = noop$3;
			this.debug = noop$3;
			this.verbose = noop$3;
			this.fatal = noop$3;
			this.setLogLevels = noop$3;
		}
	};
	exports.SilentLogger = SilentLogger;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/get-class-scope.js
var require_get_class_scope = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/get-class-scope.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getClassScope = getClassScope;
	const constants_1$19 = require_constants();
	function getClassScope(provider) {
		const metadata = Reflect.getMetadata(constants_1$19.SCOPE_OPTIONS_METADATA, provider);
		return metadata && metadata.scope;
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/is-durable.js
var require_is_durable = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/is-durable.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isDurable = isDurable;
	const constants_1$18 = require_constants();
	function isDurable(provider) {
		const metadata = Reflect.getMetadata(constants_1$18.SCOPE_OPTIONS_METADATA, provider);
		return metadata && metadata.durable;
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/abstract-instance-resolver.js
var require_abstract_instance_resolver = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/abstract-instance-resolver.js"(exports) {
	var import_asyncToGenerator$24 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AbstractInstanceResolver = void 0;
	const common_1$26 = require_common();
	const exceptions_1$5 = require_exceptions$1();
	var AbstractInstanceResolver = class {
		find(typeOrToken, options) {
			const instanceLinkOrArray = this.instanceLinksHost.get(typeOrToken, options);
			const pluckInstance = function({ wrapperRef }) {
				if (wrapperRef.scope === common_1$26.Scope.REQUEST || wrapperRef.scope === common_1$26.Scope.TRANSIENT) throw new exceptions_1$5.InvalidClassScopeException(typeOrToken);
				return wrapperRef.instance;
			};
			if (Array.isArray(instanceLinkOrArray)) return instanceLinkOrArray.map(pluckInstance);
			return pluckInstance(instanceLinkOrArray);
		}
		resolvePerContext(typeOrToken, contextModule, contextId, options) {
			var _this = this;
			return (0, import_asyncToGenerator$24.default)(function* () {
				const instanceLinkOrArray = (options === null || options === void 0 ? void 0 : options.strict) ? this.instanceLinksHost.get(typeOrToken, {
					moduleId: contextModule.id,
					each: options.each
				}) : this.instanceLinksHost.get(typeOrToken, { each: options === null || options === void 0 ? void 0 : options.each });
				const pluckInstance = function() {
					var _ref$1 = (0, import_asyncToGenerator$24.default)(function* (instanceLink) {
						const { wrapperRef, collection } = instanceLink;
						if (wrapperRef.isDependencyTreeStatic() && !wrapperRef.isTransient) return _this.get(typeOrToken, { strict: options === null || options === void 0 ? void 0 : options.strict });
						const ctorHost = wrapperRef.instance || { constructor: typeOrToken };
						const instance = yield _this.injector.loadPerContext(ctorHost, wrapperRef.host, collection, contextId, wrapperRef);
						if (!instance) throw new exceptions_1$5.UnknownElementException();
						return instance;
					});
					return function pluckInstance$1(_x) {
						return _ref$1.apply(this, arguments);
					};
				}();
				if (Array.isArray(instanceLinkOrArray)) return Promise.all(instanceLinkOrArray.map(function(instanceLink) {
					return pluckInstance(instanceLink);
				}));
				return pluckInstance(instanceLinkOrArray);
			})();
		}
	};
	exports.AbstractInstanceResolver = AbstractInstanceResolver;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/undefined-dependency.exception.js
var require_undefined_dependency_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/undefined-dependency.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UndefinedDependencyException = void 0;
	const messages_1$9 = require_messages$1();
	const runtime_exception_1$8 = require_runtime_exception();
	var UndefinedDependencyException = class extends runtime_exception_1$8.RuntimeException {
		constructor(type, undefinedDependencyContext, moduleRef) {
			super((0, messages_1$9.UNKNOWN_DEPENDENCIES_MESSAGE)(type, undefinedDependencyContext, moduleRef));
		}
	};
	exports.UndefinedDependencyException = UndefinedDependencyException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/unknown-dependencies.exception.js
var require_unknown_dependencies_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/unknown-dependencies.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UnknownDependenciesException = void 0;
	const messages_1$8 = require_messages$1();
	const runtime_exception_1$7 = require_runtime_exception();
	var UnknownDependenciesException = class extends runtime_exception_1$7.RuntimeException {
		constructor(type, context, moduleRef, metadata) {
			super((0, messages_1$8.UNKNOWN_DEPENDENCIES_MESSAGE)(type, context, moduleRef));
			this.type = type;
			this.context = context;
			this.metadata = metadata;
			this.moduleRef = moduleRef && { id: moduleRef.id };
		}
	};
	exports.UnknownDependenciesException = UnknownDependenciesException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/inquirer/index.js
var require_inquirer = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/inquirer/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$13 = __require("tslib");
	tslib_1$13.__exportStar(require_inquirer_constants(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/deterministic-uuid-registry.js
var require_deterministic_uuid_registry = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/deterministic-uuid-registry.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DeterministicUuidRegistry = void 0;
	var DeterministicUuidRegistry = class {
		static get(str, inc = 0) {
			const id = inc ? this.hashCode(`${str}_${inc}`) : this.hashCode(str);
			if (this.registry.has(id)) return this.get(str, inc + 1);
			this.registry.set(id, true);
			return id;
		}
		static clear() {
			this.registry.clear();
		}
		static hashCode(s) {
			let h = 0;
			for (let i = 0; i < s.length; i++) h = Math.imul(31, h) + s.charCodeAt(i) | 0;
			return h.toString();
		}
	};
	exports.DeterministicUuidRegistry = DeterministicUuidRegistry;
	DeterministicUuidRegistry.registry = /* @__PURE__ */ new Map();
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/uuid-factory.js
var require_uuid_factory = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/uuid-factory.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UuidFactory = exports.UuidFactoryMode = void 0;
	const random_string_generator_util_1$4 = require_random_string_generator_util();
	const deterministic_uuid_registry_1$2 = require_deterministic_uuid_registry();
	var UuidFactoryMode;
	(function(UuidFactoryMode$1) {
		UuidFactoryMode$1["Random"] = "random";
		UuidFactoryMode$1["Deterministic"] = "deterministic";
	})(UuidFactoryMode || (exports.UuidFactoryMode = UuidFactoryMode = {}));
	var UuidFactory = class {
		static set mode(value) {
			this._mode = value;
		}
		static get(key = "") {
			return this._mode === UuidFactoryMode.Deterministic ? deterministic_uuid_registry_1$2.DeterministicUuidRegistry.get(key) : (0, random_string_generator_util_1$4.randomStringGenerator)();
		}
	};
	exports.UuidFactory = UuidFactory;
	UuidFactory._mode = UuidFactoryMode.Random;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/helpers/provider-classifier.js
var require_provider_classifier = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/helpers/provider-classifier.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isClassProvider = isClassProvider;
	exports.isValueProvider = isValueProvider;
	exports.isFactoryProvider = isFactoryProvider;
	const shared_utils_1$31 = require_shared_utils();
	function isClassProvider(provider) {
		return Boolean(provider === null || provider === void 0 ? void 0 : provider.useClass);
	}
	function isValueProvider(provider) {
		const providerValue = provider === null || provider === void 0 ? void 0 : provider.useValue;
		return !(0, shared_utils_1$31.isUndefined)(providerValue);
	}
	function isFactoryProvider(provider) {
		return Boolean(provider.useFactory);
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/instance-wrapper.js
var require_instance_wrapper = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/instance-wrapper.js"(exports) {
	var import_objectSpread2$15 = __toESM(require_objectSpread2());
	var import_objectWithoutProperties$1 = __toESM(require_objectWithoutProperties());
	const _excluded$1 = ["instance", "isResolved"];
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InstanceWrapper = exports.INSTANCE_ID_SYMBOL = exports.INSTANCE_METADATA_SYMBOL = void 0;
	const common_1$25 = require_common();
	const cli_colors_util_1$6 = require_cli_colors_util();
	const random_string_generator_util_1$3 = require_random_string_generator_util();
	const shared_utils_1$30 = require_shared_utils();
	const iterare_1$15 = require_lib();
	const uuid_factory_1$3 = require_uuid_factory();
	const constants_1$17 = require_constants$3();
	const provider_classifier_1 = require_provider_classifier();
	exports.INSTANCE_METADATA_SYMBOL = Symbol.for("instance_metadata:cache");
	exports.INSTANCE_ID_SYMBOL = Symbol.for("instance_metadata:id");
	var InstanceWrapper = class InstanceWrapper {
		constructor(metadata = {}) {
			var _metadata$exports$INS;
			this.isAlias = false;
			this.scope = common_1$25.Scope.DEFAULT;
			this.values = /* @__PURE__ */ new WeakMap();
			this[_a] = {};
			this.initialize(metadata);
			this[exports.INSTANCE_ID_SYMBOL] = (_metadata$exports$INS = metadata[exports.INSTANCE_ID_SYMBOL]) !== null && _metadata$exports$INS !== void 0 ? _metadata$exports$INS : this.generateUuid();
		}
		get id() {
			return this[exports.INSTANCE_ID_SYMBOL];
		}
		set instance(value) {
			this.values.set(constants_1$17.STATIC_CONTEXT, { instance: value });
		}
		get instance() {
			const instancePerContext = this.getInstanceByContextId(constants_1$17.STATIC_CONTEXT);
			return instancePerContext.instance;
		}
		get isNotMetatype() {
			return !this.metatype || this.isFactory;
		}
		get isFactory() {
			return !!this.metatype && !(0, shared_utils_1$30.isNil)(this.inject);
		}
		get isTransient() {
			return this.scope === common_1$25.Scope.TRANSIENT;
		}
		getInstanceByContextId(contextId, inquirerId) {
			if (this.scope === common_1$25.Scope.TRANSIENT && inquirerId) return this.getInstanceByInquirerId(contextId, inquirerId);
			const instancePerContext = this.values.get(contextId);
			return instancePerContext ? instancePerContext : contextId !== constants_1$17.STATIC_CONTEXT ? this.cloneStaticInstance(contextId) : {
				instance: null,
				isResolved: true,
				isPending: false
			};
		}
		getInstanceByInquirerId(contextId, inquirerId) {
			let collectionPerContext = this.transientMap.get(inquirerId);
			if (!collectionPerContext) {
				collectionPerContext = /* @__PURE__ */ new WeakMap();
				this.transientMap.set(inquirerId, collectionPerContext);
			}
			const instancePerContext = collectionPerContext.get(contextId);
			return instancePerContext ? instancePerContext : this.cloneTransientInstance(contextId, inquirerId);
		}
		setInstanceByContextId(contextId, value, inquirerId) {
			if (this.scope === common_1$25.Scope.TRANSIENT && inquirerId) return this.setInstanceByInquirerId(contextId, inquirerId, value);
			this.values.set(contextId, value);
		}
		setInstanceByInquirerId(contextId, inquirerId, value) {
			let collection = this.transientMap.get(inquirerId);
			if (!collection) {
				collection = /* @__PURE__ */ new WeakMap();
				this.transientMap.set(inquirerId, collection);
			}
			collection.set(contextId, value);
		}
		removeInstanceByContextId(contextId, inquirerId) {
			if (this.scope === common_1$25.Scope.TRANSIENT && inquirerId) return this.removeInstanceByInquirerId(contextId, inquirerId);
			this.values.delete(contextId);
		}
		removeInstanceByInquirerId(contextId, inquirerId) {
			const collection = this.transientMap.get(inquirerId);
			if (!collection) return;
			collection.delete(contextId);
		}
		addCtorMetadata(index, wrapper) {
			if (!this[exports.INSTANCE_METADATA_SYMBOL].dependencies) this[exports.INSTANCE_METADATA_SYMBOL].dependencies = [];
			this[exports.INSTANCE_METADATA_SYMBOL].dependencies[index] = wrapper;
		}
		getCtorMetadata() {
			return this[exports.INSTANCE_METADATA_SYMBOL].dependencies;
		}
		addPropertiesMetadata(key, wrapper) {
			if (!this[exports.INSTANCE_METADATA_SYMBOL].properties) this[exports.INSTANCE_METADATA_SYMBOL].properties = [];
			this[exports.INSTANCE_METADATA_SYMBOL].properties.push({
				key,
				wrapper
			});
		}
		getPropertiesMetadata() {
			return this[exports.INSTANCE_METADATA_SYMBOL].properties;
		}
		addEnhancerMetadata(wrapper) {
			if (!this[exports.INSTANCE_METADATA_SYMBOL].enhancers) this[exports.INSTANCE_METADATA_SYMBOL].enhancers = [];
			this[exports.INSTANCE_METADATA_SYMBOL].enhancers.push(wrapper);
		}
		getEnhancersMetadata() {
			return this[exports.INSTANCE_METADATA_SYMBOL].enhancers;
		}
		isDependencyTreeDurable(lookupRegistry = []) {
			if (!(0, shared_utils_1$30.isUndefined)(this.isTreeDurable)) return this.isTreeDurable;
			if (this.scope === common_1$25.Scope.REQUEST) {
				this.isTreeDurable = this.durable === void 0 ? false : this.durable;
				if (this.isTreeDurable) this.printIntrospectedAsDurable();
				return this.isTreeDurable;
			}
			const isStatic = this.isDependencyTreeStatic();
			if (isStatic) return false;
			const isTreeNonDurable = this.introspectDepsAttribute(function(collection, registry) {
				return collection.some(function(item) {
					return !item.isDependencyTreeStatic() && !item.isDependencyTreeDurable(registry);
				});
			}, lookupRegistry);
			this.isTreeDurable = !isTreeNonDurable;
			if (this.isTreeDurable) this.printIntrospectedAsDurable();
			return this.isTreeDurable;
		}
		introspectDepsAttribute(callback, lookupRegistry = []) {
			if (lookupRegistry.includes(this[exports.INSTANCE_ID_SYMBOL])) return false;
			lookupRegistry = lookupRegistry.concat(this[exports.INSTANCE_ID_SYMBOL]);
			const { dependencies, properties, enhancers } = this[exports.INSTANCE_METADATA_SYMBOL];
			let introspectionResult = dependencies ? callback(dependencies, lookupRegistry) : false;
			if (introspectionResult || !(properties || enhancers)) return introspectionResult;
			introspectionResult = properties ? callback(properties.map(function(item) {
				return item.wrapper;
			}), lookupRegistry) : false;
			if (introspectionResult || !enhancers) return introspectionResult;
			return enhancers ? callback(enhancers, lookupRegistry) : false;
		}
		isDependencyTreeStatic(lookupRegistry = []) {
			if (!(0, shared_utils_1$30.isUndefined)(this.isTreeStatic)) return this.isTreeStatic;
			if (this.scope === common_1$25.Scope.REQUEST) {
				this.isTreeStatic = false;
				this.printIntrospectedAsRequestScoped();
				return this.isTreeStatic;
			}
			this.isTreeStatic = !this.introspectDepsAttribute(function(collection, registry) {
				return collection.some(function(item) {
					return !item.isDependencyTreeStatic(registry);
				});
			}, lookupRegistry);
			if (!this.isTreeStatic) this.printIntrospectedAsRequestScoped();
			return this.isTreeStatic;
		}
		cloneStaticInstance(contextId) {
			const staticInstance = this.getInstanceByContextId(constants_1$17.STATIC_CONTEXT);
			if (this.isDependencyTreeStatic()) return staticInstance;
			const instancePerContext = (0, import_objectSpread2$15.default)((0, import_objectSpread2$15.default)({}, staticInstance), {}, {
				instance: void 0,
				isResolved: false,
				isPending: false
			});
			if (this.isNewable()) instancePerContext.instance = Object.create(this.metatype.prototype);
			this.setInstanceByContextId(contextId, instancePerContext);
			return instancePerContext;
		}
		cloneTransientInstance(contextId, inquirerId) {
			const staticInstance = this.getInstanceByContextId(constants_1$17.STATIC_CONTEXT);
			const instancePerContext = (0, import_objectSpread2$15.default)((0, import_objectSpread2$15.default)({}, staticInstance), {}, {
				instance: void 0,
				isResolved: false,
				isPending: false
			});
			if (this.isNewable()) instancePerContext.instance = Object.create(this.metatype.prototype);
			this.setInstanceByInquirerId(contextId, inquirerId, instancePerContext);
			return instancePerContext;
		}
		createPrototype(contextId) {
			const host = this.getInstanceByContextId(contextId);
			if (!this.isNewable() || host.isResolved) return;
			return Object.create(this.metatype.prototype);
		}
		isInRequestScope(contextId, inquirer) {
			const isDependencyTreeStatic = this.isDependencyTreeStatic();
			return !isDependencyTreeStatic && contextId !== constants_1$17.STATIC_CONTEXT && (!this.isTransient || this.isTransient && !!inquirer);
		}
		isLazyTransient(contextId, inquirer) {
			const isInquirerRequestScoped = !!(inquirer && !inquirer.isDependencyTreeStatic());
			return this.isDependencyTreeStatic() && contextId !== constants_1$17.STATIC_CONTEXT && this.isTransient && isInquirerRequestScoped;
		}
		isExplicitlyRequested(contextId, inquirer) {
			const isSelfRequested = inquirer === this;
			return this.isDependencyTreeStatic() && contextId !== constants_1$17.STATIC_CONTEXT && (isSelfRequested || !!(inquirer && inquirer.scope === common_1$25.Scope.TRANSIENT));
		}
		isStatic(contextId, inquirer) {
			const isInquirerRequestScoped = inquirer && !inquirer.isDependencyTreeStatic();
			const isStaticTransient = this.isTransient && !isInquirerRequestScoped;
			return this.isDependencyTreeStatic() && contextId === constants_1$17.STATIC_CONTEXT && (!this.isTransient || isStaticTransient && !!inquirer && !inquirer.isTransient);
		}
		getStaticTransientInstances() {
			if (!this.transientMap) return [];
			const instances = [...this.transientMap.values()];
			return (0, iterare_1$15.iterate)(instances).map(function(item) {
				return item.get(constants_1$17.STATIC_CONTEXT);
			}).filter(function(item) {
				return !!item;
			}).toArray();
		}
		mergeWith(provider) {
			if ((0, provider_classifier_1.isValueProvider)(provider)) {
				this.metatype = null;
				this.inject = null;
				this.scope = common_1$25.Scope.DEFAULT;
				this.setInstanceByContextId(constants_1$17.STATIC_CONTEXT, {
					instance: provider.useValue,
					isResolved: true,
					isPending: false
				});
			} else if ((0, provider_classifier_1.isClassProvider)(provider)) {
				this.inject = null;
				this.metatype = provider.useClass;
			} else if ((0, provider_classifier_1.isFactoryProvider)(provider)) {
				this.metatype = provider.useFactory;
				this.inject = provider.inject || [];
			}
		}
		isNewable() {
			return (0, shared_utils_1$30.isNil)(this.inject) && this.metatype && this.metatype.prototype;
		}
		initialize(metadata) {
			const { instance, isResolved } = metadata, wrapperPartial = (0, import_objectWithoutProperties$1.default)(metadata, _excluded$1);
			Object.assign(this, wrapperPartial);
			this.setInstanceByContextId(constants_1$17.STATIC_CONTEXT, {
				instance,
				isResolved
			});
			this.scope === common_1$25.Scope.TRANSIENT && (this.transientMap = /* @__PURE__ */ new Map());
		}
		printIntrospectedAsRequestScoped() {
			if (!this.isDebugMode() || this.name === "REQUEST") return;
			if ((0, shared_utils_1$30.isString)(this.name)) InstanceWrapper.logger.log(`${cli_colors_util_1$6.clc.cyanBright(this.name)}${cli_colors_util_1$6.clc.green(" introspected as ")}${cli_colors_util_1$6.clc.magentaBright("request-scoped")}`);
		}
		printIntrospectedAsDurable() {
			if (!this.isDebugMode()) return;
			if ((0, shared_utils_1$30.isString)(this.name)) InstanceWrapper.logger.log(`${cli_colors_util_1$6.clc.cyanBright(this.name)}${cli_colors_util_1$6.clc.green(" introspected as ")}${cli_colors_util_1$6.clc.magentaBright("durable")}`);
		}
		isDebugMode() {
			return !!process.env.NEST_DEBUG;
		}
		generateUuid() {
			var _this$name$toString, _this$name, _this$token, _this$host$name, _this$host;
			let key = (_this$name$toString = (_this$name = this.name) === null || _this$name === void 0 ? void 0 : _this$name.toString()) !== null && _this$name$toString !== void 0 ? _this$name$toString : (_this$token = this.token) === null || _this$token === void 0 ? void 0 : _this$token.toString();
			key += (_this$host$name = (_this$host = this.host) === null || _this$host === void 0 ? void 0 : _this$host.name) !== null && _this$host$name !== void 0 ? _this$host$name : "";
			return key ? uuid_factory_1$3.UuidFactory.get(key) : (0, random_string_generator_util_1$3.randomStringGenerator)();
		}
	};
	exports.InstanceWrapper = InstanceWrapper;
	_a = exports.INSTANCE_METADATA_SYMBOL;
	InstanceWrapper.logger = new common_1$25.Logger(InstanceWrapper.name);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/settlement-signal.js
var require_settlement_signal = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/settlement-signal.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SettlementSignal = void 0;
	/**
	* SettlementSignal is used to signal the resolution of a provider/instance.
	* Calling `complete` or `error` will resolve the promise returned by `asPromise`.
	* Can be used to detect circular dependencies.
	*/
	var SettlementSignal = class {
		constructor() {
			var _this = this;
			this._refs = /* @__PURE__ */ new Set();
			this.completed = false;
			this.settledPromise = new Promise(function(resolve) {
				_this.settleFn = resolve;
			});
		}
		/**
		* Resolves the promise returned by `asPromise`.
		*/
		complete() {
			this.completed = true;
			this.settleFn();
		}
		/**
		* Rejects the promise returned by `asPromise` with the given error.
		* @param err Error to reject the promise returned by `asPromise` with.
		*/
		error(err) {
			this.completed = true;
			this.settleFn(err);
		}
		/**
		* Returns a promise that will be resolved when `complete` or `error` is called.
		* @returns Promise that will be resolved when `complete` or `error` is called.
		*/
		asPromise() {
			return this.settledPromise;
		}
		/**
		* Inserts a wrapper id that the host of this signal depends on.
		* @param wrapperId Wrapper id to insert.
		*/
		insertRef(wrapperId) {
			this._refs.add(wrapperId);
		}
		/**
		* Check if relationship is circular.
		* @param wrapperId Wrapper id to check.
		* @returns True if relationship is circular, false otherwise.
		*/
		isCycle(wrapperId) {
			return !this.completed && this._refs.has(wrapperId);
		}
	};
	exports.SettlementSignal = SettlementSignal;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/injector.js
var require_injector$1 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/injector.js"(exports) {
	var import_objectSpread2$14 = __toESM(require_objectSpread2());
	var import_asyncToGenerator$23 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Injector = void 0;
	const common_1$24 = require_common();
	const constants_1$16 = require_constants();
	const cli_colors_util_1$5 = require_cli_colors_util();
	const shared_utils_1$29 = require_shared_utils();
	const iterare_1$14 = require_lib();
	const perf_hooks_1 = __require("perf_hooks");
	const exceptions_1$4 = require_exceptions$1();
	const runtime_exception_1$6 = require_runtime_exception();
	const undefined_dependency_exception_1 = require_undefined_dependency_exception();
	const unknown_dependencies_exception_1$1 = require_unknown_dependencies_exception();
	const constants_2$5 = require_constants$3();
	const inquirer_1 = require_inquirer();
	const instance_wrapper_1$3 = require_instance_wrapper();
	const settlement_signal_1 = require_settlement_signal();
	var Injector = class {
		constructor(options) {
			this.options = options;
			this.logger = new common_1$24.Logger("InjectorLogger");
		}
		loadPrototype({ token }, collection, contextId = constants_2$5.STATIC_CONTEXT) {
			if (!collection) return;
			const target = collection.get(token);
			const instance = target.createPrototype(contextId);
			if (instance) {
				const wrapper = new instance_wrapper_1$3.InstanceWrapper((0, import_objectSpread2$14.default)((0, import_objectSpread2$14.default)({}, target), {}, { instance }));
				collection.set(token, wrapper);
			}
		}
		loadInstance(_x2, _x3, _x4) {
			var _this = this;
			return (0, import_asyncToGenerator$23.default)(function* (wrapper, collection, moduleRef, contextId = constants_2$5.STATIC_CONTEXT, inquirer) {
				const inquirerId = this.getInquirerId(inquirer);
				const instanceHost = wrapper.getInstanceByContextId(this.getContextId(contextId, wrapper), inquirerId);
				if (instanceHost.isPending) {
					const settlementSignal$1 = wrapper.settlementSignal;
					if (inquirer && (settlementSignal$1 === null || settlementSignal$1 === void 0 ? void 0 : settlementSignal$1.isCycle(inquirer.id))) throw new exceptions_1$4.CircularDependencyException(`"${wrapper.name}"`);
					return instanceHost.donePromise.then(function(err) {
						if (err) throw err;
					});
				}
				const settlementSignal = this.applySettlementSignal(instanceHost, wrapper);
				const token = wrapper.token || wrapper.name;
				const { inject } = wrapper;
				const targetWrapper = collection.get(token);
				if ((0, shared_utils_1$29.isUndefined)(targetWrapper)) throw new runtime_exception_1$6.RuntimeException();
				if (instanceHost.isResolved) return settlementSignal.complete();
				try {
					const t0 = this.getNowTimestamp();
					const callback = function() {
						var _ref$1 = (0, import_asyncToGenerator$23.default)(function* (instances) {
							const properties = yield _this.resolveProperties(wrapper, moduleRef, inject, contextId, wrapper, inquirer);
							const instance = yield _this.instantiateClass(instances, wrapper, targetWrapper, contextId, inquirer);
							_this.applyProperties(instance, properties);
							wrapper.initTime = _this.getNowTimestamp() - t0;
							settlementSignal.complete();
						});
						return function callback$1(_x) {
							return _ref$1.apply(this, arguments);
						};
					}();
					yield this.resolveConstructorParams(wrapper, moduleRef, inject, callback, contextId, wrapper, inquirer);
				} catch (err) {
					wrapper.removeInstanceByContextId(this.getContextId(contextId, wrapper), inquirerId);
					settlementSignal.error(err);
					throw err;
				}
			}).apply(this, arguments);
		}
		loadMiddleware(_x5, _x6, _x7) {
			return (0, import_asyncToGenerator$23.default)(function* (wrapper, collection, moduleRef, contextId = constants_2$5.STATIC_CONTEXT, inquirer) {
				const { metatype, token } = wrapper;
				const targetWrapper = collection.get(token);
				if (!(0, shared_utils_1$29.isUndefined)(targetWrapper.instance)) return;
				targetWrapper.instance = Object.create(metatype.prototype);
				yield this.loadInstance(wrapper, collection, moduleRef, contextId, inquirer || wrapper);
			}).apply(this, arguments);
		}
		loadController(_x8, _x9) {
			return (0, import_asyncToGenerator$23.default)(function* (wrapper, moduleRef, contextId = constants_2$5.STATIC_CONTEXT) {
				const controllers = moduleRef.controllers;
				yield this.loadInstance(wrapper, controllers, moduleRef, contextId, wrapper);
				yield this.loadEnhancersPerContext(wrapper, contextId, wrapper);
			}).apply(this, arguments);
		}
		loadInjectable(_x10, _x11) {
			return (0, import_asyncToGenerator$23.default)(function* (wrapper, moduleRef, contextId = constants_2$5.STATIC_CONTEXT, inquirer) {
				const injectables = moduleRef.injectables;
				yield this.loadInstance(wrapper, injectables, moduleRef, contextId, inquirer);
			}).apply(this, arguments);
		}
		loadProvider(_x12, _x13) {
			return (0, import_asyncToGenerator$23.default)(function* (wrapper, moduleRef, contextId = constants_2$5.STATIC_CONTEXT, inquirer) {
				const providers = moduleRef.providers;
				yield this.loadInstance(wrapper, providers, moduleRef, contextId, inquirer);
				yield this.loadEnhancersPerContext(wrapper, contextId, wrapper);
			}).apply(this, arguments);
		}
		applySettlementSignal(instancePerContext, host) {
			const settlementSignal = new settlement_signal_1.SettlementSignal();
			instancePerContext.donePromise = settlementSignal.asPromise();
			instancePerContext.isPending = true;
			host.settlementSignal = settlementSignal;
			return settlementSignal;
		}
		resolveConstructorParams(_x16, _x17, _x18, _x19) {
			var _this2 = this;
			return (0, import_asyncToGenerator$23.default)(function* (wrapper, moduleRef, inject, callback, contextId = constants_2$5.STATIC_CONTEXT, inquirer, parentInquirer) {
				let inquirerId = this.getInquirerId(inquirer);
				const metadata = wrapper.getCtorMetadata();
				if (metadata && contextId !== constants_2$5.STATIC_CONTEXT) {
					const deps = yield this.loadCtorMetadata(metadata, contextId, inquirer, parentInquirer);
					return callback(deps);
				}
				const isFactoryProvider$1 = !(0, shared_utils_1$29.isNil)(inject);
				const [dependencies, optionalDependenciesIds] = isFactoryProvider$1 ? this.getFactoryProviderDependencies(wrapper) : this.getClassDependencies(wrapper);
				let isResolved = true;
				const resolveParam = function() {
					var _ref2$1 = (0, import_asyncToGenerator$23.default)(function* (param, index) {
						try {
							if (_this2.isInquirer(param, parentInquirer)) return parentInquirer && parentInquirer.instance;
							if ((inquirer === null || inquirer === void 0 ? void 0 : inquirer.isTransient) && parentInquirer) {
								inquirer = parentInquirer;
								inquirerId = _this2.getInquirerId(parentInquirer);
							}
							const paramWrapper = yield _this2.resolveSingleParam(wrapper, param, {
								index,
								dependencies
							}, moduleRef, contextId, inquirer, index);
							const instanceHost = paramWrapper.getInstanceByContextId(_this2.getContextId(contextId, paramWrapper), inquirerId);
							if (!instanceHost.isResolved && !paramWrapper.forwardRef) isResolved = false;
							return instanceHost === null || instanceHost === void 0 ? void 0 : instanceHost.instance;
						} catch (err) {
							const isOptional = optionalDependenciesIds.includes(index);
							if (!isOptional) throw err;
							return void 0;
						}
					});
					return function resolveParam$1(_x14, _x15) {
						return _ref2$1.apply(this, arguments);
					};
				}();
				const instances = yield Promise.all(dependencies.map(resolveParam));
				isResolved && (yield callback(instances));
			}).apply(this, arguments);
		}
		getClassDependencies(wrapper) {
			const ctorRef = wrapper.metatype;
			return [this.reflectConstructorParams(ctorRef), this.reflectOptionalParams(ctorRef)];
		}
		getFactoryProviderDependencies(wrapper) {
			var _wrapper$inject, _wrapper$inject$map;
			const optionalDependenciesIds = [];
			/**
			* Same as the internal utility function `isOptionalFactoryDependency` from `@nestjs/common`.
			* We are duplicating it here because that one is not supposed to be exported.
			*/
			function isOptionalFactoryDependency(value) {
				return !(0, shared_utils_1$29.isUndefined)(value.token) && !(0, shared_utils_1$29.isUndefined)(value.optional) && !value.prototype;
			}
			const mapFactoryProviderInjectArray = function(item, index) {
				if (typeof item !== "object") return item;
				if (isOptionalFactoryDependency(item)) {
					if (item.optional) optionalDependenciesIds.push(index);
					return item === null || item === void 0 ? void 0 : item.token;
				}
				return item;
			};
			return [(_wrapper$inject = wrapper.inject) === null || _wrapper$inject === void 0 || (_wrapper$inject$map = _wrapper$inject.map) === null || _wrapper$inject$map === void 0 ? void 0 : _wrapper$inject$map.call(_wrapper$inject, mapFactoryProviderInjectArray), optionalDependenciesIds];
		}
		reflectConstructorParams(type) {
			const paramtypes = [...Reflect.getMetadata(constants_1$16.PARAMTYPES_METADATA, type) || []];
			const selfParams = this.reflectSelfParams(type);
			selfParams.forEach(function({ index, param }) {
				return paramtypes[index] = param;
			});
			return paramtypes;
		}
		reflectOptionalParams(type) {
			return Reflect.getMetadata(constants_1$16.OPTIONAL_DEPS_METADATA, type) || [];
		}
		reflectSelfParams(type) {
			return Reflect.getMetadata(constants_1$16.SELF_DECLARED_DEPS_METADATA, type) || [];
		}
		resolveSingleParam(_x20, _x21, _x22, _x23) {
			return (0, import_asyncToGenerator$23.default)(function* (wrapper, param, dependencyContext, moduleRef, contextId = constants_2$5.STATIC_CONTEXT, inquirer, keyOrIndex) {
				if ((0, shared_utils_1$29.isUndefined)(param)) {
					this.logger.log("Nest encountered an undefined dependency. This may be due to a circular import or a missing dependency declaration.");
					throw new undefined_dependency_exception_1.UndefinedDependencyException(wrapper.name, dependencyContext, moduleRef);
				}
				const token = this.resolveParamToken(wrapper, param);
				return this.resolveComponentInstance(moduleRef, token, dependencyContext, wrapper, contextId, inquirer, keyOrIndex);
			}).apply(this, arguments);
		}
		resolveParamToken(wrapper, param) {
			if (typeof param === "object" && "forwardRef" in param) {
				wrapper.forwardRef = true;
				return param.forwardRef();
			}
			return param;
		}
		resolveComponentInstance(_x24, _x25, _x26, _x27) {
			return (0, import_asyncToGenerator$23.default)(function* (moduleRef, token, dependencyContext, wrapper, contextId = constants_2$5.STATIC_CONTEXT, inquirer, keyOrIndex) {
				this.printResolvingDependenciesLog(token, inquirer);
				this.printLookingForProviderLog(token, moduleRef);
				const providers = moduleRef.providers;
				const instanceWrapper = yield this.lookupComponent(providers, moduleRef, (0, import_objectSpread2$14.default)((0, import_objectSpread2$14.default)({}, dependencyContext), {}, { name: token }), wrapper, contextId, inquirer, keyOrIndex);
				return this.resolveComponentHost(moduleRef, instanceWrapper, contextId, inquirer);
			}).apply(this, arguments);
		}
		resolveComponentHost(_x28, _x29) {
			var _this3 = this;
			return (0, import_asyncToGenerator$23.default)(function* (moduleRef, instanceWrapper, contextId = constants_2$5.STATIC_CONTEXT, inquirer) {
				const inquirerId = this.getInquirerId(inquirer);
				const instanceHost = instanceWrapper.getInstanceByContextId(this.getContextId(contextId, instanceWrapper), inquirerId);
				if (!instanceHost.isResolved && !instanceWrapper.forwardRef) {
					var _inquirer$settlementS, _instanceWrapper$host;
					inquirer === null || inquirer === void 0 || (_inquirer$settlementS = inquirer.settlementSignal) === null || _inquirer$settlementS === void 0 || _inquirer$settlementS.insertRef(instanceWrapper.id);
					yield this.loadProvider(instanceWrapper, (_instanceWrapper$host = instanceWrapper.host) !== null && _instanceWrapper$host !== void 0 ? _instanceWrapper$host : moduleRef, contextId, inquirer);
				} else if (!instanceHost.isResolved && instanceWrapper.forwardRef && (contextId !== constants_2$5.STATIC_CONTEXT || !!inquirerId))
 /**
				* When circular dependency has been detected between
				* either request/transient providers, we have to asynchronously
				* resolve instance host for a specific contextId or inquirer, to ensure
				* that eventual lazily created instance will be merged with the prototype
				* instantiated beforehand.
				*/
				instanceHost.donePromise && instanceHost.donePromise.then(function() {
					return _this3.loadProvider(instanceWrapper, moduleRef, contextId, inquirer);
				});
				if (instanceWrapper.async) {
					const host = instanceWrapper.getInstanceByContextId(this.getContextId(contextId, instanceWrapper), inquirerId);
					host.instance = yield host.instance;
					instanceWrapper.setInstanceByContextId(contextId, host, inquirerId);
				}
				return instanceWrapper;
			}).apply(this, arguments);
		}
		lookupComponent(_x30, _x31, _x32, _x33) {
			return (0, import_asyncToGenerator$23.default)(function* (providers, moduleRef, dependencyContext, wrapper, contextId = constants_2$5.STATIC_CONTEXT, inquirer, keyOrIndex) {
				const token = wrapper.token || wrapper.name;
				const { name } = dependencyContext;
				if (wrapper && token === name) throw new unknown_dependencies_exception_1$1.UnknownDependenciesException(wrapper.name, dependencyContext, moduleRef, { id: wrapper.id });
				if (name && providers.has(name)) {
					const instanceWrapper = providers.get(name);
					this.printFoundInModuleLog(name, moduleRef);
					this.addDependencyMetadata(keyOrIndex, wrapper, instanceWrapper);
					return instanceWrapper;
				}
				return this.lookupComponentInParentModules(dependencyContext, moduleRef, wrapper, contextId, inquirer, keyOrIndex);
			}).apply(this, arguments);
		}
		lookupComponentInParentModules(_x34, _x35, _x36) {
			return (0, import_asyncToGenerator$23.default)(function* (dependencyContext, moduleRef, wrapper, contextId = constants_2$5.STATIC_CONTEXT, inquirer, keyOrIndex) {
				const instanceWrapper = yield this.lookupComponentInImports(moduleRef, dependencyContext.name, wrapper, [], contextId, inquirer, keyOrIndex);
				if ((0, shared_utils_1$29.isNil)(instanceWrapper)) throw new unknown_dependencies_exception_1$1.UnknownDependenciesException(wrapper.name, dependencyContext, moduleRef, { id: wrapper.id });
				return instanceWrapper;
			}).apply(this, arguments);
		}
		lookupComponentInImports(_x37, _x38, _x39) {
			return (0, import_asyncToGenerator$23.default)(function* (moduleRef, name, wrapper, moduleRegistry = [], contextId = constants_2$5.STATIC_CONTEXT, inquirer, keyOrIndex, isTraversing) {
				let instanceWrapperRef = null;
				const imports = moduleRef.imports || /* @__PURE__ */ new Set();
				const identity = function(item) {
					return item;
				};
				let children = [...imports.values()].filter(identity);
				if (isTraversing) {
					const contextModuleExports = moduleRef.exports;
					children = children.filter(function(child) {
						return contextModuleExports.has(child.metatype);
					});
				}
				for (const relatedModule of children) {
					if (moduleRegistry.includes(relatedModule.id)) continue;
					this.printLookingForProviderLog(name, relatedModule);
					moduleRegistry.push(relatedModule.id);
					const { providers, exports: exports$1 } = relatedModule;
					if (!exports$1.has(name) || !providers.has(name)) {
						const instanceRef = yield this.lookupComponentInImports(relatedModule, name, wrapper, moduleRegistry, contextId, inquirer, keyOrIndex, true);
						if (instanceRef) {
							this.addDependencyMetadata(keyOrIndex, wrapper, instanceRef);
							return instanceRef;
						}
						continue;
					}
					this.printFoundInModuleLog(name, relatedModule);
					instanceWrapperRef = providers.get(name);
					this.addDependencyMetadata(keyOrIndex, wrapper, instanceWrapperRef);
					const inquirerId = this.getInquirerId(inquirer);
					const instanceHost = instanceWrapperRef.getInstanceByContextId(this.getContextId(contextId, instanceWrapperRef), inquirerId);
					if (!instanceHost.isResolved && !instanceWrapperRef.forwardRef) {
						var _wrapper$settlementSi;
						(_wrapper$settlementSi = wrapper.settlementSignal) === null || _wrapper$settlementSi === void 0 || _wrapper$settlementSi.insertRef(instanceWrapperRef.id);
						yield this.loadProvider(instanceWrapperRef, relatedModule, contextId, wrapper);
						break;
					}
				}
				return instanceWrapperRef;
			}).apply(this, arguments);
		}
		resolveProperties(_x41, _x42, _x43) {
			var _this4 = this;
			return (0, import_asyncToGenerator$23.default)(function* (wrapper, moduleRef, inject, contextId = constants_2$5.STATIC_CONTEXT, inquirer, parentInquirer) {
				if (!(0, shared_utils_1$29.isNil)(inject)) return [];
				const metadata = wrapper.getPropertiesMetadata();
				if (metadata && contextId !== constants_2$5.STATIC_CONTEXT) return this.loadPropertiesMetadata(metadata, contextId, inquirer);
				const properties = this.reflectProperties(wrapper.metatype);
				const instances = yield Promise.all(properties.map(function() {
					var _ref3$1 = (0, import_asyncToGenerator$23.default)(function* (item) {
						try {
							const dependencyContext = {
								key: item.key,
								name: item.name
							};
							if (_this4.isInquirer(item.name, parentInquirer)) return parentInquirer && parentInquirer.instance;
							const paramWrapper = yield _this4.resolveSingleParam(wrapper, item.name, dependencyContext, moduleRef, contextId, inquirer, item.key);
							if (!paramWrapper) return void 0;
							const inquirerId = _this4.getInquirerId(inquirer);
							const instanceHost = paramWrapper.getInstanceByContextId(_this4.getContextId(contextId, paramWrapper), inquirerId);
							return instanceHost.instance;
						} catch (err) {
							if (!item.isOptional) throw err;
							return void 0;
						}
					});
					return function(_x40) {
						return _ref3$1.apply(this, arguments);
					};
				}()));
				return properties.map(function(item, index) {
					return (0, import_objectSpread2$14.default)((0, import_objectSpread2$14.default)({}, item), {}, { instance: instances[index] });
				});
			}).apply(this, arguments);
		}
		reflectProperties(type) {
			const properties = Reflect.getMetadata(constants_1$16.PROPERTY_DEPS_METADATA, type) || [];
			const optionalKeys = Reflect.getMetadata(constants_1$16.OPTIONAL_PROPERTY_DEPS_METADATA, type) || [];
			return properties.map(function(item) {
				return (0, import_objectSpread2$14.default)((0, import_objectSpread2$14.default)({}, item), {}, {
					name: item.type,
					isOptional: optionalKeys.includes(item.key)
				});
			});
		}
		applyProperties(instance, properties) {
			if (!(0, shared_utils_1$29.isObject)(instance)) return void 0;
			(0, iterare_1$14.iterate)(properties).filter(function(item) {
				return !(0, shared_utils_1$29.isNil)(item.instance);
			}).forEach(function(item) {
				return instance[item.key] = item.instance;
			});
		}
		instantiateClass(_x44, _x45, _x46) {
			return (0, import_asyncToGenerator$23.default)(function* (instances, wrapper, targetMetatype, contextId = constants_2$5.STATIC_CONTEXT, inquirer) {
				var _this$options, _wrapper$host;
				const { metatype, inject } = wrapper;
				const inquirerId = this.getInquirerId(inquirer);
				const instanceHost = targetMetatype.getInstanceByContextId(this.getContextId(contextId, targetMetatype), inquirerId);
				const isInContext = wrapper.isStatic(contextId, inquirer) || wrapper.isInRequestScope(contextId, inquirer) || wrapper.isLazyTransient(contextId, inquirer) || wrapper.isExplicitlyRequested(contextId, inquirer);
				if (((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.preview) && !((_wrapper$host = wrapper.host) === null || _wrapper$host === void 0 ? void 0 : _wrapper$host.initOnPreview)) {
					instanceHost.isResolved = true;
					return instanceHost.instance;
				}
				if ((0, shared_utils_1$29.isNil)(inject) && isInContext) instanceHost.instance = wrapper.forwardRef ? Object.assign(instanceHost.instance, new metatype(...instances)) : new metatype(...instances);
				else if (isInContext) {
					const factoryReturnValue = targetMetatype.metatype(...instances);
					instanceHost.instance = yield factoryReturnValue;
				}
				instanceHost.isResolved = true;
				return instanceHost.instance;
			}).apply(this, arguments);
		}
		loadPerContext(instance, moduleRef, collection, ctx, wrapper) {
			return (0, import_asyncToGenerator$23.default)(function* () {
				if (!wrapper) {
					const injectionToken = instance.constructor;
					wrapper = collection.get(injectionToken);
				}
				yield this.loadInstance(wrapper, collection, moduleRef, ctx, wrapper);
				yield this.loadEnhancersPerContext(wrapper, ctx, wrapper);
				const host = wrapper.getInstanceByContextId(this.getContextId(ctx, wrapper), wrapper.id);
				return host && host.instance;
			})();
		}
		loadEnhancersPerContext(wrapper, ctx, inquirer) {
			var _this5 = this;
			return (0, import_asyncToGenerator$23.default)(function* () {
				const enhancers = wrapper.getEnhancersMetadata() || [];
				const loadEnhancer = function(item) {
					const hostModule = item.host;
					return _this5.loadInstance(item, hostModule.injectables, hostModule, ctx, inquirer);
				};
				yield Promise.all(enhancers.map(loadEnhancer));
			})();
		}
		loadCtorMetadata(metadata, contextId, inquirer, parentInquirer) {
			var _this6 = this;
			return (0, import_asyncToGenerator$23.default)(function* () {
				const hosts = yield Promise.all(metadata.map(function() {
					var _ref4 = (0, import_asyncToGenerator$23.default)(function* (item) {
						return _this6.resolveScopedComponentHost(item, contextId, inquirer, parentInquirer);
					});
					return function(_x47) {
						return _ref4.apply(this, arguments);
					};
				}()));
				const inquirerId = this.getInquirerId(inquirer);
				return hosts.map(function(item) {
					return item === null || item === void 0 ? void 0 : item.getInstanceByContextId(_this6.getContextId(contextId, item), inquirerId).instance;
				});
			})();
		}
		loadPropertiesMetadata(metadata, contextId, inquirer) {
			var _this7 = this;
			return (0, import_asyncToGenerator$23.default)(function* () {
				const dependenciesHosts = yield Promise.all(metadata.map(function() {
					var _ref5 = (0, import_asyncToGenerator$23.default)(function* ({ wrapper: item, key }) {
						return {
							key,
							host: yield _this7.resolveComponentHost(item.host, item, contextId, inquirer)
						};
					});
					return function(_x48) {
						return _ref5.apply(this, arguments);
					};
				}()));
				const inquirerId = this.getInquirerId(inquirer);
				return dependenciesHosts.map(function({ key, host }) {
					return {
						key,
						name: key,
						instance: host.getInstanceByContextId(_this7.getContextId(contextId, host), inquirerId).instance
					};
				});
			})();
		}
		getInquirerId(inquirer) {
			return inquirer ? inquirer.id : void 0;
		}
		resolveScopedComponentHost(item, contextId, inquirer, parentInquirer) {
			return this.isInquirerRequest(item, parentInquirer) ? parentInquirer : this.resolveComponentHost(item.host, item, contextId, inquirer);
		}
		isInquirerRequest(item, parentInquirer) {
			return item.isTransient && item.name === inquirer_1.INQUIRER && parentInquirer;
		}
		isInquirer(param, parentInquirer) {
			return param === inquirer_1.INQUIRER && parentInquirer;
		}
		addDependencyMetadata(keyOrIndex, hostWrapper, instanceWrapper) {
			if ((0, shared_utils_1$29.isSymbol)(keyOrIndex) || (0, shared_utils_1$29.isString)(keyOrIndex)) hostWrapper.addPropertiesMetadata(keyOrIndex, instanceWrapper);
			else hostWrapper.addCtorMetadata(keyOrIndex, instanceWrapper);
		}
		getTokenName(token) {
			return (0, shared_utils_1$29.isFunction)(token) ? token.name : token.toString();
		}
		printResolvingDependenciesLog(token, inquirer) {
			var _ref6, _inquirer$name$toStri, _inquirer$name;
			if (!this.isDebugMode()) return;
			const tokenName = this.getTokenName(token);
			const dependentName = (_ref6 = (inquirer === null || inquirer === void 0 ? void 0 : inquirer.name) && ((_inquirer$name$toStri = (_inquirer$name = inquirer.name).toString) === null || _inquirer$name$toStri === void 0 ? void 0 : _inquirer$name$toStri.call(_inquirer$name))) !== null && _ref6 !== void 0 ? _ref6 : "unknown";
			const isAlias = dependentName === tokenName;
			const messageToPrint = `Resolving dependency ${cli_colors_util_1$5.clc.cyanBright(tokenName)}${cli_colors_util_1$5.clc.green(" in the ")}${cli_colors_util_1$5.clc.yellow(dependentName)}${cli_colors_util_1$5.clc.green(` provider ${isAlias ? "(alias)" : ""}`)}`;
			this.logger.log(messageToPrint);
		}
		printLookingForProviderLog(token, moduleRef) {
			var _moduleRef$metatype$n, _moduleRef$metatype;
			if (!this.isDebugMode()) return;
			const tokenName = this.getTokenName(token);
			const moduleRefName = (_moduleRef$metatype$n = moduleRef === null || moduleRef === void 0 || (_moduleRef$metatype = moduleRef.metatype) === null || _moduleRef$metatype === void 0 ? void 0 : _moduleRef$metatype.name) !== null && _moduleRef$metatype$n !== void 0 ? _moduleRef$metatype$n : "unknown";
			this.logger.log(`Looking for ${cli_colors_util_1$5.clc.cyanBright(tokenName)}${cli_colors_util_1$5.clc.green(" in ")}${cli_colors_util_1$5.clc.magentaBright(moduleRefName)}`);
		}
		printFoundInModuleLog(token, moduleRef) {
			var _moduleRef$metatype$n2, _moduleRef$metatype2;
			if (!this.isDebugMode()) return;
			const tokenName = this.getTokenName(token);
			const moduleRefName = (_moduleRef$metatype$n2 = moduleRef === null || moduleRef === void 0 || (_moduleRef$metatype2 = moduleRef.metatype) === null || _moduleRef$metatype2 === void 0 ? void 0 : _moduleRef$metatype2.name) !== null && _moduleRef$metatype$n2 !== void 0 ? _moduleRef$metatype$n2 : "unknown";
			this.logger.log(`Found ${cli_colors_util_1$5.clc.cyanBright(tokenName)}${cli_colors_util_1$5.clc.green(" in ")}${cli_colors_util_1$5.clc.magentaBright(moduleRefName)}`);
		}
		isDebugMode() {
			return !!process.env.NEST_DEBUG;
		}
		getContextId(contextId, instanceWrapper) {
			return contextId.getParent ? contextId.getParent({
				token: instanceWrapper.token,
				isTreeDurable: instanceWrapper.isDependencyTreeDurable()
			}) : contextId;
		}
		getNowTimestamp() {
			return perf_hooks_1.performance.now();
		}
	};
	exports.Injector = Injector;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/instance-links-host.js
var require_instance_links_host = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/instance-links-host.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InstanceLinksHost = void 0;
	const shared_utils_1$28 = require_shared_utils();
	const unknown_element_exception_1 = require_unknown_element_exception();
	var InstanceLinksHost = class {
		constructor(container) {
			this.container = container;
			this.instanceLinks = /* @__PURE__ */ new Map();
			this.initialize();
		}
		get(token, options = {}) {
			const instanceLinksForGivenToken = this.instanceLinks.get(token);
			if (!instanceLinksForGivenToken) throw new unknown_element_exception_1.UnknownElementException(this.getInstanceNameByToken(token));
			if (options.each) return instanceLinksForGivenToken;
			const instanceLink = options.moduleId ? instanceLinksForGivenToken.find(function(item) {
				return item.moduleId === options.moduleId;
			}) : instanceLinksForGivenToken[instanceLinksForGivenToken.length - 1];
			if (!instanceLink) throw new unknown_element_exception_1.UnknownElementException(this.getInstanceNameByToken(token));
			return instanceLink;
		}
		initialize() {
			var _this = this;
			const modules = this.container.getModules();
			modules.forEach(function(moduleRef) {
				const { providers, injectables, controllers } = moduleRef;
				providers.forEach(function(wrapper, token) {
					return _this.addLink(wrapper, token, moduleRef, "providers");
				});
				injectables.forEach(function(wrapper, token) {
					return _this.addLink(wrapper, token, moduleRef, "injectables");
				});
				controllers.forEach(function(wrapper, token) {
					return _this.addLink(wrapper, token, moduleRef, "controllers");
				});
			});
		}
		addLink(wrapper, token, moduleRef, collectionName) {
			const instanceLink = {
				moduleId: moduleRef.id,
				wrapperRef: wrapper,
				collection: moduleRef[collectionName],
				token
			};
			const existingLinks = this.instanceLinks.get(token);
			if (!existingLinks) this.instanceLinks.set(token, [instanceLink]);
			else existingLinks.push(instanceLink);
		}
		getInstanceNameByToken(token) {
			return (0, shared_utils_1$28.isFunction)(token) ? token === null || token === void 0 ? void 0 : token.name : token;
		}
	};
	exports.InstanceLinksHost = InstanceLinksHost;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/module-ref.js
var require_module_ref = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/module-ref.js"(exports) {
	var import_asyncToGenerator$22 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ModuleRef = void 0;
	const common_1$23 = require_common();
	const get_class_scope_1$3 = require_get_class_scope();
	const is_durable_1$2 = require_is_durable();
	const abstract_instance_resolver_1$1 = require_abstract_instance_resolver();
	const injector_1$5 = require_injector$1();
	const instance_links_host_1$1 = require_instance_links_host();
	const instance_wrapper_1$2 = require_instance_wrapper();
	var ModuleRef$1 = class extends abstract_instance_resolver_1$1.AbstractInstanceResolver {
		get instanceLinksHost() {
			if (!this._instanceLinksHost) this._instanceLinksHost = new instance_links_host_1$1.InstanceLinksHost(this.container);
			return this._instanceLinksHost;
		}
		constructor(container) {
			super();
			this.container = container;
			this.injector = new injector_1$5.Injector();
		}
		introspect(token) {
			const { wrapperRef } = this.instanceLinksHost.get(token);
			let scope = common_1$23.Scope.DEFAULT;
			if (!wrapperRef.isDependencyTreeStatic()) scope = common_1$23.Scope.REQUEST;
			else if (wrapperRef.isTransient) scope = common_1$23.Scope.TRANSIENT;
			return { scope };
		}
		registerRequestByContextId(request, contextId) {
			this.container.registerRequestProvider(request, contextId);
		}
		instantiateClass(type, moduleRef, contextId) {
			var _this = this;
			return (0, import_asyncToGenerator$22.default)(function* () {
				const wrapper = new instance_wrapper_1$2.InstanceWrapper({
					name: type && type.name,
					metatype: type,
					isResolved: false,
					scope: (0, get_class_scope_1$3.getClassScope)(type),
					durable: (0, is_durable_1$2.isDurable)(type),
					host: moduleRef
				});
				return new Promise(function() {
					var _ref2$1 = (0, import_asyncToGenerator$22.default)(function* (resolve, reject) {
						try {
							const callback = function() {
								var _ref$1 = (0, import_asyncToGenerator$22.default)(function* (instances) {
									const properties = yield _this.injector.resolveProperties(wrapper, moduleRef, void 0, contextId);
									const instance = new type(...instances);
									_this.injector.applyProperties(instance, properties);
									resolve(instance);
								});
								return function callback$1(_x) {
									return _ref$1.apply(this, arguments);
								};
							}();
							yield _this.injector.resolveConstructorParams(wrapper, moduleRef, void 0, callback, contextId);
						} catch (err) {
							reject(err);
						}
					});
					return function(_x2, _x3) {
						return _ref2$1.apply(this, arguments);
					};
				}());
			})();
		}
	};
	exports.ModuleRef = ModuleRef$1;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/lazy-module-loader/lazy-module-loader.js
var require_lazy_module_loader = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/lazy-module-loader/lazy-module-loader.js"(exports) {
	var import_asyncToGenerator$21 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LazyModuleLoader = void 0;
	const silent_logger_1 = require_silent_logger();
	const module_ref_1$2 = require_module_ref();
	var LazyModuleLoader = class {
		constructor(dependenciesScanner, instanceLoader, moduleCompiler, modulesContainer, moduleOverrides) {
			this.dependenciesScanner = dependenciesScanner;
			this.instanceLoader = instanceLoader;
			this.moduleCompiler = moduleCompiler;
			this.modulesContainer = modulesContainer;
			this.moduleOverrides = moduleOverrides;
		}
		load(loaderFn, loadOpts) {
			return (0, import_asyncToGenerator$21.default)(function* () {
				this.registerLoggerConfiguration(loadOpts);
				const moduleClassOrDynamicDefinition = yield loaderFn();
				const moduleInstances = yield this.dependenciesScanner.scanForModules({
					moduleDefinition: moduleClassOrDynamicDefinition,
					overrides: this.moduleOverrides,
					lazy: true
				});
				if (moduleInstances.length === 0) {
					const { token } = yield this.moduleCompiler.compile(moduleClassOrDynamicDefinition);
					const moduleInstance = this.modulesContainer.get(token);
					return moduleInstance && this.getTargetModuleRef(moduleInstance);
				}
				const lazyModulesContainer = this.createLazyModulesContainer(moduleInstances);
				yield this.dependenciesScanner.scanModulesForDependencies(lazyModulesContainer);
				yield this.instanceLoader.createInstancesOfDependencies(lazyModulesContainer);
				const [targetModule] = moduleInstances;
				return this.getTargetModuleRef(targetModule);
			})();
		}
		registerLoggerConfiguration(loadOpts) {
			if ((loadOpts === null || loadOpts === void 0 ? void 0 : loadOpts.logger) === false) this.instanceLoader.setLogger(new silent_logger_1.SilentLogger());
		}
		createLazyModulesContainer(moduleInstances) {
			moduleInstances = Array.from(new Set(moduleInstances));
			return new Map(moduleInstances.map(function(ref) {
				return [ref.token, ref];
			}));
		}
		getTargetModuleRef(moduleInstance) {
			const moduleRefInstanceWrapper = moduleInstance.getProviderByKey(module_ref_1$2.ModuleRef);
			return moduleRefInstanceWrapper.instance;
		}
	};
	exports.LazyModuleLoader = LazyModuleLoader;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/services/reflector.service.js
var require_reflector_service = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/services/reflector.service.js"(exports) {
	var import_objectSpread2$13 = __toESM(require_objectSpread2());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Reflector = void 0;
	const common_1$22 = require_common();
	const shared_utils_1$27 = require_shared_utils();
	const uid_1$1 = require_dist();
	/**
	* Helper class providing Nest reflection capabilities.
	*
	* @see [Reflection](https://docs.nestjs.com/guards#putting-it-all-together)
	*
	* @publicApi
	*/
	var Reflector = class {
		static createDecorator(options = {}) {
			var _options$key;
			const metadataKey = (_options$key = options.key) !== null && _options$key !== void 0 ? _options$key : (0, uid_1$1.uid)(21);
			const decoratorFn = function(metadataValue) {
				return function(target, key, descriptor) {
					const value = options.transform ? options.transform(metadataValue) : metadataValue;
					(0, common_1$22.SetMetadata)(metadataKey, value !== null && value !== void 0 ? value : {})(target, key, descriptor);
				};
			};
			decoratorFn.KEY = metadataKey;
			return decoratorFn;
		}
		/**
		* Retrieve metadata for a specified key or decorator for a specified target.
		*
		* @example
		* `const roles = this.reflector.get<string[]>('roles', context.getHandler());`
		*
		* @param metadataKey lookup key or decorator for metadata to retrieve
		* @param target context (decorated object) to retrieve metadata from
		*
		*/
		get(metadataKeyOrDecorator, target) {
			var _metadataKeyOrDecorat;
			const metadataKey = (_metadataKeyOrDecorat = metadataKeyOrDecorator.KEY) !== null && _metadataKeyOrDecorat !== void 0 ? _metadataKeyOrDecorat : metadataKeyOrDecorator;
			return Reflect.getMetadata(metadataKey, target);
		}
		/**
		* Retrieve metadata for a specified key or decorator for a specified set of targets.
		*
		* @param metadataKeyOrDecorator lookup key or decorator for metadata to retrieve
		* @param targets context (decorated objects) to retrieve metadata from
		*
		*/
		getAll(metadataKeyOrDecorator, targets) {
			var _this = this;
			return (targets || []).map(function(target) {
				return _this.get(metadataKeyOrDecorator, target);
			});
		}
		/**
		* Retrieve metadata for a specified key or decorator for a specified set of targets and merge results.
		*
		* @param metadataKeyOrDecorator lookup key for metadata to retrieve
		* @param targets context (decorated objects) to retrieve metadata from
		*
		*/
		getAllAndMerge(metadataKeyOrDecorator, targets) {
			const metadataCollection = this.getAll(metadataKeyOrDecorator, targets).filter(function(item) {
				return item !== void 0;
			});
			if ((0, shared_utils_1$27.isEmpty)(metadataCollection)) return metadataCollection;
			if (metadataCollection.length === 1) {
				const value = metadataCollection[0];
				if ((0, shared_utils_1$27.isObject)(value)) return value;
				return metadataCollection;
			}
			return metadataCollection.reduce(function(a, b) {
				if (Array.isArray(a)) return a.concat(b);
				if ((0, shared_utils_1$27.isObject)(a) && (0, shared_utils_1$27.isObject)(b)) return (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, a), b);
				return [a, b];
			});
		}
		/**
		* Retrieve metadata for a specified key or decorator for a specified set of targets and return a first not undefined value.
		*
		* @param metadataKeyOrDecorator lookup key or metadata for metadata to retrieve
		* @param targets context (decorated objects) to retrieve metadata from
		*
		*/
		getAllAndOverride(metadataKeyOrDecorator, targets) {
			for (const target of targets) {
				const result = this.get(metadataKeyOrDecorator, target);
				if (result !== void 0) return result;
			}
			return void 0;
		}
	};
	exports.Reflector = Reflector;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/serialized-graph.js
var require_serialized_graph = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/serialized-graph.js"(exports) {
	var import_objectSpread2$12 = __toESM(require_objectSpread2());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SerializedGraph = void 0;
	const application_config_1$5 = require_application_config();
	const external_context_creator_1$1 = require_external_context_creator();
	const http_adapter_host_1$2 = require_http_adapter_host();
	const inquirer_constants_1$1 = require_inquirer_constants();
	const lazy_module_loader_1$1 = require_lazy_module_loader();
	const module_ref_1$1 = require_module_ref();
	const modules_container_1$3 = require_modules_container();
	const request_constants_1$5 = require_request_constants();
	const reflector_service_1 = require_reflector_service();
	const deterministic_uuid_registry_1$1 = require_deterministic_uuid_registry();
	var SerializedGraph = class SerializedGraph {
		constructor() {
			this.nodes = /* @__PURE__ */ new Map();
			this.edges = /* @__PURE__ */ new Map();
			this.entrypoints = /* @__PURE__ */ new Map();
			this.extras = {
				orphanedEnhancers: [],
				attachedEnhancers: []
			};
			this._status = "complete";
		}
		set status(status) {
			this._status = status;
		}
		set metadata(metadata) {
			this._metadata = metadata;
		}
		insertNode(nodeDefinition) {
			if (nodeDefinition.metadata.type === "provider" && SerializedGraph.INTERNAL_PROVIDERS.includes(nodeDefinition.metadata.token)) nodeDefinition.metadata = (0, import_objectSpread2$12.default)((0, import_objectSpread2$12.default)({}, nodeDefinition.metadata), {}, { internal: true });
			if (this.nodes.has(nodeDefinition.id)) return this.nodes.get(nodeDefinition.id);
			this.nodes.set(nodeDefinition.id, nodeDefinition);
			return nodeDefinition;
		}
		insertEdge(edgeDefinition) {
			var _edgeDefinition$id;
			if (edgeDefinition.metadata.type === "class-to-class" && (SerializedGraph.INTERNAL_PROVIDERS.includes(edgeDefinition.metadata.sourceClassToken) || SerializedGraph.INTERNAL_PROVIDERS.includes(edgeDefinition.metadata.targetClassToken))) edgeDefinition.metadata = (0, import_objectSpread2$12.default)((0, import_objectSpread2$12.default)({}, edgeDefinition.metadata), {}, { internal: true });
			const id = (_edgeDefinition$id = edgeDefinition.id) !== null && _edgeDefinition$id !== void 0 ? _edgeDefinition$id : this.generateUuidByEdgeDefinition(edgeDefinition);
			const edge = (0, import_objectSpread2$12.default)((0, import_objectSpread2$12.default)({}, edgeDefinition), {}, { id });
			this.edges.set(id, edge);
			return edge;
		}
		insertEntrypoint(definition, parentId) {
			if (this.entrypoints.has(parentId)) {
				const existingCollection = this.entrypoints.get(parentId);
				existingCollection.push(definition);
			} else this.entrypoints.set(parentId, [definition]);
		}
		insertOrphanedEnhancer(entry) {
			this.extras.orphanedEnhancers.push(entry);
		}
		insertAttachedEnhancer(nodeId) {
			this.extras.attachedEnhancers.push({ nodeId });
		}
		getNodeById(id) {
			return this.nodes.get(id);
		}
		toJSON() {
			const json = {
				nodes: Object.fromEntries(this.nodes),
				edges: Object.fromEntries(this.edges),
				entrypoints: Object.fromEntries(this.entrypoints),
				extras: this.extras
			};
			if (this._status) json["status"] = this._status;
			if (this._metadata) json["metadata"] = this._metadata;
			return json;
		}
		toString() {
			const replacer = function(key, value) {
				var _value$name;
				if (typeof value === "symbol") return value.toString();
				return typeof value === "function" ? (_value$name = value.name) !== null && _value$name !== void 0 ? _value$name : "Function" : value;
			};
			return JSON.stringify(this.toJSON(), replacer, 2);
		}
		generateUuidByEdgeDefinition(edgeDefinition) {
			return deterministic_uuid_registry_1$1.DeterministicUuidRegistry.get(JSON.stringify(edgeDefinition));
		}
	};
	exports.SerializedGraph = SerializedGraph;
	SerializedGraph.INTERNAL_PROVIDERS = [
		application_config_1$5.ApplicationConfig,
		module_ref_1$1.ModuleRef,
		http_adapter_host_1$2.HttpAdapterHost,
		lazy_module_loader_1$1.LazyModuleLoader,
		external_context_creator_1$1.ExternalContextCreator,
		modules_container_1$3.ModulesContainer,
		reflector_service_1.Reflector,
		SerializedGraph,
		http_adapter_host_1$2.HttpAdapterHost.name,
		reflector_service_1.Reflector.name,
		request_constants_1$5.REQUEST,
		inquirer_constants_1$1.INQUIRER
	];
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/compiler.js
var require_compiler = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/compiler.js"(exports) {
	var import_asyncToGenerator$20 = __toESM(require_asyncToGenerator());
	var import_objectWithoutProperties = __toESM(require_objectWithoutProperties());
	const _excluded = ["module"];
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ModuleCompiler = void 0;
	var ModuleCompiler = class {
		constructor(_moduleOpaqueKeyFactory) {
			this._moduleOpaqueKeyFactory = _moduleOpaqueKeyFactory;
		}
		get moduleOpaqueKeyFactory() {
			return this._moduleOpaqueKeyFactory;
		}
		compile(moduleClsOrDynamic) {
			return (0, import_asyncToGenerator$20.default)(function* () {
				moduleClsOrDynamic = yield moduleClsOrDynamic;
				const { type, dynamicMetadata } = this.extractMetadata(moduleClsOrDynamic);
				const token = dynamicMetadata ? this._moduleOpaqueKeyFactory.createForDynamic(type, dynamicMetadata, moduleClsOrDynamic) : this._moduleOpaqueKeyFactory.createForStatic(type, moduleClsOrDynamic);
				return {
					type,
					dynamicMetadata,
					token
				};
			})();
		}
		extractMetadata(moduleClsOrDynamic) {
			if (!this.isDynamicModule(moduleClsOrDynamic)) return {
				type: (moduleClsOrDynamic === null || moduleClsOrDynamic === void 0 ? void 0 : moduleClsOrDynamic.forwardRef) ? moduleClsOrDynamic.forwardRef() : moduleClsOrDynamic,
				dynamicMetadata: void 0
			};
			const { module: type } = moduleClsOrDynamic, dynamicMetadata = (0, import_objectWithoutProperties.default)(moduleClsOrDynamic, _excluded);
			return {
				type,
				dynamicMetadata
			};
		}
		isDynamicModule(moduleClsOrDynamic) {
			return !!moduleClsOrDynamic.module;
		}
	};
	exports.ModuleCompiler = ModuleCompiler;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/request/request-providers.js
var require_request_providers = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/request/request-providers.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.requestProvider = void 0;
	const common_1$21 = require_common();
	const request_constants_1$4 = require_request_constants();
	const noop$2 = function() {};
	exports.requestProvider = {
		provide: request_constants_1$4.REQUEST,
		scope: common_1$21.Scope.REQUEST,
		useFactory: noop$2
	};
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/services/index.js
var require_services = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/services/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$12 = __require("tslib");
	tslib_1$12.__exportStar(require_reflector_service(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/inquirer/inquirer-providers.js
var require_inquirer_providers = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/inquirer/inquirer-providers.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.inquirerProvider = void 0;
	const common_1$20 = require_common();
	const inquirer_constants_1 = require_inquirer_constants();
	const noop$1 = function() {};
	exports.inquirerProvider = {
		provide: inquirer_constants_1.INQUIRER,
		scope: common_1$20.Scope.TRANSIENT,
		useFactory: noop$1
	};
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/internal-core-module/internal-core-module.js
var require_internal_core_module = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/internal-core-module/internal-core-module.js"(exports) {
	var InternalCoreModule_1;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InternalCoreModule = void 0;
	const tslib_1$11 = __require("tslib");
	const common_1$19 = require_common();
	const request_providers_1 = require_request_providers();
	const services_1 = require_services();
	const inquirer_providers_1 = require_inquirer_providers();
	const ReflectorAliasProvider = {
		provide: services_1.Reflector.name,
		useExisting: services_1.Reflector
	};
	let InternalCoreModule = InternalCoreModule_1 = class InternalCoreModule$1 {
		static register(providers) {
			return {
				module: InternalCoreModule_1,
				providers: [...providers],
				exports: [...providers.map(function(item) {
					return item.provide;
				})]
			};
		}
	};
	exports.InternalCoreModule = InternalCoreModule;
	exports.InternalCoreModule = InternalCoreModule = InternalCoreModule_1 = tslib_1$11.__decorate([(0, common_1$19.Global)(), (0, common_1$19.Module)({
		providers: [
			services_1.Reflector,
			ReflectorAliasProvider,
			request_providers_1.requestProvider,
			inquirer_providers_1.inquirerProvider
		],
		exports: [
			services_1.Reflector,
			ReflectorAliasProvider,
			request_providers_1.requestProvider,
			inquirer_providers_1.inquirerProvider
		]
	})], InternalCoreModule);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/internal-providers-storage.js
var require_internal_providers_storage = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/internal-providers-storage.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InternalProvidersStorage = void 0;
	const http_adapter_host_1$1 = require_http_adapter_host();
	var InternalProvidersStorage = class {
		constructor() {
			this._httpAdapterHost = new http_adapter_host_1$1.HttpAdapterHost();
		}
		get httpAdapterHost() {
			return this._httpAdapterHost;
		}
		get httpAdapter() {
			return this._httpAdapter;
		}
		set httpAdapter(httpAdapter) {
			this._httpAdapter = httpAdapter;
		}
	};
	exports.InternalProvidersStorage = InternalProvidersStorage;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/module.js
var require_module = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/module.js"(exports) {
	var import_objectSpread2$11 = __toESM(require_objectSpread2());
	var import_asyncToGenerator$19 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Module = void 0;
	const constants_1$15 = require_constants();
	const interfaces_1$2 = require_interfaces();
	const random_string_generator_util_1$2 = require_random_string_generator_util();
	const shared_utils_1$26 = require_shared_utils();
	const iterare_1$13 = require_lib();
	const application_config_1$4 = require_application_config();
	const exceptions_1$3 = require_exceptions$1();
	const context_id_factory_1$3 = require_context_id_factory();
	const get_class_scope_1$2 = require_get_class_scope();
	const is_durable_1$1 = require_is_durable();
	const uuid_factory_1$2 = require_uuid_factory();
	const constants_2$4 = require_constants$3();
	const instance_wrapper_1$1 = require_instance_wrapper();
	const module_ref_1 = require_module_ref();
	var Module = class {
		constructor(_metatype, container) {
			this._metatype = _metatype;
			this.container = container;
			this._imports = /* @__PURE__ */ new Set();
			this._providers = /* @__PURE__ */ new Map();
			this._injectables = /* @__PURE__ */ new Map();
			this._middlewares = /* @__PURE__ */ new Map();
			this._controllers = /* @__PURE__ */ new Map();
			this._entryProviderKeys = /* @__PURE__ */ new Set();
			this._exports = /* @__PURE__ */ new Set();
			this._distance = 0;
			this._initOnPreview = false;
			this._isGlobal = false;
			this.addCoreProviders();
			this._id = this.generateUuid();
		}
		get id() {
			return this._id;
		}
		get token() {
			return this._token;
		}
		set token(token) {
			this._token = token;
		}
		get name() {
			return this.metatype.name;
		}
		get isGlobal() {
			return this._isGlobal;
		}
		set isGlobal(global) {
			this._isGlobal = global;
		}
		get initOnPreview() {
			return this._initOnPreview;
		}
		set initOnPreview(initOnPreview) {
			this._initOnPreview = initOnPreview;
		}
		get providers() {
			return this._providers;
		}
		get middlewares() {
			return this._middlewares;
		}
		get imports() {
			return this._imports;
		}
		get injectables() {
			return this._injectables;
		}
		get controllers() {
			return this._controllers;
		}
		get entryProviders() {
			var _this = this;
			return Array.from(this._entryProviderKeys).map(function(token) {
				return _this.providers.get(token);
			});
		}
		get exports() {
			return this._exports;
		}
		get instance() {
			if (!this._providers.has(this._metatype)) throw new exceptions_1$3.RuntimeException();
			const moduleRef = this._providers.get(this._metatype);
			return moduleRef.instance;
		}
		get metatype() {
			return this._metatype;
		}
		get distance() {
			return this._distance;
		}
		set distance(value) {
			this._distance = value;
		}
		addCoreProviders() {
			this.addModuleAsProvider();
			this.addModuleRef();
			this.addApplicationConfig();
		}
		addModuleRef() {
			const moduleRef = this.createModuleReferenceType();
			this._providers.set(module_ref_1.ModuleRef, new instance_wrapper_1$1.InstanceWrapper({
				token: module_ref_1.ModuleRef,
				name: module_ref_1.ModuleRef.name,
				metatype: module_ref_1.ModuleRef,
				isResolved: true,
				instance: new moduleRef(),
				host: this
			}));
		}
		addModuleAsProvider() {
			this._providers.set(this._metatype, new instance_wrapper_1$1.InstanceWrapper({
				token: this._metatype,
				name: this._metatype.name,
				metatype: this._metatype,
				isResolved: false,
				instance: null,
				host: this
			}));
		}
		addApplicationConfig() {
			this._providers.set(application_config_1$4.ApplicationConfig, new instance_wrapper_1$1.InstanceWrapper({
				token: application_config_1$4.ApplicationConfig,
				name: application_config_1$4.ApplicationConfig.name,
				isResolved: true,
				instance: this.container.applicationConfig,
				host: this
			}));
		}
		addInjectable(injectable, enhancerSubtype, host) {
			if (this.isCustomProvider(injectable)) return this.addCustomProvider(injectable, this._injectables, enhancerSubtype);
			let instanceWrapper = this.injectables.get(injectable);
			if (!instanceWrapper) {
				instanceWrapper = new instance_wrapper_1$1.InstanceWrapper({
					token: injectable,
					name: injectable.name,
					metatype: injectable,
					instance: null,
					isResolved: false,
					scope: (0, get_class_scope_1$2.getClassScope)(injectable),
					durable: (0, is_durable_1$1.isDurable)(injectable),
					subtype: enhancerSubtype,
					host: this
				});
				this._injectables.set(injectable, instanceWrapper);
			}
			if (host) {
				const hostWrapper = this._controllers.get(host) || this._providers.get(host);
				hostWrapper && hostWrapper.addEnhancerMetadata(instanceWrapper);
			}
			return instanceWrapper;
		}
		addProvider(provider, enhancerSubtype) {
			if (this.isCustomProvider(provider)) {
				if (this.isEntryProvider(provider.provide)) this._entryProviderKeys.add(provider.provide);
				return this.addCustomProvider(provider, this._providers, enhancerSubtype);
			}
			const isAlreadyDeclared = this._providers.has(provider);
			if ((this.isTransientProvider(provider) || this.isRequestScopeProvider(provider)) && isAlreadyDeclared) return provider;
			this._providers.set(provider, new instance_wrapper_1$1.InstanceWrapper({
				token: provider,
				name: provider.name,
				metatype: provider,
				instance: null,
				isResolved: false,
				scope: (0, get_class_scope_1$2.getClassScope)(provider),
				durable: (0, is_durable_1$1.isDurable)(provider),
				host: this
			}));
			if (this.isEntryProvider(provider)) this._entryProviderKeys.add(provider);
			return provider;
		}
		isCustomProvider(provider) {
			return !(0, shared_utils_1$26.isNil)(provider.provide);
		}
		addCustomProvider(provider, collection, enhancerSubtype) {
			if (this.isCustomClass(provider)) this.addCustomClass(provider, collection, enhancerSubtype);
			else if (this.isCustomValue(provider)) this.addCustomValue(provider, collection, enhancerSubtype);
			else if (this.isCustomFactory(provider)) this.addCustomFactory(provider, collection, enhancerSubtype);
			else if (this.isCustomUseExisting(provider)) this.addCustomUseExisting(provider, collection, enhancerSubtype);
			return provider.provide;
		}
		isCustomClass(provider) {
			return !(0, shared_utils_1$26.isUndefined)(provider.useClass);
		}
		isCustomValue(provider) {
			return (0, shared_utils_1$26.isObject)(provider) && Object.prototype.hasOwnProperty.call(provider, "useValue");
		}
		isCustomFactory(provider) {
			return !(0, shared_utils_1$26.isUndefined)(provider.useFactory);
		}
		isCustomUseExisting(provider) {
			return !(0, shared_utils_1$26.isUndefined)(provider.useExisting);
		}
		isDynamicModule(exported) {
			return exported && exported.module;
		}
		addCustomClass(provider, collection, enhancerSubtype) {
			let { scope, durable } = provider;
			const { useClass } = provider;
			if ((0, shared_utils_1$26.isUndefined)(scope)) scope = (0, get_class_scope_1$2.getClassScope)(useClass);
			if ((0, shared_utils_1$26.isUndefined)(durable)) durable = (0, is_durable_1$1.isDurable)(useClass);
			const token = provider.provide;
			collection.set(token, new instance_wrapper_1$1.InstanceWrapper({
				token,
				name: (useClass === null || useClass === void 0 ? void 0 : useClass.name) || useClass,
				metatype: useClass,
				instance: null,
				isResolved: false,
				scope,
				durable,
				host: this,
				subtype: enhancerSubtype
			}));
		}
		addCustomValue(provider, collection, enhancerSubtype) {
			const { useValue: value, provide: providerToken } = provider;
			collection.set(providerToken, new instance_wrapper_1$1.InstanceWrapper({
				token: providerToken,
				name: (providerToken === null || providerToken === void 0 ? void 0 : providerToken.name) || providerToken,
				metatype: null,
				instance: value,
				isResolved: true,
				async: value instanceof Promise,
				host: this,
				subtype: enhancerSubtype
			}));
		}
		addCustomFactory(provider, collection, enhancerSubtype) {
			const { useFactory: factory, inject, scope, durable, provide: providerToken } = provider;
			collection.set(providerToken, new instance_wrapper_1$1.InstanceWrapper({
				token: providerToken,
				name: (providerToken === null || providerToken === void 0 ? void 0 : providerToken.name) || providerToken,
				metatype: factory,
				instance: null,
				isResolved: false,
				inject: inject || [],
				scope,
				durable,
				host: this,
				subtype: enhancerSubtype
			}));
		}
		addCustomUseExisting(provider, collection, enhancerSubtype) {
			const { useExisting, provide: providerToken } = provider;
			collection.set(providerToken, new instance_wrapper_1$1.InstanceWrapper({
				token: providerToken,
				name: (providerToken === null || providerToken === void 0 ? void 0 : providerToken.name) || providerToken,
				metatype: function(instance) {
					return instance;
				},
				instance: null,
				isResolved: false,
				inject: [useExisting],
				host: this,
				isAlias: true,
				subtype: enhancerSubtype
			}));
		}
		addExportedProviderOrModule(toExport) {
			var _this2 = this;
			const addExportedUnit = function(token) {
				return _this2._exports.add(_this2.validateExportedProvider(token));
			};
			if (this.isCustomProvider(toExport)) return this.addCustomExportedProvider(toExport);
			else if ((0, shared_utils_1$26.isString)(toExport) || (0, shared_utils_1$26.isSymbol)(toExport)) return addExportedUnit(toExport);
			else if (this.isDynamicModule(toExport)) {
				const { module: moduleClassRef } = toExport;
				return addExportedUnit(moduleClassRef);
			}
			addExportedUnit(toExport);
		}
		addCustomExportedProvider(provider) {
			const provide = provider.provide;
			if ((0, shared_utils_1$26.isString)(provide) || (0, shared_utils_1$26.isSymbol)(provide)) return this._exports.add(this.validateExportedProvider(provide));
			this._exports.add(this.validateExportedProvider(provide));
		}
		validateExportedProvider(token) {
			if (this._providers.has(token)) return token;
			const imports = (0, iterare_1$13.iterate)(this._imports.values()).filter(function(item) {
				return !!item;
			}).map(function({ metatype }) {
				return metatype;
			}).filter(function(metatype) {
				return !!metatype;
			}).toArray();
			if (!imports.includes(token)) {
				const { name } = this.metatype;
				const providerName = (0, shared_utils_1$26.isFunction)(token) ? token.name : token;
				throw new exceptions_1$3.UnknownExportException(providerName, name);
			}
			return token;
		}
		addController(controller) {
			this._controllers.set(controller, new instance_wrapper_1$1.InstanceWrapper({
				token: controller,
				name: controller.name,
				metatype: controller,
				instance: null,
				isResolved: false,
				scope: (0, get_class_scope_1$2.getClassScope)(controller),
				durable: (0, is_durable_1$1.isDurable)(controller),
				host: this
			}));
			this.assignControllerUniqueId(controller);
		}
		assignControllerUniqueId(controller) {
			Object.defineProperty(controller, constants_2$4.CONTROLLER_ID_KEY, {
				enumerable: false,
				writable: false,
				configurable: true,
				value: (0, random_string_generator_util_1$2.randomStringGenerator)()
			});
		}
		addImport(moduleRef) {
			this._imports.add(moduleRef);
		}
		replace(toReplace, options) {
			if (options.isProvider && this.hasProvider(toReplace)) {
				const originalProvider = this._providers.get(toReplace);
				return originalProvider.mergeWith((0, import_objectSpread2$11.default)({ provide: toReplace }, options));
			} else if (!options.isProvider && this.hasInjectable(toReplace)) {
				const originalInjectable = this._injectables.get(toReplace);
				return originalInjectable.mergeWith((0, import_objectSpread2$11.default)({ provide: toReplace }, options));
			}
		}
		hasProvider(token) {
			return this._providers.has(token);
		}
		hasInjectable(token) {
			return this._injectables.has(token);
		}
		getProviderByKey(name) {
			return this._providers.get(name);
		}
		getProviderById(id) {
			return Array.from(this._providers.values()).find(function(item) {
				return item.id === id;
			});
		}
		getControllerById(id) {
			return Array.from(this._controllers.values()).find(function(item) {
				return item.id === id;
			});
		}
		getInjectableById(id) {
			return Array.from(this._injectables.values()).find(function(item) {
				return item.id === id;
			});
		}
		getMiddlewareById(id) {
			return Array.from(this._middlewares.values()).find(function(item) {
				return item.id === id;
			});
		}
		getNonAliasProviders() {
			return [...this._providers].filter(function([_, wrapper]) {
				return !wrapper.isAlias;
			});
		}
		createModuleReferenceType() {
			const self = this;
			return class extends module_ref_1.ModuleRef {
				constructor() {
					super(self.container);
				}
				get(typeOrToken, options = {}) {
					var _options$strict, _options$each;
					(_options$strict = options.strict) !== null && _options$strict !== void 0 || (options.strict = true);
					(_options$each = options.each) !== null && _options$each !== void 0 || (options.each = false);
					return this.find(typeOrToken, options.strict ? {
						moduleId: self.id,
						each: options.each
					} : options);
				}
				resolve(typeOrToken, contextId = (0, context_id_factory_1$3.createContextId)(), options = {}) {
					var _options$strict2, _options$each2;
					(_options$strict2 = options.strict) !== null && _options$strict2 !== void 0 || (options.strict = true);
					(_options$each2 = options.each) !== null && _options$each2 !== void 0 || (options.each = false);
					return this.resolvePerContext(typeOrToken, self, contextId, options);
				}
				create(type, contextId) {
					return (0, import_asyncToGenerator$19.default)(function* () {
						if (!(type && (0, shared_utils_1$26.isFunction)(type) && type.prototype)) throw new exceptions_1$3.InvalidClassException(type);
						return this.instantiateClass(type, self, contextId);
					})();
				}
			};
		}
		isEntryProvider(metatype) {
			return typeof metatype === "function" ? !!Reflect.getMetadata(constants_1$15.ENTRY_PROVIDER_WATERMARK, metatype) : false;
		}
		generateUuid() {
			const prefix = "M_";
			const key = this.token ? this.token.includes(":") ? this.token.split(":")[1] : this.token : this.name;
			return key ? uuid_factory_1$2.UuidFactory.get(`${prefix}_${key}`) : (0, random_string_generator_util_1$2.randomStringGenerator)();
		}
		isTransientProvider(provider) {
			return (0, get_class_scope_1$2.getClassScope)(provider) === interfaces_1$2.Scope.TRANSIENT;
		}
		isRequestScopeProvider(provider) {
			return (0, get_class_scope_1$2.getClassScope)(provider) === interfaces_1$2.Scope.REQUEST;
		}
	};
	exports.Module = Module;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/opaque-key-factory/by-reference-module-opaque-key-factory.js
var require_by_reference_module_opaque_key_factory = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/opaque-key-factory/by-reference-module-opaque-key-factory.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ByReferenceModuleOpaqueKeyFactory = void 0;
	const random_string_generator_util_1$1 = require_random_string_generator_util();
	const crypto_1$1 = __require("crypto");
	const K_MODULE_ID = Symbol("K_MODULE_ID");
	var ByReferenceModuleOpaqueKeyFactory = class {
		constructor(options) {
			var _options$keyGeneratio;
			this.keyGenerationStrategy = (_options$keyGeneratio = options === null || options === void 0 ? void 0 : options.keyGenerationStrategy) !== null && _options$keyGeneratio !== void 0 ? _options$keyGeneratio : "random";
		}
		createForStatic(moduleCls, originalRef = moduleCls) {
			return this.getOrCreateModuleId(moduleCls, void 0, originalRef);
		}
		createForDynamic(moduleCls, dynamicMetadata, originalRef) {
			return this.getOrCreateModuleId(moduleCls, dynamicMetadata, originalRef);
		}
		getOrCreateModuleId(moduleCls, dynamicMetadata, originalRef) {
			if (originalRef[K_MODULE_ID]) return originalRef[K_MODULE_ID];
			let moduleId;
			if (this.keyGenerationStrategy === "random") moduleId = this.generateRandomString();
			else {
				const delimiter = ":";
				moduleId = dynamicMetadata ? `${this.generateRandomString()}${delimiter}${this.hashString(moduleCls.name + JSON.stringify(dynamicMetadata))}` : `${this.generateRandomString()}${delimiter}${this.hashString(moduleCls.toString())}`;
			}
			originalRef[K_MODULE_ID] = moduleId;
			return moduleId;
		}
		hashString(value) {
			return (0, crypto_1$1.createHash)("sha256").update(value).digest("hex");
		}
		generateRandomString() {
			return (0, random_string_generator_util_1$1.randomStringGenerator)();
		}
	};
	exports.ByReferenceModuleOpaqueKeyFactory = ByReferenceModuleOpaqueKeyFactory;
} });

//#endregion
//#region ../../node_modules/.pnpm/fast-safe-stringify@2.1.1/node_modules/fast-safe-stringify/index.js
var require_fast_safe_stringify = __commonJS({ "../../node_modules/.pnpm/fast-safe-stringify@2.1.1/node_modules/fast-safe-stringify/index.js"(exports, module) {
	module.exports = stringify$1;
	stringify$1.default = stringify$1;
	stringify$1.stable = deterministicStringify;
	stringify$1.stableStringify = deterministicStringify;
	var LIMIT_REPLACE_NODE = "[...]";
	var CIRCULAR_REPLACE_NODE = "[Circular]";
	var arr = [];
	var replacerStack = [];
	function defaultOptions() {
		return {
			depthLimit: Number.MAX_SAFE_INTEGER,
			edgesLimit: Number.MAX_SAFE_INTEGER
		};
	}
	function stringify$1(obj, replacer, spacer, options) {
		if (typeof options === "undefined") options = defaultOptions();
		decirc(obj, "", 0, [], void 0, 0, options);
		var res;
		try {
			if (replacerStack.length === 0) res = JSON.stringify(obj, replacer, spacer);
			else res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
		} catch (_) {
			return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
		} finally {
			while (arr.length !== 0) {
				var part = arr.pop();
				if (part.length === 4) Object.defineProperty(part[0], part[1], part[3]);
				else part[0][part[1]] = part[2];
			}
		}
		return res;
	}
	function setReplace(replace, val, k, parent) {
		var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
		if (propertyDescriptor.get !== void 0) if (propertyDescriptor.configurable) {
			Object.defineProperty(parent, k, { value: replace });
			arr.push([
				parent,
				k,
				val,
				propertyDescriptor
			]);
		} else replacerStack.push([
			val,
			k,
			replace
		]);
		else {
			parent[k] = replace;
			arr.push([
				parent,
				k,
				val
			]);
		}
	}
	function decirc(val, k, edgeIndex, stack, parent, depth, options) {
		depth += 1;
		var i;
		if (typeof val === "object" && val !== null) {
			for (i = 0; i < stack.length; i++) if (stack[i] === val) {
				setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
				return;
			}
			if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
				setReplace(LIMIT_REPLACE_NODE, val, k, parent);
				return;
			}
			if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
				setReplace(LIMIT_REPLACE_NODE, val, k, parent);
				return;
			}
			stack.push(val);
			if (Array.isArray(val)) for (i = 0; i < val.length; i++) decirc(val[i], i, i, stack, val, depth, options);
			else {
				var keys = Object.keys(val);
				for (i = 0; i < keys.length; i++) {
					var key = keys[i];
					decirc(val[key], key, i, stack, val, depth, options);
				}
			}
			stack.pop();
		}
	}
	function compareFunction(a, b) {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	}
	function deterministicStringify(obj, replacer, spacer, options) {
		if (typeof options === "undefined") options = defaultOptions();
		var tmp = deterministicDecirc(obj, "", 0, [], void 0, 0, options) || obj;
		var res;
		try {
			if (replacerStack.length === 0) res = JSON.stringify(tmp, replacer, spacer);
			else res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
		} catch (_) {
			return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
		} finally {
			while (arr.length !== 0) {
				var part = arr.pop();
				if (part.length === 4) Object.defineProperty(part[0], part[1], part[3]);
				else part[0][part[1]] = part[2];
			}
		}
		return res;
	}
	function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
		depth += 1;
		var i;
		if (typeof val === "object" && val !== null) {
			for (i = 0; i < stack.length; i++) if (stack[i] === val) {
				setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
				return;
			}
			try {
				if (typeof val.toJSON === "function") return;
			} catch (_) {
				return;
			}
			if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
				setReplace(LIMIT_REPLACE_NODE, val, k, parent);
				return;
			}
			if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
				setReplace(LIMIT_REPLACE_NODE, val, k, parent);
				return;
			}
			stack.push(val);
			if (Array.isArray(val)) for (i = 0; i < val.length; i++) deterministicDecirc(val[i], i, i, stack, val, depth, options);
			else {
				var tmp = {};
				var keys = Object.keys(val).sort(compareFunction);
				for (i = 0; i < keys.length; i++) {
					var key = keys[i];
					deterministicDecirc(val[key], key, i, stack, val, depth, options);
					tmp[key] = val[key];
				}
				if (typeof parent !== "undefined") {
					arr.push([
						parent,
						k,
						val
					]);
					parent[k] = tmp;
				} else return tmp;
			}
			stack.pop();
		}
	}
	function replaceGetterValues(replacer) {
		replacer = typeof replacer !== "undefined" ? replacer : function(k, v) {
			return v;
		};
		return function(key, val) {
			if (replacerStack.length > 0) for (var i = 0; i < replacerStack.length; i++) {
				var part = replacerStack[i];
				if (part[1] === key && part[0] === val) {
					val = part[2];
					replacerStack.splice(i, 1);
					break;
				}
			}
			return replacer.call(this, key, val);
		};
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/opaque-key-factory/deep-hashed-module-opaque-key-factory.js
var require_deep_hashed_module_opaque_key_factory = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/opaque-key-factory/deep-hashed-module-opaque-key-factory.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DeepHashedModuleOpaqueKeyFactory = void 0;
	const logger_service_1$5 = require_logger_service();
	const random_string_generator_util_1 = require_random_string_generator_util();
	const shared_utils_1$25 = require_shared_utils();
	const crypto_1 = __require("crypto");
	const fast_safe_stringify_1 = require_fast_safe_stringify();
	const CLASS_STR = "class ";
	const CLASS_STR_LEN = 6;
	var DeepHashedModuleOpaqueKeyFactory = class DeepHashedModuleOpaqueKeyFactory {
		constructor() {
			this.moduleIdsCache = /* @__PURE__ */ new WeakMap();
			this.moduleTokenCache = /* @__PURE__ */ new Map();
			this.logger = new logger_service_1$5.Logger(DeepHashedModuleOpaqueKeyFactory.name, { timestamp: true });
		}
		createForStatic(moduleCls) {
			const moduleId = this.getModuleId(moduleCls);
			const moduleName = this.getModuleName(moduleCls);
			const key = `${moduleId}_${moduleName}`;
			if (this.moduleTokenCache.has(key)) return this.moduleTokenCache.get(key);
			const hash = this.hashString(key);
			this.moduleTokenCache.set(key, hash);
			return hash;
		}
		createForDynamic(moduleCls, dynamicMetadata) {
			const moduleId = this.getModuleId(moduleCls);
			const moduleName = this.getModuleName(moduleCls);
			const opaqueToken = {
				id: moduleId,
				module: moduleName,
				dynamic: dynamicMetadata
			};
			const start = performance.now();
			const opaqueTokenString = this.getStringifiedOpaqueToken(opaqueToken);
			const timeSpentInMs = performance.now() - start;
			if (timeSpentInMs > 10) {
				const formattedTimeSpent = timeSpentInMs.toFixed(2);
				this.logger.warn(`The module "${opaqueToken.module}" is taking ${formattedTimeSpent}ms to serialize, this may be caused by larger objects statically assigned to the module. Consider changing the "moduleIdGeneratorAlgorithm" option to "reference" to improve the performance.`);
			}
			return this.hashString(opaqueTokenString);
		}
		getStringifiedOpaqueToken(opaqueToken) {
			return opaqueToken ? (0, fast_safe_stringify_1.default)(opaqueToken, this.replacer) : "";
		}
		getModuleId(metatype) {
			let moduleId = this.moduleIdsCache.get(metatype);
			if (moduleId) return moduleId;
			moduleId = (0, random_string_generator_util_1.randomStringGenerator)();
			this.moduleIdsCache.set(metatype, moduleId);
			return moduleId;
		}
		getModuleName(metatype) {
			return metatype.name;
		}
		hashString(value) {
			return (0, crypto_1.createHash)("sha256").update(value).digest("hex");
		}
		replacer(key, value) {
			if ((0, shared_utils_1$25.isFunction)(value)) {
				const funcAsString = value.toString();
				const isClass = funcAsString.slice(0, CLASS_STR_LEN) === CLASS_STR;
				if (isClass) return value.name;
				return funcAsString;
			}
			if ((0, shared_utils_1$25.isSymbol)(value)) return value.toString();
			return value;
		}
	};
	exports.DeepHashedModuleOpaqueKeyFactory = DeepHashedModuleOpaqueKeyFactory;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/container.js
var require_container$1 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/container.js"(exports) {
	var import_asyncToGenerator$18 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NestContainer = void 0;
	const constants_1$14 = require_constants();
	const discoverable_meta_host_collection_1 = require_discoverable_meta_host_collection();
	const exceptions_1$2 = require_exceptions$1();
	const initialize_on_preview_allowlist_1$1 = require_initialize_on_preview_allowlist();
	const serialized_graph_1$1 = require_serialized_graph();
	const request_constants_1$3 = require_request_constants();
	const compiler_1 = require_compiler();
	const internal_core_module_1$3 = require_internal_core_module();
	const internal_providers_storage_1 = require_internal_providers_storage();
	const module_1 = require_module();
	const modules_container_1$2 = require_modules_container();
	const by_reference_module_opaque_key_factory_1 = require_by_reference_module_opaque_key_factory();
	const deep_hashed_module_opaque_key_factory_1 = require_deep_hashed_module_opaque_key_factory();
	var NestContainer = class {
		constructor(_applicationConfig = void 0, _contextOptions = void 0) {
			var _this$_contextOptions, _this$_contextOptions2;
			this._applicationConfig = _applicationConfig;
			this._contextOptions = _contextOptions;
			this.globalModules = /* @__PURE__ */ new Set();
			this.modules = new modules_container_1$2.ModulesContainer();
			this.dynamicModulesMetadata = /* @__PURE__ */ new Map();
			this.internalProvidersStorage = new internal_providers_storage_1.InternalProvidersStorage();
			this._serializedGraph = new serialized_graph_1$1.SerializedGraph();
			const moduleOpaqueKeyFactory = ((_this$_contextOptions = this._contextOptions) === null || _this$_contextOptions === void 0 ? void 0 : _this$_contextOptions.moduleIdGeneratorAlgorithm) === "deep-hash" ? new deep_hashed_module_opaque_key_factory_1.DeepHashedModuleOpaqueKeyFactory() : new by_reference_module_opaque_key_factory_1.ByReferenceModuleOpaqueKeyFactory({ keyGenerationStrategy: ((_this$_contextOptions2 = this._contextOptions) === null || _this$_contextOptions2 === void 0 ? void 0 : _this$_contextOptions2.snapshot) ? "shallow" : "random" });
			this.moduleCompiler = new compiler_1.ModuleCompiler(moduleOpaqueKeyFactory);
		}
		get serializedGraph() {
			return this._serializedGraph;
		}
		get applicationConfig() {
			return this._applicationConfig;
		}
		setHttpAdapter(httpAdapter) {
			this.internalProvidersStorage.httpAdapter = httpAdapter;
			if (!this.internalProvidersStorage.httpAdapterHost) return;
			const host = this.internalProvidersStorage.httpAdapterHost;
			host.httpAdapter = httpAdapter;
		}
		getHttpAdapterRef() {
			return this.internalProvidersStorage.httpAdapter;
		}
		getHttpAdapterHostRef() {
			return this.internalProvidersStorage.httpAdapterHost;
		}
		addModule(metatype, scope) {
			return (0, import_asyncToGenerator$18.default)(function* () {
				if (!metatype) throw new exceptions_1$2.UndefinedForwardRefException(scope);
				const { type, dynamicMetadata, token } = yield this.moduleCompiler.compile(metatype);
				if (this.modules.has(token)) return {
					moduleRef: this.modules.get(token),
					inserted: true
				};
				return {
					moduleRef: yield this.setModule({
						token,
						type,
						dynamicMetadata
					}, scope),
					inserted: true
				};
			})();
		}
		replaceModule(metatypeToReplace, newMetatype, scope) {
			return (0, import_asyncToGenerator$18.default)(function* () {
				if (!metatypeToReplace || !newMetatype) throw new exceptions_1$2.UndefinedForwardRefException(scope);
				const { token } = yield this.moduleCompiler.compile(metatypeToReplace);
				const { type, dynamicMetadata } = yield this.moduleCompiler.compile(newMetatype);
				return {
					moduleRef: yield this.setModule({
						token,
						type,
						dynamicMetadata
					}, scope),
					inserted: false
				};
			})();
		}
		setModule({ token, dynamicMetadata, type }, scope) {
			return (0, import_asyncToGenerator$18.default)(function* () {
				const moduleRef = new module_1.Module(type, this);
				moduleRef.token = token;
				moduleRef.initOnPreview = this.shouldInitOnPreview(type);
				this.modules.set(token, moduleRef);
				const updatedScope = [].concat(scope, type);
				yield this.addDynamicMetadata(token, dynamicMetadata, updatedScope);
				if (this.isGlobalModule(type, dynamicMetadata)) {
					moduleRef.isGlobal = true;
					moduleRef.distance = Number.MAX_VALUE;
					this.addGlobalModule(moduleRef);
				}
				return moduleRef;
			})();
		}
		addDynamicMetadata(token, dynamicModuleMetadata, scope) {
			return (0, import_asyncToGenerator$18.default)(function* () {
				if (!dynamicModuleMetadata) return;
				this.dynamicModulesMetadata.set(token, dynamicModuleMetadata);
				const { imports } = dynamicModuleMetadata;
				yield this.addDynamicModules(imports, scope);
			})();
		}
		addDynamicModules(modules, scope) {
			var _this = this;
			return (0, import_asyncToGenerator$18.default)(function* () {
				if (!modules) return;
				yield Promise.all(modules.map(function(module$1) {
					return _this.addModule(module$1, scope);
				}));
			})();
		}
		isGlobalModule(metatype, dynamicMetadata) {
			if (dynamicMetadata && dynamicMetadata.global) return true;
			return !!Reflect.getMetadata(constants_1$14.GLOBAL_MODULE_METADATA, metatype);
		}
		addGlobalModule(module$1) {
			this.globalModules.add(module$1);
		}
		getModules() {
			return this.modules;
		}
		getModuleCompiler() {
			return this.moduleCompiler;
		}
		getModuleByKey(moduleKey) {
			return this.modules.get(moduleKey);
		}
		getInternalCoreModuleRef() {
			return this.internalCoreModule;
		}
		addImport(relatedModule, token) {
			return (0, import_asyncToGenerator$18.default)(function* () {
				if (!this.modules.has(token)) return;
				const moduleRef = this.modules.get(token);
				const { token: relatedModuleToken } = yield this.moduleCompiler.compile(relatedModule);
				const related = this.modules.get(relatedModuleToken);
				moduleRef.addImport(related);
			})();
		}
		addProvider(provider, token, enhancerSubtype) {
			const moduleRef = this.modules.get(token);
			if (!provider) throw new exceptions_1$2.CircularDependencyException(moduleRef === null || moduleRef === void 0 ? void 0 : moduleRef.metatype.name);
			if (!moduleRef) throw new exceptions_1$2.UnknownModuleException();
			const providerKey = moduleRef.addProvider(provider, enhancerSubtype);
			const providerRef = moduleRef.getProviderByKey(providerKey);
			discoverable_meta_host_collection_1.DiscoverableMetaHostCollection.inspectProvider(this.modules, providerRef);
			return providerKey;
		}
		addInjectable(injectable, token, enhancerSubtype, host) {
			if (!this.modules.has(token)) throw new exceptions_1$2.UnknownModuleException();
			const moduleRef = this.modules.get(token);
			return moduleRef.addInjectable(injectable, enhancerSubtype, host);
		}
		addExportedProviderOrModule(toExport, token) {
			if (!this.modules.has(token)) throw new exceptions_1$2.UnknownModuleException();
			const moduleRef = this.modules.get(token);
			moduleRef.addExportedProviderOrModule(toExport);
		}
		addController(controller, token) {
			if (!this.modules.has(token)) throw new exceptions_1$2.UnknownModuleException();
			const moduleRef = this.modules.get(token);
			moduleRef.addController(controller);
			const controllerRef = moduleRef.controllers.get(controller);
			discoverable_meta_host_collection_1.DiscoverableMetaHostCollection.inspectController(this.modules, controllerRef);
		}
		clear() {
			this.modules.clear();
		}
		replace(toReplace, options) {
			this.modules.forEach(function(moduleRef) {
				return moduleRef.replace(toReplace, options);
			});
		}
		bindGlobalScope() {
			var _this2 = this;
			this.modules.forEach(function(moduleRef) {
				return _this2.bindGlobalsToImports(moduleRef);
			});
		}
		bindGlobalsToImports(moduleRef) {
			var _this3 = this;
			this.globalModules.forEach(function(globalModule) {
				return _this3.bindGlobalModuleToModule(moduleRef, globalModule);
			});
		}
		bindGlobalModuleToModule(target, globalModule) {
			if (target === globalModule || target === this.internalCoreModule) return;
			target.addImport(globalModule);
		}
		getDynamicMetadataByToken(token, metadataKey) {
			var _metadata$metadataKey;
			const metadata = this.dynamicModulesMetadata.get(token);
			return metadataKey ? (_metadata$metadataKey = metadata === null || metadata === void 0 ? void 0 : metadata[metadataKey]) !== null && _metadata$metadataKey !== void 0 ? _metadata$metadataKey : [] : metadata;
		}
		registerCoreModuleRef(moduleRef) {
			this.internalCoreModule = moduleRef;
			this.modules[internal_core_module_1$3.InternalCoreModule.name] = moduleRef;
		}
		getModuleTokenFactory() {
			return this.moduleCompiler.moduleOpaqueKeyFactory;
		}
		registerRequestProvider(request, contextId) {
			const wrapper = this.internalCoreModule.getProviderByKey(request_constants_1$3.REQUEST);
			wrapper.setInstanceByContextId(contextId, {
				instance: request,
				isResolved: true
			});
		}
		shouldInitOnPreview(type) {
			return initialize_on_preview_allowlist_1$1.InitializeOnPreviewAllowlist.has(type);
		}
	};
	exports.NestContainer = NestContainer;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/index.js
var require_injector = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$10 = __require("tslib");
	tslib_1$10.__exportStar(require_container$1(), exports);
	tslib_1$10.__exportStar(require_inquirer(), exports);
	tslib_1$10.__exportStar(require_lazy_module_loader(), exports);
	tslib_1$10.__exportStar(require_module_ref(), exports);
	tslib_1$10.__exportStar(require_modules_container(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/partial-graph.host.js
var require_partial_graph_host = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/partial-graph.host.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PartialGraphHost = void 0;
	var PartialGraphHost = class {
		static toJSON() {
			var _this$partialGraph;
			return (_this$partialGraph = this.partialGraph) === null || _this$partialGraph === void 0 ? void 0 : _this$partialGraph.toJSON();
		}
		static toString() {
			var _this$partialGraph2;
			return (_this$partialGraph2 = this.partialGraph) === null || _this$partialGraph2 === void 0 ? void 0 : _this$partialGraph2.toString();
		}
		static register(partialGraph) {
			this.partialGraph = partialGraph;
		}
	};
	exports.PartialGraphHost = PartialGraphHost;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/graph-inspector.js
var require_graph_inspector = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/graph-inspector.js"(exports) {
	var import_objectSpread2$10 = __toESM(require_objectSpread2());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.GraphInspector = void 0;
	const unknown_dependencies_exception_1 = require_unknown_dependencies_exception();
	const deterministic_uuid_registry_1 = require_deterministic_uuid_registry();
	const partial_graph_host_1 = require_partial_graph_host();
	var GraphInspector = class {
		constructor(container) {
			this.container = container;
			this.enhancersMetadataCache = new Array();
			this.graph = container.serializedGraph;
		}
		inspectModules(modules = this.container.getModules()) {
			var _this = this;
			for (const moduleRef of modules.values()) {
				this.insertModuleNode(moduleRef);
				this.insertClassNodes(moduleRef);
				this.insertModuleToModuleEdges(moduleRef);
			}
			this.enhancersMetadataCache.forEach(function(entry) {
				return _this.insertEnhancerEdge(entry);
			});
			deterministic_uuid_registry_1.DeterministicUuidRegistry.clear();
		}
		registerPartial(error) {
			this.graph.status = "partial";
			if (error instanceof unknown_dependencies_exception_1.UnknownDependenciesException) {
				var _error$moduleRef, _error$metadata;
				this.graph.metadata = { cause: {
					type: "unknown-dependencies",
					context: error.context,
					moduleId: (_error$moduleRef = error.moduleRef) === null || _error$moduleRef === void 0 ? void 0 : _error$moduleRef.id,
					nodeId: (_error$metadata = error.metadata) === null || _error$metadata === void 0 ? void 0 : _error$metadata.id
				} };
			} else this.graph.metadata = { cause: {
				type: "unknown",
				error
			} };
			partial_graph_host_1.PartialGraphHost.register(this.graph);
		}
		inspectInstanceWrapper(source, moduleRef) {
			var _this2 = this;
			const ctorMetadata = source.getCtorMetadata();
			ctorMetadata === null || ctorMetadata === void 0 || ctorMetadata.forEach(function(target, index) {
				return _this2.insertClassToClassEdge(source, target, moduleRef, index, "constructor");
			});
			const propertiesMetadata = source.getPropertiesMetadata();
			propertiesMetadata === null || propertiesMetadata === void 0 || propertiesMetadata.forEach(function({ key, wrapper: target }) {
				return _this2.insertClassToClassEdge(source, target, moduleRef, key, "property");
			});
		}
		insertEnhancerMetadataCache(entry) {
			this.enhancersMetadataCache.push(entry);
		}
		insertOrphanedEnhancer(entry) {
			var _entry$ref$constructo, _entry$ref;
			this.graph.insertOrphanedEnhancer((0, import_objectSpread2$10.default)((0, import_objectSpread2$10.default)({}, entry), {}, { ref: (_entry$ref$constructo = (_entry$ref = entry.ref) === null || _entry$ref === void 0 || (_entry$ref = _entry$ref.constructor) === null || _entry$ref === void 0 ? void 0 : _entry$ref.name) !== null && _entry$ref$constructo !== void 0 ? _entry$ref$constructo : "Object" }));
		}
		insertAttachedEnhancer(wrapper) {
			const existingNode = this.graph.getNodeById(wrapper.id);
			existingNode.metadata.global = true;
			this.graph.insertAttachedEnhancer(existingNode.id);
		}
		insertEntrypointDefinition(definition, parentId) {
			definition = (0, import_objectSpread2$10.default)((0, import_objectSpread2$10.default)({}, definition), {}, { id: `${definition.classNodeId}_${definition.methodName}` });
			this.graph.insertEntrypoint(definition, parentId);
		}
		insertClassNode(moduleRef, wrapper, type) {
			this.graph.insertNode({
				id: wrapper.id,
				label: wrapper.name,
				parent: moduleRef.id,
				metadata: {
					type,
					internal: wrapper.metatype === moduleRef.metatype,
					sourceModuleName: moduleRef.name,
					durable: wrapper.isDependencyTreeDurable(),
					static: wrapper.isDependencyTreeStatic(),
					scope: wrapper.scope,
					transient: wrapper.isTransient,
					exported: moduleRef.exports.has(wrapper.token),
					token: wrapper.token,
					subtype: wrapper.subtype,
					initTime: wrapper.initTime
				}
			});
		}
		insertModuleNode(moduleRef) {
			const dynamicMetadata = this.container.getDynamicMetadataByToken(moduleRef.token);
			const node = {
				id: moduleRef.id,
				label: moduleRef.name,
				metadata: {
					type: "module",
					global: moduleRef.isGlobal,
					dynamic: !!dynamicMetadata,
					internal: moduleRef.name === "InternalCoreModule"
				}
			};
			this.graph.insertNode(node);
		}
		insertModuleToModuleEdges(moduleRef) {
			for (const targetModuleRef of moduleRef.imports) this.graph.insertEdge({
				source: moduleRef.id,
				target: targetModuleRef.id,
				metadata: {
					type: "module-to-module",
					sourceModuleName: moduleRef.name,
					targetModuleName: targetModuleRef.name
				}
			});
		}
		insertEnhancerEdge(entry) {
			var _moduleRef$controller, _existingSourceNode$m;
			const moduleRef = this.container.getModuleByKey(entry.moduleToken);
			const sourceInstanceWrapper = (_moduleRef$controller = moduleRef.controllers.get(entry.classRef)) !== null && _moduleRef$controller !== void 0 ? _moduleRef$controller : moduleRef.providers.get(entry.classRef);
			const existingSourceNode = this.graph.getNodeById(sourceInstanceWrapper.id);
			const enhancers = (_existingSourceNode$m = existingSourceNode.metadata.enhancers) !== null && _existingSourceNode$m !== void 0 ? _existingSourceNode$m : [];
			if (entry.enhancerInstanceWrapper) {
				this.insertClassToClassEdge(sourceInstanceWrapper, entry.enhancerInstanceWrapper, moduleRef, void 0, "decorator");
				enhancers.push({
					id: entry.enhancerInstanceWrapper.id,
					methodKey: entry.methodKey,
					subtype: entry.subtype
				});
			} else {
				var _entry$enhancerRef$co, _entry$enhancerRef$co2;
				const name = (_entry$enhancerRef$co = (_entry$enhancerRef$co2 = entry.enhancerRef.constructor) === null || _entry$enhancerRef$co2 === void 0 ? void 0 : _entry$enhancerRef$co2.name) !== null && _entry$enhancerRef$co !== void 0 ? _entry$enhancerRef$co : entry.enhancerRef.name;
				enhancers.push({
					name,
					methodKey: entry.methodKey,
					subtype: entry.subtype
				});
			}
			existingSourceNode.metadata.enhancers = enhancers;
		}
		insertClassToClassEdge(source, target, moduleRef, keyOrIndex, injectionType) {
			var _target$host;
			this.graph.insertEdge({
				source: source.id,
				target: target.id,
				metadata: {
					type: "class-to-class",
					sourceModuleName: moduleRef.name,
					sourceClassName: source.name,
					targetClassName: target.name,
					sourceClassToken: source.token,
					targetClassToken: target.token,
					targetModuleName: (_target$host = target.host) === null || _target$host === void 0 ? void 0 : _target$host.name,
					keyOrIndex,
					injectionType
				}
			});
		}
		insertClassNodes(moduleRef) {
			var _this3 = this;
			moduleRef.providers.forEach(function(value) {
				return _this3.insertClassNode(moduleRef, value, "provider");
			});
			moduleRef.injectables.forEach(function(value) {
				return _this3.insertClassNode(moduleRef, value, "injectable");
			});
			moduleRef.controllers.forEach(function(value) {
				return _this3.insertClassNode(moduleRef, value, "controller");
			});
		}
	};
	exports.GraphInspector = GraphInspector;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/index.js
var require_inspector = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$9 = __require("tslib");
	tslib_1$9.__exportStar(require_graph_inspector(), exports);
	tslib_1$9.__exportStar(require_initialize_on_preview_allowlist(), exports);
	tslib_1$9.__exportStar(require_partial_graph_host(), exports);
	tslib_1$9.__exportStar(require_serialized_graph(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/path-to-regexp@8.2.0/node_modules/path-to-regexp/dist/index.js
var require_dist$1 = __commonJS({ "../../node_modules/.pnpm/path-to-regexp@8.2.0/node_modules/path-to-regexp/dist/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TokenData = void 0;
	exports.parse = parse;
	exports.compile = compile;
	exports.match = match;
	exports.pathToRegexp = pathToRegexp;
	exports.stringify = stringify;
	const DEFAULT_DELIMITER = "/";
	const NOOP_VALUE = function(value) {
		return value;
	};
	const ID_START = new RegExp("^[$_\\p{ID_Start}]$", "u");
	const ID_CONTINUE = new RegExp("^[$\\u200c\\u200d\\p{ID_Continue}]$", "u");
	const DEBUG_URL = "https://git.new/pathToRegexpError";
	const SIMPLE_TOKENS = {
		"{": "{",
		"}": "}",
		"(": "(",
		")": ")",
		"[": "[",
		"]": "]",
		"+": "+",
		"?": "?",
		"!": "!"
	};
	/**
	* Escape text for stringify to path.
	*/
	function escapeText(str) {
		return str.replace(/[{}()\[\]+?!:*]/g, "\\$&");
	}
	/**
	* Escape a regular expression string.
	*/
	function escape(str) {
		return str.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
	}
	/**
	* Tokenize input string.
	*/
	function* lexer(str) {
		const chars = [...str];
		let i = 0;
		function name() {
			let value = "";
			if (ID_START.test(chars[++i])) {
				value += chars[i];
				while (ID_CONTINUE.test(chars[++i])) value += chars[i];
			} else if (chars[i] === "\"") {
				let pos = i;
				while (i < chars.length) {
					if (chars[++i] === "\"") {
						i++;
						pos = 0;
						break;
					}
					if (chars[i] === "\\") value += chars[++i];
					else value += chars[i];
				}
				if (pos) throw new TypeError(`Unterminated quote at ${pos}: ${DEBUG_URL}`);
			}
			if (!value) throw new TypeError(`Missing parameter name at ${i}: ${DEBUG_URL}`);
			return value;
		}
		while (i < chars.length) {
			const value = chars[i];
			const type = SIMPLE_TOKENS[value];
			if (type) yield {
				type,
				index: i++,
				value
			};
			else if (value === "\\") yield {
				type: "ESCAPED",
				index: i++,
				value: chars[i++]
			};
			else if (value === ":") {
				const value$1 = name();
				yield {
					type: "PARAM",
					index: i,
					value: value$1
				};
			} else if (value === "*") {
				const value$1 = name();
				yield {
					type: "WILDCARD",
					index: i,
					value: value$1
				};
			} else yield {
				type: "CHAR",
				index: i,
				value: chars[i++]
			};
		}
		return {
			type: "END",
			index: i,
			value: ""
		};
	}
	var Iter = class {
		constructor(tokens) {
			this.tokens = tokens;
		}
		peek() {
			if (!this._peek) {
				const next = this.tokens.next();
				this._peek = next.value;
			}
			return this._peek;
		}
		tryConsume(type) {
			const token = this.peek();
			if (token.type !== type) return;
			this._peek = void 0;
			return token.value;
		}
		consume(type) {
			const value = this.tryConsume(type);
			if (value !== void 0) return value;
			const { type: nextType, index } = this.peek();
			throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}: ${DEBUG_URL}`);
		}
		text() {
			let result = "";
			let value;
			while (value = this.tryConsume("CHAR") || this.tryConsume("ESCAPED")) result += value;
			return result;
		}
	};
	/**
	* Tokenized path instance.
	*/
	var TokenData = class {
		constructor(tokens) {
			this.tokens = tokens;
		}
	};
	exports.TokenData = TokenData;
	/**
	* Parse a string for the raw tokens.
	*/
	function parse(str, options = {}) {
		const { encodePath = NOOP_VALUE } = options;
		const it = new Iter(lexer(str));
		function consume(endType) {
			const tokens$1 = [];
			while (true) {
				const path = it.text();
				if (path) tokens$1.push({
					type: "text",
					value: encodePath(path)
				});
				const param = it.tryConsume("PARAM");
				if (param) {
					tokens$1.push({
						type: "param",
						name: param
					});
					continue;
				}
				const wildcard = it.tryConsume("WILDCARD");
				if (wildcard) {
					tokens$1.push({
						type: "wildcard",
						name: wildcard
					});
					continue;
				}
				const open = it.tryConsume("{");
				if (open) {
					tokens$1.push({
						type: "group",
						tokens: consume("}")
					});
					continue;
				}
				it.consume(endType);
				return tokens$1;
			}
		}
		const tokens = consume("END");
		return new TokenData(tokens);
	}
	/**
	* Compile a string to a template function for the path.
	*/
	function compile(path, options = {}) {
		const { encode = encodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
		const data = path instanceof TokenData ? path : parse(path, options);
		const fn = tokensToFunction(data.tokens, delimiter, encode);
		return function path$1(data$1 = {}) {
			const [path$2, ...missing] = fn(data$1);
			if (missing.length) throw new TypeError(`Missing parameters: ${missing.join(", ")}`);
			return path$2;
		};
	}
	function tokensToFunction(tokens, delimiter, encode) {
		const encoders = tokens.map(function(token) {
			return tokenToFunction(token, delimiter, encode);
		});
		return function(data) {
			const result = [""];
			for (const encoder of encoders) {
				const [value, ...extras] = encoder(data);
				result[0] += value;
				result.push(...extras);
			}
			return result;
		};
	}
	/**
	* Convert a single token into a path building function.
	*/
	function tokenToFunction(token, delimiter, encode) {
		if (token.type === "text") return function() {
			return [token.value];
		};
		if (token.type === "group") {
			const fn = tokensToFunction(token.tokens, delimiter, encode);
			return function(data) {
				const [value, ...missing] = fn(data);
				if (!missing.length) return [value];
				return [""];
			};
		}
		const encodeValue = encode || NOOP_VALUE;
		if (token.type === "wildcard" && encode !== false) return function(data) {
			const value = data[token.name];
			if (value == null) return ["", token.name];
			if (!Array.isArray(value) || value.length === 0) throw new TypeError(`Expected "${token.name}" to be a non-empty array`);
			return [value.map(function(value$1, index) {
				if (typeof value$1 !== "string") throw new TypeError(`Expected "${token.name}/${index}" to be a string`);
				return encodeValue(value$1);
			}).join(delimiter)];
		};
		return function(data) {
			const value = data[token.name];
			if (value == null) return ["", token.name];
			if (typeof value !== "string") throw new TypeError(`Expected "${token.name}" to be a string`);
			return [encodeValue(value)];
		};
	}
	/**
	* Transform a path into a match function.
	*/
	function match(path, options = {}) {
		const { decode = decodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
		const { regexp, keys } = pathToRegexp(path, options);
		const decoders = keys.map(function(key) {
			if (decode === false) return NOOP_VALUE;
			if (key.type === "param") return decode;
			return function(value) {
				return value.split(delimiter).map(decode);
			};
		});
		return function match$1(input) {
			const m = regexp.exec(input);
			if (!m) return false;
			const path$1 = m[0];
			const params = Object.create(null);
			for (let i = 1; i < m.length; i++) {
				if (m[i] === void 0) continue;
				const key = keys[i - 1];
				const decoder = decoders[i - 1];
				params[key.name] = decoder(m[i]);
			}
			return {
				path: path$1,
				params
			};
		};
	}
	function pathToRegexp(path, options = {}) {
		const { delimiter = DEFAULT_DELIMITER, end = true, sensitive = false, trailing = true } = options;
		const keys = [];
		const sources = [];
		const flags = sensitive ? "" : "i";
		const paths = Array.isArray(path) ? path : [path];
		const items = paths.map(function(path$1) {
			return path$1 instanceof TokenData ? path$1 : parse(path$1, options);
		});
		for (const { tokens } of items) for (const seq of flatten(tokens, 0, [])) {
			const regexp$1 = sequenceToRegExp(seq, delimiter, keys);
			sources.push(regexp$1);
		}
		let pattern = `^(?:${sources.join("|")})`;
		if (trailing) pattern += `(?:${escape(delimiter)}$)?`;
		pattern += end ? "$" : `(?=${escape(delimiter)}|$)`;
		const regexp = new RegExp(pattern, flags);
		return {
			regexp,
			keys
		};
	}
	/**
	* Generate a flat list of sequence tokens from the given tokens.
	*/
	function* flatten(tokens, index, init) {
		if (index === tokens.length) return yield init;
		const token = tokens[index];
		if (token.type === "group") {
			const fork = init.slice();
			for (const seq of flatten(token.tokens, 0, fork)) yield* flatten(tokens, index + 1, seq);
		} else init.push(token);
		yield* flatten(tokens, index + 1, init);
	}
	/**
	* Transform a flat sequence of tokens into a regular expression.
	*/
	function sequenceToRegExp(tokens, delimiter, keys) {
		let result = "";
		let backtrack = "";
		let isSafeSegmentParam = true;
		for (let i = 0; i < tokens.length; i++) {
			const token = tokens[i];
			if (token.type === "text") {
				result += escape(token.value);
				backtrack += token.value;
				isSafeSegmentParam || (isSafeSegmentParam = token.value.includes(delimiter));
				continue;
			}
			if (token.type === "param" || token.type === "wildcard") {
				if (!isSafeSegmentParam && !backtrack) throw new TypeError(`Missing text after "${token.name}": ${DEBUG_URL}`);
				if (token.type === "param") result += `(${negate(delimiter, isSafeSegmentParam ? "" : backtrack)}+)`;
				else result += `([\\s\\S]+)`;
				keys.push(token);
				backtrack = "";
				isSafeSegmentParam = false;
				continue;
			}
		}
		return result;
	}
	function negate(delimiter, backtrack) {
		if (backtrack.length < 2) {
			if (delimiter.length < 2) return `[^${escape(delimiter + backtrack)}]`;
			return `(?:(?!${escape(delimiter)})[^${escape(backtrack)}])`;
		}
		if (delimiter.length < 2) return `(?:(?!${escape(backtrack)})[^${escape(delimiter)}])`;
		return `(?:(?!${escape(backtrack)}|${escape(delimiter)})[\\s\\S])`;
	}
	/**
	* Stringify token data into a path string.
	*/
	function stringify(data) {
		return data.tokens.map(function stringifyToken(token, index, tokens) {
			if (token.type === "text") return escapeText(token.value);
			if (token.type === "group") return `{${token.tokens.map(stringifyToken).join("")}}`;
			const isSafe = isNameSafe(token.name) && isNextNameSafe(tokens[index + 1]);
			const key = isSafe ? token.name : JSON.stringify(token.name);
			if (token.type === "param") return `:${key}`;
			if (token.type === "wildcard") return `*${key}`;
			throw new TypeError(`Unexpected token: ${token}`);
		}).join("");
	}
	function isNameSafe(name) {
		const [first, ...rest] = name;
		if (!ID_START.test(first)) return false;
		return rest.every(function(char) {
			return ID_CONTINUE.test(char);
		});
	}
	function isNextNameSafe(token) {
		if ((token === null || token === void 0 ? void 0 : token.type) !== "text") return true;
		return !ID_CONTINUE.test(token.value[0]);
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/legacy-route-converter.js
var require_legacy_route_converter = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/legacy-route-converter.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LegacyRouteConverter = void 0;
	const common_1$18 = require_common();
	const UNSUPPORTED_PATH_MESSAGE = function(text, route) {
		return `Unsupported route path: "${route}". In previous versions, the symbols ?, *, and + were used to denote optional or repeating path parameters. The latest version of "path-to-regexp" now requires the use of named parameters. For example, instead of using a route like /users/* to capture all routes starting with "/users", you should use /users/*path. For more details, refer to the migration guide.`;
	};
	var LegacyRouteConverter = class {
		/**
		* Convert legacy routes to the new format (syntax).
		* path-to-regexp used by Express>=v5 and @fastify/middie>=v9 no longer support unnamed wildcards.
		* This method attempts to convert the old syntax to the new one, and logs an error if it fails.
		* @param route The route to convert.
		* @param options Options object.
		* @returns The converted route, or the original route if it cannot be converted.
		*/
		static tryConvert(route, options) {
			var _options$logs;
			const routeWithLeadingSlash = route.startsWith("/") ? route : `/${route}`;
			const normalizedRoute = route.endsWith("/") ? routeWithLeadingSlash : `${routeWithLeadingSlash}/`;
			const loggingEnabled = (_options$logs = options === null || options === void 0 ? void 0 : options.logs) !== null && _options$logs !== void 0 ? _options$logs : true;
			const printWarning = loggingEnabled ? this.printWarning.bind(this) : function() {};
			if (normalizedRoute.endsWith("/(.*)/")) {
				if (normalizedRoute !== "/(.*)/") printWarning(route);
				return route.replace("(.*)", "{*path}");
			}
			if (normalizedRoute.endsWith("/*/")) {
				if (normalizedRoute !== "/*/") printWarning(route);
				return route.replace("*", "{*path}");
			}
			if (normalizedRoute.endsWith("/+/")) {
				printWarning(route);
				return route.replace("/+", "/*path");
			}
			if (normalizedRoute.includes("/*/")) {
				printWarning(route);
				return route.replaceAll("/*/", function(match$1, offset) {
					return `/*path${offset}/`;
				});
			}
			return route;
		}
		static printError(route) {
			this.logger.error(UNSUPPORTED_PATH_MESSAGE`${route}`);
		}
		static printWarning(route) {
			this.logger.warn(UNSUPPORTED_PATH_MESSAGE`${route}` + " Attempting to auto-convert...");
		}
	};
	exports.LegacyRouteConverter = LegacyRouteConverter;
	LegacyRouteConverter.logger = new common_1$18.Logger(LegacyRouteConverter.name);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/utils/exclude-route.util.js
var require_exclude_route_util = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/utils/exclude-route.util.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isRequestMethodAll = void 0;
	exports.isRouteExcluded = isRouteExcluded;
	const common_1$17 = require_common();
	const shared_utils_1$24 = require_shared_utils();
	const isRequestMethodAll = function(method) {
		return common_1$17.RequestMethod.ALL === method || method === -1;
	};
	exports.isRequestMethodAll = isRequestMethodAll;
	function isRouteExcluded(excludedRoutes, path, requestMethod) {
		return excludedRoutes.some(function(route) {
			if ((0, exports.isRequestMethodAll)(route.requestMethod) || route.requestMethod === requestMethod) return route.pathRegex.exec((0, shared_utils_1$24.addLeadingSlash)(path));
			return false;
		});
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/utils/flatten-route-paths.util.js
var require_flatten_route_paths_util = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/utils/flatten-route-paths.util.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.flattenRoutePaths = flattenRoutePaths;
	const shared_utils_1$23 = require_shared_utils();
	function flattenRoutePaths(routes) {
		const result = [];
		routes.forEach(function(item) {
			if (item.module && item.path) result.push({
				module: item.module,
				path: item.path
			});
			if (item.children) {
				const childrenRef = item.children;
				childrenRef.forEach(function(child) {
					if (!(0, shared_utils_1$23.isString)(child) && child.path) child.path = (0, shared_utils_1$23.normalizePath)((0, shared_utils_1$23.normalizePath)(item.path) + (0, shared_utils_1$23.normalizePath)(child.path));
					else result.push({
						path: item.path,
						module: child
					});
				});
				result.push(...flattenRoutePaths(childrenRef));
			}
		});
		return result;
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/utils/index.js
var require_utils$1 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/utils/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$8 = __require("tslib");
	tslib_1$8.__exportStar(require_exclude_route_util(), exports);
	tslib_1$8.__exportStar(require_flatten_route_paths_util(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/utils.js
var require_utils = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/utils.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mapToClass = exports.filterMiddleware = exports.mapToExcludeRoute = void 0;
	exports.isMiddlewareClass = isMiddlewareClass;
	exports.assignToken = assignToken;
	exports.isMiddlewareRouteExcluded = isMiddlewareRouteExcluded;
	const common_1$16 = require_common();
	const shared_utils_1$22 = require_shared_utils();
	const iterare_1$12 = require_lib();
	const path_to_regexp_1$1 = require_dist$1();
	const uid_1 = require_dist();
	const legacy_route_converter_1 = require_legacy_route_converter();
	const utils_1$6 = require_utils$1();
	const mapToExcludeRoute = function(routes) {
		return routes.map(function(route) {
			const originalPath = (0, shared_utils_1$22.isString)(route) ? route : route.path;
			const path = legacy_route_converter_1.LegacyRouteConverter.tryConvert(originalPath);
			try {
				if ((0, shared_utils_1$22.isString)(route)) return {
					path,
					requestMethod: common_1$16.RequestMethod.ALL,
					pathRegex: (0, path_to_regexp_1$1.pathToRegexp)((0, shared_utils_1$22.addLeadingSlash)(path)).regexp
				};
				return {
					path,
					requestMethod: route.method,
					pathRegex: (0, path_to_regexp_1$1.pathToRegexp)((0, shared_utils_1$22.addLeadingSlash)(path)).regexp
				};
			} catch (e) {
				if (e instanceof TypeError) legacy_route_converter_1.LegacyRouteConverter.printError(originalPath);
				throw e;
			}
		});
	};
	exports.mapToExcludeRoute = mapToExcludeRoute;
	const filterMiddleware = function(middleware, routes, httpAdapter) {
		const excludedRoutes = (0, exports.mapToExcludeRoute)(routes);
		return (0, iterare_1$12.iterate)([]).concat(middleware).filter(shared_utils_1$22.isFunction).map(function(item) {
			return (0, exports.mapToClass)(item, excludedRoutes, httpAdapter);
		}).toArray();
	};
	exports.filterMiddleware = filterMiddleware;
	const mapToClass = function(middleware, excludedRoutes, httpAdapter) {
		if (isMiddlewareClass(middleware)) {
			if (excludedRoutes.length <= 0) return middleware;
			const MiddlewareHost = class extends middleware {
				use(...params) {
					const [req, _, next] = params;
					const isExcluded = isMiddlewareRouteExcluded(req, excludedRoutes, httpAdapter);
					if (isExcluded) return next();
					return super.use(...params);
				}
			};
			return assignToken(MiddlewareHost, middleware.name);
		}
		return assignToken(class {
			constructor() {
				this.use = function(...params) {
					const [req, _, next] = params;
					const isExcluded = isMiddlewareRouteExcluded(req, excludedRoutes, httpAdapter);
					if (isExcluded) return next();
					return middleware(...params);
				};
			}
		});
	};
	exports.mapToClass = mapToClass;
	function isMiddlewareClass(middleware) {
		var _middlewareArr$, _middleware$prototype;
		const middlewareStr = middleware.toString();
		if (middlewareStr.substring(0, 5) === "class") return true;
		const middlewareArr = middlewareStr.split(" ");
		return middlewareArr[0] === "function" && /[A-Z]/.test((_middlewareArr$ = middlewareArr[1]) === null || _middlewareArr$ === void 0 ? void 0 : _middlewareArr$[0]) && (0, shared_utils_1$22.isFunction)((_middleware$prototype = middleware.prototype) === null || _middleware$prototype === void 0 ? void 0 : _middleware$prototype.use);
	}
	function assignToken(metatype, token = (0, uid_1.uid)(21)) {
		Object.defineProperty(metatype, "name", { value: token });
		return metatype;
	}
	function isMiddlewareRouteExcluded(req, excludedRoutes, httpAdapter) {
		if (excludedRoutes.length <= 0) return false;
		const reqMethod = httpAdapter.getRequestMethod(req);
		const originalUrl = httpAdapter.getRequestUrl(req);
		const queryParamsIndex = originalUrl ? originalUrl.indexOf("?") : -1;
		const pathname = queryParamsIndex >= 0 ? originalUrl.slice(0, queryParamsIndex) : originalUrl;
		return (0, utils_1$6.isRouteExcluded)(excludedRoutes, pathname, common_1$16.RequestMethod[reqMethod]);
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/builder.js
var require_builder = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/builder.js"(exports) {
	var import_objectSpread2$9 = __toESM(require_objectSpread2());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MiddlewareBuilder = void 0;
	const shared_utils_1$21 = require_shared_utils();
	const iterare_1$11 = require_lib();
	const utils_1$5 = require_utils();
	var MiddlewareBuilder = class MiddlewareBuilder {
		constructor(routesMapper, httpAdapter, routeInfoPathExtractor) {
			this.routesMapper = routesMapper;
			this.httpAdapter = httpAdapter;
			this.routeInfoPathExtractor = routeInfoPathExtractor;
			this.middlewareCollection = /* @__PURE__ */ new Set();
		}
		apply(...middleware) {
			return new MiddlewareBuilder.ConfigProxy(this, middleware.flat(), this.routeInfoPathExtractor);
		}
		build() {
			return [...this.middlewareCollection];
		}
		getHttpAdapter() {
			return this.httpAdapter;
		}
	};
	exports.MiddlewareBuilder = MiddlewareBuilder;
	MiddlewareBuilder.ConfigProxy = class {
		constructor(builder, middleware, routeInfoPathExtractor) {
			this.builder = builder;
			this.middleware = middleware;
			this.routeInfoPathExtractor = routeInfoPathExtractor;
			this.excludedRoutes = [];
		}
		getExcludedRoutes() {
			return this.excludedRoutes;
		}
		exclude(...routes) {
			var _this = this;
			this.excludedRoutes = [...this.excludedRoutes, ...this.getRoutesFlatList(routes).reduce(function(excludedRoutes, route) {
				for (const routePath of _this.routeInfoPathExtractor.extractPathFrom(route)) excludedRoutes.push((0, import_objectSpread2$9.default)((0, import_objectSpread2$9.default)({}, route), {}, { path: routePath }));
				return excludedRoutes;
			}, [])];
			return this;
		}
		forRoutes(...routes) {
			const { middlewareCollection } = this.builder;
			const flattedRoutes = this.getRoutesFlatList(routes);
			const forRoutes = this.removeOverlappedRoutes(flattedRoutes);
			const configuration = {
				middleware: (0, utils_1$5.filterMiddleware)(this.middleware, this.excludedRoutes, this.builder.getHttpAdapter()),
				forRoutes
			};
			middlewareCollection.add(configuration);
			return this.builder;
		}
		getRoutesFlatList(routes) {
			const { routesMapper } = this.builder;
			return (0, iterare_1$11.iterate)(routes).map(function(route) {
				return routesMapper.mapRouteToRouteInfo(route);
			}).flatten().toArray();
		}
		removeOverlappedRoutes(routes) {
			const regexMatchParams = new RegExp("(:[^/]*)", "g");
			const wildcard = "([^/]*)";
			const routesWithRegex = routes.filter(function(route) {
				return route.path.includes(":");
			}).map(function(route) {
				return {
					method: route.method,
					path: route.path,
					regex: new RegExp("^(" + route.path.replace(regexMatchParams, wildcard) + ")$", "g")
				};
			});
			return routes.filter(function(route) {
				const isOverlapped = function(item) {
					if (route.method !== item.method) return false;
					const normalizedRoutePath = (0, shared_utils_1$21.stripEndSlash)(route.path);
					return normalizedRoutePath !== item.path && item.regex.test(normalizedRoutePath);
				};
				const routeMatch = routesWithRegex.find(isOverlapped);
				return routeMatch === void 0;
			});
		}
	};
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/index.js
var require_middleware = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$7 = __require("tslib");
	tslib_1$7.__exportStar(require_builder(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/optional-require.js
var require_optional_require = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/optional-require.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.optionalRequire = optionalRequire;
	function optionalRequire(packageName, loaderFn) {
		try {
			return loaderFn ? loaderFn() : __require(packageName);
		} catch (e) {
			return {};
		}
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/container.js
var require_container = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/container.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MiddlewareContainer = void 0;
	const get_class_scope_1$1 = require_get_class_scope();
	const is_durable_1 = require_is_durable();
	const instance_wrapper_1 = require_instance_wrapper();
	var MiddlewareContainer = class {
		constructor(container) {
			this.container = container;
			this.middleware = /* @__PURE__ */ new Map();
			this.configurationSets = /* @__PURE__ */ new Map();
		}
		getMiddlewareCollection(moduleKey) {
			if (!this.middleware.has(moduleKey)) {
				const moduleRef = this.container.getModuleByKey(moduleKey);
				this.middleware.set(moduleKey, moduleRef.middlewares);
			}
			return this.middleware.get(moduleKey);
		}
		getConfigurations() {
			return this.configurationSets;
		}
		insertConfig(configList, moduleKey) {
			const middleware = this.getMiddlewareCollection(moduleKey);
			const targetConfig = this.getTargetConfig(moduleKey);
			const configurations = configList || [];
			const insertMiddleware = function(metatype) {
				var _token$name;
				const token = metatype;
				middleware.set(token, new instance_wrapper_1.InstanceWrapper({
					scope: (0, get_class_scope_1$1.getClassScope)(metatype),
					durable: (0, is_durable_1.isDurable)(metatype),
					name: (_token$name = token === null || token === void 0 ? void 0 : token.name) !== null && _token$name !== void 0 ? _token$name : token,
					metatype,
					token
				}));
			};
			configurations.forEach(function(config) {
				[].concat(config.middleware).map(insertMiddleware);
				targetConfig.add(config);
			});
		}
		getTargetConfig(moduleName) {
			if (!this.configurationSets.has(moduleName)) this.configurationSets.set(moduleName, /* @__PURE__ */ new Set());
			return this.configurationSets.get(moduleName);
		}
	};
	exports.MiddlewareContainer = MiddlewareContainer;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-middleware.exception.js
var require_invalid_middleware_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-middleware.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InvalidMiddlewareException = void 0;
	const messages_1$7 = require_messages$1();
	const runtime_exception_1$5 = require_runtime_exception();
	var InvalidMiddlewareException = class extends runtime_exception_1$5.RuntimeException {
		constructor(name) {
			super((0, messages_1$7.INVALID_MIDDLEWARE_MESSAGE)`${name}`);
		}
	};
	exports.InvalidMiddlewareException = InvalidMiddlewareException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/exceptions-handler.js
var require_exceptions_handler = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/exceptions/exceptions-handler.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ExceptionsHandler = void 0;
	const select_exception_filter_metadata_util_1 = require_select_exception_filter_metadata_util();
	const shared_utils_1$20 = require_shared_utils();
	const invalid_exception_filter_exception_1 = require_invalid_exception_filter_exception();
	const base_exception_filter_1 = require_base_exception_filter();
	var ExceptionsHandler = class extends base_exception_filter_1.BaseExceptionFilter {
		constructor() {
			super(...arguments);
			this.filters = [];
		}
		next(exception, ctx) {
			if (this.invokeCustomFilters(exception, ctx)) return;
			super.catch(exception, ctx);
		}
		setCustomFilters(filters) {
			if (!Array.isArray(filters)) throw new invalid_exception_filter_exception_1.InvalidExceptionFilterException();
			this.filters = filters;
		}
		invokeCustomFilters(exception, ctx) {
			if ((0, shared_utils_1$20.isEmpty)(this.filters)) return false;
			const filter = (0, select_exception_filter_metadata_util_1.selectExceptionFilterMetadata)(this.filters, exception);
			filter && filter.func(exception, ctx);
			return !!filter;
		}
	};
	exports.ExceptionsHandler = ExceptionsHandler;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-exception-filters.js
var require_router_exception_filters = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-exception-filters.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RouterExceptionFilters = void 0;
	const constants_1$13 = require_constants();
	const shared_utils_1$19 = require_shared_utils();
	const iterare_1$10 = require_lib();
	const base_exception_filter_context_1 = require_base_exception_filter_context();
	const exceptions_handler_1 = require_exceptions_handler();
	const constants_2$3 = require_constants$3();
	var RouterExceptionFilters = class extends base_exception_filter_context_1.BaseExceptionFilterContext {
		constructor(container, config, applicationRef) {
			super(container);
			this.config = config;
			this.applicationRef = applicationRef;
		}
		create(instance, callback, moduleKey, contextId = constants_2$3.STATIC_CONTEXT, inquirerId) {
			this.moduleContext = moduleKey;
			const exceptionHandler = new exceptions_handler_1.ExceptionsHandler(this.applicationRef);
			const filters = this.createContext(instance, callback, constants_1$13.EXCEPTION_FILTERS_METADATA, contextId, inquirerId);
			if ((0, shared_utils_1$19.isEmpty)(filters)) return exceptionHandler;
			exceptionHandler.setCustomFilters(filters.reverse());
			return exceptionHandler;
		}
		getGlobalMetadata(contextId = constants_2$3.STATIC_CONTEXT, inquirerId) {
			const globalFilters = this.config.getGlobalFilters();
			if (contextId === constants_2$3.STATIC_CONTEXT && !inquirerId) return globalFilters;
			const scopedFilterWrappers = this.config.getGlobalRequestFilters();
			const scopedFilters = (0, iterare_1$10.iterate)(scopedFilterWrappers).map(function(wrapper) {
				return wrapper.getInstanceByContextId(contextId, inquirerId);
			}).filter(function(host) {
				return !!host;
			}).map(function(host) {
				return host.instance;
			}).toArray();
			return globalFilters.concat(scopedFilters);
		}
	};
	exports.RouterExceptionFilters = RouterExceptionFilters;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-proxy.js
var require_router_proxy = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-proxy.js"(exports) {
	var import_asyncToGenerator$17 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RouterProxy = void 0;
	const execution_context_host_1$2 = require_execution_context_host();
	var RouterProxy = class {
		createProxy(targetCallback, exceptionsHandler) {
			return function() {
				var _ref$1 = (0, import_asyncToGenerator$17.default)(function* (req, res, next) {
					try {
						yield targetCallback(req, res, next);
					} catch (e) {
						const host = new execution_context_host_1$2.ExecutionContextHost([
							req,
							res,
							next
						]);
						exceptionsHandler.next(e, host);
						return res;
					}
				});
				return function(_x, _x2, _x3) {
					return _ref$1.apply(this, arguments);
				};
			}();
		}
		createExceptionLayerProxy(targetCallback, exceptionsHandler) {
			return function() {
				var _ref2$1 = (0, import_asyncToGenerator$17.default)(function* (err, req, res, next) {
					try {
						yield targetCallback(err, req, res, next);
					} catch (e) {
						const host = new execution_context_host_1$2.ExecutionContextHost([
							req,
							res,
							next
						]);
						exceptionsHandler.next(e, host);
						return res;
					}
				});
				return function(_x4, _x5, _x6, _x7) {
					return _ref2$1.apply(this, arguments);
				};
			}();
		}
	};
	exports.RouterProxy = RouterProxy;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/resolver.js
var require_resolver = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/resolver.js"(exports) {
	var import_asyncToGenerator$16 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MiddlewareResolver = void 0;
	var MiddlewareResolver = class {
		constructor(middlewareContainer, injector) {
			this.middlewareContainer = middlewareContainer;
			this.injector = injector;
		}
		resolveInstances(moduleRef, moduleName) {
			var _this = this;
			return (0, import_asyncToGenerator$16.default)(function* () {
				const middlewareMap = this.middlewareContainer.getMiddlewareCollection(moduleName);
				const resolveInstance = function() {
					var _ref$1 = (0, import_asyncToGenerator$16.default)(function* (wrapper) {
						return _this.resolveMiddlewareInstance(wrapper, middlewareMap, moduleRef);
					});
					return function resolveInstance$1(_x) {
						return _ref$1.apply(this, arguments);
					};
				}();
				yield Promise.all([...middlewareMap.values()].map(resolveInstance));
			})();
		}
		resolveMiddlewareInstance(wrapper, middlewareMap, moduleRef) {
			return (0, import_asyncToGenerator$16.default)(function* () {
				yield this.injector.loadMiddleware(wrapper, middlewareMap, moduleRef);
			})();
		}
	};
	exports.MiddlewareResolver = MiddlewareResolver;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/route-path-factory.js
var require_route_path_factory = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/route-path-factory.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RoutePathFactory = void 0;
	const common_1$15 = require_common();
	const shared_utils_1$18 = require_shared_utils();
	const utils_1$4 = require_utils$1();
	var RoutePathFactory = class {
		constructor(applicationConfig) {
			this.applicationConfig = applicationConfig;
		}
		create(metadata, requestMethod) {
			var _this = this;
			var _metadata$versioningO;
			let paths = [""];
			const versionOrVersions = this.getVersion(metadata);
			if (versionOrVersions && ((_metadata$versioningO = metadata.versioningOptions) === null || _metadata$versioningO === void 0 ? void 0 : _metadata$versioningO.type) === common_1$15.VersioningType.URI) {
				const versionPrefix = this.getVersionPrefix(metadata.versioningOptions);
				if (Array.isArray(versionOrVersions)) paths = (0, common_1$15.flatten)(paths.map(function(path) {
					return versionOrVersions.map(function(version) {
						return version === common_1$15.VERSION_NEUTRAL ? path : `${path}/${versionPrefix}${version}`;
					});
				}));
				else if (versionOrVersions !== common_1$15.VERSION_NEUTRAL) paths = paths.map(function(path) {
					return `${path}/${versionPrefix}${versionOrVersions}`;
				});
			}
			paths = this.appendToAllIfDefined(paths, metadata.modulePath);
			paths = this.appendToAllIfDefined(paths, metadata.ctrlPath);
			paths = this.appendToAllIfDefined(paths, metadata.methodPath);
			if (metadata.globalPrefix) paths = paths.map(function(path) {
				if (_this.isExcludedFromGlobalPrefix(path, requestMethod, versionOrVersions, metadata.versioningOptions)) return path;
				return (0, shared_utils_1$18.stripEndSlash)(metadata.globalPrefix || "") + path;
			});
			return paths.map(function(path) {
				return (0, shared_utils_1$18.addLeadingSlash)(path || "/");
			}).map(function(path) {
				return path !== "/" ? (0, shared_utils_1$18.stripEndSlash)(path) : path;
			});
		}
		getVersion(metadata) {
			return metadata.methodVersion || metadata.controllerVersion;
		}
		getVersionPrefix(versioningOptions) {
			const defaultPrefix = "v";
			if (versioningOptions.type === common_1$15.VersioningType.URI) {
				if (versioningOptions.prefix === false) return "";
				else if (versioningOptions.prefix !== void 0) return versioningOptions.prefix;
			}
			return defaultPrefix;
		}
		appendToAllIfDefined(paths, fragmentToAppend) {
			if (!fragmentToAppend) return paths;
			const concatPaths = function(a, b) {
				return (0, shared_utils_1$18.stripEndSlash)(a) + (0, shared_utils_1$18.addLeadingSlash)(b);
			};
			if (Array.isArray(fragmentToAppend)) {
				const paths2dArray = paths.map(function(path) {
					return fragmentToAppend.map(function(fragment) {
						return concatPaths(path, fragment);
					});
				});
				return (0, common_1$15.flatten)(paths2dArray);
			}
			return paths.map(function(path) {
				return concatPaths(path, fragmentToAppend);
			});
		}
		isExcludedFromGlobalPrefix(path, requestMethod, versionOrVersions, versioningOptions) {
			if ((0, shared_utils_1$18.isUndefined)(requestMethod)) return false;
			const options = this.applicationConfig.getGlobalPrefixOptions();
			const excludedRoutes = options.exclude;
			if (versionOrVersions && versionOrVersions !== common_1$15.VERSION_NEUTRAL && (versioningOptions === null || versioningOptions === void 0 ? void 0 : versioningOptions.type) === common_1$15.VersioningType.URI) path = this.truncateVersionPrefixFromPath(path, versionOrVersions, versioningOptions);
			return Array.isArray(excludedRoutes) && (0, utils_1$4.isRouteExcluded)(excludedRoutes, path, requestMethod);
		}
		truncateVersionPrefixFromPath(path, versionValue, versioningOptions) {
			var _this2 = this;
			if (typeof versionValue !== "string") {
				versionValue.forEach(function(version) {
					if (typeof version === "string") path = _this2.truncateVersionPrefixFromPath(path, version, versioningOptions);
				});
				return path;
			}
			const prefix = `/${this.getVersionPrefix(versioningOptions)}${versionValue}`;
			return path.startsWith(prefix) ? path.replace(prefix, "") : path;
		}
	};
	exports.RoutePathFactory = RoutePathFactory;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/route-info-path-extractor.js
var require_route_info_path_extractor = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/route-info-path-extractor.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RouteInfoPathExtractor = void 0;
	const common_1$14 = require_common();
	const shared_utils_1$17 = require_shared_utils();
	const utils_1$3 = require_utils$1();
	const route_path_factory_1$1 = require_route_path_factory();
	var RouteInfoPathExtractor = class {
		constructor(applicationConfig) {
			this.applicationConfig = applicationConfig;
			this.routePathFactory = new route_path_factory_1$1.RoutePathFactory(applicationConfig);
			this.prefixPath = (0, shared_utils_1$17.stripEndSlash)((0, shared_utils_1$17.addLeadingSlash)(this.applicationConfig.getGlobalPrefix()));
			this.excludedGlobalPrefixRoutes = this.applicationConfig.getGlobalPrefixOptions().exclude;
			this.versioningConfig = this.applicationConfig.getVersioning();
		}
		extractPathsFrom({ path, method, version }) {
			var _this = this;
			const versionPaths = this.extractVersionPathFrom(version);
			if (this.isAWildcard(path)) {
				const entries = versionPaths.length > 0 ? versionPaths.map(function(versionPath) {
					return [_this.prefixPath + versionPath + "$", _this.prefixPath + versionPath + (0, shared_utils_1$17.addLeadingSlash)(path)];
				}).flat() : this.prefixPath ? [this.prefixPath + "$", this.prefixPath + (0, shared_utils_1$17.addLeadingSlash)(path)] : [(0, shared_utils_1$17.addLeadingSlash)(path)];
				return Array.isArray(this.excludedGlobalPrefixRoutes) ? [...entries, ...this.excludedGlobalPrefixRoutes.map(function(route) {
					return Array.isArray(versionPaths) && versionPaths.length > 0 ? versionPaths.map(function(v) {
						return v + (0, shared_utils_1$17.addLeadingSlash)(route.path);
					}) : (0, shared_utils_1$17.addLeadingSlash)(route.path);
				}).flat()] : entries;
			}
			return this.extractNonWildcardPathsFrom({
				path,
				method,
				version
			});
		}
		extractPathFrom(route) {
			if (this.isAWildcard(route.path) && !route.version) return [(0, shared_utils_1$17.addLeadingSlash)(route.path)];
			return this.extractNonWildcardPathsFrom(route);
		}
		isAWildcard(path) {
			const isSimpleWildcard = [
				"*",
				"/*",
				"/*/",
				"(.*)",
				"/(.*)"
			];
			if (isSimpleWildcard.includes(path)) return true;
			const wildcardRegexp = /^\/\{.*\}.*|^\/\*.*$/;
			return wildcardRegexp.test(path);
		}
		extractNonWildcardPathsFrom({ path, method, version }) {
			var _this2 = this;
			const versionPaths = this.extractVersionPathFrom(version);
			if (Array.isArray(this.excludedGlobalPrefixRoutes) && (0, utils_1$3.isRouteExcluded)(this.excludedGlobalPrefixRoutes, path, method)) {
				if (!versionPaths.length) return [(0, shared_utils_1$17.addLeadingSlash)(path)];
				return versionPaths.map(function(versionPath) {
					return versionPath + (0, shared_utils_1$17.addLeadingSlash)(path);
				});
			}
			if (!versionPaths.length) return [this.prefixPath + (0, shared_utils_1$17.addLeadingSlash)(path)];
			return versionPaths.map(function(versionPath) {
				return _this2.prefixPath + versionPath + (0, shared_utils_1$17.addLeadingSlash)(path);
			});
		}
		extractVersionPathFrom(versionValue) {
			var _this$versioningConfi;
			if (!versionValue || ((_this$versioningConfi = this.versioningConfig) === null || _this$versioningConfi === void 0 ? void 0 : _this$versioningConfi.type) !== common_1$14.VersioningType.URI) return [];
			const versionPrefix = this.routePathFactory.getVersionPrefix(this.versioningConfig);
			if (Array.isArray(versionValue)) return versionValue.map(function(version) {
				return (0, shared_utils_1$17.addLeadingSlash)(versionPrefix + version.toString());
			});
			return [(0, shared_utils_1$17.addLeadingSlash)(versionPrefix + versionValue.toString())];
		}
	};
	exports.RouteInfoPathExtractor = RouteInfoPathExtractor;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/paths-explorer.js
var require_paths_explorer = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/paths-explorer.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PathsExplorer = void 0;
	const constants_1$12 = require_constants();
	const shared_utils_1$16 = require_shared_utils();
	var PathsExplorer = class {
		constructor(metadataScanner) {
			this.metadataScanner = metadataScanner;
		}
		scanForPaths(instance, prototype) {
			var _this = this;
			const instancePrototype = (0, shared_utils_1$16.isUndefined)(prototype) ? Object.getPrototypeOf(instance) : prototype;
			return this.metadataScanner.getAllMethodNames(instancePrototype).reduce(function(acc, method) {
				const route = _this.exploreMethodMetadata(instance, instancePrototype, method);
				if (route) acc.push(route);
				return acc;
			}, []);
		}
		exploreMethodMetadata(instance, prototype, methodName) {
			const instanceCallback = instance[methodName];
			const prototypeCallback = prototype[methodName];
			const routePath = Reflect.getMetadata(constants_1$12.PATH_METADATA, prototypeCallback);
			if ((0, shared_utils_1$16.isUndefined)(routePath)) return null;
			const requestMethod = Reflect.getMetadata(constants_1$12.METHOD_METADATA, prototypeCallback);
			const version = Reflect.getMetadata(constants_1$12.VERSION_METADATA, prototypeCallback);
			const path = (0, shared_utils_1$16.isString)(routePath) ? [(0, shared_utils_1$16.addLeadingSlash)(routePath)] : routePath.map(function(p) {
				return (0, shared_utils_1$16.addLeadingSlash)(p);
			});
			return {
				path,
				requestMethod,
				targetCallback: instanceCallback,
				methodName,
				version
			};
		}
	};
	exports.PathsExplorer = PathsExplorer;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-module.js
var require_router_module = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-module.js"(exports) {
	var import_objectSpread2$8 = __toESM(require_objectSpread2());
	var RouterModule_1;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RouterModule = exports.targetModulesByContainer = exports.ROUTES = void 0;
	const tslib_1$6 = __require("tslib");
	const common_1$13 = require_common();
	const constants_1$11 = require_constants();
	const shared_utils_1$15 = require_shared_utils();
	const modules_container_1$1 = require_modules_container();
	const utils_1$2 = require_utils$1();
	exports.ROUTES = Symbol("ROUTES");
	exports.targetModulesByContainer = /* @__PURE__ */ new WeakMap();
	/**
	* @publicApi
	*/
	let RouterModule = RouterModule_1 = class RouterModule$1 {
		constructor(modulesContainer, routes) {
			this.modulesContainer = modulesContainer;
			this.routes = routes;
			this.routes = this.deepCloneRoutes(routes);
			this.initialize();
		}
		static register(routes) {
			return {
				module: RouterModule_1,
				providers: [{
					provide: exports.ROUTES,
					useValue: routes
				}]
			};
		}
		deepCloneRoutes(routes) {
			var _this = this;
			return routes.map(function(routeOrType) {
				if (typeof routeOrType === "function") return routeOrType;
				if (routeOrType.children) return (0, import_objectSpread2$8.default)((0, import_objectSpread2$8.default)({}, routeOrType), {}, { children: _this.deepCloneRoutes(routeOrType.children) });
				return (0, import_objectSpread2$8.default)({}, routeOrType);
			});
		}
		initialize() {
			var _this2 = this;
			const flattenedRoutes = (0, utils_1$2.flattenRoutePaths)(this.routes);
			flattenedRoutes.forEach(function(route) {
				const modulePath = (0, shared_utils_1$15.normalizePath)(route.path);
				_this2.registerModulePathMetadata(route.module, modulePath);
				_this2.updateTargetModulesCache(route.module);
			});
		}
		registerModulePathMetadata(moduleCtor, modulePath) {
			Reflect.defineMetadata(constants_1$11.MODULE_PATH + this.modulesContainer.applicationId, modulePath, moduleCtor);
		}
		updateTargetModulesCache(moduleCtor) {
			let moduleClassSet;
			if (exports.targetModulesByContainer.has(this.modulesContainer)) moduleClassSet = exports.targetModulesByContainer.get(this.modulesContainer);
			else {
				moduleClassSet = /* @__PURE__ */ new WeakSet();
				exports.targetModulesByContainer.set(this.modulesContainer, moduleClassSet);
			}
			const moduleRef = Array.from(this.modulesContainer.values()).find(function(item) {
				return (item === null || item === void 0 ? void 0 : item.metatype) === moduleCtor;
			});
			if (!moduleRef) return;
			moduleClassSet.add(moduleRef);
		}
	};
	exports.RouterModule = RouterModule;
	exports.RouterModule = RouterModule = RouterModule_1 = tslib_1$6.__decorate([
		(0, common_1$13.Module)({}),
		tslib_1$6.__param(1, (0, common_1$13.Inject)(exports.ROUTES)),
		tslib_1$6.__metadata("design:paramtypes", [modules_container_1$1.ModulesContainer, Array])
	], RouterModule);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/routes-mapper.js
var require_routes_mapper = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/routes-mapper.js"(exports) {
	var import_objectSpread2$7 = __toESM(require_objectSpread2());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RoutesMapper = void 0;
	const constants_1$10 = require_constants();
	const interfaces_1$1 = require_interfaces();
	const shared_utils_1$14 = require_shared_utils();
	const metadata_scanner_1$3 = require_metadata_scanner();
	const paths_explorer_1$1 = require_paths_explorer();
	const router_module_1$1 = require_router_module();
	var RoutesMapper = class {
		constructor(container, applicationConfig) {
			this.container = container;
			this.applicationConfig = applicationConfig;
			this.pathsExplorer = new paths_explorer_1$1.PathsExplorer(new metadata_scanner_1$3.MetadataScanner());
		}
		mapRouteToRouteInfo(controllerOrRoute) {
			if ((0, shared_utils_1$14.isString)(controllerOrRoute)) return this.getRouteInfoFromPath(controllerOrRoute);
			const routePathOrPaths = this.getRoutePath(controllerOrRoute);
			if (this.isRouteInfo(routePathOrPaths, controllerOrRoute)) return this.getRouteInfoFromObject(controllerOrRoute);
			return this.getRouteInfoFromController(controllerOrRoute, routePathOrPaths);
		}
		getRouteInfoFromPath(routePath) {
			const defaultRequestMethod = -1;
			return [{
				path: (0, shared_utils_1$14.addLeadingSlash)(routePath),
				method: defaultRequestMethod
			}];
		}
		getRouteInfoFromObject(routeInfoObject) {
			const routeInfo = {
				path: (0, shared_utils_1$14.addLeadingSlash)(routeInfoObject.path),
				method: routeInfoObject.method
			};
			if (routeInfoObject.version) routeInfo.version = routeInfoObject.version;
			return [routeInfo];
		}
		getRouteInfoFromController(controller, routePath) {
			var _this = this;
			const controllerPaths = this.pathsExplorer.scanForPaths(Object.create(controller), controller.prototype);
			const controllerVersion = this.getVersionMetadata(controller);
			const versioningConfig = this.applicationConfig.getVersioning();
			const moduleRef = this.getHostModuleOfController(controller);
			const modulePath = this.getModulePath(moduleRef === null || moduleRef === void 0 ? void 0 : moduleRef.metatype);
			const concatPaths = function(acc, currentValue) {
				return acc.concat(currentValue);
			};
			const toUndefinedIfNeural = function(version) {
				return version === interfaces_1$1.VERSION_NEUTRAL ? void 0 : version;
			};
			const toRouteInfo = function(item, prefix) {
				var _item$path;
				return (_item$path = item.path) === null || _item$path === void 0 ? void 0 : _item$path.flatMap(function(p) {
					var _item$version;
					let endpointPath = modulePath !== null && modulePath !== void 0 ? modulePath : "";
					endpointPath += _this.normalizeGlobalPath(prefix) + (0, shared_utils_1$14.addLeadingSlash)(p);
					const routeInfo = {
						path: endpointPath,
						method: item.requestMethod
					};
					const version = (_item$version = item.version) !== null && _item$version !== void 0 ? _item$version : controllerVersion;
					if (version && versioningConfig) {
						if (typeof version !== "string" && Array.isArray(version)) return version.map(function(v) {
							return (0, import_objectSpread2$7.default)((0, import_objectSpread2$7.default)({}, routeInfo), {}, { version: toUndefinedIfNeural(v) });
						});
						routeInfo.version = toUndefinedIfNeural(version);
					}
					return routeInfo;
				});
			};
			return [].concat(routePath).map(function(routePath$1) {
				return controllerPaths.map(function(item) {
					return toRouteInfo(item, routePath$1);
				}).reduce(concatPaths, []);
			}).reduce(concatPaths, []);
		}
		isRouteInfo(path, objectOrClass) {
			return (0, shared_utils_1$14.isUndefined)(path);
		}
		normalizeGlobalPath(path) {
			const prefix = (0, shared_utils_1$14.addLeadingSlash)(path);
			return prefix === "/" ? "" : prefix;
		}
		getRoutePath(route) {
			return Reflect.getMetadata(constants_1$10.PATH_METADATA, route);
		}
		getHostModuleOfController(metatype) {
			if (!metatype) return;
			const modulesContainer = this.container.getModules();
			const moduleRefsSet = router_module_1$1.targetModulesByContainer.get(modulesContainer);
			if (!moduleRefsSet) return;
			const modules = Array.from(modulesContainer.values()).filter(function(moduleRef) {
				return moduleRefsSet.has(moduleRef);
			});
			return modules.find(function({ controllers }) {
				return controllers.has(metatype);
			});
		}
		getModulePath(metatype) {
			if (!metatype) return;
			const modulesContainer = this.container.getModules();
			const modulePath = Reflect.getMetadata(constants_1$10.MODULE_PATH + modulesContainer.applicationId, metatype);
			return modulePath !== null && modulePath !== void 0 ? modulePath : Reflect.getMetadata(constants_1$10.MODULE_PATH, metatype);
		}
		getVersionMetadata(metatype) {
			const versioningConfig = this.applicationConfig.getVersioning();
			if (versioningConfig) {
				var _Reflect$getMetadata;
				return (_Reflect$getMetadata = Reflect.getMetadata(constants_1$10.VERSION_METADATA, metatype)) !== null && _Reflect$getMetadata !== void 0 ? _Reflect$getMetadata : versioningConfig.defaultVersion;
			}
		}
	};
	exports.RoutesMapper = RoutesMapper;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/middleware-module.js
var require_middleware_module = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/middleware/middleware-module.js"(exports) {
	var import_asyncToGenerator$15 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MiddlewareModule = void 0;
	const common_1$12 = require_common();
	const request_method_enum_1$2 = require_request_method_enum();
	const shared_utils_1$13 = require_shared_utils();
	const invalid_middleware_exception_1 = require_invalid_middleware_exception();
	const runtime_exception_1$4 = require_runtime_exception();
	const context_id_factory_1$2 = require_context_id_factory();
	const execution_context_host_1$1 = require_execution_context_host();
	const constants_1$9 = require_constants$3();
	const request_constants_1$2 = require_request_constants();
	const router_exception_filters_1$1 = require_router_exception_filters();
	const router_proxy_1$1 = require_router_proxy();
	const utils_1$1 = require_utils$1();
	const builder_1 = require_builder();
	const resolver_1 = require_resolver();
	const route_info_path_extractor_1 = require_route_info_path_extractor();
	const routes_mapper_1 = require_routes_mapper();
	var MiddlewareModule = class MiddlewareModule {
		constructor() {
			this.routerProxy = new router_proxy_1$1.RouterProxy();
			this.exceptionFiltersCache = /* @__PURE__ */ new WeakMap();
			this.logger = new common_1$12.Logger(MiddlewareModule.name);
		}
		register(middlewareContainer, container, config, injector, httpAdapter, graphInspector, options) {
			return (0, import_asyncToGenerator$15.default)(function* () {
				this.appOptions = options;
				const appRef = container.getHttpAdapterRef();
				this.routerExceptionFilter = new router_exception_filters_1$1.RouterExceptionFilters(container, config, appRef);
				this.routesMapper = new routes_mapper_1.RoutesMapper(container, config);
				this.resolver = new resolver_1.MiddlewareResolver(middlewareContainer, injector);
				this.routeInfoPathExtractor = new route_info_path_extractor_1.RouteInfoPathExtractor(config);
				this.injector = injector;
				this.container = container;
				this.httpAdapter = httpAdapter;
				this.graphInspector = graphInspector;
				const modules = container.getModules();
				yield this.resolveMiddleware(middlewareContainer, modules);
			})();
		}
		resolveMiddleware(middlewareContainer, modules) {
			var _this = this;
			return (0, import_asyncToGenerator$15.default)(function* () {
				const moduleEntries = [...modules.entries()];
				const loadMiddlewareConfiguration = function() {
					var _ref$1 = (0, import_asyncToGenerator$15.default)(function* ([moduleName, moduleRef]) {
						yield _this.loadConfiguration(middlewareContainer, moduleRef, moduleName);
						yield _this.resolver.resolveInstances(moduleRef, moduleName);
					});
					return function loadMiddlewareConfiguration$1(_x) {
						return _ref$1.apply(this, arguments);
					};
				}();
				yield Promise.all(moduleEntries.map(loadMiddlewareConfiguration));
			})();
		}
		loadConfiguration(middlewareContainer, moduleRef, moduleKey) {
			return (0, import_asyncToGenerator$15.default)(function* () {
				const { instance } = moduleRef;
				if (!instance.configure) return;
				const middlewareBuilder = new builder_1.MiddlewareBuilder(this.routesMapper, this.httpAdapter, this.routeInfoPathExtractor);
				try {
					yield instance.configure(middlewareBuilder);
				} catch (err) {
					if (!this.appOptions.preview) throw err;
					const warningMessage = `Warning! "${moduleRef.name}" module exposes a "configure" method that throws an exception in the preview mode (possibly due to missing dependencies). Note: you can ignore this message, just be aware that some of those conditional middlewares will not be reflected in your graph.`;
					this.logger.warn(warningMessage);
				}
				if (!(middlewareBuilder instanceof builder_1.MiddlewareBuilder)) return;
				const config = middlewareBuilder.build();
				middlewareContainer.insertConfig(config, moduleKey);
			})();
		}
		registerMiddleware(middlewareContainer, applicationRef) {
			var _this2 = this;
			return (0, import_asyncToGenerator$15.default)(function* () {
				const configs = middlewareContainer.getConfigurations();
				const registerAllConfigs = function() {
					var _ref2$1 = (0, import_asyncToGenerator$15.default)(function* (moduleKey, middlewareConfig) {
						for (const config of middlewareConfig) yield _this2.registerMiddlewareConfig(middlewareContainer, config, moduleKey, applicationRef);
					});
					return function registerAllConfigs$1(_x2, _x3) {
						return _ref2$1.apply(this, arguments);
					};
				}();
				const entriesSortedByDistance = [...configs.entries()].sort(function([moduleA], [moduleB]) {
					const moduleARef = _this2.container.getModuleByKey(moduleA);
					const moduleBRef = _this2.container.getModuleByKey(moduleB);
					const isModuleAGlobal = moduleARef.distance === Number.MAX_VALUE;
					const isModuleBGlobal = moduleBRef.distance === Number.MAX_VALUE;
					if (isModuleAGlobal && isModuleBGlobal) return 0;
					if (isModuleAGlobal) return -1;
					if (isModuleBGlobal) return 1;
					return moduleARef.distance - moduleBRef.distance;
				});
				for (const [moduleRef, moduleConfigurations] of entriesSortedByDistance) yield registerAllConfigs(moduleRef, [...moduleConfigurations]);
			})();
		}
		registerMiddlewareConfig(middlewareContainer, config, moduleKey, applicationRef) {
			return (0, import_asyncToGenerator$15.default)(function* () {
				const { forRoutes } = config;
				for (const routeInfo of forRoutes) yield this.registerRouteMiddleware(middlewareContainer, routeInfo, config, moduleKey, applicationRef);
			})();
		}
		registerRouteMiddleware(middlewareContainer, routeInfo, config, moduleKey, applicationRef) {
			return (0, import_asyncToGenerator$15.default)(function* () {
				const middlewareCollection = [].concat(config.middleware);
				const moduleRef = this.container.getModuleByKey(moduleKey);
				for (const metatype of middlewareCollection) {
					var _request_method_enum_;
					const collection = middlewareContainer.getMiddlewareCollection(moduleKey);
					const instanceWrapper = collection.get(metatype);
					if ((0, shared_utils_1$13.isUndefined)(instanceWrapper)) throw new runtime_exception_1$4.RuntimeException();
					if (instanceWrapper.isTransient) return;
					this.graphInspector.insertClassNode(moduleRef, instanceWrapper, "middleware");
					const middlewareDefinition = {
						type: "middleware",
						methodName: "use",
						className: instanceWrapper.name,
						classNodeId: instanceWrapper.id,
						metadata: {
							key: routeInfo.path,
							path: routeInfo.path,
							requestMethod: (_request_method_enum_ = request_method_enum_1$2.RequestMethod[routeInfo.method]) !== null && _request_method_enum_ !== void 0 ? _request_method_enum_ : "ALL",
							version: routeInfo.version
						}
					};
					this.graphInspector.insertEntrypointDefinition(middlewareDefinition, instanceWrapper.id);
					yield this.bindHandler(instanceWrapper, applicationRef, routeInfo, moduleRef, collection);
				}
			})();
		}
		bindHandler(wrapper, applicationRef, routeInfo, moduleRef, collection) {
			var _this3 = this;
			return (0, import_asyncToGenerator$15.default)(function* () {
				const { instance, metatype } = wrapper;
				if ((0, shared_utils_1$13.isUndefined)(instance === null || instance === void 0 ? void 0 : instance.use)) throw new invalid_middleware_exception_1.InvalidMiddlewareException(metatype.name);
				const isStatic = wrapper.isDependencyTreeStatic();
				if (isStatic) {
					const proxy = yield this.createProxy(instance);
					return this.registerHandler(applicationRef, routeInfo, proxy);
				}
				const isTreeDurable = wrapper.isDependencyTreeDurable();
				yield this.registerHandler(applicationRef, routeInfo, function() {
					var _ref3$1 = (0, import_asyncToGenerator$15.default)(function* (req, res, next) {
						try {
							const contextId = _this3.getContextId(req, isTreeDurable);
							const contextInstance = yield _this3.injector.loadPerContext(instance, moduleRef, collection, contextId);
							const proxy = yield _this3.createProxy(contextInstance, contextId);
							return proxy(req, res, next);
						} catch (err) {
							let exceptionsHandler = _this3.exceptionFiltersCache.get(instance.use);
							if (!exceptionsHandler) {
								exceptionsHandler = _this3.routerExceptionFilter.create(instance, instance.use, void 0);
								_this3.exceptionFiltersCache.set(instance.use, exceptionsHandler);
							}
							const host = new execution_context_host_1$1.ExecutionContextHost([
								req,
								res,
								next
							]);
							exceptionsHandler.next(err, host);
						}
					});
					return function(_x4, _x5, _x6) {
						return _ref3$1.apply(this, arguments);
					};
				}());
			})();
		}
		createProxy(_x7) {
			return (0, import_asyncToGenerator$15.default)(function* (instance, contextId = constants_1$9.STATIC_CONTEXT) {
				const exceptionsHandler = this.routerExceptionFilter.create(instance, instance.use, void 0, contextId);
				const middleware = instance.use.bind(instance);
				return this.routerProxy.createProxy(middleware, exceptionsHandler);
			}).apply(this, arguments);
		}
		registerHandler(applicationRef, routeInfo, proxy) {
			return (0, import_asyncToGenerator$15.default)(function* () {
				const { method } = routeInfo;
				const paths = this.routeInfoPathExtractor.extractPathsFrom(routeInfo);
				const isMethodAll = (0, utils_1$1.isRequestMethodAll)(method);
				const requestMethod = request_method_enum_1$2.RequestMethod[method];
				const router = yield applicationRef.createMiddlewareFactory(method);
				const middlewareFunction = isMethodAll ? proxy : function(req, res, next) {
					var _applicationRef$getRe;
					if (((_applicationRef$getRe = applicationRef.getRequestMethod) === null || _applicationRef$getRe === void 0 ? void 0 : _applicationRef$getRe.call(applicationRef, req)) === requestMethod) return proxy(req, res, next);
					return next();
				};
				const pathsToApplyMiddleware = [];
				paths.some(function(path) {
					return path.match(/^\/?$/);
				}) ? pathsToApplyMiddleware.push("/") : pathsToApplyMiddleware.push(...paths);
				pathsToApplyMiddleware.forEach(function(path) {
					return router(path, middlewareFunction);
				});
			})();
		}
		getContextId(request, isTreeDurable) {
			const contextId = context_id_factory_1$2.ContextIdFactory.getByRequest(request);
			if (!request[request_constants_1$2.REQUEST_CONTEXT_ID]) {
				Object.defineProperty(request, request_constants_1$2.REQUEST_CONTEXT_ID, {
					value: contextId,
					enumerable: false,
					writable: false,
					configurable: false
				});
				const requestProviderValue = isTreeDurable ? contextId.payload : Object.assign(request, contextId.payload);
				this.container.registerRequestProvider(requestProviderValue, contextId);
			}
			return contextId;
		}
	};
	exports.MiddlewareModule = MiddlewareModule;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/helpers/transient-instances.js
var require_transient_instances = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/helpers/transient-instances.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getTransientInstances = getTransientInstances;
	exports.getNonTransientInstances = getNonTransientInstances;
	const iterare_1$9 = require_lib();
	/**
	* Returns the instances which are transient
	* @param instances The instances which should be checked whether they are transient
	*/
	function getTransientInstances(instances) {
		return (0, iterare_1$9.iterate)(instances).filter(function([_, wrapper]) {
			return wrapper.isDependencyTreeStatic();
		}).map(function([_, wrapper]) {
			return wrapper.getStaticTransientInstances();
		}).flatten().filter(function(item) {
			return !!item;
		}).map(function({ instance }) {
			return instance;
		}).toArray();
	}
	/**
	* Returns the instances which are not transient
	* @param instances The instances which should be checked whether they are transient
	*/
	function getNonTransientInstances(instances) {
		return (0, iterare_1$9.iterate)(instances).filter(function([key, wrapper]) {
			return wrapper.isDependencyTreeStatic() && !wrapper.isTransient;
		}).map(function([key, { instance }]) {
			return instance;
		}).toArray();
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/on-app-bootstrap.hook.js
var require_on_app_bootstrap_hook = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/on-app-bootstrap.hook.js"(exports) {
	var import_asyncToGenerator$14 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.callModuleBootstrapHook = callModuleBootstrapHook;
	const shared_utils_1$12 = require_shared_utils();
	const iterare_1$8 = require_lib();
	const transient_instances_1$4 = require_transient_instances();
	/**
	* Checks if the given instance has the `onApplicationBootstrap` function
	*
	* @param instance The instance which should be checked
	*/
	function hasOnAppBootstrapHook(instance) {
		return (0, shared_utils_1$12.isFunction)(instance.onApplicationBootstrap);
	}
	/**
	* Calls the given instances
	*/
	function callOperator$4(instances) {
		return (0, iterare_1$8.iterate)(instances).filter(function(instance) {
			return !(0, shared_utils_1$12.isNil)(instance);
		}).filter(hasOnAppBootstrapHook).map(function() {
			var _ref$1 = (0, import_asyncToGenerator$14.default)(function* (instance) {
				return instance.onApplicationBootstrap();
			});
			return function(_x) {
				return _ref$1.apply(this, arguments);
			};
		}()).toArray();
	}
	/**
	* Calls the `onApplicationBootstrap` function on the module and its children
	* (providers / controllers).
	*
	* @param module The module which will be initialized
	*/
	function callModuleBootstrapHook(_x2) {
		return _callModuleBootstrapHook.apply(this, arguments);
	}
	function _callModuleBootstrapHook() {
		_callModuleBootstrapHook = (0, import_asyncToGenerator$14.default)(function* (module$1) {
			const providers = module$1.getNonAliasProviders();
			const [_, moduleClassHost] = providers.shift();
			const instances = [
				...module$1.controllers,
				...providers,
				...module$1.injectables,
				...module$1.middlewares
			];
			const nonTransientInstances = (0, transient_instances_1$4.getNonTransientInstances)(instances);
			yield Promise.all(callOperator$4(nonTransientInstances));
			const transientInstances = (0, transient_instances_1$4.getTransientInstances)(instances);
			yield Promise.all(callOperator$4(transientInstances));
			const moduleClassInstance = moduleClassHost.instance;
			if (moduleClassInstance && hasOnAppBootstrapHook(moduleClassInstance) && moduleClassHost.isDependencyTreeStatic()) yield moduleClassInstance.onApplicationBootstrap();
		});
		return _callModuleBootstrapHook.apply(this, arguments);
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/on-app-shutdown.hook.js
var require_on_app_shutdown_hook = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/on-app-shutdown.hook.js"(exports) {
	var import_asyncToGenerator$13 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.callAppShutdownHook = callAppShutdownHook;
	const shared_utils_1$11 = require_shared_utils();
	const iterare_1$7 = require_lib();
	const transient_instances_1$3 = require_transient_instances();
	/**
	* Checks if the given instance has the `onApplicationShutdown` function
	*
	* @param instance The instance which should be checked
	*/
	function hasOnAppShutdownHook(instance) {
		return (0, shared_utils_1$11.isFunction)(instance.onApplicationShutdown);
	}
	/**
	* Calls the given instances
	*/
	function callOperator$3(instances, signal) {
		return (0, iterare_1$7.iterate)(instances).filter(function(instance) {
			return !(0, shared_utils_1$11.isNil)(instance);
		}).filter(hasOnAppShutdownHook).map(function() {
			var _ref$1 = (0, import_asyncToGenerator$13.default)(function* (instance) {
				return instance.onApplicationShutdown(signal);
			});
			return function(_x) {
				return _ref$1.apply(this, arguments);
			};
		}()).toArray();
	}
	/**
	* Calls the `onApplicationShutdown` function on the module and its children
	* (providers / controllers).
	*
	* @param module The module which will be initialized
	* @param signal
	*/
	function callAppShutdownHook(_x2, _x3) {
		return _callAppShutdownHook.apply(this, arguments);
	}
	function _callAppShutdownHook() {
		_callAppShutdownHook = (0, import_asyncToGenerator$13.default)(function* (module$1, signal) {
			const providers = module$1.getNonAliasProviders();
			const [_, moduleClassHost] = providers.shift();
			const instances = [
				...module$1.controllers,
				...providers,
				...module$1.injectables,
				...module$1.middlewares
			];
			const nonTransientInstances = (0, transient_instances_1$3.getNonTransientInstances)(instances);
			yield Promise.all(callOperator$3(nonTransientInstances, signal));
			const transientInstances = (0, transient_instances_1$3.getTransientInstances)(instances);
			yield Promise.all(callOperator$3(transientInstances, signal));
			const moduleClassInstance = moduleClassHost.instance;
			if (moduleClassInstance && hasOnAppShutdownHook(moduleClassInstance) && moduleClassHost.isDependencyTreeStatic()) yield moduleClassInstance.onApplicationShutdown(signal);
		});
		return _callAppShutdownHook.apply(this, arguments);
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/on-module-destroy.hook.js
var require_on_module_destroy_hook = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/on-module-destroy.hook.js"(exports) {
	var import_asyncToGenerator$12 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.callModuleDestroyHook = callModuleDestroyHook;
	const shared_utils_1$10 = require_shared_utils();
	const iterare_1$6 = require_lib();
	const transient_instances_1$2 = require_transient_instances();
	/**
	* Returns true or false if the given instance has a `onModuleDestroy` function
	*
	* @param instance The instance which should be checked
	*/
	function hasOnModuleDestroyHook(instance) {
		return (0, shared_utils_1$10.isFunction)(instance.onModuleDestroy);
	}
	/**
	* Calls the given instances onModuleDestroy hook
	*/
	function callOperator$2(instances) {
		return (0, iterare_1$6.iterate)(instances).filter(function(instance) {
			return !(0, shared_utils_1$10.isNil)(instance);
		}).filter(hasOnModuleDestroyHook).map(function() {
			var _ref$1 = (0, import_asyncToGenerator$12.default)(function* (instance) {
				return instance.onModuleDestroy();
			});
			return function(_x) {
				return _ref$1.apply(this, arguments);
			};
		}()).toArray();
	}
	/**
	* Calls the `onModuleDestroy` function on the module and its children
	* (providers / controllers).
	*
	* @param module The module which will be initialized
	*/
	function callModuleDestroyHook(_x2) {
		return _callModuleDestroyHook.apply(this, arguments);
	}
	function _callModuleDestroyHook() {
		_callModuleDestroyHook = (0, import_asyncToGenerator$12.default)(function* (module$1) {
			const providers = module$1.getNonAliasProviders();
			const [_, moduleClassHost] = providers.shift();
			const instances = [
				...module$1.controllers,
				...providers,
				...module$1.injectables,
				...module$1.middlewares
			];
			const nonTransientInstances = (0, transient_instances_1$2.getNonTransientInstances)(instances);
			yield Promise.all(callOperator$2(nonTransientInstances));
			const transientInstances = (0, transient_instances_1$2.getTransientInstances)(instances);
			yield Promise.all(callOperator$2(transientInstances));
			const moduleClassInstance = moduleClassHost.instance;
			if (moduleClassInstance && hasOnModuleDestroyHook(moduleClassInstance) && moduleClassHost.isDependencyTreeStatic()) yield moduleClassInstance.onModuleDestroy();
		});
		return _callModuleDestroyHook.apply(this, arguments);
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/on-module-init.hook.js
var require_on_module_init_hook = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/on-module-init.hook.js"(exports) {
	var import_asyncToGenerator$11 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.callModuleInitHook = callModuleInitHook;
	const shared_utils_1$9 = require_shared_utils();
	const iterare_1$5 = require_lib();
	const transient_instances_1$1 = require_transient_instances();
	/**
	* Returns true or false if the given instance has a `onModuleInit` function
	*
	* @param instance The instance which should be checked
	*/
	function hasOnModuleInitHook(instance) {
		return (0, shared_utils_1$9.isFunction)(instance.onModuleInit);
	}
	/**
	* Calls the given instances
	*/
	function callOperator$1(instances) {
		return (0, iterare_1$5.iterate)(instances).filter(function(instance) {
			return !(0, shared_utils_1$9.isNil)(instance);
		}).filter(hasOnModuleInitHook).map(function() {
			var _ref$1 = (0, import_asyncToGenerator$11.default)(function* (instance) {
				return instance.onModuleInit();
			});
			return function(_x) {
				return _ref$1.apply(this, arguments);
			};
		}()).toArray();
	}
	/**
	* Calls the `onModuleInit` function on the module and its children
	* (providers / controllers).
	*
	* @param module The module which will be initialized
	*/
	function callModuleInitHook(_x2) {
		return _callModuleInitHook.apply(this, arguments);
	}
	function _callModuleInitHook() {
		_callModuleInitHook = (0, import_asyncToGenerator$11.default)(function* (module$1) {
			const providers = module$1.getNonAliasProviders();
			const [_, moduleClassHost] = providers.shift();
			const instances = [
				...module$1.controllers,
				...providers,
				...module$1.injectables,
				...module$1.middlewares
			];
			const nonTransientInstances = (0, transient_instances_1$1.getNonTransientInstances)(instances);
			yield Promise.all(callOperator$1(nonTransientInstances));
			const transientInstances = (0, transient_instances_1$1.getTransientInstances)(instances);
			yield Promise.all(callOperator$1(transientInstances));
			const moduleClassInstance = moduleClassHost.instance;
			if (moduleClassInstance && hasOnModuleInitHook(moduleClassInstance) && moduleClassHost.isDependencyTreeStatic()) yield moduleClassInstance.onModuleInit();
		});
		return _callModuleInitHook.apply(this, arguments);
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/before-app-shutdown.hook.js
var require_before_app_shutdown_hook = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/before-app-shutdown.hook.js"(exports) {
	var import_asyncToGenerator$10 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.callBeforeAppShutdownHook = callBeforeAppShutdownHook;
	const shared_utils_1$8 = require_shared_utils();
	const iterare_1$4 = require_lib();
	const transient_instances_1 = require_transient_instances();
	/**
	* Checks if the given instance has the `beforeApplicationShutdown` function
	*
	* @param instance The instance which should be checked
	*/
	function hasBeforeApplicationShutdownHook(instance) {
		return (0, shared_utils_1$8.isFunction)(instance.beforeApplicationShutdown);
	}
	/**
	* Calls the given instances
	*/
	function callOperator(instances, signal) {
		return (0, iterare_1$4.iterate)(instances).filter(function(instance) {
			return !(0, shared_utils_1$8.isNil)(instance);
		}).filter(hasBeforeApplicationShutdownHook).map(function() {
			var _ref$1 = (0, import_asyncToGenerator$10.default)(function* (instance) {
				return instance.beforeApplicationShutdown(signal);
			});
			return function(_x) {
				return _ref$1.apply(this, arguments);
			};
		}()).toArray();
	}
	/**
	* Calls the `beforeApplicationShutdown` function on the module and its children
	* (providers / controllers).
	*
	* @param module The module which will be initialized
	* @param signal The signal which caused the shutdown
	*/
	function callBeforeAppShutdownHook(_x2, _x3) {
		return _callBeforeAppShutdownHook.apply(this, arguments);
	}
	function _callBeforeAppShutdownHook() {
		_callBeforeAppShutdownHook = (0, import_asyncToGenerator$10.default)(function* (module$1, signal) {
			const providers = module$1.getNonAliasProviders();
			const [_, moduleClassHost] = providers.shift();
			const instances = [
				...module$1.controllers,
				...providers,
				...module$1.injectables,
				...module$1.middlewares
			];
			const nonTransientInstances = (0, transient_instances_1.getNonTransientInstances)(instances);
			yield Promise.all(callOperator(nonTransientInstances, signal));
			const transientInstances = (0, transient_instances_1.getTransientInstances)(instances);
			yield Promise.all(callOperator(transientInstances, signal));
			const moduleClassInstance = moduleClassHost.instance;
			if (moduleClassInstance && hasBeforeApplicationShutdownHook(moduleClassInstance) && moduleClassHost.isDependencyTreeStatic()) yield moduleClassInstance.beforeApplicationShutdown(signal);
		});
		return _callBeforeAppShutdownHook.apply(this, arguments);
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/index.js
var require_hooks = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/hooks/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$5 = __require("tslib");
	tslib_1$5.__exportStar(require_on_app_bootstrap_hook(), exports);
	tslib_1$5.__exportStar(require_on_app_shutdown_hook(), exports);
	tslib_1$5.__exportStar(require_on_module_destroy_hook(), exports);
	tslib_1$5.__exportStar(require_on_module_init_hook(), exports);
	tslib_1$5.__exportStar(require_before_app_shutdown_hook(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/nest-application-context.js
var require_nest_application_context = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/nest-application-context.js"(exports) {
	var import_objectSpread2$6 = __toESM(require_objectSpread2());
	var import_asyncToGenerator$9 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NestApplicationContext = void 0;
	const common_1$11 = require_common();
	const shared_utils_1$7 = require_shared_utils();
	const iterare_1$3 = require_lib();
	const constants_1$8 = require_constants$4();
	const exceptions_1$1 = require_exceptions$1();
	const context_id_factory_1$1 = require_context_id_factory();
	const hooks_1 = require_hooks();
	const abstract_instance_resolver_1 = require_abstract_instance_resolver();
	const injector_1$4 = require_injector$1();
	const instance_links_host_1 = require_instance_links_host();
	/**
	* @publicApi
	*/
	var NestApplicationContext = class NestApplicationContext extends abstract_instance_resolver_1.AbstractInstanceResolver {
		get instanceLinksHost() {
			if (!this._instanceLinksHost) this._instanceLinksHost = new instance_links_host_1.InstanceLinksHost(this.container);
			return this._instanceLinksHost;
		}
		constructor(container, appOptions = {}, contextModule = null, scope = new Array()) {
			super();
			this.container = container;
			this.appOptions = appOptions;
			this.contextModule = contextModule;
			this.scope = scope;
			this.isInitialized = false;
			this.logger = new common_1$11.Logger(NestApplicationContext.name, { timestamp: true });
			this.shouldFlushLogsOnOverride = false;
			this.activeShutdownSignals = new Array();
			this.injector = new injector_1$4.Injector();
			this.moduleCompiler = container.getModuleCompiler();
			if (this.appOptions.preview) this.printInPreviewModeWarning();
		}
		selectContextModule() {
			const modules = this.container.getModules().values();
			this.contextModule = modules.next().value;
		}
		/**
		* Allows navigating through the modules tree, for example, to pull out a specific instance from the selected module.
		* @returns {INestApplicationContext}
		*/
		select(moduleType, selectOptions) {
			const modulesContainer = this.container.getModules();
			const contextModuleCtor = this.contextModule.metatype;
			const scope = this.scope.concat(contextModuleCtor);
			const moduleTokenFactory = this.container.getModuleTokenFactory();
			const { type, dynamicMetadata } = this.moduleCompiler.extractMetadata(moduleType);
			const token = dynamicMetadata ? moduleTokenFactory.createForDynamic(type, dynamicMetadata, moduleType) : moduleTokenFactory.createForStatic(type, moduleType);
			const selectedModule = modulesContainer.get(token);
			if (!selectedModule) throw new exceptions_1$1.UnknownModuleException(type.name);
			const options = typeof (selectOptions === null || selectOptions === void 0 ? void 0 : selectOptions.abortOnError) !== "undefined" ? (0, import_objectSpread2$6.default)((0, import_objectSpread2$6.default)({}, this.appOptions), selectOptions) : this.appOptions;
			return new NestApplicationContext(this.container, options, selectedModule, scope);
		}
		/**
		* Retrieves an instance (or a list of instances) of either injectable or controller, otherwise, throws exception.
		* @returns {TResult | Array<TResult>}
		*/
		get(typeOrToken, options = { strict: false }) {
			var _this$contextModule;
			return !(options && options.strict) ? this.find(typeOrToken, options) : this.find(typeOrToken, {
				moduleId: (_this$contextModule = this.contextModule) === null || _this$contextModule === void 0 ? void 0 : _this$contextModule.id,
				each: options.each
			});
		}
		/**
		* Resolves transient or request-scoped instance (or a list of instances) of either injectable or controller, otherwise, throws exception.
		* @returns {Promise<TResult | Array<TResult>>}
		*/
		resolve(typeOrToken, contextId = (0, context_id_factory_1$1.createContextId)(), options = { strict: false }) {
			return this.resolvePerContext(typeOrToken, this.contextModule, contextId, options);
		}
		/**
		* Registers the request/context object for a given context ID (DI container sub-tree).
		* @returns {void}
		*/
		registerRequestByContextId(request, contextId) {
			this.container.registerRequestProvider(request, contextId);
		}
		/**
		* Initializes the Nest application.
		* Calls the Nest lifecycle events.
		*
		* @returns {Promise<this>} The NestApplicationContext instance as Promise
		*/
		init() {
			var _this = this;
			return (0, import_asyncToGenerator$9.default)(function* () {
				if (this.isInitialized) return this;
				this.initializationPromise = new Promise(function() {
					var _ref$1 = (0, import_asyncToGenerator$9.default)(function* (resolve, reject) {
						try {
							yield _this.callInitHook();
							yield _this.callBootstrapHook();
							resolve();
						} catch (err) {
							reject(err);
						}
					});
					return function(_x, _x2) {
						return _ref$1.apply(this, arguments);
					};
				}());
				yield this.initializationPromise;
				this.isInitialized = true;
				return this;
			})();
		}
		/**
		* Terminates the application
		* @returns {Promise<void>}
		*/
		close(signal) {
			return (0, import_asyncToGenerator$9.default)(function* () {
				yield this.initializationPromise;
				yield this.callDestroyHook();
				yield this.callBeforeShutdownHook(signal);
				yield this.dispose();
				yield this.callShutdownHook(signal);
				this.unsubscribeFromProcessSignals();
			})();
		}
		/**
		* Sets custom logger service.
		* Flushes buffered logs if auto flush is on.
		* @returns {void}
		*/
		useLogger(logger$1) {
			common_1$11.Logger.overrideLogger(logger$1);
			if (this.shouldFlushLogsOnOverride) this.flushLogs();
		}
		/**
		* Prints buffered logs and detaches buffer.
		* @returns {void}
		*/
		flushLogs() {
			common_1$11.Logger.flush();
		}
		/**
		* Define that it must flush logs right after defining a custom logger.
		*/
		flushLogsOnOverride() {
			this.shouldFlushLogsOnOverride = true;
		}
		/**
		* Enables the usage of shutdown hooks. Will call the
		* `onApplicationShutdown` function of a provider if the
		* process receives a shutdown signal.
		*
		* @param {ShutdownSignal[]} [signals=[]] The system signals it should listen to
		*
		* @returns {this} The Nest application context instance
		*/
		enableShutdownHooks(signals = []) {
			var _this2 = this;
			if ((0, shared_utils_1$7.isEmpty)(signals)) signals = Object.keys(common_1$11.ShutdownSignal).map(function(key) {
				return common_1$11.ShutdownSignal[key];
			});
			else signals = Array.from(new Set(signals));
			signals = (0, iterare_1$3.iterate)(signals).map(function(signal) {
				return signal.toString().toUpperCase().trim();
			}).filter(function(signal) {
				return !_this2.activeShutdownSignals.includes(signal);
			}).toArray();
			this.listenToShutdownSignals(signals);
			return this;
		}
		dispose() {
			return (0, import_asyncToGenerator$9.default)(function* () {
				return Promise.resolve();
			})();
		}
		/**
		* Listens to shutdown signals by listening to
		* process events
		*
		* @param {string[]} signals The system signals it should listen to
		*/
		listenToShutdownSignals(signals) {
			var _this3 = this;
			let receivedSignal = false;
			const cleanup = function() {
				var _ref2$1 = (0, import_asyncToGenerator$9.default)(function* (signal) {
					try {
						if (receivedSignal) return;
						receivedSignal = true;
						yield _this3.initializationPromise;
						yield _this3.callDestroyHook();
						yield _this3.callBeforeShutdownHook(signal);
						yield _this3.dispose();
						yield _this3.callShutdownHook(signal);
						signals.forEach(function(sig) {
							return process.removeListener(sig, cleanup$1);
						});
						process.kill(process.pid, signal);
					} catch (err) {
						common_1$11.Logger.error(constants_1$8.MESSAGES.ERROR_DURING_SHUTDOWN, err === null || err === void 0 ? void 0 : err.stack, NestApplicationContext.name);
						process.exit(1);
					}
				});
				return function cleanup$1(_x3) {
					return _ref2$1.apply(this, arguments);
				};
			}();
			this.shutdownCleanupRef = cleanup;
			signals.forEach(function(signal) {
				_this3.activeShutdownSignals.push(signal);
				process.on(signal, cleanup);
			});
		}
		/**
		* Unsubscribes from shutdown signals (process events)
		*/
		unsubscribeFromProcessSignals() {
			var _this4 = this;
			if (!this.shutdownCleanupRef) return;
			this.activeShutdownSignals.forEach(function(signal) {
				process.removeListener(signal, _this4.shutdownCleanupRef);
			});
		}
		/**
		* Calls the `onModuleInit` function on the registered
		* modules and its children.
		*/
		callInitHook() {
			return (0, import_asyncToGenerator$9.default)(function* () {
				const modulesSortedByDistance = this.getModulesToTriggerHooksOn();
				for (const module$1 of modulesSortedByDistance) yield (0, hooks_1.callModuleInitHook)(module$1);
			})();
		}
		/**
		* Calls the `onModuleDestroy` function on the registered
		* modules and its children.
		*/
		callDestroyHook() {
			return (0, import_asyncToGenerator$9.default)(function* () {
				const modulesSortedByDistance = [...this.getModulesToTriggerHooksOn()].reverse();
				for (const module$1 of modulesSortedByDistance) yield (0, hooks_1.callModuleDestroyHook)(module$1);
			})();
		}
		/**
		* Calls the `onApplicationBootstrap` function on the registered
		* modules and its children.
		*/
		callBootstrapHook() {
			return (0, import_asyncToGenerator$9.default)(function* () {
				const modulesSortedByDistance = this.getModulesToTriggerHooksOn();
				for (const module$1 of modulesSortedByDistance) yield (0, hooks_1.callModuleBootstrapHook)(module$1);
			})();
		}
		/**
		* Calls the `onApplicationShutdown` function on the registered
		* modules and children.
		*/
		callShutdownHook(signal) {
			return (0, import_asyncToGenerator$9.default)(function* () {
				const modulesSortedByDistance = [...this.getModulesToTriggerHooksOn()].reverse();
				for (const module$1 of modulesSortedByDistance) yield (0, hooks_1.callAppShutdownHook)(module$1, signal);
			})();
		}
		/**
		* Calls the `beforeApplicationShutdown` function on the registered
		* modules and children.
		*/
		callBeforeShutdownHook(signal) {
			return (0, import_asyncToGenerator$9.default)(function* () {
				const modulesSortedByDistance = [...this.getModulesToTriggerHooksOn()].reverse();
				for (const module$1 of modulesSortedByDistance) yield (0, hooks_1.callBeforeAppShutdownHook)(module$1, signal);
			})();
		}
		assertNotInPreviewMode(methodName) {
			if (this.appOptions.preview) {
				const error = `Calling the "${methodName}" in the preview mode is not supported.`;
				this.logger.error(error);
				throw new Error(error);
			}
		}
		getModulesToTriggerHooksOn() {
			var _this$appOptions;
			if (this._moduleRefsForHooksByDistance) return this._moduleRefsForHooksByDistance;
			const modulesContainer = this.container.getModules();
			const compareFn = function(a, b) {
				return b.distance - a.distance;
			};
			const modulesSortedByDistance = Array.from(modulesContainer.values()).sort(compareFn);
			this._moduleRefsForHooksByDistance = ((_this$appOptions = this.appOptions) === null || _this$appOptions === void 0 ? void 0 : _this$appOptions.preview) ? modulesSortedByDistance.filter(function(moduleRef) {
				return moduleRef.initOnPreview;
			}) : modulesSortedByDistance;
			return this._moduleRefsForHooksByDistance;
		}
		printInPreviewModeWarning() {
			this.logger.warn("------------------------------------------------");
			this.logger.warn("Application is running in the PREVIEW mode!");
			this.logger.warn("Providers/controllers will not be instantiated.");
			this.logger.warn("------------------------------------------------");
		}
	};
	exports.NestApplicationContext = NestApplicationContext;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/messages.js
var require_messages = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/messages.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.INVALID_EXECUTION_CONTEXT = exports.VERSIONED_CONTROLLER_MAPPING_MESSAGE = exports.CONTROLLER_MAPPING_MESSAGE = exports.VERSIONED_ROUTE_MAPPED_MESSAGE = exports.ROUTE_MAPPED_MESSAGE = exports.MODULE_INIT_MESSAGE = void 0;
	const request_method_enum_1$1 = require_request_method_enum();
	const version_options_interface_1 = require_version_options_interface();
	const MODULE_INIT_MESSAGE = function(text, module$1) {
		return `${module$1} dependencies initialized`;
	};
	exports.MODULE_INIT_MESSAGE = MODULE_INIT_MESSAGE;
	const ROUTE_MAPPED_MESSAGE = function(path, method) {
		return `Mapped {${path}, ${request_method_enum_1$1.RequestMethod[method]}} route`;
	};
	exports.ROUTE_MAPPED_MESSAGE = ROUTE_MAPPED_MESSAGE;
	const VERSIONED_ROUTE_MAPPED_MESSAGE = function(path, method, version) {
		const controllerVersions = Array.isArray(version) ? version : [version];
		const versions = controllerVersions.map(function(version$1) {
			return version$1 === version_options_interface_1.VERSION_NEUTRAL ? "Neutral" : version$1;
		}).join(",");
		return `Mapped {${path}, ${request_method_enum_1$1.RequestMethod[method]}} (version: ${versions}) route`;
	};
	exports.VERSIONED_ROUTE_MAPPED_MESSAGE = VERSIONED_ROUTE_MAPPED_MESSAGE;
	const CONTROLLER_MAPPING_MESSAGE = function(name, path) {
		return `${name} {${path}}:`;
	};
	exports.CONTROLLER_MAPPING_MESSAGE = CONTROLLER_MAPPING_MESSAGE;
	const VERSIONED_CONTROLLER_MAPPING_MESSAGE = function(name, path, version) {
		const controllerVersions = Array.isArray(version) ? version : [version];
		const versions = controllerVersions.map(function(version$1) {
			return version$1 === version_options_interface_1.VERSION_NEUTRAL ? "Neutral" : version$1;
		}).join(",");
		return `${name} {${path}} (version: ${versions}):`;
	};
	exports.VERSIONED_CONTROLLER_MAPPING_MESSAGE = VERSIONED_CONTROLLER_MAPPING_MESSAGE;
	const INVALID_EXECUTION_CONTEXT = function(methodName, currentContext) {
		return `Calling ${methodName} is not allowed in this context. Your current execution context is "${currentContext}".`;
	};
	exports.INVALID_EXECUTION_CONTEXT = INVALID_EXECUTION_CONTEXT;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/unknown-request-mapping.exception.js
var require_unknown_request_mapping_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/unknown-request-mapping.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UnknownRequestMappingException = void 0;
	const runtime_exception_1$3 = require_runtime_exception();
	const messages_1$6 = require_messages$1();
	var UnknownRequestMappingException = class extends runtime_exception_1$3.RuntimeException {
		constructor(metatype) {
			super((0, messages_1$6.UNKNOWN_REQUEST_MAPPING)(metatype));
		}
	};
	exports.UnknownRequestMappingException = UnknownRequestMappingException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/router-method-factory.js
var require_router_method_factory = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/router-method-factory.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RouterMethodFactory = exports.REQUEST_METHOD_MAP = void 0;
	const request_method_enum_1 = require_request_method_enum();
	exports.REQUEST_METHOD_MAP = {
		[request_method_enum_1.RequestMethod.GET]: "get",
		[request_method_enum_1.RequestMethod.POST]: "post",
		[request_method_enum_1.RequestMethod.PUT]: "put",
		[request_method_enum_1.RequestMethod.DELETE]: "delete",
		[request_method_enum_1.RequestMethod.PATCH]: "patch",
		[request_method_enum_1.RequestMethod.ALL]: "all",
		[request_method_enum_1.RequestMethod.OPTIONS]: "options",
		[request_method_enum_1.RequestMethod.HEAD]: "head",
		[request_method_enum_1.RequestMethod.SEARCH]: "search",
		[request_method_enum_1.RequestMethod.PROPFIND]: "propfind",
		[request_method_enum_1.RequestMethod.PROPPATCH]: "proppatch",
		[request_method_enum_1.RequestMethod.MKCOL]: "mkcol",
		[request_method_enum_1.RequestMethod.COPY]: "copy",
		[request_method_enum_1.RequestMethod.MOVE]: "move",
		[request_method_enum_1.RequestMethod.LOCK]: "lock",
		[request_method_enum_1.RequestMethod.UNLOCK]: "unlock"
	};
	var RouterMethodFactory = class {
		get(target, requestMethod) {
			const methodName = exports.REQUEST_METHOD_MAP[requestMethod];
			const method = target[methodName];
			if (!method) return target.use;
			return method;
		}
	};
	exports.RouterMethodFactory = RouterMethodFactory;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/route-params-factory.js
var require_route_params_factory = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/route-params-factory.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RouteParamsFactory = void 0;
	const route_paramtypes_enum_1$1 = require_route_paramtypes_enum();
	var RouteParamsFactory = class {
		exchangeKeyForValue(key, data, { req, res, next }) {
			switch (key) {
				case route_paramtypes_enum_1$1.RouteParamtypes.NEXT: return next;
				case route_paramtypes_enum_1$1.RouteParamtypes.REQUEST: return req;
				case route_paramtypes_enum_1$1.RouteParamtypes.RESPONSE: return res;
				case route_paramtypes_enum_1$1.RouteParamtypes.BODY: return data && req.body ? req.body[data] : req.body;
				case route_paramtypes_enum_1$1.RouteParamtypes.RAW_BODY: return req.rawBody;
				case route_paramtypes_enum_1$1.RouteParamtypes.PARAM: return data ? req.params[data] : req.params;
				case route_paramtypes_enum_1$1.RouteParamtypes.HOST:
					const hosts = req.hosts || {};
					return data ? hosts[data] : hosts;
				case route_paramtypes_enum_1$1.RouteParamtypes.QUERY: return data ? req.query[data] : req.query;
				case route_paramtypes_enum_1$1.RouteParamtypes.HEADERS: return data ? req.headers[data.toLowerCase()] : req.headers;
				case route_paramtypes_enum_1$1.RouteParamtypes.SESSION: return req.session;
				case route_paramtypes_enum_1$1.RouteParamtypes.FILE: return req[data || "file"];
				case route_paramtypes_enum_1$1.RouteParamtypes.FILES: return req.files;
				case route_paramtypes_enum_1$1.RouteParamtypes.IP: return req.ip;
				default: return null;
			}
		}
	};
	exports.RouteParamsFactory = RouteParamsFactory;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/sse-stream.js
var require_sse_stream = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/sse-stream.js"(exports) {
	var import_objectSpread2$5 = __toESM(require_objectSpread2());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SseStream = void 0;
	const shared_utils_1$6 = require_shared_utils();
	const stream_1 = __require("stream");
	function toDataString(data) {
		if ((0, shared_utils_1$6.isObject)(data)) return toDataString(JSON.stringify(data));
		return data.split(/\r\n|\r|\n/).map(function(line) {
			return `data: ${line}\n`;
		}).join("");
	}
	/**
	* Adapted from https://raw.githubusercontent.com/EventSource/node-ssestream
	* Transforms "messages" to W3C event stream content.
	* See https://html.spec.whatwg.org/multipage/server-sent-events.html
	* A message is an object with one or more of the following properties:
	* - data (String or object, which gets turned into JSON)
	* - type
	* - id
	* - retry
	*
	* If constructed with a HTTP Request, it will optimise the socket for streaming.
	* If this stream is piped to an HTTP Response, it will set appropriate headers.
	*/
	var SseStream = class extends stream_1.Transform {
		constructor(req) {
			super({ objectMode: true });
			this.lastEventId = null;
			if (req && req.socket) {
				req.socket.setKeepAlive(true);
				req.socket.setNoDelay(true);
				req.socket.setTimeout(0);
			}
		}
		pipe(destination, options) {
			if (destination.writeHead) {
				var _destination$flushHea;
				destination.writeHead(200, (0, import_objectSpread2$5.default)((0, import_objectSpread2$5.default)({}, options === null || options === void 0 ? void 0 : options.additionalHeaders), {}, {
					"Content-Type": "text/event-stream",
					Connection: "keep-alive",
					"Cache-Control": "private, no-cache, no-store, must-revalidate, max-age=0, no-transform",
					Pragma: "no-cache",
					Expire: "0",
					"X-Accel-Buffering": "no"
				}));
				(_destination$flushHea = destination.flushHeaders) === null || _destination$flushHea === void 0 || _destination$flushHea.call(destination);
			}
			destination.write("\n");
			return super.pipe(destination, options);
		}
		_transform(message, encoding, callback) {
			let data = message.type ? `event: ${message.type}\n` : "";
			data += message.id ? `id: ${message.id}\n` : "";
			data += message.retry ? `retry: ${message.retry}\n` : "";
			data += message.data ? toDataString(message.data) : "";
			data += "\n";
			this.push(data);
			callback();
		}
		/**
		* Calls `.write` but handles the drain if needed
		*/
		writeMessage(message, cb) {
			if (!message.id) {
				this.lastEventId++;
				message.id = this.lastEventId.toString();
			}
			if (!this.write(message, "utf-8")) this.once("drain", cb);
			else process.nextTick(cb);
		}
	};
	exports.SseStream = SseStream;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-response-controller.js
var require_router_response_controller = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-response-controller.js"(exports) {
	var import_asyncToGenerator$8 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RouterResponseController = void 0;
	const common_1$10 = require_common();
	const shared_utils_1$5 = require_shared_utils();
	const rxjs_1 = require_cjs();
	const operators_1 = require_operators();
	const sse_stream_1 = require_sse_stream();
	var RouterResponseController = class RouterResponseController {
		constructor(applicationRef) {
			this.applicationRef = applicationRef;
			this.logger = new common_1$10.Logger(RouterResponseController.name);
		}
		apply(result, response, httpStatusCode) {
			return (0, import_asyncToGenerator$8.default)(function* () {
				return this.applicationRef.reply(response, result, httpStatusCode);
			})();
		}
		redirect(resultOrDeferred, response, redirectResponse) {
			return (0, import_asyncToGenerator$8.default)(function* () {
				const result = yield this.transformToResult(resultOrDeferred);
				const statusCode = result && result.statusCode ? result.statusCode : redirectResponse.statusCode ? redirectResponse.statusCode : common_1$10.HttpStatus.FOUND;
				const url = result && result.url ? result.url : redirectResponse.url;
				this.applicationRef.redirect(response, statusCode, url);
			})();
		}
		render(resultOrDeferred, response, template) {
			return (0, import_asyncToGenerator$8.default)(function* () {
				const result = yield this.transformToResult(resultOrDeferred);
				return this.applicationRef.render(response, template, result);
			})();
		}
		transformToResult(resultOrDeferred) {
			return (0, import_asyncToGenerator$8.default)(function* () {
				if ((0, rxjs_1.isObservable)(resultOrDeferred)) return (0, rxjs_1.lastValueFrom)(resultOrDeferred);
				return resultOrDeferred;
			})();
		}
		getStatusByMethod(requestMethod) {
			switch (requestMethod) {
				case common_1$10.RequestMethod.POST: return common_1$10.HttpStatus.CREATED;
				default: return common_1$10.HttpStatus.OK;
			}
		}
		setHeaders(response, headers) {
			var _this = this;
			headers.forEach(function({ name, value }) {
				return _this.applicationRef.setHeader(response, name, typeof value === "function" ? value() : value);
			});
		}
		setStatus(response, statusCode) {
			this.applicationRef.status(response, statusCode);
		}
		sse(result, response, request, options) {
			var _this2 = this;
			if (response.writableEnded) return;
			this.assertObservable(result);
			const stream = new sse_stream_1.SseStream(request);
			stream.pipe(response, options);
			const subscription = result.pipe((0, operators_1.map)(function(message) {
				if ((0, shared_utils_1$5.isObject)(message)) return message;
				return { data: message };
			}), (0, operators_1.concatMap)(function(message) {
				return new Promise(function(resolve) {
					return stream.writeMessage(message, function() {
						return resolve();
					});
				});
			}), (0, operators_1.catchError)(function(err) {
				const data = err instanceof Error ? err.message : err;
				stream.writeMessage({
					type: "error",
					data
				}, function(writeError) {
					if (writeError) _this2.logger.error(writeError);
				});
				return rxjs_1.EMPTY;
			})).subscribe({ complete: function() {
				response.end();
			} });
			request.on("close", function() {
				subscription.unsubscribe();
				if (!stream.writableEnded) stream.end();
			});
		}
		assertObservable(value) {
			if (!(0, rxjs_1.isObservable)(value)) throw new ReferenceError("You must return an Observable stream to use Server-Sent Events (SSE).");
		}
	};
	exports.RouterResponseController = RouterResponseController;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-execution-context.js
var require_router_execution_context = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-execution-context.js"(exports) {
	var import_asyncToGenerator$7 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RouterExecutionContext = void 0;
	const common_1$9 = require_common();
	const constants_1$7 = require_constants();
	const route_paramtypes_enum_1 = require_route_paramtypes_enum();
	const shared_utils_1$4 = require_shared_utils();
	const guards_1$1 = require_guards();
	const context_utils_1 = require_context_utils();
	const handler_metadata_storage_1 = require_handler_metadata_storage();
	const constants_2$2 = require_constants$3();
	const router_response_controller_1 = require_router_response_controller();
	var RouterExecutionContext = class {
		constructor(paramsFactory, pipesContextCreator, pipesConsumer, guardsContextCreator, guardsConsumer, interceptorsContextCreator, interceptorsConsumer, applicationRef) {
			this.paramsFactory = paramsFactory;
			this.pipesContextCreator = pipesContextCreator;
			this.pipesConsumer = pipesConsumer;
			this.guardsContextCreator = guardsContextCreator;
			this.guardsConsumer = guardsConsumer;
			this.interceptorsContextCreator = interceptorsContextCreator;
			this.interceptorsConsumer = interceptorsConsumer;
			this.applicationRef = applicationRef;
			this.handlerMetadataStorage = new handler_metadata_storage_1.HandlerMetadataStorage();
			this.contextUtils = new context_utils_1.ContextUtils();
			this.responseController = new router_response_controller_1.RouterResponseController(applicationRef);
		}
		create(instance, callback, methodName, moduleKey, requestMethod, contextId = constants_2$2.STATIC_CONTEXT, inquirerId) {
			var _this = this;
			const contextType = "http";
			const { argsLength, fnHandleResponse, paramtypes, getParamsMetadata, httpStatusCode, responseHeaders, hasCustomHeaders } = this.getMetadata(instance, callback, methodName, moduleKey, requestMethod, contextType);
			const paramsOptions = this.contextUtils.mergeParamsMetatypes(getParamsMetadata(moduleKey, contextId, inquirerId), paramtypes);
			const pipes = this.pipesContextCreator.create(instance, callback, moduleKey, contextId, inquirerId);
			const guards = this.guardsContextCreator.create(instance, callback, moduleKey, contextId, inquirerId);
			const interceptors = this.interceptorsContextCreator.create(instance, callback, moduleKey, contextId, inquirerId);
			const fnCanActivate = this.createGuardsFn(guards, instance, callback, contextType);
			const fnApplyPipes = this.createPipesFn(pipes, paramsOptions);
			const handler = function(args, req, res, next) {
				return (0, import_asyncToGenerator$7.default)(function* () {
					fnApplyPipes && (yield fnApplyPipes(args, req, res, next));
					return callback.apply(instance, args);
				});
			};
			return function() {
				var _ref$1 = (0, import_asyncToGenerator$7.default)(function* (req, res, next) {
					const args = _this.contextUtils.createNullArray(argsLength);
					fnCanActivate && (yield fnCanActivate([
						req,
						res,
						next
					]));
					_this.responseController.setStatus(res, httpStatusCode);
					hasCustomHeaders && _this.responseController.setHeaders(res, responseHeaders);
					const result = yield _this.interceptorsConsumer.intercept(interceptors, [
						req,
						res,
						next
					], instance, callback, handler(args, req, res, next), contextType);
					yield fnHandleResponse(result, res, req);
				});
				return function(_x, _x2, _x3) {
					return _ref$1.apply(this, arguments);
				};
			}();
		}
		getMetadata(instance, callback, methodName, moduleKey, requestMethod, contextType) {
			var _this2 = this;
			const cacheMetadata = this.handlerMetadataStorage.get(instance, methodName);
			if (cacheMetadata) return cacheMetadata;
			const metadata = this.contextUtils.reflectCallbackMetadata(instance, methodName, constants_1$7.ROUTE_ARGS_METADATA) || {};
			const keys = Object.keys(metadata);
			const argsLength = this.contextUtils.getArgumentsLength(keys, metadata);
			const paramtypes = this.contextUtils.reflectCallbackParamtypes(instance, methodName);
			const contextFactory = this.contextUtils.getContextFactory(contextType, instance, callback);
			const getParamsMetadata = function(moduleKey$1, contextId = constants_2$2.STATIC_CONTEXT, inquirerId) {
				return _this2.exchangeKeysForValues(keys, metadata, moduleKey$1, contextId, inquirerId, contextFactory);
			};
			const paramsMetadata = getParamsMetadata(moduleKey);
			const isResponseHandled = this.isResponseHandled(instance, methodName, paramsMetadata);
			const httpRedirectResponse = this.reflectRedirect(callback);
			const fnHandleResponse = this.createHandleResponseFn(callback, isResponseHandled, httpRedirectResponse);
			const httpCode = this.reflectHttpStatusCode(callback);
			const httpStatusCode = httpCode ? httpCode : this.responseController.getStatusByMethod(requestMethod);
			const responseHeaders = this.reflectResponseHeaders(callback);
			const hasCustomHeaders = !(0, shared_utils_1$4.isEmpty)(responseHeaders);
			const handlerMetadata = {
				argsLength,
				fnHandleResponse,
				paramtypes,
				getParamsMetadata,
				httpStatusCode,
				hasCustomHeaders,
				responseHeaders
			};
			this.handlerMetadataStorage.set(instance, methodName, handlerMetadata);
			return handlerMetadata;
		}
		reflectRedirect(callback) {
			return Reflect.getMetadata(constants_1$7.REDIRECT_METADATA, callback);
		}
		reflectHttpStatusCode(callback) {
			return Reflect.getMetadata(constants_1$7.HTTP_CODE_METADATA, callback);
		}
		reflectRenderTemplate(callback) {
			return Reflect.getMetadata(constants_1$7.RENDER_METADATA, callback);
		}
		reflectResponseHeaders(callback) {
			return Reflect.getMetadata(constants_1$7.HEADERS_METADATA, callback) || [];
		}
		reflectSse(callback) {
			return Reflect.getMetadata(constants_1$7.SSE_METADATA, callback);
		}
		exchangeKeysForValues(keys, metadata, moduleContext, contextId = constants_2$2.STATIC_CONTEXT, inquirerId, contextFactory) {
			var _this3 = this;
			this.pipesContextCreator.setModuleContext(moduleContext);
			return keys.map(function(key) {
				const { index, data, pipes: pipesCollection } = metadata[key];
				const pipes = _this3.pipesContextCreator.createConcreteContext(pipesCollection, contextId, inquirerId);
				const type = _this3.contextUtils.mapParamType(key);
				if (key.includes(constants_1$7.CUSTOM_ROUTE_ARGS_METADATA)) {
					const { factory } = metadata[key];
					const customExtractValue = _this3.contextUtils.getCustomFactory(factory, data, contextFactory);
					return {
						index,
						extractValue: customExtractValue,
						type,
						data,
						pipes
					};
				}
				const numericType = Number(type);
				const extractValue = function(req, res, next) {
					return _this3.paramsFactory.exchangeKeyForValue(numericType, data, {
						req,
						res,
						next
					});
				};
				return {
					index,
					extractValue,
					type: numericType,
					data,
					pipes
				};
			});
		}
		getParamValue(value, { metatype, type, data }, pipes) {
			return (0, import_asyncToGenerator$7.default)(function* () {
				if (!(0, shared_utils_1$4.isEmpty)(pipes)) return this.pipesConsumer.apply(value, {
					metatype,
					type,
					data
				}, pipes);
				return value;
			})();
		}
		isPipeable(type) {
			return type === route_paramtypes_enum_1.RouteParamtypes.BODY || type === route_paramtypes_enum_1.RouteParamtypes.RAW_BODY || type === route_paramtypes_enum_1.RouteParamtypes.QUERY || type === route_paramtypes_enum_1.RouteParamtypes.PARAM || type === route_paramtypes_enum_1.RouteParamtypes.FILE || type === route_paramtypes_enum_1.RouteParamtypes.FILES || (0, shared_utils_1$4.isString)(type);
		}
		createGuardsFn(guards, instance, callback, contextType) {
			var _this4 = this;
			const canActivateFn = function() {
				var _ref2$1 = (0, import_asyncToGenerator$7.default)(function* (args) {
					const canActivate = yield _this4.guardsConsumer.tryActivate(guards, args, instance, callback, contextType);
					if (!canActivate) throw new common_1$9.ForbiddenException(guards_1$1.FORBIDDEN_MESSAGE);
				});
				return function canActivateFn$1(_x4) {
					return _ref2$1.apply(this, arguments);
				};
			}();
			return guards.length ? canActivateFn : null;
		}
		createPipesFn(pipes, paramsOptions) {
			var _this5 = this;
			const pipesFn = function() {
				var _ref4 = (0, import_asyncToGenerator$7.default)(function* (args, req, res, next) {
					const resolveParamValue = function() {
						var _ref3$1 = (0, import_asyncToGenerator$7.default)(function* (param) {
							const { index, extractValue, type, data, metatype, pipes: paramPipes } = param;
							const value = extractValue(req, res, next);
							args[index] = _this5.isPipeable(type) ? yield _this5.getParamValue(value, {
								metatype,
								type,
								data
							}, pipes.concat(paramPipes)) : value;
						});
						return function resolveParamValue$1(_x5) {
							return _ref3$1.apply(this, arguments);
						};
					}();
					yield Promise.all(paramsOptions.map(resolveParamValue));
				});
				return function pipesFn$1(_x6, _x7, _x8, _x9) {
					return _ref4.apply(this, arguments);
				};
			}();
			return paramsOptions.length ? pipesFn : null;
		}
		createHandleResponseFn(callback, isResponseHandled, redirectResponse, httpStatusCode) {
			var _this6 = this;
			const renderTemplate = this.reflectRenderTemplate(callback);
			if (renderTemplate) return function() {
				var _ref5 = (0, import_asyncToGenerator$7.default)(function* (result, res) {
					return yield _this6.responseController.render(result, res, renderTemplate);
				});
				return function(_x10, _x11) {
					return _ref5.apply(this, arguments);
				};
			}();
			if (redirectResponse && (0, shared_utils_1$4.isString)(redirectResponse.url)) return function() {
				var _ref6 = (0, import_asyncToGenerator$7.default)(function* (result, res) {
					yield _this6.responseController.redirect(result, res, redirectResponse);
				});
				return function(_x12, _x13) {
					return _ref6.apply(this, arguments);
				};
			}();
			const isSseHandler = !!this.reflectSse(callback);
			if (isSseHandler) return function(result, res, req) {
				var _res$getHeaders;
				_this6.responseController.sse(result, res.raw || res, req.raw || req, { additionalHeaders: (_res$getHeaders = res.getHeaders) === null || _res$getHeaders === void 0 ? void 0 : _res$getHeaders.call(res) });
			};
			return function() {
				var _ref7 = (0, import_asyncToGenerator$7.default)(function* (result, res) {
					result = yield _this6.responseController.transformToResult(result);
					!isResponseHandled && (yield _this6.responseController.apply(result, res, httpStatusCode));
					return res;
				});
				return function(_x14, _x15) {
					return _ref7.apply(this, arguments);
				};
			}();
		}
		isResponseHandled(instance, methodName, paramsMetadata) {
			const hasResponseOrNextDecorator = paramsMetadata.some(function({ type }) {
				return type === route_paramtypes_enum_1.RouteParamtypes.RESPONSE || type === route_paramtypes_enum_1.RouteParamtypes.NEXT;
			});
			const isPassthroughEnabled = this.contextUtils.reflectPassthrough(instance, methodName);
			return hasResponseOrNextDecorator && !isPassthroughEnabled;
		}
	};
	exports.RouterExecutionContext = RouterExecutionContext;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-explorer.js
var require_router_explorer = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/router-explorer.js"(exports) {
	var import_objectSpread2$4 = __toESM(require_objectSpread2());
	var import_asyncToGenerator$6 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RouterExplorer = void 0;
	const constants_1$6 = require_constants();
	const enums_1 = require_enums();
	const exceptions_1 = require_exceptions();
	const logger_service_1$4 = require_logger_service();
	const shared_utils_1$3 = require_shared_utils();
	const path_to_regexp_1 = require_dist$1();
	const unknown_request_mapping_exception_1 = require_unknown_request_mapping_exception();
	const guards_1 = require_guards();
	const context_id_factory_1 = require_context_id_factory();
	const execution_context_host_1 = require_execution_context_host();
	const messages_1$5 = require_messages();
	const router_method_factory_1 = require_router_method_factory();
	const constants_2$1 = require_constants$3();
	const interceptors_1 = require_interceptors();
	const pipes_1 = require_pipes();
	const paths_explorer_1 = require_paths_explorer();
	const request_constants_1$1 = require_request_constants();
	const route_params_factory_1 = require_route_params_factory();
	const router_execution_context_1 = require_router_execution_context();
	var RouterExplorer = class RouterExplorer {
		constructor(metadataScanner, container, injector, routerProxy, exceptionsFilter, config, routePathFactory, graphInspector) {
			this.container = container;
			this.injector = injector;
			this.routerProxy = routerProxy;
			this.exceptionsFilter = exceptionsFilter;
			this.routePathFactory = routePathFactory;
			this.graphInspector = graphInspector;
			this.routerMethodFactory = new router_method_factory_1.RouterMethodFactory();
			this.logger = new logger_service_1$4.Logger(RouterExplorer.name, { timestamp: true });
			this.exceptionFiltersCache = /* @__PURE__ */ new WeakMap();
			this.pathsExplorer = new paths_explorer_1.PathsExplorer(metadataScanner);
			const routeParamsFactory = new route_params_factory_1.RouteParamsFactory();
			const pipesContextCreator = new pipes_1.PipesContextCreator(container, config);
			const pipesConsumer = new pipes_1.PipesConsumer();
			const guardsContextCreator = new guards_1.GuardsContextCreator(container, config);
			const guardsConsumer = new guards_1.GuardsConsumer();
			const interceptorsContextCreator = new interceptors_1.InterceptorsContextCreator(container, config);
			const interceptorsConsumer = new interceptors_1.InterceptorsConsumer();
			this.executionContextCreator = new router_execution_context_1.RouterExecutionContext(routeParamsFactory, pipesContextCreator, pipesConsumer, guardsContextCreator, guardsConsumer, interceptorsContextCreator, interceptorsConsumer, container.getHttpAdapterRef());
		}
		explore(instanceWrapper, moduleKey, applicationRef, host, routePathMetadata) {
			const { instance } = instanceWrapper;
			const routerPaths = this.pathsExplorer.scanForPaths(instance);
			this.applyPathsToRouterProxy(applicationRef, routerPaths, instanceWrapper, moduleKey, routePathMetadata, host);
		}
		extractRouterPath(metatype) {
			const path = Reflect.getMetadata(constants_1$6.PATH_METADATA, metatype);
			if ((0, shared_utils_1$3.isUndefined)(path)) throw new unknown_request_mapping_exception_1.UnknownRequestMappingException(metatype);
			if (Array.isArray(path)) return path.map(function(p) {
				return (0, shared_utils_1$3.addLeadingSlash)(p);
			});
			return [(0, shared_utils_1$3.addLeadingSlash)(path)];
		}
		applyPathsToRouterProxy(router, routeDefinitions, instanceWrapper, moduleKey, routePathMetadata, host) {
			var _this = this;
			(routeDefinitions || []).forEach(function(routeDefinition) {
				const { version: methodVersion } = routeDefinition;
				routePathMetadata.methodVersion = methodVersion;
				_this.applyCallbackToRouter(router, routeDefinition, instanceWrapper, moduleKey, routePathMetadata, host);
			});
		}
		applyCallbackToRouter(router, routeDefinition, instanceWrapper, moduleKey, routePathMetadata, host) {
			var _this2 = this;
			const { path: paths, requestMethod, targetCallback, methodName } = routeDefinition;
			const { instance } = instanceWrapper;
			const routerMethodRef = this.routerMethodFactory.get(router, requestMethod).bind(router);
			const isRequestScoped = !instanceWrapper.isDependencyTreeStatic();
			const proxy = isRequestScoped ? this.createRequestScopedHandler(instanceWrapper, requestMethod, this.container.getModuleByKey(moduleKey), moduleKey, methodName) : this.createCallbackProxy(instance, targetCallback, methodName, moduleKey, requestMethod);
			const isVersioned = (routePathMetadata.methodVersion || routePathMetadata.controllerVersion) && routePathMetadata.versioningOptions;
			let routeHandler = this.applyHostFilter(host, proxy);
			paths.forEach(function(path) {
				if (isVersioned && routePathMetadata.versioningOptions.type !== enums_1.VersioningType.URI) routeHandler = _this2.applyVersionFilter(router, routePathMetadata, routeHandler);
				routePathMetadata.methodPath = path;
				const pathsToRegister = _this2.routePathFactory.create(routePathMetadata, requestMethod);
				pathsToRegister.forEach(function(path$1) {
					const entrypointDefinition = {
						type: "http-endpoint",
						methodName,
						className: instanceWrapper.name,
						classNodeId: instanceWrapper.id,
						metadata: {
							key: path$1,
							path: path$1,
							requestMethod: enums_1.RequestMethod[requestMethod],
							methodVersion: routePathMetadata.methodVersion,
							controllerVersion: routePathMetadata.controllerVersion
						}
					};
					_this2.copyMetadataToCallback(targetCallback, routeHandler);
					const normalizedPath = router.normalizePath ? router.normalizePath(path$1) : path$1;
					routerMethodRef(normalizedPath, routeHandler);
					_this2.graphInspector.insertEntrypointDefinition(entrypointDefinition, instanceWrapper.id);
				});
				const pathsToLog = _this2.routePathFactory.create((0, import_objectSpread2$4.default)((0, import_objectSpread2$4.default)({}, routePathMetadata), {}, { versioningOptions: void 0 }), requestMethod);
				pathsToLog.forEach(function(path$1) {
					if (isVersioned) {
						const version = _this2.routePathFactory.getVersion(routePathMetadata);
						_this2.logger.log((0, messages_1$5.VERSIONED_ROUTE_MAPPED_MESSAGE)(path$1, requestMethod, version));
					} else _this2.logger.log((0, messages_1$5.ROUTE_MAPPED_MESSAGE)(path$1, requestMethod));
				});
			});
		}
		applyHostFilter(host, handler) {
			var _this3 = this;
			if (!host) return handler;
			const httpAdapterRef = this.container.getHttpAdapterRef();
			const hosts = Array.isArray(host) ? host : [host];
			const hostRegExps = hosts.map(function(host$1) {
				if (typeof host$1 === "string") try {
					return (0, path_to_regexp_1.pathToRegexp)(host$1);
				} catch (e) {
					if (e instanceof TypeError) _this3.logger.error(`Unsupported host "${host$1}" syntax. In past releases, ?, *, and + were used to denote optional or repeating path parameters. The latest version of "path-to-regexp" now requires the use of named parameters. For example, instead of using a route like /users/* to capture all routes starting with "/users", you should use /users/*path. Please see the migration guide for more information.`);
					throw e;
				}
				return {
					regexp: host$1,
					keys: []
				};
			});
			const unsupportedFilteringErrorMessage = Array.isArray(host) ? `HTTP adapter does not support filtering on hosts: ["${host.join("\", \"")}"]` : `HTTP adapter does not support filtering on host: "${host}"`;
			return function(req, res, next) {
				req.hosts = {};
				const hostname = httpAdapterRef.getRequestHostname(req) || "";
				for (const exp of hostRegExps) {
					const match$1 = hostname.match(exp.regexp);
					if (match$1) {
						if (exp.keys.length > 0) exp.keys.forEach(function(key, i) {
							return req.hosts[key.name] = match$1[i + 1];
						});
						else if (exp.regexp && match$1.groups) for (const groupName in match$1.groups) req.hosts[groupName] = match$1.groups[groupName];
						return handler(req, res, next);
					}
				}
				if (!next) throw new exceptions_1.InternalServerErrorException(unsupportedFilteringErrorMessage);
				return next();
			};
		}
		applyVersionFilter(router, routePathMetadata, handler) {
			const version = this.routePathFactory.getVersion(routePathMetadata);
			return router.applyVersionFilter(handler, version, routePathMetadata.versioningOptions);
		}
		createCallbackProxy(instance, callback, methodName, moduleRef, requestMethod, contextId = constants_2$1.STATIC_CONTEXT, inquirerId) {
			const executionContext = this.executionContextCreator.create(instance, callback, methodName, moduleRef, requestMethod, contextId, inquirerId);
			const exceptionFilter = this.exceptionsFilter.create(instance, callback, moduleRef, contextId, inquirerId);
			return this.routerProxy.createProxy(executionContext, exceptionFilter);
		}
		createRequestScopedHandler(instanceWrapper, requestMethod, moduleRef, moduleKey, methodName) {
			var _this4 = this;
			const { instance } = instanceWrapper;
			const collection = moduleRef.controllers;
			const isTreeDurable = instanceWrapper.isDependencyTreeDurable();
			return function() {
				var _ref$1 = (0, import_asyncToGenerator$6.default)(function* (req, res, next) {
					try {
						const contextId = _this4.getContextId(req, isTreeDurable);
						const contextInstance = yield _this4.injector.loadPerContext(instance, moduleRef, collection, contextId);
						yield _this4.createCallbackProxy(contextInstance, contextInstance[methodName], methodName, moduleKey, requestMethod, contextId, instanceWrapper.id)(req, res, next);
					} catch (err) {
						let exceptionFilter = _this4.exceptionFiltersCache.get(instance[methodName]);
						if (!exceptionFilter) {
							exceptionFilter = _this4.exceptionsFilter.create(instance, instance[methodName], moduleKey);
							_this4.exceptionFiltersCache.set(instance[methodName], exceptionFilter);
						}
						const host = new execution_context_host_1.ExecutionContextHost([
							req,
							res,
							next
						]);
						exceptionFilter.next(err, host);
					}
				});
				return function(_x, _x2, _x3) {
					return _ref$1.apply(this, arguments);
				};
			}();
		}
		getContextId(request, isTreeDurable) {
			const contextId = context_id_factory_1.ContextIdFactory.getByRequest(request);
			if (!request[request_constants_1$1.REQUEST_CONTEXT_ID]) {
				Object.defineProperty(request, request_constants_1$1.REQUEST_CONTEXT_ID, {
					value: contextId,
					enumerable: false,
					writable: false,
					configurable: false
				});
				const requestProviderValue = isTreeDurable ? contextId.payload : Object.assign(request, contextId.payload);
				this.container.registerRequestProvider(requestProviderValue, contextId);
			}
			return contextId;
		}
		copyMetadataToCallback(originalCallback, targetCallback) {
			for (const key of Reflect.getMetadataKeys(originalCallback)) Reflect.defineMetadata(key, Reflect.getMetadata(key, originalCallback), targetCallback);
		}
	};
	exports.RouterExplorer = RouterExplorer;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/routes-resolver.js
var require_routes_resolver = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/routes-resolver.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RoutesResolver = void 0;
	const common_1$8 = require_common();
	const constants_1$5 = require_constants();
	const logger_service_1$3 = require_logger_service();
	const messages_1$4 = require_messages();
	const metadata_scanner_1$2 = require_metadata_scanner();
	const route_path_factory_1 = require_route_path_factory();
	const router_exception_filters_1 = require_router_exception_filters();
	const router_explorer_1$1 = require_router_explorer();
	const router_proxy_1 = require_router_proxy();
	var RoutesResolver = class RoutesResolver {
		constructor(container, applicationConfig, injector, graphInspector) {
			this.container = container;
			this.applicationConfig = applicationConfig;
			this.injector = injector;
			this.logger = new logger_service_1$3.Logger(RoutesResolver.name, { timestamp: true });
			this.routerProxy = new router_proxy_1.RouterProxy();
			const httpAdapterRef = container.getHttpAdapterRef();
			this.routerExceptionsFilter = new router_exception_filters_1.RouterExceptionFilters(container, applicationConfig, httpAdapterRef);
			this.routePathFactory = new route_path_factory_1.RoutePathFactory(this.applicationConfig);
			const metadataScanner = new metadata_scanner_1$2.MetadataScanner();
			this.routerExplorer = new router_explorer_1$1.RouterExplorer(metadataScanner, this.container, this.injector, this.routerProxy, this.routerExceptionsFilter, this.applicationConfig, this.routePathFactory, graphInspector);
		}
		resolve(applicationRef, globalPrefix) {
			var _this = this;
			const modules = this.container.getModules();
			modules.forEach(function({ controllers, metatype }, moduleName) {
				const modulePath = _this.getModulePathMetadata(metatype);
				_this.registerRouters(controllers, moduleName, globalPrefix, modulePath, applicationRef);
			});
		}
		registerRouters(routes, moduleName, globalPrefix, modulePath, applicationRef) {
			var _this2 = this;
			routes.forEach(function(instanceWrapper) {
				const { metatype } = instanceWrapper;
				const host = _this2.getHostMetadata(metatype);
				const routerPaths = _this2.routerExplorer.extractRouterPath(metatype);
				const controllerVersion = _this2.getVersionMetadata(metatype);
				const controllerName = metatype.name;
				routerPaths.forEach(function(path) {
					const pathsToLog = _this2.routePathFactory.create({
						ctrlPath: path,
						modulePath,
						globalPrefix
					});
					if (!controllerVersion) pathsToLog.forEach(function(path$1) {
						const logMessage = (0, messages_1$4.CONTROLLER_MAPPING_MESSAGE)(controllerName, path$1);
						_this2.logger.log(logMessage);
					});
					else pathsToLog.forEach(function(path$1) {
						const logMessage = (0, messages_1$4.VERSIONED_CONTROLLER_MAPPING_MESSAGE)(controllerName, path$1, controllerVersion);
						_this2.logger.log(logMessage);
					});
					const versioningOptions = _this2.applicationConfig.getVersioning();
					const routePathMetadata = {
						ctrlPath: path,
						modulePath,
						globalPrefix,
						controllerVersion,
						versioningOptions
					};
					_this2.routerExplorer.explore(instanceWrapper, moduleName, applicationRef, host, routePathMetadata);
				});
			});
		}
		registerNotFoundHandler() {
			const applicationRef = this.container.getHttpAdapterRef();
			const callback = function(req, res) {
				const method = applicationRef.getRequestMethod(req);
				const url = applicationRef.getRequestUrl(req);
				throw new common_1$8.NotFoundException(`Cannot ${method} ${url}`);
			};
			const handler = this.routerExceptionsFilter.create({}, callback, void 0);
			const proxy = this.routerProxy.createProxy(callback, handler);
			applicationRef.setNotFoundHandler && applicationRef.setNotFoundHandler(proxy, this.applicationConfig.getGlobalPrefix());
		}
		registerExceptionHandler() {
			var _this3 = this;
			const callback = function(err, req, res, next) {
				throw _this3.mapExternalException(err);
			};
			const handler = this.routerExceptionsFilter.create({}, callback, void 0);
			const proxy = this.routerProxy.createExceptionLayerProxy(callback, handler);
			const applicationRef = this.container.getHttpAdapterRef();
			applicationRef.setErrorHandler && applicationRef.setErrorHandler(proxy, this.applicationConfig.getGlobalPrefix());
		}
		mapExternalException(err) {
			switch (true) {
				case err instanceof SyntaxError || err instanceof URIError: return new common_1$8.BadRequestException(err.message);
				case this.isHttpFastifyError(err): return new common_1$8.HttpException(err.message, err.statusCode);
				default: return err;
			}
		}
		isHttpFastifyError(error) {
			return error.statusCode !== void 0 && error instanceof Error && error.name === "FastifyError";
		}
		getModulePathMetadata(metatype) {
			const modulesContainer = this.container.getModules();
			const modulePath = Reflect.getMetadata(constants_1$5.MODULE_PATH + modulesContainer.applicationId, metatype);
			return modulePath !== null && modulePath !== void 0 ? modulePath : Reflect.getMetadata(constants_1$5.MODULE_PATH, metatype);
		}
		getHostMetadata(metatype) {
			return Reflect.getMetadata(constants_1$5.HOST_METADATA, metatype);
		}
		getVersionMetadata(metatype) {
			const versioningConfig = this.applicationConfig.getVersioning();
			if (versioningConfig) {
				var _Reflect$getMetadata;
				return (_Reflect$getMetadata = Reflect.getMetadata(constants_1$5.VERSION_METADATA, metatype)) !== null && _Reflect$getMetadata !== void 0 ? _Reflect$getMetadata : versioningConfig.defaultVersion;
			}
		}
	};
	exports.RoutesResolver = RoutesResolver;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/nest-application.js
var require_nest_application = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/nest-application.js"(exports) {
	var import_asyncToGenerator$5 = __toESM(require_asyncToGenerator());
	var import_objectSpread2$3 = __toESM(require_objectSpread2());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NestApplication = void 0;
	const common_1$7 = require_common();
	const logger_service_1$2 = require_logger_service();
	const load_package_util_1$1 = require_load_package_util();
	const shared_utils_1$2 = require_shared_utils();
	const iterare_1$2 = require_lib();
	const os_1 = __require("os");
	const application_config_1$3 = require_application_config();
	const constants_1$4 = require_constants$4();
	const optional_require_1 = require_optional_require();
	const injector_1$3 = require_injector$1();
	const container_1$1 = require_container();
	const middleware_module_1 = require_middleware_module();
	const utils_1 = require_utils();
	const nest_application_context_1$1 = require_nest_application_context();
	const routes_resolver_1$1 = require_routes_resolver();
	const { SocketModule } = (0, optional_require_1.optionalRequire)("@nestjs/websockets/socket-module", function() {
		return __require("@nestjs/websockets/socket-module");
	});
	const { MicroservicesModule } = (0, optional_require_1.optionalRequire)("@nestjs/microservices/microservices-module", function() {
		return __require("@nestjs/microservices/microservices-module");
	});
	/**
	* @publicApi
	*/
	var NestApplication = class NestApplication extends nest_application_context_1$1.NestApplicationContext {
		constructor(container, httpAdapter, config, graphInspector, appOptions = {}) {
			super(container, appOptions);
			this.httpAdapter = httpAdapter;
			this.config = config;
			this.graphInspector = graphInspector;
			this.logger = new logger_service_1$2.Logger(NestApplication.name, { timestamp: true });
			this.middlewareContainer = new container_1$1.MiddlewareContainer(this.container);
			this.microservicesModule = MicroservicesModule && new MicroservicesModule();
			this.socketModule = SocketModule && new SocketModule();
			this.microservices = [];
			this.isListening = false;
			this.selectContextModule();
			this.registerHttpServer();
			this.injector = new injector_1$3.Injector({ preview: this.appOptions.preview });
			this.middlewareModule = new middleware_module_1.MiddlewareModule();
			this.routesResolver = new routes_resolver_1$1.RoutesResolver(this.container, this.config, this.injector, this.graphInspector);
		}
		dispose() {
			return (0, import_asyncToGenerator$5.default)(function* () {
				this.socketModule && (yield this.socketModule.close());
				this.microservicesModule && (yield this.microservicesModule.close());
				this.httpAdapter && (yield this.httpAdapter.close());
				yield Promise.all((0, iterare_1$2.iterate)(this.microservices).map(function() {
					var _ref$1 = (0, import_asyncToGenerator$5.default)(function* (microservice) {
						microservice.setIsTerminated(true);
						yield microservice.close();
					});
					return function(_x) {
						return _ref$1.apply(this, arguments);
					};
				}()));
			})();
		}
		getHttpAdapter() {
			return this.httpAdapter;
		}
		registerHttpServer() {
			this.httpServer = this.createServer();
		}
		getUnderlyingHttpServer() {
			return this.httpAdapter.getHttpServer();
		}
		applyOptions() {
			if (!this.appOptions || !this.appOptions.cors) return void 0;
			const passCustomOptions = (0, shared_utils_1$2.isObject)(this.appOptions.cors) || (0, shared_utils_1$2.isFunction)(this.appOptions.cors);
			if (!passCustomOptions) return this.enableCors();
			return this.enableCors(this.appOptions.cors);
		}
		createServer() {
			this.httpAdapter.initHttpServer(this.appOptions);
			return this.httpAdapter.getHttpServer();
		}
		registerModules() {
			return (0, import_asyncToGenerator$5.default)(function* () {
				this.registerWsModule();
				if (this.microservicesModule) {
					this.microservicesModule.register(this.container, this.graphInspector, this.config, this.appOptions);
					this.microservicesModule.setupClients(this.container);
				}
				yield this.middlewareModule.register(this.middlewareContainer, this.container, this.config, this.injector, this.httpAdapter, this.graphInspector, this.appOptions);
			})();
		}
		registerWsModule() {
			if (!this.socketModule) return;
			this.socketModule.register(this.container, this.config, this.graphInspector, this.appOptions, this.httpServer);
		}
		init() {
			return (0, import_asyncToGenerator$5.default)(function* () {
				var _this$httpAdapter, _this$httpAdapter$ini;
				if (this.isInitialized) return this;
				this.applyOptions();
				yield (_this$httpAdapter = this.httpAdapter) === null || _this$httpAdapter === void 0 || (_this$httpAdapter$ini = _this$httpAdapter.init) === null || _this$httpAdapter$ini === void 0 ? void 0 : _this$httpAdapter$ini.call(_this$httpAdapter);
				const useBodyParser = this.appOptions && this.appOptions.bodyParser !== false;
				useBodyParser && this.registerParserMiddleware();
				yield this.registerModules();
				yield this.registerRouter();
				yield this.callInitHook();
				yield this.registerRouterHooks();
				yield this.callBootstrapHook();
				this.isInitialized = true;
				this.logger.log(constants_1$4.MESSAGES.APPLICATION_READY);
				return this;
			})();
		}
		registerParserMiddleware() {
			var _this$appOptions;
			const prefix = this.config.getGlobalPrefix();
			const rawBody = !!((_this$appOptions = this.appOptions) === null || _this$appOptions === void 0 ? void 0 : _this$appOptions.rawBody);
			this.httpAdapter.registerParserMiddleware(prefix, rawBody);
		}
		registerRouter() {
			return (0, import_asyncToGenerator$5.default)(function* () {
				yield this.registerMiddleware(this.httpAdapter);
				const prefix = this.config.getGlobalPrefix();
				const basePath = (0, shared_utils_1$2.addLeadingSlash)(prefix);
				this.routesResolver.resolve(this.httpAdapter, basePath);
			})();
		}
		registerRouterHooks() {
			return (0, import_asyncToGenerator$5.default)(function* () {
				this.routesResolver.registerNotFoundHandler();
				this.routesResolver.registerExceptionHandler();
			})();
		}
		connectMicroservice(microserviceOptions, hybridAppOptions = {}) {
			const { NestMicroservice } = (0, load_package_util_1$1.loadPackage)("@nestjs/microservices", "NestFactory", function() {
				return __require("@nestjs/microservices");
			});
			const { inheritAppConfig } = hybridAppOptions;
			const applicationConfig = inheritAppConfig ? this.config : new application_config_1$3.ApplicationConfig();
			const instance = new NestMicroservice(this.container, microserviceOptions, this.graphInspector, applicationConfig);
			if (!hybridAppOptions.deferInitialization) {
				instance.registerListeners();
				instance.setIsInitialized(true);
				instance.setIsInitHookCalled(true);
			}
			this.microservices.push(instance);
			return instance;
		}
		getMicroservices() {
			return this.microservices;
		}
		getHttpServer() {
			return this.httpServer;
		}
		startAllMicroservices() {
			return (0, import_asyncToGenerator$5.default)(function* () {
				this.assertNotInPreviewMode("startAllMicroservices");
				yield Promise.all(this.microservices.map(function(msvc) {
					return msvc.listen();
				}));
				return this;
			})();
		}
		use(...args) {
			this.httpAdapter.use(...args);
			return this;
		}
		useBodyParser(...args) {
			var _this$httpAdapter$use, _this$httpAdapter2;
			if (!("useBodyParser" in this.httpAdapter)) {
				this.logger.warn("Your HTTP Adapter does not support `.useBodyParser`.");
				return this;
			}
			const [parserType, ...otherArgs] = args;
			const rawBody = !!this.appOptions.rawBody;
			(_this$httpAdapter$use = (_this$httpAdapter2 = this.httpAdapter).useBodyParser) === null || _this$httpAdapter$use === void 0 || _this$httpAdapter$use.call(_this$httpAdapter2, ...[
				parserType,
				rawBody,
				...otherArgs
			]);
			return this;
		}
		enableCors(options) {
			this.httpAdapter.enableCors(options);
		}
		enableVersioning(options = { type: common_1$7.VersioningType.URI }) {
			this.config.enableVersioning(options);
			return this;
		}
		listen(port, ...args) {
			var _this = this;
			return (0, import_asyncToGenerator$5.default)(function* () {
				this.assertNotInPreviewMode("listen");
				if (!this.isInitialized) yield this.init();
				const httpAdapterHost = this.container.getHttpAdapterHostRef();
				return new Promise(function(resolve, reject) {
					const errorHandler = function(e) {
						var _e$toString;
						_this.logger.error(e === null || e === void 0 || (_e$toString = e.toString) === null || _e$toString === void 0 ? void 0 : _e$toString.call(e));
						reject(e);
					};
					_this.httpServer.once("error", errorHandler);
					const isCallbackInOriginalArgs = (0, shared_utils_1$2.isFunction)(args[args.length - 1]);
					const listenFnArgs = isCallbackInOriginalArgs ? args.slice(0, args.length - 1) : args;
					_this.httpAdapter.listen(port, ...listenFnArgs, function(...originalCallbackArgs) {
						var _this$appOptions$auto, _this$appOptions2;
						if ((_this$appOptions$auto = (_this$appOptions2 = _this.appOptions) === null || _this$appOptions2 === void 0 ? void 0 : _this$appOptions2.autoFlushLogs) !== null && _this$appOptions$auto !== void 0 ? _this$appOptions$auto : true) _this.flushLogs();
						if (originalCallbackArgs[0] instanceof Error) return reject(originalCallbackArgs[0]);
						const address = _this.httpServer.address();
						if (address) {
							_this.httpServer.removeListener("error", errorHandler);
							_this.isListening = true;
							httpAdapterHost.listening = true;
							resolve(_this.httpServer);
						}
						if (isCallbackInOriginalArgs) args[args.length - 1](...originalCallbackArgs);
					});
				});
			})();
		}
		getUrl() {
			var _this2 = this;
			return (0, import_asyncToGenerator$5.default)(function* () {
				return new Promise(function(resolve, reject) {
					if (!_this2.isListening) {
						_this2.logger.error(constants_1$4.MESSAGES.CALL_LISTEN_FIRST);
						reject(constants_1$4.MESSAGES.CALL_LISTEN_FIRST);
						return;
					}
					const address = _this2.httpServer.address();
					resolve(_this2.formatAddress(address));
				});
			})();
		}
		formatAddress(address) {
			if ((0, shared_utils_1$2.isString)(address)) {
				if ((0, os_1.platform)() === "win32") return address;
				const basePath = encodeURIComponent(address);
				return `${this.getProtocol()}+unix://${basePath}`;
			}
			let host = this.host();
			if (address && address.family === "IPv6") if (host === "::") host = "[::1]";
			else host = `[${host}]`;
			else if (host === "0.0.0.0") host = "127.0.0.1";
			return `${this.getProtocol()}://${host}:${address.port}`;
		}
		setGlobalPrefix(prefix, options) {
			this.config.setGlobalPrefix(prefix);
			if (options) {
				const exclude = (options === null || options === void 0 ? void 0 : options.exclude) ? (0, utils_1.mapToExcludeRoute)(options.exclude) : [];
				this.config.setGlobalPrefixOptions((0, import_objectSpread2$3.default)((0, import_objectSpread2$3.default)({}, options), {}, { exclude }));
			}
			return this;
		}
		useWebSocketAdapter(adapter) {
			this.config.setIoAdapter(adapter);
			return this;
		}
		useGlobalFilters(...filters) {
			var _this3 = this;
			this.config.useGlobalFilters(...filters);
			filters.forEach(function(item) {
				return _this3.graphInspector.insertOrphanedEnhancer({
					subtype: "filter",
					ref: item
				});
			});
			return this;
		}
		useGlobalPipes(...pipes) {
			var _this4 = this;
			this.config.useGlobalPipes(...pipes);
			pipes.forEach(function(item) {
				return _this4.graphInspector.insertOrphanedEnhancer({
					subtype: "pipe",
					ref: item
				});
			});
			return this;
		}
		useGlobalInterceptors(...interceptors) {
			var _this5 = this;
			this.config.useGlobalInterceptors(...interceptors);
			interceptors.forEach(function(item) {
				return _this5.graphInspector.insertOrphanedEnhancer({
					subtype: "interceptor",
					ref: item
				});
			});
			return this;
		}
		useGlobalGuards(...guards) {
			var _this6 = this;
			this.config.useGlobalGuards(...guards);
			guards.forEach(function(item) {
				return _this6.graphInspector.insertOrphanedEnhancer({
					subtype: "guard",
					ref: item
				});
			});
			return this;
		}
		useStaticAssets(pathOrOptions, options) {
			this.httpAdapter.useStaticAssets && this.httpAdapter.useStaticAssets(pathOrOptions, options);
			return this;
		}
		setBaseViewsDir(path) {
			this.httpAdapter.setBaseViewsDir && this.httpAdapter.setBaseViewsDir(path);
			return this;
		}
		setViewEngine(engineOrOptions) {
			this.httpAdapter.setViewEngine && this.httpAdapter.setViewEngine(engineOrOptions);
			return this;
		}
		host() {
			const address = this.httpServer.address();
			if ((0, shared_utils_1$2.isString)(address)) return void 0;
			return address && address.address;
		}
		getProtocol() {
			return this.appOptions && this.appOptions.httpsOptions ? "https" : "http";
		}
		registerMiddleware(instance) {
			return (0, import_asyncToGenerator$5.default)(function* () {
				yield this.middlewareModule.registerMiddleware(this.middlewareContainer, instance);
			})();
		}
	};
	exports.NestApplication = NestApplication;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exception-handler.js
var require_exception_handler = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exception-handler.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ExceptionHandler = void 0;
	const logger_service_1$1 = require_logger_service();
	var ExceptionHandler = class ExceptionHandler {
		handle(exception) {
			ExceptionHandler.logger.error(exception);
		}
	};
	exports.ExceptionHandler = ExceptionHandler;
	ExceptionHandler.logger = new logger_service_1$1.Logger(ExceptionHandler.name);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions-zone.js
var require_exceptions_zone = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions-zone.js"(exports) {
	var import_asyncToGenerator$4 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ExceptionsZone = void 0;
	const common_1$6 = require_common();
	const exception_handler_1 = require_exception_handler();
	const DEFAULT_TEARDOWN = function() {
		return process.exit(1);
	};
	var ExceptionsZone = class {
		static run(callback, teardown = DEFAULT_TEARDOWN, autoFlushLogs) {
			try {
				callback();
			} catch (e) {
				this.exceptionHandler.handle(e);
				if (autoFlushLogs) common_1$6.Logger.flush();
				teardown(e);
			}
		}
		static asyncRun(_x) {
			return (0, import_asyncToGenerator$4.default)(function* (callback, teardown = DEFAULT_TEARDOWN, autoFlushLogs) {
				try {
					yield callback();
				} catch (e) {
					this.exceptionHandler.handle(e);
					if (autoFlushLogs) common_1$6.Logger.flush();
					teardown(e);
				}
			}).apply(this, arguments);
		}
	};
	exports.ExceptionsZone = ExceptionsZone;
	ExceptionsZone.exceptionHandler = new exception_handler_1.ExceptionHandler();
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/load-adapter.js
var require_load_adapter = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/load-adapter.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.loadAdapter = loadAdapter;
	const common_1$5 = require_common();
	const MISSING_REQUIRED_DEPENDENCY = function(defaultPlatform, transport) {
		return `No driver (${transport}) has been selected. In order to take advantage of the default driver, please, ensure to install the "${defaultPlatform}" package ($ npm install ${defaultPlatform}).`;
	};
	const logger = new common_1$5.Logger("PackageLoader");
	function loadAdapter(defaultPlatform, transport, loaderFn) {
		try {
			return loaderFn ? loaderFn() : __require(defaultPlatform);
		} catch (e) {
			logger.error(MISSING_REQUIRED_DEPENDENCY(defaultPlatform, transport));
			process.exit(1);
		}
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/rethrow.js
var require_rethrow = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/helpers/rethrow.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.rethrow = void 0;
	const rethrow = function(err) {
		throw err;
	};
	exports.rethrow = rethrow;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/instance-loader.js
var require_instance_loader = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/instance-loader.js"(exports) {
	var import_asyncToGenerator$3 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InstanceLoader = void 0;
	const common_1$4 = require_common();
	const messages_1$3 = require_messages();
	const internal_core_module_1$2 = require_internal_core_module();
	var InstanceLoader = class InstanceLoader {
		constructor(container, injector, graphInspector, logger$1 = new common_1$4.Logger(InstanceLoader.name, { timestamp: true })) {
			this.container = container;
			this.injector = injector;
			this.graphInspector = graphInspector;
			this.logger = logger$1;
		}
		setLogger(logger$1) {
			this.logger = logger$1;
		}
		createInstancesOfDependencies() {
			return (0, import_asyncToGenerator$3.default)(function* (modules = this.container.getModules()) {
				this.createPrototypes(modules);
				try {
					yield this.createInstances(modules);
				} catch (err) {
					this.graphInspector.inspectModules(modules);
					this.graphInspector.registerPartial(err);
					throw err;
				}
				this.graphInspector.inspectModules(modules);
			}).apply(this, arguments);
		}
		createPrototypes(modules) {
			var _this = this;
			modules.forEach(function(moduleRef) {
				_this.createPrototypesOfProviders(moduleRef);
				_this.createPrototypesOfInjectables(moduleRef);
				_this.createPrototypesOfControllers(moduleRef);
			});
		}
		createInstances(modules) {
			var _this2 = this;
			return (0, import_asyncToGenerator$3.default)(function* () {
				yield Promise.all([...modules.values()].map(function() {
					var _ref$1 = (0, import_asyncToGenerator$3.default)(function* (moduleRef) {
						yield _this2.createInstancesOfProviders(moduleRef);
						yield _this2.createInstancesOfInjectables(moduleRef);
						yield _this2.createInstancesOfControllers(moduleRef);
						const { name } = moduleRef;
						_this2.isModuleWhitelisted(name) && _this2.logger.log((0, messages_1$3.MODULE_INIT_MESSAGE)`${name}`);
					});
					return function(_x) {
						return _ref$1.apply(this, arguments);
					};
				}()));
			})();
		}
		createPrototypesOfProviders(moduleRef) {
			var _this3 = this;
			const { providers } = moduleRef;
			providers.forEach(function(wrapper) {
				return _this3.injector.loadPrototype(wrapper, providers);
			});
		}
		createInstancesOfProviders(moduleRef) {
			var _this4 = this;
			return (0, import_asyncToGenerator$3.default)(function* () {
				const { providers } = moduleRef;
				const wrappers = [...providers.values()];
				yield Promise.all(wrappers.map(function() {
					var _ref2$1 = (0, import_asyncToGenerator$3.default)(function* (item) {
						yield _this4.injector.loadProvider(item, moduleRef);
						_this4.graphInspector.inspectInstanceWrapper(item, moduleRef);
					});
					return function(_x2) {
						return _ref2$1.apply(this, arguments);
					};
				}()));
			})();
		}
		createPrototypesOfControllers(moduleRef) {
			var _this5 = this;
			const { controllers } = moduleRef;
			controllers.forEach(function(wrapper) {
				return _this5.injector.loadPrototype(wrapper, controllers);
			});
		}
		createInstancesOfControllers(moduleRef) {
			var _this6 = this;
			return (0, import_asyncToGenerator$3.default)(function* () {
				const { controllers } = moduleRef;
				const wrappers = [...controllers.values()];
				yield Promise.all(wrappers.map(function() {
					var _ref3$1 = (0, import_asyncToGenerator$3.default)(function* (item) {
						yield _this6.injector.loadController(item, moduleRef);
						_this6.graphInspector.inspectInstanceWrapper(item, moduleRef);
					});
					return function(_x3) {
						return _ref3$1.apply(this, arguments);
					};
				}()));
			})();
		}
		createPrototypesOfInjectables(moduleRef) {
			var _this7 = this;
			const { injectables } = moduleRef;
			injectables.forEach(function(wrapper) {
				return _this7.injector.loadPrototype(wrapper, injectables);
			});
		}
		createInstancesOfInjectables(moduleRef) {
			var _this8 = this;
			return (0, import_asyncToGenerator$3.default)(function* () {
				const { injectables } = moduleRef;
				const wrappers = [...injectables.values()];
				yield Promise.all(wrappers.map(function() {
					var _ref4 = (0, import_asyncToGenerator$3.default)(function* (item) {
						yield _this8.injector.loadInjectable(item, moduleRef);
						_this8.graphInspector.inspectInstanceWrapper(item, moduleRef);
					});
					return function(_x4) {
						return _ref4.apply(this, arguments);
					};
				}()));
			})();
		}
		isModuleWhitelisted(name) {
			return name !== internal_core_module_1$2.InternalCoreModule.name;
		}
	};
	exports.InstanceLoader = InstanceLoader;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/noop-graph-inspector.js
var require_noop_graph_inspector = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/inspector/noop-graph-inspector.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NoopGraphInspector = void 0;
	const graph_inspector_1$1 = require_graph_inspector();
	const noop = function() {};
	exports.NoopGraphInspector = new Proxy(graph_inspector_1$1.GraphInspector.prototype, { get: function() {
		return noop;
	} });
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-class-module.exception.js
var require_invalid_class_module_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-class-module.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InvalidClassModuleException = void 0;
	const messages_1$2 = require_messages$1();
	const runtime_exception_1$2 = require_runtime_exception();
	var InvalidClassModuleException = class extends runtime_exception_1$2.RuntimeException {
		constructor(metatypeUsedAsAModule, scope) {
			super((0, messages_1$2.USING_INVALID_CLASS_AS_A_MODULE_MESSAGE)(metatypeUsedAsAModule, scope));
		}
	};
	exports.InvalidClassModuleException = InvalidClassModuleException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-module.exception.js
var require_invalid_module_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/invalid-module.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InvalidModuleException = void 0;
	const messages_1$1 = require_messages$1();
	const runtime_exception_1$1 = require_runtime_exception();
	var InvalidModuleException = class extends runtime_exception_1$1.RuntimeException {
		constructor(parentModule, index, scope) {
			super((0, messages_1$1.INVALID_MODULE_MESSAGE)(parentModule, index, scope));
		}
	};
	exports.InvalidModuleException = InvalidModuleException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/undefined-module.exception.js
var require_undefined_module_exception = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/errors/exceptions/undefined-module.exception.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UndefinedModuleException = void 0;
	const runtime_exception_1 = require_runtime_exception();
	const messages_1 = require_messages$1();
	var UndefinedModuleException = class extends runtime_exception_1.RuntimeException {
		constructor(parentModule, index, scope) {
			super((0, messages_1.UNDEFINED_MODULE_MESSAGE)(parentModule, index, scope));
		}
	};
	exports.UndefinedModuleException = UndefinedModuleException;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/internal-core-module/internal-core-module-factory.js
var require_internal_core_module_factory = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/internal-core-module/internal-core-module-factory.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InternalCoreModuleFactory = void 0;
	const common_1$3 = require_common();
	const external_context_creator_1 = require_external_context_creator();
	const http_adapter_host_1 = require_http_adapter_host();
	const initialize_on_preview_allowlist_1 = require_initialize_on_preview_allowlist();
	const serialized_graph_1 = require_serialized_graph();
	const injector_1$2 = require_injector$1();
	const instance_loader_1$1 = require_instance_loader();
	const lazy_module_loader_1 = require_lazy_module_loader();
	const modules_container_1 = require_modules_container();
	const internal_core_module_1$1 = require_internal_core_module();
	var InternalCoreModuleFactory = class {
		static create(container, scanner, moduleCompiler, httpAdapterHost, graphInspector, moduleOverrides) {
			const lazyModuleLoaderFactory = function() {
				const logger$1 = new common_1$3.Logger(lazy_module_loader_1.LazyModuleLoader.name, { timestamp: false });
				const injector = new injector_1$2.Injector();
				const instanceLoader = new instance_loader_1$1.InstanceLoader(container, injector, graphInspector, logger$1);
				return new lazy_module_loader_1.LazyModuleLoader(scanner, instanceLoader, moduleCompiler, container.getModules(), moduleOverrides);
			};
			initialize_on_preview_allowlist_1.InitializeOnPreviewAllowlist.add(internal_core_module_1$1.InternalCoreModule);
			return internal_core_module_1$1.InternalCoreModule.register([
				{
					provide: external_context_creator_1.ExternalContextCreator,
					useFactory: function() {
						return external_context_creator_1.ExternalContextCreator.fromContainer(container);
					}
				},
				{
					provide: modules_container_1.ModulesContainer,
					useFactory: function() {
						return container.getModules();
					}
				},
				{
					provide: http_adapter_host_1.HttpAdapterHost,
					useFactory: function() {
						return httpAdapterHost;
					}
				},
				{
					provide: lazy_module_loader_1.LazyModuleLoader,
					useFactory: lazyModuleLoaderFactory
				},
				{
					provide: serialized_graph_1.SerializedGraph,
					useFactory: function() {
						return container.serializedGraph;
					}
				}
			]);
		}
	};
	exports.InternalCoreModuleFactory = InternalCoreModuleFactory;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/topology-tree/tree-node.js
var require_tree_node = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/topology-tree/tree-node.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TreeNode = void 0;
	var TreeNode = class {
		constructor({ value, parent }) {
			this.children = /* @__PURE__ */ new Set();
			this.value = value;
			this.parent = parent;
		}
		addChild(child) {
			this.children.add(child);
		}
		removeChild(child) {
			this.children.delete(child);
		}
		relink(parent) {
			var _this$parent;
			(_this$parent = this.parent) === null || _this$parent === void 0 || _this$parent.removeChild(this);
			this.parent = parent;
			this.parent.addChild(this);
		}
		getDepth() {
			const visited = /* @__PURE__ */ new Set();
			let depth = 0;
			let current = this;
			while (current) {
				depth++;
				current = current.parent;
				if (visited.has(current)) return -1;
				visited.add(current);
			}
			return depth;
		}
		hasCycleWith(target) {
			const visited = /* @__PURE__ */ new Set();
			let current = this;
			while (current) {
				if (current.value === target) return true;
				current = current.parent;
				if (visited.has(current)) return false;
				visited.add(current);
			}
			return false;
		}
	};
	exports.TreeNode = TreeNode;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/topology-tree/topology-tree.js
var require_topology_tree = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/injector/topology-tree/topology-tree.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TopologyTree = void 0;
	const tree_node_1 = require_tree_node();
	var TopologyTree = class {
		constructor(moduleRef) {
			this.links = /* @__PURE__ */ new Map();
			this.root = new tree_node_1.TreeNode({
				value: moduleRef,
				parent: null
			});
			this.links.set(moduleRef, this.root);
			this.traverseAndMapToTree(this.root);
		}
		walk(callback) {
			function walkNode(node, depth = 1) {
				callback(node.value, depth);
				node.children.forEach(function(child) {
					return walkNode(child, depth + 1);
				});
			}
			walkNode(this.root);
		}
		traverseAndMapToTree(node, depth = 1) {
			var _this = this;
			if (!node.value.imports) return;
			node.value.imports.forEach(function(child) {
				if (!child) return;
				if (_this.links.has(child)) {
					const existingSubtree = _this.links.get(child);
					if (node.hasCycleWith(child)) return;
					const existingDepth = existingSubtree.getDepth();
					if (existingDepth < depth) existingSubtree.relink(node);
					return;
				}
				const childNode = new tree_node_1.TreeNode({
					value: child,
					parent: node
				});
				node.addChild(childNode);
				_this.links.set(child, childNode);
				_this.traverseAndMapToTree(childNode, depth + 1);
			});
		}
	};
	exports.TopologyTree = TopologyTree;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/scanner.js
var require_scanner = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/scanner.js"(exports) {
	var import_asyncToGenerator$2 = __toESM(require_asyncToGenerator());
	var import_objectSpread2$2 = __toESM(require_objectSpread2());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DependenciesScanner = void 0;
	const constants_1$3 = require_constants();
	const interfaces_1 = require_interfaces();
	const shared_utils_1$1 = require_shared_utils();
	const iterare_1$1 = require_lib();
	const application_config_1$2 = require_application_config();
	const constants_2 = require_constants$4();
	const circular_dependency_exception_1 = require_circular_dependency_exception();
	const invalid_class_module_exception_1 = require_invalid_class_module_exception();
	const invalid_module_exception_1 = require_invalid_module_exception();
	const undefined_module_exception_1 = require_undefined_module_exception();
	const get_class_scope_1 = require_get_class_scope();
	const internal_core_module_factory_1 = require_internal_core_module_factory();
	const topology_tree_1 = require_topology_tree();
	const uuid_factory_1$1 = require_uuid_factory();
	var DependenciesScanner = class {
		constructor(container, metadataScanner, graphInspector, applicationConfig = new application_config_1$2.ApplicationConfig()) {
			this.container = container;
			this.metadataScanner = metadataScanner;
			this.graphInspector = graphInspector;
			this.applicationConfig = applicationConfig;
			this.applicationProvidersApplyMap = [];
		}
		scan(module$1, options) {
			return (0, import_asyncToGenerator$2.default)(function* () {
				yield this.registerCoreModule(options === null || options === void 0 ? void 0 : options.overrides);
				yield this.scanForModules({
					moduleDefinition: module$1,
					overrides: options === null || options === void 0 ? void 0 : options.overrides
				});
				yield this.scanModulesForDependencies();
				this.addScopedEnhancersMetadata();
				this.calculateModulesDistance();
				this.container.bindGlobalScope();
			})();
		}
		scanForModules({ moduleDefinition, lazy, scope = [], ctxRegistry = [], overrides = [] }) {
			return (0, import_asyncToGenerator$2.default)(function* () {
				var _await$this$insertOrO, _this$getOverrideModu, _this$getOverrideModu2;
				const { moduleRef: moduleInstance, inserted: moduleInserted } = (_await$this$insertOrO = yield this.insertOrOverrideModule(moduleDefinition, overrides, scope)) !== null && _await$this$insertOrO !== void 0 ? _await$this$insertOrO : {};
				moduleDefinition = (_this$getOverrideModu = (_this$getOverrideModu2 = this.getOverrideModuleByModule(moduleDefinition, overrides)) === null || _this$getOverrideModu2 === void 0 ? void 0 : _this$getOverrideModu2.newModule) !== null && _this$getOverrideModu !== void 0 ? _this$getOverrideModu : moduleDefinition;
				moduleDefinition = moduleDefinition instanceof Promise ? yield moduleDefinition : moduleDefinition;
				ctxRegistry.push(moduleDefinition);
				if (this.isForwardReference(moduleDefinition)) moduleDefinition = moduleDefinition.forwardRef();
				const modules = !this.isDynamicModule(moduleDefinition) ? this.reflectMetadata(constants_1$3.MODULE_METADATA.IMPORTS, moduleDefinition) : [...this.reflectMetadata(constants_1$3.MODULE_METADATA.IMPORTS, moduleDefinition.module), ...moduleDefinition.imports || []];
				let registeredModuleRefs = [];
				for (const [index, innerModule] of modules.entries()) {
					if (innerModule === void 0) throw new undefined_module_exception_1.UndefinedModuleException(moduleDefinition, index, scope);
					if (!innerModule) throw new invalid_module_exception_1.InvalidModuleException(moduleDefinition, index, scope);
					if (ctxRegistry.includes(innerModule)) continue;
					const moduleRefs = yield this.scanForModules({
						moduleDefinition: innerModule,
						scope: [].concat(scope, moduleDefinition),
						ctxRegistry,
						overrides,
						lazy
					});
					registeredModuleRefs = registeredModuleRefs.concat(moduleRefs);
				}
				if (!moduleInstance) return registeredModuleRefs;
				if (lazy && moduleInserted) this.container.bindGlobalsToImports(moduleInstance);
				return [moduleInstance].concat(registeredModuleRefs);
			})();
		}
		insertModule(moduleDefinition, scope) {
			return (0, import_asyncToGenerator$2.default)(function* () {
				const moduleToAdd = this.isForwardReference(moduleDefinition) ? moduleDefinition.forwardRef() : moduleDefinition;
				if (this.isInjectable(moduleToAdd) || this.isController(moduleToAdd) || this.isExceptionFilter(moduleToAdd)) throw new invalid_class_module_exception_1.InvalidClassModuleException(moduleDefinition, scope);
				return this.container.addModule(moduleToAdd, scope);
			})();
		}
		scanModulesForDependencies() {
			return (0, import_asyncToGenerator$2.default)(function* (modules = this.container.getModules()) {
				for (const [token, { metatype }] of modules) {
					yield this.reflectImports(metatype, token, metatype.name);
					this.reflectProviders(metatype, token);
					this.reflectControllers(metatype, token);
					this.reflectExports(metatype, token);
				}
			}).apply(this, arguments);
		}
		reflectImports(module$1, token, context) {
			return (0, import_asyncToGenerator$2.default)(function* () {
				const modules = [...this.reflectMetadata(constants_1$3.MODULE_METADATA.IMPORTS, module$1), ...this.container.getDynamicMetadataByToken(token, constants_1$3.MODULE_METADATA.IMPORTS)];
				for (const related of modules) yield this.insertImport(related, token, context);
			})();
		}
		reflectProviders(module$1, token) {
			var _this = this;
			const providers = [...this.reflectMetadata(constants_1$3.MODULE_METADATA.PROVIDERS, module$1), ...this.container.getDynamicMetadataByToken(token, constants_1$3.MODULE_METADATA.PROVIDERS)];
			providers.forEach(function(provider) {
				_this.insertProvider(provider, token);
				_this.reflectDynamicMetadata(provider, token);
			});
		}
		reflectControllers(module$1, token) {
			var _this2 = this;
			const controllers = [...this.reflectMetadata(constants_1$3.MODULE_METADATA.CONTROLLERS, module$1), ...this.container.getDynamicMetadataByToken(token, constants_1$3.MODULE_METADATA.CONTROLLERS)];
			controllers.forEach(function(item) {
				_this2.insertController(item, token);
				_this2.reflectDynamicMetadata(item, token);
			});
		}
		reflectDynamicMetadata(cls, token) {
			if (!cls || !cls.prototype) return;
			this.reflectInjectables(cls, token, constants_1$3.GUARDS_METADATA);
			this.reflectInjectables(cls, token, constants_1$3.INTERCEPTORS_METADATA);
			this.reflectInjectables(cls, token, constants_1$3.EXCEPTION_FILTERS_METADATA);
			this.reflectInjectables(cls, token, constants_1$3.PIPES_METADATA);
			this.reflectParamInjectables(cls, token, constants_1$3.ROUTE_ARGS_METADATA);
		}
		reflectExports(module$1, token) {
			var _this3 = this;
			const exports$1 = [...this.reflectMetadata(constants_1$3.MODULE_METADATA.EXPORTS, module$1), ...this.container.getDynamicMetadataByToken(token, constants_1$3.MODULE_METADATA.EXPORTS)];
			exports$1.forEach(function(exportedProvider) {
				return _this3.insertExportedProviderOrModule(exportedProvider, token);
			});
		}
		reflectInjectables(component, token, metadataKey) {
			var _this4 = this;
			const controllerInjectables = this.reflectMetadata(metadataKey, component);
			const methodInjectables = this.metadataScanner.getAllMethodNames(component.prototype).reduce(function(acc, method) {
				const methodInjectable = _this4.reflectKeyMetadata(component, metadataKey, method);
				if (methodInjectable) acc.push(methodInjectable);
				return acc;
			}, []);
			controllerInjectables.forEach(function(injectable) {
				return _this4.insertInjectable(injectable, token, component, constants_1$3.ENHANCER_KEY_TO_SUBTYPE_MAP[metadataKey]);
			});
			methodInjectables.forEach(function(methodInjectable) {
				methodInjectable.metadata.forEach(function(injectable) {
					return _this4.insertInjectable(injectable, token, component, constants_1$3.ENHANCER_KEY_TO_SUBTYPE_MAP[metadataKey], methodInjectable.methodKey);
				});
			});
		}
		reflectParamInjectables(component, token, metadataKey) {
			var _this5 = this;
			const paramsMethods = this.metadataScanner.getAllMethodNames(component.prototype);
			paramsMethods.forEach(function(methodKey) {
				const metadata = Reflect.getMetadata(metadataKey, component, methodKey);
				if (!metadata) return;
				const params = Object.values(metadata);
				params.map(function(item) {
					return item.pipes;
				}).flat(1).forEach(function(injectable) {
					return _this5.insertInjectable(injectable, token, component, "pipe", methodKey);
				});
			});
		}
		reflectKeyMetadata(component, key, methodKey) {
			let prototype = component.prototype;
			do {
				const descriptor = Reflect.getOwnPropertyDescriptor(prototype, methodKey);
				if (!descriptor) continue;
				const metadata = Reflect.getMetadata(key, descriptor.value);
				if (!metadata) return;
				return {
					methodKey,
					metadata
				};
			} while ((prototype = Reflect.getPrototypeOf(prototype)) && prototype !== Object.prototype && prototype);
			return void 0;
		}
		calculateModulesDistance() {
			const modulesGenerator = this.container.getModules().values();
			modulesGenerator.next();
			const rootModule = modulesGenerator.next().value;
			if (!rootModule) return;
			const tree = new topology_tree_1.TopologyTree(rootModule);
			tree.walk(function(moduleRef, depth) {
				if (moduleRef.isGlobal) return;
				moduleRef.distance = depth;
			});
		}
		insertImport(related, token, context) {
			return (0, import_asyncToGenerator$2.default)(function* () {
				if ((0, shared_utils_1$1.isUndefined)(related)) throw new circular_dependency_exception_1.CircularDependencyException(context);
				if (this.isForwardReference(related)) return this.container.addImport(related.forwardRef(), token);
				yield this.container.addImport(related, token);
			})();
		}
		isCustomProvider(provider) {
			return provider && !(0, shared_utils_1$1.isNil)(provider.provide);
		}
		insertProvider(provider, token) {
			const isCustomProvider = this.isCustomProvider(provider);
			if (!isCustomProvider) return this.container.addProvider(provider, token);
			const applyProvidersMap = this.getApplyProvidersMap();
			const providersKeys = Object.keys(applyProvidersMap);
			const type = provider.provide;
			if (!providersKeys.includes(type)) return this.container.addProvider(provider, token);
			const uuid = uuid_factory_1$1.UuidFactory.get(type.toString());
			const providerToken = `${type} (UUID: ${uuid})`;
			let scope = provider.scope;
			if ((0, shared_utils_1$1.isNil)(scope) && provider.useClass) scope = (0, get_class_scope_1.getClassScope)(provider.useClass);
			this.applicationProvidersApplyMap.push({
				type,
				moduleKey: token,
				providerKey: providerToken,
				scope
			});
			const newProvider = (0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, provider), {}, {
				provide: providerToken,
				scope
			});
			const enhancerSubtype = constants_2.ENHANCER_TOKEN_TO_SUBTYPE_MAP[type];
			const factoryOrClassProvider = newProvider;
			if (this.isRequestOrTransient(factoryOrClassProvider.scope)) return this.container.addInjectable(newProvider, token, enhancerSubtype);
			this.container.addProvider(newProvider, token, enhancerSubtype);
		}
		insertInjectable(injectable, token, host, subtype, methodKey) {
			if ((0, shared_utils_1$1.isFunction)(injectable)) {
				const instanceWrapper = this.container.addInjectable(injectable, token, subtype, host);
				this.graphInspector.insertEnhancerMetadataCache({
					moduleToken: token,
					classRef: host,
					enhancerInstanceWrapper: instanceWrapper,
					targetNodeId: instanceWrapper.id,
					subtype,
					methodKey
				});
				return instanceWrapper;
			} else this.graphInspector.insertEnhancerMetadataCache({
				moduleToken: token,
				classRef: host,
				enhancerRef: injectable,
				methodKey,
				subtype
			});
		}
		insertExportedProviderOrModule(toExport, token) {
			const fulfilledProvider = this.isForwardReference(toExport) ? toExport.forwardRef() : toExport;
			this.container.addExportedProviderOrModule(fulfilledProvider, token);
		}
		insertController(controller, token) {
			this.container.addController(controller, token);
		}
		insertOrOverrideModule(moduleDefinition, overrides, scope) {
			const overrideModule = this.getOverrideModuleByModule(moduleDefinition, overrides);
			if (overrideModule !== void 0) return this.overrideModule(moduleDefinition, overrideModule.newModule, scope);
			return this.insertModule(moduleDefinition, scope);
		}
		getOverrideModuleByModule(module$1, overrides) {
			if (this.isForwardReference(module$1)) return overrides.find(function(moduleToOverride) {
				var _moduleToOverride$mod, _moduleToOverride$mod2;
				return moduleToOverride.moduleToReplace === module$1.forwardRef() || ((_moduleToOverride$mod = (_moduleToOverride$mod2 = moduleToOverride.moduleToReplace).forwardRef) === null || _moduleToOverride$mod === void 0 ? void 0 : _moduleToOverride$mod.call(_moduleToOverride$mod2)) === module$1.forwardRef();
			});
			return overrides.find(function(moduleToOverride) {
				return moduleToOverride.moduleToReplace === module$1;
			});
		}
		overrideModule(moduleToOverride, newModule, scope) {
			return (0, import_asyncToGenerator$2.default)(function* () {
				return this.container.replaceModule(this.isForwardReference(moduleToOverride) ? moduleToOverride.forwardRef() : moduleToOverride, this.isForwardReference(newModule) ? newModule.forwardRef() : newModule, scope);
			})();
		}
		reflectMetadata(metadataKey, metatype) {
			return Reflect.getMetadata(metadataKey, metatype) || [];
		}
		registerCoreModule(overrides) {
			return (0, import_asyncToGenerator$2.default)(function* () {
				const moduleDefinition = internal_core_module_factory_1.InternalCoreModuleFactory.create(this.container, this, this.container.getModuleCompiler(), this.container.getHttpAdapterHostRef(), this.graphInspector, overrides);
				const [instance] = yield this.scanForModules({
					moduleDefinition,
					overrides
				});
				this.container.registerCoreModuleRef(instance);
			})();
		}
		/**
		* Add either request or transient globally scoped enhancers
		* to all controllers metadata storage
		*/
		addScopedEnhancersMetadata() {
			var _this6 = this;
			(0, iterare_1$1.iterate)(this.applicationProvidersApplyMap).filter(function(wrapper) {
				return _this6.isRequestOrTransient(wrapper.scope);
			}).forEach(function({ moduleKey, providerKey }) {
				const modulesContainer = _this6.container.getModules();
				const { injectables } = modulesContainer.get(moduleKey);
				const instanceWrapper = injectables.get(providerKey);
				const iterableIterator = modulesContainer.values();
				(0, iterare_1$1.iterate)(iterableIterator).map(function(moduleRef) {
					return Array.from(moduleRef.controllers.values()).concat(moduleRef.entryProviders);
				}).flatten().forEach(function(controllerOrEntryProvider) {
					return controllerOrEntryProvider.addEnhancerMetadata(instanceWrapper);
				});
			});
		}
		applyApplicationProviders() {
			var _this7 = this;
			const applyProvidersMap = this.getApplyProvidersMap();
			const applyRequestProvidersMap = this.getApplyRequestProvidersMap();
			const getInstanceWrapper = function(moduleKey, providerKey, collectionKey) {
				const modules = _this7.container.getModules();
				const collection = modules.get(moduleKey)[collectionKey];
				return collection.get(providerKey);
			};
			this.applicationProvidersApplyMap.forEach(function({ moduleKey, providerKey, type, scope }) {
				let instanceWrapper;
				if (_this7.isRequestOrTransient(scope)) {
					instanceWrapper = getInstanceWrapper(moduleKey, providerKey, "injectables");
					_this7.graphInspector.insertAttachedEnhancer(instanceWrapper);
					return applyRequestProvidersMap[type](instanceWrapper);
				}
				instanceWrapper = getInstanceWrapper(moduleKey, providerKey, "providers");
				_this7.graphInspector.insertAttachedEnhancer(instanceWrapper);
				applyProvidersMap[type](instanceWrapper.instance);
			});
		}
		getApplyProvidersMap() {
			var _this8 = this;
			return {
				[constants_2.APP_INTERCEPTOR]: function(interceptor) {
					return _this8.applicationConfig.addGlobalInterceptor(interceptor);
				},
				[constants_2.APP_PIPE]: function(pipe) {
					return _this8.applicationConfig.addGlobalPipe(pipe);
				},
				[constants_2.APP_GUARD]: function(guard) {
					return _this8.applicationConfig.addGlobalGuard(guard);
				},
				[constants_2.APP_FILTER]: function(filter) {
					return _this8.applicationConfig.addGlobalFilter(filter);
				}
			};
		}
		getApplyRequestProvidersMap() {
			var _this9 = this;
			return {
				[constants_2.APP_INTERCEPTOR]: function(interceptor) {
					return _this9.applicationConfig.addGlobalRequestInterceptor(interceptor);
				},
				[constants_2.APP_PIPE]: function(pipe) {
					return _this9.applicationConfig.addGlobalRequestPipe(pipe);
				},
				[constants_2.APP_GUARD]: function(guard) {
					return _this9.applicationConfig.addGlobalRequestGuard(guard);
				},
				[constants_2.APP_FILTER]: function(filter) {
					return _this9.applicationConfig.addGlobalRequestFilter(filter);
				}
			};
		}
		isDynamicModule(module$1) {
			return module$1 && !!module$1.module;
		}
		/**
		* @param metatype
		* @returns `true` if `metatype` is annotated with the `@Injectable()` decorator.
		*/
		isInjectable(metatype) {
			return !!Reflect.getMetadata(constants_1$3.INJECTABLE_WATERMARK, metatype);
		}
		/**
		* @param metatype
		* @returns `true` if `metatype` is annotated with the `@Controller()` decorator.
		*/
		isController(metatype) {
			return !!Reflect.getMetadata(constants_1$3.CONTROLLER_WATERMARK, metatype);
		}
		/**
		* @param metatype
		* @returns `true` if `metatype` is annotated with the `@Catch()` decorator.
		*/
		isExceptionFilter(metatype) {
			return !!Reflect.getMetadata(constants_1$3.CATCH_WATERMARK, metatype);
		}
		isForwardReference(module$1) {
			return module$1 && !!module$1.forwardRef;
		}
		isRequestOrTransient(scope) {
			return scope === interfaces_1.Scope.REQUEST || scope === interfaces_1.Scope.TRANSIENT;
		}
	};
	exports.DependenciesScanner = DependenciesScanner;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/nest-factory.js
var require_nest_factory = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/nest-factory.js"(exports) {
	var import_asyncToGenerator$1 = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NestFactory = exports.NestFactoryStatic = void 0;
	const logger_service_1 = require_logger_service();
	const load_package_util_1 = require_load_package_util();
	const shared_utils_1 = require_shared_utils();
	const application_config_1$1 = require_application_config();
	const constants_1$2 = require_constants$4();
	const exceptions_zone_1 = require_exceptions_zone();
	const load_adapter_1 = require_load_adapter();
	const rethrow_1 = require_rethrow();
	const container_1 = require_container$1();
	const injector_1$1 = require_injector$1();
	const instance_loader_1 = require_instance_loader();
	const graph_inspector_1 = require_graph_inspector();
	const noop_graph_inspector_1 = require_noop_graph_inspector();
	const uuid_factory_1 = require_uuid_factory();
	const metadata_scanner_1$1 = require_metadata_scanner();
	const nest_application_1$1 = require_nest_application();
	const nest_application_context_1 = require_nest_application_context();
	const scanner_1 = require_scanner();
	/**
	* @publicApi
	*/
	var NestFactoryStatic = class {
		constructor() {
			this.logger = new logger_service_1.Logger("NestFactory", { timestamp: true });
			this.abortOnError = true;
			this.autoFlushLogs = false;
		}
		create(moduleCls, serverOrOptions, options) {
			return (0, import_asyncToGenerator$1.default)(function* () {
				const [httpServer, appOptions] = this.isHttpServer(serverOrOptions) ? [serverOrOptions, options] : [this.createHttpAdapter(), serverOrOptions];
				const applicationConfig = new application_config_1$1.ApplicationConfig();
				const container = new container_1.NestContainer(applicationConfig, appOptions);
				const graphInspector = this.createGraphInspector(appOptions, container);
				this.setAbortOnError(serverOrOptions, options);
				this.registerLoggerConfiguration(appOptions);
				yield this.initialize(moduleCls, container, graphInspector, applicationConfig, appOptions, httpServer);
				const instance = new nest_application_1$1.NestApplication(container, httpServer, applicationConfig, graphInspector, appOptions);
				const target = this.createNestInstance(instance);
				return this.createAdapterProxy(target, httpServer);
			})();
		}
		/**
		* Creates an instance of NestMicroservice.
		*
		* @param moduleCls Entry (root) application module class
		* @param options Optional microservice configuration
		*
		* @returns A promise that, when resolved,
		* contains a reference to the NestMicroservice instance.
		*/
		createMicroservice(moduleCls, options) {
			return (0, import_asyncToGenerator$1.default)(function* () {
				const { NestMicroservice } = (0, load_package_util_1.loadPackage)("@nestjs/microservices", "NestFactory", function() {
					return __require("@nestjs/microservices");
				});
				const applicationConfig = new application_config_1$1.ApplicationConfig();
				const container = new container_1.NestContainer(applicationConfig, options);
				const graphInspector = this.createGraphInspector(options, container);
				this.setAbortOnError(options);
				this.registerLoggerConfiguration(options);
				yield this.initialize(moduleCls, container, graphInspector, applicationConfig, options);
				return this.createNestInstance(new NestMicroservice(container, options, graphInspector, applicationConfig));
			})();
		}
		/**
		* Creates an instance of NestApplicationContext.
		*
		* @param moduleCls Entry (root) application module class
		* @param options Optional Nest application configuration
		*
		* @returns A promise that, when resolved,
		* contains a reference to the NestApplicationContext instance.
		*/
		createApplicationContext(moduleCls, options) {
			return (0, import_asyncToGenerator$1.default)(function* () {
				const applicationConfig = new application_config_1$1.ApplicationConfig();
				const container = new container_1.NestContainer(applicationConfig, options);
				const graphInspector = this.createGraphInspector(options, container);
				this.setAbortOnError(options);
				this.registerLoggerConfiguration(options);
				yield this.initialize(moduleCls, container, graphInspector, applicationConfig, options);
				const modules = container.getModules().values();
				const root = modules.next().value;
				const context = this.createNestInstance(new nest_application_context_1.NestApplicationContext(container, options, root));
				if (this.autoFlushLogs) context.flushLogsOnOverride();
				return context.init();
			})();
		}
		createNestInstance(instance) {
			return this.createProxy(instance);
		}
		initialize(_x, _x2, _x3) {
			return (0, import_asyncToGenerator$1.default)(function* (module$1, container, graphInspector, config = new application_config_1$1.ApplicationConfig(), options = {}, httpServer = null) {
				var _httpServer$init;
				uuid_factory_1.UuidFactory.mode = options.snapshot ? uuid_factory_1.UuidFactoryMode.Deterministic : uuid_factory_1.UuidFactoryMode.Random;
				const injector = new injector_1$1.Injector({ preview: options.preview });
				const instanceLoader = new instance_loader_1.InstanceLoader(container, injector, graphInspector);
				const metadataScanner = new metadata_scanner_1$1.MetadataScanner();
				const dependenciesScanner = new scanner_1.DependenciesScanner(container, metadataScanner, graphInspector, config);
				container.setHttpAdapter(httpServer);
				const teardown = this.abortOnError === false ? rethrow_1.rethrow : void 0;
				yield httpServer === null || httpServer === void 0 || (_httpServer$init = httpServer.init) === null || _httpServer$init === void 0 ? void 0 : _httpServer$init.call(httpServer);
				try {
					this.logger.log(constants_1$2.MESSAGES.APPLICATION_START);
					yield exceptions_zone_1.ExceptionsZone.asyncRun((0, import_asyncToGenerator$1.default)(function* () {
						yield dependenciesScanner.scan(module$1);
						yield instanceLoader.createInstancesOfDependencies();
						dependenciesScanner.applyApplicationProviders();
					}), teardown, this.autoFlushLogs);
				} catch (e) {
					this.handleInitializationError(e);
				}
			}).apply(this, arguments);
		}
		handleInitializationError(err) {
			if (this.abortOnError) process.abort();
			(0, rethrow_1.rethrow)(err);
		}
		createProxy(target) {
			const proxy = this.createExceptionProxy();
			return new Proxy(target, {
				get: proxy,
				set: proxy
			});
		}
		createExceptionProxy() {
			var _this = this;
			return function(receiver, prop) {
				if (!(prop in receiver)) return;
				if ((0, shared_utils_1.isFunction)(receiver[prop])) return _this.createExceptionZone(receiver, prop);
				return receiver[prop];
			};
		}
		createExceptionZone(receiver, prop) {
			var _this2 = this;
			const teardown = this.abortOnError === false ? rethrow_1.rethrow : void 0;
			return function(...args) {
				let result;
				exceptions_zone_1.ExceptionsZone.run(function() {
					result = receiver[prop](...args);
				}, teardown, _this2.autoFlushLogs);
				return result;
			};
		}
		registerLoggerConfiguration(options) {
			if (!options) return;
			const { logger: logger$1, bufferLogs, autoFlushLogs } = options;
			if (logger$1 !== true && !(0, shared_utils_1.isNil)(logger$1)) logger_service_1.Logger.overrideLogger(logger$1);
			if (bufferLogs) logger_service_1.Logger.attachBuffer();
			this.autoFlushLogs = autoFlushLogs !== null && autoFlushLogs !== void 0 ? autoFlushLogs : true;
		}
		createHttpAdapter(httpServer) {
			const { ExpressAdapter } = (0, load_adapter_1.loadAdapter)("@nestjs/platform-express", "HTTP", function() {
				return __require("@nestjs/platform-express");
			});
			return new ExpressAdapter(httpServer);
		}
		isHttpServer(serverOrOptions) {
			return !!(serverOrOptions && serverOrOptions.patch);
		}
		setAbortOnError(serverOrOptions, options) {
			this.abortOnError = this.isHttpServer(serverOrOptions) ? !(options && options.abortOnError === false) : !(serverOrOptions && serverOrOptions.abortOnError === false);
		}
		createAdapterProxy(app, adapter) {
			var _this3 = this;
			const proxy = new Proxy(app, { get: function(receiver, prop) {
				const mapToProxy = function(result) {
					return result instanceof Promise ? result.then(mapToProxy) : result instanceof nest_application_1$1.NestApplication ? proxy : result;
				};
				if (!(prop in receiver) && prop in adapter) return function(...args) {
					const result = _this3.createExceptionZone(adapter, prop)(...args);
					return mapToProxy(result);
				};
				if ((0, shared_utils_1.isFunction)(receiver[prop])) return function(...args) {
					const result = receiver[prop](...args);
					return mapToProxy(result);
				};
				return receiver[prop];
			} });
			return proxy;
		}
		createGraphInspector(appOptions, container) {
			return (appOptions === null || appOptions === void 0 ? void 0 : appOptions.snapshot) ? new graph_inspector_1.GraphInspector(container) : noop_graph_inspector_1.NoopGraphInspector;
		}
	};
	exports.NestFactoryStatic = NestFactoryStatic;
	/**
	* Use NestFactory to create an application instance.
	*
	* ### Specifying an entry module
	*
	* Pass the required *root module* for the application via the module parameter.
	* By convention, it is usually called `ApplicationModule`.  Starting with this
	* module, Nest assembles the dependency graph and begins the process of
	* Dependency Injection and instantiates the classes needed to launch your
	* application.
	*
	* @publicApi
	*/
	exports.NestFactory = new NestFactoryStatic();
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/assign-to-object.util.js
var require_assign_to_object_util = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/assign-to-object.util.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.assignToObject = assignToObject;
	/**
	* Similar to `Object.assign` but copying properties descriptors from `source`
	* as well.
	*/
	function assignToObject(target, source) {
		Object.defineProperties(target, Object.keys(source).reduce(function(descriptors, key) {
			descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
			return descriptors;
		}, Object.create(null)));
		return target;
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/constants.js
var require_constants$1 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/constants.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.REPL_INITIALIZED_MESSAGE = void 0;
	exports.REPL_INITIALIZED_MESSAGE = "REPL initialized";
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/repl-function.js
var require_repl_function = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/repl-function.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ReplFunction = void 0;
	const cli_colors_util_1$4 = require_cli_colors_util();
	var ReplFunction = class {
		constructor(ctx) {
			this.ctx = ctx;
			this.logger = ctx.logger;
		}
		/**
		* @returns A message displayed by calling `<fnName>.help`
		*/
		makeHelpMessage() {
			const { description, name, signature } = this.fnDefinition;
			const fnSignatureWithName = `${name}${signature}`;
			return `${cli_colors_util_1$4.clc.yellow(description)}\n${cli_colors_util_1$4.clc.magentaBright("Interface:")} ${cli_colors_util_1$4.clc.bold(fnSignatureWithName)}\n`;
		}
	};
	exports.ReplFunction = ReplFunction;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/help-repl-fn.js
var require_help_repl_fn = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/help-repl-fn.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.HelpReplFn = void 0;
	const iterare_1 = require_lib();
	const cli_colors_util_1$3 = require_cli_colors_util();
	const repl_function_1$5 = require_repl_function();
	var HelpReplFn = class HelpReplFn extends repl_function_1$5.ReplFunction {
		constructor() {
			super(...arguments);
			this.fnDefinition = {
				name: "help",
				signature: "() => void",
				description: "Display all available REPL native functions."
			};
		}
		action() {
			const sortedNativeFunctions = (0, iterare_1.iterate)(this.ctx.nativeFunctions).map(function([, nativeFunction]) {
				return nativeFunction.fnDefinition;
			}).toArray().sort(function(a, b) {
				return a.name < b.name ? -1 : 1;
			});
			this.ctx.writeToStdout(`You can call ${cli_colors_util_1$3.clc.bold(".help")} on any function listed below (e.g.: ${cli_colors_util_1$3.clc.bold("help.help")}):\n\n` + sortedNativeFunctions.map(HelpReplFn.buildHelpMessage).join("\n") + "\n");
		}
	};
	exports.HelpReplFn = HelpReplFn;
	HelpReplFn.buildHelpMessage = function({ name, description }) {
		return cli_colors_util_1$3.clc.cyanBright(name) + (description ? ` ${cli_colors_util_1$3.clc.bold("-")} ${description}` : "");
	};
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/get-relp-fn.js
var require_get_relp_fn = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/get-relp-fn.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.GetReplFn = void 0;
	const repl_function_1$4 = require_repl_function();
	var GetReplFn = class extends repl_function_1$4.ReplFunction {
		constructor() {
			super(...arguments);
			this.fnDefinition = {
				name: "get",
				signature: "(token: InjectionToken) => any",
				description: "Retrieves an instance of either injectable or controller, otherwise, throws exception.",
				aliases: ["$"]
			};
		}
		action(token) {
			return this.ctx.app.get(token);
		}
	};
	exports.GetReplFn = GetReplFn;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/resolve-repl-fn.js
var require_resolve_repl_fn = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/resolve-repl-fn.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ResolveReplFn = void 0;
	const repl_function_1$3 = require_repl_function();
	var ResolveReplFn = class extends repl_function_1$3.ReplFunction {
		constructor() {
			super(...arguments);
			this.fnDefinition = {
				name: "resolve",
				description: "Resolves transient or request-scoped instance of either injectable or controller, otherwise, throws exception.",
				signature: "(token: InjectionToken, contextId: any) => Promise<any>"
			};
		}
		action(token, contextId) {
			return this.ctx.app.resolve(token, contextId);
		}
	};
	exports.ResolveReplFn = ResolveReplFn;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/select-relp-fn.js
var require_select_relp_fn = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/select-relp-fn.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SelectReplFn = void 0;
	const repl_function_1$2 = require_repl_function();
	var SelectReplFn = class extends repl_function_1$2.ReplFunction {
		constructor() {
			super(...arguments);
			this.fnDefinition = {
				name: "select",
				description: "Allows navigating through the modules tree, for example, to pull out a specific instance from the selected module.",
				signature: "(token: DynamicModule | ClassRef) => INestApplicationContext"
			};
		}
		action(token) {
			return this.ctx.app.select(token);
		}
	};
	exports.SelectReplFn = SelectReplFn;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/debug-repl-fn.js
var require_debug_repl_fn = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/debug-repl-fn.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DebugReplFn = void 0;
	const cli_colors_util_1$2 = require_cli_colors_util();
	const repl_function_1$1 = require_repl_function();
	var DebugReplFn = class extends repl_function_1$1.ReplFunction {
		constructor() {
			super(...arguments);
			this.fnDefinition = {
				name: "debug",
				description: "Print all registered modules as a list together with their controllers and providers.\nIf the argument is passed in, for example, \"debug(MyModule)\" then it will only print components of this specific module.",
				signature: "(moduleCls?: ClassRef | string) => void"
			};
		}
		action(moduleCls) {
			var _this = this;
			this.ctx.writeToStdout("\n");
			if (moduleCls) {
				const token = typeof moduleCls === "function" ? moduleCls.name : moduleCls;
				const moduleEntry = this.ctx.debugRegistry[token];
				if (!moduleEntry) return this.logger.error(`"${token}" has not been found in the modules registry`);
				this.printCtrlsAndProviders(token, moduleEntry);
			} else Object.keys(this.ctx.debugRegistry).forEach(function(moduleKey) {
				_this.printCtrlsAndProviders(moduleKey, _this.ctx.debugRegistry[moduleKey]);
			});
			this.ctx.writeToStdout("\n");
		}
		printCtrlsAndProviders(moduleName, moduleDebugEntry) {
			this.ctx.writeToStdout(`${cli_colors_util_1$2.clc.green(moduleName)}:\n`);
			this.printCollection("controllers", moduleDebugEntry["controllers"]);
			this.printCollection("providers", moduleDebugEntry["providers"]);
		}
		printCollection(title, collectionValue) {
			var _this2 = this;
			const collectionEntries = Object.keys(collectionValue);
			if (collectionEntries.length <= 0) return;
			this.ctx.writeToStdout(` ${cli_colors_util_1$2.clc.yellow(`- ${title}`)}:\n`);
			collectionEntries.forEach(function(provider) {
				return _this2.ctx.writeToStdout(`  ${cli_colors_util_1$2.clc.green("◻")} ${provider}\n`);
			});
		}
	};
	exports.DebugReplFn = DebugReplFn;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/methods-repl-fn.js
var require_methods_repl_fn = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/methods-repl-fn.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MethodsReplFn = void 0;
	const cli_colors_util_1$1 = require_cli_colors_util();
	const metadata_scanner_1 = require_metadata_scanner();
	const repl_function_1 = require_repl_function();
	var MethodsReplFn = class extends repl_function_1.ReplFunction {
		constructor() {
			super(...arguments);
			this.fnDefinition = {
				name: "methods",
				description: "Display all public methods available on a given provider or controller.",
				signature: "(token: ClassRef | string) => void"
			};
			this.metadataScanner = new metadata_scanner_1.MetadataScanner();
		}
		action(token) {
			var _this = this;
			const proto = typeof token !== "function" ? Object.getPrototypeOf(this.ctx.app.get(token)) : token === null || token === void 0 ? void 0 : token.prototype;
			const methods = this.metadataScanner.getAllMethodNames(proto);
			this.ctx.writeToStdout("\n");
			this.ctx.writeToStdout(`${cli_colors_util_1$1.clc.green("Methods")}:\n`);
			methods.forEach(function(methodName) {
				return _this.ctx.writeToStdout(` ${cli_colors_util_1$1.clc.yellow("◻")} ${methodName}\n`);
			});
			this.ctx.writeToStdout("\n");
		}
	};
	exports.MethodsReplFn = MethodsReplFn;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/index.js
var require_native_functions = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/native-functions/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$4 = __require("tslib");
	tslib_1$4.__exportStar(require_help_repl_fn(), exports);
	tslib_1$4.__exportStar(require_get_relp_fn(), exports);
	tslib_1$4.__exportStar(require_resolve_repl_fn(), exports);
	tslib_1$4.__exportStar(require_select_relp_fn(), exports);
	tslib_1$4.__exportStar(require_debug_repl_fn(), exports);
	tslib_1$4.__exportStar(require_methods_repl_fn(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/repl-context.js
var require_repl_context = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/repl-context.js"(exports) {
	var import_objectSpread2$1 = __toESM(require_objectSpread2());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ReplContext = void 0;
	const common_1$2 = require_common();
	const application_config_1 = require_application_config();
	const injector_1 = require_injector();
	const internal_core_module_1 = require_internal_core_module();
	const native_functions_1 = require_native_functions();
	var ReplContext = class ReplContext {
		constructor(app, nativeFunctionsClassRefs) {
			this.app = app;
			this.logger = new common_1$2.Logger(ReplContext.name);
			this.debugRegistry = {};
			this.globalScope = Object.create(null);
			this.nativeFunctions = /* @__PURE__ */ new Map();
			this.container = app.container;
			this.initializeContext();
			this.initializeNativeFunctions(nativeFunctionsClassRefs || []);
		}
		writeToStdout(text) {
			process.stdout.write(text);
		}
		initializeContext() {
			var _this = this;
			const modules = this.container.getModules();
			modules.forEach(function(moduleRef) {
				let moduleName = moduleRef.metatype.name;
				if (moduleName === internal_core_module_1.InternalCoreModule.name) return;
				if (_this.globalScope[moduleName]) moduleName += ` (${moduleRef.token})`;
				_this.introspectCollection(moduleRef, moduleName, "providers");
				_this.introspectCollection(moduleRef, moduleName, "controllers");
				Object.defineProperty(_this.globalScope, moduleName, {
					value: moduleRef.metatype,
					configurable: false,
					enumerable: true
				});
			});
		}
		introspectCollection(moduleRef, moduleKey, collection) {
			var _this2 = this;
			var _this$debugRegistry;
			const moduleDebugEntry = {};
			moduleRef[collection].forEach(function({ token }) {
				const stringifiedToken = _this2.stringifyToken(token);
				if (stringifiedToken === application_config_1.ApplicationConfig.name || stringifiedToken === moduleRef.metatype.name) return;
				if (!_this2.globalScope[stringifiedToken]) Object.defineProperty(_this2.globalScope, stringifiedToken, {
					value: token,
					configurable: false,
					enumerable: true
				});
				if (stringifiedToken === injector_1.ModuleRef.name) return;
				moduleDebugEntry[stringifiedToken] = token;
			});
			this.debugRegistry[moduleKey] = (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, (_this$debugRegistry = this.debugRegistry) === null || _this$debugRegistry === void 0 ? void 0 : _this$debugRegistry[moduleKey]), {}, { [collection]: moduleDebugEntry });
		}
		stringifyToken(token) {
			return typeof token !== "string" ? typeof token === "function" ? token.name : token === null || token === void 0 ? void 0 : token.toString() : `"${token}"`;
		}
		addNativeFunction(NativeFunctionRef) {
			var _this3 = this;
			var _nativeFunction$fnDef;
			const nativeFunction = new NativeFunctionRef(this);
			const nativeFunctions = [nativeFunction];
			this.nativeFunctions.set(nativeFunction.fnDefinition.name, nativeFunction);
			(_nativeFunction$fnDef = nativeFunction.fnDefinition.aliases) === null || _nativeFunction$fnDef === void 0 || _nativeFunction$fnDef.forEach(function(aliasName) {
				const aliasNativeFunction = Object.create(nativeFunction);
				aliasNativeFunction.fnDefinition = {
					name: aliasName,
					description: aliasNativeFunction.fnDefinition.description,
					signature: aliasNativeFunction.fnDefinition.signature
				};
				_this3.nativeFunctions.set(aliasName, aliasNativeFunction);
				nativeFunctions.push(aliasNativeFunction);
			});
			return nativeFunctions;
		}
		registerFunctionIntoGlobalScope(nativeFunction) {
			var _this4 = this;
			this.globalScope[nativeFunction.fnDefinition.name] = nativeFunction.action.bind(nativeFunction);
			const functionBoundRef = this.globalScope[nativeFunction.fnDefinition.name];
			Object.defineProperty(functionBoundRef, "help", {
				enumerable: false,
				configurable: false,
				get: function() {
					return _this4.writeToStdout(nativeFunction.makeHelpMessage());
				}
			});
		}
		initializeNativeFunctions(nativeFunctionsClassRefs) {
			var _this5 = this;
			const builtInFunctionsClassRefs = [
				native_functions_1.HelpReplFn,
				native_functions_1.GetReplFn,
				native_functions_1.ResolveReplFn,
				native_functions_1.SelectReplFn,
				native_functions_1.DebugReplFn,
				native_functions_1.MethodsReplFn
			];
			builtInFunctionsClassRefs.concat(nativeFunctionsClassRefs).forEach(function(NativeFunction) {
				const nativeFunctions = _this5.addNativeFunction(NativeFunction);
				nativeFunctions.forEach(function(nativeFunction) {
					_this5.registerFunctionIntoGlobalScope(nativeFunction);
				});
			});
		}
	};
	exports.ReplContext = ReplContext;
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/repl-logger.js
var require_repl_logger = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/repl-logger.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ReplLogger = void 0;
	const common_1$1 = require_common();
	const nest_application_1 = require_nest_application();
	const router_explorer_1 = require_router_explorer();
	const routes_resolver_1 = require_routes_resolver();
	var ReplLogger = class ReplLogger extends common_1$1.ConsoleLogger {
		log(_message, context) {
			if (ReplLogger.ignoredContexts.includes(context)) return;
			return super.log.apply(this, Array.from(arguments));
		}
	};
	exports.ReplLogger = ReplLogger;
	ReplLogger.ignoredContexts = [
		routes_resolver_1.RoutesResolver.name,
		router_explorer_1.RouterExplorer.name,
		nest_application_1.NestApplication.name
	];
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/repl-native-commands.js
var require_repl_native_commands = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/repl-native-commands.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.defineDefaultCommandsOnRepl = defineDefaultCommandsOnRepl;
	/**
	* Displays a list of available commands in the REPL alongside with their
	* descriptions.
	* (c) This code was inspired by the 'help' command from Node.js core:
	* {@link https://github.com/nodejs/node/blob/58b60c1393dd65cd228a8b0084a19acd2c1d16aa/lib/repl.js#L1741-L1759}
	*/
	function listAllCommands(replServer) {
		Object.keys(replServer.commands).sort().forEach(function(name) {
			const cmd = replServer.commands[name];
			if (cmd) replServer.output.write(`${name}\t${cmd.help || ""}\n`);
		});
	}
	function defineDefaultCommandsOnRepl(replServer) {
		replServer.defineCommand("help", {
			help: "Show REPL options",
			action(name) {
				this.clearBufferedCommand();
				if (name) {
					const nativeCommandOrFunction = this.commands[name] || this.context[name];
					const helpMessage = nativeCommandOrFunction === null || nativeCommandOrFunction === void 0 ? void 0 : nativeCommandOrFunction.help;
					if (helpMessage) this.output.write(`${helpMessage}\n`);
				} else {
					listAllCommands(this);
					this.output.write("\n\n");
					this.context.help();
					this.output.write("\nPress Ctrl+C to abort current expression, Ctrl+D to exit the REPL\n");
				}
				this.displayPrompt();
			}
		});
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/repl.js
var require_repl$1 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/repl.js"(exports) {
	var import_objectSpread2 = __toESM(require_objectSpread2());
	var import_asyncToGenerator = __toESM(require_asyncToGenerator());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.repl = repl;
	const common_1 = require_common();
	const cli_colors_util_1 = require_cli_colors_util();
	const nest_factory_1$1 = require_nest_factory();
	const assign_to_object_util_1 = require_assign_to_object_util();
	const constants_1$1 = require_constants$1();
	const repl_context_1 = require_repl_context();
	const repl_logger_1 = require_repl_logger();
	const repl_native_commands_1 = require_repl_native_commands();
	function repl(_x) {
		return _repl2.apply(this, arguments);
	}
	function _repl2() {
		_repl2 = (0, import_asyncToGenerator.default)(function* (module$1, replOptions = {}) {
			const app = yield nest_factory_1$1.NestFactory.createApplicationContext(module$1, {
				abortOnError: false,
				logger: new repl_logger_1.ReplLogger()
			});
			yield app.init();
			const replContext = new repl_context_1.ReplContext(app);
			common_1.Logger.log(constants_1$1.REPL_INITIALIZED_MESSAGE);
			const _repl = yield Promise.resolve().then(function() {
				return __require("repl");
			});
			const replServer = _repl.start((0, import_objectSpread2.default)({
				prompt: cli_colors_util_1.clc.green("> "),
				ignoreUndefined: true
			}, replOptions));
			(0, assign_to_object_util_1.assignToObject)(replServer.context, replContext.globalScope);
			(0, repl_native_commands_1.defineDefaultCommandsOnRepl)(replServer);
			replServer.on("exit", (0, import_asyncToGenerator.default)(function* () {
				yield app.close();
			}));
			return replServer;
		});
		return _repl2.apply(this, arguments);
	}
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/index.js
var require_repl = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/repl/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$3 = __require("tslib");
	tslib_1$3.__exportStar(require_repl$1(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/interfaces/routes.interface.js
var require_routes_interface = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/interfaces/routes.interface.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/interfaces/index.js
var require_interfaces$1 = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/interfaces/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1$2 = __require("tslib");
	tslib_1$2.__exportStar(require_routes_interface(), exports);
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/request/index.js
var require_request = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/request/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.REQUEST = void 0;
	var request_constants_1 = require_request_constants();
	Object.defineProperty(exports, "REQUEST", {
		enumerable: true,
		get: function() {
			return request_constants_1.REQUEST;
		}
	});
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/index.js
var require_router = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/router/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RouterModule = void 0;
	const tslib_1$1 = __require("tslib");
	tslib_1$1.__exportStar(require_interfaces$1(), exports);
	tslib_1$1.__exportStar(require_request(), exports);
	var router_module_1 = require_router_module();
	Object.defineProperty(exports, "RouterModule", {
		enumerable: true,
		get: function() {
			return router_module_1.RouterModule;
		}
	});
} });

//#endregion
//#region ../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/index.js
var require_core = __commonJS({ "../../node_modules/.pnpm/@nestjs+core@11.1.3_@nestjs_06add3b00e00f7a14712c84d46bc09c6/node_modules/@nestjs/core/index.js"(exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NestFactory = exports.APP_PIPE = exports.APP_INTERCEPTOR = exports.APP_GUARD = exports.APP_FILTER = void 0;
	const tslib_1 = __require("tslib");
	require_Reflect();
	tslib_1.__exportStar(require_adapters(), exports);
	tslib_1.__exportStar(require_application_config(), exports);
	var constants_1 = require_constants$4();
	Object.defineProperty(exports, "APP_FILTER", {
		enumerable: true,
		get: function() {
			return constants_1.APP_FILTER;
		}
	});
	Object.defineProperty(exports, "APP_GUARD", {
		enumerable: true,
		get: function() {
			return constants_1.APP_GUARD;
		}
	});
	Object.defineProperty(exports, "APP_INTERCEPTOR", {
		enumerable: true,
		get: function() {
			return constants_1.APP_INTERCEPTOR;
		}
	});
	Object.defineProperty(exports, "APP_PIPE", {
		enumerable: true,
		get: function() {
			return constants_1.APP_PIPE;
		}
	});
	tslib_1.__exportStar(require_discovery(), exports);
	tslib_1.__exportStar(require_exceptions$2(), exports);
	tslib_1.__exportStar(require_helpers(), exports);
	tslib_1.__exportStar(require_injector(), exports);
	tslib_1.__exportStar(require_inspector(), exports);
	tslib_1.__exportStar(require_metadata_scanner(), exports);
	tslib_1.__exportStar(require_middleware(), exports);
	tslib_1.__exportStar(require_nest_application(), exports);
	tslib_1.__exportStar(require_nest_application_context(), exports);
	var nest_factory_1 = require_nest_factory();
	Object.defineProperty(exports, "NestFactory", {
		enumerable: true,
		get: function() {
			return nest_factory_1.NestFactory;
		}
	});
	tslib_1.__exportStar(require_repl(), exports);
	tslib_1.__exportStar(require_router(), exports);
	tslib_1.__exportStar(require_services(), exports);
} });

//#endregion
//#region lib/factories/procedure.factory.ts
var import_common = __toESM(require_common(), 1);
var import_core = __toESM(require_core(), 1);
var import_decorateMetadata = __toESM(require_decorateMetadata(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_decorate = __toESM(require_decorate(), 1);
var _ref, _ref2, _ref3;
let ProcedureFactory = class ProcedureFactory$1 {
	constructor(moduleRef) {
		this.moduleRef = moduleRef;
		(0, import_defineProperty.default)(this, "consoleLogger", void 0);
		(0, import_defineProperty.default)(this, "metadataScanner", void 0);
	}
	getProcedures(instance, prototype) {
		var _this = this;
		const methodNames = this.metadataScanner.getAllMethodNames(instance);
		return methodNames.map(function(name) {
			return _this.extractProcedureMetadata(name, prototype);
		});
	}
	extractProcedureParams(prototype, name) {
		return Reflect.getMetadata(PROCEDURE_PARAM_METADATA_KEY, prototype, name);
	}
	extractProcedureMetadata(name, prototype) {
		const callback = prototype[name];
		const type = Reflect.getMetadata(PROCEDURE_TYPE_KEY, callback);
		const metadata = Reflect.getMetadata(PROCEDURE_METADATA_KEY, callback);
		const middlewares = Reflect.getMetadata(MIDDLEWARES_KEY, callback) || [];
		return {
			input: metadata === null || metadata === void 0 ? void 0 : metadata.input,
			output: metadata === null || metadata === void 0 ? void 0 : metadata.output,
			middlewares,
			type,
			name: callback.name,
			implementation: callback,
			params: this.extractProcedureParams(prototype, name)
		};
	}
	serializeProcedures(procedures, instance, camelCasedRouterName, procedureBuilder, routerMiddlewares) {
		const serializedProcedures = Object.create({});
		for (const procedure of procedures) {
			const { input, output, type, middlewares, name, params } = procedure;
			const uniqueMiddlewares = uniqWith([...routerMiddlewares, ...middlewares], isEqual);
			const procedureInstance = this.createProcedureInstance(procedureBuilder, uniqueMiddlewares);
			const routerInstance = this.moduleRef.get(instance.constructor, { strict: false });
			serializedProcedures[name] = this.createSerializedProcedure(procedureInstance, name, input, output, type, routerInstance, params);
			this.consoleLogger.log(`Mapped {${type}, ${camelCasedRouterName}.${name}} route.`, "Router Factory");
		}
		return serializedProcedures;
	}
	createProcedureInstance(procedure, middlewares) {
		for (const middleware of middlewares) {
			const customProcedureInstance = this.moduleRef.get(middleware, { strict: false });
			if (typeof customProcedureInstance.use === "function") procedure = procedure.use(function(opts) {
				return customProcedureInstance.use(opts);
			});
		}
		return procedure;
	}
	serializeProcedureParams(opts, params) {
		if (params == null) return [];
		return new Array(Math.max(...params.map(function(val) {
			return val.index;
		})) + 1).fill(void 0).map(function(_val, idx) {
			const param = params.find(function(param$1) {
				return param$1.index === idx;
			});
			if (param == null) return void 0;
			if (param.type === ProcedureParamDecoratorType.Input) {
				var _opts$param$type;
				return param["key"] != null ? (_opts$param$type = opts[param.type]) === null || _opts$param$type === void 0 ? void 0 : _opts$param$type[param["key"]] : opts[param.type];
			}
			if (param.type === ProcedureParamDecoratorType.Options) return opts;
			return opts[param.type];
		});
	}
	createSerializedProcedure(procedureInstance, procedureName, input, output, type, routerInstance, params) {
		var _this2 = this;
		const procedureWithInput = input ? procedureInstance.input(input) : procedureInstance;
		const procedureWithOutput = output ? procedureWithInput.output(output) : procedureWithInput;
		const procedureInvocation = function(opts) {
			return routerInstance[procedureName](..._this2.serializeProcedureParams(opts, params));
		};
		return type === ProcedureType.Mutation ? procedureWithOutput.mutation(procedureInvocation) : procedureWithOutput.query(procedureInvocation);
	}
};
(0, import_decorate.default)([(0, import_common.Inject)(import_common.ConsoleLogger), (0, import_decorateMetadata.default)("design:type", typeof (_ref2 = typeof import_common.ConsoleLogger !== "undefined" && import_common.ConsoleLogger) === "function" ? _ref2 : Object)], ProcedureFactory.prototype, "consoleLogger", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(import_core.MetadataScanner), (0, import_decorateMetadata.default)("design:type", typeof (_ref3 = typeof import_core.MetadataScanner !== "undefined" && import_core.MetadataScanner) === "function" ? _ref3 : Object)], ProcedureFactory.prototype, "metadataScanner", void 0);
ProcedureFactory = (0, import_decorate.default)([(0, import_common.Injectable)(), (0, import_decorateMetadata.default)("design:paramtypes", [typeof (_ref = typeof import_core.ModuleRef !== "undefined" && import_core.ModuleRef) === "function" ? _ref : Object])], ProcedureFactory);

//#endregion
export { ProcedureFactory, require_core, require_instance_wrapper };
//# sourceMappingURL=procedure.factory-BVIy_yls.js.map