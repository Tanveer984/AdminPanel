import'./widgets.scss'
import {MdKeyboardArrowUp,MdOutlineShoppingCart,MdOutlineMonetizationOn,MdOutlineAccountBalanceWallet} from 'react-icons/md'
import {FaRegUserCircle} from 'react-icons/fa'

export default function Widgets({type}) {

    let amount = 100;
    let percent = 20;

    let data;
    switch(type){
        case "users":
           data={ 
            title:"USERS",
            isMoney:false,
            link: "see all users",
            icon:<FaRegUserCircle className='icon' style={{color:"crimson",backgroundColor:"#ed143d47",borderRadius:"5px"}}/>
        }
        break;

        case "orders":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"see all orders",
                icon:<MdOutlineShoppingCart className="icon" style={{color:"goldened",backgroundColor:"rgb(138 43 226 / 28%)",borderRadius:"5px"}}/>
        }
        break;

        case "earnings":
            data={
                title:"EARNINGS",
                isMoney:"true",
                link:"Gross Earnings",
                icon:<MdOutlineMonetizationOn className="icon" style={{color:"darkgreen",backgroundColor:"rgb(144 238 144 / 52%)",borderRadius:"5px"}}/>
        }
        break;

        case "balance":
            data={
                title:"BALANCE",
                isMoney:"true",
                link:"Net Balance",
                icon:<MdOutlineAccountBalanceWallet className="icon" style={{color:"purple",backgroundColor:"rgb(128 0 128 / 22%)",borderRadius:"5px"}}/>
        } 
        break;

        default:
        break;
    }

  return (
    <div className='widget'>
        <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{data.isMoney && "$"}{amount}</div>
        <div className="link">{data.link}</div>

        </div>

        <div className="right">
            <div className="percentage positive">
            <MdKeyboardArrowUp/>
                {percent}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}
