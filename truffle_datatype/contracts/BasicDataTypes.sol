pragma solidity ^0.4.4;

contract BasicDataTypes {
  uint8 x8 = 255;
  address owner;
  uint ownerInitialBalance;

    function BasicDataTypes(address addr) {

        owner = addr;
        ownerInitialBalance = addr.balance;

        int x256;
        x256 = x8;
    // x8 = x256 -> This will lead to an error because the max value of x256 cannot be accomodated in x8
        x8 = uint8(x256);
        var deduce = x8;
    //    deduce = x256; - > Fail : Because deduce is of type uint8;
        bool flag = true; // By default the value is assigned to false
        if (flag) {}
    }
}
