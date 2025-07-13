import { PROCEDURE_PARAM_METADATA_KEY } from "./trpc.constants-bTuZEOOy.js";
import { ProcedureParamDecoratorType } from "./factory.interface-1IZgsKBO.js";

//#region lib/decorators/options.decorator.ts
/**
* Options procedure parameter decorator. Extracts the root `opts` parameter out of the procedure.
*
* @see [Parameter Decorators](https://www.nestjs-trpc.io/docs/routers#parameter-decorators)
*
* @publicApi
*/
function Options() {
	return function(target, propertyKey, parameterIndex) {
		if (propertyKey != null) {
			const existingParams = Reflect.getMetadata(PROCEDURE_PARAM_METADATA_KEY, target, propertyKey) || [];
			const procedureParamMetadata = {
				type: ProcedureParamDecoratorType.Options,
				index: parameterIndex
			};
			existingParams.push(procedureParamMetadata);
			Reflect.defineMetadata(PROCEDURE_PARAM_METADATA_KEY, existingParams, target, propertyKey);
		}
	};
}

//#endregion
export { Options };
//# sourceMappingURL=options.decorator-DwTIwrZN.js.map