// Bar button//
function viewDiv_all(){
  if (document.getElementById("in").style.display = "none"){
    document.getElementById("in").style.display = "block";
    document.getElementById("beer_in").style.display = "none";
    document.getElementById("gin_in").style.display = "none";
    document.getElementById("liqueur_in").style.display = "none";
    document.getElementById("tequila_in").style.display = "none";
    document.getElementById("rum_in").style.display = "none";
    document.getElementById("whiskey_in").style.display = "none";
    document.getElementById("cognac_in").style.display = "none";
    document.getElementById("vodka_in").style.display = "none";
    document.getElementById("wine_in").style.display = "none";
    document.getElementById("sparkling_in").style.display = "none";
    document.getElementById("cocktails_in").style.display = "none";
    document.getElementById("shot_in").style.display = "none";
    document.getElementById("finlandia_in").style.display = "none";
    document.getElementById("jack_in").style.display = "none";
  }

}

function viewDiv_jack(){
  if ( document.getElementById("jack_in").style.display=="block") {
    document.getElementById("jack_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("jack_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_finlandia(){
  if ( document.getElementById("finlandia_in").style.display=="block") {
    document.getElementById("finlandia_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("finlandia_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_beer(){
  if ( document.getElementById("beer_in").style.display=="block") {
    document.getElementById("beer_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("beer_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_gin(){
  if ( document.getElementById("gin_in").style.display=="block") {
    document.getElementById("gin_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("gin_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_liqueur(){
  if ( document.getElementById("liqueur_in").style.display=="block") {
    document.getElementById("liqueur_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("liqueur_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_tequila(){
  if ( document.getElementById("tequila_in").style.display=="block") {
    document.getElementById("tequila_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("tequila_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_rum(){
  if ( document.getElementById("rum_in").style.display=="block") {
    document.getElementById("rum_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("rum_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_whiskey(){
  if ( document.getElementById("whiskey_in").style.display=="block") {
    document.getElementById("whiskey_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("whiskey_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_cognac(){
  if ( document.getElementById("cognac_in").style.display=="block") {
    document.getElementById("cognac_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("cognac_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_vodka(){
  if ( document.getElementById("vodka_in").style.display=="block") {
    document.getElementById("vodka_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("vodka_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_wine(){
  if ( document.getElementById("wine_in").style.display=="block") {
    document.getElementById("wine_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("wine_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_sparkling(){
  if ( document.getElementById("sparkling_in").style.display=="block") {
    document.getElementById("sparkling_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("sparkling_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_cocktails(){
  if ( document.getElementById("cocktails_in").style.display=="block") {
    document.getElementById("cocktails_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("cocktails_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

function viewDiv_shot(){
  if ( document.getElementById("shot_in").style.display=="block") {
    document.getElementById("shot_in").style.display = "none";
    document.getElementById("in").style.display = "block";
   
  }else{
    document.getElementById("shot_in").style.display = "block";
    document.getElementById("in").style.display = "none";
  }
};

//     //


/*<![CDATA[*/

    /**
     * Angular connection
     */
     app.loadBasePreviewController();

     /**
      * Return value with '-' instead of spaces
      *
      * @param input - string
      * */
     
 
     /**
      * The QR service for the app.
      * */
     app.service('qr', function () {
         /**
          * Scroll page from buttom to top
          * */
         
     });
 
     /**
      * Directive
      *
      * When image is loaded fadeout welcome screen
      * */
     app.directive('imageonload', ['qr', function (qr) {
         return {
             restrict: 'A',
             link: function (scope, element, attrs) {
                 element.bind('load', function () {
                     $("#welcomeImg").fadeIn(1000);
                     window.setTimeout(function () {
                         $(".loading-welcome.welcome-screen").fadeOut();
                         scope.welcomeScreenScrollWindow++;
                     }, 2000);
                 });
                 element.bind('error', function () {
                 });
             }
         };
     }]);
   /**
      * Return domain of input
      * */

 
     //Override the base preview controller
     app.controller('ComplexController', function ($scope, $controller, $sce, $rootScope, $filter, previewService, $window, $log, http, $timeout) {
             /**
              * Current page state
              */
             $scope.page = {
                 form: {
                     email: ''
                 }
             };
 
             $scope.welcomeScreenScrollWindow = 0;
             $scope.isDialogVisible = false;
             $scope.showDescription = false;
 
             /**
              * @returns {boolean}
              */
             $scope.hasAnyContentToDisplay = function () {
                 return true;
             };
 
             $scope.getBodyStyles = function () {
                 if (!$scope.view.code) {
                     return {};
                 }
                 return {
                     color: $scope.getTextColor1()
                 };
             };
 
             /**
              * Get background gradient color.
              */
             $scope.getBackgroundStyles = function () {
                 if (!$scope.view.code) {
                     return {};
                 }
                 // if (!$scope.view.code.color2) {
                 //     return {
                 //         backgroundImage: "linear-gradient(to bottom," + $scope.view.code.color1 + ", " + $filter('colorLuminance')($scope.view.code.color1, -0.2) + " 100%)",
                 //         color: $scope.getTextColor1()
                 //     };
                 // }
                 // return {
                 //     backgroundImage: "linear-gradient(to bottom, " + $scope.view.code.color1 + ", " + $scope.view.code.color2 + ")",
                 //     color: $scope.getTextColor1()
                 // };
                 return {
                     backgroundColor: $scope.view.code.color1,
                     color: $scope.getTextColor1()
                 };
             };
 
             /**
              * Get the text color #1.
              * Depends on color1 brightness.
              * @returns {string}
              */
             $scope.getTextColor1 = function () {
                 if (!$scope.view.code) {
                     return '#fff';
                 }
                 return $scope.isColorLight($scope.view.code.color1) ? '#333' : '#fff';
             };
 
             /**
              * Get the border color #1.
              * Depends on color1 brightness.
              * @returns {string}
              */
             $scope.getBorderColor1 = function () {
                 if (!$scope.view.code) {
                     return 'rgba(255, 255, 255, 0.7)';
                 }
                 return $scope.isColorLight($scope.view.code.color1) ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.7)';
             };
 
             /**
              * Get the text color #2.
              * Depends on color2 brightness.
              * @returns {string}
              */
             $scope.getTextColor2 = function () {
                 if (!$scope.view.code) {
                     return '#fff';
                 }
                 return $scope.isColorLight($scope.view.code.color2) ? '#333' : '#fff';
             };
 
             /**
              * Get view.code.useGridView value, but take into account amount of images.
              * @return {boolean}
              */
             $scope.useGridView = function () {
                 if (!$scope.view.code || !$scope.view.code.images || $scope.view.code.images.length <= 0) {
                     return false;
                 }
                 return $scope.view.code.useGridView;
             };
 
             function escapeHtml(text) {
                 return text
                     .replace(/&/g, "&amp;")
                     .replace(/</g, "&lt;")
                     .replace(/>/g, "&gt;")
                     .replace(/"/g, "&quot;")
                     .replace(/'/g, "&#039;");
             }
 
             /**
              * Open the full-screen gallery.
              * @link http://photoswipe.com/
              * @link http://photoswipe.com/documentation/getting-started.html
              * @param image
              */
             $scope.openGallery = function (image) {
                 var items = [], index = 0;
                 angular.forEach($scope.view.code.images, function (im, i) {
                     items.push({
                         src: im.url,
                         w: im.width || 320,
                         h: im.height || 240,
                         title: escapeHtml(im.caption || "")
                     });
                     if (image.url === im.url) {
                         index = i
                     }
                 });
                 var gallery = new PhotoSwipe(document.querySelectorAll('.pswp')[0], PhotoSwipeUI_Default, items, {
                     index: index,
                     bgOpacity: 0.85,
                     history: false,
                     shareButtons: [
                         {
                             id: 'facebook',
                             label: 'Facebook',
                             url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}'
                         },
                         {
                             id: 'twitter',
                             label: 'Twitter',
                             url: 'https://twitter.com/share?url={{url}}'
                         },
                         {
                             id: 'google',
                             label: 'Google+',
                             url: 'https://plus.google.com/share?url={{url}}'
                         },
                         {
                             id: 'download',
                             label: 'Download image',
                             url: '{{raw_image_url}}',
                             download: true
                         }
                     ]
                 });
                 gallery.init();
             };
 
             /**
              * This function is used to get styles for the image containers.
              * The image container is used to make loading of images more seamless.
              */
             $scope.getImageContainerStyle = function (image) {
                 if (!image.width || !image.height) {
                     return {
                         display: 'none'
                     };
                 }
                 return {
                     paddingBottom: (image.height * 100 / image.width) + '%' // This is ratio between height and width
                 };
             };
 
             $scope.$watch('[view.code.title, view.code.description, view.code.button, showDescription]', function () {
                 var height = $('.sh-page__title').outerHeight() + $('.sh-page__description:visible').outerHeight();
                 height += $('.sh-button').outerHeight();
                 var newHeight = 500 + height - 170;
                 $('.sh-background').height(newHeight > 500 ? newHeight : 500);
             }, true);
 
             /**
              * Copy short ulr to clipboard
              *
              * @param elem - input element with the link
              * */
             $scope.ifCopySucceed = false;
             $scope.copyLinkToClipboard = function (elem) {
                 var targetId = "_hiddenCopyText_";
                 var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
                 var origSelectionStart, origSelectionEnd;
                 if (isInput) {
                     // can just use the original source element for the selection and copy
                     target = elem;
                     origSelectionStart = elem.selectionStart;
                     origSelectionEnd = elem.selectionEnd;
                 } else {
                     // must use a temporary form element for the selection and copy
                     target = document.getElementById(targetId);
                     if (!target) {
                         var target = document.createElement("textarea");
                         target.style.position = "absolute";
                         target.style.left = "-9999px";
                         target.style.top = "0";
                         target.id = targetId;
                         document.body.appendChild(target);
                     }
                     target.textContent = elem.textContent;
                 }
                 // select the content
                 var currentFocus = document.activeElement;
                 target.focus();
                 target.setSelectionRange(0, target.value.length);
 
                 // copy the selection
                 var succeed;
                 try {
                     succeed = document.execCommand("copy");
                 } catch (e) {
                     succeed = false;
                 }
                 // restore original focus
                 if (currentFocus && typeof currentFocus.focus === "function") {
                     currentFocus.focus();
                 }
 
                 if (isInput) {
                     // restore prior selection
                     elem.setSelectionRange(origSelectionStart, origSelectionEnd);
                 } else {
                     // clear temporary content
                     target.textContent = "";
                 }
                 $scope.$apply(function () {
                     $scope.ifCopySucceed = succeed;
                 });
                 setTimeout(function () {
                     $scope.$apply(function () {
                         $scope.ifCopySucceed = false;
                     });
                 }, 1500)
             };
 
             /**
              * Open the dialog popup
              * Event is for getting the current target element
              * Target:
              *      - shareAction: Button with got it information
              *      - channelAction: Button with got it information
              *
              * @param event - string
              * @param target - string
              * */
             $scope.callAction = function (event, target) {
                 switch (target) {
                     case 'callAction':
                         event.preventDefault();
                         if ($scope.loadDemo) {
                             $scope.gotItText = 'Name this optional button as you want and link to any website of your choice.';
                             $scope.toggleDialog('gotIt', $(event.currentTarget));
                         } else {
                             $scope.toggleDialog('redirectTo');
                         }
                         break;
                     case 'shareAction':
                         if ($scope.loadDemo) {
                             $scope.gotItText = 'Users can tap this button to share your page.';
                             $scope.toggleDialog('gotIt', $(event.currentTarget));
                         }
                         break;
                     case 'shareAction2':
                         if ($scope.loadDemo) {
                             toggleFab('#shareFab');
                             event.preventDefault();
                             $scope.gotItText = 'Your contacts can click this button to share your page.';
                             $scope.toggleDialog('gotIt', $(document.getElementById('prime')));
                         }
                         break;
                     case 'button':
                         if ($scope.loadDemo) {
                             event.preventDefault();
                             $scope.gotItText = 'By tapping this (optional) button, users are forwarded to a website of your choice.';
                             $scope.toggleDialog('gotIt', $(event.currentTarget));
                         }
                         break;
                     case 'appStore':
                         if ($scope.loadDemo) {
                             event.preventDefault();
                             $scope.gotItText = 'By tapping here, users get to the specific App Store to download your App.';
                             $scope.toggleDialog('gotIt', $(event.currentTarget));
                         }
                         break;
                 }
             };
 
             $scope.toggleFab = toggleFab;
 
             
 
             /**
              * Callback of the dialog yes/no buttons
              * Can close the dialog or it can redirect to a url and close the dialog
              * If the url is not defined it will use the targetUrl from the callAction button
              *
              * @param proceed - string
              * @param url - current target
              * */
             $scope.dialogRedirectCallback = function (proceed, url) {
                 if (proceed) {
                     if (url) {
                         $window.open(url, '_blank');
                     } else {
                         if ($scope.view.code.button.url.indexOf('http') < 0)
                             $window.open('//' + $scope.view.code.button.url, '_blank');
                         else
                             $window.open($scope.view.code.button.url, '_blank');
                     }
                     $scope.closeDialog();
                 } else {
                     $scope.closeDialog();
                 }
             };
 
             /**
              * Close dialog
              *
              * */
             $scope.closeDialog = function () {
                 $('.dialog-container').removeClass('is-visible');
                 $('#prime.fab').toggleClass('disabledClick');
                 $('.event-gotIt-button').html('');
                 $('.fixed-blur-bgd').hide();
             };
 
             //Inherit from basePreviewController
             // @todo hmm this is not a normal angular inheritance...
             angular.extend(this, $controller('BasePreviewController', {$scope: $scope}));
 
             $scope.loadDemo = parent && typeof parent.ImHere === "function";
 
             //Get the json data form the file
             previewService.pushData({"form":[{"section_design":{"fold":false}},{"section_upload":{"fold":false}},{"section_basic_info":{"fold":false}},{"section_welcome_screen":{"fold":false}}],"code":{"files":[{"name":"tooman.che-22012022-0001.jpg","type":"image\/jpeg","size":16223,"progress":100,"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939560_1.png?0.6236671057787031"},{"name":"photo_2022-06-03_10-13-40.jpg","type":"image\/jpeg","size":117794,"progress":100,"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939563_1.png?0.20560121456029345"},{"name":"llogo3.png","type":"image\/png","size":1062302,"progress":100,"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939564_1.png?0.1599614993242373"},{"name":"IMG_20220430_230214_472.jpg","type":"image\/jpeg","size":150765,"progress":100,"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939561_1.png?0.5705405739213754"},{"name":"\u0432\u0430\u0432\u0432.png","type":"image\/png","size":3666536,"progress":100,"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939567_1.png?0.9322576332972803"},{"name":"IMG_20220531_173951.jpg","type":"image\/jpeg","size":237604,"progress":100,"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939562_1.png?0.5937621495221945"},{"name":"45_full (1).png","type":"image\/png","size":10097058,"progress":100,"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939566_1.png?0.588333204289925"},{"name":"45_full (1).jpg","type":"image\/jpeg","size":3625651,"progress":100,"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939558_1.png?0.9062016091221574"},{"name":"photo_2022-05-31_19-37-00.png","type":"image\/png","size":1649464,"progress":100,"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939565_1.png?0.8688661375157227"},{"name":"photo_2022-05-31_19-37-00.jpg","type":"image\/jpeg","size":209804,"progress":100,"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939559_1.png?0.8785471051315912"}],"images":[{"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939498_1.png?0.2541324922605803","name":"Drink.png","caption":"","progress":100,"width":912,"height":1280},{"url":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939499_1.png?0.7268898035263831","name":"Food.png","caption":"","progress":100,"width":912,"height":1280}],"useGridView":true,"color1":"#F5F5F5","color2":"#3c4245","welcome_extra":{"zoom":150,"background":"#000000"},"button":{"label":"","url":""},"description":"","title":"\u041c\u0435\u043d\u044e","website":""},"showPreview":0,"welcome_screen":"\/\/qrcgcustomers.s3-eu-west-1.amazonaws.com\/account19583104\/27939405_1.png?0.12728810546679448"});
 
             /**
              * Watch showPreview value
              *
              * @param p1 - new value
              * @param p2 - old value
              * */
             $scope.$watch("view.showPreview", function (p1, p2) {
                 if (p1 != undefined && p1 == 'infinite') {
                     setTimeout(function () {
                         $(".loading-welcome.welcome-screen").show();
                     }, 500)
                 } else if (p1 == undefined && p2 != undefined && p2 == 'infinite') {
                     $("#welcomeImg").hide();
                     $(".loading-welcome").fadeOut();
                 } else if ((p1 != undefined && p2 != undefined && p1 != p2 ) || (p1 != undefined && p1 != 0 && p2 == undefined && p1 != p2)) {
                     setTimeout(function () {
                         $(".loading-welcome.welcome-screen").show();
                         $("#welcomeImg").hide();
                         $("#welcomeImg").fadeIn(1000);
                         setTimeout(function () {
                             $(".loading-welcome").fadeOut();
                         }, 2000)
                     }, 500)
                 }
             });
 
             
 
             /**
              * Convert hex color to rgbA
              *
              * @param hex - color
              * @param opacity - value between 0-1
              * */
             $scope.hexToRgbA = function (hex, opacity) {
                 var c;
                 if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
                     c = hex.substring(1).split('');
                     if (c.length == 3) {
                         c = [c[0], c[0], c[1], c[1], c[2], c[2]];
                     }
                     c = '0x' + c.join('');
                     return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';
                 }
             };
 
             /**
              * Set text color based on the background
              *
              * @param color - background color
              * */
             $scope.isColorLight = function (color) {
                 var c;
                 if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)) {
                     c = color.substring(1).split('');
                     if (c.length == 3) {
                         c = [c[0], c[0], c[1], c[1], c[2], c[2]];
                     }
                     c = '0x' + c.join('');
 
                     var r = (c >> 16) & 255,
                         g = (c >> 8) & 255,
                         b = c & 255;
                     // Counting the perceptive luminance
                     // human eye favors green color...
                     var a = 1 - (0.240 * r + 0.470 * g + 0.150 * b) / 255;
                     return (a < 0.4);
                 }
             };
 
         }
     );
 
     if (parent && typeof parent.ImHere === "function") {
         parent.ImHere();
     } 
     /**
      * Toggle fab
      *
      * @param id - id of the fab
      */
     function toggleFab(id) {
         $(id + ' .prime').toggleClass('is-active');
         $(id + ' #prime').toggleClass('is-float');
         $($(id).parent()).toggleClass('fabOnTop');
         $('#prime.fab').toggleClass('disabledClick');
         $(id + ' .fixed-blur-bgd').toggle();
         $(id + ' .chat').toggleClass('is-visible');
     }
 
     $(document).ready(function () {
         $('#prime, .icon-event-close').click(function () {
             var id = $($(this).closest('.fabs')).attr('id');
             toggleFab('#' + id);
         });
 
         $('#share-fab-button').click(function () {
             toggleFab('#shareFab2');
         });
 
         $('.fixed-blur-bgd').click(function (event) {
             if (event.target == $(this)[0]) {
                 $($("#prime.is-float").parent().parent()).removeClass('fabOnTop');
                 $('.prime').removeClass('is-active');
                 $('#prime').removeClass('is-float');
                 $('#prime.fab').removeClass('disabledClick');
                 $('.chat, .dialog-container').removeClass('is-visible');
                 $(this).hide();
             }
         });
 
         /**
          * Ripple effect on element
          */
         var ink, d, x, y;
         $(".ripplelink").click(function (e) {
             if ($(this).find(".ink").length === 0) {
                 $(this).prepend("<span class='ink'></span>");
             }
 
             ink = $(this).find(".ink");
             ink.removeClass("animate");
 
             if (!ink.height() && !ink.width()) {
                 d = Math.max($(this).outerWidth(), $(this).outerHeight());
                 ink.css({height: d, width: d});
             }
 
             x = e.pageX - $(this).offset().left - ink.width() / 2;
             y = e.pageY - $(this).offset().top - ink.height() / 2;
 
             ink.css({top: y + 'px', left: x + 'px'}).addClass("animate");
         });
 
     });
 
 
 /*]]>*/


 // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function up() {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

 //Прокрутка вверх//
var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}
//    //

//   //

class ItcTabs {
  constructor(target, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
    this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
    this._eventShow = new Event('tab.itc.change');
    this._init();
    this._events();
  }
  _init() {
    this._elTabs.setAttribute('role', 'tablist');
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute('role', 'tab');
      this._elPanes[index].setAttribute('role', 'tabpanel');
    });
  }
  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
    const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
    if (elLinkTarget === elLinkActive) {
      return;
    }
    elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
    elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
    elLinkTarget.classList.add('tabs__btn_active');
    elPaneTarget.classList.add('tabs__pane_show');
    this._elTabs.dispatchEvent(this._eventShow);
    elLinkTarget.focus();
  }
  showByIndex(index) {
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  };
  _events() {
    this._elTabs.addEventListener('click', (e) => {
      const target = e.target.closest('.tabs__btn');
      if (target) {
        e.preventDefault();
        this.show(target);
      }
    });
  }
}

const tabs = document.querySelectorAll('.tabs');
for (let i = 0, length = tabs.length; i < length; i++) {
  new ItcTabs(tabs[i]);
}

//  //


//++Tab1++//
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function menuedit(){
  document.getElementById("defaultOpen").click();
  document.getElementById("defaultFood").click();
}

//--Tab1--//


//++Dragscroll++//

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
      factory(exports);
  } else {
      factory((root.dragscroll = {}));
  }
}(this, function (exports) {
  var _window = window;
  var _document = document;
  var mousemove = 'mousemove';
  var mouseup = 'mouseup';
  var mousedown = 'mousedown';
  var EventListener = 'EventListener';
  var addEventListener = 'add'+EventListener;
  var removeEventListener = 'remove'+EventListener;
  var newScrollX, newScrollY;

  var dragged = [];
  var reset = function(i, el) {
      for (i = 0; i < dragged.length;) {
          el = dragged[i++];
          el = el.container || el;
          el[removeEventListener](mousedown, el.md, 0);
          _window[removeEventListener](mouseup, el.mu, 0);
          _window[removeEventListener](mousemove, el.mm, 0);
      }

      // cloning into array since HTMLCollection is updated dynamically
      dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
      for (i = 0; i < dragged.length;) {
          (function(el, lastClientX, lastClientY, pushed, scroller, cont){
              (cont = el.container || el)[addEventListener](
                  mousedown,
                  cont.md = function(e) {
                      if (!el.hasAttribute('nochilddrag') ||
                          _document.elementFromPoint(
                              e.pageX, e.pageY
                          ) == cont
                      ) {
                          pushed = 1;
                          lastClientX = e.clientX;
                          lastClientY = e.clientY;

                         
                      }
                  }, 0
              );

              _window[addEventListener](
                  mouseup, cont.mu = function() {pushed = 0;}, 0
              );

              _window[addEventListener](
                  mousemove,
                  cont.mm = function(e) {
                      if (pushed) {
                          (scroller = el.scroller||el).scrollLeft -=
                              newScrollX = (- lastClientX + (lastClientX=e.clientX));
                          scroller.scrollTop -=
                              newScrollY = (- lastClientY + (lastClientY=e.clientY));
                          if (el == _document.body) {
                              (scroller = _document.documentElement).scrollLeft -= newScrollX;
                              scroller.scrollTop -= newScrollY;
                          }
                      }
                  }, 0
              );
           })(dragged[i++]);
      }
  }

    
  if (_document.readyState == 'complete') {
      reset();
  } else {
      _window[addEventListener]('load', reset, 0);
  }

  exports.reset = reset;
}));

//--Dragscroll--//

/* +++++Спливаючий опис меню+++++*/
function info_f(i) {
  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_" + i)[0];
var modal = document.getElementById( i + '_Modal');
  // Get the modal
  modal.style.display = "block";
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
  modal.style.display = "none";
}
};
/* -----Спливаючий опис меню-------*/