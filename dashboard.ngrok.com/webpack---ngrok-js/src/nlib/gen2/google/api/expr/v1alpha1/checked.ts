// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  SourceInfo,
  Expr,
  Constant,
} from "../../../../google/api/expr/v1alpha1/syntax";
import { Empty } from "../../../../google/protobuf/empty";
import { NullValue } from "../../../../google/protobuf/struct";

export const protobufPackage = "google.api.expr.v1alpha1";

/** A CEL expression which has been successfully type checked. */
export interface CheckedExpr {
  /**
   * A map from expression ids to resolved references.
   *
   * The following entries are in this table:
   *
   * - An Ident or Select expression is represented here if it resolves to a
   *   declaration. For instance, if `a.b.c` is represented by
   *   `select(select(id(a), b), c)`, and `a.b` resolves to a declaration,
   *   while `c` is a field selection, then the reference is attached to the
   *   nested select expression (but not to the id or or the outer select).
   *   In turn, if `a` resolves to a declaration and `b.c` are field selections,
   *   the reference is attached to the ident expression.
   * - Every Call expression has an entry here, identifying the function being
   *   called.
   * - Every CreateStruct expression for a message has an entry, identifying
   *   the message.
   */
  referenceMap: { [key: number]: Reference };
  /**
   * A map from expression ids to types.
   *
   * Every expression node which has a type different than DYN has a mapping
   * here. If an expression has type DYN, it is omitted from this map to save
   * space.
   */
  typeMap: { [key: number]: Type };
  /**
   * The source info derived from input that generated the parsed `expr` and
   * any optimizations made during the type-checking pass.
   */
  sourceInfo: SourceInfo | undefined;
  /**
   * The expr version indicates the major / minor version number of the `expr`
   * representation.
   *
   * The most common reason for a version change will be to indicate to the CEL
   * runtimes that transformations have been performed on the expr during static
   * analysis. In some cases, this will save the runtime the work of applying
   * the same or similar transformations prior to evaluation.
   */
  exprVersion: string;
  /**
   * The checked expression. Semantically equivalent to the parsed `expr`, but
   * may have structural differences.
   */
  expr: Expr | undefined;
}

export interface CheckedExpr_ReferenceMapEntry {
  key: number;
  value: Reference | undefined;
}

export interface CheckedExpr_TypeMapEntry {
  key: number;
  value: Type | undefined;
}

/** Represents a CEL type. */
export interface Type {
  /** Dynamic type. */
  dyn: Empty | undefined;
  /** Null value. */
  null: NullValue | undefined;
  /** Primitive types: `true`, `1u`, `-2.0`, `'string'`, `b'bytes'`. */
  primitive: Type_PrimitiveType | undefined;
  /** Wrapper of a primitive type, e.g. `google.protobuf.Int64Value`. */
  wrapper: Type_PrimitiveType | undefined;
  /** Well-known protobuf type such as `google.protobuf.Timestamp`. */
  wellKnown: Type_WellKnownType | undefined;
  /** Parameterized list with elements of `list_type`, e.g. `list<timestamp>`. */
  listType: Type_ListType | undefined;
  /** Parameterized map with typed keys and values. */
  mapType: Type_MapType | undefined;
  /** Function type. */
  function: Type_FunctionType | undefined;
  /**
   * Protocol buffer message type.
   *
   * The `message_type` string specifies the qualified message type name. For
   * example, `google.plus.Profile`.
   */
  messageType: string | undefined;
  /**
   * Type param type.
   *
   * The `type_param` string specifies the type parameter name, e.g. `list<E>`
   * would be a `list_type` whose element type was a `type_param` type
   * named `E`.
   */
  typeParam: string | undefined;
  /**
   * Type type.
   *
   * The `type` value specifies the target type. e.g. int is type with a
   * target type of `Primitive.INT`.
   */
  type: Type | undefined;
  /**
   * Error type.
   *
   * During type-checking if an expression is an error, its type is propagated
   * as the `ERROR` type. This permits the type-checker to discover other
   * errors present in the expression.
   */
  error: Empty | undefined;
  /** Abstract, application defined type. */
  abstractType: Type_AbstractType | undefined;
}

/** CEL primitive types. */
export enum Type_PrimitiveType {
  /** PRIMITIVE_TYPE_UNSPECIFIED - Unspecified type. */
  PRIMITIVE_TYPE_UNSPECIFIED = 0,
  /** BOOL - Boolean type. */
  BOOL = 1,
  /**
   * INT64 - Int64 type.
   *
   * Proto-based integer values are widened to int64.
   */
  INT64 = 2,
  /**
   * UINT64 - Uint64 type.
   *
   * Proto-based unsigned integer values are widened to uint64.
   */
  UINT64 = 3,
  /**
   * DOUBLE - Double type.
   *
   * Proto-based float values are widened to double values.
   */
  DOUBLE = 4,
  /** STRING - String type. */
  STRING = 5,
  /** BYTES - Bytes type. */
  BYTES = 6,
}

/** Well-known protobuf types treated with first-class support in CEL. */
export enum Type_WellKnownType {
  /** WELL_KNOWN_TYPE_UNSPECIFIED - Unspecified type. */
  WELL_KNOWN_TYPE_UNSPECIFIED = 0,
  /**
   * ANY - Well-known protobuf.Any type.
   *
   * Any types are a polymorphic message type. During type-checking they are
   * treated like `DYN` types, but at runtime they are resolved to a specific
   * message type specified at evaluation time.
   */
  ANY = 1,
  /** TIMESTAMP - Well-known protobuf.Timestamp type, internally referenced as `timestamp`. */
  TIMESTAMP = 2,
  /** DURATION - Well-known protobuf.Duration type, internally referenced as `duration`. */
  DURATION = 3,
}

/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListType {
  /** The element type. */
  elemType: Type | undefined;
}

/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapType {
  /** The type of the key. */
  keyType: Type | undefined;
  /** The type of the value. */
  valueType: Type | undefined;
}

/** Function type with result and arg types. */
export interface Type_FunctionType {
  /** Result type of the function. */
  resultType: Type | undefined;
  /** Argument types of the function. */
  argTypes: Type[];
}

/** Application defined abstract type. */
export interface Type_AbstractType {
  /** The fully qualified name of this abstract type. */
  name: string;
  /** Parameter types for this abstract type. */
  parameterTypes: Type[];
}

/**
 * Represents a declaration of a named value or function.
 *
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 */
export interface Decl {
  /**
   * The fully qualified name of the declaration.
   *
   * Declarations are organized in containers and this represents the full path
   * to the declaration in its container, as in `google.api.expr.Decl`.
   *
   * Declarations used as [FunctionDecl.Overload][google.api.expr.v1alpha1.Decl.FunctionDecl.Overload] parameters may or may not
   * have a name depending on whether the overload is function declaration or a
   * function definition containing a result [Expr][google.api.expr.v1alpha1.Expr].
   */
  name: string;
  /** Identifier declaration. */
  ident: Decl_IdentDecl | undefined;
  /** Function declaration. */
  function: Decl_FunctionDecl | undefined;
}

/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 *
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 */
export interface Decl_IdentDecl {
  /** Required. The type of the identifier. */
  type: Type | undefined;
  /**
   * The constant value of the identifier. If not specified, the identifier
   * must be supplied at evaluation time.
   */
  value: Constant | undefined;
  /** Documentation string for the identifier. */
  doc: string;
}

/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 *
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 */
export interface Decl_FunctionDecl {
  /** Required. List of function overloads, must contain at least one overload. */
  overloads: Decl_FunctionDecl_Overload[];
}

/**
 * An overload indicates a function's parameter types and return type, and
 * may optionally include a function body described in terms of [Expr][google.api.expr.v1alpha1.Expr]
 * values.
 *
 * Functions overloads are declared in either a function or method
 * call-style. For methods, the `params[0]` is the expected type of the
 * target receiver.
 *
 * Overloads must have non-overlapping argument types after erasure of all
 * parameterized type variables (similar as type erasure in Java).
 */
export interface Decl_FunctionDecl_Overload {
  /**
   * Required. Globally unique overload name of the function which reflects
   * the function name and argument types.
   *
   * This will be used by a [Reference][google.api.expr.v1alpha1.Reference] to indicate the `overload_id` that
   * was resolved for the function `name`.
   */
  overloadId: string;
  /**
   * List of function parameter [Type][google.api.expr.v1alpha1.Type] values.
   *
   * Param types are disjoint after generic type parameters have been
   * replaced with the type `DYN`. Since the `DYN` type is compatible with
   * any other type, this means that if `A` is a type parameter, the
   * function types `int<A>` and `int<int>` are not disjoint. Likewise,
   * `map<string, string>` is not disjoint from `map<K, V>`.
   *
   * When the `result_type` of a function is a generic type param, the
   * type param name also appears as the `type` of on at least one params.
   */
  params: Type[];
  /**
   * The type param names associated with the function declaration.
   *
   * For example, `function ex<K,V>(K key, map<K, V> map) : V` would yield
   * the type params of `K, V`.
   */
  typeParams: string[];
  /**
   * Required. The result type of the function. For example, the operator
   * `string.isEmpty()` would have `result_type` of `kind: BOOL`.
   */
  resultType: Type | undefined;
  /**
   * Whether the function is to be used in a method call-style `x.f(...)`
   * of a function call-style `f(x, ...)`.
   *
   * For methods, the first parameter declaration, `params[0]` is the
   * expected type of the target receiver.
   */
  isInstanceFunction: boolean;
  /** Documentation string for the overload. */
  doc: string;
}

/** Describes a resolved reference to a declaration. */
export interface Reference {
  /** The fully qualified name of the declaration. */
  name: string;
  /**
   * For references to functions, this is a list of `Overload.overload_id`
   * values which match according to typing rules.
   *
   * If the list has more than one element, overload resolution among the
   * presented candidates must happen at runtime because of dynamic types. The
   * type checker attempts to narrow down this list as much as possible.
   *
   * Empty if this is not a reference to a [Decl.FunctionDecl][google.api.expr.v1alpha1.Decl.FunctionDecl].
   */
  overloadId: string[];
  /**
   * For references to constants, this may contain the value of the
   * constant if known at compile time.
   */
  value: Constant | undefined;
}

const baseCheckedExpr: object = { exprVersion: "" };

export const CheckedExpr = {
  encode(
    message: CheckedExpr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.referenceMap).forEach(([key, value]) => {
      CheckedExpr_ReferenceMapEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    Object.entries(message.typeMap).forEach(([key, value]) => {
      CheckedExpr_TypeMapEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(42).fork()).ldelim();
    }
    if (message.exprVersion !== "") {
      writer.uint32(50).string(message.exprVersion);
    }
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCheckedExpr } as CheckedExpr;
    message.referenceMap = {};
    message.typeMap = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          const entry2 = CheckedExpr_ReferenceMapEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.referenceMap[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = CheckedExpr_TypeMapEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.typeMap[entry3.key] = entry3.value;
          }
          break;
        case 5:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.exprVersion = reader.string();
          break;
        case 4:
          message.expr = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CheckedExpr>): CheckedExpr {
    const message = { ...baseCheckedExpr } as CheckedExpr;
    message.referenceMap = {};
    message.typeMap = {};
    if (object.referenceMap !== undefined && object.referenceMap !== null) {
      Object.entries(object.referenceMap).forEach(([key, value]) => {
        if (value !== undefined) {
          message.referenceMap[Number(key)] = Reference.fromPartial(value);
        }
      });
    }
    if (object.typeMap !== undefined && object.typeMap !== null) {
      Object.entries(object.typeMap).forEach(([key, value]) => {
        if (value !== undefined) {
          message.typeMap[Number(key)] = Type.fromPartial(value);
        }
      });
    }
    if (object.sourceInfo !== undefined && object.sourceInfo !== null) {
      message.sourceInfo = SourceInfo.fromPartial(object.sourceInfo);
    } else {
      message.sourceInfo = undefined;
    }
    if (object.exprVersion !== undefined && object.exprVersion !== null) {
      message.exprVersion = object.exprVersion;
    } else {
      message.exprVersion = "";
    }
    if (object.expr !== undefined && object.expr !== null) {
      message.expr = Expr.fromPartial(object.expr);
    } else {
      message.expr = undefined;
    }
    return message;
  },
};

const baseCheckedExpr_ReferenceMapEntry: object = { key: 0 };

export const CheckedExpr_ReferenceMapEntry = {
  encode(
    message: CheckedExpr_ReferenceMapEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Reference.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckedExpr_ReferenceMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCheckedExpr_ReferenceMapEntry,
    } as CheckedExpr_ReferenceMapEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = Reference.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<CheckedExpr_ReferenceMapEntry>
  ): CheckedExpr_ReferenceMapEntry {
    const message = {
      ...baseCheckedExpr_ReferenceMapEntry,
    } as CheckedExpr_ReferenceMapEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Reference.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseCheckedExpr_TypeMapEntry: object = { key: 0 };

export const CheckedExpr_TypeMapEntry = {
  encode(
    message: CheckedExpr_TypeMapEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Type.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckedExpr_TypeMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCheckedExpr_TypeMapEntry,
    } as CheckedExpr_TypeMapEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<CheckedExpr_TypeMapEntry>
  ): CheckedExpr_TypeMapEntry {
    const message = {
      ...baseCheckedExpr_TypeMapEntry,
    } as CheckedExpr_TypeMapEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Type.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseType: object = {};

export const Type = {
  encode(message: Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dyn !== undefined) {
      Empty.encode(message.dyn, writer.uint32(10).fork()).ldelim();
    }
    if (message.null !== undefined) {
      writer.uint32(16).int32(message.null);
    }
    if (message.primitive !== undefined) {
      writer.uint32(24).int32(message.primitive);
    }
    if (message.wrapper !== undefined) {
      writer.uint32(32).int32(message.wrapper);
    }
    if (message.wellKnown !== undefined) {
      writer.uint32(40).int32(message.wellKnown);
    }
    if (message.listType !== undefined) {
      Type_ListType.encode(message.listType, writer.uint32(50).fork()).ldelim();
    }
    if (message.mapType !== undefined) {
      Type_MapType.encode(message.mapType, writer.uint32(58).fork()).ldelim();
    }
    if (message.function !== undefined) {
      Type_FunctionType.encode(
        message.function,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.messageType !== undefined) {
      writer.uint32(74).string(message.messageType);
    }
    if (message.typeParam !== undefined) {
      writer.uint32(82).string(message.typeParam);
    }
    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(90).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Empty.encode(message.error, writer.uint32(98).fork()).ldelim();
    }
    if (message.abstractType !== undefined) {
      Type_AbstractType.encode(
        message.abstractType,
        writer.uint32(114).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseType } as Type;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dyn = Empty.decode(reader, reader.uint32());
          break;
        case 2:
          message.null = reader.int32() as any;
          break;
        case 3:
          message.primitive = reader.int32() as any;
          break;
        case 4:
          message.wrapper = reader.int32() as any;
          break;
        case 5:
          message.wellKnown = reader.int32() as any;
          break;
        case 6:
          message.listType = Type_ListType.decode(reader, reader.uint32());
          break;
        case 7:
          message.mapType = Type_MapType.decode(reader, reader.uint32());
          break;
        case 8:
          message.function = Type_FunctionType.decode(reader, reader.uint32());
          break;
        case 9:
          message.messageType = reader.string();
          break;
        case 10:
          message.typeParam = reader.string();
          break;
        case 11:
          message.type = Type.decode(reader, reader.uint32());
          break;
        case 12:
          message.error = Empty.decode(reader, reader.uint32());
          break;
        case 14:
          message.abstractType = Type_AbstractType.decode(
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

  fromPartial(object: DeepPartial<Type>): Type {
    const message = { ...baseType } as Type;
    if (object.dyn !== undefined && object.dyn !== null) {
      message.dyn = Empty.fromPartial(object.dyn);
    } else {
      message.dyn = undefined;
    }
    if (object.null !== undefined && object.null !== null) {
      message.null = object.null;
    } else {
      message.null = undefined;
    }
    if (object.primitive !== undefined && object.primitive !== null) {
      message.primitive = object.primitive;
    } else {
      message.primitive = undefined;
    }
    if (object.wrapper !== undefined && object.wrapper !== null) {
      message.wrapper = object.wrapper;
    } else {
      message.wrapper = undefined;
    }
    if (object.wellKnown !== undefined && object.wellKnown !== null) {
      message.wellKnown = object.wellKnown;
    } else {
      message.wellKnown = undefined;
    }
    if (object.listType !== undefined && object.listType !== null) {
      message.listType = Type_ListType.fromPartial(object.listType);
    } else {
      message.listType = undefined;
    }
    if (object.mapType !== undefined && object.mapType !== null) {
      message.mapType = Type_MapType.fromPartial(object.mapType);
    } else {
      message.mapType = undefined;
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = Type_FunctionType.fromPartial(object.function);
    } else {
      message.function = undefined;
    }
    if (object.messageType !== undefined && object.messageType !== null) {
      message.messageType = object.messageType;
    } else {
      message.messageType = undefined;
    }
    if (object.typeParam !== undefined && object.typeParam !== null) {
      message.typeParam = object.typeParam;
    } else {
      message.typeParam = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = Type.fromPartial(object.type);
    } else {
      message.type = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Empty.fromPartial(object.error);
    } else {
      message.error = undefined;
    }
    if (object.abstractType !== undefined && object.abstractType !== null) {
      message.abstractType = Type_AbstractType.fromPartial(object.abstractType);
    } else {
      message.abstractType = undefined;
    }
    return message;
  },
};

const baseType_ListType: object = {};

export const Type_ListType = {
  encode(
    message: Type_ListType,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.elemType !== undefined) {
      Type.encode(message.elemType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_ListType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseType_ListType } as Type_ListType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elemType = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Type_ListType>): Type_ListType {
    const message = { ...baseType_ListType } as Type_ListType;
    if (object.elemType !== undefined && object.elemType !== null) {
      message.elemType = Type.fromPartial(object.elemType);
    } else {
      message.elemType = undefined;
    }
    return message;
  },
};

const baseType_MapType: object = {};

export const Type_MapType = {
  encode(
    message: Type_MapType,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyType !== undefined) {
      Type.encode(message.keyType, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueType !== undefined) {
      Type.encode(message.valueType, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_MapType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseType_MapType } as Type_MapType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyType = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.valueType = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Type_MapType>): Type_MapType {
    const message = { ...baseType_MapType } as Type_MapType;
    if (object.keyType !== undefined && object.keyType !== null) {
      message.keyType = Type.fromPartial(object.keyType);
    } else {
      message.keyType = undefined;
    }
    if (object.valueType !== undefined && object.valueType !== null) {
      message.valueType = Type.fromPartial(object.valueType);
    } else {
      message.valueType = undefined;
    }
    return message;
  },
};

const baseType_FunctionType: object = {};

export const Type_FunctionType = {
  encode(
    message: Type_FunctionType,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.argTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_FunctionType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseType_FunctionType } as Type_FunctionType;
    message.argTypes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resultType = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.argTypes.push(Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Type_FunctionType>): Type_FunctionType {
    const message = { ...baseType_FunctionType } as Type_FunctionType;
    message.argTypes = [];
    if (object.resultType !== undefined && object.resultType !== null) {
      message.resultType = Type.fromPartial(object.resultType);
    } else {
      message.resultType = undefined;
    }
    if (object.argTypes !== undefined && object.argTypes !== null) {
      for (const e of object.argTypes) {
        message.argTypes.push(Type.fromPartial(e));
      }
    }
    return message;
  },
};

const baseType_AbstractType: object = { name: "" };

export const Type_AbstractType = {
  encode(
    message: Type_AbstractType,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.parameterTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_AbstractType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseType_AbstractType } as Type_AbstractType;
    message.parameterTypes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.parameterTypes.push(Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Type_AbstractType>): Type_AbstractType {
    const message = { ...baseType_AbstractType } as Type_AbstractType;
    message.parameterTypes = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.parameterTypes !== undefined && object.parameterTypes !== null) {
      for (const e of object.parameterTypes) {
        message.parameterTypes.push(Type.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDecl: object = { name: "" };

export const Decl = {
  encode(message: Decl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.ident !== undefined) {
      Decl_IdentDecl.encode(message.ident, writer.uint32(18).fork()).ldelim();
    }
    if (message.function !== undefined) {
      Decl_FunctionDecl.encode(
        message.function,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDecl } as Decl;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.ident = Decl_IdentDecl.decode(reader, reader.uint32());
          break;
        case 3:
          message.function = Decl_FunctionDecl.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Decl>): Decl {
    const message = { ...baseDecl } as Decl;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.ident !== undefined && object.ident !== null) {
      message.ident = Decl_IdentDecl.fromPartial(object.ident);
    } else {
      message.ident = undefined;
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = Decl_FunctionDecl.fromPartial(object.function);
    } else {
      message.function = undefined;
    }
    return message;
  },
};

const baseDecl_IdentDecl: object = { doc: "" };

export const Decl_IdentDecl = {
  encode(
    message: Decl_IdentDecl,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    if (message.doc !== "") {
      writer.uint32(26).string(message.doc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_IdentDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDecl_IdentDecl } as Decl_IdentDecl;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.value = Constant.decode(reader, reader.uint32());
          break;
        case 3:
          message.doc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Decl_IdentDecl>): Decl_IdentDecl {
    const message = { ...baseDecl_IdentDecl } as Decl_IdentDecl;
    if (object.type !== undefined && object.type !== null) {
      message.type = Type.fromPartial(object.type);
    } else {
      message.type = undefined;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Constant.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    if (object.doc !== undefined && object.doc !== null) {
      message.doc = object.doc;
    } else {
      message.doc = "";
    }
    return message;
  },
};

const baseDecl_FunctionDecl: object = {};

export const Decl_FunctionDecl = {
  encode(
    message: Decl_FunctionDecl,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.overloads) {
      Decl_FunctionDecl_Overload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_FunctionDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDecl_FunctionDecl } as Decl_FunctionDecl;
    message.overloads = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overloads.push(
            Decl_FunctionDecl_Overload.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Decl_FunctionDecl>): Decl_FunctionDecl {
    const message = { ...baseDecl_FunctionDecl } as Decl_FunctionDecl;
    message.overloads = [];
    if (object.overloads !== undefined && object.overloads !== null) {
      for (const e of object.overloads) {
        message.overloads.push(Decl_FunctionDecl_Overload.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDecl_FunctionDecl_Overload: object = {
  overloadId: "",
  typeParams: "",
  isInstanceFunction: false,
  doc: "",
};

export const Decl_FunctionDecl_Overload = {
  encode(
    message: Decl_FunctionDecl_Overload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.overloadId !== "") {
      writer.uint32(10).string(message.overloadId);
    }
    for (const v of message.params) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.typeParams) {
      writer.uint32(26).string(v!);
    }
    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(34).fork()).ldelim();
    }
    if (message.isInstanceFunction === true) {
      writer.uint32(40).bool(message.isInstanceFunction);
    }
    if (message.doc !== "") {
      writer.uint32(50).string(message.doc);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Decl_FunctionDecl_Overload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDecl_FunctionDecl_Overload,
    } as Decl_FunctionDecl_Overload;
    message.params = [];
    message.typeParams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overloadId = reader.string();
          break;
        case 2:
          message.params.push(Type.decode(reader, reader.uint32()));
          break;
        case 3:
          message.typeParams.push(reader.string());
          break;
        case 4:
          message.resultType = Type.decode(reader, reader.uint32());
          break;
        case 5:
          message.isInstanceFunction = reader.bool();
          break;
        case 6:
          message.doc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Decl_FunctionDecl_Overload>
  ): Decl_FunctionDecl_Overload {
    const message = {
      ...baseDecl_FunctionDecl_Overload,
    } as Decl_FunctionDecl_Overload;
    message.params = [];
    message.typeParams = [];
    if (object.overloadId !== undefined && object.overloadId !== null) {
      message.overloadId = object.overloadId;
    } else {
      message.overloadId = "";
    }
    if (object.params !== undefined && object.params !== null) {
      for (const e of object.params) {
        message.params.push(Type.fromPartial(e));
      }
    }
    if (object.typeParams !== undefined && object.typeParams !== null) {
      for (const e of object.typeParams) {
        message.typeParams.push(e);
      }
    }
    if (object.resultType !== undefined && object.resultType !== null) {
      message.resultType = Type.fromPartial(object.resultType);
    } else {
      message.resultType = undefined;
    }
    if (
      object.isInstanceFunction !== undefined &&
      object.isInstanceFunction !== null
    ) {
      message.isInstanceFunction = object.isInstanceFunction;
    } else {
      message.isInstanceFunction = false;
    }
    if (object.doc !== undefined && object.doc !== null) {
      message.doc = object.doc;
    } else {
      message.doc = "";
    }
    return message;
  },
};

const baseReference: object = { name: "", overloadId: "" };

export const Reference = {
  encode(
    message: Reference,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.overloadId) {
      writer.uint32(26).string(v!);
    }
    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReference } as Reference;
    message.overloadId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.overloadId.push(reader.string());
          break;
        case 4:
          message.value = Constant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Reference>): Reference {
    const message = { ...baseReference } as Reference;
    message.overloadId = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.overloadId !== undefined && object.overloadId !== null) {
      for (const e of object.overloadId) {
        message.overloadId.push(e);
      }
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Constant.fromPartial(object.value);
    } else {
      message.value = undefined;
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
