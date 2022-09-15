#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Fri Jul  8 14:47:16 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

import psychopy
psychopy.useVersion('2021.2.3')


from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'IAT-1.4'  # from the Builder filename that created this script
expInfo = {'participant': '', 'order': ['random', 1, 2, 3], 'session': '001', 'study': '', 'group': 'A', 'qpid': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data' + os.path.sep + '%s_%s' %(expInfo['participant'], expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Volumes/GoogleDrive/Shared drives/Cam Nox Lab/APDP/apdp_public_tasks/balloon_task_public/balloon_task_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='black', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "welcome"
welcomeClock = core.Clock()
welcome_next_b = visual.Rect(
    win=win, name='welcome_next_b',
    width=(0.4, 0.1)[0], height=(0.4, 0.1)[1],
    ori=0.0, pos=(0, -0.4),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='darksalmon', fillColor='darksalmon',
    opacity=None, depth=0.0, interpolate=True)
welcome_click = event.Mouse(win=win)
x, y = [None, None]
welcome_click.mouseClock = core.Clock()
next_text = visual.TextStim(win=win, name='next_text',
    text='NEXT',
    font='Arial',
    pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
welcome_text = visual.TextStim(win=win, name='welcome_text',
    text='Welcome to the ‘Balloon’ game!\n\nThe task should take about 15 minutes.\n\nThere will be three breaks.\n\nPlease make sure you understand the instructions on the next page before you start.',
    font='Arial',
    pos=(0, 0.1), height=0.06, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
if expInfo['order']=='random':
    expInfo['order'] = randint(1,3)
    order_var = expInfo['order']
    
blocks_file = "blocks/blocks_order"+str(expInfo['order'])+".xlsx"
#blocks_file = "blocks/blocks_order_longdemo"+str(expInfo['order'])+".xlsx"
#blocks_file = "blocks/blocks_order_shortdemo"+str(expInfo['order'])+".xlsx"


instructs_text = visual.TextStim(win=win, name='instructs_text',
    text='',
    font='Arial',
    units='height', pos=[0, 0.3], height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
instr_done_button = visual.Rect(
    win=win, name='instr_done_button',units='height', 
    width=(0.4, 0.1)[0], height=(0.4, 0.1)[1],
    ori=0, pos=(0, -0.4),
    lineWidth=1,     colorSpace='rgb',  lineColor='darksalmon', fillColor='darksalmon',
    opacity=1, depth=-2.0, interpolate=True)
instr_done_label = visual.TextStim(win=win, name='instr_done_label',
    text='NEXT',
    font='Arial',
    units='height', pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
instr_done_touch = event.Mouse(win=win)
x, y = [None, None]
instr_done_touch.mouseClock = core.Clock()
image_3 = visual.ImageStim(
    win=win,
    name='image_3', 
    image='files/instructions.png', mask=None,
    ori=0, pos=(0, -0.07), size=(0.5, 0.17),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)

# Initialize components for Routine "instructions_2"
instructions_2Clock = core.Clock()
instructs_text_2 = visual.TextStim(win=win, name='instructs_text_2',
    text='',
    font='Arial',
    units='height', pos=[0, 0.25], height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instr_done_button_2 = visual.Rect(
    win=win, name='instr_done_button_2',units='height', 
    width=(0.4, 0.1)[0], height=(0.4, 0.1)[1],
    ori=0, pos=(0, -0.4),
    lineWidth=1,     colorSpace='rgb',  lineColor=None, fillColor='darksalmon',
    opacity=1, depth=-1.0, interpolate=True)
instr_done_label_2 = visual.TextStim(win=win, name='instr_done_label_2',
    text='NEXT',
    font='Arial',
    units='height', pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
instr_done_touch_2 = event.Mouse(win=win)
x, y = [None, None]
instr_done_touch_2.mouseClock = core.Clock()
image_4 = visual.ImageStim(
    win=win,
    name='image_4', 
    image='files/pirate.png', mask=None,
    ori=0, pos=(0, -0.1), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)

# Initialize components for Routine "instructions_3"
instructions_3Clock = core.Clock()
instructs_text_3 = visual.TextStim(win=win, name='instructs_text_3',
    text='',
    font='Arial',
    units='height', pos=[0, 0], height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instr_done_button_3 = visual.Rect(
    win=win, name='instr_done_button_3',units='height', 
    width=(0.4, 0.1)[0], height=(0.4, 0.1)[1],
    ori=0, pos=(0, -0.4),
    lineWidth=1,     colorSpace='rgb',  lineColor=None, fillColor='darksalmon',
    opacity=1, depth=-1.0, interpolate=True)
instr_done_label_3 = visual.TextStim(win=win, name='instr_done_label_3',
    text='NEXT',
    font='Arial',
    units='height', pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
instr_done_touch_3 = event.Mouse(win=win)
x, y = [None, None]
instr_done_touch_3.mouseClock = core.Clock()

# Initialize components for Routine "start_button"
start_buttonClock = core.Clock()
break_dur = 9
#break_dur = 1;
start_img = visual.ImageStim(
    win=win,
    name='start_img', 
    image=None, mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
start_press = event.Mouse(win=win)
x, y = [None, None]
start_press.mouseClock = core.Clock()

# Initialize components for Routine "trial"
trialClock = core.Clock()
fixation = visual.TextStim(win=win, name='fixation',
    text=None,
    font='Arial',
    units='height', pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
touch_resp = event.Mouse(win=win)
x, y = [None, None]
touch_resp.mouseClock = core.Clock()
# set points counter
coins = 0;  
ghosts = 0;
total_score = 100;


button_lower = visual.ImageStim(
    win=win,
    name='button_lower', units='height', 
    image=None, mask=None,
    ori=0, pos=(0, -0.35), size=(0.4, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
button_middle = visual.ImageStim(
    win=win,
    name='button_middle', 
    image=None, mask=None,
    ori=0, pos=(0, 0), size=(0.4, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)
button_upper = visual.ImageStim(
    win=win,
    name='button_upper', 
    image=None, mask=None,
    ori=0, pos=(0, 0.35), size=(0.4, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)

# Initialize components for Routine "pop_2"
pop_2Clock = core.Clock()
button_lowers = visual.ImageStim(
    win=win,
    name='button_lowers', 
    image=None, mask=None,
    ori=0, pos=(0, -0.35), size=(0.4, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
button_middles = visual.ImageStim(
    win=win,
    name='button_middles', 
    image=None, mask=None,
    ori=0, pos=(0, 0), size=(0.4, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
button_uppers = visual.ImageStim(
    win=win,
    name='button_uppers', 
    image=None, mask=None,
    ori=0, pos=(0, 0.35), size=(0.4, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
sound_1 = sound.Sound('files/bubble_pop.wav', secs=0.4, stereo=True, hamming=True,
    name='sound_1')
sound_1.setVolume(1.0)

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
msg=" "


feedback_image = visual.ImageStim(
    win=win,
    name='feedback_image', 
    image=None, mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
out_plus = visual.TextStim(win=win, name='out_plus',
    text='+1',
    font='Open Sans',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0.0, 
    color='green', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-2.0);
out_minus = visual.TextStim(win=win, name='out_minus',
    text='-1',
    font='Open Sans',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "block_score"
block_scoreClock = core.Clock()
countdown_text = visual.TextStim(win=win, name='countdown_text',
    text='',
    font='Open Sans',
    pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='darkgreen', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
progImg = visual.ImageStim(
    win=win,
    name='progImg', 
    image=None, mask=None,
    ori=0.0, pos=(0, -.39), size=(0.5, 0.0758),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
progress=0
block_cash = visual.TextStim(win=win, name='block_cash',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "final_score"
final_scoreClock = core.Clock()
score = visual.TextStim(win=win, name='score',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.06, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "end_thanks"
end_thanksClock = core.Clock()
thanks_text = visual.TextStim(win=win, name='thanks_text',
    text='Thanks for playing.\n\nDo NOT press the ‘escape’ key.\n\nSaving results, please wait…',
    font='Arial',
    units='height', pos=[0, 0], height=0.06, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "welcome"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the welcome_click
welcome_click.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
welcomeComponents = [welcome_next_b, welcome_click, next_text, welcome_text]
for thisComponent in welcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
welcomeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "welcome"-------
while continueRoutine:
    # get current time
    t = welcomeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=welcomeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *welcome_next_b* updates
    if welcome_next_b.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_next_b.frameNStart = frameN  # exact frame index
        welcome_next_b.tStart = t  # local t and not account for scr refresh
        welcome_next_b.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_next_b, 'tStartRefresh')  # time at next scr refresh
        welcome_next_b.setAutoDraw(True)
    # *welcome_click* updates
    if welcome_click.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_click.frameNStart = frameN  # exact frame index
        welcome_click.tStart = t  # local t and not account for scr refresh
        welcome_click.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_click, 'tStartRefresh')  # time at next scr refresh
        welcome_click.status = STARTED
        welcome_click.mouseClock.reset()
        prevButtonState = welcome_click.getPressed()  # if button is down already this ISN'T a new click
    if welcome_click.status == STARTED:  # only update if started and not finished!
        buttons = welcome_click.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(welcome_next_b)
                    clickableList = welcome_next_b
                except:
                    clickableList = [welcome_next_b]
                for obj in clickableList:
                    if obj.contains(welcome_click):
                        gotValidClick = True
                        welcome_click.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # *next_text* updates
    if next_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_text.frameNStart = frameN  # exact frame index
        next_text.tStart = t  # local t and not account for scr refresh
        next_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_text, 'tStartRefresh')  # time at next scr refresh
        next_text.setAutoDraw(True)
    
    # *welcome_text* updates
    if welcome_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_text.frameNStart = frameN  # exact frame index
        welcome_text.tStart = t  # local t and not account for scr refresh
        welcome_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_text, 'tStartRefresh')  # time at next scr refresh
        welcome_text.setAutoDraw(True)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "welcome"-------
for thisComponent in welcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('welcome_next_b.started', welcome_next_b.tStartRefresh)
thisExp.addData('welcome_next_b.stopped', welcome_next_b.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = welcome_click.getPos()
buttons = welcome_click.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(welcome_next_b)
        clickableList = welcome_next_b
    except:
        clickableList = [welcome_next_b]
    for obj in clickableList:
        if obj.contains(welcome_click):
            gotValidClick = True
            welcome_click.clicked_name.append(obj.name)
thisExp.addData('welcome_click.x', x)
thisExp.addData('welcome_click.y', y)
thisExp.addData('welcome_click.leftButton', buttons[0])
thisExp.addData('welcome_click.midButton', buttons[1])
thisExp.addData('welcome_click.rightButton', buttons[2])
if len(welcome_click.clicked_name):
    thisExp.addData('welcome_click.clicked_name', welcome_click.clicked_name[0])
thisExp.addData('welcome_click.started', welcome_click.tStart)
thisExp.addData('welcome_click.stopped', welcome_click.tStop)
thisExp.nextEntry()
thisExp.addData('next_text.started', next_text.tStartRefresh)
thisExp.addData('next_text.stopped', next_text.tStopRefresh)
thisExp.addData('welcome_text.started', welcome_text.tStartRefresh)
thisExp.addData('welcome_text.stopped', welcome_text.tStopRefresh)
# the Routine "welcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
# update component parameters for each repeat
instructs_text.setText('Your goal is to win as many coins as you can. The coins hide behind balloons and you need to find where they are. Tap a balloon to make it pop and discover whether you won a coin.')
# setup some python lists for storing info about the instr_done_touch
instr_done_touch.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instructionsComponents = [instructs_text, instr_done_button, instr_done_label, instr_done_touch, image_3]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions"-------
while continueRoutine:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructs_text* updates
    if instructs_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructs_text.frameNStart = frameN  # exact frame index
        instructs_text.tStart = t  # local t and not account for scr refresh
        instructs_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructs_text, 'tStartRefresh')  # time at next scr refresh
        instructs_text.setAutoDraw(True)
    
    # *instr_done_button* updates
    if instr_done_button.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_done_button.frameNStart = frameN  # exact frame index
        instr_done_button.tStart = t  # local t and not account for scr refresh
        instr_done_button.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_done_button, 'tStartRefresh')  # time at next scr refresh
        instr_done_button.setAutoDraw(True)
    
    # *instr_done_label* updates
    if instr_done_label.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_done_label.frameNStart = frameN  # exact frame index
        instr_done_label.tStart = t  # local t and not account for scr refresh
        instr_done_label.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_done_label, 'tStartRefresh')  # time at next scr refresh
        instr_done_label.setAutoDraw(True)
    # *instr_done_touch* updates
    if instr_done_touch.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_done_touch.frameNStart = frameN  # exact frame index
        instr_done_touch.tStart = t  # local t and not account for scr refresh
        instr_done_touch.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_done_touch, 'tStartRefresh')  # time at next scr refresh
        instr_done_touch.status = STARTED
        instr_done_touch.mouseClock.reset()
        prevButtonState = instr_done_touch.getPressed()  # if button is down already this ISN'T a new click
    if instr_done_touch.status == STARTED:  # only update if started and not finished!
        buttons = instr_done_touch.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(instr_done_button)
                    clickableList = instr_done_button
                except:
                    clickableList = [instr_done_button]
                for obj in clickableList:
                    if obj.contains(instr_done_touch):
                        gotValidClick = True
                        instr_done_touch.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # *image_3* updates
    if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_3.frameNStart = frameN  # exact frame index
        image_3.tStart = t  # local t and not account for scr refresh
        image_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
        image_3.setAutoDraw(True)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instr_done_button.started', instr_done_button.tStartRefresh)
thisExp.addData('instr_done_button.stopped', instr_done_button.tStopRefresh)
thisExp.addData('instr_done_label.started', instr_done_label.tStartRefresh)
thisExp.addData('instr_done_label.stopped', instr_done_label.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = instr_done_touch.getPos()
buttons = instr_done_touch.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(instr_done_button)
        clickableList = instr_done_button
    except:
        clickableList = [instr_done_button]
    for obj in clickableList:
        if obj.contains(instr_done_touch):
            gotValidClick = True
            instr_done_touch.clicked_name.append(obj.name)
thisExp.addData('instr_done_touch.x', x)
thisExp.addData('instr_done_touch.y', y)
thisExp.addData('instr_done_touch.leftButton', buttons[0])
thisExp.addData('instr_done_touch.midButton', buttons[1])
thisExp.addData('instr_done_touch.rightButton', buttons[2])
if len(instr_done_touch.clicked_name):
    thisExp.addData('instr_done_touch.clicked_name', instr_done_touch.clicked_name[0])
thisExp.addData('instr_done_touch.started', instr_done_touch.tStart)
thisExp.addData('instr_done_touch.stopped', instr_done_touch.tStop)
thisExp.nextEntry()
thisExp.addData('image_3.started', image_3.tStartRefresh)
thisExp.addData('image_3.stopped', image_3.tStopRefresh)
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions_2"-------
continueRoutine = True
# update component parameters for each repeat
instructs_text_2.setText('Naughty pirates can hide behind balloons. When you find a pirate, he steals one coin from you. You need to try to find the coins and avoid the pirates. Be careful: coins and pirates can move around!')
# setup some python lists for storing info about the instr_done_touch_2
instr_done_touch_2.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instructions_2Components = [instructs_text_2, instr_done_button_2, instr_done_label_2, instr_done_touch_2, image_4]
for thisComponent in instructions_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_2"-------
while continueRoutine:
    # get current time
    t = instructions_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructs_text_2* updates
    if instructs_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructs_text_2.frameNStart = frameN  # exact frame index
        instructs_text_2.tStart = t  # local t and not account for scr refresh
        instructs_text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructs_text_2, 'tStartRefresh')  # time at next scr refresh
        instructs_text_2.setAutoDraw(True)
    
    # *instr_done_button_2* updates
    if instr_done_button_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_done_button_2.frameNStart = frameN  # exact frame index
        instr_done_button_2.tStart = t  # local t and not account for scr refresh
        instr_done_button_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_done_button_2, 'tStartRefresh')  # time at next scr refresh
        instr_done_button_2.setAutoDraw(True)
    
    # *instr_done_label_2* updates
    if instr_done_label_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_done_label_2.frameNStart = frameN  # exact frame index
        instr_done_label_2.tStart = t  # local t and not account for scr refresh
        instr_done_label_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_done_label_2, 'tStartRefresh')  # time at next scr refresh
        instr_done_label_2.setAutoDraw(True)
    # *instr_done_touch_2* updates
    if instr_done_touch_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_done_touch_2.frameNStart = frameN  # exact frame index
        instr_done_touch_2.tStart = t  # local t and not account for scr refresh
        instr_done_touch_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_done_touch_2, 'tStartRefresh')  # time at next scr refresh
        instr_done_touch_2.status = STARTED
        instr_done_touch_2.mouseClock.reset()
        prevButtonState = instr_done_touch_2.getPressed()  # if button is down already this ISN'T a new click
    if instr_done_touch_2.status == STARTED:  # only update if started and not finished!
        buttons = instr_done_touch_2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(instr_done_button)
                    clickableList = instr_done_button
                except:
                    clickableList = [instr_done_button]
                for obj in clickableList:
                    if obj.contains(instr_done_touch_2):
                        gotValidClick = True
                        instr_done_touch_2.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # *image_4* updates
    if image_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_4.frameNStart = frameN  # exact frame index
        image_4.tStart = t  # local t and not account for scr refresh
        image_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
        image_4.setAutoDraw(True)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_2"-------
for thisComponent in instructions_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instr_done_button_2.started', instr_done_button_2.tStartRefresh)
thisExp.addData('instr_done_button_2.stopped', instr_done_button_2.tStopRefresh)
thisExp.addData('instr_done_label_2.started', instr_done_label_2.tStartRefresh)
thisExp.addData('instr_done_label_2.stopped', instr_done_label_2.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = instr_done_touch_2.getPos()
buttons = instr_done_touch_2.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(instr_done_button)
        clickableList = instr_done_button
    except:
        clickableList = [instr_done_button]
    for obj in clickableList:
        if obj.contains(instr_done_touch_2):
            gotValidClick = True
            instr_done_touch_2.clicked_name.append(obj.name)
thisExp.addData('instr_done_touch_2.x', x)
thisExp.addData('instr_done_touch_2.y', y)
thisExp.addData('instr_done_touch_2.leftButton', buttons[0])
thisExp.addData('instr_done_touch_2.midButton', buttons[1])
thisExp.addData('instr_done_touch_2.rightButton', buttons[2])
if len(instr_done_touch_2.clicked_name):
    thisExp.addData('instr_done_touch_2.clicked_name', instr_done_touch_2.clicked_name[0])
thisExp.addData('instr_done_touch_2.started', instr_done_touch_2.tStart)
thisExp.addData('instr_done_touch_2.stopped', instr_done_touch_2.tStop)
thisExp.nextEntry()
thisExp.addData('image_4.started', image_4.tStartRefresh)
thisExp.addData('image_4.stopped', image_4.tStopRefresh)
# the Routine "instructions_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions_3"-------
continueRoutine = True
# update component parameters for each repeat
instructs_text_3.setText('Please turn your audio on and get ready to look for the coins!\n\nYou have 100 coins to start with!')
# setup some python lists for storing info about the instr_done_touch_3
instr_done_touch_3.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instructions_3Components = [instructs_text_3, instr_done_button_3, instr_done_label_3, instr_done_touch_3]
for thisComponent in instructions_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_3"-------
while continueRoutine:
    # get current time
    t = instructions_3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructs_text_3* updates
    if instructs_text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructs_text_3.frameNStart = frameN  # exact frame index
        instructs_text_3.tStart = t  # local t and not account for scr refresh
        instructs_text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructs_text_3, 'tStartRefresh')  # time at next scr refresh
        instructs_text_3.setAutoDraw(True)
    
    # *instr_done_button_3* updates
    if instr_done_button_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_done_button_3.frameNStart = frameN  # exact frame index
        instr_done_button_3.tStart = t  # local t and not account for scr refresh
        instr_done_button_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_done_button_3, 'tStartRefresh')  # time at next scr refresh
        instr_done_button_3.setAutoDraw(True)
    
    # *instr_done_label_3* updates
    if instr_done_label_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_done_label_3.frameNStart = frameN  # exact frame index
        instr_done_label_3.tStart = t  # local t and not account for scr refresh
        instr_done_label_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_done_label_3, 'tStartRefresh')  # time at next scr refresh
        instr_done_label_3.setAutoDraw(True)
    # *instr_done_touch_3* updates
    if instr_done_touch_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_done_touch_3.frameNStart = frameN  # exact frame index
        instr_done_touch_3.tStart = t  # local t and not account for scr refresh
        instr_done_touch_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_done_touch_3, 'tStartRefresh')  # time at next scr refresh
        instr_done_touch_3.status = STARTED
        instr_done_touch_3.mouseClock.reset()
        prevButtonState = instr_done_touch_3.getPressed()  # if button is down already this ISN'T a new click
    if instr_done_touch_3.status == STARTED:  # only update if started and not finished!
        buttons = instr_done_touch_3.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(instr_done_button)
                    clickableList = instr_done_button
                except:
                    clickableList = [instr_done_button]
                for obj in clickableList:
                    if obj.contains(instr_done_touch_3):
                        gotValidClick = True
                        instr_done_touch_3.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_3"-------
for thisComponent in instructions_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instr_done_button_3.started', instr_done_button_3.tStartRefresh)
thisExp.addData('instr_done_button_3.stopped', instr_done_button_3.tStopRefresh)
thisExp.addData('instr_done_label_3.started', instr_done_label_3.tStartRefresh)
thisExp.addData('instr_done_label_3.stopped', instr_done_label_3.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = instr_done_touch_3.getPos()
buttons = instr_done_touch_3.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(instr_done_button)
        clickableList = instr_done_button
    except:
        clickableList = [instr_done_button]
    for obj in clickableList:
        if obj.contains(instr_done_touch_3):
            gotValidClick = True
            instr_done_touch_3.clicked_name.append(obj.name)
thisExp.addData('instr_done_touch_3.x', x)
thisExp.addData('instr_done_touch_3.y', y)
thisExp.addData('instr_done_touch_3.leftButton', buttons[0])
thisExp.addData('instr_done_touch_3.midButton', buttons[1])
thisExp.addData('instr_done_touch_3.rightButton', buttons[2])
if len(instr_done_touch_3.clicked_name):
    thisExp.addData('instr_done_touch_3.clicked_name', instr_done_touch_3.clicked_name[0])
thisExp.addData('instr_done_touch_3.started', instr_done_touch_3.tStart)
thisExp.addData('instr_done_touch_3.stopped', instr_done_touch_3.tStop)
thisExp.nextEntry()
# the Routine "instructions_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(blocks_file),
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "start_button"-------
    continueRoutine = True
    # update component parameters for each repeat
    if progress>0:
        start_img.setImage("files/go.png")
    else:
        start_img.setImage("files/start.png")
    # setup some python lists for storing info about the start_press
    start_press.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    start_buttonComponents = [start_img, start_press]
    for thisComponent in start_buttonComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    start_buttonClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "start_button"-------
    while continueRoutine:
        # get current time
        t = start_buttonClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=start_buttonClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        countdown = round(1-t)
        if countdown==0 and progress>0:
            continueRoutine = False;
        
        # *start_img* updates
        if start_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            start_img.frameNStart = frameN  # exact frame index
            start_img.tStart = t  # local t and not account for scr refresh
            start_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start_img, 'tStartRefresh')  # time at next scr refresh
            start_img.setAutoDraw(True)
        # *start_press* updates
        if start_press.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            start_press.frameNStart = frameN  # exact frame index
            start_press.tStart = t  # local t and not account for scr refresh
            start_press.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start_press, 'tStartRefresh')  # time at next scr refresh
            start_press.status = STARTED
            start_press.mouseClock.reset()
            prevButtonState = start_press.getPressed()  # if button is down already this ISN'T a new click
        if start_press.status == STARTED:  # only update if started and not finished!
            buttons = start_press.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(start_img)
                        clickableList = start_img
                    except:
                        clickableList = [start_img]
                    for obj in clickableList:
                        if obj.contains(start_press):
                            gotValidClick = True
                            start_press.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in start_buttonComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "start_button"-------
    for thisComponent in start_buttonComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    blocks.addData('start_img.started', start_img.tStartRefresh)
    blocks.addData('start_img.stopped', start_img.tStopRefresh)
    # store data for blocks (TrialHandler)
    blocks.addData('start_press.started', start_press.tStart)
    blocks.addData('start_press.stopped', start_press.tStop)
    # the Routine "start_button" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(condsFile),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "trial"-------
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the touch_resp
        touch_resp.x = []
        touch_resp.y = []
        touch_resp.leftButton = []
        touch_resp.midButton = []
        touch_resp.rightButton = []
        touch_resp.time = []
        touch_resp.clicked_name = []
        gotValidClick = False  # until a click is received
        # set button image
        button_upper.setImage('files/ball_b.png');
        button_middle.setImage('files/ball_r.png');
        button_lower.setImage('files/ball_g.png');
        gain = 0;
        loss = 0;
        choice= 0;
        
        # keep track of which components have finished
        trialComponents = [fixation, touch_resp, button_lower, button_middle, button_upper]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trial"-------
        while continueRoutine:
            # get current time
            t = trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixation* updates
            if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation.frameNStart = frameN  # exact frame index
                fixation.tStart = t  # local t and not account for scr refresh
                fixation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
                fixation.setAutoDraw(True)
            if fixation.status == STARTED:
                # is it time to stop? (based on local clock)
                if tThisFlip > 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation.tStop = t  # not accounting for scr refresh
                    fixation.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
                    fixation.setAutoDraw(False)
            # *touch_resp* updates
            if touch_resp.status == NOT_STARTED and t >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                touch_resp.frameNStart = frameN  # exact frame index
                touch_resp.tStart = t  # local t and not account for scr refresh
                touch_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(touch_resp, 'tStartRefresh')  # time at next scr refresh
                touch_resp.status = STARTED
                touch_resp.mouseClock.reset()
                prevButtonState = touch_resp.getPressed()  # if button is down already this ISN'T a new click
            if touch_resp.status == STARTED:  # only update if started and not finished!
                buttons = touch_resp.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        try:
                            iter(button_upper, button_middle, button_lower)
                            clickableList = button_upper, button_middle, button_lower
                        except:
                            clickableList = [button_upper, button_middle, button_lower]
                        for obj in clickableList:
                            if obj.contains(touch_resp):
                                gotValidClick = True
                                touch_resp.clicked_name.append(obj.name)
                        x, y = touch_resp.getPos()
                        touch_resp.x.append(x)
                        touch_resp.y.append(y)
                        buttons = touch_resp.getPressed()
                        touch_resp.leftButton.append(buttons[0])
                        touch_resp.midButton.append(buttons[1])
                        touch_resp.rightButton.append(buttons[2])
                        touch_resp.time.append(touch_resp.mouseClock.getTime())
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # *button_lower* updates
            if button_lower.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                button_lower.frameNStart = frameN  # exact frame index
                button_lower.tStart = t  # local t and not account for scr refresh
                button_lower.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(button_lower, 'tStartRefresh')  # time at next scr refresh
                button_lower.setAutoDraw(True)
            
            # *button_middle* updates
            if button_middle.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                button_middle.frameNStart = frameN  # exact frame index
                button_middle.tStart = t  # local t and not account for scr refresh
                button_middle.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(button_middle, 'tStartRefresh')  # time at next scr refresh
                button_middle.setAutoDraw(True)
            
            # *button_upper* updates
            if button_upper.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                button_upper.frameNStart = frameN  # exact frame index
                button_upper.tStart = t  # local t and not account for scr refresh
                button_upper.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(button_upper, 'tStartRefresh')  # time at next scr refresh
                button_upper.setAutoDraw(True)
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial"-------
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('fixation.started', fixation.tStartRefresh)
        trials.addData('fixation.stopped', fixation.tStopRefresh)
        # store data for trials (TrialHandler)
        if len(touch_resp.x): trials.addData('touch_resp.x', touch_resp.x[0])
        if len(touch_resp.y): trials.addData('touch_resp.y', touch_resp.y[0])
        if len(touch_resp.leftButton): trials.addData('touch_resp.leftButton', touch_resp.leftButton[0])
        if len(touch_resp.midButton): trials.addData('touch_resp.midButton', touch_resp.midButton[0])
        if len(touch_resp.rightButton): trials.addData('touch_resp.rightButton', touch_resp.rightButton[0])
        if len(touch_resp.time): trials.addData('touch_resp.time', touch_resp.time[0])
        if len(touch_resp.clicked_name): trials.addData('touch_resp.clicked_name', touch_resp.clicked_name[0])
        trials.addData('touch_resp.started', touch_resp.tStart)
        trials.addData('touch_resp.stopped', touch_resp.tStop)
        # check if correct (either mouse or keyboard)
        rt = touch_resp.time[0]  # annoyingly mouse is a list of rts
        if (('upper' in touch_resp.clicked_name[0] and win_U==1 and loss_U==0) or
            ('middle' in touch_resp.clicked_name[0] and win_M==1 and loss_M==0) or 
            ('lower' in touch_resp.clicked_name[0] and win_L==1 and loss_L==0)):
            corr = 1 # win
            gain = 1
            total_score +=1;
        elif (('upper' in touch_resp.clicked_name[0] and loss_U==-1 and win_U==0) or
            ('middle' in touch_resp.clicked_name[0] and loss_M==-1 and win_M==0) or 
            ('lower' in touch_resp.clicked_name[0] and loss_L==-1 and win_L==0)):
            corr = -1 # loss
            loss = -1
            total_score -=1;
        elif (('upper' in touch_resp.clicked_name[0] and win_U==1 and loss_U==-1) or
            ('middle' in touch_resp.clicked_name[0] and win_M==1 and loss_M==-1) or 
            ('lower' in touch_resp.clicked_name[0] and win_L==1 and loss_L==-1)):
            corr = 11 # win and loss
            gain = 1
            loss = -1 
        else:
            corr = 0 # nothing
        
        if ('upper' in touch_resp.clicked_name[0]):
            choice = 1
        elif('middle' in touch_resp.clicked_name[0]):
            choice = 2
        elif('lower' in touch_resp.clicked_name[0]):
            choice = 3
            
        thisExp.addData('choice', choice)
        thisExp.addData('rt',  rt)
        thisExp.addData('gain', gain)
        thisExp.addData('loss', loss)
        thisExp.addData('total_score', total_score)
        thisExp.addData('corr', corr)
        
        trials.addData('button_lower.started', button_lower.tStartRefresh)
        trials.addData('button_lower.stopped', button_lower.tStopRefresh)
        trials.addData('button_middle.started', button_middle.tStartRefresh)
        trials.addData('button_middle.stopped', button_middle.tStopRefresh)
        trials.addData('button_upper.started', button_upper.tStartRefresh)
        trials.addData('button_upper.stopped', button_upper.tStopRefresh)
        # the Routine "trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "pop_2"-------
        continueRoutine = True
        routineTimer.add(0.700000)
        # update component parameters for each repeat
        # set button image
        button_uppers.setImage('files/ball_b.png')
        button_middles.setImage('files/ball_r.png')
        button_lowers.setImage('files/ball_g.png')
        
        # explode animation
        if ('upper' in touch_resp.clicked_name[0]):
            button_uppers.setImage('files/pop_b.png')
        #    button_upper_lefts.setImage('explode.gif')
        elif ('middle' in touch_resp.clicked_name[0]):
            button_middles.setImage('files/pop_r.png')
        #    button_upper_rights.setImage('explode.gif')
        elif ('lower' in touch_resp.clicked_name[0]):
            button_lowers.setImage('files/pop_g.png')
        #    button_lower_lefts.setImage('explode.gif')
        
        #
        ## display output
        #feedback_images = ['lose.png','win.png','win_lose.png','none.png']
        #if corr==0:
        #    msg="Neither win or lose"
        #    img_idx = 3
        #elif corr==1:
        #    msg="You won"
        #    img_idx = 1
        #elif corr==-1:
        #    msg='You loss'
        #    img_idx = 0
        #else:
        #    msg = 'Both win and lose'
        #    img_idx = 2
        #    
        ## Set the image to the new image
        #feedback_image.setImage(feedback_images[img_idx])
        sound_1.setSound('files/bubble_pop.wav', secs=0.4, hamming=True)
        sound_1.setVolume(1.0, log=False)
        # keep track of which components have finished
        pop_2Components = [button_lowers, button_middles, button_uppers, sound_1]
        for thisComponent in pop_2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        pop_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "pop_2"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = pop_2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=pop_2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *button_lowers* updates
            if button_lowers.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                button_lowers.frameNStart = frameN  # exact frame index
                button_lowers.tStart = t  # local t and not account for scr refresh
                button_lowers.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(button_lowers, 'tStartRefresh')  # time at next scr refresh
                button_lowers.setAutoDraw(True)
            if button_lowers.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > button_lowers.tStartRefresh + 0.7-frameTolerance:
                    # keep track of stop time/frame for later
                    button_lowers.tStop = t  # not accounting for scr refresh
                    button_lowers.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(button_lowers, 'tStopRefresh')  # time at next scr refresh
                    button_lowers.setAutoDraw(False)
            
            # *button_middles* updates
            if button_middles.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                button_middles.frameNStart = frameN  # exact frame index
                button_middles.tStart = t  # local t and not account for scr refresh
                button_middles.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(button_middles, 'tStartRefresh')  # time at next scr refresh
                button_middles.setAutoDraw(True)
            if button_middles.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > button_middles.tStartRefresh + 0.7-frameTolerance:
                    # keep track of stop time/frame for later
                    button_middles.tStop = t  # not accounting for scr refresh
                    button_middles.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(button_middles, 'tStopRefresh')  # time at next scr refresh
                    button_middles.setAutoDraw(False)
            
            # *button_uppers* updates
            if button_uppers.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                button_uppers.frameNStart = frameN  # exact frame index
                button_uppers.tStart = t  # local t and not account for scr refresh
                button_uppers.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(button_uppers, 'tStartRefresh')  # time at next scr refresh
                button_uppers.setAutoDraw(True)
            if button_uppers.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > button_uppers.tStartRefresh + 0.7-frameTolerance:
                    # keep track of stop time/frame for later
                    button_uppers.tStop = t  # not accounting for scr refresh
                    button_uppers.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(button_uppers, 'tStopRefresh')  # time at next scr refresh
                    button_uppers.setAutoDraw(False)
            # start/stop sound_1
            if sound_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_1.frameNStart = frameN  # exact frame index
                sound_1.tStart = t  # local t and not account for scr refresh
                sound_1.tStartRefresh = tThisFlipGlobal  # on global time
                sound_1.play(when=win)  # sync with win flip
            if sound_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_1.tStartRefresh + 0.4-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_1.tStop = t  # not accounting for scr refresh
                    sound_1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(sound_1, 'tStopRefresh')  # time at next scr refresh
                    sound_1.stop()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in pop_2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "pop_2"-------
        for thisComponent in pop_2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('button_lowers.started', button_lowers.tStartRefresh)
        trials.addData('button_lowers.stopped', button_lowers.tStopRefresh)
        trials.addData('button_middles.started', button_middles.tStartRefresh)
        trials.addData('button_middles.stopped', button_middles.tStopRefresh)
        trials.addData('button_uppers.started', button_uppers.tStartRefresh)
        trials.addData('button_uppers.stopped', button_uppers.tStopRefresh)
        sound_1.stop()  # ensure sound has stopped at end of routine
        
        # ------Prepare to start Routine "feedback"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        # display output
        out_plus_vis=0;
        out_minus_vis=0;
        out_plus_pos = (0, -0.3);
        out_minus_pos = (0, -0.3);
        fb_size = (0.5,0.5);
        feedback_images = ['files/lose.png','files/win.png','files/win_lose2.png','files/none.png']
        if corr==0:
            msg="You don't win or lose"
            img_idx = 3
        elif corr==1:
            msg="You win 1 coin!"
            coins += 1
            img_idx = 1
            out_plus_vis=1;
        elif corr==-1:
            msg="You lose 1 coin"
            ghosts +=1
            img_idx = 0
            out_minus_vis=1;
        else:
            msg = "You win & lose"
            coins += 1
            ghosts +=1
            img_idx = 2
            out_plus_vis=1;
            out_minus_vis=1;
            out_plus_pos = (-0.15, -0.3);
            out_minus_pos = (0.15, -0.3);
            fb_size = (0.24,0.5);
        
        # Set the image to the new image
        feedback_image.setImage(feedback_images[img_idx])
        #text.text=msg;
        #text.color='white'
        feedback_image.setSize(fb_size)
        out_plus.setOpacity(out_plus_vis)
        out_plus.setPos(out_plus_pos)
        out_minus.setOpacity(out_minus_vis)
        out_minus.setPos(out_minus_pos)
        # keep track of which components have finished
        feedbackComponents = [feedback_image, out_plus, out_minus]
        for thisComponent in feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "feedback"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = feedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *feedback_image* updates
            if feedback_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feedback_image.frameNStart = frameN  # exact frame index
                feedback_image.tStart = t  # local t and not account for scr refresh
                feedback_image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feedback_image, 'tStartRefresh')  # time at next scr refresh
                feedback_image.setAutoDraw(True)
            if feedback_image.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > feedback_image.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    feedback_image.tStop = t  # not accounting for scr refresh
                    feedback_image.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(feedback_image, 'tStopRefresh')  # time at next scr refresh
                    feedback_image.setAutoDraw(False)
            
            # *out_plus* updates
            if out_plus.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                out_plus.frameNStart = frameN  # exact frame index
                out_plus.tStart = t  # local t and not account for scr refresh
                out_plus.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(out_plus, 'tStartRefresh')  # time at next scr refresh
                out_plus.setAutoDraw(True)
            if out_plus.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > out_plus.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    out_plus.tStop = t  # not accounting for scr refresh
                    out_plus.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(out_plus, 'tStopRefresh')  # time at next scr refresh
                    out_plus.setAutoDraw(False)
            
            # *out_minus* updates
            if out_minus.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                out_minus.frameNStart = frameN  # exact frame index
                out_minus.tStart = t  # local t and not account for scr refresh
                out_minus.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(out_minus, 'tStartRefresh')  # time at next scr refresh
                out_minus.setAutoDraw(True)
            if out_minus.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > out_minus.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    out_minus.tStop = t  # not accounting for scr refresh
                    out_minus.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(out_minus, 'tStopRefresh')  # time at next scr refresh
                    out_minus.setAutoDraw(False)
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "feedback"-------
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('feedback_image.started', feedback_image.tStartRefresh)
        trials.addData('feedback_image.stopped', feedback_image.tStopRefresh)
        trials.addData('out_plus.started', out_plus.tStartRefresh)
        trials.addData('out_plus.stopped', out_plus.tStopRefresh)
        trials.addData('out_minus.started', out_minus.tStartRefresh)
        trials.addData('out_minus.stopped', out_minus.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials'
    
    
    # ------Prepare to start Routine "block_score"-------
    continueRoutine = True
    # update component parameters for each repeat
    progress = progress + 25;
    progImg.setImage("files/p"+str(progress)+".png")
    cash_left=0
    if progress <100:
        txt_part = 'Well done! You are '+str(progress)+'% through! Keep going!'
        block_cash.setText(
        txt_part
        +'\n'+
        '\nYou have '+str(total_score)+' point(s).'+
        '\n'+
        '\nTake a short rest and get ready to play.')
    if progress==100:
        txt_part = 'Well done! You have finished the game. Please wait.'
        block_cash.setText(
        txt_part
        +'\n'+
        '\nYou won '+str(total_score)+' point(s).')
    
    # reset count
    points = 0
    timer_text = '';
    # keep track of which components have finished
    block_scoreComponents = [countdown_text, progImg, block_cash]
    for thisComponent in block_scoreComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    block_scoreClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "block_score"-------
    while continueRoutine:
        # get current time
        t = block_scoreClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=block_scoreClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *countdown_text* updates
        if countdown_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            countdown_text.frameNStart = frameN  # exact frame index
            countdown_text.tStart = t  # local t and not account for scr refresh
            countdown_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(countdown_text, 'tStartRefresh')  # time at next scr refresh
            countdown_text.setAutoDraw(True)
        if countdown_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > countdown_text.tStartRefresh + break_dur-frameTolerance:
                # keep track of stop time/frame for later
                countdown_text.tStop = t  # not accounting for scr refresh
                countdown_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(countdown_text, 'tStopRefresh')  # time at next scr refresh
                countdown_text.setAutoDraw(False)
        if countdown_text.status == STARTED:  # only update if drawing
            countdown_text.setText(timer_text, log=False)
        
        # *progImg* updates
        if progImg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progImg.frameNStart = frameN  # exact frame index
            progImg.tStart = t  # local t and not account for scr refresh
            progImg.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progImg, 'tStartRefresh')  # time at next scr refresh
            progImg.setAutoDraw(True)
        if progImg.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > progImg.tStartRefresh + break_dur-frameTolerance:
                # keep track of stop time/frame for later
                progImg.tStop = t  # not accounting for scr refresh
                progImg.frameNStop = frameN  # exact frame index
                win.timeOnFlip(progImg, 'tStopRefresh')  # time at next scr refresh
                progImg.setAutoDraw(False)
        
        # *block_cash* updates
        if block_cash.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            block_cash.frameNStart = frameN  # exact frame index
            block_cash.tStart = t  # local t and not account for scr refresh
            block_cash.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(block_cash, 'tStartRefresh')  # time at next scr refresh
            block_cash.setAutoDraw(True)
        if block_cash.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > block_cash.tStartRefresh + break_dur-frameTolerance:
                # keep track of stop time/frame for later
                block_cash.tStop = t  # not accounting for scr refresh
                block_cash.frameNStop = frameN  # exact frame index
                win.timeOnFlip(block_cash, 'tStopRefresh')  # time at next scr refresh
                block_cash.setAutoDraw(False)
        countdown = round(break_dur-0.5-t)
        if progress==100:
            timer_text = '';    
            continueRoutine = False;
        if countdown==0:
            if progress==100:
                timer_text=""
            else:
                timer_text="Go!"
        else:
            timer_text="The task will start again in: "+str(countdown) + ' second(s).'    
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in block_scoreComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "block_score"-------
    for thisComponent in block_scoreComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    blocks.addData('countdown_text.started', countdown_text.tStartRefresh)
    blocks.addData('countdown_text.stopped', countdown_text.tStopRefresh)
    blocks.addData('progImg.started', progImg.tStartRefresh)
    blocks.addData('progImg.stopped', progImg.tStopRefresh)
    blocks.addData('block_cash.started', block_cash.tStartRefresh)
    blocks.addData('block_cash.stopped', block_cash.tStopRefresh)
    # the Routine "block_score" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1 repeats of 'blocks'


# ------Prepare to start Routine "final_score"-------
continueRoutine = True
routineTimer.add(3.000000)
# update component parameters for each repeat
#score.setText('You have won '+str(coins)+' coins!')

end_txt_part = 'Well done!'
score.setText(
end_txt_part
+'\n'+
'\nYou have won '+str(total_score)+' coin(s).')
# keep track of which components have finished
final_scoreComponents = [score]
for thisComponent in final_scoreComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
final_scoreClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "final_score"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = final_scoreClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=final_scoreClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *score* updates
    if score.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        score.frameNStart = frameN  # exact frame index
        score.tStart = t  # local t and not account for scr refresh
        score.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(score, 'tStartRefresh')  # time at next scr refresh
        score.setAutoDraw(True)
    if score.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > score.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            score.tStop = t  # not accounting for scr refresh
            score.frameNStop = frameN  # exact frame index
            win.timeOnFlip(score, 'tStopRefresh')  # time at next scr refresh
            score.setAutoDraw(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in final_scoreComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "final_score"-------
for thisComponent in final_scoreComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('score.started', score.tStartRefresh)
thisExp.addData('score.stopped', score.tStopRefresh)

# ------Prepare to start Routine "end_thanks"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
# keep track of which components have finished
end_thanksComponents = [thanks_text]
for thisComponent in end_thanksComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
end_thanksClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end_thanks"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = end_thanksClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=end_thanksClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thanks_text* updates
    if thanks_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thanks_text.frameNStart = frameN  # exact frame index
        thanks_text.tStart = t  # local t and not account for scr refresh
        thanks_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thanks_text, 'tStartRefresh')  # time at next scr refresh
        thanks_text.setAutoDraw(True)
    if thanks_text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > thanks_text.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            thanks_text.tStop = t  # not accounting for scr refresh
            thanks_text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(thanks_text, 'tStopRefresh')  # time at next scr refresh
            thanks_text.setAutoDraw(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_thanksComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end_thanks"-------
for thisComponent in end_thanksComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('thanks_text.started', thanks_text.tStartRefresh)
thisExp.addData('thanks_text.stopped', thanks_text.tStopRefresh)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
