import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";


function Lottery({n = 5, winningSum = 10}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    function buyTicket() {
        setTicket(genTicket(n));
    }
    return(
     <>
     <div>
        <h1> Lottery Game </h1>
       <Ticket ticket={ticket} />
     </div>
     <button onClick={buyTicket}> Buy New Ticket</button>
     <h3>{isWinning? "Congratulations, You Won" : "Try Again?"} </h3>
     
     </>
    )
}

export default Lottery;
