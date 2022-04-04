import { BigInt } from "@graphprotocol/graph-ts"
import {
  hoppers,
  Approval,
  ApprovalForAll,
  LevelUp,
  NameChange,
  OwnerUpdated,
  Rebirth,
  Transfer,
  UnlabeledData,
  UpdatedNameFee
} from "../generated/hoppers/hoppers"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.LEGENDARY_ID_START(...)
  // - contract.MAX_PER_ADDRESS(...)
  // - contract.MAX_SUPPLY(...)
  // - contract.MINT_COST(...)
  // - contract.WL_MINT_COST(...)
  // - contract._jsonString(...)
  // - contract.balanceOf(...)
  // - contract.baseURI(...)
  // - contract.changeHopperName(...)
  // - contract.freeMerkleRoot(...)
  // - contract.freeRedeemed(...)
  // - contract.getApproved(...)
  // - contract.getData(...)
  // - contract.getGlobalData(...)
  // - contract.getHopper(...)
  // - contract.getHopperName(...)
  // - contract.getHopperWithData(...)
  // - contract.hopperMaxAttributeValue(...)
  // - contract.hoppers(...)
  // - contract.hoppersLength(...)
  // - contract.hoppersNames(...)
  // - contract.imageURL(...)
  // - contract.indexer(...)
  // - contract.isApprovedForAll(...)
  // - contract.name(...)
  // - contract.nameFee(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.preSaleOpenTime(...)
  // - contract.reserved(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.takenNames(...)
  // - contract.tokenURI(...)
  // - contract.unlabeledData(...)
  // - contract.unlabeledGlobalData(...)
  // - contract.wlMerkleRoot(...)
  // - contract.wlRedeemed(...)
  // - contract.zones(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleLevelUp(event: LevelUp): void {}

export function handleNameChange(event: NameChange): void {}

export function handleOwnerUpdated(event: OwnerUpdated): void {}

export function handleRebirth(event: Rebirth): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnlabeledData(event: UnlabeledData): void {}

export function handleUpdatedNameFee(event: UpdatedNameFee): void {}
