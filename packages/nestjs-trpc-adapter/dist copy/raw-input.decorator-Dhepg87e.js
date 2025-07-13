import { PROCEDURE_PARAM_METADATA_KEY } from "./trpc.constants-bTuZEOOy.js";
import { ProcedureParamDecoratorType } from "./factory.interface-1IZgsKBO.js";

//#region lib/decorators/raw-input.decorator.ts
/**
* Raw Input procedure parameter decorator. Extracts the `rawInput` parameter out of the procedure `opts`.
*
* @see [Parameter Decorators](https://www.nestjs-trpc.io/docs/routers#parameter-decorators)
*
* @publicApi
*/
function RawInput() {
	return function(target, propertyKey, parameterIndex) {
		if (propertyKey != null) {
			const existingParams = Reflect.getMetadata(PROCEDURE_PARAM_METADATA_KEY, target, propertyKey) || [];
			const procedureParamMetadata = {
				type: ProcedureParamDecoratorType.RawInput,
				index: parameterIndex
			};
			existingParams.push(procedureParamMetadata);
			Reflect.defineMetadata(PROCEDURE_PARAM_METADATA_KEY, existingParams, target, propertyKey);
		}
	};
}

//#endregion
export { RawInput };
//# sourceMappingURL=raw-input.decorator-Dhepg87e.js.map