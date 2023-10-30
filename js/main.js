console.log('js:loaded')

/*----- constants -----*/
// initial data states
//animation names
//image assets paths

const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

/*----- state variables -----*/
// state is the data that will change while the game is running

// let boredom; //integer
// let hunger; //integer
// let sleepiness; //integer

let state; 

// HFM later on - icebox features (age cycle for tama)

let age;
let cycles;

let timer; //setInterval id
let interval; // count of cycles

/*----- cached elements  -----*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

//TODO: add cache for game message string once added to game

const gameBtnEls = document.querySelectorAll('#controller-button')

// TODO: add cache for restart button after game over

/*----- event listeners -----*/

gameBtnEls.forEach(function(btn){
    btn.addEventListener('click', handleBtnClick)
})

function handleBtnClick(event){
    console.log(event.target.innerText)

    const convertProp = {
        feed: 'hunger'
        play: 'boredom'
        sleep: 'sleepiness'
    }
    const key = convertProp[event.target.innerText]
    console.log(key)
}


/*----- functions -----*/

init()  //starts game when js is loaded

function init(){
    //init will start the game and load the initial values for our game state
    state = {...INIT_STATE}
    age = 0;
    cycles = 0;

    interval = 5000; // ms pass for each cycle
    timer = setInterval(runGame, interval); //setInterval id

    //it will also call render() -> dom updates
    //init() on load and after a reset (optional)
    console.log("game has started")

    //it will also call render() -> dom updates (trigger all render helper function -> updating)
    render()
}

function runGame(){
    //game loop function all of the logic for the game will change state here -> func() -> state
    updateStats()
    render()
}


function render(){
   
    renderStats()
}

function renderStats(){
    //console.log('rendering stats')
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepyStatEl.textContent = state.sleepiness

}

function updateStats(){
    //call iterator over state and for each state property update the corresponding keys
    //iterate over state{}
        //capture random number
        //capture
        //update current etc

  for (key in state){

      updateStat[key, Math.floor(Math.random()*3)]
    }
}

function updateStat(stat, value){
    if (state[stat] + value >= 0) {
        state[stat] += value;
    } else {
        state[stat] = 0;
    }
}

function continueGame(){
    //check all properties of state
    //eval if any values are less than 10
    //if any are 10 > call gameover()
        
    let currentStats = []
    //to check all properties of state
    for (let key in state){
        currentStats.push(state[key])
    }
    console.log(currentStats)

    for(let stat of currentStats){
        if(stat >=10){
            keepRunning = false
        }
    }
    console.log("should I keep going?")
    return keepRunning

}


function gameOver(){
    alert('game over!')
}








// let randomAmount = Math.floor(Math.random()*3) //engine for updating state
// let currentValue = state[key] //current state value
// state[key] = currentValue + randomAmount //updating state with new value
// console.log(key, state[key]. randomAmount) //test