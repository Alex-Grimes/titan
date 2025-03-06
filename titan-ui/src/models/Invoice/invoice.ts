export class Invoice {
  id: string
  billerStreetAddress: string
  billerCity: string
  billerZip: string

constructor(opts?: Partial<Invoice>) {
    this.id = opts.id
    this.billerStreetAddress = invoice.billerStreetAddress
    this.billerCity = invoice.billerCity
    this.billerZip = invoice.billerZip
  }
}
