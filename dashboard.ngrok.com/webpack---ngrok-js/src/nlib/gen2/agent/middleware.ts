// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "agent";

export interface MiddlewareConfiguration {
  compression: MiddlewareConfiguration_Compression | undefined;
  circuitBreaker: MiddlewareConfiguration_CircuitBreaker | undefined;
  ipRestriction: MiddlewareConfiguration_IPRestriction | undefined;
  basicAuth: MiddlewareConfiguration_BasicAuth | undefined;
  oauth: MiddlewareConfiguration_OAuth | undefined;
  webhookVerification: MiddlewareConfiguration_WebhookVerification | undefined;
  mutualTls: MiddlewareConfiguration_MutualTLS | undefined;
  tlsTermination: MiddlewareConfiguration_TLSTermination | undefined;
  requestHeaders: MiddlewareConfiguration_Headers | undefined;
  responseHeaders: MiddlewareConfiguration_Headers | undefined;
  websocketTcpConverter:
    | MiddlewareConfiguration_WebsocketTCPConverter
    | undefined;
  oidc: MiddlewareConfiguration_OIDC | undefined;
}

export interface MiddlewareConfiguration_Compression {}

export interface MiddlewareConfiguration_CircuitBreaker {
  errorThreshold: number;
}

export interface MiddlewareConfiguration_IPRestriction {
  allowCidrs: string[];
  denyCidrs: string[];
}

export interface MiddlewareConfiguration_BasicAuth {
  credentials: MiddlewareConfiguration_BasicAuthCredential[];
}

export interface MiddlewareConfiguration_BasicAuthCredential {
  username: string;
  cleartextPassword: string;
  hashedPassword: Uint8Array;
}

export interface MiddlewareConfiguration_OAuth {
  provider: string;
  clientId: string;
  clientSecret: string;
  sealedClientSecret: Uint8Array;
  allowEmails: string[];
  allowDomains: string[];
  scopes: string[];
}

export interface MiddlewareConfiguration_WebhookVerification {
  provider: string;
  secret: string;
  sealedSecret: Uint8Array;
}

export interface MiddlewareConfiguration_MutualTLS {
  mutualTlsCa: Uint8Array;
}

export interface MiddlewareConfiguration_TLSTermination {
  cert: Uint8Array;
  key: Uint8Array;
  sealedKey: Uint8Array;
}

export interface MiddlewareConfiguration_Headers {
  add: string[];
  remove: string[];
  addParsed: { [key: string]: string };
}

export interface MiddlewareConfiguration_Headers_AddParsedEntry {
  key: string;
  value: string;
}

export interface MiddlewareConfiguration_WebsocketTCPConverter {}

export interface MiddlewareConfiguration_OIDC {
  issuerUrl: string;
  clientId: string;
  clientSecret: string;
  sealedClientSecret: Uint8Array;
  allowEmails: string[];
  allowDomains: string[];
  scopes: string[];
}

const baseMiddlewareConfiguration: object = {};

export const MiddlewareConfiguration = {
  encode(
    message: MiddlewareConfiguration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.compression !== undefined) {
      MiddlewareConfiguration_Compression.encode(
        message.compression,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.circuitBreaker !== undefined) {
      MiddlewareConfiguration_CircuitBreaker.encode(
        message.circuitBreaker,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.ipRestriction !== undefined) {
      MiddlewareConfiguration_IPRestriction.encode(
        message.ipRestriction,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.basicAuth !== undefined) {
      MiddlewareConfiguration_BasicAuth.encode(
        message.basicAuth,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.oauth !== undefined) {
      MiddlewareConfiguration_OAuth.encode(
        message.oauth,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.webhookVerification !== undefined) {
      MiddlewareConfiguration_WebhookVerification.encode(
        message.webhookVerification,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.mutualTls !== undefined) {
      MiddlewareConfiguration_MutualTLS.encode(
        message.mutualTls,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.tlsTermination !== undefined) {
      MiddlewareConfiguration_TLSTermination.encode(
        message.tlsTermination,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.requestHeaders !== undefined) {
      MiddlewareConfiguration_Headers.encode(
        message.requestHeaders,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.responseHeaders !== undefined) {
      MiddlewareConfiguration_Headers.encode(
        message.responseHeaders,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.websocketTcpConverter !== undefined) {
      MiddlewareConfiguration_WebsocketTCPConverter.encode(
        message.websocketTcpConverter,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.oidc !== undefined) {
      MiddlewareConfiguration_OIDC.encode(
        message.oidc,
        writer.uint32(98).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration,
    } as MiddlewareConfiguration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.compression = MiddlewareConfiguration_Compression.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.circuitBreaker =
            MiddlewareConfiguration_CircuitBreaker.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.ipRestriction = MiddlewareConfiguration_IPRestriction.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.basicAuth = MiddlewareConfiguration_BasicAuth.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.oauth = MiddlewareConfiguration_OAuth.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.webhookVerification =
            MiddlewareConfiguration_WebhookVerification.decode(
              reader,
              reader.uint32()
            );
          break;
        case 7:
          message.mutualTls = MiddlewareConfiguration_MutualTLS.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.tlsTermination =
            MiddlewareConfiguration_TLSTermination.decode(
              reader,
              reader.uint32()
            );
          break;
        case 9:
          message.requestHeaders = MiddlewareConfiguration_Headers.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.responseHeaders = MiddlewareConfiguration_Headers.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.websocketTcpConverter =
            MiddlewareConfiguration_WebsocketTCPConverter.decode(
              reader,
              reader.uint32()
            );
          break;
        case 12:
          message.oidc = MiddlewareConfiguration_OIDC.decode(
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
    object: DeepPartial<MiddlewareConfiguration>
  ): MiddlewareConfiguration {
    const message = {
      ...baseMiddlewareConfiguration,
    } as MiddlewareConfiguration;
    if (object.compression !== undefined && object.compression !== null) {
      message.compression = MiddlewareConfiguration_Compression.fromPartial(
        object.compression
      );
    } else {
      message.compression = undefined;
    }
    if (object.circuitBreaker !== undefined && object.circuitBreaker !== null) {
      message.circuitBreaker =
        MiddlewareConfiguration_CircuitBreaker.fromPartial(
          object.circuitBreaker
        );
    } else {
      message.circuitBreaker = undefined;
    }
    if (object.ipRestriction !== undefined && object.ipRestriction !== null) {
      message.ipRestriction = MiddlewareConfiguration_IPRestriction.fromPartial(
        object.ipRestriction
      );
    } else {
      message.ipRestriction = undefined;
    }
    if (object.basicAuth !== undefined && object.basicAuth !== null) {
      message.basicAuth = MiddlewareConfiguration_BasicAuth.fromPartial(
        object.basicAuth
      );
    } else {
      message.basicAuth = undefined;
    }
    if (object.oauth !== undefined && object.oauth !== null) {
      message.oauth = MiddlewareConfiguration_OAuth.fromPartial(object.oauth);
    } else {
      message.oauth = undefined;
    }
    if (
      object.webhookVerification !== undefined &&
      object.webhookVerification !== null
    ) {
      message.webhookVerification =
        MiddlewareConfiguration_WebhookVerification.fromPartial(
          object.webhookVerification
        );
    } else {
      message.webhookVerification = undefined;
    }
    if (object.mutualTls !== undefined && object.mutualTls !== null) {
      message.mutualTls = MiddlewareConfiguration_MutualTLS.fromPartial(
        object.mutualTls
      );
    } else {
      message.mutualTls = undefined;
    }
    if (object.tlsTermination !== undefined && object.tlsTermination !== null) {
      message.tlsTermination =
        MiddlewareConfiguration_TLSTermination.fromPartial(
          object.tlsTermination
        );
    } else {
      message.tlsTermination = undefined;
    }
    if (object.requestHeaders !== undefined && object.requestHeaders !== null) {
      message.requestHeaders = MiddlewareConfiguration_Headers.fromPartial(
        object.requestHeaders
      );
    } else {
      message.requestHeaders = undefined;
    }
    if (
      object.responseHeaders !== undefined &&
      object.responseHeaders !== null
    ) {
      message.responseHeaders = MiddlewareConfiguration_Headers.fromPartial(
        object.responseHeaders
      );
    } else {
      message.responseHeaders = undefined;
    }
    if (
      object.websocketTcpConverter !== undefined &&
      object.websocketTcpConverter !== null
    ) {
      message.websocketTcpConverter =
        MiddlewareConfiguration_WebsocketTCPConverter.fromPartial(
          object.websocketTcpConverter
        );
    } else {
      message.websocketTcpConverter = undefined;
    }
    if (object.oidc !== undefined && object.oidc !== null) {
      message.oidc = MiddlewareConfiguration_OIDC.fromPartial(object.oidc);
    } else {
      message.oidc = undefined;
    }
    return message;
  },
};

const baseMiddlewareConfiguration_Compression: object = {};

export const MiddlewareConfiguration_Compression = {
  encode(
    _: MiddlewareConfiguration_Compression,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_Compression {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_Compression,
    } as MiddlewareConfiguration_Compression;
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
    _: DeepPartial<MiddlewareConfiguration_Compression>
  ): MiddlewareConfiguration_Compression {
    const message = {
      ...baseMiddlewareConfiguration_Compression,
    } as MiddlewareConfiguration_Compression;
    return message;
  },
};

const baseMiddlewareConfiguration_CircuitBreaker: object = {
  errorThreshold: 0,
};

export const MiddlewareConfiguration_CircuitBreaker = {
  encode(
    message: MiddlewareConfiguration_CircuitBreaker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.errorThreshold !== 0) {
      writer.uint32(9).double(message.errorThreshold);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_CircuitBreaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_CircuitBreaker,
    } as MiddlewareConfiguration_CircuitBreaker;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errorThreshold = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MiddlewareConfiguration_CircuitBreaker>
  ): MiddlewareConfiguration_CircuitBreaker {
    const message = {
      ...baseMiddlewareConfiguration_CircuitBreaker,
    } as MiddlewareConfiguration_CircuitBreaker;
    if (object.errorThreshold !== undefined && object.errorThreshold !== null) {
      message.errorThreshold = object.errorThreshold;
    } else {
      message.errorThreshold = 0;
    }
    return message;
  },
};

const baseMiddlewareConfiguration_IPRestriction: object = {
  allowCidrs: "",
  denyCidrs: "",
};

export const MiddlewareConfiguration_IPRestriction = {
  encode(
    message: MiddlewareConfiguration_IPRestriction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.allowCidrs) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.denyCidrs) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_IPRestriction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_IPRestriction,
    } as MiddlewareConfiguration_IPRestriction;
    message.allowCidrs = [];
    message.denyCidrs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowCidrs.push(reader.string());
          break;
        case 2:
          message.denyCidrs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MiddlewareConfiguration_IPRestriction>
  ): MiddlewareConfiguration_IPRestriction {
    const message = {
      ...baseMiddlewareConfiguration_IPRestriction,
    } as MiddlewareConfiguration_IPRestriction;
    message.allowCidrs = [];
    message.denyCidrs = [];
    if (object.allowCidrs !== undefined && object.allowCidrs !== null) {
      for (const e of object.allowCidrs) {
        message.allowCidrs.push(e);
      }
    }
    if (object.denyCidrs !== undefined && object.denyCidrs !== null) {
      for (const e of object.denyCidrs) {
        message.denyCidrs.push(e);
      }
    }
    return message;
  },
};

const baseMiddlewareConfiguration_BasicAuth: object = {};

export const MiddlewareConfiguration_BasicAuth = {
  encode(
    message: MiddlewareConfiguration_BasicAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.credentials) {
      MiddlewareConfiguration_BasicAuthCredential.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_BasicAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_BasicAuth,
    } as MiddlewareConfiguration_BasicAuth;
    message.credentials = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credentials.push(
            MiddlewareConfiguration_BasicAuthCredential.decode(
              reader,
              reader.uint32()
            )
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
    object: DeepPartial<MiddlewareConfiguration_BasicAuth>
  ): MiddlewareConfiguration_BasicAuth {
    const message = {
      ...baseMiddlewareConfiguration_BasicAuth,
    } as MiddlewareConfiguration_BasicAuth;
    message.credentials = [];
    if (object.credentials !== undefined && object.credentials !== null) {
      for (const e of object.credentials) {
        message.credentials.push(
          MiddlewareConfiguration_BasicAuthCredential.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseMiddlewareConfiguration_BasicAuthCredential: object = {
  username: "",
  cleartextPassword: "",
};

export const MiddlewareConfiguration_BasicAuthCredential = {
  encode(
    message: MiddlewareConfiguration_BasicAuthCredential,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.cleartextPassword !== "") {
      writer.uint32(18).string(message.cleartextPassword);
    }
    if (message.hashedPassword.length !== 0) {
      writer.uint32(26).bytes(message.hashedPassword);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_BasicAuthCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_BasicAuthCredential,
    } as MiddlewareConfiguration_BasicAuthCredential;
    message.hashedPassword = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.cleartextPassword = reader.string();
          break;
        case 3:
          message.hashedPassword = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MiddlewareConfiguration_BasicAuthCredential>
  ): MiddlewareConfiguration_BasicAuthCredential {
    const message = {
      ...baseMiddlewareConfiguration_BasicAuthCredential,
    } as MiddlewareConfiguration_BasicAuthCredential;
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (
      object.cleartextPassword !== undefined &&
      object.cleartextPassword !== null
    ) {
      message.cleartextPassword = object.cleartextPassword;
    } else {
      message.cleartextPassword = "";
    }
    if (object.hashedPassword !== undefined && object.hashedPassword !== null) {
      message.hashedPassword = object.hashedPassword;
    } else {
      message.hashedPassword = new Uint8Array();
    }
    return message;
  },
};

const baseMiddlewareConfiguration_OAuth: object = {
  provider: "",
  clientId: "",
  clientSecret: "",
  allowEmails: "",
  allowDomains: "",
  scopes: "",
};

export const MiddlewareConfiguration_OAuth = {
  encode(
    message: MiddlewareConfiguration_OAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.clientId !== "") {
      writer.uint32(50).string(message.clientId);
    }
    if (message.clientSecret !== "") {
      writer.uint32(58).string(message.clientSecret);
    }
    if (message.sealedClientSecret.length !== 0) {
      writer.uint32(18).bytes(message.sealedClientSecret);
    }
    for (const v of message.allowEmails) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.allowDomains) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.scopes) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_OAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_OAuth,
    } as MiddlewareConfiguration_OAuth;
    message.allowEmails = [];
    message.allowDomains = [];
    message.scopes = [];
    message.sealedClientSecret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 6:
          message.clientId = reader.string();
          break;
        case 7:
          message.clientSecret = reader.string();
          break;
        case 2:
          message.sealedClientSecret = reader.bytes();
          break;
        case 3:
          message.allowEmails.push(reader.string());
          break;
        case 4:
          message.allowDomains.push(reader.string());
          break;
        case 5:
          message.scopes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MiddlewareConfiguration_OAuth>
  ): MiddlewareConfiguration_OAuth {
    const message = {
      ...baseMiddlewareConfiguration_OAuth,
    } as MiddlewareConfiguration_OAuth;
    message.allowEmails = [];
    message.allowDomains = [];
    message.scopes = [];
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.clientSecret !== undefined && object.clientSecret !== null) {
      message.clientSecret = object.clientSecret;
    } else {
      message.clientSecret = "";
    }
    if (
      object.sealedClientSecret !== undefined &&
      object.sealedClientSecret !== null
    ) {
      message.sealedClientSecret = object.sealedClientSecret;
    } else {
      message.sealedClientSecret = new Uint8Array();
    }
    if (object.allowEmails !== undefined && object.allowEmails !== null) {
      for (const e of object.allowEmails) {
        message.allowEmails.push(e);
      }
    }
    if (object.allowDomains !== undefined && object.allowDomains !== null) {
      for (const e of object.allowDomains) {
        message.allowDomains.push(e);
      }
    }
    if (object.scopes !== undefined && object.scopes !== null) {
      for (const e of object.scopes) {
        message.scopes.push(e);
      }
    }
    return message;
  },
};

const baseMiddlewareConfiguration_WebhookVerification: object = {
  provider: "",
  secret: "",
};

export const MiddlewareConfiguration_WebhookVerification = {
  encode(
    message: MiddlewareConfiguration_WebhookVerification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.secret !== "") {
      writer.uint32(18).string(message.secret);
    }
    if (message.sealedSecret.length !== 0) {
      writer.uint32(26).bytes(message.sealedSecret);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_WebhookVerification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_WebhookVerification,
    } as MiddlewareConfiguration_WebhookVerification;
    message.sealedSecret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.secret = reader.string();
          break;
        case 3:
          message.sealedSecret = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MiddlewareConfiguration_WebhookVerification>
  ): MiddlewareConfiguration_WebhookVerification {
    const message = {
      ...baseMiddlewareConfiguration_WebhookVerification,
    } as MiddlewareConfiguration_WebhookVerification;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = object.secret;
    } else {
      message.secret = "";
    }
    if (object.sealedSecret !== undefined && object.sealedSecret !== null) {
      message.sealedSecret = object.sealedSecret;
    } else {
      message.sealedSecret = new Uint8Array();
    }
    return message;
  },
};

const baseMiddlewareConfiguration_MutualTLS: object = {};

export const MiddlewareConfiguration_MutualTLS = {
  encode(
    message: MiddlewareConfiguration_MutualTLS,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mutualTlsCa.length !== 0) {
      writer.uint32(34).bytes(message.mutualTlsCa);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_MutualTLS {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_MutualTLS,
    } as MiddlewareConfiguration_MutualTLS;
    message.mutualTlsCa = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.mutualTlsCa = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MiddlewareConfiguration_MutualTLS>
  ): MiddlewareConfiguration_MutualTLS {
    const message = {
      ...baseMiddlewareConfiguration_MutualTLS,
    } as MiddlewareConfiguration_MutualTLS;
    if (object.mutualTlsCa !== undefined && object.mutualTlsCa !== null) {
      message.mutualTlsCa = object.mutualTlsCa;
    } else {
      message.mutualTlsCa = new Uint8Array();
    }
    return message;
  },
};

const baseMiddlewareConfiguration_TLSTermination: object = {};

export const MiddlewareConfiguration_TLSTermination = {
  encode(
    message: MiddlewareConfiguration_TLSTermination,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cert.length !== 0) {
      writer.uint32(10).bytes(message.cert);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.sealedKey.length !== 0) {
      writer.uint32(26).bytes(message.sealedKey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_TLSTermination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_TLSTermination,
    } as MiddlewareConfiguration_TLSTermination;
    message.cert = new Uint8Array();
    message.key = new Uint8Array();
    message.sealedKey = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cert = reader.bytes();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.sealedKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MiddlewareConfiguration_TLSTermination>
  ): MiddlewareConfiguration_TLSTermination {
    const message = {
      ...baseMiddlewareConfiguration_TLSTermination,
    } as MiddlewareConfiguration_TLSTermination;
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = object.cert;
    } else {
      message.cert = new Uint8Array();
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }
    if (object.sealedKey !== undefined && object.sealedKey !== null) {
      message.sealedKey = object.sealedKey;
    } else {
      message.sealedKey = new Uint8Array();
    }
    return message;
  },
};

const baseMiddlewareConfiguration_Headers: object = { add: "", remove: "" };

export const MiddlewareConfiguration_Headers = {
  encode(
    message: MiddlewareConfiguration_Headers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.add) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.remove) {
      writer.uint32(18).string(v!);
    }
    Object.entries(message.addParsed).forEach(([key, value]) => {
      MiddlewareConfiguration_Headers_AddParsedEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_Headers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_Headers,
    } as MiddlewareConfiguration_Headers;
    message.add = [];
    message.remove = [];
    message.addParsed = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.add.push(reader.string());
          break;
        case 2:
          message.remove.push(reader.string());
          break;
        case 3:
          const entry3 = MiddlewareConfiguration_Headers_AddParsedEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.addParsed[entry3.key] = entry3.value;
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
    object: DeepPartial<MiddlewareConfiguration_Headers>
  ): MiddlewareConfiguration_Headers {
    const message = {
      ...baseMiddlewareConfiguration_Headers,
    } as MiddlewareConfiguration_Headers;
    message.add = [];
    message.remove = [];
    message.addParsed = {};
    if (object.add !== undefined && object.add !== null) {
      for (const e of object.add) {
        message.add.push(e);
      }
    }
    if (object.remove !== undefined && object.remove !== null) {
      for (const e of object.remove) {
        message.remove.push(e);
      }
    }
    if (object.addParsed !== undefined && object.addParsed !== null) {
      Object.entries(object.addParsed).forEach(([key, value]) => {
        if (value !== undefined) {
          message.addParsed[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseMiddlewareConfiguration_Headers_AddParsedEntry: object = {
  key: "",
  value: "",
};

export const MiddlewareConfiguration_Headers_AddParsedEntry = {
  encode(
    message: MiddlewareConfiguration_Headers_AddParsedEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_Headers_AddParsedEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_Headers_AddParsedEntry,
    } as MiddlewareConfiguration_Headers_AddParsedEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MiddlewareConfiguration_Headers_AddParsedEntry>
  ): MiddlewareConfiguration_Headers_AddParsedEntry {
    const message = {
      ...baseMiddlewareConfiguration_Headers_AddParsedEntry,
    } as MiddlewareConfiguration_Headers_AddParsedEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMiddlewareConfiguration_WebsocketTCPConverter: object = {};

export const MiddlewareConfiguration_WebsocketTCPConverter = {
  encode(
    _: MiddlewareConfiguration_WebsocketTCPConverter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_WebsocketTCPConverter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_WebsocketTCPConverter,
    } as MiddlewareConfiguration_WebsocketTCPConverter;
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
    _: DeepPartial<MiddlewareConfiguration_WebsocketTCPConverter>
  ): MiddlewareConfiguration_WebsocketTCPConverter {
    const message = {
      ...baseMiddlewareConfiguration_WebsocketTCPConverter,
    } as MiddlewareConfiguration_WebsocketTCPConverter;
    return message;
  },
};

const baseMiddlewareConfiguration_OIDC: object = {
  issuerUrl: "",
  clientId: "",
  clientSecret: "",
  allowEmails: "",
  allowDomains: "",
  scopes: "",
};

export const MiddlewareConfiguration_OIDC = {
  encode(
    message: MiddlewareConfiguration_OIDC,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuerUrl !== "") {
      writer.uint32(10).string(message.issuerUrl);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.clientSecret !== "") {
      writer.uint32(26).string(message.clientSecret);
    }
    if (message.sealedClientSecret.length !== 0) {
      writer.uint32(34).bytes(message.sealedClientSecret);
    }
    for (const v of message.allowEmails) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.allowDomains) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.scopes) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiddlewareConfiguration_OIDC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMiddlewareConfiguration_OIDC,
    } as MiddlewareConfiguration_OIDC;
    message.allowEmails = [];
    message.allowDomains = [];
    message.scopes = [];
    message.sealedClientSecret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerUrl = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.clientSecret = reader.string();
          break;
        case 4:
          message.sealedClientSecret = reader.bytes();
          break;
        case 5:
          message.allowEmails.push(reader.string());
          break;
        case 6:
          message.allowDomains.push(reader.string());
          break;
        case 7:
          message.scopes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MiddlewareConfiguration_OIDC>
  ): MiddlewareConfiguration_OIDC {
    const message = {
      ...baseMiddlewareConfiguration_OIDC,
    } as MiddlewareConfiguration_OIDC;
    message.allowEmails = [];
    message.allowDomains = [];
    message.scopes = [];
    if (object.issuerUrl !== undefined && object.issuerUrl !== null) {
      message.issuerUrl = object.issuerUrl;
    } else {
      message.issuerUrl = "";
    }
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.clientSecret !== undefined && object.clientSecret !== null) {
      message.clientSecret = object.clientSecret;
    } else {
      message.clientSecret = "";
    }
    if (
      object.sealedClientSecret !== undefined &&
      object.sealedClientSecret !== null
    ) {
      message.sealedClientSecret = object.sealedClientSecret;
    } else {
      message.sealedClientSecret = new Uint8Array();
    }
    if (object.allowEmails !== undefined && object.allowEmails !== null) {
      for (const e of object.allowEmails) {
        message.allowEmails.push(e);
      }
    }
    if (object.allowDomains !== undefined && object.allowDomains !== null) {
      for (const e of object.allowDomains) {
        message.allowDomains.push(e);
      }
    }
    if (object.scopes !== undefined && object.scopes !== null) {
      for (const e of object.scopes) {
        message.scopes.push(e);
      }
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
