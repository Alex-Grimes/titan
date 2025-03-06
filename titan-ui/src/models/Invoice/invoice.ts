export default class Invoice {
  id: string
  billerStreetAddress: string
  billerCity: string
  billerZip: string

  public constructor(invoice: Invoice) {
    this.id = invoice.id
    this.billerStreetAddress = invoice.billerStreetAddress
    this.billerCity = invoice.billerCity
    this.billerZip = invoice.billerZip
  }
}
