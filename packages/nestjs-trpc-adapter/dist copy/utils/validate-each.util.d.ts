//#region lib/utils/validate-each.util.d.ts
declare class InvalidDecoratorItemException extends Error {
  private readonly msg;
  constructor(decorator: string, item: string, context: string);
  what(): string;
}
declare function validateEach(context: {
  name: string;
}, arr: any[], predicate: (...args: any) => unknown, decorator: string, item: string): boolean;
//# sourceMappingURL=validate-each.util.d.ts.map
//#endregion
export { InvalidDecoratorItemException, validateEach };
//# sourceMappingURL=validate-each.util.d.ts.map