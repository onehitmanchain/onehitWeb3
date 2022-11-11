
import OHWeapon from '../asset/abi/OHWeapon.json'

class ONEMint {

   static mint(library, account) {
        const _web3 = library;
        var contract = new _web3.eth.Contract(
            OHWeapon.abi,
            "0xfDDF4EDFCa149938416A3F3d2d6D7FCB145a7b5A"
        );
        try {
            contract.methods.mint(account,1).send({
                from: account,
            }, function (error, result) {
                console.log(result, error, "resut");

            }).on('transactionHash', (hash, message) => {
                console.log(message, hash);
            }).catch(error => {
                console.log(error, "error");
            });
        } catch (err) {
            console.log(err, "error");
        }
    }

    static getTokenOwner(library, account) {
        const _web3 = library;
        let contract = new _web3.eth.Contract(
            OHWeapon.abi,
            "0xfDDF4EDFCa149938416A3F3d2d6D7FCB145a7b5A"
        );
        try {
            contract.methods.tokenOfOwners(account).call({
                from: account,
                // value: _web3.utils.toWei(price, "ether"),
            }, function (error, result) {
                console.log(result, error, "resut");

            }).then(res=>{
                console.log(res, "res");
            }).catch(error => {
                console.log(error, "error");
            });
        } catch (err) {
            console.log(err, "error");
        }
    }

}

export default ONEMint;
