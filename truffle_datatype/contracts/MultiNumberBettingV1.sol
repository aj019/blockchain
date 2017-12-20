pragma solidity ^0.4.4;

contract MultiNumberBettingV1 {

  uint8 loserCount;
  uint8 winnerCount;
  uint8[3] arr;

  function MultiNumberBettingV1(uint8 a,uint8 b,uint8 c) {
    // constructor
    arr[0] = a;
    arr[1] = b;
    arr[2] = c;
  }

  function guess(uint8 guess) returns (bool){
    if(guess==arr[0] || guess==arr[1] || guess==arr[2]){
        winnerCount += 1;
        return true;
    } else{
        loserCount +=1;
        return false;
    }
  }

  function totalGuesses() returns (uint8){
    return (loserCount + winnerCount);
  }

}
