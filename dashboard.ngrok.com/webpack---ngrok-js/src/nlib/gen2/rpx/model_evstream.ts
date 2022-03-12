// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ID,
  Timestamp,
  Duration,
  OptString,
  OptInt64,
  OptBytes,
  Headers,
} from "../pb/types";

export const protobufPackage = "rpx";

/**
 * Note: This is shared by several log payload fields. Additional validation may
 *       be needed if new variants are added.
 */
export enum Decision {
  DECISION_INVALID = 0,
  DECISION_BLOCK = 1,
  DECISION_ALLOW = 2,
  /** DECISION_ALLOW_WHILE_OPEN - Only valid for circuit_breaker_decision */
  DECISION_ALLOW_WHILE_OPEN = 3,
}

export enum Compression {
  COMPRESS_NONE = 0,
  COMPRESS_GZIP = 1,
  COMPRESS_DEFLATE = 2,
}

export enum EventField {
  EVENT_FIELD_INVALID = 0,
  EVENT_FIELD_SERVER_HOSTNAME = 1,
  EVENT_FIELD_BACKEND_CONNECTION_REUSE = 2,
  EVENT_FIELD_BACKEND_DIAL_DURATION = 3,
  EVENT_FIELD_BASIC_AUTH_DECISION = 4,
  EVENT_FIELD_BASIC_AUTH_USER = 5,
  EVENT_FIELD_BYTES_IN = 6,
  EVENT_FIELD_BYTES_OUT = 7,
  EVENT_FIELD_CIRCUIT_BREAKER_DECISION = 8,
  EVENT_FIELD_CLIENT_IP = 9,
  EVENT_FIELD_COMPRESSION_ALGORITHM = 10,
  EVENT_FIELD_BYTES_SAVED_FROM_COMPRESSION = 11,
  EVENT_FIELD_CONNECTION_DURATION = 12,
  EVENT_FIELD_CONNECTION_END_TS = 13,
  EVENT_FIELD_CONNECTION_START_TS = 14,
  EVENT_FIELD_HOSTNAME = 15,
  EVENT_FIELD_HTTP_VERSION = 16,
  EVENT_FIELD_IP_POLICY_DECISION = 17,
  EVENT_FIELD_IP_POLICY_MATCHING_RULE = 18,
  EVENT_FIELD_METHOD = 19,
  EVENT_FIELD_NGROK_CONNECTION_ID = 20,
  EVENT_FIELD_NGROK_REQUEST_ID = 21,
  EVENT_FIELD_NGROK_SERVER_ID = 22,
  EVENT_FIELD_NGROK_SERVER_IP = 23,
  EVENT_FIELD_NGROK_SERVER_PORT = 57,
  EVENT_FIELD_OAUTH_APP_CLIENT_ID = 24,
  EVENT_FIELD_OAUTH_USER_AUTHORIZED = 25,
  EVENT_FIELD_OAUTH_USER_ID = 26,
  EVENT_FIELD_OAUTH_USER_NAME = 27,
  EVENT_FIELD_PATH = 28,
  EVENT_FIELD_SCHEME = 53,
  EVENT_FIELD_QUERY_STRING = 54,
  EVENT_FIELD_RAW_URL = 55,
  EVENT_FIELD_REQUEST_BODY = 29,
  EVENT_FIELD_REQUEST_BODY_SIZE_BYTES = 30,
  EVENT_FIELD_REQUEST_END_TS = 31,
  EVENT_FIELD_REQUEST_HEADERS_FRONT = 32,
  EVENT_FIELD_REQUEST_HEADERS_BACK = 33,
  EVENT_FIELD_REQUEST_START_TS = 34,
  EVENT_FIELD_RESERVED_ADDR_ID = 35,
  EVENT_FIELD_RESERVED_DOMAIN_ID = 36,
  EVENT_FIELD_RESPONSE_BODY = 37,
  EVENT_FIELD_RESPONSE_BODY_SIZE_BYTES = 38,
  EVENT_FIELD_RESPONSE_END_TS = 39,
  EVENT_FIELD_RESPONSE_HEADERS_BACK = 40,
  EVENT_FIELD_RESPONSE_HEADERS_FRONT = 41,
  EVENT_FIELD_RESPONSE_START_TS = 42,
  EVENT_FIELD_ROUND_TRIP_DURATION = 43,
  EVENT_FIELD_STATUS_CODE = 44,
  EVENT_FIELD_TLS_CERTIFICATE_ID = 45,
  EVENT_FIELD_TLS_CIPHER_SUITE = 46,
  EVENT_FIELD_TLS_CLIENT_COMMON_NAME = 47,
  EVENT_FIELD_TLS_CLIENT_SERIAL_NUMBER = 48,
  EVENT_FIELD_TLS_VERSION = 49,
  EVENT_FIELD_TUNNEL_ID = 50,
  EVENT_FIELD_USER_AGENT = 51,
  EVENT_FIELD_WEBHOOK_SIGNATURE_VERIFICATION_DECISION = 52,
  EVENT_FIELD_ACCOUNT_ID = 56,
}

export enum EventType {
  EVENT_TYPE_INVALID = 0,
  EVENT_TYPE_HTTP_REQUEST_COMPLETE = 1,
  EVENT_TYPE_TCP_CONNECTION_CLOSED = 2,
  EVENT_TYPE_TEST = 3,
}

export enum EventFormat {
  EVENT_FORMAT_INVALID = 0,
  EVENT_FORMAT_JSON = 1,
}

export interface EventStreamEvent {
  id: ID | undefined;
  streamId: ID | undefined;
  timestamp: Timestamp | undefined;
  destinations: ID[];
  httpRequestComplete: HTTPRequestCompleteEvent | undefined;
  tcpConnectionClosed: TCPConnectionClosedEvent | undefined;
  test: TestEvent | undefined;
  fields: EventField[];
  eventType: EventType;
}

export interface HTTPRequestCompleteEvent {
  serverHostname: string;
  backendConnectionReuse: boolean;
  backendDialDuration: Duration | undefined;
  basicAuthDecision: Decision;
  basicAuthUser: OptString | undefined;
  circuitBreakerDecision: Decision;
  clientIp: string;
  compressionAlgorithm: Compression;
  bytesSavedFromCompression: OptInt64 | undefined;
  connectionStartTs: Timestamp | undefined;
  hostname: string;
  httpVersion: string;
  ipPolicyDecision: Decision;
  ipPolicyMatchingRule: ID | undefined;
  method: string;
  ngrokConnectionId: string;
  ngrokRequestId: string;
  ngrokServerId: string;
  ngrokServerIp: string;
  ngrokServerPort: number;
  oauthAppClientId: OptString | undefined;
  oauthUserAuthorized: Decision;
  oauthUserId: OptString | undefined;
  oauthUserName: OptString | undefined;
  path: string;
  requestBody: OptBytes | undefined;
  requestBodySizeBytes: number;
  requestEndTs: Timestamp | undefined;
  requestHeadersFront: Headers | undefined;
  requestHeadersBack: Headers | undefined;
  requestStartTs: Timestamp | undefined;
  reservedDomainId: ID | undefined;
  responseBody: OptBytes | undefined;
  responseBodySizeBytes: number;
  responseEndTs: Timestamp | undefined;
  responseHeadersBack: Headers | undefined;
  responseHeadersFront: Headers | undefined;
  responseStartTs: Timestamp | undefined;
  roundTripDuration: Duration | undefined;
  statusCode: number;
  tlsCertificateId: ID | undefined;
  tlsCipherSuite: OptString | undefined;
  tlsClientCommonName: OptString | undefined;
  tlsClientSerialNumber: OptString | undefined;
  tlsVersion: OptString | undefined;
  tunnelId: ID | undefined;
  userAgent: string;
  webhookSignatureVerificationDecision: Decision;
  scheme: string;
  queryString: string;
  rawUrl: string;
  accountId: ID | undefined;
}

export interface TCPConnectionClosedEvent {
  serverHostname: string;
  backendDialDuration: Duration | undefined;
  bytesIn: number;
  bytesOut: number;
  clientIp: string;
  connectionDuration: Duration | undefined;
  connectionEndTs: Timestamp | undefined;
  connectionStartTs: Timestamp | undefined;
  ipPolicyDecision: Decision;
  ipPolicyMatchingRule: ID | undefined;
  ngrokConnectionId: string;
  ngrokServerId: string;
  ngrokServerIp: string;
  ngrokServerPort: number;
  reservedAddrId: ID | undefined;
  tunnelId: ID | undefined;
  accountId: ID | undefined;
}

export interface TestEvent {}

export interface EventStreamPublishReport {
  /**
   * this can be either a stream or subscription id, but since we're moving
   * to subscriptions we've renamed it as such
   */
  subscriptionId: ID | undefined;
  destinationId: ID | undefined;
  reportStartsAt: Timestamp | undefined;
  reportEndsAt: Timestamp | undefined;
  messageCount: number;
  errorCount: number;
  lastError: string;
  lastErrorAt: Timestamp | undefined;
  lastSuccessAt: Timestamp | undefined;
}

export interface OptEventFields {
  val: EventField[];
}

export interface EventStream {
  id: ID | undefined;
  accountId: number;
  metadata: string;
  description: string;
  createdAt: Timestamp | undefined;
  eventType: EventType;
  destinationIds: ID[];
  fields: EventField[];
  samplingRate: number;
}

export interface EventDestination {
  id: ID | undefined;
  accountKsuid: ID | undefined;
  accountId: number;
  metadata: string;
  description: string;
  createdAt: Timestamp | undefined;
  format: EventFormat;
  enabled: boolean;
  target: EventTarget | undefined;
  report: EventDestination_Report | undefined;
}

export interface EventDestination_Report {
  messageCount: number;
  errorCount: number;
  lastErrors: string[];
  start: Timestamp | undefined;
  end: Timestamp | undefined;
}

export interface EventTarget {
  firehose: EventTarget_Firehose | undefined;
  kinesis: EventTarget_Kinesis | undefined;
  cloudwatchLogs: EventTarget_CloudwatchLogs | undefined;
  debug: EventTarget_Debug | undefined;
}

export interface EventTarget_Firehose {
  auth: AWSAuth | undefined;
  deliveryStreamArn: string;
}

export interface EventTarget_Kinesis {
  auth: AWSAuth | undefined;
  streamArn: string;
}

export interface EventTarget_CloudwatchLogs {
  auth: AWSAuth | undefined;
  logGroupArn: string;
}

export interface EventTarget_S3 {
  auth: AWSAuth | undefined;
  bucketArn: string;
  objectPrefix: string;
  compression: boolean;
  maxFileSize: number;
  maxFileAge: number;
}

export interface EventTarget_Debug {
  log: boolean;
  callbackUrl: string;
}

export interface AWSAuth {
  role: AWSAuth_Role | undefined;
  creds: AWSAuth_Credentials | undefined;
}

export interface AWSAuth_Role {
  roleArn: string;
  externalId: string;
}

export interface AWSAuth_Credentials {
  awsAccessKeyId: Uint8Array;
  awsSecretAccessKey: Uint8Array;
}

const baseEventStreamEvent: object = { fields: 0, eventType: 0 };

export const EventStreamEvent = {
  encode(
    message: EventStreamEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.streamId !== undefined) {
      ID.encode(message.streamId, writer.uint32(18).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.destinations) {
      ID.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.httpRequestComplete !== undefined) {
      HTTPRequestCompleteEvent.encode(
        message.httpRequestComplete,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.tcpConnectionClosed !== undefined) {
      TCPConnectionClosedEvent.encode(
        message.tcpConnectionClosed,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.test !== undefined) {
      TestEvent.encode(message.test, writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.fields) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.eventType !== 0) {
      writer.uint32(64).int32(message.eventType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStreamEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventStreamEvent } as EventStreamEvent;
    message.destinations = [];
    message.fields = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.streamId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.destinations.push(ID.decode(reader, reader.uint32()));
          break;
        case 5:
          message.httpRequestComplete = HTTPRequestCompleteEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.tcpConnectionClosed = TCPConnectionClosedEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.test = TestEvent.decode(reader, reader.uint32());
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fields.push(reader.int32() as any);
            }
          } else {
            message.fields.push(reader.int32() as any);
          }
          break;
        case 8:
          message.eventType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventStreamEvent>): EventStreamEvent {
    const message = { ...baseEventStreamEvent } as EventStreamEvent;
    message.destinations = [];
    message.fields = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.streamId !== undefined && object.streamId !== null) {
      message.streamId = ID.fromPartial(object.streamId);
    } else {
      message.streamId = undefined;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    if (object.destinations !== undefined && object.destinations !== null) {
      for (const e of object.destinations) {
        message.destinations.push(ID.fromPartial(e));
      }
    }
    if (
      object.httpRequestComplete !== undefined &&
      object.httpRequestComplete !== null
    ) {
      message.httpRequestComplete = HTTPRequestCompleteEvent.fromPartial(
        object.httpRequestComplete
      );
    } else {
      message.httpRequestComplete = undefined;
    }
    if (
      object.tcpConnectionClosed !== undefined &&
      object.tcpConnectionClosed !== null
    ) {
      message.tcpConnectionClosed = TCPConnectionClosedEvent.fromPartial(
        object.tcpConnectionClosed
      );
    } else {
      message.tcpConnectionClosed = undefined;
    }
    if (object.test !== undefined && object.test !== null) {
      message.test = TestEvent.fromPartial(object.test);
    } else {
      message.test = undefined;
    }
    if (object.fields !== undefined && object.fields !== null) {
      for (const e of object.fields) {
        message.fields.push(e);
      }
    }
    if (object.eventType !== undefined && object.eventType !== null) {
      message.eventType = object.eventType;
    } else {
      message.eventType = 0;
    }
    return message;
  },
};

const baseHTTPRequestCompleteEvent: object = {
  serverHostname: "",
  backendConnectionReuse: false,
  basicAuthDecision: 0,
  circuitBreakerDecision: 0,
  clientIp: "",
  compressionAlgorithm: 0,
  hostname: "",
  httpVersion: "",
  ipPolicyDecision: 0,
  method: "",
  ngrokConnectionId: "",
  ngrokRequestId: "",
  ngrokServerId: "",
  ngrokServerIp: "",
  ngrokServerPort: 0,
  oauthUserAuthorized: 0,
  path: "",
  requestBodySizeBytes: 0,
  responseBodySizeBytes: 0,
  statusCode: 0,
  userAgent: "",
  webhookSignatureVerificationDecision: 0,
  scheme: "",
  queryString: "",
  rawUrl: "",
};

export const HTTPRequestCompleteEvent = {
  encode(
    message: HTTPRequestCompleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serverHostname !== "") {
      writer.uint32(10).string(message.serverHostname);
    }
    if (message.backendConnectionReuse === true) {
      writer.uint32(16).bool(message.backendConnectionReuse);
    }
    if (message.backendDialDuration !== undefined) {
      Duration.encode(
        message.backendDialDuration,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.basicAuthDecision !== 0) {
      writer.uint32(32).int32(message.basicAuthDecision);
    }
    if (message.basicAuthUser !== undefined) {
      OptString.encode(
        message.basicAuthUser,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.circuitBreakerDecision !== 0) {
      writer.uint32(64).int32(message.circuitBreakerDecision);
    }
    if (message.clientIp !== "") {
      writer.uint32(74).string(message.clientIp);
    }
    if (message.compressionAlgorithm !== 0) {
      writer.uint32(80).int32(message.compressionAlgorithm);
    }
    if (message.bytesSavedFromCompression !== undefined) {
      OptInt64.encode(
        message.bytesSavedFromCompression,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.connectionStartTs !== undefined) {
      Timestamp.encode(
        message.connectionStartTs,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.hostname !== "") {
      writer.uint32(122).string(message.hostname);
    }
    if (message.httpVersion !== "") {
      writer.uint32(130).string(message.httpVersion);
    }
    if (message.ipPolicyDecision !== 0) {
      writer.uint32(136).int32(message.ipPolicyDecision);
    }
    if (message.ipPolicyMatchingRule !== undefined) {
      ID.encode(
        message.ipPolicyMatchingRule,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.method !== "") {
      writer.uint32(154).string(message.method);
    }
    if (message.ngrokConnectionId !== "") {
      writer.uint32(162).string(message.ngrokConnectionId);
    }
    if (message.ngrokRequestId !== "") {
      writer.uint32(170).string(message.ngrokRequestId);
    }
    if (message.ngrokServerId !== "") {
      writer.uint32(178).string(message.ngrokServerId);
    }
    if (message.ngrokServerIp !== "") {
      writer.uint32(186).string(message.ngrokServerIp);
    }
    if (message.ngrokServerPort !== 0) {
      writer.uint32(456).int32(message.ngrokServerPort);
    }
    if (message.oauthAppClientId !== undefined) {
      OptString.encode(
        message.oauthAppClientId,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.oauthUserAuthorized !== 0) {
      writer.uint32(200).int32(message.oauthUserAuthorized);
    }
    if (message.oauthUserId !== undefined) {
      OptString.encode(message.oauthUserId, writer.uint32(210).fork()).ldelim();
    }
    if (message.oauthUserName !== undefined) {
      OptString.encode(
        message.oauthUserName,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.path !== "") {
      writer.uint32(226).string(message.path);
    }
    if (message.requestBody !== undefined) {
      OptBytes.encode(message.requestBody, writer.uint32(234).fork()).ldelim();
    }
    if (message.requestBodySizeBytes !== 0) {
      writer.uint32(240).int64(message.requestBodySizeBytes);
    }
    if (message.requestEndTs !== undefined) {
      Timestamp.encode(
        message.requestEndTs,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.requestHeadersFront !== undefined) {
      Headers.encode(
        message.requestHeadersFront,
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.requestHeadersBack !== undefined) {
      Headers.encode(
        message.requestHeadersBack,
        writer.uint32(266).fork()
      ).ldelim();
    }
    if (message.requestStartTs !== undefined) {
      Timestamp.encode(
        message.requestStartTs,
        writer.uint32(274).fork()
      ).ldelim();
    }
    if (message.reservedDomainId !== undefined) {
      ID.encode(message.reservedDomainId, writer.uint32(290).fork()).ldelim();
    }
    if (message.responseBody !== undefined) {
      OptBytes.encode(message.responseBody, writer.uint32(298).fork()).ldelim();
    }
    if (message.responseBodySizeBytes !== 0) {
      writer.uint32(304).int64(message.responseBodySizeBytes);
    }
    if (message.responseEndTs !== undefined) {
      Timestamp.encode(
        message.responseEndTs,
        writer.uint32(314).fork()
      ).ldelim();
    }
    if (message.responseHeadersBack !== undefined) {
      Headers.encode(
        message.responseHeadersBack,
        writer.uint32(322).fork()
      ).ldelim();
    }
    if (message.responseHeadersFront !== undefined) {
      Headers.encode(
        message.responseHeadersFront,
        writer.uint32(330).fork()
      ).ldelim();
    }
    if (message.responseStartTs !== undefined) {
      Timestamp.encode(
        message.responseStartTs,
        writer.uint32(338).fork()
      ).ldelim();
    }
    if (message.roundTripDuration !== undefined) {
      Duration.encode(
        message.roundTripDuration,
        writer.uint32(346).fork()
      ).ldelim();
    }
    if (message.statusCode !== 0) {
      writer.uint32(352).int32(message.statusCode);
    }
    if (message.tlsCertificateId !== undefined) {
      ID.encode(message.tlsCertificateId, writer.uint32(362).fork()).ldelim();
    }
    if (message.tlsCipherSuite !== undefined) {
      OptString.encode(
        message.tlsCipherSuite,
        writer.uint32(370).fork()
      ).ldelim();
    }
    if (message.tlsClientCommonName !== undefined) {
      OptString.encode(
        message.tlsClientCommonName,
        writer.uint32(378).fork()
      ).ldelim();
    }
    if (message.tlsClientSerialNumber !== undefined) {
      OptString.encode(
        message.tlsClientSerialNumber,
        writer.uint32(386).fork()
      ).ldelim();
    }
    if (message.tlsVersion !== undefined) {
      OptString.encode(message.tlsVersion, writer.uint32(394).fork()).ldelim();
    }
    if (message.tunnelId !== undefined) {
      ID.encode(message.tunnelId, writer.uint32(402).fork()).ldelim();
    }
    if (message.userAgent !== "") {
      writer.uint32(410).string(message.userAgent);
    }
    if (message.webhookSignatureVerificationDecision !== 0) {
      writer.uint32(416).int32(message.webhookSignatureVerificationDecision);
    }
    if (message.scheme !== "") {
      writer.uint32(426).string(message.scheme);
    }
    if (message.queryString !== "") {
      writer.uint32(434).string(message.queryString);
    }
    if (message.rawUrl !== "") {
      writer.uint32(442).string(message.rawUrl);
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(450).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HTTPRequestCompleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHTTPRequestCompleteEvent,
    } as HTTPRequestCompleteEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverHostname = reader.string();
          break;
        case 2:
          message.backendConnectionReuse = reader.bool();
          break;
        case 3:
          message.backendDialDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.basicAuthDecision = reader.int32() as any;
          break;
        case 5:
          message.basicAuthUser = OptString.decode(reader, reader.uint32());
          break;
        case 8:
          message.circuitBreakerDecision = reader.int32() as any;
          break;
        case 9:
          message.clientIp = reader.string();
          break;
        case 10:
          message.compressionAlgorithm = reader.int32() as any;
          break;
        case 11:
          message.bytesSavedFromCompression = OptInt64.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.connectionStartTs = Timestamp.decode(reader, reader.uint32());
          break;
        case 15:
          message.hostname = reader.string();
          break;
        case 16:
          message.httpVersion = reader.string();
          break;
        case 17:
          message.ipPolicyDecision = reader.int32() as any;
          break;
        case 18:
          message.ipPolicyMatchingRule = ID.decode(reader, reader.uint32());
          break;
        case 19:
          message.method = reader.string();
          break;
        case 20:
          message.ngrokConnectionId = reader.string();
          break;
        case 21:
          message.ngrokRequestId = reader.string();
          break;
        case 22:
          message.ngrokServerId = reader.string();
          break;
        case 23:
          message.ngrokServerIp = reader.string();
          break;
        case 57:
          message.ngrokServerPort = reader.int32();
          break;
        case 24:
          message.oauthAppClientId = OptString.decode(reader, reader.uint32());
          break;
        case 25:
          message.oauthUserAuthorized = reader.int32() as any;
          break;
        case 26:
          message.oauthUserId = OptString.decode(reader, reader.uint32());
          break;
        case 27:
          message.oauthUserName = OptString.decode(reader, reader.uint32());
          break;
        case 28:
          message.path = reader.string();
          break;
        case 29:
          message.requestBody = OptBytes.decode(reader, reader.uint32());
          break;
        case 30:
          message.requestBodySizeBytes = longToNumber(reader.int64() as Long);
          break;
        case 31:
          message.requestEndTs = Timestamp.decode(reader, reader.uint32());
          break;
        case 32:
          message.requestHeadersFront = Headers.decode(reader, reader.uint32());
          break;
        case 33:
          message.requestHeadersBack = Headers.decode(reader, reader.uint32());
          break;
        case 34:
          message.requestStartTs = Timestamp.decode(reader, reader.uint32());
          break;
        case 36:
          message.reservedDomainId = ID.decode(reader, reader.uint32());
          break;
        case 37:
          message.responseBody = OptBytes.decode(reader, reader.uint32());
          break;
        case 38:
          message.responseBodySizeBytes = longToNumber(reader.int64() as Long);
          break;
        case 39:
          message.responseEndTs = Timestamp.decode(reader, reader.uint32());
          break;
        case 40:
          message.responseHeadersBack = Headers.decode(reader, reader.uint32());
          break;
        case 41:
          message.responseHeadersFront = Headers.decode(
            reader,
            reader.uint32()
          );
          break;
        case 42:
          message.responseStartTs = Timestamp.decode(reader, reader.uint32());
          break;
        case 43:
          message.roundTripDuration = Duration.decode(reader, reader.uint32());
          break;
        case 44:
          message.statusCode = reader.int32();
          break;
        case 45:
          message.tlsCertificateId = ID.decode(reader, reader.uint32());
          break;
        case 46:
          message.tlsCipherSuite = OptString.decode(reader, reader.uint32());
          break;
        case 47:
          message.tlsClientCommonName = OptString.decode(
            reader,
            reader.uint32()
          );
          break;
        case 48:
          message.tlsClientSerialNumber = OptString.decode(
            reader,
            reader.uint32()
          );
          break;
        case 49:
          message.tlsVersion = OptString.decode(reader, reader.uint32());
          break;
        case 50:
          message.tunnelId = ID.decode(reader, reader.uint32());
          break;
        case 51:
          message.userAgent = reader.string();
          break;
        case 52:
          message.webhookSignatureVerificationDecision = reader.int32() as any;
          break;
        case 53:
          message.scheme = reader.string();
          break;
        case 54:
          message.queryString = reader.string();
          break;
        case 55:
          message.rawUrl = reader.string();
          break;
        case 56:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<HTTPRequestCompleteEvent>
  ): HTTPRequestCompleteEvent {
    const message = {
      ...baseHTTPRequestCompleteEvent,
    } as HTTPRequestCompleteEvent;
    if (object.serverHostname !== undefined && object.serverHostname !== null) {
      message.serverHostname = object.serverHostname;
    } else {
      message.serverHostname = "";
    }
    if (
      object.backendConnectionReuse !== undefined &&
      object.backendConnectionReuse !== null
    ) {
      message.backendConnectionReuse = object.backendConnectionReuse;
    } else {
      message.backendConnectionReuse = false;
    }
    if (
      object.backendDialDuration !== undefined &&
      object.backendDialDuration !== null
    ) {
      message.backendDialDuration = Duration.fromPartial(
        object.backendDialDuration
      );
    } else {
      message.backendDialDuration = undefined;
    }
    if (
      object.basicAuthDecision !== undefined &&
      object.basicAuthDecision !== null
    ) {
      message.basicAuthDecision = object.basicAuthDecision;
    } else {
      message.basicAuthDecision = 0;
    }
    if (object.basicAuthUser !== undefined && object.basicAuthUser !== null) {
      message.basicAuthUser = OptString.fromPartial(object.basicAuthUser);
    } else {
      message.basicAuthUser = undefined;
    }
    if (
      object.circuitBreakerDecision !== undefined &&
      object.circuitBreakerDecision !== null
    ) {
      message.circuitBreakerDecision = object.circuitBreakerDecision;
    } else {
      message.circuitBreakerDecision = 0;
    }
    if (object.clientIp !== undefined && object.clientIp !== null) {
      message.clientIp = object.clientIp;
    } else {
      message.clientIp = "";
    }
    if (
      object.compressionAlgorithm !== undefined &&
      object.compressionAlgorithm !== null
    ) {
      message.compressionAlgorithm = object.compressionAlgorithm;
    } else {
      message.compressionAlgorithm = 0;
    }
    if (
      object.bytesSavedFromCompression !== undefined &&
      object.bytesSavedFromCompression !== null
    ) {
      message.bytesSavedFromCompression = OptInt64.fromPartial(
        object.bytesSavedFromCompression
      );
    } else {
      message.bytesSavedFromCompression = undefined;
    }
    if (
      object.connectionStartTs !== undefined &&
      object.connectionStartTs !== null
    ) {
      message.connectionStartTs = Timestamp.fromPartial(
        object.connectionStartTs
      );
    } else {
      message.connectionStartTs = undefined;
    }
    if (object.hostname !== undefined && object.hostname !== null) {
      message.hostname = object.hostname;
    } else {
      message.hostname = "";
    }
    if (object.httpVersion !== undefined && object.httpVersion !== null) {
      message.httpVersion = object.httpVersion;
    } else {
      message.httpVersion = "";
    }
    if (
      object.ipPolicyDecision !== undefined &&
      object.ipPolicyDecision !== null
    ) {
      message.ipPolicyDecision = object.ipPolicyDecision;
    } else {
      message.ipPolicyDecision = 0;
    }
    if (
      object.ipPolicyMatchingRule !== undefined &&
      object.ipPolicyMatchingRule !== null
    ) {
      message.ipPolicyMatchingRule = ID.fromPartial(
        object.ipPolicyMatchingRule
      );
    } else {
      message.ipPolicyMatchingRule = undefined;
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    } else {
      message.method = "";
    }
    if (
      object.ngrokConnectionId !== undefined &&
      object.ngrokConnectionId !== null
    ) {
      message.ngrokConnectionId = object.ngrokConnectionId;
    } else {
      message.ngrokConnectionId = "";
    }
    if (object.ngrokRequestId !== undefined && object.ngrokRequestId !== null) {
      message.ngrokRequestId = object.ngrokRequestId;
    } else {
      message.ngrokRequestId = "";
    }
    if (object.ngrokServerId !== undefined && object.ngrokServerId !== null) {
      message.ngrokServerId = object.ngrokServerId;
    } else {
      message.ngrokServerId = "";
    }
    if (object.ngrokServerIp !== undefined && object.ngrokServerIp !== null) {
      message.ngrokServerIp = object.ngrokServerIp;
    } else {
      message.ngrokServerIp = "";
    }
    if (
      object.ngrokServerPort !== undefined &&
      object.ngrokServerPort !== null
    ) {
      message.ngrokServerPort = object.ngrokServerPort;
    } else {
      message.ngrokServerPort = 0;
    }
    if (
      object.oauthAppClientId !== undefined &&
      object.oauthAppClientId !== null
    ) {
      message.oauthAppClientId = OptString.fromPartial(object.oauthAppClientId);
    } else {
      message.oauthAppClientId = undefined;
    }
    if (
      object.oauthUserAuthorized !== undefined &&
      object.oauthUserAuthorized !== null
    ) {
      message.oauthUserAuthorized = object.oauthUserAuthorized;
    } else {
      message.oauthUserAuthorized = 0;
    }
    if (object.oauthUserId !== undefined && object.oauthUserId !== null) {
      message.oauthUserId = OptString.fromPartial(object.oauthUserId);
    } else {
      message.oauthUserId = undefined;
    }
    if (object.oauthUserName !== undefined && object.oauthUserName !== null) {
      message.oauthUserName = OptString.fromPartial(object.oauthUserName);
    } else {
      message.oauthUserName = undefined;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = "";
    }
    if (object.requestBody !== undefined && object.requestBody !== null) {
      message.requestBody = OptBytes.fromPartial(object.requestBody);
    } else {
      message.requestBody = undefined;
    }
    if (
      object.requestBodySizeBytes !== undefined &&
      object.requestBodySizeBytes !== null
    ) {
      message.requestBodySizeBytes = object.requestBodySizeBytes;
    } else {
      message.requestBodySizeBytes = 0;
    }
    if (object.requestEndTs !== undefined && object.requestEndTs !== null) {
      message.requestEndTs = Timestamp.fromPartial(object.requestEndTs);
    } else {
      message.requestEndTs = undefined;
    }
    if (
      object.requestHeadersFront !== undefined &&
      object.requestHeadersFront !== null
    ) {
      message.requestHeadersFront = Headers.fromPartial(
        object.requestHeadersFront
      );
    } else {
      message.requestHeadersFront = undefined;
    }
    if (
      object.requestHeadersBack !== undefined &&
      object.requestHeadersBack !== null
    ) {
      message.requestHeadersBack = Headers.fromPartial(
        object.requestHeadersBack
      );
    } else {
      message.requestHeadersBack = undefined;
    }
    if (object.requestStartTs !== undefined && object.requestStartTs !== null) {
      message.requestStartTs = Timestamp.fromPartial(object.requestStartTs);
    } else {
      message.requestStartTs = undefined;
    }
    if (
      object.reservedDomainId !== undefined &&
      object.reservedDomainId !== null
    ) {
      message.reservedDomainId = ID.fromPartial(object.reservedDomainId);
    } else {
      message.reservedDomainId = undefined;
    }
    if (object.responseBody !== undefined && object.responseBody !== null) {
      message.responseBody = OptBytes.fromPartial(object.responseBody);
    } else {
      message.responseBody = undefined;
    }
    if (
      object.responseBodySizeBytes !== undefined &&
      object.responseBodySizeBytes !== null
    ) {
      message.responseBodySizeBytes = object.responseBodySizeBytes;
    } else {
      message.responseBodySizeBytes = 0;
    }
    if (object.responseEndTs !== undefined && object.responseEndTs !== null) {
      message.responseEndTs = Timestamp.fromPartial(object.responseEndTs);
    } else {
      message.responseEndTs = undefined;
    }
    if (
      object.responseHeadersBack !== undefined &&
      object.responseHeadersBack !== null
    ) {
      message.responseHeadersBack = Headers.fromPartial(
        object.responseHeadersBack
      );
    } else {
      message.responseHeadersBack = undefined;
    }
    if (
      object.responseHeadersFront !== undefined &&
      object.responseHeadersFront !== null
    ) {
      message.responseHeadersFront = Headers.fromPartial(
        object.responseHeadersFront
      );
    } else {
      message.responseHeadersFront = undefined;
    }
    if (
      object.responseStartTs !== undefined &&
      object.responseStartTs !== null
    ) {
      message.responseStartTs = Timestamp.fromPartial(object.responseStartTs);
    } else {
      message.responseStartTs = undefined;
    }
    if (
      object.roundTripDuration !== undefined &&
      object.roundTripDuration !== null
    ) {
      message.roundTripDuration = Duration.fromPartial(
        object.roundTripDuration
      );
    } else {
      message.roundTripDuration = undefined;
    }
    if (object.statusCode !== undefined && object.statusCode !== null) {
      message.statusCode = object.statusCode;
    } else {
      message.statusCode = 0;
    }
    if (
      object.tlsCertificateId !== undefined &&
      object.tlsCertificateId !== null
    ) {
      message.tlsCertificateId = ID.fromPartial(object.tlsCertificateId);
    } else {
      message.tlsCertificateId = undefined;
    }
    if (object.tlsCipherSuite !== undefined && object.tlsCipherSuite !== null) {
      message.tlsCipherSuite = OptString.fromPartial(object.tlsCipherSuite);
    } else {
      message.tlsCipherSuite = undefined;
    }
    if (
      object.tlsClientCommonName !== undefined &&
      object.tlsClientCommonName !== null
    ) {
      message.tlsClientCommonName = OptString.fromPartial(
        object.tlsClientCommonName
      );
    } else {
      message.tlsClientCommonName = undefined;
    }
    if (
      object.tlsClientSerialNumber !== undefined &&
      object.tlsClientSerialNumber !== null
    ) {
      message.tlsClientSerialNumber = OptString.fromPartial(
        object.tlsClientSerialNumber
      );
    } else {
      message.tlsClientSerialNumber = undefined;
    }
    if (object.tlsVersion !== undefined && object.tlsVersion !== null) {
      message.tlsVersion = OptString.fromPartial(object.tlsVersion);
    } else {
      message.tlsVersion = undefined;
    }
    if (object.tunnelId !== undefined && object.tunnelId !== null) {
      message.tunnelId = ID.fromPartial(object.tunnelId);
    } else {
      message.tunnelId = undefined;
    }
    if (object.userAgent !== undefined && object.userAgent !== null) {
      message.userAgent = object.userAgent;
    } else {
      message.userAgent = "";
    }
    if (
      object.webhookSignatureVerificationDecision !== undefined &&
      object.webhookSignatureVerificationDecision !== null
    ) {
      message.webhookSignatureVerificationDecision =
        object.webhookSignatureVerificationDecision;
    } else {
      message.webhookSignatureVerificationDecision = 0;
    }
    if (object.scheme !== undefined && object.scheme !== null) {
      message.scheme = object.scheme;
    } else {
      message.scheme = "";
    }
    if (object.queryString !== undefined && object.queryString !== null) {
      message.queryString = object.queryString;
    } else {
      message.queryString = "";
    }
    if (object.rawUrl !== undefined && object.rawUrl !== null) {
      message.rawUrl = object.rawUrl;
    } else {
      message.rawUrl = "";
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseTCPConnectionClosedEvent: object = {
  serverHostname: "",
  bytesIn: 0,
  bytesOut: 0,
  clientIp: "",
  ipPolicyDecision: 0,
  ngrokConnectionId: "",
  ngrokServerId: "",
  ngrokServerIp: "",
  ngrokServerPort: 0,
};

export const TCPConnectionClosedEvent = {
  encode(
    message: TCPConnectionClosedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serverHostname !== "") {
      writer.uint32(10).string(message.serverHostname);
    }
    if (message.backendDialDuration !== undefined) {
      Duration.encode(
        message.backendDialDuration,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.bytesIn !== 0) {
      writer.uint32(48).int64(message.bytesIn);
    }
    if (message.bytesOut !== 0) {
      writer.uint32(56).int64(message.bytesOut);
    }
    if (message.clientIp !== "") {
      writer.uint32(74).string(message.clientIp);
    }
    if (message.connectionDuration !== undefined) {
      Duration.encode(
        message.connectionDuration,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.connectionEndTs !== undefined) {
      Timestamp.encode(
        message.connectionEndTs,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.connectionStartTs !== undefined) {
      Timestamp.encode(
        message.connectionStartTs,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.ipPolicyDecision !== 0) {
      writer.uint32(136).int32(message.ipPolicyDecision);
    }
    if (message.ipPolicyMatchingRule !== undefined) {
      ID.encode(
        message.ipPolicyMatchingRule,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.ngrokConnectionId !== "") {
      writer.uint32(162).string(message.ngrokConnectionId);
    }
    if (message.ngrokServerId !== "") {
      writer.uint32(178).string(message.ngrokServerId);
    }
    if (message.ngrokServerIp !== "") {
      writer.uint32(186).string(message.ngrokServerIp);
    }
    if (message.ngrokServerPort !== 0) {
      writer.uint32(456).int32(message.ngrokServerPort);
    }
    if (message.reservedAddrId !== undefined) {
      ID.encode(message.reservedAddrId, writer.uint32(282).fork()).ldelim();
    }
    if (message.tunnelId !== undefined) {
      ID.encode(message.tunnelId, writer.uint32(402).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(450).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TCPConnectionClosedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTCPConnectionClosedEvent,
    } as TCPConnectionClosedEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverHostname = reader.string();
          break;
        case 3:
          message.backendDialDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.bytesIn = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.bytesOut = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.clientIp = reader.string();
          break;
        case 12:
          message.connectionDuration = Duration.decode(reader, reader.uint32());
          break;
        case 13:
          message.connectionEndTs = Timestamp.decode(reader, reader.uint32());
          break;
        case 14:
          message.connectionStartTs = Timestamp.decode(reader, reader.uint32());
          break;
        case 17:
          message.ipPolicyDecision = reader.int32() as any;
          break;
        case 18:
          message.ipPolicyMatchingRule = ID.decode(reader, reader.uint32());
          break;
        case 20:
          message.ngrokConnectionId = reader.string();
          break;
        case 22:
          message.ngrokServerId = reader.string();
          break;
        case 23:
          message.ngrokServerIp = reader.string();
          break;
        case 57:
          message.ngrokServerPort = reader.int32();
          break;
        case 35:
          message.reservedAddrId = ID.decode(reader, reader.uint32());
          break;
        case 50:
          message.tunnelId = ID.decode(reader, reader.uint32());
          break;
        case 56:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<TCPConnectionClosedEvent>
  ): TCPConnectionClosedEvent {
    const message = {
      ...baseTCPConnectionClosedEvent,
    } as TCPConnectionClosedEvent;
    if (object.serverHostname !== undefined && object.serverHostname !== null) {
      message.serverHostname = object.serverHostname;
    } else {
      message.serverHostname = "";
    }
    if (
      object.backendDialDuration !== undefined &&
      object.backendDialDuration !== null
    ) {
      message.backendDialDuration = Duration.fromPartial(
        object.backendDialDuration
      );
    } else {
      message.backendDialDuration = undefined;
    }
    if (object.bytesIn !== undefined && object.bytesIn !== null) {
      message.bytesIn = object.bytesIn;
    } else {
      message.bytesIn = 0;
    }
    if (object.bytesOut !== undefined && object.bytesOut !== null) {
      message.bytesOut = object.bytesOut;
    } else {
      message.bytesOut = 0;
    }
    if (object.clientIp !== undefined && object.clientIp !== null) {
      message.clientIp = object.clientIp;
    } else {
      message.clientIp = "";
    }
    if (
      object.connectionDuration !== undefined &&
      object.connectionDuration !== null
    ) {
      message.connectionDuration = Duration.fromPartial(
        object.connectionDuration
      );
    } else {
      message.connectionDuration = undefined;
    }
    if (
      object.connectionEndTs !== undefined &&
      object.connectionEndTs !== null
    ) {
      message.connectionEndTs = Timestamp.fromPartial(object.connectionEndTs);
    } else {
      message.connectionEndTs = undefined;
    }
    if (
      object.connectionStartTs !== undefined &&
      object.connectionStartTs !== null
    ) {
      message.connectionStartTs = Timestamp.fromPartial(
        object.connectionStartTs
      );
    } else {
      message.connectionStartTs = undefined;
    }
    if (
      object.ipPolicyDecision !== undefined &&
      object.ipPolicyDecision !== null
    ) {
      message.ipPolicyDecision = object.ipPolicyDecision;
    } else {
      message.ipPolicyDecision = 0;
    }
    if (
      object.ipPolicyMatchingRule !== undefined &&
      object.ipPolicyMatchingRule !== null
    ) {
      message.ipPolicyMatchingRule = ID.fromPartial(
        object.ipPolicyMatchingRule
      );
    } else {
      message.ipPolicyMatchingRule = undefined;
    }
    if (
      object.ngrokConnectionId !== undefined &&
      object.ngrokConnectionId !== null
    ) {
      message.ngrokConnectionId = object.ngrokConnectionId;
    } else {
      message.ngrokConnectionId = "";
    }
    if (object.ngrokServerId !== undefined && object.ngrokServerId !== null) {
      message.ngrokServerId = object.ngrokServerId;
    } else {
      message.ngrokServerId = "";
    }
    if (object.ngrokServerIp !== undefined && object.ngrokServerIp !== null) {
      message.ngrokServerIp = object.ngrokServerIp;
    } else {
      message.ngrokServerIp = "";
    }
    if (
      object.ngrokServerPort !== undefined &&
      object.ngrokServerPort !== null
    ) {
      message.ngrokServerPort = object.ngrokServerPort;
    } else {
      message.ngrokServerPort = 0;
    }
    if (object.reservedAddrId !== undefined && object.reservedAddrId !== null) {
      message.reservedAddrId = ID.fromPartial(object.reservedAddrId);
    } else {
      message.reservedAddrId = undefined;
    }
    if (object.tunnelId !== undefined && object.tunnelId !== null) {
      message.tunnelId = ID.fromPartial(object.tunnelId);
    } else {
      message.tunnelId = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseTestEvent: object = {};

export const TestEvent = {
  encode(_: TestEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestEvent } as TestEvent;
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

  fromPartial(_: DeepPartial<TestEvent>): TestEvent {
    const message = { ...baseTestEvent } as TestEvent;
    return message;
  },
};

const baseEventStreamPublishReport: object = {
  messageCount: 0,
  errorCount: 0,
  lastError: "",
};

export const EventStreamPublishReport = {
  encode(
    message: EventStreamPublishReport,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subscriptionId !== undefined) {
      ID.encode(message.subscriptionId, writer.uint32(10).fork()).ldelim();
    }
    if (message.destinationId !== undefined) {
      ID.encode(message.destinationId, writer.uint32(18).fork()).ldelim();
    }
    if (message.reportStartsAt !== undefined) {
      Timestamp.encode(
        message.reportStartsAt,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.reportEndsAt !== undefined) {
      Timestamp.encode(message.reportEndsAt, writer.uint32(34).fork()).ldelim();
    }
    if (message.messageCount !== 0) {
      writer.uint32(40).int64(message.messageCount);
    }
    if (message.errorCount !== 0) {
      writer.uint32(48).int64(message.errorCount);
    }
    if (message.lastError !== "") {
      writer.uint32(58).string(message.lastError);
    }
    if (message.lastErrorAt !== undefined) {
      Timestamp.encode(message.lastErrorAt, writer.uint32(66).fork()).ldelim();
    }
    if (message.lastSuccessAt !== undefined) {
      Timestamp.encode(
        message.lastSuccessAt,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventStreamPublishReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventStreamPublishReport,
    } as EventStreamPublishReport;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionId = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.destinationId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.reportStartsAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.reportEndsAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.messageCount = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.errorCount = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.lastError = reader.string();
          break;
        case 8:
          message.lastErrorAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.lastSuccessAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EventStreamPublishReport>
  ): EventStreamPublishReport {
    const message = {
      ...baseEventStreamPublishReport,
    } as EventStreamPublishReport;
    if (object.subscriptionId !== undefined && object.subscriptionId !== null) {
      message.subscriptionId = ID.fromPartial(object.subscriptionId);
    } else {
      message.subscriptionId = undefined;
    }
    if (object.destinationId !== undefined && object.destinationId !== null) {
      message.destinationId = ID.fromPartial(object.destinationId);
    } else {
      message.destinationId = undefined;
    }
    if (object.reportStartsAt !== undefined && object.reportStartsAt !== null) {
      message.reportStartsAt = Timestamp.fromPartial(object.reportStartsAt);
    } else {
      message.reportStartsAt = undefined;
    }
    if (object.reportEndsAt !== undefined && object.reportEndsAt !== null) {
      message.reportEndsAt = Timestamp.fromPartial(object.reportEndsAt);
    } else {
      message.reportEndsAt = undefined;
    }
    if (object.messageCount !== undefined && object.messageCount !== null) {
      message.messageCount = object.messageCount;
    } else {
      message.messageCount = 0;
    }
    if (object.errorCount !== undefined && object.errorCount !== null) {
      message.errorCount = object.errorCount;
    } else {
      message.errorCount = 0;
    }
    if (object.lastError !== undefined && object.lastError !== null) {
      message.lastError = object.lastError;
    } else {
      message.lastError = "";
    }
    if (object.lastErrorAt !== undefined && object.lastErrorAt !== null) {
      message.lastErrorAt = Timestamp.fromPartial(object.lastErrorAt);
    } else {
      message.lastErrorAt = undefined;
    }
    if (object.lastSuccessAt !== undefined && object.lastSuccessAt !== null) {
      message.lastSuccessAt = Timestamp.fromPartial(object.lastSuccessAt);
    } else {
      message.lastSuccessAt = undefined;
    }
    return message;
  },
};

const baseOptEventFields: object = { val: 0 };

export const OptEventFields = {
  encode(
    message: OptEventFields,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.val) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptEventFields {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptEventFields } as OptEventFields;
    message.val = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.val.push(reader.int32() as any);
            }
          } else {
            message.val.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OptEventFields>): OptEventFields {
    const message = { ...baseOptEventFields } as OptEventFields;
    message.val = [];
    if (object.val !== undefined && object.val !== null) {
      for (const e of object.val) {
        message.val.push(e);
      }
    }
    return message;
  },
};

const baseEventStream: object = {
  accountId: 0,
  metadata: "",
  description: "",
  eventType: 0,
  fields: 0,
  samplingRate: 0,
};

export const EventStream = {
  encode(
    message: EventStream,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(16).int64(message.accountId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.eventType !== 0) {
      writer.uint32(48).int32(message.eventType);
    }
    for (const v of message.destinationIds) {
      ID.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(66).fork();
    for (const v of message.fields) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.samplingRate !== 0) {
      writer.uint32(73).double(message.samplingRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStream {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventStream } as EventStream;
    message.destinationIds = [];
    message.fields = [];
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
          message.metadata = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.eventType = reader.int32() as any;
          break;
        case 7:
          message.destinationIds.push(ID.decode(reader, reader.uint32()));
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fields.push(reader.int32() as any);
            }
          } else {
            message.fields.push(reader.int32() as any);
          }
          break;
        case 9:
          message.samplingRate = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventStream>): EventStream {
    const message = { ...baseEventStream } as EventStream;
    message.destinationIds = [];
    message.fields = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.eventType !== undefined && object.eventType !== null) {
      message.eventType = object.eventType;
    } else {
      message.eventType = 0;
    }
    if (object.destinationIds !== undefined && object.destinationIds !== null) {
      for (const e of object.destinationIds) {
        message.destinationIds.push(ID.fromPartial(e));
      }
    }
    if (object.fields !== undefined && object.fields !== null) {
      for (const e of object.fields) {
        message.fields.push(e);
      }
    }
    if (object.samplingRate !== undefined && object.samplingRate !== null) {
      message.samplingRate = object.samplingRate;
    } else {
      message.samplingRate = 0;
    }
    return message;
  },
};

const baseEventDestination: object = {
  accountId: 0,
  metadata: "",
  description: "",
  format: 0,
  enabled: false,
};

export const EventDestination = {
  encode(
    message: EventDestination,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountKsuid !== undefined) {
      ID.encode(message.accountKsuid, writer.uint32(82).fork()).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(16).int64(message.accountId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.format !== 0) {
      writer.uint32(48).int32(message.format);
    }
    if (message.enabled === true) {
      writer.uint32(56).bool(message.enabled);
    }
    if (message.target !== undefined) {
      EventTarget.encode(message.target, writer.uint32(66).fork()).ldelim();
    }
    if (message.report !== undefined) {
      EventDestination_Report.encode(
        message.report,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDestination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventDestination } as EventDestination;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 10:
          message.accountKsuid = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.format = reader.int32() as any;
          break;
        case 7:
          message.enabled = reader.bool();
          break;
        case 8:
          message.target = EventTarget.decode(reader, reader.uint32());
          break;
        case 9:
          message.report = EventDestination_Report.decode(
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

  fromPartial(object: DeepPartial<EventDestination>): EventDestination {
    const message = { ...baseEventDestination } as EventDestination;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.accountKsuid !== undefined && object.accountKsuid !== null) {
      message.accountKsuid = ID.fromPartial(object.accountKsuid);
    } else {
      message.accountKsuid = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    } else {
      message.format = 0;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = EventTarget.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    if (object.report !== undefined && object.report !== null) {
      message.report = EventDestination_Report.fromPartial(object.report);
    } else {
      message.report = undefined;
    }
    return message;
  },
};

const baseEventDestination_Report: object = {
  messageCount: 0,
  errorCount: 0,
  lastErrors: "",
};

export const EventDestination_Report = {
  encode(
    message: EventDestination_Report,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageCount !== 0) {
      writer.uint32(8).int64(message.messageCount);
    }
    if (message.errorCount !== 0) {
      writer.uint32(16).int64(message.errorCount);
    }
    for (const v of message.lastErrors) {
      writer.uint32(26).string(v!);
    }
    if (message.start !== undefined) {
      Timestamp.encode(message.start, writer.uint32(34).fork()).ldelim();
    }
    if (message.end !== undefined) {
      Timestamp.encode(message.end, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventDestination_Report {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventDestination_Report,
    } as EventDestination_Report;
    message.lastErrors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageCount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.errorCount = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.lastErrors.push(reader.string());
          break;
        case 4:
          message.start = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.end = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EventDestination_Report>
  ): EventDestination_Report {
    const message = {
      ...baseEventDestination_Report,
    } as EventDestination_Report;
    message.lastErrors = [];
    if (object.messageCount !== undefined && object.messageCount !== null) {
      message.messageCount = object.messageCount;
    } else {
      message.messageCount = 0;
    }
    if (object.errorCount !== undefined && object.errorCount !== null) {
      message.errorCount = object.errorCount;
    } else {
      message.errorCount = 0;
    }
    if (object.lastErrors !== undefined && object.lastErrors !== null) {
      for (const e of object.lastErrors) {
        message.lastErrors.push(e);
      }
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Timestamp.fromPartial(object.start);
    } else {
      message.start = undefined;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Timestamp.fromPartial(object.end);
    } else {
      message.end = undefined;
    }
    return message;
  },
};

const baseEventTarget: object = {};

export const EventTarget = {
  encode(
    message: EventTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.firehose !== undefined) {
      EventTarget_Firehose.encode(
        message.firehose,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.kinesis !== undefined) {
      EventTarget_Kinesis.encode(
        message.kinesis,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.cloudwatchLogs !== undefined) {
      EventTarget_CloudwatchLogs.encode(
        message.cloudwatchLogs,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.debug !== undefined) {
      EventTarget_Debug.encode(
        message.debug,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventTarget } as EventTarget;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.firehose = EventTarget_Firehose.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.kinesis = EventTarget_Kinesis.decode(reader, reader.uint32());
          break;
        case 3:
          message.cloudwatchLogs = EventTarget_CloudwatchLogs.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.debug = EventTarget_Debug.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventTarget>): EventTarget {
    const message = { ...baseEventTarget } as EventTarget;
    if (object.firehose !== undefined && object.firehose !== null) {
      message.firehose = EventTarget_Firehose.fromPartial(object.firehose);
    } else {
      message.firehose = undefined;
    }
    if (object.kinesis !== undefined && object.kinesis !== null) {
      message.kinesis = EventTarget_Kinesis.fromPartial(object.kinesis);
    } else {
      message.kinesis = undefined;
    }
    if (object.cloudwatchLogs !== undefined && object.cloudwatchLogs !== null) {
      message.cloudwatchLogs = EventTarget_CloudwatchLogs.fromPartial(
        object.cloudwatchLogs
      );
    } else {
      message.cloudwatchLogs = undefined;
    }
    if (object.debug !== undefined && object.debug !== null) {
      message.debug = EventTarget_Debug.fromPartial(object.debug);
    } else {
      message.debug = undefined;
    }
    return message;
  },
};

const baseEventTarget_Firehose: object = { deliveryStreamArn: "" };

export const EventTarget_Firehose = {
  encode(
    message: EventTarget_Firehose,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auth !== undefined) {
      AWSAuth.encode(message.auth, writer.uint32(10).fork()).ldelim();
    }
    if (message.deliveryStreamArn !== "") {
      writer.uint32(18).string(message.deliveryStreamArn);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventTarget_Firehose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventTarget_Firehose } as EventTarget_Firehose;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auth = AWSAuth.decode(reader, reader.uint32());
          break;
        case 2:
          message.deliveryStreamArn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventTarget_Firehose>): EventTarget_Firehose {
    const message = { ...baseEventTarget_Firehose } as EventTarget_Firehose;
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = AWSAuth.fromPartial(object.auth);
    } else {
      message.auth = undefined;
    }
    if (
      object.deliveryStreamArn !== undefined &&
      object.deliveryStreamArn !== null
    ) {
      message.deliveryStreamArn = object.deliveryStreamArn;
    } else {
      message.deliveryStreamArn = "";
    }
    return message;
  },
};

const baseEventTarget_Kinesis: object = { streamArn: "" };

export const EventTarget_Kinesis = {
  encode(
    message: EventTarget_Kinesis,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auth !== undefined) {
      AWSAuth.encode(message.auth, writer.uint32(10).fork()).ldelim();
    }
    if (message.streamArn !== "") {
      writer.uint32(18).string(message.streamArn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTarget_Kinesis {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventTarget_Kinesis } as EventTarget_Kinesis;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auth = AWSAuth.decode(reader, reader.uint32());
          break;
        case 2:
          message.streamArn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventTarget_Kinesis>): EventTarget_Kinesis {
    const message = { ...baseEventTarget_Kinesis } as EventTarget_Kinesis;
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = AWSAuth.fromPartial(object.auth);
    } else {
      message.auth = undefined;
    }
    if (object.streamArn !== undefined && object.streamArn !== null) {
      message.streamArn = object.streamArn;
    } else {
      message.streamArn = "";
    }
    return message;
  },
};

const baseEventTarget_CloudwatchLogs: object = { logGroupArn: "" };

export const EventTarget_CloudwatchLogs = {
  encode(
    message: EventTarget_CloudwatchLogs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auth !== undefined) {
      AWSAuth.encode(message.auth, writer.uint32(10).fork()).ldelim();
    }
    if (message.logGroupArn !== "") {
      writer.uint32(18).string(message.logGroupArn);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventTarget_CloudwatchLogs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventTarget_CloudwatchLogs,
    } as EventTarget_CloudwatchLogs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auth = AWSAuth.decode(reader, reader.uint32());
          break;
        case 2:
          message.logGroupArn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EventTarget_CloudwatchLogs>
  ): EventTarget_CloudwatchLogs {
    const message = {
      ...baseEventTarget_CloudwatchLogs,
    } as EventTarget_CloudwatchLogs;
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = AWSAuth.fromPartial(object.auth);
    } else {
      message.auth = undefined;
    }
    if (object.logGroupArn !== undefined && object.logGroupArn !== null) {
      message.logGroupArn = object.logGroupArn;
    } else {
      message.logGroupArn = "";
    }
    return message;
  },
};

const baseEventTarget_S3: object = {
  bucketArn: "",
  objectPrefix: "",
  compression: false,
  maxFileSize: 0,
  maxFileAge: 0,
};

export const EventTarget_S3 = {
  encode(
    message: EventTarget_S3,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auth !== undefined) {
      AWSAuth.encode(message.auth, writer.uint32(10).fork()).ldelim();
    }
    if (message.bucketArn !== "") {
      writer.uint32(18).string(message.bucketArn);
    }
    if (message.objectPrefix !== "") {
      writer.uint32(26).string(message.objectPrefix);
    }
    if (message.compression === true) {
      writer.uint32(32).bool(message.compression);
    }
    if (message.maxFileSize !== 0) {
      writer.uint32(40).int64(message.maxFileSize);
    }
    if (message.maxFileAge !== 0) {
      writer.uint32(48).int64(message.maxFileAge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTarget_S3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventTarget_S3 } as EventTarget_S3;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auth = AWSAuth.decode(reader, reader.uint32());
          break;
        case 2:
          message.bucketArn = reader.string();
          break;
        case 3:
          message.objectPrefix = reader.string();
          break;
        case 4:
          message.compression = reader.bool();
          break;
        case 5:
          message.maxFileSize = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.maxFileAge = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventTarget_S3>): EventTarget_S3 {
    const message = { ...baseEventTarget_S3 } as EventTarget_S3;
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = AWSAuth.fromPartial(object.auth);
    } else {
      message.auth = undefined;
    }
    if (object.bucketArn !== undefined && object.bucketArn !== null) {
      message.bucketArn = object.bucketArn;
    } else {
      message.bucketArn = "";
    }
    if (object.objectPrefix !== undefined && object.objectPrefix !== null) {
      message.objectPrefix = object.objectPrefix;
    } else {
      message.objectPrefix = "";
    }
    if (object.compression !== undefined && object.compression !== null) {
      message.compression = object.compression;
    } else {
      message.compression = false;
    }
    if (object.maxFileSize !== undefined && object.maxFileSize !== null) {
      message.maxFileSize = object.maxFileSize;
    } else {
      message.maxFileSize = 0;
    }
    if (object.maxFileAge !== undefined && object.maxFileAge !== null) {
      message.maxFileAge = object.maxFileAge;
    } else {
      message.maxFileAge = 0;
    }
    return message;
  },
};

const baseEventTarget_Debug: object = { log: false, callbackUrl: "" };

export const EventTarget_Debug = {
  encode(
    message: EventTarget_Debug,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.log === true) {
      writer.uint32(8).bool(message.log);
    }
    if (message.callbackUrl !== "") {
      writer.uint32(18).string(message.callbackUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTarget_Debug {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventTarget_Debug } as EventTarget_Debug;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.bool();
          break;
        case 2:
          message.callbackUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventTarget_Debug>): EventTarget_Debug {
    const message = { ...baseEventTarget_Debug } as EventTarget_Debug;
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    } else {
      message.log = false;
    }
    if (object.callbackUrl !== undefined && object.callbackUrl !== null) {
      message.callbackUrl = object.callbackUrl;
    } else {
      message.callbackUrl = "";
    }
    return message;
  },
};

const baseAWSAuth: object = {};

export const AWSAuth = {
  encode(
    message: AWSAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.role !== undefined) {
      AWSAuth_Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    if (message.creds !== undefined) {
      AWSAuth_Credentials.encode(
        message.creds,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AWSAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAWSAuth } as AWSAuth;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = AWSAuth_Role.decode(reader, reader.uint32());
          break;
        case 2:
          message.creds = AWSAuth_Credentials.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AWSAuth>): AWSAuth {
    const message = { ...baseAWSAuth } as AWSAuth;
    if (object.role !== undefined && object.role !== null) {
      message.role = AWSAuth_Role.fromPartial(object.role);
    } else {
      message.role = undefined;
    }
    if (object.creds !== undefined && object.creds !== null) {
      message.creds = AWSAuth_Credentials.fromPartial(object.creds);
    } else {
      message.creds = undefined;
    }
    return message;
  },
};

const baseAWSAuth_Role: object = { roleArn: "", externalId: "" };

export const AWSAuth_Role = {
  encode(
    message: AWSAuth_Role,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleArn !== "") {
      writer.uint32(10).string(message.roleArn);
    }
    if (message.externalId !== "") {
      writer.uint32(18).string(message.externalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AWSAuth_Role {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAWSAuth_Role } as AWSAuth_Role;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleArn = reader.string();
          break;
        case 2:
          message.externalId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AWSAuth_Role>): AWSAuth_Role {
    const message = { ...baseAWSAuth_Role } as AWSAuth_Role;
    if (object.roleArn !== undefined && object.roleArn !== null) {
      message.roleArn = object.roleArn;
    } else {
      message.roleArn = "";
    }
    if (object.externalId !== undefined && object.externalId !== null) {
      message.externalId = object.externalId;
    } else {
      message.externalId = "";
    }
    return message;
  },
};

const baseAWSAuth_Credentials: object = {};

export const AWSAuth_Credentials = {
  encode(
    message: AWSAuth_Credentials,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.awsAccessKeyId.length !== 0) {
      writer.uint32(26).bytes(message.awsAccessKeyId);
    }
    if (message.awsSecretAccessKey.length !== 0) {
      writer.uint32(34).bytes(message.awsSecretAccessKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AWSAuth_Credentials {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAWSAuth_Credentials } as AWSAuth_Credentials;
    message.awsAccessKeyId = new Uint8Array();
    message.awsSecretAccessKey = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.awsAccessKeyId = reader.bytes();
          break;
        case 4:
          message.awsSecretAccessKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AWSAuth_Credentials>): AWSAuth_Credentials {
    const message = { ...baseAWSAuth_Credentials } as AWSAuth_Credentials;
    if (object.awsAccessKeyId !== undefined && object.awsAccessKeyId !== null) {
      message.awsAccessKeyId = object.awsAccessKeyId;
    } else {
      message.awsAccessKeyId = new Uint8Array();
    }
    if (
      object.awsSecretAccessKey !== undefined &&
      object.awsSecretAccessKey !== null
    ) {
      message.awsSecretAccessKey = object.awsSecretAccessKey;
    } else {
      message.awsSecretAccessKey = new Uint8Array();
    }
    return message;
  },
};

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
