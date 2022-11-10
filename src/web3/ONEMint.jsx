

export function getContract(library, abi, address) {
    const web3 = new Web3(library.provider)
    return new web3.eth.Contract(abi, address)
  }
  
  const contract = getContract(library, abi, address)
  contract.methods
    .exit()
    .send({
      from: account,
    })
    .on('transactionHash', (hash) => {
      
    })