import { ClassDeclaration, EnumDeclaration, Expression, FunctionDeclaration, InterfaceDeclaration, SourceFile, VariableDeclaration } from "ts-morph";

//#region lib/interfaces/generator.interface.d.ts
interface RouterGeneratorMetadata {
  name: string;
  alias?: string;
  procedures: Array<ProcedureGeneratorMetadata>;
}
interface ProcedureGeneratorMetadata {
  name: string;
  decorators: Array<DecoratorGeneratorMetadata>;
}
interface DecoratorGeneratorMetadata {
  name: 'Query' | 'Mutation';
  arguments: {
    input?: string;
    output?: string;
  };
}
interface SourceFileImportsMap {
  initializer: Expression | ClassDeclaration | InterfaceDeclaration | EnumDeclaration | VariableDeclaration | FunctionDeclaration;
  sourceFile: SourceFile;
}
//# sourceMappingURL=generator.interface.d.ts.map

//#endregion
export { DecoratorGeneratorMetadata, ProcedureGeneratorMetadata, RouterGeneratorMetadata, SourceFileImportsMap };
//# sourceMappingURL=generator.interface-B67TxlW0.d.ts.map