/*******************************************************************************
 * Educational Online Test Delivery System Copyright (c) 2014 American
 * Institutes for Research
 *
 * Distributed under the AIR Open Source License, Version 1.0 See accompanying
 * file AIR-License-1_0.txt or at http://www.smarterapp.org/documents/
 * American_Institutes_for_Research_Open_Source_Software_License.pdf
 ******************************************************************************/
package tds.iris.web.handlers;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import tds.blackbox.ContentRequest;
import tds.blackbox.ContentRequestException;
import tds.blackbox.ContentRequestParser;
import tds.iris.abstractions.repository.IContentHelper;
import tds.itemrenderer.data.AccLookup;
import tds.itemrenderer.data.ItemRenderGroup;
import tds.itemrenderer.webcontrols.PageLayout;
import tds.itemrenderer.webcontrols.rendererservlet.ContentRenderingException;
import tds.blackbox.web.handlers.BaseContentRendererController;
import AIR.Common.Json.JsonHelper;
import AIR.Common.Web.Session.HttpContext;
import tds.itemrenderer.webcontrols.rendererservlet.RendererServlet;

/**
 * @author mpatel
 * 
 */
@Scope ("prototype")
@Controller
public class DialogFrameHandler extends BaseContentRendererController
{

  private static final Logger _logger = LoggerFactory.getLogger (DialogFrameHandler.class);

  @Autowired
  private IContentHelper _contentHelper;

  @Autowired
  private PageLayout _pageLayout;

  @RequestMapping (value = "DialogFrame.axd/getContent", produces = "application/xml")
  @ResponseBody
  public String getDialogFrameContent (
          @RequestParam(value = "bankKey",
                  required = true)
                 long bankKey,
          @RequestParam(value = "itemKey",
                  required = true)
                  long itemKey,
          @RequestParam(value = "language",
                  required = false)
                  String contentLanguage,
          HttpServletResponse response
  ) {
    if(StringUtils.isEmpty(contentLanguage)){
      contentLanguage = "ENU";
    }

    ItemRenderGroup itemRenderGroup = _contentHelper.loadTutorial(bankKey, itemKey, contentLanguage);
    _pageLayout.setItemRenderGroup(itemRenderGroup);
    RendererServlet.getRenderedOutput (_pageLayout);

    return _pageLayout.getRenderToString ();

  }

}
