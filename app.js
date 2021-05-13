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
    if(totalRupees>=1200){
        document.getElementById('rupee').src="https://i.imgur.com/ogBlCtV.png"
        document.getElementById('header').classList.replace('bg-orange', 'bg-silver')
        document.getElementById('body').classList.replace('body-orange', 'body-silver')
    }else if(totalRupees>=1000){
        document.getElementById('rupee').src="https://i.imgur.com/O87Y42x.png"
        document.getElementById('header').classList.replace('bg-purple', 'bg-orange')
        document.getElementById('body').classList.replace('body-purple', 'body-orange')
    }else if(totalRupees>=800){
        document.getElementById('rupee').src="https://i.imgur.com/bX0RHhl.png"
        document.getElementById('header').classList.replace('bg-red', 'bg-purple')
        document.getElementById('body').classList.replace('body-red', 'body-purple')
    }else if(totalRupees>=600){
        document.getElementById('rupee').src="https://i.imgur.com/Adq8DdU.png"
        document.getElementById('header').classList.replace('bg-yellow', 'bg-red')
        document.getElementById('body').classList.replace('body-yellow', 'body-red')

    }else if(totalRupees>=400){
        document.getElementById('rupee').src="https://i.imgur.com/JAyFaY7.png"
        document.getElementById('header').classList.replace('bg-blue', 'bg-yellow')
        document.getElementById('body').classList.replace('body-blue', 'body-yellow')

    }else if(totalRupees>=200){
        document.getElementById('rupee').src="https://i.imgur.com/ZYd5Rbl.png"
        document.getElementById('header').classList.replace('bg-success', 'bg-blue')
        document.getElementById('body').classList.replace('bg-color', 'body-blue')
    }
}
function collectPassives() {
        for (let key in passiveUpgrades) {
            let item = passiveUpgrades[key]
        totalRupees += item.multiplier * item.quantity
    }
    updateRupees()
}

    //TODO research update function with for loop
function startInterval(){
    let collectionInterval = setInterval(collectPassives, 3000)
}
startInterval()

