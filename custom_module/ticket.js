class Ticket {
    //add train ?
    constructor(seatNum,vagon,passenger) {
        this.seatNum=seatNum;
        this.vagon=vagon;
        this.passenger=passenger;
        if(typeof seatNum==='undefined') this.seatNum=0;
        if(typeof vagon==='undefined') this.vagon=0;
        if(typeof passenger==='undefined') {this.passenger.name="no name"; this,passenger.surname="no surname";}
    }
}
// do i need this array of tickets?
// let ticketList=new Array();
// let soldTicketList =new Array();

// i. Покупка пасажиром квитка на потяг 
function buyTicket(seatNum,vagon,passenger, train) {
    let ticket= new Ticket(seatNum,vagon,passenger);
    // 
    train.ticketListInTrain.push(ticket);
    // 
    // do i need to push ticket in this array?
    // soldTicketList.push(ticket);
    return ticket;

}
// j. Зміна квитка із одного потяга на інший 

// ??????? is ok?
function changeTicket(seatNum, vagon,passenger, train1, train2) {
    let ticket=findSoldTicket(seatNum,vagon,passenger,train1);
    if(ticket===-1) return -1;
    deleteTicket(seatNum, vagon,passenger,train1);
    buyTicket(seatNum,vagon,passenger,train2);

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
function findSoldTicket(seatNum, vagon,passenger, train) {
    for(let id=0;id<train.ticketListInTrain.length;id++) {
        let ticket = train.ticketListInTrain[id];
        if(ticket.seatNum===seatNum&&ticket.vagon===vagon&& ticket.passenger===passenger) return ticket;
    }
    return -1;
}
function deleteTicket(seatNum, vagon,passenger, train) {
    let ticket = findSoldTicket(seatNum, vagon,passenger, train);
    if(ticket===-1) return -1;
    let id=train.ticketListInTrain.indexOf(ticket);
    train.ticketListInTrain.splice(id,1);
    return 1;
}

function getTicket(train) {
    console.log(`\nALL TICKETS IN TRAIN ${train.direction} ${train.code}\n`);
    for(let id=0; id<train.ticketListInTrain.length; id++) {
        let ticket=train.ticketListInTrain[id];
        console.log(`Ticket ${id+1}:seat number ${ticket.seatNum} vagon ${ticket.vagon} passenger name ${ticket.passenger.name} ${ticket.passenger.surname}`);
    }
    console.log();
    return train.ticketListInTrain;
}

// ЕКСПОРТУВАТИ ФУНКЦІЇ
exports.buyTicket=buyTicket;
exports.deleteTicket=deleteTicket;
exports.findSoldTicket=findSoldTicket;
exports.changeTicket=changeTicket;
exports.getTicket=getTicket;