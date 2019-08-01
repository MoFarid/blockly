var imgObj = []
var background
var rules
var triggered = {}
var angle = 0
var demoWorkspace
var btns = []
var scrpts = []
var counter = 0
var flag = false;
var Btnindex = 0;
var inp;
var newBtn;
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor

function init () {
  // Get the modal
  modal = document.getElementById("myModal");
  codeModal = document.getElementById("codeModal");

  // Get the button that opens the modal
  btn = document.getElementById("myBtn");
          
  // Get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];

  btns.push(document.getElementById('0'));

  imgObj.push(document.getElementById('sprite0'));
  background = document.getElementById('spriteSpace');
  scrpts.push(document.getElementById("script0"));

  inp = btns[0];

  imgObj[0].style.position = 'relative'
  imgObj[0].style.left = '0px'
  imgObj[0].style.top = '0px'

  imgObj[0].addEventListener('click', function (e) {
    if(Btnindex == 0){
    const TRIGGER = 'CLICKED'
    triggered[TRIGGER] = true
    runRules()
    }
  })

  inp.addEventListener('click',function (e){
    if(flag===false){
      Btnindex = inp.id;
    }
  })

  imgObj[0].addEventListener('animationend', function () {
    imgObj[0].style.animation = null
    imgObj[0].style['animation-iteration-count'] = null
  })

  imgObj[0].addEventListener('mouseover', function (e) {
    if(Btnindex == 0){
    const TRIGGER = 'MOUSEOVER'
    triggered[TRIGGER] = true
    runRules()
    }
  })

  background.addEventListener('click', function (e) {
    if (e.target !== this) return
    const TRIGGER = 'BACKCLICKED'
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

function moveRight (i) {
  imgObj[i].style.left = parseInt(imgObj[i].style.left) + 10 + 'px'
}
function moveLeft(i) {
  imgObj[i].style.left = parseInt(imgObj[i].style.left) - 10 + 'px'
}
function moveUp(i) {
  imgObj[i].style.top = parseInt(imgObj[i].style.top) - 10 + 'px'
}
function moveDown(i) {
  imgObj[i].style.top = parseInt(imgObj[i].style.top) + 10 + 'px'
}

function rotate (degree,i) {
  angle += degree
  imgObj[i].style.transform = `rotate(${angle}deg)`
}

function disappear(i) {
  imgObj[i].style.display = 'none'
}

function appear(i) {
  imgObj[i].style.display = 'block'
}

function blink(i) {
  imgObj[i].style.animation = 'blink 0.2s'
  imgObj[i].style['animation-iteration-count'] = '1'
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
    rules[i] = new AsyncFunction(rules[i])
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

function newSprite(id){

  modal.style.display = "none";
  counter++;

  // var block = document.createElement("div");
  // block.setAttribute("id","script0");
  // console.log(block);
  // var script = document.createElement("div");
  // script.setAttribute("id","script"+counter);
  // script.appendChild(block);
  // document.getElementById("allscripts").appendChild(script);
  // script.style.display = "block";
  tmp = ""+ counter;

  newBtn = document.createElement("button");
  newBtn.setAttribute("height", "200");
  newBtn.setAttribute("width", "200");
  newBtn.setAttribute("class","avabtn");
  newBtn.setAttribute("id",tmp);
  // newBtn.addEventListener('click',deleteOrSelect(newBtn.id));
  // console.log(newBtn.id)
  newBtn.addEventListener('click',function (e){
    if(flag===false){
      Btnindex = e.target.id;
    }
  })

  var imgNew = document.createElement("img");
  imgNew.setAttribute("height", "100");
  imgNew.setAttribute("width", "100");
  imgNew.setAttribute("id","sprite"+counter);

  if(id==="burger"){
    imgNew.setAttribute("src","./custom/Burger.png");
    newBtn.setAttribute("src","./custom/Burger-Shrinked.png");
  }else if (id==="racoon"){
    imgNew.setAttribute("src","./custom/Racoon.png");
    newBtn.setAttribute("src","./custom/Racoon-Shrinked.png");
  }else if (id==="sushi"){
    imgNew.setAttribute("src","./custom/Sushi.png");
    newBtn.setAttribute("src","./custom/Sushi-Shrinked.png");
  }else if (id==="turtle"){
    imgNew.setAttribute("src","./custom/Turtle.png");
    newBtn.setAttribute("src","./custom/Turtle-Shrinked.png");
  }

  document.getElementById("top").appendChild(imgNew);
  document.getElementById("bottom").appendChild(newBtn);

  imgNew.style.position = 'relative'
  imgNew.style.left = '0px'
  imgNew.style.top = '0px'

  imgNew.addEventListener('click', function (e) {
    if(imgNew.id.substring(6) == ""+Btnindex){
    const TRIGGER = 'CLICKED'
    triggered[TRIGGER] = true
    runRules()
    }
  })

  imgNew.addEventListener('animationend', function () {
    imgNew.style.animation = null
    imgNew.style['animation-iteration-count'] = null
  })

  imgNew.addEventListener('mouseover', function (e) {
    if(imgNew.id.substring(6) == ""+Btnindex){
    const TRIGGER = 'MOUSEOVER'
    triggered[TRIGGER] = true
    runRules()
   }
  })

  imgObj.push(imgNew);
  btns.push(newBtn);

  // for(j=0;j<btns.length;j++){
  //   inp = btns[j];
  //   console.log(inp.id);
  //   btns[j].addEventListener('click',deleteOrSelect(btns[j].id));
  // }
  // scrpts.push(script);
  // console.log(btns);
}

function displayCode(){
  codeModal.style.display = "block";
  
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
