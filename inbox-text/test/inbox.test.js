const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const inbox = require('../compile');

const web3 = new Web3(ganache.provider());

const interface = inbox.interface;
const bytecode = inbox.bytecode;

let contractAddress,inboxContract;
beforeEach(()=>{
    // Get a list of all accounts
    web3.eth.getAccounts()
        .then(accountList=>{
            contractAddress = Array.from(accountList)[0];
            return contractAddress;
        })
        .then(contractAddress=>{
          inboxContract =  new web3.eth.Contract(JSON.parse(interface))
                .deploy({data: bytecode, arguments:['Hi there!']})
                .send({from: contractAddress, gas: '1000000'});
                return inboxContract;
        })
        .then(inboxContract=>{
            console.log(inboxContract.options.address);
        })
        
    //Use one of the accounts to deploy the contract
});

describe('Inbox contract test',()=>{
   
    it('Successfully Deploy Test',()=>{
        assert.ok(inboxContract.options.address);
    })
    it('Default Value test',()=>{
        
    })
    it('setMessage Test',()=>{

    })
})









/* mocha example*/
/*
class Car{
    drive(){
        return 'vroom';
    }

    park(){
        return 'stopped';
    }
}
let car;
beforeEach(()=>{
     car = new Car();
});
describe("Car test cases",()=>{
    
    it("Park method",()=>{
        
        assert.equal(car.park(),'stopped');
    })
    it("Drive test",()=>{
        assert.equal(car.drive(),'vroom');
    })
})
*/