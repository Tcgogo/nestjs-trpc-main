import type { ProcedureParamDecorator } from '../interfaces/factory.interface'
import {

  ProcedureParamDecoratorType,
} from '../interfaces/factory.interface'
import { PROCEDURE_PARAM_METADATA_KEY } from '../trpc.constants'

/**
 * Raw Input procedure parameter decorator. Extracts the `rawInput` parameter out of the procedure `opts`.
 *
 * @see [Parameter Decorators](https://www.nestjs-trpc.io/docs/routers#parameter-decorators)
 *
 * @publicApi
 */
export function RawInput(): ParameterDecorator {
  return (
    target: object,
    propertyKey: string | symbol | undefined,
    parameterIndex: number,
  ) => {
    if (propertyKey != null) {
      const existingParams: Array<ProcedureParamDecorator>
        = Reflect.getMetadata(
          PROCEDURE_PARAM_METADATA_KEY,
          target,
          propertyKey,
        ) || []

      const procedureParamMetadata: ProcedureParamDecorator = {
        type: ProcedureParamDecoratorType.RawInput,
        index: parameterIndex,
      }
      existingParams.push(procedureParamMetadata)
      Reflect.defineMetadata(
        PROCEDURE_PARAM_METADATA_KEY,
        existingParams,
        target,
        propertyKey,
      )
    }
  }
}
