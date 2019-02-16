pragma solidity ^0.5.0;

contract Owned {
  constructor() public { owner = msg.sender; }
  address public owner;

  modifier onlyOwner {
    require(
      msg.sender == owner,
      "Only owner can call this function."
    );
    _;
  }
}
