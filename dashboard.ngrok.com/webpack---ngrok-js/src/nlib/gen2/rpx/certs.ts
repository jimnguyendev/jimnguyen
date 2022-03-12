// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import _m0 from 'protobufjs/minimal';
import { CertAuthorityAcme, Cert, CA, CSR, DefaultMuxMatchByHostname, ManagedCertProvisioningJob, CertDetails, Paging, CertKeyPair, ManagedCertPolicy, ManagedCertPolicyStatus, ManagedCertPolicyData } from '../rpx/model';

import { Empty, ID, OptString } from '../pb/types';
import { StreamItem, SyncReq } from '../rpx/stream';
import { BrowserHeaders } from 'browser-headers';

import { CIQStateTag } from '../rpx/ciq';

export const protobufPackage = 'rpx';

export interface CertsCreateReq {
certsPem: Uint8Array,
keyPem: Uint8Array,
accountId: number,
description: string,
metadata: string,
defaultMuxMatchByHostname: DefaultMuxMatchByHostname | undefined,
}

export interface CertsGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface CertsUpdateReq {
id: ID | undefined,
accountId: number,
description: OptString | undefined,
metadata: OptString | undefined,
defaultMuxMatchByHostname: DefaultMuxMatchByHostname | undefined,
}

/**
 * CertTuples returned by GetByAccount can have *any* of their fields be null.
 * CertTuples returned by GetByID will always have a non-null `cert` field, but
 * csr and job could be null.
 * 
 * cert can be null if a provisioning job is trying to provision a certificate for
 * the very first time, but it has not yet succeeded. In that case, csr and job
 * will both be non-null.
 * 
 * A certificate that was already provisioned by auto provisioning will
 * may have a null cert field but it will have the CSR it was provisioned with but a null
 * job object because it is no longer actively being provisioned.
 * 
 * Lastly, certs that were uploaded by the user will only have a non-null cert field and
 * will have neither a csr or job parameter.
 */
export interface CertTuple {
cert: Cert | undefined,
csr: CSR | undefined,
job: ManagedCertProvisioningJob | undefined,
}

export interface CertsGetByIDResp {
id: ID | undefined,
certTuple: CertTuple | undefined,
}

export interface CertsParsePEMReq {
pem: Uint8Array,
}

export interface CertsParsePEMResp {
details: CertDetails | undefined,
}

export interface CertsGetByAccountReq {
accountId: number,
paging: Paging | undefined,
}

export interface CertsGetByAccountResp {
certTuples: CertTuple[],
next: Paging | undefined,
}

export interface CertsGetMuxDefaultCertsReq {
}

export interface CertsGetMuxDefaultCertsResp {
certs: CertKeyPair[],
}

export interface ManagedCertPoliciesGetByIDResp {
policy: ManagedCertPolicy | undefined,
status: ManagedCertPolicyStatus | undefined,
certId: ID | undefined,
}

export interface ManagedCertPoliciesCreateResp {
managedCertPolicy: ManagedCertPolicy | undefined,
csr: CSR | undefined,
}

export interface ManagedCertPoliciesUpdateResp {
managedCertPolicy: ManagedCertPolicy | undefined,
csr: CSR | undefined,
}

export interface CertsDeleteReq {
id: ID | undefined,
accountId: number,
}

export interface CertsDeleteByAccountReq {
accountId: number,
}

export interface ManagedCertPoliciesCreateReq {
accountId: number,
policyData: ManagedCertPolicyData | undefined,
cname: string,
zone: string,
challengeCname: string,
ownerId: ID | undefined,
}

export interface ManagedCertPoliciesUpdateReq {
id: ID | undefined,
accountId: number,
policyData: ManagedCertPolicyData | undefined,
cname: string,
/**
 * since the value in policy_data is just a bool, we need a way to say that we
 * want to update this. this is only for internal use and should never be set
 * to true by any action in reserved domains or through the api/dashboard
 */
updateDefaultMuxMatchByHostname: boolean,
zone: string,
challengeCname: string,
}

export interface ManagedCertPoliciesDeleteReq {
id: ID | undefined,
accountId: number,
}

export interface ManagedCertPoliciesGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface CAsGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface CAsGetByAccountReq {
accountId: number,
paging: Paging | undefined,
}

export interface CAsCreateReq {
caPem: Uint8Array,
accountId: number,
description: string,
metadata: string,
}

export interface CAsUpdateReq {
id: ID | undefined,
description: OptString | undefined,
metadata: OptString | undefined,
}

export interface CAsDeleteReq {
id: ID | undefined,
}

export interface CAsDeleteByAccountReq {
accountId: number,
}

export interface CAListResp {
cas: CA[],
next: Paging | undefined,
}

export interface CertsStoreGetCSRsResp {
managedCertPolicyId: ID | undefined,
csr: CSR | undefined,
authority: CertAuthorityAcme,
cname: string,
zone: string,
challengeCname: string,
}

export interface CertsAutoCreateReq {
csr: CSR | undefined,
authority: CertAuthorityAcme,
cname: string,
zone: string,
challengeCname: string,
}

export interface CertsAutoDeleteReq {
id: ID | undefined,
}

export interface CertsStoreGetCSRByManagedCertPolicyIDReq {
accountId: number,
managedCertPolicyId: ID | undefined,
}

export interface CertsStoreCreateCSRReq {
accountId: number,
managedCertPolicyId: ID | undefined,
acmeAuthority: CertAuthorityAcme,
cname: string,
zone: string,
certDetails: CertDetails | undefined,
defaultMuxMatchByHostname: DefaultMuxMatchByHostname | undefined,
noInsert: boolean,
challengeCname: string,
}

export interface CertsStoreDeleteCSRReq {
id: ID | undefined,
accountId: number,
}

export interface CertsStoreFinalizeCSRReq {
id: ID | undefined,
accountId: number,
cert: Uint8Array,
}

export interface CertsAutoStatusResp {
id: ID | undefined,
job: ManagedCertProvisioningJob | undefined,
}

export interface CertsAutoDebugDumpCIQReq {
mode: CertsAutoDebugDumpCIQReq_Mode,
consistency: CertsAutoDebugDumpCIQReq_Consistency,
id: ID[],
}

export enum CertsAutoDebugDumpCIQReq_Mode {
CERTS_AUTO_DEBUG_DUMPCIQ_REQ_MODE_INVALID = 0,
CERTS_AUTO_DEBUG_DUMPCIQ_REQ_MODE_IDS = 1,
CERTS_AUTO_DEBUG_DUMPCIQ_REQ_MODE_ALL = 2,
}

export enum CertsAutoDebugDumpCIQReq_Consistency {
CERTS_AUTO_DEBUG_DUMPCIQ_REQ_CONSISTENCY_INVALID = 0,
/**
 * CERTS_AUTO_DEBUG_DUMPCIQ_REQ_CONSISTENCY_WRITE - Fully consistent with the local worker - ie., all write operations
 * performed up until the point in time of the call by the worker will
 * be reflected in the returned state.
 */
CERTS_AUTO_DEBUG_DUMPCIQ_REQ_CONSISTENCY_WRITE = 1,
/**
 * CERTS_AUTO_DEBUG_DUMPCIQ_REQ_CONSISTENCY_READ - Read consistent with the local worker - ie., the state returned will
 * be at least as recent as any previous state returned by this worker, but
 * might not reflect the newest transactions sent.
 */
CERTS_AUTO_DEBUG_DUMPCIQ_REQ_CONSISTENCY_READ = 2,
}

export interface CertsAutoDebugDumpCIQResp {
id: ID | undefined,
stateTag: CIQStateTag[],
}

export interface CertsAutoDebugDropCIQTagReq {
id: ID | undefined,
/** Tag name to drop (eg. 'BACKOFF') */
tagName: string,
}

export interface CertsAutoDebugDropCIQEntryReq {
id: ID | undefined,
}

const baseCertsCreateReq: object = { accountId: 0,description: "",metadata: "" };

export const CertsCreateReq = {
            encode(
      message: CertsCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.certsPem.length !== 0) {
          writer.uint32(10).bytes(message.certsPem);
        }
if (message.keyPem.length !== 0) {
          writer.uint32(18).bytes(message.keyPem);
        }
if (message.accountId !== 0) {
          writer.uint32(24).int64(message.accountId);
        }
if (message.description !== "") {
          writer.uint32(34).string(message.description);
        }
if (message.metadata !== "") {
          writer.uint32(42).string(message.metadata);
        }
if (message.defaultMuxMatchByHostname !== undefined) {
          DefaultMuxMatchByHostname.encode(message.defaultMuxMatchByHostname, writer.uint32(50).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsCreateReq } as CertsCreateReq;
message.certsPem = new Uint8Array();
message.keyPem = new Uint8Array();
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.certsPem = reader.bytes();
break;
case 2:
message.keyPem = reader.bytes();
break;
case 3:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 4:
message.description = reader.string();
break;
case 5:
message.metadata = reader.string();
break;
case 6:
message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsCreateReq>): CertsCreateReq {
      const message = { ...baseCertsCreateReq } as CertsCreateReq;
if (object.certsPem !== undefined && object.certsPem !== null) {
message.certsPem = object.certsPem;
} else {
message.certsPem = new Uint8Array()
}
if (object.keyPem !== undefined && object.keyPem !== null) {
message.keyPem = object.keyPem;
} else {
message.keyPem = new Uint8Array()
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.description !== undefined && object.description !== null) {
message.description = object.description;
} else {
message.description = ""
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = object.metadata;
} else {
message.metadata = ""
}
if (object.defaultMuxMatchByHostname !== undefined && object.defaultMuxMatchByHostname !== null) {
message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.fromPartial(object.defaultMuxMatchByHostname);
} else {
message.defaultMuxMatchByHostname = undefined
}
return message;
}
          };

const baseCertsGetByIDReq: object = { accountId: 0 };

export const CertsGetByIDReq = {
            encode(
      message: CertsGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsGetByIDReq } as CertsGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsGetByIDReq>): CertsGetByIDReq {
      const message = { ...baseCertsGetByIDReq } as CertsGetByIDReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseCertsUpdateReq: object = { accountId: 0 };

export const CertsUpdateReq = {
            encode(
      message: CertsUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(26).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(34).fork()).ldelim();
        }
if (message.defaultMuxMatchByHostname !== undefined) {
          DefaultMuxMatchByHostname.encode(message.defaultMuxMatchByHostname, writer.uint32(42).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsUpdateReq } as CertsUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.description = OptString.decode(reader, reader.uint32());
break;
case 4:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 5:
message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsUpdateReq>): CertsUpdateReq {
      const message = { ...baseCertsUpdateReq } as CertsUpdateReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.description !== undefined && object.description !== null) {
message.description = OptString.fromPartial(object.description);
} else {
message.description = undefined
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = OptString.fromPartial(object.metadata);
} else {
message.metadata = undefined
}
if (object.defaultMuxMatchByHostname !== undefined && object.defaultMuxMatchByHostname !== null) {
message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.fromPartial(object.defaultMuxMatchByHostname);
} else {
message.defaultMuxMatchByHostname = undefined
}
return message;
}
          };

const baseCertTuple: object = {  };

export const CertTuple = {
            encode(
      message: CertTuple,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.cert !== undefined) {
          Cert.encode(message.cert, writer.uint32(10).fork()).ldelim();
        }
if (message.csr !== undefined) {
          CSR.encode(message.csr, writer.uint32(18).fork()).ldelim();
        }
if (message.job !== undefined) {
          ManagedCertProvisioningJob.encode(message.job, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertTuple {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertTuple } as CertTuple;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.cert = Cert.decode(reader, reader.uint32());
break;
case 2:
message.csr = CSR.decode(reader, reader.uint32());
break;
case 3:
message.job = ManagedCertProvisioningJob.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertTuple>): CertTuple {
      const message = { ...baseCertTuple } as CertTuple;
if (object.cert !== undefined && object.cert !== null) {
message.cert = Cert.fromPartial(object.cert);
} else {
message.cert = undefined
}
if (object.csr !== undefined && object.csr !== null) {
message.csr = CSR.fromPartial(object.csr);
} else {
message.csr = undefined
}
if (object.job !== undefined && object.job !== null) {
message.job = ManagedCertProvisioningJob.fromPartial(object.job);
} else {
message.job = undefined
}
return message;
}
          };

const baseCertsGetByIDResp: object = {  };

export const CertsGetByIDResp = {
            encode(
      message: CertsGetByIDResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.certTuple !== undefined) {
          CertTuple.encode(message.certTuple, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsGetByIDResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsGetByIDResp } as CertsGetByIDResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.certTuple = CertTuple.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsGetByIDResp>): CertsGetByIDResp {
      const message = { ...baseCertsGetByIDResp } as CertsGetByIDResp;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.certTuple !== undefined && object.certTuple !== null) {
message.certTuple = CertTuple.fromPartial(object.certTuple);
} else {
message.certTuple = undefined
}
return message;
}
          };

const baseCertsParsePEMReq: object = {  };

export const CertsParsePEMReq = {
            encode(
      message: CertsParsePEMReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.pem.length !== 0) {
          writer.uint32(10).bytes(message.pem);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsParsePEMReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsParsePEMReq } as CertsParsePEMReq;
message.pem = new Uint8Array();
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.pem = reader.bytes();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsParsePEMReq>): CertsParsePEMReq {
      const message = { ...baseCertsParsePEMReq } as CertsParsePEMReq;
if (object.pem !== undefined && object.pem !== null) {
message.pem = object.pem;
} else {
message.pem = new Uint8Array()
}
return message;
}
          };

const baseCertsParsePEMResp: object = {  };

export const CertsParsePEMResp = {
            encode(
      message: CertsParsePEMResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.details !== undefined) {
          CertDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsParsePEMResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsParsePEMResp } as CertsParsePEMResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.details = CertDetails.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsParsePEMResp>): CertsParsePEMResp {
      const message = { ...baseCertsParsePEMResp } as CertsParsePEMResp;
if (object.details !== undefined && object.details !== null) {
message.details = CertDetails.fromPartial(object.details);
} else {
message.details = undefined
}
return message;
}
          };

const baseCertsGetByAccountReq: object = { accountId: 0 };

export const CertsGetByAccountReq = {
            encode(
      message: CertsGetByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.paging !== undefined) {
          Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsGetByAccountReq } as CertsGetByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.paging = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsGetByAccountReq>): CertsGetByAccountReq {
      const message = { ...baseCertsGetByAccountReq } as CertsGetByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.paging !== undefined && object.paging !== null) {
message.paging = Paging.fromPartial(object.paging);
} else {
message.paging = undefined
}
return message;
}
          };

const baseCertsGetByAccountResp: object = {  };

export const CertsGetByAccountResp = {
            encode(
      message: CertsGetByAccountResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.certTuples) {
            CertTuple.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsGetByAccountResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsGetByAccountResp } as CertsGetByAccountResp;
message.certTuples = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.certTuples.push(CertTuple.decode(reader, reader.uint32()));
break;
case 2:
message.next = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsGetByAccountResp>): CertsGetByAccountResp {
      const message = { ...baseCertsGetByAccountResp } as CertsGetByAccountResp;
message.certTuples = [];
if (object.certTuples !== undefined && object.certTuples !== null) {
for (const e of object.certTuples) {
            message.certTuples.push(CertTuple.fromPartial(e));
          }
}
if (object.next !== undefined && object.next !== null) {
message.next = Paging.fromPartial(object.next);
} else {
message.next = undefined
}
return message;
}
          };

const baseCertsGetMuxDefaultCertsReq: object = {  };

export const CertsGetMuxDefaultCertsReq = {
            encode(
      _: CertsGetMuxDefaultCertsReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsGetMuxDefaultCertsReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsGetMuxDefaultCertsReq } as CertsGetMuxDefaultCertsReq;
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

fromPartial(_: DeepPartial<CertsGetMuxDefaultCertsReq>): CertsGetMuxDefaultCertsReq {
      const message = { ...baseCertsGetMuxDefaultCertsReq } as CertsGetMuxDefaultCertsReq;
return message;
}
          };

const baseCertsGetMuxDefaultCertsResp: object = {  };

export const CertsGetMuxDefaultCertsResp = {
            encode(
      message: CertsGetMuxDefaultCertsResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.certs) {
            CertKeyPair.encode(v!, writer.uint32(10).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsGetMuxDefaultCertsResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsGetMuxDefaultCertsResp } as CertsGetMuxDefaultCertsResp;
message.certs = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.certs.push(CertKeyPair.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsGetMuxDefaultCertsResp>): CertsGetMuxDefaultCertsResp {
      const message = { ...baseCertsGetMuxDefaultCertsResp } as CertsGetMuxDefaultCertsResp;
message.certs = [];
if (object.certs !== undefined && object.certs !== null) {
for (const e of object.certs) {
            message.certs.push(CertKeyPair.fromPartial(e));
          }
}
return message;
}
          };

const baseManagedCertPoliciesGetByIDResp: object = {  };

export const ManagedCertPoliciesGetByIDResp = {
            encode(
      message: ManagedCertPoliciesGetByIDResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.policy !== undefined) {
          ManagedCertPolicy.encode(message.policy, writer.uint32(10).fork()).ldelim();
        }
if (message.status !== undefined) {
          ManagedCertPolicyStatus.encode(message.status, writer.uint32(18).fork()).ldelim();
        }
if (message.certId !== undefined) {
          ID.encode(message.certId, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): ManagedCertPoliciesGetByIDResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseManagedCertPoliciesGetByIDResp } as ManagedCertPoliciesGetByIDResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.policy = ManagedCertPolicy.decode(reader, reader.uint32());
break;
case 2:
message.status = ManagedCertPolicyStatus.decode(reader, reader.uint32());
break;
case 3:
message.certId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<ManagedCertPoliciesGetByIDResp>): ManagedCertPoliciesGetByIDResp {
      const message = { ...baseManagedCertPoliciesGetByIDResp } as ManagedCertPoliciesGetByIDResp;
if (object.policy !== undefined && object.policy !== null) {
message.policy = ManagedCertPolicy.fromPartial(object.policy);
} else {
message.policy = undefined
}
if (object.status !== undefined && object.status !== null) {
message.status = ManagedCertPolicyStatus.fromPartial(object.status);
} else {
message.status = undefined
}
if (object.certId !== undefined && object.certId !== null) {
message.certId = ID.fromPartial(object.certId);
} else {
message.certId = undefined
}
return message;
}
          };

const baseManagedCertPoliciesCreateResp: object = {  };

export const ManagedCertPoliciesCreateResp = {
            encode(
      message: ManagedCertPoliciesCreateResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.managedCertPolicy !== undefined) {
          ManagedCertPolicy.encode(message.managedCertPolicy, writer.uint32(10).fork()).ldelim();
        }
if (message.csr !== undefined) {
          CSR.encode(message.csr, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): ManagedCertPoliciesCreateResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseManagedCertPoliciesCreateResp } as ManagedCertPoliciesCreateResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.managedCertPolicy = ManagedCertPolicy.decode(reader, reader.uint32());
break;
case 2:
message.csr = CSR.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<ManagedCertPoliciesCreateResp>): ManagedCertPoliciesCreateResp {
      const message = { ...baseManagedCertPoliciesCreateResp } as ManagedCertPoliciesCreateResp;
if (object.managedCertPolicy !== undefined && object.managedCertPolicy !== null) {
message.managedCertPolicy = ManagedCertPolicy.fromPartial(object.managedCertPolicy);
} else {
message.managedCertPolicy = undefined
}
if (object.csr !== undefined && object.csr !== null) {
message.csr = CSR.fromPartial(object.csr);
} else {
message.csr = undefined
}
return message;
}
          };

const baseManagedCertPoliciesUpdateResp: object = {  };

export const ManagedCertPoliciesUpdateResp = {
            encode(
      message: ManagedCertPoliciesUpdateResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.managedCertPolicy !== undefined) {
          ManagedCertPolicy.encode(message.managedCertPolicy, writer.uint32(10).fork()).ldelim();
        }
if (message.csr !== undefined) {
          CSR.encode(message.csr, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): ManagedCertPoliciesUpdateResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseManagedCertPoliciesUpdateResp } as ManagedCertPoliciesUpdateResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.managedCertPolicy = ManagedCertPolicy.decode(reader, reader.uint32());
break;
case 2:
message.csr = CSR.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<ManagedCertPoliciesUpdateResp>): ManagedCertPoliciesUpdateResp {
      const message = { ...baseManagedCertPoliciesUpdateResp } as ManagedCertPoliciesUpdateResp;
if (object.managedCertPolicy !== undefined && object.managedCertPolicy !== null) {
message.managedCertPolicy = ManagedCertPolicy.fromPartial(object.managedCertPolicy);
} else {
message.managedCertPolicy = undefined
}
if (object.csr !== undefined && object.csr !== null) {
message.csr = CSR.fromPartial(object.csr);
} else {
message.csr = undefined
}
return message;
}
          };

const baseCertsDeleteReq: object = { accountId: 0 };

export const CertsDeleteReq = {
            encode(
      message: CertsDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsDeleteReq } as CertsDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsDeleteReq>): CertsDeleteReq {
      const message = { ...baseCertsDeleteReq } as CertsDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseCertsDeleteByAccountReq: object = { accountId: 0 };

export const CertsDeleteByAccountReq = {
            encode(
      message: CertsDeleteByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsDeleteByAccountReq } as CertsDeleteByAccountReq;
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

fromPartial(object: DeepPartial<CertsDeleteByAccountReq>): CertsDeleteByAccountReq {
      const message = { ...baseCertsDeleteByAccountReq } as CertsDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseManagedCertPoliciesCreateReq: object = { accountId: 0,cname: "",zone: "",challengeCname: "" };

export const ManagedCertPoliciesCreateReq = {
            encode(
      message: ManagedCertPoliciesCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.policyData !== undefined) {
          ManagedCertPolicyData.encode(message.policyData, writer.uint32(18).fork()).ldelim();
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
if (message.ownerId !== undefined) {
          ID.encode(message.ownerId, writer.uint32(50).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): ManagedCertPoliciesCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseManagedCertPoliciesCreateReq } as ManagedCertPoliciesCreateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.policyData = ManagedCertPolicyData.decode(reader, reader.uint32());
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
case 6:
message.ownerId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<ManagedCertPoliciesCreateReq>): ManagedCertPoliciesCreateReq {
      const message = { ...baseManagedCertPoliciesCreateReq } as ManagedCertPoliciesCreateReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.policyData !== undefined && object.policyData !== null) {
message.policyData = ManagedCertPolicyData.fromPartial(object.policyData);
} else {
message.policyData = undefined
}
if (object.cname !== undefined && object.cname !== null) {
message.cname = object.cname;
} else {
message.cname = ""
}
if (object.zone !== undefined && object.zone !== null) {
message.zone = object.zone;
} else {
message.zone = ""
}
if (object.challengeCname !== undefined && object.challengeCname !== null) {
message.challengeCname = object.challengeCname;
} else {
message.challengeCname = ""
}
if (object.ownerId !== undefined && object.ownerId !== null) {
message.ownerId = ID.fromPartial(object.ownerId);
} else {
message.ownerId = undefined
}
return message;
}
          };

const baseManagedCertPoliciesUpdateReq: object = { accountId: 0,cname: "",updateDefaultMuxMatchByHostname: false,zone: "",challengeCname: "" };

export const ManagedCertPoliciesUpdateReq = {
            encode(
      message: ManagedCertPoliciesUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
if (message.policyData !== undefined) {
          ManagedCertPolicyData.encode(message.policyData, writer.uint32(26).fork()).ldelim();
        }
if (message.cname !== "") {
          writer.uint32(34).string(message.cname);
        }
if (message.updateDefaultMuxMatchByHostname === true) {
          writer.uint32(40).bool(message.updateDefaultMuxMatchByHostname);
        }
if (message.zone !== "") {
          writer.uint32(50).string(message.zone);
        }
if (message.challengeCname !== "") {
          writer.uint32(58).string(message.challengeCname);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): ManagedCertPoliciesUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseManagedCertPoliciesUpdateReq } as ManagedCertPoliciesUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.policyData = ManagedCertPolicyData.decode(reader, reader.uint32());
break;
case 4:
message.cname = reader.string();
break;
case 5:
message.updateDefaultMuxMatchByHostname = reader.bool();
break;
case 6:
message.zone = reader.string();
break;
case 7:
message.challengeCname = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<ManagedCertPoliciesUpdateReq>): ManagedCertPoliciesUpdateReq {
      const message = { ...baseManagedCertPoliciesUpdateReq } as ManagedCertPoliciesUpdateReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.policyData !== undefined && object.policyData !== null) {
message.policyData = ManagedCertPolicyData.fromPartial(object.policyData);
} else {
message.policyData = undefined
}
if (object.cname !== undefined && object.cname !== null) {
message.cname = object.cname;
} else {
message.cname = ""
}
if (object.updateDefaultMuxMatchByHostname !== undefined && object.updateDefaultMuxMatchByHostname !== null) {
message.updateDefaultMuxMatchByHostname = object.updateDefaultMuxMatchByHostname;
} else {
message.updateDefaultMuxMatchByHostname = false
}
if (object.zone !== undefined && object.zone !== null) {
message.zone = object.zone;
} else {
message.zone = ""
}
if (object.challengeCname !== undefined && object.challengeCname !== null) {
message.challengeCname = object.challengeCname;
} else {
message.challengeCname = ""
}
return message;
}
          };

const baseManagedCertPoliciesDeleteReq: object = { accountId: 0 };

export const ManagedCertPoliciesDeleteReq = {
            encode(
      message: ManagedCertPoliciesDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): ManagedCertPoliciesDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseManagedCertPoliciesDeleteReq } as ManagedCertPoliciesDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<ManagedCertPoliciesDeleteReq>): ManagedCertPoliciesDeleteReq {
      const message = { ...baseManagedCertPoliciesDeleteReq } as ManagedCertPoliciesDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseManagedCertPoliciesGetByIDReq: object = { accountId: 0 };

export const ManagedCertPoliciesGetByIDReq = {
            encode(
      message: ManagedCertPoliciesGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): ManagedCertPoliciesGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseManagedCertPoliciesGetByIDReq } as ManagedCertPoliciesGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<ManagedCertPoliciesGetByIDReq>): ManagedCertPoliciesGetByIDReq {
      const message = { ...baseManagedCertPoliciesGetByIDReq } as ManagedCertPoliciesGetByIDReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseCAsGetByIDReq: object = { accountId: 0 };

export const CAsGetByIDReq = {
            encode(
      message: CAsGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CAsGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCAsGetByIDReq } as CAsGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CAsGetByIDReq>): CAsGetByIDReq {
      const message = { ...baseCAsGetByIDReq } as CAsGetByIDReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseCAsGetByAccountReq: object = { accountId: 0 };

export const CAsGetByAccountReq = {
            encode(
      message: CAsGetByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.paging !== undefined) {
          Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CAsGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCAsGetByAccountReq } as CAsGetByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.paging = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CAsGetByAccountReq>): CAsGetByAccountReq {
      const message = { ...baseCAsGetByAccountReq } as CAsGetByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.paging !== undefined && object.paging !== null) {
message.paging = Paging.fromPartial(object.paging);
} else {
message.paging = undefined
}
return message;
}
          };

const baseCAsCreateReq: object = { accountId: 0,description: "",metadata: "" };

export const CAsCreateReq = {
            encode(
      message: CAsCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.caPem.length !== 0) {
          writer.uint32(10).bytes(message.caPem);
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
if (message.description !== "") {
          writer.uint32(26).string(message.description);
        }
if (message.metadata !== "") {
          writer.uint32(34).string(message.metadata);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CAsCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCAsCreateReq } as CAsCreateReq;
message.caPem = new Uint8Array();
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.caPem = reader.bytes();
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.description = reader.string();
break;
case 4:
message.metadata = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CAsCreateReq>): CAsCreateReq {
      const message = { ...baseCAsCreateReq } as CAsCreateReq;
if (object.caPem !== undefined && object.caPem !== null) {
message.caPem = object.caPem;
} else {
message.caPem = new Uint8Array()
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.description !== undefined && object.description !== null) {
message.description = object.description;
} else {
message.description = ""
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = object.metadata;
} else {
message.metadata = ""
}
return message;
}
          };

const baseCAsUpdateReq: object = {  };

export const CAsUpdateReq = {
            encode(
      message: CAsUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(18).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CAsUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCAsUpdateReq } as CAsUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.description = OptString.decode(reader, reader.uint32());
break;
case 3:
message.metadata = OptString.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CAsUpdateReq>): CAsUpdateReq {
      const message = { ...baseCAsUpdateReq } as CAsUpdateReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.description !== undefined && object.description !== null) {
message.description = OptString.fromPartial(object.description);
} else {
message.description = undefined
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = OptString.fromPartial(object.metadata);
} else {
message.metadata = undefined
}
return message;
}
          };

const baseCAsDeleteReq: object = {  };

export const CAsDeleteReq = {
            encode(
      message: CAsDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CAsDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCAsDeleteReq } as CAsDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CAsDeleteReq>): CAsDeleteReq {
      const message = { ...baseCAsDeleteReq } as CAsDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

const baseCAsDeleteByAccountReq: object = { accountId: 0 };

export const CAsDeleteByAccountReq = {
            encode(
      message: CAsDeleteByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CAsDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCAsDeleteByAccountReq } as CAsDeleteByAccountReq;
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

fromPartial(object: DeepPartial<CAsDeleteByAccountReq>): CAsDeleteByAccountReq {
      const message = { ...baseCAsDeleteByAccountReq } as CAsDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseCAListResp: object = {  };

export const CAListResp = {
            encode(
      message: CAListResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.cas) {
            CA.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CAListResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCAListResp } as CAListResp;
message.cas = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.cas.push(CA.decode(reader, reader.uint32()));
break;
case 2:
message.next = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CAListResp>): CAListResp {
      const message = { ...baseCAListResp } as CAListResp;
message.cas = [];
if (object.cas !== undefined && object.cas !== null) {
for (const e of object.cas) {
            message.cas.push(CA.fromPartial(e));
          }
}
if (object.next !== undefined && object.next !== null) {
message.next = Paging.fromPartial(object.next);
} else {
message.next = undefined
}
return message;
}
          };

const baseCertsStoreGetCSRsResp: object = { authority: 0,cname: "",zone: "",challengeCname: "" };

export const CertsStoreGetCSRsResp = {
            encode(
      message: CertsStoreGetCSRsResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.managedCertPolicyId !== undefined) {
          ID.encode(message.managedCertPolicyId, writer.uint32(10).fork()).ldelim();
        }
if (message.csr !== undefined) {
          CSR.encode(message.csr, writer.uint32(18).fork()).ldelim();
        }
if (message.authority !== 0) {
          writer.uint32(24).int32(message.authority);
        }
if (message.cname !== "") {
          writer.uint32(34).string(message.cname);
        }
if (message.zone !== "") {
          writer.uint32(42).string(message.zone);
        }
if (message.challengeCname !== "") {
          writer.uint32(50).string(message.challengeCname);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsStoreGetCSRsResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsStoreGetCSRsResp } as CertsStoreGetCSRsResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.managedCertPolicyId = ID.decode(reader, reader.uint32());
break;
case 2:
message.csr = CSR.decode(reader, reader.uint32());
break;
case 3:
message.authority = reader.int32() as any;
break;
case 4:
message.cname = reader.string();
break;
case 5:
message.zone = reader.string();
break;
case 6:
message.challengeCname = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsStoreGetCSRsResp>): CertsStoreGetCSRsResp {
      const message = { ...baseCertsStoreGetCSRsResp } as CertsStoreGetCSRsResp;
if (object.managedCertPolicyId !== undefined && object.managedCertPolicyId !== null) {
message.managedCertPolicyId = ID.fromPartial(object.managedCertPolicyId);
} else {
message.managedCertPolicyId = undefined
}
if (object.csr !== undefined && object.csr !== null) {
message.csr = CSR.fromPartial(object.csr);
} else {
message.csr = undefined
}
if (object.authority !== undefined && object.authority !== null) {
message.authority = object.authority;
} else {
message.authority = 0
}
if (object.cname !== undefined && object.cname !== null) {
message.cname = object.cname;
} else {
message.cname = ""
}
if (object.zone !== undefined && object.zone !== null) {
message.zone = object.zone;
} else {
message.zone = ""
}
if (object.challengeCname !== undefined && object.challengeCname !== null) {
message.challengeCname = object.challengeCname;
} else {
message.challengeCname = ""
}
return message;
}
          };

const baseCertsAutoCreateReq: object = { authority: 0,cname: "",zone: "",challengeCname: "" };

export const CertsAutoCreateReq = {
            encode(
      message: CertsAutoCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
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

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsAutoCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsAutoCreateReq } as CertsAutoCreateReq;
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

fromPartial(object: DeepPartial<CertsAutoCreateReq>): CertsAutoCreateReq {
      const message = { ...baseCertsAutoCreateReq } as CertsAutoCreateReq;
if (object.csr !== undefined && object.csr !== null) {
message.csr = CSR.fromPartial(object.csr);
} else {
message.csr = undefined
}
if (object.authority !== undefined && object.authority !== null) {
message.authority = object.authority;
} else {
message.authority = 0
}
if (object.cname !== undefined && object.cname !== null) {
message.cname = object.cname;
} else {
message.cname = ""
}
if (object.zone !== undefined && object.zone !== null) {
message.zone = object.zone;
} else {
message.zone = ""
}
if (object.challengeCname !== undefined && object.challengeCname !== null) {
message.challengeCname = object.challengeCname;
} else {
message.challengeCname = ""
}
return message;
}
          };

const baseCertsAutoDeleteReq: object = {  };

export const CertsAutoDeleteReq = {
            encode(
      message: CertsAutoDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsAutoDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsAutoDeleteReq } as CertsAutoDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsAutoDeleteReq>): CertsAutoDeleteReq {
      const message = { ...baseCertsAutoDeleteReq } as CertsAutoDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

const baseCertsStoreGetCSRByManagedCertPolicyIDReq: object = { accountId: 0 };

export const CertsStoreGetCSRByManagedCertPolicyIDReq = {
            encode(
      message: CertsStoreGetCSRByManagedCertPolicyIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.managedCertPolicyId !== undefined) {
          ID.encode(message.managedCertPolicyId, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsStoreGetCSRByManagedCertPolicyIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsStoreGetCSRByManagedCertPolicyIDReq } as CertsStoreGetCSRByManagedCertPolicyIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.managedCertPolicyId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsStoreGetCSRByManagedCertPolicyIDReq>): CertsStoreGetCSRByManagedCertPolicyIDReq {
      const message = { ...baseCertsStoreGetCSRByManagedCertPolicyIDReq } as CertsStoreGetCSRByManagedCertPolicyIDReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.managedCertPolicyId !== undefined && object.managedCertPolicyId !== null) {
message.managedCertPolicyId = ID.fromPartial(object.managedCertPolicyId);
} else {
message.managedCertPolicyId = undefined
}
return message;
}
          };

const baseCertsStoreCreateCSRReq: object = { accountId: 0,acmeAuthority: 0,cname: "",zone: "",noInsert: false,challengeCname: "" };

export const CertsStoreCreateCSRReq = {
            encode(
      message: CertsStoreCreateCSRReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.managedCertPolicyId !== undefined) {
          ID.encode(message.managedCertPolicyId, writer.uint32(18).fork()).ldelim();
        }
if (message.acmeAuthority !== 0) {
          writer.uint32(24).int32(message.acmeAuthority);
        }
if (message.cname !== "") {
          writer.uint32(34).string(message.cname);
        }
if (message.zone !== "") {
          writer.uint32(42).string(message.zone);
        }
if (message.certDetails !== undefined) {
          CertDetails.encode(message.certDetails, writer.uint32(50).fork()).ldelim();
        }
if (message.defaultMuxMatchByHostname !== undefined) {
          DefaultMuxMatchByHostname.encode(message.defaultMuxMatchByHostname, writer.uint32(58).fork()).ldelim();
        }
if (message.noInsert === true) {
          writer.uint32(64).bool(message.noInsert);
        }
if (message.challengeCname !== "") {
          writer.uint32(74).string(message.challengeCname);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsStoreCreateCSRReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsStoreCreateCSRReq } as CertsStoreCreateCSRReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.managedCertPolicyId = ID.decode(reader, reader.uint32());
break;
case 3:
message.acmeAuthority = reader.int32() as any;
break;
case 4:
message.cname = reader.string();
break;
case 5:
message.zone = reader.string();
break;
case 6:
message.certDetails = CertDetails.decode(reader, reader.uint32());
break;
case 7:
message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.decode(reader, reader.uint32());
break;
case 8:
message.noInsert = reader.bool();
break;
case 9:
message.challengeCname = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsStoreCreateCSRReq>): CertsStoreCreateCSRReq {
      const message = { ...baseCertsStoreCreateCSRReq } as CertsStoreCreateCSRReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.managedCertPolicyId !== undefined && object.managedCertPolicyId !== null) {
message.managedCertPolicyId = ID.fromPartial(object.managedCertPolicyId);
} else {
message.managedCertPolicyId = undefined
}
if (object.acmeAuthority !== undefined && object.acmeAuthority !== null) {
message.acmeAuthority = object.acmeAuthority;
} else {
message.acmeAuthority = 0
}
if (object.cname !== undefined && object.cname !== null) {
message.cname = object.cname;
} else {
message.cname = ""
}
if (object.zone !== undefined && object.zone !== null) {
message.zone = object.zone;
} else {
message.zone = ""
}
if (object.certDetails !== undefined && object.certDetails !== null) {
message.certDetails = CertDetails.fromPartial(object.certDetails);
} else {
message.certDetails = undefined
}
if (object.defaultMuxMatchByHostname !== undefined && object.defaultMuxMatchByHostname !== null) {
message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.fromPartial(object.defaultMuxMatchByHostname);
} else {
message.defaultMuxMatchByHostname = undefined
}
if (object.noInsert !== undefined && object.noInsert !== null) {
message.noInsert = object.noInsert;
} else {
message.noInsert = false
}
if (object.challengeCname !== undefined && object.challengeCname !== null) {
message.challengeCname = object.challengeCname;
} else {
message.challengeCname = ""
}
return message;
}
          };

const baseCertsStoreDeleteCSRReq: object = { accountId: 0 };

export const CertsStoreDeleteCSRReq = {
            encode(
      message: CertsStoreDeleteCSRReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsStoreDeleteCSRReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsStoreDeleteCSRReq } as CertsStoreDeleteCSRReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsStoreDeleteCSRReq>): CertsStoreDeleteCSRReq {
      const message = { ...baseCertsStoreDeleteCSRReq } as CertsStoreDeleteCSRReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseCertsStoreFinalizeCSRReq: object = { accountId: 0 };

export const CertsStoreFinalizeCSRReq = {
            encode(
      message: CertsStoreFinalizeCSRReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
if (message.cert.length !== 0) {
          writer.uint32(26).bytes(message.cert);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsStoreFinalizeCSRReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsStoreFinalizeCSRReq } as CertsStoreFinalizeCSRReq;
message.cert = new Uint8Array();
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.cert = reader.bytes();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsStoreFinalizeCSRReq>): CertsStoreFinalizeCSRReq {
      const message = { ...baseCertsStoreFinalizeCSRReq } as CertsStoreFinalizeCSRReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.cert !== undefined && object.cert !== null) {
message.cert = object.cert;
} else {
message.cert = new Uint8Array()
}
return message;
}
          };

const baseCertsAutoStatusResp: object = {  };

export const CertsAutoStatusResp = {
            encode(
      message: CertsAutoStatusResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.job !== undefined) {
          ManagedCertProvisioningJob.encode(message.job, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsAutoStatusResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsAutoStatusResp } as CertsAutoStatusResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.job = ManagedCertProvisioningJob.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsAutoStatusResp>): CertsAutoStatusResp {
      const message = { ...baseCertsAutoStatusResp } as CertsAutoStatusResp;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.job !== undefined && object.job !== null) {
message.job = ManagedCertProvisioningJob.fromPartial(object.job);
} else {
message.job = undefined
}
return message;
}
          };

const baseCertsAutoDebugDumpCIQReq: object = { mode: 0,consistency: 0 };

export const CertsAutoDebugDumpCIQReq = {
            encode(
      message: CertsAutoDebugDumpCIQReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.mode !== 0) {
          writer.uint32(8).int32(message.mode);
        }
if (message.consistency !== 0) {
          writer.uint32(16).int32(message.consistency);
        }
for (const v of message.id) {
            ID.encode(v!, writer.uint32(26).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsAutoDebugDumpCIQReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsAutoDebugDumpCIQReq } as CertsAutoDebugDumpCIQReq;
message.id = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.mode = reader.int32() as any;
break;
case 2:
message.consistency = reader.int32() as any;
break;
case 3:
message.id.push(ID.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsAutoDebugDumpCIQReq>): CertsAutoDebugDumpCIQReq {
      const message = { ...baseCertsAutoDebugDumpCIQReq } as CertsAutoDebugDumpCIQReq;
message.id = [];
if (object.mode !== undefined && object.mode !== null) {
message.mode = object.mode;
} else {
message.mode = 0
}
if (object.consistency !== undefined && object.consistency !== null) {
message.consistency = object.consistency;
} else {
message.consistency = 0
}
if (object.id !== undefined && object.id !== null) {
for (const e of object.id) {
            message.id.push(ID.fromPartial(e));
          }
}
return message;
}
          };

const baseCertsAutoDebugDumpCIQResp: object = {  };

export const CertsAutoDebugDumpCIQResp = {
            encode(
      message: CertsAutoDebugDumpCIQResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
for (const v of message.stateTag) {
            CIQStateTag.encode(v!, writer.uint32(18).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsAutoDebugDumpCIQResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsAutoDebugDumpCIQResp } as CertsAutoDebugDumpCIQResp;
message.stateTag = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.stateTag.push(CIQStateTag.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsAutoDebugDumpCIQResp>): CertsAutoDebugDumpCIQResp {
      const message = { ...baseCertsAutoDebugDumpCIQResp } as CertsAutoDebugDumpCIQResp;
message.stateTag = [];
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.stateTag !== undefined && object.stateTag !== null) {
for (const e of object.stateTag) {
            message.stateTag.push(CIQStateTag.fromPartial(e));
          }
}
return message;
}
          };

const baseCertsAutoDebugDropCIQTagReq: object = { tagName: "" };

export const CertsAutoDebugDropCIQTagReq = {
            encode(
      message: CertsAutoDebugDropCIQTagReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.tagName !== "") {
          writer.uint32(18).string(message.tagName);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsAutoDebugDropCIQTagReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsAutoDebugDropCIQTagReq } as CertsAutoDebugDropCIQTagReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.tagName = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsAutoDebugDropCIQTagReq>): CertsAutoDebugDropCIQTagReq {
      const message = { ...baseCertsAutoDebugDropCIQTagReq } as CertsAutoDebugDropCIQTagReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.tagName !== undefined && object.tagName !== null) {
message.tagName = object.tagName;
} else {
message.tagName = ""
}
return message;
}
          };

const baseCertsAutoDebugDropCIQEntryReq: object = {  };

export const CertsAutoDebugDropCIQEntryReq = {
            encode(
      message: CertsAutoDebugDropCIQEntryReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CertsAutoDebugDropCIQEntryReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCertsAutoDebugDropCIQEntryReq } as CertsAutoDebugDropCIQEntryReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CertsAutoDebugDropCIQEntryReq>): CertsAutoDebugDropCIQEntryReq {
      const message = { ...baseCertsAutoDebugDropCIQEntryReq } as CertsAutoDebugDropCIQEntryReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

export interface Certs {
/** Read operations */
GetByID(request: DeepPartial<CertsGetByIDReq>,metadata?: grpc.Metadata): Promise<CertsGetByIDResp>;
GetByAccount(request: DeepPartial<CertsGetByAccountReq>,metadata?: grpc.Metadata): Promise<CertsGetByAccountResp>;
GetMuxDefaultCerts(request: DeepPartial<CertsGetMuxDefaultCertsReq>,metadata?: grpc.Metadata): Promise<CertsGetMuxDefaultCertsResp>;
ParsePEM(request: DeepPartial<CertsParsePEMReq>,metadata?: grpc.Metadata): Promise<CertsParsePEMResp>;
/** Mutations */
Create(request: DeepPartial<CertsCreateReq>,metadata?: grpc.Metadata): Promise<Cert>;
Delete(request: DeepPartial<CertsDeleteReq>,metadata?: grpc.Metadata): Promise<Cert>;
Update(request: DeepPartial<CertsUpdateReq>,metadata?: grpc.Metadata): Promise<Cert>;
DeleteByAccount(request: DeepPartial<CertsDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class CertsClientImpl implements Certs {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByID = this.GetByID.bind(this);this.GetByAccount = this.GetByAccount.bind(this);this.GetMuxDefaultCerts = this.GetMuxDefaultCerts.bind(this);this.ParsePEM = this.ParsePEM.bind(this);this.Create = this.Create.bind(this);this.Delete = this.Delete.bind(this);this.Update = this.Update.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.Sync = this.Sync.bind(this);}

    GetByID(
      request: DeepPartial<CertsGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<CertsGetByIDResp> {
      return this.rpc.invoke(
        CertsGetByIDDesc,
        request,
        metadata,
      );
    }
  
    GetByAccount(
      request: DeepPartial<CertsGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<CertsGetByAccountResp> {
      return this.rpc.unary(
        CertsGetByAccountDesc,
        CertsGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    GetMuxDefaultCerts(
      request: DeepPartial<CertsGetMuxDefaultCertsReq>,
      metadata?: grpc.Metadata,
    ): Promise<CertsGetMuxDefaultCertsResp> {
      return this.rpc.unary(
        CertsGetMuxDefaultCertsDesc,
        CertsGetMuxDefaultCertsReq.fromPartial(request),
        metadata,
      );
    }
  
    ParsePEM(
      request: DeepPartial<CertsParsePEMReq>,
      metadata?: grpc.Metadata,
    ): Promise<CertsParsePEMResp> {
      return this.rpc.unary(
        CertsParsePEMDesc,
        CertsParsePEMReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<CertsCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cert> {
      return this.rpc.unary(
        CertsCreateDesc,
        CertsCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<CertsDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cert> {
      return this.rpc.unary(
        CertsDeleteDesc,
        CertsDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<CertsUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cert> {
      return this.rpc.unary(
        CertsUpdateDesc,
        CertsUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<CertsDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        CertsDeleteByAccountDesc,
        CertsDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        CertsSyncDesc,
        request,
        metadata,
      );
    }
  }

export const CertsDesc = {
      serviceName: "rpx.Certs",
    };

export const CertsGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: CertsDesc,
      requestStream: false,
      responseStream: true,
      requestType: {
    serializeBinary() {
      return CertsGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CertsGetByIDResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: CertsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CertsGetByAccountResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsGetMuxDefaultCertsDesc: UnaryMethodDefinitionish = {
      methodName: "GetMuxDefaultCerts",
      service: CertsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsGetMuxDefaultCertsReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CertsGetMuxDefaultCertsResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsParsePEMDesc: UnaryMethodDefinitionish = {
      methodName: "ParsePEM",
      service: CertsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsParsePEMReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CertsParsePEMResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: CertsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cert.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: CertsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cert.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: CertsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cert.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: CertsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: CertsDesc,
      requestStream: false,
      responseStream: true,
      requestType: {
    serializeBinary() {
      return SyncReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...StreamItem.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export interface ManagedCertPolicies {
/** Read operations */
GetByID(request: DeepPartial<ManagedCertPoliciesGetByIDReq>,metadata?: grpc.Metadata): Promise<ManagedCertPoliciesGetByIDResp>;
/** Mutations */
Create(request: DeepPartial<ManagedCertPoliciesCreateReq>,metadata?: grpc.Metadata): Promise<ManagedCertPoliciesCreateResp>;
Update(request: DeepPartial<ManagedCertPoliciesUpdateReq>,metadata?: grpc.Metadata): Promise<ManagedCertPoliciesUpdateResp>;
Delete(request: DeepPartial<ManagedCertPoliciesDeleteReq>,metadata?: grpc.Metadata): Promise<Empty>;
}

export class ManagedCertPoliciesClientImpl implements ManagedCertPolicies {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByID = this.GetByID.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);}

    GetByID(
      request: DeepPartial<ManagedCertPoliciesGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<ManagedCertPoliciesGetByIDResp> {
      return this.rpc.invoke(
        ManagedCertPoliciesGetByIDDesc,
        request,
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<ManagedCertPoliciesCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<ManagedCertPoliciesCreateResp> {
      return this.rpc.unary(
        ManagedCertPoliciesCreateDesc,
        ManagedCertPoliciesCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<ManagedCertPoliciesUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<ManagedCertPoliciesUpdateResp> {
      return this.rpc.unary(
        ManagedCertPoliciesUpdateDesc,
        ManagedCertPoliciesUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<ManagedCertPoliciesDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        ManagedCertPoliciesDeleteDesc,
        ManagedCertPoliciesDeleteReq.fromPartial(request),
        metadata,
      );
    }
  }

export const ManagedCertPoliciesDesc = {
      serviceName: "rpx.ManagedCertPolicies",
    };

export const ManagedCertPoliciesGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: ManagedCertPoliciesDesc,
      requestStream: false,
      responseStream: true,
      requestType: {
    serializeBinary() {
      return ManagedCertPoliciesGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...ManagedCertPoliciesGetByIDResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const ManagedCertPoliciesCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: ManagedCertPoliciesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return ManagedCertPoliciesCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...ManagedCertPoliciesCreateResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const ManagedCertPoliciesUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: ManagedCertPoliciesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return ManagedCertPoliciesUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...ManagedCertPoliciesUpdateResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const ManagedCertPoliciesDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: ManagedCertPoliciesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return ManagedCertPoliciesDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

/** This service stores certificate authorities. */
export interface CAs {
GetByID(request: DeepPartial<CAsGetByIDReq>,metadata?: grpc.Metadata): Promise<CA>;
GetByAccount(request: DeepPartial<CAsGetByAccountReq>,metadata?: grpc.Metadata): Promise<CAListResp>;
Create(request: DeepPartial<CAsCreateReq>,metadata?: grpc.Metadata): Promise<CA>;
Update(request: DeepPartial<CAsUpdateReq>,metadata?: grpc.Metadata): Promise<CA>;
Delete(request: DeepPartial<CAsDeleteReq>,metadata?: grpc.Metadata): Promise<CA>;
DeleteByAccount(request: DeepPartial<CAsDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
}

export class CAsClientImpl implements CAs {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByID = this.GetByID.bind(this);this.GetByAccount = this.GetByAccount.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);}

    GetByID(
      request: DeepPartial<CAsGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<CA> {
      return this.rpc.unary(
        CAsGetByIDDesc,
        CAsGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByAccount(
      request: DeepPartial<CAsGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<CAListResp> {
      return this.rpc.unary(
        CAsGetByAccountDesc,
        CAsGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<CAsCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<CA> {
      return this.rpc.unary(
        CAsCreateDesc,
        CAsCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<CAsUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<CA> {
      return this.rpc.unary(
        CAsUpdateDesc,
        CAsUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<CAsDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<CA> {
      return this.rpc.unary(
        CAsDeleteDesc,
        CAsDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<CAsDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        CAsDeleteByAccountDesc,
        CAsDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  }

export const CAsDesc = {
      serviceName: "rpx.CAs",
    };

export const CAsGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: CAsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CAsGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CA.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CAsGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: CAsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CAsGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CAListResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CAsCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: CAsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CAsCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CA.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CAsUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: CAsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CAsUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CA.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CAsDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: CAsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CAsDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CA.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CAsDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: CAsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CAsDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export interface CertsAuto {
/** Read operations */
Status(request: DeepPartial<CertsGetByIDReq>,metadata?: grpc.Metadata): Promise<CertsAutoStatusResp>;
/** Mutations */
Create(request: DeepPartial<CertsAutoCreateReq>,metadata?: grpc.Metadata): Promise<Empty>;
Delete(request: DeepPartial<CertsAutoDeleteReq>,metadata?: grpc.Metadata): Promise<Empty>;
}

export class CertsAutoClientImpl implements CertsAuto {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.Status = this.Status.bind(this);this.Create = this.Create.bind(this);this.Delete = this.Delete.bind(this);}

    Status(
      request: DeepPartial<CertsGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<CertsAutoStatusResp> {
      return this.rpc.invoke(
        CertsAutoStatusDesc,
        request,
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<CertsAutoCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        CertsAutoCreateDesc,
        CertsAutoCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<CertsAutoDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        CertsAutoDeleteDesc,
        CertsAutoDeleteReq.fromPartial(request),
        metadata,
      );
    }
  }

export const CertsAutoDesc = {
      serviceName: "rpx.CertsAuto",
    };

export const CertsAutoStatusDesc: UnaryMethodDefinitionish = {
      methodName: "Status",
      service: CertsAutoDesc,
      requestStream: false,
      responseStream: true,
      requestType: {
    serializeBinary() {
      return CertsGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CertsAutoStatusResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsAutoCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: CertsAutoDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsAutoCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsAutoDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: CertsAutoDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsAutoDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

/** Administrative debug calls. */
export interface CertsAutoDebug {
/**
 * DumpCIQ returns the current CIQ state for a given cert id (or cert ids, or
 * ALL the CIQ). A response per id will be streamed, unless all state tags
 * exceed a threshold that can contain them within a single gRPC message, in
 * which case repeat messages for the same id with continued state tags will
 * be emitted, and the client must reassemble them into a single state.
 */
DumpCIQ(request: DeepPartial<CertsAutoDebugDumpCIQReq>,metadata?: grpc.Metadata): Promise<CertsAutoDebugDumpCIQResp>;
/** DropCIQTag drops a selected CIQ StateTag. */
DropCIQTag(request: DeepPartial<CertsAutoDebugDropCIQTagReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** DropCIQEntry drops an entire entry from the CIQ. */
DropCIQEntry(request: DeepPartial<CertsAutoDebugDropCIQEntryReq>,metadata?: grpc.Metadata): Promise<Empty>;
}

export class CertsAutoDebugClientImpl implements CertsAutoDebug {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.DumpCIQ = this.DumpCIQ.bind(this);this.DropCIQTag = this.DropCIQTag.bind(this);this.DropCIQEntry = this.DropCIQEntry.bind(this);}

    DumpCIQ(
      request: DeepPartial<CertsAutoDebugDumpCIQReq>,
      metadata?: grpc.Metadata,
    ): Promise<CertsAutoDebugDumpCIQResp> {
      return this.rpc.invoke(
        CertsAutoDebugDumpCIQDesc,
        CertsAutoDebugDumpCIQReq.fromPartial(request),
        metadata,
      );
    }
  
    DropCIQTag(
      request: DeepPartial<CertsAutoDebugDropCIQTagReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        CertsAutoDebugDropCIQTagDesc,
        CertsAutoDebugDropCIQTagReq.fromPartial(request),
        metadata,
      );
    }
  
    DropCIQEntry(
      request: DeepPartial<CertsAutoDebugDropCIQEntryReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        CertsAutoDebugDropCIQEntryDesc,
        CertsAutoDebugDropCIQEntryReq.fromPartial(request),
        metadata,
      );
    }
  }

export const CertsAutoDebugDesc = {
      serviceName: "rpx.CertsAutoDebug",
    };

export const CertsAutoDebugDumpCIQDesc: UnaryMethodDefinitionish = {
      methodName: "DumpCIQ",
      service: CertsAutoDebugDesc,
      requestStream: false,
      responseStream: true,
      requestType: {
    serializeBinary() {
      return CertsAutoDebugDumpCIQReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CertsAutoDebugDumpCIQResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsAutoDebugDropCIQTagDesc: UnaryMethodDefinitionish = {
      methodName: "DropCIQTag",
      service: CertsAutoDebugDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsAutoDebugDropCIQTagReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsAutoDebugDropCIQEntryDesc: UnaryMethodDefinitionish = {
      methodName: "DropCIQEntry",
      service: CertsAutoDebugDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsAutoDebugDropCIQEntryReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export interface CertsStore {
/** Read operations */
GetCSRs(request: DeepPartial<Empty>,metadata?: grpc.Metadata): Promise<CertsStoreGetCSRsResp>;
GetCSRByManagedCertPolicyID(request: DeepPartial<CertsStoreGetCSRByManagedCertPolicyIDReq>,metadata?: grpc.Metadata): Promise<CSR>;
/** Mutations */
CreateCSR(request: DeepPartial<CertsStoreCreateCSRReq>,metadata?: grpc.Metadata): Promise<CSR>;
DeleteCSR(request: DeepPartial<CertsStoreDeleteCSRReq>,metadata?: grpc.Metadata): Promise<Empty>;
FinalizeCSR(request: DeepPartial<CertsStoreFinalizeCSRReq>,metadata?: grpc.Metadata): Promise<Empty>;
}

export class CertsStoreClientImpl implements CertsStore {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetCSRs = this.GetCSRs.bind(this);this.GetCSRByManagedCertPolicyID = this.GetCSRByManagedCertPolicyID.bind(this);this.CreateCSR = this.CreateCSR.bind(this);this.DeleteCSR = this.DeleteCSR.bind(this);this.FinalizeCSR = this.FinalizeCSR.bind(this);}

    GetCSRs(
      request: DeepPartial<Empty>,
      metadata?: grpc.Metadata,
    ): Promise<CertsStoreGetCSRsResp> {
      return this.rpc.invoke(
        CertsStoreGetCSRsDesc,
        Empty.fromPartial(request),
        metadata,
      );
    }
  
    GetCSRByManagedCertPolicyID(
      request: DeepPartial<CertsStoreGetCSRByManagedCertPolicyIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<CSR> {
      return this.rpc.unary(
        CertsStoreGetCSRByManagedCertPolicyIDDesc,
        CertsStoreGetCSRByManagedCertPolicyIDReq.fromPartial(request),
        metadata,
      );
    }
  
    CreateCSR(
      request: DeepPartial<CertsStoreCreateCSRReq>,
      metadata?: grpc.Metadata,
    ): Promise<CSR> {
      return this.rpc.unary(
        CertsStoreCreateCSRDesc,
        CertsStoreCreateCSRReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteCSR(
      request: DeepPartial<CertsStoreDeleteCSRReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        CertsStoreDeleteCSRDesc,
        CertsStoreDeleteCSRReq.fromPartial(request),
        metadata,
      );
    }
  
    FinalizeCSR(
      request: DeepPartial<CertsStoreFinalizeCSRReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        CertsStoreFinalizeCSRDesc,
        CertsStoreFinalizeCSRReq.fromPartial(request),
        metadata,
      );
    }
  }

export const CertsStoreDesc = {
      serviceName: "rpx.CertsStore",
    };

export const CertsStoreGetCSRsDesc: UnaryMethodDefinitionish = {
      methodName: "GetCSRs",
      service: CertsStoreDesc,
      requestStream: false,
      responseStream: true,
      requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CertsStoreGetCSRsResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsStoreGetCSRByManagedCertPolicyIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetCSRByManagedCertPolicyID",
      service: CertsStoreDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsStoreGetCSRByManagedCertPolicyIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CSR.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsStoreCreateCSRDesc: UnaryMethodDefinitionish = {
      methodName: "CreateCSR",
      service: CertsStoreDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsStoreCreateCSRReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CSR.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsStoreDeleteCSRDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteCSR",
      service: CertsStoreDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsStoreDeleteCSRReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const CertsStoreFinalizeCSRDesc: UnaryMethodDefinitionish = {
      methodName: "FinalizeCSR",
      service: CertsStoreDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CertsStoreFinalizeCSRReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> { requestStream: any; responseStream: any; }

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
unary<T extends UnaryMethodDefinitionish>(
      methodDesc: T,
      request: any,
      metadata: grpc.Metadata | undefined,
    ): Promise<any>;
invoke(..._: any[]): Promise<any>;
}

export class GrpcWebImpl {
      private host: string;
      private options: 
    {
      transport?: grpc.TransportFactory,
      streamingTransport?: grpc.TransportFactory,
      debug?: boolean,
      metadata?: grpc.Metadata,
    }
  ;
      
      constructor(host: string, options: 
    {
      transport?: grpc.TransportFactory,
      streamingTransport?: grpc.TransportFactory,
      debug?: boolean,
      metadata?: grpc.Metadata,
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
          ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
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
  
    invoke(..._: any[]): Promise<any> {
      throw new Error('Unsupported.');
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





type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
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
          throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER")
        }
        return long.toNumber();
      }



if (_m0.util.Long !== Long) {
        _m0.util.Long = Long as any;
        _m0.configure();
      }

