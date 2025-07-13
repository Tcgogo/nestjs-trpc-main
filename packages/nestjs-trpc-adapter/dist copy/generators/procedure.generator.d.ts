import { ProcedureGeneratorMetadata } from "../generator.interface-B67TxlW0.js";
import { Node, Project, SourceFile } from "ts-morph";

//#region lib/generators/procedure.generator.d.ts
declare class ProcedureGenerator {
  private readonly importsScanner;
  private readonly staticGenerator;
  private readonly appRouterSourceFile;
  generateProcedureString(procedure: ProcedureGeneratorMetadata): string;
  flattenZodSchema(node: Node, sourceFile: SourceFile, project: Project, schema: string): string;
}
//# sourceMappingURL=procedure.generator.d.ts.map

//#endregion
export { ProcedureGenerator };
//# sourceMappingURL=procedure.generator.d.ts.map