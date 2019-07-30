var imgObj = null
var background
var rules
var triggered = {}
var angle = 0
var demoWorkspace
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor

function init () {
  // Get the modal
  modal = document.getElementById("myModal");

  // Get the button that opens the modal
  btn = document.getElementById("myBtn");
          
  // Get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];


  imgObj = document.getElementById('sprite')
  background = document.getElementById('spriteSpace')
  imgObj.style.position = 'relative'
  imgObj.style.left = '0px'
  imgObj.style.top = '0px'
  imgObj.addEventListener('click', function (e) {
    const TRIGGER = 'CLICKED'
    triggered[TRIGGER] = true
    runRules()
  })
  background.addEventListener('click', function (e) {
    if (e.target !== this) return
    const TRIGGER = 'BACKCLICKED'
    triggered[TRIGGER] = true
    runRules()
  })
  imgObj.addEventListener('mouseover', function (e) {
    const TRIGGER = 'MOUSEOVER'
    triggered[TRIGGER] = true
    runRules()
  })
  document.onkeypress = function (e) {
    e = e || window.event
    const TRIGGER = e.key.toLowerCase() + '_PRESSED'
    triggered[TRIGGER] = true
    runRules()
  }
  demoWorkspace = Blockly.inject('blocklyDiv', {
    media: './media/',
    toolbox: document.getElementById('toolbox')
  })
  demoWorkspace.addChangeListener(updateRules)
  imgObj.addEventListener('animationend', function () {
    imgObj.style.animation = null
    imgObj.style['animation-iteration-count'] = null
  })

  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function moveRight () {
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px'
}
function moveLeft() {
  imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px'
}
function moveUp() {
  imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px'
}
function moveDown() {
  imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px'
}

function rotate (degree) {
  angle += degree
  imgObj.style.transform = `rotate(${angle}deg)`
}

function disappear() {
  imgObj.style.display = 'none'
}

function appear() {
  imgObj.style.display = 'block'
}

function blink() {
  imgObj.style.animation = 'blink 0.2s'
  imgObj.style['animation-iteration-count'] = '1'
}
function playaudio () {
  var audio = new Audio('./custom/pop.mp3')
  audio.play()
}

function updateRules () {
  const code = Blockly.JavaScript.workspaceToCode(demoWorkspace)
  console.log('// Code Starts \n' + code + '// Code ends')
  rules = code.split('*&')
  rules.splice(-1, 1)

  for (let i = 0; i < rules.length; i++) {
    var tmp = rules[i];
    rules[i] = new AsyncFunction(tmp)
  }
}

function delay (actions, delayValue) {
  setTimeout(actions, 1000 * delayValue)
}

function runRules () {
  rules.forEach(element => {
    element()
  })
}

function flagClicked () {
  const TRIGGER = 'FLAGCLICKED'
  triggered[TRIGGER] = true
  runRules()
}

async function wait (ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

async function checkTrigger (TRIGGER, delay) {
  const triggerState = triggered[TRIGGER]
  await wait(1000 * delay)
  return triggerState
}

function disableTrigger (TRIGGER) {
  triggered[TRIGGER] = false
}

async function and (promises) {
  const values = await Promise.all(promises)
  for (let i = 0; i < values.length; i++) {
    if (!values[i]) {
      return false
    }
  }
  return true
}

async function or (promises) {
  let result = false
  for (let i = 0; i < promises.length; i++) {
    promises.then(triggerState => {
      result |= triggerState
    })
    if(result) {
      return result
    }
  }
  return result
}

function changeBackground (value) {
  if (value === 'WHITE') {
    background.style.backgroundImage = 'none'
    return
  }
  document.getElementById('top').style.backgroundImage = `url(./custom/${value}.jpg)`
}

window.onload = init
