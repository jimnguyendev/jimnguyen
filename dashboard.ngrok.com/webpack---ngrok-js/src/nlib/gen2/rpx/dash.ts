// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Flag_Type, Limit_Type } from "../rpx/model_plans";
import { IPPolicyRule_Action, IPPolicy } from "../rpx/model_ip_policy";
import {
  PaymentStatus,
  BetaSignup,
  Cred,
  SSHCred,
  IPRestriction,
  CA,
  SSHCA,
  Cert,
  Paging,
} from "../rpx/model";
import {
  Endpoint_Type,
  Endpoint_BackendTunnelMatch,
} from "../rpx/model_endpoint";
import { Empty, ID, Timestamp, OptString } from "../pb/types";
import {
  PasswordResetsRedeemReq,
  PasswordResetsGetByTokenReq,
} from "../rpx/password_resets";
import { EmailConfirmationsUserReq } from "../rpx/email_confirmations";
import {
  BetaSignupsPutReq,
  BetaSignupsDeleteReq,
  BetaSignupsEnrollReq,
} from "../rpx/beta_signups";
import {
  FeatureRequestsCreateReq,
  FeatureRequestsGetSuggestionsReq,
  FeatureRequestsGetSuggestionsResp,
} from "../rpx/feature_requests";
import { FeatureRequest } from "../rpx/model_feature_request";
import {
  AccountsCreateReq,
  AccountsSetNameReq,
  AccountsDeleteReq,
} from "../rpx/accounts";
import { UsersSetNameReq, UsersSetEmailReq } from "../rpx/users";
import {
  MembershipsSwapAdminReq,
  MembershipsSetPermissionsReq,
  MembershipsDeleteReq,
} from "../rpx/memberships";
import {
  CredsCreateReq,
  CredsUpdateReq,
  CredsDeleteReq,
  SSHCredsCreateReq,
} from "../rpx/creds";
import {
  IPPolicyCreateReq,
  IPPolicyUpdateReq,
  IPPolicyDeleteReq,
} from "../rpx/ip_policy";
import {
  IPRestrictionsCreateReq,
  IPRestrictionsUpdateReq,
  IPRestrictionsDeleteByIDReq,
} from "../rpx/ip_restriction";
import {
  DomainsReserveReq,
  DomainsUpdateReq,
  DomainsDeleteNestedReq,
  DomainsReleaseReq,
  DomainsVerifyReq,
  DomainsVerifyChallengeReq,
  DomainsAvailableReq,
  DomainsGetByIDReq,
  DomainsAvailableResp,
} from "../rpx/domains";
import { Domain } from "../rpx/model_domain";
import {
  TCPAddrsAssignReq,
  TCPAddrsUpdateReq,
  TCPAddrsDeleteNestedReq,
  TCPAddrsReleaseReq,
} from "../rpx/tcp_addrs";
import { TCPAddr } from "../rpx/model_tcp_addr";
import {
  InvitationsCreateReq,
  InvitationsCancelReq,
  InvitationsResendReq,
  InvitationsUpdateReq,
} from "../rpx/invitations";
import { Invitation } from "../rpx/model_invitation";
import {
  BillingEmailsCreateReq,
  BillingEmailsDeleteReq,
  BillingEmail,
} from "../rpx/billing";
import {
  EndpointConfigCreateReq,
  EndpointConfigUpdateReq,
  EndpointConfigDeleteModuleReq,
  EndpointConfigDeleteReq,
} from "../rpx/pointcfg";
import { EndpointConfiguration } from "../rpx/pointcfg_module";
import {
  EdgesGetByIDReq,
  EdgesGetByAccountReq,
  EdgesCreateReq,
  EdgesUpdateReq,
  EdgesDeleteReq,
  EdgesDeleteModuleReq,
  EdgeRoutesGetByIDReq,
  EdgeRoutesCreateReq,
  EdgeRoutesUpdateReq,
  EdgeRoutesDeleteReq,
  EdgeRoutesDeleteModuleReq,
  EdgeList,
} from "../rpx/edges";
import { Edge, HTTPSEdge_Route } from "../rpx/model_edges";
import {
  BackendCreateReq,
  BackendUpdateReq,
  BackendDeleteReq,
} from "../rpx/backends";
import { Backend } from "../rpx/model_backends";
import {
  CAsCreateReq,
  CAsUpdateReq,
  CAsDeleteReq,
  CertsCreateReq,
  CertsDeleteReq,
  CertsUpdateReq,
  CertsParsePEMReq,
  CertsParsePEMResp,
} from "../rpx/certs";
import {
  SSHCAsCreateReq,
  SSHCAsUpdateReq,
  SSHCAsDeleteReq,
} from "../rpx/ssh_cas";
import {
  SessionsGlobalStopReq,
  SessionsGlobalRestartReq,
  SessionsGlobalUpdateReq,
} from "../rpx/sessions_global";
import {
  EventStreamGetByIDReq,
  EventStreamCreateReq,
  EventStreamUpdateReq,
  EventStreamDeleteReq,
  EventSubscriptionGetByIDReq,
  EventSubscriptionCreateReq,
  EventSubscriptionUpdateReq,
  EventSubscriptionDeleteReq,
  EventDestinationGetByIDReq,
  EventDestinationCreateReq,
  EventDestinationUpdateReq,
  EventDestinationDeleteReq,
  EventDestinationCheckReq,
  EventDestinationCheckResp,
} from "../rpx/evstream";
import { EventStream, EventDestination } from "../rpx/model_evstream";
import { EventSubscription } from "../rpx/model_evsub";
import {
  AgentIngressesCreateReq,
  AgentIngressesUpdateReq,
  AgentIngressesDeleteReq,
  AgentIngressesVerifyNSReq,
} from "../rpx/agent_ingresses";
import { AgentIngress } from "../rpx/model_agent_ingress";
import { BrowserHeaders } from "browser-headers";
import { Tunnel_EdgeRouteBackendMatch } from "../rpx/model_tunnel";
import { MembershipPermissions } from "../rpx/model_membership";

export const protobufPackage = "rpx";

export interface DashImpersonateReq {
  impersonatorId: string;
  userId: ID | undefined;
}

export interface DashImpersonateResp {
  url: string;
}

export interface DashAppState {
  account: DashAccount | undefined;
  tunnels: DashTunnel[];
  accounts: DashAccount[];
  reservedDomains: Domain[];
  reservedAddrs: TCPAddr[];
  tunnelCreds: Cred[];
  apiCreds: Cred[];
  sshCreds: SSHCred[];
  invitations: Invitation[];
  teamMembers: DashTeamMember[];
  invoices: DashInvoice[];
  billingEmails: BillingEmail[];
  ipPolicies: IPPolicy[];
  ipPolicyRules: DashIPPolicyRule[];
  regions: DashRegion[];
  edges: Edge[];
  endpointConfigurations: EndpointConfiguration[];
  tunnelSessions: DashSession[];
  cas: CA[];
  sshCas: SSHCA[];
  card: DashCard | undefined;
  user: DashUser | undefined;
  newSignup: boolean;
  flashes: DashFlash[];
  impersonatorId: string;
  remoteAddress: string;
  ipRestrictions: IPRestriction[];
  accountFlags: DashFlag[];
  accountLimits: DashLimit[];
  betaSignups: BetaSignup[];
  certs: Cert[];
  eventStreams: EventStream[];
  eventSubscriptions: EventSubscription[];
  eventDestinations: EventDestination[];
  backends: Backend[];
  agentIngresses: AgentIngress[];
  awsAuthInfo: DashAppState_AWSAuthInfo | undefined;
  tunnelsError: boolean;
  accountsError: boolean;
  reservedDomainsError: boolean;
  reservedAddrsError: boolean;
  tunnelCredsError: boolean;
  sshCredsError: boolean;
  apiCredsError: boolean;
  invitationsError: boolean;
  teamMembersError: boolean;
  ipPolicyError: boolean;
  ipPolicyRuleError: boolean;
  endpointConfigurationError: boolean;
  edgeError: boolean;
  googleIdentError: boolean;
  billingError: boolean;
  cardError: boolean;
  invoicesError: boolean;
  billingEmailsError: boolean;
  casError: boolean;
  certsError: boolean;
  sshCasError: boolean;
  eventStreamsError: boolean;
  eventDestinationsError: boolean;
  eventSubscriptionsError: boolean;
  backendsError: boolean;
  agentIngressesError: boolean;
}

export interface DashAppState_AWSAuthInfo {
  publicAccountId: string;
  externalId: string;
}

export interface DashUnauthState {
  flashes: DashFlash[];
}

export interface DashGoogleIdent {
  id: ID | undefined;
  email: string;
  domain: string;
  createdAt: Timestamp | undefined;
}

export interface DashGithubIdent {
  id: ID | undefined;
  username: string;
  email: string;
  createdAt: Timestamp | undefined;
}

export interface DashPasswordIdent {
  id: ID | undefined;
  createdAt: Timestamp | undefined;
}

export interface DashBillingPlanState {
  plans: DashBillingPlan[];
  initPlanId: string;
  initBillingPeriod: string;
  itemCount: number;
  balance: number;
  moneyBackDays: number;
  credit: DashBillingCredit | undefined;
  card: DashCard | undefined;
  discount: DashBillingDiscount | undefined;
  flashes: DashFlash[];
}

export interface DashBillingCredit {
  description: string;
  amount: number;
}

export interface DashBillingDiscount {
  percentOff: number;
  end: Timestamp | undefined;
}

export interface DashBillingPlan {
  name: string;
  id: string;
  old: boolean;
  custom: boolean;
  perItem: boolean;
  billingPeriods: DashBillingPeriod[];
}

export interface DashBillingPeriod {
  period: string;
  amount: number;
  name: string;
  projected: number;
  willRefund: boolean;
}

export interface DashFlag {
  type: Flag_Type;
  enabled: boolean;
}

export interface DashLimit {
  type: Limit_Type;
  amount: number;
}

export interface DashUserAppState {
  name: string;
  email: string;
  mailingListSubs: DashMailingListSub[];
  google: DashGoogleIdent | undefined;
  github: DashGithubIdent | undefined;
  password: DashPasswordIdent | undefined;
  urls: DashUserAppState_URLs | undefined;
  flashes: DashFlash[];
  verifiedEmail: boolean;
  pendingEmail: string;
  /** the list of all accounts that the user is a member of */
  memberAccounts: DashUserAppState_Account[];
}

export interface DashUserAppState_URLs {
  connectGoogle: string;
  connectGithub: string;
}

/**
 * we're not reusing DashAccount here because DashAccount currently is
 * missing some information we need (the members) and also because it fetches
 * way more information than we need
 */
export interface DashUserAppState_Account {
  name: string;
  planName: string;
  id: number;
  ksuid: ID | undefined;
  members: DashTeamMember[];
}

export interface DashAuthLoginReq {
  email: string;
  password: string;
  recpatchaResponse: string;
}

export interface DashAuthLoginResp {
  postLoginPath: string;
}

export interface DashAuthSignupReq {
  name: string;
  email: string;
  password: string;
  recaptchaResponse: string;
  /** true if the user accepted the terms of service and privacy policy */
  acceptedTermsAndPrivacy: boolean;
}

export interface DashPasswordResetsCreateReq {
  email: string;
  recaptchaResponse: string;
}

export interface DashUsersSetPasswordReq {
  password: string;
}

export interface DashUsersSetMailingListSubsReq {
  any: boolean;
  launch: boolean;
  newsletter: boolean;
}

export interface DashUsersSwitchAccountReq {
  accountId: ID | undefined;
}

export interface DashUsersDeleteIdentReq {
  identId: ID | undefined;
}

export interface DashAccountsSetGoogleAppsDomainReq {
  enabled: boolean;
}

export interface DashBillingSetBillingAddressReq {
  address: string;
}

export interface DashBillingSetTaxIDReq {
  taxId: string;
}

export interface DashBillingSetPaymentMethodReq {
  stripeToken: string;
}

export interface DashBillingDeletePaymentMethodReq {}

export interface DashBillingSetPlanReq {
  stripeCreditCardToken: string;
  interval: string;
  planId: string;
}

export interface DashIPPolicyRule {
  ipPolicyId: ID | undefined;
  metadata: string;
  description: string;
  id: ID | undefined;
  createdAt: Timestamp | undefined;
  cidrString: string;
  action: IPPolicyRule_Action;
}

export interface DashIPPolicyRuleCreateReq {
  cidr: string;
  description: string;
  ipPolicyId: ID | undefined;
  metadata: string;
  action: IPPolicyRule_Action;
}

export interface DashIPPolicyRuleUpdateReq {
  cidr: OptString | undefined;
  metadata: OptString | undefined;
  description: OptString | undefined;
  id: ID | undefined;
}

export interface DashIPPolicyRuleDeleteReq {
  id: ID | undefined;
}

export interface DashGetTunnelSessionsByAccountReq {
  paging: Paging | undefined;
}

export interface DashGetTunnelSessionsByAccountResp {
  tunnelSessions: DashSession[];
  next: Paging | undefined;
}

export interface DashGetEndpointsByAccountReq {
  paging: Paging | undefined;
}

export interface DashGetEndpointsByAccountResp {
  endpoints: DashEndpoint[];
  next: Paging | undefined;
}

export interface DashGetTunnelsByAccountReq {
  paging: Paging | undefined;
}

export interface DashGetTunnelsByAccountResp {
  tunnels: DashTunnel[];
  next: Paging | undefined;
}

export interface DashGetTunnelByIDReq {
  tunnelId: string;
}

export interface DashGetTunnelsForBackendReq {
  backendId: string;
}

export interface DashGetTunnelsForBackendResp {
  tunnels: DashTunnel[];
}

export interface DashGetTunnelsByLabelsReq {
  /** if unset, return tunnels in all regions */
  regionId: string;
  labels: { [key: string]: string };
  paging: Paging | undefined;
}

export interface DashGetTunnelsByLabelsReq_LabelsEntry {
  key: string;
  value: string;
}

export interface DashGetTunnelsByLabelsResp {
  tunnels: DashTunnel[];
  next: Paging | undefined;
}

/**
 * ----------------------
 * Models
 * ----------------------
 */
export interface DashAccount {
  id: number;
  name: string;
  googleAppsDomain: string;
  billingAddress: string;
  hasStartedTunnel: boolean;
  invoicesToBackfill: boolean;
  taxId: string;
  suspended: boolean;
  paymentStatus: PaymentStatus;
  identGoogleAppsDomain: string;
  ownerId: ID | undefined;
  planName: string;
  ksuid: ID | undefined;
  allowEnrollInBeta: boolean;
  ignoreBeta: boolean;
  ownerBillingEmailSid: string;
}

export interface DashEndpoint {
  id: string;
  region: string;
  createdAt: Timestamp | undefined;
  updatedAt: Timestamp | undefined;
  metadata: string;
  url: string;
  proto: string;
  domainId: string;
  tcpAddrId: string;
  /** set for agent-initiated endpoints */
  agentInitiatedTunnelId: string;
  /** set for edge endpoints */
  edgeId: string;
  type: Endpoint_Type;
  /**
   * records which tunnels traffic is being routed to
   * by tunnel group backends serving this endpoint
   * set for edge endpoints only
   */
  backendTunnelMatches: Endpoint_BackendTunnelMatch[];
}

export interface DashTunnel {
  id: string;
  /** set for agent-initiated tunnels */
  url: string;
  remoteAddr: string;
  region: string;
  /** set for agent-initiated tunnels */
  proto: string;
  expiresAt: Timestamp | undefined;
  createdAt: Timestamp | undefined;
  sessionId: string;
  metadata: string;
  hostname: string;
  endpointId: string;
  /** set for labeled tunnels */
  labels: { [key: string]: string };
  /** set for labeled tunnels */
  backendIds: string[];
  /** set for labeled tunnels */
  edgeRouteBackendMatches: Tunnel_EdgeRouteBackendMatch[];
  forwardsTo: string;
}

export interface DashTunnel_LabelsEntry {
  key: string;
  value: string;
}

export interface DashSession {
  id: string;
  clientVersion: string;
  credentialDisplayId: string;
  ip: string;
  metadata: string;
  regionId: string;
  createdAt: Timestamp | undefined;
  transport: string;
  expiresAt: Timestamp | undefined;
  os: string;
}

export interface DashTeamMember {
  id: ID | undefined;
  email: string;
  permissions: MembershipPermissions | undefined;
  name: string;
  createdAt: Timestamp | undefined;
  isCurrentUser: boolean;
  billingEmailSid: string;
}

export interface DashCard {
  sid: string;
  expMonth: number;
  expYear: number;
  last4: string;
  brand: string;
  canDelete: boolean;
}

export interface DashInvoice {
  sid: string;
  dueAt: Timestamp | undefined;
  issuedAt: Timestamp | undefined;
  total: number;
  number: string;
  pdfUrl: string;
  status: string;
}

export interface DashMailingListSub {
  ident: string;
  enabled: boolean;
}

export interface DashRegion {
  id: string;
  name: string;
  endpointBaseDomain: string;
  enterpriseAgentIngressDomain: string;
}

export interface DashUser {
  email: string;
  authtoken: string;
  googleIdent: DashGoogleIdent | undefined;
  id: ID | undefined;
  verifiedEmail: boolean;
  pendingEmail: string;
}

export interface DashFlash {
  msg: string;
  type: DashFlash_Type;
}

export enum DashFlash_Type {
  Undefined = 0,
  Success = 1,
  Warn = 2,
  Error = 3,
}

const baseDashImpersonateReq: object = { impersonatorId: "" };

export const DashImpersonateReq = {
  encode(
    message: DashImpersonateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.impersonatorId !== "") {
      writer.uint32(10).string(message.impersonatorId);
    }
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashImpersonateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashImpersonateReq } as DashImpersonateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.impersonatorId = reader.string();
          break;
        case 2:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashImpersonateReq>): DashImpersonateReq {
    const message = { ...baseDashImpersonateReq } as DashImpersonateReq;
    if (object.impersonatorId !== undefined && object.impersonatorId !== null) {
      message.impersonatorId = object.impersonatorId;
    } else {
      message.impersonatorId = "";
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    return message;
  },
};

const baseDashImpersonateResp: object = { url: "" };

export const DashImpersonateResp = {
  encode(
    message: DashImpersonateResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashImpersonateResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashImpersonateResp } as DashImpersonateResp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashImpersonateResp>): DashImpersonateResp {
    const message = { ...baseDashImpersonateResp } as DashImpersonateResp;
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    return message;
  },
};

const baseDashAppState: object = {
  newSignup: false,
  impersonatorId: "",
  remoteAddress: "",
  tunnelsError: false,
  accountsError: false,
  reservedDomainsError: false,
  reservedAddrsError: false,
  tunnelCredsError: false,
  sshCredsError: false,
  apiCredsError: false,
  invitationsError: false,
  teamMembersError: false,
  ipPolicyError: false,
  ipPolicyRuleError: false,
  endpointConfigurationError: false,
  edgeError: false,
  googleIdentError: false,
  billingError: false,
  cardError: false,
  invoicesError: false,
  billingEmailsError: false,
  casError: false,
  certsError: false,
  sshCasError: false,
  eventStreamsError: false,
  eventDestinationsError: false,
  eventSubscriptionsError: false,
  backendsError: false,
  agentIngressesError: false,
};

export const DashAppState = {
  encode(
    message: DashAppState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== undefined) {
      DashAccount.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tunnels) {
      DashTunnel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.accounts) {
      DashAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reservedDomains) {
      Domain.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.reservedAddrs) {
      TCPAddr.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.tunnelCreds) {
      Cred.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.apiCreds) {
      Cred.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.sshCreds) {
      SSHCred.encode(v!, writer.uint32(322).fork()).ldelim();
    }
    for (const v of message.invitations) {
      Invitation.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.teamMembers) {
      DashTeamMember.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.invoices) {
      DashInvoice.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    for (const v of message.billingEmails) {
      BillingEmail.encode(v!, writer.uint32(250).fork()).ldelim();
    }
    for (const v of message.ipPolicies) {
      IPPolicy.encode(v!, writer.uint32(362).fork()).ldelim();
    }
    for (const v of message.ipPolicyRules) {
      DashIPPolicyRule.encode(v!, writer.uint32(378).fork()).ldelim();
    }
    for (const v of message.regions) {
      DashRegion.encode(v!, writer.uint32(298).fork()).ldelim();
    }
    for (const v of message.edges) {
      Edge.encode(v!, writer.uint32(562).fork()).ldelim();
    }
    for (const v of message.endpointConfigurations) {
      EndpointConfiguration.encode(v!, writer.uint32(394).fork()).ldelim();
    }
    for (const v of message.tunnelSessions) {
      DashSession.encode(v!, writer.uint32(418).fork()).ldelim();
    }
    for (const v of message.cas) {
      CA.encode(v!, writer.uint32(458).fork()).ldelim();
    }
    for (const v of message.sshCas) {
      SSHCA.encode(v!, writer.uint32(490).fork()).ldelim();
    }
    if (message.card !== undefined) {
      DashCard.encode(message.card, writer.uint32(282).fork()).ldelim();
    }
    if (message.user !== undefined) {
      DashUser.encode(message.user, writer.uint32(306).fork()).ldelim();
    }
    if (message.newSignup === true) {
      writer.uint32(336).bool(message.newSignup);
    }
    for (const v of message.flashes) {
      DashFlash.encode(v!, writer.uint32(354).fork()).ldelim();
    }
    if (message.impersonatorId !== "") {
      writer.uint32(410).string(message.impersonatorId);
    }
    if (message.remoteAddress !== "") {
      writer.uint32(426).string(message.remoteAddress);
    }
    for (const v of message.ipRestrictions) {
      IPRestriction.encode(v!, writer.uint32(434).fork()).ldelim();
    }
    for (const v of message.accountFlags) {
      DashFlag.encode(v!, writer.uint32(626).fork()).ldelim();
    }
    for (const v of message.accountLimits) {
      DashLimit.encode(v!, writer.uint32(634).fork()).ldelim();
    }
    for (const v of message.betaSignups) {
      BetaSignup.encode(v!, writer.uint32(450).fork()).ldelim();
    }
    for (const v of message.certs) {
      Cert.encode(v!, writer.uint32(474).fork()).ldelim();
    }
    for (const v of message.eventStreams) {
      EventStream.encode(v!, writer.uint32(506).fork()).ldelim();
    }
    for (const v of message.eventSubscriptions) {
      EventSubscription.encode(v!, writer.uint32(546).fork()).ldelim();
    }
    for (const v of message.eventDestinations) {
      EventDestination.encode(v!, writer.uint32(514).fork()).ldelim();
    }
    for (const v of message.backends) {
      Backend.encode(v!, writer.uint32(594).fork()).ldelim();
    }
    for (const v of message.agentIngresses) {
      AgentIngress.encode(v!, writer.uint32(610).fork()).ldelim();
    }
    if (message.awsAuthInfo !== undefined) {
      DashAppState_AWSAuthInfo.encode(
        message.awsAuthInfo,
        writer.uint32(538).fork()
      ).ldelim();
    }
    if (message.tunnelsError === true) {
      writer.uint32(24).bool(message.tunnelsError);
    }
    if (message.accountsError === true) {
      writer.uint32(136).bool(message.accountsError);
    }
    if (message.reservedDomainsError === true) {
      writer.uint32(48).bool(message.reservedDomainsError);
    }
    if (message.reservedAddrsError === true) {
      writer.uint32(64).bool(message.reservedAddrsError);
    }
    if (message.tunnelCredsError === true) {
      writer.uint32(80).bool(message.tunnelCredsError);
    }
    if (message.sshCredsError === true) {
      writer.uint32(312).bool(message.sshCredsError);
    }
    if (message.apiCredsError === true) {
      writer.uint32(96).bool(message.apiCredsError);
    }
    if (message.invitationsError === true) {
      writer.uint32(112).bool(message.invitationsError);
    }
    if (message.teamMembersError === true) {
      writer.uint32(128).bool(message.teamMembersError);
    }
    if (message.ipPolicyError === true) {
      writer.uint32(368).bool(message.ipPolicyError);
    }
    if (message.ipPolicyRuleError === true) {
      writer.uint32(384).bool(message.ipPolicyRuleError);
    }
    if (message.endpointConfigurationError === true) {
      writer.uint32(400).bool(message.endpointConfigurationError);
    }
    if (message.edgeError === true) {
      writer.uint32(568).bool(message.edgeError);
    }
    if (message.googleIdentError === true) {
      writer.uint32(168).bool(message.googleIdentError);
    }
    if (message.billingError === true) {
      writer.uint32(176).bool(message.billingError);
    }
    if (message.cardError === true) {
      writer.uint32(184).bool(message.cardError);
    }
    if (message.invoicesError === true) {
      writer.uint32(256).bool(message.invoicesError);
    }
    if (message.billingEmailsError === true) {
      writer.uint32(264).bool(message.billingEmailsError);
    }
    if (message.casError === true) {
      writer.uint32(464).bool(message.casError);
    }
    if (message.certsError === true) {
      writer.uint32(480).bool(message.certsError);
    }
    if (message.sshCasError === true) {
      writer.uint32(496).bool(message.sshCasError);
    }
    if (message.eventStreamsError === true) {
      writer.uint32(520).bool(message.eventStreamsError);
    }
    if (message.eventDestinationsError === true) {
      writer.uint32(528).bool(message.eventDestinationsError);
    }
    if (message.eventSubscriptionsError === true) {
      writer.uint32(552).bool(message.eventSubscriptionsError);
    }
    if (message.backendsError === true) {
      writer.uint32(600).bool(message.backendsError);
    }
    if (message.agentIngressesError === true) {
      writer.uint32(616).bool(message.agentIngressesError);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashAppState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashAppState } as DashAppState;
    message.tunnels = [];
    message.accounts = [];
    message.reservedDomains = [];
    message.reservedAddrs = [];
    message.tunnelCreds = [];
    message.apiCreds = [];
    message.sshCreds = [];
    message.invitations = [];
    message.teamMembers = [];
    message.invoices = [];
    message.billingEmails = [];
    message.ipPolicies = [];
    message.ipPolicyRules = [];
    message.regions = [];
    message.edges = [];
    message.endpointConfigurations = [];
    message.tunnelSessions = [];
    message.cas = [];
    message.sshCas = [];
    message.flashes = [];
    message.ipRestrictions = [];
    message.accountFlags = [];
    message.accountLimits = [];
    message.betaSignups = [];
    message.certs = [];
    message.eventStreams = [];
    message.eventSubscriptions = [];
    message.eventDestinations = [];
    message.backends = [];
    message.agentIngresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = DashAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.tunnels.push(DashTunnel.decode(reader, reader.uint32()));
          break;
        case 4:
          message.accounts.push(DashAccount.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reservedDomains.push(Domain.decode(reader, reader.uint32()));
          break;
        case 7:
          message.reservedAddrs.push(TCPAddr.decode(reader, reader.uint32()));
          break;
        case 9:
          message.tunnelCreds.push(Cred.decode(reader, reader.uint32()));
          break;
        case 11:
          message.apiCreds.push(Cred.decode(reader, reader.uint32()));
          break;
        case 40:
          message.sshCreds.push(SSHCred.decode(reader, reader.uint32()));
          break;
        case 13:
          message.invitations.push(Invitation.decode(reader, reader.uint32()));
          break;
        case 15:
          message.teamMembers.push(
            DashTeamMember.decode(reader, reader.uint32())
          );
          break;
        case 30:
          message.invoices.push(DashInvoice.decode(reader, reader.uint32()));
          break;
        case 31:
          message.billingEmails.push(
            BillingEmail.decode(reader, reader.uint32())
          );
          break;
        case 45:
          message.ipPolicies.push(IPPolicy.decode(reader, reader.uint32()));
          break;
        case 47:
          message.ipPolicyRules.push(
            DashIPPolicyRule.decode(reader, reader.uint32())
          );
          break;
        case 37:
          message.regions.push(DashRegion.decode(reader, reader.uint32()));
          break;
        case 70:
          message.edges.push(Edge.decode(reader, reader.uint32()));
          break;
        case 49:
          message.endpointConfigurations.push(
            EndpointConfiguration.decode(reader, reader.uint32())
          );
          break;
        case 52:
          message.tunnelSessions.push(
            DashSession.decode(reader, reader.uint32())
          );
          break;
        case 57:
          message.cas.push(CA.decode(reader, reader.uint32()));
          break;
        case 61:
          message.sshCas.push(SSHCA.decode(reader, reader.uint32()));
          break;
        case 35:
          message.card = DashCard.decode(reader, reader.uint32());
          break;
        case 38:
          message.user = DashUser.decode(reader, reader.uint32());
          break;
        case 42:
          message.newSignup = reader.bool();
          break;
        case 44:
          message.flashes.push(DashFlash.decode(reader, reader.uint32()));
          break;
        case 51:
          message.impersonatorId = reader.string();
          break;
        case 53:
          message.remoteAddress = reader.string();
          break;
        case 54:
          message.ipRestrictions.push(
            IPRestriction.decode(reader, reader.uint32())
          );
          break;
        case 78:
          message.accountFlags.push(DashFlag.decode(reader, reader.uint32()));
          break;
        case 79:
          message.accountLimits.push(DashLimit.decode(reader, reader.uint32()));
          break;
        case 56:
          message.betaSignups.push(BetaSignup.decode(reader, reader.uint32()));
          break;
        case 59:
          message.certs.push(Cert.decode(reader, reader.uint32()));
          break;
        case 63:
          message.eventStreams.push(
            EventStream.decode(reader, reader.uint32())
          );
          break;
        case 68:
          message.eventSubscriptions.push(
            EventSubscription.decode(reader, reader.uint32())
          );
          break;
        case 64:
          message.eventDestinations.push(
            EventDestination.decode(reader, reader.uint32())
          );
          break;
        case 74:
          message.backends.push(Backend.decode(reader, reader.uint32()));
          break;
        case 76:
          message.agentIngresses.push(
            AgentIngress.decode(reader, reader.uint32())
          );
          break;
        case 67:
          message.awsAuthInfo = DashAppState_AWSAuthInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.tunnelsError = reader.bool();
          break;
        case 17:
          message.accountsError = reader.bool();
          break;
        case 6:
          message.reservedDomainsError = reader.bool();
          break;
        case 8:
          message.reservedAddrsError = reader.bool();
          break;
        case 10:
          message.tunnelCredsError = reader.bool();
          break;
        case 39:
          message.sshCredsError = reader.bool();
          break;
        case 12:
          message.apiCredsError = reader.bool();
          break;
        case 14:
          message.invitationsError = reader.bool();
          break;
        case 16:
          message.teamMembersError = reader.bool();
          break;
        case 46:
          message.ipPolicyError = reader.bool();
          break;
        case 48:
          message.ipPolicyRuleError = reader.bool();
          break;
        case 50:
          message.endpointConfigurationError = reader.bool();
          break;
        case 71:
          message.edgeError = reader.bool();
          break;
        case 21:
          message.googleIdentError = reader.bool();
          break;
        case 22:
          message.billingError = reader.bool();
          break;
        case 23:
          message.cardError = reader.bool();
          break;
        case 32:
          message.invoicesError = reader.bool();
          break;
        case 33:
          message.billingEmailsError = reader.bool();
          break;
        case 58:
          message.casError = reader.bool();
          break;
        case 60:
          message.certsError = reader.bool();
          break;
        case 62:
          message.sshCasError = reader.bool();
          break;
        case 65:
          message.eventStreamsError = reader.bool();
          break;
        case 66:
          message.eventDestinationsError = reader.bool();
          break;
        case 69:
          message.eventSubscriptionsError = reader.bool();
          break;
        case 75:
          message.backendsError = reader.bool();
          break;
        case 77:
          message.agentIngressesError = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashAppState>): DashAppState {
    const message = { ...baseDashAppState } as DashAppState;
    message.tunnels = [];
    message.accounts = [];
    message.reservedDomains = [];
    message.reservedAddrs = [];
    message.tunnelCreds = [];
    message.apiCreds = [];
    message.sshCreds = [];
    message.invitations = [];
    message.teamMembers = [];
    message.invoices = [];
    message.billingEmails = [];
    message.ipPolicies = [];
    message.ipPolicyRules = [];
    message.regions = [];
    message.edges = [];
    message.endpointConfigurations = [];
    message.tunnelSessions = [];
    message.cas = [];
    message.sshCas = [];
    message.flashes = [];
    message.ipRestrictions = [];
    message.accountFlags = [];
    message.accountLimits = [];
    message.betaSignups = [];
    message.certs = [];
    message.eventStreams = [];
    message.eventSubscriptions = [];
    message.eventDestinations = [];
    message.backends = [];
    message.agentIngresses = [];
    if (object.account !== undefined && object.account !== null) {
      message.account = DashAccount.fromPartial(object.account);
    } else {
      message.account = undefined;
    }
    if (object.tunnels !== undefined && object.tunnels !== null) {
      for (const e of object.tunnels) {
        message.tunnels.push(DashTunnel.fromPartial(e));
      }
    }
    if (object.accounts !== undefined && object.accounts !== null) {
      for (const e of object.accounts) {
        message.accounts.push(DashAccount.fromPartial(e));
      }
    }
    if (
      object.reservedDomains !== undefined &&
      object.reservedDomains !== null
    ) {
      for (const e of object.reservedDomains) {
        message.reservedDomains.push(Domain.fromPartial(e));
      }
    }
    if (object.reservedAddrs !== undefined && object.reservedAddrs !== null) {
      for (const e of object.reservedAddrs) {
        message.reservedAddrs.push(TCPAddr.fromPartial(e));
      }
    }
    if (object.tunnelCreds !== undefined && object.tunnelCreds !== null) {
      for (const e of object.tunnelCreds) {
        message.tunnelCreds.push(Cred.fromPartial(e));
      }
    }
    if (object.apiCreds !== undefined && object.apiCreds !== null) {
      for (const e of object.apiCreds) {
        message.apiCreds.push(Cred.fromPartial(e));
      }
    }
    if (object.sshCreds !== undefined && object.sshCreds !== null) {
      for (const e of object.sshCreds) {
        message.sshCreds.push(SSHCred.fromPartial(e));
      }
    }
    if (object.invitations !== undefined && object.invitations !== null) {
      for (const e of object.invitations) {
        message.invitations.push(Invitation.fromPartial(e));
      }
    }
    if (object.teamMembers !== undefined && object.teamMembers !== null) {
      for (const e of object.teamMembers) {
        message.teamMembers.push(DashTeamMember.fromPartial(e));
      }
    }
    if (object.invoices !== undefined && object.invoices !== null) {
      for (const e of object.invoices) {
        message.invoices.push(DashInvoice.fromPartial(e));
      }
    }
    if (object.billingEmails !== undefined && object.billingEmails !== null) {
      for (const e of object.billingEmails) {
        message.billingEmails.push(BillingEmail.fromPartial(e));
      }
    }
    if (object.ipPolicies !== undefined && object.ipPolicies !== null) {
      for (const e of object.ipPolicies) {
        message.ipPolicies.push(IPPolicy.fromPartial(e));
      }
    }
    if (object.ipPolicyRules !== undefined && object.ipPolicyRules !== null) {
      for (const e of object.ipPolicyRules) {
        message.ipPolicyRules.push(DashIPPolicyRule.fromPartial(e));
      }
    }
    if (object.regions !== undefined && object.regions !== null) {
      for (const e of object.regions) {
        message.regions.push(DashRegion.fromPartial(e));
      }
    }
    if (object.edges !== undefined && object.edges !== null) {
      for (const e of object.edges) {
        message.edges.push(Edge.fromPartial(e));
      }
    }
    if (
      object.endpointConfigurations !== undefined &&
      object.endpointConfigurations !== null
    ) {
      for (const e of object.endpointConfigurations) {
        message.endpointConfigurations.push(
          EndpointConfiguration.fromPartial(e)
        );
      }
    }
    if (object.tunnelSessions !== undefined && object.tunnelSessions !== null) {
      for (const e of object.tunnelSessions) {
        message.tunnelSessions.push(DashSession.fromPartial(e));
      }
    }
    if (object.cas !== undefined && object.cas !== null) {
      for (const e of object.cas) {
        message.cas.push(CA.fromPartial(e));
      }
    }
    if (object.sshCas !== undefined && object.sshCas !== null) {
      for (const e of object.sshCas) {
        message.sshCas.push(SSHCA.fromPartial(e));
      }
    }
    if (object.card !== undefined && object.card !== null) {
      message.card = DashCard.fromPartial(object.card);
    } else {
      message.card = undefined;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = DashUser.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.newSignup !== undefined && object.newSignup !== null) {
      message.newSignup = object.newSignup;
    } else {
      message.newSignup = false;
    }
    if (object.flashes !== undefined && object.flashes !== null) {
      for (const e of object.flashes) {
        message.flashes.push(DashFlash.fromPartial(e));
      }
    }
    if (object.impersonatorId !== undefined && object.impersonatorId !== null) {
      message.impersonatorId = object.impersonatorId;
    } else {
      message.impersonatorId = "";
    }
    if (object.remoteAddress !== undefined && object.remoteAddress !== null) {
      message.remoteAddress = object.remoteAddress;
    } else {
      message.remoteAddress = "";
    }
    if (object.ipRestrictions !== undefined && object.ipRestrictions !== null) {
      for (const e of object.ipRestrictions) {
        message.ipRestrictions.push(IPRestriction.fromPartial(e));
      }
    }
    if (object.accountFlags !== undefined && object.accountFlags !== null) {
      for (const e of object.accountFlags) {
        message.accountFlags.push(DashFlag.fromPartial(e));
      }
    }
    if (object.accountLimits !== undefined && object.accountLimits !== null) {
      for (const e of object.accountLimits) {
        message.accountLimits.push(DashLimit.fromPartial(e));
      }
    }
    if (object.betaSignups !== undefined && object.betaSignups !== null) {
      for (const e of object.betaSignups) {
        message.betaSignups.push(BetaSignup.fromPartial(e));
      }
    }
    if (object.certs !== undefined && object.certs !== null) {
      for (const e of object.certs) {
        message.certs.push(Cert.fromPartial(e));
      }
    }
    if (object.eventStreams !== undefined && object.eventStreams !== null) {
      for (const e of object.eventStreams) {
        message.eventStreams.push(EventStream.fromPartial(e));
      }
    }
    if (
      object.eventSubscriptions !== undefined &&
      object.eventSubscriptions !== null
    ) {
      for (const e of object.eventSubscriptions) {
        message.eventSubscriptions.push(EventSubscription.fromPartial(e));
      }
    }
    if (
      object.eventDestinations !== undefined &&
      object.eventDestinations !== null
    ) {
      for (const e of object.eventDestinations) {
        message.eventDestinations.push(EventDestination.fromPartial(e));
      }
    }
    if (object.backends !== undefined && object.backends !== null) {
      for (const e of object.backends) {
        message.backends.push(Backend.fromPartial(e));
      }
    }
    if (object.agentIngresses !== undefined && object.agentIngresses !== null) {
      for (const e of object.agentIngresses) {
        message.agentIngresses.push(AgentIngress.fromPartial(e));
      }
    }
    if (object.awsAuthInfo !== undefined && object.awsAuthInfo !== null) {
      message.awsAuthInfo = DashAppState_AWSAuthInfo.fromPartial(
        object.awsAuthInfo
      );
    } else {
      message.awsAuthInfo = undefined;
    }
    if (object.tunnelsError !== undefined && object.tunnelsError !== null) {
      message.tunnelsError = object.tunnelsError;
    } else {
      message.tunnelsError = false;
    }
    if (object.accountsError !== undefined && object.accountsError !== null) {
      message.accountsError = object.accountsError;
    } else {
      message.accountsError = false;
    }
    if (
      object.reservedDomainsError !== undefined &&
      object.reservedDomainsError !== null
    ) {
      message.reservedDomainsError = object.reservedDomainsError;
    } else {
      message.reservedDomainsError = false;
    }
    if (
      object.reservedAddrsError !== undefined &&
      object.reservedAddrsError !== null
    ) {
      message.reservedAddrsError = object.reservedAddrsError;
    } else {
      message.reservedAddrsError = false;
    }
    if (
      object.tunnelCredsError !== undefined &&
      object.tunnelCredsError !== null
    ) {
      message.tunnelCredsError = object.tunnelCredsError;
    } else {
      message.tunnelCredsError = false;
    }
    if (object.sshCredsError !== undefined && object.sshCredsError !== null) {
      message.sshCredsError = object.sshCredsError;
    } else {
      message.sshCredsError = false;
    }
    if (object.apiCredsError !== undefined && object.apiCredsError !== null) {
      message.apiCredsError = object.apiCredsError;
    } else {
      message.apiCredsError = false;
    }
    if (
      object.invitationsError !== undefined &&
      object.invitationsError !== null
    ) {
      message.invitationsError = object.invitationsError;
    } else {
      message.invitationsError = false;
    }
    if (
      object.teamMembersError !== undefined &&
      object.teamMembersError !== null
    ) {
      message.teamMembersError = object.teamMembersError;
    } else {
      message.teamMembersError = false;
    }
    if (object.ipPolicyError !== undefined && object.ipPolicyError !== null) {
      message.ipPolicyError = object.ipPolicyError;
    } else {
      message.ipPolicyError = false;
    }
    if (
      object.ipPolicyRuleError !== undefined &&
      object.ipPolicyRuleError !== null
    ) {
      message.ipPolicyRuleError = object.ipPolicyRuleError;
    } else {
      message.ipPolicyRuleError = false;
    }
    if (
      object.endpointConfigurationError !== undefined &&
      object.endpointConfigurationError !== null
    ) {
      message.endpointConfigurationError = object.endpointConfigurationError;
    } else {
      message.endpointConfigurationError = false;
    }
    if (object.edgeError !== undefined && object.edgeError !== null) {
      message.edgeError = object.edgeError;
    } else {
      message.edgeError = false;
    }
    if (
      object.googleIdentError !== undefined &&
      object.googleIdentError !== null
    ) {
      message.googleIdentError = object.googleIdentError;
    } else {
      message.googleIdentError = false;
    }
    if (object.billingError !== undefined && object.billingError !== null) {
      message.billingError = object.billingError;
    } else {
      message.billingError = false;
    }
    if (object.cardError !== undefined && object.cardError !== null) {
      message.cardError = object.cardError;
    } else {
      message.cardError = false;
    }
    if (object.invoicesError !== undefined && object.invoicesError !== null) {
      message.invoicesError = object.invoicesError;
    } else {
      message.invoicesError = false;
    }
    if (
      object.billingEmailsError !== undefined &&
      object.billingEmailsError !== null
    ) {
      message.billingEmailsError = object.billingEmailsError;
    } else {
      message.billingEmailsError = false;
    }
    if (object.casError !== undefined && object.casError !== null) {
      message.casError = object.casError;
    } else {
      message.casError = false;
    }
    if (object.certsError !== undefined && object.certsError !== null) {
      message.certsError = object.certsError;
    } else {
      message.certsError = false;
    }
    if (object.sshCasError !== undefined && object.sshCasError !== null) {
      message.sshCasError = object.sshCasError;
    } else {
      message.sshCasError = false;
    }
    if (
      object.eventStreamsError !== undefined &&
      object.eventStreamsError !== null
    ) {
      message.eventStreamsError = object.eventStreamsError;
    } else {
      message.eventStreamsError = false;
    }
    if (
      object.eventDestinationsError !== undefined &&
      object.eventDestinationsError !== null
    ) {
      message.eventDestinationsError = object.eventDestinationsError;
    } else {
      message.eventDestinationsError = false;
    }
    if (
      object.eventSubscriptionsError !== undefined &&
      object.eventSubscriptionsError !== null
    ) {
      message.eventSubscriptionsError = object.eventSubscriptionsError;
    } else {
      message.eventSubscriptionsError = false;
    }
    if (object.backendsError !== undefined && object.backendsError !== null) {
      message.backendsError = object.backendsError;
    } else {
      message.backendsError = false;
    }
    if (
      object.agentIngressesError !== undefined &&
      object.agentIngressesError !== null
    ) {
      message.agentIngressesError = object.agentIngressesError;
    } else {
      message.agentIngressesError = false;
    }
    return message;
  },
};

const baseDashAppState_AWSAuthInfo: object = {
  publicAccountId: "",
  externalId: "",
};

export const DashAppState_AWSAuthInfo = {
  encode(
    message: DashAppState_AWSAuthInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.publicAccountId !== "") {
      writer.uint32(10).string(message.publicAccountId);
    }
    if (message.externalId !== "") {
      writer.uint32(18).string(message.externalId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashAppState_AWSAuthInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashAppState_AWSAuthInfo,
    } as DashAppState_AWSAuthInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicAccountId = reader.string();
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

  fromPartial(
    object: DeepPartial<DashAppState_AWSAuthInfo>
  ): DashAppState_AWSAuthInfo {
    const message = {
      ...baseDashAppState_AWSAuthInfo,
    } as DashAppState_AWSAuthInfo;
    if (
      object.publicAccountId !== undefined &&
      object.publicAccountId !== null
    ) {
      message.publicAccountId = object.publicAccountId;
    } else {
      message.publicAccountId = "";
    }
    if (object.externalId !== undefined && object.externalId !== null) {
      message.externalId = object.externalId;
    } else {
      message.externalId = "";
    }
    return message;
  },
};

const baseDashUnauthState: object = {};

export const DashUnauthState = {
  encode(
    message: DashUnauthState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.flashes) {
      DashFlash.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashUnauthState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashUnauthState } as DashUnauthState;
    message.flashes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.flashes.push(DashFlash.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashUnauthState>): DashUnauthState {
    const message = { ...baseDashUnauthState } as DashUnauthState;
    message.flashes = [];
    if (object.flashes !== undefined && object.flashes !== null) {
      for (const e of object.flashes) {
        message.flashes.push(DashFlash.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDashGoogleIdent: object = { email: "", domain: "" };

export const DashGoogleIdent = {
  encode(
    message: DashGoogleIdent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashGoogleIdent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashGoogleIdent } as DashGoogleIdent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.domain = reader.string();
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

  fromPartial(object: DeepPartial<DashGoogleIdent>): DashGoogleIdent {
    const message = { ...baseDashGoogleIdent } as DashGoogleIdent;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
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
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

const baseDashGithubIdent: object = { username: "", email: "" };

export const DashGithubIdent = {
  encode(
    message: DashGithubIdent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashGithubIdent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashGithubIdent } as DashGithubIdent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.username = reader.string();
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

  fromPartial(object: DeepPartial<DashGithubIdent>): DashGithubIdent {
    const message = { ...baseDashGithubIdent } as DashGithubIdent;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
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

const baseDashPasswordIdent: object = {};

export const DashPasswordIdent = {
  encode(
    message: DashPasswordIdent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashPasswordIdent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashPasswordIdent } as DashPasswordIdent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashPasswordIdent>): DashPasswordIdent {
    const message = { ...baseDashPasswordIdent } as DashPasswordIdent;
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
    return message;
  },
};

const baseDashBillingPlanState: object = {
  initPlanId: "",
  initBillingPeriod: "",
  itemCount: 0,
  balance: 0,
  moneyBackDays: 0,
};

export const DashBillingPlanState = {
  encode(
    message: DashBillingPlanState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.plans) {
      DashBillingPlan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.initPlanId !== "") {
      writer.uint32(18).string(message.initPlanId);
    }
    if (message.initBillingPeriod !== "") {
      writer.uint32(26).string(message.initBillingPeriod);
    }
    if (message.itemCount !== 0) {
      writer.uint32(32).int64(message.itemCount);
    }
    if (message.balance !== 0) {
      writer.uint32(40).int64(message.balance);
    }
    if (message.moneyBackDays !== 0) {
      writer.uint32(56).int64(message.moneyBackDays);
    }
    if (message.credit !== undefined) {
      DashBillingCredit.encode(
        message.credit,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.card !== undefined) {
      DashCard.encode(message.card, writer.uint32(74).fork()).ldelim();
    }
    if (message.discount !== undefined) {
      DashBillingDiscount.encode(
        message.discount,
        writer.uint32(82).fork()
      ).ldelim();
    }
    for (const v of message.flashes) {
      DashFlash.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashBillingPlanState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashBillingPlanState } as DashBillingPlanState;
    message.plans = [];
    message.flashes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plans.push(DashBillingPlan.decode(reader, reader.uint32()));
          break;
        case 2:
          message.initPlanId = reader.string();
          break;
        case 3:
          message.initBillingPeriod = reader.string();
          break;
        case 4:
          message.itemCount = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.balance = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.moneyBackDays = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.credit = DashBillingCredit.decode(reader, reader.uint32());
          break;
        case 9:
          message.card = DashCard.decode(reader, reader.uint32());
          break;
        case 10:
          message.discount = DashBillingDiscount.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.flashes.push(DashFlash.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashBillingPlanState>): DashBillingPlanState {
    const message = { ...baseDashBillingPlanState } as DashBillingPlanState;
    message.plans = [];
    message.flashes = [];
    if (object.plans !== undefined && object.plans !== null) {
      for (const e of object.plans) {
        message.plans.push(DashBillingPlan.fromPartial(e));
      }
    }
    if (object.initPlanId !== undefined && object.initPlanId !== null) {
      message.initPlanId = object.initPlanId;
    } else {
      message.initPlanId = "";
    }
    if (
      object.initBillingPeriod !== undefined &&
      object.initBillingPeriod !== null
    ) {
      message.initBillingPeriod = object.initBillingPeriod;
    } else {
      message.initBillingPeriod = "";
    }
    if (object.itemCount !== undefined && object.itemCount !== null) {
      message.itemCount = object.itemCount;
    } else {
      message.itemCount = 0;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = 0;
    }
    if (object.moneyBackDays !== undefined && object.moneyBackDays !== null) {
      message.moneyBackDays = object.moneyBackDays;
    } else {
      message.moneyBackDays = 0;
    }
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = DashBillingCredit.fromPartial(object.credit);
    } else {
      message.credit = undefined;
    }
    if (object.card !== undefined && object.card !== null) {
      message.card = DashCard.fromPartial(object.card);
    } else {
      message.card = undefined;
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = DashBillingDiscount.fromPartial(object.discount);
    } else {
      message.discount = undefined;
    }
    if (object.flashes !== undefined && object.flashes !== null) {
      for (const e of object.flashes) {
        message.flashes.push(DashFlash.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDashBillingCredit: object = { description: "", amount: 0 };

export const DashBillingCredit = {
  encode(
    message: DashBillingCredit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashBillingCredit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashBillingCredit } as DashBillingCredit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashBillingCredit>): DashBillingCredit {
    const message = { ...baseDashBillingCredit } as DashBillingCredit;
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

const baseDashBillingDiscount: object = { percentOff: 0 };

export const DashBillingDiscount = {
  encode(
    message: DashBillingDiscount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.percentOff !== 0) {
      writer.uint32(13).float(message.percentOff);
    }
    if (message.end !== undefined) {
      Timestamp.encode(message.end, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashBillingDiscount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashBillingDiscount } as DashBillingDiscount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentOff = reader.float();
          break;
        case 2:
          message.end = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashBillingDiscount>): DashBillingDiscount {
    const message = { ...baseDashBillingDiscount } as DashBillingDiscount;
    if (object.percentOff !== undefined && object.percentOff !== null) {
      message.percentOff = object.percentOff;
    } else {
      message.percentOff = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Timestamp.fromPartial(object.end);
    } else {
      message.end = undefined;
    }
    return message;
  },
};

const baseDashBillingPlan: object = {
  name: "",
  id: "",
  old: false,
  custom: false,
  perItem: false,
};

export const DashBillingPlan = {
  encode(
    message: DashBillingPlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.old === true) {
      writer.uint32(24).bool(message.old);
    }
    if (message.custom === true) {
      writer.uint32(32).bool(message.custom);
    }
    if (message.perItem === true) {
      writer.uint32(40).bool(message.perItem);
    }
    for (const v of message.billingPeriods) {
      DashBillingPeriod.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashBillingPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashBillingPlan } as DashBillingPlan;
    message.billingPeriods = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.old = reader.bool();
          break;
        case 4:
          message.custom = reader.bool();
          break;
        case 5:
          message.perItem = reader.bool();
          break;
        case 6:
          message.billingPeriods.push(
            DashBillingPeriod.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashBillingPlan>): DashBillingPlan {
    const message = { ...baseDashBillingPlan } as DashBillingPlan;
    message.billingPeriods = [];
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
    if (object.old !== undefined && object.old !== null) {
      message.old = object.old;
    } else {
      message.old = false;
    }
    if (object.custom !== undefined && object.custom !== null) {
      message.custom = object.custom;
    } else {
      message.custom = false;
    }
    if (object.perItem !== undefined && object.perItem !== null) {
      message.perItem = object.perItem;
    } else {
      message.perItem = false;
    }
    if (object.billingPeriods !== undefined && object.billingPeriods !== null) {
      for (const e of object.billingPeriods) {
        message.billingPeriods.push(DashBillingPeriod.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDashBillingPeriod: object = {
  period: "",
  amount: 0,
  name: "",
  projected: 0,
  willRefund: false,
};

export const DashBillingPeriod = {
  encode(
    message: DashBillingPeriod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.period !== "") {
      writer.uint32(10).string(message.period);
    }
    if (message.amount !== 0) {
      writer.uint32(17).double(message.amount);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.projected !== 0) {
      writer.uint32(32).int64(message.projected);
    }
    if (message.willRefund === true) {
      writer.uint32(40).bool(message.willRefund);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashBillingPeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashBillingPeriod } as DashBillingPeriod;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.period = reader.string();
          break;
        case 2:
          message.amount = reader.double();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.projected = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.willRefund = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashBillingPeriod>): DashBillingPeriod {
    const message = { ...baseDashBillingPeriod } as DashBillingPeriod;
    if (object.period !== undefined && object.period !== null) {
      message.period = object.period;
    } else {
      message.period = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.projected !== undefined && object.projected !== null) {
      message.projected = object.projected;
    } else {
      message.projected = 0;
    }
    if (object.willRefund !== undefined && object.willRefund !== null) {
      message.willRefund = object.willRefund;
    } else {
      message.willRefund = false;
    }
    return message;
  },
};

const baseDashFlag: object = { type: 0, enabled: false };

export const DashFlag = {
  encode(
    message: DashFlag,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashFlag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashFlag } as DashFlag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
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

  fromPartial(object: DeepPartial<DashFlag>): DashFlag {
    const message = { ...baseDashFlag } as DashFlag;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    return message;
  },
};

const baseDashLimit: object = { type: 0, amount: 0 };

export const DashLimit = {
  encode(
    message: DashLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashLimit } as DashLimit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashLimit>): DashLimit {
    const message = { ...baseDashLimit } as DashLimit;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

const baseDashUserAppState: object = {
  name: "",
  email: "",
  verifiedEmail: false,
  pendingEmail: "",
};

export const DashUserAppState = {
  encode(
    message: DashUserAppState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(90).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    for (const v of message.mailingListSubs) {
      DashMailingListSub.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.google !== undefined) {
      DashGoogleIdent.encode(message.google, writer.uint32(26).fork()).ldelim();
    }
    if (message.github !== undefined) {
      DashGithubIdent.encode(message.github, writer.uint32(34).fork()).ldelim();
    }
    if (message.password !== undefined) {
      DashPasswordIdent.encode(
        message.password,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.urls !== undefined) {
      DashUserAppState_URLs.encode(
        message.urls,
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.flashes) {
      DashFlash.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.verifiedEmail === true) {
      writer.uint32(64).bool(message.verifiedEmail);
    }
    if (message.pendingEmail !== "") {
      writer.uint32(74).string(message.pendingEmail);
    }
    for (const v of message.memberAccounts) {
      DashUserAppState_Account.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashUserAppState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashUserAppState } as DashUserAppState;
    message.mailingListSubs = [];
    message.flashes = [];
    message.memberAccounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 11:
          message.name = reader.string();
          break;
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.mailingListSubs.push(
            DashMailingListSub.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.google = DashGoogleIdent.decode(reader, reader.uint32());
          break;
        case 4:
          message.github = DashGithubIdent.decode(reader, reader.uint32());
          break;
        case 5:
          message.password = DashPasswordIdent.decode(reader, reader.uint32());
          break;
        case 6:
          message.urls = DashUserAppState_URLs.decode(reader, reader.uint32());
          break;
        case 7:
          message.flashes.push(DashFlash.decode(reader, reader.uint32()));
          break;
        case 8:
          message.verifiedEmail = reader.bool();
          break;
        case 9:
          message.pendingEmail = reader.string();
          break;
        case 10:
          message.memberAccounts.push(
            DashUserAppState_Account.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashUserAppState>): DashUserAppState {
    const message = { ...baseDashUserAppState } as DashUserAppState;
    message.mailingListSubs = [];
    message.flashes = [];
    message.memberAccounts = [];
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
    if (
      object.mailingListSubs !== undefined &&
      object.mailingListSubs !== null
    ) {
      for (const e of object.mailingListSubs) {
        message.mailingListSubs.push(DashMailingListSub.fromPartial(e));
      }
    }
    if (object.google !== undefined && object.google !== null) {
      message.google = DashGoogleIdent.fromPartial(object.google);
    } else {
      message.google = undefined;
    }
    if (object.github !== undefined && object.github !== null) {
      message.github = DashGithubIdent.fromPartial(object.github);
    } else {
      message.github = undefined;
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = DashPasswordIdent.fromPartial(object.password);
    } else {
      message.password = undefined;
    }
    if (object.urls !== undefined && object.urls !== null) {
      message.urls = DashUserAppState_URLs.fromPartial(object.urls);
    } else {
      message.urls = undefined;
    }
    if (object.flashes !== undefined && object.flashes !== null) {
      for (const e of object.flashes) {
        message.flashes.push(DashFlash.fromPartial(e));
      }
    }
    if (object.verifiedEmail !== undefined && object.verifiedEmail !== null) {
      message.verifiedEmail = object.verifiedEmail;
    } else {
      message.verifiedEmail = false;
    }
    if (object.pendingEmail !== undefined && object.pendingEmail !== null) {
      message.pendingEmail = object.pendingEmail;
    } else {
      message.pendingEmail = "";
    }
    if (object.memberAccounts !== undefined && object.memberAccounts !== null) {
      for (const e of object.memberAccounts) {
        message.memberAccounts.push(DashUserAppState_Account.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDashUserAppState_URLs: object = {
  connectGoogle: "",
  connectGithub: "",
};

export const DashUserAppState_URLs = {
  encode(
    message: DashUserAppState_URLs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectGoogle !== "") {
      writer.uint32(10).string(message.connectGoogle);
    }
    if (message.connectGithub !== "") {
      writer.uint32(18).string(message.connectGithub);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashUserAppState_URLs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashUserAppState_URLs } as DashUserAppState_URLs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectGoogle = reader.string();
          break;
        case 2:
          message.connectGithub = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashUserAppState_URLs>
  ): DashUserAppState_URLs {
    const message = { ...baseDashUserAppState_URLs } as DashUserAppState_URLs;
    if (object.connectGoogle !== undefined && object.connectGoogle !== null) {
      message.connectGoogle = object.connectGoogle;
    } else {
      message.connectGoogle = "";
    }
    if (object.connectGithub !== undefined && object.connectGithub !== null) {
      message.connectGithub = object.connectGithub;
    } else {
      message.connectGithub = "";
    }
    return message;
  },
};

const baseDashUserAppState_Account: object = { name: "", planName: "", id: 0 };

export const DashUserAppState_Account = {
  encode(
    message: DashUserAppState_Account,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.planName !== "") {
      writer.uint32(18).string(message.planName);
    }
    if (message.id !== 0) {
      writer.uint32(24).int64(message.id);
    }
    if (message.ksuid !== undefined) {
      ID.encode(message.ksuid, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.members) {
      DashTeamMember.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashUserAppState_Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashUserAppState_Account,
    } as DashUserAppState_Account;
    message.members = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.planName = reader.string();
          break;
        case 3:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.ksuid = ID.decode(reader, reader.uint32());
          break;
        case 5:
          message.members.push(DashTeamMember.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashUserAppState_Account>
  ): DashUserAppState_Account {
    const message = {
      ...baseDashUserAppState_Account,
    } as DashUserAppState_Account;
    message.members = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.planName !== undefined && object.planName !== null) {
      message.planName = object.planName;
    } else {
      message.planName = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.ksuid !== undefined && object.ksuid !== null) {
      message.ksuid = ID.fromPartial(object.ksuid);
    } else {
      message.ksuid = undefined;
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(DashTeamMember.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDashAuthLoginReq: object = {
  email: "",
  password: "",
  recpatchaResponse: "",
};

export const DashAuthLoginReq = {
  encode(
    message: DashAuthLoginReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.recpatchaResponse !== "") {
      writer.uint32(26).string(message.recpatchaResponse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashAuthLoginReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashAuthLoginReq } as DashAuthLoginReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        case 3:
          message.recpatchaResponse = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashAuthLoginReq>): DashAuthLoginReq {
    const message = { ...baseDashAuthLoginReq } as DashAuthLoginReq;
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    if (
      object.recpatchaResponse !== undefined &&
      object.recpatchaResponse !== null
    ) {
      message.recpatchaResponse = object.recpatchaResponse;
    } else {
      message.recpatchaResponse = "";
    }
    return message;
  },
};

const baseDashAuthLoginResp: object = { postLoginPath: "" };

export const DashAuthLoginResp = {
  encode(
    message: DashAuthLoginResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postLoginPath !== "") {
      writer.uint32(10).string(message.postLoginPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashAuthLoginResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashAuthLoginResp } as DashAuthLoginResp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postLoginPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashAuthLoginResp>): DashAuthLoginResp {
    const message = { ...baseDashAuthLoginResp } as DashAuthLoginResp;
    if (object.postLoginPath !== undefined && object.postLoginPath !== null) {
      message.postLoginPath = object.postLoginPath;
    } else {
      message.postLoginPath = "";
    }
    return message;
  },
};

const baseDashAuthSignupReq: object = {
  name: "",
  email: "",
  password: "",
  recaptchaResponse: "",
  acceptedTermsAndPrivacy: false,
};

export const DashAuthSignupReq = {
  encode(
    message: DashAuthSignupReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.recaptchaResponse !== "") {
      writer.uint32(34).string(message.recaptchaResponse);
    }
    if (message.acceptedTermsAndPrivacy === true) {
      writer.uint32(40).bool(message.acceptedTermsAndPrivacy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashAuthSignupReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashAuthSignupReq } as DashAuthSignupReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.password = reader.string();
          break;
        case 4:
          message.recaptchaResponse = reader.string();
          break;
        case 5:
          message.acceptedTermsAndPrivacy = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashAuthSignupReq>): DashAuthSignupReq {
    const message = { ...baseDashAuthSignupReq } as DashAuthSignupReq;
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
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    if (
      object.recaptchaResponse !== undefined &&
      object.recaptchaResponse !== null
    ) {
      message.recaptchaResponse = object.recaptchaResponse;
    } else {
      message.recaptchaResponse = "";
    }
    if (
      object.acceptedTermsAndPrivacy !== undefined &&
      object.acceptedTermsAndPrivacy !== null
    ) {
      message.acceptedTermsAndPrivacy = object.acceptedTermsAndPrivacy;
    } else {
      message.acceptedTermsAndPrivacy = false;
    }
    return message;
  },
};

const baseDashPasswordResetsCreateReq: object = {
  email: "",
  recaptchaResponse: "",
};

export const DashPasswordResetsCreateReq = {
  encode(
    message: DashPasswordResetsCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.recaptchaResponse !== "") {
      writer.uint32(18).string(message.recaptchaResponse);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashPasswordResetsCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashPasswordResetsCreateReq,
    } as DashPasswordResetsCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.recaptchaResponse = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashPasswordResetsCreateReq>
  ): DashPasswordResetsCreateReq {
    const message = {
      ...baseDashPasswordResetsCreateReq,
    } as DashPasswordResetsCreateReq;
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (
      object.recaptchaResponse !== undefined &&
      object.recaptchaResponse !== null
    ) {
      message.recaptchaResponse = object.recaptchaResponse;
    } else {
      message.recaptchaResponse = "";
    }
    return message;
  },
};

const baseDashUsersSetPasswordReq: object = { password: "" };

export const DashUsersSetPasswordReq = {
  encode(
    message: DashUsersSetPasswordReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashUsersSetPasswordReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashUsersSetPasswordReq,
    } as DashUsersSetPasswordReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashUsersSetPasswordReq>
  ): DashUsersSetPasswordReq {
    const message = {
      ...baseDashUsersSetPasswordReq,
    } as DashUsersSetPasswordReq;
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    return message;
  },
};

const baseDashUsersSetMailingListSubsReq: object = {
  any: false,
  launch: false,
  newsletter: false,
};

export const DashUsersSetMailingListSubsReq = {
  encode(
    message: DashUsersSetMailingListSubsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.any === true) {
      writer.uint32(8).bool(message.any);
    }
    if (message.launch === true) {
      writer.uint32(16).bool(message.launch);
    }
    if (message.newsletter === true) {
      writer.uint32(24).bool(message.newsletter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashUsersSetMailingListSubsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashUsersSetMailingListSubsReq,
    } as DashUsersSetMailingListSubsReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.any = reader.bool();
          break;
        case 2:
          message.launch = reader.bool();
          break;
        case 3:
          message.newsletter = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashUsersSetMailingListSubsReq>
  ): DashUsersSetMailingListSubsReq {
    const message = {
      ...baseDashUsersSetMailingListSubsReq,
    } as DashUsersSetMailingListSubsReq;
    if (object.any !== undefined && object.any !== null) {
      message.any = object.any;
    } else {
      message.any = false;
    }
    if (object.launch !== undefined && object.launch !== null) {
      message.launch = object.launch;
    } else {
      message.launch = false;
    }
    if (object.newsletter !== undefined && object.newsletter !== null) {
      message.newsletter = object.newsletter;
    } else {
      message.newsletter = false;
    }
    return message;
  },
};

const baseDashUsersSwitchAccountReq: object = {};

export const DashUsersSwitchAccountReq = {
  encode(
    message: DashUsersSwitchAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashUsersSwitchAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashUsersSwitchAccountReq,
    } as DashUsersSwitchAccountReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
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
    object: DeepPartial<DashUsersSwitchAccountReq>
  ): DashUsersSwitchAccountReq {
    const message = {
      ...baseDashUsersSwitchAccountReq,
    } as DashUsersSwitchAccountReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseDashUsersDeleteIdentReq: object = {};

export const DashUsersDeleteIdentReq = {
  encode(
    message: DashUsersDeleteIdentReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identId !== undefined) {
      ID.encode(message.identId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashUsersDeleteIdentReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashUsersDeleteIdentReq,
    } as DashUsersDeleteIdentReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.identId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashUsersDeleteIdentReq>
  ): DashUsersDeleteIdentReq {
    const message = {
      ...baseDashUsersDeleteIdentReq,
    } as DashUsersDeleteIdentReq;
    if (object.identId !== undefined && object.identId !== null) {
      message.identId = ID.fromPartial(object.identId);
    } else {
      message.identId = undefined;
    }
    return message;
  },
};

const baseDashAccountsSetGoogleAppsDomainReq: object = { enabled: false };

export const DashAccountsSetGoogleAppsDomainReq = {
  encode(
    message: DashAccountsSetGoogleAppsDomainReq,
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
  ): DashAccountsSetGoogleAppsDomainReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashAccountsSetGoogleAppsDomainReq,
    } as DashAccountsSetGoogleAppsDomainReq;
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
    object: DeepPartial<DashAccountsSetGoogleAppsDomainReq>
  ): DashAccountsSetGoogleAppsDomainReq {
    const message = {
      ...baseDashAccountsSetGoogleAppsDomainReq,
    } as DashAccountsSetGoogleAppsDomainReq;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    return message;
  },
};

const baseDashBillingSetBillingAddressReq: object = { address: "" };

export const DashBillingSetBillingAddressReq = {
  encode(
    message: DashBillingSetBillingAddressReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashBillingSetBillingAddressReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashBillingSetBillingAddressReq,
    } as DashBillingSetBillingAddressReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashBillingSetBillingAddressReq>
  ): DashBillingSetBillingAddressReq {
    const message = {
      ...baseDashBillingSetBillingAddressReq,
    } as DashBillingSetBillingAddressReq;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseDashBillingSetTaxIDReq: object = { taxId: "" };

export const DashBillingSetTaxIDReq = {
  encode(
    message: DashBillingSetTaxIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.taxId !== "") {
      writer.uint32(10).string(message.taxId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashBillingSetTaxIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashBillingSetTaxIDReq } as DashBillingSetTaxIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashBillingSetTaxIDReq>
  ): DashBillingSetTaxIDReq {
    const message = { ...baseDashBillingSetTaxIDReq } as DashBillingSetTaxIDReq;
    if (object.taxId !== undefined && object.taxId !== null) {
      message.taxId = object.taxId;
    } else {
      message.taxId = "";
    }
    return message;
  },
};

const baseDashBillingSetPaymentMethodReq: object = { stripeToken: "" };

export const DashBillingSetPaymentMethodReq = {
  encode(
    message: DashBillingSetPaymentMethodReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stripeToken !== "") {
      writer.uint32(10).string(message.stripeToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashBillingSetPaymentMethodReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashBillingSetPaymentMethodReq,
    } as DashBillingSetPaymentMethodReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stripeToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashBillingSetPaymentMethodReq>
  ): DashBillingSetPaymentMethodReq {
    const message = {
      ...baseDashBillingSetPaymentMethodReq,
    } as DashBillingSetPaymentMethodReq;
    if (object.stripeToken !== undefined && object.stripeToken !== null) {
      message.stripeToken = object.stripeToken;
    } else {
      message.stripeToken = "";
    }
    return message;
  },
};

const baseDashBillingDeletePaymentMethodReq: object = {};

export const DashBillingDeletePaymentMethodReq = {
  encode(
    _: DashBillingDeletePaymentMethodReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashBillingDeletePaymentMethodReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashBillingDeletePaymentMethodReq,
    } as DashBillingDeletePaymentMethodReq;
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
    _: DeepPartial<DashBillingDeletePaymentMethodReq>
  ): DashBillingDeletePaymentMethodReq {
    const message = {
      ...baseDashBillingDeletePaymentMethodReq,
    } as DashBillingDeletePaymentMethodReq;
    return message;
  },
};

const baseDashBillingSetPlanReq: object = {
  stripeCreditCardToken: "",
  interval: "",
  planId: "",
};

export const DashBillingSetPlanReq = {
  encode(
    message: DashBillingSetPlanReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stripeCreditCardToken !== "") {
      writer.uint32(10).string(message.stripeCreditCardToken);
    }
    if (message.interval !== "") {
      writer.uint32(18).string(message.interval);
    }
    if (message.planId !== "") {
      writer.uint32(26).string(message.planId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashBillingSetPlanReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashBillingSetPlanReq } as DashBillingSetPlanReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stripeCreditCardToken = reader.string();
          break;
        case 2:
          message.interval = reader.string();
          break;
        case 3:
          message.planId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashBillingSetPlanReq>
  ): DashBillingSetPlanReq {
    const message = { ...baseDashBillingSetPlanReq } as DashBillingSetPlanReq;
    if (
      object.stripeCreditCardToken !== undefined &&
      object.stripeCreditCardToken !== null
    ) {
      message.stripeCreditCardToken = object.stripeCreditCardToken;
    } else {
      message.stripeCreditCardToken = "";
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = object.interval;
    } else {
      message.interval = "";
    }
    if (object.planId !== undefined && object.planId !== null) {
      message.planId = object.planId;
    } else {
      message.planId = "";
    }
    return message;
  },
};

const baseDashIPPolicyRule: object = {
  metadata: "",
  description: "",
  cidrString: "",
  action: 0,
};

export const DashIPPolicyRule = {
  encode(
    message: DashIPPolicyRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ipPolicyId !== undefined) {
      ID.encode(message.ipPolicyId, writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(82).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    if (message.cidrString !== "") {
      writer.uint32(58).string(message.cidrString);
    }
    if (message.action !== 0) {
      writer.uint32(88).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashIPPolicyRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashIPPolicyRule } as DashIPPolicyRule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          message.ipPolicyId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 10:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 6:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.cidrString = reader.string();
          break;
        case 11:
          message.action = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashIPPolicyRule>): DashIPPolicyRule {
    const message = { ...baseDashIPPolicyRule } as DashIPPolicyRule;
    if (object.ipPolicyId !== undefined && object.ipPolicyId !== null) {
      message.ipPolicyId = ID.fromPartial(object.ipPolicyId);
    } else {
      message.ipPolicyId = undefined;
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
    if (object.cidrString !== undefined && object.cidrString !== null) {
      message.cidrString = object.cidrString;
    } else {
      message.cidrString = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = 0;
    }
    return message;
  },
};

const baseDashIPPolicyRuleCreateReq: object = {
  cidr: "",
  description: "",
  metadata: "",
  action: 0,
};

export const DashIPPolicyRuleCreateReq = {
  encode(
    message: DashIPPolicyRuleCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cidr !== "") {
      writer.uint32(18).string(message.cidr);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.ipPolicyId !== undefined) {
      ID.encode(message.ipPolicyId, writer.uint32(42).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.action !== 0) {
      writer.uint32(48).int32(message.action);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashIPPolicyRuleCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashIPPolicyRuleCreateReq,
    } as DashIPPolicyRuleCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.cidr = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.ipPolicyId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 6:
          message.action = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashIPPolicyRuleCreateReq>
  ): DashIPPolicyRuleCreateReq {
    const message = {
      ...baseDashIPPolicyRuleCreateReq,
    } as DashIPPolicyRuleCreateReq;
    if (object.cidr !== undefined && object.cidr !== null) {
      message.cidr = object.cidr;
    } else {
      message.cidr = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.ipPolicyId !== undefined && object.ipPolicyId !== null) {
      message.ipPolicyId = ID.fromPartial(object.ipPolicyId);
    } else {
      message.ipPolicyId = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = 0;
    }
    return message;
  },
};

const baseDashIPPolicyRuleUpdateReq: object = {};

export const DashIPPolicyRuleUpdateReq = {
  encode(
    message: DashIPPolicyRuleUpdateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cidr !== undefined) {
      OptString.encode(message.cidr, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      OptString.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== undefined) {
      OptString.encode(message.description, writer.uint32(26).fork()).ldelim();
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashIPPolicyRuleUpdateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashIPPolicyRuleUpdateReq,
    } as DashIPPolicyRuleUpdateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cidr = OptString.decode(reader, reader.uint32());
          break;
        case 2:
          message.metadata = OptString.decode(reader, reader.uint32());
          break;
        case 3:
          message.description = OptString.decode(reader, reader.uint32());
          break;
        case 5:
          message.id = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashIPPolicyRuleUpdateReq>
  ): DashIPPolicyRuleUpdateReq {
    const message = {
      ...baseDashIPPolicyRuleUpdateReq,
    } as DashIPPolicyRuleUpdateReq;
    if (object.cidr !== undefined && object.cidr !== null) {
      message.cidr = OptString.fromPartial(object.cidr);
    } else {
      message.cidr = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = OptString.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = OptString.fromPartial(object.description);
    } else {
      message.description = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseDashIPPolicyRuleDeleteReq: object = {};

export const DashIPPolicyRuleDeleteReq = {
  encode(
    message: DashIPPolicyRuleDeleteReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashIPPolicyRuleDeleteReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashIPPolicyRuleDeleteReq,
    } as DashIPPolicyRuleDeleteReq;
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

  fromPartial(
    object: DeepPartial<DashIPPolicyRuleDeleteReq>
  ): DashIPPolicyRuleDeleteReq {
    const message = {
      ...baseDashIPPolicyRuleDeleteReq,
    } as DashIPPolicyRuleDeleteReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseDashGetTunnelSessionsByAccountReq: object = {};

export const DashGetTunnelSessionsByAccountReq = {
  encode(
    message: DashGetTunnelSessionsByAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.paging !== undefined) {
      Paging.encode(message.paging, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashGetTunnelSessionsByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashGetTunnelSessionsByAccountReq,
    } as DashGetTunnelSessionsByAccountReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paging = Paging.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashGetTunnelSessionsByAccountReq>
  ): DashGetTunnelSessionsByAccountReq {
    const message = {
      ...baseDashGetTunnelSessionsByAccountReq,
    } as DashGetTunnelSessionsByAccountReq;
    if (object.paging !== undefined && object.paging !== null) {
      message.paging = Paging.fromPartial(object.paging);
    } else {
      message.paging = undefined;
    }
    return message;
  },
};

const baseDashGetTunnelSessionsByAccountResp: object = {};

export const DashGetTunnelSessionsByAccountResp = {
  encode(
    message: DashGetTunnelSessionsByAccountResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tunnelSessions) {
      DashSession.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.next !== undefined) {
      Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashGetTunnelSessionsByAccountResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashGetTunnelSessionsByAccountResp,
    } as DashGetTunnelSessionsByAccountResp;
    message.tunnelSessions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelSessions.push(
            DashSession.decode(reader, reader.uint32())
          );
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

  fromPartial(
    object: DeepPartial<DashGetTunnelSessionsByAccountResp>
  ): DashGetTunnelSessionsByAccountResp {
    const message = {
      ...baseDashGetTunnelSessionsByAccountResp,
    } as DashGetTunnelSessionsByAccountResp;
    message.tunnelSessions = [];
    if (object.tunnelSessions !== undefined && object.tunnelSessions !== null) {
      for (const e of object.tunnelSessions) {
        message.tunnelSessions.push(DashSession.fromPartial(e));
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

const baseDashGetEndpointsByAccountReq: object = {};

export const DashGetEndpointsByAccountReq = {
  encode(
    message: DashGetEndpointsByAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.paging !== undefined) {
      Paging.encode(message.paging, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashGetEndpointsByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashGetEndpointsByAccountReq,
    } as DashGetEndpointsByAccountReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paging = Paging.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashGetEndpointsByAccountReq>
  ): DashGetEndpointsByAccountReq {
    const message = {
      ...baseDashGetEndpointsByAccountReq,
    } as DashGetEndpointsByAccountReq;
    if (object.paging !== undefined && object.paging !== null) {
      message.paging = Paging.fromPartial(object.paging);
    } else {
      message.paging = undefined;
    }
    return message;
  },
};

const baseDashGetEndpointsByAccountResp: object = {};

export const DashGetEndpointsByAccountResp = {
  encode(
    message: DashGetEndpointsByAccountResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.endpoints) {
      DashEndpoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.next !== undefined) {
      Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashGetEndpointsByAccountResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashGetEndpointsByAccountResp,
    } as DashGetEndpointsByAccountResp;
    message.endpoints = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endpoints.push(DashEndpoint.decode(reader, reader.uint32()));
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

  fromPartial(
    object: DeepPartial<DashGetEndpointsByAccountResp>
  ): DashGetEndpointsByAccountResp {
    const message = {
      ...baseDashGetEndpointsByAccountResp,
    } as DashGetEndpointsByAccountResp;
    message.endpoints = [];
    if (object.endpoints !== undefined && object.endpoints !== null) {
      for (const e of object.endpoints) {
        message.endpoints.push(DashEndpoint.fromPartial(e));
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

const baseDashGetTunnelsByAccountReq: object = {};

export const DashGetTunnelsByAccountReq = {
  encode(
    message: DashGetTunnelsByAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.paging !== undefined) {
      Paging.encode(message.paging, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashGetTunnelsByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashGetTunnelsByAccountReq,
    } as DashGetTunnelsByAccountReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paging = Paging.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashGetTunnelsByAccountReq>
  ): DashGetTunnelsByAccountReq {
    const message = {
      ...baseDashGetTunnelsByAccountReq,
    } as DashGetTunnelsByAccountReq;
    if (object.paging !== undefined && object.paging !== null) {
      message.paging = Paging.fromPartial(object.paging);
    } else {
      message.paging = undefined;
    }
    return message;
  },
};

const baseDashGetTunnelsByAccountResp: object = {};

export const DashGetTunnelsByAccountResp = {
  encode(
    message: DashGetTunnelsByAccountResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tunnels) {
      DashTunnel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.next !== undefined) {
      Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashGetTunnelsByAccountResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashGetTunnelsByAccountResp,
    } as DashGetTunnelsByAccountResp;
    message.tunnels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnels.push(DashTunnel.decode(reader, reader.uint32()));
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

  fromPartial(
    object: DeepPartial<DashGetTunnelsByAccountResp>
  ): DashGetTunnelsByAccountResp {
    const message = {
      ...baseDashGetTunnelsByAccountResp,
    } as DashGetTunnelsByAccountResp;
    message.tunnels = [];
    if (object.tunnels !== undefined && object.tunnels !== null) {
      for (const e of object.tunnels) {
        message.tunnels.push(DashTunnel.fromPartial(e));
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

const baseDashGetTunnelByIDReq: object = { tunnelId: "" };

export const DashGetTunnelByIDReq = {
  encode(
    message: DashGetTunnelByIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunnelId !== "") {
      writer.uint32(10).string(message.tunnelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashGetTunnelByIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashGetTunnelByIDReq } as DashGetTunnelByIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashGetTunnelByIDReq>): DashGetTunnelByIDReq {
    const message = { ...baseDashGetTunnelByIDReq } as DashGetTunnelByIDReq;
    if (object.tunnelId !== undefined && object.tunnelId !== null) {
      message.tunnelId = object.tunnelId;
    } else {
      message.tunnelId = "";
    }
    return message;
  },
};

const baseDashGetTunnelsForBackendReq: object = { backendId: "" };

export const DashGetTunnelsForBackendReq = {
  encode(
    message: DashGetTunnelsForBackendReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendId !== "") {
      writer.uint32(10).string(message.backendId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashGetTunnelsForBackendReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashGetTunnelsForBackendReq,
    } as DashGetTunnelsForBackendReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashGetTunnelsForBackendReq>
  ): DashGetTunnelsForBackendReq {
    const message = {
      ...baseDashGetTunnelsForBackendReq,
    } as DashGetTunnelsForBackendReq;
    if (object.backendId !== undefined && object.backendId !== null) {
      message.backendId = object.backendId;
    } else {
      message.backendId = "";
    }
    return message;
  },
};

const baseDashGetTunnelsForBackendResp: object = {};

export const DashGetTunnelsForBackendResp = {
  encode(
    message: DashGetTunnelsForBackendResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tunnels) {
      DashTunnel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashGetTunnelsForBackendResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashGetTunnelsForBackendResp,
    } as DashGetTunnelsForBackendResp;
    message.tunnels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.tunnels.push(DashTunnel.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashGetTunnelsForBackendResp>
  ): DashGetTunnelsForBackendResp {
    const message = {
      ...baseDashGetTunnelsForBackendResp,
    } as DashGetTunnelsForBackendResp;
    message.tunnels = [];
    if (object.tunnels !== undefined && object.tunnels !== null) {
      for (const e of object.tunnels) {
        message.tunnels.push(DashTunnel.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDashGetTunnelsByLabelsReq: object = { regionId: "" };

export const DashGetTunnelsByLabelsReq = {
  encode(
    message: DashGetTunnelsByLabelsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      DashGetTunnelsByLabelsReq_LabelsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    if (message.paging !== undefined) {
      Paging.encode(message.paging, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashGetTunnelsByLabelsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashGetTunnelsByLabelsReq,
    } as DashGetTunnelsByLabelsReq;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.string();
          break;
        case 2:
          const entry2 = DashGetTunnelsByLabelsReq_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.labels[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.paging = Paging.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DashGetTunnelsByLabelsReq>
  ): DashGetTunnelsByLabelsReq {
    const message = {
      ...baseDashGetTunnelsByLabelsReq,
    } as DashGetTunnelsByLabelsReq;
    message.labels = {};
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
    }
    if (object.labels !== undefined && object.labels !== null) {
      Object.entries(object.labels).forEach(([key, value]) => {
        if (value !== undefined) {
          message.labels[key] = String(value);
        }
      });
    }
    if (object.paging !== undefined && object.paging !== null) {
      message.paging = Paging.fromPartial(object.paging);
    } else {
      message.paging = undefined;
    }
    return message;
  },
};

const baseDashGetTunnelsByLabelsReq_LabelsEntry: object = {
  key: "",
  value: "",
};

export const DashGetTunnelsByLabelsReq_LabelsEntry = {
  encode(
    message: DashGetTunnelsByLabelsReq_LabelsEntry,
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
  ): DashGetTunnelsByLabelsReq_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashGetTunnelsByLabelsReq_LabelsEntry,
    } as DashGetTunnelsByLabelsReq_LabelsEntry;
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
    object: DeepPartial<DashGetTunnelsByLabelsReq_LabelsEntry>
  ): DashGetTunnelsByLabelsReq_LabelsEntry {
    const message = {
      ...baseDashGetTunnelsByLabelsReq_LabelsEntry,
    } as DashGetTunnelsByLabelsReq_LabelsEntry;
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

const baseDashGetTunnelsByLabelsResp: object = {};

export const DashGetTunnelsByLabelsResp = {
  encode(
    message: DashGetTunnelsByLabelsResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tunnels) {
      DashTunnel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.next !== undefined) {
      Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DashGetTunnelsByLabelsResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDashGetTunnelsByLabelsResp,
    } as DashGetTunnelsByLabelsResp;
    message.tunnels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnels.push(DashTunnel.decode(reader, reader.uint32()));
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

  fromPartial(
    object: DeepPartial<DashGetTunnelsByLabelsResp>
  ): DashGetTunnelsByLabelsResp {
    const message = {
      ...baseDashGetTunnelsByLabelsResp,
    } as DashGetTunnelsByLabelsResp;
    message.tunnels = [];
    if (object.tunnels !== undefined && object.tunnels !== null) {
      for (const e of object.tunnels) {
        message.tunnels.push(DashTunnel.fromPartial(e));
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

const baseDashAccount: object = {
  id: 0,
  name: "",
  googleAppsDomain: "",
  billingAddress: "",
  hasStartedTunnel: false,
  invoicesToBackfill: false,
  taxId: "",
  suspended: false,
  paymentStatus: 0,
  identGoogleAppsDomain: "",
  planName: "",
  allowEnrollInBeta: false,
  ignoreBeta: false,
  ownerBillingEmailSid: "",
};

export const DashAccount = {
  encode(
    message: DashAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.googleAppsDomain !== "") {
      writer.uint32(26).string(message.googleAppsDomain);
    }
    if (message.billingAddress !== "") {
      writer.uint32(34).string(message.billingAddress);
    }
    if (message.hasStartedTunnel === true) {
      writer.uint32(40).bool(message.hasStartedTunnel);
    }
    if (message.invoicesToBackfill === true) {
      writer.uint32(48).bool(message.invoicesToBackfill);
    }
    if (message.taxId !== "") {
      writer.uint32(58).string(message.taxId);
    }
    if (message.suspended === true) {
      writer.uint32(144).bool(message.suspended);
    }
    if (message.paymentStatus !== 0) {
      writer.uint32(312).int32(message.paymentStatus);
    }
    if (message.identGoogleAppsDomain !== "") {
      writer.uint32(170).string(message.identGoogleAppsDomain);
    }
    if (message.ownerId !== undefined) {
      ID.encode(message.ownerId, writer.uint32(322).fork()).ldelim();
    }
    if (message.planName !== "") {
      writer.uint32(186).string(message.planName);
    }
    if (message.ksuid !== undefined) {
      ID.encode(message.ksuid, writer.uint32(218).fork()).ldelim();
    }
    if (message.allowEnrollInBeta === true) {
      writer.uint32(224).bool(message.allowEnrollInBeta);
    }
    if (message.ignoreBeta === true) {
      writer.uint32(232).bool(message.ignoreBeta);
    }
    if (message.ownerBillingEmailSid !== "") {
      writer.uint32(306).string(message.ownerBillingEmailSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashAccount } as DashAccount;
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
          message.googleAppsDomain = reader.string();
          break;
        case 4:
          message.billingAddress = reader.string();
          break;
        case 5:
          message.hasStartedTunnel = reader.bool();
          break;
        case 6:
          message.invoicesToBackfill = reader.bool();
          break;
        case 7:
          message.taxId = reader.string();
          break;
        case 18:
          message.suspended = reader.bool();
          break;
        case 39:
          message.paymentStatus = reader.int32() as any;
          break;
        case 21:
          message.identGoogleAppsDomain = reader.string();
          break;
        case 40:
          message.ownerId = ID.decode(reader, reader.uint32());
          break;
        case 23:
          message.planName = reader.string();
          break;
        case 27:
          message.ksuid = ID.decode(reader, reader.uint32());
          break;
        case 28:
          message.allowEnrollInBeta = reader.bool();
          break;
        case 29:
          message.ignoreBeta = reader.bool();
          break;
        case 38:
          message.ownerBillingEmailSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashAccount>): DashAccount {
    const message = { ...baseDashAccount } as DashAccount;
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
    if (
      object.googleAppsDomain !== undefined &&
      object.googleAppsDomain !== null
    ) {
      message.googleAppsDomain = object.googleAppsDomain;
    } else {
      message.googleAppsDomain = "";
    }
    if (object.billingAddress !== undefined && object.billingAddress !== null) {
      message.billingAddress = object.billingAddress;
    } else {
      message.billingAddress = "";
    }
    if (
      object.hasStartedTunnel !== undefined &&
      object.hasStartedTunnel !== null
    ) {
      message.hasStartedTunnel = object.hasStartedTunnel;
    } else {
      message.hasStartedTunnel = false;
    }
    if (
      object.invoicesToBackfill !== undefined &&
      object.invoicesToBackfill !== null
    ) {
      message.invoicesToBackfill = object.invoicesToBackfill;
    } else {
      message.invoicesToBackfill = false;
    }
    if (object.taxId !== undefined && object.taxId !== null) {
      message.taxId = object.taxId;
    } else {
      message.taxId = "";
    }
    if (object.suspended !== undefined && object.suspended !== null) {
      message.suspended = object.suspended;
    } else {
      message.suspended = false;
    }
    if (object.paymentStatus !== undefined && object.paymentStatus !== null) {
      message.paymentStatus = object.paymentStatus;
    } else {
      message.paymentStatus = 0;
    }
    if (
      object.identGoogleAppsDomain !== undefined &&
      object.identGoogleAppsDomain !== null
    ) {
      message.identGoogleAppsDomain = object.identGoogleAppsDomain;
    } else {
      message.identGoogleAppsDomain = "";
    }
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = ID.fromPartial(object.ownerId);
    } else {
      message.ownerId = undefined;
    }
    if (object.planName !== undefined && object.planName !== null) {
      message.planName = object.planName;
    } else {
      message.planName = "";
    }
    if (object.ksuid !== undefined && object.ksuid !== null) {
      message.ksuid = ID.fromPartial(object.ksuid);
    } else {
      message.ksuid = undefined;
    }
    if (
      object.allowEnrollInBeta !== undefined &&
      object.allowEnrollInBeta !== null
    ) {
      message.allowEnrollInBeta = object.allowEnrollInBeta;
    } else {
      message.allowEnrollInBeta = false;
    }
    if (object.ignoreBeta !== undefined && object.ignoreBeta !== null) {
      message.ignoreBeta = object.ignoreBeta;
    } else {
      message.ignoreBeta = false;
    }
    if (
      object.ownerBillingEmailSid !== undefined &&
      object.ownerBillingEmailSid !== null
    ) {
      message.ownerBillingEmailSid = object.ownerBillingEmailSid;
    } else {
      message.ownerBillingEmailSid = "";
    }
    return message;
  },
};

const baseDashEndpoint: object = {
  id: "",
  region: "",
  metadata: "",
  url: "",
  proto: "",
  domainId: "",
  tcpAddrId: "",
  agentInitiatedTunnelId: "",
  edgeId: "",
  type: 0,
};

export const DashEndpoint = {
  encode(
    message: DashEndpoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.region !== "") {
      writer.uint32(18).string(message.region);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.proto !== "") {
      writer.uint32(58).string(message.proto);
    }
    if (message.domainId !== "") {
      writer.uint32(66).string(message.domainId);
    }
    if (message.tcpAddrId !== "") {
      writer.uint32(74).string(message.tcpAddrId);
    }
    if (message.agentInitiatedTunnelId !== "") {
      writer.uint32(82).string(message.agentInitiatedTunnelId);
    }
    if (message.edgeId !== "") {
      writer.uint32(90).string(message.edgeId);
    }
    if (message.type !== 0) {
      writer.uint32(96).int32(message.type);
    }
    for (const v of message.backendTunnelMatches) {
      Endpoint_BackendTunnelMatch.encode(
        v!,
        writer.uint32(106).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashEndpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashEndpoint } as DashEndpoint;
    message.backendTunnelMatches = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.region = reader.string();
          break;
        case 3:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.metadata = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.proto = reader.string();
          break;
        case 8:
          message.domainId = reader.string();
          break;
        case 9:
          message.tcpAddrId = reader.string();
          break;
        case 10:
          message.agentInitiatedTunnelId = reader.string();
          break;
        case 11:
          message.edgeId = reader.string();
          break;
        case 12:
          message.type = reader.int32() as any;
          break;
        case 13:
          message.backendTunnelMatches.push(
            Endpoint_BackendTunnelMatch.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashEndpoint>): DashEndpoint {
    const message = { ...baseDashEndpoint } as DashEndpoint;
    message.backendTunnelMatches = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = object.region;
    } else {
      message.region = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Timestamp.fromPartial(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = object.proto;
    } else {
      message.proto = "";
    }
    if (object.domainId !== undefined && object.domainId !== null) {
      message.domainId = object.domainId;
    } else {
      message.domainId = "";
    }
    if (object.tcpAddrId !== undefined && object.tcpAddrId !== null) {
      message.tcpAddrId = object.tcpAddrId;
    } else {
      message.tcpAddrId = "";
    }
    if (
      object.agentInitiatedTunnelId !== undefined &&
      object.agentInitiatedTunnelId !== null
    ) {
      message.agentInitiatedTunnelId = object.agentInitiatedTunnelId;
    } else {
      message.agentInitiatedTunnelId = "";
    }
    if (object.edgeId !== undefined && object.edgeId !== null) {
      message.edgeId = object.edgeId;
    } else {
      message.edgeId = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (
      object.backendTunnelMatches !== undefined &&
      object.backendTunnelMatches !== null
    ) {
      for (const e of object.backendTunnelMatches) {
        message.backendTunnelMatches.push(
          Endpoint_BackendTunnelMatch.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseDashTunnel: object = {
  id: "",
  url: "",
  remoteAddr: "",
  region: "",
  proto: "",
  sessionId: "",
  metadata: "",
  hostname: "",
  endpointId: "",
  backendIds: "",
  forwardsTo: "",
};

export const DashTunnel = {
  encode(
    message: DashTunnel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(74).string(message.id);
    }
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.remoteAddr !== "") {
      writer.uint32(18).string(message.remoteAddr);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    if (message.proto !== "") {
      writer.uint32(34).string(message.proto);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    if (message.sessionId !== "") {
      writer.uint32(58).string(message.sessionId);
    }
    if (message.metadata !== "") {
      writer.uint32(66).string(message.metadata);
    }
    if (message.hostname !== "") {
      writer.uint32(82).string(message.hostname);
    }
    if (message.endpointId !== "") {
      writer.uint32(90).string(message.endpointId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      DashTunnel_LabelsEntry.encode(
        { key: key as any, value },
        writer.uint32(98).fork()
      ).ldelim();
    });
    for (const v of message.backendIds) {
      writer.uint32(106).string(v!);
    }
    for (const v of message.edgeRouteBackendMatches) {
      Tunnel_EdgeRouteBackendMatch.encode(
        v!,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.forwardsTo !== "") {
      writer.uint32(122).string(message.forwardsTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashTunnel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashTunnel } as DashTunnel;
    message.labels = {};
    message.backendIds = [];
    message.edgeRouteBackendMatches = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          message.id = reader.string();
          break;
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.remoteAddr = reader.string();
          break;
        case 3:
          message.region = reader.string();
          break;
        case 4:
          message.proto = reader.string();
          break;
        case 5:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.sessionId = reader.string();
          break;
        case 8:
          message.metadata = reader.string();
          break;
        case 10:
          message.hostname = reader.string();
          break;
        case 11:
          message.endpointId = reader.string();
          break;
        case 12:
          const entry12 = DashTunnel_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry12.value !== undefined) {
            message.labels[entry12.key] = entry12.value;
          }
          break;
        case 13:
          message.backendIds.push(reader.string());
          break;
        case 14:
          message.edgeRouteBackendMatches.push(
            Tunnel_EdgeRouteBackendMatch.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.forwardsTo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashTunnel>): DashTunnel {
    const message = { ...baseDashTunnel } as DashTunnel;
    message.labels = {};
    message.backendIds = [];
    message.edgeRouteBackendMatches = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.remoteAddr !== undefined && object.remoteAddr !== null) {
      message.remoteAddr = object.remoteAddr;
    } else {
      message.remoteAddr = "";
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = object.region;
    } else {
      message.region = "";
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = object.proto;
    } else {
      message.proto = "";
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = object.sessionId;
    } else {
      message.sessionId = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.hostname !== undefined && object.hostname !== null) {
      message.hostname = object.hostname;
    } else {
      message.hostname = "";
    }
    if (object.endpointId !== undefined && object.endpointId !== null) {
      message.endpointId = object.endpointId;
    } else {
      message.endpointId = "";
    }
    if (object.labels !== undefined && object.labels !== null) {
      Object.entries(object.labels).forEach(([key, value]) => {
        if (value !== undefined) {
          message.labels[key] = String(value);
        }
      });
    }
    if (object.backendIds !== undefined && object.backendIds !== null) {
      for (const e of object.backendIds) {
        message.backendIds.push(e);
      }
    }
    if (
      object.edgeRouteBackendMatches !== undefined &&
      object.edgeRouteBackendMatches !== null
    ) {
      for (const e of object.edgeRouteBackendMatches) {
        message.edgeRouteBackendMatches.push(
          Tunnel_EdgeRouteBackendMatch.fromPartial(e)
        );
      }
    }
    if (object.forwardsTo !== undefined && object.forwardsTo !== null) {
      message.forwardsTo = object.forwardsTo;
    } else {
      message.forwardsTo = "";
    }
    return message;
  },
};

const baseDashTunnel_LabelsEntry: object = { key: "", value: "" };

export const DashTunnel_LabelsEntry = {
  encode(
    message: DashTunnel_LabelsEntry,
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
  ): DashTunnel_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashTunnel_LabelsEntry } as DashTunnel_LabelsEntry;
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
    object: DeepPartial<DashTunnel_LabelsEntry>
  ): DashTunnel_LabelsEntry {
    const message = { ...baseDashTunnel_LabelsEntry } as DashTunnel_LabelsEntry;
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

const baseDashSession: object = {
  id: "",
  clientVersion: "",
  credentialDisplayId: "",
  ip: "",
  metadata: "",
  regionId: "",
  transport: "",
  os: "",
};

export const DashSession = {
  encode(
    message: DashSession,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clientVersion !== "") {
      writer.uint32(18).string(message.clientVersion);
    }
    if (message.credentialDisplayId !== "") {
      writer.uint32(26).string(message.credentialDisplayId);
    }
    if (message.ip !== "") {
      writer.uint32(34).string(message.ip);
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    if (message.regionId !== "") {
      writer.uint32(50).string(message.regionId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.transport !== "") {
      writer.uint32(66).string(message.transport);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(74).fork()).ldelim();
    }
    if (message.os !== "") {
      writer.uint32(82).string(message.os);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashSession } as DashSession;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.clientVersion = reader.string();
          break;
        case 3:
          message.credentialDisplayId = reader.string();
          break;
        case 4:
          message.ip = reader.string();
          break;
        case 5:
          message.metadata = reader.string();
          break;
        case 6:
          message.regionId = reader.string();
          break;
        case 7:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.transport = reader.string();
          break;
        case 9:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.os = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashSession>): DashSession {
    const message = { ...baseDashSession } as DashSession;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.clientVersion !== undefined && object.clientVersion !== null) {
      message.clientVersion = object.clientVersion;
    } else {
      message.clientVersion = "";
    }
    if (
      object.credentialDisplayId !== undefined &&
      object.credentialDisplayId !== null
    ) {
      message.credentialDisplayId = object.credentialDisplayId;
    } else {
      message.credentialDisplayId = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    } else {
      message.ip = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.transport !== undefined && object.transport !== null) {
      message.transport = object.transport;
    } else {
      message.transport = "";
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    if (object.os !== undefined && object.os !== null) {
      message.os = object.os;
    } else {
      message.os = "";
    }
    return message;
  },
};

const baseDashTeamMember: object = {
  email: "",
  name: "",
  isCurrentUser: false,
  billingEmailSid: "",
};

export const DashTeamMember = {
  encode(
    message: DashTeamMember,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(34).fork()).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.permissions !== undefined) {
      MembershipPermissions.encode(
        message.permissions,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.isCurrentUser === true) {
      writer.uint32(64).bool(message.isCurrentUser);
    }
    if (message.billingEmailSid !== "") {
      writer.uint32(74).string(message.billingEmailSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashTeamMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashTeamMember } as DashTeamMember;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.email = reader.string();
          break;
        case 5:
          message.permissions = MembershipPermissions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.isCurrentUser = reader.bool();
          break;
        case 9:
          message.billingEmailSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashTeamMember>): DashTeamMember {
    const message = { ...baseDashTeamMember } as DashTeamMember;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = MembershipPermissions.fromPartial(
        object.permissions
      );
    } else {
      message.permissions = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.isCurrentUser !== undefined && object.isCurrentUser !== null) {
      message.isCurrentUser = object.isCurrentUser;
    } else {
      message.isCurrentUser = false;
    }
    if (
      object.billingEmailSid !== undefined &&
      object.billingEmailSid !== null
    ) {
      message.billingEmailSid = object.billingEmailSid;
    } else {
      message.billingEmailSid = "";
    }
    return message;
  },
};

const baseDashCard: object = {
  sid: "",
  expMonth: 0,
  expYear: 0,
  last4: "",
  brand: "",
  canDelete: false,
};

export const DashCard = {
  encode(
    message: DashCard,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(10).string(message.sid);
    }
    if (message.expMonth !== 0) {
      writer.uint32(48).int32(message.expMonth);
    }
    if (message.expYear !== 0) {
      writer.uint32(56).int32(message.expYear);
    }
    if (message.last4 !== "") {
      writer.uint32(66).string(message.last4);
    }
    if (message.brand !== "") {
      writer.uint32(106).string(message.brand);
    }
    if (message.canDelete === true) {
      writer.uint32(16).bool(message.canDelete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashCard {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashCard } as DashCard;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sid = reader.string();
          break;
        case 6:
          message.expMonth = reader.int32();
          break;
        case 7:
          message.expYear = reader.int32();
          break;
        case 8:
          message.last4 = reader.string();
          break;
        case 13:
          message.brand = reader.string();
          break;
        case 2:
          message.canDelete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashCard>): DashCard {
    const message = { ...baseDashCard } as DashCard;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.expMonth !== undefined && object.expMonth !== null) {
      message.expMonth = object.expMonth;
    } else {
      message.expMonth = 0;
    }
    if (object.expYear !== undefined && object.expYear !== null) {
      message.expYear = object.expYear;
    } else {
      message.expYear = 0;
    }
    if (object.last4 !== undefined && object.last4 !== null) {
      message.last4 = object.last4;
    } else {
      message.last4 = "";
    }
    if (object.brand !== undefined && object.brand !== null) {
      message.brand = object.brand;
    } else {
      message.brand = "";
    }
    if (object.canDelete !== undefined && object.canDelete !== null) {
      message.canDelete = object.canDelete;
    } else {
      message.canDelete = false;
    }
    return message;
  },
};

const baseDashInvoice: object = {
  sid: "",
  total: 0,
  number: "",
  pdfUrl: "",
  status: "",
};

export const DashInvoice = {
  encode(
    message: DashInvoice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(10).string(message.sid);
    }
    if (message.dueAt !== undefined) {
      Timestamp.encode(message.dueAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.issuedAt !== undefined) {
      Timestamp.encode(message.issuedAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(48).int64(message.total);
    }
    if (message.number !== "") {
      writer.uint32(90).string(message.number);
    }
    if (message.pdfUrl !== "") {
      writer.uint32(98).string(message.pdfUrl);
    }
    if (message.status !== "") {
      writer.uint32(106).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashInvoice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashInvoice } as DashInvoice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sid = reader.string();
          break;
        case 2:
          message.dueAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.issuedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.total = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.number = reader.string();
          break;
        case 12:
          message.pdfUrl = reader.string();
          break;
        case 13:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashInvoice>): DashInvoice {
    const message = { ...baseDashInvoice } as DashInvoice;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.dueAt !== undefined && object.dueAt !== null) {
      message.dueAt = Timestamp.fromPartial(object.dueAt);
    } else {
      message.dueAt = undefined;
    }
    if (object.issuedAt !== undefined && object.issuedAt !== null) {
      message.issuedAt = Timestamp.fromPartial(object.issuedAt);
    } else {
      message.issuedAt = undefined;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    } else {
      message.number = "";
    }
    if (object.pdfUrl !== undefined && object.pdfUrl !== null) {
      message.pdfUrl = object.pdfUrl;
    } else {
      message.pdfUrl = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseDashMailingListSub: object = { ident: "", enabled: false };

export const DashMailingListSub = {
  encode(
    message: DashMailingListSub,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ident !== "") {
      writer.uint32(10).string(message.ident);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashMailingListSub {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashMailingListSub } as DashMailingListSub;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ident = reader.string();
          break;
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

  fromPartial(object: DeepPartial<DashMailingListSub>): DashMailingListSub {
    const message = { ...baseDashMailingListSub } as DashMailingListSub;
    if (object.ident !== undefined && object.ident !== null) {
      message.ident = object.ident;
    } else {
      message.ident = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    return message;
  },
};

const baseDashRegion: object = {
  id: "",
  name: "",
  endpointBaseDomain: "",
  enterpriseAgentIngressDomain: "",
};

export const DashRegion = {
  encode(
    message: DashRegion,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.endpointBaseDomain !== "") {
      writer.uint32(26).string(message.endpointBaseDomain);
    }
    if (message.enterpriseAgentIngressDomain !== "") {
      writer.uint32(34).string(message.enterpriseAgentIngressDomain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashRegion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashRegion } as DashRegion;
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
          message.endpointBaseDomain = reader.string();
          break;
        case 4:
          message.enterpriseAgentIngressDomain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashRegion>): DashRegion {
    const message = { ...baseDashRegion } as DashRegion;
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
    if (
      object.endpointBaseDomain !== undefined &&
      object.endpointBaseDomain !== null
    ) {
      message.endpointBaseDomain = object.endpointBaseDomain;
    } else {
      message.endpointBaseDomain = "";
    }
    if (
      object.enterpriseAgentIngressDomain !== undefined &&
      object.enterpriseAgentIngressDomain !== null
    ) {
      message.enterpriseAgentIngressDomain =
        object.enterpriseAgentIngressDomain;
    } else {
      message.enterpriseAgentIngressDomain = "";
    }
    return message;
  },
};

const baseDashUser: object = {
  email: "",
  authtoken: "",
  verifiedEmail: false,
  pendingEmail: "",
};

export const DashUser = {
  encode(
    message: DashUser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.authtoken !== "") {
      writer.uint32(26).string(message.authtoken);
    }
    if (message.googleIdent !== undefined) {
      DashGoogleIdent.encode(
        message.googleIdent,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(42).fork()).ldelim();
    }
    if (message.verifiedEmail === true) {
      writer.uint32(48).bool(message.verifiedEmail);
    }
    if (message.pendingEmail !== "") {
      writer.uint32(58).string(message.pendingEmail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashUser } as DashUser;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.authtoken = reader.string();
          break;
        case 4:
          message.googleIdent = DashGoogleIdent.decode(reader, reader.uint32());
          break;
        case 5:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 6:
          message.verifiedEmail = reader.bool();
          break;
        case 7:
          message.pendingEmail = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<DashUser>): DashUser {
    const message = { ...baseDashUser } as DashUser;
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.authtoken !== undefined && object.authtoken !== null) {
      message.authtoken = object.authtoken;
    } else {
      message.authtoken = "";
    }
    if (object.googleIdent !== undefined && object.googleIdent !== null) {
      message.googleIdent = DashGoogleIdent.fromPartial(object.googleIdent);
    } else {
      message.googleIdent = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.verifiedEmail !== undefined && object.verifiedEmail !== null) {
      message.verifiedEmail = object.verifiedEmail;
    } else {
      message.verifiedEmail = false;
    }
    if (object.pendingEmail !== undefined && object.pendingEmail !== null) {
      message.pendingEmail = object.pendingEmail;
    } else {
      message.pendingEmail = "";
    }
    return message;
  },
};

const baseDashFlash: object = { msg: "", type: 0 };

export const DashFlash = {
  encode(
    message: DashFlash,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DashFlash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashFlash } as DashFlash;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
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

  fromPartial(object: DeepPartial<DashFlash>): DashFlash {
    const message = { ...baseDashFlash } as DashFlash;
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    return message;
  },
};

export interface Dash {
  Impersonate(
    request: DeepPartial<DashImpersonateReq>,
    metadata?: grpc.Metadata
  ): Promise<DashImpersonateResp>;
}

export class DashClientImpl implements Dash {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Impersonate = this.Impersonate.bind(this);
  }

  Impersonate(
    request: DeepPartial<DashImpersonateReq>,
    metadata?: grpc.Metadata
  ): Promise<DashImpersonateResp> {
    return this.rpc.unary(
      DashImpersonateDesc,
      DashImpersonateReq.fromPartial(request),
      metadata
    );
  }
}

export const DashDesc = {
  serviceName: "rpx.Dash",
};

export const DashImpersonateDesc: UnaryMethodDefinitionish = {
  methodName: "Impersonate",
  service: DashDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashImpersonateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DashImpersonateResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Pages
 * ----------------------
 */
export interface DashState {
  App(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<DashAppState>;
  BillingPlan(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<DashBillingPlanState>;
}

export class DashStateClientImpl implements DashState {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.App = this.App.bind(this);
    this.BillingPlan = this.BillingPlan.bind(this);
  }

  App(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<DashAppState> {
    return this.rpc.unary(
      DashStateAppDesc,
      Empty.fromPartial(request),
      metadata
    );
  }

  BillingPlan(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<DashBillingPlanState> {
    return this.rpc.unary(
      DashStateBillingPlanDesc,
      Empty.fromPartial(request),
      metadata
    );
  }
}

export const DashStateDesc = {
  serviceName: "rpx.DashState",
};

export const DashStateAppDesc: UnaryMethodDefinitionish = {
  methodName: "App",
  service: DashStateDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DashAppState.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashStateBillingPlanDesc: UnaryMethodDefinitionish = {
  methodName: "BillingPlan",
  service: DashStateDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DashBillingPlanState.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * User Pages
 * ----------------------
 */
export interface DashUserState {
  App(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<DashUserAppState>;
}

export class DashUserStateClientImpl implements DashUserState {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.App = this.App.bind(this);
  }

  App(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<DashUserAppState> {
    return this.rpc.unary(
      DashUserStateAppDesc,
      Empty.fromPartial(request),
      metadata
    );
  }
}

export const DashUserStateDesc = {
  serviceName: "rpx.DashUserState",
};

export const DashUserStateAppDesc: UnaryMethodDefinitionish = {
  methodName: "App",
  service: DashUserStateDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DashUserAppState.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Authentication
 * ----------------------
 */
export interface DashAuth {
  Login(
    request: DeepPartial<DashAuthLoginReq>,
    metadata?: grpc.Metadata
  ): Promise<DashAuthLoginResp>;
  Signup(
    request: DeepPartial<DashAuthSignupReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashAuthClientImpl implements DashAuth {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Login = this.Login.bind(this);
    this.Signup = this.Signup.bind(this);
  }

  Login(
    request: DeepPartial<DashAuthLoginReq>,
    metadata?: grpc.Metadata
  ): Promise<DashAuthLoginResp> {
    return this.rpc.unary(
      DashAuthLoginDesc,
      DashAuthLoginReq.fromPartial(request),
      metadata
    );
  }

  Signup(
    request: DeepPartial<DashAuthSignupReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashAuthSignupDesc,
      DashAuthSignupReq.fromPartial(request),
      metadata
    );
  }
}

export const DashAuthDesc = {
  serviceName: "rpx.DashAuth",
};

export const DashAuthLoginDesc: UnaryMethodDefinitionish = {
  methodName: "Login",
  service: DashAuthDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashAuthLoginReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DashAuthLoginResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashAuthSignupDesc: UnaryMethodDefinitionish = {
  methodName: "Signup",
  service: DashAuthDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashAuthSignupReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Password Resets
 * ----------------------
 */
export interface DashPasswordResets {
  Create(
    request: DeepPartial<DashPasswordResetsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Redeem(
    request: DeepPartial<PasswordResetsRedeemReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  GetByToken(
    request: DeepPartial<PasswordResetsGetByTokenReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashPasswordResetsClientImpl implements DashPasswordResets {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Redeem = this.Redeem.bind(this);
    this.GetByToken = this.GetByToken.bind(this);
  }

  Create(
    request: DeepPartial<DashPasswordResetsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashPasswordResetsCreateDesc,
      DashPasswordResetsCreateReq.fromPartial(request),
      metadata
    );
  }

  Redeem(
    request: DeepPartial<PasswordResetsRedeemReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashPasswordResetsRedeemDesc,
      PasswordResetsRedeemReq.fromPartial(request),
      metadata
    );
  }

  GetByToken(
    request: DeepPartial<PasswordResetsGetByTokenReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashPasswordResetsGetByTokenDesc,
      PasswordResetsGetByTokenReq.fromPartial(request),
      metadata
    );
  }
}

export const DashPasswordResetsDesc = {
  serviceName: "rpx.DashPasswordResets",
};

export const DashPasswordResetsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashPasswordResetsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashPasswordResetsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashPasswordResetsRedeemDesc: UnaryMethodDefinitionish = {
  methodName: "Redeem",
  service: DashPasswordResetsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PasswordResetsRedeemReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashPasswordResetsGetByTokenDesc: UnaryMethodDefinitionish = {
  methodName: "GetByToken",
  service: DashPasswordResetsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PasswordResetsGetByTokenReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Email Confirmations
 * ----------------------
 */
export interface DashEmailConfirmations {
  ResendEmailConfirmation(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  CancelEmailConfirmation(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashEmailConfirmationsClientImpl
  implements DashEmailConfirmations
{
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ResendEmailConfirmation = this.ResendEmailConfirmation.bind(this);
    this.CancelEmailConfirmation = this.CancelEmailConfirmation.bind(this);
  }

  ResendEmailConfirmation(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashEmailConfirmationsResendEmailConfirmationDesc,
      EmailConfirmationsUserReq.fromPartial(request),
      metadata
    );
  }

  CancelEmailConfirmation(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashEmailConfirmationsCancelEmailConfirmationDesc,
      EmailConfirmationsUserReq.fromPartial(request),
      metadata
    );
  }
}

export const DashEmailConfirmationsDesc = {
  serviceName: "rpx.DashEmailConfirmations",
};

export const DashEmailConfirmationsResendEmailConfirmationDesc: UnaryMethodDefinitionish =
  {
    methodName: "ResendEmailConfirmation",
    service: DashEmailConfirmationsDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return EmailConfirmationsUserReq.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...Empty.decode(data),
          toObject() {
            return this;
          },
        };
      },
    } as any,
  };

export const DashEmailConfirmationsCancelEmailConfirmationDesc: UnaryMethodDefinitionish =
  {
    methodName: "CancelEmailConfirmation",
    service: DashEmailConfirmationsDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return EmailConfirmationsUserReq.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...Empty.decode(data),
          toObject() {
            return this;
          },
        };
      },
    } as any,
  };

/**
 * ----------------------
 * Beta Signups
 * ----------------------
 */
export interface DashBetaSignups {
  Put(
    request: DeepPartial<BetaSignupsPutReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignup>;
  Delete(
    request: DeepPartial<BetaSignupsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignup>;
  Enroll(
    request: DeepPartial<BetaSignupsEnrollReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashBetaSignupsClientImpl implements DashBetaSignups {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Put = this.Put.bind(this);
    this.Delete = this.Delete.bind(this);
    this.Enroll = this.Enroll.bind(this);
  }

  Put(
    request: DeepPartial<BetaSignupsPutReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignup> {
    return this.rpc.unary(
      DashBetaSignupsPutDesc,
      BetaSignupsPutReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<BetaSignupsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignup> {
    return this.rpc.unary(
      DashBetaSignupsDeleteDesc,
      BetaSignupsDeleteReq.fromPartial(request),
      metadata
    );
  }

  Enroll(
    request: DeepPartial<BetaSignupsEnrollReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashBetaSignupsEnrollDesc,
      BetaSignupsEnrollReq.fromPartial(request),
      metadata
    );
  }
}

export const DashBetaSignupsDesc = {
  serviceName: "rpx.DashBetaSignups",
};

export const DashBetaSignupsPutDesc: UnaryMethodDefinitionish = {
  methodName: "Put",
  service: DashBetaSignupsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BetaSignupsPutReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BetaSignup.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashBetaSignupsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashBetaSignupsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BetaSignupsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BetaSignup.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashBetaSignupsEnrollDesc: UnaryMethodDefinitionish = {
  methodName: "Enroll",
  service: DashBetaSignupsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BetaSignupsEnrollReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Feature Requests
 * ----------------------
 */
export interface DashFeatureRequests {
  Create(
    request: DeepPartial<FeatureRequestsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequest>;
  GetSuggestions(
    request: DeepPartial<FeatureRequestsGetSuggestionsReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequestsGetSuggestionsResp>;
}

export class DashFeatureRequestsClientImpl implements DashFeatureRequests {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.GetSuggestions = this.GetSuggestions.bind(this);
  }

  Create(
    request: DeepPartial<FeatureRequestsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequest> {
    return this.rpc.unary(
      DashFeatureRequestsCreateDesc,
      FeatureRequestsCreateReq.fromPartial(request),
      metadata
    );
  }

  GetSuggestions(
    request: DeepPartial<FeatureRequestsGetSuggestionsReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequestsGetSuggestionsResp> {
    return this.rpc.unary(
      DashFeatureRequestsGetSuggestionsDesc,
      FeatureRequestsGetSuggestionsReq.fromPartial(request),
      metadata
    );
  }
}

export const DashFeatureRequestsDesc = {
  serviceName: "rpx.DashFeatureRequests",
};

export const DashFeatureRequestsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashFeatureRequestsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FeatureRequestsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...FeatureRequest.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashFeatureRequestsGetSuggestionsDesc: UnaryMethodDefinitionish = {
  methodName: "GetSuggestions",
  service: DashFeatureRequestsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FeatureRequestsGetSuggestionsReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...FeatureRequestsGetSuggestionsResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * User
 *
 * These are all operations on the current user.
 * ----------------------
 */
export interface DashUsers {
  CreateAccount(
    request: DeepPartial<AccountsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  SetName(
    request: DeepPartial<UsersSetNameReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  SetEmail(
    request: DeepPartial<UsersSetEmailReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  SetPassword(
    request: DeepPartial<DashUsersSetPasswordReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  SwitchAccount(
    request: DeepPartial<DashUsersSwitchAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  SetMailingListSubs(
    request: DeepPartial<DashUsersSetMailingListSubsReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  DeleteIdent(
    request: DeepPartial<DashUsersDeleteIdentReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Delete(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Empty>;
}

export class DashUsersClientImpl implements DashUsers {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAccount = this.CreateAccount.bind(this);
    this.SetName = this.SetName.bind(this);
    this.SetEmail = this.SetEmail.bind(this);
    this.SetPassword = this.SetPassword.bind(this);
    this.SwitchAccount = this.SwitchAccount.bind(this);
    this.SetMailingListSubs = this.SetMailingListSubs.bind(this);
    this.DeleteIdent = this.DeleteIdent.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  CreateAccount(
    request: DeepPartial<AccountsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashUsersCreateAccountDesc,
      AccountsCreateReq.fromPartial(request),
      metadata
    );
  }

  SetName(
    request: DeepPartial<UsersSetNameReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashUsersSetNameDesc,
      UsersSetNameReq.fromPartial(request),
      metadata
    );
  }

  SetEmail(
    request: DeepPartial<UsersSetEmailReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashUsersSetEmailDesc,
      UsersSetEmailReq.fromPartial(request),
      metadata
    );
  }

  SetPassword(
    request: DeepPartial<DashUsersSetPasswordReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashUsersSetPasswordDesc,
      DashUsersSetPasswordReq.fromPartial(request),
      metadata
    );
  }

  SwitchAccount(
    request: DeepPartial<DashUsersSwitchAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashUsersSwitchAccountDesc,
      DashUsersSwitchAccountReq.fromPartial(request),
      metadata
    );
  }

  SetMailingListSubs(
    request: DeepPartial<DashUsersSetMailingListSubsReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashUsersSetMailingListSubsDesc,
      DashUsersSetMailingListSubsReq.fromPartial(request),
      metadata
    );
  }

  DeleteIdent(
    request: DeepPartial<DashUsersDeleteIdentReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashUsersDeleteIdentDesc,
      DashUsersDeleteIdentReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashUsersDeleteDesc,
      Empty.fromPartial(request),
      metadata
    );
  }
}

export const DashUsersDesc = {
  serviceName: "rpx.DashUsers",
};

export const DashUsersCreateAccountDesc: UnaryMethodDefinitionish = {
  methodName: "CreateAccount",
  service: DashUsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashUsersSetNameDesc: UnaryMethodDefinitionish = {
  methodName: "SetName",
  service: DashUsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersSetNameReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashUsersSetEmailDesc: UnaryMethodDefinitionish = {
  methodName: "SetEmail",
  service: DashUsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersSetEmailReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashUsersSetPasswordDesc: UnaryMethodDefinitionish = {
  methodName: "SetPassword",
  service: DashUsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashUsersSetPasswordReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashUsersSwitchAccountDesc: UnaryMethodDefinitionish = {
  methodName: "SwitchAccount",
  service: DashUsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashUsersSwitchAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashUsersSetMailingListSubsDesc: UnaryMethodDefinitionish = {
  methodName: "SetMailingListSubs",
  service: DashUsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashUsersSetMailingListSubsReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashUsersDeleteIdentDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteIdent",
  service: DashUsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashUsersDeleteIdentReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashUsersDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashUsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Account
 *
 * These are all operations on the current account that
 * don't fit well into any other DashXxx service.
 * ----------------------
 */
export interface DashAccounts {
  SetGoogleAppsDomain(
    request: DeepPartial<DashAccountsSetGoogleAppsDomainReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  SetName(
    request: DeepPartial<AccountsSetNameReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Delete(
    request: DeepPartial<AccountsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashAccountsClientImpl implements DashAccounts {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetGoogleAppsDomain = this.SetGoogleAppsDomain.bind(this);
    this.SetName = this.SetName.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  SetGoogleAppsDomain(
    request: DeepPartial<DashAccountsSetGoogleAppsDomainReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashAccountsSetGoogleAppsDomainDesc,
      DashAccountsSetGoogleAppsDomainReq.fromPartial(request),
      metadata
    );
  }

  SetName(
    request: DeepPartial<AccountsSetNameReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashAccountsSetNameDesc,
      AccountsSetNameReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<AccountsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashAccountsDeleteDesc,
      AccountsDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashAccountsDesc = {
  serviceName: "rpx.DashAccounts",
};

export const DashAccountsSetGoogleAppsDomainDesc: UnaryMethodDefinitionish = {
  methodName: "SetGoogleAppsDomain",
  service: DashAccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashAccountsSetGoogleAppsDomainReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashAccountsSetNameDesc: UnaryMethodDefinitionish = {
  methodName: "SetName",
  service: DashAccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsSetNameReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashAccountsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashAccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Billing
 * ----------------------
 */
export interface DashBilling {
  SetBillingAddress(
    request: DeepPartial<DashBillingSetBillingAddressReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  SetTaxID(
    request: DeepPartial<DashBillingSetTaxIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  SetPaymentMethod(
    request: DeepPartial<DashBillingSetPaymentMethodReq>,
    metadata?: grpc.Metadata
  ): Promise<DashCard>;
  DeletePaymentMethod(
    request: DeepPartial<DashBillingDeletePaymentMethodReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  SetPlan(
    request: DeepPartial<DashBillingSetPlanReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashBillingClientImpl implements DashBilling {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetBillingAddress = this.SetBillingAddress.bind(this);
    this.SetTaxID = this.SetTaxID.bind(this);
    this.SetPaymentMethod = this.SetPaymentMethod.bind(this);
    this.DeletePaymentMethod = this.DeletePaymentMethod.bind(this);
    this.SetPlan = this.SetPlan.bind(this);
  }

  SetBillingAddress(
    request: DeepPartial<DashBillingSetBillingAddressReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashBillingSetBillingAddressDesc,
      DashBillingSetBillingAddressReq.fromPartial(request),
      metadata
    );
  }

  SetTaxID(
    request: DeepPartial<DashBillingSetTaxIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashBillingSetTaxIDDesc,
      DashBillingSetTaxIDReq.fromPartial(request),
      metadata
    );
  }

  SetPaymentMethod(
    request: DeepPartial<DashBillingSetPaymentMethodReq>,
    metadata?: grpc.Metadata
  ): Promise<DashCard> {
    return this.rpc.unary(
      DashBillingSetPaymentMethodDesc,
      DashBillingSetPaymentMethodReq.fromPartial(request),
      metadata
    );
  }

  DeletePaymentMethod(
    request: DeepPartial<DashBillingDeletePaymentMethodReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashBillingDeletePaymentMethodDesc,
      DashBillingDeletePaymentMethodReq.fromPartial(request),
      metadata
    );
  }

  SetPlan(
    request: DeepPartial<DashBillingSetPlanReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashBillingSetPlanDesc,
      DashBillingSetPlanReq.fromPartial(request),
      metadata
    );
  }
}

export const DashBillingDesc = {
  serviceName: "rpx.DashBilling",
};

export const DashBillingSetBillingAddressDesc: UnaryMethodDefinitionish = {
  methodName: "SetBillingAddress",
  service: DashBillingDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashBillingSetBillingAddressReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashBillingSetTaxIDDesc: UnaryMethodDefinitionish = {
  methodName: "SetTaxID",
  service: DashBillingDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashBillingSetTaxIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashBillingSetPaymentMethodDesc: UnaryMethodDefinitionish = {
  methodName: "SetPaymentMethod",
  service: DashBillingDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashBillingSetPaymentMethodReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DashCard.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashBillingDeletePaymentMethodDesc: UnaryMethodDefinitionish = {
  methodName: "DeletePaymentMethod",
  service: DashBillingDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashBillingDeletePaymentMethodReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashBillingSetPlanDesc: UnaryMethodDefinitionish = {
  methodName: "SetPlan",
  service: DashBillingDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashBillingSetPlanReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Memberships
 * ----------------------
 */
export interface DashMemberships {
  SwapAdmin(
    request: DeepPartial<MembershipsSwapAdminReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  SetPermissions(
    request: DeepPartial<MembershipsSetPermissionsReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Delete(
    request: DeepPartial<MembershipsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  RotateAuthtoken(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<Cred>;
}

export class DashMembershipsClientImpl implements DashMemberships {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SwapAdmin = this.SwapAdmin.bind(this);
    this.SetPermissions = this.SetPermissions.bind(this);
    this.Delete = this.Delete.bind(this);
    this.RotateAuthtoken = this.RotateAuthtoken.bind(this);
  }

  SwapAdmin(
    request: DeepPartial<MembershipsSwapAdminReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashMembershipsSwapAdminDesc,
      MembershipsSwapAdminReq.fromPartial(request),
      metadata
    );
  }

  SetPermissions(
    request: DeepPartial<MembershipsSetPermissionsReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashMembershipsSetPermissionsDesc,
      MembershipsSetPermissionsReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<MembershipsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashMembershipsDeleteDesc,
      MembershipsDeleteReq.fromPartial(request),
      metadata
    );
  }

  RotateAuthtoken(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<Cred> {
    return this.rpc.unary(
      DashMembershipsRotateAuthtokenDesc,
      Empty.fromPartial(request),
      metadata
    );
  }
}

export const DashMembershipsDesc = {
  serviceName: "rpx.DashMemberships",
};

export const DashMembershipsSwapAdminDesc: UnaryMethodDefinitionish = {
  methodName: "SwapAdmin",
  service: DashMembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsSwapAdminReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashMembershipsSetPermissionsDesc: UnaryMethodDefinitionish = {
  methodName: "SetPermissions",
  service: DashMembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsSetPermissionsReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashMembershipsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashMembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashMembershipsRotateAuthtokenDesc: UnaryMethodDefinitionish = {
  methodName: "RotateAuthtoken",
  service: DashMembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Cred.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * API Keys
 * ----------------------
 */
export interface DashAPIKeys {
  Create(
    request: DeepPartial<CredsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred>;
  Update(
    request: DeepPartial<CredsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred>;
  Delete(
    request: DeepPartial<CredsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred>;
}

export class DashAPIKeysClientImpl implements DashAPIKeys {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<CredsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred> {
    return this.rpc.unary(
      DashAPIKeysCreateDesc,
      CredsCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<CredsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred> {
    return this.rpc.unary(
      DashAPIKeysUpdateDesc,
      CredsUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<CredsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred> {
    return this.rpc.unary(
      DashAPIKeysDeleteDesc,
      CredsDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashAPIKeysDesc = {
  serviceName: "rpx.DashAPIKeys",
};

export const DashAPIKeysCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashAPIKeysDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CredsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Cred.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashAPIKeysUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashAPIKeysDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CredsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Cred.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashAPIKeysDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashAPIKeysDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CredsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Cred.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Tunnel Authtokens
 * ----------------------
 */
export interface DashTunnelAuthtokens {
  Create(
    request: DeepPartial<CredsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred>;
  Update(
    request: DeepPartial<CredsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred>;
  Delete(
    request: DeepPartial<CredsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred>;
}

export class DashTunnelAuthtokensClientImpl implements DashTunnelAuthtokens {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<CredsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred> {
    return this.rpc.unary(
      DashTunnelAuthtokensCreateDesc,
      CredsCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<CredsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred> {
    return this.rpc.unary(
      DashTunnelAuthtokensUpdateDesc,
      CredsUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<CredsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Cred> {
    return this.rpc.unary(
      DashTunnelAuthtokensDeleteDesc,
      CredsDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashTunnelAuthtokensDesc = {
  serviceName: "rpx.DashTunnelAuthtokens",
};

export const DashTunnelAuthtokensCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashTunnelAuthtokensDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CredsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Cred.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashTunnelAuthtokensUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashTunnelAuthtokensDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CredsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Cred.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashTunnelAuthtokensDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashTunnelAuthtokensDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CredsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Cred.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * SSH Public Keys
 * ----------------------
 */
export interface DashSSHPublicKeys {
  Create(
    request: DeepPartial<SSHCredsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCred>;
  Update(
    request: DeepPartial<CredsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCred>;
  Delete(
    request: DeepPartial<CredsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCred>;
}

export class DashSSHPublicKeysClientImpl implements DashSSHPublicKeys {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<SSHCredsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCred> {
    return this.rpc.unary(
      DashSSHPublicKeysCreateDesc,
      SSHCredsCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<CredsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCred> {
    return this.rpc.unary(
      DashSSHPublicKeysUpdateDesc,
      CredsUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<CredsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCred> {
    return this.rpc.unary(
      DashSSHPublicKeysDeleteDesc,
      CredsDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashSSHPublicKeysDesc = {
  serviceName: "rpx.DashSSHPublicKeys",
};

export const DashSSHPublicKeysCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashSSHPublicKeysDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SSHCredsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SSHCred.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashSSHPublicKeysUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashSSHPublicKeysDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CredsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SSHCred.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashSSHPublicKeysDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashSSHPublicKeysDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CredsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SSHCred.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * IP Policy
 * ----------------------
 */
export interface DashIPPolicies {
  Create(
    request: DeepPartial<IPPolicyCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<IPPolicy>;
  Update(
    request: DeepPartial<IPPolicyUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<IPPolicy>;
  Delete(
    request: DeepPartial<IPPolicyDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<IPPolicy>;
}

export class DashIPPoliciesClientImpl implements DashIPPolicies {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<IPPolicyCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<IPPolicy> {
    return this.rpc.unary(
      DashIPPoliciesCreateDesc,
      IPPolicyCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<IPPolicyUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<IPPolicy> {
    return this.rpc.unary(
      DashIPPoliciesUpdateDesc,
      IPPolicyUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<IPPolicyDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<IPPolicy> {
    return this.rpc.unary(
      DashIPPoliciesDeleteDesc,
      IPPolicyDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashIPPoliciesDesc = {
  serviceName: "rpx.DashIPPolicies",
};

export const DashIPPoliciesCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashIPPoliciesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return IPPolicyCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...IPPolicy.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashIPPoliciesUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashIPPoliciesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return IPPolicyUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...IPPolicy.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashIPPoliciesDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashIPPoliciesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return IPPolicyDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...IPPolicy.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export interface DashIPPolicyRules {
  Create(
    request: DeepPartial<DashIPPolicyRuleCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<DashIPPolicyRule>;
  Update(
    request: DeepPartial<DashIPPolicyRuleUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<DashIPPolicyRule>;
  Delete(
    request: DeepPartial<DashIPPolicyRuleDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<DashIPPolicyRule>;
}

export class DashIPPolicyRulesClientImpl implements DashIPPolicyRules {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<DashIPPolicyRuleCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<DashIPPolicyRule> {
    return this.rpc.unary(
      DashIPPolicyRulesCreateDesc,
      DashIPPolicyRuleCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<DashIPPolicyRuleUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<DashIPPolicyRule> {
    return this.rpc.unary(
      DashIPPolicyRulesUpdateDesc,
      DashIPPolicyRuleUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<DashIPPolicyRuleDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<DashIPPolicyRule> {
    return this.rpc.unary(
      DashIPPolicyRulesDeleteDesc,
      DashIPPolicyRuleDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashIPPolicyRulesDesc = {
  serviceName: "rpx.DashIPPolicyRules",
};

export const DashIPPolicyRulesCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashIPPolicyRulesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashIPPolicyRuleCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DashIPPolicyRule.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashIPPolicyRulesUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashIPPolicyRulesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashIPPolicyRuleUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DashIPPolicyRule.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashIPPolicyRulesDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashIPPolicyRulesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashIPPolicyRuleDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DashIPPolicyRule.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * IP Restrictions
 * ----------------------
 */
export interface DashIPRestrictions {
  Create(
    request: DeepPartial<IPRestrictionsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<IPRestriction>;
  Update(
    request: DeepPartial<IPRestrictionsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<IPRestriction>;
  Delete(
    request: DeepPartial<IPRestrictionsDeleteByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashIPRestrictionsClientImpl implements DashIPRestrictions {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<IPRestrictionsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<IPRestriction> {
    return this.rpc.unary(
      DashIPRestrictionsCreateDesc,
      IPRestrictionsCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<IPRestrictionsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<IPRestriction> {
    return this.rpc.unary(
      DashIPRestrictionsUpdateDesc,
      IPRestrictionsUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<IPRestrictionsDeleteByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashIPRestrictionsDeleteDesc,
      IPRestrictionsDeleteByIDReq.fromPartial(request),
      metadata
    );
  }
}

export const DashIPRestrictionsDesc = {
  serviceName: "rpx.DashIPRestrictions",
};

export const DashIPRestrictionsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashIPRestrictionsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return IPRestrictionsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...IPRestriction.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashIPRestrictionsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashIPRestrictionsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return IPRestrictionsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...IPRestriction.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashIPRestrictionsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashIPRestrictionsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return IPRestrictionsDeleteByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Domains
 * ----------------------
 */
export interface DashDomains {
  Create(
    request: DeepPartial<DomainsReserveReq>,
    metadata?: grpc.Metadata
  ): Promise<Domain>;
  Update(
    request: DeepPartial<DomainsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Domain>;
  DeleteNested(
    request: DeepPartial<DomainsDeleteNestedReq>,
    metadata?: grpc.Metadata
  ): Promise<Domain>;
  Delete(
    request: DeepPartial<DomainsReleaseReq>,
    metadata?: grpc.Metadata
  ): Promise<Domain>;
  VerifyCNAME(
    request: DeepPartial<DomainsVerifyReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  VerifyACMEChallengeCNAME(
    request: DeepPartial<DomainsVerifyChallengeReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Available(
    request: DeepPartial<DomainsAvailableReq>,
    metadata?: grpc.Metadata
  ): Promise<DomainsAvailableResp>;
  GetByID(
    request: DeepPartial<DomainsGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Domain>;
}

export class DashDomainsClientImpl implements DashDomains {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.DeleteNested = this.DeleteNested.bind(this);
    this.Delete = this.Delete.bind(this);
    this.VerifyCNAME = this.VerifyCNAME.bind(this);
    this.VerifyACMEChallengeCNAME = this.VerifyACMEChallengeCNAME.bind(this);
    this.Available = this.Available.bind(this);
    this.GetByID = this.GetByID.bind(this);
  }

  Create(
    request: DeepPartial<DomainsReserveReq>,
    metadata?: grpc.Metadata
  ): Promise<Domain> {
    return this.rpc.unary(
      DashDomainsCreateDesc,
      DomainsReserveReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<DomainsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Domain> {
    return this.rpc.unary(
      DashDomainsUpdateDesc,
      DomainsUpdateReq.fromPartial(request),
      metadata
    );
  }

  DeleteNested(
    request: DeepPartial<DomainsDeleteNestedReq>,
    metadata?: grpc.Metadata
  ): Promise<Domain> {
    return this.rpc.unary(
      DashDomainsDeleteNestedDesc,
      DomainsDeleteNestedReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<DomainsReleaseReq>,
    metadata?: grpc.Metadata
  ): Promise<Domain> {
    return this.rpc.unary(
      DashDomainsDeleteDesc,
      DomainsReleaseReq.fromPartial(request),
      metadata
    );
  }

  VerifyCNAME(
    request: DeepPartial<DomainsVerifyReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashDomainsVerifyCNAMEDesc,
      DomainsVerifyReq.fromPartial(request),
      metadata
    );
  }

  VerifyACMEChallengeCNAME(
    request: DeepPartial<DomainsVerifyChallengeReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashDomainsVerifyACMEChallengeCNAMEDesc,
      DomainsVerifyChallengeReq.fromPartial(request),
      metadata
    );
  }

  Available(
    request: DeepPartial<DomainsAvailableReq>,
    metadata?: grpc.Metadata
  ): Promise<DomainsAvailableResp> {
    return this.rpc.unary(
      DashDomainsAvailableDesc,
      DomainsAvailableReq.fromPartial(request),
      metadata
    );
  }

  GetByID(
    request: DeepPartial<DomainsGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Domain> {
    return this.rpc.unary(
      DashDomainsGetByIDDesc,
      DomainsGetByIDReq.fromPartial(request),
      metadata
    );
  }
}

export const DashDomainsDesc = {
  serviceName: "rpx.DashDomains",
};

export const DashDomainsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashDomainsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DomainsReserveReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Domain.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashDomainsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashDomainsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DomainsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Domain.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashDomainsDeleteNestedDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteNested",
  service: DashDomainsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DomainsDeleteNestedReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Domain.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashDomainsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashDomainsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DomainsReleaseReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Domain.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashDomainsVerifyCNAMEDesc: UnaryMethodDefinitionish = {
  methodName: "VerifyCNAME",
  service: DashDomainsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DomainsVerifyReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashDomainsVerifyACMEChallengeCNAMEDesc: UnaryMethodDefinitionish =
  {
    methodName: "VerifyACMEChallengeCNAME",
    service: DashDomainsDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return DomainsVerifyChallengeReq.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...Empty.decode(data),
          toObject() {
            return this;
          },
        };
      },
    } as any,
  };

export const DashDomainsAvailableDesc: UnaryMethodDefinitionish = {
  methodName: "Available",
  service: DashDomainsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DomainsAvailableReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DomainsAvailableResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashDomainsGetByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByID",
  service: DashDomainsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DomainsGetByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Domain.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * TCP Addresses
 * ----------------------
 */
export interface DashTCPAddrs {
  Create(
    request: DeepPartial<TCPAddrsAssignReq>,
    metadata?: grpc.Metadata
  ): Promise<TCPAddr>;
  Update(
    request: DeepPartial<TCPAddrsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<TCPAddr>;
  DeleteNested(
    request: DeepPartial<TCPAddrsDeleteNestedReq>,
    metadata?: grpc.Metadata
  ): Promise<TCPAddr>;
  Delete(
    request: DeepPartial<TCPAddrsReleaseReq>,
    metadata?: grpc.Metadata
  ): Promise<TCPAddr>;
}

export class DashTCPAddrsClientImpl implements DashTCPAddrs {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.DeleteNested = this.DeleteNested.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<TCPAddrsAssignReq>,
    metadata?: grpc.Metadata
  ): Promise<TCPAddr> {
    return this.rpc.unary(
      DashTCPAddrsCreateDesc,
      TCPAddrsAssignReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<TCPAddrsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<TCPAddr> {
    return this.rpc.unary(
      DashTCPAddrsUpdateDesc,
      TCPAddrsUpdateReq.fromPartial(request),
      metadata
    );
  }

  DeleteNested(
    request: DeepPartial<TCPAddrsDeleteNestedReq>,
    metadata?: grpc.Metadata
  ): Promise<TCPAddr> {
    return this.rpc.unary(
      DashTCPAddrsDeleteNestedDesc,
      TCPAddrsDeleteNestedReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<TCPAddrsReleaseReq>,
    metadata?: grpc.Metadata
  ): Promise<TCPAddr> {
    return this.rpc.unary(
      DashTCPAddrsDeleteDesc,
      TCPAddrsReleaseReq.fromPartial(request),
      metadata
    );
  }
}

export const DashTCPAddrsDesc = {
  serviceName: "rpx.DashTCPAddrs",
};

export const DashTCPAddrsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashTCPAddrsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return TCPAddrsAssignReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...TCPAddr.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashTCPAddrsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashTCPAddrsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return TCPAddrsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...TCPAddr.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashTCPAddrsDeleteNestedDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteNested",
  service: DashTCPAddrsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return TCPAddrsDeleteNestedReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...TCPAddr.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashTCPAddrsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashTCPAddrsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return TCPAddrsReleaseReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...TCPAddr.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Invitations
 * ----------------------
 */
export interface DashInvitations {
  Create(
    request: DeepPartial<InvitationsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation>;
  Cancel(
    request: DeepPartial<InvitationsCancelReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation>;
  Resend(
    request: DeepPartial<InvitationsResendReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation>;
  Update(
    request: DeepPartial<InvitationsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation>;
}

export class DashInvitationsClientImpl implements DashInvitations {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Cancel = this.Cancel.bind(this);
    this.Resend = this.Resend.bind(this);
    this.Update = this.Update.bind(this);
  }

  Create(
    request: DeepPartial<InvitationsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation> {
    return this.rpc.unary(
      DashInvitationsCreateDesc,
      InvitationsCreateReq.fromPartial(request),
      metadata
    );
  }

  Cancel(
    request: DeepPartial<InvitationsCancelReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation> {
    return this.rpc.unary(
      DashInvitationsCancelDesc,
      InvitationsCancelReq.fromPartial(request),
      metadata
    );
  }

  Resend(
    request: DeepPartial<InvitationsResendReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation> {
    return this.rpc.unary(
      DashInvitationsResendDesc,
      InvitationsResendReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<InvitationsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation> {
    return this.rpc.unary(
      DashInvitationsUpdateDesc,
      InvitationsUpdateReq.fromPartial(request),
      metadata
    );
  }
}

export const DashInvitationsDesc = {
  serviceName: "rpx.DashInvitations",
};

export const DashInvitationsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashInvitationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvitationsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Invitation.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashInvitationsCancelDesc: UnaryMethodDefinitionish = {
  methodName: "Cancel",
  service: DashInvitationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvitationsCancelReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Invitation.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashInvitationsResendDesc: UnaryMethodDefinitionish = {
  methodName: "Resend",
  service: DashInvitationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvitationsResendReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Invitation.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashInvitationsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashInvitationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvitationsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Invitation.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Billing Emails
 * ----------------------
 */
export interface DashBillingEmails {
  Create(
    request: DeepPartial<BillingEmailsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail>;
  Delete(
    request: DeepPartial<BillingEmailsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail>;
}

export class DashBillingEmailsClientImpl implements DashBillingEmails {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<BillingEmailsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail> {
    return this.rpc.unary(
      DashBillingEmailsCreateDesc,
      BillingEmailsCreateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<BillingEmailsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<BillingEmail> {
    return this.rpc.unary(
      DashBillingEmailsDeleteDesc,
      BillingEmailsDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashBillingEmailsDesc = {
  serviceName: "rpx.DashBillingEmails",
};

export const DashBillingEmailsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashBillingEmailsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BillingEmailsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BillingEmail.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashBillingEmailsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashBillingEmailsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BillingEmailsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BillingEmail.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Endpoint Configuration
 * ----------------------
 */
export interface DashEndpointConfigurations {
  Create(
    request: DeepPartial<EndpointConfigCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<EndpointConfiguration>;
  Update(
    request: DeepPartial<EndpointConfigUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<EndpointConfiguration>;
  DeleteModule(
    request: DeepPartial<EndpointConfigDeleteModuleReq>,
    metadata?: grpc.Metadata
  ): Promise<EndpointConfiguration>;
  Delete(
    request: DeepPartial<EndpointConfigDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<EndpointConfiguration>;
}

export class DashEndpointConfigurationsClientImpl
  implements DashEndpointConfigurations
{
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.DeleteModule = this.DeleteModule.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<EndpointConfigCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<EndpointConfiguration> {
    return this.rpc.unary(
      DashEndpointConfigurationsCreateDesc,
      EndpointConfigCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<EndpointConfigUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<EndpointConfiguration> {
    return this.rpc.unary(
      DashEndpointConfigurationsUpdateDesc,
      EndpointConfigUpdateReq.fromPartial(request),
      metadata
    );
  }

  DeleteModule(
    request: DeepPartial<EndpointConfigDeleteModuleReq>,
    metadata?: grpc.Metadata
  ): Promise<EndpointConfiguration> {
    return this.rpc.unary(
      DashEndpointConfigurationsDeleteModuleDesc,
      EndpointConfigDeleteModuleReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<EndpointConfigDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<EndpointConfiguration> {
    return this.rpc.unary(
      DashEndpointConfigurationsDeleteDesc,
      EndpointConfigDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashEndpointConfigurationsDesc = {
  serviceName: "rpx.DashEndpointConfigurations",
};

export const DashEndpointConfigurationsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashEndpointConfigurationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EndpointConfigCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EndpointConfiguration.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEndpointConfigurationsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashEndpointConfigurationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EndpointConfigUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EndpointConfiguration.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEndpointConfigurationsDeleteModuleDesc: UnaryMethodDefinitionish =
  {
    methodName: "DeleteModule",
    service: DashEndpointConfigurationsDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return EndpointConfigDeleteModuleReq.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...EndpointConfiguration.decode(data),
          toObject() {
            return this;
          },
        };
      },
    } as any,
  };

export const DashEndpointConfigurationsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashEndpointConfigurationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EndpointConfigDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EndpointConfiguration.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Edges
 * ----------------------
 */
export interface DashEdges {
  GetByID(
    request: DeepPartial<EdgesGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Edge>;
  GetByAccount(
    request: DeepPartial<EdgesGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<EdgeList>;
  Create(
    request: DeepPartial<EdgesCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Edge>;
  Update(
    request: DeepPartial<EdgesUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Edge>;
  Delete(
    request: DeepPartial<EdgesDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  DeleteModule(
    request: DeepPartial<EdgesDeleteModuleReq>,
    metadata?: grpc.Metadata
  ): Promise<Edge>;
  GetRouteByID(
    request: DeepPartial<EdgeRoutesGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<HTTPSEdge_Route>;
  CreateRoute(
    request: DeepPartial<EdgeRoutesCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<HTTPSEdge_Route>;
  UpdateRoute(
    request: DeepPartial<EdgeRoutesUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<HTTPSEdge_Route>;
  DeleteRoute(
    request: DeepPartial<EdgeRoutesDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  DeleteRouteModule(
    request: DeepPartial<EdgeRoutesDeleteModuleReq>,
    metadata?: grpc.Metadata
  ): Promise<HTTPSEdge_Route>;
}

export class DashEdgesClientImpl implements DashEdges {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetByID = this.GetByID.bind(this);
    this.GetByAccount = this.GetByAccount.bind(this);
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
    this.DeleteModule = this.DeleteModule.bind(this);
    this.GetRouteByID = this.GetRouteByID.bind(this);
    this.CreateRoute = this.CreateRoute.bind(this);
    this.UpdateRoute = this.UpdateRoute.bind(this);
    this.DeleteRoute = this.DeleteRoute.bind(this);
    this.DeleteRouteModule = this.DeleteRouteModule.bind(this);
  }

  GetByID(
    request: DeepPartial<EdgesGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Edge> {
    return this.rpc.unary(
      DashEdgesGetByIDDesc,
      EdgesGetByIDReq.fromPartial(request),
      metadata
    );
  }

  GetByAccount(
    request: DeepPartial<EdgesGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<EdgeList> {
    return this.rpc.unary(
      DashEdgesGetByAccountDesc,
      EdgesGetByAccountReq.fromPartial(request),
      metadata
    );
  }

  Create(
    request: DeepPartial<EdgesCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Edge> {
    return this.rpc.unary(
      DashEdgesCreateDesc,
      EdgesCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<EdgesUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Edge> {
    return this.rpc.unary(
      DashEdgesUpdateDesc,
      EdgesUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<EdgesDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashEdgesDeleteDesc,
      EdgesDeleteReq.fromPartial(request),
      metadata
    );
  }

  DeleteModule(
    request: DeepPartial<EdgesDeleteModuleReq>,
    metadata?: grpc.Metadata
  ): Promise<Edge> {
    return this.rpc.unary(
      DashEdgesDeleteModuleDesc,
      EdgesDeleteModuleReq.fromPartial(request),
      metadata
    );
  }

  GetRouteByID(
    request: DeepPartial<EdgeRoutesGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<HTTPSEdge_Route> {
    return this.rpc.unary(
      DashEdgesGetRouteByIDDesc,
      EdgeRoutesGetByIDReq.fromPartial(request),
      metadata
    );
  }

  CreateRoute(
    request: DeepPartial<EdgeRoutesCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<HTTPSEdge_Route> {
    return this.rpc.unary(
      DashEdgesCreateRouteDesc,
      EdgeRoutesCreateReq.fromPartial(request),
      metadata
    );
  }

  UpdateRoute(
    request: DeepPartial<EdgeRoutesUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<HTTPSEdge_Route> {
    return this.rpc.unary(
      DashEdgesUpdateRouteDesc,
      EdgeRoutesUpdateReq.fromPartial(request),
      metadata
    );
  }

  DeleteRoute(
    request: DeepPartial<EdgeRoutesDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashEdgesDeleteRouteDesc,
      EdgeRoutesDeleteReq.fromPartial(request),
      metadata
    );
  }

  DeleteRouteModule(
    request: DeepPartial<EdgeRoutesDeleteModuleReq>,
    metadata?: grpc.Metadata
  ): Promise<HTTPSEdge_Route> {
    return this.rpc.unary(
      DashEdgesDeleteRouteModuleDesc,
      EdgeRoutesDeleteModuleReq.fromPartial(request),
      metadata
    );
  }
}

export const DashEdgesDesc = {
  serviceName: "rpx.DashEdges",
};

export const DashEdgesGetByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByID",
  service: DashEdgesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EdgesGetByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Edge.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEdgesGetByAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetByAccount",
  service: DashEdgesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EdgesGetByAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EdgeList.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEdgesCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashEdgesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EdgesCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Edge.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEdgesUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashEdgesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EdgesUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Edge.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEdgesDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashEdgesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EdgesDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEdgesDeleteModuleDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteModule",
  service: DashEdgesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EdgesDeleteModuleReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Edge.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEdgesGetRouteByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetRouteByID",
  service: DashEdgesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EdgeRoutesGetByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...HTTPSEdge_Route.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEdgesCreateRouteDesc: UnaryMethodDefinitionish = {
  methodName: "CreateRoute",
  service: DashEdgesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EdgeRoutesCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...HTTPSEdge_Route.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEdgesUpdateRouteDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateRoute",
  service: DashEdgesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EdgeRoutesUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...HTTPSEdge_Route.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEdgesDeleteRouteDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteRoute",
  service: DashEdgesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EdgeRoutesDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEdgesDeleteRouteModuleDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteRouteModule",
  service: DashEdgesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EdgeRoutesDeleteModuleReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...HTTPSEdge_Route.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Backends
 * ----------------------
 */
export interface DashBackends {
  Create(
    request: DeepPartial<BackendCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Backend>;
  Update(
    request: DeepPartial<BackendUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Backend>;
  Delete(
    request: DeepPartial<BackendDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashBackendsClientImpl implements DashBackends {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<BackendCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Backend> {
    return this.rpc.unary(
      DashBackendsCreateDesc,
      BackendCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<BackendUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Backend> {
    return this.rpc.unary(
      DashBackendsUpdateDesc,
      BackendUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<BackendDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashBackendsDeleteDesc,
      BackendDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashBackendsDesc = {
  serviceName: "rpx.DashBackends",
};

export const DashBackendsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashBackendsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BackendCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Backend.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashBackendsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashBackendsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BackendUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Backend.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashBackendsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashBackendsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BackendDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Certificate Authorities
 * ----------------------
 */
export interface DashCAs {
  Create(
    request: DeepPartial<CAsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<CA>;
  Update(
    request: DeepPartial<CAsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<CA>;
  Delete(
    request: DeepPartial<CAsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<CA>;
}

export class DashCAsClientImpl implements DashCAs {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<CAsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<CA> {
    return this.rpc.unary(
      DashCAsCreateDesc,
      CAsCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<CAsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<CA> {
    return this.rpc.unary(
      DashCAsUpdateDesc,
      CAsUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<CAsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<CA> {
    return this.rpc.unary(
      DashCAsDeleteDesc,
      CAsDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashCAsDesc = {
  serviceName: "rpx.DashCAs",
};

export const DashCAsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CAsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...CA.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashCAsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CAsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...CA.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashCAsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CAsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...CA.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * SSH Certificate Authorities
 * ----------------------
 */
export interface DashSSHCAs {
  Create(
    request: DeepPartial<SSHCAsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA>;
  Update(
    request: DeepPartial<SSHCAsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA>;
  Delete(
    request: DeepPartial<SSHCAsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA>;
}

export class DashSSHCAsClientImpl implements DashSSHCAs {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Create(
    request: DeepPartial<SSHCAsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA> {
    return this.rpc.unary(
      DashSSHCAsCreateDesc,
      SSHCAsCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<SSHCAsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA> {
    return this.rpc.unary(
      DashSSHCAsUpdateDesc,
      SSHCAsUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<SSHCAsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA> {
    return this.rpc.unary(
      DashSSHCAsDeleteDesc,
      SSHCAsDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashSSHCAsDesc = {
  serviceName: "rpx.DashSSHCAs",
};

export const DashSSHCAsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashSSHCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SSHCAsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SSHCA.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashSSHCAsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashSSHCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SSHCAsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SSHCA.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashSSHCAsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashSSHCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SSHCAsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SSHCA.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * TLS Certificates
 * ----------------------
 */
export interface DashCerts {
  Create(
    request: DeepPartial<CertsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cert>;
  Delete(
    request: DeepPartial<CertsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Cert>;
  Update(
    request: DeepPartial<CertsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cert>;
  ParsePEM(
    request: DeepPartial<CertsParsePEMReq>,
    metadata?: grpc.Metadata
  ): Promise<CertsParsePEMResp>;
}

export class DashCertsClientImpl implements DashCerts {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Delete = this.Delete.bind(this);
    this.Update = this.Update.bind(this);
    this.ParsePEM = this.ParsePEM.bind(this);
  }

  Create(
    request: DeepPartial<CertsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cert> {
    return this.rpc.unary(
      DashCertsCreateDesc,
      CertsCreateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<CertsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Cert> {
    return this.rpc.unary(
      DashCertsDeleteDesc,
      CertsDeleteReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<CertsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Cert> {
    return this.rpc.unary(
      DashCertsUpdateDesc,
      CertsUpdateReq.fromPartial(request),
      metadata
    );
  }

  ParsePEM(
    request: DeepPartial<CertsParsePEMReq>,
    metadata?: grpc.Metadata
  ): Promise<CertsParsePEMResp> {
    return this.rpc.unary(
      DashCertsParsePEMDesc,
      CertsParsePEMReq.fromPartial(request),
      metadata
    );
  }
}

export const DashCertsDesc = {
  serviceName: "rpx.DashCerts",
};

export const DashCertsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashCertsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CertsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Cert.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashCertsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashCertsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CertsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Cert.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashCertsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashCertsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CertsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Cert.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashCertsParsePEMDesc: UnaryMethodDefinitionish = {
  methodName: "ParsePEM",
  service: DashCertsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CertsParsePEMReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...CertsParsePEMResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Tunnel Sessions
 * ----------------------
 */
export interface DashTunnelSessions {
  GetByAccount(
    request: DeepPartial<DashGetTunnelSessionsByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<DashGetTunnelSessionsByAccountResp>;
  Stop(
    request: DeepPartial<SessionsGlobalStopReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Restart(
    request: DeepPartial<SessionsGlobalRestartReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Update(
    request: DeepPartial<SessionsGlobalUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashTunnelSessionsClientImpl implements DashTunnelSessions {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetByAccount = this.GetByAccount.bind(this);
    this.Stop = this.Stop.bind(this);
    this.Restart = this.Restart.bind(this);
    this.Update = this.Update.bind(this);
  }

  GetByAccount(
    request: DeepPartial<DashGetTunnelSessionsByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<DashGetTunnelSessionsByAccountResp> {
    return this.rpc.unary(
      DashTunnelSessionsGetByAccountDesc,
      DashGetTunnelSessionsByAccountReq.fromPartial(request),
      metadata
    );
  }

  Stop(
    request: DeepPartial<SessionsGlobalStopReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashTunnelSessionsStopDesc,
      SessionsGlobalStopReq.fromPartial(request),
      metadata
    );
  }

  Restart(
    request: DeepPartial<SessionsGlobalRestartReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashTunnelSessionsRestartDesc,
      SessionsGlobalRestartReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<SessionsGlobalUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashTunnelSessionsUpdateDesc,
      SessionsGlobalUpdateReq.fromPartial(request),
      metadata
    );
  }
}

export const DashTunnelSessionsDesc = {
  serviceName: "rpx.DashTunnelSessions",
};

export const DashTunnelSessionsGetByAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetByAccount",
  service: DashTunnelSessionsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashGetTunnelSessionsByAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DashGetTunnelSessionsByAccountResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashTunnelSessionsStopDesc: UnaryMethodDefinitionish = {
  methodName: "Stop",
  service: DashTunnelSessionsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SessionsGlobalStopReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashTunnelSessionsRestartDesc: UnaryMethodDefinitionish = {
  methodName: "Restart",
  service: DashTunnelSessionsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SessionsGlobalRestartReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashTunnelSessionsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashTunnelSessionsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SessionsGlobalUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Event Streams
 * ----------------------
 */
export interface DashEventStreams {
  GetByID(
    request: DeepPartial<EventStreamGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<EventStream>;
  Create(
    request: DeepPartial<EventStreamCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventStream>;
  Update(
    request: DeepPartial<EventStreamUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventStream>;
  Delete(
    request: DeepPartial<EventStreamDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashEventStreamsClientImpl implements DashEventStreams {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetByID = this.GetByID.bind(this);
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  GetByID(
    request: DeepPartial<EventStreamGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<EventStream> {
    return this.rpc.unary(
      DashEventStreamsGetByIDDesc,
      EventStreamGetByIDReq.fromPartial(request),
      metadata
    );
  }

  Create(
    request: DeepPartial<EventStreamCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventStream> {
    return this.rpc.unary(
      DashEventStreamsCreateDesc,
      EventStreamCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<EventStreamUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventStream> {
    return this.rpc.unary(
      DashEventStreamsUpdateDesc,
      EventStreamUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<EventStreamDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashEventStreamsDeleteDesc,
      EventStreamDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashEventStreamsDesc = {
  serviceName: "rpx.DashEventStreams",
};

export const DashEventStreamsGetByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByID",
  service: DashEventStreamsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventStreamGetByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EventStream.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEventStreamsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashEventStreamsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventStreamCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EventStream.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEventStreamsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashEventStreamsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventStreamUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EventStream.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEventStreamsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashEventStreamsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventStreamDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Event Subscriptions
 * ----------------------
 */
export interface DashEventSubscriptions {
  GetByID(
    request: DeepPartial<EventSubscriptionGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<EventSubscription>;
  Create(
    request: DeepPartial<EventSubscriptionCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventSubscription>;
  Update(
    request: DeepPartial<EventSubscriptionUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventSubscription>;
  Delete(
    request: DeepPartial<EventSubscriptionDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashEventSubscriptionsClientImpl
  implements DashEventSubscriptions
{
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetByID = this.GetByID.bind(this);
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  GetByID(
    request: DeepPartial<EventSubscriptionGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<EventSubscription> {
    return this.rpc.unary(
      DashEventSubscriptionsGetByIDDesc,
      EventSubscriptionGetByIDReq.fromPartial(request),
      metadata
    );
  }

  Create(
    request: DeepPartial<EventSubscriptionCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventSubscription> {
    return this.rpc.unary(
      DashEventSubscriptionsCreateDesc,
      EventSubscriptionCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<EventSubscriptionUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventSubscription> {
    return this.rpc.unary(
      DashEventSubscriptionsUpdateDesc,
      EventSubscriptionUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<EventSubscriptionDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashEventSubscriptionsDeleteDesc,
      EventSubscriptionDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashEventSubscriptionsDesc = {
  serviceName: "rpx.DashEventSubscriptions",
};

export const DashEventSubscriptionsGetByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByID",
  service: DashEventSubscriptionsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventSubscriptionGetByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EventSubscription.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEventSubscriptionsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashEventSubscriptionsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventSubscriptionCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EventSubscription.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEventSubscriptionsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashEventSubscriptionsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventSubscriptionUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EventSubscription.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEventSubscriptionsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashEventSubscriptionsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventSubscriptionDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Event Destinations
 * ----------------------
 */
export interface DashEventDestinations {
  GetByID(
    request: DeepPartial<EventDestinationGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<EventDestination>;
  Create(
    request: DeepPartial<EventDestinationCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventDestination>;
  Update(
    request: DeepPartial<EventDestinationUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventDestination>;
  Delete(
    request: DeepPartial<EventDestinationDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashEventDestinationsClientImpl implements DashEventDestinations {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetByID = this.GetByID.bind(this);
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  GetByID(
    request: DeepPartial<EventDestinationGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<EventDestination> {
    return this.rpc.unary(
      DashEventDestinationsGetByIDDesc,
      EventDestinationGetByIDReq.fromPartial(request),
      metadata
    );
  }

  Create(
    request: DeepPartial<EventDestinationCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventDestination> {
    return this.rpc.unary(
      DashEventDestinationsCreateDesc,
      EventDestinationCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<EventDestinationUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<EventDestination> {
    return this.rpc.unary(
      DashEventDestinationsUpdateDesc,
      EventDestinationUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<EventDestinationDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashEventDestinationsDeleteDesc,
      EventDestinationDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const DashEventDestinationsDesc = {
  serviceName: "rpx.DashEventDestinations",
};

export const DashEventDestinationsGetByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByID",
  service: DashEventDestinationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventDestinationGetByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EventDestination.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEventDestinationsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashEventDestinationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventDestinationCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EventDestination.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEventDestinationsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashEventDestinationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventDestinationUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EventDestination.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEventDestinationsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashEventDestinationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventDestinationDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export interface DashEventDestinationChecker {
  Check(
    request: DeepPartial<EventDestinationCheckReq>,
    metadata?: grpc.Metadata
  ): Promise<EventDestinationCheckResp>;
}

export class DashEventDestinationCheckerClientImpl
  implements DashEventDestinationChecker
{
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Check = this.Check.bind(this);
  }

  Check(
    request: DeepPartial<EventDestinationCheckReq>,
    metadata?: grpc.Metadata
  ): Promise<EventDestinationCheckResp> {
    return this.rpc.unary(
      DashEventDestinationCheckerCheckDesc,
      EventDestinationCheckReq.fromPartial(request),
      metadata
    );
  }
}

export const DashEventDestinationCheckerDesc = {
  serviceName: "rpx.DashEventDestinationChecker",
};

export const DashEventDestinationCheckerCheckDesc: UnaryMethodDefinitionish = {
  methodName: "Check",
  service: DashEventDestinationCheckerDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventDestinationCheckReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EventDestinationCheckResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * ----------------------
 * Agent Ingresses
 * ----------------------
 */
export interface DashAgentIngresses {
  Create(
    request: DeepPartial<AgentIngressesCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<AgentIngress>;
  Update(
    request: DeepPartial<AgentIngressesUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<AgentIngress>;
  Delete(
    request: DeepPartial<AgentIngressesDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<AgentIngress>;
  VerifyNS(
    request: DeepPartial<AgentIngressesVerifyNSReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class DashAgentIngressesClientImpl implements DashAgentIngresses {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
    this.VerifyNS = this.VerifyNS.bind(this);
  }

  Create(
    request: DeepPartial<AgentIngressesCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<AgentIngress> {
    return this.rpc.unary(
      DashAgentIngressesCreateDesc,
      AgentIngressesCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<AgentIngressesUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<AgentIngress> {
    return this.rpc.unary(
      DashAgentIngressesUpdateDesc,
      AgentIngressesUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<AgentIngressesDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<AgentIngress> {
    return this.rpc.unary(
      DashAgentIngressesDeleteDesc,
      AgentIngressesDeleteReq.fromPartial(request),
      metadata
    );
  }

  VerifyNS(
    request: DeepPartial<AgentIngressesVerifyNSReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      DashAgentIngressesVerifyNSDesc,
      AgentIngressesVerifyNSReq.fromPartial(request),
      metadata
    );
  }
}

export const DashAgentIngressesDesc = {
  serviceName: "rpx.DashAgentIngresses",
};

export const DashAgentIngressesCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: DashAgentIngressesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AgentIngressesCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AgentIngress.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashAgentIngressesUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: DashAgentIngressesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AgentIngressesUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AgentIngress.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashAgentIngressesDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: DashAgentIngressesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AgentIngressesDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AgentIngress.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashAgentIngressesVerifyNSDesc: UnaryMethodDefinitionish = {
  methodName: "VerifyNS",
  service: DashAgentIngressesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AgentIngressesVerifyNSReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

/**
 * -------------------------
 * Endpoint Status Queries
 * -------------------------
 */
export interface DashEndpointStatus {
  GetEndpointsByAccount(
    request: DeepPartial<DashGetEndpointsByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<DashGetEndpointsByAccountResp>;
  GetTunnelsByAccount(
    request: DeepPartial<DashGetTunnelsByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<DashGetTunnelsByAccountResp>;
  GetTunnelByID(
    request: DeepPartial<DashGetTunnelByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<DashTunnel>;
  GetTunnelsForBackend(
    request: DeepPartial<DashGetTunnelsForBackendReq>,
    metadata?: grpc.Metadata
  ): Promise<DashGetTunnelsForBackendResp>;
  GetTunnelsByLabels(
    request: DeepPartial<DashGetTunnelsByLabelsReq>,
    metadata?: grpc.Metadata
  ): Promise<DashGetTunnelsByLabelsResp>;
}

export class DashEndpointStatusClientImpl implements DashEndpointStatus {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetEndpointsByAccount = this.GetEndpointsByAccount.bind(this);
    this.GetTunnelsByAccount = this.GetTunnelsByAccount.bind(this);
    this.GetTunnelByID = this.GetTunnelByID.bind(this);
    this.GetTunnelsForBackend = this.GetTunnelsForBackend.bind(this);
    this.GetTunnelsByLabels = this.GetTunnelsByLabels.bind(this);
  }

  GetEndpointsByAccount(
    request: DeepPartial<DashGetEndpointsByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<DashGetEndpointsByAccountResp> {
    return this.rpc.unary(
      DashEndpointStatusGetEndpointsByAccountDesc,
      DashGetEndpointsByAccountReq.fromPartial(request),
      metadata
    );
  }

  GetTunnelsByAccount(
    request: DeepPartial<DashGetTunnelsByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<DashGetTunnelsByAccountResp> {
    return this.rpc.unary(
      DashEndpointStatusGetTunnelsByAccountDesc,
      DashGetTunnelsByAccountReq.fromPartial(request),
      metadata
    );
  }

  GetTunnelByID(
    request: DeepPartial<DashGetTunnelByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<DashTunnel> {
    return this.rpc.unary(
      DashEndpointStatusGetTunnelByIDDesc,
      DashGetTunnelByIDReq.fromPartial(request),
      metadata
    );
  }

  GetTunnelsForBackend(
    request: DeepPartial<DashGetTunnelsForBackendReq>,
    metadata?: grpc.Metadata
  ): Promise<DashGetTunnelsForBackendResp> {
    return this.rpc.unary(
      DashEndpointStatusGetTunnelsForBackendDesc,
      DashGetTunnelsForBackendReq.fromPartial(request),
      metadata
    );
  }

  GetTunnelsByLabels(
    request: DeepPartial<DashGetTunnelsByLabelsReq>,
    metadata?: grpc.Metadata
  ): Promise<DashGetTunnelsByLabelsResp> {
    return this.rpc.unary(
      DashEndpointStatusGetTunnelsByLabelsDesc,
      DashGetTunnelsByLabelsReq.fromPartial(request),
      metadata
    );
  }
}

export const DashEndpointStatusDesc = {
  serviceName: "rpx.DashEndpointStatus",
};

export const DashEndpointStatusGetEndpointsByAccountDesc: UnaryMethodDefinitionish =
  {
    methodName: "GetEndpointsByAccount",
    service: DashEndpointStatusDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return DashGetEndpointsByAccountReq.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...DashGetEndpointsByAccountResp.decode(data),
          toObject() {
            return this;
          },
        };
      },
    } as any,
  };

export const DashEndpointStatusGetTunnelsByAccountDesc: UnaryMethodDefinitionish =
  {
    methodName: "GetTunnelsByAccount",
    service: DashEndpointStatusDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return DashGetTunnelsByAccountReq.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...DashGetTunnelsByAccountResp.decode(data),
          toObject() {
            return this;
          },
        };
      },
    } as any,
  };

export const DashEndpointStatusGetTunnelByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetTunnelByID",
  service: DashEndpointStatusDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DashGetTunnelByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...DashTunnel.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const DashEndpointStatusGetTunnelsForBackendDesc: UnaryMethodDefinitionish =
  {
    methodName: "GetTunnelsForBackend",
    service: DashEndpointStatusDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return DashGetTunnelsForBackendReq.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...DashGetTunnelsForBackendResp.decode(data),
          toObject() {
            return this;
          },
        };
      },
    } as any,
  };

export const DashEndpointStatusGetTunnelsByLabelsDesc: UnaryMethodDefinitionish =
  {
    methodName: "GetTunnelsByLabels",
    service: DashEndpointStatusDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return DashGetTunnelsByLabelsReq.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...DashGetTunnelsByLabelsResp.decode(data),
          toObject() {
            return this;
          },
        };
      },
    } as any,
  };

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
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
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
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
