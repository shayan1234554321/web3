//  https://eth-sepolia.g.alchemy.com/v2/hUSuJTXXB2VOjK1A5SbJtFyvPin0kkxS

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity : '0.8.0',
  networks: {
    ropsten: {
      url : "https://eth-sepolia.g.alchemy.com/v2/hUSuJTXXB2VOjK1A5SbJtFyvPin0kkxS",
      accounts: [ '004b475715512fa6fe145c394c9e9392d165500f69d26d6ce3e4a828d2db62aa' ]
    }
  }
}