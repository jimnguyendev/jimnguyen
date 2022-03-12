// generated by nd gen routes, do not modify
import { useMatch } from 'react-router-dom';

import type { Hash } from './types';

type RouteMatchOptions = {
  caseSensitive?: boolean;
  matchSubroutes?: boolean;
};

type UseMatchOptions = {
  caseSensitive?: boolean;
  end?: boolean;
};

const mapToUseMatch = (
  options?: RouteMatchOptions
): UseMatchOptions | undefined => {
  if (!options) {
    return undefined;
  }

  return {
    end: options.matchSubroutes ? false : undefined,
    caseSensitive: options.caseSensitive,
  };
};

export enum UnauthRoutes {
  App = '/',
  ConfirmOauthSignup = '/signup/oauth/confirm',
  EmailConfirmation = '/email/confirmation',
  InvitationRedeem = '/invitation',
  Login = '/login',
  LoginGithub = '/login/github',
  LoginGoogle = '/login/google',
  Logout = '/logout',
  PasswordChange = '/password/change',
  PasswordReset = '/password/reset',
  Signup = '/signup',
}

export const getUnauthPath = (route: UnauthRoutes, hash?: Hash) =>
  `${route}${hash}`;

export const getUnauthUrl = (
  hostname: string,
  route: UnauthRoutes,
  hash?: Hash
) => `${hostname}${getUnauthPath(route, hash)}`;

export const useIsAtUnauthRoute = (
  path: UnauthRoutes,
  options?: RouteMatchOptions
): boolean => Boolean(useMatch({ path, ...mapToUseMatch(options) }));

export enum AuthRoutes {
  Api = '/api',
  ApiIpRestrictions = '/api/ip-restrictions',
  ApiKeys = '/api/keys',
  ApiKeysNew = '/api/keys/new',
  App = '/',
  AwsAuthInfo = '/aws-auth-info',
  Beta = '/beta',
  BetaEnroll = '/beta/enroll',
  BetaStatus = '/beta/status',
  Billing = '/billing',
  BillingEmailRecipients = '/billing/email-recipients',
  BillingPaymentMethod = '/billing/payment-method',
  BillingPlan = '/billing/plan',
  BillingPlanFaq = '/billing/plan/faq',
  BillingPlanOld = '/billing/plan/old',
  BillingReceiptDetails = '/billing/receipt-details',
  BillingSubscription = '/billing/subscription',
  BillingSubscriptionCancel = '/billing/subscription/cancel',
  BillingSubscriptionCheckout = '/billing/subscription/checkout',
  BillingSubscriptionCheckoutSuccess = '/billing/subscription/checkout/success',
  BillingSubscriptionNewPricing = '/billing/subscription/new-pricing',
  CloudEdge = '/cloud-edge',
  CloudEdgeConfigs = '/cloud-edge/configs',
  CloudEdgeConfigsCreate = '/cloud-edge/configs/create',
  CloudEdgeConfigsNew = '/cloud-edge/configs/new',
  CloudEdgeDomains = '/cloud-edge/domains',
  CloudEdgeDomainsNew = '/cloud-edge/domains/new',
  CloudEdgeEdges = '/cloud-edge/edges',
  CloudEdgeEdgesNew = '/cloud-edge/edges/new',
  CloudEdgeIpRestrictions = '/cloud-edge/ip-restrictions',
  CloudEdgeStatus = '/cloud-edge/status',
  CloudEdgeTcpAddresses = '/cloud-edge/tcp-addresses',
  CloudEdgeTcpAddressesNew = '/cloud-edge/tcp-addresses/new',
  Events = '/events',
  EventsDestinations = '/events/destinations',
  EventsDestinationsNew = '/events/destinations/new',
  EventsStreams = '/events/streams',
  EventsStreamsNew = '/events/streams/new',
  EventsSubscriptions = '/events/subscriptions',
  EventsSubscriptionsNew = '/events/subscriptions/new',
  GetStarted = '/get-started',
  GetStartedLink = '/get-started/link',
  GetStartedSetup = '/get-started/setup',
  GetStartedTutorials = '/get-started/tutorials',
  GetStartedYourAuthtoken = '/get-started/your-authtoken',
  IpPolicies = '/ip-policies',
  IpPoliciesNew = '/ip-policies/new',
  Settings = '/settings',
  SettingsAccount = '/settings/account',
  SettingsAccountDelete = '/settings/account/delete',
  SettingsIpRestrictions = '/settings/ip-restrictions',
  SettingsSso = '/settings/sso',
  Team = '/team',
  TeamMembers = '/team/members',
  TeamMembersNew = '/team/members/new',
  Tls = '/tls',
  TlsCertAuthorities = '/tls/cert-authorities',
  TlsCertAuthoritiesNew = '/tls/cert-authorities/new',
  TlsTlsCerts = '/tls/tls-certs',
  TlsTlsCertsNew = '/tls/tls-certs/new',
  Tunnels = '/tunnels',
  TunnelsAgents = '/tunnels/agents',
  TunnelsAuthtokens = '/tunnels/authtokens',
  TunnelsAuthtokensNew = '/tunnels/authtokens/new',
  TunnelsIngress = '/tunnels/ingress',
  TunnelsIngressNew = '/tunnels/ingress/new',
  TunnelsIpRestrictions = '/tunnels/ip-restrictions',
  TunnelsSshKeys = '/tunnels/ssh-keys',
  TunnelsSshKeysNew = '/tunnels/ssh-keys/new',
  ApiKeysEdit = '/api/keys/:apiKeyId',
  CloudEdgeConfigsEdit = '/cloud-edge/configs/:endpointConfigId',
  CloudEdgeDomainsEdit = '/cloud-edge/domains/:domainId',
  CloudEdgeDomainsViewDnsTargets = '/cloud-edge/domains/:domainId/dns-targets',
  CloudEdgeDomainsViewStartATunnel = '/cloud-edge/domains/:domainId/start-a-tunnel',
  CloudEdgeEdgesBackends = '/cloud-edge/edges/:edgeId/backends',
  CloudEdgeEdgesBackendsEdit = '/cloud-edge/edges/:edgeId/backends/:backendId',
  CloudEdgeEdgesBackendsNew = '/cloud-edge/edges/:edgeId/backends/new',
  CloudEdgeEdgesBackendsViewStartATunnel = '/cloud-edge/edges/:edgeId/backends/:backendId/start-a-tunnel',
  CloudEdgeEdgesEdit = '/cloud-edge/edges/:edgeId',
  CloudEdgeEdgesRoutes = '/cloud-edge/edges/:edgeId/routes',
  CloudEdgeEdgesRoutesBackends = '/cloud-edge/edges/:edgeId/routes/:routeId/backends',
  CloudEdgeEdgesRoutesBackendsEdit = '/cloud-edge/edges/:edgeId/routes/:routeId/backends/:backendId',
  CloudEdgeEdgesRoutesBackendsNew = '/cloud-edge/edges/:edgeId/routes/:routeId/backends/new',
  CloudEdgeEdgesRoutesBackendsViewStartATunnel = '/cloud-edge/edges/:edgeId/routes/:routeId/backends/:backendId/start-a-tunnel',
  CloudEdgeEdgesRoutesEdit = '/cloud-edge/edges/:edgeId/routes/:routeId',
  CloudEdgeEdgesRoutesNew = '/cloud-edge/edges/:edgeId/routes/new',
  CloudEdgeStatusViewEndpoint = '/cloud-edge/status/:endpointId',
  CloudEdgeTcpAddressesEdit = '/cloud-edge/tcp-addresses/:tcpAddrId',
  CloudEdgeTcpAddressesViewStartATunnel = '/cloud-edge/tcp-addresses/:tcpAddrId/start-a-tunnel',
  EventsDestinationsEdit = '/events/destinations/:destinationId',
  EventsStreamsEdit = '/events/streams/:streamId',
  EventsSubscriptionsEdit = '/events/subscriptions/:subscriptionId',
  IpPoliciesEdit = '/ip-policies/:ipPolicyId',
  TeamMembersEdit = '/team/members/:memberId',
  TlsCertAuthoritiesEdit = '/tls/cert-authorities/:certAuthorityId',
  TlsTlsCertsEdit = '/tls/tls-certs/:certId',
  TunnelsAgentsViewSession = '/tunnels/agents/:sessionId',
  TunnelsAgentsViewSessionTunnel = '/tunnels/agents/:sessionId/tunnel/:tunnelId',
  TunnelsAuthtokensEdit = '/tunnels/authtokens/:authtokenId',
  TunnelsIngressEdit = '/tunnels/ingress/:ingressId',
  TunnelsSshKeysEdit = '/tunnels/ssh-keys/:sshKeyId',
}

export const getAuthPath = (route: AuthRoutes, hash?: Hash) =>
  `${route}${hash}`;

export const getAuthUrl = (hostname: string, route: AuthRoutes, hash?: Hash) =>
  `${hostname}${getAuthPath(route, hash)}`;

export const useIsAtAuthRoute = (
  path: AuthRoutes,
  options?: RouteMatchOptions
): boolean => Boolean(useMatch({ path, ...mapToUseMatch(options) }));

export enum UserRoutes {
  Accounts = '/user/accounts',
  App = '/user',
  Settings = '/user/settings',
  SettingsDelete = '/user/settings/delete',
}

export const getUserPath = (route: UserRoutes, hash?: Hash) =>
  `${route}${hash}`;

export const getUserUrl = (hostname: string, route: UserRoutes, hash?: Hash) =>
  `${hostname}${getUserPath(route, hash)}`;

export const useIsAtUserRoute = (
  path: UserRoutes,
  options?: RouteMatchOptions
): boolean => Boolean(useMatch({ path, ...mapToUseMatch(options) }));

export type ApiKeysEditParams = {
  apiKeyId?: string;
};

export type CloudEdgeConfigsEditParams = {
  endpointConfigId?: string;
};

export type CloudEdgeDomainsEditParams = {
  domainId?: string;
};

export type CloudEdgeDomainsViewDnsTargetsParams = {
  domainId?: string;
};

export type CloudEdgeDomainsViewStartATunnelParams = {
  domainId?: string;
};

export type CloudEdgeEdgesBackendsParams = {
  edgeId?: string;
};

export type CloudEdgeEdgesBackendsEditParams = {
  edgeId?: string;
  backendId?: string;
};

export type CloudEdgeEdgesBackendsNewParams = {
  edgeId?: string;
};

export type CloudEdgeEdgesBackendsViewStartATunnelParams = {
  edgeId?: string;
  backendId?: string;
};

export type CloudEdgeEdgesEditParams = {
  edgeId?: string;
};

export type CloudEdgeEdgesRoutesParams = {
  edgeId?: string;
};

export type CloudEdgeEdgesRoutesBackendsParams = {
  edgeId?: string;
  routeId?: string;
};

export type CloudEdgeEdgesRoutesBackendsEditParams = {
  edgeId?: string;
  routeId?: string;
  backendId?: string;
};

export type CloudEdgeEdgesRoutesBackendsNewParams = {
  edgeId?: string;
  routeId?: string;
};

export type CloudEdgeEdgesRoutesBackendsViewStartATunnelParams = {
  edgeId?: string;
  routeId?: string;
  backendId?: string;
};

export type CloudEdgeEdgesRoutesEditParams = {
  edgeId?: string;
  routeId?: string;
};

export type CloudEdgeEdgesRoutesNewParams = {
  edgeId?: string;
};

export type CloudEdgeStatusViewEndpointParams = {
  endpointId?: string;
};

export type CloudEdgeTcpAddressesEditParams = {
  tcpAddrId?: string;
};

export type CloudEdgeTcpAddressesViewStartATunnelParams = {
  tcpAddrId?: string;
};

export type EventsDestinationsEditParams = {
  destinationId?: string;
};

export type EventsStreamsEditParams = {
  streamId?: string;
};

export type EventsSubscriptionsEditParams = {
  subscriptionId?: string;
};

export type IpPoliciesEditParams = {
  ipPolicyId?: string;
};

export type TeamMembersEditParams = {
  memberId?: string;
};

export type TlsCertAuthoritiesEditParams = {
  certAuthorityId?: string;
};

export type TlsTlsCertsEditParams = {
  certId?: string;
};

export type TunnelsAgentsViewSessionParams = {
  sessionId?: string;
};

export type TunnelsAgentsViewSessionTunnelParams = {
  sessionId?: string;
  tunnelId?: string;
};

export type TunnelsAuthtokensEditParams = {
  authtokenId?: string;
};

export type TunnelsIngressEditParams = {
  ingressId?: string;
};

export type TunnelsSshKeysEditParams = {
  sshKeyId?: string;
};

export const makeApiKeysEditPath = (apiKeyId: string | undefined) =>
  `/api/keys/${apiKeyId ?? ''}`;

export const makeCloudEdgeConfigsEditPath = (
  endpointConfigId: string | undefined
) => `/cloud-edge/configs/${endpointConfigId ?? ''}`;

export const makeCloudEdgeDomainsEditPath = (domainId: string | undefined) =>
  `/cloud-edge/domains/${domainId ?? ''}`;

export const makeCloudEdgeDomainsViewDnsTargetsPath = (
  domainId: string | undefined
) => `/cloud-edge/domains/${domainId ?? ''}/dns-targets`;

export const makeCloudEdgeDomainsViewStartATunnelPath = (
  domainId: string | undefined
) => `/cloud-edge/domains/${domainId ?? ''}/start-a-tunnel`;

export const makeCloudEdgeEdgesBackendsPath = (edgeId: string | undefined) =>
  `/cloud-edge/edges/${edgeId ?? ''}/backends`;

export const makeCloudEdgeEdgesBackendsEditPath = (
  edgeId: string | undefined,
  backendId: string | undefined
) => `/cloud-edge/edges/${edgeId ?? ''}/backends/${backendId ?? ''}`;

export const makeCloudEdgeEdgesBackendsNewPath = (edgeId: string | undefined) =>
  `/cloud-edge/edges/${edgeId ?? ''}/backends/new`;

export const makeCloudEdgeEdgesBackendsViewStartATunnelPath = (
  edgeId: string | undefined,
  backendId: string | undefined
) =>
  `/cloud-edge/edges/${edgeId ?? ''}/backends/${
    backendId ?? ''
  }/start-a-tunnel`;

export const makeCloudEdgeEdgesEditPath = (edgeId: string | undefined) =>
  `/cloud-edge/edges/${edgeId ?? ''}`;

export const makeCloudEdgeEdgesRoutesPath = (edgeId: string | undefined) =>
  `/cloud-edge/edges/${edgeId ?? ''}/routes`;

export const makeCloudEdgeEdgesRoutesBackendsPath = (
  edgeId: string | undefined,
  routeId: string | undefined
) => `/cloud-edge/edges/${edgeId ?? ''}/routes/${routeId ?? ''}/backends`;

export const makeCloudEdgeEdgesRoutesBackendsEditPath = (
  edgeId: string | undefined,
  routeId: string | undefined,
  backendId: string | undefined
) =>
  `/cloud-edge/edges/${edgeId ?? ''}/routes/${routeId ?? ''}/backends/${
    backendId ?? ''
  }`;

export const makeCloudEdgeEdgesRoutesBackendsNewPath = (
  edgeId: string | undefined,
  routeId: string | undefined
) => `/cloud-edge/edges/${edgeId ?? ''}/routes/${routeId ?? ''}/backends/new`;

export const makeCloudEdgeEdgesRoutesBackendsViewStartATunnelPath = (
  edgeId: string | undefined,
  routeId: string | undefined,
  backendId: string | undefined
) =>
  `/cloud-edge/edges/${edgeId ?? ''}/routes/${routeId ?? ''}/backends/${
    backendId ?? ''
  }/start-a-tunnel`;

export const makeCloudEdgeEdgesRoutesEditPath = (
  edgeId: string | undefined,
  routeId: string | undefined
) => `/cloud-edge/edges/${edgeId ?? ''}/routes/${routeId ?? ''}`;

export const makeCloudEdgeEdgesRoutesNewPath = (edgeId: string | undefined) =>
  `/cloud-edge/edges/${edgeId ?? ''}/routes/new`;

export const makeCloudEdgeStatusViewEndpointPath = (
  endpointId: string | undefined
) => `/cloud-edge/status/${endpointId ?? ''}`;

export const makeCloudEdgeTcpAddressesEditPath = (
  tcpAddrId: string | undefined
) => `/cloud-edge/tcp-addresses/${tcpAddrId ?? ''}`;

export const makeCloudEdgeTcpAddressesViewStartATunnelPath = (
  tcpAddrId: string | undefined
) => `/cloud-edge/tcp-addresses/${tcpAddrId ?? ''}/start-a-tunnel`;

export const makeEventsDestinationsEditPath = (
  destinationId: string | undefined
) => `/events/destinations/${destinationId ?? ''}`;

export const makeEventsStreamsEditPath = (streamId: string | undefined) =>
  `/events/streams/${streamId ?? ''}`;

export const makeEventsSubscriptionsEditPath = (
  subscriptionId: string | undefined
) => `/events/subscriptions/${subscriptionId ?? ''}`;

export const makeIpPoliciesEditPath = (ipPolicyId: string | undefined) =>
  `/ip-policies/${ipPolicyId ?? ''}`;

export const makeTeamMembersEditPath = (memberId: string | undefined) =>
  `/team/members/${memberId ?? ''}`;

export const makeTlsCertAuthoritiesEditPath = (
  certAuthorityId: string | undefined
) => `/tls/cert-authorities/${certAuthorityId ?? ''}`;

export const makeTlsTlsCertsEditPath = (certId: string | undefined) =>
  `/tls/tls-certs/${certId ?? ''}`;

export const makeTunnelsAgentsViewSessionPath = (
  sessionId: string | undefined
) => `/tunnels/agents/${sessionId ?? ''}`;

export const makeTunnelsAgentsViewSessionTunnelPath = (
  sessionId: string | undefined,
  tunnelId: string | undefined
) => `/tunnels/agents/${sessionId ?? ''}/tunnel/${tunnelId ?? ''}`;

export const makeTunnelsAuthtokensEditPath = (
  authtokenId: string | undefined
) => `/tunnels/authtokens/${authtokenId ?? ''}`;

export const makeTunnelsIngressEditPath = (ingressId: string | undefined) =>
  `/tunnels/ingress/${ingressId ?? ''}`;

export const makeTunnelsSshKeysEditPath = (sshKeyId: string | undefined) =>
  `/tunnels/ssh-keys/${sshKeyId ?? ''}`;

export const makeSearchQuery = (feature: AuthRoutes, id: string) =>
  `${feature}?q=${id}`;