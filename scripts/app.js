/*
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
!function(e){"use strict";var o=e.querySelector("#app");o.baseUrl="/",""===window.location.port,o.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),window.addEventListener("paper-header-transform",function(o){var a=Polymer.dom(e).querySelector("#mainToolbar .app-name"),r=Polymer.dom(e).querySelector("#mainToolbar .middle-container"),n=Polymer.dom(e).querySelector("#mainToolbar .bottom-container"),t=o.detail,l=t.height-t.condensedHeight,c=Math.min(1,t.y/l),s=.5,i=l-t.y,d=l/(1-s),m=Math.max(s,i/d+s),y=1-c;Polymer.Base.transform("translate3d(0,"+100*c+"%,0)",r),Polymer.Base.transform("scale("+y+") translateZ(0)",n),Polymer.Base.transform("scale("+m+") translateZ(0)",a)}),o.scrollPageToTop=function(){o.$.headerPanelMain.scrollToTop(!0)},o.closeDrawer=function(){o.$.paperDrawerPanel.closeDrawer()}}(document);