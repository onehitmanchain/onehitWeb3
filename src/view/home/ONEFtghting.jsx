import './ONEFtghting.scss';


import img_ftghting_bg from "../../asset/image/ftghting/img_ftghting_bg.png"
import img_head_bg from "../../asset/image/ftghting/img_head_bg.png"
import icon_logo from "../../asset/image/icon/icon_logo.png"
import img_head_btn from "../../asset/image/ftghting/img_head_btn.png"
import img_head_wallet_bg from "../../asset/image/ftghting/img_head_wallet_bg.png"
import icon_head_matemask from "../../asset/image/ftghting/icon_head_matemask.png"
import icon_head_bnb from "../../asset/image/ftghting/icon_head_bnb.png"
import img_ftghting_monster from "../../asset/image/ftghting/img_ftghting_monster.png"

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
      <img className='img_monster' src={img_ftghting_monster}></img>

    </div>
  );
}

export default ONEFtghting;