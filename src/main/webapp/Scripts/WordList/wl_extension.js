//*******************************************************************************
// Educational Online Test Delivery System
// Copyright (c) 2015 American Institutes for Research
//
// Distributed under the AIR Open Source License, Version 1.0
// See accompanying file AIR-License-1_0.txt or at
// http://www.smarterapp.org/documents/American_Institutes_for_Research_Open_Source_Software_License.pdf
//*******************************************************************************


// Extends the Blackbox WordListPanel.
// The Blackbox implmentation lacks a way to clear any word lists that were loaded for an item.
// The word lists are loaded and cached separatly from the item they are associated with.
// This clears the cache of all already loaded word lists.
// This is useful if you need to reload an item with a different word list. Used by IRiS.
WordListPanel.clearCache = function() {
    WordListPanel.contentWordCache = {};
    WordListPanel.headerWordCache = {};
    WordListPanel.message = {};
};