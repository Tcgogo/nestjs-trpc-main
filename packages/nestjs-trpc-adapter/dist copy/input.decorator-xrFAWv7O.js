import { PROCEDURE_PARAM_METADATA_KEY } from "./trpc.constants-bTuZEOOy.js";
import { ProcedureParamDecoratorType } from "./factory.interface-1IZgsKBO.js";

//#region lib/decorators/input.decorator.ts
/**
* Input procedure parameter decorator. Extracts the `input` parameter out of the procedure `opts`.
*
* @param key string to be used extracting a specific input key - `input[key]`.
*
* @see [Parameter Decorators](https://www.nestjs-trpc.io/docs/routers#parameter-decorators)
*
* @publicApi
*/
function Input(key) {
	return function(target, propertyKey, parameterIndex) {
		if (propertyKey != null && typeof parameterIndex === "number") {
			const existingParams = Reflect.getMetadata(PROCEDURE_PARAM_METADATA_KEY, target, propertyKey) || [];
			const procedureParamMetadata = {
				type: ProcedureParamDecoratorType.Input,
				index: parameterIndex,
				key
			};
			existingParams.push(procedureParamMetadata);
			Reflect.defineMetadata(PROCEDURE_PARAM_METADATA_KEY, existingParams, target, propertyKey);
		}
	};
}

//#endregion
export { Input };
//# sourceMappingURL=input.decorator-xrFAWv7O.js.map