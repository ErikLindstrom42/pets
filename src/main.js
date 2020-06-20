
const BowWowKennels = []
const kennelLog = (name,breed) => {
    newDog = {
        name:name,
        breed:breed
        }
    BowWowKennels.push(newDog)
}

// const packOfPets = kennelClub(pet1,pet2,pet3)

// console.log(packOfPets)




// const pet1 = {
//     name: "Spike",
//     breed: "Belgian Malinois"
// }

// const pet2 = {
//     name: "Rex",
//     breed: "Rodesian Ridgeback"
// }
// const pet3 = {
//     name: "Spike",
//     breed: "Rottweiler"
// }

kennelLog("Spike","Belgian Malinois")
kennelLog("Rex","Rodesian Ridgeback")
kennelLog("Spike","Rottweiler")
console.log(BowWowKennels)








