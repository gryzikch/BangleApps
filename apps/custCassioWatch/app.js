const storage = require('Storage');
var date = new Date();

require("Font6x12").add(Graphics);
require("Font8x12").add(Graphics);
require("Font7x11Numeric7Seg").add(Graphics);

function bigThenSmall(big, small, x, y) {
  g.setFont("7x11Numeric7Seg", 2);
  g.drawString(big, x, y);
  x += g.stringWidth(big);
  g.setFont("8x12");
  g.drawString(small, x, y);
}

 function getBackgroundImage() {
  return require("heatshrink").decompress(atob("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"));
}

function getPictureSequences() {
  return {
    1: require("heatshrink").decompress(atob("vlwgP/ACvnBxv4v4OM/0DDxvBn4tNmIeNg+fBxni/IOM/lPDxuJ/gOM+O/54PMmf8WZniv/AgCZLt/8D5nO//PVhf455cB/0HFpMNDwITBj7HJz57C+DrI+GZDwX/4YtIme/TQcPB4/Hnf/x6+CfY/4+e/bAfhDw8fmf/bAYiCAAnn88/DwYuH/kAuYhBbwYeGwCVB+YHDFwyEDm4mDRgo1D8AKD8YeFQYTGFIQXwAYJzD4QeD/AmCgEPGgf486iEEwMD4EfKYe+Dwf+IwPmg/guIJC+/gDwZ8B/1+h/CLYQGBgYPDV4PjEQJXD94pCOoQCBn/4eQYDBJoyiBQAnfSwgjCPQLiDa4PPCoYcBBAP+BAe//C1EDgLMFC4PBAwYcBJQYACDgL4DGYRUERQKGCMYhzEAoN8A4ocBCwiKBz52BCwY1BNQYHB+LjCAASHBA4vun4WEVAP/4YeEw5tBbQbZCMgnrJgP4h7ZEFwjIC/wODRYIuB+AIC57IBGwioCgEAfAIeB54mGAQJvBD4PvBoKqGEIRJBbgOffwgeC+ACBDYPv/KVCDwsACgJZBFgLREHQX8HYOfBgPzeAoUCRwMDBYN/n4oC//fGYRKBQAPn+/jDwYICAgLhDn8+v4eDz4eC/BVC/P784eDHAIeCwAPC5+eDwiDBBYSoBIINwDwIJCRwIeCCQfwggJDCQILD4EAn4yBp4JDGIIUDbIM//AeBXIRrBCgfGB4N/wDOBEYLbCV4YOBgH+jP/+YIB4a5DHoIFBgIZCz7fCbAfwZgUBHYI6CCYKQCAoQYBH4IZCwYeEXIeQdgI4BGwIwDAQX//vgLQPn4BeCIQJHCEoXAgf+gAICIQKDDIgSfBBwYeC/w4BAAKCB+BPCAAKACe4ahDAAhAC8IWFAAg6DWgIWEAAYmDVof7DwyHDEQZzCAAapCPgcAOYQAECwabBXAJ3DAAXxAga9B5/BNZJRCPRBIDAgQGEJgYXEHQI8GewbNDdYYJFAAeP4FHB4wmE/n8gCpGIovHcwJML/1+NY7TDcoTmHTIhDCY43+Igv5Z4gACw40Gg4HF+BTGgItM//gFpreEFpJjH/gWGEw5TGIo/hBww2G/CwH/+DHgjlEFwkPHhYoCDIaQGHwgfCgAOJTgMAAAJLIB4oOLAAJPEAGA")),
    2: require("heatshrink").decompress(atob("y1FgP/AH4AjmWHCB2AQA1QgEHCI3wS5cfCQgHBn8f/wSHv4RD4EDIRPf4IFD/EAKpX+h42En4SK+AMD8AXEPZADC/hIKIgUjCwZhEAA/Bx5tCGxn+hhKB/EBYpnwuA2CjidDJxGH4bJMZAX8j5GBbZcAhOH8H8v/8BASaCFYOgv+QCgcH+P/AIIAK8AeC4//AIIAM8H/z//KIQAL4ZKCXBgABh5KOQQRKREIJIBJSAoBJR/zJSF/55KP+CVR4/+Spf+g4ECz/5JQn9AYQsC+ADCEIPnJQmDBwvGGAQhBJQn8gYDBwQOCjJKJ+B2B/0JDIVnJROHn///EnGYQyBJQTgE/0cAYPgH4XAJQgIBEAIZBkYDBwBkFEIImBcQJsFh6aGj/h/7iBAAPBcBQbCNYIAM+KACJQTgMG4JKDABc/x5KEABX8/g1BJR3zXAR+CABfPG4LgDABc+G4LgDJRbyB//DJRzwCYw4AG5w3BOQQAMnDvCLpv8G4TvKJQiSCg4SN5AoCVBwhCJR5sCJR3wAYUASwP8hTAEwEAgkAn5vC/kAAA3cAwpZC+ASHAAwtC8AGD4ANEgJUMfgUA95nNAH4AV/gA==")),
    3: require("heatshrink").decompress(atob("vtKgP/ACcAn4OM/AlOx4ON/F/B5uHBxv+JhouBNh3DFx0fAgXwgYPI+ACB/ipBCgYAFh4SCgCQJPgfADxXHAYXAg4OI/h8D8JdJBQhCCJpS/LLIIACHpP/wAPDLhKICAAS6OVRK6FLpJsEwj+JLAf8uC6JFwfD4/+gAxDAoWAQ4X+j0fOYIPDAoMMcgfx/FwQAiYCgI+Dh/ggEcgAnBFoMIA4IWCXQOAAoKQC8AFC+A+C4f8RoP+AQ3BfofgCgP8JwIFC/EPHwXhDARKBn/+MAXAng+CJoIJC8ABCKAQ+C+H+hisCwYeD8ODHwWH8HxagfwO4UMj4UBJoMPw4+Cv4eC+HwvApB4fwvxDCAoJ3Cw/DIYIoBw6OBKYQjCA4MPwYjB/E/8IKCFARSB/F+GgMP4f/x5YCAoJIC8IbBCQMfA4ILBhxCCNQKIBI4IsBNAX4sIeCj4/BwZsCCQILB8ZsCDwPjTAMhLYQLChDPCGIMP/EzJoQIC/FDCQMBNwXg7CKCcoXCAoPwAQIaBwUHJYP8dYP+iAeBwKYCboM/w/8gAbCTYI0CDQPwgP8nEAG4P/wiABOYQUB4Ef8EAgefDYMhBgPfToX/gH4BwL0C8JwCAoQRBgAOEPgYACCgPwBwvwT4QFCAQMAg4oEw4FFRwMHVYTGCnAFEJoPgn4oE4YFFAQODZAaVCAooCBn4uE8AFFAQP5OIRmDAooCB9//g5mEAogjCn7CCAAMHAoouDCgYDBAooDB57xCDAYFFd4X+AoQYBAopgD/BTBBgQFFYAhIB4AYB8AFEAAfAj/wDAQFFAAb8BgAFIWIYIBSgQFFB4sDApAAEgIVEAogAm4AA==")),
    4: require("heatshrink").decompress(atob("tligP/AAngv4HFAAf+C4MPBhYNKwANCj4MH4A7B/EAG4/gg4DB/kABg38gYEC/AEDAAYVE+A2G4E/Aog2F/BZFFAwGFCYyQGAwv4HgwhFFwwUF8B/HO4ibHRgQABwYMG/ByD+BIE/wCB4IGDMYP8CgWHBAYAB8IUEEoQjDIQRYDMYQdBIQmAXYhDD/AeB+AvCeoJDEBITYC8AaB/wuCPoQaC/waC+BdCCAQaFEgfDDQoQCH4R1DDQYXCLwQCCBIQaDC4QdCBIIDBDQYyCAoXgYgIaDJoRTDDQyrCDRIKCB4QaHEoJ4D+AaI8YFCNYxbBPAahGOwRgCUI4aN44BCDQjyCSgSTCEALyFGYSuC/+BDQQvCDQv8EgWDDRBUCCggaEAAfvAYSEBDQYAG/waBBhIaCx4aaZYYAEh4aDcwQAEcYIaPv4aLNYIaM+IaIUIbHCAAkfUIYSBAAo9BDQLyBDQxYBDQP8v6+HDQbZFT4gYBbJIWDDgYAEGIY5DBooYBAII5BSgxnDDQKvHMoIBBB4J5G8ABCB4UHPAwjCFgJeG4I+DIoODIQp4BLIKWCIYouBOgQCBHQRCEGAQ4CIYggCVQQ4BF4INDHYJmDLwPAfwk//zgC+CkBFAf8BQKcDFYPwKIcBLQQTCAYPAPQXAAwJzDPwP+CwIeBVYQTCHIX4gYCBCAJCDCIfggAABAoIjBMgn/wAMBIwKbEAgX+BgIkCFoKaEBoQMC8DREcgp6DaAgNFwIFEUAgnHUAgnHUAqiDFAohE8A8FUAZJCE4oHBGwYSFFAY2DUQQAFTwQDEGwsAgf4SoaOGZISZGIgYMBXIgbHBhQAIA")), 
    5: require("heatshrink").decompress(atob("tdmgP/AFuBAQgAG4EPAQMfBg/wJQICCAA34/EP/n4DRE/GQO/DRHn+EfAQM/Bg38/yEB/0HDQ+P4EAj+Av4MG+PwgEB8BgBAAv+hCtCIRAmBAAQnH/EANQICBDQ+AgYCDSQ8AAQYAHLYICBE5KBBGoInIJYX8NRAID4IaHBAbII8BzDfw/8Cof4ZAfgAgPgOYiTD/AJBSIIsECQTdBn4CBE4ZrBFAUfYAOfYYk+DQXnGoPjHAQAB95VC/H8gf8AQIMC/KGDj+AGYOANQc/wADB8LBBgPwSQYwBJAP8nz3BjxCD/l8FoQmBAARCDBAItBEwMAhEAg70EOAQzBAQaSDE4QRBv4CCDQgFCDwUAJ4aYE4AxB+AnEBAQJBAYXAaogIC/wjDdYhUDBAbrE4BGDJYatD+ARCWAYREBAmDLAYwDBATzBE4ZYCBAhtDBIQxBBAeeHof/xwFBAQX/+fALAfj8E/+fgE4P8/g9D/hDB/xGDz+AIQef4F/AQIhC+BhD+f4aQP4BAP8ny2D/0/eoN+BAWHwBCD4fAgEHBATlBIQYmBAAQwCgDeEAoQID8B/CAogjBLAP+DwYFDBAngE4nAR4ICCVo34CQQID/gRD/0ECAT0H//BBA5qEBA/gfo/wWwX8LoeBCI6/CDwLMDAgf8gADBwAeD/h0D4AfBOYgSE+LrBAQQMC8+ADwV8g/+AQIMC/PwQwWfCIOPCgQABn41C8bBBgfwIQfH8B9B/l+dQN+JQf4/gtCw/AgEH4CSDj5mC+FwDQN4IQfj8BCBdAIRBAQSADOAXggE/AQSADgBwBCIJqBAQJCDeIfAJgICCSQYnCDQN/AQInDDQK/DBIPgVog0CAAO/AQOwao4ADdYn4IIQAE8AEDCIYaEVofBBgxeBRoUQKgYADLAI+BfgYAFwAxBPgoAD+PAv/zAQIMG/l8UgLhDAAuf4ACDAA3z/EPAQJ3H/1/coN/IRHHb4MH4BqIuAaBuBCIBYIABE5HgcgPwc4hqEgEP/wCBVpAkBSRIaBv4CCBo/wGIPwBhAuH"))
  };
}

let pictureSequence = 1;
let settings = storage.readJSON("cassioWatch.settings.json", true) || {};
let pictureSpeed = settings.pictureSpeed || 6000;
delete settings;

// schedule a draw for the next minute
let pictureInterval;
var drawTimeout;
function queueDraw() {
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function() {
    drawTimeout = undefined;
    draw();
  }, 60000 - (Date.now() % 60000));
}


function clearIntervals() {
  if (pictureInterval) clearInterval(pictureInterval);
  pictureInterval = undefined;
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = undefined;
}

function drawClock() {
  g.setFont("7x11Numeric7Seg", 3);
  g.clearRect(80, 57, 170, 96);
  g.setColor(0, 255, 255);
  g.drawRect(80, 57, 170, 96);
  g.fillRect(80, 57, 170, 96);
  g.setColor(0, 0, 0);
  g.drawString(require("locale").time(new Date(), 1), 70, 60);
  g.setFont("8x12", 2);
  g.drawString(require("locale").dow(new Date(), 2).toUpperCase(), 18, 130);
  g.setFont("8x12");
  g.drawString(require("locale").month(new Date(), 2).toUpperCase(), 80, 126);
  g.setFont("8x12", 2);
  const time = new Date().getDate();
  g.drawString(time < 10 ? "0" + time : time, 78, 137);
}

function drawBattery() {
  g.setColor(0, 0, 0);
  bigThenSmall(E.getBattery(), "%", 135, 21);
}

function drawPicture() {
  let Picture = getPictureSequences();
  g.clearRect(5, 62, 63, 115);
  g.setColor(0, 255, 255);
  g.drawRect(5, 62, 63, 115);
  g.fillRect(5, 62, 63, 115);
  g.drawImage(Picture[pictureSequence], 3, 60, { scale: 0.5 });
  pictureSequence = pictureSequence + 1;
  if(pictureSequence > 5) pictureSequence = 1;
}

// Calculate calendar week (https://stackoverflow.com/a/6117889)
getCW = function(date){
  var d=new Date(date.getFullYear(), date.getMonth(), date.getDate());
  var dayNum = d.getDay() || 7;
  d.setDate(d.getDate() + 4 - dayNum);
  var yearStart = new Date(d.getFullYear(),0,1);
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
};

// get Calendar Week
function getCalendarWeek(){
  var CW = getCW(date);
  return CW;
}

function getSteps() {
  var steps = 0;
  try{
      if (WIDGETS.wpedom !== undefined) {
          steps = WIDGETS.wpedom.getSteps();
      } else if (WIDGETS.activepedom !== undefined) {
          steps = WIDGETS.activepedom.getSteps();
      } else {
        steps = Bangle.getHealthStatus("day").steps;
      }
  } catch(ex) {
      // In case we failed, we can only show 0 steps.
      return "? k";
  }

  steps = Math.round(steps/1000);
  return steps + "k";
}

function draw() {
  queueDraw();

  g.reset();
  g.clear();
  g.setColor(0, 255, 255);
  g.fillRect(0, 0, g.getWidth(), g.getHeight());
  let background = getBackgroundImage();
  g.drawImage(background, 0, 0, { scale: 1 });
  g.setColor(0,255,255);
  g.fillRect(118, 135, 137, 150);
  g.setColor(0, 0, 0);
  g.setFont("8x12", 1);
  g.drawString("CaW",120,140);
  g.setColor(0, 0, 0);
  g.setFont("6x12");
  g.drawString("Bluetooth", 35, 20);
  g.setFont("8x12");
  if(NRF.getSecurityStatus().connected) 
    g.drawString("CONNECTED", 35, 35);
  else
    g.drawString("DISCONNECTED",35,35);
  g.setFontAlign(0,-1);
  g.setFont("8x12", 2);
  g.drawString(getCalendarWeek(), 155, 132);
  g.drawString(Math.round(Bangle.getHealthStatus("last").bpm), 109, 98);
  g.drawString(getSteps(), 158, 98);

  g.setFontAlign(-1,-1);
  drawClock();
  drawPicture();
  drawBattery();

  // Hide widgets
  for (let wd of WIDGETS) {wd.draw=()=>{};wd.area="";}
}

Bangle.on("lcdPower", (on) => {
  if (on) {
    draw();
  } else {
    clearIntervals();
  }
});

Bangle.on("lock", (locked) => {
  clearIntervals();
  draw();
  if (!locked) {
    pictureInterval = setInterval(drawPicture, pictureSpeed);
  }
});

Bangle.setUI("clock");

// Load widgets, but don't show them
Bangle.loadWidgets();

g.reset();
g.clear();
draw();
