import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  // hoppers,
  // Approval,
  // ApprovalForAll,
  // LevelUp,
  // NameChange,
  // OwnerUpdated,
  // Rebirth,
  Transfer,
  // UnlabeledData,
  // UpdatedNameFee
} from "../generated/hoppers/hoppers"
import { Hopper } from "../generated/schema"

// export function handleApproval(event: Approval): void {}

// export function handleApprovalForAll(event: ApprovalForAll): void {}

// export function handleLevelUp(event: LevelUp): void {}

// export function handleNameChange(event: NameChange): void {}

// export function handleOwnerUpdated(event: OwnerUpdated): void {}

// export function handleRebirth(event: Rebirth): void {}

const CONTRACT_ADDRESSES = [
  "0x85e66216fB0e80F87b54eb39a415c3bbD40E37f9",
  "0x780feb71117157a039e682668d79584d18579e90",
  "0xec7e923e7e0bd2dc7bb2ac0fabccf4e650c5418c",
  "0x4eef52b71bd64d54d736cf2f3073e6dbbfcc7e31",
  "0xcd32ed513a86484688cd3dbada05a9ed3c0c0eb6",
  "0x1009cba3c0a50a2a0e8a92bc070ac5ffb8a3efe2",
   "0x16d5791f7c31d7e13dd7b18ae2011764c4da8fbc",
   "0xbbF9287aFbf1CdBf9f7786E98fC6CEa73A78B6aB",
];

export function handleTransfer(event: Transfer): void {
  if(event.params.id== BigInt.fromString("0"))
  return
  let hopper = new Hopper(event.params.id.toHexString())
  hopper.token_id = event.params.id

  // if("0x0000000000000000000000000000000000000000"== event.params.from.toHexString()){
  //   // minting operation
  //   log.info("FOUND MINTING!",[])
  //     hopper.location=event.params.to // user's address
  //     hopper.owner=event.params.to  // user's address
  //     return
  // }
  
  // from adventure
  for(let a=0;a<CONTRACT_ADDRESSES.length;a++){
    // user unstaking from adventure
    if(CONTRACT_ADDRESSES[a] == event.params.from.toHexString()){
      log.info("FOUND UNSTAKING!",[])
      hopper.location=event.params.to // user's address
      hopper.owner=event.params.to  // user's address
      break
    }
  }
  // to adventure
  for(let a=0;a<CONTRACT_ADDRESSES.length;a++){
    // user staking from adventure
    if(CONTRACT_ADDRESSES[a] == event.params.to.toHexString()){
      log.info("FOUND STAKING!",[])
      hopper.location=event.params.to // user's address
      hopper.owner=event.params.from  // user's address
      break
    }
  }

  hopper.save()
}

// export function handleUnlabeledData(event: UnlabeledData): void {}

// export function handleUpdatedNameFee(event: UpdatedNameFee): void {}
