// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Empty, Timestamp, OptString } from "../pb/types";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "rpx";

export interface Billing {}

export enum Billing_Processor {
  Undefined = 0,
  Stripe = 1,
}

export interface Customer {
  sid: string;
  description: string;
  address: string;
  taxId: string;
  invoicePrefix: string;
  stripeId: string;
  braintreeId: string;
  createdAt: Timestamp | undefined;
  subscriptionId: string;
  invoicesToBackfill: boolean;
  billingEmailLimit: number;
}

export interface CustomersCreateReq {
  name: string;
  email: string;
  address: string;
  taxId: string;
}

export interface CustomersGetBySIDReq {
  customerSid: string;
}

export interface CustomersGetByStripeIDReq {
  stripeId: string;
}

export interface CustomersUpdateReq {
  customerSid: string;
  address: OptString | undefined;
  taxId: OptString | undefined;
  description: OptString | undefined;
  subscriptionId: OptString | undefined;
}

export interface CustomersDeleteReq {
  customerSid: string;
}

export interface CustomersGetAllReq {}

export interface CustomersGetAllResp {
  customers: Customer[];
}

export interface Invoice {
  sid: string;
  stripeId: string;
  customerSid: string;
  issuedAt: Timestamp | undefined;
  dueAt: Timestamp | undefined;
  total: number;
  previousBalance: number;
  amountDue: number;
  amountPaid: number;
  lineItems: InvoiceLineItem[];
  number: string;
  createdAt: Timestamp | undefined;
  forwardBalance: number;
}

export interface InvoiceLineItem {
  sid: string;
  description: string;
  unitAmount: number;
  quantity: number;
  amount: number;
  periodStart: Timestamp | undefined;
  periodEnd: Timestamp | undefined;
}

/** internal database serialization only */
export interface InvoiceLineItems {
  values: InvoiceLineItem[];
}

export interface InvoicesImportReq {
  stripeId: string;
  suppressEmail: boolean;
  invoiceCount: number;
}

export interface InvoicesGeneratePDFReq {
  invoiceSid: string;
}

export interface InvoicesGetPDFReq {
  invoiceSid: string;
}

export interface InvoicesGetPDFResp {
  pdf: Uint8Array;
}

export interface InvoicesGetBySIDReq {
  invoiceSid: string;
  customerSid: string;
}

export interface InvoicesGetByNumberReq {
  number: string;
}

export interface InvoicesGetByCustomerReq {
  customerSid: string;
}

export interface InvoicesGetByCustomerResp {
  invoices: Invoice[];
}

export interface InvoicesPayUnpaidReq {
  customerSid: string;
}

export interface InvoicesUpcomingReq {
  rawStripeInvoice: Uint8Array;
}

export interface InvoicesImportByCustomerReq {
  customerSid: string;
}

export interface Payment {
  sid: string;
  stripeId: string;
  customerSid: string;
  invoiceSid: string;
  amount: number;
  methodDescription: string;
  chargedAt: Timestamp | undefined;
  createdAt: Timestamp | undefined;
  status: Payment_Status;
  failureReason: string;
  sourceSid: string;
}

export enum Payment_Status {
  Undefined = 0,
  Succeeded = 1,
  Failed = 2,
}

export interface PaymentsGetBySIDReq {
  paymentSid: string;
  customerSid: string;
}

export interface PaymentsGetByCustomerReq {
  customerSid: string;
}

export interface PaymentsGetByCustomerResp {
  payments: Payment[];
}

/**
 * -----------------
 * Refunds
 * -----------------
 */
export interface Refund {
  sid: string;
  stripeId: string;
  customerSid: string;
  paymentSid: string;
  amount: number;
  refundedAt: Timestamp | undefined;
  createdAt: Timestamp | undefined;
}

export interface RefundsImportReq {
  stripeId: string;
}

export interface RefundsGeneratePDFReq {
  refundSid: string;
}

export interface RefundsGetBySIDReq {
  refundSid: string;
  customerSid: string;
}

export interface RefundsGetByCustomerReq {
  customerSid: string;
}

export interface RefundsGetByCustomerResp {
  refunds: Refund[];
}

export interface Card {
  sid: string;
  customerSid: string;
  name: string;
  address: Address | undefined;
  description: string;
  expMonth: number;
  expYear: number;
  last4: string;
  number: string;
  cvv: string;
  defaultProcessor: Billing_Processor;
  createdAt: Timestamp | undefined;
  brand: string;
  stripeId: string;
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface CardsCreateReq {
  description: string;
  customerSid: string;
  stripeToken: string;
}

export interface CardsGetBySIDReq {
  cardSid: string;
  customerSid: string;
}

export interface CardsDeleteReq {
  cardSid: string;
}

export interface CardsGetByCustomerReq {
  customerSid: string;
}

export interface BillingEmail {
  sid: string;
  customerSid: string;
  address: string;
  createdAt: Timestamp | undefined;
  deleteProtection: boolean;
}

export interface BillingEmailsCreateReq {
  address: string;
  customerSid: string;
  deleteProtection: boolean;
}

export interface BillingEmailsUpdateReq {
  billingEmailSid: string;
  address: string;
}

export interface BillingEmailsDeleteReq {
  billingEmailSid: string;
  override: boolean;
}

export interface BillingEmailsGetBySIDReq {
  billingEmailSid: string;
  customerSid: string;
}

export interface BillingEmailsGetByCustomerReq {
  customerSid: string;
}

export interface BillingEmailsDeleteByCustomerReq {
  customerSid: string;
}

export interface BillingEmailsGetByCustomerResp {
  emails: BillingEmail[];
}

export interface ToolBillingGetInfoReq {
  accountId: number;
}

export interface ToolBillingInfo {
  plans: ToolPlan[];
  currentPlanId: string;
  currentInterval: Subscription_Interval;
  licenseCount: number;
  balance: number;
  credit: ToolCredit | undefined;
  discount: ToolDiscount | undefined;
  card: Card | undefined;
}

export interface ToolDiscount {
  percentOff: number;
  end: Timestamp | undefined;
}

export interface ToolPlan {
  name: string;
  id: string;
  old: boolean;
  custom: boolean;
  perItem: boolean;
  monthly: ToolPlan_Period | undefined;
  annual: ToolPlan_Period | undefined;
}

export interface ToolPlan_Period {
  amount: number;
  projected: number;
  willRefund: boolean;
  prorated: boolean;
}

export interface Subscription {}

export enum Subscription_Interval {
  Undefined = 0,
  Monthly = 1,
  Annual = 2,
}

export interface ToolCredit {
  amount: number;
  description: string;
  invoiceDescription: string;
}

export interface ToolBillingChangePlanReq {
  accountId: number;
  planId: string;
  interval: Subscription_Interval;
}

export interface ToolBillingChangePlanResp {
  mrr: number;
}

export interface ToolBillingGetProductNameReq {
  productId: string;
}

export interface ToolBillingGetProductNameResp {
  name: string;
}

const baseBilling: object = {};

export const Billing = {
  encode(_: Billing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Billing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBilling } as Billing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(_: DeepPartial<Billing>): Billing {
    const message = { ...baseBilling } as Billing;
    return message;
  },
};

const baseCustomer: object = {
  sid: "",
  description: "",
  address: "",
  taxId: "",
  invoicePrefix: "",
  stripeId: "",
  braintreeId: "",
  subscriptionId: "",
  invoicesToBackfill: false,
  billingEmailLimit: 0,
};

export const Customer = {
  encode(
    message: Customer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(10).string(message.sid);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.taxId !== "") {
      writer.uint32(42).string(message.taxId);
    }
    if (message.invoicePrefix !== "") {
      writer.uint32(74).string(message.invoicePrefix);
    }
    if (message.stripeId !== "") {
      writer.uint32(82).string(message.stripeId);
    }
    if (message.braintreeId !== "") {
      writer.uint32(90).string(message.braintreeId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(98).fork()).ldelim();
    }
    if (message.subscriptionId !== "") {
      writer.uint32(106).string(message.subscriptionId);
    }
    if (message.invoicesToBackfill === true) {
      writer.uint32(112).bool(message.invoicesToBackfill);
    }
    if (message.billingEmailLimit !== 0) {
      writer.uint32(120).int64(message.billingEmailLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Customer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomer } as Customer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sid = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.taxId = reader.string();
          break;
        case 9:
          message.invoicePrefix = reader.string();
          break;
        case 10:
          message.stripeId = reader.string();
          break;
        case 11:
          message.braintreeId = reader.string();
          break;
        case 12:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 13:
          message.subscriptionId = reader.string();
          break;
        case 14:
          message.invoicesToBackfill = reader.bool();
          break;
        case 15:
          message.billingEmailLimit = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Customer>): Customer {
    const message = { ...baseCustomer } as Customer;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.taxId !== undefined && object.taxId !== null) {
      message.taxId = object.taxId;
    } else {
      message.taxId = "";
    }
    if (object.invoicePrefix !== undefined && object.invoicePrefix !== null) {
      message.invoicePrefix = object.invoicePrefix;
    } else {
      message.invoicePrefix = "";
    }
    if (object.stripeId !== undefined && object.stripeId !== null) {
      message.stripeId = object.stripeId;
    } else {
      message.stripeId = "";
    }
    if (object.braintreeId !== undefined && object.braintreeId !== null) {
      message.braintreeId = object.braintreeId;
    } else {
      message.braintreeId = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.subscriptionId !== undefined && object.subscriptionId !== null) {
      message.subscriptionId = object.subscriptionId;
    } else {
      message.subscriptionId = "";
    }
    if (
      object.invoicesToBackfill !== undefined &&
      object.invoicesToBackfill !== null
    ) {
      message.invoicesToBackfill = object.invoicesToBackfill;
    } else {
      message.invoicesToBackfill = false;
    }
    if (
      object.billingEmailLimit !== undefined &&
      object.billingEmailLimit !== null
    ) {
      message.billingEmailLimit = object.billingEmailLimit;
    } else {
      message.billingEmailLimit = 0;
    }
    return message;
  },
};

const baseCustomersCreateReq: object = {
  name: "",
  email: "",
  address: "",
  taxId: "",
};

export const CustomersCreateReq = {
  encode(
    message: CustomersCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.taxId !== "") {
      writer.uint32(34).string(message.taxId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomersCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomersCreateReq } as CustomersCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.taxId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CustomersCreateReq>): CustomersCreateReq {
    const message = { ...baseCustomersCreateReq } as CustomersCreateReq;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.taxId !== undefined && object.taxId !== null) {
      message.taxId = object.taxId;
    } else {
      message.taxId = "";
    }
    return message;
  },
};

const baseCustomersGetBySIDReq: object = { customerSid: "" };

export const CustomersGetBySIDReq = {
  encode(
    message: CustomersGetBySIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CustomersGetBySIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomersGetBySIDReq } as CustomersGetBySIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CustomersGetBySIDReq>): CustomersGetBySIDReq {
    const message = { ...baseCustomersGetBySIDReq } as CustomersGetBySIDReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseCustomersGetByStripeIDReq: object = { stripeId: "" };

export const CustomersGetByStripeIDReq = {
  encode(
    message: CustomersGetByStripeIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stripeId !== "") {
      writer.uint32(10).string(message.stripeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CustomersGetByStripeIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCustomersGetByStripeIDReq,
    } as CustomersGetByStripeIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stripeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<CustomersGetByStripeIDReq>
  ): CustomersGetByStripeIDReq {
    const message = {
      ...baseCustomersGetByStripeIDReq,
    } as CustomersGetByStripeIDReq;
    if (object.stripeId !== undefined && object.stripeId !== null) {
      message.stripeId = object.stripeId;
    } else {
      message.stripeId = "";
    }
    return message;
  },
};

const baseCustomersUpdateReq: object = { customerSid: "" };

export const CustomersUpdateReq = {
  encode(
    message: CustomersUpdateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    if (message.address !== undefined) {
      OptString.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    if (message.taxId !== undefined) {
      OptString.encode(message.taxId, writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== undefined) {
      OptString.encode(message.description, writer.uint32(34).fork()).ldelim();
    }
    if (message.subscriptionId !== undefined) {
      OptString.encode(
        message.subscriptionId,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomersUpdateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomersUpdateReq } as CustomersUpdateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        case 2:
          message.address = OptString.decode(reader, reader.uint32());
          break;
        case 3:
          message.taxId = OptString.decode(reader, reader.uint32());
          break;
        case 4:
          message.description = OptString.decode(reader, reader.uint32());
          break;
        case 5:
          message.subscriptionId = OptString.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CustomersUpdateReq>): CustomersUpdateReq {
    const message = { ...baseCustomersUpdateReq } as CustomersUpdateReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = OptString.fromPartial(object.address);
    } else {
      message.address = undefined;
    }
    if (object.taxId !== undefined && object.taxId !== null) {
      message.taxId = OptString.fromPartial(object.taxId);
    } else {
      message.taxId = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = OptString.fromPartial(object.description);
    } else {
      message.description = undefined;
    }
    if (object.subscriptionId !== undefined && object.subscriptionId !== null) {
      message.subscriptionId = OptString.fromPartial(object.subscriptionId);
    } else {
      message.subscriptionId = undefined;
    }
    return message;
  },
};

const baseCustomersDeleteReq: object = { customerSid: "" };

export const CustomersDeleteReq = {
  encode(
    message: CustomersDeleteReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomersDeleteReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomersDeleteReq } as CustomersDeleteReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CustomersDeleteReq>): CustomersDeleteReq {
    const message = { ...baseCustomersDeleteReq } as CustomersDeleteReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseCustomersGetAllReq: object = {};

export const CustomersGetAllReq = {
  encode(
    _: CustomersGetAllReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomersGetAllReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomersGetAllReq } as CustomersGetAllReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(_: DeepPartial<CustomersGetAllReq>): CustomersGetAllReq {
    const message = { ...baseCustomersGetAllReq } as CustomersGetAllReq;
    return message;
  },
};

const baseCustomersGetAllResp: object = {};

export const CustomersGetAllResp = {
  encode(
    message: CustomersGetAllResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.customers) {
      Customer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomersGetAllResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomersGetAllResp } as CustomersGetAllResp;
    message.customers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customers.push(Customer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CustomersGetAllResp>): CustomersGetAllResp {
    const message = { ...baseCustomersGetAllResp } as CustomersGetAllResp;
    message.customers = [];
    if (object.customers !== undefined && object.customers !== null) {
      for (const e of object.customers) {
        message.customers.push(Customer.fromPartial(e));
      }
    }
    return message;
  },
};

const baseInvoice: object = {
  sid: "",
  stripeId: "",
  customerSid: "",
  total: 0,
  previousBalance: 0,
  amountDue: 0,
  amountPaid: 0,
  number: "",
  forwardBalance: 0,
};

export const Invoice = {
  encode(
    message: Invoice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(10).string(message.sid);
    }
    if (message.stripeId !== "") {
      writer.uint32(18).string(message.stripeId);
    }
    if (message.customerSid !== "") {
      writer.uint32(26).string(message.customerSid);
    }
    if (message.issuedAt !== undefined) {
      Timestamp.encode(message.issuedAt, writer.uint32(34).fork()).ldelim();
    }
    if (message.dueAt !== undefined) {
      Timestamp.encode(message.dueAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(48).int64(message.total);
    }
    if (message.previousBalance !== 0) {
      writer.uint32(56).int64(message.previousBalance);
    }
    if (message.amountDue !== 0) {
      writer.uint32(64).int64(message.amountDue);
    }
    if (message.amountPaid !== 0) {
      writer.uint32(72).int64(message.amountPaid);
    }
    for (const v of message.lineItems) {
      InvoiceLineItem.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.number !== "") {
      writer.uint32(90).string(message.number);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(98).fork()).ldelim();
    }
    if (message.forwardBalance !== 0) {
      writer.uint32(104).int64(message.forwardBalance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Invoice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoice } as Invoice;
    message.lineItems = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sid = reader.string();
          break;
        case 2:
          message.stripeId = reader.string();
          break;
        case 3:
          message.customerSid = reader.string();
          break;
        case 4:
          message.issuedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.dueAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.total = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.previousBalance = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.amountDue = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.amountPaid = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.lineItems.push(
            InvoiceLineItem.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.number = reader.string();
          break;
        case 12:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 13:
          message.forwardBalance = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Invoice>): Invoice {
    const message = { ...baseInvoice } as Invoice;
    message.lineItems = [];
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.stripeId !== undefined && object.stripeId !== null) {
      message.stripeId = object.stripeId;
    } else {
      message.stripeId = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    if (object.issuedAt !== undefined && object.issuedAt !== null) {
      message.issuedAt = Timestamp.fromPartial(object.issuedAt);
    } else {
      message.issuedAt = undefined;
    }
    if (object.dueAt !== undefined && object.dueAt !== null) {
      message.dueAt = Timestamp.fromPartial(object.dueAt);
    } else {
      message.dueAt = undefined;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    if (
      object.previousBalance !== undefined &&
      object.previousBalance !== null
    ) {
      message.previousBalance = object.previousBalance;
    } else {
      message.previousBalance = 0;
    }
    if (object.amountDue !== undefined && object.amountDue !== null) {
      message.amountDue = object.amountDue;
    } else {
      message.amountDue = 0;
    }
    if (object.amountPaid !== undefined && object.amountPaid !== null) {
      message.amountPaid = object.amountPaid;
    } else {
      message.amountPaid = 0;
    }
    if (object.lineItems !== undefined && object.lineItems !== null) {
      for (const e of object.lineItems) {
        message.lineItems.push(InvoiceLineItem.fromPartial(e));
      }
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    } else {
      message.number = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.forwardBalance !== undefined && object.forwardBalance !== null) {
      message.forwardBalance = object.forwardBalance;
    } else {
      message.forwardBalance = 0;
    }
    return message;
  },
};

const baseInvoiceLineItem: object = {
  sid: "",
  description: "",
  unitAmount: 0,
  quantity: 0,
  amount: 0,
};

export const InvoiceLineItem = {
  encode(
    message: InvoiceLineItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(10).string(message.sid);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.unitAmount !== 0) {
      writer.uint32(24).int64(message.unitAmount);
    }
    if (message.quantity !== 0) {
      writer.uint32(32).int64(message.quantity);
    }
    if (message.amount !== 0) {
      writer.uint32(40).int64(message.amount);
    }
    if (message.periodStart !== undefined) {
      Timestamp.encode(message.periodStart, writer.uint32(50).fork()).ldelim();
    }
    if (message.periodEnd !== undefined) {
      Timestamp.encode(message.periodEnd, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceLineItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoiceLineItem } as InvoiceLineItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sid = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.unitAmount = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.periodStart = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.periodEnd = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoiceLineItem>): InvoiceLineItem {
    const message = { ...baseInvoiceLineItem } as InvoiceLineItem;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.unitAmount !== undefined && object.unitAmount !== null) {
      message.unitAmount = object.unitAmount;
    } else {
      message.unitAmount = 0;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.periodStart !== undefined && object.periodStart !== null) {
      message.periodStart = Timestamp.fromPartial(object.periodStart);
    } else {
      message.periodStart = undefined;
    }
    if (object.periodEnd !== undefined && object.periodEnd !== null) {
      message.periodEnd = Timestamp.fromPartial(object.periodEnd);
    } else {
      message.periodEnd = undefined;
    }
    return message;
  },
};

const baseInvoiceLineItems: object = {};

export const InvoiceLineItems = {
  encode(
    message: InvoiceLineItems,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      InvoiceLineItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceLineItems {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoiceLineItems } as InvoiceLineItems;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(InvoiceLineItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoiceLineItems>): InvoiceLineItems {
    const message = { ...baseInvoiceLineItems } as InvoiceLineItems;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(InvoiceLineItem.fromPartial(e));
      }
    }
    return message;
  },
};

const baseInvoicesImportReq: object = {
  stripeId: "",
  suppressEmail: false,
  invoiceCount: 0,
};

export const InvoicesImportReq = {
  encode(
    message: InvoicesImportReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stripeId !== "") {
      writer.uint32(10).string(message.stripeId);
    }
    if (message.suppressEmail === true) {
      writer.uint32(16).bool(message.suppressEmail);
    }
    if (message.invoiceCount !== 0) {
      writer.uint32(24).int64(message.invoiceCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoicesImportReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicesImportReq } as InvoicesImportReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stripeId = reader.string();
          break;
        case 2:
          message.suppressEmail = reader.bool();
          break;
        case 3:
          message.invoiceCount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoicesImportReq>): InvoicesImportReq {
    const message = { ...baseInvoicesImportReq } as InvoicesImportReq;
    if (object.stripeId !== undefined && object.stripeId !== null) {
      message.stripeId = object.stripeId;
    } else {
      message.stripeId = "";
    }
    if (object.suppressEmail !== undefined && object.suppressEmail !== null) {
      message.suppressEmail = object.suppressEmail;
    } else {
      message.suppressEmail = false;
    }
    if (object.invoiceCount !== undefined && object.invoiceCount !== null) {
      message.invoiceCount = object.invoiceCount;
    } else {
      message.invoiceCount = 0;
    }
    return message;
  },
};

const baseInvoicesGeneratePDFReq: object = { invoiceSid: "" };

export const InvoicesGeneratePDFReq = {
  encode(
    message: InvoicesGeneratePDFReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.invoiceSid !== "") {
      writer.uint32(10).string(message.invoiceSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvoicesGeneratePDFReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicesGeneratePDFReq } as InvoicesGeneratePDFReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoiceSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvoicesGeneratePDFReq>
  ): InvoicesGeneratePDFReq {
    const message = { ...baseInvoicesGeneratePDFReq } as InvoicesGeneratePDFReq;
    if (object.invoiceSid !== undefined && object.invoiceSid !== null) {
      message.invoiceSid = object.invoiceSid;
    } else {
      message.invoiceSid = "";
    }
    return message;
  },
};

const baseInvoicesGetPDFReq: object = { invoiceSid: "" };

export const InvoicesGetPDFReq = {
  encode(
    message: InvoicesGetPDFReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.invoiceSid !== "") {
      writer.uint32(10).string(message.invoiceSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoicesGetPDFReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicesGetPDFReq } as InvoicesGetPDFReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoiceSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoicesGetPDFReq>): InvoicesGetPDFReq {
    const message = { ...baseInvoicesGetPDFReq } as InvoicesGetPDFReq;
    if (object.invoiceSid !== undefined && object.invoiceSid !== null) {
      message.invoiceSid = object.invoiceSid;
    } else {
      message.invoiceSid = "";
    }
    return message;
  },
};

const baseInvoicesGetPDFResp: object = {};

export const InvoicesGetPDFResp = {
  encode(
    message: InvoicesGetPDFResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pdf.length !== 0) {
      writer.uint32(10).bytes(message.pdf);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoicesGetPDFResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicesGetPDFResp } as InvoicesGetPDFResp;
    message.pdf = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pdf = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoicesGetPDFResp>): InvoicesGetPDFResp {
    const message = { ...baseInvoicesGetPDFResp } as InvoicesGetPDFResp;
    if (object.pdf !== undefined && object.pdf !== null) {
      message.pdf = object.pdf;
    } else {
      message.pdf = new Uint8Array();
    }
    return message;
  },
};

const baseInvoicesGetBySIDReq: object = { invoiceSid: "", customerSid: "" };

export const InvoicesGetBySIDReq = {
  encode(
    message: InvoicesGetBySIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.invoiceSid !== "") {
      writer.uint32(10).string(message.invoiceSid);
    }
    if (message.customerSid !== "") {
      writer.uint32(18).string(message.customerSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoicesGetBySIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicesGetBySIDReq } as InvoicesGetBySIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoiceSid = reader.string();
          break;
        case 2:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoicesGetBySIDReq>): InvoicesGetBySIDReq {
    const message = { ...baseInvoicesGetBySIDReq } as InvoicesGetBySIDReq;
    if (object.invoiceSid !== undefined && object.invoiceSid !== null) {
      message.invoiceSid = object.invoiceSid;
    } else {
      message.invoiceSid = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseInvoicesGetByNumberReq: object = { number: "" };

export const InvoicesGetByNumberReq = {
  encode(
    message: InvoicesGetByNumberReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.number !== "") {
      writer.uint32(10).string(message.number);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvoicesGetByNumberReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicesGetByNumberReq } as InvoicesGetByNumberReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvoicesGetByNumberReq>
  ): InvoicesGetByNumberReq {
    const message = { ...baseInvoicesGetByNumberReq } as InvoicesGetByNumberReq;
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    } else {
      message.number = "";
    }
    return message;
  },
};

const baseInvoicesGetByCustomerReq: object = { customerSid: "" };

export const InvoicesGetByCustomerReq = {
  encode(
    message: InvoicesGetByCustomerReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvoicesGetByCustomerReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvoicesGetByCustomerReq,
    } as InvoicesGetByCustomerReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvoicesGetByCustomerReq>
  ): InvoicesGetByCustomerReq {
    const message = {
      ...baseInvoicesGetByCustomerReq,
    } as InvoicesGetByCustomerReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseInvoicesGetByCustomerResp: object = {};

export const InvoicesGetByCustomerResp = {
  encode(
    message: InvoicesGetByCustomerResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.invoices) {
      Invoice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvoicesGetByCustomerResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvoicesGetByCustomerResp,
    } as InvoicesGetByCustomerResp;
    message.invoices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoices.push(Invoice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvoicesGetByCustomerResp>
  ): InvoicesGetByCustomerResp {
    const message = {
      ...baseInvoicesGetByCustomerResp,
    } as InvoicesGetByCustomerResp;
    message.invoices = [];
    if (object.invoices !== undefined && object.invoices !== null) {
      for (const e of object.invoices) {
        message.invoices.push(Invoice.fromPartial(e));
      }
    }
    return message;
  },
};

const baseInvoicesPayUnpaidReq: object = { customerSid: "" };

export const InvoicesPayUnpaidReq = {
  encode(
    message: InvoicesPayUnpaidReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvoicesPayUnpaidReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicesPayUnpaidReq } as InvoicesPayUnpaidReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoicesPayUnpaidReq>): InvoicesPayUnpaidReq {
    const message = { ...baseInvoicesPayUnpaidReq } as InvoicesPayUnpaidReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseInvoicesUpcomingReq: object = {};

export const InvoicesUpcomingReq = {
  encode(
    message: InvoicesUpcomingReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rawStripeInvoice.length !== 0) {
      writer.uint32(10).bytes(message.rawStripeInvoice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoicesUpcomingReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicesUpcomingReq } as InvoicesUpcomingReq;
    message.rawStripeInvoice = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rawStripeInvoice = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoicesUpcomingReq>): InvoicesUpcomingReq {
    const message = { ...baseInvoicesUpcomingReq } as InvoicesUpcomingReq;
    if (
      object.rawStripeInvoice !== undefined &&
      object.rawStripeInvoice !== null
    ) {
      message.rawStripeInvoice = object.rawStripeInvoice;
    } else {
      message.rawStripeInvoice = new Uint8Array();
    }
    return message;
  },
};

const baseInvoicesImportByCustomerReq: object = { customerSid: "" };

export const InvoicesImportByCustomerReq = {
  encode(
    message: InvoicesImportByCustomerReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvoicesImportByCustomerReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvoicesImportByCustomerReq,
    } as InvoicesImportByCustomerReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvoicesImportByCustomerReq>
  ): InvoicesImportByCustomerReq {
    const message = {
      ...baseInvoicesImportByCustomerReq,
    } as InvoicesImportByCustomerReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const basePayment: object = {
  sid: "",
  stripeId: "",
  customerSid: "",
  invoiceSid: "",
  amount: 0,
  methodDescription: "",
  status: 0,
  failureReason: "",
  sourceSid: "",
};

export const Payment = {
  encode(
    message: Payment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(10).string(message.sid);
    }
    if (message.stripeId !== "") {
      writer.uint32(18).string(message.stripeId);
    }
    if (message.customerSid !== "") {
      writer.uint32(26).string(message.customerSid);
    }
    if (message.invoiceSid !== "") {
      writer.uint32(34).string(message.invoiceSid);
    }
    if (message.amount !== 0) {
      writer.uint32(40).int64(message.amount);
    }
    if (message.methodDescription !== "") {
      writer.uint32(50).string(message.methodDescription);
    }
    if (message.chargedAt !== undefined) {
      Timestamp.encode(message.chargedAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.failureReason !== "") {
      writer.uint32(82).string(message.failureReason);
    }
    if (message.sourceSid !== "") {
      writer.uint32(90).string(message.sourceSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePayment } as Payment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sid = reader.string();
          break;
        case 2:
          message.stripeId = reader.string();
          break;
        case 3:
          message.customerSid = reader.string();
          break;
        case 4:
          message.invoiceSid = reader.string();
          break;
        case 5:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.methodDescription = reader.string();
          break;
        case 7:
          message.chargedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.status = reader.int32() as any;
          break;
        case 10:
          message.failureReason = reader.string();
          break;
        case 11:
          message.sourceSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Payment>): Payment {
    const message = { ...basePayment } as Payment;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.stripeId !== undefined && object.stripeId !== null) {
      message.stripeId = object.stripeId;
    } else {
      message.stripeId = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    if (object.invoiceSid !== undefined && object.invoiceSid !== null) {
      message.invoiceSid = object.invoiceSid;
    } else {
      message.invoiceSid = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (
      object.methodDescription !== undefined &&
      object.methodDescription !== null
    ) {
      message.methodDescription = object.methodDescription;
    } else {
      message.methodDescription = "";
    }
    if (object.chargedAt !== undefined && object.chargedAt !== null) {
      message.chargedAt = Timestamp.fromPartial(object.chargedAt);
    } else {
      message.chargedAt = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.failureReason !== undefined && object.failureReason !== null) {
      message.failureReason = object.failureReason;
    } else {
      message.failureReason = "";
    }
    if (object.sourceSid !== undefined && object.sourceSid !== null) {
      message.sourceSid = object.sourceSid;
    } else {
      message.sourceSid = "";
    }
    return message;
  },
};

const basePaymentsGetBySIDReq: object = { paymentSid: "", customerSid: "" };

export const PaymentsGetBySIDReq = {
  encode(
    message: PaymentsGetBySIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.paymentSid !== "") {
      writer.uint32(10).string(message.paymentSid);
    }
    if (message.customerSid !== "") {
      writer.uint32(18).string(message.customerSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentsGetBySIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePaymentsGetBySIDReq } as PaymentsGetBySIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentSid = reader.string();
          break;
        case 2:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<PaymentsGetBySIDReq>): PaymentsGetBySIDReq {
    const message = { ...basePaymentsGetBySIDReq } as PaymentsGetBySIDReq;
    if (object.paymentSid !== undefined && object.paymentSid !== null) {
      message.paymentSid = object.paymentSid;
    } else {
      message.paymentSid = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const basePaymentsGetByCustomerReq: object = { customerSid: "" };

export const PaymentsGetByCustomerReq = {
  encode(
    message: PaymentsGetByCustomerReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PaymentsGetByCustomerReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePaymentsGetByCustomerReq,
    } as PaymentsGetByCustomerReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<PaymentsGetByCustomerReq>
  ): PaymentsGetByCustomerReq {
    const message = {
      ...basePaymentsGetByCustomerReq,
    } as PaymentsGetByCustomerReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const basePaymentsGetByCustomerResp: object = {};

export const PaymentsGetByCustomerResp = {
  encode(
    message: PaymentsGetByCustomerResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.payments) {
      Payment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PaymentsGetByCustomerResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePaymentsGetByCustomerResp,
    } as PaymentsGetByCustomerResp;
    message.payments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payments.push(Payment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<PaymentsGetByCustomerResp>
  ): PaymentsGetByCustomerResp {
    const message = {
      ...basePaymentsGetByCustomerResp,
    } as PaymentsGetByCustomerResp;
    message.payments = [];
    if (object.payments !== undefined && object.payments !== null) {
      for (const e of object.payments) {
        message.payments.push(Payment.fromPartial(e));
      }
    }
    return message;
  },
};

const baseRefund: object = {
  sid: "",
  stripeId: "",
  customerSid: "",
  paymentSid: "",
  amount: 0,
};

export const Refund = {
  encode(
    message: Refund,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(10).string(message.sid);
    }
    if (message.stripeId !== "") {
      writer.uint32(18).string(message.stripeId);
    }
    if (message.customerSid !== "") {
      writer.uint32(26).string(message.customerSid);
    }
    if (message.paymentSid !== "") {
      writer.uint32(34).string(message.paymentSid);
    }
    if (message.amount !== 0) {
      writer.uint32(40).int64(message.amount);
    }
    if (message.refundedAt !== undefined) {
      Timestamp.encode(message.refundedAt, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Refund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRefund } as Refund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sid = reader.string();
          break;
        case 2:
          message.stripeId = reader.string();
          break;
        case 3:
          message.customerSid = reader.string();
          break;
        case 4:
          message.paymentSid = reader.string();
          break;
        case 5:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.refundedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Refund>): Refund {
    const message = { ...baseRefund } as Refund;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.stripeId !== undefined && object.stripeId !== null) {
      message.stripeId = object.stripeId;
    } else {
      message.stripeId = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    if (object.paymentSid !== undefined && object.paymentSid !== null) {
      message.paymentSid = object.paymentSid;
    } else {
      message.paymentSid = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.refundedAt !== undefined && object.refundedAt !== null) {
      message.refundedAt = Timestamp.fromPartial(object.refundedAt);
    } else {
      message.refundedAt = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

const baseRefundsImportReq: object = { stripeId: "" };

export const RefundsImportReq = {
  encode(
    message: RefundsImportReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stripeId !== "") {
      writer.uint32(10).string(message.stripeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefundsImportReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRefundsImportReq } as RefundsImportReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stripeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<RefundsImportReq>): RefundsImportReq {
    const message = { ...baseRefundsImportReq } as RefundsImportReq;
    if (object.stripeId !== undefined && object.stripeId !== null) {
      message.stripeId = object.stripeId;
    } else {
      message.stripeId = "";
    }
    return message;
  },
};

const baseRefundsGeneratePDFReq: object = { refundSid: "" };

export const RefundsGeneratePDFReq = {
  encode(
    message: RefundsGeneratePDFReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.refundSid !== "") {
      writer.uint32(10).string(message.refundSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RefundsGeneratePDFReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRefundsGeneratePDFReq } as RefundsGeneratePDFReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refundSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<RefundsGeneratePDFReq>
  ): RefundsGeneratePDFReq {
    const message = { ...baseRefundsGeneratePDFReq } as RefundsGeneratePDFReq;
    if (object.refundSid !== undefined && object.refundSid !== null) {
      message.refundSid = object.refundSid;
    } else {
      message.refundSid = "";
    }
    return message;
  },
};

const baseRefundsGetBySIDReq: object = { refundSid: "", customerSid: "" };

export const RefundsGetBySIDReq = {
  encode(
    message: RefundsGetBySIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.refundSid !== "") {
      writer.uint32(10).string(message.refundSid);
    }
    if (message.customerSid !== "") {
      writer.uint32(18).string(message.customerSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefundsGetBySIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRefundsGetBySIDReq } as RefundsGetBySIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refundSid = reader.string();
          break;
        case 2:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<RefundsGetBySIDReq>): RefundsGetBySIDReq {
    const message = { ...baseRefundsGetBySIDReq } as RefundsGetBySIDReq;
    if (object.refundSid !== undefined && object.refundSid !== null) {
      message.refundSid = object.refundSid;
    } else {
      message.refundSid = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseRefundsGetByCustomerReq: object = { customerSid: "" };

export const RefundsGetByCustomerReq = {
  encode(
    message: RefundsGetByCustomerReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RefundsGetByCustomerReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRefundsGetByCustomerReq,
    } as RefundsGetByCustomerReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<RefundsGetByCustomerReq>
  ): RefundsGetByCustomerReq {
    const message = {
      ...baseRefundsGetByCustomerReq,
    } as RefundsGetByCustomerReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseRefundsGetByCustomerResp: object = {};

export const RefundsGetByCustomerResp = {
  encode(
    message: RefundsGetByCustomerResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.refunds) {
      Refund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RefundsGetByCustomerResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRefundsGetByCustomerResp,
    } as RefundsGetByCustomerResp;
    message.refunds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refunds.push(Refund.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<RefundsGetByCustomerResp>
  ): RefundsGetByCustomerResp {
    const message = {
      ...baseRefundsGetByCustomerResp,
    } as RefundsGetByCustomerResp;
    message.refunds = [];
    if (object.refunds !== undefined && object.refunds !== null) {
      for (const e of object.refunds) {
        message.refunds.push(Refund.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCard: object = {
  sid: "",
  customerSid: "",
  name: "",
  description: "",
  expMonth: 0,
  expYear: 0,
  last4: "",
  number: "",
  cvv: "",
  defaultProcessor: 0,
  brand: "",
  stripeId: "",
};

export const Card = {
  encode(message: Card, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(10).string(message.sid);
    }
    if (message.customerSid !== "") {
      writer.uint32(18).string(message.customerSid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(34).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.expMonth !== 0) {
      writer.uint32(48).int32(message.expMonth);
    }
    if (message.expYear !== 0) {
      writer.uint32(56).int32(message.expYear);
    }
    if (message.last4 !== "") {
      writer.uint32(66).string(message.last4);
    }
    if (message.number !== "") {
      writer.uint32(74).string(message.number);
    }
    if (message.cvv !== "") {
      writer.uint32(82).string(message.cvv);
    }
    if (message.defaultProcessor !== 0) {
      writer.uint32(88).int32(message.defaultProcessor);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(98).fork()).ldelim();
    }
    if (message.brand !== "") {
      writer.uint32(106).string(message.brand);
    }
    if (message.stripeId !== "") {
      writer.uint32(162).string(message.stripeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Card {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCard } as Card;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sid = reader.string();
          break;
        case 2:
          message.customerSid = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.address = Address.decode(reader, reader.uint32());
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.expMonth = reader.int32();
          break;
        case 7:
          message.expYear = reader.int32();
          break;
        case 8:
          message.last4 = reader.string();
          break;
        case 9:
          message.number = reader.string();
          break;
        case 10:
          message.cvv = reader.string();
          break;
        case 11:
          message.defaultProcessor = reader.int32() as any;
          break;
        case 12:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 13:
          message.brand = reader.string();
          break;
        case 20:
          message.stripeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Card>): Card {
    const message = { ...baseCard } as Card;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = Address.fromPartial(object.address);
    } else {
      message.address = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.expMonth !== undefined && object.expMonth !== null) {
      message.expMonth = object.expMonth;
    } else {
      message.expMonth = 0;
    }
    if (object.expYear !== undefined && object.expYear !== null) {
      message.expYear = object.expYear;
    } else {
      message.expYear = 0;
    }
    if (object.last4 !== undefined && object.last4 !== null) {
      message.last4 = object.last4;
    } else {
      message.last4 = "";
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    } else {
      message.number = "";
    }
    if (object.cvv !== undefined && object.cvv !== null) {
      message.cvv = object.cvv;
    } else {
      message.cvv = "";
    }
    if (
      object.defaultProcessor !== undefined &&
      object.defaultProcessor !== null
    ) {
      message.defaultProcessor = object.defaultProcessor;
    } else {
      message.defaultProcessor = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.brand !== undefined && object.brand !== null) {
      message.brand = object.brand;
    } else {
      message.brand = "";
    }
    if (object.stripeId !== undefined && object.stripeId !== null) {
      message.stripeId = object.stripeId;
    } else {
      message.stripeId = "";
    }
    return message;
  },
};

const baseAddress: object = {
  line1: "",
  line2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};

export const Address = {
  encode(
    message: Address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.line1 !== "") {
      writer.uint32(10).string(message.line1);
    }
    if (message.line2 !== "") {
      writer.uint32(18).string(message.line2);
    }
    if (message.city !== "") {
      writer.uint32(26).string(message.city);
    }
    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }
    if (message.postalCode !== "") {
      writer.uint32(42).string(message.postalCode);
    }
    if (message.country !== "") {
      writer.uint32(50).string(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddress } as Address;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.line1 = reader.string();
          break;
        case 2:
          message.line2 = reader.string();
          break;
        case 3:
          message.city = reader.string();
          break;
        case 4:
          message.state = reader.string();
          break;
        case 5:
          message.postalCode = reader.string();
          break;
        case 6:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = { ...baseAddress } as Address;
    if (object.line1 !== undefined && object.line1 !== null) {
      message.line1 = object.line1;
    } else {
      message.line1 = "";
    }
    if (object.line2 !== undefined && object.line2 !== null) {
      message.line2 = object.line2;
    } else {
      message.line2 = "";
    }
    if (object.city !== undefined && object.city !== null) {
      message.city = object.city;
    } else {
      message.city = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    if (object.postalCode !== undefined && object.postalCode !== null) {
      message.postalCode = object.postalCode;
    } else {
      message.postalCode = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    return message;
  },
};

const baseCardsCreateReq: object = {
  description: "",
  customerSid: "",
  stripeToken: "",
};

export const CardsCreateReq = {
  encode(
    message: CardsCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.customerSid !== "") {
      writer.uint32(18).string(message.customerSid);
    }
    if (message.stripeToken !== "") {
      writer.uint32(162).string(message.stripeToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CardsCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCardsCreateReq } as CardsCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.customerSid = reader.string();
          break;
        case 20:
          message.stripeToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CardsCreateReq>): CardsCreateReq {
    const message = { ...baseCardsCreateReq } as CardsCreateReq;
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    if (object.stripeToken !== undefined && object.stripeToken !== null) {
      message.stripeToken = object.stripeToken;
    } else {
      message.stripeToken = "";
    }
    return message;
  },
};

const baseCardsGetBySIDReq: object = { cardSid: "", customerSid: "" };

export const CardsGetBySIDReq = {
  encode(
    message: CardsGetBySIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cardSid !== "") {
      writer.uint32(10).string(message.cardSid);
    }
    if (message.customerSid !== "") {
      writer.uint32(18).string(message.customerSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CardsGetBySIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCardsGetBySIDReq } as CardsGetBySIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardSid = reader.string();
          break;
        case 2:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CardsGetBySIDReq>): CardsGetBySIDReq {
    const message = { ...baseCardsGetBySIDReq } as CardsGetBySIDReq;
    if (object.cardSid !== undefined && object.cardSid !== null) {
      message.cardSid = object.cardSid;
    } else {
      message.cardSid = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseCardsDeleteReq: object = { cardSid: "" };

export const CardsDeleteReq = {
  encode(
    message: CardsDeleteReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cardSid !== "") {
      writer.uint32(10).string(message.cardSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CardsDeleteReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCardsDeleteReq } as CardsDeleteReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CardsDeleteReq>): CardsDeleteReq {
    const message = { ...baseCardsDeleteReq } as CardsDeleteReq;
    if (object.cardSid !== undefined && object.cardSid !== null) {
      message.cardSid = object.cardSid;
    } else {
      message.cardSid = "";
    }
    return message;
  },
};

const baseCardsGetByCustomerReq: object = { customerSid: "" };

export const CardsGetByCustomerReq = {
  encode(
    message: CardsGetByCustomerReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CardsGetByCustomerReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCardsGetByCustomerReq } as CardsGetByCustomerReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<CardsGetByCustomerReq>
  ): CardsGetByCustomerReq {
    const message = { ...baseCardsGetByCustomerReq } as CardsGetByCustomerReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseBillingEmail: object = {
  sid: "",
  customerSid: "",
  address: "",
  deleteProtection: false,
};

export const BillingEmail = {
  encode(
    message: BillingEmail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(10).string(message.sid);
    }
    if (message.customerSid !== "") {
      writer.uint32(18).string(message.customerSid);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(34).fork()).ldelim();
    }
    if (message.deleteProtection === true) {
      writer.uint32(40).bool(message.deleteProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BillingEmail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBillingEmail } as BillingEmail;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sid = reader.string();
          break;
        case 2:
          message.customerSid = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.deleteProtection = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<BillingEmail>): BillingEmail {
    const message = { ...baseBillingEmail } as BillingEmail;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (
      object.deleteProtection !== undefined &&
      object.deleteProtection !== null
    ) {
      message.deleteProtection = object.deleteProtection;
    } else {
      message.deleteProtection = false;
    }
    return message;
  },
};

const baseBillingEmailsCreateReq: object = {
  address: "",
  customerSid: "",
  deleteProtection: false,
};

export const BillingEmailsCreateReq = {
  encode(
    message: BillingEmailsCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.customerSid !== "") {
      writer.uint32(18).string(message.customerSid);
    }
    if (message.deleteProtection === true) {
      writer.uint32(24).bool(message.deleteProtection);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BillingEmailsCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBillingEmailsCreateReq } as BillingEmailsCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.customerSid = reader.string();
          break;
        case 3:
          message.deleteProtection = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<BillingEmailsCreateReq>
  ): BillingEmailsCreateReq {
    const message = { ...baseBillingEmailsCreateReq } as BillingEmailsCreateReq;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    if (
      object.deleteProtection !== undefined &&
      object.deleteProtection !== null
    ) {
      message.deleteProtection = object.deleteProtection;
    } else {
      message.deleteProtection = false;
    }
    return message;
  },
};

const baseBillingEmailsUpdateReq: object = { billingEmailSid: "", address: "" };

export const BillingEmailsUpdateReq = {
  encode(
    message: BillingEmailsUpdateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.billingEmailSid !== "") {
      writer.uint32(10).string(message.billingEmailSid);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BillingEmailsUpdateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBillingEmailsUpdateReq } as BillingEmailsUpdateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billingEmailSid = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<BillingEmailsUpdateReq>
  ): BillingEmailsUpdateReq {
    const message = { ...baseBillingEmailsUpdateReq } as BillingEmailsUpdateReq;
    if (
      object.billingEmailSid !== undefined &&
      object.billingEmailSid !== null
    ) {
      message.billingEmailSid = object.billingEmailSid;
    } else {
      message.billingEmailSid = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseBillingEmailsDeleteReq: object = {
  billingEmailSid: "",
  override: false,
};

export const BillingEmailsDeleteReq = {
  encode(
    message: BillingEmailsDeleteReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.billingEmailSid !== "") {
      writer.uint32(10).string(message.billingEmailSid);
    }
    if (message.override === true) {
      writer.uint32(16).bool(message.override);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BillingEmailsDeleteReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBillingEmailsDeleteReq } as BillingEmailsDeleteReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billingEmailSid = reader.string();
          break;
        case 2:
          message.override = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<BillingEmailsDeleteReq>
  ): BillingEmailsDeleteReq {
    const message = { ...baseBillingEmailsDeleteReq } as BillingEmailsDeleteReq;
    if (
      object.billingEmailSid !== undefined &&
      object.billingEmailSid !== null
    ) {
      message.billingEmailSid = object.billingEmailSid;
    } else {
      message.billingEmailSid = "";
    }
    if (object.override !== undefined && object.override !== null) {
      message.override = object.override;
    } else {
      message.override = false;
    }
    return message;
  },
};

const baseBillingEmailsGetBySIDReq: object = {
  billingEmailSid: "",
  customerSid: "",
};

export const BillingEmailsGetBySIDReq = {
  encode(
    message: BillingEmailsGetBySIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.billingEmailSid !== "") {
      writer.uint32(10).string(message.billingEmailSid);
    }
    if (message.customerSid !== "") {
      writer.uint32(18).string(message.customerSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BillingEmailsGetBySIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBillingEmailsGetBySIDReq,
    } as BillingEmailsGetBySIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billingEmailSid = reader.string();
          break;
        case 2:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<BillingEmailsGetBySIDReq>
  ): BillingEmailsGetBySIDReq {
    const message = {
      ...baseBillingEmailsGetBySIDReq,
    } as BillingEmailsGetBySIDReq;
    if (
      object.billingEmailSid !== undefined &&
      object.billingEmailSid !== null
    ) {
      message.billingEmailSid = object.billingEmailSid;
    } else {
      message.billingEmailSid = "";
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseBillingEmailsGetByCustomerReq: object = { customerSid: "" };

export const BillingEmailsGetByCustomerReq = {
  encode(
    message: BillingEmailsGetByCustomerReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BillingEmailsGetByCustomerReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBillingEmailsGetByCustomerReq,
    } as BillingEmailsGetByCustomerReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<BillingEmailsGetByCustomerReq>
  ): BillingEmailsGetByCustomerReq {
    const message = {
      ...baseBillingEmailsGetByCustomerReq,
    } as BillingEmailsGetByCustomerReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseBillingEmailsDeleteByCustomerReq: object = { customerSid: "" };

export const BillingEmailsDeleteByCustomerReq = {
  encode(
    message: BillingEmailsDeleteByCustomerReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BillingEmailsDeleteByCustomerReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBillingEmailsDeleteByCustomerReq,
    } as BillingEmailsDeleteByCustomerReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<BillingEmailsDeleteByCustomerReq>
  ): BillingEmailsDeleteByCustomerReq {
    const message = {
      ...baseBillingEmailsDeleteByCustomerReq,
    } as BillingEmailsDeleteByCustomerReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseBillingEmailsGetByCustomerResp: object = {};

export const BillingEmailsGetByCustomerResp = {
  encode(
    message: BillingEmailsGetByCustomerResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.emails) {
      BillingEmail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BillingEmailsGetByCustomerResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBillingEmailsGetByCustomerResp,
    } as BillingEmailsGetByCustomerResp;
    message.emails = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emails.push(BillingEmail.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<BillingEmailsGetByCustomerResp>
  ): BillingEmailsGetByCustomerResp {
    const message = {
      ...baseBillingEmailsGetByCustomerResp,
    } as BillingEmailsGetByCustomerResp;
    message.emails = [];
    if (object.emails !== undefined && object.emails !== null) {
      for (const e of object.emails) {
        message.emails.push(BillingEmail.fromPartial(e));
      }
    }
    return message;
  },
};

const baseToolBillingGetInfoReq: object = { accountId: 0 };

export const ToolBillingGetInfoReq = {
  encode(
    message: ToolBillingGetInfoReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ToolBillingGetInfoReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseToolBillingGetInfoReq } as ToolBillingGetInfoReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<ToolBillingGetInfoReq>
  ): ToolBillingGetInfoReq {
    const message = { ...baseToolBillingGetInfoReq } as ToolBillingGetInfoReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    return message;
  },
};

const baseToolBillingInfo: object = {
  currentPlanId: "",
  currentInterval: 0,
  licenseCount: 0,
  balance: 0,
};

export const ToolBillingInfo = {
  encode(
    message: ToolBillingInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.plans) {
      ToolPlan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentPlanId !== "") {
      writer.uint32(18).string(message.currentPlanId);
    }
    if (message.currentInterval !== 0) {
      writer.uint32(24).int32(message.currentInterval);
    }
    if (message.licenseCount !== 0) {
      writer.uint32(32).int64(message.licenseCount);
    }
    if (message.balance !== 0) {
      writer.uint32(40).int64(message.balance);
    }
    if (message.credit !== undefined) {
      ToolCredit.encode(message.credit, writer.uint32(58).fork()).ldelim();
    }
    if (message.discount !== undefined) {
      ToolDiscount.encode(message.discount, writer.uint32(66).fork()).ldelim();
    }
    if (message.card !== undefined) {
      Card.encode(message.card, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolBillingInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseToolBillingInfo } as ToolBillingInfo;
    message.plans = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plans.push(ToolPlan.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentPlanId = reader.string();
          break;
        case 3:
          message.currentInterval = reader.int32() as any;
          break;
        case 4:
          message.licenseCount = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.balance = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.credit = ToolCredit.decode(reader, reader.uint32());
          break;
        case 8:
          message.discount = ToolDiscount.decode(reader, reader.uint32());
          break;
        case 9:
          message.card = Card.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ToolBillingInfo>): ToolBillingInfo {
    const message = { ...baseToolBillingInfo } as ToolBillingInfo;
    message.plans = [];
    if (object.plans !== undefined && object.plans !== null) {
      for (const e of object.plans) {
        message.plans.push(ToolPlan.fromPartial(e));
      }
    }
    if (object.currentPlanId !== undefined && object.currentPlanId !== null) {
      message.currentPlanId = object.currentPlanId;
    } else {
      message.currentPlanId = "";
    }
    if (
      object.currentInterval !== undefined &&
      object.currentInterval !== null
    ) {
      message.currentInterval = object.currentInterval;
    } else {
      message.currentInterval = 0;
    }
    if (object.licenseCount !== undefined && object.licenseCount !== null) {
      message.licenseCount = object.licenseCount;
    } else {
      message.licenseCount = 0;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = 0;
    }
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = ToolCredit.fromPartial(object.credit);
    } else {
      message.credit = undefined;
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = ToolDiscount.fromPartial(object.discount);
    } else {
      message.discount = undefined;
    }
    if (object.card !== undefined && object.card !== null) {
      message.card = Card.fromPartial(object.card);
    } else {
      message.card = undefined;
    }
    return message;
  },
};

const baseToolDiscount: object = { percentOff: 0 };

export const ToolDiscount = {
  encode(
    message: ToolDiscount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.percentOff !== 0) {
      writer.uint32(13).float(message.percentOff);
    }
    if (message.end !== undefined) {
      Timestamp.encode(message.end, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolDiscount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseToolDiscount } as ToolDiscount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentOff = reader.float();
          break;
        case 2:
          message.end = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ToolDiscount>): ToolDiscount {
    const message = { ...baseToolDiscount } as ToolDiscount;
    if (object.percentOff !== undefined && object.percentOff !== null) {
      message.percentOff = object.percentOff;
    } else {
      message.percentOff = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Timestamp.fromPartial(object.end);
    } else {
      message.end = undefined;
    }
    return message;
  },
};

const baseToolPlan: object = {
  name: "",
  id: "",
  old: false,
  custom: false,
  perItem: false,
};

export const ToolPlan = {
  encode(
    message: ToolPlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.old === true) {
      writer.uint32(24).bool(message.old);
    }
    if (message.custom === true) {
      writer.uint32(32).bool(message.custom);
    }
    if (message.perItem === true) {
      writer.uint32(40).bool(message.perItem);
    }
    if (message.monthly !== undefined) {
      ToolPlan_Period.encode(
        message.monthly,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.annual !== undefined) {
      ToolPlan_Period.encode(message.annual, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseToolPlan } as ToolPlan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.old = reader.bool();
          break;
        case 4:
          message.custom = reader.bool();
          break;
        case 5:
          message.perItem = reader.bool();
          break;
        case 6:
          message.monthly = ToolPlan_Period.decode(reader, reader.uint32());
          break;
        case 7:
          message.annual = ToolPlan_Period.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ToolPlan>): ToolPlan {
    const message = { ...baseToolPlan } as ToolPlan;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.old !== undefined && object.old !== null) {
      message.old = object.old;
    } else {
      message.old = false;
    }
    if (object.custom !== undefined && object.custom !== null) {
      message.custom = object.custom;
    } else {
      message.custom = false;
    }
    if (object.perItem !== undefined && object.perItem !== null) {
      message.perItem = object.perItem;
    } else {
      message.perItem = false;
    }
    if (object.monthly !== undefined && object.monthly !== null) {
      message.monthly = ToolPlan_Period.fromPartial(object.monthly);
    } else {
      message.monthly = undefined;
    }
    if (object.annual !== undefined && object.annual !== null) {
      message.annual = ToolPlan_Period.fromPartial(object.annual);
    } else {
      message.annual = undefined;
    }
    return message;
  },
};

const baseToolPlan_Period: object = {
  amount: 0,
  projected: 0,
  willRefund: false,
  prorated: false,
};

export const ToolPlan_Period = {
  encode(
    message: ToolPlan_Period,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    if (message.projected !== 0) {
      writer.uint32(24).int64(message.projected);
    }
    if (message.willRefund === true) {
      writer.uint32(32).bool(message.willRefund);
    }
    if (message.prorated === true) {
      writer.uint32(40).bool(message.prorated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolPlan_Period {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseToolPlan_Period } as ToolPlan_Period;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.projected = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.willRefund = reader.bool();
          break;
        case 5:
          message.prorated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ToolPlan_Period>): ToolPlan_Period {
    const message = { ...baseToolPlan_Period } as ToolPlan_Period;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.projected !== undefined && object.projected !== null) {
      message.projected = object.projected;
    } else {
      message.projected = 0;
    }
    if (object.willRefund !== undefined && object.willRefund !== null) {
      message.willRefund = object.willRefund;
    } else {
      message.willRefund = false;
    }
    if (object.prorated !== undefined && object.prorated !== null) {
      message.prorated = object.prorated;
    } else {
      message.prorated = false;
    }
    return message;
  },
};

const baseSubscription: object = {};

export const Subscription = {
  encode(
    _: Subscription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSubscription } as Subscription;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(_: DeepPartial<Subscription>): Subscription {
    const message = { ...baseSubscription } as Subscription;
    return message;
  },
};

const baseToolCredit: object = {
  amount: 0,
  description: "",
  invoiceDescription: "",
};

export const ToolCredit = {
  encode(
    message: ToolCredit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).int64(message.amount);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.invoiceDescription !== "") {
      writer.uint32(26).string(message.invoiceDescription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolCredit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseToolCredit } as ToolCredit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.invoiceDescription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ToolCredit>): ToolCredit {
    const message = { ...baseToolCredit } as ToolCredit;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.invoiceDescription !== undefined &&
      object.invoiceDescription !== null
    ) {
      message.invoiceDescription = object.invoiceDescription;
    } else {
      message.invoiceDescription = "";
    }
    return message;
  },
};

const baseToolBillingChangePlanReq: object = {
  accountId: 0,
  planId: "",
  interval: 0,
};

export const ToolBillingChangePlanReq = {
  encode(
    message: ToolBillingChangePlanReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    if (message.planId !== "") {
      writer.uint32(18).string(message.planId);
    }
    if (message.interval !== 0) {
      writer.uint32(24).int32(message.interval);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ToolBillingChangePlanReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseToolBillingChangePlanReq,
    } as ToolBillingChangePlanReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.planId = reader.string();
          break;
        case 3:
          message.interval = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<ToolBillingChangePlanReq>
  ): ToolBillingChangePlanReq {
    const message = {
      ...baseToolBillingChangePlanReq,
    } as ToolBillingChangePlanReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.planId !== undefined && object.planId !== null) {
      message.planId = object.planId;
    } else {
      message.planId = "";
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = object.interval;
    } else {
      message.interval = 0;
    }
    return message;
  },
};

const baseToolBillingChangePlanResp: object = { mrr: 0 };

export const ToolBillingChangePlanResp = {
  encode(
    message: ToolBillingChangePlanResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mrr !== 0) {
      writer.uint32(9).double(message.mrr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ToolBillingChangePlanResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseToolBillingChangePlanResp,
    } as ToolBillingChangePlanResp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mrr = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<ToolBillingChangePlanResp>
  ): ToolBillingChangePlanResp {
    const message = {
      ...baseToolBillingChangePlanResp,
    } as ToolBillingChangePlanResp;
    if (object.mrr !== undefined && object.mrr !== null) {
      message.mrr = object.mrr;
    } else {
      message.mrr = 0;
    }
    return message;
  },
};

const baseToolBillingGetProductNameReq: object = { productId: "" };

export const ToolBillingGetProductNameReq = {
  encode(
    message: ToolBillingGetProductNameReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ToolBillingGetProductNameReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseToolBillingGetProductNameReq,
    } as ToolBillingGetProductNameReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<ToolBillingGetProductNameReq>
  ): ToolBillingGetProductNameReq {
    const message = {
      ...baseToolBillingGetProductNameReq,
    } as ToolBillingGetProductNameReq;
    if (object.productId !== undefined && object.productId !== null) {
      message.productId = object.productId;
    } else {
      message.productId = "";
    }
    return message;
  },
};

const baseToolBillingGetProductNameResp: object = { name: "" };

export const ToolBillingGetProductNameResp = {
  encode(
    message: ToolBillingGetProductNameResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ToolBillingGetProductNameResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseToolBillingGetProductNameResp,
    } as ToolBillingGetProductNameResp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<ToolBillingGetProductNameResp>
  ): ToolBillingGetProductNameResp {
    const message = {
      ...baseToolBillingGetProductNameResp,
    } as ToolBillingGetProductNameResp;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

/**
 * -----------------
 * Customers
 * -----------------
 */
export interface Customers {
  Create(
    request: DeepPartial<CustomersCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Customer>;
  GetBySID(
    request: DeepPartial<CustomersGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Customer>;
  GetByStripeID(
    request: DeepPartial<CustomersGetByStripeIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Customer>;
  GetAll(
    request: DeepPartial<CustomersGetAllReq>,
    metadata?: grpc.Metadata
  ): Promise<CustomersGetAllResp>;
  Update(
    request: DeepPartial<CustomersUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Customer>;
  Delete(
    request: DeepPartial<CustomersDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Customer>;
}

export class CustomersClientImpl implements Customers {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.GetBySID = this.GetBySID.bind(this);
    this.GetByStripeID = this.GetByStripeID.bind(this);
    this.GetAll = this.GetAll.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<CustomersCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Customer> {
    return this.rpc.unary(
      CustomersCreateDesc,
      CustomersCreateReq.fromPartial(request),
      metadata
    );
  }

  GetBySID(
    request: DeepPartial<CustomersGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Customer> {
    return this.rpc.unary(
      CustomersGetBySIDDesc,
      CustomersGetBySIDReq.fromPartial(request),
      metadata
    );
  }

  GetByStripeID(
    request: DeepPartial<CustomersGetByStripeIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Customer> {
    return this.rpc.unary(
      CustomersGetByStripeIDDesc,
      CustomersGetByStripeIDReq.fromPartial(request),
      metadata
    );
  }

  GetAll(
    request: DeepPartial<CustomersGetAllReq>,
    metadata?: grpc.Metadata
  ): Promise<CustomersGetAllResp> {
    return this.rpc.unary(
      CustomersGetAllDesc,
      CustomersGetAllReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<CustomersUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Customer> {
    return this.rpc.unary(
      CustomersUpdateDesc,
      CustomersUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<CustomersDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Customer> {
    return this.rpc.unary(
      CustomersDeleteDesc,
      CustomersDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const CustomersDesc = {
  serviceName: "rpx.Customers",
};

export const CustomersCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: CustomersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CustomersCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Customer.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const CustomersGetBySIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetBySID",
  service: CustomersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CustomersGetBySIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Customer.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const CustomersGetByStripeIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByStripeID",
  service: CustomersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CustomersGetByStripeIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Customer.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const CustomersGetAllDesc: UnaryMethodDefinitionish = {
  methodName: "GetAll",
  service: CustomersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CustomersGetAllReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...CustomersGetAllResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const CustomersUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: CustomersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CustomersUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Customer.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const CustomersDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: CustomersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CustomersDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Customer.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * -----------------
 * Invoices
 * -----------------
 */
export interface Invoices {
  Import(
    request: DeepPartial<InvoicesImportReq>,
    metadata?: grpc.Metadata
  ): Promise<Invoice>;
  GeneratePDF(
    request: DeepPartial<InvoicesGeneratePDFReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  GetPDF(
    request: DeepPartial<InvoicesGetPDFReq>,
    metadata?: grpc.Metadata
  ): Promise<InvoicesGetPDFResp>;
  GetBySID(
    request: DeepPartial<InvoicesGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Invoice>;
  GetByNumber(
    request: DeepPartial<InvoicesGetByNumberReq>,
    metadata?: grpc.Metadata
  ): Promise<Invoice>;
  GetByCustomer(
    request: DeepPartial<InvoicesGetByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<InvoicesGetByCustomerResp>;
  PayUnpaid(
    request: DeepPartial<InvoicesPayUnpaidReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Upcoming(
    request: DeepPartial<InvoicesUpcomingReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  /** This endpoint is only available in development environments. */
  ImportByCustomer(
    request: DeepPartial<InvoicesImportByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class InvoicesClientImpl implements Invoices {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Import = this.Import.bind(this);
    this.GeneratePDF = this.GeneratePDF.bind(this);
    this.GetPDF = this.GetPDF.bind(this);
    this.GetBySID = this.GetBySID.bind(this);
    this.GetByNumber = this.GetByNumber.bind(this);
    this.GetByCustomer = this.GetByCustomer.bind(this);
    this.PayUnpaid = this.PayUnpaid.bind(this);
    this.Upcoming = this.Upcoming.bind(this);
    this.ImportByCustomer = this.ImportByCustomer.bind(this);
  }

  Import(
    request: DeepPartial<InvoicesImportReq>,
    metadata?: grpc.Metadata
  ): Promise<Invoice> {
    return this.rpc.unary(
      InvoicesImportDesc,
      InvoicesImportReq.fromPartial(request),
      metadata
    );
  }

  GeneratePDF(
    request: DeepPartial<InvoicesGeneratePDFReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      InvoicesGeneratePDFDesc,
      InvoicesGeneratePDFReq.fromPartial(request),
      metadata
    );
  }

  GetPDF(
    request: DeepPartial<InvoicesGetPDFReq>,
    metadata?: grpc.Metadata
  ): Promise<InvoicesGetPDFResp> {
    return this.rpc.unary(
      InvoicesGetPDFDesc,
      InvoicesGetPDFReq.fromPartial(request),
      metadata
    );
  }

  GetBySID(
    request: DeepPartial<InvoicesGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Invoice> {
    return this.rpc.unary(
      InvoicesGetBySIDDesc,
      InvoicesGetBySIDReq.fromPartial(request),
      metadata
    );
  }

  GetByNumber(
    request: DeepPartial<InvoicesGetByNumberReq>,
    metadata?: grpc.Metadata
  ): Promise<Invoice> {
    return this.rpc.unary(
      InvoicesGetByNumberDesc,
      InvoicesGetByNumberReq.fromPartial(request),
      metadata
    );
  }

  GetByCustomer(
    request: DeepPartial<InvoicesGetByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<InvoicesGetByCustomerResp> {
    return this.rpc.unary(
      InvoicesGetByCustomerDesc,
      InvoicesGetByCustomerReq.fromPartial(request),
      metadata
    );
  }

  PayUnpaid(
    request: DeepPartial<InvoicesPayUnpaidReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      InvoicesPayUnpaidDesc,
      InvoicesPayUnpaidReq.fromPartial(request),
      metadata
    );
  }

  Upcoming(
    request: DeepPartial<InvoicesUpcomingReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      InvoicesUpcomingDesc,
      InvoicesUpcomingReq.fromPartial(request),
      metadata
    );
  }

  ImportByCustomer(
    request: DeepPartial<InvoicesImportByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      InvoicesImportByCustomerDesc,
      InvoicesImportByCustomerReq.fromPartial(request),
      metadata
    );
  }
}

export const InvoicesDesc = {
  serviceName: "rpx.Invoices",
};

export const InvoicesImportDesc: UnaryMethodDefinitionish = {
  methodName: "Import",
  service: InvoicesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvoicesImportReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Invoice.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const InvoicesGeneratePDFDesc: UnaryMethodDefinitionish = {
  methodName: "GeneratePDF",
  service: InvoicesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvoicesGeneratePDFReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const InvoicesGetPDFDesc: UnaryMethodDefinitionish = {
  methodName: "GetPDF",
  service: InvoicesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvoicesGetPDFReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...InvoicesGetPDFResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const InvoicesGetBySIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetBySID",
  service: InvoicesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvoicesGetBySIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Invoice.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const InvoicesGetByNumberDesc: UnaryMethodDefinitionish = {
  methodName: "GetByNumber",
  service: InvoicesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvoicesGetByNumberReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Invoice.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const InvoicesGetByCustomerDesc: UnaryMethodDefinitionish = {
  methodName: "GetByCustomer",
  service: InvoicesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvoicesGetByCustomerReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...InvoicesGetByCustomerResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const InvoicesPayUnpaidDesc: UnaryMethodDefinitionish = {
  methodName: "PayUnpaid",
  service: InvoicesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvoicesPayUnpaidReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const InvoicesUpcomingDesc: UnaryMethodDefinitionish = {
  methodName: "Upcoming",
  service: InvoicesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvoicesUpcomingReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const InvoicesImportByCustomerDesc: UnaryMethodDefinitionish = {
  methodName: "ImportByCustomer",
  service: InvoicesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvoicesImportByCustomerReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * -----------------
 * Payments
 * -----------------
 */
export interface Payments {
  GetBySID(
    request: DeepPartial<PaymentsGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Payment>;
  GetByCustomer(
    request: DeepPartial<PaymentsGetByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<PaymentsGetByCustomerResp>;
}

export class PaymentsClientImpl implements Payments {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetBySID = this.GetBySID.bind(this);
    this.GetByCustomer = this.GetByCustomer.bind(this);
  }

  GetBySID(
    request: DeepPartial<PaymentsGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Payment> {
    return this.rpc.unary(
      PaymentsGetBySIDDesc,
      PaymentsGetBySIDReq.fromPartial(request),
      metadata
    );
  }

  GetByCustomer(
    request: DeepPartial<PaymentsGetByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<PaymentsGetByCustomerResp> {
    return this.rpc.unary(
      PaymentsGetByCustomerDesc,
      PaymentsGetByCustomerReq.fromPartial(request),
      metadata
    );
  }
}

export const PaymentsDesc = {
  serviceName: "rpx.Payments",
};

export const PaymentsGetBySIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetBySID",
  service: PaymentsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PaymentsGetBySIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Payment.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const PaymentsGetByCustomerDesc: UnaryMethodDefinitionish = {
  methodName: "GetByCustomer",
  service: PaymentsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PaymentsGetByCustomerReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...PaymentsGetByCustomerResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export interface Refunds {
  Import(
    request: DeepPartial<RefundsImportReq>,
    metadata?: grpc.Metadata
  ): Promise<Refund>;
  GeneratePDF(
    request: DeepPartial<RefundsGeneratePDFReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  GetBySID(
    request: DeepPartial<RefundsGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Refund>;
  GetByCustomer(
    request: DeepPartial<RefundsGetByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<RefundsGetByCustomerResp>;
}

export class RefundsClientImpl implements Refunds {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Import = this.Import.bind(this);
    this.GeneratePDF = this.GeneratePDF.bind(this);
    this.GetBySID = this.GetBySID.bind(this);
    this.GetByCustomer = this.GetByCustomer.bind(this);
  }

  Import(
    request: DeepPartial<RefundsImportReq>,
    metadata?: grpc.Metadata
  ): Promise<Refund> {
    return this.rpc.unary(
      RefundsImportDesc,
      RefundsImportReq.fromPartial(request),
      metadata
    );
  }

  GeneratePDF(
    request: DeepPartial<RefundsGeneratePDFReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      RefundsGeneratePDFDesc,
      RefundsGeneratePDFReq.fromPartial(request),
      metadata
    );
  }

  GetBySID(
    request: DeepPartial<RefundsGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Refund> {
    return this.rpc.unary(
      RefundsGetBySIDDesc,
      RefundsGetBySIDReq.fromPartial(request),
      metadata
    );
  }

  GetByCustomer(
    request: DeepPartial<RefundsGetByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<RefundsGetByCustomerResp> {
    return this.rpc.unary(
      RefundsGetByCustomerDesc,
      RefundsGetByCustomerReq.fromPartial(request),
      metadata
    );
  }
}

export const RefundsDesc = {
  serviceName: "rpx.Refunds",
};

export const RefundsImportDesc: UnaryMethodDefinitionish = {
  methodName: "Import",
  service: RefundsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return RefundsImportReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Refund.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const RefundsGeneratePDFDesc: UnaryMethodDefinitionish = {
  methodName: "GeneratePDF",
  service: RefundsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return RefundsGeneratePDFReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const RefundsGetBySIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetBySID",
  service: RefundsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return RefundsGetBySIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Refund.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const RefundsGetByCustomerDesc: UnaryMethodDefinitionish = {
  methodName: "GetByCustomer",
  service: RefundsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return RefundsGetByCustomerReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...RefundsGetByCustomerResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * -----------------
 * Cards
 * -----------------
 */
export interface Cards {
  Create(
    request: DeepPartial<CardsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Card>;
  GetBySID(
    request: DeepPartial<CardsGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Card>;
  Delete(
    request: DeepPartial<CardsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Card>;
  GetByCustomer(
    request: DeepPartial<CardsGetByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<Card>;
}

export class CardsClientImpl implements Cards {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.GetBySID = this.GetBySID.bind(this);
    this.Delete = this.Delete.bind(this);
    this.GetByCustomer = this.GetByCustomer.bind(this);
  }

  Create(
    request: DeepPartial<CardsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Card> {
    return this.rpc.unary(
      CardsCreateDesc,
      CardsCreateReq.fromPartial(request),
      metadata
    );
  }

  GetBySID(
    request: DeepPartial<CardsGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Card> {
    return this.rpc.unary(
      CardsGetBySIDDesc,
      CardsGetBySIDReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<CardsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Card> {
    return this.rpc.unary(
      CardsDeleteDesc,
      CardsDeleteReq.fromPartial(request),
      metadata
    );
  }

  GetByCustomer(
    request: DeepPartial<CardsGetByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<Card> {
    return this.rpc.unary(
      CardsGetByCustomerDesc,
      CardsGetByCustomerReq.fromPartial(request),
      metadata
    );
  }
}

export const CardsDesc = {
  serviceName: "rpx.Cards",
};

export const CardsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: CardsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CardsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Card.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const CardsGetBySIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetBySID",
  service: CardsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CardsGetBySIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Card.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const CardsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: CardsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CardsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Card.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const CardsGetByCustomerDesc: UnaryMethodDefinitionish = {
  methodName: "GetByCustomer",
  service: CardsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CardsGetByCustomerReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Card.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * -------------------
 * BillingEmails
 * -------------------
 */
export interface BillingEmails {
  Create(
    request: DeepPartial<BillingEmailsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail>;
  Update(
    request: DeepPartial<BillingEmailsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail>;
  Delete(
    request: DeepPartial<BillingEmailsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail>;
  GetBySID(
    request: DeepPartial<BillingEmailsGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail>;
  GetByCustomer(
    request: DeepPartial<BillingEmailsGetByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmailsGetByCustomerResp>;
  DeleteByCustomer(
    request: DeepPartial<BillingEmailsDeleteByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class BillingEmailsClientImpl implements BillingEmails {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
    this.GetBySID = this.GetBySID.bind(this);
    this.GetByCustomer = this.GetByCustomer.bind(this);
    this.DeleteByCustomer = this.DeleteByCustomer.bind(this);
  }

  Create(
    request: DeepPartial<BillingEmailsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail> {
    return this.rpc.unary(
      BillingEmailsCreateDesc,
      BillingEmailsCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<BillingEmailsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail> {
    return this.rpc.unary(
      BillingEmailsUpdateDesc,
      BillingEmailsUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<BillingEmailsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail> {
    return this.rpc.unary(
      BillingEmailsDeleteDesc,
      BillingEmailsDeleteReq.fromPartial(request),
      metadata
    );
  }

  GetBySID(
    request: DeepPartial<BillingEmailsGetBySIDReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail> {
    return this.rpc.unary(
      BillingEmailsGetBySIDDesc,
      BillingEmailsGetBySIDReq.fromPartial(request),
      metadata
    );
  }

  GetByCustomer(
    request: DeepPartial<BillingEmailsGetByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmailsGetByCustomerResp> {
    return this.rpc.unary(
      BillingEmailsGetByCustomerDesc,
      BillingEmailsGetByCustomerReq.fromPartial(request),
      metadata
    );
  }

  DeleteByCustomer(
    request: DeepPartial<BillingEmailsDeleteByCustomerReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      BillingEmailsDeleteByCustomerDesc,
      BillingEmailsDeleteByCustomerReq.fromPartial(request),
      metadata
    );
  }
}

export const BillingEmailsDesc = {
  serviceName: "rpx.BillingEmails",
};

export const BillingEmailsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: BillingEmailsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BillingEmailsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BillingEmail.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const BillingEmailsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: BillingEmailsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BillingEmailsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BillingEmail.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const BillingEmailsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: BillingEmailsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BillingEmailsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BillingEmail.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const BillingEmailsGetBySIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetBySID",
  service: BillingEmailsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BillingEmailsGetBySIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BillingEmail.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const BillingEmailsGetByCustomerDesc: UnaryMethodDefinitionish = {
  methodName: "GetByCustomer",
  service: BillingEmailsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BillingEmailsGetByCustomerReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BillingEmailsGetByCustomerResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const BillingEmailsDeleteByCustomerDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteByCustomer",
  service: BillingEmailsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BillingEmailsDeleteByCustomerReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * -----------------------
 * Legacy Billing logic
 * -----------------------
 */
export interface ToolBilling {
  GetInfo(
    request: DeepPartial<ToolBillingGetInfoReq>,
    metadata?: grpc.Metadata
  ): Promise<ToolBillingInfo>;
  ChangePlan(
    request: DeepPartial<ToolBillingChangePlanReq>,
    metadata?: grpc.Metadata
  ): Promise<ToolBillingChangePlanResp>;
  /** these are ugly hacks */
  GetProductName(
    request: DeepPartial<ToolBillingGetProductNameReq>,
    metadata?: grpc.Metadata
  ): Promise<ToolBillingGetProductNameResp>;
}

export class ToolBillingClientImpl implements ToolBilling {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetInfo = this.GetInfo.bind(this);
    this.ChangePlan = this.ChangePlan.bind(this);
    this.GetProductName = this.GetProductName.bind(this);
  }

  GetInfo(
    request: DeepPartial<ToolBillingGetInfoReq>,
    metadata?: grpc.Metadata
  ): Promise<ToolBillingInfo> {
    return this.rpc.unary(
      ToolBillingGetInfoDesc,
      ToolBillingGetInfoReq.fromPartial(request),
      metadata
    );
  }

  ChangePlan(
    request: DeepPartial<ToolBillingChangePlanReq>,
    metadata?: grpc.Metadata
  ): Promise<ToolBillingChangePlanResp> {
    return this.rpc.unary(
      ToolBillingChangePlanDesc,
      ToolBillingChangePlanReq.fromPartial(request),
      metadata
    );
  }

  GetProductName(
    request: DeepPartial<ToolBillingGetProductNameReq>,
    metadata?: grpc.Metadata
  ): Promise<ToolBillingGetProductNameResp> {
    return this.rpc.unary(
      ToolBillingGetProductNameDesc,
      ToolBillingGetProductNameReq.fromPartial(request),
      metadata
    );
  }
}

export const ToolBillingDesc = {
  serviceName: "rpx.ToolBilling",
};

export const ToolBillingGetInfoDesc: UnaryMethodDefinitionish = {
  methodName: "GetInfo",
  service: ToolBillingDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ToolBillingGetInfoReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...ToolBillingInfo.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ToolBillingChangePlanDesc: UnaryMethodDefinitionish = {
  methodName: "ChangePlan",
  service: ToolBillingDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ToolBillingChangePlanReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...ToolBillingChangePlanResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ToolBillingGetProductNameDesc: UnaryMethodDefinitionish = {
  methodName: "GetProductName",
  service: ToolBillingDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ToolBillingGetProductNameReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...ToolBillingGetProductNameResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
