pragma solidity ^0.4.25;

contract Inbox{
    string public message;

    constructor(string memory initMessage) public {
        message = initMessage;
    }

    function getMessage() public view returns (string memory){
        return message;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

}