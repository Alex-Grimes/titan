export class Item {
  itemName?: string
  qty?: number
  price?: number
  total?: number

  constructor(opts?: Partial<Item>) {
    if (opts?.itemName != null) {
      this.itemName = opts.itemName
    }

    if (opts?.qty != null) {
      this.qty = opts.qty
    }

    if (opts?.price != null) {
      this.price = opts.price
    }

    if (opts?.total != null) {
      this.total = opts.total
    }
  }
}
