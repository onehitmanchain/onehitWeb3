import { useState } from 'react';
import { useEffect } from 'react';
import { MetaMask } from '@web3-react/metamask'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import Web3 from 'web3'
import { changeNetwork, ChainId } from '../../web3/ONEChainNet'
import ONEMint from '../../web3/ONEMint'
import ONEBattle0 from '../../web3/ONEBattle0'
import './ONEFtghting.scss';


import img_ftghting_bg from "../../asset/image/ftghting/img_ftghting_bg.png"
import img_head_bg from "../../asset/image/ftghting/img_head_bg.png"
import icon_logo from "../../asset/image/icon/icon_logo.png"
import img_head_btn from "../../asset/image/ftghting/img_head_btn.png"
import img_head_wallet_bg from "../../asset/image/ftghting/img_head_wallet_bg.png"
import icon_head_matemask from "../../asset/image/ftghting/icon_head_matemask.png"
import icon_head_bnb from "../../asset/image/ftghting/icon_head_bnb.png"
import img_ftghting_monster from "../../asset/image/ftghting/img_ftghting_monster.png"
import img_ftghting_bottom from "../../asset/image/ftghting/img_ftghting_bottom.png"
import img_ftghting_info_head from "../../asset/image/ftghting/img_ftghting_info_head.jpg"
import img_ftghting_info_assets_bg from "../../asset/image/ftghting/img_ftghting_info_assets_bg.png"
import img_ftghting_increase from "../../asset/image/ftghting/img_ftghting_increase.png"
import icon_ftghting_info_icon from "../../asset/image/ftghting/icon_ftghting_info_icon.png"
import img_ftghting_monster_sum_bg from "../../asset/image/ftghting/img_ftghting_monster_sum_bg.png"
import img_ftghting_monster_sum_hot from "../../asset/image/ftghting/img_ftghting_monster_sum_hot.png"
import img_ftghting_monster_sum_getting from "../../asset/image/ftghting/img_ftghting_monster_sum_getting.png"
import icon_ftghting_number_bg from "../../asset/image/ftghting/icon_ftghting_number_bg.png"
import img_ftghting_weapons from "../../asset/image/ftghting/img_ftghting_weapons.png"
import btn_ftghting_arms from "../../asset/image/ftghting/btn_ftghting_arms.png"
import btn_ftghting_onehit from "../../asset/image/ftghting/btn_ftghting_onehit.png"
import btn_ftghting_pet from "../../asset/image/ftghting/btn_ftghting_pet.png"
import btn_ftghting_skill from "../../asset/image/ftghting/btn_ftghting_skill.png"
import btn_ftghting_upgrade from "../../asset/image/ftghting/btn_ftghting_upgrade.png"


export const injected = new InjectedConnector({
  supportedChainIds: [ChainId.MATICTEST],
})

function ONEFtghting() {

  const [chain, setChain] = useState('');
  const [response, setResponse] = useState('');
  const { activate, account, chainId, active, library, deactivate } = useWeb3React();
  useEffect(() => {
    registMessage();
  }, []);
  useEffect(() => {
    initData();
  }, []);

  const initData = () => {

  }

  const registMessage = () => {

    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        deactivate()
      }
    })

    window.ethereum.on('disconnect', () => {
      deactivate()
    })

    window.ethereum.on('close', () => {
      deactivate()
    })

    window.ethereum.on('message', message => {
      // console.log('message', message)
    })
  }

  const getTokenOwner = (account) => {
    console.log(account, "account");
    ONEMint.getTokenOwner(library, account)
  }

  const mint = () => {
    ONEMint.mint(library, account);
  }

  const fight = () => {
    ONEBattle0.playFight(library, account);
  }


  const connectedClick = () => {
    console.log(chainId);
    if (chainId != ChainId.MATICTEST) {
      changeNetwork(ChainId.MATICTEST).then(res => {
        activateMask();
      })
      return;
    }
    activateMask();
  }

  const activateMask = async () => {
    try {
      await activate(injected, undefined,true).then(res => {
        getTokenOwner(account);
      }).catch(error => {
      })
    } catch (ex) {
      console.log(ex, "ex");
    }
  }

  const getChainLows = () => {
    if (account) {
      return account.substring(0, 5) + "....." + account.substring(account.length - 5, account.length);
    }
    return "Connected wallet"
  }

  return (
    <div className="Ftghting_bg">
      <img className='img_bg' src={img_ftghting_bg} alt=""></img>

      <div className='head'>
        <img className='head_bg' src={img_head_bg} alt=""></img>
        <img className='logo' src={icon_logo} alt=""></img>
        <div className='layout'>
          <div className='btn_layout'>
            <img className='img' src={img_head_btn} alt=""></img>
            <span className='txt'>Market</span>
          </div>
          <div className='btn_layout'>
            <img className='img' src={img_head_btn} alt=""></img>
            <span className='txt'>Dashboard</span>
          </div>
          <div className='wallet'>
            <img className='wallet_bg' src={img_head_wallet_bg} alt=""></img>
            <div className='wallet_layout' onClick={connectedClick}>
              <img className='icon' src={icon_head_matemask} alt=""></img>
              <img className='icon' src={icon_head_bnb} alt=""></img>
              <span className='txt'>{account ? getChainLows() : 'Connected wallet'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='layout_moster'>
        <img className='img_monster' src={img_ftghting_monster} alt=""></img>
        <div className='sum_layout'>
          <img className='img' src={img_ftghting_monster_sum_bg} alt=""></img>
          <img className='img_getting' src={img_ftghting_monster_sum_getting} alt=""></img>
          <span className='txt_getting'>Congratulations on getting</span>
          <div className='hot_layout'>
            <img className='hot' src={img_ftghting_monster_sum_hot} alt=""></img>
            <span className='txt_hot'>OHT</span>
          </div>
          <span className='txt_reword_coint'>+ 0.9362</span>
        </div>
        <div className='number_layout'>
          <img className='img' src={icon_ftghting_number_bg} alt=""></img>
          <span className="title_number">number</span>
          <span className="txt_number">126</span>
        </div>
      </div>

      <div className='left'>
        <div className='info_layout'>
          <img className='info_head' src={img_ftghting_info_head} alt=""></img>
          <div className='info_content'>
            <span className='name'>MODOTOOVIP</span>
            <span className='address'>Connected wallet: MetaMask</span>
          </div>
        </div>
        <div className='assets_layout'>
          <img className='img' src={img_ftghting_info_assets_bg} alt=""></img>
          <span className='title'>Assets</span>
          <span className='txt'>92’358’943’589.3498  OHT</span>
          <img className='increase' src={img_ftghting_increase} alt=""></img>
        </div>
        <div className='monster_info' >
          <img className='img' src={img_ftghting_info_assets_bg} alt=""></img>
          <span className="title">dark forest</span>
          <span className="content">Monster Argas</span>
          <img className='monster_icon' src={icon_ftghting_info_icon} alt=""></img>
        </div>
        <span className="desc">Villagers with stone knives can enter the stone statue secret realm and break the stone statue. After the stone statue is broken, the villagers can obtain a thing called stone spirit. Villagers can exchange Shi Ling for OHT, the hard currency of Tianwu Continent.</span>
      </div>
      <img className='bttom_bg' src={img_ftghting_bottom} alt=""></img>
      <img className='weapons' src={img_ftghting_weapons} alt=""></img>
      <div className='bottom_group_btn'>
        <div className='btn_layout' onClick={mint}>
          <img className='img' src={btn_ftghting_skill} alt=""></img>
          <span className='title'>Skill</span>
        </div>
        <div className='btn_layout left_37'>
          <img className='img' src={btn_ftghting_arms} alt=""></img>
          <span className='title'>ARMS</span>
        </div>
        <div className='btn_layout left_37'>
          <img className='img' src={btn_ftghting_pet} alt=""></img>
          <span className='title'>PET</span>
        </div>
        <div className='btn_onehit' onClick={fight}>
          <img className='img' src={btn_ftghting_onehit} alt=""></img>
          <span className='txt'>ONEHIT</span>
        </div>
        <div className='btn_upgrade'>
          <img className='img' src={btn_ftghting_upgrade} alt=""></img>
          <span className='txt'>upgrade</span>
        </div>
      </div>

    </div>
  );
}

export default ONEFtghting;