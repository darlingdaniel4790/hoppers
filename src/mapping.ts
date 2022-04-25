import { BigInt, Bytes, log } from "@graphprotocol/graph-ts";
import {
  // hoppers,
  // Approval,
  // ApprovalForAll,
  // LevelUp,
  // NameChange,
  // OwnerUpdated,
  // Rebirth,
  Transfer as HopperTransfer,
  // UnlabeledData,
  // UpdatedNameFee
} from "../generated/hoppers/hoppers"
import {Transfer as TadpoleTransfer} from "../generated/tadpoles/tadpoles"
import { Hopper, Tadpole } from "../generated/schema"

// export function handleApproval(event: Approval): void {}

// export function handleApprovalForAll(event: ApprovalForAll): void {}

// export function handleLevelUp(event: LevelUp): void {}

// export function handleNameChange(event: NameChange): void {}

// export function handleOwnerUpdated(event: OwnerUpdated): void {}

// export function handleRebirth(event: Rebirth): void {}

// const CONTRACT_ADDRESSES = [
//   "0x85e66216fB0e80F87b54eb39a415c3bbD40E37f9",
//   "0x780feb71117157a039e682668d79584d18579e90",
//   "0xec7e923e7e0bd2dc7bb2ac0fabccf4e650c5418c",
//   "0x4eef52b71bd64d54d736cf2f3073e6dbbfcc7e31",
//   "0xcd32ed513a86484688cd3dbada05a9ed3c0c0eb6",
//   "0x1009cba3c0a50a2a0e8a92bc070ac5ffb8a3efe2",
//    "0x16d5791f7c31d7e13dd7b18ae2011764c4da8fbc",
//    "0xbbF9287aFbf1CdBf9f7786E98fC6CEa73A78B6aB",
// ];

export function handleHopperTransfer(event: HopperTransfer): void {
  if(event.params.id== BigInt.fromString("0"))
  return
  let to = event.params.to
  let from = event.params.from
  let hopper = new Hopper(event.params.id.toHex())
  hopper.token_id = event.params.id
  hopper.location= to
  hopper.owner= (
    "0x85e66216fb0e80f87b54eb39a415c3bbd40e37f9" == to.toHexString() ||
    "0x780feb71117157a039e682668d79584d18579e90" == to.toHexString() ||
    "0xec7e923e7e0bd2dc7bb2ac0fabccf4e650c5418c" == to.toHexString() ||
    "0x4eef52b71bd64d54d736cf2f3073e6dbbfcc7e31" == to.toHexString() ||
    "0xcd32ed513a86484688cd3dbada05a9ed3c0c0eb6" == to.toHexString() ||
    "0x1009cba3c0a50a2a0e8a92bc070ac5ffb8a3efe2" == to.toHexString() ||
    "0x16d5791f7c31d7e13dd7b18ae2011764c4da8fbc" == to.toHexString() ||
    "0xbbf9287afbf1cdbf9f7786e98fc6cea73a78b6ab" == to.toHexString()
    ) ? from : to 
  hopper.transaction = event.transaction.hash
  
  // for(let a=0;a<CONTRACT_ADDRESSES.length;a++){
  //   if(CONTRACT_ADDRESSES[a] == event.params.to.toHexString()){
  //     // user staking to adventure
  //     log.info("STAKING FOUND!",[])
  //     hopper.location=event.params.to // staking address
  //     hopper.owner=event.params.from  // user's address
  //     break
  //   }
  // }

  hopper.save()
}

export function handleTadpoleTransfer(event: TadpoleTransfer): void {
  if(event.params.id== BigInt.fromString("0"))
  return
  let to = event.params.to
  let from = event.params.from
  let tadpole = new Tadpole(event.params.id.toHex())
  tadpole.token_id = event.params.id
  tadpole.location= to
  tadpole.owner= (
    "0xbbf9287afbf1cdbf9f7786e98fc6cea73a78b6ab" == to.toHexString()
    ) ? from : to 
  tadpole.transaction = event.transaction.hash

  tadpole.save()
}

// export function handleUnlabeledData(event: UnlabeledData): void {}

// export function handleUpdatedNameFee(event: UpdatedNameFee): void {}
