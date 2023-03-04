class Ticket {
    constructor(seatNum,vagon) {
        this.seatNum=seatNum;
        this.vagon=vagon;
        if(typeof seatNum==='undefined') this.seatNum=0;
        if(typeof vagon==='undefined') this.vagon=0;
    }
}
let ticketList=new Array();
let soldTicketList =new Array();
// i. Покупка пасажиром квитка на потяг 
function buyTicket(seatNum,vagon,) {
    let ticket= new Ticket(seatNum,vagon);
    soldTicketList.push(ticket);
    return ticket;

}
// j. Зміна квитка із одного потяга на інший 
// k. Скасування покупки квитка 
function findSoldTicket(seatNum, vagon) {
    for(let id=0;id<soldTicketList;id++) {
        let ticket=soldTicketList[id];
        if(ticket.seatNum===seatNum&&ticket.vagon===vagon) return ticket;

    }
    return -1;
}
function deleteTicket(seatNum, vagon) {
    let ticket=findSoldTicket(seatNum,vagon);
    if(ticket===-1) return -1;
    let id=soldTicketList.indexOf(ticket);
    soldTicketList.splice(id,1);
    return 1;

}
// l. Пошук потяга на який продали найбільше/найменше квитків 

// ЕКСПОРТУВАТИ ФУНКЦІЇ!!!!!