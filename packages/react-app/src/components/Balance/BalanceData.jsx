import {useState} from "react"
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";
import "./BalanceData.css"

const BalanceData = ({}) => {
    const [showBalance, setShowBalance] = useState(false)

    const toggleBalance = () => {
        setShowBalance(!showBalance)
    }

    const input = "$10,000.00"

    return (
        <div className="__balance_input">
             <div>
            <input type={showBalance ? "text" : "password"} value={input} />
            <p>Available Balance</p>
        </div>

            <div className="icon" onClick={toggleBalance}>
                {showBalance ? (
                    <AiOutlineEyeInvisible size={28} />
                ) : (
                    <HiOutlineEye size={20}/>
                )}
            </div>
        </div>
       
        
    )
}

export default BalanceData