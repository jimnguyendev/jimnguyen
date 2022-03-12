// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ID, Timestamp, OptString } from "../pb/types";

export const protobufPackage = "rpx";

/**
 * ------------------------
 * Models
 * ------------------------
 */
export enum PaymentStatus {
  UNKNOWN = 0,
  GOOD_STANDING = 1,
  PAST_DUE = 2,
  SUSPENDED_FOR_NON_PAYMENT = 3,
}

export enum CertsAutoStatus {
  CERTS_AUTO_STATUS_INVALID = 0,
  /** CERTS_AUTO_STATUS_PROVISIONING - The certificate is currently being provisioned, no user action necessary. */
  CERTS_AUTO_STATUS_PROVISIONING = 1,
  /** CERTS_AUTO_STATUS_USER_ERROR_DNS_HTTP01 - Certificate provisioning failed because the user's domain is not pointing to the ngrok infrastructure. */
  CERTS_AUTO_STATUS_USER_ERROR_DNS_HTTP01 = 2,
  /**
   * CERTS_AUTO_STATUS_USER_ERROR_DNS_DNS01 - Certificate provisioning failed because the user's domain nameserver
   * records are not pointing to "their" ngrok dns zone
   */
  CERTS_AUTO_STATUS_USER_ERROR_DNS_DNS01 = 3,
  /** CERTS_AUTO_STATUS_VALID - Certificate has been provisioned succesfully. */
  CERTS_AUTO_STATUS_VALID = 4,
  /** CERTS_AUTO_STATUS_INTERNAL_ERROR - An internal error occured and provisioning has been delayed. */
  CERTS_AUTO_STATUS_INTERNAL_ERROR = 5,
}

export enum IdentityProvider {
  Undefined = 0,
  Password = 1,
  Github = 2,
  Google = 3,
  Runscope = 4,
}

export enum PasswordAlgorithm {
  Bcrypt = 0,
}

export enum CertSource {
  CERT_SOURCE_INVALID = 0,
  CERT_SOURCE_PROVIDED = 1,
  CERT_SOURCE_CSR = 2,
}

export enum CertKeyUsage {
  CERT_KEY_USAGE_INVALID = 0,
  CERT_KEY_USAGE_DIGITAL_SIGNATURE = 1,
  CERT_KEY_USAGE_CONTENT_COMMITMENT = 2,
  CERT_KEY_USAGE_KEY_ENCIPHERMENT = 3,
  CERT_KEY_USAGE_DATA_ENCIPHERMENT = 4,
  CERT_KEY_USAGE_KEY_AGREEMENT = 5,
  CERT_KEY_USAGE_CERT_SIGN = 6,
  CERT_KEY_USAGE_CRL_SIGN = 7,
  CERT_KEY_USAGE_ENCIPHER_ONLY = 8,
  CERT_KEY_USAGE_DECIPHER_ONLY = 9,
}

export enum CertExtKeyUsage {
  CERT_EXT_KEY_USAGE_INVALID = 0,
  CERT_EXT_KEY_USAGE_ANY = 1,
  CERT_EXT_KEY_USAGE_SERVER_AUTH = 2,
  CERT_EXT_KEY_USAGE_CLIENT_AUTH = 3,
  CERT_EXT_KEY_USAGE_CODE_SIGNING = 4,
  CERT_EXT_KEY_USAGE_EMAIL_PROTECTION = 5,
  CERT_EXT_KEY_USAGE_IPSEC_END_SYSTEM = 6,
  CERT_EXT_KEY_USAGE_IPSEC_TUNNEL = 7,
  CERT_EXT_KEY_USAGE_IPSEC_USER = 8,
  CERT_EXT_KEY_USAGE_TIME_STAMPING = 9,
  CERT_EXT_KEY_USAGE_OCSP_SIGNING = 10,
  CERT_EXT_KEY_USAGE_MICROSOFT_SERVER_GATED_CRYPTO = 11,
  CERT_EXT_KEY_USAGE_NETSCAPE_SERVER_GATED_CRYPTO = 12,
  CERT_EXT_KEY_USAGE_MICROSOFT_COMMERCIAL_CODE_SIGNING = 13,
  CERT_EXT_KEY_USAGE_MICROSOFT_KERNEL_CODE_SIGNING = 14,
}

export enum CertKeyType {
  CERT_KEY_TYPE_INVALID = 0,
  CERT_KEY_TYPE_RSA = 1,
  CERT_KEY_TYPE_ECDSA = 2,
  CERT_KEY_TYPE_ED25519 = 3,
}

export enum CertAuthorityAcme {
  CERT_AUTHORITY_ACME_INVALID = 0,
  CERT_AUTHORITY_ACME_LETSENCRYPT_PROD = 1,
  CERT_AUTHORITY_ACME_LETSENCRYPT_STAGING = 2,
}

export interface BillingPlan {
  name: string;
  id: string;
}

export interface User {
  email: string;
  name: string;
  id: ID | undefined;
}

export interface Session {
  id: string;
  remoteAddr: string;
  accountId: number;
  userId: number;
  metadata: string;
  createdAt: Timestamp | undefined;
  serverId: string;
  expiresAt: Timestamp | undefined;
  clientVersion: string;
  transport: string;
  os: string;
  arch: string;
  credSid: string;
  /** only for v2 tunnels, the client-side session id */
  clientId: string;
  heartbeatInterval: number;
  heartbeatTolerance: number;
  sshCredSid: string;
  /** unique machine ID */
  machineId: MachineID | undefined;
  persistentSessionId: string;
  regionId: string;
  credId: ID | undefined;
  sshCredId: ID | undefined;
  stopUnsupportedError: OptString | undefined;
  restartUnsupportedError: OptString | undefined;
  updateUnsupportedError: OptString | undefined;
  manageAddr: string;
  /**
   * The hostname the agent connected to in order to establish the agent
   * tunnel session.
   * TLS SNI of the connection used to establish the agent session.
   * Not valid for SSH agent sessions.
   */
  agentIngressHostname: string;
  proxyType: string;
  mutualTls: boolean;
  serviceRun: boolean;
  configVersion: string;
  customInterface: boolean;
  customCas: boolean;
  /**
   * IP address of the tunnel server load balancer that the agent made its
   * connection to. Obtained in tunnel.v2 via the proxyproto header, and as the
   * plain "local addr" in tunnel.ssh.
   */
  lbAddr: string;
}

export interface MachineID {
  macAddrs: string[];
  diskSerials: string[];
}

export interface CertAuthority {
  acme: CertAuthorityAcme | undefined;
  caId: string | undefined;
}

export interface ManagedCertPolicyData {
  authority: CertAuthority | undefined;
  renewBeforeExpirationDays: number;
  validityDuration: number;
  keyType: CertKeyType;
  subjectCommonName: string;
  keyUsage: CertKeyUsage[];
  extKeyUsage: CertExtKeyUsage[];
  dnsNames: string[];
  ipAddresses: string[];
  defaultMuxMatchByHostname: DefaultMuxMatchByHostname | undefined;
}

export interface ManagedCertPolicy {
  id: ID | undefined;
  data: ManagedCertPolicyData | undefined;
  accountId: number;
  isNgrokOwned: boolean;
}

export interface ManagedCertProvisioningJob {
  startedAt: Timestamp | undefined;
  status: CertsAutoStatus;
  retriesAt: Timestamp | undefined;
}

export interface ManagedCertProvisioningJob_Nameservers {
  nameservers: string[];
}

export interface ManagedCertPolicyStatus {
  renewsAt: Timestamp | undefined;
  job: ManagedCertProvisioningJob | undefined;
}

export interface Cred {
  sid: string;
  accountId: number;
  token: string;
  description: string;
  acl: ACL | undefined;
  createdAt: Timestamp | undefined;
  tokenHash: string;
  /** old, deprecated style credentials */
  deprecatedSecretHash: string;
  deleteProtection: boolean;
  metadata: string;
  id: ID | undefined;
}

export interface SSHCred {
  sid: string;
  accountId: number;
  publicKey: string;
  publicKeySha256: Uint8Array;
  description: string;
  acl: ACL | undefined;
  createdAt: Timestamp | undefined;
  metadata: string;
  id: ID | undefined;
}

export interface ACL {
  rules: string[];
}

export interface Identity {
  userId: ID | undefined;
  createdAt: Timestamp | undefined;
  lastLoginAt: Timestamp | undefined;
  provider: IdentityProvider;
  id: ID | undefined;
  password: PasswordIdentity | undefined;
  google: GoogleIdentity | undefined;
  github: GithubIdentity | undefined;
  runscope: RunscopeIdentity | undefined;
}

export interface PasswordIdentity {
  /** always empty except in IdentitiesCreateReq */
  cleartext: string;
  hash: string;
  algo: PasswordAlgorithm;
}

export interface GoogleIdentity {
  id: string;
  name: string;
  email: string;
  domain: string;
}

export interface GithubIdentity {
  id: number;
  name: string;
  email: string;
  login: string;
}

export interface RunscopeIdentity {
  id: string;
  name: string;
  email: string;
  /** when the runscope account was created, not when our record was created */
  createdAt: Timestamp | undefined;
}

export interface BanDetails {
  bannedRemoteAddr: boolean;
  bannedHostname: boolean;
  bannedAccount: boolean;
  bannedMachine: boolean;
}

/**
 * When ngrok.mux forwards connections to ngrok.tunnel.v2
 * or ngrok.tunnel.ssh, they are prefixed with this serialized
 * header.
 */
export interface FrontendHeader {
  tunnelId: string;
  remoteAddr: string;
  proto: string;
}

/**
 * LeaderLock is stored in etcd to signify maintained leadership of a given
 * instance of a service.
 */
export interface LeaderLock {
  /**
   * instance is an opaque string identifying the current leader - preferably,
   * this would be an address on which that service runs gRPC.
   */
  instance: string;
  /**
   * nonce will generated by the microservice on each election attempt, and
   * is used to previsely correlate an active lock with log data.
   */
  nonce: number;
}

export interface AbuseReportedHostname {
  id: ID | undefined;
  /** May be hostname:port */
  hostname: string;
  status: AbuseReportedHostname_Status;
  createdAt: Timestamp | undefined;
}

export enum AbuseReportedHostname_Status {
  UNDEFINED = 0,
  PENDING = 1,
  BANNED = 2,
  UNBANNED = 3,
  IGNORED = 4,
}

export interface BetaSignup {
  id: ID | undefined;
  feature: BetaSignup_Feature;
  userId: ID | undefined;
  accountId: ID | undefined;
  explicit: boolean;
  createdAt: Timestamp | undefined;
}

export enum BetaSignup_Feature {
  Undefined = 0,
  AccessLogs = 1,
  EndpointConfiguration = 2,
  TunnelSessions = 3,
  TunnelAuthtokens = 4,
  APIKeys = 5,
  IPPolicies = 6,
  CertificateAuthorities = 7,
  IPRestrictions = 8,
  TLSCertificates = 9,
  ManagedCertificates = 10,
  UploadedCertificates = 11,
  EventSubscriptions = 12,
  RBAC = 13,
  AgentIngresses = 14,
  Edges = 15,
}

export interface PasswordReset {
  userId: ID | undefined;
  token: string;
  createdAt: Timestamp | undefined;
  redeemedAt: Timestamp | undefined;
  expiresAt: Timestamp | undefined;
  valid: boolean;
  invalidReason: string;
  id: ID | undefined;
}

export interface EmailConfirmation {
  id: ID | undefined;
  createdAt: Timestamp | undefined;
  userId: ID | undefined;
  email: string;
  confirmationCode: string;
  verificationLastSentAt: Timestamp | undefined;
  verified: boolean;
}

export interface IPRestriction {
  accountId: number;
  createdAt: Timestamp | undefined;
  description: string;
  enforced: boolean;
  id: ID | undefined;
  ipPolicyIds: ID[];
  metadata: string;
  type: IPRestriction_Type;
}

export enum IPRestriction_Type {
  Unknown = 0,
  Dashboard = 1,
  API = 2,
  Agent = 3,
  Endpoints = 4,
}

export interface Paging {
  beforeId: ID | undefined;
  limit: number;
}

export interface DefaultMuxMatchByHostname {
  /**
   * setting this flag to true indicates that this certificate is available to
   * be chosen by mux to terminate tunnels that (any of these):
   *
   * 1. do not have reserved domains
   *    (e.g. this cert is *.ngrok.io, foo.ngrok.io isn't reserved)
   *
   * 2. there is a reserved domain and (any of these):
   *    a. it does not specify a managed certificate policy
   *    b. it does not specify an explicit certificate id
   *    (e.g. this cert is *.ngrok.io, foo.ngrok.io is reserved)
   */
  value: boolean;
}

export interface Cert {
  id: ID | undefined;
  createdAt: Timestamp | undefined;
  issuedAt: Timestamp | undefined;
  source: CertSource;
  certsDer: Uint8Array;
  certsPem: Uint8Array;
  sealedKey: Uint8Array;
  managedCertPolicyId: ID | undefined;
  details: CertDetails | undefined;
  accountId: number;
  description: string;
  metadata: string;
  defaultMuxMatchByHostname: DefaultMuxMatchByHostname | undefined;
  /**
   * true if this certificate is managed by a managed policy. equivalent to `managed_cert_policy_id != nil`.
   * it's broken out as a separate field for dashboard use
   */
  isManaged: boolean;
}

export interface CA {
  id: ID | undefined;
  caPem: Uint8Array;
  accountId: number;
  description: string;
  metadata: string;
  certDetails: CertDetails | undefined;
  createdAt: Timestamp | undefined;
}

export interface CertDetails {
  subjectCommonName: string;
  keyUsage: CertKeyUsage[];
  extKeyUsage: CertExtKeyUsage[];
  emailAddresses: string[];
  dnsNames: string[];
  ipAddresses: string[];
  notBefore: Timestamp | undefined;
  notAfter: Timestamp | undefined;
  keyType: CertKeyType;
  issuerCommonName: string;
  isTrustedIssuer: boolean;
  issuerOrganization: string;
  issuerOrganizationalUnit: string;
  issuerLocality: string;
  issuerProvince: string;
  issuerCountry: string;
  issuerStreetAddress: string;
  issuerPostalCode: string;
  serialNumber: Uint8Array;
  publicKey: Uint8Array;
  publicKeySha256: Uint8Array;
  subjectOrganization: string;
  subjectOrganizationalUnit: string;
  subjectLocality: string;
  subjectProvince: string;
  subjectCountry: string;
  subjectStreetAddress: string;
  subjectPostalCode: string;
  uris: string[];
}

export interface CSR {
  id: ID | undefined;
  createdAt: Timestamp | undefined;
  csr: Uint8Array;
  certId: ID | undefined;
  details: CertDetails | undefined;
  accountId: number;
  managedCertPolicyId: ID | undefined;
  defaultMuxMatchByHostname: DefaultMuxMatchByHostname | undefined;
}

export interface CertKeyPair {
  id: ID | undefined;
  cert: Uint8Array;
  /** Sealed private key */
  key: Uint8Array;
  managedCertPolicyId: ID | undefined;
  activeForManagedCertPolicyId: ID | undefined;
  notAfter: Timestamp | undefined;
  accountId: number;
  subjectCommonName: string;
  dnsNames: string[];
  ipAddresses: string[];
  defaultMuxMatchByHostname: boolean;
}

export interface SSHCA {
  id: ID | undefined;
  publicKey: string;
  accountId: number;
  description: string;
  metadata: string;
  createdAt: Timestamp | undefined;
  keyType: CertKeyType;
}

export interface SSHCert {
  id: ID | undefined;
  createdAt: Timestamp | undefined;
  description: string;
  metadata: string;
  publicKey: string;
  keyType: CertKeyType;
  sshCaId: ID | undefined;
  principals: string[];
  criticalOptions: { [key: string]: string };
  extensions: { [key: string]: string };
  validAfter: Timestamp | undefined;
  validBefore: Timestamp | undefined;
  type: SSHCert_Type;
  accountId: number;
  /** in openssh authorized key format */
  certificate: string;
}

export enum SSHCert_Type {
  Undefined = 0,
  Host = 1,
  User = 2,
}

export interface SSHCert_CriticalOptionsEntry {
  key: string;
  value: string;
}

export interface SSHCert_ExtensionsEntry {
  key: string;
  value: string;
}

export interface SSHCertListResp {
  sshCerts: SSHCert[];
  next: Paging | undefined;
}

const baseBillingPlan: object = { name: "", id: "" };

export const BillingPlan = {
  encode(
    message: BillingPlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BillingPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBillingPlan } as BillingPlan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<BillingPlan>): BillingPlan {
    const message = { ...baseBillingPlan } as BillingPlan;
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
    return message;
  },
};

const baseUser: object = { email: "", name: "" };

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.id = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = { ...baseUser } as User;
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseSession: object = {
  id: "",
  remoteAddr: "",
  accountId: 0,
  userId: 0,
  metadata: "",
  serverId: "",
  clientVersion: "",
  transport: "",
  os: "",
  arch: "",
  credSid: "",
  clientId: "",
  heartbeatInterval: 0,
  heartbeatTolerance: 0,
  sshCredSid: "",
  persistentSessionId: "",
  regionId: "",
  manageAddr: "",
  agentIngressHostname: "",
  proxyType: "",
  mutualTls: false,
  serviceRun: false,
  configVersion: "",
  customInterface: false,
  customCas: false,
  lbAddr: "",
};

export const Session = {
  encode(
    message: Session,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.remoteAddr !== "") {
      writer.uint32(18).string(message.remoteAddr);
    }
    if (message.accountId !== 0) {
      writer.uint32(24).int64(message.accountId);
    }
    if (message.userId !== 0) {
      writer.uint32(32).int64(message.userId);
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    if (message.serverId !== "") {
      writer.uint32(58).string(message.serverId);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(66).fork()).ldelim();
    }
    if (message.clientVersion !== "") {
      writer.uint32(74).string(message.clientVersion);
    }
    if (message.transport !== "") {
      writer.uint32(82).string(message.transport);
    }
    if (message.os !== "") {
      writer.uint32(90).string(message.os);
    }
    if (message.arch !== "") {
      writer.uint32(98).string(message.arch);
    }
    if (message.credSid !== "") {
      writer.uint32(106).string(message.credSid);
    }
    if (message.clientId !== "") {
      writer.uint32(114).string(message.clientId);
    }
    if (message.heartbeatInterval !== 0) {
      writer.uint32(120).int64(message.heartbeatInterval);
    }
    if (message.heartbeatTolerance !== 0) {
      writer.uint32(128).int64(message.heartbeatTolerance);
    }
    if (message.sshCredSid !== "") {
      writer.uint32(138).string(message.sshCredSid);
    }
    if (message.machineId !== undefined) {
      MachineID.encode(message.machineId, writer.uint32(146).fork()).ldelim();
    }
    if (message.persistentSessionId !== "") {
      writer.uint32(154).string(message.persistentSessionId);
    }
    if (message.regionId !== "") {
      writer.uint32(162).string(message.regionId);
    }
    if (message.credId !== undefined) {
      ID.encode(message.credId, writer.uint32(218).fork()).ldelim();
    }
    if (message.sshCredId !== undefined) {
      ID.encode(message.sshCredId, writer.uint32(226).fork()).ldelim();
    }
    if (message.stopUnsupportedError !== undefined) {
      OptString.encode(
        message.stopUnsupportedError,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.restartUnsupportedError !== undefined) {
      OptString.encode(
        message.restartUnsupportedError,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.updateUnsupportedError !== undefined) {
      OptString.encode(
        message.updateUnsupportedError,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.manageAddr !== "") {
      writer.uint32(210).string(message.manageAddr);
    }
    if (message.agentIngressHostname !== "") {
      writer.uint32(234).string(message.agentIngressHostname);
    }
    if (message.proxyType !== "") {
      writer.uint32(242).string(message.proxyType);
    }
    if (message.mutualTls === true) {
      writer.uint32(248).bool(message.mutualTls);
    }
    if (message.serviceRun === true) {
      writer.uint32(256).bool(message.serviceRun);
    }
    if (message.configVersion !== "") {
      writer.uint32(266).string(message.configVersion);
    }
    if (message.customInterface === true) {
      writer.uint32(272).bool(message.customInterface);
    }
    if (message.customCas === true) {
      writer.uint32(280).bool(message.customCas);
    }
    if (message.lbAddr !== "") {
      writer.uint32(290).string(message.lbAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Session {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSession } as Session;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.remoteAddr = reader.string();
          break;
        case 3:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.metadata = reader.string();
          break;
        case 6:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.serverId = reader.string();
          break;
        case 8:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.clientVersion = reader.string();
          break;
        case 10:
          message.transport = reader.string();
          break;
        case 11:
          message.os = reader.string();
          break;
        case 12:
          message.arch = reader.string();
          break;
        case 13:
          message.credSid = reader.string();
          break;
        case 14:
          message.clientId = reader.string();
          break;
        case 15:
          message.heartbeatInterval = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.heartbeatTolerance = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.sshCredSid = reader.string();
          break;
        case 18:
          message.machineId = MachineID.decode(reader, reader.uint32());
          break;
        case 19:
          message.persistentSessionId = reader.string();
          break;
        case 20:
          message.regionId = reader.string();
          break;
        case 27:
          message.credId = ID.decode(reader, reader.uint32());
          break;
        case 28:
          message.sshCredId = ID.decode(reader, reader.uint32());
          break;
        case 23:
          message.stopUnsupportedError = OptString.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.restartUnsupportedError = OptString.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.updateUnsupportedError = OptString.decode(
            reader,
            reader.uint32()
          );
          break;
        case 26:
          message.manageAddr = reader.string();
          break;
        case 29:
          message.agentIngressHostname = reader.string();
          break;
        case 30:
          message.proxyType = reader.string();
          break;
        case 31:
          message.mutualTls = reader.bool();
          break;
        case 32:
          message.serviceRun = reader.bool();
          break;
        case 33:
          message.configVersion = reader.string();
          break;
        case 34:
          message.customInterface = reader.bool();
          break;
        case 35:
          message.customCas = reader.bool();
          break;
        case 36:
          message.lbAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Session>): Session {
    const message = { ...baseSession } as Session;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.remoteAddr !== undefined && object.remoteAddr !== null) {
      message.remoteAddr = object.remoteAddr;
    } else {
      message.remoteAddr = "";
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.serverId !== undefined && object.serverId !== null) {
      message.serverId = object.serverId;
    } else {
      message.serverId = "";
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    if (object.clientVersion !== undefined && object.clientVersion !== null) {
      message.clientVersion = object.clientVersion;
    } else {
      message.clientVersion = "";
    }
    if (object.transport !== undefined && object.transport !== null) {
      message.transport = object.transport;
    } else {
      message.transport = "";
    }
    if (object.os !== undefined && object.os !== null) {
      message.os = object.os;
    } else {
      message.os = "";
    }
    if (object.arch !== undefined && object.arch !== null) {
      message.arch = object.arch;
    } else {
      message.arch = "";
    }
    if (object.credSid !== undefined && object.credSid !== null) {
      message.credSid = object.credSid;
    } else {
      message.credSid = "";
    }
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (
      object.heartbeatInterval !== undefined &&
      object.heartbeatInterval !== null
    ) {
      message.heartbeatInterval = object.heartbeatInterval;
    } else {
      message.heartbeatInterval = 0;
    }
    if (
      object.heartbeatTolerance !== undefined &&
      object.heartbeatTolerance !== null
    ) {
      message.heartbeatTolerance = object.heartbeatTolerance;
    } else {
      message.heartbeatTolerance = 0;
    }
    if (object.sshCredSid !== undefined && object.sshCredSid !== null) {
      message.sshCredSid = object.sshCredSid;
    } else {
      message.sshCredSid = "";
    }
    if (object.machineId !== undefined && object.machineId !== null) {
      message.machineId = MachineID.fromPartial(object.machineId);
    } else {
      message.machineId = undefined;
    }
    if (
      object.persistentSessionId !== undefined &&
      object.persistentSessionId !== null
    ) {
      message.persistentSessionId = object.persistentSessionId;
    } else {
      message.persistentSessionId = "";
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
    }
    if (object.credId !== undefined && object.credId !== null) {
      message.credId = ID.fromPartial(object.credId);
    } else {
      message.credId = undefined;
    }
    if (object.sshCredId !== undefined && object.sshCredId !== null) {
      message.sshCredId = ID.fromPartial(object.sshCredId);
    } else {
      message.sshCredId = undefined;
    }
    if (
      object.stopUnsupportedError !== undefined &&
      object.stopUnsupportedError !== null
    ) {
      message.stopUnsupportedError = OptString.fromPartial(
        object.stopUnsupportedError
      );
    } else {
      message.stopUnsupportedError = undefined;
    }
    if (
      object.restartUnsupportedError !== undefined &&
      object.restartUnsupportedError !== null
    ) {
      message.restartUnsupportedError = OptString.fromPartial(
        object.restartUnsupportedError
      );
    } else {
      message.restartUnsupportedError = undefined;
    }
    if (
      object.updateUnsupportedError !== undefined &&
      object.updateUnsupportedError !== null
    ) {
      message.updateUnsupportedError = OptString.fromPartial(
        object.updateUnsupportedError
      );
    } else {
      message.updateUnsupportedError = undefined;
    }
    if (object.manageAddr !== undefined && object.manageAddr !== null) {
      message.manageAddr = object.manageAddr;
    } else {
      message.manageAddr = "";
    }
    if (
      object.agentIngressHostname !== undefined &&
      object.agentIngressHostname !== null
    ) {
      message.agentIngressHostname = object.agentIngressHostname;
    } else {
      message.agentIngressHostname = "";
    }
    if (object.proxyType !== undefined && object.proxyType !== null) {
      message.proxyType = object.proxyType;
    } else {
      message.proxyType = "";
    }
    if (object.mutualTls !== undefined && object.mutualTls !== null) {
      message.mutualTls = object.mutualTls;
    } else {
      message.mutualTls = false;
    }
    if (object.serviceRun !== undefined && object.serviceRun !== null) {
      message.serviceRun = object.serviceRun;
    } else {
      message.serviceRun = false;
    }
    if (object.configVersion !== undefined && object.configVersion !== null) {
      message.configVersion = object.configVersion;
    } else {
      message.configVersion = "";
    }
    if (
      object.customInterface !== undefined &&
      object.customInterface !== null
    ) {
      message.customInterface = object.customInterface;
    } else {
      message.customInterface = false;
    }
    if (object.customCas !== undefined && object.customCas !== null) {
      message.customCas = object.customCas;
    } else {
      message.customCas = false;
    }
    if (object.lbAddr !== undefined && object.lbAddr !== null) {
      message.lbAddr = object.lbAddr;
    } else {
      message.lbAddr = "";
    }
    return message;
  },
};

const baseMachineID: object = { macAddrs: "", diskSerials: "" };

export const MachineID = {
  encode(
    message: MachineID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.macAddrs) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.diskSerials) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MachineID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMachineID } as MachineID;
    message.macAddrs = [];
    message.diskSerials = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.macAddrs.push(reader.string());
          break;
        case 2:
          message.diskSerials.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<MachineID>): MachineID {
    const message = { ...baseMachineID } as MachineID;
    message.macAddrs = [];
    message.diskSerials = [];
    if (object.macAddrs !== undefined && object.macAddrs !== null) {
      for (const e of object.macAddrs) {
        message.macAddrs.push(e);
      }
    }
    if (object.diskSerials !== undefined && object.diskSerials !== null) {
      for (const e of object.diskSerials) {
        message.diskSerials.push(e);
      }
    }
    return message;
  },
};

const baseCertAuthority: object = {};

export const CertAuthority = {
  encode(
    message: CertAuthority,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.acme !== undefined) {
      writer.uint32(8).int32(message.acme);
    }
    if (message.caId !== undefined) {
      writer.uint32(18).string(message.caId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCertAuthority } as CertAuthority;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acme = reader.int32() as any;
          break;
        case 2:
          message.caId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CertAuthority>): CertAuthority {
    const message = { ...baseCertAuthority } as CertAuthority;
    if (object.acme !== undefined && object.acme !== null) {
      message.acme = object.acme;
    } else {
      message.acme = undefined;
    }
    if (object.caId !== undefined && object.caId !== null) {
      message.caId = object.caId;
    } else {
      message.caId = undefined;
    }
    return message;
  },
};

const baseManagedCertPolicyData: object = {
  renewBeforeExpirationDays: 0,
  validityDuration: 0,
  keyType: 0,
  subjectCommonName: "",
  keyUsage: 0,
  extKeyUsage: 0,
  dnsNames: "",
  ipAddresses: "",
};

export const ManagedCertPolicyData = {
  encode(
    message: ManagedCertPolicyData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== undefined) {
      CertAuthority.encode(
        message.authority,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.renewBeforeExpirationDays !== 0) {
      writer.uint32(16).uint64(message.renewBeforeExpirationDays);
    }
    if (message.validityDuration !== 0) {
      writer.uint32(24).uint64(message.validityDuration);
    }
    if (message.keyType !== 0) {
      writer.uint32(32).int32(message.keyType);
    }
    if (message.subjectCommonName !== "") {
      writer.uint32(42).string(message.subjectCommonName);
    }
    writer.uint32(50).fork();
    for (const v of message.keyUsage) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.extKeyUsage) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.dnsNames) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.ipAddresses) {
      writer.uint32(74).string(v!);
    }
    if (message.defaultMuxMatchByHostname !== undefined) {
      DefaultMuxMatchByHostname.encode(
        message.defaultMuxMatchByHostname,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ManagedCertPolicyData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseManagedCertPolicyData } as ManagedCertPolicyData;
    message.keyUsage = [];
    message.extKeyUsage = [];
    message.dnsNames = [];
    message.ipAddresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = CertAuthority.decode(reader, reader.uint32());
          break;
        case 2:
          message.renewBeforeExpirationDays = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 3:
          message.validityDuration = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.keyType = reader.int32() as any;
          break;
        case 5:
          message.subjectCommonName = reader.string();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.keyUsage.push(reader.int32() as any);
            }
          } else {
            message.keyUsage.push(reader.int32() as any);
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extKeyUsage.push(reader.int32() as any);
            }
          } else {
            message.extKeyUsage.push(reader.int32() as any);
          }
          break;
        case 8:
          message.dnsNames.push(reader.string());
          break;
        case 9:
          message.ipAddresses.push(reader.string());
          break;
        case 10:
          message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.decode(
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
    object: DeepPartial<ManagedCertPolicyData>
  ): ManagedCertPolicyData {
    const message = { ...baseManagedCertPolicyData } as ManagedCertPolicyData;
    message.keyUsage = [];
    message.extKeyUsage = [];
    message.dnsNames = [];
    message.ipAddresses = [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = CertAuthority.fromPartial(object.authority);
    } else {
      message.authority = undefined;
    }
    if (
      object.renewBeforeExpirationDays !== undefined &&
      object.renewBeforeExpirationDays !== null
    ) {
      message.renewBeforeExpirationDays = object.renewBeforeExpirationDays;
    } else {
      message.renewBeforeExpirationDays = 0;
    }
    if (
      object.validityDuration !== undefined &&
      object.validityDuration !== null
    ) {
      message.validityDuration = object.validityDuration;
    } else {
      message.validityDuration = 0;
    }
    if (object.keyType !== undefined && object.keyType !== null) {
      message.keyType = object.keyType;
    } else {
      message.keyType = 0;
    }
    if (
      object.subjectCommonName !== undefined &&
      object.subjectCommonName !== null
    ) {
      message.subjectCommonName = object.subjectCommonName;
    } else {
      message.subjectCommonName = "";
    }
    if (object.keyUsage !== undefined && object.keyUsage !== null) {
      for (const e of object.keyUsage) {
        message.keyUsage.push(e);
      }
    }
    if (object.extKeyUsage !== undefined && object.extKeyUsage !== null) {
      for (const e of object.extKeyUsage) {
        message.extKeyUsage.push(e);
      }
    }
    if (object.dnsNames !== undefined && object.dnsNames !== null) {
      for (const e of object.dnsNames) {
        message.dnsNames.push(e);
      }
    }
    if (object.ipAddresses !== undefined && object.ipAddresses !== null) {
      for (const e of object.ipAddresses) {
        message.ipAddresses.push(e);
      }
    }
    if (
      object.defaultMuxMatchByHostname !== undefined &&
      object.defaultMuxMatchByHostname !== null
    ) {
      message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.fromPartial(
        object.defaultMuxMatchByHostname
      );
    } else {
      message.defaultMuxMatchByHostname = undefined;
    }
    return message;
  },
};

const baseManagedCertPolicy: object = { accountId: 0, isNgrokOwned: false };

export const ManagedCertPolicy = {
  encode(
    message: ManagedCertPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      ManagedCertPolicyData.encode(
        message.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(24).int64(message.accountId);
    }
    if (message.isNgrokOwned === true) {
      writer.uint32(32).bool(message.isNgrokOwned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManagedCertPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseManagedCertPolicy } as ManagedCertPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = ManagedCertPolicyData.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.isNgrokOwned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ManagedCertPolicy>): ManagedCertPolicy {
    const message = { ...baseManagedCertPolicy } as ManagedCertPolicy;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = ManagedCertPolicyData.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.isNgrokOwned !== undefined && object.isNgrokOwned !== null) {
      message.isNgrokOwned = object.isNgrokOwned;
    } else {
      message.isNgrokOwned = false;
    }
    return message;
  },
};

const baseManagedCertProvisioningJob: object = { status: 0 };

export const ManagedCertProvisioningJob = {
  encode(
    message: ManagedCertProvisioningJob,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startedAt !== undefined) {
      Timestamp.encode(message.startedAt, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.retriesAt !== undefined) {
      Timestamp.encode(message.retriesAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ManagedCertProvisioningJob {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseManagedCertProvisioningJob,
    } as ManagedCertProvisioningJob;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.retriesAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<ManagedCertProvisioningJob>
  ): ManagedCertProvisioningJob {
    const message = {
      ...baseManagedCertProvisioningJob,
    } as ManagedCertProvisioningJob;
    if (object.startedAt !== undefined && object.startedAt !== null) {
      message.startedAt = Timestamp.fromPartial(object.startedAt);
    } else {
      message.startedAt = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.retriesAt !== undefined && object.retriesAt !== null) {
      message.retriesAt = Timestamp.fromPartial(object.retriesAt);
    } else {
      message.retriesAt = undefined;
    }
    return message;
  },
};

const baseManagedCertProvisioningJob_Nameservers: object = { nameservers: "" };

export const ManagedCertProvisioningJob_Nameservers = {
  encode(
    message: ManagedCertProvisioningJob_Nameservers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.nameservers) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ManagedCertProvisioningJob_Nameservers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseManagedCertProvisioningJob_Nameservers,
    } as ManagedCertProvisioningJob_Nameservers;
    message.nameservers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameservers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<ManagedCertProvisioningJob_Nameservers>
  ): ManagedCertProvisioningJob_Nameservers {
    const message = {
      ...baseManagedCertProvisioningJob_Nameservers,
    } as ManagedCertProvisioningJob_Nameservers;
    message.nameservers = [];
    if (object.nameservers !== undefined && object.nameservers !== null) {
      for (const e of object.nameservers) {
        message.nameservers.push(e);
      }
    }
    return message;
  },
};

const baseManagedCertPolicyStatus: object = {};

export const ManagedCertPolicyStatus = {
  encode(
    message: ManagedCertPolicyStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.renewsAt !== undefined) {
      Timestamp.encode(message.renewsAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.job !== undefined) {
      ManagedCertProvisioningJob.encode(
        message.job,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ManagedCertPolicyStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseManagedCertPolicyStatus,
    } as ManagedCertPolicyStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.renewsAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.job = ManagedCertProvisioningJob.decode(
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
    object: DeepPartial<ManagedCertPolicyStatus>
  ): ManagedCertPolicyStatus {
    const message = {
      ...baseManagedCertPolicyStatus,
    } as ManagedCertPolicyStatus;
    if (object.renewsAt !== undefined && object.renewsAt !== null) {
      message.renewsAt = Timestamp.fromPartial(object.renewsAt);
    } else {
      message.renewsAt = undefined;
    }
    if (object.job !== undefined && object.job !== null) {
      message.job = ManagedCertProvisioningJob.fromPartial(object.job);
    } else {
      message.job = undefined;
    }
    return message;
  },
};

const baseCred: object = {
  sid: "",
  accountId: 0,
  token: "",
  description: "",
  tokenHash: "",
  deprecatedSecretHash: "",
  deleteProtection: false,
  metadata: "",
};

export const Cred = {
  encode(message: Cred, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(18).string(message.sid);
    }
    if (message.accountId !== 0) {
      writer.uint32(24).int64(message.accountId);
    }
    if (message.token !== "") {
      writer.uint32(34).string(message.token);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.acl !== undefined) {
      ACL.encode(message.acl, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.tokenHash !== "") {
      writer.uint32(66).string(message.tokenHash);
    }
    if (message.deprecatedSecretHash !== "") {
      writer.uint32(74).string(message.deprecatedSecretHash);
    }
    if (message.deleteProtection === true) {
      writer.uint32(80).bool(message.deleteProtection);
    }
    if (message.metadata !== "") {
      writer.uint32(90).string(message.metadata);
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cred {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCred } as Cred;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.sid = reader.string();
          break;
        case 3:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.token = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.acl = ACL.decode(reader, reader.uint32());
          break;
        case 7:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.tokenHash = reader.string();
          break;
        case 9:
          message.deprecatedSecretHash = reader.string();
          break;
        case 10:
          message.deleteProtection = reader.bool();
          break;
        case 11:
          message.metadata = reader.string();
          break;
        case 13:
          message.id = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Cred>): Cred {
    const message = { ...baseCred } as Cred;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.acl !== undefined && object.acl !== null) {
      message.acl = ACL.fromPartial(object.acl);
    } else {
      message.acl = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.tokenHash !== undefined && object.tokenHash !== null) {
      message.tokenHash = object.tokenHash;
    } else {
      message.tokenHash = "";
    }
    if (
      object.deprecatedSecretHash !== undefined &&
      object.deprecatedSecretHash !== null
    ) {
      message.deprecatedSecretHash = object.deprecatedSecretHash;
    } else {
      message.deprecatedSecretHash = "";
    }
    if (
      object.deleteProtection !== undefined &&
      object.deleteProtection !== null
    ) {
      message.deleteProtection = object.deleteProtection;
    } else {
      message.deleteProtection = false;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseSSHCred: object = {
  sid: "",
  accountId: 0,
  publicKey: "",
  description: "",
  metadata: "",
};

export const SSHCred = {
  encode(
    message: SSHCred,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(18).string(message.sid);
    }
    if (message.accountId !== 0) {
      writer.uint32(24).int64(message.accountId);
    }
    if (message.publicKey !== "") {
      writer.uint32(34).string(message.publicKey);
    }
    if (message.publicKeySha256.length !== 0) {
      writer.uint32(42).bytes(message.publicKeySha256);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.acl !== undefined) {
      ACL.encode(message.acl, writer.uint32(58).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(66).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(74).string(message.metadata);
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSHCred {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSHCred } as SSHCred;
    message.publicKeySha256 = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.sid = reader.string();
          break;
        case 3:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.publicKey = reader.string();
          break;
        case 5:
          message.publicKeySha256 = reader.bytes();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.acl = ACL.decode(reader, reader.uint32());
          break;
        case 8:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.metadata = reader.string();
          break;
        case 11:
          message.id = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<SSHCred>): SSHCred {
    const message = { ...baseSSHCred } as SSHCred;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
    }
    if (
      object.publicKeySha256 !== undefined &&
      object.publicKeySha256 !== null
    ) {
      message.publicKeySha256 = object.publicKeySha256;
    } else {
      message.publicKeySha256 = new Uint8Array();
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.acl !== undefined && object.acl !== null) {
      message.acl = ACL.fromPartial(object.acl);
    } else {
      message.acl = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseACL: object = { rules: "" };

export const ACL = {
  encode(message: ACL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ACL {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseACL } as ACL;
    message.rules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ACL>): ACL {
    const message = { ...baseACL } as ACL;
    message.rules = [];
    if (object.rules !== undefined && object.rules !== null) {
      for (const e of object.rules) {
        message.rules.push(e);
      }
    }
    return message;
  },
};

const baseIdentity: object = { provider: 0 };

export const Identity = {
  encode(
    message: Identity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(90).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastLoginAt !== undefined) {
      Timestamp.encode(message.lastLoginAt, writer.uint32(34).fork()).ldelim();
    }
    if (message.provider !== 0) {
      writer.uint32(72).int32(message.provider);
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(82).fork()).ldelim();
    }
    if (message.password !== undefined) {
      PasswordIdentity.encode(
        message.password,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.google !== undefined) {
      GoogleIdentity.encode(message.google, writer.uint32(50).fork()).ldelim();
    }
    if (message.github !== undefined) {
      GithubIdentity.encode(message.github, writer.uint32(58).fork()).ldelim();
    }
    if (message.runscope !== undefined) {
      RunscopeIdentity.encode(
        message.runscope,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Identity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentity } as Identity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 11:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastLoginAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.provider = reader.int32() as any;
          break;
        case 10:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 5:
          message.password = PasswordIdentity.decode(reader, reader.uint32());
          break;
        case 6:
          message.google = GoogleIdentity.decode(reader, reader.uint32());
          break;
        case 7:
          message.github = GithubIdentity.decode(reader, reader.uint32());
          break;
        case 8:
          message.runscope = RunscopeIdentity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Identity>): Identity {
    const message = { ...baseIdentity } as Identity;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.lastLoginAt !== undefined && object.lastLoginAt !== null) {
      message.lastLoginAt = Timestamp.fromPartial(object.lastLoginAt);
    } else {
      message.lastLoginAt = undefined;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = PasswordIdentity.fromPartial(object.password);
    } else {
      message.password = undefined;
    }
    if (object.google !== undefined && object.google !== null) {
      message.google = GoogleIdentity.fromPartial(object.google);
    } else {
      message.google = undefined;
    }
    if (object.github !== undefined && object.github !== null) {
      message.github = GithubIdentity.fromPartial(object.github);
    } else {
      message.github = undefined;
    }
    if (object.runscope !== undefined && object.runscope !== null) {
      message.runscope = RunscopeIdentity.fromPartial(object.runscope);
    } else {
      message.runscope = undefined;
    }
    return message;
  },
};

const basePasswordIdentity: object = { cleartext: "", hash: "", algo: 0 };

export const PasswordIdentity = {
  encode(
    message: PasswordIdentity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cleartext !== "") {
      writer.uint32(10).string(message.cleartext);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.algo !== 0) {
      writer.uint32(24).int32(message.algo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePasswordIdentity } as PasswordIdentity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cleartext = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.algo = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<PasswordIdentity>): PasswordIdentity {
    const message = { ...basePasswordIdentity } as PasswordIdentity;
    if (object.cleartext !== undefined && object.cleartext !== null) {
      message.cleartext = object.cleartext;
    } else {
      message.cleartext = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.algo !== undefined && object.algo !== null) {
      message.algo = object.algo;
    } else {
      message.algo = 0;
    }
    return message;
  },
};

const baseGoogleIdentity: object = { id: "", name: "", email: "", domain: "" };

export const GoogleIdentity = {
  encode(
    message: GoogleIdentity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.domain !== "") {
      writer.uint32(34).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoogleIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGoogleIdentity } as GoogleIdentity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.domain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<GoogleIdentity>): GoogleIdentity {
    const message = { ...baseGoogleIdentity } as GoogleIdentity;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
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
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    } else {
      message.domain = "";
    }
    return message;
  },
};

const baseGithubIdentity: object = { id: 0, name: "", email: "", login: "" };

export const GithubIdentity = {
  encode(
    message: GithubIdentity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.login !== "") {
      writer.uint32(34).string(message.login);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GithubIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGithubIdentity } as GithubIdentity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.login = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<GithubIdentity>): GithubIdentity {
    const message = { ...baseGithubIdentity } as GithubIdentity;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
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
    if (object.login !== undefined && object.login !== null) {
      message.login = object.login;
    } else {
      message.login = "";
    }
    return message;
  },
};

const baseRunscopeIdentity: object = { id: "", name: "", email: "" };

export const RunscopeIdentity = {
  encode(
    message: RunscopeIdentity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunscopeIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRunscopeIdentity } as RunscopeIdentity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<RunscopeIdentity>): RunscopeIdentity {
    const message = { ...baseRunscopeIdentity } as RunscopeIdentity;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
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
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

const baseBanDetails: object = {
  bannedRemoteAddr: false,
  bannedHostname: false,
  bannedAccount: false,
  bannedMachine: false,
};

export const BanDetails = {
  encode(
    message: BanDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bannedRemoteAddr === true) {
      writer.uint32(8).bool(message.bannedRemoteAddr);
    }
    if (message.bannedHostname === true) {
      writer.uint32(16).bool(message.bannedHostname);
    }
    if (message.bannedAccount === true) {
      writer.uint32(24).bool(message.bannedAccount);
    }
    if (message.bannedMachine === true) {
      writer.uint32(32).bool(message.bannedMachine);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BanDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBanDetails } as BanDetails;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bannedRemoteAddr = reader.bool();
          break;
        case 2:
          message.bannedHostname = reader.bool();
          break;
        case 3:
          message.bannedAccount = reader.bool();
          break;
        case 4:
          message.bannedMachine = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<BanDetails>): BanDetails {
    const message = { ...baseBanDetails } as BanDetails;
    if (
      object.bannedRemoteAddr !== undefined &&
      object.bannedRemoteAddr !== null
    ) {
      message.bannedRemoteAddr = object.bannedRemoteAddr;
    } else {
      message.bannedRemoteAddr = false;
    }
    if (object.bannedHostname !== undefined && object.bannedHostname !== null) {
      message.bannedHostname = object.bannedHostname;
    } else {
      message.bannedHostname = false;
    }
    if (object.bannedAccount !== undefined && object.bannedAccount !== null) {
      message.bannedAccount = object.bannedAccount;
    } else {
      message.bannedAccount = false;
    }
    if (object.bannedMachine !== undefined && object.bannedMachine !== null) {
      message.bannedMachine = object.bannedMachine;
    } else {
      message.bannedMachine = false;
    }
    return message;
  },
};

const baseFrontendHeader: object = { tunnelId: "", remoteAddr: "", proto: "" };

export const FrontendHeader = {
  encode(
    message: FrontendHeader,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunnelId !== "") {
      writer.uint32(10).string(message.tunnelId);
    }
    if (message.remoteAddr !== "") {
      writer.uint32(18).string(message.remoteAddr);
    }
    if (message.proto !== "") {
      writer.uint32(26).string(message.proto);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontendHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFrontendHeader } as FrontendHeader;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.string();
          break;
        case 2:
          message.remoteAddr = reader.string();
          break;
        case 3:
          message.proto = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FrontendHeader>): FrontendHeader {
    const message = { ...baseFrontendHeader } as FrontendHeader;
    if (object.tunnelId !== undefined && object.tunnelId !== null) {
      message.tunnelId = object.tunnelId;
    } else {
      message.tunnelId = "";
    }
    if (object.remoteAddr !== undefined && object.remoteAddr !== null) {
      message.remoteAddr = object.remoteAddr;
    } else {
      message.remoteAddr = "";
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = object.proto;
    } else {
      message.proto = "";
    }
    return message;
  },
};

const baseLeaderLock: object = { instance: "", nonce: 0 };

export const LeaderLock = {
  encode(
    message: LeaderLock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instance !== "") {
      writer.uint32(10).string(message.instance);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaderLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLeaderLock } as LeaderLock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instance = reader.string();
          break;
        case 2:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<LeaderLock>): LeaderLock {
    const message = { ...baseLeaderLock } as LeaderLock;
    if (object.instance !== undefined && object.instance !== null) {
      message.instance = object.instance;
    } else {
      message.instance = "";
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    return message;
  },
};

const baseAbuseReportedHostname: object = { hostname: "", status: 0 };

export const AbuseReportedHostname = {
  encode(
    message: AbuseReportedHostname,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostname !== "") {
      writer.uint32(18).string(message.hostname);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AbuseReportedHostname {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAbuseReportedHostname } as AbuseReportedHostname;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.hostname = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AbuseReportedHostname>
  ): AbuseReportedHostname {
    const message = { ...baseAbuseReportedHostname } as AbuseReportedHostname;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.hostname !== undefined && object.hostname !== null) {
      message.hostname = object.hostname;
    } else {
      message.hostname = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

const baseBetaSignup: object = { feature: 0, explicit: false };

export const BetaSignup = {
  encode(
    message: BetaSignup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.feature !== 0) {
      writer.uint32(16).int32(message.feature);
    }
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(26).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(34).fork()).ldelim();
    }
    if (message.explicit === true) {
      writer.uint32(40).bool(message.explicit);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BetaSignup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBetaSignup } as BetaSignup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.feature = reader.int32() as any;
          break;
        case 3:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 5:
          message.explicit = reader.bool();
          break;
        case 6:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<BetaSignup>): BetaSignup {
    const message = { ...baseBetaSignup } as BetaSignup;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.feature !== undefined && object.feature !== null) {
      message.feature = object.feature;
    } else {
      message.feature = 0;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (object.explicit !== undefined && object.explicit !== null) {
      message.explicit = object.explicit;
    } else {
      message.explicit = false;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

const basePasswordReset: object = {
  token: "",
  valid: false,
  invalidReason: "",
};

export const PasswordReset = {
  encode(
    message: PasswordReset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(90).fork()).ldelim();
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(34).fork()).ldelim();
    }
    if (message.redeemedAt !== undefined) {
      Timestamp.encode(message.redeemedAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(50).fork()).ldelim();
    }
    if (message.valid === true) {
      writer.uint32(64).bool(message.valid);
    }
    if (message.invalidReason !== "") {
      writer.uint32(74).string(message.invalidReason);
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordReset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePasswordReset } as PasswordReset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 11:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.redeemedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.valid = reader.bool();
          break;
        case 9:
          message.invalidReason = reader.string();
          break;
        case 10:
          message.id = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<PasswordReset>): PasswordReset {
    const message = { ...basePasswordReset } as PasswordReset;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.redeemedAt !== undefined && object.redeemedAt !== null) {
      message.redeemedAt = Timestamp.fromPartial(object.redeemedAt);
    } else {
      message.redeemedAt = undefined;
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    if (object.valid !== undefined && object.valid !== null) {
      message.valid = object.valid;
    } else {
      message.valid = false;
    }
    if (object.invalidReason !== undefined && object.invalidReason !== null) {
      message.invalidReason = object.invalidReason;
    } else {
      message.invalidReason = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseEmailConfirmation: object = {
  email: "",
  confirmationCode: "",
  verified: false,
};

export const EmailConfirmation = {
  encode(
    message: EmailConfirmation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(26).fork()).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.confirmationCode !== "") {
      writer.uint32(42).string(message.confirmationCode);
    }
    if (message.verificationLastSentAt !== undefined) {
      Timestamp.encode(
        message.verificationLastSentAt,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.verified === true) {
      writer.uint32(56).bool(message.verified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmailConfirmation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEmailConfirmation } as EmailConfirmation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.confirmationCode = reader.string();
          break;
        case 6:
          message.verificationLastSentAt = Timestamp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.verified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EmailConfirmation>): EmailConfirmation {
    const message = { ...baseEmailConfirmation } as EmailConfirmation;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (
      object.confirmationCode !== undefined &&
      object.confirmationCode !== null
    ) {
      message.confirmationCode = object.confirmationCode;
    } else {
      message.confirmationCode = "";
    }
    if (
      object.verificationLastSentAt !== undefined &&
      object.verificationLastSentAt !== null
    ) {
      message.verificationLastSentAt = Timestamp.fromPartial(
        object.verificationLastSentAt
      );
    } else {
      message.verificationLastSentAt = undefined;
    }
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    } else {
      message.verified = false;
    }
    return message;
  },
};

const baseIPRestriction: object = {
  accountId: 0,
  description: "",
  enforced: false,
  metadata: "",
  type: 0,
};

export const IPRestriction = {
  encode(
    message: IPRestriction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(66).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.enforced === true) {
      writer.uint32(48).bool(message.enforced);
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.ipPolicyIds) {
      ID.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IPRestriction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIPRestriction } as IPRestriction;
    message.ipPolicyIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.description = reader.string();
          break;
        case 6:
          message.enforced = reader.bool();
          break;
        case 7:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 5:
          message.ipPolicyIds.push(ID.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<IPRestriction>): IPRestriction {
    const message = { ...baseIPRestriction } as IPRestriction;
    message.ipPolicyIds = [];
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
    if (object.enforced !== undefined && object.enforced !== null) {
      message.enforced = object.enforced;
    } else {
      message.enforced = false;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.ipPolicyIds !== undefined && object.ipPolicyIds !== null) {
      for (const e of object.ipPolicyIds) {
        message.ipPolicyIds.push(ID.fromPartial(e));
      }
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
    return message;
  },
};

const basePaging: object = { limit: 0 };

export const Paging = {
  encode(
    message: Paging,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.beforeId !== undefined) {
      ID.encode(message.beforeId, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Paging {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePaging } as Paging;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beforeId = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.limit = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Paging>): Paging {
    const message = { ...basePaging } as Paging;
    if (object.beforeId !== undefined && object.beforeId !== null) {
      message.beforeId = ID.fromPartial(object.beforeId);
    } else {
      message.beforeId = undefined;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = 0;
    }
    return message;
  },
};

const baseDefaultMuxMatchByHostname: object = { value: false };

export const DefaultMuxMatchByHostname = {
  encode(
    message: DefaultMuxMatchByHostname,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DefaultMuxMatchByHostname {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDefaultMuxMatchByHostname,
    } as DefaultMuxMatchByHostname;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DefaultMuxMatchByHostname>
  ): DefaultMuxMatchByHostname {
    const message = {
      ...baseDefaultMuxMatchByHostname,
    } as DefaultMuxMatchByHostname;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
};

const baseCert: object = {
  source: 0,
  accountId: 0,
  description: "",
  metadata: "",
  isManaged: false,
};

export const Cert = {
  encode(message: Cert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.issuedAt !== undefined) {
      Timestamp.encode(message.issuedAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.source !== 0) {
      writer.uint32(32).int32(message.source);
    }
    if (message.certsDer.length !== 0) {
      writer.uint32(42).bytes(message.certsDer);
    }
    if (message.certsPem.length !== 0) {
      writer.uint32(98).bytes(message.certsPem);
    }
    if (message.sealedKey.length !== 0) {
      writer.uint32(50).bytes(message.sealedKey);
    }
    if (message.managedCertPolicyId !== undefined) {
      ID.encode(message.managedCertPolicyId, writer.uint32(58).fork()).ldelim();
    }
    if (message.details !== undefined) {
      CertDetails.encode(message.details, writer.uint32(66).fork()).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(72).int64(message.accountId);
    }
    if (message.description !== "") {
      writer.uint32(82).string(message.description);
    }
    if (message.metadata !== "") {
      writer.uint32(90).string(message.metadata);
    }
    if (message.defaultMuxMatchByHostname !== undefined) {
      DefaultMuxMatchByHostname.encode(
        message.defaultMuxMatchByHostname,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.isManaged === true) {
      writer.uint32(112).bool(message.isManaged);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cert {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCert } as Cert;
    message.certsDer = new Uint8Array();
    message.certsPem = new Uint8Array();
    message.sealedKey = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.issuedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.source = reader.int32() as any;
          break;
        case 5:
          message.certsDer = reader.bytes();
          break;
        case 12:
          message.certsPem = reader.bytes();
          break;
        case 6:
          message.sealedKey = reader.bytes();
          break;
        case 7:
          message.managedCertPolicyId = ID.decode(reader, reader.uint32());
          break;
        case 8:
          message.details = CertDetails.decode(reader, reader.uint32());
          break;
        case 9:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.description = reader.string();
          break;
        case 11:
          message.metadata = reader.string();
          break;
        case 13:
          message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.isManaged = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Cert>): Cert {
    const message = { ...baseCert } as Cert;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.issuedAt !== undefined && object.issuedAt !== null) {
      message.issuedAt = Timestamp.fromPartial(object.issuedAt);
    } else {
      message.issuedAt = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = 0;
    }
    if (object.certsDer !== undefined && object.certsDer !== null) {
      message.certsDer = object.certsDer;
    } else {
      message.certsDer = new Uint8Array();
    }
    if (object.certsPem !== undefined && object.certsPem !== null) {
      message.certsPem = object.certsPem;
    } else {
      message.certsPem = new Uint8Array();
    }
    if (object.sealedKey !== undefined && object.sealedKey !== null) {
      message.sealedKey = object.sealedKey;
    } else {
      message.sealedKey = new Uint8Array();
    }
    if (
      object.managedCertPolicyId !== undefined &&
      object.managedCertPolicyId !== null
    ) {
      message.managedCertPolicyId = ID.fromPartial(object.managedCertPolicyId);
    } else {
      message.managedCertPolicyId = undefined;
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = CertDetails.fromPartial(object.details);
    } else {
      message.details = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
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
    if (
      object.defaultMuxMatchByHostname !== undefined &&
      object.defaultMuxMatchByHostname !== null
    ) {
      message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.fromPartial(
        object.defaultMuxMatchByHostname
      );
    } else {
      message.defaultMuxMatchByHostname = undefined;
    }
    if (object.isManaged !== undefined && object.isManaged !== null) {
      message.isManaged = object.isManaged;
    } else {
      message.isManaged = false;
    }
    return message;
  },
};

const baseCA: object = { accountId: 0, description: "", metadata: "" };

export const CA = {
  encode(message: CA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.caPem.length !== 0) {
      writer.uint32(18).bytes(message.caPem);
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
    if (message.certDetails !== undefined) {
      CertDetails.encode(
        message.certDetails,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCA } as CA;
    message.caPem = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.caPem = reader.bytes();
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
          message.certDetails = CertDetails.decode(reader, reader.uint32());
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

  fromPartial(object: DeepPartial<CA>): CA {
    const message = { ...baseCA } as CA;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.caPem !== undefined && object.caPem !== null) {
      message.caPem = object.caPem;
    } else {
      message.caPem = new Uint8Array();
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
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
    if (object.certDetails !== undefined && object.certDetails !== null) {
      message.certDetails = CertDetails.fromPartial(object.certDetails);
    } else {
      message.certDetails = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

const baseCertDetails: object = {
  subjectCommonName: "",
  keyUsage: 0,
  extKeyUsage: 0,
  emailAddresses: "",
  dnsNames: "",
  ipAddresses: "",
  keyType: 0,
  issuerCommonName: "",
  isTrustedIssuer: false,
  issuerOrganization: "",
  issuerOrganizationalUnit: "",
  issuerLocality: "",
  issuerProvince: "",
  issuerCountry: "",
  issuerStreetAddress: "",
  issuerPostalCode: "",
  subjectOrganization: "",
  subjectOrganizationalUnit: "",
  subjectLocality: "",
  subjectProvince: "",
  subjectCountry: "",
  subjectStreetAddress: "",
  subjectPostalCode: "",
  uris: "",
};

export const CertDetails = {
  encode(
    message: CertDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subjectCommonName !== "") {
      writer.uint32(10).string(message.subjectCommonName);
    }
    writer.uint32(18).fork();
    for (const v of message.keyUsage) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.extKeyUsage) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.emailAddresses) {
      writer.uint32(226).string(v!);
    }
    for (const v of message.dnsNames) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.ipAddresses) {
      writer.uint32(42).string(v!);
    }
    if (message.notBefore !== undefined) {
      Timestamp.encode(message.notBefore, writer.uint32(50).fork()).ldelim();
    }
    if (message.notAfter !== undefined) {
      Timestamp.encode(message.notAfter, writer.uint32(58).fork()).ldelim();
    }
    if (message.keyType !== 0) {
      writer.uint32(64).int32(message.keyType);
    }
    if (message.issuerCommonName !== "") {
      writer.uint32(74).string(message.issuerCommonName);
    }
    if (message.isTrustedIssuer === true) {
      writer.uint32(160).bool(message.isTrustedIssuer);
    }
    if (message.issuerOrganization !== "") {
      writer.uint32(170).string(message.issuerOrganization);
    }
    if (message.issuerOrganizationalUnit !== "") {
      writer.uint32(178).string(message.issuerOrganizationalUnit);
    }
    if (message.issuerLocality !== "") {
      writer.uint32(186).string(message.issuerLocality);
    }
    if (message.issuerProvince !== "") {
      writer.uint32(194).string(message.issuerProvince);
    }
    if (message.issuerCountry !== "") {
      writer.uint32(202).string(message.issuerCountry);
    }
    if (message.issuerStreetAddress !== "") {
      writer.uint32(210).string(message.issuerStreetAddress);
    }
    if (message.issuerPostalCode !== "") {
      writer.uint32(218).string(message.issuerPostalCode);
    }
    if (message.serialNumber.length !== 0) {
      writer.uint32(82).bytes(message.serialNumber);
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(90).bytes(message.publicKey);
    }
    if (message.publicKeySha256.length !== 0) {
      writer.uint32(98).bytes(message.publicKeySha256);
    }
    if (message.subjectOrganization !== "") {
      writer.uint32(106).string(message.subjectOrganization);
    }
    if (message.subjectOrganizationalUnit !== "") {
      writer.uint32(114).string(message.subjectOrganizationalUnit);
    }
    if (message.subjectLocality !== "") {
      writer.uint32(122).string(message.subjectLocality);
    }
    if (message.subjectProvince !== "") {
      writer.uint32(130).string(message.subjectProvince);
    }
    if (message.subjectCountry !== "") {
      writer.uint32(138).string(message.subjectCountry);
    }
    if (message.subjectStreetAddress !== "") {
      writer.uint32(146).string(message.subjectStreetAddress);
    }
    if (message.subjectPostalCode !== "") {
      writer.uint32(154).string(message.subjectPostalCode);
    }
    for (const v of message.uris) {
      writer.uint32(234).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCertDetails } as CertDetails;
    message.keyUsage = [];
    message.extKeyUsage = [];
    message.emailAddresses = [];
    message.dnsNames = [];
    message.ipAddresses = [];
    message.uris = [];
    message.serialNumber = new Uint8Array();
    message.publicKey = new Uint8Array();
    message.publicKeySha256 = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectCommonName = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.keyUsage.push(reader.int32() as any);
            }
          } else {
            message.keyUsage.push(reader.int32() as any);
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extKeyUsage.push(reader.int32() as any);
            }
          } else {
            message.extKeyUsage.push(reader.int32() as any);
          }
          break;
        case 28:
          message.emailAddresses.push(reader.string());
          break;
        case 4:
          message.dnsNames.push(reader.string());
          break;
        case 5:
          message.ipAddresses.push(reader.string());
          break;
        case 6:
          message.notBefore = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.notAfter = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.keyType = reader.int32() as any;
          break;
        case 9:
          message.issuerCommonName = reader.string();
          break;
        case 20:
          message.isTrustedIssuer = reader.bool();
          break;
        case 21:
          message.issuerOrganization = reader.string();
          break;
        case 22:
          message.issuerOrganizationalUnit = reader.string();
          break;
        case 23:
          message.issuerLocality = reader.string();
          break;
        case 24:
          message.issuerProvince = reader.string();
          break;
        case 25:
          message.issuerCountry = reader.string();
          break;
        case 26:
          message.issuerStreetAddress = reader.string();
          break;
        case 27:
          message.issuerPostalCode = reader.string();
          break;
        case 10:
          message.serialNumber = reader.bytes();
          break;
        case 11:
          message.publicKey = reader.bytes();
          break;
        case 12:
          message.publicKeySha256 = reader.bytes();
          break;
        case 13:
          message.subjectOrganization = reader.string();
          break;
        case 14:
          message.subjectOrganizationalUnit = reader.string();
          break;
        case 15:
          message.subjectLocality = reader.string();
          break;
        case 16:
          message.subjectProvince = reader.string();
          break;
        case 17:
          message.subjectCountry = reader.string();
          break;
        case 18:
          message.subjectStreetAddress = reader.string();
          break;
        case 19:
          message.subjectPostalCode = reader.string();
          break;
        case 29:
          message.uris.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CertDetails>): CertDetails {
    const message = { ...baseCertDetails } as CertDetails;
    message.keyUsage = [];
    message.extKeyUsage = [];
    message.emailAddresses = [];
    message.dnsNames = [];
    message.ipAddresses = [];
    message.uris = [];
    if (
      object.subjectCommonName !== undefined &&
      object.subjectCommonName !== null
    ) {
      message.subjectCommonName = object.subjectCommonName;
    } else {
      message.subjectCommonName = "";
    }
    if (object.keyUsage !== undefined && object.keyUsage !== null) {
      for (const e of object.keyUsage) {
        message.keyUsage.push(e);
      }
    }
    if (object.extKeyUsage !== undefined && object.extKeyUsage !== null) {
      for (const e of object.extKeyUsage) {
        message.extKeyUsage.push(e);
      }
    }
    if (object.emailAddresses !== undefined && object.emailAddresses !== null) {
      for (const e of object.emailAddresses) {
        message.emailAddresses.push(e);
      }
    }
    if (object.dnsNames !== undefined && object.dnsNames !== null) {
      for (const e of object.dnsNames) {
        message.dnsNames.push(e);
      }
    }
    if (object.ipAddresses !== undefined && object.ipAddresses !== null) {
      for (const e of object.ipAddresses) {
        message.ipAddresses.push(e);
      }
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = Timestamp.fromPartial(object.notBefore);
    } else {
      message.notBefore = undefined;
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = Timestamp.fromPartial(object.notAfter);
    } else {
      message.notAfter = undefined;
    }
    if (object.keyType !== undefined && object.keyType !== null) {
      message.keyType = object.keyType;
    } else {
      message.keyType = 0;
    }
    if (
      object.issuerCommonName !== undefined &&
      object.issuerCommonName !== null
    ) {
      message.issuerCommonName = object.issuerCommonName;
    } else {
      message.issuerCommonName = "";
    }
    if (
      object.isTrustedIssuer !== undefined &&
      object.isTrustedIssuer !== null
    ) {
      message.isTrustedIssuer = object.isTrustedIssuer;
    } else {
      message.isTrustedIssuer = false;
    }
    if (
      object.issuerOrganization !== undefined &&
      object.issuerOrganization !== null
    ) {
      message.issuerOrganization = object.issuerOrganization;
    } else {
      message.issuerOrganization = "";
    }
    if (
      object.issuerOrganizationalUnit !== undefined &&
      object.issuerOrganizationalUnit !== null
    ) {
      message.issuerOrganizationalUnit = object.issuerOrganizationalUnit;
    } else {
      message.issuerOrganizationalUnit = "";
    }
    if (object.issuerLocality !== undefined && object.issuerLocality !== null) {
      message.issuerLocality = object.issuerLocality;
    } else {
      message.issuerLocality = "";
    }
    if (object.issuerProvince !== undefined && object.issuerProvince !== null) {
      message.issuerProvince = object.issuerProvince;
    } else {
      message.issuerProvince = "";
    }
    if (object.issuerCountry !== undefined && object.issuerCountry !== null) {
      message.issuerCountry = object.issuerCountry;
    } else {
      message.issuerCountry = "";
    }
    if (
      object.issuerStreetAddress !== undefined &&
      object.issuerStreetAddress !== null
    ) {
      message.issuerStreetAddress = object.issuerStreetAddress;
    } else {
      message.issuerStreetAddress = "";
    }
    if (
      object.issuerPostalCode !== undefined &&
      object.issuerPostalCode !== null
    ) {
      message.issuerPostalCode = object.issuerPostalCode;
    } else {
      message.issuerPostalCode = "";
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = new Uint8Array();
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = new Uint8Array();
    }
    if (
      object.publicKeySha256 !== undefined &&
      object.publicKeySha256 !== null
    ) {
      message.publicKeySha256 = object.publicKeySha256;
    } else {
      message.publicKeySha256 = new Uint8Array();
    }
    if (
      object.subjectOrganization !== undefined &&
      object.subjectOrganization !== null
    ) {
      message.subjectOrganization = object.subjectOrganization;
    } else {
      message.subjectOrganization = "";
    }
    if (
      object.subjectOrganizationalUnit !== undefined &&
      object.subjectOrganizationalUnit !== null
    ) {
      message.subjectOrganizationalUnit = object.subjectOrganizationalUnit;
    } else {
      message.subjectOrganizationalUnit = "";
    }
    if (
      object.subjectLocality !== undefined &&
      object.subjectLocality !== null
    ) {
      message.subjectLocality = object.subjectLocality;
    } else {
      message.subjectLocality = "";
    }
    if (
      object.subjectProvince !== undefined &&
      object.subjectProvince !== null
    ) {
      message.subjectProvince = object.subjectProvince;
    } else {
      message.subjectProvince = "";
    }
    if (object.subjectCountry !== undefined && object.subjectCountry !== null) {
      message.subjectCountry = object.subjectCountry;
    } else {
      message.subjectCountry = "";
    }
    if (
      object.subjectStreetAddress !== undefined &&
      object.subjectStreetAddress !== null
    ) {
      message.subjectStreetAddress = object.subjectStreetAddress;
    } else {
      message.subjectStreetAddress = "";
    }
    if (
      object.subjectPostalCode !== undefined &&
      object.subjectPostalCode !== null
    ) {
      message.subjectPostalCode = object.subjectPostalCode;
    } else {
      message.subjectPostalCode = "";
    }
    if (object.uris !== undefined && object.uris !== null) {
      for (const e of object.uris) {
        message.uris.push(e);
      }
    }
    return message;
  },
};

const baseCSR: object = { accountId: 0 };

export const CSR = {
  encode(message: CSR, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.csr.length !== 0) {
      writer.uint32(26).bytes(message.csr);
    }
    if (message.certId !== undefined) {
      ID.encode(message.certId, writer.uint32(34).fork()).ldelim();
    }
    if (message.details !== undefined) {
      CertDetails.encode(message.details, writer.uint32(42).fork()).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(48).int64(message.accountId);
    }
    if (message.managedCertPolicyId !== undefined) {
      ID.encode(message.managedCertPolicyId, writer.uint32(58).fork()).ldelim();
    }
    if (message.defaultMuxMatchByHostname !== undefined) {
      DefaultMuxMatchByHostname.encode(
        message.defaultMuxMatchByHostname,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSR {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCSR } as CSR;
    message.csr = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.csr = reader.bytes();
          break;
        case 4:
          message.certId = ID.decode(reader, reader.uint32());
          break;
        case 5:
          message.details = CertDetails.decode(reader, reader.uint32());
          break;
        case 6:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.managedCertPolicyId = ID.decode(reader, reader.uint32());
          break;
        case 8:
          message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.decode(
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

  fromPartial(object: DeepPartial<CSR>): CSR {
    const message = { ...baseCSR } as CSR;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.csr !== undefined && object.csr !== null) {
      message.csr = object.csr;
    } else {
      message.csr = new Uint8Array();
    }
    if (object.certId !== undefined && object.certId !== null) {
      message.certId = ID.fromPartial(object.certId);
    } else {
      message.certId = undefined;
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = CertDetails.fromPartial(object.details);
    } else {
      message.details = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (
      object.managedCertPolicyId !== undefined &&
      object.managedCertPolicyId !== null
    ) {
      message.managedCertPolicyId = ID.fromPartial(object.managedCertPolicyId);
    } else {
      message.managedCertPolicyId = undefined;
    }
    if (
      object.defaultMuxMatchByHostname !== undefined &&
      object.defaultMuxMatchByHostname !== null
    ) {
      message.defaultMuxMatchByHostname = DefaultMuxMatchByHostname.fromPartial(
        object.defaultMuxMatchByHostname
      );
    } else {
      message.defaultMuxMatchByHostname = undefined;
    }
    return message;
  },
};

const baseCertKeyPair: object = {
  accountId: 0,
  subjectCommonName: "",
  dnsNames: "",
  ipAddresses: "",
  defaultMuxMatchByHostname: false,
};

export const CertKeyPair = {
  encode(
    message: CertKeyPair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(74).fork()).ldelim();
    }
    if (message.cert.length !== 0) {
      writer.uint32(50).bytes(message.cert);
    }
    if (message.key.length !== 0) {
      writer.uint32(66).bytes(message.key);
    }
    if (message.managedCertPolicyId !== undefined) {
      ID.encode(message.managedCertPolicyId, writer.uint32(18).fork()).ldelim();
    }
    if (message.activeForManagedCertPolicyId !== undefined) {
      ID.encode(
        message.activeForManagedCertPolicyId,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.notAfter !== undefined) {
      Timestamp.encode(message.notAfter, writer.uint32(42).fork()).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(56).int64(message.accountId);
    }
    if (message.subjectCommonName !== "") {
      writer.uint32(82).string(message.subjectCommonName);
    }
    for (const v of message.dnsNames) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.ipAddresses) {
      writer.uint32(98).string(v!);
    }
    if (message.defaultMuxMatchByHostname === true) {
      writer.uint32(104).bool(message.defaultMuxMatchByHostname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertKeyPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCertKeyPair } as CertKeyPair;
    message.dnsNames = [];
    message.ipAddresses = [];
    message.cert = new Uint8Array();
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 6:
          message.cert = reader.bytes();
          break;
        case 8:
          message.key = reader.bytes();
          break;
        case 2:
          message.managedCertPolicyId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.activeForManagedCertPolicyId = ID.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.notAfter = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.subjectCommonName = reader.string();
          break;
        case 11:
          message.dnsNames.push(reader.string());
          break;
        case 12:
          message.ipAddresses.push(reader.string());
          break;
        case 13:
          message.defaultMuxMatchByHostname = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CertKeyPair>): CertKeyPair {
    const message = { ...baseCertKeyPair } as CertKeyPair;
    message.dnsNames = [];
    message.ipAddresses = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
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
    if (
      object.managedCertPolicyId !== undefined &&
      object.managedCertPolicyId !== null
    ) {
      message.managedCertPolicyId = ID.fromPartial(object.managedCertPolicyId);
    } else {
      message.managedCertPolicyId = undefined;
    }
    if (
      object.activeForManagedCertPolicyId !== undefined &&
      object.activeForManagedCertPolicyId !== null
    ) {
      message.activeForManagedCertPolicyId = ID.fromPartial(
        object.activeForManagedCertPolicyId
      );
    } else {
      message.activeForManagedCertPolicyId = undefined;
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = Timestamp.fromPartial(object.notAfter);
    } else {
      message.notAfter = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (
      object.subjectCommonName !== undefined &&
      object.subjectCommonName !== null
    ) {
      message.subjectCommonName = object.subjectCommonName;
    } else {
      message.subjectCommonName = "";
    }
    if (object.dnsNames !== undefined && object.dnsNames !== null) {
      for (const e of object.dnsNames) {
        message.dnsNames.push(e);
      }
    }
    if (object.ipAddresses !== undefined && object.ipAddresses !== null) {
      for (const e of object.ipAddresses) {
        message.ipAddresses.push(e);
      }
    }
    if (
      object.defaultMuxMatchByHostname !== undefined &&
      object.defaultMuxMatchByHostname !== null
    ) {
      message.defaultMuxMatchByHostname = object.defaultMuxMatchByHostname;
    } else {
      message.defaultMuxMatchByHostname = false;
    }
    return message;
  },
};

const baseSSHCA: object = {
  publicKey: "",
  accountId: 0,
  description: "",
  metadata: "",
  keyType: 0,
};

export const SSHCA = {
  encode(message: SSHCA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.publicKey !== "") {
      writer.uint32(18).string(message.publicKey);
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
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    if (message.keyType !== 0) {
      writer.uint32(56).int32(message.keyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSHCA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSHCA } as SSHCA;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.publicKey = reader.string();
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
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.keyType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<SSHCA>): SSHCA {
    const message = { ...baseSSHCA } as SSHCA;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
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
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.keyType !== undefined && object.keyType !== null) {
      message.keyType = object.keyType;
    } else {
      message.keyType = 0;
    }
    return message;
  },
};

const baseSSHCert: object = {
  description: "",
  metadata: "",
  publicKey: "",
  keyType: 0,
  principals: "",
  type: 0,
  accountId: 0,
  certificate: "",
};

export const SSHCert = {
  encode(
    message: SSHCert,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.publicKey !== "") {
      writer.uint32(42).string(message.publicKey);
    }
    if (message.keyType !== 0) {
      writer.uint32(48).int32(message.keyType);
    }
    if (message.sshCaId !== undefined) {
      ID.encode(message.sshCaId, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.principals) {
      writer.uint32(66).string(v!);
    }
    Object.entries(message.criticalOptions).forEach(([key, value]) => {
      SSHCert_CriticalOptionsEntry.encode(
        { key: key as any, value },
        writer.uint32(74).fork()
      ).ldelim();
    });
    Object.entries(message.extensions).forEach(([key, value]) => {
      SSHCert_ExtensionsEntry.encode(
        { key: key as any, value },
        writer.uint32(82).fork()
      ).ldelim();
    });
    if (message.validAfter !== undefined) {
      Timestamp.encode(message.validAfter, writer.uint32(90).fork()).ldelim();
    }
    if (message.validBefore !== undefined) {
      Timestamp.encode(message.validBefore, writer.uint32(98).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(104).int32(message.type);
    }
    if (message.accountId !== 0) {
      writer.uint32(112).int64(message.accountId);
    }
    if (message.certificate !== "") {
      writer.uint32(122).string(message.certificate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSHCert {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSHCert } as SSHCert;
    message.principals = [];
    message.criticalOptions = {};
    message.extensions = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.publicKey = reader.string();
          break;
        case 6:
          message.keyType = reader.int32() as any;
          break;
        case 7:
          message.sshCaId = ID.decode(reader, reader.uint32());
          break;
        case 8:
          message.principals.push(reader.string());
          break;
        case 9:
          const entry9 = SSHCert_CriticalOptionsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry9.value !== undefined) {
            message.criticalOptions[entry9.key] = entry9.value;
          }
          break;
        case 10:
          const entry10 = SSHCert_ExtensionsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry10.value !== undefined) {
            message.extensions[entry10.key] = entry10.value;
          }
          break;
        case 11:
          message.validAfter = Timestamp.decode(reader, reader.uint32());
          break;
        case 12:
          message.validBefore = Timestamp.decode(reader, reader.uint32());
          break;
        case 13:
          message.type = reader.int32() as any;
          break;
        case 14:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.certificate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<SSHCert>): SSHCert {
    const message = { ...baseSSHCert } as SSHCert;
    message.principals = [];
    message.criticalOptions = {};
    message.extensions = {};
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
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
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
    }
    if (object.keyType !== undefined && object.keyType !== null) {
      message.keyType = object.keyType;
    } else {
      message.keyType = 0;
    }
    if (object.sshCaId !== undefined && object.sshCaId !== null) {
      message.sshCaId = ID.fromPartial(object.sshCaId);
    } else {
      message.sshCaId = undefined;
    }
    if (object.principals !== undefined && object.principals !== null) {
      for (const e of object.principals) {
        message.principals.push(e);
      }
    }
    if (
      object.criticalOptions !== undefined &&
      object.criticalOptions !== null
    ) {
      Object.entries(object.criticalOptions).forEach(([key, value]) => {
        if (value !== undefined) {
          message.criticalOptions[key] = String(value);
        }
      });
    }
    if (object.extensions !== undefined && object.extensions !== null) {
      Object.entries(object.extensions).forEach(([key, value]) => {
        if (value !== undefined) {
          message.extensions[key] = String(value);
        }
      });
    }
    if (object.validAfter !== undefined && object.validAfter !== null) {
      message.validAfter = Timestamp.fromPartial(object.validAfter);
    } else {
      message.validAfter = undefined;
    }
    if (object.validBefore !== undefined && object.validBefore !== null) {
      message.validBefore = Timestamp.fromPartial(object.validBefore);
    } else {
      message.validBefore = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = object.certificate;
    } else {
      message.certificate = "";
    }
    return message;
  },
};

const baseSSHCert_CriticalOptionsEntry: object = { key: "", value: "" };

export const SSHCert_CriticalOptionsEntry = {
  encode(
    message: SSHCert_CriticalOptionsEntry,
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
  ): SSHCert_CriticalOptionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSSHCert_CriticalOptionsEntry,
    } as SSHCert_CriticalOptionsEntry;
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
    object: DeepPartial<SSHCert_CriticalOptionsEntry>
  ): SSHCert_CriticalOptionsEntry {
    const message = {
      ...baseSSHCert_CriticalOptionsEntry,
    } as SSHCert_CriticalOptionsEntry;
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

const baseSSHCert_ExtensionsEntry: object = { key: "", value: "" };

export const SSHCert_ExtensionsEntry = {
  encode(
    message: SSHCert_ExtensionsEntry,
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
  ): SSHCert_ExtensionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSSHCert_ExtensionsEntry,
    } as SSHCert_ExtensionsEntry;
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
    object: DeepPartial<SSHCert_ExtensionsEntry>
  ): SSHCert_ExtensionsEntry {
    const message = {
      ...baseSSHCert_ExtensionsEntry,
    } as SSHCert_ExtensionsEntry;
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

const baseSSHCertListResp: object = {};

export const SSHCertListResp = {
  encode(
    message: SSHCertListResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sshCerts) {
      SSHCert.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.next !== undefined) {
      Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSHCertListResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSHCertListResp } as SSHCertListResp;
    message.sshCerts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sshCerts.push(SSHCert.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<SSHCertListResp>): SSHCertListResp {
    const message = { ...baseSSHCertListResp } as SSHCertListResp;
    message.sshCerts = [];
    if (object.sshCerts !== undefined && object.sshCerts !== null) {
      for (const e of object.sshCerts) {
        message.sshCerts.push(SSHCert.fromPartial(e));
      }
    }
    if (object.next !== undefined && object.next !== null) {
      message.next = Paging.fromPartial(object.next);
    } else {
      message.next = undefined;
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
