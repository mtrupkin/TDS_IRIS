var javaFolder = '/Shared/Applets/';
if (typeof blackboxConfig != 'object') blackboxConfig = {};
blackboxConfig.baseUrl = '/';
blackboxConfig.client = 'SBAC';
blackboxConfig.testShellName = 'modern';
blackboxConfig.testShellHtml = '  <div id="topBar">    <a href="#contents" id="skipNav" tabindex="0">Skip navigation</a>    <div id="infoBar" role="banner">    <div id="jumpQuestions">     <label id="jumpLabel" i18n-content="TestShellModern.Label.Items">Items:</label> <select id="ddlNavigation" name="ddlNavigation" aria-labelledby="jumpLabel"></select> <input id="jumpGo" type="button" value="Go" aria-label="Press enter to jump to question" style="display: none;" />    </div>    <h1 id="lblTestName"></h1>    <h2 id="lblStudentName"></h2>    <span class="sessionID"></span>    <div id="smallButtons">     <a href="#" id="btnHelp" aria-haspopup="true">Help</a> <a href="#" id="btnSettings" aria-haspopup="true">Settings</a> <a href="#" id="proctorLogout" aria-hidden="true" style="display: none;">Log      Out</a>    </div>   </div>    <nav id="navigation" role="navigation">   <ul id="studentControls"></ul>   <div id="soundCues"></div>   <ul id="studentTools"></ul>   </nav>  </div>   <!-- alertActive shows the dialog, alertClosed is added after a student dismisses the dialog <div class="alertBar alertActive" role="alertdialog"> <div class="alertBar alertActive alertClosed" role="alertdialog"> -->  <div class="alertBar alertClosed" aria-live="assertive" aria-atomic="true">   <a href="#" class="alertDismiss" role="button" aria-expanded="false"> <span class="alertDismissOpen">Open alerts</span> <span class="alertDismissClose">Close alerts</span>   </a>   <ul class="alertContent" aria-relevant="additions"></ul>  </div>   <div id="contents" role="main">   <div id="reviews"></div>  </div>   <div id="tool-ClosedCaptioning" class="tdsClosedCaptioning" aria-live="polite" aria-label="Captioning for current audio"></div>';
blackboxConfig.testShellToolbars = {
	"controls": 
	{
		"save": 
		{
			"id": "btnSave",
			"classname": "save",
			"i18n": "TestShell.Link.Save",
			"label": "Save"
		},
		"back": 
		{
			"id": "btnBack",
			"classname": "back",
			"i18n": "TestShell.Link.Back",
			"label": "Back",
			"inactive": true
		},
		"next": 
		{
			"id": "btnNext",
			"classname": "next",
			"i18n": "TestShell.Link.Next",
			"label": "Next",
			"inactive": true
		},
		"pause": 
		{
			"id": "btnPause",
			"classname": "pause",
			"i18n": "TestShell.Link.Pause",
			"label": "Pause"
		},
		"end": 
		{
			"id": "btnEnd",
			"classname": "endTest confirmexitCSS",
			"i18n": "TestShell.Link.EndTest",
			"label": "End Test",
			"inactive": true
		},
		"itemscore": 
		{
			"id": "btnItemScore",
			"label": "Item Score",
			"hidden": true
		},
		"results": 
		{
			"id": "btnResults",
			"classname": "endTest",
			"i18n": "TestShell.Link.TestResults",
			"label": "Test Results",
			"inactive": true
		},
		"fullscreen": 
		{
			"id": "btnFullScreen",
			"classname": "fullscreen",
			"i18n": "TestShell.Link.FullScreen",
			"label": "Full Screen",
			"hidden": true
		}
	},
	"tools": 
	{
		"contextmenu": 
		{
			"id": "btnContext",
			"classname": "openContext"
		},
		"zoomin": 
		{
			"id": "btnZoomIn",
			"classname": "zoomIn",
			"i18n": "TestShell.Link.ZoomIn",
			"label": "Zoom In"
		},
		"zoomout": 
		{
			"id": "btnZoomOut",
			"classname": "zoomOut",
			"i18n": "TestShell.Link.ZoomOut",
			"label": "Zoom In"
		},
		"linereader": 
		{
			"id": "btnLineReader",
			"classname": "lineReader",
			"i18n": "TestShell.Link.LineReader",
			"label": "LineReader"
		},
		"notes": 
		{
			"id": "btnGlobalNotes",
			"classname": "globalNotes",
			"i18n": "TestShell.Link.GlobalNotes",
			"label": "Notes"
		},
		"calculator": 
		{
			"id": "btnCalculator",
			"classname": "calculator",
			"i18n": "TestShell.Link.Calculator",
			"label": "Calculator"
		},
		"formula": 
		{
			"id": "btnFormula",
			"classname": "math",
			"i18n": "TestShell.Link.Formula",
			"label": "Formula"
		},
		"periodictable": 
		{
			"id": "btnPeriodic",
			"classname": "periodic",
			"i18n": "TestShell.Link.PeriodicTable",
			"label": "Periodic Table"
		},
		"print": 
		{
			"id": "btnPrint",
			"classname": "printer excludeMenu",
			"i18n": "TestShell.Link.Print",
			"label": "Print"
		},
		"printpage": 
		{
			"id": "btnPagePrint",
			"classname": "printerPage",
			"i18n": "TestShell.Link.PrintPage",
			"label": "Print Page"
		},
		"printpractice": 
		{
			"id": "btnPrintPractice",
			"classname": "printerPractice excludeMenu",
			"i18n": "TestShell.Link.PrintPractice",
			"label": "Print"
		},
		"dictionary": 
		{
			"id": "btnDictionary",
			"classname": "dictionary",
			"i18n": "TestShell.Link.Dictionary",
			"label": "Dictionary",
			"hidden": true
		},
		"masking": 
		{
			"id": "btnMask",
			"classname": "maskingtool",
			"i18n": "TestShell.Link.Masking",
			"label": "Masking",
			"hidden": true
		},
		"ruler": 
		{
			"id": "btnRuler",
			"classname": "mt_ruler",
			"i18n": "TestShell.Link.Ruler",
			"label": "Ruler",
			"hidden": true
		},
		"protractor": 
		{
			"id": "btnProtractor",
			"classname": "mt_protractor",
			"i18n": "TestShell.Link.Protractor",
			"label": "Protractor",
			"hidden": true
		},
		"rubric": 
		{
			"id": "btnRubric",
			"classname": "rubric",
			"i18n": "TestShell.Link.Rubric",
			"label": "Rubric",
			"hidden": true
		}
	},
	
	"toolbars": 
	{
		"modern":
		{
			"controls": ["save", "back", "next", "pause", "end", "itemscore", "results"],
			"tools": ["contextmenu", "zoomin", "zoomout", "print", "linereader", "notes", "calculator", "formula", "periodictable", "dictionary", "masking", "ruler", "protractor", "rubric"]
		},
		"universal": 
		{
			"controls": ["back", "next", "save", "pause", "end", "itemscore", "results"],
			"tools": ["rubric", "protractor", "ruler", "masking", "dictionary", "periodictable", "formula", "calculator", "notes", "linereader", "print", "printpage", "zoomout", "zoomin", "contextmenu"]
		}
	}

}


;
blackboxConfig.styles = [];
blackboxConfig.scripts = [];
//*******************************************************************************
// Educational Online Test Delivery System
// Copyright (c) 2015 American Institutes for Research
//
// Distributed under the AIR Open Source License, Version 1.0
// See accompanying file AIR-License-1_0.txt or at
// http://www.smarterapp.org/documents/American_Institutes_for_Research_Open_Source_Software_License.pdf
//*******************************************************************************
/*
This code is used to load the test shell and blackbox resources.
*/

(function()
{
    // check for config
    if (typeof blackboxConfig != 'object') return;

    // set config defaults
    if (!blackboxConfig.container) blackboxConfig.container = 'testShell';

    var scriptContents = '<script type="text/javascript">{0}</script>';
    var templateContents = '<script id="{0}" type="text/html">{1}</script>';
    var scriptLink = '<script type="text/javascript" src="{0}"><\/script>';
    var styleLink = '<link type="text/css" media="all" rel="stylesheet" href="{0}" />';

    var createStyleLink = function(src) {
        return styleLink.replace('{0}', src);
    };

    var createScriptLink = function(src) {
        return scriptLink.replace('{0}', src);
    };

    var createTemplate = function(id, src) {
        return templateContents.replace('{0}', id).replace('{1}', src);
    };

    var blackboxStyleTags = [];
    var blackboxScriptTags = [];
    
    // resolve style url's
    for (var i = 0, ii = blackboxConfig.styles.length; i < ii; i++)
    {
        var blackboxStyle = blackboxConfig.styles[i];
        // blackboxStyle = blackboxConfig.baseUrl + blackboxStyle;
        blackboxStyleTags.push(createStyleLink(blackboxStyle));
    }

    // resolve script url's
    for (var i = 0, ii = blackboxConfig.scripts.length; i < ii; i++) 
    {
        var blackboxScript = blackboxConfig.scripts[i];
        // blackboxScript = blackboxConfig.baseUrl + blackboxScript;
        blackboxScriptTags.push(createScriptLink(blackboxScript));
    }
    
    // write out style tags
    document.write(blackboxStyleTags.join(''));

    // write out script tags
    document.write(blackboxScriptTags.join(''));
    
    // write out test shell template
    var tsTemplateTag = createTemplate('testShellHtml', blackboxConfig.testShellHtml);
    document.write(tsTemplateTag);
})();