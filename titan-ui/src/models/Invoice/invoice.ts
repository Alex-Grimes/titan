export class Invoice {
  id?: string
  billerStreetAddress?: string
  billerCity?: string
  billerZip?: string
  billerCountry?: string
  clientName?: string
  clientEmail?: string
  clientStreetAddress?: string
  clientCity?: string
  clientZipCode?: string
  clientCountry?: string
  invoiceDateUnix?: Date
  invoiceDate?: Date
  paymentTerms?: string
  paymentDueDateUnix?: Date
  paymentDueDate?: Date
  productDescription?: string
  invoiceItemList?: []
  invoiceTotal?: number
  invoicePending?: boolean
  invoiceDraft?: boolean
  invoicePaid?: boolean

  constructor(opts?: Partial<Invoice>) {
    if (opts?.id != null) {
      this.id = opts.id
    }

    if (opts?.billerStreetAddress != null) {
      this.billerStreetAddress = opts.billerStreetAddress
    }

    if (opts?.billerCity != null) {
      this.billerCity = opts.billerCity
    }

    if (opts?.billerZip != null) {
      this.billerZip = opts.billerZip
    }

    if (opts?.billerCountry != null) {
      this.billerCountry = opts.billerCountry
    }

    if (opts?.clientName != null) {
      this.clientName = opts.clientName
    }

    if (opts?.clientEmail != null) {
      this.clientEmail = opts.clientEmail
    }

    if (opts?.clientStreetAddress != null) {
      this.clientStreetAddress = opts.clientStreetAddress
    }

    if (opts?.clientCity != null) {
      this.clientCity = opts.clientCity
    }

    if (opts?.clientZipCode != null) {
      this.clientZipCode = opts.clientZipCode
    }

    if (opts?.clientCountry != null) {
      this.clientCountry = opts.clientCountry
    }

    if (opts?.invoiceDateUnix != null) {
      this.invoiceDateUnix = opts.invoiceDateUnix
    }

    if (opts?.invoiceDate != null) {
      this.invoiceDate = opts.invoiceDate
    }

    if (opts?.paymentTerms != null) {
      this.paymentTerms = opts.paymentTerms
    }

    if (opts?.paymentDueDateUnix != null) {
      this.paymentDueDateUnix = opts.paymentDueDateUnix
    }

    if (opts?.paymentDueDate != null) {
      this.paymentDueDate = opts.paymentDueDate
    }

    if (opts?.productDescription != null) {
      this.productDescription = opts.productDescription
    }

    if (opts?.invoiceItemList != null) {
      this.invoiceItemList = opts.invoiceItemList
    }

    if (opts?.invoiceTotal != null) {
      this.invoiceTotal = opts.invoiceTotal
    }

    if (opts?.invoicePending != null) {
      this.invoicePending = opts.invoicePending
    }

    if (opts?.invoiceDraft != null) {
      this.invoiceDraft = opts.invoiceDraft
    }

    if (opts?.invoicePaid != null) {
      this.invoicePaid = opts.invoicePaid
    }
  }
}
