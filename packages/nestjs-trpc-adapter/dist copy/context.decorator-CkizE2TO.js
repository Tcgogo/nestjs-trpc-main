import { PROCEDURE_PARAM_METADATA_KEY } from "./trpc.constants-bTuZEOOy.js";
import { ProcedureParamDecoratorType } from "./factory.interface-1IZgsKBO.js";

//#region lib/decorators/context.decorator.ts
function Ctx() {
	return function(target, propertyKey, parameterIndex) {
		if (propertyKey != null && typeof parameterIndex === "number") {
			const existingParams = Reflect.getMetadata(PROCEDURE_PARAM_METADATA_KEY, target, propertyKey) || [];
			const procedureParamMetadata = {
				type: ProcedureParamDecoratorType.Ctx,
				index: parameterIndex
			};
			existingParams.push(procedureParamMetadata);
			Reflect.defineMetadata(PROCEDURE_PARAM_METADATA_KEY, existingParams, target, propertyKey);
		}
	};
}

//#endregion
export { Ctx };
//# sourceMappingURL=context.decorator-CkizE2TO.js.map