class Train {
    constructor(direction, code) {
        this.direction=direction;
        this.code=code;
        this.passengerList=[];
        if(typeof direction==='undefined') this.direction='NoDirection';
        if(typeof code==='undefined') this.code='NoCode';
    }

}
let trainsList=new Array();
// e. Додавання потяга в колекцію
function addTrain(direction, code) {
    let train=new Train(direction,code);
    trainsList.push(train);
    return train;
}
// f. Редагування потяга в колекції
function editTrain(direction,code,newDirection,newCode) {
    for(let id=0;id<trainsList.length;id++) {
        let train = trainsList[id];
        if(train.direction===direction&&train.code===code) {
            trainsList[id].direction=newDirection;
            trainsList[id].code=newCode;
            return 1;
        }
    }
    return -1;
}

// h. Пошук одного потяга в колекції
function findTrain(direction,code) {
    for(let train in trainsList) {
        if(direction===train.direction&&code===train.code) return train;

    }
    return -1;
}

// !!!!!g. Видалення пасажира(потяга????) з колекції
function deleteTrain(direction, code) {
    for(let id=0;id<trainsList.length;id++) {
        let train=trainsList[id];
        if(train.direction===direction&&train.code===code) {
            trainsList.splice(id,1);
            return 1;
        }
    }
    return -1;
}
// ЕКСПОРТУВАТИ ФУНКЦІІ!!!!!





// Отримати список лікарень
// function get_Hospitals_List() {
//   console.log("\n" + "Список усіх лікарень:");

//   for (let id = 0; id < global_hospitals_list.length; id++) {
//     let hosp = global_hospitals_list[id];
//     console.log(`Назва лікарні: ${hosp.name}, адреса лікарні: ${hosp.address}`);
//   }

//   console.log();

//   return global_hospitals_list;
// }

// Експортуємо функції
// exports.find_Hospital = find_Hospital;
// exports.add_Hospital = add_Hospital;
// exports.remove_Hospital = remove_Hospital;
// exports.edit_Hospital = edit_Hospital;
// exports.get_Hospitals_List = get_Hospitals_List;
