import { SourceFileImportsMap } from "../generator.interface-B67TxlW0.js";
import { Project, SourceFile } from "ts-morph";

//#region lib/scanners/imports.scanner.d.ts
declare class ImportsScanner {
  buildSourceFileImportsMap(sourceFile: SourceFile, project: Project): Map<string, SourceFileImportsMap>;
  /**
   * https://github.com/dsherret/ts-morph/issues/327
   * Note that if the module resolution of the compiler is Classic then it won't resolve those implicit index.ts module specifiers.
   * So for example, if the moduleResolution compiler option isn't explicitly set then setting the module
   * compiler option to anything but ModuleKind.CommonJS will cause the module resolution kind to resolve to Classic.
   * Additionally, if moduleResolution and the module compiler option isn't set,
   * then a script target of ES2015 and above will also use Classic module resolution.
   */
  private resolveBarrelFileImport;
}
//# sourceMappingURL=imports.scanner.d.ts.map

//#endregion
export { ImportsScanner };
//# sourceMappingURL=imports.scanner.d.ts.map