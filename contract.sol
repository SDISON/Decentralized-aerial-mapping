pragma solidity ^0.5.7;

contract registration
{
    uint256 public total = 0;
    address owner;
    struct drone
    {
        address account;
        string company;
    }
    mapping(address=>drone) public drone_list;
    mapping(uint256=>string) public img;
    mapping(uint256=>uint256) public ids;
    
    constructor() public 
    {
        owner = msg.sender;
    }
    
    modifier access()
    {
        require(msg.sender == owner);
        _;
    }
    
    event register_log
    (
       string status
    );
    event submit_log
    (
        string status
    );
    
    function register(address x, string memory _company) public access
    {
        if(drone_list[x].account != address(0x0000000000000000000000000000000000000000))
        {
            emit register_log('no');
        }
        else
        {
            drone_list[x] = drone(x, _company);
            emit register_log('yes');
        }
    }
    
    function store(uint256 _id, string memory _location) private
    {
        bytes memory temp = bytes(img[_id]);
        if(temp.length==0)
        {
            ids[total] = _id;
            total++;
            img[_id] = _location;
        }
    }
    
    function submit(uint256 _id, string memory _location) public
    {
        if(drone_list[msg.sender].account != address(0x0000000000000000000000000000000000000000))
        {
            store(_id, _location);
            emit submit_log('yes');
        }
        else
        {
            emit submit_log('no');
        }
    }
}
