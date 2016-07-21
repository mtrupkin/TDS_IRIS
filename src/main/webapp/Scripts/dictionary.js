//*******************************************************************************
// Educational Online Test Delivery System
// Copyright (c) 2015 American Institutes for Research
//
// Distributed under the AIR Open Source License, Version 1.0
// See accompanying file AIR-License-1_0.txt or at
// http://www.smarterapp.org/documents/American_Institutes_for_Research_Open_Source_Software_License.pdf
//*******************************************************************************
/*
Code used for showing dictionary popup.
*/

function Dictionary () {};

    Dictionary.createUrl = function() {

        var accProps = TDS.getAccommodationProperties();

        var urlParams = [];

        var dict = accProps.getDictionary(),
            spDict = accProps.getSpanishDictionary();

        if (dict) {
            urlParams.push('dictionary=' + dict);
        }
        if (spDict) {
            urlParams.push('spanish=' + spDict);
        }

        var dictOptions = accProps.getDictionaryOptions(),
            spDictOptions = accProps.getSpanishDictionaryOptions();

        if (dictOptions && dictOptions.length > 0) {
            urlParams.push('do=' + dictOptions.join(','));
        }
        if (spDictOptions && spDictOptions.length > 0) {
            urlParams.push('so=' + spDictOptions.join(','));
        }

        var thes = accProps.getThesaurus();
        if (thes) {
            urlParams.push('thesaurus=' + thes);
        }

        var thesOptions = accProps.getThesaurusOptions();
        if (thesOptions && thesOptions.length > 0) {
            urlParams.push('to=' + thesOptions.join(','));
        }

        urlParams.push('group=' + TDS.getAppSetting('tds.dictionary.group', 'AIR'));

        var url = TS.Config.dictionaryUrl + '?';
        url += urlParams.join('&');
        return url;
    };

    Dictionary.toggle = function() {

        var url = Dictionary.createUrl();
        var id = 'tds-dict-' + Util.String.hashCode(url); // unique id

        // create panel
        var panel = TDS.ToolManager.get(id);
        if (panel == null) {
            var headerText = window.Messages.getAlt('TestShell.Label.Dictionary', 'Dictionary');
            panel = TDS.ToolManager.createPanel(id, 'dictionary', headerText, null, url);
        }

        TDS.ToolManager.toggle(panel);
    };
