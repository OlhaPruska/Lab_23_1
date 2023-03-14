const train=require('./train');
const ticket=require('./ticket');
const passenger=require('./passenger');

// операції з пасажирами
exports.addPassenger=passenger.addPassenger;
exports.deletePasenger=passenger.deletePasenger;
exports.editPassenger=passenger.editPassenger;
exports.findPassenger=passenger.findPassenger;
exports.getPassengersFromTrain=passenger.getPassengersFromTrain;

// операції з квитками
exports.buyTicket=ticket.buyTicket;
exports.deleteTicket=ticket.deleteTicket;
exports.findSoldTicket=ticket.findSoldTicket;
exports.changeTicket=ticket.changeTicket;

// операції з потягами
exports.addTrain=train.addTrain;
exports.deleteTrain=train.deleteTrain;
exports.editTrain=train.editTrain;
exports.findTrain=train.findTrain;
exports.maxAmountOfTickets=train.maxAmountOfTickets;
exports.minAmountOfTickets=train.minAmountOfTickets;
exports.getTrains=train.getTrains;