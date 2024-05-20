import * as reified from "../../_framework/reified";
import {Option} from "../../_dependencies/onchain/0x1/option/structs";
import {String} from "../../_dependencies/onchain/0x1/string/structs";
import {Balance} from "../../_dependencies/onchain/0x2/balance/structs";
import {ID, UID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, Vector, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Saving =============================== */

export function isSaving(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::Saving<"); }

export interface SavingFields<T0 extends PhantomTypeArgument> { id: ToField<UID>; reward: ToField<"u64">; name: ToField<String>; owner: ToField<"address">; createdAtMs: ToField<"u64">; description: ToField<String>; balance: ToField<Balance<T0>>; target: ToField<Option<SavingTarget>>; authorizedCaps: ToField<Vector<ID>> }

export type SavingReified<T0 extends PhantomTypeArgument> = Reified< Saving<T0>, SavingFields<T0> >;

export class Saving<T0 extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::Saving"; static readonly $numTypeParams = 1;

 readonly $typeName = Saving.$typeName;

 readonly $fullTypeName: `0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::Saving<${PhantomToTypeStr<T0>}>`;

 readonly $typeArgs: [PhantomToTypeStr<T0>];

 readonly id: ToField<UID>; readonly reward: ToField<"u64">; readonly name: ToField<String>; readonly owner: ToField<"address">; readonly createdAtMs: ToField<"u64">; readonly description: ToField<String>; readonly balance: ToField<Balance<T0>>; readonly target: ToField<Option<SavingTarget>>; readonly authorizedCaps: ToField<Vector<ID>>

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: SavingFields<T0>, ) { this.$fullTypeName = composeSuiType( Saving.$typeName, ...typeArgs ) as `0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::Saving<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.reward = fields.reward;; this.name = fields.name;; this.owner = fields.owner;; this.createdAtMs = fields.createdAtMs;; this.description = fields.description;; this.balance = fields.balance;; this.target = fields.target;; this.authorizedCaps = fields.authorizedCaps; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): SavingReified<ToPhantomTypeArgument<T0>> { return { typeName: Saving.$typeName, fullTypeName: composeSuiType( Saving.$typeName, ...[extractType(T0)] ) as `0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::Saving<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => Saving.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Saving.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => Saving.fromBcs( T0, data, ), bcs: Saving.bcs, fromJSONField: (field: any) => Saving.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => Saving.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => Saving.fromSuiParsedData( T0, content, ), fetch: async (client: SuiClient, id: string) => Saving.fetch( client, T0, id, ), new: ( fields: SavingFields<ToPhantomTypeArgument<T0>>, ) => { return new Saving( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Saving.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<Saving<ToPhantomTypeArgument<T0>>>> { return phantom(Saving.reified( T0 )); } static get p() { return Saving.phantom }

 static get bcs() { return bcs.struct("Saving", {

 id: UID.bcs, reward: bcs.u64(), name: String.bcs, owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), created_at_ms: bcs.u64(), description: String.bcs, balance: Balance.bcs, target: Option.bcs(SavingTarget.bcs), authorized_caps: bcs.vector(ID.bcs)

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): Saving<ToPhantomTypeArgument<T0>> { return Saving.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), reward: decodeFromFields("u64", fields.reward), name: decodeFromFields(String.reified(), fields.name), owner: decodeFromFields("address", fields.owner), createdAtMs: decodeFromFields("u64", fields.created_at_ms), description: decodeFromFields(String.reified(), fields.description), balance: decodeFromFields(Balance.reified(typeArg), fields.balance), target: decodeFromFields(Option.reified(SavingTarget.reified()), fields.target), authorizedCaps: decodeFromFields(reified.vector(ID.reified()), fields.authorized_caps) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): Saving<ToPhantomTypeArgument<T0>> { if (!isSaving(item.type)) { throw new Error("not a Saving type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Saving.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), reward: decodeFromFieldsWithTypes("u64", item.fields.reward), name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), owner: decodeFromFieldsWithTypes("address", item.fields.owner), createdAtMs: decodeFromFieldsWithTypes("u64", item.fields.created_at_ms), description: decodeFromFieldsWithTypes(String.reified(), item.fields.description), balance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.balance), target: decodeFromFieldsWithTypes(Option.reified(SavingTarget.reified()), item.fields.target), authorizedCaps: decodeFromFieldsWithTypes(reified.vector(ID.reified()), item.fields.authorized_caps) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): Saving<ToPhantomTypeArgument<T0>> { return Saving.fromFields( typeArg, Saving.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,reward: this.reward.toString(),name: this.name,owner: this.owner,createdAtMs: this.createdAtMs.toString(),description: this.description,balance: this.balance.toJSONField(),target: fieldToJSON<Option<SavingTarget>>(`0x1::option::Option<0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::SavingTarget>`, this.target),authorizedCaps: fieldToJSON<Vector<ID>>(`vector<0x2::object::ID>`, this.authorizedCaps),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): Saving<ToPhantomTypeArgument<T0>> { return Saving.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), reward: decodeFromJSONField("u64", field.reward), name: decodeFromJSONField(String.reified(), field.name), owner: decodeFromJSONField("address", field.owner), createdAtMs: decodeFromJSONField("u64", field.createdAtMs), description: decodeFromJSONField(String.reified(), field.description), balance: decodeFromJSONField(Balance.reified(typeArg), field.balance), target: decodeFromJSONField(Option.reified(SavingTarget.reified()), field.target), authorizedCaps: decodeFromJSONField(reified.vector(ID.reified()), field.authorizedCaps) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): Saving<ToPhantomTypeArgument<T0>> { if (json.$typeName !== Saving.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Saving.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Saving.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): Saving<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSaving(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Saving object`); } return Saving.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<Saving<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Saving object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSaving(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Saving object`); }
 return Saving.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SavingTarget =============================== */

export function isSavingTarget(type: string): boolean { type = compressSuiType(type); return type === "0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::SavingTarget"; }

export interface SavingTargetFields { date: ToField<"u64">; amount: ToField<"u64"> }

export type SavingTargetReified = Reified< SavingTarget, SavingTargetFields >;

export class SavingTarget implements StructClass { static readonly $typeName = "0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::SavingTarget"; static readonly $numTypeParams = 0;

 readonly $typeName = SavingTarget.$typeName;

 readonly $fullTypeName: "0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::SavingTarget";

 readonly $typeArgs: [];

 readonly date: ToField<"u64">; readonly amount: ToField<"u64">

 private constructor(typeArgs: [], fields: SavingTargetFields, ) { this.$fullTypeName = composeSuiType( SavingTarget.$typeName, ...typeArgs ) as "0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::SavingTarget"; this.$typeArgs = typeArgs;

 this.date = fields.date;; this.amount = fields.amount; }

 static reified( ): SavingTargetReified { return { typeName: SavingTarget.$typeName, fullTypeName: composeSuiType( SavingTarget.$typeName, ...[] ) as "0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::SavingTarget", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SavingTarget.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SavingTarget.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SavingTarget.fromBcs( data, ), bcs: SavingTarget.bcs, fromJSONField: (field: any) => SavingTarget.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SavingTarget.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SavingTarget.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SavingTarget.fetch( client, id, ), new: ( fields: SavingTargetFields, ) => { return new SavingTarget( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SavingTarget.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SavingTarget>> { return phantom(SavingTarget.reified( )); } static get p() { return SavingTarget.phantom() }

 static get bcs() { return bcs.struct("SavingTarget", {

 date: bcs.u64(), amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SavingTarget { return SavingTarget.reified( ).new( { date: decodeFromFields("u64", fields.date), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SavingTarget { if (!isSavingTarget(item.type)) { throw new Error("not a SavingTarget type");

 }

 return SavingTarget.reified( ).new( { date: decodeFromFieldsWithTypes("u64", item.fields.date), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs( data: Uint8Array ): SavingTarget { return SavingTarget.fromFields( SavingTarget.bcs.parse(data) ) }

 toJSONField() { return {

 date: this.date.toString(),amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SavingTarget { return SavingTarget.reified( ).new( { date: decodeFromJSONField("u64", field.date), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON( json: Record<string, any> ): SavingTarget { if (json.$typeName !== SavingTarget.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SavingTarget.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SavingTarget { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSavingTarget(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SavingTarget object`); } return SavingTarget.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SavingTarget> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SavingTarget object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSavingTarget(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SavingTarget object`); }
 return SavingTarget.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SavingCap =============================== */

export function isSavingCap(type: string): boolean { type = compressSuiType(type); return type === "0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::SavingCap"; }

export interface SavingCapFields { id: ToField<UID>; saving: ToField<ID> }

export type SavingCapReified = Reified< SavingCap, SavingCapFields >;

export class SavingCap implements StructClass { static readonly $typeName = "0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::SavingCap"; static readonly $numTypeParams = 0;

 readonly $typeName = SavingCap.$typeName;

 readonly $fullTypeName: "0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::SavingCap";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly saving: ToField<ID>

 private constructor(typeArgs: [], fields: SavingCapFields, ) { this.$fullTypeName = composeSuiType( SavingCap.$typeName, ...typeArgs ) as "0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::SavingCap"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.saving = fields.saving; }

 static reified( ): SavingCapReified { return { typeName: SavingCap.$typeName, fullTypeName: composeSuiType( SavingCap.$typeName, ...[] ) as "0x711a02c4e2ba28fce3d9c095a259f622b0502bfc1b96e77b6c0dc136199729f::saving::SavingCap", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SavingCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SavingCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SavingCap.fromBcs( data, ), bcs: SavingCap.bcs, fromJSONField: (field: any) => SavingCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SavingCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SavingCap.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SavingCap.fetch( client, id, ), new: ( fields: SavingCapFields, ) => { return new SavingCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SavingCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SavingCap>> { return phantom(SavingCap.reified( )); } static get p() { return SavingCap.phantom() }

 static get bcs() { return bcs.struct("SavingCap", {

 id: UID.bcs, saving: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): SavingCap { return SavingCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), saving: decodeFromFields(ID.reified(), fields.saving) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SavingCap { if (!isSavingCap(item.type)) { throw new Error("not a SavingCap type");

 }

 return SavingCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), saving: decodeFromFieldsWithTypes(ID.reified(), item.fields.saving) } ) }

 static fromBcs( data: Uint8Array ): SavingCap { return SavingCap.fromFields( SavingCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,saving: this.saving,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SavingCap { return SavingCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), saving: decodeFromJSONField(ID.reified(), field.saving) } ) }

 static fromJSON( json: Record<string, any> ): SavingCap { if (json.$typeName !== SavingCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SavingCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SavingCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSavingCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SavingCap object`); } return SavingCap.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SavingCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SavingCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSavingCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SavingCap object`); }
 return SavingCap.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
