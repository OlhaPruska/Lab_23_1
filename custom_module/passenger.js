class Passenger {
    constructor (name, surname) {
        this.name=name;
        this.surname=surname;
        if(typeof name==='undefined') this.name='NoName';
        if(typeof surname==="undefined") this.surname='Nosurname';
    }
}

// a. Додавання нового пасажира в колекцію 
function addPassenger(name, surname, train) {
   
    let passenger=new Passenger(name, surname);
    train.passengerList.push(passenger);
    return passenger;
}

// b. Редагування пасажира в колекції 
function editPassenger(name,surname, newName, newSurname,train) {
    let passenger=findPassenger(name, surname,train);
    if (passenger===-1) return -1;
    
    let id=train.passengerList.indexOf(passenger);
    train.passengerList[id].name=newName;
    train.passengerList[id].surname=newSurname;
    return 1;
}

// c. Видалення пасажира з колекції 
function deletePasenger(name, surname, train) {
    let passenger=findPassenger(name, surname,train);
    if (passenger===-1) return -1;
    let id=train.passengerList.indexOf(passenger);
    train.passengerList.splice(id,1);
    return 1;
}

// d. Пошук одного пасажира в колекції 
function findPassenger(name, surname, train) {
    for(let id=0; id<train.passengerList.length;id++) {
        let passenger = train.passengerList[id];
        if(name===passenger.name&&surname===passenger.surname) return passenger;
    }
    return -1;
}


//ЕКСПОРТУВАТИ ФУНКЦІЇ!!!!!!!! 





// Отримати список пацієнтів у конкретній лікарні
// function get_Patients_List (hospital) {

//     console.log("\n" + `Список усіх пацієнтів у лікарні ${hospital.name}:`);

//     for (let id = 0; id < hospital.patients_list.length; id++) {

//         let patient = hospital.patients_list[id];
//         console.log(`\tІм'я пацієнта: ${patient.name}, вік: ${patient.age}`);

//     }

//     console.log();
    
//     return hospital.patients_list;

// }