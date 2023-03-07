class Ticket {
    //add train ?
    constructor(seatNum,vagon) {
        this.seatNum=seatNum;
        this.vagon=vagon;
        
        if(typeof seatNum==='undefined') this.seatNum=0;
        if(typeof vagon==='undefined') this.vagon=0;
    }
}
// do i need this array of tickets?
// let ticketList=new Array();
// let soldTicketList =new Array();

// i. Покупка пасажиром квитка на потяг 
function buyTicket(seatNum,vagon, train) {
    let ticket= new Ticket(seatNum,vagon);
    // 
    train.ticketListInTrain.push(ticket);
    // 
    // do i need to push ticket in this array?
    // soldTicketList.push(ticket);
    return ticket;

}
// j. Зміна квитка із одного потяга на інший 

// ??????? is ok?
function changeTicket(seatNum, vagon, train1, train2) {
    let ticket=findSoldTicket(seatNum,vagon,train1);
    if(ticket===-1) return -1;
    deleteTicket(seatNum, vagon,train1);
    buyTicket(seatNum,vagon,train2);

    return 1;
}

// k. Скасування покупки квитка 


// function findSoldTicket(seatNum, vagon) {
//     for(let id=0;id<soldTicketList;id++) {
//         let ticket=soldTicketList[id];
//         if(ticket.seatNum===seatNum&&ticket.vagon===vagon) return ticket;

//     }
//     return -1;
// }
// function deleteTicket(seatNum, vagon) {
//     let ticket=findSoldTicket(seatNum,vagon);
//     if(ticket===-1) return -1;
//     let id=soldTicketList.indexOf(ticket);
//     soldTicketList.splice(id,1);
//     return 1;

// }
function findSoldTicket(seatNum, vagon, train) {
    for(let id=0;id<train.ticketListInTrain.length;id++) {
        let ticket = train.ticketListInTrain[id];
        if(ticket.seatNum===seatNum&&ticket.vagon===vagon) return ticket;
    }
    return -1;
}
function deleteTicket(seatNum, vagon, train) {
    let ticket = findSoldTicket(seatNum, vagon, train);
    if(ticket===-1) return -1;
    let id=train.ticketListInTrain.indexOf(ticket);
    train.ticketListInTrain.splice(id,1);
    return 1;
}



// ЕКСПОРТУВАТИ ФУНКЦІЇ
exports.buyTicket=buyTicket;
exports.deleteTicket=deleteTicket;
exports.findSoldTicket=findSoldTicket;
exports.changeTicket=changeTicket;