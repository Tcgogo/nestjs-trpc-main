import { DecoratorGeneratorMetadata } from "../generator.interface-B67TxlW0.js";
import { Decorator, Project, SourceFile } from "ts-morph";

//#region lib/generators/decorator.generator.d.ts
declare class DecoratorGenerator {
  private readonly consoleLogger;
  private readonly procedureGenerator;
  serializeProcedureDecorators(decorators: Decorator[], sourceFile: SourceFile, project: Project): Array<DecoratorGeneratorMetadata>;
  getDecoratorPropertyValue(decorator: Decorator, propertyName: string, sourceFile: SourceFile, project: Project): string | null;
}
//# sourceMappingURL=decorator.generator.d.ts.map

//#endregion
export { DecoratorGenerator };
//# sourceMappingURL=decorator.generator.d.ts.map