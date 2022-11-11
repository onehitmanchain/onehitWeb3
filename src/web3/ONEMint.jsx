import { useWeb3React } from '@web3-react/core'
import OHSWord from '../asset/abi/OHSWord.json'

class ONEMint {


   static mint(library, account) {
        const _web3 = library;
        var contract = new _web3.eth.Contract(
            OHSWord.abi,
            "0xe04bDe72B86E7a2c02E612be258FA1403a71Db1f"
        );
        try {
            contract.methods.mint(account).send({
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
            OHSWord.abi,
            "0xe04bDe72B86E7a2c02E612be258FA1403a71Db1f"
        );
        try {
            contract.methods.tokenOfOwners(account).call({
                from: account,
                // value: _web3.utils.toWei(price, "ether"),
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

}

export default ONEMint;
