// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EventType, EventField } from "../rpx/model_evstream";
import { HTTPSEdge_Route_Selector_Type } from "../rpx/model_edges";
import { Timestamp, Duration, ID } from "../pb/types";
import { EnrichedError } from "../pb/enriched_error";
import { EventSubscription } from "../rpx/model_evsub";
import { TLSConfig_ServerConfig, TLSConfig_ClientConfig } from "../rpx/tls";
import { CheckedExpr } from "../google/api/expr/v1alpha1/checked";

export const protobufPackage = "rpx";

/**
 * ----------------------------
 * Network Middleware Handlers
 * ----------------------------
 */
export interface Handler {
  /**
   * ANY
   * LeastInflight least_inflight = 101;
   */
  roundRobin: RoundRobin | undefined;
  ipFilter: IPFilter | undefined;
  abort: Abort | undefined;
  idleTimeout: Handler_Any_IdleTimeout | undefined;
  handlerTimeout: Handler_Any_HandlerTimeout | undefined;
  ngrokInternalFilter: Handler_Any_NgrokInternalFilter | undefined;
  muxTerm: Handler_Any_MuxTerm | undefined;
  httpFixedResponse: Handler_Any_HTTPFixedResponse | undefined;
  ngrokMetering: Handler_Any_NgrokMetering | undefined;
  errorResponse: Handler_Any_ErrorResponse | undefined;
  logging: Handler_Any_Logging | undefined;
  backend: Handler_Any_Backend | undefined;
  failover: Handler_Any_Failover | undefined;
  /** TODO(alan): this is deprecated, delete once it is in master */
  ngrokMetrics: Handler_Any_NgrokMetrics | undefined;
  weighted: Handler_Any_Weighted | undefined;
  /** TCP */
  tcpTls: Handler_TCP_TLS | undefined;
  tcpAccept: Handler_TCP_Accept | undefined;
  /** HTTP */
  httpStart: Handler_HTTP_Start | undefined;
  httpFileSystem: Handler_HTTP_FileSystem | undefined;
  httpBasicAuth: Handler_HTTP_BasicAuth | undefined;
  httpRequestHeaders: Handler_HTTP_RequestHeaders | undefined;
  httpResponseHeaders: Handler_HTTP_ResponseHeaders | undefined;
  httpCompress: Handler_HTTP_Compress | undefined;
  httpWebhookValidation: Handler_HTTP_WebhookValidation | undefined;
  httpCircuitBreaker: Handler_HTTP_CircuitBreaker | undefined;
  httpMux: Handler_HTTP_Mux | undefined;
  httpMaxBodySize: Handler_HTTP_MaxBodySize | undefined;
  httpSession: Handler_HTTP_UserSession | undefined;
  httpNgrokAcmeRedirect: Handler_HTTP_NgrokACMERedirect | undefined;
  httpFederatedAuth: Handler_HTTP_FederatedAuth | undefined;
  httpLegacyBasicAuth: Handler_HTTP_LegacyBasicAuth | undefined;
  httpNotFound: Handler_HTTP_NotFound | undefined;
  contentBanFilter: Handler_HTTP_ContentBanFilter | undefined;
  /** deprecated, use HTTP.Match */
  ifHeader: Handler_HTTP_IfHeader | undefined;
  httpWebsocketTcpConverter: Handler_HTTP_WebsocketTCPConverter | undefined;
  /**
   * Match evaluates a set of matching rules (CEL expressions) and forwards
   * to the first handler with a matching expression. It is more powerful,
   * generic version of HTTP.Mux. HTTP.Mux should either be removed or
   * combined with this handler.
   *
   * At the time of writing the CEL expression schema is custom and defined
   * in go/lib/mw/http/match_rule.go but it should match the same schema used
   * for event subscriptions.
   */
  match: Handler_HTTP_Match | undefined;
  matchResponse: Handler_HTTP_MatchResponse | undefined;
  /**
   * Internal metrics is the handler which captures metrics about each http
   * request for our own internal monitoring purposes.
   */
  internalMetrics: Handler_HTTP_InternalMetrics | undefined;
}

/** Any Handlers */
export interface Handler_Any {}

/**
 * NgrokInternalFilter is added at the beginning of handler chains to
 * handle blocking abusive IPs, expiring tunnels, and the like.
 */
export interface Handler_Any_NgrokInternalFilter {
  next: Handler | undefined;
  expiresAt: Timestamp | undefined;
  tunnelSessionId: string;
  tunnelBackendIp: string;
  proto: string;
}

export interface Handler_Any_NgrokMetering {
  next: Handler | undefined;
}

export interface Handler_Any_IdleTimeout {
  timeout: Duration | undefined;
  /**
   * XXX: onTimeout handler for potentially reporting an error or the like,
   * for now punted down the road.
   */
  next: Handler | undefined;
}

/**
 * This timeout is applied to the given request handled by the 'next'
 * chain. The timeout does not impact traffic to a terminal backend, but
 * rather only applies to handlers up to a backend and the dial itself.
 * The timeout only applies to the current protocol, so for example if it
 * is set in a TCP chain, the http/start handler chain will need a new
 * timeout configured.
 */
export interface Handler_Any_HandlerTimeout {
  timeout: Duration | undefined;
  next: Handler | undefined;
  onTimeout: Handler | undefined;
}

/**
 * Branch depending on whether TLS has been termianted or not
 * MuxTerm is necessary for displaying SNI errors in the legacy tls path.
 */
export interface Handler_Any_MuxTerm {
  ifTerminated: Handler | undefined;
  notTerminated: Handler | undefined;
}

/** Respond with a fixed HTTP response */
export interface Handler_Any_HTTPFixedResponse {
  statusCode: number;
  headers: { [key: string]: string };
  body: Uint8Array;
}

export interface Handler_Any_HTTPFixedResponse_HeadersEntry {
  key: string;
  value: string;
}

/** Respond with a fixed error response */
export interface Handler_Any_ErrorResponse {
  error: EnrichedError | undefined;
}

/**
 * Record information about the incoming connection, request, and response
 * to user-facing logs.
 */
export interface Handler_Any_Logging {
  next: Handler | undefined;
  /** Deprecated, removed post-transition to evsubs */
  streams: Handler_Any_Logging_Stream[];
  /**
   * All subscriptions that contain sources that could match events
   * from this endpoint
   */
  subscriptions: EventSubscription[];
}

/**
 * Shallow EventStream which doesn't include AccountIDs
 * or user-specified fields.
 */
export interface Handler_Any_Logging_Stream {
  id: ID | undefined;
  eventType: EventType;
  /**
   * Only store enabled destionations, allowing mux
   * to publish only needed events without extra queries.
   * Additionally, this is the only field on destination which
   * merits a frontend update in epr when it's changed.
   */
  enabledDestinationIds: ID[];
  fields: EventField[];
  samplingRate: number;
}

export interface Handler_Any_Backend {
  network: string;
  addr: string;
  dialers: Dialer[];
}

export interface Handler_Any_Failover {
  backends: Handler[];
}

export interface Handler_Any_Weighted {
  backends: Handler_Any_WeightedUpstream[];
}

export interface Handler_Any_WeightedUpstream {
  next: Handler | undefined;
  name: string;
  weight: number;
  /**
   * min_timeout describes the minimum time this upstream would like to
   * have, regardless of how small its weight is.
   */
  minTimeout: Duration | undefined;
}

export interface Handler_Any_NgrokMetrics {
  next: Handler | undefined;
}

/** TCP Handlers */
export interface Handler_TCP {}

export interface Handler_TCP_Accept {
  next: Handler | undefined;
}

/**
 * This timeout is applied to all TCP handlers in the 'next' chain.
 * The timeout does not impact the byte-copy to or from a backend.
 */
export interface Handler_TCP_HandlerTimeout {
  timeout: Duration | undefined;
  next: Handler | undefined;
  onTimeout: Handler | undefined;
}

export interface Handler_TCP_TLS {
  next: Handler | undefined;
  config: TLSConfig_ServerConfig | undefined;
  handshakeTimeout: Duration | undefined;
  sniError: Handler | undefined;
}

/** HTTP Handlers */
export interface Handler_HTTP {}

/** Start HTTP processing */
export interface Handler_HTTP_Start {
  next: Handler | undefined;
  /** maximum number of bytes a header we will parse in a header */
  maxHeaderBytes: number;
  /** each request header must be read within this timelimit */
  readHeaderTimeout: Duration | undefined;
  /**
   * How long we 'drain' client
   * connections after the server is meant to shutdown, either because the
   * handler is deleted or because the process is shutting down.
   */
  clientDrainTimeout: Duration | undefined;
}

/** Serve requests from a file system path */
export interface Handler_HTTP_FileSystem {
  path: string;
}

/** Protect next handler with basic auth */
export interface Handler_HTTP_BasicAuth {
  realm: string;
  authorized: Handler | undefined;
  unauthorized: Handler | undefined;
  authProvider: AuthProvider | undefined;
  allowOptions: boolean;
}

/**
 * Backwards compatibility handler for the agent '-auth' flag
 * Distinct from 'BasicAuth' in that it allows malformed Authorization
 * headers to match legacy behavior.
 */
export interface Handler_HTTP_LegacyBasicAuth {
  /** hash of the '-auth' value, typically 'user:password'. */
  hashedAuth: Uint8Array;
  authorized: Handler | undefined;
  unauthorized: Handler | undefined;
}

/** Manipulate request headers before passing to next handler */
export interface Handler_HTTP_RequestHeaders {
  addHeaders: { [key: string]: string };
  removeHeaders: string[];
  next: Handler | undefined;
}

export interface Handler_HTTP_RequestHeaders_AddHeadersEntry {
  key: string;
  value: string;
}

/** Manipulate response headers after the caller returns */
export interface Handler_HTTP_ResponseHeaders {
  addHeaders: { [key: string]: string };
  removeHeaders: string[];
  next: Handler | undefined;
}

export interface Handler_HTTP_ResponseHeaders_AddHeadersEntry {
  key: string;
  value: string;
}

export interface Handler_HTTP_Compress {
  next: Handler | undefined;
}

/** Validates webhooks signatures */
export interface Handler_HTTP_WebhookValidation {
  authorized: Handler | undefined;
  unauthorized: Handler | undefined;
  provider: Handler_HTTP_WebhookValidation_Provider;
  secret: Uint8Array;
}

export enum Handler_HTTP_WebhookValidation_Provider {
  UNDEFINED = 0,
  SLACK = 1,
  STRIPE = 2,
  GITHUB = 3,
  TWILIO = 4,
  SHOPIFY = 5,
  GITLAB = 6,
  SNS = 7,
  INTERCOM = 8,
  SENDGRID = 9,
  XERO = 10,
}

export interface Handler_HTTP_CircuitBreaker {
  next: Handler | undefined;
  tripped: Handler | undefined;
  trippedDuration: Duration | undefined;
  rollingWindow: Duration | undefined;
  numBuckets: number;
  volumeThreshold: number;
  /** Error threshold percentage should be between 0 - 1.0, not 0-100.0 */
  errorThresholdPercentage: number;
}

export interface Handler_HTTP_MaxBodySize {
  next: Handler | undefined;
  maxSize: number;
}

export interface Handler_HTTP_UserSession {
  next: Handler | undefined;
  cookiePrefix: string;
  inactivityTimeout: Duration | undefined;
  maxDuration: Duration | undefined;
  sameSite: Handler_HTTP_UserSession_SameSitePolicy;
}

export enum Handler_HTTP_UserSession_SameSitePolicy {
  SameSiteUndefined = 0,
  SameSiteNone = 1,
  SameSiteLax = 2,
  SameSiteStrict = 3,
}

export interface Handler_HTTP_Mux {
  rules: Handler_HTTP_Mux_Rule[];
  noMatch: Handler | undefined;
}

export interface Handler_HTTP_Mux_Rule {
  next: Handler | undefined;
  methods: string[];
  matchType: HTTPSEdge_Route_Selector_Type;
  host: string;
  match: string;
  priority: number;
  hasPriority: boolean;
}

export interface Handler_HTTP_NgrokACMERedirect {
  redirectHostname: string;
}

/**
 * FederatedAuth is ngrok's home-grown federated authentication. It's like a mashed up version of
 * OIDC and SAML but we have a shared secret to secure comms to and from the federated IdP.
 */
export interface Handler_HTTP_FederatedAuth {
  next: Handler | undefined;
  /**
   * Version string which endpoint.resolver can use to indicate that the source
   * endpoint configuration has changed materially enough that users must reauthenticate.
   */
  version: string;
  /** Where we redirect a user for authentication. */
  idpAuthnUrl: string;
  /** Where we redirect a user for single logout. */
  idpLogoutUrl: string;
  /**
   * Opaque ID is used to fetch federated authentication metadata (e.g. client ID, client secret).
   * The ID is used by hosted.apps to fetch this metadata by making an RPC.
   * The ID may be an Edge Route ID, an Endpoint Config ID, or simply a stable identifier
   * (i.e. 'runtime-metadata') in the case of agent initiated middleware.
   */
  opaqueId: string;
  /**
   * Path to redirect back to.
   * Required for HTTPS Edge routes with federated auth (e.g. /admin).
   */
  callbackPath: string;
  /**
   * if non-zero, recheck authz constraints by refreshing data from the IdP
   * at least this often
   */
  authCheckInterval: Duration | undefined;
  /** if true, do not enforce any authentication of authorization constraints on OPTIONS requests */
  allowOptions: boolean;
}

export interface Handler_HTTP_NotFound {}

export interface Handler_HTTP_ContentBanFilter {
  next: Handler | undefined;
  nextBanned: Handler | undefined;
  samplingRate: number;
  unsampledResponseCount: number;
  maxBufferSize: number;
  minCheckLength: number;
  /**
   * this option has independent behavior from the other options. each regex
   * here is tried against the HTTP request's path if it matches, the
   * content will be automatically reported as abuse and banned
   */
  bannedPathRegexps: string[];
  /**
   * this option has independent behavior from the other options. each regex
   * here is tried against the HTTP response's content and if it matches, the
   * content will be automatically reported as abuse and banned
   */
  bannedContentRegexps: string[];
}

export interface Handler_HTTP_IfHeader {
  match: Handler | undefined;
  noMatch: Handler | undefined;
  header: string;
}

export interface Handler_HTTP_WebsocketTCPConverter {
  /**
   * if this http request is being upgraded to a websocket,
   * call this handler next. this TCP-type handler next
   */
  onUpgrade: Handler | undefined;
  /** otherwise, call this HTTP handler next */
  onNoUpgrade: Handler | undefined;
}

export interface Handler_HTTP_Match {
  rules: Handler_HTTP_Match_MatchRule[];
  noMatch: Handler | undefined;
}

export interface Handler_HTTP_Match_MatchRule {
  /** TODO(chase): Remove after finishing transition to resolve-time compilation */
  matchExpression: string;
  onMatch: Handler | undefined;
  /** a CEL expression to match on */
  checkedMatch: CheckedExpr | undefined;
}

export interface Handler_HTTP_MatchResponse {
  next: Handler | undefined;
  rules: Handler_HTTP_MatchResponse_MatchRule[];
}

export interface Handler_HTTP_MatchResponse_MatchRule {
  /** TODO(chase): Remove after finishing transition to resolve-time compilation */
  matchExpression: string;
  onMatch: Handler | undefined;
  /** a CEL expression to match on */
  checkedMatch: CheckedExpr | undefined;
}

export interface Handler_HTTP_InternalMetrics {
  next: Handler | undefined;
}

export interface Dialer {
  direct: Dialer_Direct | undefined;
  withProxyProto: Dialer_WithProxyProto | undefined;
  withTunnel: Dialer_WithTunnel | undefined;
  withConnPool: Dialer_WithConnPool | undefined;
  withTls: Dialer_WithTLS | undefined;
  withRetries: Dialer_WithRetries | undefined;
  withTimeout: Dialer_WithTimeout | undefined;
  /** A delaying dialer used for timeout tests */
  withDelay: Dialer_WithDelay | undefined;
  withIdleTimeout: Dialer_WithIdleTimeout | undefined;
  /** Dialer with ServerID information */
  withLiveness: Dialer_WithLiveness | undefined;
  /**
   * WithExternal adds guards to ensure an address being dialed is a public
   * internet address, not an internal address.
   */
  withExternal: Dialer_WithExternal | undefined;
}

export interface Dialer_Direct {
  dualStack: boolean;
  keepAlive: Duration | undefined;
}

export interface Dialer_WithExternal {}

export interface Dialer_WithProxyProto {
  version: number;
}

export interface Dialer_WithTunnel {
  tunnelId: string;
  proto: string;
  serverId: string;
}

export interface Dialer_WithConnPool {
  size: number;
}

export interface Dialer_WithTLS {
  config: TLSConfig_ClientConfig | undefined;
}

export interface Dialer_WithTimeout {
  timeout: Duration | undefined;
}

export interface Dialer_WithIdleTimeout {
  timeout: Duration | undefined;
}

export interface Dialer_WithRetries {
  attempts: number;
  backoff: Dialer_WithRetries_Backoff | undefined;
}

export interface Dialer_WithRetries_Backoff {
  exponentialBackoff: Dialer_WithRetries_ExponentialBackoff | undefined;
}

export interface Dialer_WithRetries_ExponentialBackoff {
  start: Duration | undefined;
  max: Duration | undefined;
}

export interface Dialer_WithDelay {
  delay: Duration | undefined;
}

export interface Dialer_WithLiveness {
  serverId: string;
}

export interface AuthProvider {
  /**
   * LDAP ldap = 2 [(pb.goname) = "LDAP"];
   * Internal internal = 3;
   * Historically, the agent '-auth' flag has allowed malformed basic auth.
   * This is a backwards compatibility auth type for the sake of that.
   */
  static: AuthProvider_Static | undefined;
}

export interface AuthProvider_Static {
  entries: AuthProvider_StaticEntry[];
}

export interface AuthProvider_StaticEntry {
  user: string;
  password: string;
  /**
   * password hash stored in the modular  `crypt` format.
   * As a hack, this will be mutated to hash the password before storage.
   * Currently supported crypt formats are:
   * * $2a$ (bcrypt)
   */
  hashedPassword: Uint8Array;
}

export interface RoundRobin {
  upstreams: WeightedUpstream[];
}

export interface WeightedUpstream {
  next: Handler | undefined;
  name: string;
  weight: number;
}

export interface IPFilter {
  ipNets: string[];
  match: Handler | undefined;
  noMatch: Handler | undefined;
}

/** abort */
export interface Abort {
  errorMessage: string;
}

const baseHandler: object = {};

export const Handler = {
  encode(
    message: Handler,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roundRobin !== undefined) {
      RoundRobin.encode(message.roundRobin, writer.uint32(818).fork()).ldelim();
    }
    if (message.ipFilter !== undefined) {
      IPFilter.encode(message.ipFilter, writer.uint32(826).fork()).ldelim();
    }
    if (message.abort !== undefined) {
      Abort.encode(message.abort, writer.uint32(850).fork()).ldelim();
    }
    if (message.idleTimeout !== undefined) {
      Handler_Any_IdleTimeout.encode(
        message.idleTimeout,
        writer.uint32(858).fork()
      ).ldelim();
    }
    if (message.handlerTimeout !== undefined) {
      Handler_Any_HandlerTimeout.encode(
        message.handlerTimeout,
        writer.uint32(866).fork()
      ).ldelim();
    }
    if (message.ngrokInternalFilter !== undefined) {
      Handler_Any_NgrokInternalFilter.encode(
        message.ngrokInternalFilter,
        writer.uint32(882).fork()
      ).ldelim();
    }
    if (message.muxTerm !== undefined) {
      Handler_Any_MuxTerm.encode(
        message.muxTerm,
        writer.uint32(922).fork()
      ).ldelim();
    }
    if (message.httpFixedResponse !== undefined) {
      Handler_Any_HTTPFixedResponse.encode(
        message.httpFixedResponse,
        writer.uint32(930).fork()
      ).ldelim();
    }
    if (message.ngrokMetering !== undefined) {
      Handler_Any_NgrokMetering.encode(
        message.ngrokMetering,
        writer.uint32(938).fork()
      ).ldelim();
    }
    if (message.errorResponse !== undefined) {
      Handler_Any_ErrorResponse.encode(
        message.errorResponse,
        writer.uint32(946).fork()
      ).ldelim();
    }
    if (message.logging !== undefined) {
      Handler_Any_Logging.encode(
        message.logging,
        writer.uint32(954).fork()
      ).ldelim();
    }
    if (message.backend !== undefined) {
      Handler_Any_Backend.encode(
        message.backend,
        writer.uint32(962).fork()
      ).ldelim();
    }
    if (message.failover !== undefined) {
      Handler_Any_Failover.encode(
        message.failover,
        writer.uint32(970).fork()
      ).ldelim();
    }
    if (message.ngrokMetrics !== undefined) {
      Handler_Any_NgrokMetrics.encode(
        message.ngrokMetrics,
        writer.uint32(978).fork()
      ).ldelim();
    }
    if (message.weighted !== undefined) {
      Handler_Any_Weighted.encode(
        message.weighted,
        writer.uint32(986).fork()
      ).ldelim();
    }
    if (message.tcpTls !== undefined) {
      Handler_TCP_TLS.encode(
        message.tcpTls,
        writer.uint32(1610).fork()
      ).ldelim();
    }
    if (message.tcpAccept !== undefined) {
      Handler_TCP_Accept.encode(
        message.tcpAccept,
        writer.uint32(1618).fork()
      ).ldelim();
    }
    if (message.httpStart !== undefined) {
      Handler_HTTP_Start.encode(
        message.httpStart,
        writer.uint32(2410).fork()
      ).ldelim();
    }
    if (message.httpFileSystem !== undefined) {
      Handler_HTTP_FileSystem.encode(
        message.httpFileSystem,
        writer.uint32(2426).fork()
      ).ldelim();
    }
    if (message.httpBasicAuth !== undefined) {
      Handler_HTTP_BasicAuth.encode(
        message.httpBasicAuth,
        writer.uint32(2434).fork()
      ).ldelim();
    }
    if (message.httpRequestHeaders !== undefined) {
      Handler_HTTP_RequestHeaders.encode(
        message.httpRequestHeaders,
        writer.uint32(2442).fork()
      ).ldelim();
    }
    if (message.httpResponseHeaders !== undefined) {
      Handler_HTTP_ResponseHeaders.encode(
        message.httpResponseHeaders,
        writer.uint32(2530).fork()
      ).ldelim();
    }
    if (message.httpCompress !== undefined) {
      Handler_HTTP_Compress.encode(
        message.httpCompress,
        writer.uint32(2450).fork()
      ).ldelim();
    }
    if (message.httpWebhookValidation !== undefined) {
      Handler_HTTP_WebhookValidation.encode(
        message.httpWebhookValidation,
        writer.uint32(2458).fork()
      ).ldelim();
    }
    if (message.httpCircuitBreaker !== undefined) {
      Handler_HTTP_CircuitBreaker.encode(
        message.httpCircuitBreaker,
        writer.uint32(2490).fork()
      ).ldelim();
    }
    if (message.httpMux !== undefined) {
      Handler_HTTP_Mux.encode(
        message.httpMux,
        writer.uint32(2498).fork()
      ).ldelim();
    }
    if (message.httpMaxBodySize !== undefined) {
      Handler_HTTP_MaxBodySize.encode(
        message.httpMaxBodySize,
        writer.uint32(2506).fork()
      ).ldelim();
    }
    if (message.httpSession !== undefined) {
      Handler_HTTP_UserSession.encode(
        message.httpSession,
        writer.uint32(2514).fork()
      ).ldelim();
    }
    if (message.httpNgrokAcmeRedirect !== undefined) {
      Handler_HTTP_NgrokACMERedirect.encode(
        message.httpNgrokAcmeRedirect,
        writer.uint32(2562).fork()
      ).ldelim();
    }
    if (message.httpFederatedAuth !== undefined) {
      Handler_HTTP_FederatedAuth.encode(
        message.httpFederatedAuth,
        writer.uint32(2570).fork()
      ).ldelim();
    }
    if (message.httpLegacyBasicAuth !== undefined) {
      Handler_HTTP_LegacyBasicAuth.encode(
        message.httpLegacyBasicAuth,
        writer.uint32(2578).fork()
      ).ldelim();
    }
    if (message.httpNotFound !== undefined) {
      Handler_HTTP_NotFound.encode(
        message.httpNotFound,
        writer.uint32(2586).fork()
      ).ldelim();
    }
    if (message.contentBanFilter !== undefined) {
      Handler_HTTP_ContentBanFilter.encode(
        message.contentBanFilter,
        writer.uint32(2594).fork()
      ).ldelim();
    }
    if (message.ifHeader !== undefined) {
      Handler_HTTP_IfHeader.encode(
        message.ifHeader,
        writer.uint32(2602).fork()
      ).ldelim();
    }
    if (message.httpWebsocketTcpConverter !== undefined) {
      Handler_HTTP_WebsocketTCPConverter.encode(
        message.httpWebsocketTcpConverter,
        writer.uint32(2610).fork()
      ).ldelim();
    }
    if (message.match !== undefined) {
      Handler_HTTP_Match.encode(
        message.match,
        writer.uint32(2618).fork()
      ).ldelim();
    }
    if (message.matchResponse !== undefined) {
      Handler_HTTP_MatchResponse.encode(
        message.matchResponse,
        writer.uint32(2626).fork()
      ).ldelim();
    }
    if (message.internalMetrics !== undefined) {
      Handler_HTTP_InternalMetrics.encode(
        message.internalMetrics,
        writer.uint32(2634).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler } as Handler;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 102:
          message.roundRobin = RoundRobin.decode(reader, reader.uint32());
          break;
        case 103:
          message.ipFilter = IPFilter.decode(reader, reader.uint32());
          break;
        case 106:
          message.abort = Abort.decode(reader, reader.uint32());
          break;
        case 107:
          message.idleTimeout = Handler_Any_IdleTimeout.decode(
            reader,
            reader.uint32()
          );
          break;
        case 108:
          message.handlerTimeout = Handler_Any_HandlerTimeout.decode(
            reader,
            reader.uint32()
          );
          break;
        case 110:
          message.ngrokInternalFilter = Handler_Any_NgrokInternalFilter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 115:
          message.muxTerm = Handler_Any_MuxTerm.decode(reader, reader.uint32());
          break;
        case 116:
          message.httpFixedResponse = Handler_Any_HTTPFixedResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 117:
          message.ngrokMetering = Handler_Any_NgrokMetering.decode(
            reader,
            reader.uint32()
          );
          break;
        case 118:
          message.errorResponse = Handler_Any_ErrorResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 119:
          message.logging = Handler_Any_Logging.decode(reader, reader.uint32());
          break;
        case 120:
          message.backend = Handler_Any_Backend.decode(reader, reader.uint32());
          break;
        case 121:
          message.failover = Handler_Any_Failover.decode(
            reader,
            reader.uint32()
          );
          break;
        case 122:
          message.ngrokMetrics = Handler_Any_NgrokMetrics.decode(
            reader,
            reader.uint32()
          );
          break;
        case 123:
          message.weighted = Handler_Any_Weighted.decode(
            reader,
            reader.uint32()
          );
          break;
        case 201:
          message.tcpTls = Handler_TCP_TLS.decode(reader, reader.uint32());
          break;
        case 202:
          message.tcpAccept = Handler_TCP_Accept.decode(
            reader,
            reader.uint32()
          );
          break;
        case 301:
          message.httpStart = Handler_HTTP_Start.decode(
            reader,
            reader.uint32()
          );
          break;
        case 303:
          message.httpFileSystem = Handler_HTTP_FileSystem.decode(
            reader,
            reader.uint32()
          );
          break;
        case 304:
          message.httpBasicAuth = Handler_HTTP_BasicAuth.decode(
            reader,
            reader.uint32()
          );
          break;
        case 305:
          message.httpRequestHeaders = Handler_HTTP_RequestHeaders.decode(
            reader,
            reader.uint32()
          );
          break;
        case 316:
          message.httpResponseHeaders = Handler_HTTP_ResponseHeaders.decode(
            reader,
            reader.uint32()
          );
          break;
        case 306:
          message.httpCompress = Handler_HTTP_Compress.decode(
            reader,
            reader.uint32()
          );
          break;
        case 307:
          message.httpWebhookValidation = Handler_HTTP_WebhookValidation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 311:
          message.httpCircuitBreaker = Handler_HTTP_CircuitBreaker.decode(
            reader,
            reader.uint32()
          );
          break;
        case 312:
          message.httpMux = Handler_HTTP_Mux.decode(reader, reader.uint32());
          break;
        case 313:
          message.httpMaxBodySize = Handler_HTTP_MaxBodySize.decode(
            reader,
            reader.uint32()
          );
          break;
        case 314:
          message.httpSession = Handler_HTTP_UserSession.decode(
            reader,
            reader.uint32()
          );
          break;
        case 320:
          message.httpNgrokAcmeRedirect = Handler_HTTP_NgrokACMERedirect.decode(
            reader,
            reader.uint32()
          );
          break;
        case 321:
          message.httpFederatedAuth = Handler_HTTP_FederatedAuth.decode(
            reader,
            reader.uint32()
          );
          break;
        case 322:
          message.httpLegacyBasicAuth = Handler_HTTP_LegacyBasicAuth.decode(
            reader,
            reader.uint32()
          );
          break;
        case 323:
          message.httpNotFound = Handler_HTTP_NotFound.decode(
            reader,
            reader.uint32()
          );
          break;
        case 324:
          message.contentBanFilter = Handler_HTTP_ContentBanFilter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 325:
          message.ifHeader = Handler_HTTP_IfHeader.decode(
            reader,
            reader.uint32()
          );
          break;
        case 326:
          message.httpWebsocketTcpConverter =
            Handler_HTTP_WebsocketTCPConverter.decode(reader, reader.uint32());
          break;
        case 327:
          message.match = Handler_HTTP_Match.decode(reader, reader.uint32());
          break;
        case 328:
          message.matchResponse = Handler_HTTP_MatchResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 329:
          message.internalMetrics = Handler_HTTP_InternalMetrics.decode(
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

  fromPartial(object: DeepPartial<Handler>): Handler {
    const message = { ...baseHandler } as Handler;
    if (object.roundRobin !== undefined && object.roundRobin !== null) {
      message.roundRobin = RoundRobin.fromPartial(object.roundRobin);
    } else {
      message.roundRobin = undefined;
    }
    if (object.ipFilter !== undefined && object.ipFilter !== null) {
      message.ipFilter = IPFilter.fromPartial(object.ipFilter);
    } else {
      message.ipFilter = undefined;
    }
    if (object.abort !== undefined && object.abort !== null) {
      message.abort = Abort.fromPartial(object.abort);
    } else {
      message.abort = undefined;
    }
    if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
      message.idleTimeout = Handler_Any_IdleTimeout.fromPartial(
        object.idleTimeout
      );
    } else {
      message.idleTimeout = undefined;
    }
    if (object.handlerTimeout !== undefined && object.handlerTimeout !== null) {
      message.handlerTimeout = Handler_Any_HandlerTimeout.fromPartial(
        object.handlerTimeout
      );
    } else {
      message.handlerTimeout = undefined;
    }
    if (
      object.ngrokInternalFilter !== undefined &&
      object.ngrokInternalFilter !== null
    ) {
      message.ngrokInternalFilter = Handler_Any_NgrokInternalFilter.fromPartial(
        object.ngrokInternalFilter
      );
    } else {
      message.ngrokInternalFilter = undefined;
    }
    if (object.muxTerm !== undefined && object.muxTerm !== null) {
      message.muxTerm = Handler_Any_MuxTerm.fromPartial(object.muxTerm);
    } else {
      message.muxTerm = undefined;
    }
    if (
      object.httpFixedResponse !== undefined &&
      object.httpFixedResponse !== null
    ) {
      message.httpFixedResponse = Handler_Any_HTTPFixedResponse.fromPartial(
        object.httpFixedResponse
      );
    } else {
      message.httpFixedResponse = undefined;
    }
    if (object.ngrokMetering !== undefined && object.ngrokMetering !== null) {
      message.ngrokMetering = Handler_Any_NgrokMetering.fromPartial(
        object.ngrokMetering
      );
    } else {
      message.ngrokMetering = undefined;
    }
    if (object.errorResponse !== undefined && object.errorResponse !== null) {
      message.errorResponse = Handler_Any_ErrorResponse.fromPartial(
        object.errorResponse
      );
    } else {
      message.errorResponse = undefined;
    }
    if (object.logging !== undefined && object.logging !== null) {
      message.logging = Handler_Any_Logging.fromPartial(object.logging);
    } else {
      message.logging = undefined;
    }
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = Handler_Any_Backend.fromPartial(object.backend);
    } else {
      message.backend = undefined;
    }
    if (object.failover !== undefined && object.failover !== null) {
      message.failover = Handler_Any_Failover.fromPartial(object.failover);
    } else {
      message.failover = undefined;
    }
    if (object.ngrokMetrics !== undefined && object.ngrokMetrics !== null) {
      message.ngrokMetrics = Handler_Any_NgrokMetrics.fromPartial(
        object.ngrokMetrics
      );
    } else {
      message.ngrokMetrics = undefined;
    }
    if (object.weighted !== undefined && object.weighted !== null) {
      message.weighted = Handler_Any_Weighted.fromPartial(object.weighted);
    } else {
      message.weighted = undefined;
    }
    if (object.tcpTls !== undefined && object.tcpTls !== null) {
      message.tcpTls = Handler_TCP_TLS.fromPartial(object.tcpTls);
    } else {
      message.tcpTls = undefined;
    }
    if (object.tcpAccept !== undefined && object.tcpAccept !== null) {
      message.tcpAccept = Handler_TCP_Accept.fromPartial(object.tcpAccept);
    } else {
      message.tcpAccept = undefined;
    }
    if (object.httpStart !== undefined && object.httpStart !== null) {
      message.httpStart = Handler_HTTP_Start.fromPartial(object.httpStart);
    } else {
      message.httpStart = undefined;
    }
    if (object.httpFileSystem !== undefined && object.httpFileSystem !== null) {
      message.httpFileSystem = Handler_HTTP_FileSystem.fromPartial(
        object.httpFileSystem
      );
    } else {
      message.httpFileSystem = undefined;
    }
    if (object.httpBasicAuth !== undefined && object.httpBasicAuth !== null) {
      message.httpBasicAuth = Handler_HTTP_BasicAuth.fromPartial(
        object.httpBasicAuth
      );
    } else {
      message.httpBasicAuth = undefined;
    }
    if (
      object.httpRequestHeaders !== undefined &&
      object.httpRequestHeaders !== null
    ) {
      message.httpRequestHeaders = Handler_HTTP_RequestHeaders.fromPartial(
        object.httpRequestHeaders
      );
    } else {
      message.httpRequestHeaders = undefined;
    }
    if (
      object.httpResponseHeaders !== undefined &&
      object.httpResponseHeaders !== null
    ) {
      message.httpResponseHeaders = Handler_HTTP_ResponseHeaders.fromPartial(
        object.httpResponseHeaders
      );
    } else {
      message.httpResponseHeaders = undefined;
    }
    if (object.httpCompress !== undefined && object.httpCompress !== null) {
      message.httpCompress = Handler_HTTP_Compress.fromPartial(
        object.httpCompress
      );
    } else {
      message.httpCompress = undefined;
    }
    if (
      object.httpWebhookValidation !== undefined &&
      object.httpWebhookValidation !== null
    ) {
      message.httpWebhookValidation =
        Handler_HTTP_WebhookValidation.fromPartial(
          object.httpWebhookValidation
        );
    } else {
      message.httpWebhookValidation = undefined;
    }
    if (
      object.httpCircuitBreaker !== undefined &&
      object.httpCircuitBreaker !== null
    ) {
      message.httpCircuitBreaker = Handler_HTTP_CircuitBreaker.fromPartial(
        object.httpCircuitBreaker
      );
    } else {
      message.httpCircuitBreaker = undefined;
    }
    if (object.httpMux !== undefined && object.httpMux !== null) {
      message.httpMux = Handler_HTTP_Mux.fromPartial(object.httpMux);
    } else {
      message.httpMux = undefined;
    }
    if (
      object.httpMaxBodySize !== undefined &&
      object.httpMaxBodySize !== null
    ) {
      message.httpMaxBodySize = Handler_HTTP_MaxBodySize.fromPartial(
        object.httpMaxBodySize
      );
    } else {
      message.httpMaxBodySize = undefined;
    }
    if (object.httpSession !== undefined && object.httpSession !== null) {
      message.httpSession = Handler_HTTP_UserSession.fromPartial(
        object.httpSession
      );
    } else {
      message.httpSession = undefined;
    }
    if (
      object.httpNgrokAcmeRedirect !== undefined &&
      object.httpNgrokAcmeRedirect !== null
    ) {
      message.httpNgrokAcmeRedirect =
        Handler_HTTP_NgrokACMERedirect.fromPartial(
          object.httpNgrokAcmeRedirect
        );
    } else {
      message.httpNgrokAcmeRedirect = undefined;
    }
    if (
      object.httpFederatedAuth !== undefined &&
      object.httpFederatedAuth !== null
    ) {
      message.httpFederatedAuth = Handler_HTTP_FederatedAuth.fromPartial(
        object.httpFederatedAuth
      );
    } else {
      message.httpFederatedAuth = undefined;
    }
    if (
      object.httpLegacyBasicAuth !== undefined &&
      object.httpLegacyBasicAuth !== null
    ) {
      message.httpLegacyBasicAuth = Handler_HTTP_LegacyBasicAuth.fromPartial(
        object.httpLegacyBasicAuth
      );
    } else {
      message.httpLegacyBasicAuth = undefined;
    }
    if (object.httpNotFound !== undefined && object.httpNotFound !== null) {
      message.httpNotFound = Handler_HTTP_NotFound.fromPartial(
        object.httpNotFound
      );
    } else {
      message.httpNotFound = undefined;
    }
    if (
      object.contentBanFilter !== undefined &&
      object.contentBanFilter !== null
    ) {
      message.contentBanFilter = Handler_HTTP_ContentBanFilter.fromPartial(
        object.contentBanFilter
      );
    } else {
      message.contentBanFilter = undefined;
    }
    if (object.ifHeader !== undefined && object.ifHeader !== null) {
      message.ifHeader = Handler_HTTP_IfHeader.fromPartial(object.ifHeader);
    } else {
      message.ifHeader = undefined;
    }
    if (
      object.httpWebsocketTcpConverter !== undefined &&
      object.httpWebsocketTcpConverter !== null
    ) {
      message.httpWebsocketTcpConverter =
        Handler_HTTP_WebsocketTCPConverter.fromPartial(
          object.httpWebsocketTcpConverter
        );
    } else {
      message.httpWebsocketTcpConverter = undefined;
    }
    if (object.match !== undefined && object.match !== null) {
      message.match = Handler_HTTP_Match.fromPartial(object.match);
    } else {
      message.match = undefined;
    }
    if (object.matchResponse !== undefined && object.matchResponse !== null) {
      message.matchResponse = Handler_HTTP_MatchResponse.fromPartial(
        object.matchResponse
      );
    } else {
      message.matchResponse = undefined;
    }
    if (
      object.internalMetrics !== undefined &&
      object.internalMetrics !== null
    ) {
      message.internalMetrics = Handler_HTTP_InternalMetrics.fromPartial(
        object.internalMetrics
      );
    } else {
      message.internalMetrics = undefined;
    }
    return message;
  },
};

const baseHandler_Any: object = {};

export const Handler_Any = {
  encode(_: Handler_Any, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler_Any {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_Any } as Handler_Any;
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

  fromPartial(_: DeepPartial<Handler_Any>): Handler_Any {
    const message = { ...baseHandler_Any } as Handler_Any;
    return message;
  },
};

const baseHandler_Any_NgrokInternalFilter: object = {
  tunnelSessionId: "",
  tunnelBackendIp: "",
  proto: "",
};

export const Handler_Any_NgrokInternalFilter = {
  encode(
    message: Handler_Any_NgrokInternalFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.tunnelSessionId !== "") {
      writer.uint32(26).string(message.tunnelSessionId);
    }
    if (message.tunnelBackendIp !== "") {
      writer.uint32(34).string(message.tunnelBackendIp);
    }
    if (message.proto !== "") {
      writer.uint32(42).string(message.proto);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_Any_NgrokInternalFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_Any_NgrokInternalFilter,
    } as Handler_Any_NgrokInternalFilter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.tunnelSessionId = reader.string();
          break;
        case 4:
          message.tunnelBackendIp = reader.string();
          break;
        case 5:
          message.proto = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_Any_NgrokInternalFilter>
  ): Handler_Any_NgrokInternalFilter {
    const message = {
      ...baseHandler_Any_NgrokInternalFilter,
    } as Handler_Any_NgrokInternalFilter;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    if (
      object.tunnelSessionId !== undefined &&
      object.tunnelSessionId !== null
    ) {
      message.tunnelSessionId = object.tunnelSessionId;
    } else {
      message.tunnelSessionId = "";
    }
    if (
      object.tunnelBackendIp !== undefined &&
      object.tunnelBackendIp !== null
    ) {
      message.tunnelBackendIp = object.tunnelBackendIp;
    } else {
      message.tunnelBackendIp = "";
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = object.proto;
    } else {
      message.proto = "";
    }
    return message;
  },
};

const baseHandler_Any_NgrokMetering: object = {};

export const Handler_Any_NgrokMetering = {
  encode(
    message: Handler_Any_NgrokMetering,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_Any_NgrokMetering {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_Any_NgrokMetering,
    } as Handler_Any_NgrokMetering;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_Any_NgrokMetering>
  ): Handler_Any_NgrokMetering {
    const message = {
      ...baseHandler_Any_NgrokMetering,
    } as Handler_Any_NgrokMetering;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    return message;
  },
};

const baseHandler_Any_IdleTimeout: object = {};

export const Handler_Any_IdleTimeout = {
  encode(
    message: Handler_Any_IdleTimeout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(10).fork()).ldelim();
    }
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_Any_IdleTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_Any_IdleTimeout,
    } as Handler_Any_IdleTimeout;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeout = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_Any_IdleTimeout>
  ): Handler_Any_IdleTimeout {
    const message = {
      ...baseHandler_Any_IdleTimeout,
    } as Handler_Any_IdleTimeout;
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = Duration.fromPartial(object.timeout);
    } else {
      message.timeout = undefined;
    }
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    return message;
  },
};

const baseHandler_Any_HandlerTimeout: object = {};

export const Handler_Any_HandlerTimeout = {
  encode(
    message: Handler_Any_HandlerTimeout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(10).fork()).ldelim();
    }
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(18).fork()).ldelim();
    }
    if (message.onTimeout !== undefined) {
      Handler.encode(message.onTimeout, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_Any_HandlerTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_Any_HandlerTimeout,
    } as Handler_Any_HandlerTimeout;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeout = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 3:
          message.onTimeout = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_Any_HandlerTimeout>
  ): Handler_Any_HandlerTimeout {
    const message = {
      ...baseHandler_Any_HandlerTimeout,
    } as Handler_Any_HandlerTimeout;
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = Duration.fromPartial(object.timeout);
    } else {
      message.timeout = undefined;
    }
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.onTimeout !== undefined && object.onTimeout !== null) {
      message.onTimeout = Handler.fromPartial(object.onTimeout);
    } else {
      message.onTimeout = undefined;
    }
    return message;
  },
};

const baseHandler_Any_MuxTerm: object = {};

export const Handler_Any_MuxTerm = {
  encode(
    message: Handler_Any_MuxTerm,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ifTerminated !== undefined) {
      Handler.encode(message.ifTerminated, writer.uint32(10).fork()).ldelim();
    }
    if (message.notTerminated !== undefined) {
      Handler.encode(message.notTerminated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler_Any_MuxTerm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_Any_MuxTerm } as Handler_Any_MuxTerm;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ifTerminated = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.notTerminated = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Handler_Any_MuxTerm>): Handler_Any_MuxTerm {
    const message = { ...baseHandler_Any_MuxTerm } as Handler_Any_MuxTerm;
    if (object.ifTerminated !== undefined && object.ifTerminated !== null) {
      message.ifTerminated = Handler.fromPartial(object.ifTerminated);
    } else {
      message.ifTerminated = undefined;
    }
    if (object.notTerminated !== undefined && object.notTerminated !== null) {
      message.notTerminated = Handler.fromPartial(object.notTerminated);
    } else {
      message.notTerminated = undefined;
    }
    return message;
  },
};

const baseHandler_Any_HTTPFixedResponse: object = { statusCode: 0 };

export const Handler_Any_HTTPFixedResponse = {
  encode(
    message: Handler_Any_HTTPFixedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      Handler_Any_HTTPFixedResponse_HeadersEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    if (message.body.length !== 0) {
      writer.uint32(26).bytes(message.body);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_Any_HTTPFixedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_Any_HTTPFixedResponse,
    } as Handler_Any_HTTPFixedResponse;
    message.headers = {};
    message.body = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statusCode = reader.int32();
          break;
        case 2:
          const entry2 = Handler_Any_HTTPFixedResponse_HeadersEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.headers[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.body = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_Any_HTTPFixedResponse>
  ): Handler_Any_HTTPFixedResponse {
    const message = {
      ...baseHandler_Any_HTTPFixedResponse,
    } as Handler_Any_HTTPFixedResponse;
    message.headers = {};
    if (object.statusCode !== undefined && object.statusCode !== null) {
      message.statusCode = object.statusCode;
    } else {
      message.statusCode = 0;
    }
    if (object.headers !== undefined && object.headers !== null) {
      Object.entries(object.headers).forEach(([key, value]) => {
        if (value !== undefined) {
          message.headers[key] = String(value);
        }
      });
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = new Uint8Array();
    }
    return message;
  },
};

const baseHandler_Any_HTTPFixedResponse_HeadersEntry: object = {
  key: "",
  value: "",
};

export const Handler_Any_HTTPFixedResponse_HeadersEntry = {
  encode(
    message: Handler_Any_HTTPFixedResponse_HeadersEntry,
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
  ): Handler_Any_HTTPFixedResponse_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_Any_HTTPFixedResponse_HeadersEntry,
    } as Handler_Any_HTTPFixedResponse_HeadersEntry;
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
    object: DeepPartial<Handler_Any_HTTPFixedResponse_HeadersEntry>
  ): Handler_Any_HTTPFixedResponse_HeadersEntry {
    const message = {
      ...baseHandler_Any_HTTPFixedResponse_HeadersEntry,
    } as Handler_Any_HTTPFixedResponse_HeadersEntry;
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

const baseHandler_Any_ErrorResponse: object = {};

export const Handler_Any_ErrorResponse = {
  encode(
    message: Handler_Any_ErrorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== undefined) {
      EnrichedError.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_Any_ErrorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_Any_ErrorResponse,
    } as Handler_Any_ErrorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = EnrichedError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_Any_ErrorResponse>
  ): Handler_Any_ErrorResponse {
    const message = {
      ...baseHandler_Any_ErrorResponse,
    } as Handler_Any_ErrorResponse;
    if (object.error !== undefined && object.error !== null) {
      message.error = EnrichedError.fromPartial(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },
};

const baseHandler_Any_Logging: object = {};

export const Handler_Any_Logging = {
  encode(
    message: Handler_Any_Logging,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.streams) {
      Handler_Any_Logging_Stream.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.subscriptions) {
      EventSubscription.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler_Any_Logging {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_Any_Logging } as Handler_Any_Logging;
    message.streams = [];
    message.subscriptions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.streams.push(
            Handler_Any_Logging_Stream.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.subscriptions.push(
            EventSubscription.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Handler_Any_Logging>): Handler_Any_Logging {
    const message = { ...baseHandler_Any_Logging } as Handler_Any_Logging;
    message.streams = [];
    message.subscriptions = [];
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.streams !== undefined && object.streams !== null) {
      for (const e of object.streams) {
        message.streams.push(Handler_Any_Logging_Stream.fromPartial(e));
      }
    }
    if (object.subscriptions !== undefined && object.subscriptions !== null) {
      for (const e of object.subscriptions) {
        message.subscriptions.push(EventSubscription.fromPartial(e));
      }
    }
    return message;
  },
};

const baseHandler_Any_Logging_Stream: object = {
  eventType: 0,
  fields: 0,
  samplingRate: 0,
};

export const Handler_Any_Logging_Stream = {
  encode(
    message: Handler_Any_Logging_Stream,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.eventType !== 0) {
      writer.uint32(16).int32(message.eventType);
    }
    for (const v of message.enabledDestinationIds) {
      ID.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.fields) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.samplingRate !== 0) {
      writer.uint32(41).double(message.samplingRate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_Any_Logging_Stream {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_Any_Logging_Stream,
    } as Handler_Any_Logging_Stream;
    message.enabledDestinationIds = [];
    message.fields = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.eventType = reader.int32() as any;
          break;
        case 3:
          message.enabledDestinationIds.push(
            ID.decode(reader, reader.uint32())
          );
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fields.push(reader.int32() as any);
            }
          } else {
            message.fields.push(reader.int32() as any);
          }
          break;
        case 5:
          message.samplingRate = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_Any_Logging_Stream>
  ): Handler_Any_Logging_Stream {
    const message = {
      ...baseHandler_Any_Logging_Stream,
    } as Handler_Any_Logging_Stream;
    message.enabledDestinationIds = [];
    message.fields = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.eventType !== undefined && object.eventType !== null) {
      message.eventType = object.eventType;
    } else {
      message.eventType = 0;
    }
    if (
      object.enabledDestinationIds !== undefined &&
      object.enabledDestinationIds !== null
    ) {
      for (const e of object.enabledDestinationIds) {
        message.enabledDestinationIds.push(ID.fromPartial(e));
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

const baseHandler_Any_Backend: object = { network: "", addr: "" };

export const Handler_Any_Backend = {
  encode(
    message: Handler_Any_Backend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.network !== "") {
      writer.uint32(10).string(message.network);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    for (const v of message.dialers) {
      Dialer.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler_Any_Backend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_Any_Backend } as Handler_Any_Backend;
    message.dialers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.string();
          break;
        case 2:
          message.addr = reader.string();
          break;
        case 5:
          message.dialers.push(Dialer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Handler_Any_Backend>): Handler_Any_Backend {
    const message = { ...baseHandler_Any_Backend } as Handler_Any_Backend;
    message.dialers = [];
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    if (object.dialers !== undefined && object.dialers !== null) {
      for (const e of object.dialers) {
        message.dialers.push(Dialer.fromPartial(e));
      }
    }
    return message;
  },
};

const baseHandler_Any_Failover: object = {};

export const Handler_Any_Failover = {
  encode(
    message: Handler_Any_Failover,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.backends) {
      Handler.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_Any_Failover {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_Any_Failover } as Handler_Any_Failover;
    message.backends = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backends.push(Handler.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Handler_Any_Failover>): Handler_Any_Failover {
    const message = { ...baseHandler_Any_Failover } as Handler_Any_Failover;
    message.backends = [];
    if (object.backends !== undefined && object.backends !== null) {
      for (const e of object.backends) {
        message.backends.push(Handler.fromPartial(e));
      }
    }
    return message;
  },
};

const baseHandler_Any_Weighted: object = {};

export const Handler_Any_Weighted = {
  encode(
    message: Handler_Any_Weighted,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.backends) {
      Handler_Any_WeightedUpstream.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_Any_Weighted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_Any_Weighted } as Handler_Any_Weighted;
    message.backends = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backends.push(
            Handler_Any_WeightedUpstream.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Handler_Any_Weighted>): Handler_Any_Weighted {
    const message = { ...baseHandler_Any_Weighted } as Handler_Any_Weighted;
    message.backends = [];
    if (object.backends !== undefined && object.backends !== null) {
      for (const e of object.backends) {
        message.backends.push(Handler_Any_WeightedUpstream.fromPartial(e));
      }
    }
    return message;
  },
};

const baseHandler_Any_WeightedUpstream: object = { name: "", weight: 0 };

export const Handler_Any_WeightedUpstream = {
  encode(
    message: Handler_Any_WeightedUpstream,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.weight !== 0) {
      writer.uint32(24).uint64(message.weight);
    }
    if (message.minTimeout !== undefined) {
      Duration.encode(message.minTimeout, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_Any_WeightedUpstream {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_Any_WeightedUpstream,
    } as Handler_Any_WeightedUpstream;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.weight = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.minTimeout = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_Any_WeightedUpstream>
  ): Handler_Any_WeightedUpstream {
    const message = {
      ...baseHandler_Any_WeightedUpstream,
    } as Handler_Any_WeightedUpstream;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    } else {
      message.weight = 0;
    }
    if (object.minTimeout !== undefined && object.minTimeout !== null) {
      message.minTimeout = Duration.fromPartial(object.minTimeout);
    } else {
      message.minTimeout = undefined;
    }
    return message;
  },
};

const baseHandler_Any_NgrokMetrics: object = {};

export const Handler_Any_NgrokMetrics = {
  encode(
    message: Handler_Any_NgrokMetrics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_Any_NgrokMetrics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_Any_NgrokMetrics,
    } as Handler_Any_NgrokMetrics;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_Any_NgrokMetrics>
  ): Handler_Any_NgrokMetrics {
    const message = {
      ...baseHandler_Any_NgrokMetrics,
    } as Handler_Any_NgrokMetrics;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    return message;
  },
};

const baseHandler_TCP: object = {};

export const Handler_TCP = {
  encode(_: Handler_TCP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler_TCP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_TCP } as Handler_TCP;
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

  fromPartial(_: DeepPartial<Handler_TCP>): Handler_TCP {
    const message = { ...baseHandler_TCP } as Handler_TCP;
    return message;
  },
};

const baseHandler_TCP_Accept: object = {};

export const Handler_TCP_Accept = {
  encode(
    message: Handler_TCP_Accept,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler_TCP_Accept {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_TCP_Accept } as Handler_TCP_Accept;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Handler_TCP_Accept>): Handler_TCP_Accept {
    const message = { ...baseHandler_TCP_Accept } as Handler_TCP_Accept;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    return message;
  },
};

const baseHandler_TCP_HandlerTimeout: object = {};

export const Handler_TCP_HandlerTimeout = {
  encode(
    message: Handler_TCP_HandlerTimeout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(10).fork()).ldelim();
    }
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(18).fork()).ldelim();
    }
    if (message.onTimeout !== undefined) {
      Handler.encode(message.onTimeout, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_TCP_HandlerTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_TCP_HandlerTimeout,
    } as Handler_TCP_HandlerTimeout;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeout = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 3:
          message.onTimeout = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_TCP_HandlerTimeout>
  ): Handler_TCP_HandlerTimeout {
    const message = {
      ...baseHandler_TCP_HandlerTimeout,
    } as Handler_TCP_HandlerTimeout;
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = Duration.fromPartial(object.timeout);
    } else {
      message.timeout = undefined;
    }
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.onTimeout !== undefined && object.onTimeout !== null) {
      message.onTimeout = Handler.fromPartial(object.onTimeout);
    } else {
      message.onTimeout = undefined;
    }
    return message;
  },
};

const baseHandler_TCP_TLS: object = {};

export const Handler_TCP_TLS = {
  encode(
    message: Handler_TCP_TLS,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    if (message.config !== undefined) {
      TLSConfig_ServerConfig.encode(
        message.config,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.handshakeTimeout !== undefined) {
      Duration.encode(
        message.handshakeTimeout,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.sniError !== undefined) {
      Handler.encode(message.sniError, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler_TCP_TLS {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_TCP_TLS } as Handler_TCP_TLS;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.config = TLSConfig_ServerConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.handshakeTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.sniError = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Handler_TCP_TLS>): Handler_TCP_TLS {
    const message = { ...baseHandler_TCP_TLS } as Handler_TCP_TLS;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = TLSConfig_ServerConfig.fromPartial(object.config);
    } else {
      message.config = undefined;
    }
    if (
      object.handshakeTimeout !== undefined &&
      object.handshakeTimeout !== null
    ) {
      message.handshakeTimeout = Duration.fromPartial(object.handshakeTimeout);
    } else {
      message.handshakeTimeout = undefined;
    }
    if (object.sniError !== undefined && object.sniError !== null) {
      message.sniError = Handler.fromPartial(object.sniError);
    } else {
      message.sniError = undefined;
    }
    return message;
  },
};

const baseHandler_HTTP: object = {};

export const Handler_HTTP = {
  encode(
    _: Handler_HTTP,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler_HTTP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_HTTP } as Handler_HTTP;
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

  fromPartial(_: DeepPartial<Handler_HTTP>): Handler_HTTP {
    const message = { ...baseHandler_HTTP } as Handler_HTTP;
    return message;
  },
};

const baseHandler_HTTP_Start: object = { maxHeaderBytes: 0 };

export const Handler_HTTP_Start = {
  encode(
    message: Handler_HTTP_Start,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxHeaderBytes !== 0) {
      writer.uint32(16).int64(message.maxHeaderBytes);
    }
    if (message.readHeaderTimeout !== undefined) {
      Duration.encode(
        message.readHeaderTimeout,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.clientDrainTimeout !== undefined) {
      Duration.encode(
        message.clientDrainTimeout,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler_HTTP_Start {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_HTTP_Start } as Handler_HTTP_Start;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxHeaderBytes = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.readHeaderTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.clientDrainTimeout = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Handler_HTTP_Start>): Handler_HTTP_Start {
    const message = { ...baseHandler_HTTP_Start } as Handler_HTTP_Start;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.maxHeaderBytes !== undefined && object.maxHeaderBytes !== null) {
      message.maxHeaderBytes = object.maxHeaderBytes;
    } else {
      message.maxHeaderBytes = 0;
    }
    if (
      object.readHeaderTimeout !== undefined &&
      object.readHeaderTimeout !== null
    ) {
      message.readHeaderTimeout = Duration.fromPartial(
        object.readHeaderTimeout
      );
    } else {
      message.readHeaderTimeout = undefined;
    }
    if (
      object.clientDrainTimeout !== undefined &&
      object.clientDrainTimeout !== null
    ) {
      message.clientDrainTimeout = Duration.fromPartial(
        object.clientDrainTimeout
      );
    } else {
      message.clientDrainTimeout = undefined;
    }
    return message;
  },
};

const baseHandler_HTTP_FileSystem: object = { path: "" };

export const Handler_HTTP_FileSystem = {
  encode(
    message: Handler_HTTP_FileSystem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_FileSystem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_FileSystem,
    } as Handler_HTTP_FileSystem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_FileSystem>
  ): Handler_HTTP_FileSystem {
    const message = {
      ...baseHandler_HTTP_FileSystem,
    } as Handler_HTTP_FileSystem;
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = "";
    }
    return message;
  },
};

const baseHandler_HTTP_BasicAuth: object = { realm: "", allowOptions: false };

export const Handler_HTTP_BasicAuth = {
  encode(
    message: Handler_HTTP_BasicAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.realm !== "") {
      writer.uint32(18).string(message.realm);
    }
    if (message.authorized !== undefined) {
      Handler.encode(message.authorized, writer.uint32(26).fork()).ldelim();
    }
    if (message.unauthorized !== undefined) {
      Handler.encode(message.unauthorized, writer.uint32(34).fork()).ldelim();
    }
    if (message.authProvider !== undefined) {
      AuthProvider.encode(
        message.authProvider,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.allowOptions === true) {
      writer.uint32(48).bool(message.allowOptions);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_BasicAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_HTTP_BasicAuth } as Handler_HTTP_BasicAuth;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.realm = reader.string();
          break;
        case 3:
          message.authorized = Handler.decode(reader, reader.uint32());
          break;
        case 4:
          message.unauthorized = Handler.decode(reader, reader.uint32());
          break;
        case 5:
          message.authProvider = AuthProvider.decode(reader, reader.uint32());
          break;
        case 6:
          message.allowOptions = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_BasicAuth>
  ): Handler_HTTP_BasicAuth {
    const message = { ...baseHandler_HTTP_BasicAuth } as Handler_HTTP_BasicAuth;
    if (object.realm !== undefined && object.realm !== null) {
      message.realm = object.realm;
    } else {
      message.realm = "";
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = Handler.fromPartial(object.authorized);
    } else {
      message.authorized = undefined;
    }
    if (object.unauthorized !== undefined && object.unauthorized !== null) {
      message.unauthorized = Handler.fromPartial(object.unauthorized);
    } else {
      message.unauthorized = undefined;
    }
    if (object.authProvider !== undefined && object.authProvider !== null) {
      message.authProvider = AuthProvider.fromPartial(object.authProvider);
    } else {
      message.authProvider = undefined;
    }
    if (object.allowOptions !== undefined && object.allowOptions !== null) {
      message.allowOptions = object.allowOptions;
    } else {
      message.allowOptions = false;
    }
    return message;
  },
};

const baseHandler_HTTP_LegacyBasicAuth: object = {};

export const Handler_HTTP_LegacyBasicAuth = {
  encode(
    message: Handler_HTTP_LegacyBasicAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hashedAuth.length !== 0) {
      writer.uint32(10).bytes(message.hashedAuth);
    }
    if (message.authorized !== undefined) {
      Handler.encode(message.authorized, writer.uint32(18).fork()).ldelim();
    }
    if (message.unauthorized !== undefined) {
      Handler.encode(message.unauthorized, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_LegacyBasicAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_LegacyBasicAuth,
    } as Handler_HTTP_LegacyBasicAuth;
    message.hashedAuth = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashedAuth = reader.bytes();
          break;
        case 2:
          message.authorized = Handler.decode(reader, reader.uint32());
          break;
        case 3:
          message.unauthorized = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_LegacyBasicAuth>
  ): Handler_HTTP_LegacyBasicAuth {
    const message = {
      ...baseHandler_HTTP_LegacyBasicAuth,
    } as Handler_HTTP_LegacyBasicAuth;
    if (object.hashedAuth !== undefined && object.hashedAuth !== null) {
      message.hashedAuth = object.hashedAuth;
    } else {
      message.hashedAuth = new Uint8Array();
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = Handler.fromPartial(object.authorized);
    } else {
      message.authorized = undefined;
    }
    if (object.unauthorized !== undefined && object.unauthorized !== null) {
      message.unauthorized = Handler.fromPartial(object.unauthorized);
    } else {
      message.unauthorized = undefined;
    }
    return message;
  },
};

const baseHandler_HTTP_RequestHeaders: object = { removeHeaders: "" };

export const Handler_HTTP_RequestHeaders = {
  encode(
    message: Handler_HTTP_RequestHeaders,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.addHeaders).forEach(([key, value]) => {
      Handler_HTTP_RequestHeaders_AddHeadersEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    for (const v of message.removeHeaders) {
      writer.uint32(18).string(v!);
    }
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_RequestHeaders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_RequestHeaders,
    } as Handler_HTTP_RequestHeaders;
    message.addHeaders = {};
    message.removeHeaders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Handler_HTTP_RequestHeaders_AddHeadersEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.addHeaders[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.removeHeaders.push(reader.string());
          break;
        case 3:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_RequestHeaders>
  ): Handler_HTTP_RequestHeaders {
    const message = {
      ...baseHandler_HTTP_RequestHeaders,
    } as Handler_HTTP_RequestHeaders;
    message.addHeaders = {};
    message.removeHeaders = [];
    if (object.addHeaders !== undefined && object.addHeaders !== null) {
      Object.entries(object.addHeaders).forEach(([key, value]) => {
        if (value !== undefined) {
          message.addHeaders[key] = String(value);
        }
      });
    }
    if (object.removeHeaders !== undefined && object.removeHeaders !== null) {
      for (const e of object.removeHeaders) {
        message.removeHeaders.push(e);
      }
    }
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    return message;
  },
};

const baseHandler_HTTP_RequestHeaders_AddHeadersEntry: object = {
  key: "",
  value: "",
};

export const Handler_HTTP_RequestHeaders_AddHeadersEntry = {
  encode(
    message: Handler_HTTP_RequestHeaders_AddHeadersEntry,
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
  ): Handler_HTTP_RequestHeaders_AddHeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_RequestHeaders_AddHeadersEntry,
    } as Handler_HTTP_RequestHeaders_AddHeadersEntry;
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
    object: DeepPartial<Handler_HTTP_RequestHeaders_AddHeadersEntry>
  ): Handler_HTTP_RequestHeaders_AddHeadersEntry {
    const message = {
      ...baseHandler_HTTP_RequestHeaders_AddHeadersEntry,
    } as Handler_HTTP_RequestHeaders_AddHeadersEntry;
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

const baseHandler_HTTP_ResponseHeaders: object = { removeHeaders: "" };

export const Handler_HTTP_ResponseHeaders = {
  encode(
    message: Handler_HTTP_ResponseHeaders,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.addHeaders).forEach(([key, value]) => {
      Handler_HTTP_ResponseHeaders_AddHeadersEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    for (const v of message.removeHeaders) {
      writer.uint32(18).string(v!);
    }
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_ResponseHeaders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_ResponseHeaders,
    } as Handler_HTTP_ResponseHeaders;
    message.addHeaders = {};
    message.removeHeaders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Handler_HTTP_ResponseHeaders_AddHeadersEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.addHeaders[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.removeHeaders.push(reader.string());
          break;
        case 3:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_ResponseHeaders>
  ): Handler_HTTP_ResponseHeaders {
    const message = {
      ...baseHandler_HTTP_ResponseHeaders,
    } as Handler_HTTP_ResponseHeaders;
    message.addHeaders = {};
    message.removeHeaders = [];
    if (object.addHeaders !== undefined && object.addHeaders !== null) {
      Object.entries(object.addHeaders).forEach(([key, value]) => {
        if (value !== undefined) {
          message.addHeaders[key] = String(value);
        }
      });
    }
    if (object.removeHeaders !== undefined && object.removeHeaders !== null) {
      for (const e of object.removeHeaders) {
        message.removeHeaders.push(e);
      }
    }
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    return message;
  },
};

const baseHandler_HTTP_ResponseHeaders_AddHeadersEntry: object = {
  key: "",
  value: "",
};

export const Handler_HTTP_ResponseHeaders_AddHeadersEntry = {
  encode(
    message: Handler_HTTP_ResponseHeaders_AddHeadersEntry,
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
  ): Handler_HTTP_ResponseHeaders_AddHeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_ResponseHeaders_AddHeadersEntry,
    } as Handler_HTTP_ResponseHeaders_AddHeadersEntry;
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
    object: DeepPartial<Handler_HTTP_ResponseHeaders_AddHeadersEntry>
  ): Handler_HTTP_ResponseHeaders_AddHeadersEntry {
    const message = {
      ...baseHandler_HTTP_ResponseHeaders_AddHeadersEntry,
    } as Handler_HTTP_ResponseHeaders_AddHeadersEntry;
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

const baseHandler_HTTP_Compress: object = {};

export const Handler_HTTP_Compress = {
  encode(
    message: Handler_HTTP_Compress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_Compress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_HTTP_Compress } as Handler_HTTP_Compress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_Compress>
  ): Handler_HTTP_Compress {
    const message = { ...baseHandler_HTTP_Compress } as Handler_HTTP_Compress;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    return message;
  },
};

const baseHandler_HTTP_WebhookValidation: object = { provider: 0 };

export const Handler_HTTP_WebhookValidation = {
  encode(
    message: Handler_HTTP_WebhookValidation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authorized !== undefined) {
      Handler.encode(message.authorized, writer.uint32(10).fork()).ldelim();
    }
    if (message.unauthorized !== undefined) {
      Handler.encode(message.unauthorized, writer.uint32(18).fork()).ldelim();
    }
    if (message.provider !== 0) {
      writer.uint32(24).int32(message.provider);
    }
    if (message.secret.length !== 0) {
      writer.uint32(34).bytes(message.secret);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_WebhookValidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_WebhookValidation,
    } as Handler_HTTP_WebhookValidation;
    message.secret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorized = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.unauthorized = Handler.decode(reader, reader.uint32());
          break;
        case 3:
          message.provider = reader.int32() as any;
          break;
        case 4:
          message.secret = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_WebhookValidation>
  ): Handler_HTTP_WebhookValidation {
    const message = {
      ...baseHandler_HTTP_WebhookValidation,
    } as Handler_HTTP_WebhookValidation;
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = Handler.fromPartial(object.authorized);
    } else {
      message.authorized = undefined;
    }
    if (object.unauthorized !== undefined && object.unauthorized !== null) {
      message.unauthorized = Handler.fromPartial(object.unauthorized);
    } else {
      message.unauthorized = undefined;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = 0;
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = object.secret;
    } else {
      message.secret = new Uint8Array();
    }
    return message;
  },
};

const baseHandler_HTTP_CircuitBreaker: object = {
  numBuckets: 0,
  volumeThreshold: 0,
  errorThresholdPercentage: 0,
};

export const Handler_HTTP_CircuitBreaker = {
  encode(
    message: Handler_HTTP_CircuitBreaker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    if (message.tripped !== undefined) {
      Handler.encode(message.tripped, writer.uint32(18).fork()).ldelim();
    }
    if (message.trippedDuration !== undefined) {
      Duration.encode(
        message.trippedDuration,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.rollingWindow !== undefined) {
      Duration.encode(message.rollingWindow, writer.uint32(34).fork()).ldelim();
    }
    if (message.numBuckets !== 0) {
      writer.uint32(40).uint32(message.numBuckets);
    }
    if (message.volumeThreshold !== 0) {
      writer.uint32(48).uint32(message.volumeThreshold);
    }
    if (message.errorThresholdPercentage !== 0) {
      writer.uint32(57).double(message.errorThresholdPercentage);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_CircuitBreaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_CircuitBreaker,
    } as Handler_HTTP_CircuitBreaker;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.tripped = Handler.decode(reader, reader.uint32());
          break;
        case 3:
          message.trippedDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.rollingWindow = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.numBuckets = reader.uint32();
          break;
        case 6:
          message.volumeThreshold = reader.uint32();
          break;
        case 7:
          message.errorThresholdPercentage = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_CircuitBreaker>
  ): Handler_HTTP_CircuitBreaker {
    const message = {
      ...baseHandler_HTTP_CircuitBreaker,
    } as Handler_HTTP_CircuitBreaker;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.tripped !== undefined && object.tripped !== null) {
      message.tripped = Handler.fromPartial(object.tripped);
    } else {
      message.tripped = undefined;
    }
    if (
      object.trippedDuration !== undefined &&
      object.trippedDuration !== null
    ) {
      message.trippedDuration = Duration.fromPartial(object.trippedDuration);
    } else {
      message.trippedDuration = undefined;
    }
    if (object.rollingWindow !== undefined && object.rollingWindow !== null) {
      message.rollingWindow = Duration.fromPartial(object.rollingWindow);
    } else {
      message.rollingWindow = undefined;
    }
    if (object.numBuckets !== undefined && object.numBuckets !== null) {
      message.numBuckets = object.numBuckets;
    } else {
      message.numBuckets = 0;
    }
    if (
      object.volumeThreshold !== undefined &&
      object.volumeThreshold !== null
    ) {
      message.volumeThreshold = object.volumeThreshold;
    } else {
      message.volumeThreshold = 0;
    }
    if (
      object.errorThresholdPercentage !== undefined &&
      object.errorThresholdPercentage !== null
    ) {
      message.errorThresholdPercentage = object.errorThresholdPercentage;
    } else {
      message.errorThresholdPercentage = 0;
    }
    return message;
  },
};

const baseHandler_HTTP_MaxBodySize: object = { maxSize: 0 };

export const Handler_HTTP_MaxBodySize = {
  encode(
    message: Handler_HTTP_MaxBodySize,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxSize !== 0) {
      writer.uint32(16).int64(message.maxSize);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_MaxBodySize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_MaxBodySize,
    } as Handler_HTTP_MaxBodySize;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxSize = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_MaxBodySize>
  ): Handler_HTTP_MaxBodySize {
    const message = {
      ...baseHandler_HTTP_MaxBodySize,
    } as Handler_HTTP_MaxBodySize;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.maxSize !== undefined && object.maxSize !== null) {
      message.maxSize = object.maxSize;
    } else {
      message.maxSize = 0;
    }
    return message;
  },
};

const baseHandler_HTTP_UserSession: object = { cookiePrefix: "", sameSite: 0 };

export const Handler_HTTP_UserSession = {
  encode(
    message: Handler_HTTP_UserSession,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    if (message.cookiePrefix !== "") {
      writer.uint32(18).string(message.cookiePrefix);
    }
    if (message.inactivityTimeout !== undefined) {
      Duration.encode(
        message.inactivityTimeout,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.maxDuration !== undefined) {
      Duration.encode(message.maxDuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.sameSite !== 0) {
      writer.uint32(40).int32(message.sameSite);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_UserSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_UserSession,
    } as Handler_HTTP_UserSession;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.cookiePrefix = reader.string();
          break;
        case 3:
          message.inactivityTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.maxDuration = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.sameSite = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_UserSession>
  ): Handler_HTTP_UserSession {
    const message = {
      ...baseHandler_HTTP_UserSession,
    } as Handler_HTTP_UserSession;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.cookiePrefix !== undefined && object.cookiePrefix !== null) {
      message.cookiePrefix = object.cookiePrefix;
    } else {
      message.cookiePrefix = "";
    }
    if (
      object.inactivityTimeout !== undefined &&
      object.inactivityTimeout !== null
    ) {
      message.inactivityTimeout = Duration.fromPartial(
        object.inactivityTimeout
      );
    } else {
      message.inactivityTimeout = undefined;
    }
    if (object.maxDuration !== undefined && object.maxDuration !== null) {
      message.maxDuration = Duration.fromPartial(object.maxDuration);
    } else {
      message.maxDuration = undefined;
    }
    if (object.sameSite !== undefined && object.sameSite !== null) {
      message.sameSite = object.sameSite;
    } else {
      message.sameSite = 0;
    }
    return message;
  },
};

const baseHandler_HTTP_Mux: object = {};

export const Handler_HTTP_Mux = {
  encode(
    message: Handler_HTTP_Mux,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rules) {
      Handler_HTTP_Mux_Rule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.noMatch !== undefined) {
      Handler.encode(message.noMatch, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler_HTTP_Mux {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_HTTP_Mux } as Handler_HTTP_Mux;
    message.rules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(
            Handler_HTTP_Mux_Rule.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.noMatch = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Handler_HTTP_Mux>): Handler_HTTP_Mux {
    const message = { ...baseHandler_HTTP_Mux } as Handler_HTTP_Mux;
    message.rules = [];
    if (object.rules !== undefined && object.rules !== null) {
      for (const e of object.rules) {
        message.rules.push(Handler_HTTP_Mux_Rule.fromPartial(e));
      }
    }
    if (object.noMatch !== undefined && object.noMatch !== null) {
      message.noMatch = Handler.fromPartial(object.noMatch);
    } else {
      message.noMatch = undefined;
    }
    return message;
  },
};

const baseHandler_HTTP_Mux_Rule: object = {
  methods: "",
  matchType: 0,
  host: "",
  match: "",
  priority: 0,
  hasPriority: false,
};

export const Handler_HTTP_Mux_Rule = {
  encode(
    message: Handler_HTTP_Mux_Rule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.methods) {
      writer.uint32(18).string(v!);
    }
    if (message.matchType !== 0) {
      writer.uint32(56).int32(message.matchType);
    }
    if (message.host !== "") {
      writer.uint32(34).string(message.host);
    }
    if (message.match !== "") {
      writer.uint32(26).string(message.match);
    }
    if (message.priority !== 0) {
      writer.uint32(64).uint32(message.priority);
    }
    if (message.hasPriority === true) {
      writer.uint32(48).bool(message.hasPriority);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_Mux_Rule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_HTTP_Mux_Rule } as Handler_HTTP_Mux_Rule;
    message.methods = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.methods.push(reader.string());
          break;
        case 7:
          message.matchType = reader.int32() as any;
          break;
        case 4:
          message.host = reader.string();
          break;
        case 3:
          message.match = reader.string();
          break;
        case 8:
          message.priority = reader.uint32();
          break;
        case 6:
          message.hasPriority = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_Mux_Rule>
  ): Handler_HTTP_Mux_Rule {
    const message = { ...baseHandler_HTTP_Mux_Rule } as Handler_HTTP_Mux_Rule;
    message.methods = [];
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.methods !== undefined && object.methods !== null) {
      for (const e of object.methods) {
        message.methods.push(e);
      }
    }
    if (object.matchType !== undefined && object.matchType !== null) {
      message.matchType = object.matchType;
    } else {
      message.matchType = 0;
    }
    if (object.host !== undefined && object.host !== null) {
      message.host = object.host;
    } else {
      message.host = "";
    }
    if (object.match !== undefined && object.match !== null) {
      message.match = object.match;
    } else {
      message.match = "";
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = object.priority;
    } else {
      message.priority = 0;
    }
    if (object.hasPriority !== undefined && object.hasPriority !== null) {
      message.hasPriority = object.hasPriority;
    } else {
      message.hasPriority = false;
    }
    return message;
  },
};

const baseHandler_HTTP_NgrokACMERedirect: object = { redirectHostname: "" };

export const Handler_HTTP_NgrokACMERedirect = {
  encode(
    message: Handler_HTTP_NgrokACMERedirect,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.redirectHostname !== "") {
      writer.uint32(10).string(message.redirectHostname);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_NgrokACMERedirect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_NgrokACMERedirect,
    } as Handler_HTTP_NgrokACMERedirect;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redirectHostname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_NgrokACMERedirect>
  ): Handler_HTTP_NgrokACMERedirect {
    const message = {
      ...baseHandler_HTTP_NgrokACMERedirect,
    } as Handler_HTTP_NgrokACMERedirect;
    if (
      object.redirectHostname !== undefined &&
      object.redirectHostname !== null
    ) {
      message.redirectHostname = object.redirectHostname;
    } else {
      message.redirectHostname = "";
    }
    return message;
  },
};

const baseHandler_HTTP_FederatedAuth: object = {
  version: "",
  idpAuthnUrl: "",
  idpLogoutUrl: "",
  opaqueId: "",
  callbackPath: "",
  allowOptions: false,
};

export const Handler_HTTP_FederatedAuth = {
  encode(
    message: Handler_HTTP_FederatedAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.idpAuthnUrl !== "") {
      writer.uint32(26).string(message.idpAuthnUrl);
    }
    if (message.idpLogoutUrl !== "") {
      writer.uint32(34).string(message.idpLogoutUrl);
    }
    if (message.opaqueId !== "") {
      writer.uint32(42).string(message.opaqueId);
    }
    if (message.callbackPath !== "") {
      writer.uint32(50).string(message.callbackPath);
    }
    if (message.authCheckInterval !== undefined) {
      Duration.encode(
        message.authCheckInterval,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.allowOptions === true) {
      writer.uint32(64).bool(message.allowOptions);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_FederatedAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_FederatedAuth,
    } as Handler_HTTP_FederatedAuth;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.idpAuthnUrl = reader.string();
          break;
        case 4:
          message.idpLogoutUrl = reader.string();
          break;
        case 5:
          message.opaqueId = reader.string();
          break;
        case 6:
          message.callbackPath = reader.string();
          break;
        case 7:
          message.authCheckInterval = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.allowOptions = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_FederatedAuth>
  ): Handler_HTTP_FederatedAuth {
    const message = {
      ...baseHandler_HTTP_FederatedAuth,
    } as Handler_HTTP_FederatedAuth;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    if (object.idpAuthnUrl !== undefined && object.idpAuthnUrl !== null) {
      message.idpAuthnUrl = object.idpAuthnUrl;
    } else {
      message.idpAuthnUrl = "";
    }
    if (object.idpLogoutUrl !== undefined && object.idpLogoutUrl !== null) {
      message.idpLogoutUrl = object.idpLogoutUrl;
    } else {
      message.idpLogoutUrl = "";
    }
    if (object.opaqueId !== undefined && object.opaqueId !== null) {
      message.opaqueId = object.opaqueId;
    } else {
      message.opaqueId = "";
    }
    if (object.callbackPath !== undefined && object.callbackPath !== null) {
      message.callbackPath = object.callbackPath;
    } else {
      message.callbackPath = "";
    }
    if (
      object.authCheckInterval !== undefined &&
      object.authCheckInterval !== null
    ) {
      message.authCheckInterval = Duration.fromPartial(
        object.authCheckInterval
      );
    } else {
      message.authCheckInterval = undefined;
    }
    if (object.allowOptions !== undefined && object.allowOptions !== null) {
      message.allowOptions = object.allowOptions;
    } else {
      message.allowOptions = false;
    }
    return message;
  },
};

const baseHandler_HTTP_NotFound: object = {};

export const Handler_HTTP_NotFound = {
  encode(
    _: Handler_HTTP_NotFound,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_NotFound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_HTTP_NotFound } as Handler_HTTP_NotFound;
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

  fromPartial(_: DeepPartial<Handler_HTTP_NotFound>): Handler_HTTP_NotFound {
    const message = { ...baseHandler_HTTP_NotFound } as Handler_HTTP_NotFound;
    return message;
  },
};

const baseHandler_HTTP_ContentBanFilter: object = {
  samplingRate: 0,
  unsampledResponseCount: 0,
  maxBufferSize: 0,
  minCheckLength: 0,
  bannedPathRegexps: "",
  bannedContentRegexps: "",
};

export const Handler_HTTP_ContentBanFilter = {
  encode(
    message: Handler_HTTP_ContentBanFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextBanned !== undefined) {
      Handler.encode(message.nextBanned, writer.uint32(50).fork()).ldelim();
    }
    if (message.samplingRate !== 0) {
      writer.uint32(17).double(message.samplingRate);
    }
    if (message.unsampledResponseCount !== 0) {
      writer.uint32(24).int64(message.unsampledResponseCount);
    }
    if (message.maxBufferSize !== 0) {
      writer.uint32(32).uint64(message.maxBufferSize);
    }
    if (message.minCheckLength !== 0) {
      writer.uint32(40).uint64(message.minCheckLength);
    }
    for (const v of message.bannedPathRegexps) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.bannedContentRegexps) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_ContentBanFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_ContentBanFilter,
    } as Handler_HTTP_ContentBanFilter;
    message.bannedPathRegexps = [];
    message.bannedContentRegexps = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 6:
          message.nextBanned = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.samplingRate = reader.double();
          break;
        case 3:
          message.unsampledResponseCount = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.maxBufferSize = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.minCheckLength = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.bannedPathRegexps.push(reader.string());
          break;
        case 8:
          message.bannedContentRegexps.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_ContentBanFilter>
  ): Handler_HTTP_ContentBanFilter {
    const message = {
      ...baseHandler_HTTP_ContentBanFilter,
    } as Handler_HTTP_ContentBanFilter;
    message.bannedPathRegexps = [];
    message.bannedContentRegexps = [];
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.nextBanned !== undefined && object.nextBanned !== null) {
      message.nextBanned = Handler.fromPartial(object.nextBanned);
    } else {
      message.nextBanned = undefined;
    }
    if (object.samplingRate !== undefined && object.samplingRate !== null) {
      message.samplingRate = object.samplingRate;
    } else {
      message.samplingRate = 0;
    }
    if (
      object.unsampledResponseCount !== undefined &&
      object.unsampledResponseCount !== null
    ) {
      message.unsampledResponseCount = object.unsampledResponseCount;
    } else {
      message.unsampledResponseCount = 0;
    }
    if (object.maxBufferSize !== undefined && object.maxBufferSize !== null) {
      message.maxBufferSize = object.maxBufferSize;
    } else {
      message.maxBufferSize = 0;
    }
    if (object.minCheckLength !== undefined && object.minCheckLength !== null) {
      message.minCheckLength = object.minCheckLength;
    } else {
      message.minCheckLength = 0;
    }
    if (
      object.bannedPathRegexps !== undefined &&
      object.bannedPathRegexps !== null
    ) {
      for (const e of object.bannedPathRegexps) {
        message.bannedPathRegexps.push(e);
      }
    }
    if (
      object.bannedContentRegexps !== undefined &&
      object.bannedContentRegexps !== null
    ) {
      for (const e of object.bannedContentRegexps) {
        message.bannedContentRegexps.push(e);
      }
    }
    return message;
  },
};

const baseHandler_HTTP_IfHeader: object = { header: "" };

export const Handler_HTTP_IfHeader = {
  encode(
    message: Handler_HTTP_IfHeader,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.match !== undefined) {
      Handler.encode(message.match, writer.uint32(10).fork()).ldelim();
    }
    if (message.noMatch !== undefined) {
      Handler.encode(message.noMatch, writer.uint32(18).fork()).ldelim();
    }
    if (message.header !== "") {
      writer.uint32(26).string(message.header);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_IfHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_HTTP_IfHeader } as Handler_HTTP_IfHeader;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.match = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.noMatch = Handler.decode(reader, reader.uint32());
          break;
        case 3:
          message.header = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_IfHeader>
  ): Handler_HTTP_IfHeader {
    const message = { ...baseHandler_HTTP_IfHeader } as Handler_HTTP_IfHeader;
    if (object.match !== undefined && object.match !== null) {
      message.match = Handler.fromPartial(object.match);
    } else {
      message.match = undefined;
    }
    if (object.noMatch !== undefined && object.noMatch !== null) {
      message.noMatch = Handler.fromPartial(object.noMatch);
    } else {
      message.noMatch = undefined;
    }
    if (object.header !== undefined && object.header !== null) {
      message.header = object.header;
    } else {
      message.header = "";
    }
    return message;
  },
};

const baseHandler_HTTP_WebsocketTCPConverter: object = {};

export const Handler_HTTP_WebsocketTCPConverter = {
  encode(
    message: Handler_HTTP_WebsocketTCPConverter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.onUpgrade !== undefined) {
      Handler.encode(message.onUpgrade, writer.uint32(10).fork()).ldelim();
    }
    if (message.onNoUpgrade !== undefined) {
      Handler.encode(message.onNoUpgrade, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_WebsocketTCPConverter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_WebsocketTCPConverter,
    } as Handler_HTTP_WebsocketTCPConverter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.onUpgrade = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.onNoUpgrade = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_WebsocketTCPConverter>
  ): Handler_HTTP_WebsocketTCPConverter {
    const message = {
      ...baseHandler_HTTP_WebsocketTCPConverter,
    } as Handler_HTTP_WebsocketTCPConverter;
    if (object.onUpgrade !== undefined && object.onUpgrade !== null) {
      message.onUpgrade = Handler.fromPartial(object.onUpgrade);
    } else {
      message.onUpgrade = undefined;
    }
    if (object.onNoUpgrade !== undefined && object.onNoUpgrade !== null) {
      message.onNoUpgrade = Handler.fromPartial(object.onNoUpgrade);
    } else {
      message.onNoUpgrade = undefined;
    }
    return message;
  },
};

const baseHandler_HTTP_Match: object = {};

export const Handler_HTTP_Match = {
  encode(
    message: Handler_HTTP_Match,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rules) {
      Handler_HTTP_Match_MatchRule.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.noMatch !== undefined) {
      Handler.encode(message.noMatch, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handler_HTTP_Match {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandler_HTTP_Match } as Handler_HTTP_Match;
    message.rules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(
            Handler_HTTP_Match_MatchRule.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.noMatch = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Handler_HTTP_Match>): Handler_HTTP_Match {
    const message = { ...baseHandler_HTTP_Match } as Handler_HTTP_Match;
    message.rules = [];
    if (object.rules !== undefined && object.rules !== null) {
      for (const e of object.rules) {
        message.rules.push(Handler_HTTP_Match_MatchRule.fromPartial(e));
      }
    }
    if (object.noMatch !== undefined && object.noMatch !== null) {
      message.noMatch = Handler.fromPartial(object.noMatch);
    } else {
      message.noMatch = undefined;
    }
    return message;
  },
};

const baseHandler_HTTP_Match_MatchRule: object = { matchExpression: "" };

export const Handler_HTTP_Match_MatchRule = {
  encode(
    message: Handler_HTTP_Match_MatchRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.matchExpression !== "") {
      writer.uint32(10).string(message.matchExpression);
    }
    if (message.onMatch !== undefined) {
      Handler.encode(message.onMatch, writer.uint32(18).fork()).ldelim();
    }
    if (message.checkedMatch !== undefined) {
      CheckedExpr.encode(
        message.checkedMatch,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_Match_MatchRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_Match_MatchRule,
    } as Handler_HTTP_Match_MatchRule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchExpression = reader.string();
          break;
        case 2:
          message.onMatch = Handler.decode(reader, reader.uint32());
          break;
        case 3:
          message.checkedMatch = CheckedExpr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_Match_MatchRule>
  ): Handler_HTTP_Match_MatchRule {
    const message = {
      ...baseHandler_HTTP_Match_MatchRule,
    } as Handler_HTTP_Match_MatchRule;
    if (
      object.matchExpression !== undefined &&
      object.matchExpression !== null
    ) {
      message.matchExpression = object.matchExpression;
    } else {
      message.matchExpression = "";
    }
    if (object.onMatch !== undefined && object.onMatch !== null) {
      message.onMatch = Handler.fromPartial(object.onMatch);
    } else {
      message.onMatch = undefined;
    }
    if (object.checkedMatch !== undefined && object.checkedMatch !== null) {
      message.checkedMatch = CheckedExpr.fromPartial(object.checkedMatch);
    } else {
      message.checkedMatch = undefined;
    }
    return message;
  },
};

const baseHandler_HTTP_MatchResponse: object = {};

export const Handler_HTTP_MatchResponse = {
  encode(
    message: Handler_HTTP_MatchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rules) {
      Handler_HTTP_MatchResponse_MatchRule.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_MatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_MatchResponse,
    } as Handler_HTTP_MatchResponse;
    message.rules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.rules.push(
            Handler_HTTP_MatchResponse_MatchRule.decode(reader, reader.uint32())
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
    object: DeepPartial<Handler_HTTP_MatchResponse>
  ): Handler_HTTP_MatchResponse {
    const message = {
      ...baseHandler_HTTP_MatchResponse,
    } as Handler_HTTP_MatchResponse;
    message.rules = [];
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.rules !== undefined && object.rules !== null) {
      for (const e of object.rules) {
        message.rules.push(Handler_HTTP_MatchResponse_MatchRule.fromPartial(e));
      }
    }
    return message;
  },
};

const baseHandler_HTTP_MatchResponse_MatchRule: object = {
  matchExpression: "",
};

export const Handler_HTTP_MatchResponse_MatchRule = {
  encode(
    message: Handler_HTTP_MatchResponse_MatchRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.matchExpression !== "") {
      writer.uint32(10).string(message.matchExpression);
    }
    if (message.onMatch !== undefined) {
      Handler.encode(message.onMatch, writer.uint32(18).fork()).ldelim();
    }
    if (message.checkedMatch !== undefined) {
      CheckedExpr.encode(
        message.checkedMatch,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_MatchResponse_MatchRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_MatchResponse_MatchRule,
    } as Handler_HTTP_MatchResponse_MatchRule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchExpression = reader.string();
          break;
        case 2:
          message.onMatch = Handler.decode(reader, reader.uint32());
          break;
        case 3:
          message.checkedMatch = CheckedExpr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_MatchResponse_MatchRule>
  ): Handler_HTTP_MatchResponse_MatchRule {
    const message = {
      ...baseHandler_HTTP_MatchResponse_MatchRule,
    } as Handler_HTTP_MatchResponse_MatchRule;
    if (
      object.matchExpression !== undefined &&
      object.matchExpression !== null
    ) {
      message.matchExpression = object.matchExpression;
    } else {
      message.matchExpression = "";
    }
    if (object.onMatch !== undefined && object.onMatch !== null) {
      message.onMatch = Handler.fromPartial(object.onMatch);
    } else {
      message.onMatch = undefined;
    }
    if (object.checkedMatch !== undefined && object.checkedMatch !== null) {
      message.checkedMatch = CheckedExpr.fromPartial(object.checkedMatch);
    } else {
      message.checkedMatch = undefined;
    }
    return message;
  },
};

const baseHandler_HTTP_InternalMetrics: object = {};

export const Handler_HTTP_InternalMetrics = {
  encode(
    message: Handler_HTTP_InternalMetrics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Handler_HTTP_InternalMetrics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHandler_HTTP_InternalMetrics,
    } as Handler_HTTP_InternalMetrics;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Handler_HTTP_InternalMetrics>
  ): Handler_HTTP_InternalMetrics {
    const message = {
      ...baseHandler_HTTP_InternalMetrics,
    } as Handler_HTTP_InternalMetrics;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    return message;
  },
};

const baseDialer: object = {};

export const Dialer = {
  encode(
    message: Dialer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.direct !== undefined) {
      Dialer_Direct.encode(message.direct, writer.uint32(10).fork()).ldelim();
    }
    if (message.withProxyProto !== undefined) {
      Dialer_WithProxyProto.encode(
        message.withProxyProto,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.withTunnel !== undefined) {
      Dialer_WithTunnel.encode(
        message.withTunnel,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.withConnPool !== undefined) {
      Dialer_WithConnPool.encode(
        message.withConnPool,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.withTls !== undefined) {
      Dialer_WithTLS.encode(message.withTls, writer.uint32(42).fork()).ldelim();
    }
    if (message.withRetries !== undefined) {
      Dialer_WithRetries.encode(
        message.withRetries,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.withTimeout !== undefined) {
      Dialer_WithTimeout.encode(
        message.withTimeout,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.withDelay !== undefined) {
      Dialer_WithDelay.encode(
        message.withDelay,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.withIdleTimeout !== undefined) {
      Dialer_WithIdleTimeout.encode(
        message.withIdleTimeout,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.withLiveness !== undefined) {
      Dialer_WithLiveness.encode(
        message.withLiveness,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.withExternal !== undefined) {
      Dialer_WithExternal.encode(
        message.withExternal,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dialer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer } as Dialer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.direct = Dialer_Direct.decode(reader, reader.uint32());
          break;
        case 2:
          message.withProxyProto = Dialer_WithProxyProto.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.withTunnel = Dialer_WithTunnel.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.withConnPool = Dialer_WithConnPool.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.withTls = Dialer_WithTLS.decode(reader, reader.uint32());
          break;
        case 6:
          message.withRetries = Dialer_WithRetries.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.withTimeout = Dialer_WithTimeout.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.withDelay = Dialer_WithDelay.decode(reader, reader.uint32());
          break;
        case 9:
          message.withIdleTimeout = Dialer_WithIdleTimeout.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.withLiveness = Dialer_WithLiveness.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.withExternal = Dialer_WithExternal.decode(
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

  fromPartial(object: DeepPartial<Dialer>): Dialer {
    const message = { ...baseDialer } as Dialer;
    if (object.direct !== undefined && object.direct !== null) {
      message.direct = Dialer_Direct.fromPartial(object.direct);
    } else {
      message.direct = undefined;
    }
    if (object.withProxyProto !== undefined && object.withProxyProto !== null) {
      message.withProxyProto = Dialer_WithProxyProto.fromPartial(
        object.withProxyProto
      );
    } else {
      message.withProxyProto = undefined;
    }
    if (object.withTunnel !== undefined && object.withTunnel !== null) {
      message.withTunnel = Dialer_WithTunnel.fromPartial(object.withTunnel);
    } else {
      message.withTunnel = undefined;
    }
    if (object.withConnPool !== undefined && object.withConnPool !== null) {
      message.withConnPool = Dialer_WithConnPool.fromPartial(
        object.withConnPool
      );
    } else {
      message.withConnPool = undefined;
    }
    if (object.withTls !== undefined && object.withTls !== null) {
      message.withTls = Dialer_WithTLS.fromPartial(object.withTls);
    } else {
      message.withTls = undefined;
    }
    if (object.withRetries !== undefined && object.withRetries !== null) {
      message.withRetries = Dialer_WithRetries.fromPartial(object.withRetries);
    } else {
      message.withRetries = undefined;
    }
    if (object.withTimeout !== undefined && object.withTimeout !== null) {
      message.withTimeout = Dialer_WithTimeout.fromPartial(object.withTimeout);
    } else {
      message.withTimeout = undefined;
    }
    if (object.withDelay !== undefined && object.withDelay !== null) {
      message.withDelay = Dialer_WithDelay.fromPartial(object.withDelay);
    } else {
      message.withDelay = undefined;
    }
    if (
      object.withIdleTimeout !== undefined &&
      object.withIdleTimeout !== null
    ) {
      message.withIdleTimeout = Dialer_WithIdleTimeout.fromPartial(
        object.withIdleTimeout
      );
    } else {
      message.withIdleTimeout = undefined;
    }
    if (object.withLiveness !== undefined && object.withLiveness !== null) {
      message.withLiveness = Dialer_WithLiveness.fromPartial(
        object.withLiveness
      );
    } else {
      message.withLiveness = undefined;
    }
    if (object.withExternal !== undefined && object.withExternal !== null) {
      message.withExternal = Dialer_WithExternal.fromPartial(
        object.withExternal
      );
    } else {
      message.withExternal = undefined;
    }
    return message;
  },
};

const baseDialer_Direct: object = { dualStack: false };

export const Dialer_Direct = {
  encode(
    message: Dialer_Direct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dualStack === true) {
      writer.uint32(8).bool(message.dualStack);
    }
    if (message.keepAlive !== undefined) {
      Duration.encode(message.keepAlive, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dialer_Direct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer_Direct } as Dialer_Direct;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dualStack = reader.bool();
          break;
        case 2:
          message.keepAlive = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Dialer_Direct>): Dialer_Direct {
    const message = { ...baseDialer_Direct } as Dialer_Direct;
    if (object.dualStack !== undefined && object.dualStack !== null) {
      message.dualStack = object.dualStack;
    } else {
      message.dualStack = false;
    }
    if (object.keepAlive !== undefined && object.keepAlive !== null) {
      message.keepAlive = Duration.fromPartial(object.keepAlive);
    } else {
      message.keepAlive = undefined;
    }
    return message;
  },
};

const baseDialer_WithExternal: object = {};

export const Dialer_WithExternal = {
  encode(
    _: Dialer_WithExternal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dialer_WithExternal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer_WithExternal } as Dialer_WithExternal;
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

  fromPartial(_: DeepPartial<Dialer_WithExternal>): Dialer_WithExternal {
    const message = { ...baseDialer_WithExternal } as Dialer_WithExternal;
    return message;
  },
};

const baseDialer_WithProxyProto: object = { version: 0 };

export const Dialer_WithProxyProto = {
  encode(
    message: Dialer_WithProxyProto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).int64(message.version);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Dialer_WithProxyProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer_WithProxyProto } as Dialer_WithProxyProto;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Dialer_WithProxyProto>
  ): Dialer_WithProxyProto {
    const message = { ...baseDialer_WithProxyProto } as Dialer_WithProxyProto;
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = 0;
    }
    return message;
  },
};

const baseDialer_WithTunnel: object = { tunnelId: "", proto: "", serverId: "" };

export const Dialer_WithTunnel = {
  encode(
    message: Dialer_WithTunnel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunnelId !== "") {
      writer.uint32(10).string(message.tunnelId);
    }
    if (message.proto !== "") {
      writer.uint32(18).string(message.proto);
    }
    if (message.serverId !== "") {
      writer.uint32(26).string(message.serverId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dialer_WithTunnel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer_WithTunnel } as Dialer_WithTunnel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.string();
          break;
        case 2:
          message.proto = reader.string();
          break;
        case 3:
          message.serverId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Dialer_WithTunnel>): Dialer_WithTunnel {
    const message = { ...baseDialer_WithTunnel } as Dialer_WithTunnel;
    if (object.tunnelId !== undefined && object.tunnelId !== null) {
      message.tunnelId = object.tunnelId;
    } else {
      message.tunnelId = "";
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = object.proto;
    } else {
      message.proto = "";
    }
    if (object.serverId !== undefined && object.serverId !== null) {
      message.serverId = object.serverId;
    } else {
      message.serverId = "";
    }
    return message;
  },
};

const baseDialer_WithConnPool: object = { size: 0 };

export const Dialer_WithConnPool = {
  encode(
    message: Dialer_WithConnPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dialer_WithConnPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer_WithConnPool } as Dialer_WithConnPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Dialer_WithConnPool>): Dialer_WithConnPool {
    const message = { ...baseDialer_WithConnPool } as Dialer_WithConnPool;
    if (object.size !== undefined && object.size !== null) {
      message.size = object.size;
    } else {
      message.size = 0;
    }
    return message;
  },
};

const baseDialer_WithTLS: object = {};

export const Dialer_WithTLS = {
  encode(
    message: Dialer_WithTLS,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      TLSConfig_ClientConfig.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dialer_WithTLS {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer_WithTLS } as Dialer_WithTLS;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = TLSConfig_ClientConfig.decode(
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

  fromPartial(object: DeepPartial<Dialer_WithTLS>): Dialer_WithTLS {
    const message = { ...baseDialer_WithTLS } as Dialer_WithTLS;
    if (object.config !== undefined && object.config !== null) {
      message.config = TLSConfig_ClientConfig.fromPartial(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },
};

const baseDialer_WithTimeout: object = {};

export const Dialer_WithTimeout = {
  encode(
    message: Dialer_WithTimeout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dialer_WithTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer_WithTimeout } as Dialer_WithTimeout;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeout = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Dialer_WithTimeout>): Dialer_WithTimeout {
    const message = { ...baseDialer_WithTimeout } as Dialer_WithTimeout;
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = Duration.fromPartial(object.timeout);
    } else {
      message.timeout = undefined;
    }
    return message;
  },
};

const baseDialer_WithIdleTimeout: object = {};

export const Dialer_WithIdleTimeout = {
  encode(
    message: Dialer_WithIdleTimeout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Dialer_WithIdleTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer_WithIdleTimeout } as Dialer_WithIdleTimeout;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeout = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Dialer_WithIdleTimeout>
  ): Dialer_WithIdleTimeout {
    const message = { ...baseDialer_WithIdleTimeout } as Dialer_WithIdleTimeout;
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = Duration.fromPartial(object.timeout);
    } else {
      message.timeout = undefined;
    }
    return message;
  },
};

const baseDialer_WithRetries: object = { attempts: 0 };

export const Dialer_WithRetries = {
  encode(
    message: Dialer_WithRetries,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.attempts !== 0) {
      writer.uint32(8).int64(message.attempts);
    }
    if (message.backoff !== undefined) {
      Dialer_WithRetries_Backoff.encode(
        message.backoff,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dialer_WithRetries {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer_WithRetries } as Dialer_WithRetries;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attempts = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.backoff = Dialer_WithRetries_Backoff.decode(
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

  fromPartial(object: DeepPartial<Dialer_WithRetries>): Dialer_WithRetries {
    const message = { ...baseDialer_WithRetries } as Dialer_WithRetries;
    if (object.attempts !== undefined && object.attempts !== null) {
      message.attempts = object.attempts;
    } else {
      message.attempts = 0;
    }
    if (object.backoff !== undefined && object.backoff !== null) {
      message.backoff = Dialer_WithRetries_Backoff.fromPartial(object.backoff);
    } else {
      message.backoff = undefined;
    }
    return message;
  },
};

const baseDialer_WithRetries_Backoff: object = {};

export const Dialer_WithRetries_Backoff = {
  encode(
    message: Dialer_WithRetries_Backoff,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exponentialBackoff !== undefined) {
      Dialer_WithRetries_ExponentialBackoff.encode(
        message.exponentialBackoff,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Dialer_WithRetries_Backoff {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDialer_WithRetries_Backoff,
    } as Dialer_WithRetries_Backoff;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exponentialBackoff =
            Dialer_WithRetries_ExponentialBackoff.decode(
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
    object: DeepPartial<Dialer_WithRetries_Backoff>
  ): Dialer_WithRetries_Backoff {
    const message = {
      ...baseDialer_WithRetries_Backoff,
    } as Dialer_WithRetries_Backoff;
    if (
      object.exponentialBackoff !== undefined &&
      object.exponentialBackoff !== null
    ) {
      message.exponentialBackoff =
        Dialer_WithRetries_ExponentialBackoff.fromPartial(
          object.exponentialBackoff
        );
    } else {
      message.exponentialBackoff = undefined;
    }
    return message;
  },
};

const baseDialer_WithRetries_ExponentialBackoff: object = {};

export const Dialer_WithRetries_ExponentialBackoff = {
  encode(
    message: Dialer_WithRetries_ExponentialBackoff,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== undefined) {
      Duration.encode(message.start, writer.uint32(10).fork()).ldelim();
    }
    if (message.max !== undefined) {
      Duration.encode(message.max, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Dialer_WithRetries_ExponentialBackoff {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDialer_WithRetries_ExponentialBackoff,
    } as Dialer_WithRetries_ExponentialBackoff;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.max = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Dialer_WithRetries_ExponentialBackoff>
  ): Dialer_WithRetries_ExponentialBackoff {
    const message = {
      ...baseDialer_WithRetries_ExponentialBackoff,
    } as Dialer_WithRetries_ExponentialBackoff;
    if (object.start !== undefined && object.start !== null) {
      message.start = Duration.fromPartial(object.start);
    } else {
      message.start = undefined;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = Duration.fromPartial(object.max);
    } else {
      message.max = undefined;
    }
    return message;
  },
};

const baseDialer_WithDelay: object = {};

export const Dialer_WithDelay = {
  encode(
    message: Dialer_WithDelay,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delay !== undefined) {
      Duration.encode(message.delay, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dialer_WithDelay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer_WithDelay } as Dialer_WithDelay;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delay = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Dialer_WithDelay>): Dialer_WithDelay {
    const message = { ...baseDialer_WithDelay } as Dialer_WithDelay;
    if (object.delay !== undefined && object.delay !== null) {
      message.delay = Duration.fromPartial(object.delay);
    } else {
      message.delay = undefined;
    }
    return message;
  },
};

const baseDialer_WithLiveness: object = { serverId: "" };

export const Dialer_WithLiveness = {
  encode(
    message: Dialer_WithLiveness,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serverId !== "") {
      writer.uint32(10).string(message.serverId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dialer_WithLiveness {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDialer_WithLiveness } as Dialer_WithLiveness;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Dialer_WithLiveness>): Dialer_WithLiveness {
    const message = { ...baseDialer_WithLiveness } as Dialer_WithLiveness;
    if (object.serverId !== undefined && object.serverId !== null) {
      message.serverId = object.serverId;
    } else {
      message.serverId = "";
    }
    return message;
  },
};

const baseAuthProvider: object = {};

export const AuthProvider = {
  encode(
    message: AuthProvider,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.static !== undefined) {
      AuthProvider_Static.encode(
        message.static,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthProvider } as AuthProvider;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.static = AuthProvider_Static.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AuthProvider>): AuthProvider {
    const message = { ...baseAuthProvider } as AuthProvider;
    if (object.static !== undefined && object.static !== null) {
      message.static = AuthProvider_Static.fromPartial(object.static);
    } else {
      message.static = undefined;
    }
    return message;
  },
};

const baseAuthProvider_Static: object = {};

export const AuthProvider_Static = {
  encode(
    message: AuthProvider_Static,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.entries) {
      AuthProvider_StaticEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthProvider_Static {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthProvider_Static } as AuthProvider_Static;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(
            AuthProvider_StaticEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AuthProvider_Static>): AuthProvider_Static {
    const message = { ...baseAuthProvider_Static } as AuthProvider_Static;
    message.entries = [];
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(AuthProvider_StaticEntry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAuthProvider_StaticEntry: object = { user: "", password: "" };

export const AuthProvider_StaticEntry = {
  encode(
    message: AuthProvider_StaticEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.hashedPassword.length !== 0) {
      writer.uint32(26).bytes(message.hashedPassword);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthProvider_StaticEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAuthProvider_StaticEntry,
    } as AuthProvider_StaticEntry;
    message.hashedPassword = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.password = reader.string();
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
    object: DeepPartial<AuthProvider_StaticEntry>
  ): AuthProvider_StaticEntry {
    const message = {
      ...baseAuthProvider_StaticEntry,
    } as AuthProvider_StaticEntry;
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    if (object.hashedPassword !== undefined && object.hashedPassword !== null) {
      message.hashedPassword = object.hashedPassword;
    } else {
      message.hashedPassword = new Uint8Array();
    }
    return message;
  },
};

const baseRoundRobin: object = {};

export const RoundRobin = {
  encode(
    message: RoundRobin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.upstreams) {
      WeightedUpstream.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoundRobin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoundRobin } as RoundRobin;
    message.upstreams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upstreams.push(
            WeightedUpstream.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<RoundRobin>): RoundRobin {
    const message = { ...baseRoundRobin } as RoundRobin;
    message.upstreams = [];
    if (object.upstreams !== undefined && object.upstreams !== null) {
      for (const e of object.upstreams) {
        message.upstreams.push(WeightedUpstream.fromPartial(e));
      }
    }
    return message;
  },
};

const baseWeightedUpstream: object = { name: "", weight: 0 };

export const WeightedUpstream = {
  encode(
    message: WeightedUpstream,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.next !== undefined) {
      Handler.encode(message.next, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.weight !== 0) {
      writer.uint32(24).uint64(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedUpstream {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWeightedUpstream } as WeightedUpstream;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next = Handler.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.weight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<WeightedUpstream>): WeightedUpstream {
    const message = { ...baseWeightedUpstream } as WeightedUpstream;
    if (object.next !== undefined && object.next !== null) {
      message.next = Handler.fromPartial(object.next);
    } else {
      message.next = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    } else {
      message.weight = 0;
    }
    return message;
  },
};

const baseIPFilter: object = { ipNets: "" };

export const IPFilter = {
  encode(
    message: IPFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ipNets) {
      writer.uint32(10).string(v!);
    }
    if (message.match !== undefined) {
      Handler.encode(message.match, writer.uint32(18).fork()).ldelim();
    }
    if (message.noMatch !== undefined) {
      Handler.encode(message.noMatch, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IPFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIPFilter } as IPFilter;
    message.ipNets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ipNets.push(reader.string());
          break;
        case 2:
          message.match = Handler.decode(reader, reader.uint32());
          break;
        case 3:
          message.noMatch = Handler.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<IPFilter>): IPFilter {
    const message = { ...baseIPFilter } as IPFilter;
    message.ipNets = [];
    if (object.ipNets !== undefined && object.ipNets !== null) {
      for (const e of object.ipNets) {
        message.ipNets.push(e);
      }
    }
    if (object.match !== undefined && object.match !== null) {
      message.match = Handler.fromPartial(object.match);
    } else {
      message.match = undefined;
    }
    if (object.noMatch !== undefined && object.noMatch !== null) {
      message.noMatch = Handler.fromPartial(object.noMatch);
    } else {
      message.noMatch = undefined;
    }
    return message;
  },
};

const baseAbort: object = { errorMessage: "" };

export const Abort = {
  encode(message: Abort, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.errorMessage !== "") {
      writer.uint32(10).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Abort {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAbort } as Abort;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Abort>): Abort {
    const message = { ...baseAbort } as Abort;
    if (object.errorMessage !== undefined && object.errorMessage !== null) {
      message.errorMessage = object.errorMessage;
    } else {
      message.errorMessage = "";
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
