let totalRupees=0;

let clickUpgrades = {
    "woodenSword":{
        name: 'Wooden Sword',
        price: 25,
        quantity: 0,
        multiplier: 1
    },
    "kokiriSword":{
        name: "Kokiri Sword",
        price: 50, 
        quantity: 0,
        multiplier: 5
    },
    "masterSword":{
        name: "Master Sword",
        price: 75, 
        quantity: 0, 
        multiplier: 7
    },
    "biggoronSword":{
        name: "Biggoron Sword",
        price: 100,
        quantity: 0,
        multiplier: 10
    }
}
let passiveUpgrades={
    'goronBracelet':{
        name: "Goron Bracelet",
        price: 100,
        quantity: 0, 
        multiplier: 10
    },
    'bombs':{
        name: "Bombs",
        price: 150,
        quantity: 0,
        multiplier: 20, 
    },
    'bunnyHood':{
        name: 'Bunny Hood',
        price: 200, 
        quantity: 0,
        multiplier: 25
    },
    'powderKeg':{
        name: 'Powder Keg',
        price: 250,
        quantity: 0, 
        multiplier: 30
    }
}
function buy(key){
    let upgrade = clickUpgrades[key].price
    if(totalRupees>=upgrade){
        clickUpgrades[key].quantity++
        totalRupees -= upgrade
        updateActive(key)
    }else window.alert("Not enough rupees!")
}
function buyPassive(key){
    let pupgrade=passiveUpgrades[key].price
    if(totalRupees>=pupgrade){
        passiveUpgrades[key].quantity++
        totalRupees -= pupgrade
        updatePassive(key)
    }else window.alert("Not enough rupees!")
}
// TODO figure out sweet alerts 
function mineRupees(){
    totalRupees++
    for(let key in clickUpgrades){
        let item = clickUpgrades[key]
        totalRupees += item.multiplier * item.quantity
    }
    updateRupees()
}
function updatePassive(pitem){
    document.getElementById(`${pitem}`).innerText = passiveUpgrades[pitem].quantity.toString()
    updateRupees()
}

function updateActive(item) {
    document.getElementById(`${item}`).innerText = clickUpgrades[item].quantity.toString()
    updateRupees()
}

function updateRupees() {
    document.getElementById('rupeeCount').innerText = totalRupees.toString()
}

function collectPassives() {
        for (let key in passiveUpgrades) {
        let item = passiveUpgrades[key]
        totalRupees += item.Multiplier * item.Quantity
    }
    updateRupees()
}

    //TODO research update function with for loop
function startInterval(){
    collectionInterval = setInterval(collectPassives, 2000)
}
startInterval()

