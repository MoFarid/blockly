var imgObj = null
var background
var rules
var triggered = {}
var angle = 0
var demoWorkspace
const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

function init () {
  imgObj = document.getElementById('panda')
  background = document.getElementById('pandaspace')
  imgObj.style.position = 'relative'
  imgObj.style.left = '0px'
  imgObj.style.top = '0px'
  imgObj.addEventListener('click', function (_e) {
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
    media: '../../media/',
    toolbox: document.getElementById('toolbox')
  })
  demoWorkspace.addChangeListener(updateRules)
  imgObj.addEventListener('animationend', function () {
    imgObj.style.animation = null
    imgObj.style['animation-iteration-count'] = null
  })
}

function moveRight () {
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px'
}
function moveLeft () {
  imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px'
}
function moveUp () {
  imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px'
}
function moveDown () {
  imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px'
}

function rotate (degree) {
  angle += degree
  imgObj.style.transform = `rotate(${angle}deg)`
}

function disappear () {
  imgObj.style.display = 'none'
}

function appear () {
  imgObj.style.display = 'block'
}

function blink () {
  imgObj.style.animation = 'blink 0.2s'
  imgObj.style['animation-iteration-count'] = '1'
}
function playaudio () {
  var audio = new Audio('../../custom/pop.mp3')
  audio.play()
}

function updateRules () {
  const code = Blockly.JavaScript.workspaceToCode(demoWorkspace)
  console.log('// Code Starts \n' + code + '// Code ends')
  rules = code.split('*&')
  rules.splice(-1, 1)

  for (let i = 0; i < rules.length; i++) {
    rules[i] = new AsyncFunction(rules[i])
  }
}

function delay(actions, delayValue) {
  setTimeout(actions, 1000 * delayValue)
}

function runRules () {
  rules.forEach(element => {
    element()
  })
}

function flagClicked() {
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

window.onload = init
