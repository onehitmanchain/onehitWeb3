
import OHBattle0 from '../asset/abi/OHBattle0.json'

class ONEBattle0 {

   static async playFight(library, account) {
        const _web3 = library;
        var contract = new _web3.eth.Contract(
            OHBattle0.abi,
            "0xF9dF57638448eB663Ad6C10E57fd5dE474376d71"
        );
        try {
            await  contract.methods.fight().send({
                from: account,
            }).then(res=>{
               let obj = res.events.FightResultEvent.returnValues;
            }).catch(error => {
                console.log(error, "error");
            });
        } catch (err) {
            console.log(err, "error catch");
        }
    }
}

export default ONEBattle0;
