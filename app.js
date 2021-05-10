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
        totalRupees-=upgrade
        updateActives(key)
    }else window.alert("Not enough rupees!")
}
function buyPassive(key){
    let pupgrade=passiveUpgrades[key].price
    if(totalRupees>=pupgrade){
        passiveUpgrades[key].quantity++
        totalRupees -= pupgrade
        updatePassives(key)
    }else window.alert("Not enough rupees!")
}
// TODO figure out sweet alerts 
function mineRupees(){
    totalRupees++
    for(let key in clickUpgrades){
        let item = clickUpgrades[key]
        totalRupees += item.multiplier * item.quantity
    }
    document.getElementById('rupeeCount').innerText = totalRupees.toString()
}
function updatePassives(pitem){
    document.getElementById(pitem).innerText = passiveUpgrades[pitem].Quantity.toString()
}

function updateActives(item){
    document.getElementById(item).innerText = clickUpgrades[item].Quantity.toString()
}

    //TODO research update function with for loop
function startInterval(){
    collectionInterval = setInterval(collectPassiveUpgrades, 2000)
    updateInterval = setInterval(update, 1000)
}

