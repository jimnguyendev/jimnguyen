// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { TLSConfig_Version } from "../rpx/tls";
import { ID, Timestamp, Duration } from "../pb/types";

export const protobufPackage = "rpx";

export interface EndpointConfiguration {
  id: ID | undefined;
  accountId: number;
  createdAt: Timestamp | undefined;
  description: string;
  metadata: string;
  type: EndpointConfiguration_Type;
  mutualTls: EndpointMutualTLS | undefined;
  basicAuth: EndpointBasicAuth | undefined;
  requestHeaders: EndpointRequestHeaders | undefined;
  compression: EndpointCompression | undefined;
  circuitBreaker: EndpointCircuitBreaker | undefined;
  ipPolicy: EndpointIPPolicy | undefined;
  tlsTermination: EndpointTLSTermination | undefined;
  webhookValidation: EndpointWebhookValidation | undefined;
  oauth: EndpointOAuth | undefined;
  responseHeaders: EndpointResponseHeaders | undefined;
  logging: EndpointLogging | undefined;
  saml: EndpointSAML | undefined;
  oidc: EndpointOIDC | undefined;
  backend: EndpointBackend | undefined;
  version: number;
}

export enum EndpointConfiguration_Type {
  Undefined = 0,
  HTTP = 1,
  HTTPS = 2,
  TCP = 3,
}

export interface EndpointCompression {
  enabled: boolean;
}

export interface EndpointCircuitBreaker {
  enabled: boolean;
  trippedDuration: Duration | undefined;
  rollingWindow: Duration | undefined;
  numBuckets: number;
  volumeThreshold: number;
  /** Error threshold percentage should be between 0 - 1.0, not 0-100.0 */
  errorThresholdPercentage: number;
}

export interface EndpointMutualTLS {
  enabled: boolean;
  /**
   * NOTE(alan): this field is being deprecated.
   *
   * Previously, callers would set this field directly with the PEM data
   * of the certificate authorities to be used for validation. This was
   * before Certificate Authorities were a separate resource in the system.
   *
   * Now, we use the ca_ids field to set a list of references to CA objects
   * that are owned by the `certs` service.
   *
   * However, at the time of writing we are not replicating CA objects
   * to the dataplane. We are taking advantage of the fact that CA objects
   * controlled by the `certs` service are immutable and copying their PEM
   * data into this field at mutation time in order to replicate them to the
   * dataplane. Once they are replicated to the dataplane separately as their
   * own service or as part of data layer replication, this field should be
   * removed entirely.
   *
   * Keep in mind that this proto message is also used for serialization into
   * the database so you will need to clean the production database to remove
   * this field's data when deprecating it. That's not technically necessary
   * since it will be ignored once this field definition is removed, but its
   * good hygeine.
   */
  clientCas: Uint8Array;
  caIds: ID[];
}

export interface EndpointBasicAuth {
  enabled: boolean;
  authProviderId: string;
  realm: string;
  allowOptions: boolean;
}

export interface EndpointRequestHeaders {
  enabled: boolean;
  add: { [key: string]: string };
  remove: string[];
}

export interface EndpointRequestHeaders_AddEntry {
  key: string;
  value: string;
}

export interface EndpointIPPolicy {
  enabled: boolean;
  ids: ID[];
}

export interface EndpointLogging {
  enabled: boolean;
  eventStreamIds: ID[];
}

export interface EndpointTLSTermination {
  enabled: boolean;
  terminateTls: boolean;
  minTlsVersion: TLSConfig_Version;
}

export interface EndpointWebhookValidation {
  enabled: boolean;
  provider: EndpointWebhookValidation_Provider;
  validationSecret: Uint8Array;
}

export enum EndpointWebhookValidation_Provider {
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

export interface EndpointOAuth {
  enabled: boolean;
  optionsPassthrough: boolean;
  cookiePrefix: string;
  authCheckInterval: Duration | undefined;
  inactivityTimeout: Duration | undefined;
  maxDuration: Duration | undefined;
  github: EndpointOAuth_GitHub | undefined;
  facebook: EndpointOAuth_Facebook | undefined;
  google: EndpointOAuth_Google | undefined;
  microsoft: EndpointOAuth_Microsoft | undefined;
}

export enum EndpointOAuth_Provider {
  UNKNOWN = 0,
  FACEBOOK = 1,
  GITHUB = 2,
  GOOGLE = 3,
  MICROSOFT = 4,
}

export interface EndpointOAuth_GitHub {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailAddresses: string[];
  /** ["domain.com", "domain.bla.es"] */
  emailDomains: string[];
  /** ["orgslug/teamslug", "1234"] */
  teams: string[];
  /** ["orgslug", "1234"] */
  orgs: string[];
}

export interface EndpointOAuth_Facebook {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailAddresses: string[];
  emailDomains: string[];
}

export interface EndpointOAuth_Google {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailAddresses: string[];
  emailDomains: string[];
  /**
   * unused, but still in prod db pointcfgs
   *
   * @deprecated
   */
  groups: string[];
}

export interface EndpointOAuth_Microsoft {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailAddresses: string[];
  emailDomains: string[];
}

export interface EndpointResponseHeaders {
  enabled: boolean;
  add: { [key: string]: string };
  remove: string[];
}

export interface EndpointResponseHeaders_AddEntry {
  key: string;
  value: string;
}

export interface EndpointSAML {
  enabled: boolean;
  optionsPassthrough: boolean;
  /** session parameters */
  cookiePrefix: string;
  /** inactivity timeout */
  inactivityTimeout: Duration | undefined;
  /**
   * maximum duration of the SAML session before the user is
   * sent back to the IdP for re-authentication
   */
  maxDuration: Duration | undefined;
  /**
   * if the idp supports dynamic configuration via a metadata URL, this
   * can be used to pull (and update!) the IdP metadata automatically
   * you could think of this as a separate management layer on top, but it's
   * combined here for simplicity's sake
   */
  idpMetadataUrl: string;
  /**
   * the full XML IdP EntityDescriptor: https://godoc.org/github.com/crewjam/saml#EntityDescriptor
   * this could be a response from the IdP's metadata endpoint (if the IdP supports
   * dynamic configuration)
   */
  idpMetadata: Uint8Array;
  /** entity ID extracted from the idp_metadata */
  idpEntityId: string;
  /**
   * the unique ID for the SAML SP (service provider), typically formatted
   * as a URL. currently self-assigned by our own implementation
   */
  entityId: string;
  /**
   * per the SAML spec, this option basically indicates "when I redirect to the IdP
   * please tell the IdP that it must force the user to reauthenticate (e.g. enter a username/password)
   * and not just re-use an IdP session. there are plenty of nuances around this behavior:
   * https://wiki.shibboleth.net/confluence/display/SP3/ForceAuthn
   */
  forceAuthn: boolean;
  /**
   * per the SAML spec, this indicates whether the IdP is allowed to initiate a login. e.g.
   * when the user goes to the IdP, can they click a link that will log them in to the application
   * directly
   */
  allowIdpInitiated: boolean;
  /**
   * the URL that the IdP can send a user to that will log them out
   * this is currently an uncustomizable per-config URL
   */
  singleLogoutUrl: string;
  /**
   * the URL that the IdP sends a user to with a signed SAML assertion to log in
   * SAML calls this the Assertion Consumer Service (ACS)
   * this is currently an uncustomizable per-config URL
   * like idp.ngrok.com/saml/{ec_id}/acs but eventually a customer
   * may be able to 'mount' this endpoint elsewhere
   */
  assertionConsumerServiceUrl: string;
  /**
   * sealed ASN.1 DER-encoded private key used to sign SAML assertion
   * requests that we send to the IdP to initiate login
   * currently self-assigned by our own implementation
   */
  requestSigningPrivateKey: Uint8Array;
  /**
   * accompanying ASN.1 DER-encoded certificate used to sign SAML
   * assertion requests
   * currently self-assigned by our own implementation
   */
  requestSigningCertificate: Uint8Array;
  /** URL where sp_metadata is hosted */
  metadataUrl: string;
  /**
   * a list of authorized groups that any user wishing to access the attached
   * endpoints must be a part of. ignored if it the list is empty
   */
  authorizedGroups: string[];
  /**
   * The Name ID Format requested expected by the SP in authn assertion from
   * IdP about a subject. Stated more plainly, when the IdP redirects back to
   * ngrok stating "this user has name X", this property defines the format of
   * X. Examples include 'X is an email address' or 'X is a temporary opqaue
   * identifier'. The permitted values are defined by an enumeration in the
   * RFC: https://docs.oracle.com/cd/E19316-01/820-3886/ggwbz/index.html
   */
  nameidFormat: string;
}

export interface EndpointOIDC {
  enabled: boolean;
  optionsPassthrough: boolean;
  /** session parameters */
  cookiePrefix: string;
  /** inactivity timeout */
  inactivityTimeout: Duration | undefined;
  /**
   * maximum duration of the OIDC session before the user is
   * sent back to the IdP for re-authentication
   */
  maxDuration: Duration | undefined;
  /** The OIDC discovery URL. Official OIDC terminology calls this the 'Issuer'. */
  issuer: string;
  /**
   * The OIDC app's client ID. This is also re-used as the OIDC Audience value
   * and used during payload verification.
   */
  clientId: string;
  /** Thhe OIDC app's client secret. This value is stored sealed and encrypted. */
  clientSecret: Uint8Array;
  /** The requested set of scopes to request from the OIDC identity provider. */
  scopes: string[];
  /**
   * URL on our federated identity provider that should be redirected to in order
   * to begin the OIDC authentication flow. This is an internal-only implementation detail.
   */
  authnUrl: string;
  /** authorization check interval */
  authCheckInterval: Duration | undefined;
}

export interface EndpointBackend {
  enabled: boolean;
  /** the backend id */
  id: ID | undefined;
}

export interface EndpointWebsocketTCPConverter {
  enabled: boolean;
}

const baseEndpointConfiguration: object = {
  accountId: 0,
  description: "",
  metadata: "",
  type: 0,
  version: 0,
};

export const EndpointConfiguration = {
  encode(
    message: EndpointConfiguration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(114).fork()).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(16).int64(message.accountId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    if (message.mutualTls !== undefined) {
      EndpointMutualTLS.encode(
        message.mutualTls,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.basicAuth !== undefined) {
      EndpointBasicAuth.encode(
        message.basicAuth,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.requestHeaders !== undefined) {
      EndpointRequestHeaders.encode(
        message.requestHeaders,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.compression !== undefined) {
      EndpointCompression.encode(
        message.compression,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.circuitBreaker !== undefined) {
      EndpointCircuitBreaker.encode(
        message.circuitBreaker,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.ipPolicy !== undefined) {
      EndpointIPPolicy.encode(
        message.ipPolicy,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.tlsTermination !== undefined) {
      EndpointTLSTermination.encode(
        message.tlsTermination,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.webhookValidation !== undefined) {
      EndpointWebhookValidation.encode(
        message.webhookValidation,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.oauth !== undefined) {
      EndpointOAuth.encode(message.oauth, writer.uint32(130).fork()).ldelim();
    }
    if (message.responseHeaders !== undefined) {
      EndpointResponseHeaders.encode(
        message.responseHeaders,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.logging !== undefined) {
      EndpointLogging.encode(
        message.logging,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.saml !== undefined) {
      EndpointSAML.encode(message.saml, writer.uint32(162).fork()).ldelim();
    }
    if (message.oidc !== undefined) {
      EndpointOIDC.encode(message.oidc, writer.uint32(170).fork()).ldelim();
    }
    if (message.backend !== undefined) {
      EndpointBackend.encode(
        message.backend,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.version !== 0) {
      writer.uint32(144).int64(message.version);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EndpointConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointConfiguration } as EndpointConfiguration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 14:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.metadata = reader.string();
          break;
        case 6:
          message.type = reader.int32() as any;
          break;
        case 7:
          message.mutualTls = EndpointMutualTLS.decode(reader, reader.uint32());
          break;
        case 8:
          message.basicAuth = EndpointBasicAuth.decode(reader, reader.uint32());
          break;
        case 9:
          message.requestHeaders = EndpointRequestHeaders.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.compression = EndpointCompression.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.circuitBreaker = EndpointCircuitBreaker.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.ipPolicy = EndpointIPPolicy.decode(reader, reader.uint32());
          break;
        case 13:
          message.tlsTermination = EndpointTLSTermination.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.webhookValidation = EndpointWebhookValidation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.oauth = EndpointOAuth.decode(reader, reader.uint32());
          break;
        case 17:
          message.responseHeaders = EndpointResponseHeaders.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.logging = EndpointLogging.decode(reader, reader.uint32());
          break;
        case 20:
          message.saml = EndpointSAML.decode(reader, reader.uint32());
          break;
        case 21:
          message.oidc = EndpointOIDC.decode(reader, reader.uint32());
          break;
        case 22:
          message.backend = EndpointBackend.decode(reader, reader.uint32());
          break;
        case 18:
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
    object: DeepPartial<EndpointConfiguration>
  ): EndpointConfiguration {
    const message = { ...baseEndpointConfiguration } as EndpointConfiguration;
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
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.mutualTls !== undefined && object.mutualTls !== null) {
      message.mutualTls = EndpointMutualTLS.fromPartial(object.mutualTls);
    } else {
      message.mutualTls = undefined;
    }
    if (object.basicAuth !== undefined && object.basicAuth !== null) {
      message.basicAuth = EndpointBasicAuth.fromPartial(object.basicAuth);
    } else {
      message.basicAuth = undefined;
    }
    if (object.requestHeaders !== undefined && object.requestHeaders !== null) {
      message.requestHeaders = EndpointRequestHeaders.fromPartial(
        object.requestHeaders
      );
    } else {
      message.requestHeaders = undefined;
    }
    if (object.compression !== undefined && object.compression !== null) {
      message.compression = EndpointCompression.fromPartial(object.compression);
    } else {
      message.compression = undefined;
    }
    if (object.circuitBreaker !== undefined && object.circuitBreaker !== null) {
      message.circuitBreaker = EndpointCircuitBreaker.fromPartial(
        object.circuitBreaker
      );
    } else {
      message.circuitBreaker = undefined;
    }
    if (object.ipPolicy !== undefined && object.ipPolicy !== null) {
      message.ipPolicy = EndpointIPPolicy.fromPartial(object.ipPolicy);
    } else {
      message.ipPolicy = undefined;
    }
    if (object.tlsTermination !== undefined && object.tlsTermination !== null) {
      message.tlsTermination = EndpointTLSTermination.fromPartial(
        object.tlsTermination
      );
    } else {
      message.tlsTermination = undefined;
    }
    if (
      object.webhookValidation !== undefined &&
      object.webhookValidation !== null
    ) {
      message.webhookValidation = EndpointWebhookValidation.fromPartial(
        object.webhookValidation
      );
    } else {
      message.webhookValidation = undefined;
    }
    if (object.oauth !== undefined && object.oauth !== null) {
      message.oauth = EndpointOAuth.fromPartial(object.oauth);
    } else {
      message.oauth = undefined;
    }
    if (
      object.responseHeaders !== undefined &&
      object.responseHeaders !== null
    ) {
      message.responseHeaders = EndpointResponseHeaders.fromPartial(
        object.responseHeaders
      );
    } else {
      message.responseHeaders = undefined;
    }
    if (object.logging !== undefined && object.logging !== null) {
      message.logging = EndpointLogging.fromPartial(object.logging);
    } else {
      message.logging = undefined;
    }
    if (object.saml !== undefined && object.saml !== null) {
      message.saml = EndpointSAML.fromPartial(object.saml);
    } else {
      message.saml = undefined;
    }
    if (object.oidc !== undefined && object.oidc !== null) {
      message.oidc = EndpointOIDC.fromPartial(object.oidc);
    } else {
      message.oidc = undefined;
    }
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = EndpointBackend.fromPartial(object.backend);
    } else {
      message.backend = undefined;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = 0;
    }
    return message;
  },
};

const baseEndpointCompression: object = { enabled: false };

export const EndpointCompression = {
  encode(
    message: EndpointCompression,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointCompression {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointCompression } as EndpointCompression;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EndpointCompression>): EndpointCompression {
    const message = { ...baseEndpointCompression } as EndpointCompression;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    return message;
  },
};

const baseEndpointCircuitBreaker: object = {
  enabled: false,
  numBuckets: 0,
  volumeThreshold: 0,
  errorThresholdPercentage: 0,
};

export const EndpointCircuitBreaker = {
  encode(
    message: EndpointCircuitBreaker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
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
  ): EndpointCircuitBreaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointCircuitBreaker } as EndpointCircuitBreaker;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.enabled = reader.bool();
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
    object: DeepPartial<EndpointCircuitBreaker>
  ): EndpointCircuitBreaker {
    const message = { ...baseEndpointCircuitBreaker } as EndpointCircuitBreaker;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
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

const baseEndpointMutualTLS: object = { enabled: false };

export const EndpointMutualTLS = {
  encode(
    message: EndpointMutualTLS,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.clientCas.length !== 0) {
      writer.uint32(26).bytes(message.clientCas);
    }
    for (const v of message.caIds) {
      ID.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointMutualTLS {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointMutualTLS } as EndpointMutualTLS;
    message.caIds = [];
    message.clientCas = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.clientCas = reader.bytes();
          break;
        case 4:
          message.caIds.push(ID.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EndpointMutualTLS>): EndpointMutualTLS {
    const message = { ...baseEndpointMutualTLS } as EndpointMutualTLS;
    message.caIds = [];
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.clientCas !== undefined && object.clientCas !== null) {
      message.clientCas = object.clientCas;
    } else {
      message.clientCas = new Uint8Array();
    }
    if (object.caIds !== undefined && object.caIds !== null) {
      for (const e of object.caIds) {
        message.caIds.push(ID.fromPartial(e));
      }
    }
    return message;
  },
};

const baseEndpointBasicAuth: object = {
  enabled: false,
  authProviderId: "",
  realm: "",
  allowOptions: false,
};

export const EndpointBasicAuth = {
  encode(
    message: EndpointBasicAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.authProviderId !== "") {
      writer.uint32(42).string(message.authProviderId);
    }
    if (message.realm !== "") {
      writer.uint32(50).string(message.realm);
    }
    if (message.allowOptions === true) {
      writer.uint32(56).bool(message.allowOptions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointBasicAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointBasicAuth } as EndpointBasicAuth;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.enabled = reader.bool();
          break;
        case 5:
          message.authProviderId = reader.string();
          break;
        case 6:
          message.realm = reader.string();
          break;
        case 7:
          message.allowOptions = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EndpointBasicAuth>): EndpointBasicAuth {
    const message = { ...baseEndpointBasicAuth } as EndpointBasicAuth;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.authProviderId !== undefined && object.authProviderId !== null) {
      message.authProviderId = object.authProviderId;
    } else {
      message.authProviderId = "";
    }
    if (object.realm !== undefined && object.realm !== null) {
      message.realm = object.realm;
    } else {
      message.realm = "";
    }
    if (object.allowOptions !== undefined && object.allowOptions !== null) {
      message.allowOptions = object.allowOptions;
    } else {
      message.allowOptions = false;
    }
    return message;
  },
};

const baseEndpointRequestHeaders: object = { enabled: false, remove: "" };

export const EndpointRequestHeaders = {
  encode(
    message: EndpointRequestHeaders,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    Object.entries(message.add).forEach(([key, value]) => {
      EndpointRequestHeaders_AddEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    for (const v of message.remove) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EndpointRequestHeaders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointRequestHeaders } as EndpointRequestHeaders;
    message.add = {};
    message.remove = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          const entry3 = EndpointRequestHeaders_AddEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.add[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.remove.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EndpointRequestHeaders>
  ): EndpointRequestHeaders {
    const message = { ...baseEndpointRequestHeaders } as EndpointRequestHeaders;
    message.add = {};
    message.remove = [];
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.add !== undefined && object.add !== null) {
      Object.entries(object.add).forEach(([key, value]) => {
        if (value !== undefined) {
          message.add[key] = String(value);
        }
      });
    }
    if (object.remove !== undefined && object.remove !== null) {
      for (const e of object.remove) {
        message.remove.push(e);
      }
    }
    return message;
  },
};

const baseEndpointRequestHeaders_AddEntry: object = { key: "", value: "" };

export const EndpointRequestHeaders_AddEntry = {
  encode(
    message: EndpointRequestHeaders_AddEntry,
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
  ): EndpointRequestHeaders_AddEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEndpointRequestHeaders_AddEntry,
    } as EndpointRequestHeaders_AddEntry;
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
    object: DeepPartial<EndpointRequestHeaders_AddEntry>
  ): EndpointRequestHeaders_AddEntry {
    const message = {
      ...baseEndpointRequestHeaders_AddEntry,
    } as EndpointRequestHeaders_AddEntry;
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

const baseEndpointIPPolicy: object = { enabled: false };

export const EndpointIPPolicy = {
  encode(
    message: EndpointIPPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    for (const v of message.ids) {
      ID.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointIPPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointIPPolicy } as EndpointIPPolicy;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.enabled = reader.bool();
          break;
        case 4:
          message.ids.push(ID.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EndpointIPPolicy>): EndpointIPPolicy {
    const message = { ...baseEndpointIPPolicy } as EndpointIPPolicy;
    message.ids = [];
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(ID.fromPartial(e));
      }
    }
    return message;
  },
};

const baseEndpointLogging: object = { enabled: false };

export const EndpointLogging = {
  encode(
    message: EndpointLogging,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    for (const v of message.eventStreamIds) {
      ID.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointLogging {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointLogging } as EndpointLogging;
    message.eventStreamIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.eventStreamIds.push(ID.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EndpointLogging>): EndpointLogging {
    const message = { ...baseEndpointLogging } as EndpointLogging;
    message.eventStreamIds = [];
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.eventStreamIds !== undefined && object.eventStreamIds !== null) {
      for (const e of object.eventStreamIds) {
        message.eventStreamIds.push(ID.fromPartial(e));
      }
    }
    return message;
  },
};

const baseEndpointTLSTermination: object = {
  enabled: false,
  terminateTls: false,
  minTlsVersion: 0,
};

export const EndpointTLSTermination = {
  encode(
    message: EndpointTLSTermination,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.terminateTls === true) {
      writer.uint32(24).bool(message.terminateTls);
    }
    if (message.minTlsVersion !== 0) {
      writer.uint32(32).int32(message.minTlsVersion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EndpointTLSTermination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointTLSTermination } as EndpointTLSTermination;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.terminateTls = reader.bool();
          break;
        case 4:
          message.minTlsVersion = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EndpointTLSTermination>
  ): EndpointTLSTermination {
    const message = { ...baseEndpointTLSTermination } as EndpointTLSTermination;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.terminateTls !== undefined && object.terminateTls !== null) {
      message.terminateTls = object.terminateTls;
    } else {
      message.terminateTls = false;
    }
    if (object.minTlsVersion !== undefined && object.minTlsVersion !== null) {
      message.minTlsVersion = object.minTlsVersion;
    } else {
      message.minTlsVersion = 0;
    }
    return message;
  },
};

const baseEndpointWebhookValidation: object = { enabled: false, provider: 0 };

export const EndpointWebhookValidation = {
  encode(
    message: EndpointWebhookValidation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.provider !== 0) {
      writer.uint32(24).int32(message.provider);
    }
    if (message.validationSecret.length !== 0) {
      writer.uint32(34).bytes(message.validationSecret);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EndpointWebhookValidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEndpointWebhookValidation,
    } as EndpointWebhookValidation;
    message.validationSecret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.provider = reader.int32() as any;
          break;
        case 4:
          message.validationSecret = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EndpointWebhookValidation>
  ): EndpointWebhookValidation {
    const message = {
      ...baseEndpointWebhookValidation,
    } as EndpointWebhookValidation;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = 0;
    }
    if (
      object.validationSecret !== undefined &&
      object.validationSecret !== null
    ) {
      message.validationSecret = object.validationSecret;
    } else {
      message.validationSecret = new Uint8Array();
    }
    return message;
  },
};

const baseEndpointOAuth: object = {
  enabled: false,
  optionsPassthrough: false,
  cookiePrefix: "",
};

export const EndpointOAuth = {
  encode(
    message: EndpointOAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.optionsPassthrough === true) {
      writer.uint32(16).bool(message.optionsPassthrough);
    }
    if (message.cookiePrefix !== "") {
      writer.uint32(26).string(message.cookiePrefix);
    }
    if (message.authCheckInterval !== undefined) {
      Duration.encode(
        message.authCheckInterval,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.inactivityTimeout !== undefined) {
      Duration.encode(
        message.inactivityTimeout,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maxDuration !== undefined) {
      Duration.encode(message.maxDuration, writer.uint32(50).fork()).ldelim();
    }
    if (message.github !== undefined) {
      EndpointOAuth_GitHub.encode(
        message.github,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.facebook !== undefined) {
      EndpointOAuth_Facebook.encode(
        message.facebook,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.google !== undefined) {
      EndpointOAuth_Google.encode(
        message.google,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.microsoft !== undefined) {
      EndpointOAuth_Microsoft.encode(
        message.microsoft,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointOAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointOAuth } as EndpointOAuth;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.optionsPassthrough = reader.bool();
          break;
        case 3:
          message.cookiePrefix = reader.string();
          break;
        case 4:
          message.authCheckInterval = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.inactivityTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.maxDuration = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.github = EndpointOAuth_GitHub.decode(reader, reader.uint32());
          break;
        case 8:
          message.facebook = EndpointOAuth_Facebook.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.google = EndpointOAuth_Google.decode(reader, reader.uint32());
          break;
        case 10:
          message.microsoft = EndpointOAuth_Microsoft.decode(
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

  fromPartial(object: DeepPartial<EndpointOAuth>): EndpointOAuth {
    const message = { ...baseEndpointOAuth } as EndpointOAuth;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (
      object.optionsPassthrough !== undefined &&
      object.optionsPassthrough !== null
    ) {
      message.optionsPassthrough = object.optionsPassthrough;
    } else {
      message.optionsPassthrough = false;
    }
    if (object.cookiePrefix !== undefined && object.cookiePrefix !== null) {
      message.cookiePrefix = object.cookiePrefix;
    } else {
      message.cookiePrefix = "";
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
    if (object.github !== undefined && object.github !== null) {
      message.github = EndpointOAuth_GitHub.fromPartial(object.github);
    } else {
      message.github = undefined;
    }
    if (object.facebook !== undefined && object.facebook !== null) {
      message.facebook = EndpointOAuth_Facebook.fromPartial(object.facebook);
    } else {
      message.facebook = undefined;
    }
    if (object.google !== undefined && object.google !== null) {
      message.google = EndpointOAuth_Google.fromPartial(object.google);
    } else {
      message.google = undefined;
    }
    if (object.microsoft !== undefined && object.microsoft !== null) {
      message.microsoft = EndpointOAuth_Microsoft.fromPartial(object.microsoft);
    } else {
      message.microsoft = undefined;
    }
    return message;
  },
};

const baseEndpointOAuth_GitHub: object = {
  clientId: "",
  scopes: "",
  emailAddresses: "",
  emailDomains: "",
  teams: "",
  orgs: "",
};

export const EndpointOAuth_GitHub = {
  encode(
    message: EndpointOAuth_GitHub,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientSecret.length !== 0) {
      writer.uint32(18).bytes(message.clientSecret);
    }
    for (const v of message.scopes) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailDomains) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.teams) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.orgs) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EndpointOAuth_GitHub {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointOAuth_GitHub } as EndpointOAuth_GitHub;
    message.scopes = [];
    message.emailAddresses = [];
    message.emailDomains = [];
    message.teams = [];
    message.orgs = [];
    message.clientSecret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientSecret = reader.bytes();
          break;
        case 3:
          message.scopes.push(reader.string());
          break;
        case 4:
          message.emailAddresses.push(reader.string());
          break;
        case 5:
          message.emailDomains.push(reader.string());
          break;
        case 6:
          message.teams.push(reader.string());
          break;
        case 7:
          message.orgs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EndpointOAuth_GitHub>): EndpointOAuth_GitHub {
    const message = { ...baseEndpointOAuth_GitHub } as EndpointOAuth_GitHub;
    message.scopes = [];
    message.emailAddresses = [];
    message.emailDomains = [];
    message.teams = [];
    message.orgs = [];
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.clientSecret !== undefined && object.clientSecret !== null) {
      message.clientSecret = object.clientSecret;
    } else {
      message.clientSecret = new Uint8Array();
    }
    if (object.scopes !== undefined && object.scopes !== null) {
      for (const e of object.scopes) {
        message.scopes.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.teams !== undefined && object.teams !== null) {
      for (const e of object.teams) {
        message.teams.push(e);
      }
    }
    if (object.orgs !== undefined && object.orgs !== null) {
      for (const e of object.orgs) {
        message.orgs.push(e);
      }
    }
    return message;
  },
};

const baseEndpointOAuth_Facebook: object = {
  clientId: "",
  scopes: "",
  emailAddresses: "",
  emailDomains: "",
};

export const EndpointOAuth_Facebook = {
  encode(
    message: EndpointOAuth_Facebook,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientSecret.length !== 0) {
      writer.uint32(18).bytes(message.clientSecret);
    }
    for (const v of message.scopes) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailDomains) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EndpointOAuth_Facebook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointOAuth_Facebook } as EndpointOAuth_Facebook;
    message.scopes = [];
    message.emailAddresses = [];
    message.emailDomains = [];
    message.clientSecret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientSecret = reader.bytes();
          break;
        case 3:
          message.scopes.push(reader.string());
          break;
        case 4:
          message.emailAddresses.push(reader.string());
          break;
        case 5:
          message.emailDomains.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EndpointOAuth_Facebook>
  ): EndpointOAuth_Facebook {
    const message = { ...baseEndpointOAuth_Facebook } as EndpointOAuth_Facebook;
    message.scopes = [];
    message.emailAddresses = [];
    message.emailDomains = [];
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.clientSecret !== undefined && object.clientSecret !== null) {
      message.clientSecret = object.clientSecret;
    } else {
      message.clientSecret = new Uint8Array();
    }
    if (object.scopes !== undefined && object.scopes !== null) {
      for (const e of object.scopes) {
        message.scopes.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    return message;
  },
};

const baseEndpointOAuth_Google: object = {
  clientId: "",
  scopes: "",
  emailAddresses: "",
  emailDomains: "",
  groups: "",
};

export const EndpointOAuth_Google = {
  encode(
    message: EndpointOAuth_Google,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientSecret.length !== 0) {
      writer.uint32(18).bytes(message.clientSecret);
    }
    for (const v of message.scopes) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailDomains) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.groups) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EndpointOAuth_Google {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointOAuth_Google } as EndpointOAuth_Google;
    message.scopes = [];
    message.emailAddresses = [];
    message.emailDomains = [];
    message.groups = [];
    message.clientSecret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientSecret = reader.bytes();
          break;
        case 3:
          message.scopes.push(reader.string());
          break;
        case 4:
          message.emailAddresses.push(reader.string());
          break;
        case 5:
          message.emailDomains.push(reader.string());
          break;
        case 6:
          message.groups.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EndpointOAuth_Google>): EndpointOAuth_Google {
    const message = { ...baseEndpointOAuth_Google } as EndpointOAuth_Google;
    message.scopes = [];
    message.emailAddresses = [];
    message.emailDomains = [];
    message.groups = [];
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.clientSecret !== undefined && object.clientSecret !== null) {
      message.clientSecret = object.clientSecret;
    } else {
      message.clientSecret = new Uint8Array();
    }
    if (object.scopes !== undefined && object.scopes !== null) {
      for (const e of object.scopes) {
        message.scopes.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(e);
      }
    }
    return message;
  },
};

const baseEndpointOAuth_Microsoft: object = {
  clientId: "",
  scopes: "",
  emailAddresses: "",
  emailDomains: "",
};

export const EndpointOAuth_Microsoft = {
  encode(
    message: EndpointOAuth_Microsoft,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientSecret.length !== 0) {
      writer.uint32(18).bytes(message.clientSecret);
    }
    for (const v of message.scopes) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailDomains) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EndpointOAuth_Microsoft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEndpointOAuth_Microsoft,
    } as EndpointOAuth_Microsoft;
    message.scopes = [];
    message.emailAddresses = [];
    message.emailDomains = [];
    message.clientSecret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientSecret = reader.bytes();
          break;
        case 3:
          message.scopes.push(reader.string());
          break;
        case 4:
          message.emailAddresses.push(reader.string());
          break;
        case 5:
          message.emailDomains.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EndpointOAuth_Microsoft>
  ): EndpointOAuth_Microsoft {
    const message = {
      ...baseEndpointOAuth_Microsoft,
    } as EndpointOAuth_Microsoft;
    message.scopes = [];
    message.emailAddresses = [];
    message.emailDomains = [];
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.clientSecret !== undefined && object.clientSecret !== null) {
      message.clientSecret = object.clientSecret;
    } else {
      message.clientSecret = new Uint8Array();
    }
    if (object.scopes !== undefined && object.scopes !== null) {
      for (const e of object.scopes) {
        message.scopes.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    return message;
  },
};

const baseEndpointResponseHeaders: object = { enabled: false, remove: "" };

export const EndpointResponseHeaders = {
  encode(
    message: EndpointResponseHeaders,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    Object.entries(message.add).forEach(([key, value]) => {
      EndpointResponseHeaders_AddEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    for (const v of message.remove) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EndpointResponseHeaders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEndpointResponseHeaders,
    } as EndpointResponseHeaders;
    message.add = {};
    message.remove = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          const entry3 = EndpointResponseHeaders_AddEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.add[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.remove.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EndpointResponseHeaders>
  ): EndpointResponseHeaders {
    const message = {
      ...baseEndpointResponseHeaders,
    } as EndpointResponseHeaders;
    message.add = {};
    message.remove = [];
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.add !== undefined && object.add !== null) {
      Object.entries(object.add).forEach(([key, value]) => {
        if (value !== undefined) {
          message.add[key] = String(value);
        }
      });
    }
    if (object.remove !== undefined && object.remove !== null) {
      for (const e of object.remove) {
        message.remove.push(e);
      }
    }
    return message;
  },
};

const baseEndpointResponseHeaders_AddEntry: object = { key: "", value: "" };

export const EndpointResponseHeaders_AddEntry = {
  encode(
    message: EndpointResponseHeaders_AddEntry,
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
  ): EndpointResponseHeaders_AddEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEndpointResponseHeaders_AddEntry,
    } as EndpointResponseHeaders_AddEntry;
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
    object: DeepPartial<EndpointResponseHeaders_AddEntry>
  ): EndpointResponseHeaders_AddEntry {
    const message = {
      ...baseEndpointResponseHeaders_AddEntry,
    } as EndpointResponseHeaders_AddEntry;
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

const baseEndpointSAML: object = {
  enabled: false,
  optionsPassthrough: false,
  cookiePrefix: "",
  idpMetadataUrl: "",
  idpEntityId: "",
  entityId: "",
  forceAuthn: false,
  allowIdpInitiated: false,
  singleLogoutUrl: "",
  assertionConsumerServiceUrl: "",
  metadataUrl: "",
  authorizedGroups: "",
  nameidFormat: "",
};

export const EndpointSAML = {
  encode(
    message: EndpointSAML,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.optionsPassthrough === true) {
      writer.uint32(16).bool(message.optionsPassthrough);
    }
    if (message.cookiePrefix !== "") {
      writer.uint32(26).string(message.cookiePrefix);
    }
    if (message.inactivityTimeout !== undefined) {
      Duration.encode(
        message.inactivityTimeout,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.maxDuration !== undefined) {
      Duration.encode(message.maxDuration, writer.uint32(42).fork()).ldelim();
    }
    if (message.idpMetadataUrl !== "") {
      writer.uint32(50).string(message.idpMetadataUrl);
    }
    if (message.idpMetadata.length !== 0) {
      writer.uint32(58).bytes(message.idpMetadata);
    }
    if (message.idpEntityId !== "") {
      writer.uint32(138).string(message.idpEntityId);
    }
    if (message.entityId !== "") {
      writer.uint32(66).string(message.entityId);
    }
    if (message.forceAuthn === true) {
      writer.uint32(72).bool(message.forceAuthn);
    }
    if (message.allowIdpInitiated === true) {
      writer.uint32(80).bool(message.allowIdpInitiated);
    }
    if (message.singleLogoutUrl !== "") {
      writer.uint32(90).string(message.singleLogoutUrl);
    }
    if (message.assertionConsumerServiceUrl !== "") {
      writer.uint32(98).string(message.assertionConsumerServiceUrl);
    }
    if (message.requestSigningPrivateKey.length !== 0) {
      writer.uint32(106).bytes(message.requestSigningPrivateKey);
    }
    if (message.requestSigningCertificate.length !== 0) {
      writer.uint32(114).bytes(message.requestSigningCertificate);
    }
    if (message.metadataUrl !== "") {
      writer.uint32(122).string(message.metadataUrl);
    }
    for (const v of message.authorizedGroups) {
      writer.uint32(130).string(v!);
    }
    if (message.nameidFormat !== "") {
      writer.uint32(146).string(message.nameidFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointSAML {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointSAML } as EndpointSAML;
    message.authorizedGroups = [];
    message.idpMetadata = new Uint8Array();
    message.requestSigningPrivateKey = new Uint8Array();
    message.requestSigningCertificate = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.optionsPassthrough = reader.bool();
          break;
        case 3:
          message.cookiePrefix = reader.string();
          break;
        case 4:
          message.inactivityTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxDuration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.idpMetadataUrl = reader.string();
          break;
        case 7:
          message.idpMetadata = reader.bytes();
          break;
        case 17:
          message.idpEntityId = reader.string();
          break;
        case 8:
          message.entityId = reader.string();
          break;
        case 9:
          message.forceAuthn = reader.bool();
          break;
        case 10:
          message.allowIdpInitiated = reader.bool();
          break;
        case 11:
          message.singleLogoutUrl = reader.string();
          break;
        case 12:
          message.assertionConsumerServiceUrl = reader.string();
          break;
        case 13:
          message.requestSigningPrivateKey = reader.bytes();
          break;
        case 14:
          message.requestSigningCertificate = reader.bytes();
          break;
        case 15:
          message.metadataUrl = reader.string();
          break;
        case 16:
          message.authorizedGroups.push(reader.string());
          break;
        case 18:
          message.nameidFormat = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EndpointSAML>): EndpointSAML {
    const message = { ...baseEndpointSAML } as EndpointSAML;
    message.authorizedGroups = [];
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (
      object.optionsPassthrough !== undefined &&
      object.optionsPassthrough !== null
    ) {
      message.optionsPassthrough = object.optionsPassthrough;
    } else {
      message.optionsPassthrough = false;
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
    if (object.idpMetadataUrl !== undefined && object.idpMetadataUrl !== null) {
      message.idpMetadataUrl = object.idpMetadataUrl;
    } else {
      message.idpMetadataUrl = "";
    }
    if (object.idpMetadata !== undefined && object.idpMetadata !== null) {
      message.idpMetadata = object.idpMetadata;
    } else {
      message.idpMetadata = new Uint8Array();
    }
    if (object.idpEntityId !== undefined && object.idpEntityId !== null) {
      message.idpEntityId = object.idpEntityId;
    } else {
      message.idpEntityId = "";
    }
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (object.forceAuthn !== undefined && object.forceAuthn !== null) {
      message.forceAuthn = object.forceAuthn;
    } else {
      message.forceAuthn = false;
    }
    if (
      object.allowIdpInitiated !== undefined &&
      object.allowIdpInitiated !== null
    ) {
      message.allowIdpInitiated = object.allowIdpInitiated;
    } else {
      message.allowIdpInitiated = false;
    }
    if (
      object.singleLogoutUrl !== undefined &&
      object.singleLogoutUrl !== null
    ) {
      message.singleLogoutUrl = object.singleLogoutUrl;
    } else {
      message.singleLogoutUrl = "";
    }
    if (
      object.assertionConsumerServiceUrl !== undefined &&
      object.assertionConsumerServiceUrl !== null
    ) {
      message.assertionConsumerServiceUrl = object.assertionConsumerServiceUrl;
    } else {
      message.assertionConsumerServiceUrl = "";
    }
    if (
      object.requestSigningPrivateKey !== undefined &&
      object.requestSigningPrivateKey !== null
    ) {
      message.requestSigningPrivateKey = object.requestSigningPrivateKey;
    } else {
      message.requestSigningPrivateKey = new Uint8Array();
    }
    if (
      object.requestSigningCertificate !== undefined &&
      object.requestSigningCertificate !== null
    ) {
      message.requestSigningCertificate = object.requestSigningCertificate;
    } else {
      message.requestSigningCertificate = new Uint8Array();
    }
    if (object.metadataUrl !== undefined && object.metadataUrl !== null) {
      message.metadataUrl = object.metadataUrl;
    } else {
      message.metadataUrl = "";
    }
    if (
      object.authorizedGroups !== undefined &&
      object.authorizedGroups !== null
    ) {
      for (const e of object.authorizedGroups) {
        message.authorizedGroups.push(e);
      }
    }
    if (object.nameidFormat !== undefined && object.nameidFormat !== null) {
      message.nameidFormat = object.nameidFormat;
    } else {
      message.nameidFormat = "";
    }
    return message;
  },
};

const baseEndpointOIDC: object = {
  enabled: false,
  optionsPassthrough: false,
  cookiePrefix: "",
  issuer: "",
  clientId: "",
  scopes: "",
  authnUrl: "",
};

export const EndpointOIDC = {
  encode(
    message: EndpointOIDC,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.optionsPassthrough === true) {
      writer.uint32(16).bool(message.optionsPassthrough);
    }
    if (message.cookiePrefix !== "") {
      writer.uint32(26).string(message.cookiePrefix);
    }
    if (message.inactivityTimeout !== undefined) {
      Duration.encode(
        message.inactivityTimeout,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.maxDuration !== undefined) {
      Duration.encode(message.maxDuration, writer.uint32(42).fork()).ldelim();
    }
    if (message.issuer !== "") {
      writer.uint32(50).string(message.issuer);
    }
    if (message.clientId !== "") {
      writer.uint32(58).string(message.clientId);
    }
    if (message.clientSecret.length !== 0) {
      writer.uint32(66).bytes(message.clientSecret);
    }
    for (const v of message.scopes) {
      writer.uint32(74).string(v!);
    }
    if (message.authnUrl !== "") {
      writer.uint32(82).string(message.authnUrl);
    }
    if (message.authCheckInterval !== undefined) {
      Duration.encode(
        message.authCheckInterval,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointOIDC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointOIDC } as EndpointOIDC;
    message.scopes = [];
    message.clientSecret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.optionsPassthrough = reader.bool();
          break;
        case 3:
          message.cookiePrefix = reader.string();
          break;
        case 4:
          message.inactivityTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxDuration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.issuer = reader.string();
          break;
        case 7:
          message.clientId = reader.string();
          break;
        case 8:
          message.clientSecret = reader.bytes();
          break;
        case 9:
          message.scopes.push(reader.string());
          break;
        case 10:
          message.authnUrl = reader.string();
          break;
        case 11:
          message.authCheckInterval = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EndpointOIDC>): EndpointOIDC {
    const message = { ...baseEndpointOIDC } as EndpointOIDC;
    message.scopes = [];
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (
      object.optionsPassthrough !== undefined &&
      object.optionsPassthrough !== null
    ) {
      message.optionsPassthrough = object.optionsPassthrough;
    } else {
      message.optionsPassthrough = false;
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
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.clientSecret !== undefined && object.clientSecret !== null) {
      message.clientSecret = object.clientSecret;
    } else {
      message.clientSecret = new Uint8Array();
    }
    if (object.scopes !== undefined && object.scopes !== null) {
      for (const e of object.scopes) {
        message.scopes.push(e);
      }
    }
    if (object.authnUrl !== undefined && object.authnUrl !== null) {
      message.authnUrl = object.authnUrl;
    } else {
      message.authnUrl = "";
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
    return message;
  },
};

const baseEndpointBackend: object = { enabled: false };

export const EndpointBackend = {
  encode(
    message: EndpointBackend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndpointBackend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpointBackend } as EndpointBackend;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
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

  fromPartial(object: DeepPartial<EndpointBackend>): EndpointBackend {
    const message = { ...baseEndpointBackend } as EndpointBackend;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseEndpointWebsocketTCPConverter: object = { enabled: false };

export const EndpointWebsocketTCPConverter = {
  encode(
    message: EndpointWebsocketTCPConverter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EndpointWebsocketTCPConverter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEndpointWebsocketTCPConverter,
    } as EndpointWebsocketTCPConverter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EndpointWebsocketTCPConverter>
  ): EndpointWebsocketTCPConverter {
    const message = {
      ...baseEndpointWebsocketTCPConverter,
    } as EndpointWebsocketTCPConverter;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
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
