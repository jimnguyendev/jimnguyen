// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CertAuthorityAcme, CSR } from "../rpx/model";
import { Timestamp } from "../pb/types";

export const protobufPackage = "rpx";

export interface CIQStateTag {
  createdBy: string;
  createdAt: Timestamp | undefined;
  backoff: CIQStateTag_Backoff | undefined;
  acmeGen: CIQStateTag_AcmeGen | undefined;
  http01: CIQStateTag_HTTP01 | undefined;
  http01Preverified: CIQStateTag_HTTP01Preverified | undefined;
  http01Verified: CIQStateTag_HTTP01Verified | undefined;
  http01Preverifying: CIQStateTag_HTTP01Preverifying | undefined;
  http01Verifying: CIQStateTag_HTTP01Verifying | undefined;
  http01PreverifyErr: CIQStateTag_HTTP01PreverifyErr | undefined;
  http01VerifyErr: CIQStateTag_HTTP01VerifyErr | undefined;
  dns01: CIQStateTag_DNS01 | undefined;
  dns01Record: CIQStateTag_DNS01Record | undefined;
  dns01RecordCreating: CIQStateTag_DNS01RecordCreating | undefined;
  dns01Preverified: CIQStateTag_DNS01Preverified | undefined;
  dns01Verified: CIQStateTag_DNS01Verified | undefined;
  dns01Preverifying: CIQStateTag_DNS01Preverifying | undefined;
  dns01Verifying: CIQStateTag_DNS01Verifying | undefined;
  dns01PreverifyErr: CIQStateTag_DNS01PreverifyErr | undefined;
  dns01VerifyErr: CIQStateTag_DNS01VerifyErr | undefined;
  settingUp: CIQStateTag_SettingUp | undefined;
  acmeSetup: CIQStateTag_AcmeSetup | undefined;
  setupErr: CIQStateTag_SetupErr | undefined;
  accepting: CIQStateTag_Accepting | undefined;
  acmeAccept: CIQStateTag_AcmeAccept | undefined;
  acceptErr: CIQStateTag_AcceptErr | undefined;
  requesting: CIQStateTag_Requesting | undefined;
  requested: CIQStateTag_Requested | undefined;
  dns01Cleaning: CIQStateTag_DNS01Cleaning | undefined;
}

/** Certificate has to be generated using ACME. */
export interface CIQStateTag_AcmeGen {
  csr: CSR | undefined;
  authority: CertAuthorityAcme;
  cname: string;
  zone: string;
  challengeCname: string;
}

/**
 * Certificate domain ownership will be tested via an HTTP01 challenge.
 * Only supported for unary (non-wildcard) certfificates.
 */
export interface CIQStateTag_HTTP01 {
  domains: string[];
}

/**
 * Certificate domain ownership will be tested via a DNS01 challenge.
 * Supports only wildcard certificates, requires zone delegation.
 */
export interface CIQStateTag_DNS01 {
  domains: string[];
}

/**
 * DNS zone for DNS01 challenge contains a valid response to the
 * ACME DNS01 challenge as specified by SETUP.
 */
export interface CIQStateTag_DNS01Record {}

export interface CIQStateTag_DNS01RecordCreating {}

/**
 * The user has set up their side correctly and ACME setup can
 * now happen.
 */
export interface CIQStateTag_HTTP01Preverified {}

export interface CIQStateTag_DNS01Preverified {}

export interface CIQStateTag_HTTP01Preverifying {}

export interface CIQStateTag_DNS01Preverifying {}

/** Preverification error - user did not set up their side correctly. */
export interface CIQStateTag_HTTP01PreverifyErr {}

/**
 * In the future might contain more details about what is not set up
 * correctly.
 */
export interface CIQStateTag_DNS01PreverifyErr {}

/**
 * Setup of domain challenge - reuquest of challenge/response data from ACME,
 * commitment to CIQ for access by verification replier (eg., with HTTP01, serving
 * response to challenge via HTTP).
 */
export interface CIQStateTag_AcmeSetup {
  orderUri: string;
  /**
   * The following fields are only populated if a challenge needs to be performed,
   * otherwise (when an order is already 'valid'), these will be empty.
   */
  challenges: { [key: string]: CIQStateTag_AcmeSetup_Challenge };
}

export interface CIQStateTag_AcmeSetup_Challenge {
  type: string;
  uri: string;
  token: string;
  response: string;
}

export interface CIQStateTag_AcmeSetup_ChallengesEntry {
  key: string;
  value: CIQStateTag_AcmeSetup_Challenge | undefined;
}

export interface CIQStateTag_Accepting {}

export interface CIQStateTag_AcmeAccept {
  challenges: { [key: string]: CIQStateTag_AcmeAccept_Challenge };
}

export interface CIQStateTag_AcmeAccept_Challenge {
  status: string;
  error: string;
}

export interface CIQStateTag_AcmeAccept_ChallengesEntry {
  key: string;
  value: CIQStateTag_AcmeAccept_Challenge | undefined;
}

export interface CIQStateTag_AcceptErr {}

export interface CIQStateTag_SettingUp {}

export interface CIQStateTag_SetupErr {}

/**
 * Everything is on track to request certificate from ACME (self-test of
 * challenge token successful).
 */
export interface CIQStateTag_HTTP01Verified {}

export interface CIQStateTag_DNS01Verified {}

export interface CIQStateTag_HTTP01Verifying {}

export interface CIQStateTag_DNS01Verifying {}

/** Verification error - user removed required entries? */
export interface CIQStateTag_HTTP01VerifyErr {}

export interface CIQStateTag_DNS01VerifyErr {}

/** Requesting certificate from ACME. */
export interface CIQStateTag_Requesting {}

/** Requested certificate from ACME. */
export interface CIQStateTag_Requested {}

/** Cleaning up dns enteries after successful dns01 verification */
export interface CIQStateTag_DNS01Cleaning {}

/**
 * Batch pipeline failure indication, and a tag to block further processing
 * until it expires.
 */
export interface CIQStateTag_Backoff {
  /** Time of the backoff expiration. */
  expires: Timestamp | undefined;
  /** Internal, human-readable (but not user-facing) reason for backoff. */
  summary: string;
}

const baseCIQStateTag: object = { createdBy: "" };

export const CIQStateTag = {
  encode(
    message: CIQStateTag,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.createdBy !== "") {
      writer.uint32(10).string(message.createdBy);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.backoff !== undefined) {
      CIQStateTag_Backoff.encode(
        message.backoff,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.acmeGen !== undefined) {
      CIQStateTag_AcmeGen.encode(
        message.acmeGen,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.http01 !== undefined) {
      CIQStateTag_HTTP01.encode(
        message.http01,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.http01Preverified !== undefined) {
      CIQStateTag_HTTP01Preverified.encode(
        message.http01Preverified,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.http01Verified !== undefined) {
      CIQStateTag_HTTP01Verified.encode(
        message.http01Verified,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.http01Preverifying !== undefined) {
      CIQStateTag_HTTP01Preverifying.encode(
        message.http01Preverifying,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.http01Verifying !== undefined) {
      CIQStateTag_HTTP01Verifying.encode(
        message.http01Verifying,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.http01PreverifyErr !== undefined) {
      CIQStateTag_HTTP01PreverifyErr.encode(
        message.http01PreverifyErr,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.http01VerifyErr !== undefined) {
      CIQStateTag_HTTP01VerifyErr.encode(
        message.http01VerifyErr,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.dns01 !== undefined) {
      CIQStateTag_DNS01.encode(
        message.dns01,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.dns01Record !== undefined) {
      CIQStateTag_DNS01Record.encode(
        message.dns01Record,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.dns01RecordCreating !== undefined) {
      CIQStateTag_DNS01RecordCreating.encode(
        message.dns01RecordCreating,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.dns01Preverified !== undefined) {
      CIQStateTag_DNS01Preverified.encode(
        message.dns01Preverified,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.dns01Verified !== undefined) {
      CIQStateTag_DNS01Verified.encode(
        message.dns01Verified,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.dns01Preverifying !== undefined) {
      CIQStateTag_DNS01Preverifying.encode(
        message.dns01Preverifying,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.dns01Verifying !== undefined) {
      CIQStateTag_DNS01Verifying.encode(
        message.dns01Verifying,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.dns01PreverifyErr !== undefined) {
      CIQStateTag_DNS01PreverifyErr.encode(
        message.dns01PreverifyErr,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.dns01VerifyErr !== undefined) {
      CIQStateTag_DNS01VerifyErr.encode(
        message.dns01VerifyErr,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.settingUp !== undefined) {
      CIQStateTag_SettingUp.encode(
        message.settingUp,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.acmeSetup !== undefined) {
      CIQStateTag_AcmeSetup.encode(
        message.acmeSetup,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.setupErr !== undefined) {
      CIQStateTag_SetupErr.encode(
        message.setupErr,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.accepting !== undefined) {
      CIQStateTag_Accepting.encode(
        message.accepting,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.acmeAccept !== undefined) {
      CIQStateTag_AcmeAccept.encode(
        message.acmeAccept,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.acceptErr !== undefined) {
      CIQStateTag_AcceptErr.encode(
        message.acceptErr,
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.requesting !== undefined) {
      CIQStateTag_Requesting.encode(
        message.requesting,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.requested !== undefined) {
      CIQStateTag_Requested.encode(
        message.requested,
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.dns01Cleaning !== undefined) {
      CIQStateTag_DNS01Cleaning.encode(
        message.dns01Cleaning,
        writer.uint32(250).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CIQStateTag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag } as CIQStateTag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createdBy = reader.string();
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.backoff = CIQStateTag_Backoff.decode(reader, reader.uint32());
          break;
        case 4:
          message.acmeGen = CIQStateTag_AcmeGen.decode(reader, reader.uint32());
          break;
        case 5:
          message.http01 = CIQStateTag_HTTP01.decode(reader, reader.uint32());
          break;
        case 6:
          message.http01Preverified = CIQStateTag_HTTP01Preverified.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.http01Verified = CIQStateTag_HTTP01Verified.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.http01Preverifying = CIQStateTag_HTTP01Preverifying.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.http01Verifying = CIQStateTag_HTTP01Verifying.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.http01PreverifyErr = CIQStateTag_HTTP01PreverifyErr.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.http01VerifyErr = CIQStateTag_HTTP01VerifyErr.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.dns01 = CIQStateTag_DNS01.decode(reader, reader.uint32());
          break;
        case 15:
          message.dns01Record = CIQStateTag_DNS01Record.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.dns01RecordCreating = CIQStateTag_DNS01RecordCreating.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.dns01Preverified = CIQStateTag_DNS01Preverified.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.dns01Verified = CIQStateTag_DNS01Verified.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.dns01Preverifying = CIQStateTag_DNS01Preverifying.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.dns01Verifying = CIQStateTag_DNS01Verifying.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.dns01PreverifyErr = CIQStateTag_DNS01PreverifyErr.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.dns01VerifyErr = CIQStateTag_DNS01VerifyErr.decode(
            reader,
            reader.uint32()
          );
          break;
        case 23:
          message.settingUp = CIQStateTag_SettingUp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.acmeSetup = CIQStateTag_AcmeSetup.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.setupErr = CIQStateTag_SetupErr.decode(
            reader,
            reader.uint32()
          );
          break;
        case 26:
          message.accepting = CIQStateTag_Accepting.decode(
            reader,
            reader.uint32()
          );
          break;
        case 27:
          message.acmeAccept = CIQStateTag_AcmeAccept.decode(
            reader,
            reader.uint32()
          );
          break;
        case 28:
          message.acceptErr = CIQStateTag_AcceptErr.decode(
            reader,
            reader.uint32()
          );
          break;
        case 29:
          message.requesting = CIQStateTag_Requesting.decode(
            reader,
            reader.uint32()
          );
          break;
        case 30:
          message.requested = CIQStateTag_Requested.decode(
            reader,
            reader.uint32()
          );
          break;
        case 31:
          message.dns01Cleaning = CIQStateTag_DNS01Cleaning.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CIQStateTag>): CIQStateTag {
    const message = { ...baseCIQStateTag } as CIQStateTag;
    if (object.createdBy !== undefined && object.createdBy !== null) {
      message.createdBy = object.createdBy;
    } else {
      message.createdBy = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.backoff !== undefined && object.backoff !== null) {
      message.backoff = CIQStateTag_Backoff.fromPartial(object.backoff);
    } else {
      message.backoff = undefined;
    }
    if (object.acmeGen !== undefined && object.acmeGen !== null) {
      message.acmeGen = CIQStateTag_AcmeGen.fromPartial(object.acmeGen);
    } else {
      message.acmeGen = undefined;
    }
    if (object.http01 !== undefined && object.http01 !== null) {
      message.http01 = CIQStateTag_HTTP01.fromPartial(object.http01);
    } else {
      message.http01 = undefined;
    }
    if (
      object.http01Preverified !== undefined &&
      object.http01Preverified !== null
    ) {
      message.http01Preverified = CIQStateTag_HTTP01Preverified.fromPartial(
        object.http01Preverified
      );
    } else {
      message.http01Preverified = undefined;
    }
    if (object.http01Verified !== undefined && object.http01Verified !== null) {
      message.http01Verified = CIQStateTag_HTTP01Verified.fromPartial(
        object.http01Verified
      );
    } else {
      message.http01Verified = undefined;
    }
    if (
      object.http01Preverifying !== undefined &&
      object.http01Preverifying !== null
    ) {
      message.http01Preverifying = CIQStateTag_HTTP01Preverifying.fromPartial(
        object.http01Preverifying
      );
    } else {
      message.http01Preverifying = undefined;
    }
    if (
      object.http01Verifying !== undefined &&
      object.http01Verifying !== null
    ) {
      message.http01Verifying = CIQStateTag_HTTP01Verifying.fromPartial(
        object.http01Verifying
      );
    } else {
      message.http01Verifying = undefined;
    }
    if (
      object.http01PreverifyErr !== undefined &&
      object.http01PreverifyErr !== null
    ) {
      message.http01PreverifyErr = CIQStateTag_HTTP01PreverifyErr.fromPartial(
        object.http01PreverifyErr
      );
    } else {
      message.http01PreverifyErr = undefined;
    }
    if (
      object.http01VerifyErr !== undefined &&
      object.http01VerifyErr !== null
    ) {
      message.http01VerifyErr = CIQStateTag_HTTP01VerifyErr.fromPartial(
        object.http01VerifyErr
      );
    } else {
      message.http01VerifyErr = undefined;
    }
    if (object.dns01 !== undefined && object.dns01 !== null) {
      message.dns01 = CIQStateTag_DNS01.fromPartial(object.dns01);
    } else {
      message.dns01 = undefined;
    }
    if (object.dns01Record !== undefined && object.dns01Record !== null) {
      message.dns01Record = CIQStateTag_DNS01Record.fromPartial(
        object.dns01Record
      );
    } else {
      message.dns01Record = undefined;
    }
    if (
      object.dns01RecordCreating !== undefined &&
      object.dns01RecordCreating !== null
    ) {
      message.dns01RecordCreating = CIQStateTag_DNS01RecordCreating.fromPartial(
        object.dns01RecordCreating
      );
    } else {
      message.dns01RecordCreating = undefined;
    }
    if (
      object.dns01Preverified !== undefined &&
      object.dns01Preverified !== null
    ) {
      message.dns01Preverified = CIQStateTag_DNS01Preverified.fromPartial(
        object.dns01Preverified
      );
    } else {
      message.dns01Preverified = undefined;
    }
    if (object.dns01Verified !== undefined && object.dns01Verified !== null) {
      message.dns01Verified = CIQStateTag_DNS01Verified.fromPartial(
        object.dns01Verified
      );
    } else {
      message.dns01Verified = undefined;
    }
    if (
      object.dns01Preverifying !== undefined &&
      object.dns01Preverifying !== null
    ) {
      message.dns01Preverifying = CIQStateTag_DNS01Preverifying.fromPartial(
        object.dns01Preverifying
      );
    } else {
      message.dns01Preverifying = undefined;
    }
    if (object.dns01Verifying !== undefined && object.dns01Verifying !== null) {
      message.dns01Verifying = CIQStateTag_DNS01Verifying.fromPartial(
        object.dns01Verifying
      );
    } else {
      message.dns01Verifying = undefined;
    }
    if (
      object.dns01PreverifyErr !== undefined &&
      object.dns01PreverifyErr !== null
    ) {
      message.dns01PreverifyErr = CIQStateTag_DNS01PreverifyErr.fromPartial(
        object.dns01PreverifyErr
      );
    } else {
      message.dns01PreverifyErr = undefined;
    }
    if (object.dns01VerifyErr !== undefined && object.dns01VerifyErr !== null) {
      message.dns01VerifyErr = CIQStateTag_DNS01VerifyErr.fromPartial(
        object.dns01VerifyErr
      );
    } else {
      message.dns01VerifyErr = undefined;
    }
    if (object.settingUp !== undefined && object.settingUp !== null) {
      message.settingUp = CIQStateTag_SettingUp.fromPartial(object.settingUp);
    } else {
      message.settingUp = undefined;
    }
    if (object.acmeSetup !== undefined && object.acmeSetup !== null) {
      message.acmeSetup = CIQStateTag_AcmeSetup.fromPartial(object.acmeSetup);
    } else {
      message.acmeSetup = undefined;
    }
    if (object.setupErr !== undefined && object.setupErr !== null) {
      message.setupErr = CIQStateTag_SetupErr.fromPartial(object.setupErr);
    } else {
      message.setupErr = undefined;
    }
    if (object.accepting !== undefined && object.accepting !== null) {
      message.accepting = CIQStateTag_Accepting.fromPartial(object.accepting);
    } else {
      message.accepting = undefined;
    }
    if (object.acmeAccept !== undefined && object.acmeAccept !== null) {
      message.acmeAccept = CIQStateTag_AcmeAccept.fromPartial(
        object.acmeAccept
      );
    } else {
      message.acmeAccept = undefined;
    }
    if (object.acceptErr !== undefined && object.acceptErr !== null) {
      message.acceptErr = CIQStateTag_AcceptErr.fromPartial(object.acceptErr);
    } else {
      message.acceptErr = undefined;
    }
    if (object.requesting !== undefined && object.requesting !== null) {
      message.requesting = CIQStateTag_Requesting.fromPartial(
        object.requesting
      );
    } else {
      message.requesting = undefined;
    }
    if (object.requested !== undefined && object.requested !== null) {
      message.requested = CIQStateTag_Requested.fromPartial(object.requested);
    } else {
      message.requested = undefined;
    }
    if (object.dns01Cleaning !== undefined && object.dns01Cleaning !== null) {
      message.dns01Cleaning = CIQStateTag_DNS01Cleaning.fromPartial(
        object.dns01Cleaning
      );
    } else {
      message.dns01Cleaning = undefined;
    }
    return message;
  },
};

const baseCIQStateTag_AcmeGen: object = {
  authority: 0,
  cname: "",
  zone: "",
  challengeCname: "",
};

export const CIQStateTag_AcmeGen = {
  encode(
    message: CIQStateTag_AcmeGen,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.csr !== undefined) {
      CSR.encode(message.csr, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== 0) {
      writer.uint32(16).int32(message.authority);
    }
    if (message.cname !== "") {
      writer.uint32(26).string(message.cname);
    }
    if (message.zone !== "") {
      writer.uint32(34).string(message.zone);
    }
    if (message.challengeCname !== "") {
      writer.uint32(42).string(message.challengeCname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CIQStateTag_AcmeGen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_AcmeGen } as CIQStateTag_AcmeGen;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.csr = CSR.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.int32() as any;
          break;
        case 3:
          message.cname = reader.string();
          break;
        case 4:
          message.zone = reader.string();
          break;
        case 5:
          message.challengeCname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CIQStateTag_AcmeGen>): CIQStateTag_AcmeGen {
    const message = { ...baseCIQStateTag_AcmeGen } as CIQStateTag_AcmeGen;
    if (object.csr !== undefined && object.csr !== null) {
      message.csr = CSR.fromPartial(object.csr);
    } else {
      message.csr = undefined;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = 0;
    }
    if (object.cname !== undefined && object.cname !== null) {
      message.cname = object.cname;
    } else {
      message.cname = "";
    }
    if (object.zone !== undefined && object.zone !== null) {
      message.zone = object.zone;
    } else {
      message.zone = "";
    }
    if (object.challengeCname !== undefined && object.challengeCname !== null) {
      message.challengeCname = object.challengeCname;
    } else {
      message.challengeCname = "";
    }
    return message;
  },
};

const baseCIQStateTag_HTTP01: object = { domains: "" };

export const CIQStateTag_HTTP01 = {
  encode(
    message: CIQStateTag_HTTP01,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.domains) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CIQStateTag_HTTP01 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_HTTP01 } as CIQStateTag_HTTP01;
    message.domains = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domains.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CIQStateTag_HTTP01>): CIQStateTag_HTTP01 {
    const message = { ...baseCIQStateTag_HTTP01 } as CIQStateTag_HTTP01;
    message.domains = [];
    if (object.domains !== undefined && object.domains !== null) {
      for (const e of object.domains) {
        message.domains.push(e);
      }
    }
    return message;
  },
};

const baseCIQStateTag_DNS01: object = { domains: "" };

export const CIQStateTag_DNS01 = {
  encode(
    message: CIQStateTag_DNS01,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.domains) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CIQStateTag_DNS01 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_DNS01 } as CIQStateTag_DNS01;
    message.domains = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domains.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CIQStateTag_DNS01>): CIQStateTag_DNS01 {
    const message = { ...baseCIQStateTag_DNS01 } as CIQStateTag_DNS01;
    message.domains = [];
    if (object.domains !== undefined && object.domains !== null) {
      for (const e of object.domains) {
        message.domains.push(e);
      }
    }
    return message;
  },
};

const baseCIQStateTag_DNS01Record: object = {};

export const CIQStateTag_DNS01Record = {
  encode(
    _: CIQStateTag_DNS01Record,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_DNS01Record {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_DNS01Record,
    } as CIQStateTag_DNS01Record;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_DNS01Record>
  ): CIQStateTag_DNS01Record {
    const message = {
      ...baseCIQStateTag_DNS01Record,
    } as CIQStateTag_DNS01Record;
    return message;
  },
};

const baseCIQStateTag_DNS01RecordCreating: object = {};

export const CIQStateTag_DNS01RecordCreating = {
  encode(
    _: CIQStateTag_DNS01RecordCreating,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_DNS01RecordCreating {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_DNS01RecordCreating,
    } as CIQStateTag_DNS01RecordCreating;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_DNS01RecordCreating>
  ): CIQStateTag_DNS01RecordCreating {
    const message = {
      ...baseCIQStateTag_DNS01RecordCreating,
    } as CIQStateTag_DNS01RecordCreating;
    return message;
  },
};

const baseCIQStateTag_HTTP01Preverified: object = {};

export const CIQStateTag_HTTP01Preverified = {
  encode(
    _: CIQStateTag_HTTP01Preverified,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_HTTP01Preverified {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_HTTP01Preverified,
    } as CIQStateTag_HTTP01Preverified;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_HTTP01Preverified>
  ): CIQStateTag_HTTP01Preverified {
    const message = {
      ...baseCIQStateTag_HTTP01Preverified,
    } as CIQStateTag_HTTP01Preverified;
    return message;
  },
};

const baseCIQStateTag_DNS01Preverified: object = {};

export const CIQStateTag_DNS01Preverified = {
  encode(
    _: CIQStateTag_DNS01Preverified,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_DNS01Preverified {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_DNS01Preverified,
    } as CIQStateTag_DNS01Preverified;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_DNS01Preverified>
  ): CIQStateTag_DNS01Preverified {
    const message = {
      ...baseCIQStateTag_DNS01Preverified,
    } as CIQStateTag_DNS01Preverified;
    return message;
  },
};

const baseCIQStateTag_HTTP01Preverifying: object = {};

export const CIQStateTag_HTTP01Preverifying = {
  encode(
    _: CIQStateTag_HTTP01Preverifying,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_HTTP01Preverifying {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_HTTP01Preverifying,
    } as CIQStateTag_HTTP01Preverifying;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_HTTP01Preverifying>
  ): CIQStateTag_HTTP01Preverifying {
    const message = {
      ...baseCIQStateTag_HTTP01Preverifying,
    } as CIQStateTag_HTTP01Preverifying;
    return message;
  },
};

const baseCIQStateTag_DNS01Preverifying: object = {};

export const CIQStateTag_DNS01Preverifying = {
  encode(
    _: CIQStateTag_DNS01Preverifying,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_DNS01Preverifying {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_DNS01Preverifying,
    } as CIQStateTag_DNS01Preverifying;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_DNS01Preverifying>
  ): CIQStateTag_DNS01Preverifying {
    const message = {
      ...baseCIQStateTag_DNS01Preverifying,
    } as CIQStateTag_DNS01Preverifying;
    return message;
  },
};

const baseCIQStateTag_HTTP01PreverifyErr: object = {};

export const CIQStateTag_HTTP01PreverifyErr = {
  encode(
    _: CIQStateTag_HTTP01PreverifyErr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_HTTP01PreverifyErr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_HTTP01PreverifyErr,
    } as CIQStateTag_HTTP01PreverifyErr;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_HTTP01PreverifyErr>
  ): CIQStateTag_HTTP01PreverifyErr {
    const message = {
      ...baseCIQStateTag_HTTP01PreverifyErr,
    } as CIQStateTag_HTTP01PreverifyErr;
    return message;
  },
};

const baseCIQStateTag_DNS01PreverifyErr: object = {};

export const CIQStateTag_DNS01PreverifyErr = {
  encode(
    _: CIQStateTag_DNS01PreverifyErr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_DNS01PreverifyErr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_DNS01PreverifyErr,
    } as CIQStateTag_DNS01PreverifyErr;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_DNS01PreverifyErr>
  ): CIQStateTag_DNS01PreverifyErr {
    const message = {
      ...baseCIQStateTag_DNS01PreverifyErr,
    } as CIQStateTag_DNS01PreverifyErr;
    return message;
  },
};

const baseCIQStateTag_AcmeSetup: object = { orderUri: "" };

export const CIQStateTag_AcmeSetup = {
  encode(
    message: CIQStateTag_AcmeSetup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderUri !== "") {
      writer.uint32(10).string(message.orderUri);
    }
    Object.entries(message.challenges).forEach(([key, value]) => {
      CIQStateTag_AcmeSetup_ChallengesEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_AcmeSetup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_AcmeSetup } as CIQStateTag_AcmeSetup;
    message.challenges = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderUri = reader.string();
          break;
        case 2:
          const entry2 = CIQStateTag_AcmeSetup_ChallengesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.challenges[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<CIQStateTag_AcmeSetup>
  ): CIQStateTag_AcmeSetup {
    const message = { ...baseCIQStateTag_AcmeSetup } as CIQStateTag_AcmeSetup;
    message.challenges = {};
    if (object.orderUri !== undefined && object.orderUri !== null) {
      message.orderUri = object.orderUri;
    } else {
      message.orderUri = "";
    }
    if (object.challenges !== undefined && object.challenges !== null) {
      Object.entries(object.challenges).forEach(([key, value]) => {
        if (value !== undefined) {
          message.challenges[key] =
            CIQStateTag_AcmeSetup_Challenge.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseCIQStateTag_AcmeSetup_Challenge: object = {
  type: "",
  uri: "",
  token: "",
  response: "",
};

export const CIQStateTag_AcmeSetup_Challenge = {
  encode(
    message: CIQStateTag_AcmeSetup_Challenge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.response !== "") {
      writer.uint32(34).string(message.response);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_AcmeSetup_Challenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_AcmeSetup_Challenge,
    } as CIQStateTag_AcmeSetup_Challenge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.uri = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.response = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<CIQStateTag_AcmeSetup_Challenge>
  ): CIQStateTag_AcmeSetup_Challenge {
    const message = {
      ...baseCIQStateTag_AcmeSetup_Challenge,
    } as CIQStateTag_AcmeSetup_Challenge;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = object.response;
    } else {
      message.response = "";
    }
    return message;
  },
};

const baseCIQStateTag_AcmeSetup_ChallengesEntry: object = { key: "" };

export const CIQStateTag_AcmeSetup_ChallengesEntry = {
  encode(
    message: CIQStateTag_AcmeSetup_ChallengesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CIQStateTag_AcmeSetup_Challenge.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_AcmeSetup_ChallengesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_AcmeSetup_ChallengesEntry,
    } as CIQStateTag_AcmeSetup_ChallengesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = CIQStateTag_AcmeSetup_Challenge.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<CIQStateTag_AcmeSetup_ChallengesEntry>
  ): CIQStateTag_AcmeSetup_ChallengesEntry {
    const message = {
      ...baseCIQStateTag_AcmeSetup_ChallengesEntry,
    } as CIQStateTag_AcmeSetup_ChallengesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = CIQStateTag_AcmeSetup_Challenge.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseCIQStateTag_Accepting: object = {};

export const CIQStateTag_Accepting = {
  encode(
    _: CIQStateTag_Accepting,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_Accepting {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_Accepting } as CIQStateTag_Accepting;
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

  fromPartial(_: DeepPartial<CIQStateTag_Accepting>): CIQStateTag_Accepting {
    const message = { ...baseCIQStateTag_Accepting } as CIQStateTag_Accepting;
    return message;
  },
};

const baseCIQStateTag_AcmeAccept: object = {};

export const CIQStateTag_AcmeAccept = {
  encode(
    message: CIQStateTag_AcmeAccept,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.challenges).forEach(([key, value]) => {
      CIQStateTag_AcmeAccept_ChallengesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_AcmeAccept {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_AcmeAccept } as CIQStateTag_AcmeAccept;
    message.challenges = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = CIQStateTag_AcmeAccept_ChallengesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.challenges[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<CIQStateTag_AcmeAccept>
  ): CIQStateTag_AcmeAccept {
    const message = { ...baseCIQStateTag_AcmeAccept } as CIQStateTag_AcmeAccept;
    message.challenges = {};
    if (object.challenges !== undefined && object.challenges !== null) {
      Object.entries(object.challenges).forEach(([key, value]) => {
        if (value !== undefined) {
          message.challenges[key] =
            CIQStateTag_AcmeAccept_Challenge.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseCIQStateTag_AcmeAccept_Challenge: object = { status: "", error: "" };

export const CIQStateTag_AcmeAccept_Challenge = {
  encode(
    message: CIQStateTag_AcmeAccept_Challenge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_AcmeAccept_Challenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_AcmeAccept_Challenge,
    } as CIQStateTag_AcmeAccept_Challenge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<CIQStateTag_AcmeAccept_Challenge>
  ): CIQStateTag_AcmeAccept_Challenge {
    const message = {
      ...baseCIQStateTag_AcmeAccept_Challenge,
    } as CIQStateTag_AcmeAccept_Challenge;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    return message;
  },
};

const baseCIQStateTag_AcmeAccept_ChallengesEntry: object = { key: "" };

export const CIQStateTag_AcmeAccept_ChallengesEntry = {
  encode(
    message: CIQStateTag_AcmeAccept_ChallengesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CIQStateTag_AcmeAccept_Challenge.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_AcmeAccept_ChallengesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_AcmeAccept_ChallengesEntry,
    } as CIQStateTag_AcmeAccept_ChallengesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = CIQStateTag_AcmeAccept_Challenge.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<CIQStateTag_AcmeAccept_ChallengesEntry>
  ): CIQStateTag_AcmeAccept_ChallengesEntry {
    const message = {
      ...baseCIQStateTag_AcmeAccept_ChallengesEntry,
    } as CIQStateTag_AcmeAccept_ChallengesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = CIQStateTag_AcmeAccept_Challenge.fromPartial(
        object.value
      );
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseCIQStateTag_AcceptErr: object = {};

export const CIQStateTag_AcceptErr = {
  encode(
    _: CIQStateTag_AcceptErr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_AcceptErr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_AcceptErr } as CIQStateTag_AcceptErr;
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

  fromPartial(_: DeepPartial<CIQStateTag_AcceptErr>): CIQStateTag_AcceptErr {
    const message = { ...baseCIQStateTag_AcceptErr } as CIQStateTag_AcceptErr;
    return message;
  },
};

const baseCIQStateTag_SettingUp: object = {};

export const CIQStateTag_SettingUp = {
  encode(
    _: CIQStateTag_SettingUp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_SettingUp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_SettingUp } as CIQStateTag_SettingUp;
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

  fromPartial(_: DeepPartial<CIQStateTag_SettingUp>): CIQStateTag_SettingUp {
    const message = { ...baseCIQStateTag_SettingUp } as CIQStateTag_SettingUp;
    return message;
  },
};

const baseCIQStateTag_SetupErr: object = {};

export const CIQStateTag_SetupErr = {
  encode(
    _: CIQStateTag_SetupErr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_SetupErr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_SetupErr } as CIQStateTag_SetupErr;
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

  fromPartial(_: DeepPartial<CIQStateTag_SetupErr>): CIQStateTag_SetupErr {
    const message = { ...baseCIQStateTag_SetupErr } as CIQStateTag_SetupErr;
    return message;
  },
};

const baseCIQStateTag_HTTP01Verified: object = {};

export const CIQStateTag_HTTP01Verified = {
  encode(
    _: CIQStateTag_HTTP01Verified,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_HTTP01Verified {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_HTTP01Verified,
    } as CIQStateTag_HTTP01Verified;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_HTTP01Verified>
  ): CIQStateTag_HTTP01Verified {
    const message = {
      ...baseCIQStateTag_HTTP01Verified,
    } as CIQStateTag_HTTP01Verified;
    return message;
  },
};

const baseCIQStateTag_DNS01Verified: object = {};

export const CIQStateTag_DNS01Verified = {
  encode(
    _: CIQStateTag_DNS01Verified,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_DNS01Verified {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_DNS01Verified,
    } as CIQStateTag_DNS01Verified;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_DNS01Verified>
  ): CIQStateTag_DNS01Verified {
    const message = {
      ...baseCIQStateTag_DNS01Verified,
    } as CIQStateTag_DNS01Verified;
    return message;
  },
};

const baseCIQStateTag_HTTP01Verifying: object = {};

export const CIQStateTag_HTTP01Verifying = {
  encode(
    _: CIQStateTag_HTTP01Verifying,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_HTTP01Verifying {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_HTTP01Verifying,
    } as CIQStateTag_HTTP01Verifying;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_HTTP01Verifying>
  ): CIQStateTag_HTTP01Verifying {
    const message = {
      ...baseCIQStateTag_HTTP01Verifying,
    } as CIQStateTag_HTTP01Verifying;
    return message;
  },
};

const baseCIQStateTag_DNS01Verifying: object = {};

export const CIQStateTag_DNS01Verifying = {
  encode(
    _: CIQStateTag_DNS01Verifying,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_DNS01Verifying {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_DNS01Verifying,
    } as CIQStateTag_DNS01Verifying;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_DNS01Verifying>
  ): CIQStateTag_DNS01Verifying {
    const message = {
      ...baseCIQStateTag_DNS01Verifying,
    } as CIQStateTag_DNS01Verifying;
    return message;
  },
};

const baseCIQStateTag_HTTP01VerifyErr: object = {};

export const CIQStateTag_HTTP01VerifyErr = {
  encode(
    _: CIQStateTag_HTTP01VerifyErr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_HTTP01VerifyErr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_HTTP01VerifyErr,
    } as CIQStateTag_HTTP01VerifyErr;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_HTTP01VerifyErr>
  ): CIQStateTag_HTTP01VerifyErr {
    const message = {
      ...baseCIQStateTag_HTTP01VerifyErr,
    } as CIQStateTag_HTTP01VerifyErr;
    return message;
  },
};

const baseCIQStateTag_DNS01VerifyErr: object = {};

export const CIQStateTag_DNS01VerifyErr = {
  encode(
    _: CIQStateTag_DNS01VerifyErr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_DNS01VerifyErr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_DNS01VerifyErr,
    } as CIQStateTag_DNS01VerifyErr;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_DNS01VerifyErr>
  ): CIQStateTag_DNS01VerifyErr {
    const message = {
      ...baseCIQStateTag_DNS01VerifyErr,
    } as CIQStateTag_DNS01VerifyErr;
    return message;
  },
};

const baseCIQStateTag_Requesting: object = {};

export const CIQStateTag_Requesting = {
  encode(
    _: CIQStateTag_Requesting,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_Requesting {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_Requesting } as CIQStateTag_Requesting;
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

  fromPartial(_: DeepPartial<CIQStateTag_Requesting>): CIQStateTag_Requesting {
    const message = { ...baseCIQStateTag_Requesting } as CIQStateTag_Requesting;
    return message;
  },
};

const baseCIQStateTag_Requested: object = {};

export const CIQStateTag_Requested = {
  encode(
    _: CIQStateTag_Requested,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_Requested {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_Requested } as CIQStateTag_Requested;
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

  fromPartial(_: DeepPartial<CIQStateTag_Requested>): CIQStateTag_Requested {
    const message = { ...baseCIQStateTag_Requested } as CIQStateTag_Requested;
    return message;
  },
};

const baseCIQStateTag_DNS01Cleaning: object = {};

export const CIQStateTag_DNS01Cleaning = {
  encode(
    _: CIQStateTag_DNS01Cleaning,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CIQStateTag_DNS01Cleaning {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCIQStateTag_DNS01Cleaning,
    } as CIQStateTag_DNS01Cleaning;
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

  fromPartial(
    _: DeepPartial<CIQStateTag_DNS01Cleaning>
  ): CIQStateTag_DNS01Cleaning {
    const message = {
      ...baseCIQStateTag_DNS01Cleaning,
    } as CIQStateTag_DNS01Cleaning;
    return message;
  },
};

const baseCIQStateTag_Backoff: object = { summary: "" };

export const CIQStateTag_Backoff = {
  encode(
    message: CIQStateTag_Backoff,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.expires !== undefined) {
      Timestamp.encode(message.expires, writer.uint32(10).fork()).ldelim();
    }
    if (message.summary !== "") {
      writer.uint32(18).string(message.summary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CIQStateTag_Backoff {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIQStateTag_Backoff } as CIQStateTag_Backoff;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expires = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.summary = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CIQStateTag_Backoff>): CIQStateTag_Backoff {
    const message = { ...baseCIQStateTag_Backoff } as CIQStateTag_Backoff;
    if (object.expires !== undefined && object.expires !== null) {
      message.expires = Timestamp.fromPartial(object.expires);
    } else {
      message.expires = undefined;
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    } else {
      message.summary = "";
    }
    return message;
  },
};

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
