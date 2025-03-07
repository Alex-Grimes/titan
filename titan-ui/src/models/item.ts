export class Item {
  itemName?: string
  qty?: number
  price?: number
  total?: number

  constructor(opts?: Partial<Item>) {
    if (opts?.itemName != null) {
      this.itemName = opts.itemName
    }
    this.qty = opts?.qty
    this.price = opts?.price
    this.total = opts?.total
  }
}
