export class Category {
  constructor(public id: number, public description: string) {
  }

  public get isAll(): boolean {
    return this.id == 0;
  }
}
