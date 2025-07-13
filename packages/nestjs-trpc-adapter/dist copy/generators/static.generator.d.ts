import { SourceFileImportsMap } from "../generator.interface-B67TxlW0.js";
import { SourceFile, Type } from "ts-morph";

//#region lib/generators/static.generator.d.ts
declare class StaticGenerator {
  generateStaticDeclaration(sourceFile: SourceFile): void;
  addSchemaImports(sourceFile: SourceFile, schemaImportNames: Array<string>, importsMap: Map<string, SourceFileImportsMap>): void;
  findCtxOutProperty(type: Type): string | undefined;
}
//# sourceMappingURL=static.generator.d.ts.map

//#endregion
export { StaticGenerator };
//# sourceMappingURL=static.generator.d.ts.map