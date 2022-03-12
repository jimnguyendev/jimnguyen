// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "rpx";

/**
 * ----------------------------
 * Federated Authentication Metadata
 * ----------------------------
 */
export interface EndpointRuntimeMetadata {
  oidc: OIDCMetadata | undefined;
  saml: SAMLMetadata | undefined;
  oauth: OAuthMetadata | undefined;
}

export interface OIDCMetadata {
  issuer: string;
  /**
   * The OIDC app's client ID. This is also re-used as the OIDC Audience value
   * and used during payload verification.
   */
  clientId: string;
  /** The OIDC app's client secret. This value is stored sealed and encrypted. */
  clientSecret: Uint8Array;
  /** The requested set of scopes to request from the OIDC identity provider. */
  scopes: string[];
}

export interface SAMLMetadata {}

export interface OAuthMetadata {
  github: OAuthMetadata_GitHubProvider | undefined;
  facebook: OAuthMetadata_FacebookProvider | undefined;
  google: OAuthMetadata_GoogleProvider | undefined;
  microsoft: OAuthMetadata_MicrosoftProvider | undefined;
  twitch: OAuthMetadata_TwitchProvider | undefined;
  slack: OAuthMetadata_SlackProvider | undefined;
  paypal: OAuthMetadata_PayPalProvider | undefined;
  gitlab: OAuthMetadata_GitLabProvider | undefined;
  salesforce: OAuthMetadata_SalesforceProvider | undefined;
  oidc: OAuthMetadata_OIDCProvider | undefined;
}

export interface OAuthMetadata_GitHubProvider {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailDomains: string[];
  emailAddresses: string[];
  teams: string[];
  orgs: string[];
}

export interface OAuthMetadata_FacebookProvider {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailDomains: string[];
  emailAddresses: string[];
}

export interface OAuthMetadata_GoogleProvider {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailDomains: string[];
  emailAddresses: string[];
  /** @deprecated */
  groups: string[];
}

export interface OAuthMetadata_MicrosoftProvider {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailDomains: string[];
  emailAddresses: string[];
}

export interface OAuthMetadata_TwitchProvider {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailDomains: string[];
  emailAddresses: string[];
}

export interface OAuthMetadata_SlackProvider {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailDomains: string[];
  emailAddresses: string[];
}

export interface OAuthMetadata_GitLabProvider {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailDomains: string[];
  emailAddresses: string[];
}

export interface OAuthMetadata_PayPalProvider {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailDomains: string[];
  emailAddresses: string[];
}

export interface OAuthMetadata_SalesforceProvider {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailDomains: string[];
  emailAddresses: string[];
}

export interface OAuthMetadata_OIDCProvider {
  clientId: string;
  clientSecret: Uint8Array;
  scopes: string[];
  emailDomains: string[];
  emailAddresses: string[];
  /** this is what makes OIDC a little special */
  issuerUrl: string;
}

const baseEndpointRuntimeMetadata: object = {};

export const EndpointRuntimeMetadata = {
  encode(
    message: EndpointRuntimeMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oidc !== undefined) {
      OIDCMetadata.encode(message.oidc, writer.uint32(10).fork()).ldelim();
    }
    if (message.saml !== undefined) {
      SAMLMetadata.encode(message.saml, writer.uint32(18).fork()).ldelim();
    }
    if (message.oauth !== undefined) {
      OAuthMetadata.encode(message.oauth, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EndpointRuntimeMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEndpointRuntimeMetadata,
    } as EndpointRuntimeMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oidc = OIDCMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.saml = SAMLMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.oauth = OAuthMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EndpointRuntimeMetadata>
  ): EndpointRuntimeMetadata {
    const message = {
      ...baseEndpointRuntimeMetadata,
    } as EndpointRuntimeMetadata;
    if (object.oidc !== undefined && object.oidc !== null) {
      message.oidc = OIDCMetadata.fromPartial(object.oidc);
    } else {
      message.oidc = undefined;
    }
    if (object.saml !== undefined && object.saml !== null) {
      message.saml = SAMLMetadata.fromPartial(object.saml);
    } else {
      message.saml = undefined;
    }
    if (object.oauth !== undefined && object.oauth !== null) {
      message.oauth = OAuthMetadata.fromPartial(object.oauth);
    } else {
      message.oauth = undefined;
    }
    return message;
  },
};

const baseOIDCMetadata: object = { issuer: "", clientId: "", scopes: "" };

export const OIDCMetadata = {
  encode(
    message: OIDCMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.clientSecret.length !== 0) {
      writer.uint32(26).bytes(message.clientSecret);
    }
    for (const v of message.scopes) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OIDCMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOIDCMetadata } as OIDCMetadata;
    message.scopes = [];
    message.clientSecret = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.clientSecret = reader.bytes();
          break;
        case 4:
          message.scopes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OIDCMetadata>): OIDCMetadata {
    const message = { ...baseOIDCMetadata } as OIDCMetadata;
    message.scopes = [];
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
    return message;
  },
};

const baseSAMLMetadata: object = {};

export const SAMLMetadata = {
  encode(
    _: SAMLMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SAMLMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSAMLMetadata } as SAMLMetadata;
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

  fromPartial(_: DeepPartial<SAMLMetadata>): SAMLMetadata {
    const message = { ...baseSAMLMetadata } as SAMLMetadata;
    return message;
  },
};

const baseOAuthMetadata: object = {};

export const OAuthMetadata = {
  encode(
    message: OAuthMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.github !== undefined) {
      OAuthMetadata_GitHubProvider.encode(
        message.github,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.facebook !== undefined) {
      OAuthMetadata_FacebookProvider.encode(
        message.facebook,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.google !== undefined) {
      OAuthMetadata_GoogleProvider.encode(
        message.google,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.microsoft !== undefined) {
      OAuthMetadata_MicrosoftProvider.encode(
        message.microsoft,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.twitch !== undefined) {
      OAuthMetadata_TwitchProvider.encode(
        message.twitch,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.slack !== undefined) {
      OAuthMetadata_SlackProvider.encode(
        message.slack,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.paypal !== undefined) {
      OAuthMetadata_PayPalProvider.encode(
        message.paypal,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.gitlab !== undefined) {
      OAuthMetadata_GitLabProvider.encode(
        message.gitlab,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.salesforce !== undefined) {
      OAuthMetadata_SalesforceProvider.encode(
        message.salesforce,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.oidc !== undefined) {
      OAuthMetadata_OIDCProvider.encode(
        message.oidc,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OAuthMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOAuthMetadata } as OAuthMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.github = OAuthMetadata_GitHubProvider.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.facebook = OAuthMetadata_FacebookProvider.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.google = OAuthMetadata_GoogleProvider.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.microsoft = OAuthMetadata_MicrosoftProvider.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.twitch = OAuthMetadata_TwitchProvider.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.slack = OAuthMetadata_SlackProvider.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.paypal = OAuthMetadata_PayPalProvider.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.gitlab = OAuthMetadata_GitLabProvider.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.salesforce = OAuthMetadata_SalesforceProvider.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.oidc = OAuthMetadata_OIDCProvider.decode(
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

  fromPartial(object: DeepPartial<OAuthMetadata>): OAuthMetadata {
    const message = { ...baseOAuthMetadata } as OAuthMetadata;
    if (object.github !== undefined && object.github !== null) {
      message.github = OAuthMetadata_GitHubProvider.fromPartial(object.github);
    } else {
      message.github = undefined;
    }
    if (object.facebook !== undefined && object.facebook !== null) {
      message.facebook = OAuthMetadata_FacebookProvider.fromPartial(
        object.facebook
      );
    } else {
      message.facebook = undefined;
    }
    if (object.google !== undefined && object.google !== null) {
      message.google = OAuthMetadata_GoogleProvider.fromPartial(object.google);
    } else {
      message.google = undefined;
    }
    if (object.microsoft !== undefined && object.microsoft !== null) {
      message.microsoft = OAuthMetadata_MicrosoftProvider.fromPartial(
        object.microsoft
      );
    } else {
      message.microsoft = undefined;
    }
    if (object.twitch !== undefined && object.twitch !== null) {
      message.twitch = OAuthMetadata_TwitchProvider.fromPartial(object.twitch);
    } else {
      message.twitch = undefined;
    }
    if (object.slack !== undefined && object.slack !== null) {
      message.slack = OAuthMetadata_SlackProvider.fromPartial(object.slack);
    } else {
      message.slack = undefined;
    }
    if (object.paypal !== undefined && object.paypal !== null) {
      message.paypal = OAuthMetadata_PayPalProvider.fromPartial(object.paypal);
    } else {
      message.paypal = undefined;
    }
    if (object.gitlab !== undefined && object.gitlab !== null) {
      message.gitlab = OAuthMetadata_GitLabProvider.fromPartial(object.gitlab);
    } else {
      message.gitlab = undefined;
    }
    if (object.salesforce !== undefined && object.salesforce !== null) {
      message.salesforce = OAuthMetadata_SalesforceProvider.fromPartial(
        object.salesforce
      );
    } else {
      message.salesforce = undefined;
    }
    if (object.oidc !== undefined && object.oidc !== null) {
      message.oidc = OAuthMetadata_OIDCProvider.fromPartial(object.oidc);
    } else {
      message.oidc = undefined;
    }
    return message;
  },
};

const baseOAuthMetadata_GitHubProvider: object = {
  clientId: "",
  scopes: "",
  emailDomains: "",
  emailAddresses: "",
  teams: "",
  orgs: "",
};

export const OAuthMetadata_GitHubProvider = {
  encode(
    message: OAuthMetadata_GitHubProvider,
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
    for (const v of message.emailDomains) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailAddresses) {
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
  ): OAuthMetadata_GitHubProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOAuthMetadata_GitHubProvider,
    } as OAuthMetadata_GitHubProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
          message.emailDomains.push(reader.string());
          break;
        case 5:
          message.emailAddresses.push(reader.string());
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

  fromPartial(
    object: DeepPartial<OAuthMetadata_GitHubProvider>
  ): OAuthMetadata_GitHubProvider {
    const message = {
      ...baseOAuthMetadata_GitHubProvider,
    } as OAuthMetadata_GitHubProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
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

const baseOAuthMetadata_FacebookProvider: object = {
  clientId: "",
  scopes: "",
  emailDomains: "",
  emailAddresses: "",
};

export const OAuthMetadata_FacebookProvider = {
  encode(
    message: OAuthMetadata_FacebookProvider,
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
    for (const v of message.emailDomains) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OAuthMetadata_FacebookProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOAuthMetadata_FacebookProvider,
    } as OAuthMetadata_FacebookProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
          message.emailDomains.push(reader.string());
          break;
        case 5:
          message.emailAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<OAuthMetadata_FacebookProvider>
  ): OAuthMetadata_FacebookProvider {
    const message = {
      ...baseOAuthMetadata_FacebookProvider,
    } as OAuthMetadata_FacebookProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    return message;
  },
};

const baseOAuthMetadata_GoogleProvider: object = {
  clientId: "",
  scopes: "",
  emailDomains: "",
  emailAddresses: "",
  groups: "",
};

export const OAuthMetadata_GoogleProvider = {
  encode(
    message: OAuthMetadata_GoogleProvider,
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
    for (const v of message.emailDomains) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailAddresses) {
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
  ): OAuthMetadata_GoogleProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOAuthMetadata_GoogleProvider,
    } as OAuthMetadata_GoogleProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
          message.emailDomains.push(reader.string());
          break;
        case 5:
          message.emailAddresses.push(reader.string());
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

  fromPartial(
    object: DeepPartial<OAuthMetadata_GoogleProvider>
  ): OAuthMetadata_GoogleProvider {
    const message = {
      ...baseOAuthMetadata_GoogleProvider,
    } as OAuthMetadata_GoogleProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
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

const baseOAuthMetadata_MicrosoftProvider: object = {
  clientId: "",
  scopes: "",
  emailDomains: "",
  emailAddresses: "",
};

export const OAuthMetadata_MicrosoftProvider = {
  encode(
    message: OAuthMetadata_MicrosoftProvider,
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
    for (const v of message.emailDomains) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OAuthMetadata_MicrosoftProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOAuthMetadata_MicrosoftProvider,
    } as OAuthMetadata_MicrosoftProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
          message.emailDomains.push(reader.string());
          break;
        case 5:
          message.emailAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<OAuthMetadata_MicrosoftProvider>
  ): OAuthMetadata_MicrosoftProvider {
    const message = {
      ...baseOAuthMetadata_MicrosoftProvider,
    } as OAuthMetadata_MicrosoftProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    return message;
  },
};

const baseOAuthMetadata_TwitchProvider: object = {
  clientId: "",
  scopes: "",
  emailDomains: "",
  emailAddresses: "",
};

export const OAuthMetadata_TwitchProvider = {
  encode(
    message: OAuthMetadata_TwitchProvider,
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
    for (const v of message.emailDomains) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OAuthMetadata_TwitchProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOAuthMetadata_TwitchProvider,
    } as OAuthMetadata_TwitchProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
          message.emailDomains.push(reader.string());
          break;
        case 5:
          message.emailAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<OAuthMetadata_TwitchProvider>
  ): OAuthMetadata_TwitchProvider {
    const message = {
      ...baseOAuthMetadata_TwitchProvider,
    } as OAuthMetadata_TwitchProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    return message;
  },
};

const baseOAuthMetadata_SlackProvider: object = {
  clientId: "",
  scopes: "",
  emailDomains: "",
  emailAddresses: "",
};

export const OAuthMetadata_SlackProvider = {
  encode(
    message: OAuthMetadata_SlackProvider,
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
    for (const v of message.emailDomains) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OAuthMetadata_SlackProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOAuthMetadata_SlackProvider,
    } as OAuthMetadata_SlackProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
          message.emailDomains.push(reader.string());
          break;
        case 5:
          message.emailAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<OAuthMetadata_SlackProvider>
  ): OAuthMetadata_SlackProvider {
    const message = {
      ...baseOAuthMetadata_SlackProvider,
    } as OAuthMetadata_SlackProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    return message;
  },
};

const baseOAuthMetadata_GitLabProvider: object = {
  clientId: "",
  scopes: "",
  emailDomains: "",
  emailAddresses: "",
};

export const OAuthMetadata_GitLabProvider = {
  encode(
    message: OAuthMetadata_GitLabProvider,
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
    for (const v of message.emailDomains) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OAuthMetadata_GitLabProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOAuthMetadata_GitLabProvider,
    } as OAuthMetadata_GitLabProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
          message.emailDomains.push(reader.string());
          break;
        case 5:
          message.emailAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<OAuthMetadata_GitLabProvider>
  ): OAuthMetadata_GitLabProvider {
    const message = {
      ...baseOAuthMetadata_GitLabProvider,
    } as OAuthMetadata_GitLabProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    return message;
  },
};

const baseOAuthMetadata_PayPalProvider: object = {
  clientId: "",
  scopes: "",
  emailDomains: "",
  emailAddresses: "",
};

export const OAuthMetadata_PayPalProvider = {
  encode(
    message: OAuthMetadata_PayPalProvider,
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
    for (const v of message.emailDomains) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OAuthMetadata_PayPalProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOAuthMetadata_PayPalProvider,
    } as OAuthMetadata_PayPalProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
          message.emailDomains.push(reader.string());
          break;
        case 5:
          message.emailAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<OAuthMetadata_PayPalProvider>
  ): OAuthMetadata_PayPalProvider {
    const message = {
      ...baseOAuthMetadata_PayPalProvider,
    } as OAuthMetadata_PayPalProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    return message;
  },
};

const baseOAuthMetadata_SalesforceProvider: object = {
  clientId: "",
  scopes: "",
  emailDomains: "",
  emailAddresses: "",
};

export const OAuthMetadata_SalesforceProvider = {
  encode(
    message: OAuthMetadata_SalesforceProvider,
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
    for (const v of message.emailDomains) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OAuthMetadata_SalesforceProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOAuthMetadata_SalesforceProvider,
    } as OAuthMetadata_SalesforceProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
          message.emailDomains.push(reader.string());
          break;
        case 5:
          message.emailAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<OAuthMetadata_SalesforceProvider>
  ): OAuthMetadata_SalesforceProvider {
    const message = {
      ...baseOAuthMetadata_SalesforceProvider,
    } as OAuthMetadata_SalesforceProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    return message;
  },
};

const baseOAuthMetadata_OIDCProvider: object = {
  clientId: "",
  scopes: "",
  emailDomains: "",
  emailAddresses: "",
  issuerUrl: "",
};

export const OAuthMetadata_OIDCProvider = {
  encode(
    message: OAuthMetadata_OIDCProvider,
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
    for (const v of message.emailDomains) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.emailAddresses) {
      writer.uint32(42).string(v!);
    }
    if (message.issuerUrl !== "") {
      writer.uint32(50).string(message.issuerUrl);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OAuthMetadata_OIDCProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOAuthMetadata_OIDCProvider,
    } as OAuthMetadata_OIDCProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
          message.emailDomains.push(reader.string());
          break;
        case 5:
          message.emailAddresses.push(reader.string());
          break;
        case 6:
          message.issuerUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<OAuthMetadata_OIDCProvider>
  ): OAuthMetadata_OIDCProvider {
    const message = {
      ...baseOAuthMetadata_OIDCProvider,
    } as OAuthMetadata_OIDCProvider;
    message.scopes = [];
    message.emailDomains = [];
    message.emailAddresses = [];
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
    if (object.emailDomains !== undefined && object.emailDomains !== null) {
      for (const e of object.emailDomains) {
        message.emailDomains.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    if (object.issuerUrl !== undefined && object.issuerUrl !== null) {
      message.issuerUrl = object.issuerUrl;
    } else {
      message.issuerUrl = "";
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
