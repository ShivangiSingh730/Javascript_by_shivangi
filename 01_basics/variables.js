const accountId=1445533 //it is not changed because it is constant
let accountEmail="hitest@google.com"
var accountPassword = "12345"
acocuntCity="Jaipur"
let accountState;
// accountId=2 // not allowed double assignment

accountEmail = "hc@hc.com"
accountPassword="21212112"
accountCity="bengaluru"
console.log(accountId);

/*
Prefer not to use var beacause of issue in block 
scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
