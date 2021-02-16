let coinCount = document.getElementById('coin-count')
let buttonsContainer = document.getElementById('buttons-container')

// let state = {pennies: 0, nickels: 0, dimes: 0, quarters: 0}

//composing the store
//the store is an object with TWO important functions - one is a function to getState and the other is a function called dispatch

//We should never update the state directly

//We let Redux know before the application compiles the valid ways that a store can change
//We're restricting the kinds of changes that can be made to state inside of what is a called a reducer
//this.setState({pennies: pS.pennies + 1})

//createStore function

let initialState = {pennies: 0, nickels: 0, dimes: 0, quarters: 0}

const coinReducer = function(state = initialState, action){
  switch(action.type){
    case 'add-penny':
        return {...state, pennies: state.pennies + 1}
      break;
    case 'add-nickel':
        return {...state, nickels: state.nickels + 1}
      break;
    case 'add-quarter':
        return {...state, quarters: state.quarters + 1}
      break;
    case 'add-dime':
        return {...state, dimes: state.dimes + 1}
      break;
    default:
      break;
  }
}

//THIS IS BASICALLY ALL REDUX IS: THIS LITTLE FUNCTION!
function createStore(reducer, initialState){
  let state = initialState
  return {
    dispatch: function(action){
      state = reducer(state, action)
    },
    getState: function(){
      return {...state}
    }
  }
}

let store = createStore(coinReducer, initialState)

//Actions are plain objects that generally have a key of "TYPE" that has a value of a string that tells the state HOW to change
//ActionCREATORS are functions that RETURN actions
//We want to have action creators for every possible type of state change

function addPenny(){ //ACTION CREATOR is the function itself
  return {type: "add-penny"} //The object is what we call the ACTION
}

function addNickel(){
  return {type: "add-nickel"}
}

function addQuarter(){
  return {type: "add-quarter"}
}

function addDime(){
  return {type: "add-dime"}
}

buttonsContainer.addEventListener('click', function(event){
  if (event.target.tagName === "BUTTON"){
    switch(event.target.id){
      case 'add-penny':
        store.dispatch(addPenny())
        render()
        break;
      case 'add-nickel':
        store.dispatch(addNickel())
        render()
        break;
      case 'add-quarter':
        store.dispatch(addQuarter())
        render()
        break;
      case 'add-dime':
        store.dispatch(addDime())
        render()
        break;
      default:
        break;
    }
  }
})

function render(){
  coinCount.innerHTML = `
    <h2>Pennies:</h2>
    Count: <span id="pennies-count">${store.getState().pennies}</span>
    Value: <span id="pennies-value">${store.getState().pennies * .01}</span>
    <h2>Nickels:</h2>
    Count: <span id="nickels-count">${store.getState().nickels}</span>
    Value: <span id="nickels-value">${store.getState().nickels * .05}</span>
    <h2>Dimes:</h2>
    Count: <span id="dimes-count">${store.getState().dimes}</span>
    Value: <span id="dimes-value">${store.getState().dimes * .1}</span>
    <h2>Quarters:</h2>
    Count: <span id="quarters-count">${store.getState().quarters}</span>
    Value: <span id="quarters-value">${store.getState().quarters * .25}</span>
    <br />
    <h2>Total:</h2>
    Count: <span id="total-count"></span>
    Value: <span id="total-value"></span>
  `
}





























//
