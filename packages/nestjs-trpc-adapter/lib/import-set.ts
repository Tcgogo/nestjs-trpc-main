import { Injectable } from '@nestjs/common'

@Injectable()
export class ImportSet {
  private _importSet = new Set<string>()

  addImport(value: string) {
    this._importSet.add(value)
  }

  clearImport() {
    this._importSet.clear()
  }

  get importSet(): Set<string> {
    return this._importSet
  }
}
