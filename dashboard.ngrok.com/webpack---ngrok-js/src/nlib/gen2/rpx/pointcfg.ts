// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import _m0 from 'protobufjs/minimal';
import { EndpointConfiguration_Type, EndpointConfiguration, EndpointMutualTLS, EndpointBasicAuth, EndpointRequestHeaders, EndpointCompression, EndpointCircuitBreaker, EndpointIPPolicy, EndpointTLSTermination, EndpointWebhookValidation, EndpointOAuth, EndpointResponseHeaders, EndpointLogging, EndpointSAML, EndpointOIDC, EndpointBackend } from '../rpx/pointcfg_module';

import { Empty, ID, OptString } from '../pb/types';
import { StreamItem, SyncReq } from '../rpx/stream';
import { BrowserHeaders } from 'browser-headers';

import { Paging } from '../rpx/model';

export const protobufPackage = 'rpx';

export interface EndpointConfigCreateReq {
accountId: number,
description: string,
metadata: string,
mutualTls: EndpointMutualTLS | undefined,
basicAuth: EndpointBasicAuth | undefined,
requestHeaders: EndpointRequestHeaders | undefined,
compression: EndpointCompression | undefined,
circuitBreaker: EndpointCircuitBreaker | undefined,
ipPolicy: EndpointIPPolicy | undefined,
tlsTermination: EndpointTLSTermination | undefined,
type: EndpointConfiguration_Type,
webhookValidation: EndpointWebhookValidation | undefined,
oauth: EndpointOAuth | undefined,
responseHeaders: EndpointResponseHeaders | undefined,
logging: EndpointLogging | undefined,
saml: EndpointSAML | undefined,
oidc: EndpointOIDC | undefined,
backend: EndpointBackend | undefined,
}

export interface EndpointConfigGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface EndpointConfigGetByAccountReq {
accountId: number,
paging: Paging | undefined,
}

export interface EndpointConfigResp {
endpointConfigurations: EndpointConfiguration[],
next: Paging | undefined,
}

export interface EndpointConfigUpdateReq {
id: ID | undefined,
description: OptString | undefined,
metadata: OptString | undefined,
mutualTls: EndpointMutualTLS | undefined,
basicAuth: EndpointBasicAuth | undefined,
requestHeaders: EndpointRequestHeaders | undefined,
compression: EndpointCompression | undefined,
circuitBreaker: EndpointCircuitBreaker | undefined,
ipPolicy: EndpointIPPolicy | undefined,
tlsTermination: EndpointTLSTermination | undefined,
webhookValidation: EndpointWebhookValidation | undefined,
oauth: EndpointOAuth | undefined,
responseHeaders: EndpointResponseHeaders | undefined,
logging: EndpointLogging | undefined,
saml: EndpointSAML | undefined,
oidc: EndpointOIDC | undefined,
backend: EndpointBackend | undefined,
}

export interface EndpointConfigDeleteModuleReq {
id: ID | undefined,
modules: EndpointConfigDeleteModuleReq_Type[],
}

export enum EndpointConfigDeleteModuleReq_Type {
Undefined = 0,
MutualTLS = 1,
BasicAuth = 2,
RequestHeaders = 3,
Compression = 4,
CircuitBreaker = 5,
IPPolicy = 6,
TLSTermination = 7,
WebhookValidation = 8,
OAuth = 9,
ResponseHeaders = 10,
Logging = 11,
SAML = 12,
OIDC = 13,
Backend = 14,
}

export interface EndpointConfigDeleteReq {
id: ID | undefined,
}

export interface EndpointConfigDeleteByAccountReq {
accountId: number,
}

const baseEndpointConfigCreateReq: object = { accountId: 0,description: "",metadata: "",type: 0 };

export const EndpointConfigCreateReq = {
            encode(
      message: EndpointConfigCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.description !== "") {
          writer.uint32(18).string(message.description);
        }
if (message.metadata !== "") {
          writer.uint32(26).string(message.metadata);
        }
if (message.mutualTls !== undefined) {
          EndpointMutualTLS.encode(message.mutualTls, writer.uint32(34).fork()).ldelim();
        }
if (message.basicAuth !== undefined) {
          EndpointBasicAuth.encode(message.basicAuth, writer.uint32(42).fork()).ldelim();
        }
if (message.requestHeaders !== undefined) {
          EndpointRequestHeaders.encode(message.requestHeaders, writer.uint32(50).fork()).ldelim();
        }
if (message.compression !== undefined) {
          EndpointCompression.encode(message.compression, writer.uint32(58).fork()).ldelim();
        }
if (message.circuitBreaker !== undefined) {
          EndpointCircuitBreaker.encode(message.circuitBreaker, writer.uint32(66).fork()).ldelim();
        }
if (message.ipPolicy !== undefined) {
          EndpointIPPolicy.encode(message.ipPolicy, writer.uint32(74).fork()).ldelim();
        }
if (message.tlsTermination !== undefined) {
          EndpointTLSTermination.encode(message.tlsTermination, writer.uint32(82).fork()).ldelim();
        }
if (message.type !== 0) {
          writer.uint32(88).int32(message.type);
        }
if (message.webhookValidation !== undefined) {
          EndpointWebhookValidation.encode(message.webhookValidation, writer.uint32(98).fork()).ldelim();
        }
if (message.oauth !== undefined) {
          EndpointOAuth.encode(message.oauth, writer.uint32(106).fork()).ldelim();
        }
if (message.responseHeaders !== undefined) {
          EndpointResponseHeaders.encode(message.responseHeaders, writer.uint32(114).fork()).ldelim();
        }
if (message.logging !== undefined) {
          EndpointLogging.encode(message.logging, writer.uint32(122).fork()).ldelim();
        }
if (message.saml !== undefined) {
          EndpointSAML.encode(message.saml, writer.uint32(130).fork()).ldelim();
        }
if (message.oidc !== undefined) {
          EndpointOIDC.encode(message.oidc, writer.uint32(138).fork()).ldelim();
        }
if (message.backend !== undefined) {
          EndpointBackend.encode(message.backend, writer.uint32(146).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EndpointConfigCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEndpointConfigCreateReq } as EndpointConfigCreateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.description = reader.string();
break;
case 3:
message.metadata = reader.string();
break;
case 4:
message.mutualTls = EndpointMutualTLS.decode(reader, reader.uint32());
break;
case 5:
message.basicAuth = EndpointBasicAuth.decode(reader, reader.uint32());
break;
case 6:
message.requestHeaders = EndpointRequestHeaders.decode(reader, reader.uint32());
break;
case 7:
message.compression = EndpointCompression.decode(reader, reader.uint32());
break;
case 8:
message.circuitBreaker = EndpointCircuitBreaker.decode(reader, reader.uint32());
break;
case 9:
message.ipPolicy = EndpointIPPolicy.decode(reader, reader.uint32());
break;
case 10:
message.tlsTermination = EndpointTLSTermination.decode(reader, reader.uint32());
break;
case 11:
message.type = reader.int32() as any;
break;
case 12:
message.webhookValidation = EndpointWebhookValidation.decode(reader, reader.uint32());
break;
case 13:
message.oauth = EndpointOAuth.decode(reader, reader.uint32());
break;
case 14:
message.responseHeaders = EndpointResponseHeaders.decode(reader, reader.uint32());
break;
case 15:
message.logging = EndpointLogging.decode(reader, reader.uint32());
break;
case 16:
message.saml = EndpointSAML.decode(reader, reader.uint32());
break;
case 17:
message.oidc = EndpointOIDC.decode(reader, reader.uint32());
break;
case 18:
message.backend = EndpointBackend.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EndpointConfigCreateReq>): EndpointConfigCreateReq {
      const message = { ...baseEndpointConfigCreateReq } as EndpointConfigCreateReq;
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
if (object.mutualTls !== undefined && object.mutualTls !== null) {
message.mutualTls = EndpointMutualTLS.fromPartial(object.mutualTls);
} else {
message.mutualTls = undefined
}
if (object.basicAuth !== undefined && object.basicAuth !== null) {
message.basicAuth = EndpointBasicAuth.fromPartial(object.basicAuth);
} else {
message.basicAuth = undefined
}
if (object.requestHeaders !== undefined && object.requestHeaders !== null) {
message.requestHeaders = EndpointRequestHeaders.fromPartial(object.requestHeaders);
} else {
message.requestHeaders = undefined
}
if (object.compression !== undefined && object.compression !== null) {
message.compression = EndpointCompression.fromPartial(object.compression);
} else {
message.compression = undefined
}
if (object.circuitBreaker !== undefined && object.circuitBreaker !== null) {
message.circuitBreaker = EndpointCircuitBreaker.fromPartial(object.circuitBreaker);
} else {
message.circuitBreaker = undefined
}
if (object.ipPolicy !== undefined && object.ipPolicy !== null) {
message.ipPolicy = EndpointIPPolicy.fromPartial(object.ipPolicy);
} else {
message.ipPolicy = undefined
}
if (object.tlsTermination !== undefined && object.tlsTermination !== null) {
message.tlsTermination = EndpointTLSTermination.fromPartial(object.tlsTermination);
} else {
message.tlsTermination = undefined
}
if (object.type !== undefined && object.type !== null) {
message.type = object.type;
} else {
message.type = 0
}
if (object.webhookValidation !== undefined && object.webhookValidation !== null) {
message.webhookValidation = EndpointWebhookValidation.fromPartial(object.webhookValidation);
} else {
message.webhookValidation = undefined
}
if (object.oauth !== undefined && object.oauth !== null) {
message.oauth = EndpointOAuth.fromPartial(object.oauth);
} else {
message.oauth = undefined
}
if (object.responseHeaders !== undefined && object.responseHeaders !== null) {
message.responseHeaders = EndpointResponseHeaders.fromPartial(object.responseHeaders);
} else {
message.responseHeaders = undefined
}
if (object.logging !== undefined && object.logging !== null) {
message.logging = EndpointLogging.fromPartial(object.logging);
} else {
message.logging = undefined
}
if (object.saml !== undefined && object.saml !== null) {
message.saml = EndpointSAML.fromPartial(object.saml);
} else {
message.saml = undefined
}
if (object.oidc !== undefined && object.oidc !== null) {
message.oidc = EndpointOIDC.fromPartial(object.oidc);
} else {
message.oidc = undefined
}
if (object.backend !== undefined && object.backend !== null) {
message.backend = EndpointBackend.fromPartial(object.backend);
} else {
message.backend = undefined
}
return message;
}
          };

const baseEndpointConfigGetByIDReq: object = { accountId: 0 };

export const EndpointConfigGetByIDReq = {
            encode(
      message: EndpointConfigGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(26).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EndpointConfigGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEndpointConfigGetByIDReq } as EndpointConfigGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 3:
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

fromPartial(object: DeepPartial<EndpointConfigGetByIDReq>): EndpointConfigGetByIDReq {
      const message = { ...baseEndpointConfigGetByIDReq } as EndpointConfigGetByIDReq;
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

const baseEndpointConfigGetByAccountReq: object = { accountId: 0 };

export const EndpointConfigGetByAccountReq = {
            encode(
      message: EndpointConfigGetByAccountReq,
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
    ): EndpointConfigGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEndpointConfigGetByAccountReq } as EndpointConfigGetByAccountReq;
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

fromPartial(object: DeepPartial<EndpointConfigGetByAccountReq>): EndpointConfigGetByAccountReq {
      const message = { ...baseEndpointConfigGetByAccountReq } as EndpointConfigGetByAccountReq;
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

const baseEndpointConfigResp: object = {  };

export const EndpointConfigResp = {
            encode(
      message: EndpointConfigResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.endpointConfigurations) {
            EndpointConfiguration.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EndpointConfigResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEndpointConfigResp } as EndpointConfigResp;
message.endpointConfigurations = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.endpointConfigurations.push(EndpointConfiguration.decode(reader, reader.uint32()));
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

fromPartial(object: DeepPartial<EndpointConfigResp>): EndpointConfigResp {
      const message = { ...baseEndpointConfigResp } as EndpointConfigResp;
message.endpointConfigurations = [];
if (object.endpointConfigurations !== undefined && object.endpointConfigurations !== null) {
for (const e of object.endpointConfigurations) {
            message.endpointConfigurations.push(EndpointConfiguration.fromPartial(e));
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

const baseEndpointConfigUpdateReq: object = {  };

export const EndpointConfigUpdateReq = {
            encode(
      message: EndpointConfigUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(90).fork()).ldelim();
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(18).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
if (message.mutualTls !== undefined) {
          EndpointMutualTLS.encode(message.mutualTls, writer.uint32(34).fork()).ldelim();
        }
if (message.basicAuth !== undefined) {
          EndpointBasicAuth.encode(message.basicAuth, writer.uint32(42).fork()).ldelim();
        }
if (message.requestHeaders !== undefined) {
          EndpointRequestHeaders.encode(message.requestHeaders, writer.uint32(50).fork()).ldelim();
        }
if (message.compression !== undefined) {
          EndpointCompression.encode(message.compression, writer.uint32(58).fork()).ldelim();
        }
if (message.circuitBreaker !== undefined) {
          EndpointCircuitBreaker.encode(message.circuitBreaker, writer.uint32(66).fork()).ldelim();
        }
if (message.ipPolicy !== undefined) {
          EndpointIPPolicy.encode(message.ipPolicy, writer.uint32(74).fork()).ldelim();
        }
if (message.tlsTermination !== undefined) {
          EndpointTLSTermination.encode(message.tlsTermination, writer.uint32(82).fork()).ldelim();
        }
if (message.webhookValidation !== undefined) {
          EndpointWebhookValidation.encode(message.webhookValidation, writer.uint32(98).fork()).ldelim();
        }
if (message.oauth !== undefined) {
          EndpointOAuth.encode(message.oauth, writer.uint32(106).fork()).ldelim();
        }
if (message.responseHeaders !== undefined) {
          EndpointResponseHeaders.encode(message.responseHeaders, writer.uint32(114).fork()).ldelim();
        }
if (message.logging !== undefined) {
          EndpointLogging.encode(message.logging, writer.uint32(122).fork()).ldelim();
        }
if (message.saml !== undefined) {
          EndpointSAML.encode(message.saml, writer.uint32(130).fork()).ldelim();
        }
if (message.oidc !== undefined) {
          EndpointOIDC.encode(message.oidc, writer.uint32(138).fork()).ldelim();
        }
if (message.backend !== undefined) {
          EndpointBackend.encode(message.backend, writer.uint32(146).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EndpointConfigUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEndpointConfigUpdateReq } as EndpointConfigUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 11:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.description = OptString.decode(reader, reader.uint32());
break;
case 3:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 4:
message.mutualTls = EndpointMutualTLS.decode(reader, reader.uint32());
break;
case 5:
message.basicAuth = EndpointBasicAuth.decode(reader, reader.uint32());
break;
case 6:
message.requestHeaders = EndpointRequestHeaders.decode(reader, reader.uint32());
break;
case 7:
message.compression = EndpointCompression.decode(reader, reader.uint32());
break;
case 8:
message.circuitBreaker = EndpointCircuitBreaker.decode(reader, reader.uint32());
break;
case 9:
message.ipPolicy = EndpointIPPolicy.decode(reader, reader.uint32());
break;
case 10:
message.tlsTermination = EndpointTLSTermination.decode(reader, reader.uint32());
break;
case 12:
message.webhookValidation = EndpointWebhookValidation.decode(reader, reader.uint32());
break;
case 13:
message.oauth = EndpointOAuth.decode(reader, reader.uint32());
break;
case 14:
message.responseHeaders = EndpointResponseHeaders.decode(reader, reader.uint32());
break;
case 15:
message.logging = EndpointLogging.decode(reader, reader.uint32());
break;
case 16:
message.saml = EndpointSAML.decode(reader, reader.uint32());
break;
case 17:
message.oidc = EndpointOIDC.decode(reader, reader.uint32());
break;
case 18:
message.backend = EndpointBackend.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EndpointConfigUpdateReq>): EndpointConfigUpdateReq {
      const message = { ...baseEndpointConfigUpdateReq } as EndpointConfigUpdateReq;
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
if (object.mutualTls !== undefined && object.mutualTls !== null) {
message.mutualTls = EndpointMutualTLS.fromPartial(object.mutualTls);
} else {
message.mutualTls = undefined
}
if (object.basicAuth !== undefined && object.basicAuth !== null) {
message.basicAuth = EndpointBasicAuth.fromPartial(object.basicAuth);
} else {
message.basicAuth = undefined
}
if (object.requestHeaders !== undefined && object.requestHeaders !== null) {
message.requestHeaders = EndpointRequestHeaders.fromPartial(object.requestHeaders);
} else {
message.requestHeaders = undefined
}
if (object.compression !== undefined && object.compression !== null) {
message.compression = EndpointCompression.fromPartial(object.compression);
} else {
message.compression = undefined
}
if (object.circuitBreaker !== undefined && object.circuitBreaker !== null) {
message.circuitBreaker = EndpointCircuitBreaker.fromPartial(object.circuitBreaker);
} else {
message.circuitBreaker = undefined
}
if (object.ipPolicy !== undefined && object.ipPolicy !== null) {
message.ipPolicy = EndpointIPPolicy.fromPartial(object.ipPolicy);
} else {
message.ipPolicy = undefined
}
if (object.tlsTermination !== undefined && object.tlsTermination !== null) {
message.tlsTermination = EndpointTLSTermination.fromPartial(object.tlsTermination);
} else {
message.tlsTermination = undefined
}
if (object.webhookValidation !== undefined && object.webhookValidation !== null) {
message.webhookValidation = EndpointWebhookValidation.fromPartial(object.webhookValidation);
} else {
message.webhookValidation = undefined
}
if (object.oauth !== undefined && object.oauth !== null) {
message.oauth = EndpointOAuth.fromPartial(object.oauth);
} else {
message.oauth = undefined
}
if (object.responseHeaders !== undefined && object.responseHeaders !== null) {
message.responseHeaders = EndpointResponseHeaders.fromPartial(object.responseHeaders);
} else {
message.responseHeaders = undefined
}
if (object.logging !== undefined && object.logging !== null) {
message.logging = EndpointLogging.fromPartial(object.logging);
} else {
message.logging = undefined
}
if (object.saml !== undefined && object.saml !== null) {
message.saml = EndpointSAML.fromPartial(object.saml);
} else {
message.saml = undefined
}
if (object.oidc !== undefined && object.oidc !== null) {
message.oidc = EndpointOIDC.fromPartial(object.oidc);
} else {
message.oidc = undefined
}
if (object.backend !== undefined && object.backend !== null) {
message.backend = EndpointBackend.fromPartial(object.backend);
} else {
message.backend = undefined
}
return message;
}
          };

const baseEndpointConfigDeleteModuleReq: object = { modules: 0 };

export const EndpointConfigDeleteModuleReq = {
            encode(
      message: EndpointConfigDeleteModuleReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(26).fork()).ldelim();
        }
writer.uint32(18).fork();
          for (const v of message.modules) {
            writer.int32(v);
          }
          writer.ldelim();
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EndpointConfigDeleteModuleReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEndpointConfigDeleteModuleReq } as EndpointConfigDeleteModuleReq;
message.modules = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 3:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.modules.push(reader.int32() as any);
            }
          } else {
            message.modules.push(reader.int32() as any);
          }
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EndpointConfigDeleteModuleReq>): EndpointConfigDeleteModuleReq {
      const message = { ...baseEndpointConfigDeleteModuleReq } as EndpointConfigDeleteModuleReq;
message.modules = [];
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.modules !== undefined && object.modules !== null) {
for (const e of object.modules) {
            message.modules.push(e);
          }
}
return message;
}
          };

const baseEndpointConfigDeleteReq: object = {  };

export const EndpointConfigDeleteReq = {
            encode(
      message: EndpointConfigDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EndpointConfigDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEndpointConfigDeleteReq } as EndpointConfigDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 2:
message.id = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EndpointConfigDeleteReq>): EndpointConfigDeleteReq {
      const message = { ...baseEndpointConfigDeleteReq } as EndpointConfigDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

const baseEndpointConfigDeleteByAccountReq: object = { accountId: 0 };

export const EndpointConfigDeleteByAccountReq = {
            encode(
      message: EndpointConfigDeleteByAccountReq,
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
    ): EndpointConfigDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEndpointConfigDeleteByAccountReq } as EndpointConfigDeleteByAccountReq;
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

fromPartial(object: DeepPartial<EndpointConfigDeleteByAccountReq>): EndpointConfigDeleteByAccountReq {
      const message = { ...baseEndpointConfigDeleteByAccountReq } as EndpointConfigDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

/**
 * -----------------
 * EndpointConfigurations
 * -----------------
 */
export interface EndpointConfigurationsGlobal {
/** Read operations */
GetByID(request: DeepPartial<EndpointConfigGetByIDReq>,metadata?: grpc.Metadata): Promise<EndpointConfiguration>;
GetByAccount(request: DeepPartial<EndpointConfigGetByAccountReq>,metadata?: grpc.Metadata): Promise<EndpointConfigResp>;
/** Mutations */
Create(request: DeepPartial<EndpointConfigCreateReq>,metadata?: grpc.Metadata): Promise<EndpointConfiguration>;
Update(request: DeepPartial<EndpointConfigUpdateReq>,metadata?: grpc.Metadata): Promise<EndpointConfiguration>;
DeleteModule(request: DeepPartial<EndpointConfigDeleteModuleReq>,metadata?: grpc.Metadata): Promise<EndpointConfiguration>;
Delete(request: DeepPartial<EndpointConfigDeleteReq>,metadata?: grpc.Metadata): Promise<EndpointConfiguration>;
DeleteByAccount(request: DeepPartial<EndpointConfigDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class EndpointConfigurationsGlobalClientImpl implements EndpointConfigurationsGlobal {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByID = this.GetByID.bind(this);this.GetByAccount = this.GetByAccount.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.DeleteModule = this.DeleteModule.bind(this);this.Delete = this.Delete.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.Sync = this.Sync.bind(this);}

    GetByID(
      request: DeepPartial<EndpointConfigGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<EndpointConfiguration> {
      return this.rpc.unary(
        EndpointConfigurationsGlobalGetByIDDesc,
        EndpointConfigGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByAccount(
      request: DeepPartial<EndpointConfigGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<EndpointConfigResp> {
      return this.rpc.unary(
        EndpointConfigurationsGlobalGetByAccountDesc,
        EndpointConfigGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<EndpointConfigCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<EndpointConfiguration> {
      return this.rpc.unary(
        EndpointConfigurationsGlobalCreateDesc,
        EndpointConfigCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<EndpointConfigUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<EndpointConfiguration> {
      return this.rpc.unary(
        EndpointConfigurationsGlobalUpdateDesc,
        EndpointConfigUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteModule(
      request: DeepPartial<EndpointConfigDeleteModuleReq>,
      metadata?: grpc.Metadata,
    ): Promise<EndpointConfiguration> {
      return this.rpc.unary(
        EndpointConfigurationsGlobalDeleteModuleDesc,
        EndpointConfigDeleteModuleReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<EndpointConfigDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<EndpointConfiguration> {
      return this.rpc.unary(
        EndpointConfigurationsGlobalDeleteDesc,
        EndpointConfigDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<EndpointConfigDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EndpointConfigurationsGlobalDeleteByAccountDesc,
        EndpointConfigDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        EndpointConfigurationsGlobalSyncDesc,
        request,
        metadata,
      );
    }
  }

export const EndpointConfigurationsGlobalDesc = {
      serviceName: "rpx.EndpointConfigurationsGlobal",
    };

export const EndpointConfigurationsGlobalGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: EndpointConfigurationsGlobalDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EndpointConfigGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EndpointConfiguration.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EndpointConfigurationsGlobalGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: EndpointConfigurationsGlobalDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EndpointConfigGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EndpointConfigResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EndpointConfigurationsGlobalCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: EndpointConfigurationsGlobalDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EndpointConfigCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EndpointConfiguration.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EndpointConfigurationsGlobalUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: EndpointConfigurationsGlobalDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EndpointConfigUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EndpointConfiguration.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EndpointConfigurationsGlobalDeleteModuleDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteModule",
      service: EndpointConfigurationsGlobalDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EndpointConfigDeleteModuleReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EndpointConfiguration.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EndpointConfigurationsGlobalDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: EndpointConfigurationsGlobalDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EndpointConfigDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EndpointConfiguration.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EndpointConfigurationsGlobalDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: EndpointConfigurationsGlobalDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EndpointConfigDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EndpointConfigurationsGlobalSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: EndpointConfigurationsGlobalDesc,
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

