1st place in the Token Engineering Track and Silver Overall 🏆 at [Diffusion 2019](https://medium.com/@Angela.Kreitenweis/tokenengineering-at-diffusion-berlin-e59b9e38b060) 

README

## Description


This research and development project describes a method to create a decentralized and transparently backed credit system as a community-specific digital currency with is governed through a Moloch-fork DAO. Users can mint, burn, and hold the currency and participate in its governance by voting on decisions concerning the allocation / distribution of funds generated via "DAO Tax". 

The proposed implementation would operate on a public blockchain and would be backed by Ether. The community currency is 100% backed by reserves, in this case ETH, which are locked into a verified on-chain collateral - The reserve is leveraged into a credit supply, which automatically mints new tokens via a bonding curve smart-contract, a concept originally developed by Eyal Hertzog which he calls the Bancor Protocol. These tokens are essentially a share of the common's economy using them.

We included a "DAO Tax" implementation to the token contract. Whenever the token is minted from the token's smart contract or transferred between addresses, an amount of tokens is allocated automatically to a community pool which governed by the DAO (TrojanPool.sol). the token contract also implements a "redistribution tax", a similar mechanism that awards all token holders.

## Motivation
Collaborative networks of artist-run, creative communities, and non-commercial initiatives that operate outside institutional frameworks provide an important ground for experimentation, innovation and artistic expression. This is certainly the case for Athens, where the recent past of capital controls and economic uncertainties has led to the closing-down of commercial gallery spaces and the emergence of collaborative networks of support between artist-organised intiatives. However, such initiatives struggle to achieve sustainable methods to support their practices despite having active and dedicated communities who care. The underfunding and privatization of art has led to an unsustainable community funding model. 

Furthermore, the mechanism we describe can be considered a "DAO primitive" that can forked and the depolyment parameters such as % "DAO Tax" and Bonding Curve parameters adapted to scenarios such as creating a BC fundraising mechanism for Moloch-fork DAOs, or Moloch x Continuous Organizations, and other novel crypto-economic experiments and use-cases.


## Goals

* Provide creative communities with a usable digital currency built on blockchain technology, as a means of fuelling shared goals and exchanging resources across borders without the mediation of banks and third parties.

* Participants are incetivised to be involved / contribute through the DAO structure.

* Provide a source of revenue for the DAO through the economic activities that its currency generates, via "DAO tax".

* Anti-Speculative: In our implementation, the currency value is pegged to ETH, is backed by a verifiable reserve of ETH that guarantees a minimum value. Future implementations can chose to deploy with different bonding curve parameters, such as in the case for BC fundraising scenarios.

* Making the flow of capital more efficient through the system unlocks collaborative value and benefits all participants. Creating a circular economy between participants, and between participants and the "outside world". 

* Autonomous and immutable: There is no "killswitch" or "backdoor". The only way to withdraw Ether from the smart contract is to burn the token. The creator, nor anybody else, can ever access this reserve pool of ether unless burning tokens, thus guaranteeing a minimum value for each token.

## Long Term vision:

In the conditions of today's market-driven global art economy, only the most successful artists afford to sustain their practices. Redistributive and participatory community currencies could help reward collaborative practices and sustain the resources that we share. Artists involved should be able to exchange value between communities and sustain collaborative practices outside the restraints of national borders and capital controls, and without the interference of banks, due to the significant efficiency unlocked in building and operating crypto-economical systems that encode shared values and the pursuit of common goals.

## Contract Structure

`TrojanToken.sol` is an ERC20-compliant token contract with a built-in bonding curve. This token is used as the "approved token" for the Trojan DAO main contract. TROJ tokens can be minted through the contract, which uses a bonding curve as an automated market maker. The smart contract accumulates Ether when participants mint the token and it distributes Ether when participants burn it.  

'TrojanPool.sol' is a modified version of Moloch's Pool contract, a follow-on funding contract that mirrors the investments of the DAO. In our example implementation, the minting process is subject to a 2% DAO tax, where the tax amount is deposited into the Trojan Pool. Burning tokens similarly is taxed 3% to the DAO. Transfers of the token are subject to a 1% "redistribution" tax, whereby the tax is redistributed to all the token holders. 

In our example implementation, we built off the "Sparkle" token, which in turn was inspired by Bomb Token (BOMB) and Ampleforth (AMPL). However in "Sparkle" the "creator tax" is sent directly to an individual's ethereum address. Our implementation represents a significant imrpovement from the above: the revenue generated by the token's tax mechanisms are sent automatically to a pool governed by a DAO so as to be collectively distributed by the participants towards projects of mutual benefit, rather than being directed to any one individual's ethereum address.  

This project demonstrates that the bonding curve token deployed together with a modified version of MolochPool.sol system can be used to automatically grant a Moloch DAO with additional funding through the minting and burning of the token.


## Solidity proof of concept
See [source-code](https://github.com/diffusioncon/Trojan-DAO-Ethereum/tree/master/buidler-contracts/contracts) for a proof of concept implementation on Ethereum using Solidity.

## Contracts
[GuildBank.sol](https://github.com/diffusioncon/Trojan-DAO-Ethereum/blob/master/buidler-contracts/contracts/GuildBank.sol)

[TrojanDAO.sol](https://github.com/diffusioncon/Trojan-DAO-Ethereum/blob/master/buidler-contracts/contracts/TrojanDao.sol)

[TrojanPool.sol](https://github.com/diffusioncon/Trojan-DAO-Ethereum/blob/master/buidler-contracts/contracts/TrojanPool.sol)

[TrojanToken.sol](https://github.com/diffusioncon/Trojan-DAO-Ethereum/blob/master/buidler-contracts/contracts/TrojanToken.sol)

## Token-economic Simulations
CadCAD simulations

Scenarios simulated: mint, burn, and transfer.

Further negative tests and edge case tests need to be done.

- [CADcad model](https://github.com/TROJANFOUNDATION/Trojan-DAO-Monetary-System/blob/master/cadCAD_simulation/trojan_simulation.py)
- [Readme](https://github.com/TROJANFOUNDATION/Trojan-DAO-Monetary-System/blob/master/cadCAD_simulation/README.md)

![individual-mint-burn-trojan-simulation](https://github.com/TROJANFOUNDATION/Trojan-DAO-Monetary-System/blob/master/cadCAD_simulation/mint-burn-graph.png)

## Documentation

[Schematic-diagram](https://github.com/TROJANFOUNDATION/Trojan-DAO-Monetary-System/blob/master/Proposal%20Process%20-%20Trojan%20DAO.pdf) 

[CAD-System-definition](https://github.com/TROJANFOUNDATION/Trojan-DAO-Monetary-System/blob/master/CAD%20System%20Definition%20-%20Trojan%20DAO.pdf)

[Differential equations for mint, burn and transfer scenarios](https://github.com/TROJANFOUNDATION/Trojan-DAO-Monetary-System/blob/master/Differential-equations.pdf)

## TODOs
* The `TrojanDao.sol` contract depends on the `TrojanToken.sol` contract, which depends on the `TrojanPool.sol` contract, which depends on the `TrojanDao.sol` contract. To work around this circular dependency, we had to add a `setTrojanPool` function. This is horrible for security purposes.
* The `TrojanToken.sol` contract needed to bootstrap the creator with tokens, in order to make testing easier. This should also be fixed for production.
* The TrojanToken contract can deposit funds into the Pool, but it cannot exit them. One way to exit the shares is by making a proxy contract that can receive a grant from the Trojan DAO and then call a function in the TrojanToken contract that will exit the funds.
* The UI of the DAO (Moloch fork) needs to integrate the TrojanToken methods.
* Explore the possibility of altering the “redistribution tax” code so that this amount is spread evenly between holders rather than relative to holdings (more like a "UBI").
* Run more robust tests with cadCAD, using the results to fine-tune the “tax policies” of the token.

This open-source project is currently accepting funding via a gitcoin Grant: (https://gitcoin.co/grants/359/trojan-dao-inifinite-moloch)
