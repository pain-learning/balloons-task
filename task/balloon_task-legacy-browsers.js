/********************* 
 * Balloon_Task Test *
 *********************/


// store info about the experiment session:
let expName = 'balloon_task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'order': ['random', 1, 2, 3], 'session': '001', 'study': '', 'group': 'A', 'qpid': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(instructions_2RoutineBegin());
flowScheduler.add(instructions_2RoutineEachFrame());
flowScheduler.add(instructions_2RoutineEnd());
flowScheduler.add(instructions_3RoutineBegin());
flowScheduler.add(instructions_3RoutineEachFrame());
flowScheduler.add(instructions_3RoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(final_scoreRoutineBegin());
flowScheduler.add(final_scoreRoutineEachFrame());
flowScheduler.add(final_scoreRoutineEnd());
flowScheduler.add(end_thanksRoutineBegin());
flowScheduler.add(end_thanksRoutineEachFrame());
flowScheduler.add(end_thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'blocks/blocks_order_longdemo1.xlsx', 'path': 'blocks/blocks_order_longdemo1.xlsx'},
    {'name': 'files/win_lose2.png', 'path': 'files/win_lose2.png'},
    {'name': 'files/pop_g.png', 'path': 'files/pop_g.png'},
    {'name': 'blocks/short_demo/pos_neg_train2_shA.xlsx', 'path': 'blocks/short_demo/pos_neg_train2_shA.xlsx'},
    {'name': 'blocks/short_demo/pos_neg_train3_shB.xlsx', 'path': 'blocks/short_demo/pos_neg_train3_shB.xlsx'},
    {'name': 'blocks/pos_neg_train1C.xlsx', 'path': 'blocks/pos_neg_train1C.xlsx'},
    {'name': 'blocks/pos_neg_train2A.xlsx', 'path': 'blocks/pos_neg_train2A.xlsx'},
    {'name': 'files/start.png', 'path': 'files/start.png'},
    {'name': 'files/lose.png', 'path': 'files/lose.png'},
    {'name': 'files/ball_r.png', 'path': 'files/ball_r.png'},
    {'name': 'blocks/long_demo/pos_neg_train3_shD.xlsx', 'path': 'blocks/long_demo/pos_neg_train3_shD.xlsx'},
    {'name': 'blocks/long_demo/pos_neg_train3_shC.xlsx', 'path': 'blocks/long_demo/pos_neg_train3_shC.xlsx'},
    {'name': 'blocks/pos_neg_train3C.xlsx', 'path': 'blocks/pos_neg_train3C.xlsx'},
    {'name': 'blocks/pos_neg_train3B.xlsx', 'path': 'blocks/pos_neg_train3B.xlsx'},
    {'name': 'blocks/blocks_order_shortdemo2.xlsx', 'path': 'blocks/blocks_order_shortdemo2.xlsx'},
    {'name': 'blocks/blocks_order3.xlsx', 'path': 'blocks/blocks_order3.xlsx'},
    {'name': 'blocks/long_demo/pos_neg_train2_shA.xlsx', 'path': 'blocks/long_demo/pos_neg_train2_shA.xlsx'},
    {'name': 'blocks/blocks_order_longdemo3.xlsx', 'path': 'blocks/blocks_order_longdemo3.xlsx'},
    {'name': 'blocks/pos_neg_train1D.xlsx', 'path': 'blocks/pos_neg_train1D.xlsx'},
    {'name': 'blocks/short_demo/pos_neg_train2_shB.xlsx', 'path': 'blocks/short_demo/pos_neg_train2_shB.xlsx'},
    {'name': 'blocks/short_demo/pos_neg_train1_shD.xlsx', 'path': 'blocks/short_demo/pos_neg_train1_shD.xlsx'},
    {'name': 'blocks/short_demo/pos_neg_train3_shC.xlsx', 'path': 'blocks/short_demo/pos_neg_train3_shC.xlsx'},
    {'name': 'blocks/pos_neg_train3D.xlsx', 'path': 'blocks/pos_neg_train3D.xlsx'},
    {'name': 'blocks/pos_neg_train3A.xlsx', 'path': 'blocks/pos_neg_train3A.xlsx'},
    {'name': 'blocks/pos_neg_train1A.xlsx', 'path': 'blocks/pos_neg_train1A.xlsx'},
    {'name': 'files/p75.png', 'path': 'files/p75.png'},
    {'name': 'blocks/pos_neg_train2B.xlsx', 'path': 'blocks/pos_neg_train2B.xlsx'},
    {'name': 'blocks/long_demo/pos_neg_train3_shA.xlsx', 'path': 'blocks/long_demo/pos_neg_train3_shA.xlsx'},
    {'name': 'files/pirate.png', 'path': 'files/pirate.png'},
    {'name': 'files/ball_b.png', 'path': 'files/ball_b.png'},
    {'name': 'files/bubble_pop.wav', 'path': 'files/bubble_pop.wav'},
    {'name': 'blocks/long_demo/pos_neg_train3_shB.xlsx', 'path': 'blocks/long_demo/pos_neg_train3_shB.xlsx'},
    {'name': 'blocks/blocks_order2.xlsx', 'path': 'blocks/blocks_order2.xlsx'},
    {'name': 'blocks/long_demo/pos_neg_train1_shC.xlsx', 'path': 'blocks/long_demo/pos_neg_train1_shC.xlsx'},
    {'name': 'files/p50.png', 'path': 'files/p50.png'},
    {'name': 'files/instructions.png', 'path': 'files/instructions.png'},
    {'name': 'blocks/long_demo/pos_neg_train2_shD.xlsx', 'path': 'blocks/long_demo/pos_neg_train2_shD.xlsx'},
    {'name': 'blocks/blocks_order_longdemo2.xlsx', 'path': 'blocks/blocks_order_longdemo2.xlsx'},
    {'name': 'blocks/blocks_order_shortdemo1.xlsx', 'path': 'blocks/blocks_order_shortdemo1.xlsx'},
    {'name': 'files/p25.png', 'path': 'files/p25.png'},
    {'name': 'blocks/long_demo/pos_neg_train1_shB.xlsx', 'path': 'blocks/long_demo/pos_neg_train1_shB.xlsx'},
    {'name': 'blocks/blocks_order_shortdemo3.xlsx', 'path': 'blocks/blocks_order_shortdemo3.xlsx'},
    {'name': 'blocks/short_demo/pos_neg_train3_shD.xlsx', 'path': 'blocks/short_demo/pos_neg_train3_shD.xlsx'},
    {'name': 'files/none.png', 'path': 'files/none.png'},
    {'name': 'files/win.png', 'path': 'files/win.png'},
    {'name': 'blocks/blocks_order1.xlsx', 'path': 'blocks/blocks_order1.xlsx'},
    {'name': 'files/ball_g.png', 'path': 'files/ball_g.png'},
    {'name': 'blocks/long_demo/pos_neg_train1_shA.xlsx', 'path': 'blocks/long_demo/pos_neg_train1_shA.xlsx'},
    {'name': 'blocks/pos_neg_train1B.xlsx', 'path': 'blocks/pos_neg_train1B.xlsx'},
    {'name': 'files/pop_b.png', 'path': 'files/pop_b.png'},
    {'name': 'blocks/long_demo/pos_neg_train2_shC.xlsx', 'path': 'blocks/long_demo/pos_neg_train2_shC.xlsx'},
    {'name': 'blocks/short_demo/pos_neg_train1_shC.xlsx', 'path': 'blocks/short_demo/pos_neg_train1_shC.xlsx'},
    {'name': 'blocks/pos_neg_train2C.xlsx', 'path': 'blocks/pos_neg_train2C.xlsx'},
    {'name': 'files/go.png', 'path': 'files/go.png'},
    {'name': 'files/pop_r.png', 'path': 'files/pop_r.png'},
    {'name': 'blocks/short_demo/pos_neg_train1_shB.xlsx', 'path': 'blocks/short_demo/pos_neg_train1_shB.xlsx'},
    {'name': 'blocks/short_demo/pos_neg_train3_shA.xlsx', 'path': 'blocks/short_demo/pos_neg_train3_shA.xlsx'},
    {'name': 'files/win_lose.png', 'path': 'files/win_lose.png'},
    {'name': 'blocks/short_demo/pos_neg_train1_shA.xlsx', 'path': 'blocks/short_demo/pos_neg_train1_shA.xlsx'},
    {'name': 'blocks/short_demo/pos_neg_train2_shC.xlsx', 'path': 'blocks/short_demo/pos_neg_train2_shC.xlsx'},
    {'name': 'blocks/long_demo/pos_neg_train2_shB.xlsx', 'path': 'blocks/long_demo/pos_neg_train2_shB.xlsx'},
    {'name': 'blocks/long_demo/pos_neg_train1_shD.xlsx', 'path': 'blocks/long_demo/pos_neg_train1_shD.xlsx'},
    {'name': 'blocks/pos_neg_train2D.xlsx', 'path': 'blocks/pos_neg_train2D.xlsx'},
    {'name': 'blocks/short_demo/pos_neg_train2_shD.xlsx', 'path': 'blocks/short_demo/pos_neg_train2_shD.xlsx'},
    {'name': 'files/p100.png', 'path': 'files/p100.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_next_b;
var welcome_click;
var next_text;
var welcome_text;
var instructionsClock;
var order_var;
var blocks_file;
var instructs_text;
var instr_done_button;
var instr_done_label;
var instr_done_touch;
var image_3;
var instructions_2Clock;
var instructs_text_2;
var instr_done_button_2;
var instr_done_label_2;
var instr_done_touch_2;
var image_4;
var instructions_3Clock;
var instructs_text_3;
var instr_done_button_3;
var instr_done_label_3;
var instr_done_touch_3;
var start_buttonClock;
var break_dur;
var start_img;
var start_press;
var trialClock;
var fixation;
var touch_resp;
var coins;
var ghosts;
var total_score;
var button_lower;
var button_middle;
var button_upper;
var pop_2Clock;
var button_lowers;
var button_middles;
var button_uppers;
var sound_1;
var feedbackClock;
var msg;
var feedback_image;
var out_plus;
var out_minus;
var block_scoreClock;
var countdown_text;
var progImg;
var progress;
var block_cash;
var final_scoreClock;
var score;
var end_thanksClock;
var thanks_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_next_b = new visual.Rect ({
    win: psychoJS.window, name: 'welcome_next_b', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0.0, pos: [0, (- 0.4)],
    lineWidth: 1.0, lineColor: new util.Color('darksalmon'),
    fillColor: new util.Color('darksalmon'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  welcome_click = new core.Mouse({
    win: psychoJS.window,
  });
  welcome_click.mouseClock = new util.Clock();
  next_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'next_text',
    text: 'NEXT',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'Welcome to the ‘Balloon’ game!\n\nThe task should take about 15 minutes.\n\nThere will be three breaks.\n\nPlease make sure you understand the instructions on the next page before you start.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  if ((expInfo["order"] === "random")) {
      expInfo["order"] = util.randint(1, 3);
      order_var = expInfo["order"];
  }
  blocks_file = (("blocks/blocks_order" + expInfo["order"].toString()) + ".xlsx");
  
  instructs_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructs_text',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  instr_done_button = new visual.Rect ({
    win: psychoJS.window, name: 'instr_done_button', units : 'height', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color('darksalmon'),
    fillColor: new util.Color('darksalmon'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  instr_done_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_done_label',
    text: 'NEXT',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  instr_done_touch = new core.Mouse({
    win: psychoJS.window,
  });
  instr_done_touch.mouseClock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'files/instructions.png', mask : undefined,
    ori : 0, pos : [0, (- 0.07)], size : [0.5, 0.17],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "instructions_2"
  instructions_2Clock = new util.Clock();
  instructs_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructs_text_2',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_done_button_2 = new visual.Rect ({
    win: psychoJS.window, name: 'instr_done_button_2', units : 'height', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color('darksalmon'),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  instr_done_label_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_done_label_2',
    text: 'NEXT',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  instr_done_touch_2 = new core.Mouse({
    win: psychoJS.window,
  });
  instr_done_touch_2.mouseClock = new util.Clock();
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'files/pirate.png', mask : undefined,
    ori : 0, pos : [0, (- 0.1)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "instructions_3"
  instructions_3Clock = new util.Clock();
  instructs_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructs_text_3',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_done_button_3 = new visual.Rect ({
    win: psychoJS.window, name: 'instr_done_button_3', units : 'height', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color('darksalmon'),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  instr_done_label_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_done_label_3',
    text: 'NEXT',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  instr_done_touch_3 = new core.Mouse({
    win: psychoJS.window,
  });
  instr_done_touch_3.mouseClock = new util.Clock();
  // Initialize components for Routine "start_button"
  start_buttonClock = new util.Clock();
  break_dur = 9;
  
  start_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'start_img', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  start_press = new core.Mouse({
    win: psychoJS.window,
  });
  start_press.mouseClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  touch_resp = new core.Mouse({
    win: psychoJS.window,
  });
  touch_resp.mouseClock = new util.Clock();
  coins = 0;
  ghosts = 0;
  total_score = 100;
  
  button_lower = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_lower', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.35)], size : [0.4, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  button_middle = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_middle', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  button_upper = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_upper', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.35], size : [0.4, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "pop_2"
  pop_2Clock = new util.Clock();
  button_lowers = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_lowers', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.35)], size : [0.4, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  button_middles = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_middles', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  button_uppers = new visual.ImageStim({
    win : psychoJS.window,
    name : 'button_uppers', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.35], size : [0.4, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: 'files/bubble_pop.wav',
    secs: 0.4,
    });
  sound_1.setVolume(1.0);
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  msg = " ";
  
  feedback_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  out_plus = new visual.TextStim({
    win: psychoJS.window,
    name: 'out_plus',
    text: '+1',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('green'),  opacity: 1.0,
    depth: -2.0 
  });
  
  out_minus = new visual.TextStim({
    win: psychoJS.window,
    name: 'out_minus',
    text: '-1',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: 1.0,
    depth: -3.0 
  });
  
  // Initialize components for Routine "block_score"
  block_scoreClock = new util.Clock();
  countdown_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: 0.0 
  });
  
  progImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'progImg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.39)], size : [0.5, 0.0758],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  progress = 0;
  
  block_cash = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_cash',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "final_score"
  final_scoreClock = new util.Clock();
  score = new visual.TextStim({
    win: psychoJS.window,
    name: 'score',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end_thanks"
  end_thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Thanks for playing.\n\nDo NOT press the ‘escape’ key.\n\nSaving results, please wait…',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'welcome'-------
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the welcome_click
    welcome_click.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_next_b);
    welcomeComponents.push(welcome_click);
    welcomeComponents.push(next_text);
    welcomeComponents.push(welcome_text);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function welcomeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'welcome'-------
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_next_b* updates
    if (t >= 0.0 && welcome_next_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_next_b.tStart = t;  // (not accounting for frame time here)
      welcome_next_b.frameNStart = frameN;  // exact frame index
      
      welcome_next_b.setAutoDraw(true);
    }

    // *welcome_click* updates
    if (t >= 0.0 && welcome_click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_click.tStart = t;  // (not accounting for frame time here)
      welcome_click.frameNStart = frameN;  // exact frame index
      
      welcome_click.status = PsychoJS.Status.STARTED;
      welcome_click.mouseClock.reset();
      prevButtonState = welcome_click.getPressed();  // if button is down already this ISN'T a new click
      }
    if (welcome_click.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = welcome_click.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [welcome_next_b]) {
            if (obj.contains(welcome_click)) {
              gotValidClick = true;
              welcome_click.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *next_text* updates
    if (t >= 0.0 && next_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_text.tStart = t;  // (not accounting for frame time here)
      next_text.frameNStart = frameN;  // exact frame index
      
      next_text.setAutoDraw(true);
    }

    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function welcomeRoutineEnd() {
  return async function () {
    //------Ending Routine 'welcome'-------
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = welcome_click.getPos();
    _mouseButtons = welcome_click.getPressed();
    psychoJS.experiment.addData('welcome_click.x', _mouseXYs[0]);
    psychoJS.experiment.addData('welcome_click.y', _mouseXYs[1]);
    psychoJS.experiment.addData('welcome_click.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('welcome_click.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('welcome_click.rightButton', _mouseButtons[2]);
    if (welcome_click.clicked_name.length > 0) {
      psychoJS.experiment.addData('welcome_click.clicked_name', welcome_click.clicked_name[0]);}
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructs_text.setText('Your goal is to win as many coins as you can. The coins hide behind balloons and you need to find where they are. Tap a balloon to make it pop and discover whether you won a coin.');
    // setup some python lists for storing info about the instr_done_touch
    instr_done_touch.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instructs_text);
    instructionsComponents.push(instr_done_button);
    instructionsComponents.push(instr_done_label);
    instructionsComponents.push(instr_done_touch);
    instructionsComponents.push(image_3);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructs_text* updates
    if (t >= 0.0 && instructs_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructs_text.tStart = t;  // (not accounting for frame time here)
      instructs_text.frameNStart = frameN;  // exact frame index
      
      instructs_text.setAutoDraw(true);
    }

    
    // *instr_done_button* updates
    if (t >= 0.0 && instr_done_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_button.tStart = t;  // (not accounting for frame time here)
      instr_done_button.frameNStart = frameN;  // exact frame index
      
      instr_done_button.setAutoDraw(true);
    }

    
    // *instr_done_label* updates
    if (t >= 0.0 && instr_done_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_label.tStart = t;  // (not accounting for frame time here)
      instr_done_label.frameNStart = frameN;  // exact frame index
      
      instr_done_label.setAutoDraw(true);
    }

    // *instr_done_touch* updates
    if (t >= 0.0 && instr_done_touch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_touch.tStart = t;  // (not accounting for frame time here)
      instr_done_touch.frameNStart = frameN;  // exact frame index
      
      instr_done_touch.status = PsychoJS.Status.STARTED;
      instr_done_touch.mouseClock.reset();
      prevButtonState = instr_done_touch.getPressed();  // if button is down already this ISN'T a new click
      }
    if (instr_done_touch.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = instr_done_touch.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [instr_done_button]) {
            if (obj.contains(instr_done_touch)) {
              gotValidClick = true;
              instr_done_touch.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = instr_done_touch.getPos();
    _mouseButtons = instr_done_touch.getPressed();
    psychoJS.experiment.addData('instr_done_touch.x', _mouseXYs[0]);
    psychoJS.experiment.addData('instr_done_touch.y', _mouseXYs[1]);
    psychoJS.experiment.addData('instr_done_touch.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('instr_done_touch.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('instr_done_touch.rightButton', _mouseButtons[2]);
    if (instr_done_touch.clicked_name.length > 0) {
      psychoJS.experiment.addData('instr_done_touch.clicked_name', instr_done_touch.clicked_name[0]);}
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructions_2Components;
function instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_2'-------
    t = 0;
    instructions_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructs_text_2.setText('Naughty pirates can hide behind balloons. When you find a pirate, he steals one coin from you. You need to try to find the coins and avoid the pirates. Be careful: coins and pirates can move around!');
    // setup some python lists for storing info about the instr_done_touch_2
    instr_done_touch_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructions_2Components = [];
    instructions_2Components.push(instructs_text_2);
    instructions_2Components.push(instr_done_button_2);
    instructions_2Components.push(instr_done_label_2);
    instructions_2Components.push(instr_done_touch_2);
    instructions_2Components.push(image_4);
    
    instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_2'-------
    // get current time
    t = instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructs_text_2* updates
    if (t >= 0.0 && instructs_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructs_text_2.tStart = t;  // (not accounting for frame time here)
      instructs_text_2.frameNStart = frameN;  // exact frame index
      
      instructs_text_2.setAutoDraw(true);
    }

    
    // *instr_done_button_2* updates
    if (t >= 0.0 && instr_done_button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_button_2.tStart = t;  // (not accounting for frame time here)
      instr_done_button_2.frameNStart = frameN;  // exact frame index
      
      instr_done_button_2.setAutoDraw(true);
    }

    
    // *instr_done_label_2* updates
    if (t >= 0.0 && instr_done_label_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_label_2.tStart = t;  // (not accounting for frame time here)
      instr_done_label_2.frameNStart = frameN;  // exact frame index
      
      instr_done_label_2.setAutoDraw(true);
    }

    // *instr_done_touch_2* updates
    if (t >= 0.0 && instr_done_touch_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_touch_2.tStart = t;  // (not accounting for frame time here)
      instr_done_touch_2.frameNStart = frameN;  // exact frame index
      
      instr_done_touch_2.status = PsychoJS.Status.STARTED;
      instr_done_touch_2.mouseClock.reset();
      prevButtonState = instr_done_touch_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (instr_done_touch_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = instr_done_touch_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [instr_done_button]) {
            if (obj.contains(instr_done_touch_2)) {
              gotValidClick = true;
              instr_done_touch_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_2'-------
    instructions_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = instr_done_touch_2.getPos();
    _mouseButtons = instr_done_touch_2.getPressed();
    psychoJS.experiment.addData('instr_done_touch_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('instr_done_touch_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('instr_done_touch_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('instr_done_touch_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('instr_done_touch_2.rightButton', _mouseButtons[2]);
    if (instr_done_touch_2.clicked_name.length > 0) {
      psychoJS.experiment.addData('instr_done_touch_2.clicked_name', instr_done_touch_2.clicked_name[0]);}
    // the Routine "instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructions_3Components;
function instructions_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_3'-------
    t = 0;
    instructions_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructs_text_3.setText('Please turn your audio on and get ready to look for the coins!\n\nYou have 100 coins to start with!');
    // setup some python lists for storing info about the instr_done_touch_3
    instr_done_touch_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructions_3Components = [];
    instructions_3Components.push(instructs_text_3);
    instructions_3Components.push(instr_done_button_3);
    instructions_3Components.push(instr_done_label_3);
    instructions_3Components.push(instr_done_touch_3);
    
    instructions_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_3'-------
    // get current time
    t = instructions_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructs_text_3* updates
    if (t >= 0.0 && instructs_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructs_text_3.tStart = t;  // (not accounting for frame time here)
      instructs_text_3.frameNStart = frameN;  // exact frame index
      
      instructs_text_3.setAutoDraw(true);
    }

    
    // *instr_done_button_3* updates
    if (t >= 0.0 && instr_done_button_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_button_3.tStart = t;  // (not accounting for frame time here)
      instr_done_button_3.frameNStart = frameN;  // exact frame index
      
      instr_done_button_3.setAutoDraw(true);
    }

    
    // *instr_done_label_3* updates
    if (t >= 0.0 && instr_done_label_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_label_3.tStart = t;  // (not accounting for frame time here)
      instr_done_label_3.frameNStart = frameN;  // exact frame index
      
      instr_done_label_3.setAutoDraw(true);
    }

    // *instr_done_touch_3* updates
    if (t >= 0.0 && instr_done_touch_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_touch_3.tStart = t;  // (not accounting for frame time here)
      instr_done_touch_3.frameNStart = frameN;  // exact frame index
      
      instr_done_touch_3.status = PsychoJS.Status.STARTED;
      instr_done_touch_3.mouseClock.reset();
      prevButtonState = instr_done_touch_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (instr_done_touch_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = instr_done_touch_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [instr_done_button]) {
            if (obj.contains(instr_done_touch_3)) {
              gotValidClick = true;
              instr_done_touch_3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_3'-------
    instructions_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = instr_done_touch_3.getPos();
    _mouseButtons = instr_done_touch_3.getPressed();
    psychoJS.experiment.addData('instr_done_touch_3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('instr_done_touch_3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('instr_done_touch_3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('instr_done_touch_3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('instr_done_touch_3.rightButton', _mouseButtons[2]);
    if (instr_done_touch_3.clicked_name.length > 0) {
      psychoJS.experiment.addData('instr_done_touch_3.clicked_name', instr_done_touch_3.clicked_name[0]);}
    // the Routine "instructions_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blocks;
var currentLoop;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: blocks_file,
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    blocks.forEach(function() {
      const snapshot = blocks.getSnapshot();
    
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(start_buttonRoutineBegin(snapshot));
      blocksLoopScheduler.add(start_buttonRoutineEachFrame());
      blocksLoopScheduler.add(start_buttonRoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(block_scoreRoutineBegin(snapshot));
      blocksLoopScheduler.add(block_scoreRoutineEachFrame());
      blocksLoopScheduler.add(block_scoreRoutineEnd());
      blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: condsFile,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(pop_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(pop_2RoutineEachFrame());
      trialsLoopScheduler.add(pop_2RoutineEnd());
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var start_buttonComponents;
function start_buttonRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'start_button'-------
    t = 0;
    start_buttonClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((progress > 0)) {
        start_img.setImage("files/go.png");
    } else {
        start_img.setImage("files/start.png");
    }
    
    // setup some python lists for storing info about the start_press
    start_press.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    start_buttonComponents = [];
    start_buttonComponents.push(start_img);
    start_buttonComponents.push(start_press);
    
    start_buttonComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var countdown;
function start_buttonRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'start_button'-------
    // get current time
    t = start_buttonClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    countdown = Math.round((1 - t));
    if (((countdown === 0) && (progress > 0))) {
        continueRoutine = false;
    }
    
    
    // *start_img* updates
    if (t >= 0.0 && start_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_img.tStart = t;  // (not accounting for frame time here)
      start_img.frameNStart = frameN;  // exact frame index
      
      start_img.setAutoDraw(true);
    }

    // *start_press* updates
    if (t >= 0.0 && start_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_press.tStart = t;  // (not accounting for frame time here)
      start_press.frameNStart = frameN;  // exact frame index
      
      start_press.status = PsychoJS.Status.STARTED;
      start_press.mouseClock.reset();
      prevButtonState = start_press.getPressed();  // if button is down already this ISN'T a new click
      }
    if (start_press.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = start_press.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [start_img]) {
            if (obj.contains(start_press)) {
              gotValidClick = true;
              start_press.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_buttonComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_buttonRoutineEnd() {
  return async function () {
    //------Ending Routine 'start_button'-------
    start_buttonComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "start_button" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gain;
var loss;
var choice;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the touch_resp
    // current position of the mouse:
    touch_resp.x = [];
    touch_resp.y = [];
    touch_resp.leftButton = [];
    touch_resp.midButton = [];
    touch_resp.rightButton = [];
    touch_resp.time = [];
    touch_resp.clicked_name = [];
    gotValidClick = false; // until a click is received
    button_upper.setImage("files/ball_b.png");
    button_middle.setImage("files/ball_r.png");
    button_lower.setImage("files/ball_g.png");
    gain = 0;
    loss = 0;
    choice = 0;
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(touch_resp);
    trialComponents.push(button_lower);
    trialComponents.push(button_middle);
    trialComponents.push(button_upper);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixation.status === PsychoJS.Status.STARTED || fixation.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    // *touch_resp* updates
    if (t >= 0.5 && touch_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      touch_resp.tStart = t;  // (not accounting for frame time here)
      touch_resp.frameNStart = frameN;  // exact frame index
      
      touch_resp.status = PsychoJS.Status.STARTED;
      touch_resp.mouseClock.reset();
      prevButtonState = touch_resp.getPressed();  // if button is down already this ISN'T a new click
      }
    if (touch_resp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = touch_resp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = touch_resp.getPos();
          touch_resp.x.push(_mouseXYs[0]);
          touch_resp.y.push(_mouseXYs[1]);
          touch_resp.leftButton.push(_mouseButtons[0]);
          touch_resp.midButton.push(_mouseButtons[1]);
          touch_resp.rightButton.push(_mouseButtons[2]);
          touch_resp.time.push(touch_resp.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button_upper, button_middle, button_lower]) {
            if (obj.contains(touch_resp)) {
              gotValidClick = true;
              touch_resp.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_lower* updates
    if (t >= 0.5 && button_lower.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_lower.tStart = t;  // (not accounting for frame time here)
      button_lower.frameNStart = frameN;  // exact frame index
      
      button_lower.setAutoDraw(true);
    }

    
    // *button_middle* updates
    if (t >= 0.5 && button_middle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_middle.tStart = t;  // (not accounting for frame time here)
      button_middle.frameNStart = frameN;  // exact frame index
      
      button_middle.setAutoDraw(true);
    }

    
    // *button_upper* updates
    if (t >= 0.5 && button_upper.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_upper.tStart = t;  // (not accounting for frame time here)
      button_upper.frameNStart = frameN;  // exact frame index
      
      button_upper.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
var rt;
var corr;
function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (touch_resp.x) {  psychoJS.experiment.addData('touch_resp.x', touch_resp.x[0])};
    if (touch_resp.y) {  psychoJS.experiment.addData('touch_resp.y', touch_resp.y[0])};
    if (touch_resp.leftButton) {  psychoJS.experiment.addData('touch_resp.leftButton', touch_resp.leftButton[0])};
    if (touch_resp.midButton) {  psychoJS.experiment.addData('touch_resp.midButton', touch_resp.midButton[0])};
    if (touch_resp.rightButton) {  psychoJS.experiment.addData('touch_resp.rightButton', touch_resp.rightButton[0])};
    if (touch_resp.time) {  psychoJS.experiment.addData('touch_resp.time', touch_resp.time[0])};
    if (touch_resp.clicked_name) {  psychoJS.experiment.addData('touch_resp.clicked_name', touch_resp.clicked_name[0])};
    
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    rt = touch_resp.time[0];
    if (((((_pj.in_es6("upper", touch_resp.clicked_name[0]) && (win_U === 1)) && (loss_U === 0)) || ((_pj.in_es6("middle", touch_resp.clicked_name[0]) && (win_M === 1)) && (loss_M === 0))) || ((_pj.in_es6("lower", touch_resp.clicked_name[0]) && (win_L === 1)) && (loss_L === 0)))) {
        corr = 1;
        gain = 1;
        total_score += 1;
    } else {
        if (((((_pj.in_es6("upper", touch_resp.clicked_name[0]) && (loss_U === (- 1))) && (win_U === 0)) || ((_pj.in_es6("middle", touch_resp.clicked_name[0]) && (loss_M === (- 1))) && (win_M === 0))) || ((_pj.in_es6("lower", touch_resp.clicked_name[0]) && (loss_L === (- 1))) && (win_L === 0)))) {
            corr = (- 1);
            loss = (- 1);
            total_score -= 1;
        } else {
            if (((((_pj.in_es6("upper", touch_resp.clicked_name[0]) && (win_U === 1)) && (loss_U === (- 1))) || ((_pj.in_es6("middle", touch_resp.clicked_name[0]) && (win_M === 1)) && (loss_M === (- 1)))) || ((_pj.in_es6("lower", touch_resp.clicked_name[0]) && (win_L === 1)) && (loss_L === (- 1))))) {
                corr = 11;
                gain = 1;
                loss = (- 1);
            } else {
                corr = 0;
            }
        }
    }
    if (_pj.in_es6("upper", touch_resp.clicked_name[0])) {
        choice = 1;
    } else {
        if (_pj.in_es6("middle", touch_resp.clicked_name[0])) {
            choice = 2;
        } else {
            if (_pj.in_es6("lower", touch_resp.clicked_name[0])) {
                choice = 3;
            }
        }
    }
    psychoJS.experiment.addData("choice", choice);
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("gain", gain);
    psychoJS.experiment.addData("loss", loss);
    psychoJS.experiment.addData("total_score", total_score);
    psychoJS.experiment.addData("corr", corr);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var pop_2Components;
function pop_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pop_2'-------
    t = 0;
    pop_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.700000);
    // update component parameters for each repeat
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    button_uppers.setImage("files/ball_b.png");
    button_middles.setImage("files/ball_r.png");
    button_lowers.setImage("files/ball_g.png");
    if (_pj.in_es6("upper", touch_resp.clicked_name[0])) {
        button_uppers.setImage("files/pop_b.png");
    } else {
        if (_pj.in_es6("middle", touch_resp.clicked_name[0])) {
            button_middles.setImage("files/pop_r.png");
        } else {
            if (_pj.in_es6("lower", touch_resp.clicked_name[0])) {
                button_lowers.setImage("files/pop_g.png");
            }
        }
    }
    
    sound_1.secs=0.4;
    sound_1.setVolume(1.0);
    // keep track of which components have finished
    pop_2Components = [];
    pop_2Components.push(button_lowers);
    pop_2Components.push(button_middles);
    pop_2Components.push(button_uppers);
    pop_2Components.push(sound_1);
    
    pop_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pop_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pop_2'-------
    // get current time
    t = pop_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button_lowers* updates
    if (t >= 0.0 && button_lowers.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_lowers.tStart = t;  // (not accounting for frame time here)
      button_lowers.frameNStart = frameN;  // exact frame index
      
      button_lowers.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (button_lowers.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_lowers.setAutoDraw(false);
    }
    
    // *button_middles* updates
    if (t >= 0.0 && button_middles.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_middles.tStart = t;  // (not accounting for frame time here)
      button_middles.frameNStart = frameN;  // exact frame index
      
      button_middles.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (button_middles.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_middles.setAutoDraw(false);
    }
    
    // *button_uppers* updates
    if (t >= 0.0 && button_uppers.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_uppers.tStart = t;  // (not accounting for frame time here)
      button_uppers.frameNStart = frameN;  // exact frame index
      
      button_uppers.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (button_uppers.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_uppers.setAutoDraw(false);
    }
    // start/stop sound_1
    if (t >= 0.0 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (0.4 > 0.5) {
        sound_1.stop();  // stop the sound (if longer than duration)
      }
      sound_1.status = PsychoJS.Status.FINISHED;
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    pop_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pop_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'pop_2'-------
    pop_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_1.stop();  // ensure sound has stopped at end of routine
    return Scheduler.Event.NEXT;
  };
}


var out_plus_vis;
var out_minus_vis;
var out_plus_pos;
var out_minus_pos;
var fb_size;
var feedback_images;
var img_idx;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    out_plus_vis = 0;
    out_minus_vis = 0;
    out_plus_pos = [0, (- 0.3)];
    out_minus_pos = [0, (- 0.3)];
    fb_size = [0.5, 0.5];
    feedback_images = ["files/lose.png", "files/win.png", "files/win_lose2.png", "files/none.png"];
    if ((corr === 0)) {
        msg = "You don't win or lose";
        img_idx = 3;
    } else {
        if ((corr === 1)) {
            msg = "You win 1 coin!";
            coins += 1;
            img_idx = 1;
            out_plus_vis = 1;
        } else {
            if ((corr === (- 1))) {
                msg = "You lose 1 coin";
                ghosts += 1;
                img_idx = 0;
                out_minus_vis = 1;
            } else {
                msg = "You win & lose";
                coins += 1;
                ghosts += 1;
                img_idx = 2;
                out_plus_vis = 1;
                out_minus_vis = 1;
                out_plus_pos = [(- 0.15), (- 0.3)];
                out_minus_pos = [0.15, (- 0.3)];
                fb_size = [0.24, 0.5];
            }
        }
    }
    feedback_image.setImage(feedback_images[img_idx]);
    
    feedback_image.setSize(fb_size);
    out_plus.setOpacity(out_plus_vis);
    out_plus.setPos(out_plus_pos);
    out_minus.setOpacity(out_minus_vis);
    out_minus.setPos(out_minus_pos);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_image);
    feedbackComponents.push(out_plus);
    feedbackComponents.push(out_minus);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_image* updates
    if (t >= 0.0 && feedback_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_image.tStart = t;  // (not accounting for frame time here)
      feedback_image.frameNStart = frameN;  // exact frame index
      
      feedback_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_image.setAutoDraw(false);
    }
    
    // *out_plus* updates
    if (t >= 0.0 && out_plus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      out_plus.tStart = t;  // (not accounting for frame time here)
      out_plus.frameNStart = frameN;  // exact frame index
      
      out_plus.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (out_plus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      out_plus.setAutoDraw(false);
    }
    
    // *out_minus* updates
    if (t >= 0.0 && out_minus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      out_minus.tStart = t;  // (not accounting for frame time here)
      out_minus.frameNStart = frameN;  // exact frame index
      
      out_minus.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (out_minus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      out_minus.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var cash_left;
var txt_part;
var points;
var timer_text;
var block_scoreComponents;
function block_scoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'block_score'-------
    t = 0;
    block_scoreClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    progress = (progress + 25);
    progImg.setImage((("files/p" + progress.toString()) + ".png"));
    cash_left = 0;
    if ((progress < 100)) {
        txt_part = (("Well done! You are " + progress.toString()) + "% through! Keep going!");
        block_cash.setText(((((((txt_part + "\n") + "\nYou have ") + total_score.toString()) + " point(s).") + "\n") + "\nTake a short rest and get ready to play."));
    }
    if ((progress === 100)) {
        txt_part = "Well done! You have finished the game. Please wait.";
        block_cash.setText(((((txt_part + "\n") + "\nYou won ") + total_score.toString()) + " point(s)."));
    }
    points = 0;
    
    timer_text = "";
    
    // keep track of which components have finished
    block_scoreComponents = [];
    block_scoreComponents.push(countdown_text);
    block_scoreComponents.push(progImg);
    block_scoreComponents.push(block_cash);
    
    block_scoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function block_scoreRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'block_score'-------
    // get current time
    t = block_scoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *countdown_text* updates
    if (t >= 0.0 && countdown_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_text.tStart = t;  // (not accounting for frame time here)
      countdown_text.frameNStart = frameN;  // exact frame index
      
      countdown_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + break_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_text.setAutoDraw(false);
    }
    
    if (countdown_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_text.setText(timer_text, false);
    }
    
    // *progImg* updates
    if (t >= 0.0 && progImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progImg.tStart = t;  // (not accounting for frame time here)
      progImg.frameNStart = frameN;  // exact frame index
      
      progImg.setAutoDraw(true);
    }

    frameRemains = 0.0 + break_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (progImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      progImg.setAutoDraw(false);
    }
    
    // *block_cash* updates
    if (t >= 0.0 && block_cash.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_cash.tStart = t;  // (not accounting for frame time here)
      block_cash.frameNStart = frameN;  // exact frame index
      
      block_cash.setAutoDraw(true);
    }

    frameRemains = 0.0 + break_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (block_cash.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      block_cash.setAutoDraw(false);
    }
    countdown = Math.round(((break_dur - 0.5) - t));
    if ((progress === 100)) {
        timer_text = "";
        continueRoutine = false;
    }
    if ((countdown === 0)) {
        if ((progress === 100)) {
            timer_text = "";
        } else {
            timer_text = "Go!";
        }
    } else {
        timer_text = (("The task will start again in: " + countdown.toString()) + " second(s).");
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block_scoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_scoreRoutineEnd() {
  return async function () {
    //------Ending Routine 'block_score'-------
    block_scoreComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "block_score" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var end_txt_part;
var final_scoreComponents;
function final_scoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'final_score'-------
    t = 0;
    final_scoreClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    end_txt_part = "Well done!";
    score.setText(((((end_txt_part + "\n") + "\nYou have won ") + total_score.toString()) + " coin(s)."));
    
    // keep track of which components have finished
    final_scoreComponents = [];
    final_scoreComponents.push(score);
    
    final_scoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function final_scoreRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'final_score'-------
    // get current time
    t = final_scoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *score* updates
    if (t >= 0.0 && score.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      score.tStart = t;  // (not accounting for frame time here)
      score.frameNStart = frameN;  // exact frame index
      
      score.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (score.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      score.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    final_scoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function final_scoreRoutineEnd() {
  return async function () {
    //------Ending Routine 'final_score'-------
    final_scoreComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var end_thanksComponents;
function end_thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_thanks'-------
    t = 0;
    end_thanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    end_thanksComponents = [];
    end_thanksComponents.push(thanks_text);
    
    end_thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_thanksRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_thanks'-------
    // get current time
    t = end_thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (t >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thanks_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks_text.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_thanksRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_thanks'-------
    end_thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
