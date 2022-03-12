// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "rpx";

export interface TLSConfig {}

export enum TLSConfig_Version {
  VersionDefault = 0,
  Version10 = 1,
  Version11 = 2,
  Version12 = 3,
  Version13 = 4,
}

export enum TLSConfig_CipherSuite {
  CipherSuiteUndefined = 0,
  RSA_WITH_RC4_128_SHA = 1,
  RSA_WITH_3DES_EDE_CBC_SHA = 2,
  RSA_WITH_AES_128_CBC_SHA = 3,
  RSA_WITH_AES_256_CBC_SHA = 4,
  RSA_WITH_AES_128_CBC_SHA256 = 5,
  RSA_WITH_AES_128_GCM_SHA256 = 6,
  RSA_WITH_AES_256_GCM_SHA384 = 7,
  ECDHE_ECDSA_WITH_RC4_128_SHA = 8,
  ECDHE_ECDSA_WITH_AES_128_CBC_SHA = 9,
  ECDHE_ECDSA_WITH_AES_256_CBC_SHA = 10,
  ECDHE_RSA_WITH_RC4_128_SHA = 11,
  ECDHE_RSA_WITH_3DES_EDE_CBC_SHA = 12,
  ECDHE_RSA_WITH_AES_128_CBC_SHA = 13,
  ECDHE_RSA_WITH_AES_256_CBC_SHA = 14,
  ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 = 15,
  ECDHE_RSA_WITH_AES_128_CBC_SHA256 = 16,
  ECDHE_RSA_WITH_AES_128_GCM_SHA256 = 17,
  ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 = 18,
  ECDHE_RSA_WITH_AES_256_GCM_SHA384 = 19,
  ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 = 20,
  ECDHE_RSA_WITH_CHACHA20_POLY1305 = 21,
  ECDHE_ECDSA_WITH_CHACHA20_POLY1305 = 22,
}

export interface TLSConfig_CertificatePair {
  /**
   * oneof private_key or encrypted_private_key will be set
   * When this protobuf object stored at rest or in an insecure store, the
   * caller should ensure private_key is not set.
   */
  privateKey: Uint8Array;
  encryptedPrivateKey: Uint8Array;
  cert: Uint8Array;
}

export interface TLSConfig_ServerConfig {
  rootCas: Uint8Array;
  minVersion: TLSConfig_Version;
  certPairs: TLSConfig_CertificatePair[];
  cipherSuites: TLSConfig_CipherSuite[];
  nextProtos: string[];
  clientCas: Uint8Array;
}

export interface TLSConfig_ClientConfig {
  rootCas: Uint8Array;
  minVersion: TLSConfig_Version;
  certPair: TLSConfig_CertificatePair | undefined;
  cipherSuites: TLSConfig_CipherSuite[];
  serverName: string;
  insecureSkipVerify: boolean;
}

const baseTLSConfig: object = {};

export const TLSConfig = {
  encode(_: TLSConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TLSConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTLSConfig } as TLSConfig;
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

  fromPartial(_: DeepPartial<TLSConfig>): TLSConfig {
    const message = { ...baseTLSConfig } as TLSConfig;
    return message;
  },
};

const baseTLSConfig_CertificatePair: object = {};

export const TLSConfig_CertificatePair = {
  encode(
    message: TLSConfig_CertificatePair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.privateKey.length !== 0) {
      writer.uint32(10).bytes(message.privateKey);
    }
    if (message.encryptedPrivateKey.length !== 0) {
      writer.uint32(26).bytes(message.encryptedPrivateKey);
    }
    if (message.cert.length !== 0) {
      writer.uint32(18).bytes(message.cert);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TLSConfig_CertificatePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTLSConfig_CertificatePair,
    } as TLSConfig_CertificatePair;
    message.privateKey = new Uint8Array();
    message.encryptedPrivateKey = new Uint8Array();
    message.cert = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateKey = reader.bytes();
          break;
        case 3:
          message.encryptedPrivateKey = reader.bytes();
          break;
        case 2:
          message.cert = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<TLSConfig_CertificatePair>
  ): TLSConfig_CertificatePair {
    const message = {
      ...baseTLSConfig_CertificatePair,
    } as TLSConfig_CertificatePair;
    if (object.privateKey !== undefined && object.privateKey !== null) {
      message.privateKey = object.privateKey;
    } else {
      message.privateKey = new Uint8Array();
    }
    if (
      object.encryptedPrivateKey !== undefined &&
      object.encryptedPrivateKey !== null
    ) {
      message.encryptedPrivateKey = object.encryptedPrivateKey;
    } else {
      message.encryptedPrivateKey = new Uint8Array();
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = object.cert;
    } else {
      message.cert = new Uint8Array();
    }
    return message;
  },
};

const baseTLSConfig_ServerConfig: object = {
  minVersion: 0,
  cipherSuites: 0,
  nextProtos: "",
};

export const TLSConfig_ServerConfig = {
  encode(
    message: TLSConfig_ServerConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rootCas.length !== 0) {
      writer.uint32(10).bytes(message.rootCas);
    }
    if (message.minVersion !== 0) {
      writer.uint32(16).int32(message.minVersion);
    }
    for (const v of message.certPairs) {
      TLSConfig_CertificatePair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.cipherSuites) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.nextProtos) {
      writer.uint32(42).string(v!);
    }
    if (message.clientCas.length !== 0) {
      writer.uint32(50).bytes(message.clientCas);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TLSConfig_ServerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTLSConfig_ServerConfig } as TLSConfig_ServerConfig;
    message.certPairs = [];
    message.cipherSuites = [];
    message.nextProtos = [];
    message.rootCas = new Uint8Array();
    message.clientCas = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootCas = reader.bytes();
          break;
        case 2:
          message.minVersion = reader.int32() as any;
          break;
        case 3:
          message.certPairs.push(
            TLSConfig_CertificatePair.decode(reader, reader.uint32())
          );
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cipherSuites.push(reader.int32() as any);
            }
          } else {
            message.cipherSuites.push(reader.int32() as any);
          }
          break;
        case 5:
          message.nextProtos.push(reader.string());
          break;
        case 6:
          message.clientCas = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<TLSConfig_ServerConfig>
  ): TLSConfig_ServerConfig {
    const message = { ...baseTLSConfig_ServerConfig } as TLSConfig_ServerConfig;
    message.certPairs = [];
    message.cipherSuites = [];
    message.nextProtos = [];
    if (object.rootCas !== undefined && object.rootCas !== null) {
      message.rootCas = object.rootCas;
    } else {
      message.rootCas = new Uint8Array();
    }
    if (object.minVersion !== undefined && object.minVersion !== null) {
      message.minVersion = object.minVersion;
    } else {
      message.minVersion = 0;
    }
    if (object.certPairs !== undefined && object.certPairs !== null) {
      for (const e of object.certPairs) {
        message.certPairs.push(TLSConfig_CertificatePair.fromPartial(e));
      }
    }
    if (object.cipherSuites !== undefined && object.cipherSuites !== null) {
      for (const e of object.cipherSuites) {
        message.cipherSuites.push(e);
      }
    }
    if (object.nextProtos !== undefined && object.nextProtos !== null) {
      for (const e of object.nextProtos) {
        message.nextProtos.push(e);
      }
    }
    if (object.clientCas !== undefined && object.clientCas !== null) {
      message.clientCas = object.clientCas;
    } else {
      message.clientCas = new Uint8Array();
    }
    return message;
  },
};

const baseTLSConfig_ClientConfig: object = {
  minVersion: 0,
  cipherSuites: 0,
  serverName: "",
  insecureSkipVerify: false,
};

export const TLSConfig_ClientConfig = {
  encode(
    message: TLSConfig_ClientConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rootCas.length !== 0) {
      writer.uint32(10).bytes(message.rootCas);
    }
    if (message.minVersion !== 0) {
      writer.uint32(16).int32(message.minVersion);
    }
    if (message.certPair !== undefined) {
      TLSConfig_CertificatePair.encode(
        message.certPair,
        writer.uint32(26).fork()
      ).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.cipherSuites) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.serverName !== "") {
      writer.uint32(42).string(message.serverName);
    }
    if (message.insecureSkipVerify === true) {
      writer.uint32(48).bool(message.insecureSkipVerify);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TLSConfig_ClientConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTLSConfig_ClientConfig } as TLSConfig_ClientConfig;
    message.cipherSuites = [];
    message.rootCas = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootCas = reader.bytes();
          break;
        case 2:
          message.minVersion = reader.int32() as any;
          break;
        case 3:
          message.certPair = TLSConfig_CertificatePair.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cipherSuites.push(reader.int32() as any);
            }
          } else {
            message.cipherSuites.push(reader.int32() as any);
          }
          break;
        case 5:
          message.serverName = reader.string();
          break;
        case 6:
          message.insecureSkipVerify = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<TLSConfig_ClientConfig>
  ): TLSConfig_ClientConfig {
    const message = { ...baseTLSConfig_ClientConfig } as TLSConfig_ClientConfig;
    message.cipherSuites = [];
    if (object.rootCas !== undefined && object.rootCas !== null) {
      message.rootCas = object.rootCas;
    } else {
      message.rootCas = new Uint8Array();
    }
    if (object.minVersion !== undefined && object.minVersion !== null) {
      message.minVersion = object.minVersion;
    } else {
      message.minVersion = 0;
    }
    if (object.certPair !== undefined && object.certPair !== null) {
      message.certPair = TLSConfig_CertificatePair.fromPartial(object.certPair);
    } else {
      message.certPair = undefined;
    }
    if (object.cipherSuites !== undefined && object.cipherSuites !== null) {
      for (const e of object.cipherSuites) {
        message.cipherSuites.push(e);
      }
    }
    if (object.serverName !== undefined && object.serverName !== null) {
      message.serverName = object.serverName;
    } else {
      message.serverName = "";
    }
    if (
      object.insecureSkipVerify !== undefined &&
      object.insecureSkipVerify !== null
    ) {
      message.insecureSkipVerify = object.insecureSkipVerify;
    } else {
      message.insecureSkipVerify = false;
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
