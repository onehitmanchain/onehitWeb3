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

function ONEFtghting() {
  return (
    <div className="Ftghting_bg">
      <img className='img_bg' src={img_ftghting_bg}></img>
      <div className='head'>
        <img className='head_bg' src={img_head_bg}></img>
        <img className='logo' src={icon_logo}></img>
        <div className='layout'>
          <div className='btn_layout'>
            <img className='img' src={img_head_btn}></img>
            <span className='txt'>Market</span>
          </div>
          <div className='btn_layout'>
            <img className='img' src={img_head_btn}></img>
            <span className='txt'>Dashboard</span>
          </div>
          <div className='wallet'>
            <img className='wallet_bg' src={img_head_wallet_bg}></img>
            <div className='wallet_layout'>
              <img className='icon' src={icon_head_matemask}></img>
              <img className='icon' src={icon_head_bnb}></img>
              <span className='txt'>connect wallet</span>
            </div>
          </div>
        </div>
      </div>
      <div className='layout_moster'>
        <img className='img_monster' src={img_ftghting_monster}></img>
        <div className='sum_layout'>
          <img className='img' src={img_ftghting_monster_sum_bg}></img>
          <img className='img_getting' src={img_ftghting_monster_sum_getting}></img>
          <span className='txt_getting'>Congratulations on getting</span>
          <div className='hot_layout'>
            <img className='hot' src={img_ftghting_monster_sum_hot}></img>
            <span className='txt_hot'>OHT</span>
          </div>
          <span className='txt_reword_coint'>+ 0.9362</span>
        </div>
        <div className='number_layout'>
          <img className='img' src={icon_ftghting_number_bg}>

          </img>
          <span className="title_number">number</span>
          <span className="txt_number">126</span>
        </div>
      </div>

      <div className='left'>
        <div className='info_layout'>
          <img className='info_head' src={img_ftghting_info_head}></img>
          <div className='info_content'>
            <span className='name'>MODOTOOVIP</span>
            <span className='address'>Connected wallet: MetaMask</span>
          </div>
        </div>
        <div className='assets_layout'>
          <img className='img' src={img_ftghting_info_assets_bg}></img>
          <span className='title'>Assets</span>
          <span className='txt'>92’358’943’589.3498  OHT</span>
          <img className='increase' src={img_ftghting_increase}></img>
        </div>
        <div className='monster_info' >
          <img className='img' src={img_ftghting_info_assets_bg}></img>
          <span className="title">dark forest</span>
          <span className="content">Monster Argas</span>
          <img className='monster_icon' src={icon_ftghting_info_icon}></img>
        </div>
        <span className="desc">Villagers with stone knives can enter the stone statue secret realm and break the stone statue. After the stone statue is broken, the villagers can obtain a thing called stone spirit. Villagers can exchange Shi Ling for OHT, the hard currency of Tianwu Continent.</span>
      </div>
      <img className='bttom_bg' src={img_ftghting_bottom}></img>
      <img className='weapons' src={img_ftghting_weapons}></img>
      <div className='bottom_group_btn'>
        <div className='btn_layout'>
          <img className='img' src={btn_ftghting_skill}></img>
          <span className='title'>Skill</span>
        </div>
        <div className='btn_layout left_37'>
          <img className='img' src={btn_ftghting_arms}></img>
          <span className='title'>ARMS</span>
        </div>
        <div className='btn_layout left_37'>
          <img className='img' src={btn_ftghting_pet}></img>
          <span className='title'>PET</span>
        </div>
        <div className='btn_onehit'>
          <img className='img' src={btn_ftghting_onehit}></img>
          <span className='txt'>ONEHIT</span>
        </div>
        <div className='btn_upgrade'>
          <img className='img' src={btn_ftghting_upgrade}></img>
          <span className='txt'>upgrade</span>
        </div>
      </div>
    </div>
  );
}

export default ONEFtghting;