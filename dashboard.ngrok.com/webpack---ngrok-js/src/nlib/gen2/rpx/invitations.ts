// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Invitation } from "../rpx/model_invitation";
import { BrowserHeaders } from "browser-headers";
import { ID } from "../pb/types";
import { MembershipPermissions } from "../rpx/model_membership";

export const protobufPackage = "rpx";

export interface InvitationsCreateReq {
  inviterId: ID | undefined;
  accountId: ID | undefined;
  email: string;
  membershipPermissions: MembershipPermissions | undefined;
}

export interface InvitationsCancelReq {
  invitationId: ID | undefined;
  accountId: ID | undefined;
}

export interface InvitationsGetByTokenReq {
  token: string;
}

export interface InvitationsRedeemReq {
  token: string;
  redeemerId: ID | undefined;
}

export interface InvitationsGetUnredeemedByAccountReq {
  accountId: ID | undefined;
}

export interface InvitationsGetUnredeemedByAccountResp {
  invitations: Invitation[];
}

export interface InvitationsGetByRedeemerReq {
  redeemerId: ID | undefined;
}

export interface InvitationsGetByRedeemerResp {
  invitations: Invitation[];
}

export interface InvitationsResendReq {
  invitationId: ID | undefined;
  accountId: ID | undefined;
}

export interface InvitationsUpdateReq {
  ID: ID | undefined;
  accountId: ID | undefined;
  membershipPermissions: MembershipPermissions | undefined;
}

const baseInvitationsCreateReq: object = { email: "" };

export const InvitationsCreateReq = {
  encode(
    message: InvitationsCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inviterId !== undefined) {
      ID.encode(message.inviterId, writer.uint32(34).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(42).fork()).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.membershipPermissions !== undefined) {
      MembershipPermissions.encode(
        message.membershipPermissions,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvitationsCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvitationsCreateReq } as InvitationsCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.inviterId = ID.decode(reader, reader.uint32());
          break;
        case 5:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.email = reader.string();
          break;
        case 6:
          message.membershipPermissions = MembershipPermissions.decode(
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

  fromPartial(object: DeepPartial<InvitationsCreateReq>): InvitationsCreateReq {
    const message = { ...baseInvitationsCreateReq } as InvitationsCreateReq;
    if (object.inviterId !== undefined && object.inviterId !== null) {
      message.inviterId = ID.fromPartial(object.inviterId);
    } else {
      message.inviterId = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (
      object.membershipPermissions !== undefined &&
      object.membershipPermissions !== null
    ) {
      message.membershipPermissions = MembershipPermissions.fromPartial(
        object.membershipPermissions
      );
    } else {
      message.membershipPermissions = undefined;
    }
    return message;
  },
};

const baseInvitationsCancelReq: object = {};

export const InvitationsCancelReq = {
  encode(
    message: InvitationsCancelReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.invitationId !== undefined) {
      ID.encode(message.invitationId, writer.uint32(26).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvitationsCancelReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvitationsCancelReq } as InvitationsCancelReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.invitationId = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvitationsCancelReq>): InvitationsCancelReq {
    const message = { ...baseInvitationsCancelReq } as InvitationsCancelReq;
    if (object.invitationId !== undefined && object.invitationId !== null) {
      message.invitationId = ID.fromPartial(object.invitationId);
    } else {
      message.invitationId = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseInvitationsGetByTokenReq: object = { token: "" };

export const InvitationsGetByTokenReq = {
  encode(
    message: InvitationsGetByTokenReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvitationsGetByTokenReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvitationsGetByTokenReq,
    } as InvitationsGetByTokenReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvitationsGetByTokenReq>
  ): InvitationsGetByTokenReq {
    const message = {
      ...baseInvitationsGetByTokenReq,
    } as InvitationsGetByTokenReq;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseInvitationsRedeemReq: object = { token: "" };

export const InvitationsRedeemReq = {
  encode(
    message: InvitationsRedeemReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.redeemerId !== undefined) {
      ID.encode(message.redeemerId, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvitationsRedeemReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvitationsRedeemReq } as InvitationsRedeemReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 4:
          message.redeemerId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvitationsRedeemReq>): InvitationsRedeemReq {
    const message = { ...baseInvitationsRedeemReq } as InvitationsRedeemReq;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.redeemerId !== undefined && object.redeemerId !== null) {
      message.redeemerId = ID.fromPartial(object.redeemerId);
    } else {
      message.redeemerId = undefined;
    }
    return message;
  },
};

const baseInvitationsGetUnredeemedByAccountReq: object = {};

export const InvitationsGetUnredeemedByAccountReq = {
  encode(
    message: InvitationsGetUnredeemedByAccountReq,
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
  ): InvitationsGetUnredeemedByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvitationsGetUnredeemedByAccountReq,
    } as InvitationsGetUnredeemedByAccountReq;
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
    object: DeepPartial<InvitationsGetUnredeemedByAccountReq>
  ): InvitationsGetUnredeemedByAccountReq {
    const message = {
      ...baseInvitationsGetUnredeemedByAccountReq,
    } as InvitationsGetUnredeemedByAccountReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseInvitationsGetUnredeemedByAccountResp: object = {};

export const InvitationsGetUnredeemedByAccountResp = {
  encode(
    message: InvitationsGetUnredeemedByAccountResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.invitations) {
      Invitation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvitationsGetUnredeemedByAccountResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvitationsGetUnredeemedByAccountResp,
    } as InvitationsGetUnredeemedByAccountResp;
    message.invitations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitations.push(Invitation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvitationsGetUnredeemedByAccountResp>
  ): InvitationsGetUnredeemedByAccountResp {
    const message = {
      ...baseInvitationsGetUnredeemedByAccountResp,
    } as InvitationsGetUnredeemedByAccountResp;
    message.invitations = [];
    if (object.invitations !== undefined && object.invitations !== null) {
      for (const e of object.invitations) {
        message.invitations.push(Invitation.fromPartial(e));
      }
    }
    return message;
  },
};

const baseInvitationsGetByRedeemerReq: object = {};

export const InvitationsGetByRedeemerReq = {
  encode(
    message: InvitationsGetByRedeemerReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.redeemerId !== undefined) {
      ID.encode(message.redeemerId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvitationsGetByRedeemerReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvitationsGetByRedeemerReq,
    } as InvitationsGetByRedeemerReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.redeemerId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvitationsGetByRedeemerReq>
  ): InvitationsGetByRedeemerReq {
    const message = {
      ...baseInvitationsGetByRedeemerReq,
    } as InvitationsGetByRedeemerReq;
    if (object.redeemerId !== undefined && object.redeemerId !== null) {
      message.redeemerId = ID.fromPartial(object.redeemerId);
    } else {
      message.redeemerId = undefined;
    }
    return message;
  },
};

const baseInvitationsGetByRedeemerResp: object = {};

export const InvitationsGetByRedeemerResp = {
  encode(
    message: InvitationsGetByRedeemerResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.invitations) {
      Invitation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvitationsGetByRedeemerResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInvitationsGetByRedeemerResp,
    } as InvitationsGetByRedeemerResp;
    message.invitations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitations.push(Invitation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvitationsGetByRedeemerResp>
  ): InvitationsGetByRedeemerResp {
    const message = {
      ...baseInvitationsGetByRedeemerResp,
    } as InvitationsGetByRedeemerResp;
    message.invitations = [];
    if (object.invitations !== undefined && object.invitations !== null) {
      for (const e of object.invitations) {
        message.invitations.push(Invitation.fromPartial(e));
      }
    }
    return message;
  },
};

const baseInvitationsResendReq: object = {};

export const InvitationsResendReq = {
  encode(
    message: InvitationsResendReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.invitationId !== undefined) {
      ID.encode(message.invitationId, writer.uint32(26).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvitationsResendReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvitationsResendReq } as InvitationsResendReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.invitationId = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvitationsResendReq>): InvitationsResendReq {
    const message = { ...baseInvitationsResendReq } as InvitationsResendReq;
    if (object.invitationId !== undefined && object.invitationId !== null) {
      message.invitationId = ID.fromPartial(object.invitationId);
    } else {
      message.invitationId = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseInvitationsUpdateReq: object = {};

export const InvitationsUpdateReq = {
  encode(
    message: InvitationsUpdateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== undefined) {
      ID.encode(message.ID, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
    }
    if (message.membershipPermissions !== undefined) {
      MembershipPermissions.encode(
        message.membershipPermissions,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InvitationsUpdateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvitationsUpdateReq } as InvitationsUpdateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.membershipPermissions = MembershipPermissions.decode(
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

  fromPartial(object: DeepPartial<InvitationsUpdateReq>): InvitationsUpdateReq {
    const message = { ...baseInvitationsUpdateReq } as InvitationsUpdateReq;
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = ID.fromPartial(object.ID);
    } else {
      message.ID = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (
      object.membershipPermissions !== undefined &&
      object.membershipPermissions !== null
    ) {
      message.membershipPermissions = MembershipPermissions.fromPartial(
        object.membershipPermissions
      );
    } else {
      message.membershipPermissions = undefined;
    }
    return message;
  },
};

/**
 * -------------------
 * Invitations
 * -------------------
 */
export interface Invitations {
  Create(
    request: DeepPartial<InvitationsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation>;
  Cancel(
    request: DeepPartial<InvitationsCancelReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation>;
  GetByToken(
    request: DeepPartial<InvitationsGetByTokenReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation>;
  Redeem(
    request: DeepPartial<InvitationsRedeemReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation>;
  Update(
    request: DeepPartial<InvitationsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation>;
  GetUnredeemedByAccount(
    request: DeepPartial<InvitationsGetUnredeemedByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<InvitationsGetUnredeemedByAccountResp>;
  GetByRedeemer(
    request: DeepPartial<InvitationsGetByRedeemerReq>,
    metadata?: grpc.Metadata
  ): Promise<InvitationsGetByRedeemerResp>;
  Resend(
    request: DeepPartial<InvitationsResendReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation>;
}

export class InvitationsClientImpl implements Invitations {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Cancel = this.Cancel.bind(this);
    this.GetByToken = this.GetByToken.bind(this);
    this.Redeem = this.Redeem.bind(this);
    this.Update = this.Update.bind(this);
    this.GetUnredeemedByAccount = this.GetUnredeemedByAccount.bind(this);
    this.GetByRedeemer = this.GetByRedeemer.bind(this);
    this.Resend = this.Resend.bind(this);
  }

  Create(
    request: DeepPartial<InvitationsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation> {
    return this.rpc.unary(
      InvitationsCreateDesc,
      InvitationsCreateReq.fromPartial(request),
      metadata
    );
  }

  Cancel(
    request: DeepPartial<InvitationsCancelReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation> {
    return this.rpc.unary(
      InvitationsCancelDesc,
      InvitationsCancelReq.fromPartial(request),
      metadata
    );
  }

  GetByToken(
    request: DeepPartial<InvitationsGetByTokenReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation> {
    return this.rpc.unary(
      InvitationsGetByTokenDesc,
      InvitationsGetByTokenReq.fromPartial(request),
      metadata
    );
  }

  Redeem(
    request: DeepPartial<InvitationsRedeemReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation> {
    return this.rpc.unary(
      InvitationsRedeemDesc,
      InvitationsRedeemReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<InvitationsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation> {
    return this.rpc.unary(
      InvitationsUpdateDesc,
      InvitationsUpdateReq.fromPartial(request),
      metadata
    );
  }

  GetUnredeemedByAccount(
    request: DeepPartial<InvitationsGetUnredeemedByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<InvitationsGetUnredeemedByAccountResp> {
    return this.rpc.unary(
      InvitationsGetUnredeemedByAccountDesc,
      InvitationsGetUnredeemedByAccountReq.fromPartial(request),
      metadata
    );
  }

  GetByRedeemer(
    request: DeepPartial<InvitationsGetByRedeemerReq>,
    metadata?: grpc.Metadata
  ): Promise<InvitationsGetByRedeemerResp> {
    return this.rpc.unary(
      InvitationsGetByRedeemerDesc,
      InvitationsGetByRedeemerReq.fromPartial(request),
      metadata
    );
  }

  Resend(
    request: DeepPartial<InvitationsResendReq>,
    metadata?: grpc.Metadata
  ): Promise<Invitation> {
    return this.rpc.unary(
      InvitationsResendDesc,
      InvitationsResendReq.fromPartial(request),
      metadata
    );
  }
}

export const InvitationsDesc = {
  serviceName: "rpx.Invitations",
};

export const InvitationsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: InvitationsDesc,
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

export const InvitationsCancelDesc: UnaryMethodDefinitionish = {
  methodName: "Cancel",
  service: InvitationsDesc,
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

export const InvitationsGetByTokenDesc: UnaryMethodDefinitionish = {
  methodName: "GetByToken",
  service: InvitationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvitationsGetByTokenReq.encode(this).finish();
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

export const InvitationsRedeemDesc: UnaryMethodDefinitionish = {
  methodName: "Redeem",
  service: InvitationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvitationsRedeemReq.encode(this).finish();
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

export const InvitationsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: InvitationsDesc,
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

export const InvitationsGetUnredeemedByAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetUnredeemedByAccount",
  service: InvitationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvitationsGetUnredeemedByAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...InvitationsGetUnredeemedByAccountResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const InvitationsGetByRedeemerDesc: UnaryMethodDefinitionish = {
  methodName: "GetByRedeemer",
  service: InvitationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return InvitationsGetByRedeemerReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...InvitationsGetByRedeemerResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const InvitationsResendDesc: UnaryMethodDefinitionish = {
  methodName: "Resend",
  service: InvitationsDesc,
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
