
// Define global variables
var SEARCHANY     = 1;
var SEARCHALL     = 2;
var SEARCHURL     = 4;
var searchType  = '';
var showMatches   = 1000;
var currentMatch  = 0;
var copyArray   = new Array();
var docObj      = document;
var docObj2     = document;
var docObj_h    = document;
var nowbook = 39;
var nowchapter = 0;
var nowsection = 0;
var nowtosection = 0; // add on 2018.08.17 for 書籤

var now_Book = 39;
var now_Chap = 0;
var now_Verse = 0;
var now_To_Verse = 0;

var Read_Book_Chap_Vers_ToVers ="";
var findbook = new Array();
var findchapter = new Array();
var word1 = "";
var head_size = "64"; //標題字型大小
var sing_size = "50"; //唱詩字型大小
var bcs_size ; //經卷字型大小
var sec_size ; //經文字型大小
var search_sec_size ; //查詢結果經文字型大小
var pray_size = "50"; //禱告字型大小
var head_color = "fff000"; //標題字型顏色
var sing_color = "fff000"; //唱詩字型顏色
var bcs_color = "ff0000"; //經卷字型顏色 
var sec_color = "fff000"; //經文字型顏色
var disp_secs_a = 7; //一次顯示經節數
var open_win = 1; //1:查詢連結開啟於->同一視窗 , 2:查詢連結開啟於->新視窗

var BibleVersion_Disp = 0; // 0:顯示NKJV, 1:顯示NIV, 2:顯示呂振中譯本, 3顯示全部版本

var Bname = "";
var Bcsname1 = "";
var Bcsname2 = "";


var Mode_1Ver = 0;   // 0: inactive, 1: active
var Mode_7Vers = 1;  // 0: inactive, 1: active
var Mode_1Chap = 0;  // 0: inactive, 1: active


var b_int=0;
var c_int=0;
var v_int=1;
var t_int=1;

var O_nowbook = 1;   // for function Go_to_Original_text_web()
var O_nowchapter = 0;
var O_nowsection = 0;

var O2_nowbook = 1;   // for function Go_to_Original_text_web2()
var O2_nowchapter = 0;
var O2_nowsection = 0;

var L_nowbook = 99;   // for function Listen_NKJV_web()
var L_nowchapter = 999;


//var Max_Vers_record = 7;


// --------------------------------------------------------------


// --- for Testing Go to certain web


//function testFunction() {
//    alert(document.getElementById("4001").style.fontSize);
//}



function Go_to_web1(){

   var child = require('child_process').execFile;
   var executablePath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
   //var parameters = ["--incognito"];
   var parameters = ["http://bible.fhl.net/new/parsing.html"];


   child(executablePath, parameters, function(err, data) {
        console.log(err)
        console.log(data.toString());
   });

}

function Go_to_web2(){

   var child = require('child_process').execFile;
   var executablePath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
   //var parameters = ["--incognito"];
   var parameters = ["http://bible.fhl.net/new/fhlwhparsing.html"];


   child(executablePath, parameters, function(err, data) {
        console.log(err)
        console.log(data.toString());
   });

}


//function Go_to_Original_text_web(){

//   var BookName=BookAbbr2[nowbook];
//   Send_to_win34(2, BookName, nowchapter+1,nowsection,nowbook,0,0,0);

//   //Send_to_win34(2,'Ex',nowchapter+1,nowsection,0,0,0,0);
//}

function Go_to_Original_text_web(){

   //if(O_nowbook==nowbook && O_nowchapter==nowchapter && O_nowsection==nowsection){
      //Send_to_win34(10,0,0,0,0,0,0,0);
   //}
   //else {
      var BookName=BookAbbr2[nowbook];
      //Send_to_win34(2, BookName, nowchapter+1,nowsection,nowbook,0,0,0);

      var vbook = BookName;         
      var vchap = nowchapter+1;
      var vsec = nowsection;

      if(nowbook<39){  // Old Testament
         //window7.loadURL('http://bible.fhl.net/new/parsing.php?nodic=01&graph=1&engs=' + vbook + '&chap=' + vchap + '&sec=' + vsec + '&mode=3&m=');

         var vurl= 'http://bible.fhl.net/new/parsing.php?nodic=01&graph=1&engs=' + vbook + '&chap=' + vchap + '&sec=' + vsec + '&mode=3&m=';

         chgFrame1(vurl,'500px','95%');

      }

      if(nowbook>38){  // New Testament

         var vurl= 'http://bible.fhl.net/new/fhlwhparsing.php?nodic=01&graph=1&engs=' + vbook + '&chap=' + vchap + '&sec=' + vsec + '&mode=3&m=';

         chgFrame1(vurl,'500px','95%');

      }


      O_nowbook=nowbook;
      O_nowchapter=nowchapter;
      O_nowsection=nowsection;
   //}

   //Send_to_win34(2,'Ex',nowchapter+1,nowsection,0,0,0,0);
}

       function chgFrame1( url,h , w )
        {
            var o=document.getElementById('iframe1');
            o.src=url;
            o.height=h; //500px
            o.width=w; //95%
            // o.contentWindow.location.href=url;
            //frames[1].location.href=url;
        }

       function chgFrame12( h , w )
        {
            var o=document.getElementById('iframe1');
            o.height=h; //500px
            o.width=w; //95%
            // o.contentWindow.location.href=url;
            //frames[1].location.href=url;
        }

function Show_Original_text_web2(){

   chgFrame12( "500px" , "95%" );

}

function Hide_Original_text_web2(){

   chgFrame12( 0 , 0 );

}

//20180903

function Go_to_Original_text_web2(){

   //if(O2_nowbook==nowbook && O2_nowchapter==nowchapter && O2_nowsection==nowsection){
   //   //Send_to_win34(100,0,0,0,0,0,0,0);

   //   Show_Original_text_web2();

   //}
   //else {
      var BookName=BookAbbr3[nowbook];
      //Send_to_win34(22, BookName, nowchapter+1,nowsection,nowbook,0,0,0);


      var vbook = BookName;         
      var vchap = nowchapter+1;
      var vsec = nowsection;

      var vurl= 'https://biblehub.com/interlinear/' + vbook + '/' + vchap + '-' + vsec + '.htm';

      chgFrame1(vurl,'500px','95%');


      O2_nowbook=nowbook;
      O2_nowchapter=nowchapter;
      O2_nowsection=nowsection;
   //}

   //Send_to_win34(2,'Ex',nowchapter+1,nowsection,0,0,0,0);
}


function Listen_NKJV_web(){

   if(L_nowbook==nowbook && L_nowchapter==nowchapter){

      //Send_to_win34(13,0,0,0,0,0,0,0);

      Show_Listen_NKJV_web();

   }
   else {
      //Send_to_win34(12, nowbook+1, nowchapter+1,0,0,0,0,0);

         var lbook = nowbook+1;         
         var lchap = nowchapter+1;

         //window9.loadURL('https://www.blueletterbible.org/audio_video/popPlayer.cfm?type=nkjv_n&b=' + lbook + '&c=' + lchap);


         //var vurl= 'http://bible.fhl.net/new/parsing.php?nodic=01&graph=1&engs=' + vbook + '&chap=' + vchap + '&sec=' + vsec + '&mode=3&m=';


         var vurl= 'https://www.blueletterbible.org/audio_video/popPlayer.cfm?type=nkjv_n&b=' + lbook + '&c=' + lchap;


         chgFrame(vurl,'250px','95%');

         //chgFrame(vurl,'500px','95%');


      L_nowbook=nowbook;
      L_nowchapter=nowchapter;
   }

   //Send_to_win34(2,'Ex',nowchapter+1,nowsection,0,0,0,0);
}


function Show_Listen_NKJV_web(){

   chgFrame2( "250px" , "95%" );

}


function Hide_Listen_NKJV_web(){

   chgFrame2( 0 , 0 );

}


       function chgFrame( url,h , w )
        {
            var o=document.getElementById('iframe');
            o.src=url;

            o.height=h; //500px
            o.width=w; //95%

            //o.height=100%; //500px
            //o.width=100%; //95%


            // o.contentWindow.location.href=url;
            //frames[1].location.href=url;
        }

       function chgFrame2( h , w )
        {
            var o=document.getElementById('iframe');
            o.height=h; //500px
            o.width=w; //95%
            // o.contentWindow.location.href=url;
            //frames[1].location.href=url;
        }

function clear_bookmark(){

   var myselect=document.getElementById("CBookmark")
   var myselectValue=0;
   for (var i=0; i<myselect.options.length; i++){
      if (myselect.options[i].selected==true){
        myselectValue=+i;
        break;
      }
   }

   if(myselectValue=="0"){
      write_to_json_1(99,99,99,99);
   }

   if(myselectValue=="1"){
      write_to_json_2(99,99,99,99);
   }

   if(myselectValue=="2"){
      write_to_json_3(99,99,99,99);
   }

   if(myselectValue=="3"){
      write_to_json_4(99,99,99,99);
   }

   if(myselectValue=="4"){
      write_to_json_5(99,99,99,99);
   }

   if(myselectValue=="5"){
      write_to_json_6(99,99,99,99);
   }

   if(myselectValue=="6"){
      write_to_json_7(99,99,99,99);
   }

   if(myselectValue=="7"){
      write_to_json_8(99,99,99,99);
   }

   if(myselectValue=="8"){
      write_to_json_9(99,99,99,99);
   }

   if(myselectValue=="9"){
      write_to_json_10(99,99,99,99);
   }

   if(myselectValue=="10"){
      write_to_json_11(99,99,99,99);
   }

   if(myselectValue=="11"){
      write_to_json_12(99,99,99,99);
   }

   if(myselectValue=="12"){
      write_to_json_13(99,99,99,99);
   }

   if(myselectValue=="13"){
      write_to_json_14(99,99,99,99);
   }

   if(myselectValue=="14"){
      write_to_json_All();
   }

}


// --- for Testing Writing Bible Reading Record to file

function write_to_json_1(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store1 = new Store3({
     // We'll call our data file 'Bible-Bookmark-1'
     configName: 'Bible-Bookmark-1',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-1 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-1 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-1 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_1()


function write_to_json_2(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store2 = new Store3({
     // We'll call our data file 'Bible-Bookmark-2'
     configName: 'Bible-Bookmark-2',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store2.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-2 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-2 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-2 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            //console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store2.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_2()


function write_to_json_3(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-3'
     configName: 'Bible-Bookmark-3',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-3 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-3 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-3 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store3.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_3()

function write_to_json_4(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store4 = new Store3({
     // We'll call our data file 'Bible-Bookmark-4'
     configName: 'Bible-Bookmark-4',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store4.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-4 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-4 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-4 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store4.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_4()

function write_to_json_5(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store5 = new Store3({
     // We'll call our data file 'Bible-Bookmark-5'
     configName: 'Bible-Bookmark-5',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store5.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-5 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-5 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-5 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store5.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_5()

function write_to_json_6(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store6 = new Store3({
     // We'll call our data file 'Bible-Bookmark-6'
     configName: 'Bible-Bookmark-6',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store6.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-6 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-6 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-6 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store6.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_6()

function write_to_json_7(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store7 = new Store3({
     // We'll call our data file 'Bible-Bookmark-7'
     configName: 'Bible-Bookmark-7',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store7.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-7 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-7 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-7 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store7.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_7()

function write_to_json_8(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store8 = new Store3({
     // We'll call our data file 'Bible-Bookmark-8'
     configName: 'Bible-Bookmark-8',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store8.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-8 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-8 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-8 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store8.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_8()

function write_to_json_9(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store9 = new Store3({
     // We'll call our data file 'Bible-Bookmark-9'
     configName: 'Bible-Bookmark-9',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store9.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-9 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-9 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-9 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store9.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_9()

function write_to_json_10(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store10 = new Store3({
     // We'll call our data file 'Bible-Bookmark-10'
     configName: 'Bible-Bookmark-10',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store10.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-10 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-10 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-10 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store10.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_10()

function write_to_json_11(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store11 = new Store3({
     // We'll call our data file 'Bible-Bookmark-11'
     configName: 'Bible-Bookmark-11',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store11.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-11 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-11 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-11 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store11.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_11()

function write_to_json_12(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store12 = new Store3({
     // We'll call our data file 'Bible-Bookmark-12'
     configName: 'Bible-Bookmark-12',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store12.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-12 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-12 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-12 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store12.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_12()

function write_to_json_13(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store13 = new Store3({
     // We'll call our data file 'Bible-Bookmark-13'
     configName: 'Bible-Bookmark-13',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store13.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-13 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-13 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-13 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store13.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_13()

function write_to_json_14(arg1, arg2, arg3, arg4, arg5){ // arg5 = 1 means clear all bookmarks

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory, for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   //console.log(app.getPath('userData')); // for debug

   // First instantiate the class
   // For Store Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse
   // maxHeight -- for to_verse

   const store14 = new Store3({
     // We'll call our data file 'Bible-Bookmark-14'
     configName: 'Bible-Bookmark-14',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 , maxHeight: 12}
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==99 && arg5==1){  // 原為 arg4==1，無 arg5

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            store14.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

    }
    else{

       // ---- for dialog 

         if(Bname!="詩篇") {
            var BCSName = '儲存 ' + Bcsname1 + ' 至 書籤-14 ?';
         }
         else {
            var BCSName = '儲存 ' + Bcsname2 + ' 至 書籤-14 ?';
         }

         if(arg1==99 && arg2==99 && arg3==99 && arg4==99){  // 原無 arg4==99
            var BCSName = '清除書籤-14 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;
            var maxHeight = arg4;

            if(t_int==0){  // -> or <- has been pressed
               var maxHeight = arg3;
            }
            else {
               var maxHeight = arg4;
            }

            store14.set('windowBounds', { minWidth, minHeight, maxWidth, maxHeight });

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}  // End of function write_to_json_14()

function write_to_json_All(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   // First instantiate the class
   // For Store Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-14'
     configName: 'Bible-Bookmark-14',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

    // ---- for dialog 

    var BCSName = '清除所有書籤 ?';

    var buttons = ['OK', 'Cancel'];

    dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

       if(buttons[buttonIndex]=='OK'){
         //console.log('OK is clicked. ');

         write_to_json_2(99,99,99,99,1);write_to_json_1(99,99,99,99,1);write_to_json_3(99,99,99,99,1);

         //write_to_json_1(99,99,99,99,1);write_to_json_2(99,99,99,99,1);write_to_json_3(99,99,99,99,1);
         write_to_json_4(99,99,99,99,1);write_to_json_5(99,99,99,99,1);write_to_json_6(99,99,99,99,1);
         write_to_json_7(99,99,99,99,1);write_to_json_8(99,99,99,99,1);write_to_json_9(99,99,99,99,1);
         write_to_json_10(99,99,99,99,1);write_to_json_11(99,99,99,99,1);write_to_json_12(99,99,99,99,1);
         write_to_json_13(99,99,99,99,1);write_to_json_14(99,99,99,99,1);

	 isShow = true;
	 document.getElementById('a1').innerText = "隱藏書籤";
         read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
         read_bookmark5();read_bookmark6();read_bookmark7();
         read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
         read_bookmark12();read_bookmark13();read_bookmark14();
         //read_bookmark8();read_bookmark14(); // for test

       }
       if(buttons[buttonIndex]=='Cancel'){
         console.log('Cancel is clicked. ');
       }
    });

}



function read_bookmark1(){   // read & show bookmark1

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store1 = new Store3({
     // We'll call our data file 'Bible-Bookmark-1'
     configName: 'Bible-Bookmark-1',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store1.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark1");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark1()

function read_bookmark2(){   // read & show bookmark1

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store2 = new Store3({
     // We'll call our data file 'Bible-Bookmark-2'
     configName: 'Bible-Bookmark-2',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store2.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark2");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark2()


function read_bookmark3(){   // read & show bookmark1

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-3'
     configName: 'Bible-Bookmark-3',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store3.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark3");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark3()

function read_bookmark4(){   // read & show bookmark4

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store4 = new Store3({
     // We'll call our data file 'Bible-Bookmark-4'
     configName: 'Bible-Bookmark-4',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store4.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark4");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark4()

function read_bookmark5(){   // read & show bookmark1

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store5 = new Store3({
     // We'll call our data file 'Bible-Bookmark-5'
     configName: 'Bible-Bookmark-5',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store5.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark5");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark5()

function read_bookmark6(){   // read & show bookmark6

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store6 = new Store3({
     // We'll call our data file 'Bible-Bookmark-6'
     configName: 'Bible-Bookmark-6',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store6.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark6");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark6()

function read_bookmark7(){   // read & show bookmark7

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store7 = new Store3({
     // We'll call our data file 'Bible-Bookmark-7'
     configName: 'Bible-Bookmark-7',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store7.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark7");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark7()

function read_bookmark8(){   // read & show bookmark8

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store8 = new Store3({
     // We'll call our data file 'Bible-Bookmark-8'
     configName: 'Bible-Bookmark-8',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store8.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark8");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark8()

function read_bookmark9(){   // read & show bookmark1

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store9 = new Store3({
     // We'll call our data file 'Bible-Bookmark-9'
     configName: 'Bible-Bookmark-9',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store9.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark9");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark9()

function read_bookmark10(){   // read & show bookmark1

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store10 = new Store3({
     // We'll call our data file 'Bible-Bookmark-10'
     configName: 'Bible-Bookmark-10',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store10.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark10");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark10()

function read_bookmark11(){   // read & show bookmark1

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store11 = new Store3({
     // We'll call our data file 'Bible-Bookmark-11'
     configName: 'Bible-Bookmark-11',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store11.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark11");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark11()

function read_bookmark12(){   // read & show bookmark1

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store12 = new Store3({
     // We'll call our data file 'Bible-Bookmark-12'
     configName: 'Bible-Bookmark-12',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store12.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark12");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark12()

function read_bookmark13(){   // read & show bookmark1

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store13 = new Store3({
     // We'll call our data file 'Bible-Bookmark-13'
     configName: 'Bible-Bookmark-13',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store13.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark13");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark13()

function read_bookmark14(){   // read & show bookmark14

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store14 = new Store3({
     // We'll call our data file 'Bible-Bookmark-14'
     configName: 'Bible-Bookmark-14',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store14.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , maxHeight, "bookmark14");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}  // End of function read_bookmark14()



function read_from_json_1(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store1 = new Store3({
     // We'll call our data file 'Bible-Bookmark-1'
     configName: 'Bible-Bookmark-1',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store1.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_1()


function read_from_json_2(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store2 = new Store3({
     // We'll call our data file 'Bible-Bookmark-2'
     configName: 'Bible-Bookmark-2',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store2.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_2()


function read_from_json_3(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-3'
     configName: 'Bible-Bookmark-3',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_3()


function read_from_json_4(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store4 = new Store3({
     // We'll call our data file 'Bible-Bookmark-4'
     configName: 'Bible-Bookmark-4',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store4.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_4()


function read_from_json_5(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store5 = new Store3({
     // We'll call our data file 'Bible-Bookmark-5'
     configName: 'Bible-Bookmark-5',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store5.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_5()


function read_from_json_6(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store6 = new Store3({
     // We'll call our data file 'Bible-Bookmark-6'
     configName: 'Bible-Bookmark-6',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store6.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_6()

function read_from_json_7(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store7 = new Store3({
     // We'll call our data file 'Bible-Bookmark-7'
     configName: 'Bible-Bookmark-7',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store7.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_7()

function read_from_json_8(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store8 = new Store3({
     // We'll call our data file 'Bible-Bookmark-8'
     configName: 'Bible-Bookmark-8',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store8.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_8()

function read_from_json_9(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store9 = new Store3({
     // We'll call our data file 'Bible-Bookmark-9'
     configName: 'Bible-Bookmark-9',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store9.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_9()

function read_from_json_10(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store10 = new Store3({
     // We'll call our data file 'Bible-Bookmark-10'
     configName: 'Bible-Bookmark-10',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store10.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_10()

function read_from_json_11(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store11 = new Store3({
     // We'll call our data file 'Bible-Bookmark-11'
     configName: 'Bible-Bookmark-11',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store11.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_11()

function read_from_json_12(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store12 = new Store3({
     // We'll call our data file 'Bible-Bookmark-12'
     configName: 'Bible-Bookmark-12',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store12.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_12()

function read_from_json_13(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store13 = new Store3({
     // We'll call our data file 'Bible-Bookmark-13'
     configName: 'Bible-Bookmark-13',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store13.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_13()

function read_from_json_14(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 1
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store14 = new Store3({
     // We'll call our data file 'Bible-Bookmark-14'
     configName: 'Bible-Bookmark-14',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12, maxHeight: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth, maxHeight } = store14.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99 && maxHeight==99){
      // Do nothing.
   }
   else{
      now_Book = minWidth;  // add on 2018.08.19
      now_Chap = minHeight;  // add on 2018.08.19
      now_Verse = maxWidth;  // add on 2018.08.19
      now_To_Verse = maxHeight;  // add on 2018.08.19

      readchapter(minWidth, minHeight, maxWidth, maxHeight);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
} // End of function read_from_json_14()



// ---------------------------------------------------------------


function write_to_json(arg1, arg2, arg3){ // not in use now

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   const Store2 = require('./store2.js');  // Store Bible Reading Records in current directory

   // First instantiate the class
   // For Store Bible Reading Records 1
   // width  -- for Book1
   // height -- for chapter1
   // x      -- for verse1

   const store = new Store2({
     // We'll call our data file 'Reading-Bible-Record1'
     configName: 'Reading-Bible-Record1',
     defaults: {
    
       windowBounds: { width: 44, height: 4, x: 12, y:20 }
     }
   });

// Reading records
// let { width, height, x, y } = store.get('windowBounds');

// Writing records
// store.set('windowBounds', { width, height, x, y });

   var width = arg1;
   var height = arg2;
   var x = arg3;

   store.set('windowBounds', { width, height, x });

}



function show_bookmark(bnum, cnum, snum , to_snum, bookmark_num) {

  var EmptyBookmark = 0;

  if(bnum==99 && cnum==99 && snum==99 && to_snum==99){

     EmptyBookmark = 1; // means Bookmark is empty

  }


//  bnum : 經卷
//  cnum : 章
//  snum : 節
 
  if(snum < 1)
    snum = 1;
  if((bnum - 0 < 0) || (bnum - 0 >= 66))
    bnum = 0;
  if((bnum - 0 <= 0) && (cnum - 0 < 0))
    cnum = 0;
  if((bnum - 0 >= 65) && (cnum - 0 >=22))
    cnum = 21;
  if(cnum - 0 < 0) {
      bnum--;
      cnum = book_chapters[bnum+1] - book_chapters[bnum]-1;
  }
  if(cnum - 0 >= book_chapters[bnum+1] - book_chapters[bnum]) {
      bnum++;
      cnum = 0;
  }

  var disp_secs = eval(disp_secs_a);
  var line1 = chapter_lines[book_chapters[bnum]+cnum];  
  var line2 = chapter_lines[book_chapters[bnum]+cnum+1];
  var line3 = line1+snum-1;
  var line4 = eval(line3 + disp_secs); // +1 表一次顯示1節，+2 表一次顯示2節  

      if(disp_secs==0){
        line3 = line1;
        line4 = line2;}
   
      if(line3>=31101){
        line3=31101;
        line4=31102;
        snum=21;
      }
      if((line3==31090)&&(disp_secs>11)){   
        line4=31102;
      }
      if((line3==31091)&&(disp_secs>10)){   
        line4=31102;
      }
      if((line3==31092)&&(disp_secs>9)){   
        line4=31102;
      }
      if((line3==31093)&&(disp_secs>8)){   
        line4=31102;
      }
      if((line3==31094)&&(disp_secs>7)){   
        line4=31102;
      }
      if((line3==31095)&&(disp_secs>6)){   
        line4=31102;
      }
      if((line3==31096)&&(disp_secs>5)){
        line4=31102;
      }
      if((line3==31097)&&(disp_secs>4)){
        line4=31102;
      }
      if((line3==31098)&&(disp_secs>3)){
        line4=31102;
      }
      if((line3==31099)&&(disp_secs>2)){
        line4=31102;
      }
      if((line3==31100)&&(disp_secs>1)){
        line4=31102;
      }


      // 和合本
      var bname = profiles[line3].substring(profiles[line3].indexOf("%")+1, profiles[line3].indexOf("^"));
      var cname = profiles[line3].substring(profiles[line3].indexOf("^")+1, profiles[line3].indexOf(":"));
      var sname = profiles[line3].substring(profiles[line3].indexOf(":")+1, profiles[line3].indexOf(" "));


      // var bcsname1 = bname + ' 第' + cname + '章' + ' 第' + sname + '節' + '</ol>';


      var BookName=BookAbbr[bnum];
      var ChapName= cname;  //

      // add on 2018.08.19 
      if(to_snum>snum){
         var BookMark= BookName + " " + ChapName + ":" + sname + "~" + to_snum;  //
      }
      else{
         var BookMark= BookName + " " + ChapName + ":" + sname;  //
      }


      if(EmptyBookmark==1){  // 當書籤為空時，add on 2017/08/12

         BookMark="";

      }

      
      document.getElementById("tool_area_2").style.height='50px'; // add on 2018.08.19   
      document.getElementById("tool_area_3").style.height='80px'; // add on 2018.08.19 

      document.getElementById(bookmark_num).innerHTML = BookMark;


}



// --------------------------------------------------------------


function clear_area_1L() {

   document.getElementById("1L").innerHTML = "";

}

function clear_area_1R() {

   document.getElementById("1R").innerHTML = "";

}


function clear_area_LC() {

   document.getElementById("smallVer1").innerHTML = "";
   document.getElementById("10002").innerHTML = "";
   document.getElementById("10003").innerHTML = "";

   document.getElementById("smallVer2").innerHTML = "";
   document.getElementById("20002").innerHTML = "";
   document.getElementById("20003").innerHTML = "";

}

function clear_area_RC() {

   document.getElementById("smallVer3").innerHTML = "";
   document.getElementById("30002").innerHTML = "";
   document.getElementById("30003").innerHTML = "";

   document.getElementById("smallVer4").innerHTML = "";
   document.getElementById("40002").innerHTML = "";
   document.getElementById("40003").innerHTML = "";

}


function clear_area_L() {

   //var Loop_num = 1001+Max_Vers_Record;

   for ( var ii=1001; ii<1177 ; ii++ ) {  //1177,  1100

      document.getElementById(ii).innerHTML = "";
      document.getElementById(ii+1000).innerHTML = "";

   }

}

function clear_area_R() {

   //var Loop_num = 3001+Max_Vers_Record;

   for ( var ii=3001; ii<3177 ; ii++ ) {  //3177,  3100

      document.getElementById(ii).innerHTML = "";
      document.getElementById(ii+1000).innerHTML = "";

   }

}


function clear_area_L_for_7() { 

   for ( var ii=1001; ii<1016; ii++ ) {  // 原為 ii<1008

      document.getElementById(ii).innerHTML = "";
      document.getElementById(ii+1000).innerHTML = "";

   }

}

function clear_area_R_for_7() {

   for ( var ii=3001; ii<3016; ii++ ) {  // 原為 ii<1008

      document.getElementById(ii).innerHTML = "";
      document.getElementById(ii+1000).innerHTML = "";

   }

}


function show_bookmark1(bnum, cnum, snum) {

   var BookName=BookAbbr[bnum];
   var ChapName= cnum + 1;
   var BookMark= BookName + " " + ChapName + ":" + snum;
   document.getElementById("bookmark1").innerHTML = BookMark;
 
}

function show_bookmark2(bnum, cnum, snum) {

   var BookName=BookAbbr[bnum];
   var ChapName= cnum + 1;
   var BookMark= BookName + " " + ChapName + ":" + snum;
   document.getElementById("bookmark2").innerHTML = BookMark;
 
}

function show_bookmark3(bnum, cnum, snum) {

   var BookName=BookAbbr[bnum];
   var ChapName= cnum + 1;
   var BookMark= BookName + " " + ChapName + ":" + snum;
   document.getElementById("bookmark3").innerHTML = BookMark;
 
}

function show_bookmark4(bnum, cnum, snum) {

   var BookName=BookAbbr[bnum];
   var ChapName= cnum + 1;
   var BookMark= BookName + " " + ChapName + ":" + snum;
   document.getElementById("bookmark4").innerHTML = BookMark;
 
}

function show_bookmark5(bnum, cnum, snum) {

   var BookName=BookAbbr[bnum];
   var ChapName= cnum + 1;
   var BookMark= BookName + " " + ChapName + ":" + snum;
   document.getElementById("bookmark5").innerHTML = BookMark;
 
}

function show_bookmark6(bnum, cnum, snum) {

   var BookName=BookAbbr[bnum];
   var ChapName= cnum + 1;
   var BookMark= BookName + " " + ChapName + ":" + snum;
   document.getElementById("bookmark6").innerHTML = BookMark;
 
}

function show_bookmark7(bnum, cnum, snum) {

   var BookName=BookAbbr[bnum];
   var ChapName= cnum + 1;
   var BookMark= BookName + " " + ChapName + ":" + snum;
   document.getElementById("bookmark7").innerHTML = BookMark;
 
}

function hide_bookmark1() {

   document.getElementById("bookmark1").innerHTML = "";
 
}

function hide_bookmark2() {

   document.getElementById("bookmark2").innerHTML = "";
 
}

function hide_bookmark3() {

   document.getElementById("bookmark3").innerHTML = "";
 
}

function hide_bookmark4() {

   document.getElementById("bookmark4").innerHTML = "";
 
}

function hide_bookmark5() {

   document.getElementById("bookmark5").innerHTML = "";
 
}

function hide_bookmark6() {

   document.getElementById("bookmark6").innerHTML = "";
 
}

function hide_bookmark7() {

   document.getElementById("bookmark7").innerHTML = "";
 
}

function hide_bookmark8() {

   document.getElementById("bookmark8").innerHTML = "";
 
}

function hide_bookmark9() {

   document.getElementById("bookmark9").innerHTML = "";
 
}

function hide_bookmark10() {

   document.getElementById("bookmark10").innerHTML = "";
 
}

function hide_bookmark11() {

   document.getElementById("bookmark11").innerHTML = "";
 
}

function hide_bookmark12() {

   document.getElementById("bookmark12").innerHTML = "";
 
}

function hide_bookmark13() {

   document.getElementById("bookmark13").innerHTML = "";
 
}

function hide_bookmark14() {

   document.getElementById("bookmark14").innerHTML = "";
 
}


var cfs=200;


function increase_fontsize(){

   cfs = cfs + 20;

   var cfs_v = cfs + '%';

   for (var i = 1001; i < 1177 ; i++) { 

      // Adjusting Font-size
      document.getElementById(i).style.fontSize = cfs_v;
      document.getElementById(i+1000).style.fontSize = cfs_v;
      document.getElementById(i+2000).style.fontSize = cfs_v;
      document.getElementById(i+3000).style.fontSize = cfs_v;

   }

   for (var i = 50001; i < 50016 ; i++) { 

      // Adjusting Font-size
      document.getElementById(i).style.fontSize = cfs_v;
      document.getElementById(i+10000).style.fontSize = cfs_v;

   }

   //document.getElementById("search_result").style.fontSize = cfs_v;

   //document.getElementById("smallVer1").style.fontSize = cfs_v;
   document.getElementById("10002").style.fontSize = cfs_v;
   document.getElementById("10003").style.fontSize = cfs_v;

   //document.getElementById("smallVer2").style.fontSize = cfs_v;
   document.getElementById("20002").style.fontSize = cfs_v;
   document.getElementById("20003").style.fontSize = cfs_v;

   //document.getElementById("smallVer3").style.fontSize = cfs_v;
   document.getElementById("30002").style.fontSize = cfs_v;
   document.getElementById("30003").style.fontSize = cfs_v;

   //document.getElementById("smallVer4").style.fontSize = cfs_v;
   document.getElementById("40002").style.fontSize = cfs_v;
   document.getElementById("40003").style.fontSize = cfs_v;

   document.getElementById("1L").style.fontSize = cfs_v;
   document.getElementById("1R").style.fontSize = cfs_v;

}

function decrease_fontsize(){

   cfs = cfs - 20;

   if(cfs<20){
      cfs=20;
   }

   var cfs_v = cfs + '%';

   for (var i = 1001; i < 1177 ; i++) { 

      // Adjusting Font-size
      document.getElementById(i).style.fontSize = cfs_v;
      document.getElementById(i+1000).style.fontSize = cfs_v;
      document.getElementById(i+2000).style.fontSize = cfs_v;
      document.getElementById(i+3000).style.fontSize = cfs_v;

   }

   for (var i = 50001; i < 50016 ; i++) { 

      // Adjusting Font-size
      document.getElementById(i).style.fontSize = cfs_v;
      document.getElementById(i+10000).style.fontSize = cfs_v;

   }

   //document.getElementById("search_result").style.fontSize = cfs_v;

   //document.getElementById("smallVer1").style.fontSize = cfs_v;
   document.getElementById("10002").style.fontSize = cfs_v;
   document.getElementById("10003").style.fontSize = cfs_v;

   //document.getElementById("smallVer2").style.fontSize = cfs_v;
   document.getElementById("20002").style.fontSize = cfs_v;
   document.getElementById("20003").style.fontSize = cfs_v;

   //document.getElementById("smallVer3").style.fontSize = cfs_v;
   document.getElementById("30002").style.fontSize = cfs_v;
   document.getElementById("30003").style.fontSize = cfs_v;

   //document.getElementById("smallVer4").style.fontSize = cfs_v;
   document.getElementById("40002").style.fontSize = cfs_v;
   document.getElementById("40003").style.fontSize = cfs_v;

   document.getElementById("1L").style.fontSize = cfs_v;
   document.getElementById("1R").style.fontSize = cfs_v;

}


function readchapter(bnum, cnum ,snum , to_snum) {


   //document.getElementById("conten1t1").style.fontsize = "300%";
   //document.getElementById("content2").scrollTop = 0;


   var Total_Line_L = "";  // mark temporary
   var Total_Line_R = "";  // mark temporary 


  //docObj.open();
  //docObj2.open();
  //docObj_h.open();

  // For Setting Bible Verse Font Size
  //if(parent.command.document.VS.VerseSize[0].checked)
  //   sec_size = "20";
  //if(parent.command.document.VS.VerseSize[1].checked)
  //   sec_size = "22";
  //if(parent.command.document.VS.VerseSize[2].checked)
  //   sec_size = "24";
  //if(parent.command.document.VS.VerseSize[3].checked)
  //   sec_size = "26";
  //if(parent.command.document.VS.VerseSize[4].checked)
  //   sec_size = "28";
  //if(parent.command.document.VS.VerseSize[5].checked)
  //   sec_size = "30";


  sec_size = "24"; // 24


  // For Setting Bible Book Font Size
  //if(parent.command.document.BS.BookSize[0].checked)
  //   bcs_size = "20";
  //if(parent.command.document.BS.BookSize[1].checked)
  //   bcs_size = "22";
  //if(parent.command.document.BS.BookSize[2].checked)
  //   bcs_size = "24";
  //if(parent.command.document.BS.BookSize[3].checked)
  //   bcs_size = "26";
  //if(parent.command.document.BS.BookSize[4].checked)
  //   bcs_size = "28";
  //if(parent.command.document.BS.BookSize[5].checked)
  //   bcs_size = "30";


  bcs_size = "24"; // 24


  //docObj.writeln('bnum = ' + bnum + '\n'); // for debug
  //docObj.writeln('cnum = ' + cnum + '\n'); // for debug
  //docObj.writeln('snum = ' + snum + '\n'); // for debug

  //if(sec_size<20){
  //   docObj.writeln('<HTML>\n<HEAD>\n' +
  //   '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
  //   '.1{ font-size:8pt }\n' + '.2{ font-size:10pt }\n' + '.3{ font-size:12pt }\n' +
  //   '.4{ font-size:14pt }\n' + '.5{ font-size:16pt }\n' + '.6{ font-size:18pt }\n' +
  //   '</style>\n' +
  //   '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
  //   '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  //   docObj2.writeln('<HTML>\n<HEAD>\n' +
  //   '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
  //   '.1{ font-size:8pt }\n' + '.2{ font-size:10pt }\n' + '.3{ font-size:12pt }\n' +
  //   '.4{ font-size:14pt }\n' + '.5{ font-size:16pt }\n' + '.6{ font-size:18pt }\n' +
  //   '</style>\n' +
  //   '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
  //   '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  //}
  //else if(sec_size<32){                                                            // Modify 2017.05.29 for test
    // docObj.writeln('<HTML>\n<HEAD>\n' +
    // '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
    // 'p1 { font-size:20pt }\n' + 'p2 { font-size:22pt }\n' + 'p3 { font-size:24pt }\n' +
    // 'p4 { font-size:26pt }\n' + 'p5 { font-size:28pt }\n' + 'p6 { font-size:30pt }\n' +
    // '</style>\n' +
    // '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
    // '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
    // docObj2.writeln('<HTML>\n<HEAD>\n' +
    // '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
    // 'p1 { font-size:20pt }\n' + 'p2 { font-size:22pt }\n' + 'p3 { font-size:24pt }\n' +
    // 'p4 { font-size:26pt }\n' + 'p5 { font-size:28pt }\n' + 'p6 { font-size:30pt }\n' +
    // '</style>\n' +
    // '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
    // '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  //}
  //else if(sec_size<44){
  //   docObj.writeln('<HTML>\n<HEAD>\n' +
  //   '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
  //   '.1{ font-size:32pt }\n' + '.2{ font-size:34pt }\n' + '.3{ font-size:36pt }\n' +
  //   '.4{ font-size:38pt }\n' + '.5{ font-size:40pt }\n' + '.6{ font-size:42pt }\n' +
  //   '</style>\n' +
  //   '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
  //   '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  //   docObj2.writeln('<HTML>\n<HEAD>\n' +
  //   '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
  //   '.1{ font-size:32pt }\n' + '.2{ font-size:34pt }\n' + '.3{ font-size:36pt }\n' +
  //   '.4{ font-size:38pt }\n' + '.5{ font-size:40pt }\n' + '.6{ font-size:42pt }\n' +
  //   '</style>\n' +
  //   '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
  //   '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  //}
  //else{
  //   docObj.writeln('<HTML>\n<HEAD>\n' +
  //   '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
  //   '.1{ font-size:44pt }\n' + '.2{ font-size:46pt }\n' + '.3{ font-size:48pt }\n' +
  //   '.4{ font-size:50pt }\n' + '.5{ font-size:52pt }\n' + '.6{ font-size:54pt }\n' +
  //   '</style>\n' +
  //   '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
  //   '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  //   docObj2.writeln('<HTML>\n<HEAD>\n' +
  //   '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
  //   '.1{ font-size:44pt }\n' + '.2{ font-size:46pt }\n' + '.3{ font-size:48pt }\n' +
  //   '.4{ font-size:50pt }\n' + '.5{ font-size:52pt }\n' + '.6{ font-size:54pt }\n' +
  //   '</style>\n' +
  //   '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
  //   '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  //}

  //if(bcs_size<20)
  //   docObj_h.writeln('<HTML>\n<HEAD>\n' +
  //   '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
  //   '.1{ font-size:8pt }\n' + '.2{ font-size:10pt }\n' + '.3{ font-size:12pt }\n' +
  //   '.4{ font-size:14pt }\n' + '.5{ font-size:16pt }\n' + '.6{ font-size:18pt }\n' +
  //   '</style>\n' +
  //   '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
  //   '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  //else if(bcs_size<32)                                                           // Modify 2017.05.29 for test
    // docObj_h.writeln('<HTML>\n<HEAD>\n' +
    // '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
    // 'p1 { font-size:20pt }\n' + 'p2 { font-size:22pt }\n' + 'p3 { font-size:24pt }\n' +
    // 'p4 { font-size:26pt }\n' + 'p5 { font-size:28pt }\n' + 'p6 { font-size:30pt }\n' +
    // '</style>\n' +
    // '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
    // '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  //else if(bcs_size<44)
  //   docObj_h.writeln('<HTML>\n<HEAD>\n' +
  //   '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
  //   '.1{ font-size:32pt }\n' + '.2{ font-size:34pt }\n' + '.3{ font-size:36pt }\n' +
  //   '.4{ font-size:38pt }\n' + '.5{ font-size:40pt }\n' + '.6{ font-size:42pt }\n' +
  //   '</style>\n' +
  //   '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
  //   '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');
  //else
  //   docObj_h.writeln('<HTML>\n<HEAD>\n' +
  //   '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
  //   '.1{ font-size:44pt }\n' + '.2{ font-size:46pt }\n' + '.3{ font-size:48pt }\n' +
  //   '.4{ font-size:50pt }\n' + '.5{ font-size:52pt }\n' + '.6{ font-size:54pt }\n' +
  //   '</style>\n' +
  //   '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
  //   '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');

//  bnum : 經卷
//  cnum : 章
//  snum : 節
 
  if(snum < 1)
    snum = 1;
  if((bnum - 0 < 0) || (bnum - 0 >= 66))
    bnum = 0;
  if((bnum - 0 <= 0) && (cnum - 0 < 0))
    cnum = 0;
  if((bnum - 0 >= 65) && (cnum - 0 >=22))
    cnum = 21;
  if(cnum - 0 < 0) {
      bnum--;
      cnum = book_chapters[bnum+1] - book_chapters[bnum]-1;
  }
  if(cnum - 0 >= book_chapters[bnum+1] - book_chapters[bnum]) {
      bnum++;
      cnum = 0;
  }


  //For Setting Display Verses Number
  if(document.DVN.DVNumber[0].checked) {

     disp_secs_a = "1";

     if(Mode_7Vers == 1 || Mode_1Chap ==1) {

        clear_area_L();
        clear_area_R();
        Mode_7Vers = 0;
        Mode_1Ver = 1;
        Mode_1Chap = 0;

     }

     //document.getElementById("conten1t1").scrollTop = 0;
     //document.getElementById("conten1t2").scrollTop = 0;

  }

  if(document.DVN.DVNumber[1].checked) {

     disp_secs_a = "15"; // 原為 7

     if(Mode_1Chap ==1) {

        clear_area_L();
        clear_area_R();

     }
     else {

        clear_area_L_for_7();
        clear_area_R_for_7();

     }

     Mode_7Vers = 1;
     Mode_1Ver = 0;
     Mode_1Chap = 0;

  }

  if(document.DVN.DVNumber[2].checked) {

     disp_secs_a = "0";

     clear_area_L();
     clear_area_R();

     Mode_7Vers = 0;
     Mode_1Ver = 0;
     Mode_1Chap = 1;

  }


  if(Mode_Study==0 && Mode_Class==1) {  // Class Mode

     disp_secs_a = "15";

  }


  var disp_secs = eval(disp_secs_a);
  var line1 = chapter_lines[book_chapters[bnum]+cnum];  
  var line2 = chapter_lines[book_chapters[bnum]+cnum+1];
  var line3 = line1+snum-1;
  var line4 = eval(line3 + disp_secs); // +1 表一次顯示1節，+2 表一次顯示2節  

      if(disp_secs==0){
        line3 = line1;
        line4 = line2;}
   
      if(line3>=31101){
        line3=31101;
        line4=31102;
        snum=21;
      }
      if((line3==31087)&&(disp_secs>14)){   // for disp_secs = 15
        line4=31102;
      }
      if((line3==31088)&&(disp_secs>13)){   
        line4=31102;
      }
      if((line3==31089)&&(disp_secs>12)){   
        line4=31102;
      }
      if((line3==31090)&&(disp_secs>11)){   
        line4=31102;
      }
      if((line3==31091)&&(disp_secs>10)){   
        line4=31102;
      }
      if((line3==31092)&&(disp_secs>9)){   
        line4=31102;
      }
      if((line3==31093)&&(disp_secs>8)){   
        line4=31102;
      }
      if((line3==31094)&&(disp_secs>7)){   
        line4=31102;
      }
      if((line3==31095)&&(disp_secs>6)){    // for disp_secs = 7   
        line4=31102;
      }
      if((line3==31096)&&(disp_secs>5)){
        line4=31102;
      }
      if((line3==31097)&&(disp_secs>4)){
        line4=31102;
      }
      if((line3==31098)&&(disp_secs>3)){
        line4=31102;
      }
      if((line3==31099)&&(disp_secs>2)){
        line4=31102;
      }
      if((line3==31100)&&(disp_secs>1)){
        line4=31102;
      }


//    var bname = profiles[line3].substring(0, profiles[line3].indexOf("^"));

      // 和合本
      var bname = profiles[line3].substring(profiles[line3].indexOf("%")+1, profiles[line3].indexOf("^"));
      var cname = profiles[line3].substring(profiles[line3].indexOf("^")+1, profiles[line3].indexOf(":"));
      var sname = profiles[line3].substring(profiles[line3].indexOf(":")+1, profiles[line3].indexOf(" "));

      // For Display English Book Name & Chapter

      var bname3 = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
      var cname3 = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));

      // NKJV
      var bname2 = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
      var cname2 = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));
      var sname2 = profiles2[line3].substring(profiles2[line3].indexOf(":")+1, profiles2[line3].indexOf(" "));

      // NIV
//      var bname = profiles3[line3].substring(profiles3[line3].indexOf("%")+1, profiles3[line3].indexOf("^"));
//      var cname = profiles3[line3].substring(profiles3[line3].indexOf("^")+1, profiles3[line3].indexOf(":"));
//      var sname = profiles3[line3].substring(profiles3[line3].indexOf(":")+1, profiles3[line3].indexOf(" "));


      if(screen.width<screen.height){  // 直式

         bname  = BookAbbr[bnum].substring(3);
         bname2 = BookAbbr[bnum].substring(0,3);

      }


      if(bnum==21)
         var bname2= 'Song of Solomon';


      if(snum<to_snum){
         Bcsname1 = bname + ' 第' + cname + '章' + ' 第' + sname + '~' + to_snum + '節' + ' ';
         Bcsname2 = bname + ' 第' + cname + '篇' + ' 第' + sname + '~' + to_snum + '節' + ' ';
      }
      else{
         Bcsname1 = bname + ' 第' + cname + '章' + ' 第' + sname + '節' + ' ';
         Bcsname2 = bname + ' 第' + cname + '篇' + ' 第' + sname + '節' + ' ';
      }


      Bname = bname;

      var bcsname1 = bname + ' 第' + cname + '章' + '</ol>';
      var bcsname2 = bname + ' 第' + cname + '篇' + '</ol>';

      var bcsname3 = bname3 + ' Chapter ' + cname3 + '</ol>';


      var to_snum_int = parseInt(to_snum,10);
      var sname_int = parseInt(sname,10);
      var sname2_int = parseInt(sname2,10);

      if(to_snum_int>sname_int){                            // add 31/03/2013
        var snameNew = sname + '~' + to_snum;      // add 31/03/2013
        nowtosection = to_snum_int;                // add on 2018.08.17
      }
      else{                                         // add 31/03/2013
        var snameNew = sname;                      // add 31/03/2013
        nowtosection = snum;                // add on 2018.08.17
      }


      if(bnum==30||bnum==56||bnum==62||bnum==63||bnum==64){                   // new
//         var bcsname1 = bname + ' ' + sname + '節 ' + pname + '頁' + '</ol>'; // modified ,  marked 27/03/2013

        if(bnum<39){
         var bcsname1 = bname + "&nbsp&nbsp";                 // modified   27/03/2013
         var bcsname1B = bname2 + ' ' + snameNew;                    // add        27/03/2013
        }
        else{
         var bcsname1 = bname + "&nbsp&nbsp";                 // modified   27/03/2013
         var bcsname1B = bname2 + ' ' + snameNew;                    // add        27/03/2013
        }

         //var bcsname1 = bname + ' ' + sname + '節 ' + '    ';                   // modified           27/03/2013
         //var bcsname1B = bname2 + ' ' + sname2  + '</ol>';                      // add 27/03/2013

         //if(bcsname1.length>23){                                                                     // new
         //  var bcsname1 = bname + '' + sname + '節 ' + '    ';                   // modified           27/03/2013
         //  var bcsname1B = bname2 + ' ' + sname2  + '</ol>';                   } // modified           27/03/2013
      }
      else {
        if(bnum<39){
         var bcsname1 = bname + "&nbsp&nbsp";   // modify 19/03/2013
         var bcsname1B = bname2 + ' ' + cname + ':' + snameNew;     // add 19/03/2013
        }
        else{
         var bcsname1 = bname + "&nbsp&nbsp";   // modify 19/03/2013
         var bcsname1B = bname2 + ' ' + cname + ':' + snameNew;     // add 19/03/2013
        }

         //var bcsname1 = bname + ' ' + cname + '章' + ' ' + sname + '節 ' + '    '; // modified 19/03/2013
            // bcsname1B for English Ver, add 19/03/2013
         //var bcsname1B = bname2 + ' ' + cname2 + ':' + sname2  + '</ol>';  // add 19/03/2013
         //if(bcsname1.length>23){                                                                     // new
         //  var bcsname1 = bname + '' + cname + '章' + '' + sname + '節 ' + '    '; } // modified 19/03/2013
      }

      var bcsname2 = '<b><u>' + bname + "&nbsp&nbsp";                  // modified           27/03/2013
      var bcsname2B = bname2 + ' ' + cname2 + ':' + snameNew  + '</u></b></ol>';                            // add    

      if(bnum==12&&cnum==21){   // cnum 21 表 22 章 , 經節以 英文聖經為主時,  for 代上22章 特別處理，因該章 中英文聖經節數不同 , add 9.5.2013

         var to_snum_int = parseInt(to_snum,10);
         var sname_int = parseInt(sname,10);
         var sname2_int = parseInt(sname2,10);

         if(to_snum_int>sname2_int){                            
           var to_snum_tmp = to_snum - 1;
           var snameNew = sname + '~' + to_snum_tmp;      
           var snameNewB = sname2 + '~' + to_snum;
           var bcsname1 = '代上' + ' ' + cname + ':' + snameNew + "&nbsp&nbsp";   // add 9/05/2013
           var bcsname1B = '1Ch' + ' ' + cname2 + ':' + snameNewB;     // add 9/05/2013
           
           if(snum==1){
              var bcsname1 = '代上' + ' ' + cname + ':' + sname + '~' + cname2 + ':' + to_snum_tmp + "&nbsp&nbsp";   // add 9/05/2013
              var bcsname1B = '1Ch' + ' ' + cname2 + ':' + snameNewB;     // add 9/05/2013
           }

         }
         else{                                         
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '代上' + ' ' + cname + ':' + snameNew + "&nbsp&nbsp";   // add 9/05/2013
           var bcsname1B = '1Ch' + ' ' + cname2 + ':' + snameNewB;     // add 9/05/2013
         }

      }      

      if(bnum==12&&cnum==20&&snum==31){   // cnum 20 表 21 章 , 經節以 英文聖經為主時,  for 代上21章31節 特別處理，因該章 中英文聖經節數不同 , add 23.5.2013
           var bcsname1 = '代上 21:31' + "&nbsp&nbsp";   
           var bcsname1B = '1Ch 22:1';     
      }

      if(bnum==12&&cnum==20&&snum<31&&to_snum==31){   // cnum 20 表 21 章 , 經節以 英文聖經為主時,  for 代上21章31節 特別處理，因該章 中英文聖經節數不同 , add 23.5.2013
           var bcsname1 = '代上 21:' + snum + '~' + '31' + "&nbsp&nbsp";   
           var bcsname1B = '1Ch 21:' + snum + '~' + '22:1';     
      }

      if(bnum==42&&cnum==6){   // cnum 6 表 7 章 , 經節以 英文聖經為主時,  for John Chap7 Verse53 特別處理，因該章 中英文聖經節數不同 , add 17.5.2013

         if(snum==53){
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約' + ' ' + cname + ':1(上)' + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB;     
         }
         if(to_snum==53&&snum<53){
           var to_snum_tmp = to_snum - 1;
           var snameNew = sname + '~' + to_snum_tmp;      
           var snameNewB = sname2 + '~' + to_snum;
           var bcsname1 = '約' + ' ' + cname + ':' + sname + '~' + '8:1(上)' + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB ;    
         }
      }

      if(bnum==42&&cnum==7){   // cnum 7 表 8 章 , 經節以 英文聖經為主時,  for John Chap8 Verse1 特別處理，因該章 中英文聖經節數不同 , add 17.5.2013

         if(snum==1&&to_snum==1){
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約' + ' ' + cname + ':1(下)' + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB;     
         }
         if(snum==1&&to_snum>1){
           var to_snum_tmp = to_snum - 1;
           var snameNew = '1(下)' + '~' + to_snum;      
           var snameNewB = sname2 + '~' + to_snum;
           var bcsname1 = '約' + ' ' + cname + ':' + snameNew + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB ;    
         }
      }

      if(bnum==63&&cnum==0){   // cnum 0 表 1 章 , 經節以 英文聖經為主時,  for 3rd John Chap1 Verse14 特別處理，因該章 中英文聖經節數不同 , add 19.5.2013

         var snum_int = parseInt(snum,10);
         var to_snum_int = parseInt(to_snum,10);
         //var sname_int = parseInt(sname,10);
         //var sname2_int = parseInt(sname2,10);

         if(snum_int==14){
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約參' + ' ' + '14、15' + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + snameNewB ;     
         }
         if(to_snum_int==14&&snum_int<14){
           var to_snum_tmp = to_snum_int - 1;
           var snameNew = sname + '~' + '14、15';      
           var snameNewB = sname2 + '~' + '14';
           var bcsname1 = '約參' + ' ' + snameNew + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + snameNewB ;    
         }
         if(snum_int==15){        // for 3rd John Chap1 Verse15 特別處理，因該章 中英文聖經節數不同
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約參' + ' ' + '15' + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + '14(b)';     
         }
         if(to_snum_int==15&&snum_int<14){   // for 3rd John Chap1 Verse15 特別處理，因該章 中英文聖經節數不同
           var to_snum_tmp = to_snum_int - 1;
           var snameNew = sname + '~' + '14、15';      
           var snameNewB = sname2 + '~' + '14';
           var bcsname1 = '約參' + ' ' + snameNew + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + snameNewB ;  
         }  
      }

      
      var bcsname1_1 =  bcsname1 + bcsname1B ;
      var bcsname2_1 =  bcsname2 + bcsname2B ;



      if(bcs_size==8||bcs_size==20||bcs_size==32||bcs_size==44){
         //var bcsname1_1 = '<span class="1">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="1">' + bcsname2 + '</span>'; }

      if(bcs_size==10||bcs_size==22||bcs_size==34||bcs_size==46){
         //var bcsname1_1 = '<span class="2">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="2">' + bcsname2 + '</span>'; }

      if(bcs_size==12||bcs_size==24||bcs_size==36||bcs_size==48){
         //var bcsname1_1 = '<span class="3">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="3">' + bcsname2 + '</span>'; }

      if(bcs_size==14||bcs_size==26||bcs_size==38||bcs_size==50){
         //var bcsname1_1 = '<span class="4">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="4">' + bcsname2 + '</span>'; }

      if(bcs_size==16||bcs_size==28||bcs_size==40||bcs_size==52){
         //var bcsname1_1 = '<span class="5">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="5">' + bcsname2 + '</span>'; }

      if(bcs_size==18||bcs_size==30||bcs_size==42||bcs_size==54){
         //var bcsname1_1 = '<span class="6">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="6">' + bcsname2 + '</span>'; }


      if(bcs_size==20){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p1>' + bcsname1 + '</p1>';
         var bcsname2_1 = '<p1>' + bcsname2 + '</p1>'; }

      if(bcs_size==22){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p2>' + bcsname1 + '</p2>';
         var bcsname2_1 = '<p2>' + bcsname2 + '</p2>'; }

      if(bcs_size==24){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p3>' + bcsname1 + '</p3>';
         var bcsname2_1 = '<p3>' + bcsname2 + '</p3>'; }

      if(bcs_size==26){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p4>' + bcsname1 + '</p4>';
         var bcsname2_1 = '<p4>' + bcsname2 + '</p4>'; }

      if(bcs_size==28){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p5>' + bcsname1 + '</p5>';
         var bcsname2_1 = '<p5>' + bcsname2 + '</p5>'; }

      if(bcs_size==30){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p6>' + bcsname1 + '</p6>';
         var bcsname2_1 = '<p6>' + bcsname2 + '</p6>'; }


      //if(bname!="詩篇") {
      //   //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname1;
      //}
      //else {
      //   //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname2;
      //}

      //document.getElementById("p2").innerHTML = bcsname3;


      // add 2018.08.15
      //var BCVTName = '<center>' + bname + ' ' + bname3 + ' ' + cname + ':' + sname + '</center>';

      //var bcsname1_1 =  bcsname1 + bcsname1B ;


      var RCBName = '<center>' + bcsname1_1 + '</center>';  // readchapter Book Name
      document.getElementById("p1").innerHTML = RCBName; 
      Read_Book_Chap_Vers_ToVers =  RCBName;



      var j=sname-1;

//      docObj.writeln('line1 = '+line1);
//      docObj.writeln('line2 = '+line2);
//      docObj.writeln('line3 = '+line3);
//      docObj.writeln('line4 = '+line4);
//      docObj.writeln('disp_secs = '+disp_secs);
//      docObj.writeln('disp_secs_a = '+disp_secs_a);


      // var m = 1;  // Mark temporary
      var Lnum = 1001;
      var Lvers = 2001;
      var Rnum = 3001;
      var Rvers = 4001;

      var Upnum = 50001;    // for Mode_Class use
      var Upvers = 60001;   // for Mode_Class use

      // For clear before display
      document.getElementById("50001").innerHTML = "";
      document.getElementById("50002").innerHTML = "";
      document.getElementById("50003").innerHTML = "";
      document.getElementById("50004").innerHTML = "";
      document.getElementById("50005").innerHTML = "";
      document.getElementById("50006").innerHTML = "";
      document.getElementById("50007").innerHTML = "";
      document.getElementById("50008").innerHTML = "";
      document.getElementById("50009").innerHTML = "";
      document.getElementById("50010").innerHTML = "";
      document.getElementById("50011").innerHTML = "";
      document.getElementById("50012").innerHTML = "";
      document.getElementById("50013").innerHTML = "";
      document.getElementById("50014").innerHTML = "";
      document.getElementById("50015").innerHTML = "";

      document.getElementById("60001").innerHTML = "";
      document.getElementById("60002").innerHTML = "";
      document.getElementById("60003").innerHTML = "";
      document.getElementById("60004").innerHTML = "";
      document.getElementById("60005").innerHTML = "";
      document.getElementById("60006").innerHTML = "";
      document.getElementById("60007").innerHTML = "";
      document.getElementById("60008").innerHTML = "";
      document.getElementById("60009").innerHTML = "";
      document.getElementById("60010").innerHTML = "";
      document.getElementById("60011").innerHTML = "";
      document.getElementById("60012").innerHTML = "";
      document.getElementById("60013").innerHTML = "";
      document.getElementById("60014").innerHTML = "";
      document.getElementById("60015").innerHTML = "";


      for (var i = line3; i < line4 ; i++) { 
      var oneline = profiles[i].substring(profiles[i].indexOf(" "), profiles[i].length);       // 和合本
      var oneline2 = profiles2[i].substring(profiles2[i].indexOf(" "), profiles2[i].length);   // NKJV
      var oneline3 = profiles3[i].substring(profiles3[i].indexOf(" "), profiles3[i].length);   // NIV
      var oneline4 = profiles4[i].substring(profiles4[i].indexOf(" "), profiles4[i].length);   // 呂振中
      var cname_1 = profiles[i].substring(profiles[i].indexOf("^")+1, profiles[i].indexOf(":"));

      j++;

      if(sec_size==8||sec_size==20||sec_size==32||sec_size==44){
         var oneline_1 = '<span class="1">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="1">' + j + '</span>';}

      if(sec_size==10||sec_size==22||sec_size==34||sec_size==46){
         var oneline_1 = '<span class="2">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="2">' + j + '</span>';}

      if(sec_size==12||sec_size==24||sec_size==36||sec_size==48){
         var oneline_1 = '<span class="3">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="3">' + j + '</span>';}

      if(sec_size==14||sec_size==26||sec_size==38||sec_size==50){
         var oneline_1 = '<span class="4">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="4">' + j + '</span>';}

      if(sec_size==16||sec_size==28||sec_size==40||sec_size==52){
         var oneline_1 = '<span class="5">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="5">' + j + '</span>';}

      if(sec_size==18||sec_size==30||sec_size==42||sec_size==54){
         var oneline_1 = '<span class="6">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="6">' + j + '</span>';}



      if(sec_size==20){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p1>' + oneline + '\n' + '</p1>';
         var oneline_2 = '<p1>' + oneline2 + '\n' + '</p1>';
         var oneline_3 = '<p1>' + oneline3 + '\n' + '</p1>';
         var oneline_4 = '<p1>' + oneline4 + '\n' + '</p1>';
         var sj = '<p1>' + j + '</p1>';}

      if(sec_size==22){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p2>' + oneline + '\n' + '</p2>';
         var oneline_2 = '<p2>' + oneline2 + '\n' + '</p2>';
         var oneline_3 = '<p2>' + oneline3 + '\n' + '</p2>';
         var oneline_4 = '<p2>' + oneline4 + '\n' + '</p2>';
         var sj = '<p2>' + j + '</p2>';}

      if(sec_size==24){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p3>' + oneline + '\n' + '</p3>';
         var oneline_2 = '<p3>' + oneline2 + '\n' + '</p3>';
         var oneline_3 = '<p3>' + oneline3 + '\n' + '</p3>';
         var oneline_4 = '<p3>' + oneline4 + '\n' + '</p3>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==26){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p4>' + oneline + '\n' + '</p4>';
         var oneline_2 = '<p4>' + oneline2 + '\n' + '</p4>';
         var oneline_3 = '<p4>' + oneline3 + '\n' + '</p4>';
         var oneline_4 = '<p4>' + oneline4 + '\n' + '</p4>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==28){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p5>' + oneline + '\n' + '</p5>';
         var oneline_2 = '<p5>' + oneline2 + '\n' + '</p5>';
         var oneline_3 = '<p5>' + oneline3 + '\n' + '</p5>';
         var oneline_4 = '<p5>' + oneline4 + '\n' + '</p5>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==30){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p6>' + oneline + '\n' + '</p6>';
         var oneline_2 = '<p6>' + oneline2 + '\n' + '</p6>';
         var oneline_3 = '<p6>' + oneline3 + '\n' + '</p6>';
         var oneline_4 = '<p6>' + oneline4 + '\n' + '</p6>';
         var sj = '<p6>' + j + '</p6>';}


      //var oneline_1_1 = '<table><tr><td valign="top">'+'和合本'+'&nbsp'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      //var oneline_1_2 = '<table><tr><td valign="top">'+'NKJV'+'&nbsp&nbsp&nbsp'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      //var oneline_1_3 = '<table><tr><td valign="top">'+'NIV'+'&nbsp&nbsp&nbsp&nbsp'+sj+'</td><td>'+oneline_3+'</td></tr></table>';

//      var oneline_1_1 = '<table><tr><td valign="top">'+'和合本'+'&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
//      var oneline_1_2 = '<table><tr><td valign="top">'+'NKJV'+'&nbsp&nbsp&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
//      var oneline_1_3 = '<table><tr><td valign="top">'+'NIV'+'&nbsp&nbsp&nbsp&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';

      var oneline_1_1 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      var oneline_1_2 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      var oneline_1_3 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';
      var oneline_1_4 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_4+'</td></tr></table>';


      var oneline_1_num =  j;           // for Display verse number in div id = "1001"
      var oneline_2_num =  j;           // for Display verse number in div id = "3001"
      var oneline_3_num =  j;           // for Display verse number
      var oneline_4_num =  j;           // for Display verse number
      var oneline_5_num =  j;           // for Display verse number in div id = "50001"
      var oneline_1_vers =  oneline;    // for Display verse content in div id = "2001"
      var oneline_2_vers =  oneline2;    // for Display verse content in div id = "4001"
      var oneline_3_vers =  oneline3;    // for Display verse content
      var oneline_4_vers =  oneline4;    // for Display verse content


      if(j>=sname_int && j<=to_snum_int) {  // Add on 2018.08.23 for black font

         if(Mode2_ChineseEng==1 && Mode_Chinese==0){  // Chinese/Eng Mode

            var oneline_5_vers =  '<b>' + oneline2 + '<br>' + oneline + '</b>';    // for Display verse content in div id = "60001"

         }
         else{  // Chinese Mode

            var oneline_5_vers =  '<b>' + oneline + '</b>';    // for Display verse content in div id = "60001"

         }

         //var oneline_5_vers =  '<b>' + oneline2 + '<br>' + oneline + '</b>';    // for Display verse content in div id = "60001"

      }
      else if(j==sname_int){

         if(Mode2_ChineseEng==1 && Mode_Chinese==0){  // Chinese/Eng Mode

            var oneline_5_vers =  '<b>' + oneline2 + '<br>' + oneline + '</b>';    // for Display verse content in div id = "60001"

         }
         else{  // Chinese Mode

            var oneline_5_vers =  '<b>' + oneline + '</b>';    // for Display verse content in div id = "60001"

         }

         //var oneline_5_vers =  '<b>' + oneline2 + '<br>' + oneline + '</b>';    // for Display verse content in div id = "60001"

      }
      else {

         if(Mode2_ChineseEng==1 && Mode_Chinese==0){  // Chinese/Eng Mode

            var oneline_5_vers =  oneline2 + '<br>' + oneline;    // for Display verse content in div id = "60001"

         }
         else{  // Chinese Mode

            var oneline_5_vers =  oneline;    // for Display verse content in div id = "60001"

         }

         //var oneline_5_vers =  oneline2 + '<br>' + oneline;    // for Display verse content in div id = "60001"

      }


      var oneline_1_1T =  j+' '+oneline + '<br>';   //        for Display in div id = "1L" or "1R"
      var oneline_2_2T =  j+' '+oneline2 + '<br>';  // NKJV
      var oneline_3_3T =  j+' '+oneline3 + '<br>';  // NIV
      var oneline_4_4T =  j+' '+oneline4 + '<br>';  // 呂振中


      if(disp_secs==7 && bnum==30 && j>21) {
         break;
      }

      if(disp_secs==7 && bnum==56 && j>25) {
         break;
      }

      if(disp_secs==7 && bnum==62 && j>13) {
         break;
      }

      if(disp_secs==7 && bnum==63 && j>15) {
         break;
      }

      if(disp_secs==7 && bnum==64 && j>25) {
         break;
      }

      // Add on 2018.08.22
      if(disp_secs==15 && bnum==30 && j>21) {   // 原為 disp_secs==7
         break;
      }

      if(disp_secs==15 && bnum==56 && j>25) {
         break;
      }

      if(disp_secs==15 && bnum==62 && j>13) {
         break;
      }

      if(disp_secs==15 && bnum==63 && j>15) {   // 3jn max vers = 15
         break;
      }

      if(disp_secs==15 && bnum==64 && j>25) {   // Jud max vers = 25
         break;
      }


      if(cname==cname_1){

         // Put output section here


         if(Mode_Study==0 && Mode_Class==1) {  // Class Mode

            document.getElementById("container3").scrollTop = 0;

            document.getElementById(Upnum++).innerHTML = oneline_5_num;
            document.getElementById(Upvers++).innerHTML = oneline_5_vers;

         }


         if(document.BV.BibleVersion[0].checked){

            BibleVersion_Disp = 0; // Display NKJV

            clear_area_1L();
            clear_area_1R();
            clear_area_LC();
            clear_area_RC();

            document.getElementById(Lnum++).innerHTML = oneline_1_num;
            document.getElementById(Lvers++).innerHTML = oneline_1_vers;

            document.getElementById(Rnum++).innerHTML = oneline_2_num;
            document.getElementById(Rvers++).innerHTML = oneline_2_vers;


            if(disp_secs_a == "1") {

               document.getElementById("conten1t1").scrollTop = 0;
               document.getElementById("content2").scrollTop = 0;

            }

            //Max_Vers_Record = Lnum;

            //Total_Line_L = Total_Line_L + oneline_1_1T;
            //Total_Line_R = Total_Line_R + oneline_2_2T;
         }

         if(document.BV.BibleVersion[1].checked){

            BibleVersion_Disp = 1; // Display NIV

            clear_area_1L();
            clear_area_1R();
            clear_area_LC();
            clear_area_RC();

            document.getElementById(Lnum++).innerHTML = oneline_1_num;
            document.getElementById(Lvers++).innerHTML = oneline_1_vers;

            document.getElementById(Rnum++).innerHTML = oneline_3_num;
            document.getElementById(Rvers++).innerHTML = oneline_3_vers;


            if(disp_secs_a == "1") {

               document.getElementById("conten1t1").scrollTop = 0;
               document.getElementById("content2").scrollTop = 0;

            }

            //Total_Line_L = Total_Line_L + oneline_1_1T;
            //Total_Line_R = Total_Line_R + oneline_3_3T;

         }

         if(document.BV.BibleVersion[2].checked){

            BibleVersion_Disp = 2; // Display 呂振中譯本

            clear_area_1L();
            clear_area_1R();
            clear_area_LC();
            clear_area_RC();

            document.getElementById(Lnum++).innerHTML = oneline_1_num;
            document.getElementById(Lvers++).innerHTML = oneline_1_vers;

            document.getElementById(Rnum++).innerHTML = oneline_4_num;
            document.getElementById(Rvers++).innerHTML = oneline_4_vers;


            if(disp_secs_a == "1") {

               document.getElementById("conten1t1").scrollTop = 0;
               document.getElementById("content2").scrollTop = 0;

            }

            //Total_Line_L = Total_Line_L + oneline_1_1T;
            //Total_Line_R = Total_Line_R + oneline_4_4T;
         }

         if(document.BV.BibleVersion[3].checked){

            BibleVersion_Disp = 3; // Display 全部版本

            clear_area_L();
            clear_area_R();

            // Mark temporary
            var oneline_1_1TC =  '<span class="smallfont">'+ '和合本' + '</span><br>' + j + ' ' + oneline + '<br>';
            var oneline_2_2TC =  '<span class="smallfont">'+ 'NKJV' + '</span><br>' + j + ' ' + oneline2 + '<br>';
            var oneline_3_3TC =  '<span class="smallfont">'+ 'NIV' + '</span><br>' + j + ' ' + oneline3 + '<br>';
            var oneline_4_4TC =  '<span class="smallfont">'+ '呂振中譯本' + '</span><br>' + j + ' ' + oneline4 + '<br>';

            Total_Line_L = Total_Line_L + oneline_1_1TC + oneline_4_4TC;
            Total_Line_R = Total_Line_R + oneline_2_2TC + oneline_3_3TC;
         }

         // End of output section

         //if(parent.command.document.BV.BibleVersion[3].checked){

         //   var oneline_1_1_v = '<table><tr><td valign="top">'+ '和合本' +'</td></tr></table>';
         //   docObj.writeln(oneline_1_1_v);
         //   docObj.writeln(oneline_1_1);

         //   var oneline_1_4_v = '<table><tr><td valign="top">'+ '呂振中譯本' +'</td></tr></table>';
         //   docObj.writeln(oneline_1_4_v);
         //   docObj.writeln(oneline_1_4);

         //   var oneline_1_2_v = '<table><tr><td valign="top">'+ 'NKJV' +'</td></tr></table>';
         //   docObj2.writeln(oneline_1_2_v);
         //   docObj2.writeln(oneline_1_2);

         //   var oneline_1_3_v = '<table><tr><td valign="top">'+ 'NIV' +'</td></tr></table>';
         //   docObj2.writeln(oneline_1_3_v);
         //   docObj2.writeln(oneline_1_3);

         //}
         //else{

         //   docObj.writeln(oneline_1_1);

         //   if(parent.command.document.BV.BibleVersion[0].checked)
         //      docObj2.writeln(oneline_1_2);
         //   if(parent.command.document.BV.BibleVersion[1].checked)
         //      docObj2.writeln(oneline_1_3);
         //   if(parent.command.document.BV.BibleVersion[2].checked)
         //      docObj2.writeln(oneline_1_4);
         //}
      }      // End of for loop

//      docObj.writeln(oneline_1);

      if(document.BV.BibleVersion[3].checked){  // Display 全部版本


         if(disp_secs_a==1) {

            clear_area_1L();
            clear_area_1R();

            document.getElementById("conten1t1").scrollTop = 0;
            document.getElementById("content2").scrollTop = 0;

            document.getElementById("smallVer1").innerHTML = '和合本';
            document.getElementById("10002").innerHTML = j;
            document.getElementById("10003").innerHTML = oneline;

            document.getElementById("smallVer2").innerHTML = '呂振中譯本';
            document.getElementById("20002").innerHTML = j;
            document.getElementById("20003").innerHTML = oneline4;

            document.getElementById("smallVer3").innerHTML = 'NKJV';
            document.getElementById("30002").innerHTML = j;
            document.getElementById("30003").innerHTML = oneline2;

            document.getElementById("smallVer4").innerHTML = 'NIV';
            document.getElementById("40002").innerHTML = j;
            document.getElementById("40003").innerHTML = oneline3;

         }
         else {

            clear_area_LC();
            clear_area_RC();

            // Mark temporary
            document.getElementById("1L").innerHTML = Total_Line_L;
            document.getElementById("1R").innerHTML = Total_Line_R;

         }

      }  // End of BibleVersion[3].checked

      }


  nowbook = bnum;
  nowchapter = cnum;
  nowsection = snum;

  b_int = bnum;
  c_int = cnum;
  v_int = snum;

} // End of function readchapter()



function readchapter3(bnum, cnum ,snum , to_snum) {


   Hide_Search_Mode();

   var Total_Line_L = "";  // mark temporary
   var Total_Line_R = "";  // mark temporary 

  sec_size = "24"; // 24

  bcs_size = "24"; // 24


//  bnum : 經卷
//  cnum : 章
//  snum : 節
 
  if(snum < 1)
    snum = 1;
  if((bnum - 0 < 0) || (bnum - 0 >= 66))
    bnum = 0;
  if((bnum - 0 <= 0) && (cnum - 0 < 0))
    cnum = 0;
  if((bnum - 0 >= 65) && (cnum - 0 >=22))
    cnum = 21;
  if(cnum - 0 < 0) {
      bnum--;
      cnum = book_chapters[bnum+1] - book_chapters[bnum]-1;
  }
  if(cnum - 0 >= book_chapters[bnum+1] - book_chapters[bnum]) {
      bnum++;
      cnum = 0;
  }


  //For Setting Display Verses Number
  if(document.DVN.DVNumber[0].checked) {

     disp_secs_a = "1";

     if(Mode_7Vers == 1 || Mode_1Chap ==1) {

        clear_area_L();
        clear_area_R();
        Mode_7Vers = 0;
        Mode_1Ver = 1;
        Mode_1Chap = 0;

     }

     //document.getElementById("conten1t1").scrollTop = 0;
     //document.getElementById("conten1t2").scrollTop = 0;

  }

  if(document.DVN.DVNumber[1].checked) {

     disp_secs_a = "15"; // 原為 7

     if(Mode_1Chap ==1) {

        clear_area_L();
        clear_area_R();

     }
     else {

        clear_area_L_for_7();
        clear_area_R_for_7();

     }

     Mode_7Vers = 1;
     Mode_1Ver = 0;
     Mode_1Chap = 0;

  }

  if(document.DVN.DVNumber[2].checked) {

     disp_secs_a = "0";

     clear_area_L();
     clear_area_R();

     Mode_7Vers = 0;
     Mode_1Ver = 0;
     Mode_1Chap = 1;

  }


  if(Mode_Study==0 && Mode_Class==1) {  // Class Mode

     disp_secs_a = "15";

  }


  var disp_secs = eval(disp_secs_a);
  var line1 = chapter_lines[book_chapters[bnum]+cnum];  
  var line2 = chapter_lines[book_chapters[bnum]+cnum+1];
  var line3 = line1+snum-1;
  var line4 = eval(line3 + disp_secs); // +1 表一次顯示1節，+2 表一次顯示2節  

      if(disp_secs==0){
        line3 = line1;
        line4 = line2;}
   
      if(line3>=31101){
        line3=31101;
        line4=31102;
        snum=21;
      }
      if((line3==31087)&&(disp_secs>14)){   // for disp_secs = 15
        line4=31102;
      }
      if((line3==31088)&&(disp_secs>13)){   
        line4=31102;
      }
      if((line3==31089)&&(disp_secs>12)){   
        line4=31102;
      }
      if((line3==31090)&&(disp_secs>11)){   
        line4=31102;
      }
      if((line3==31091)&&(disp_secs>10)){   
        line4=31102;
      }
      if((line3==31092)&&(disp_secs>9)){   
        line4=31102;
      }
      if((line3==31093)&&(disp_secs>8)){   
        line4=31102;
      }
      if((line3==31094)&&(disp_secs>7)){   
        line4=31102;
      }
      if((line3==31095)&&(disp_secs>6)){    // for disp_secs = 7   
        line4=31102;
      }
      if((line3==31096)&&(disp_secs>5)){
        line4=31102;
      }
      if((line3==31097)&&(disp_secs>4)){
        line4=31102;
      }
      if((line3==31098)&&(disp_secs>3)){
        line4=31102;
      }
      if((line3==31099)&&(disp_secs>2)){
        line4=31102;
      }
      if((line3==31100)&&(disp_secs>1)){
        line4=31102;
      }


//    var bname = profiles[line3].substring(0, profiles[line3].indexOf("^"));

      // 和合本
      var bname = profiles[line3].substring(profiles[line3].indexOf("%")+1, profiles[line3].indexOf("^"));
      var cname = profiles[line3].substring(profiles[line3].indexOf("^")+1, profiles[line3].indexOf(":"));
      var sname = profiles[line3].substring(profiles[line3].indexOf(":")+1, profiles[line3].indexOf(" "));

      // For Display English Book Name & Chapter

      var bname3 = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
      var cname3 = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));

      // NKJV
      var bname2 = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
      var cname2 = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));
      var sname2 = profiles2[line3].substring(profiles2[line3].indexOf(":")+1, profiles2[line3].indexOf(" "));

      // NIV
//      var bname = profiles3[line3].substring(profiles3[line3].indexOf("%")+1, profiles3[line3].indexOf("^"));
//      var cname = profiles3[line3].substring(profiles3[line3].indexOf("^")+1, profiles3[line3].indexOf(":"));
//      var sname = profiles3[line3].substring(profiles3[line3].indexOf(":")+1, profiles3[line3].indexOf(" "));


      if(screen.width<screen.height){  // 直式

         bname  = BookAbbr[bnum].substring(3);
         bname2 = BookAbbr[bnum].substring(0,3);

      }


      if(bnum==21)
         var bname2= 'Song of Solomon';


      if(snum<to_snum){
         Bcsname1 = bname + ' 第' + cname + '章' + ' 第' + sname + '~' + to_snum + '節' + ' ';
         Bcsname2 = bname + ' 第' + cname + '篇' + ' 第' + sname + '~' + to_snum + '節' + ' ';
      }
      else{
         Bcsname1 = bname + ' 第' + cname + '章' + ' 第' + sname + '節' + ' ';
         Bcsname2 = bname + ' 第' + cname + '篇' + ' 第' + sname + '節' + ' ';
      }


      Bname = bname;

      var bcsname1 = bname + ' 第' + cname + '章' + '</ol>';
      var bcsname2 = bname + ' 第' + cname + '篇' + '</ol>';

      var bcsname3 = bname3 + ' Chapter ' + cname3 + '</ol>';


      var to_snum_int = parseInt(to_snum,10);
      var sname_int = parseInt(sname,10);
      var sname2_int = parseInt(sname2,10);

      if(to_snum_int>sname_int){                            // add 31/03/2013
        var snameNew = sname + '~' + to_snum;      // add 31/03/2013
        nowtosection = to_snum_int;                // add on 2018.08.17
      }
      else{                                         // add 31/03/2013
        var snameNew = sname;                      // add 31/03/2013
        nowtosection = snum;                // add on 2018.08.17
      }


      if(bnum==30||bnum==56||bnum==62||bnum==63||bnum==64){                   // new
//         var bcsname1 = bname + ' ' + sname + '節 ' + pname + '頁' + '</ol>'; // modified ,  marked 27/03/2013

        if(bnum<39){
         var bcsname1 = bname + "&nbsp&nbsp";                 // modified   27/03/2013
         var bcsname1B = bname2 + ' ' + snameNew;                    // add        27/03/2013
        }
        else{
         var bcsname1 = bname + "&nbsp&nbsp";                 // modified   27/03/2013
         var bcsname1B = bname2 + ' ' + snameNew;                    // add        27/03/2013
        }

         //var bcsname1 = bname + ' ' + sname + '節 ' + '    ';                   // modified           27/03/2013
         //var bcsname1B = bname2 + ' ' + sname2  + '</ol>';                      // add 27/03/2013

         //if(bcsname1.length>23){                                                                     // new
         //  var bcsname1 = bname + '' + sname + '節 ' + '    ';                   // modified           27/03/2013
         //  var bcsname1B = bname2 + ' ' + sname2  + '</ol>';                   } // modified           27/03/2013
      }
      else {
        if(bnum<39){
         var bcsname1 = bname + "&nbsp&nbsp";   // modify 19/03/2013
         var bcsname1B = bname2 + ' ' + cname + ':' + snameNew;     // add 19/03/2013
        }
        else{
         var bcsname1 = bname + "&nbsp&nbsp";   // modify 19/03/2013
         var bcsname1B = bname2 + ' ' + cname + ':' + snameNew;     // add 19/03/2013
        }

         //var bcsname1 = bname + ' ' + cname + '章' + ' ' + sname + '節 ' + '    '; // modified 19/03/2013
            // bcsname1B for English Ver, add 19/03/2013
         //var bcsname1B = bname2 + ' ' + cname2 + ':' + sname2  + '</ol>';  // add 19/03/2013
         //if(bcsname1.length>23){                                                                     // new
         //  var bcsname1 = bname + '' + cname + '章' + '' + sname + '節 ' + '    '; } // modified 19/03/2013
      }

      var bcsname2 = '<b><u>' + bname + "&nbsp&nbsp";                  // modified           27/03/2013
      var bcsname2B = bname2 + ' ' + cname2 + ':' + snameNew  + '</u></b></ol>';                            // add    

      if(bnum==12&&cnum==21){   // cnum 21 表 22 章 , 經節以 英文聖經為主時,  for 代上22章 特別處理，因該章 中英文聖經節數不同 , add 9.5.2013

         var to_snum_int = parseInt(to_snum,10);
         var sname_int = parseInt(sname,10);
         var sname2_int = parseInt(sname2,10);

         if(to_snum_int>sname2_int){                            
           var to_snum_tmp = to_snum - 1;
           var snameNew = sname + '~' + to_snum_tmp;      
           var snameNewB = sname2 + '~' + to_snum;
           var bcsname1 = '代上' + ' ' + cname + ':' + snameNew + "&nbsp&nbsp";   // add 9/05/2013
           var bcsname1B = '1Ch' + ' ' + cname2 + ':' + snameNewB;     // add 9/05/2013
           
           if(snum==1){
              var bcsname1 = '代上' + ' ' + cname + ':' + sname + '~' + cname2 + ':' + to_snum_tmp + "&nbsp&nbsp";   // add 9/05/2013
              var bcsname1B = '1Ch' + ' ' + cname2 + ':' + snameNewB;     // add 9/05/2013
           }

         }
         else{                                         
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '代上' + ' ' + cname + ':' + snameNew + "&nbsp&nbsp";   // add 9/05/2013
           var bcsname1B = '1Ch' + ' ' + cname2 + ':' + snameNewB;     // add 9/05/2013
         }

      }      

      if(bnum==12&&cnum==20&&snum==31){   // cnum 20 表 21 章 , 經節以 英文聖經為主時,  for 代上21章31節 特別處理，因該章 中英文聖經節數不同 , add 23.5.2013
           var bcsname1 = '代上 21:31' + "&nbsp&nbsp";   
           var bcsname1B = '1Ch 22:1';     
      }

      if(bnum==12&&cnum==20&&snum<31&&to_snum==31){   // cnum 20 表 21 章 , 經節以 英文聖經為主時,  for 代上21章31節 特別處理，因該章 中英文聖經節數不同 , add 23.5.2013
           var bcsname1 = '代上 21:' + snum + '~' + '31' + "&nbsp&nbsp";   
           var bcsname1B = '1Ch 21:' + snum + '~' + '22:1';     
      }

      if(bnum==42&&cnum==6){   // cnum 6 表 7 章 , 經節以 英文聖經為主時,  for John Chap7 Verse53 特別處理，因該章 中英文聖經節數不同 , add 17.5.2013

         if(snum==53){
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約' + ' ' + cname + ':1(上)' + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB;     
         }
         if(to_snum==53&&snum<53){
           var to_snum_tmp = to_snum - 1;
           var snameNew = sname + '~' + to_snum_tmp;      
           var snameNewB = sname2 + '~' + to_snum;
           var bcsname1 = '約' + ' ' + cname + ':' + sname + '~' + '8:1(上)' + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB ;    
         }
      }

      if(bnum==42&&cnum==7){   // cnum 7 表 8 章 , 經節以 英文聖經為主時,  for John Chap8 Verse1 特別處理，因該章 中英文聖經節數不同 , add 17.5.2013

         if(snum==1&&to_snum==1){
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約' + ' ' + cname + ':1(下)' + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB;     
         }
         if(snum==1&&to_snum>1){
           var to_snum_tmp = to_snum - 1;
           var snameNew = '1(下)' + '~' + to_snum;      
           var snameNewB = sname2 + '~' + to_snum;
           var bcsname1 = '約' + ' ' + cname + ':' + snameNew + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB ;    
         }
      }

      if(bnum==63&&cnum==0){   // cnum 0 表 1 章 , 經節以 英文聖經為主時,  for 3rd John Chap1 Verse14 特別處理，因該章 中英文聖經節數不同 , add 19.5.2013

         var snum_int = parseInt(snum,10);
         var to_snum_int = parseInt(to_snum,10);
         //var sname_int = parseInt(sname,10);
         //var sname2_int = parseInt(sname2,10);

         if(snum_int==14){
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約參' + ' ' + '14、15' + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + snameNewB ;     
         }
         if(to_snum_int==14&&snum_int<14){
           var to_snum_tmp = to_snum_int - 1;
           var snameNew = sname + '~' + '14、15';      
           var snameNewB = sname2 + '~' + '14';
           var bcsname1 = '約參' + ' ' + snameNew + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + snameNewB ;    
         }
         if(snum_int==15){        // for 3rd John Chap1 Verse15 特別處理，因該章 中英文聖經節數不同
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約參' + ' ' + '15' + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + '14(b)';     
         }
         if(to_snum_int==15&&snum_int<14){   // for 3rd John Chap1 Verse15 特別處理，因該章 中英文聖經節數不同
           var to_snum_tmp = to_snum_int - 1;
           var snameNew = sname + '~' + '14、15';      
           var snameNewB = sname2 + '~' + '14';
           var bcsname1 = '約參' + ' ' + snameNew + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + snameNewB ;  
         }  
      }

      var bcsname1_1 =  bcsname1 + bcsname1B ;
      var bcsname2_1 =  bcsname2 + bcsname2B ;



      if(bcs_size==8||bcs_size==20||bcs_size==32||bcs_size==44){
         //var bcsname1_1 = '<span class="1">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="1">' + bcsname2 + '</span>'; }

      if(bcs_size==10||bcs_size==22||bcs_size==34||bcs_size==46){
         //var bcsname1_1 = '<span class="2">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="2">' + bcsname2 + '</span>'; }

      if(bcs_size==12||bcs_size==24||bcs_size==36||bcs_size==48){
         //var bcsname1_1 = '<span class="3">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="3">' + bcsname2 + '</span>'; }

      if(bcs_size==14||bcs_size==26||bcs_size==38||bcs_size==50){
         //var bcsname1_1 = '<span class="4">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="4">' + bcsname2 + '</span>'; }

      if(bcs_size==16||bcs_size==28||bcs_size==40||bcs_size==52){
         //var bcsname1_1 = '<span class="5">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="5">' + bcsname2 + '</span>'; }

      if(bcs_size==18||bcs_size==30||bcs_size==42||bcs_size==54){
         //var bcsname1_1 = '<span class="6">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="6">' + bcsname2 + '</span>'; }


      if(bcs_size==20){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p1>' + bcsname1 + '</p1>';
         var bcsname2_1 = '<p1>' + bcsname2 + '</p1>'; }

      if(bcs_size==22){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p2>' + bcsname1 + '</p2>';
         var bcsname2_1 = '<p2>' + bcsname2 + '</p2>'; }

      if(bcs_size==24){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p3>' + bcsname1 + '</p3>';
         var bcsname2_1 = '<p3>' + bcsname2 + '</p3>'; }

      if(bcs_size==26){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p4>' + bcsname1 + '</p4>';
         var bcsname2_1 = '<p4>' + bcsname2 + '</p4>'; }

      if(bcs_size==28){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p5>' + bcsname1 + '</p5>';
         var bcsname2_1 = '<p5>' + bcsname2 + '</p5>'; }

      if(bcs_size==30){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p6>' + bcsname1 + '</p6>';
         var bcsname2_1 = '<p6>' + bcsname2 + '</p6>'; }


      //if(bname!="詩篇") {
      //   //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname1;
      //}
      //else {
      //   //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname2;
      //}

      //document.getElementById("p2").innerHTML = bcsname3;


      // add 2018.08.15
      //var BCVTName = '<center>' + bname + ' ' + bname3 + ' ' + cname + ':' + sname + '</center>';

      //var bcsname1_1 =  bcsname1 + bcsname1B ;


      var RCBName = '<center>' + bcsname1_1 + '</center>';  // readchapter Book Name
      document.getElementById("p1").innerHTML = RCBName; 
      Read_Book_Chap_Vers_ToVers =  RCBName;



      var j=sname-1;

//      docObj.writeln('line1 = '+line1);
//      docObj.writeln('line2 = '+line2);
//      docObj.writeln('line3 = '+line3);
//      docObj.writeln('line4 = '+line4);
//      docObj.writeln('disp_secs = '+disp_secs);
//      docObj.writeln('disp_secs_a = '+disp_secs_a);


      // var m = 1;  // Mark temporary
      var Lnum = 1001;
      var Lvers = 2001;
      var Rnum = 3001;
      var Rvers = 4001;

      var Upnum = 50001;    // for Mode_Class use
      var Upvers = 60001;   // for Mode_Class use

      // For clear before display
      document.getElementById("50001").innerHTML = "";
      document.getElementById("50002").innerHTML = "";
      document.getElementById("50003").innerHTML = "";
      document.getElementById("50004").innerHTML = "";
      document.getElementById("50005").innerHTML = "";
      document.getElementById("50006").innerHTML = "";
      document.getElementById("50007").innerHTML = "";
      document.getElementById("50008").innerHTML = "";
      document.getElementById("50009").innerHTML = "";
      document.getElementById("50010").innerHTML = "";
      document.getElementById("50011").innerHTML = "";
      document.getElementById("50012").innerHTML = "";
      document.getElementById("50013").innerHTML = "";
      document.getElementById("50014").innerHTML = "";
      document.getElementById("50015").innerHTML = "";

      document.getElementById("60001").innerHTML = "";
      document.getElementById("60002").innerHTML = "";
      document.getElementById("60003").innerHTML = "";
      document.getElementById("60004").innerHTML = "";
      document.getElementById("60005").innerHTML = "";
      document.getElementById("60006").innerHTML = "";
      document.getElementById("60007").innerHTML = "";
      document.getElementById("60008").innerHTML = "";
      document.getElementById("60009").innerHTML = "";
      document.getElementById("60010").innerHTML = "";
      document.getElementById("60011").innerHTML = "";
      document.getElementById("60012").innerHTML = "";
      document.getElementById("60013").innerHTML = "";
      document.getElementById("60014").innerHTML = "";
      document.getElementById("60015").innerHTML = "";


      for (var i = line3; i < line4 ; i++) { 
      var oneline = profiles[i].substring(profiles[i].indexOf(" "), profiles[i].length);       // 和合本
      var oneline2 = profiles2[i].substring(profiles2[i].indexOf(" "), profiles2[i].length);   // NKJV
      var oneline3 = profiles3[i].substring(profiles3[i].indexOf(" "), profiles3[i].length);   // NIV
      var oneline4 = profiles4[i].substring(profiles4[i].indexOf(" "), profiles4[i].length);   // 呂振中
      var cname_1 = profiles[i].substring(profiles[i].indexOf("^")+1, profiles[i].indexOf(":"));

      j++;

      if(sec_size==8||sec_size==20||sec_size==32||sec_size==44){
         var oneline_1 = '<span class="1">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="1">' + j + '</span>';}

      if(sec_size==10||sec_size==22||sec_size==34||sec_size==46){
         var oneline_1 = '<span class="2">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="2">' + j + '</span>';}

      if(sec_size==12||sec_size==24||sec_size==36||sec_size==48){
         var oneline_1 = '<span class="3">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="3">' + j + '</span>';}

      if(sec_size==14||sec_size==26||sec_size==38||sec_size==50){
         var oneline_1 = '<span class="4">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="4">' + j + '</span>';}

      if(sec_size==16||sec_size==28||sec_size==40||sec_size==52){
         var oneline_1 = '<span class="5">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="5">' + j + '</span>';}

      if(sec_size==18||sec_size==30||sec_size==42||sec_size==54){
         var oneline_1 = '<span class="6">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="6">' + j + '</span>';}



      if(sec_size==20){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p1>' + oneline + '\n' + '</p1>';
         var oneline_2 = '<p1>' + oneline2 + '\n' + '</p1>';
         var oneline_3 = '<p1>' + oneline3 + '\n' + '</p1>';
         var oneline_4 = '<p1>' + oneline4 + '\n' + '</p1>';
         var sj = '<p1>' + j + '</p1>';}

      if(sec_size==22){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p2>' + oneline + '\n' + '</p2>';
         var oneline_2 = '<p2>' + oneline2 + '\n' + '</p2>';
         var oneline_3 = '<p2>' + oneline3 + '\n' + '</p2>';
         var oneline_4 = '<p2>' + oneline4 + '\n' + '</p2>';
         var sj = '<p2>' + j + '</p2>';}

      if(sec_size==24){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p3>' + oneline + '\n' + '</p3>';
         var oneline_2 = '<p3>' + oneline2 + '\n' + '</p3>';
         var oneline_3 = '<p3>' + oneline3 + '\n' + '</p3>';
         var oneline_4 = '<p3>' + oneline4 + '\n' + '</p3>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==26){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p4>' + oneline + '\n' + '</p4>';
         var oneline_2 = '<p4>' + oneline2 + '\n' + '</p4>';
         var oneline_3 = '<p4>' + oneline3 + '\n' + '</p4>';
         var oneline_4 = '<p4>' + oneline4 + '\n' + '</p4>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==28){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p5>' + oneline + '\n' + '</p5>';
         var oneline_2 = '<p5>' + oneline2 + '\n' + '</p5>';
         var oneline_3 = '<p5>' + oneline3 + '\n' + '</p5>';
         var oneline_4 = '<p5>' + oneline4 + '\n' + '</p5>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==30){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p6>' + oneline + '\n' + '</p6>';
         var oneline_2 = '<p6>' + oneline2 + '\n' + '</p6>';
         var oneline_3 = '<p6>' + oneline3 + '\n' + '</p6>';
         var oneline_4 = '<p6>' + oneline4 + '\n' + '</p6>';
         var sj = '<p6>' + j + '</p6>';}


      //var oneline_1_1 = '<table><tr><td valign="top">'+'和合本'+'&nbsp'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      //var oneline_1_2 = '<table><tr><td valign="top">'+'NKJV'+'&nbsp&nbsp&nbsp'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      //var oneline_1_3 = '<table><tr><td valign="top">'+'NIV'+'&nbsp&nbsp&nbsp&nbsp'+sj+'</td><td>'+oneline_3+'</td></tr></table>';

//      var oneline_1_1 = '<table><tr><td valign="top">'+'和合本'+'&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
//      var oneline_1_2 = '<table><tr><td valign="top">'+'NKJV'+'&nbsp&nbsp&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
//      var oneline_1_3 = '<table><tr><td valign="top">'+'NIV'+'&nbsp&nbsp&nbsp&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';

      var oneline_1_1 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      var oneline_1_2 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      var oneline_1_3 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';
      var oneline_1_4 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_4+'</td></tr></table>';


      var oneline_1_num =  j;           // for Display verse number in div id = "1001"
      var oneline_2_num =  j;           // for Display verse number in div id = "3001"
      var oneline_3_num =  j;           // for Display verse number
      var oneline_4_num =  j;           // for Display verse number
      var oneline_5_num =  j;           // for Display verse number in div id = "50001"
      var oneline_1_vers =  oneline;    // for Display verse content in div id = "2001"
      var oneline_2_vers =  oneline2;    // for Display verse content in div id = "4001"
      var oneline_3_vers =  oneline3;    // for Display verse content
      var oneline_4_vers =  oneline4;    // for Display verse content


      if(j>=sname_int && j<=to_snum_int) {  // Add on 2018.08.23 for black font

         var oneline_5_vers =  '<b>' + oneline2 + '<br>' + oneline + '</b>';    // for Display verse content in div id = "60001"

      }
      else if(j==sname_int){

         var oneline_5_vers =  '<b>' + oneline2 + '<br>' + oneline + '</b>';    // for Display verse content in div id = "60001"

      }
      else {

         var oneline_5_vers =  oneline2 + '<br>' + oneline;    // for Display verse content in div id = "60001"

      }


      var oneline_1_1T =  j+' '+oneline + '<br>';   //        for Display in div id = "1L" or "1R"
      var oneline_2_2T =  j+' '+oneline2 + '<br>';  // NKJV
      var oneline_3_3T =  j+' '+oneline3 + '<br>';  // NIV
      var oneline_4_4T =  j+' '+oneline4 + '<br>';  // 呂振中


      if(disp_secs==7 && bnum==30 && j>21) {
         break;
      }

      if(disp_secs==7 && bnum==56 && j>25) {
         break;
      }

      if(disp_secs==7 && bnum==62 && j>13) {
         break;
      }

      if(disp_secs==7 && bnum==63 && j>15) {
         break;
      }

      if(disp_secs==7 && bnum==64 && j>25) {
         break;
      }

      // Add on 2018.08.22
      if(disp_secs==15 && bnum==30 && j>21) {   // 原為 disp_secs==7
         break;
      }

      if(disp_secs==15 && bnum==56 && j>25) {
         break;
      }

      if(disp_secs==15 && bnum==62 && j>13) {
         break;
      }

      if(disp_secs==15 && bnum==63 && j>15) {   // 3jn max vers = 15
         break;
      }

      if(disp_secs==15 && bnum==64 && j>25) {   // Jud max vers = 25
         break;
      }


      if(cname==cname_1){

         // Put output section here


         if(Mode_Study==0 && Mode_Class==1) {  // Class Mode

            document.getElementById("container3").scrollTop = 0;

            document.getElementById(Upnum++).innerHTML = oneline_5_num;
            document.getElementById(Upvers++).innerHTML = oneline_5_vers;

         }


         if(document.BV.BibleVersion[0].checked){

            BibleVersion_Disp = 0; // Display NKJV

            clear_area_1L();
            clear_area_1R();
            clear_area_LC();
            clear_area_RC();

            document.getElementById(Lnum++).innerHTML = oneline_1_num;
            document.getElementById(Lvers++).innerHTML = oneline_1_vers;

            document.getElementById(Rnum++).innerHTML = oneline_2_num;
            document.getElementById(Rvers++).innerHTML = oneline_2_vers;


            if(disp_secs_a == "1") {

               document.getElementById("conten1t1").scrollTop = 0;
               document.getElementById("content2").scrollTop = 0;

            }

            //Max_Vers_Record = Lnum;

            //Total_Line_L = Total_Line_L + oneline_1_1T;
            //Total_Line_R = Total_Line_R + oneline_2_2T;
         }

         if(document.BV.BibleVersion[1].checked){

            BibleVersion_Disp = 1; // Display NIV

            clear_area_1L();
            clear_area_1R();
            clear_area_LC();
            clear_area_RC();

            document.getElementById(Lnum++).innerHTML = oneline_1_num;
            document.getElementById(Lvers++).innerHTML = oneline_1_vers;

            document.getElementById(Rnum++).innerHTML = oneline_3_num;
            document.getElementById(Rvers++).innerHTML = oneline_3_vers;


            if(disp_secs_a == "1") {

               document.getElementById("conten1t1").scrollTop = 0;
               document.getElementById("content2").scrollTop = 0;

            }

            //Total_Line_L = Total_Line_L + oneline_1_1T;
            //Total_Line_R = Total_Line_R + oneline_3_3T;

         }

         if(document.BV.BibleVersion[2].checked){

            BibleVersion_Disp = 2; // Display 呂振中譯本

            clear_area_1L();
            clear_area_1R();
            clear_area_LC();
            clear_area_RC();

            document.getElementById(Lnum++).innerHTML = oneline_1_num;
            document.getElementById(Lvers++).innerHTML = oneline_1_vers;

            document.getElementById(Rnum++).innerHTML = oneline_4_num;
            document.getElementById(Rvers++).innerHTML = oneline_4_vers;


            if(disp_secs_a == "1") {

               document.getElementById("conten1t1").scrollTop = 0;
               document.getElementById("content2").scrollTop = 0;

            }

            //Total_Line_L = Total_Line_L + oneline_1_1T;
            //Total_Line_R = Total_Line_R + oneline_4_4T;
         }

         if(document.BV.BibleVersion[3].checked){

            BibleVersion_Disp = 3; // Display 全部版本

            clear_area_L();
            clear_area_R();

            // Mark temporary
            var oneline_1_1TC =  '<span class="smallfont">'+ '和合本' + '</span><br>' + j + ' ' + oneline + '<br>';
            var oneline_2_2TC =  '<span class="smallfont">'+ 'NKJV' + '</span><br>' + j + ' ' + oneline2 + '<br>';
            var oneline_3_3TC =  '<span class="smallfont">'+ 'NIV' + '</span><br>' + j + ' ' + oneline3 + '<br>';
            var oneline_4_4TC =  '<span class="smallfont">'+ '呂振中譯本' + '</span><br>' + j + ' ' + oneline4 + '<br>';

            Total_Line_L = Total_Line_L + oneline_1_1TC + oneline_4_4TC;
            Total_Line_R = Total_Line_R + oneline_2_2TC + oneline_3_3TC;
         }

         // End of output section

         //if(parent.command.document.BV.BibleVersion[3].checked){

         //   var oneline_1_1_v = '<table><tr><td valign="top">'+ '和合本' +'</td></tr></table>';
         //   docObj.writeln(oneline_1_1_v);
         //   docObj.writeln(oneline_1_1);

         //   var oneline_1_4_v = '<table><tr><td valign="top">'+ '呂振中譯本' +'</td></tr></table>';
         //   docObj.writeln(oneline_1_4_v);
         //   docObj.writeln(oneline_1_4);

         //   var oneline_1_2_v = '<table><tr><td valign="top">'+ 'NKJV' +'</td></tr></table>';
         //   docObj2.writeln(oneline_1_2_v);
         //   docObj2.writeln(oneline_1_2);

         //   var oneline_1_3_v = '<table><tr><td valign="top">'+ 'NIV' +'</td></tr></table>';
         //   docObj2.writeln(oneline_1_3_v);
         //   docObj2.writeln(oneline_1_3);

         //}
         //else{

         //   docObj.writeln(oneline_1_1);

         //   if(parent.command.document.BV.BibleVersion[0].checked)
         //      docObj2.writeln(oneline_1_2);
         //   if(parent.command.document.BV.BibleVersion[1].checked)
         //      docObj2.writeln(oneline_1_3);
         //   if(parent.command.document.BV.BibleVersion[2].checked)
         //      docObj2.writeln(oneline_1_4);
         //}
      }      // End of for loop

//      docObj.writeln(oneline_1);

      if(document.BV.BibleVersion[3].checked){  // Display 全部版本


         if(disp_secs_a==1) {

            clear_area_1L();
            clear_area_1R();

            document.getElementById("conten1t1").scrollTop = 0;
            document.getElementById("content2").scrollTop = 0;

            document.getElementById("smallVer1").innerHTML = '和合本';
            document.getElementById("10002").innerHTML = j;
            document.getElementById("10003").innerHTML = oneline;

            document.getElementById("smallVer2").innerHTML = '呂振中譯本';
            document.getElementById("20002").innerHTML = j;
            document.getElementById("20003").innerHTML = oneline4;

            document.getElementById("smallVer3").innerHTML = 'NKJV';
            document.getElementById("30002").innerHTML = j;
            document.getElementById("30003").innerHTML = oneline2;

            document.getElementById("smallVer4").innerHTML = 'NIV';
            document.getElementById("40002").innerHTML = j;
            document.getElementById("40003").innerHTML = oneline3;

         }
         else {

            clear_area_LC();
            clear_area_RC();

            // Mark temporary
            document.getElementById("1L").innerHTML = Total_Line_L;
            document.getElementById("1R").innerHTML = Total_Line_R;

         }

      }  // End of BibleVersion[3].checked

      }


  nowbook = bnum;
  nowchapter = cnum;
  nowsection = snum;

  b_int = bnum;
  c_int = cnum;
  v_int = snum;

} // End of function readchapter3()





function readchapter2(bnum, cnum ,snum) {  // for next verse or prev verse

   var Total_Line_L = "";  // mark temporary
   var Total_Line_R = "";  // mark temporary 

   sec_size = "24";

   bcs_size = "24";


//  bnum : 經卷
//  cnum : 章
//  snum : 節
 
  if(snum < 1)
    snum = 1;
  if((bnum - 0 < 0) || (bnum - 0 >= 66))
    bnum = 0;
  if((bnum - 0 <= 0) && (cnum - 0 < 0))
    cnum = 0;
  if((bnum - 0 >= 65) && (cnum - 0 >=22))
    cnum = 21;
  if(cnum - 0 < 0) {
      bnum--;
      cnum = book_chapters[bnum+1] - book_chapters[bnum]-1;
  }
  if(cnum - 0 >= book_chapters[bnum+1] - book_chapters[bnum]) {
      bnum++;
      cnum = 0;
  }


  //For Setting Display Verses Number
  if(document.DVN.DVNumber[0].checked) {

     disp_secs_a = "1";

     if(Mode_7Vers == 1 || Mode_1Chap ==1) {

        clear_area_L();
        clear_area_R();
        Mode_7Vers = 0;
        Mode_1Ver = 1;
        Mode_1Chap = 0;

     }

  }

  if(document.DVN.DVNumber[1].checked) {

     disp_secs_a = "15"; // 原為 7

     if(Mode_1Chap ==1) {

        clear_area_L();
        clear_area_R();

     }
     else {

        clear_area_L_for_7();
        clear_area_R_for_7();

     }

     Mode_7Vers = 1;
     Mode_1Ver = 0;
     Mode_1Chap = 0;

  }

  if(document.DVN.DVNumber[2].checked) {

     disp_secs_a = "0";

     clear_area_L();
     clear_area_R();

     Mode_7Vers = 0;
     Mode_1Ver = 0;
     Mode_1Chap = 1;

  }


  if(Mode_Study==0 && Mode_Class==1) {  // Class Mode

     disp_secs_a = "15";

  }



  var disp_secs = eval(disp_secs_a);
  var line1 = chapter_lines[book_chapters[bnum]+cnum];  
  var line2 = chapter_lines[book_chapters[bnum]+cnum+1];
  var line3 = line1+snum-1;
  var line4 = eval(line3 + disp_secs); // +1 表一次顯示1節，+2 表一次顯示2節  

      if(disp_secs==0){
        line3 = line1;
        line4 = line2;}
   
      if(line3>=31101){
        line3=31101;
        line4=31102;
        snum=21;
      }
      if((line3==31087)&&(disp_secs>14)){   // for disp_secs = 15
        line4=31102;
      }
      if((line3==31088)&&(disp_secs>13)){   
        line4=31102;
      }
      if((line3==31089)&&(disp_secs>12)){   
        line4=31102;
      }
      if((line3==31090)&&(disp_secs>11)){   
        line4=31102;
      }
      if((line3==31091)&&(disp_secs>10)){   
        line4=31102;
      }
      if((line3==31092)&&(disp_secs>9)){   
        line4=31102;
      }
      if((line3==31093)&&(disp_secs>8)){   
        line4=31102;
      }
      if((line3==31094)&&(disp_secs>7)){   
        line4=31102;
      }
      if((line3==31095)&&(disp_secs>6)){    // for disp_secs = 7   
        line4=31102;
      }
      if((line3==31096)&&(disp_secs>5)){
        line4=31102;
      }
      if((line3==31097)&&(disp_secs>4)){
        line4=31102;
      }
      if((line3==31098)&&(disp_secs>3)){
        line4=31102;
      }
      if((line3==31099)&&(disp_secs>2)){
        line4=31102;
      }
      if((line3==31100)&&(disp_secs>1)){
        line4=31102;
      }


//    var bname = profiles[line3].substring(0, profiles[line3].indexOf("^"));

      // 和合本
      var bname = profiles[line3].substring(profiles[line3].indexOf("%")+1, profiles[line3].indexOf("^"));
      var cname = profiles[line3].substring(profiles[line3].indexOf("^")+1, profiles[line3].indexOf(":"));
      var sname = profiles[line3].substring(profiles[line3].indexOf(":")+1, profiles[line3].indexOf(" "));

      // For Display English Book Name & Chapter

      var bname3 = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
      var cname3 = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));

      // NKJV
      var bname2 = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
      var cname2 = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));
      var sname2 = profiles2[line3].substring(profiles2[line3].indexOf(":")+1, profiles2[line3].indexOf(" "));

      // NIV
//      var bname = profiles3[line3].substring(profiles3[line3].indexOf("%")+1, profiles3[line3].indexOf("^"));
//      var cname = profiles3[line3].substring(profiles3[line3].indexOf("^")+1, profiles3[line3].indexOf(":"));
//      var sname = profiles3[line3].substring(profiles3[line3].indexOf(":")+1, profiles3[line3].indexOf(" "));


      if(screen.width<screen.height){  // 直式

         bname  = BookAbbr[bnum].substring(3);
         bname2 = BookAbbr[bnum].substring(0,3);

      }


      if(bnum==21)
         var bname2= 'Song of Solomon';


      Bcsname1 = bname + ' 第' + cname + '章' + ' 第' + sname + '節' + ' ';
      Bcsname2 = bname + ' 第' + cname + '篇' + ' 第' + sname + '節' + ' ';
      Bname = bname;

      var bcsname1 = bname + ' 第' + cname + '章' + '</ol>';
      var bcsname2 = bname + ' 第' + cname + '篇' + '</ol>';

      var bcsname3 = bname3 + ' Chapter ' + cname3 + '</ol>';


      //var to_snum = now_To_Verse; // add on 2018.08.16      
      var to_snum = 0; // add on 2018.08.16      

      var to_snum_int = parseInt(to_snum,10);
      var sname_int = parseInt(sname,10);
      var sname2_int = parseInt(sname2,10);

      if(to_snum_int>sname_int){                            // add 31/03/2013
        var snameNew = sname + '~' + to_snum;      // add 31/03/2013
      }
      else{                                         // add 31/03/2013
        var snameNew = sname;                      // add 31/03/2013
      }


      if(bnum==30||bnum==56||bnum==62||bnum==63||bnum==64){                   // new
//         var bcsname1 = bname + ' ' + sname + '節 ' + pname + '頁' + '</ol>'; // modified ,  marked 27/03/2013

        if(bnum<39){
         var bcsname1 = bname + "&nbsp&nbsp";                 // modified   27/03/2013
         var bcsname1B = bname2 + ' ' + snameNew;                    // add        27/03/2013
        }
        else{
         var bcsname1 = bname + "&nbsp&nbsp";                 // modified   27/03/2013
         var bcsname1B = bname2 + ' ' + snameNew;                    // add        27/03/2013
        }

         //var bcsname1 = bname + ' ' + sname + '節 ' + '    ';                   // modified           27/03/2013
         //var bcsname1B = bname2 + ' ' + sname2  + '</ol>';                      // add 27/03/2013

         //if(bcsname1.length>23){                                                                     // new
         //  var bcsname1 = bname + '' + sname + '節 ' + '    ';                   // modified           27/03/2013
         //  var bcsname1B = bname2 + ' ' + sname2  + '</ol>';                   } // modified           27/03/2013
      }
      else {
        if(bnum<39){
         var bcsname1 = bname + "&nbsp&nbsp";   // modify 19/03/2013
         var bcsname1B = bname2 + ' ' + cname + ':' + snameNew;     // add 19/03/2013
        }
        else{
         var bcsname1 = bname + "&nbsp&nbsp";   // modify 19/03/2013
         var bcsname1B = bname2 + ' ' + cname + ':' + snameNew;     // add 19/03/2013
        }

         //var bcsname1 = bname + ' ' + cname + '章' + ' ' + sname + '節 ' + '    '; // modified 19/03/2013
            // bcsname1B for English Ver, add 19/03/2013
         //var bcsname1B = bname2 + ' ' + cname2 + ':' + sname2  + '</ol>';  // add 19/03/2013
         //if(bcsname1.length>23){                                                                     // new
         //  var bcsname1 = bname + '' + cname + '章' + '' + sname + '節 ' + '    '; } // modified 19/03/2013
      }

      var bcsname2 = '<b><u>' + bname + "&nbsp&nbsp";                  // modified           27/03/2013
      var bcsname2B = bname2 + ' ' + cname2 + ':' + snameNew  + '</u></b></ol>';                            // add    

      if(bnum==12&&cnum==21){   // cnum 21 表 22 章 , 經節以 英文聖經為主時,  for 代上22章 特別處理，因該章 中英文聖經節數不同 , add 9.5.2013

         var to_snum_int = parseInt(to_snum,10);
         var sname_int = parseInt(sname,10);
         var sname2_int = parseInt(sname2,10);

         if(to_snum_int>sname2_int){                            
           var to_snum_tmp = to_snum - 1;
           var snameNew = sname + '~' + to_snum_tmp;      
           var snameNewB = sname2 + '~' + to_snum;
           var bcsname1 = '代上' + ' ' + cname + ':' + snameNew + "&nbsp&nbsp";   // add 9/05/2013
           var bcsname1B = '1Ch' + ' ' + cname2 + ':' + snameNewB;     // add 9/05/2013
           
           if(snum==1){
              var bcsname1 = '代上' + ' ' + cname + ':' + sname + '~' + cname2 + ':' + to_snum_tmp + "&nbsp&nbsp";   // add 9/05/2013
              var bcsname1B = '1Ch' + ' ' + cname2 + ':' + snameNewB;     // add 9/05/2013
           }

         }
         else{                                         
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '代上' + ' ' + cname + ':' + snameNew + "&nbsp&nbsp";   // add 9/05/2013
           var bcsname1B = '1Ch' + ' ' + cname2 + ':' + snameNewB;     // add 9/05/2013
         }

      }      

      if(bnum==12&&cnum==20&&snum==31){   // cnum 20 表 21 章 , 經節以 英文聖經為主時,  for 代上21章31節 特別處理，因該章 中英文聖經節數不同 , add 23.5.2013
           var bcsname1 = '代上 21:31' + "&nbsp&nbsp";   
           var bcsname1B = '1Ch 22:1';     
      }

      if(bnum==12&&cnum==20&&snum<31&&to_snum==31){   // cnum 20 表 21 章 , 經節以 英文聖經為主時,  for 代上21章31節 特別處理，因該章 中英文聖經節數不同 , add 23.5.2013
           var bcsname1 = '代上 21:' + snum + '~' + '31' + "&nbsp&nbsp";   
           var bcsname1B = '1Ch 21:' + snum + '~' + '22:1';     
      }

      if(bnum==42&&cnum==6){   // cnum 6 表 7 章 , 經節以 英文聖經為主時,  for John Chap7 Verse53 特別處理，因該章 中英文聖經節數不同 , add 17.5.2013

         if(snum==53){
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約' + ' ' + cname + ':1(上)' + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB;     
         }
         if(to_snum==53&&snum<53){
           var to_snum_tmp = to_snum - 1;
           var snameNew = sname + '~' + to_snum_tmp;      
           var snameNewB = sname2 + '~' + to_snum;
           var bcsname1 = '約' + ' ' + cname + ':' + sname + '~' + '8:1(上)' + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB ;    
         }
      }

      if(bnum==42&&cnum==7){   // cnum 7 表 8 章 , 經節以 英文聖經為主時,  for John Chap8 Verse1 特別處理，因該章 中英文聖經節數不同 , add 17.5.2013

         if(snum==1&&to_snum==1){
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約' + ' ' + cname + ':1(下)' + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB;     
         }
         if(snum==1&&to_snum>1){
           var to_snum_tmp = to_snum - 1;
           var snameNew = '1(下)' + '~' + to_snum;      
           var snameNewB = sname2 + '~' + to_snum;
           var bcsname1 = '約' + ' ' + cname + ':' + snameNew + "&nbsp&nbsp";   
           var bcsname1B = 'Jn' + ' ' + cname2 + ':' + snameNewB ;    
         }
      }

      if(bnum==63&&cnum==0){   // cnum 0 表 1 章 , 經節以 英文聖經為主時,  for 3rd John Chap1 Verse14 特別處理，因該章 中英文聖經節數不同 , add 19.5.2013

         var snum_int = parseInt(snum,10);
         var to_snum_int = parseInt(to_snum,10);
         //var sname_int = parseInt(sname,10);
         //var sname2_int = parseInt(sname2,10);

         if(snum_int==14){
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約參' + ' ' + '14、15' + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + snameNewB ;     
         }
         if(to_snum_int==14&&snum_int<14){
           var to_snum_tmp = to_snum_int - 1;
           var snameNew = sname + '~' + '14、15';      
           var snameNewB = sname2 + '~' + '14';
           var bcsname1 = '約參' + ' ' + snameNew + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + snameNewB ;    
         }
         if(snum_int==15){        // for 3rd John Chap1 Verse15 特別處理，因該章 中英文聖經節數不同
           var snameNew = sname;                      
           var snameNewB = sname2;
           var bcsname1 = '約參' + ' ' + '15' + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + '14(b)';     
         }
         if(to_snum_int==15&&snum_int<14){   // for 3rd John Chap1 Verse15 特別處理，因該章 中英文聖經節數不同
           var to_snum_tmp = to_snum_int - 1;
           var snameNew = sname + '~' + '14、15';      
           var snameNewB = sname2 + '~' + '14';
           var bcsname1 = '約參' + ' ' + snameNew + "&nbsp&nbsp";   
           var bcsname1B = '3Jn' + ' ' + snameNewB ;  
         }  
      }

      var bcsname1_1 =  bcsname1 + bcsname1B ;
      var bcsname2_1 =  bcsname2 + bcsname2B ;



      if(bcs_size==8||bcs_size==20||bcs_size==32||bcs_size==44){
         //var bcsname1_1 = '<span class="1">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="1">' + bcsname2 + '</span>'; }

      if(bcs_size==10||bcs_size==22||bcs_size==34||bcs_size==46){
         //var bcsname1_1 = '<span class="2">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="2">' + bcsname2 + '</span>'; }

      if(bcs_size==12||bcs_size==24||bcs_size==36||bcs_size==48){
         //var bcsname1_1 = '<span class="3">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="3">' + bcsname2 + '</span>'; }

      if(bcs_size==14||bcs_size==26||bcs_size==38||bcs_size==50){
         //var bcsname1_1 = '<span class="4">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="4">' + bcsname2 + '</span>'; }

      if(bcs_size==16||bcs_size==28||bcs_size==40||bcs_size==52){
         //var bcsname1_1 = '<span class="5">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="5">' + bcsname2 + '</span>'; }

      if(bcs_size==18||bcs_size==30||bcs_size==42||bcs_size==54){
         //var bcsname1_1 = '<span class="6">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="6">' + bcsname2 + '</span>'; }


      if(bcs_size==20){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p1>' + bcsname1 + '</p1>';
         var bcsname2_1 = '<p1>' + bcsname2 + '</p1>'; }

      if(bcs_size==22){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p2>' + bcsname1 + '</p2>';
         var bcsname2_1 = '<p2>' + bcsname2 + '</p2>'; }

      if(bcs_size==24){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p3>' + bcsname1 + '</p3>';
         var bcsname2_1 = '<p3>' + bcsname2 + '</p3>'; }

      if(bcs_size==26){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p4>' + bcsname1 + '</p4>';
         var bcsname2_1 = '<p4>' + bcsname2 + '</p4>'; }

      if(bcs_size==28){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p5>' + bcsname1 + '</p5>';
         var bcsname2_1 = '<p5>' + bcsname2 + '</p5>'; }

      if(bcs_size==30){                                                        // Add 2017.05.29 for test
         //var bcsname1_1 = '<p6>' + bcsname1 + '</p6>';
         var bcsname2_1 = '<p6>' + bcsname2 + '</p6>'; }


      //if(bname!="詩篇") {
      //   //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname1;
      //}
      //else {
      //   //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname2;
      //}

      //document.getElementById("p2").innerHTML = bcsname3;


      // add 2018.08.16
      //var BCVTName = '<center>' + bname + ' ' + bname3 + ' ' + cname + ':' + sname + '</center>';


      //if(bnum==nowbook && cnum==nowchapter && snum>now_Verse && snum<=now_To_Verse && now_Verse<now_To_Verse) {

      //parseInt(to_snum,10)

      var int_snum_tmp = parseInt(snum,10);
      var int_now_Verse_tmp = parseInt(now_Verse,10);
      var int_now_To_Verse_tmp = parseInt(now_To_Verse,10);

      //&& int_snum_tmp<int_now_To_Verse_tmp
      //int_snum_tmp>int_now_Verse_tmp

      if(bnum==now_Book && cnum==now_Chap && int_snum_tmp>=int_now_Verse_tmp && int_snum_tmp<=int_now_To_Verse_tmp  ) {

         var RC2BName = Read_Book_Chap_Vers_ToVers;

      }
      else {

         var RC2BName = '<center>' + bcsname1_1 + '</center>';  // readchapter2 Book Name

      }


      document.getElementById("p1").innerHTML = RC2BName;  

      //Read_Book_Chap_Vers_ToVers

      var j=sname-1;

//      docObj.writeln('line1 = '+line1);
//      docObj.writeln('line2 = '+line2);
//      docObj.writeln('line3 = '+line3);
//      docObj.writeln('line4 = '+line4);
//      docObj.writeln('disp_secs = '+disp_secs);
//      docObj.writeln('disp_secs_a = '+disp_secs_a);


      // var m = 1;  // Mark temporary
      var Lnum = 1001;
      var Lvers = 2001;
      var Rnum = 3001;
      var Rvers = 4001;

      var Upnum = 50001;    // for Mode_Class use
      var Upvers = 60001;   // for Mode_Class use


      // For clear before display
      document.getElementById("50001").innerHTML = "";
      document.getElementById("50002").innerHTML = "";
      document.getElementById("50003").innerHTML = "";
      document.getElementById("50004").innerHTML = "";
      document.getElementById("50005").innerHTML = "";
      document.getElementById("50006").innerHTML = "";
      document.getElementById("50007").innerHTML = "";
      document.getElementById("50008").innerHTML = "";
      document.getElementById("50009").innerHTML = "";
      document.getElementById("50010").innerHTML = "";
      document.getElementById("50011").innerHTML = "";
      document.getElementById("50012").innerHTML = "";
      document.getElementById("50013").innerHTML = "";
      document.getElementById("50014").innerHTML = "";
      document.getElementById("50015").innerHTML = "";

      document.getElementById("60001").innerHTML = "";
      document.getElementById("60002").innerHTML = "";
      document.getElementById("60003").innerHTML = "";
      document.getElementById("60004").innerHTML = "";
      document.getElementById("60005").innerHTML = "";
      document.getElementById("60006").innerHTML = "";
      document.getElementById("60007").innerHTML = "";
      document.getElementById("60008").innerHTML = "";
      document.getElementById("60009").innerHTML = "";
      document.getElementById("60010").innerHTML = "";
      document.getElementById("60011").innerHTML = "";
      document.getElementById("60012").innerHTML = "";
      document.getElementById("60013").innerHTML = "";
      document.getElementById("60014").innerHTML = "";
      document.getElementById("60015").innerHTML = "";


      for (var i = line3; i < line4 ; i++) { 
      var oneline = profiles[i].substring(profiles[i].indexOf(" "), profiles[i].length);       // 和合本
      var oneline2 = profiles2[i].substring(profiles2[i].indexOf(" "), profiles2[i].length);   // NKJV
      var oneline3 = profiles3[i].substring(profiles3[i].indexOf(" "), profiles3[i].length);   // NIV
      var oneline4 = profiles4[i].substring(profiles4[i].indexOf(" "), profiles4[i].length);   // 呂振中
      var cname_1 = profiles[i].substring(profiles[i].indexOf("^")+1, profiles[i].indexOf(":"));

      j++;

      if(sec_size==8||sec_size==20||sec_size==32||sec_size==44){
         var oneline_1 = '<span class="1">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="1">' + j + '</span>';}

      if(sec_size==10||sec_size==22||sec_size==34||sec_size==46){
         var oneline_1 = '<span class="2">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="2">' + j + '</span>';}

      if(sec_size==12||sec_size==24||sec_size==36||sec_size==48){
         var oneline_1 = '<span class="3">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="3">' + j + '</span>';}

      if(sec_size==14||sec_size==26||sec_size==38||sec_size==50){
         var oneline_1 = '<span class="4">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="4">' + j + '</span>';}

      if(sec_size==16||sec_size==28||sec_size==40||sec_size==52){
         var oneline_1 = '<span class="5">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="5">' + j + '</span>';}

      if(sec_size==18||sec_size==30||sec_size==42||sec_size==54){
         var oneline_1 = '<span class="6">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="6">' + j + '</span>';}



      if(sec_size==20){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p1>' + oneline + '\n' + '</p1>';
         var oneline_2 = '<p1>' + oneline2 + '\n' + '</p1>';
         var oneline_3 = '<p1>' + oneline3 + '\n' + '</p1>';
         var oneline_4 = '<p1>' + oneline4 + '\n' + '</p1>';
         var sj = '<p1>' + j + '</p1>';}

      if(sec_size==22){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p2>' + oneline + '\n' + '</p2>';
         var oneline_2 = '<p2>' + oneline2 + '\n' + '</p2>';
         var oneline_3 = '<p2>' + oneline3 + '\n' + '</p2>';
         var oneline_4 = '<p2>' + oneline4 + '\n' + '</p2>';
         var sj = '<p2>' + j + '</p2>';}

      if(sec_size==24){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p3>' + oneline + '\n' + '</p3>';
         var oneline_2 = '<p3>' + oneline2 + '\n' + '</p3>';
         var oneline_3 = '<p3>' + oneline3 + '\n' + '</p3>';
         var oneline_4 = '<p3>' + oneline4 + '\n' + '</p3>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==26){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p4>' + oneline + '\n' + '</p4>';
         var oneline_2 = '<p4>' + oneline2 + '\n' + '</p4>';
         var oneline_3 = '<p4>' + oneline3 + '\n' + '</p4>';
         var oneline_4 = '<p4>' + oneline4 + '\n' + '</p4>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==28){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p5>' + oneline + '\n' + '</p5>';
         var oneline_2 = '<p5>' + oneline2 + '\n' + '</p5>';
         var oneline_3 = '<p5>' + oneline3 + '\n' + '</p5>';
         var oneline_4 = '<p5>' + oneline4 + '\n' + '</p5>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==30){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p6>' + oneline + '\n' + '</p6>';
         var oneline_2 = '<p6>' + oneline2 + '\n' + '</p6>';
         var oneline_3 = '<p6>' + oneline3 + '\n' + '</p6>';
         var oneline_4 = '<p6>' + oneline4 + '\n' + '</p6>';
         var sj = '<p6>' + j + '</p6>';}


      //var oneline_1_1 = '<table><tr><td valign="top">'+'和合本'+'&nbsp'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      //var oneline_1_2 = '<table><tr><td valign="top">'+'NKJV'+'&nbsp&nbsp&nbsp'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      //var oneline_1_3 = '<table><tr><td valign="top">'+'NIV'+'&nbsp&nbsp&nbsp&nbsp'+sj+'</td><td>'+oneline_3+'</td></tr></table>';

//      var oneline_1_1 = '<table><tr><td valign="top">'+'和合本'+'&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
//      var oneline_1_2 = '<table><tr><td valign="top">'+'NKJV'+'&nbsp&nbsp&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
//      var oneline_1_3 = '<table><tr><td valign="top">'+'NIV'+'&nbsp&nbsp&nbsp&nbsp'+'</td><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';

      var oneline_1_1 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      var oneline_1_2 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      var oneline_1_3 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';
      var oneline_1_4 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_4+'</td></tr></table>';


      var oneline_1_num =  j;           // for Display verse number in div id = "1001"
      var oneline_2_num =  j;           // for Display verse number in div id = "3001"
      var oneline_3_num =  j;           // for Display verse number
      var oneline_4_num =  j;           // for Display verse number
      var oneline_5_num =  j;           // for Display verse number in div id = "50001"
      var oneline_1_vers =  oneline;    // for Display verse content in div id = "2001"
      var oneline_2_vers =  oneline2;    // for Display verse content in div id = "4001"
      var oneline_3_vers =  oneline3;    // for Display verse content
      var oneline_4_vers =  oneline4;    // for Display verse content



      if(j>=int_now_Verse_tmp && j<=int_now_To_Verse_tmp) {  // Add on 2018.08.23 for black font

         if(Mode2_ChineseEng==1 && Mode_Chinese==0){  // Chinese/Eng Mode

            var oneline_5_vers =  '<b>' + oneline2 + '<br>' + oneline + '</b>';    // for Display verse content in div id = "60001"

         }
         else{  // Chinese Mode

            var oneline_5_vers =  '<b>' + oneline + '</b>';    // for Display verse content in div id = "60001"

         }

         //var oneline_5_vers =  '<b>' + oneline2 + '<br>' + oneline + '</b>';    // for Display verse content in div id = "60001"

      }
      else {

         if(Mode2_ChineseEng==1 && Mode_Chinese==0){  // Chinese/Eng Mode

            var oneline_5_vers =  oneline2 + '<br>' + oneline;    // for Display verse content in div id = "60001"

         }
         else{  // Chinese Mode

            var oneline_5_vers =  oneline;    // for Display verse content in div id = "60001"

         }

         //var oneline_5_vers =  oneline2 + '<br>' + oneline;    // for Display verse content in div id = "60001"

      }




      var oneline_1_1T =  j+' '+oneline + '<br>';   //        for Display in div id = "1L" or "1R"
      var oneline_2_2T =  j+' '+oneline2 + '<br>';  // NKJV
      var oneline_3_3T =  j+' '+oneline3 + '<br>';  // NIV
      var oneline_4_4T =  j+' '+oneline4 + '<br>';  // 呂振中


      if(disp_secs==7 && bnum==30 && j>21) {
         break;
      }

      if(disp_secs==7 && bnum==56 && j>25) {
         break;
      }

      if(disp_secs==7 && bnum==62 && j>13) {
         break;
      }

      if(disp_secs==7 && bnum==63 && j>15) {
         break;
      }

      if(disp_secs==7 && bnum==64 && j>25) {
         break;
      }

      // Add on 2018.08.22
      if(disp_secs==15 && bnum==30 && j>21) {   // 原為 disp_secs==7
         break;
      }

      if(disp_secs==15 && bnum==56 && j>25) {
         break;
      }

      if(disp_secs==15 && bnum==62 && j>13) {
         break;
      }

      if(disp_secs==15 && bnum==63 && j>15) {   // 3jn max vers = 15
         break;
      }

      if(disp_secs==15 && bnum==64 && j>25) {   // Jud max vers = 25
         break;
      }



      if(cname==cname_1){

         // Put output section here


         if(Mode_Study==0 && Mode_Class==1) {  // Class Mode

            document.getElementById("container3").scrollTop = 0;

            document.getElementById(Upnum++).innerHTML = oneline_5_num;
            document.getElementById(Upvers++).innerHTML = oneline_5_vers;

         }


         if(document.BV.BibleVersion[0].checked){

            BibleVersion_Disp = 0; // Display NKJV

            clear_area_1L();
            clear_area_1R();
            clear_area_LC();
            clear_area_RC();

            document.getElementById(Lnum++).innerHTML = oneline_1_num;
            document.getElementById(Lvers++).innerHTML = oneline_1_vers;

            document.getElementById(Rnum++).innerHTML = oneline_2_num;
            document.getElementById(Rvers++).innerHTML = oneline_2_vers;

            if(disp_secs_a == "1") {

               document.getElementById("conten1t1").scrollTop = 0;
               document.getElementById("content2").scrollTop = 0;

            }

            //Max_Vers_Record = Lnum;

            //Total_Line_L = Total_Line_L + oneline_1_1T;
            //Total_Line_R = Total_Line_R + oneline_2_2T;
         }

         if(document.BV.BibleVersion[1].checked){

            BibleVersion_Disp = 1; // Display NIV

            clear_area_1L();
            clear_area_1R();
            clear_area_LC();
            clear_area_RC();

            document.getElementById(Lnum++).innerHTML = oneline_1_num;
            document.getElementById(Lvers++).innerHTML = oneline_1_vers;

            document.getElementById(Rnum++).innerHTML = oneline_3_num;
            document.getElementById(Rvers++).innerHTML = oneline_3_vers;

            if(disp_secs_a == "1") {

               document.getElementById("conten1t1").scrollTop = 0;
               document.getElementById("content2").scrollTop = 0;

            }

            //Total_Line_L = Total_Line_L + oneline_1_1T;
            //Total_Line_R = Total_Line_R + oneline_3_3T;

         }

         if(document.BV.BibleVersion[2].checked){

            BibleVersion_Disp = 2; // Display 呂振中譯本

            clear_area_1L();
            clear_area_1R();
            clear_area_LC();
            clear_area_RC();

            document.getElementById(Lnum++).innerHTML = oneline_1_num;
            document.getElementById(Lvers++).innerHTML = oneline_1_vers;

            document.getElementById(Rnum++).innerHTML = oneline_4_num;
            document.getElementById(Rvers++).innerHTML = oneline_4_vers;

            if(disp_secs_a == "1") {

               document.getElementById("conten1t1").scrollTop = 0;
               document.getElementById("content2").scrollTop = 0;

            }

            //Total_Line_L = Total_Line_L + oneline_1_1T;
            //Total_Line_R = Total_Line_R + oneline_4_4T;
         }

         if(document.BV.BibleVersion[3].checked){

            BibleVersion_Disp = 3; // Display 全部版本

            clear_area_L();
            clear_area_R();

            // Mark temporary
            var oneline_1_1TC =  '<span class="smallfont">'+ '和合本' + '</span><br>' + j + ' ' + oneline + '<br>';
            var oneline_2_2TC =  '<span class="smallfont">'+ 'NKJV' + '</span><br>' + j + ' ' + oneline2 + '<br>';
            var oneline_3_3TC =  '<span class="smallfont">'+ 'NIV' + '</span><br>' + j + ' ' + oneline3 + '<br>';
            var oneline_4_4TC =  '<span class="smallfont">'+ '呂振中譯本' + '</span><br>' + j + ' ' + oneline4 + '<br>';

            Total_Line_L = Total_Line_L + oneline_1_1TC + oneline_4_4TC;
            Total_Line_R = Total_Line_R + oneline_2_2TC + oneline_3_3TC;
         }

         // End of output section

         //if(parent.command.document.BV.BibleVersion[3].checked){

         //   var oneline_1_1_v = '<table><tr><td valign="top">'+ '和合本' +'</td></tr></table>';
         //   docObj.writeln(oneline_1_1_v);
         //   docObj.writeln(oneline_1_1);

         //   var oneline_1_4_v = '<table><tr><td valign="top">'+ '呂振中譯本' +'</td></tr></table>';
         //   docObj.writeln(oneline_1_4_v);
         //   docObj.writeln(oneline_1_4);

         //   var oneline_1_2_v = '<table><tr><td valign="top">'+ 'NKJV' +'</td></tr></table>';
         //   docObj2.writeln(oneline_1_2_v);
         //   docObj2.writeln(oneline_1_2);

         //   var oneline_1_3_v = '<table><tr><td valign="top">'+ 'NIV' +'</td></tr></table>';
         //   docObj2.writeln(oneline_1_3_v);
         //   docObj2.writeln(oneline_1_3);

         //}
         //else{

         //   docObj.writeln(oneline_1_1);

         //   if(parent.command.document.BV.BibleVersion[0].checked)
         //      docObj2.writeln(oneline_1_2);
         //   if(parent.command.document.BV.BibleVersion[1].checked)
         //      docObj2.writeln(oneline_1_3);
         //   if(parent.command.document.BV.BibleVersion[2].checked)
         //      docObj2.writeln(oneline_1_4);
         //}
      }      // End of for loop

//      docObj.writeln(oneline_1);

      if(document.BV.BibleVersion[3].checked){  // Display 全部版本


         if(disp_secs_a==1) {

            clear_area_1L();
            clear_area_1R();

            document.getElementById("conten1t1").scrollTop = 0;
            document.getElementById("content2").scrollTop = 0;

            document.getElementById("smallVer1").innerHTML = '和合本';
            document.getElementById("10002").innerHTML = j;
            document.getElementById("10003").innerHTML = oneline;

            document.getElementById("smallVer2").innerHTML = '呂振中譯本';
            document.getElementById("20002").innerHTML = j;
            document.getElementById("20003").innerHTML = oneline4;

            document.getElementById("smallVer3").innerHTML = 'NKJV';
            document.getElementById("30002").innerHTML = j;
            document.getElementById("30003").innerHTML = oneline2;

            document.getElementById("smallVer4").innerHTML = 'NIV';
            document.getElementById("40002").innerHTML = j;
            document.getElementById("40003").innerHTML = oneline3;

         }
         else {

            clear_area_LC();
            clear_area_RC();

            // Mark temporary
            document.getElementById("1L").innerHTML = Total_Line_L;
            document.getElementById("1R").innerHTML = Total_Line_R;

         }

      }  // End of BibleVersion[3].checked

      }


  nowbook = bnum;
  nowchapter = cnum;
  nowsection = snum;

  b_int = bnum;
  c_int = cnum;
  v_int = snum;
  t_int = 0;    // add on 2018.08.16

}  //End of function readchapter2()




function readbook(bnum,cnum,snum) { // for display Book, on top area for input from KeyBoard

   var Total_Line_L = "";  // mark temporary
   var Total_Line_R = "";  // mark temporary 


  sec_size = "24";  // 此版本中無用

  bcs_size = "24";  // 此版本中無用


//  bnum : 經卷
//  cnum : 章
//  snum : 節
 
  if(snum < 1)
    snum = 1;
  if((bnum - 0 < 0) || (bnum - 0 >= 66))
    bnum = 0;
  if((bnum - 0 <= 0) && (cnum - 0 < 0))
    cnum = 0;
  if((bnum - 0 >= 65) && (cnum - 0 >=22))
    cnum = 21;
  if(cnum - 0 < 0) {
      bnum--;
      cnum = book_chapters[bnum+1] - book_chapters[bnum]-1;
  }
  if(cnum - 0 >= book_chapters[bnum+1] - book_chapters[bnum]) {
      bnum++;
      cnum = 0;
  }


  //For Setting Display Verses Number


  var disp_secs = eval(disp_secs_a);
  var line1 = chapter_lines[book_chapters[bnum]+cnum];  
  var line2 = chapter_lines[book_chapters[bnum]+cnum+1];
  var line3 = line1+snum-1;
  var line4 = eval(line3 + disp_secs); // +1 表一次顯示1節，+2 表一次顯示2節  

      if(disp_secs==0){
        line3 = line1;
        line4 = line2;}
   
      if(line3>=31101){
        line3=31101;
        line4=31102;
        snum=21;
      }
      if((line3==31090)&&(disp_secs>11)){   
        line4=31102;
      }
      if((line3==31091)&&(disp_secs>10)){   
        line4=31102;
      }
      if((line3==31092)&&(disp_secs>9)){   
        line4=31102;
      }
      if((line3==31093)&&(disp_secs>8)){   
        line4=31102;
      }
      if((line3==31094)&&(disp_secs>7)){   
        line4=31102;
      }
      if((line3==31095)&&(disp_secs>6)){   
        line4=31102;
      }
      if((line3==31096)&&(disp_secs>5)){
        line4=31102;
      }
      if((line3==31097)&&(disp_secs>4)){
        line4=31102;
      }
      if((line3==31098)&&(disp_secs>3)){
        line4=31102;
      }
      if((line3==31099)&&(disp_secs>2)){
        line4=31102;
      }
      if((line3==31100)&&(disp_secs>1)){
        line4=31102;
      }


//    var bname = profiles[line3].substring(0, profiles[line3].indexOf("^"));

      // 和合本
      var bname = profiles[line3].substring(profiles[line3].indexOf("%")+1, profiles[line3].indexOf("^"));
      var cname = profiles[line3].substring(profiles[line3].indexOf("^")+1, profiles[line3].indexOf(":"));
      var sname = profiles[line3].substring(profiles[line3].indexOf(":")+1, profiles[line3].indexOf(" "));

      // For Display English Book Name & Chapter

      var bname3 = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
      var cname3 = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));

      // NKJV
//      var bname = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
//      var cname = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));
//      var sname = profiles2[line3].substring(profiles2[line3].indexOf(":")+1, profiles2[line3].indexOf(" "));

      // NIV
//      var bname = profiles3[line3].substring(profiles3[line3].indexOf("%")+1, profiles3[line3].indexOf("^"));
//      var cname = profiles3[line3].substring(profiles3[line3].indexOf("^")+1, profiles3[line3].indexOf(":"));
//      var sname = profiles3[line3].substring(profiles3[line3].indexOf(":")+1, profiles3[line3].indexOf(" "));

      Bcsname1 = bname + ' 第' + cname + '章' + ' 第' + sname + '節' + ' ';
      Bcsname2 = bname + ' 第' + cname + '篇' + ' 第' + sname + '節' + ' ';
      Bname = bname;

      var bcsname1 = bname + '</ol>';
      var bcsname2 = bname + '</ol>';

      var bcsname3 = bname3 + '</ol>';


      if(bcs_size==8||bcs_size==20||bcs_size==32||bcs_size==44){
         var bcsname1_1 = '<span class="1">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="1">' + bcsname2 + '</span>'; }

      if(bcs_size==10||bcs_size==22||bcs_size==34||bcs_size==46){
         var bcsname1_1 = '<span class="2">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="2">' + bcsname2 + '</span>'; }

      if(bcs_size==12||bcs_size==24||bcs_size==36||bcs_size==48){
         var bcsname1_1 = '<span class="3">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="3">' + bcsname2 + '</span>'; }

      if(bcs_size==14||bcs_size==26||bcs_size==38||bcs_size==50){
         var bcsname1_1 = '<span class="4">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="4">' + bcsname2 + '</span>'; }

      if(bcs_size==16||bcs_size==28||bcs_size==40||bcs_size==52){
         var bcsname1_1 = '<span class="5">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="5">' + bcsname2 + '</span>'; }

      if(bcs_size==18||bcs_size==30||bcs_size==42||bcs_size==54){
         var bcsname1_1 = '<span class="6">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="6">' + bcsname2 + '</span>'; }


      if(bcs_size==20){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p1>' + bcsname1 + '</p1>';
         var bcsname2_1 = '<p1>' + bcsname2 + '</p1>'; }

      if(bcs_size==22){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p2>' + bcsname1 + '</p2>';
         var bcsname2_1 = '<p2>' + bcsname2 + '</p2>'; }

      if(bcs_size==24){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p3>' + bcsname1 + '</p3>';
         var bcsname2_1 = '<p3>' + bcsname2 + '</p3>'; }

      if(bcs_size==26){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p4>' + bcsname1 + '</p4>';
         var bcsname2_1 = '<p4>' + bcsname2 + '</p4>'; }

      if(bcs_size==28){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p5>' + bcsname1 + '</p5>';
         var bcsname2_1 = '<p5>' + bcsname2 + '</p5>'; }

      if(bcs_size==30){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p6>' + bcsname1 + '</p6>';
         var bcsname2_1 = '<p6>' + bcsname2 + '</p6>'; }


      //if(bname!="詩篇") {
      //   //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname1;
      //}
      //else {
      //   //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname2;
      //}

      //document.getElementById("p2").innerHTML = bcsname3;


      // add 2018.08.15
      var BName = '<center>' + bname + ' ' + bname3 + '</center>';
      document.getElementById("p1").innerHTML = BName;  


      var j=sname-1;


      // var m = 1;  // Mark temporary
      var Lnum = 1001;
      var Lvers = 2001;
      var Rnum = 3001;
      var Rvers = 4001;


      for (var i = line3; i < line4 ; i++) { 
      var oneline = profiles[i].substring(profiles[i].indexOf(" "), profiles[i].length);       // 和合本
      var oneline2 = profiles2[i].substring(profiles2[i].indexOf(" "), profiles2[i].length);   // NKJV
      var oneline3 = profiles3[i].substring(profiles3[i].indexOf(" "), profiles3[i].length);   // NIV
      var oneline4 = profiles4[i].substring(profiles4[i].indexOf(" "), profiles4[i].length);   // 呂振中
      var cname_1 = profiles[i].substring(profiles[i].indexOf("^")+1, profiles[i].indexOf(":"));

      j++;

      if(sec_size==8||sec_size==20||sec_size==32||sec_size==44){
         var oneline_1 = '<span class="1">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="1">' + j + '</span>';}

      if(sec_size==10||sec_size==22||sec_size==34||sec_size==46){
         var oneline_1 = '<span class="2">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="2">' + j + '</span>';}

      if(sec_size==12||sec_size==24||sec_size==36||sec_size==48){
         var oneline_1 = '<span class="3">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="3">' + j + '</span>';}

      if(sec_size==14||sec_size==26||sec_size==38||sec_size==50){
         var oneline_1 = '<span class="4">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="4">' + j + '</span>';}

      if(sec_size==16||sec_size==28||sec_size==40||sec_size==52){
         var oneline_1 = '<span class="5">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="5">' + j + '</span>';}

      if(sec_size==18||sec_size==30||sec_size==42||sec_size==54){
         var oneline_1 = '<span class="6">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="6">' + j + '</span>';}



      if(sec_size==20){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p1>' + oneline + '\n' + '</p1>';
         var oneline_2 = '<p1>' + oneline2 + '\n' + '</p1>';
         var oneline_3 = '<p1>' + oneline3 + '\n' + '</p1>';
         var oneline_4 = '<p1>' + oneline4 + '\n' + '</p1>';
         var sj = '<p1>' + j + '</p1>';}

      if(sec_size==22){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p2>' + oneline + '\n' + '</p2>';
         var oneline_2 = '<p2>' + oneline2 + '\n' + '</p2>';
         var oneline_3 = '<p2>' + oneline3 + '\n' + '</p2>';
         var oneline_4 = '<p2>' + oneline4 + '\n' + '</p2>';
         var sj = '<p2>' + j + '</p2>';}

      if(sec_size==24){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p3>' + oneline + '\n' + '</p3>';
         var oneline_2 = '<p3>' + oneline2 + '\n' + '</p3>';
         var oneline_3 = '<p3>' + oneline3 + '\n' + '</p3>';
         var oneline_4 = '<p3>' + oneline4 + '\n' + '</p3>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==26){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p4>' + oneline + '\n' + '</p4>';
         var oneline_2 = '<p4>' + oneline2 + '\n' + '</p4>';
         var oneline_3 = '<p4>' + oneline3 + '\n' + '</p4>';
         var oneline_4 = '<p4>' + oneline4 + '\n' + '</p4>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==28){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p5>' + oneline + '\n' + '</p5>';
         var oneline_2 = '<p5>' + oneline2 + '\n' + '</p5>';
         var oneline_3 = '<p5>' + oneline3 + '\n' + '</p5>';
         var oneline_4 = '<p5>' + oneline4 + '\n' + '</p5>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==30){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p6>' + oneline + '\n' + '</p6>';
         var oneline_2 = '<p6>' + oneline2 + '\n' + '</p6>';
         var oneline_3 = '<p6>' + oneline3 + '\n' + '</p6>';
         var oneline_4 = '<p6>' + oneline4 + '\n' + '</p6>';
         var sj = '<p6>' + j + '</p6>';}


      var oneline_1_1 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      var oneline_1_2 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      var oneline_1_3 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';
      var oneline_1_4 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_4+'</td></tr></table>';


      var oneline_1_num =  j;           // for Display verse number in div id = "1001"
      var oneline_2_num =  j;           // for Display verse number in div id = "3001"
      var oneline_3_num =  j;           // for Display verse number
      var oneline_4_num =  j;           // for Display verse number
      var oneline_1_vers =  oneline;    // for Display verse content in div id = "2001"
      var oneline_2_vers =  oneline2;    // for Display verse content in div id = "4001"
      var oneline_3_vers =  oneline3;    // for Display verse content
      var oneline_4_vers =  oneline4;    // for Display verse content


      var oneline_1_1T =  j+' '+oneline + '<br>';   //        for Display in div id = "1L" or "1R"
      var oneline_2_2T =  j+' '+oneline2 + '<br>';  // NKJV
      var oneline_3_3T =  j+' '+oneline3 + '<br>';  // NIV
      var oneline_4_4T =  j+' '+oneline4 + '<br>';  // 呂振中


      if(disp_secs==7 && bnum==30 && j>21) {
         break;
      }

      if(disp_secs==7 && bnum==56 && j>25) {
         break;
      }

      if(disp_secs==7 && bnum==62 && j>13) {
         break;
      }

      if(disp_secs==7 && bnum==63 && j>15) {
         break;
      }

      if(disp_secs==7 && bnum==64 && j>25) {
         break;
      }


      if(cname==cname_1){

         // Put output section here

         if(document.BV.BibleVersion[0].checked){

            BibleVersion_Disp = 0; // Display NKJV

         }

         if(document.BV.BibleVersion[1].checked){

            BibleVersion_Disp = 1; // Display NIV

         }

         if(document.BV.BibleVersion[2].checked){

            BibleVersion_Disp = 2; // Display 呂振中譯本

         }

         if(document.BV.BibleVersion[3].checked){

            BibleVersion_Disp = 3; // Display 全部版本

         }

         // End of output section


      }      // End of for loop


      if(document.BV.BibleVersion[3].checked){  // Display 全部版本


         if(disp_secs_a==1) {


         }
         else {


         }

      }  // End of BibleVersion[3].checked

      }

  //nowbook = bnum;
  //nowchapter = cnum;
  //nowsection = snum;
}

function readbookchap(bnum, cnum ,snum) { // for display Book,Chap on top area for input from KeyBoard

   var Total_Line_L = "";  // mark temporary
   var Total_Line_R = "";  // mark temporary 


  sec_size = "24";  // 此版本中無用

  bcs_size = "24";  // 此版本中無用


//  bnum : 經卷
//  cnum : 章
//  snum : 節
 
  if(snum < 1)
    snum = 1;
  if((bnum - 0 < 0) || (bnum - 0 >= 66))
    bnum = 0;
  if((bnum - 0 <= 0) && (cnum - 0 < 0))
    cnum = 0;
  if((bnum - 0 >= 65) && (cnum - 0 >=22))
    cnum = 21;
  if(cnum - 0 < 0) {
      bnum--;
      cnum = book_chapters[bnum+1] - book_chapters[bnum]-1;
  }
  if(cnum - 0 >= book_chapters[bnum+1] - book_chapters[bnum]) {
      bnum++;
      cnum = 0;
  }


  //For Setting Display Verses Number


  var disp_secs = eval(disp_secs_a);
  var line1 = chapter_lines[book_chapters[bnum]+cnum];  
  var line2 = chapter_lines[book_chapters[bnum]+cnum+1];
  var line3 = line1+snum-1;
  var line4 = eval(line3 + disp_secs); // +1 表一次顯示1節，+2 表一次顯示2節  

      if(disp_secs==0){
        line3 = line1;
        line4 = line2;}
   
      if(line3>=31101){
        line3=31101;
        line4=31102;
        snum=21;
      }
      if((line3==31090)&&(disp_secs>11)){   
        line4=31102;
      }
      if((line3==31091)&&(disp_secs>10)){   
        line4=31102;
      }
      if((line3==31092)&&(disp_secs>9)){   
        line4=31102;
      }
      if((line3==31093)&&(disp_secs>8)){   
        line4=31102;
      }
      if((line3==31094)&&(disp_secs>7)){   
        line4=31102;
      }
      if((line3==31095)&&(disp_secs>6)){   
        line4=31102;
      }
      if((line3==31096)&&(disp_secs>5)){
        line4=31102;
      }
      if((line3==31097)&&(disp_secs>4)){
        line4=31102;
      }
      if((line3==31098)&&(disp_secs>3)){
        line4=31102;
      }
      if((line3==31099)&&(disp_secs>2)){
        line4=31102;
      }
      if((line3==31100)&&(disp_secs>1)){
        line4=31102;
      }


//    var bname = profiles[line3].substring(0, profiles[line3].indexOf("^"));

      // 和合本
      var bname = profiles[line3].substring(profiles[line3].indexOf("%")+1, profiles[line3].indexOf("^"));
      var cname = profiles[line3].substring(profiles[line3].indexOf("^")+1, profiles[line3].indexOf(":"));
      var sname = profiles[line3].substring(profiles[line3].indexOf(":")+1, profiles[line3].indexOf(" "));

      // For Display English Book Name & Chapter

      var bname3 = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
      var cname3 = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));

      // NKJV
//      var bname = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
//      var cname = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));
//      var sname = profiles2[line3].substring(profiles2[line3].indexOf(":")+1, profiles2[line3].indexOf(" "));

      // NIV
//      var bname = profiles3[line3].substring(profiles3[line3].indexOf("%")+1, profiles3[line3].indexOf("^"));
//      var cname = profiles3[line3].substring(profiles3[line3].indexOf("^")+1, profiles3[line3].indexOf(":"));
//      var sname = profiles3[line3].substring(profiles3[line3].indexOf(":")+1, profiles3[line3].indexOf(" "));

      Bcsname1 = bname + ' 第' + cname + '章' + ' 第' + sname + '節' + ' ';
      Bcsname2 = bname + ' 第' + cname + '篇' + ' 第' + sname + '節' + ' ';
      Bname = bname;

      var bcsname1 = bname + ' ' + cname + '章' + '</ol>';
      var bcsname2 = bname + ' ' + cname + '篇' + '</ol>';

      var bcsname3 = bname3 + ' Chapter ' + cname3 + '</ol>';

      if(bcs_size==8||bcs_size==20||bcs_size==32||bcs_size==44){
         var bcsname1_1 = '<span class="1">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="1">' + bcsname2 + '</span>'; }

      if(bcs_size==10||bcs_size==22||bcs_size==34||bcs_size==46){
         var bcsname1_1 = '<span class="2">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="2">' + bcsname2 + '</span>'; }

      if(bcs_size==12||bcs_size==24||bcs_size==36||bcs_size==48){
         var bcsname1_1 = '<span class="3">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="3">' + bcsname2 + '</span>'; }

      if(bcs_size==14||bcs_size==26||bcs_size==38||bcs_size==50){
         var bcsname1_1 = '<span class="4">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="4">' + bcsname2 + '</span>'; }

      if(bcs_size==16||bcs_size==28||bcs_size==40||bcs_size==52){
         var bcsname1_1 = '<span class="5">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="5">' + bcsname2 + '</span>'; }

      if(bcs_size==18||bcs_size==30||bcs_size==42||bcs_size==54){
         var bcsname1_1 = '<span class="6">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="6">' + bcsname2 + '</span>'; }


      if(bcs_size==20){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p1>' + bcsname1 + '</p1>';
         var bcsname2_1 = '<p1>' + bcsname2 + '</p1>'; }

      if(bcs_size==22){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p2>' + bcsname1 + '</p2>';
         var bcsname2_1 = '<p2>' + bcsname2 + '</p2>'; }

      if(bcs_size==24){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p3>' + bcsname1 + '</p3>';
         var bcsname2_1 = '<p3>' + bcsname2 + '</p3>'; }

      if(bcs_size==26){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p4>' + bcsname1 + '</p4>';
         var bcsname2_1 = '<p4>' + bcsname2 + '</p4>'; }

      if(bcs_size==28){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p5>' + bcsname1 + '</p5>';
         var bcsname2_1 = '<p5>' + bcsname2 + '</p5>'; }

      if(bcs_size==30){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p6>' + bcsname1 + '</p6>';
         var bcsname2_1 = '<p6>' + bcsname2 + '</p6>'; }


      //if(bname!="詩篇") {
      //   //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname1;
      //}
      //else {
      //   //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname2;
      //}

      //document.getElementById("p2").innerHTML = bcsname3;


      // add 2018.08.15
      var BCName = '<center>' + bname + ' ' + bname3 + ' ' + cname + '</center>';
      document.getElementById("p1").innerHTML = BCName;  


      var j=sname-1;


      // var m = 1;  // Mark temporary
      var Lnum = 1001;
      var Lvers = 2001;
      var Rnum = 3001;
      var Rvers = 4001;


      for (var i = line3; i < line4 ; i++) { 
      var oneline = profiles[i].substring(profiles[i].indexOf(" "), profiles[i].length);       // 和合本
      var oneline2 = profiles2[i].substring(profiles2[i].indexOf(" "), profiles2[i].length);   // NKJV
      var oneline3 = profiles3[i].substring(profiles3[i].indexOf(" "), profiles3[i].length);   // NIV
      var oneline4 = profiles4[i].substring(profiles4[i].indexOf(" "), profiles4[i].length);   // 呂振中
      var cname_1 = profiles[i].substring(profiles[i].indexOf("^")+1, profiles[i].indexOf(":"));

      j++;

      if(sec_size==8||sec_size==20||sec_size==32||sec_size==44){
         var oneline_1 = '<span class="1">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="1">' + j + '</span>';}

      if(sec_size==10||sec_size==22||sec_size==34||sec_size==46){
         var oneline_1 = '<span class="2">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="2">' + j + '</span>';}

      if(sec_size==12||sec_size==24||sec_size==36||sec_size==48){
         var oneline_1 = '<span class="3">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="3">' + j + '</span>';}

      if(sec_size==14||sec_size==26||sec_size==38||sec_size==50){
         var oneline_1 = '<span class="4">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="4">' + j + '</span>';}

      if(sec_size==16||sec_size==28||sec_size==40||sec_size==52){
         var oneline_1 = '<span class="5">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="5">' + j + '</span>';}

      if(sec_size==18||sec_size==30||sec_size==42||sec_size==54){
         var oneline_1 = '<span class="6">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="6">' + j + '</span>';}



      if(sec_size==20){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p1>' + oneline + '\n' + '</p1>';
         var oneline_2 = '<p1>' + oneline2 + '\n' + '</p1>';
         var oneline_3 = '<p1>' + oneline3 + '\n' + '</p1>';
         var oneline_4 = '<p1>' + oneline4 + '\n' + '</p1>';
         var sj = '<p1>' + j + '</p1>';}

      if(sec_size==22){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p2>' + oneline + '\n' + '</p2>';
         var oneline_2 = '<p2>' + oneline2 + '\n' + '</p2>';
         var oneline_3 = '<p2>' + oneline3 + '\n' + '</p2>';
         var oneline_4 = '<p2>' + oneline4 + '\n' + '</p2>';
         var sj = '<p2>' + j + '</p2>';}

      if(sec_size==24){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p3>' + oneline + '\n' + '</p3>';
         var oneline_2 = '<p3>' + oneline2 + '\n' + '</p3>';
         var oneline_3 = '<p3>' + oneline3 + '\n' + '</p3>';
         var oneline_4 = '<p3>' + oneline4 + '\n' + '</p3>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==26){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p4>' + oneline + '\n' + '</p4>';
         var oneline_2 = '<p4>' + oneline2 + '\n' + '</p4>';
         var oneline_3 = '<p4>' + oneline3 + '\n' + '</p4>';
         var oneline_4 = '<p4>' + oneline4 + '\n' + '</p4>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==28){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p5>' + oneline + '\n' + '</p5>';
         var oneline_2 = '<p5>' + oneline2 + '\n' + '</p5>';
         var oneline_3 = '<p5>' + oneline3 + '\n' + '</p5>';
         var oneline_4 = '<p5>' + oneline4 + '\n' + '</p5>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==30){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p6>' + oneline + '\n' + '</p6>';
         var oneline_2 = '<p6>' + oneline2 + '\n' + '</p6>';
         var oneline_3 = '<p6>' + oneline3 + '\n' + '</p6>';
         var oneline_4 = '<p6>' + oneline4 + '\n' + '</p6>';
         var sj = '<p6>' + j + '</p6>';}


      var oneline_1_1 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      var oneline_1_2 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      var oneline_1_3 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';
      var oneline_1_4 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_4+'</td></tr></table>';


      var oneline_1_num =  j;           // for Display verse number in div id = "1001"
      var oneline_2_num =  j;           // for Display verse number in div id = "3001"
      var oneline_3_num =  j;           // for Display verse number
      var oneline_4_num =  j;           // for Display verse number
      var oneline_1_vers =  oneline;    // for Display verse content in div id = "2001"
      var oneline_2_vers =  oneline2;    // for Display verse content in div id = "4001"
      var oneline_3_vers =  oneline3;    // for Display verse content
      var oneline_4_vers =  oneline4;    // for Display verse content


      var oneline_1_1T =  j+' '+oneline + '<br>';   //        for Display in div id = "1L" or "1R"
      var oneline_2_2T =  j+' '+oneline2 + '<br>';  // NKJV
      var oneline_3_3T =  j+' '+oneline3 + '<br>';  // NIV
      var oneline_4_4T =  j+' '+oneline4 + '<br>';  // 呂振中


      if(disp_secs==7 && bnum==30 && j>21) {
         break;
      }

      if(disp_secs==7 && bnum==56 && j>25) {
         break;
      }

      if(disp_secs==7 && bnum==62 && j>13) {
         break;
      }

      if(disp_secs==7 && bnum==63 && j>15) {
         break;
      }

      if(disp_secs==7 && bnum==64 && j>25) {
         break;
      }


      if(cname==cname_1){

         // Put output section here

         if(document.BV.BibleVersion[0].checked){

            BibleVersion_Disp = 0; // Display NKJV

         }

         if(document.BV.BibleVersion[1].checked){

            BibleVersion_Disp = 1; // Display NIV

         }

         if(document.BV.BibleVersion[2].checked){

            BibleVersion_Disp = 2; // Display 呂振中譯本

         }

         if(document.BV.BibleVersion[3].checked){

            BibleVersion_Disp = 3; // Display 全部版本

         }

         // End of output section


      }      // End of for loop


      if(document.BV.BibleVersion[3].checked){  // Display 全部版本


         if(disp_secs_a==1) {


         }
         else {


         }

      }  // End of BibleVersion[3].checked

      }

  //nowbook = bnum;
  //nowchapter = cnum;
  //nowsection = snum;
}

function readbookchapvers(bnum, cnum ,snum) { // for display Book,Chap,Verse on top area for input from KeyBoard

   var Total_Line_L = "";  // mark temporary
   var Total_Line_R = "";  // mark temporary 


  sec_size = "24";  // 此版本中無用

  bcs_size = "24";  // 此版本中無用


//  bnum : 經卷
//  cnum : 章
//  snum : 節
 
  if(snum < 1)
    snum = 1;
  if((bnum - 0 < 0) || (bnum - 0 >= 66))
    bnum = 0;
  if((bnum - 0 <= 0) && (cnum - 0 < 0))
    cnum = 0;
  if((bnum - 0 >= 65) && (cnum - 0 >=22))
    cnum = 21;
  if(cnum - 0 < 0) {
      bnum--;
      cnum = book_chapters[bnum+1] - book_chapters[bnum]-1;
  }
  if(cnum - 0 >= book_chapters[bnum+1] - book_chapters[bnum]) {
      bnum++;
      cnum = 0;
  }


  //For Setting Display Verses Number


  var disp_secs = eval(disp_secs_a);
  var line1 = chapter_lines[book_chapters[bnum]+cnum];  
  var line2 = chapter_lines[book_chapters[bnum]+cnum+1];
  var line3 = line1+snum-1;
  var line4 = eval(line3 + disp_secs); // +1 表一次顯示1節，+2 表一次顯示2節  

      if(disp_secs==0){
        line3 = line1;
        line4 = line2;}
   
      if(line3>=31101){
        line3=31101;
        line4=31102;
        snum=21;
      }
      if((line3==31090)&&(disp_secs>11)){   
        line4=31102;
      }
      if((line3==31091)&&(disp_secs>10)){   
        line4=31102;
      }
      if((line3==31092)&&(disp_secs>9)){   
        line4=31102;
      }
      if((line3==31093)&&(disp_secs>8)){   
        line4=31102;
      }
      if((line3==31094)&&(disp_secs>7)){   
        line4=31102;
      }
      if((line3==31095)&&(disp_secs>6)){   
        line4=31102;
      }
      if((line3==31096)&&(disp_secs>5)){
        line4=31102;
      }
      if((line3==31097)&&(disp_secs>4)){
        line4=31102;
      }
      if((line3==31098)&&(disp_secs>3)){
        line4=31102;
      }
      if((line3==31099)&&(disp_secs>2)){
        line4=31102;
      }
      if((line3==31100)&&(disp_secs>1)){
        line4=31102;
      }


//    var bname = profiles[line3].substring(0, profiles[line3].indexOf("^"));

      // 和合本
      var bname = profiles[line3].substring(profiles[line3].indexOf("%")+1, profiles[line3].indexOf("^"));
      var cname = profiles[line3].substring(profiles[line3].indexOf("^")+1, profiles[line3].indexOf(":"));
      var sname = profiles[line3].substring(profiles[line3].indexOf(":")+1, profiles[line3].indexOf(" "));

      // For Display English Book Name & Chapter

      var bname3 = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
      var cname3 = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));

      // NKJV
//      var bname = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
//      var cname = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));
//      var sname = profiles2[line3].substring(profiles2[line3].indexOf(":")+1, profiles2[line3].indexOf(" "));

      // NIV
//      var bname = profiles3[line3].substring(profiles3[line3].indexOf("%")+1, profiles3[line3].indexOf("^"));
//      var cname = profiles3[line3].substring(profiles3[line3].indexOf("^")+1, profiles3[line3].indexOf(":"));
//      var sname = profiles3[line3].substring(profiles3[line3].indexOf(":")+1, profiles3[line3].indexOf(" "));

      Bcsname1 = bname + ' 第' + cname + '章' + ' 第' + sname + '節' + ' ';
      Bcsname2 = bname + ' 第' + cname + '篇' + ' 第' + sname + '節' + ' ';
      Bname = bname;

      var bcsname1 = bname + ' ' + cname + '章 ' + sname + '節' + '</ol>';
      var bcsname2 = bname + ' ' + cname + '篇 ' + sname + '節' + '</ol>';

      var bcsname3 = bname3 + ' Chapter ' + cname3 + ' Verse ' + sname + '</ol>';

      if(bcs_size==8||bcs_size==20||bcs_size==32||bcs_size==44){
         var bcsname1_1 = '<span class="1">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="1">' + bcsname2 + '</span>'; }

      if(bcs_size==10||bcs_size==22||bcs_size==34||bcs_size==46){
         var bcsname1_1 = '<span class="2">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="2">' + bcsname2 + '</span>'; }

      if(bcs_size==12||bcs_size==24||bcs_size==36||bcs_size==48){
         var bcsname1_1 = '<span class="3">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="3">' + bcsname2 + '</span>'; }

      if(bcs_size==14||bcs_size==26||bcs_size==38||bcs_size==50){
         var bcsname1_1 = '<span class="4">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="4">' + bcsname2 + '</span>'; }

      if(bcs_size==16||bcs_size==28||bcs_size==40||bcs_size==52){
         var bcsname1_1 = '<span class="5">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="5">' + bcsname2 + '</span>'; }

      if(bcs_size==18||bcs_size==30||bcs_size==42||bcs_size==54){
         var bcsname1_1 = '<span class="6">' + bcsname1 + '</span>';
         var bcsname2_1 = '<span class="6">' + bcsname2 + '</span>'; }


      if(bcs_size==20){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p1>' + bcsname1 + '</p1>';
         var bcsname2_1 = '<p1>' + bcsname2 + '</p1>'; }

      if(bcs_size==22){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p2>' + bcsname1 + '</p2>';
         var bcsname2_1 = '<p2>' + bcsname2 + '</p2>'; }

      if(bcs_size==24){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p3>' + bcsname1 + '</p3>';
         var bcsname2_1 = '<p3>' + bcsname2 + '</p3>'; }

      if(bcs_size==26){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p4>' + bcsname1 + '</p4>';
         var bcsname2_1 = '<p4>' + bcsname2 + '</p4>'; }

      if(bcs_size==28){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p5>' + bcsname1 + '</p5>';
         var bcsname2_1 = '<p5>' + bcsname2 + '</p5>'; }

      if(bcs_size==30){                                                        // Add 2017.05.29 for test
         var bcsname1_1 = '<p6>' + bcsname1 + '</p6>';
         var bcsname2_1 = '<p6>' + bcsname2 + '</p6>'; }


      //if(bname!="詩篇") {
      //   //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname1;
      //}
      //else {
      //   //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname2;
      //}

      //document.getElementById("p2").innerHTML = bcsname3;

      //var bcsname1 = bname + ' ' + cname + '章 ' + sname + '節' + '</ol>';


      // add 2018.08.15
      var BCVName = '<center>' + bname + ' ' + bname3 + ' ' + cname + ':' + sname + '</center>';
      document.getElementById("p1").innerHTML = BCVName;  


      var j=sname-1;


      // var m = 1;  // Mark temporary
      var Lnum = 1001;
      var Lvers = 2001;
      var Rnum = 3001;
      var Rvers = 4001;


      for (var i = line3; i < line4 ; i++) { 
      var oneline = profiles[i].substring(profiles[i].indexOf(" "), profiles[i].length);       // 和合本
      var oneline2 = profiles2[i].substring(profiles2[i].indexOf(" "), profiles2[i].length);   // NKJV
      var oneline3 = profiles3[i].substring(profiles3[i].indexOf(" "), profiles3[i].length);   // NIV
      var oneline4 = profiles4[i].substring(profiles4[i].indexOf(" "), profiles4[i].length);   // 呂振中
      var cname_1 = profiles[i].substring(profiles[i].indexOf("^")+1, profiles[i].indexOf(":"));

      j++;

      if(sec_size==8||sec_size==20||sec_size==32||sec_size==44){
         var oneline_1 = '<span class="1">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="1">' + j + '</span>';}

      if(sec_size==10||sec_size==22||sec_size==34||sec_size==46){
         var oneline_1 = '<span class="2">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="2">' + j + '</span>';}

      if(sec_size==12||sec_size==24||sec_size==36||sec_size==48){
         var oneline_1 = '<span class="3">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="3">' + j + '</span>';}

      if(sec_size==14||sec_size==26||sec_size==38||sec_size==50){
         var oneline_1 = '<span class="4">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="4">' + j + '</span>';}

      if(sec_size==16||sec_size==28||sec_size==40||sec_size==52){
         var oneline_1 = '<span class="5">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="5">' + j + '</span>';}

      if(sec_size==18||sec_size==30||sec_size==42||sec_size==54){
         var oneline_1 = '<span class="6">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="6">' + j + '</span>';}



      if(sec_size==20){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p1>' + oneline + '\n' + '</p1>';
         var oneline_2 = '<p1>' + oneline2 + '\n' + '</p1>';
         var oneline_3 = '<p1>' + oneline3 + '\n' + '</p1>';
         var oneline_4 = '<p1>' + oneline4 + '\n' + '</p1>';
         var sj = '<p1>' + j + '</p1>';}

      if(sec_size==22){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p2>' + oneline + '\n' + '</p2>';
         var oneline_2 = '<p2>' + oneline2 + '\n' + '</p2>';
         var oneline_3 = '<p2>' + oneline3 + '\n' + '</p2>';
         var oneline_4 = '<p2>' + oneline4 + '\n' + '</p2>';
         var sj = '<p2>' + j + '</p2>';}

      if(sec_size==24){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p3>' + oneline + '\n' + '</p3>';
         var oneline_2 = '<p3>' + oneline2 + '\n' + '</p3>';
         var oneline_3 = '<p3>' + oneline3 + '\n' + '</p3>';
         var oneline_4 = '<p3>' + oneline4 + '\n' + '</p3>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==26){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p4>' + oneline + '\n' + '</p4>';
         var oneline_2 = '<p4>' + oneline2 + '\n' + '</p4>';
         var oneline_3 = '<p4>' + oneline3 + '\n' + '</p4>';
         var oneline_4 = '<p4>' + oneline4 + '\n' + '</p4>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==28){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p5>' + oneline + '\n' + '</p5>';
         var oneline_2 = '<p5>' + oneline2 + '\n' + '</p5>';
         var oneline_3 = '<p5>' + oneline3 + '\n' + '</p5>';
         var oneline_4 = '<p5>' + oneline4 + '\n' + '</p5>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==30){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p6>' + oneline + '\n' + '</p6>';
         var oneline_2 = '<p6>' + oneline2 + '\n' + '</p6>';
         var oneline_3 = '<p6>' + oneline3 + '\n' + '</p6>';
         var oneline_4 = '<p6>' + oneline4 + '\n' + '</p6>';
         var sj = '<p6>' + j + '</p6>';}


      var oneline_1_1 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      var oneline_1_2 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      var oneline_1_3 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';
      var oneline_1_4 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_4+'</td></tr></table>';


      var oneline_1_num =  j;           // for Display verse number in div id = "1001"
      var oneline_2_num =  j;           // for Display verse number in div id = "3001"
      var oneline_3_num =  j;           // for Display verse number
      var oneline_4_num =  j;           // for Display verse number
      var oneline_1_vers =  oneline;    // for Display verse content in div id = "2001"
      var oneline_2_vers =  oneline2;    // for Display verse content in div id = "4001"
      var oneline_3_vers =  oneline3;    // for Display verse content
      var oneline_4_vers =  oneline4;    // for Display verse content


      var oneline_1_1T =  j+' '+oneline + '<br>';   //        for Display in div id = "1L" or "1R"
      var oneline_2_2T =  j+' '+oneline2 + '<br>';  // NKJV
      var oneline_3_3T =  j+' '+oneline3 + '<br>';  // NIV
      var oneline_4_4T =  j+' '+oneline4 + '<br>';  // 呂振中


      if(disp_secs==7 && bnum==30 && j>21) {
         break;
      }

      if(disp_secs==7 && bnum==56 && j>25) {
         break;
      }

      if(disp_secs==7 && bnum==62 && j>13) {
         break;
      }

      if(disp_secs==7 && bnum==63 && j>15) {
         break;
      }

      if(disp_secs==7 && bnum==64 && j>25) {
         break;
      }


      if(cname==cname_1){

         // Put output section here

         if(document.BV.BibleVersion[0].checked){

            BibleVersion_Disp = 0; // Display NKJV

         }

         if(document.BV.BibleVersion[1].checked){

            BibleVersion_Disp = 1; // Display NIV

         }

         if(document.BV.BibleVersion[2].checked){

            BibleVersion_Disp = 2; // Display 呂振中譯本

         }

         if(document.BV.BibleVersion[3].checked){

            BibleVersion_Disp = 3; // Display 全部版本

         }

         // End of output section


      }      // End of for loop


      if(document.BV.BibleVersion[3].checked){  // Display 全部版本


         if(disp_secs_a==1) {


         }
         else {


         }

      }  // End of BibleVersion[3].checked

      }

  //nowbook = bnum;
  //nowchapter = cnum;
  //nowsection = snum;
}

function readbookchapvers2(bnum, cnum ,snum ,to_snum) { // for display Book,Chap,Verse,To_Verse on top area for input from KeyBoard

   var Total_Line_L = "";  // mark temporary
   var Total_Line_R = "";  // mark temporary 


  sec_size = "24";  // 此版本中無用

  bcs_size = "24";  // 此版本中無用


  if(bnum==63&&cnum==0&&snum==15){   // for 3rd John Chap1 Verse15 特別處理，因該章 中英文聖經節數不同
     snum = 14;
     var Trd_Jn_C1_V15 = 1;
  }


//  bnum : 經卷
//  cnum : 章
//  snum : 節
 
  if(snum < 1)
    snum = 1;
  if((bnum - 0 < 0) || (bnum - 0 >= 66))
    bnum = 0;
  if((bnum - 0 <= 0) && (cnum - 0 < 0))
    cnum = 0;
  if((bnum - 0 >= 65) && (cnum - 0 >=22))
    cnum = 21;
  if(cnum - 0 < 0) {
      bnum--;
      cnum = book_chapters[bnum+1] - book_chapters[bnum]-1;
  }
  if(cnum - 0 >= book_chapters[bnum+1] - book_chapters[bnum]) {
      bnum++;
      cnum = 0;
  }


  //For Setting Display Verses Number


  var disp_secs = eval(disp_secs_a);
  var line1 = chapter_lines[book_chapters[bnum]+cnum];  
  var line2 = chapter_lines[book_chapters[bnum]+cnum+1];
  var line3 = line1+snum-1;
  var line4 = eval(line3 + disp_secs); // +1 表一次顯示1節，+2 表一次顯示2節  

      if(disp_secs==0){
        line3 = line1;
        line4 = line2;}
   
      if(line3>=31101){
        line3=31101;
        line4=31102;
        snum=21;
      }
      if((line3==31090)&&(disp_secs>11)){   
        line4=31102;
      }
      if((line3==31091)&&(disp_secs>10)){   
        line4=31102;
      }
      if((line3==31092)&&(disp_secs>9)){   
        line4=31102;
      }
      if((line3==31093)&&(disp_secs>8)){   
        line4=31102;
      }
      if((line3==31094)&&(disp_secs>7)){   
        line4=31102;
      }
      if((line3==31095)&&(disp_secs>6)){   
        line4=31102;
      }
      if((line3==31096)&&(disp_secs>5)){
        line4=31102;
      }
      if((line3==31097)&&(disp_secs>4)){
        line4=31102;
      }
      if((line3==31098)&&(disp_secs>3)){
        line4=31102;
      }
      if((line3==31099)&&(disp_secs>2)){
        line4=31102;
      }
      if((line3==31100)&&(disp_secs>1)){
        line4=31102;
      }


//    var bname = profiles[line3].substring(0, profiles[line3].indexOf("^"));

      // 和合本
      var bname = profiles[line3].substring(profiles[line3].indexOf("%")+1, profiles[line3].indexOf("^"));
      var cname = profiles[line3].substring(profiles[line3].indexOf("^")+1, profiles[line3].indexOf(":"));
      var sname = profiles[line3].substring(profiles[line3].indexOf(":")+1, profiles[line3].indexOf(" "));

      // For Display English Book Name & Chapter

      var bname3 = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
      var cname3 = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));

      // NKJV
//      var bname = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));
//      var cname = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));
//      var sname = profiles2[line3].substring(profiles2[line3].indexOf(":")+1, profiles2[line3].indexOf(" "));

      // NIV
//      var bname = profiles3[line3].substring(profiles3[line3].indexOf("%")+1, profiles3[line3].indexOf("^"));
//      var cname = profiles3[line3].substring(profiles3[line3].indexOf("^")+1, profiles3[line3].indexOf(":"));
//      var sname = profiles3[line3].substring(profiles3[line3].indexOf(":")+1, profiles3[line3].indexOf(" "));


      if(bnum==8||bnum==9||bnum==10||bnum==11||bnum==12||bnum==13||bnum==45||bnum==46||bnum==51||bnum==52||bnum==53||bnum==54||bnum==59||bnum==60||bnum==61||bnum==62||bnum==63){          // add 26/03/2013
         var bname2a = profiles2[line3].substring(profiles2[line3].indexOf("%")+2, profiles2[line3].indexOf("^"));  // add 26/03/2013
         var bname2b = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("%")+2);   // add 26/03/2013
         var bname2 = bname2b + ' ' +bname2a;                                                                       // add 26/03/2013
      }                                                                                                             // add 26/03/2013
      else {
         var bname2 = profiles2[line3].substring(profiles2[line3].indexOf("%")+1, profiles2[line3].indexOf("^"));   // add 26/03/2013
      }                                                                                                             // add 26/03/2013

      if(bnum==21)                            // add 27/03/2013
         var bname2 = 'Song of Solomon';      // add 27/03/2013

      var cname2 = profiles2[line3].substring(profiles2[line3].indexOf("^")+1, profiles2[line3].indexOf(":"));  // add 19/03/2013
      var sname2 = profiles2[line3].substring(profiles2[line3].indexOf(":")+1, profiles2[line3].indexOf(" "));  // add 19/03/2013

     
      var to_snum_int = parseInt(to_snum,10);
      var sname2_int = parseInt(sname2,10);


      if(to_snum_int>sname2_int)                            // add 28/03/2013
        var snameNew = sname2 + '~' + to_snum;      // add 28/03/2013
      else                                         // add 28/03/2013
        var snameNew = sname2;                      // add 28/03/2013

      if(bnum==30||bnum==56||bnum==62||bnum==63||bnum==64){                   // new
        if(bnum<39){
         var bcsname1 = bname + "&nbsp&nbsp";                 // modified   27/03/2013
         var bcsname1B = bname2 + ' ' + snameNew;                    // add        27/03/2013
        }
        else{
         var bcsname1 = bname + "&nbsp&nbsp";                 // modified   27/03/2013
         var bcsname1B = bname2 + ' ' + snameNew;                    // add        27/03/2013

         //var bcsname1 = '<b>' + bname + "&nbsp&nbsp";                 // modified   27/03/2013
         //var bcsname1B = bname2 + ' ' + snameNew  + '</b></ol>';                    // add        27/03/2013
        }
         //var bcsname1 = bname + ' ' + sname + '節 ' + '    ';                 // modified   27/03/2013
         //var bcsname1B = bname2 + ' ' + sname2  + '</ol>';                    // add        27/03/2013
         //if(bcsname1.length>23){                                                                     // new
         //  var bcsname1 = bname + '' + sname + '節 ' + '    ';                // modified   27/03/2013
         //  var bcsname1B = bname2 + ' ' + sname2  + '</ol>';                } // add        27/03/2013
      }
      else {
        if(bnum<39){
         var bcsname1 = bname + "&nbsp&nbsp";   // modify 19/03/2013
         var bcsname1B = bname2 + ' ' + cname2 + ':' + snameNew;     // add 19/03/2013
        }
        else{
         var bcsname1 = bname + "&nbsp&nbsp";   // modify 19/03/2013
         var bcsname1B = bname2 + ' ' + cname2 + ':' + snameNew;     // add 19/03/2013
        }
         //var bcsname1 = bname + ' ' + cname + '章' + ' ' + sname + '節' ;   // modify 19/03/2013
         //var bcsname1B = bname2 + ' ' + cname + ':' + sname + '</ol>';     // add 19/03/2013
         //if(bcsname1.length>23){                                                                     // new
         //  var bcsname1 = '新約聖經 ' + "&nbsp&nbsp&nbsp" + "&nbsp&nbsp&nbsp" + bname + '' + cname + '章' + '' + sname + '節' + '</ol>'; } // modify 19/03/2013
      }

      var bcsname2 = '<b>' + bname + "&nbsp&nbsp";                  // modified           27/03/2013
      var bcsname2B = bname2 + ' ' + cname2 + ':' + snameNew  + '</b></ol>';                            // add    

      if(Trd_Jn_C1_V15==1){   // for 3rd John Chap1 Verse15 特別處理，因該章 中英文聖經節數不同
         var bcsname1 = bname + "&nbsp&nbsp";   // modify 19/03/2013
         var bcsname1B = bname2 + ' ' + '15'; 
      }

      if(bnum==12&&cnum==20&&snum==31){   // cnum 20 表 21 章 , 經節以 英文聖經為主時,  for 代上21章31節 特別處理，因該章 中英文聖經節數不同 , add 23.5.2013
         var bcsname1 =  bname + "&nbsp&nbsp";   // modify 19/03/2013
         var bcsname1B = bname2 + ' ' + '21:31'; 
      }


   //   Bcsname1 = bname + ' 第' + cname + '章' + ' 第' + sname + '節' + ' ';
   //   Bcsname2 = bname + ' 第' + cname + '篇' + ' 第' + sname + '節' + ' ';
   //   Bname = bname;

   //   var bcsname1 = bname + ' ' + bname3 + " " + cname + ':' + sname + '</ol>';
   //   var bcsname2 = bname + ' ' + bname3 + " " + cname + ':' + sname + '</ol>';

   //   var bcsname3 = bname3 + ' Chapter ' + cname3 + ' Verse ' + sname + '</ol>';

   //   if(bcs_size==8||bcs_size==20||bcs_size==32||bcs_size==44){
   //      var bcsname1_1 = '<span class="1">' + bcsname1 + '</span>';
   //      var bcsname2_1 = '<span class="1">' + bcsname2 + '</span>'; }

   //   if(bcs_size==10||bcs_size==22||bcs_size==34||bcs_size==46){
   //      var bcsname1_1 = '<span class="2">' + bcsname1 + '</span>';
   //      var bcsname2_1 = '<span class="2">' + bcsname2 + '</span>'; }

   //   if(bcs_size==12||bcs_size==24||bcs_size==36||bcs_size==48){
   //      var bcsname1_1 = '<span class="3">' + bcsname1 + '</span>';
   //      var bcsname2_1 = '<span class="3">' + bcsname2 + '</span>'; }

   //   if(bcs_size==14||bcs_size==26||bcs_size==38||bcs_size==50){
   //      var bcsname1_1 = '<span class="4">' + bcsname1 + '</span>';
   //      var bcsname2_1 = '<span class="4">' + bcsname2 + '</span>'; }

   //   if(bcs_size==16||bcs_size==28||bcs_size==40||bcs_size==52){
   //      var bcsname1_1 = '<span class="5">' + bcsname1 + '</span>';
   //      var bcsname2_1 = '<span class="5">' + bcsname2 + '</span>'; }

   //   if(bcs_size==18||bcs_size==30||bcs_size==42||bcs_size==54){
   //      var bcsname1_1 = '<span class="6">' + bcsname1 + '</span>';
   //      var bcsname2_1 = '<span class="6">' + bcsname2 + '</span>'; }


   //   if(bcs_size==20){                                                        // Add 2017.05.29 for test
   //      var bcsname1_1 = '<p1>' + bcsname1 + '</p1>';
   //      var bcsname2_1 = '<p1>' + bcsname2 + '</p1>'; }

   //   if(bcs_size==22){                                                        // Add 2017.05.29 for test
   //      var bcsname1_1 = '<p2>' + bcsname1 + '</p2>';
   //      var bcsname2_1 = '<p2>' + bcsname2 + '</p2>'; }

   //   if(bcs_size==24){                                                        // Add 2017.05.29 for test
   //      var bcsname1_1 = '<p3>' + bcsname1 + '</p3>';
   //      var bcsname2_1 = '<p3>' + bcsname2 + '</p3>'; }

   //   if(bcs_size==26){                                                        // Add 2017.05.29 for test
   //      var bcsname1_1 = '<p4>' + bcsname1 + '</p4>';
   //      var bcsname2_1 = '<p4>' + bcsname2 + '</p4>'; }

   //   if(bcs_size==28){                                                        // Add 2017.05.29 for test
   //      var bcsname1_1 = '<p5>' + bcsname1 + '</p5>';
   //      var bcsname2_1 = '<p5>' + bcsname2 + '</p5>'; }

   //   if(bcs_size==30){                                                        // Add 2017.05.29 for test
   //      var bcsname1_1 = '<p6>' + bcsname1 + '</p6>';
   //      var bcsname2_1 = '<p6>' + bcsname2 + '</p6>'; }


      var bcsname1_1 =  bcsname1 + bcsname1B ;   // modify 19/03/2013
      var bcsname2_1 =  bcsname2 + bcsname2B ;   // modify 27/03/2013


      //if(bname!="詩篇") {
      //   //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname1_1;
      //}
      //else {
      //   //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
      //   document.getElementById("p1").innerHTML = bcsname2_1;
      //}

      //document.getElementById("p2").innerHTML = bcsname3;


      //var bcsname1_1 =  bcsname1 + bcsname1B ;   // modify 19/03/2013

      // add 2018.08.15
      //var BCVTName = '<center>' + bname + ' ' + bname3 + ' ' + cname + ':' + sname + '</center>';
      var BCVTName = '<center>' + bcsname1_1 + '</center>';
      document.getElementById("p1").innerHTML = BCVTName;  


      var j=sname-1;


      // var m = 1;  // Mark temporary
      var Lnum = 1001;
      var Lvers = 2001;
      var Rnum = 3001;
      var Rvers = 4001;


      for (var i = line3; i < line4 ; i++) { 
      var oneline = profiles[i].substring(profiles[i].indexOf(" "), profiles[i].length);       // 和合本
      var oneline2 = profiles2[i].substring(profiles2[i].indexOf(" "), profiles2[i].length);   // NKJV
      var oneline3 = profiles3[i].substring(profiles3[i].indexOf(" "), profiles3[i].length);   // NIV
      var oneline4 = profiles4[i].substring(profiles4[i].indexOf(" "), profiles4[i].length);   // 呂振中
      var cname_1 = profiles[i].substring(profiles[i].indexOf("^")+1, profiles[i].indexOf(":"));

      j++;

      if(sec_size==8||sec_size==20||sec_size==32||sec_size==44){
         var oneline_1 = '<span class="1">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="1">' + j + '</span>';}

      if(sec_size==10||sec_size==22||sec_size==34||sec_size==46){
         var oneline_1 = '<span class="2">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="2">' + j + '</span>';}

      if(sec_size==12||sec_size==24||sec_size==36||sec_size==48){
         var oneline_1 = '<span class="3">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="3">' + j + '</span>';}

      if(sec_size==14||sec_size==26||sec_size==38||sec_size==50){
         var oneline_1 = '<span class="4">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="4">' + j + '</span>';}

      if(sec_size==16||sec_size==28||sec_size==40||sec_size==52){
         var oneline_1 = '<span class="5">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="5">' + j + '</span>';}

      if(sec_size==18||sec_size==30||sec_size==42||sec_size==54){
         var oneline_1 = '<span class="6">' + oneline + '\n' + '</span>';
         var oneline_2 = '<span class="1">' + oneline2 + '\n' + '</span>';
         var oneline_3 = '<span class="1">' + oneline3 + '\n' + '</span>';
         var oneline_4 = '<span class="1">' + oneline4 + '\n' + '</span>';
         var sj = '<span class="6">' + j + '</span>';}



      if(sec_size==20){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p1>' + oneline + '\n' + '</p1>';
         var oneline_2 = '<p1>' + oneline2 + '\n' + '</p1>';
         var oneline_3 = '<p1>' + oneline3 + '\n' + '</p1>';
         var oneline_4 = '<p1>' + oneline4 + '\n' + '</p1>';
         var sj = '<p1>' + j + '</p1>';}

      if(sec_size==22){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p2>' + oneline + '\n' + '</p2>';
         var oneline_2 = '<p2>' + oneline2 + '\n' + '</p2>';
         var oneline_3 = '<p2>' + oneline3 + '\n' + '</p2>';
         var oneline_4 = '<p2>' + oneline4 + '\n' + '</p2>';
         var sj = '<p2>' + j + '</p2>';}

      if(sec_size==24){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p3>' + oneline + '\n' + '</p3>';
         var oneline_2 = '<p3>' + oneline2 + '\n' + '</p3>';
         var oneline_3 = '<p3>' + oneline3 + '\n' + '</p3>';
         var oneline_4 = '<p3>' + oneline4 + '\n' + '</p3>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==26){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p4>' + oneline + '\n' + '</p4>';
         var oneline_2 = '<p4>' + oneline2 + '\n' + '</p4>';
         var oneline_3 = '<p4>' + oneline3 + '\n' + '</p4>';
         var oneline_4 = '<p4>' + oneline4 + '\n' + '</p4>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==28){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p5>' + oneline + '\n' + '</p5>';
         var oneline_2 = '<p5>' + oneline2 + '\n' + '</p5>';
         var oneline_3 = '<p5>' + oneline3 + '\n' + '</p5>';
         var oneline_4 = '<p5>' + oneline4 + '\n' + '</p5>';
         var sj = '<p3>' + j + '</p3>';}

      if(sec_size==30){                                                        // Add 2017.05.29 for test
         var oneline_1 = '<p6>' + oneline + '\n' + '</p6>';
         var oneline_2 = '<p6>' + oneline2 + '\n' + '</p6>';
         var oneline_3 = '<p6>' + oneline3 + '\n' + '</p6>';
         var oneline_4 = '<p6>' + oneline4 + '\n' + '</p6>';
         var sj = '<p6>' + j + '</p6>';}


      var oneline_1_1 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_1+'</td></tr></table>';
      var oneline_1_2 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_2+'</td></tr></table>';
      var oneline_1_3 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_3+'</td></tr></table>';
      var oneline_1_4 = '<table><tr><td valign="top">'+sj+'</td><td>'+oneline_4+'</td></tr></table>';


      var oneline_1_num =  j;           // for Display verse number in div id = "1001"
      var oneline_2_num =  j;           // for Display verse number in div id = "3001"
      var oneline_3_num =  j;           // for Display verse number
      var oneline_4_num =  j;           // for Display verse number
      var oneline_1_vers =  oneline;    // for Display verse content in div id = "2001"
      var oneline_2_vers =  oneline2;    // for Display verse content in div id = "4001"
      var oneline_3_vers =  oneline3;    // for Display verse content
      var oneline_4_vers =  oneline4;    // for Display verse content


      var oneline_1_1T =  j+' '+oneline + '<br>';   //        for Display in div id = "1L" or "1R"
      var oneline_2_2T =  j+' '+oneline2 + '<br>';  // NKJV
      var oneline_3_3T =  j+' '+oneline3 + '<br>';  // NIV
      var oneline_4_4T =  j+' '+oneline4 + '<br>';  // 呂振中


      if(disp_secs==7 && bnum==30 && j>21) {
         break;
      }

      if(disp_secs==7 && bnum==56 && j>25) {
         break;
      }

      if(disp_secs==7 && bnum==62 && j>13) {
         break;
      }

      if(disp_secs==7 && bnum==63 && j>15) {
         break;
      }

      if(disp_secs==7 && bnum==64 && j>25) {
         break;
      }


      if(cname==cname_1){

         // Put output section here

         //if(document.BV.BibleVersion[0].checked){

         //   BibleVersion_Disp = 0; // Display NKJV

         //}

         //if(document.BV.BibleVersion[1].checked){

         //   BibleVersion_Disp = 1; // Display NIV

         //}

         //if(document.BV.BibleVersion[2].checked){

         //   BibleVersion_Disp = 2; // Display 呂振中譯本

         //}

         //if(document.BV.BibleVersion[3].checked){

         //   BibleVersion_Disp = 3; // Display 全部版本

         //}

         // End of output section


      }      // End of for loop


      //if(document.BV.BibleVersion[3].checked){  // Display 全部版本


      //   if(disp_secs_a==1) {


      //   }
      //   else {


      //   }

      //}  // End of BibleVersion[3].checked

      }

  //nowbook = bnum;
  //nowchapter = cnum;
  //nowsection = snum;
}


function writehead(word1) {
  docObj_h.open();

  if(head_size<42)
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
     'h1{ font-size:30pt }\n' + 'h2{ font-size:32pt }\n' + 'h3{ font-size:34pt }\n' +
     'h4{ font-size:36pt }\n' + 'h5{ font-size:38pt }\n' + 'h6{ font-size:40pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');
  else if(head_size<54)
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
     'h1{ font-size:42pt }\n' + 'h2{ font-size:44pt }\n' + 'h3{ font-size:46pt }\n' +
     'h4{ font-size:48pt }\n' + 'h5{ font-size:50pt }\n' + 'h6{ font-size:52pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');
  else if(head_size<66)
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
     'h1{ font-size:54pt }\n' + 'h2{ font-size:56pt }\n' + 'h3{ font-size:58pt }\n' +
     'h4{ font-size:60pt }\n' + 'h5{ font-size:62pt }\n' + 'h6{ font-size:64pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');
  else
     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
     'h1{ font-size:66pt }\n' + 'h2{ font-size:68pt }\n' + 'h3{ font-size:70pt }\n' +
     'h4{ font-size:72pt }\n' + 'h5{ font-size:74pt }\n' + 'h6{ font-size:76pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');


  if(head_size==30||head_size==42||head_size==54||head_size==66)
     var word_1 = '<center><h1><u><b>' + word1 + '</b></u></h1></ol></center>';

  if(head_size==32||head_size==44||head_size==56||head_size==68)
     var word_1 = '<center><h2><u><b>' + word1 + '</b></u></h2></ol></center>';

  if(head_size==34||head_size==46||head_size==58||head_size==70)
     var word_1 = '<center><h3><u><b>' + word1 + '</b></u></h3></ol></center>';

  if(head_size==36||head_size==48||head_size==60||head_size==72)
     var word_1 = '<center><h4><u><b>' + word1 + '</b></u></h4></ol></center>';

  if(head_size==38||head_size==50||head_size==62||head_size==74)
     var word_1 = '<center><h5><u><b>' + word1 + '</b></u></h5></ol></center>';

  if(head_size==40||head_size==52||head_size==64||head_size==76)
     var word_1 = '<center><h6><u><b>' + word1 + '</b></u></h6></ol></center>';

  docObj_h.writeln(word_1.fontcolor(head_color));

  docObj_h.writeln('\n</BODY>\n</HTML>');
  docObj_h.close();
}

function writebody(word1) {
  docObj.open();

  if(sing_size<42)
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
     'h1{ font-size:30pt }\n' + 'h2{ font-size:32pt }\n' + 'h3{ font-size:34pt }\n' +
     'h4{ font-size:36pt }\n' + 'h5{ font-size:38pt }\n' + 'h6{ font-size:40pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');
  else if(sing_size<54)
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
     'h1{ font-size:42pt }\n' + 'h2{ font-size:44pt }\n' + 'h3{ font-size:46pt }\n' +
     'h4{ font-size:48pt }\n' + 'h5{ font-size:50pt }\n' + 'h6{ font-size:52pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');
  else
     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
     'h1{ font-size:54pt }\n' + 'h2{ font-size:56pt }\n' + 'h3{ font-size:58pt }\n' +
     'h4{ font-size:60pt }\n' + 'h5{ font-size:62pt }\n' + 'h6{ font-size:64pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');

  if(sing_size==30||sing_size==42||sing_size==54){
     var word_1 = '<center><h1><b>' + word1 + '</b></h1></ol></center>';
     var word_2 = '<center><h1><b>' + "唱 詩" + '</b></h1></ol></center>'; }

  if(sing_size==32||sing_size==44||sing_size==56){
     var word_1 = '<center><h2><b>' + word1 + '</b></h2></ol></center>';
     var word_2 = '<center><h2><b>' + "唱 詩" + '</b></h2></ol></center>'; }

  if(sing_size==34||sing_size==46||sing_size==58){
     var word_1 = '<center><h3><b>' + word1 + '</b></h3></ol></center>';
     var word_2 = '<center><h3><b>' + "唱 詩" + '</b></h3></ol></center>'; }

  if(sing_size==36||sing_size==48||sing_size==60){
     var word_1 = '<center><h4><b>' + word1 + '</b></h4></ol></center>';
     var word_2 = '<center><h4><b>' + "唱 詩" + '</b></h4></ol></center>'; }

  if(sing_size==38||sing_size==50||sing_size==62){
     var word_1 = '<center><h5><b>' + word1 + '</b></h5></ol></center>';
     var word_2 = '<center><h5><b>' + "唱 詩" + '</b></h5></ol></center>'; }

  if(sing_size==40||sing_size==52||sing_size==64){
     var word_1 = '<center><h6><b>' + word1 + '</b></h6></ol></center>';
     var word_2 = '<center><h6><b>' + "唱 詩" + '</b></h6></ol></center>'; }

  docObj.writeln(word_2.fontcolor(sing_color));
  docObj.writeln(word_1.fontcolor(sing_color));

  docObj.writeln('\n</BODY>\n</HTML>');
  docObj.close();
}

function writebody2(word1) {
  docObj.open();

     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
     'h1{ font-size:30pt }\n' + 'h2{ font-size:32pt }\n' + 'h3{ font-size:34pt }\n' +
     'h4{ font-size:36pt }\n' + 'h5{ font-size:38pt }\n' + 'h6{ font-size:40pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');


  docObj.writeln(word1.fontcolor(sing_color));
//  docObj.writeln(word_1.fontcolor(sing_color));

  docObj.writeln('\n</BODY>\n</HTML>');
  docObj.close();
}

function pray() {
  docObj.open();
  docObj_h.open();


     docObj.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
     '.30{ font-size:30pt }\n' + '.32{ font-size:32pt }\n' + '.34{ font-size:34pt }\n' +
     '.36{ font-size:36pt }\n' + '.38{ font-size:38pt }\n' + '.40{ font-size:40pt }\n' +
     '.42{ font-size:42pt }\n' + '.44{ font-size:44pt }\n' + '.46{ font-size:46pt }\n' +
     '.48{ font-size:48pt }\n' + '.50{ font-size:50pt }\n' + '.52{ font-size:52pt }\n' +
     '.54{ font-size:54pt }\n' + '.56{ font-size:56pt }\n' + '.58{ font-size:58pt }\n' +
     '.60{ font-size:60pt }\n' + '.62{ font-size:62pt }\n' + '.64{ font-size:64pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');

     docObj_h.writeln('<HTML>\n<HEAD>\n' +
     '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
     '.30{ font-size:30pt }\n' + '.32{ font-size:32pt }\n' + '.34{ font-size:34pt }\n' +
     '.36{ font-size:36pt }\n' + '.38{ font-size:38pt }\n' + '.40{ font-size:40pt }\n' +
     '.42{ font-size:42pt }\n' + '.44{ font-size:44pt }\n' + '.46{ font-size:46pt }\n' +
     '.48{ font-size:48pt }\n' + '.50{ font-size:50pt }\n' + '.52{ font-size:52pt }\n' +
     '.54{ font-size:54pt }\n' + '.56{ font-size:56pt }\n' + '.58{ font-size:58pt }\n' +
     '.60{ font-size:60pt }\n' + '.62{ font-size:62pt }\n' + '.64{ font-size:64pt }\n' +
     '</style>\n' +
     '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
     '<BODY BGCOLOR=#00008f TEXT=YELLOW >');


  if(pray_size==30){
    var word_0 = '<span class="30"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="30">'; }

  if(pray_size==32){
    var word_0 = '<span class="32"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="32">'; }

  if(pray_size==34){
    var word_0 = '<span class="34"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="34">'; }

  if(pray_size==36){
    var word_0 = '<span class="36"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="36">'; }

  if(pray_size==38){
    var word_0 = '<span class="38"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="38">'; }

  if(pray_size==40){
    var word_0 = '<span class="40"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="40">'; }

  if(pray_size==42){
    var word_0 = '<span class="42"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="42">'; }

  if(pray_size==44){
    var word_0 = '<span class="44"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="44">'; }

  if(pray_size==46){
    var word_0 = '<span class="46"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="46">'; }

  if(pray_size==48){
    var word_0 = '<span class="48"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="48">'; }

  if(pray_size==50){
    var word_0 = '<span class="50"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="50">'; }

  if(pray_size==52){
    var word_0 = '<span class="52"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="52">'; }

  if(pray_size==54){
    var word_0 = '<span class="54"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="54">'; }

  if(pray_size==56){
    var word_0 = '<span class="56"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="56">'; }

  if(pray_size==58){
    var word_0 = '<span class="58"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="58">'; }

  if(pray_size==60){
    var word_0 = '<span class="60"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="60">'; }

  if(pray_size==62){
    var word_0 = '<span class="62"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="62">'; }

  if(pray_size==64){
    var word_0 = '<span class="64"><font color=ffffff><b>'+"禱告方式"+'</b></font></span>';
    var word_a = '<table class="64">'; }

  var word_b = '<tr><td><sup><font color=ffffff>'+"開始時唸："+'</font></sup></td>'+'<td><font color=fff000>'+"奉主耶穌聖名禱告" + '</font></td></tr>';
  var word_d = '<tr><td><sup><font color=ffffff>'+"反覆的唸："+'</font></sup></td>'+'<td><font color=fff000>'+"哈利路亞，讚美主耶穌" + '</font></td></tr>';
  var word_f = '<tr><td><sup><font color=ffffff>'+"結束時唸："+'</font></sup></td>'+'<td><font color=fff000>'+"阿們" + '</font></td></tr></table>';


     var word_01 = '<center>' + word_0 + '</center>';
     var word_a1 = '<center>' + word_a;
     var word_b1 = word_b ;
     var word_d1 = word_d ;
     var word_f1 = word_f + '</center>'; 

  docObj_h.writeln(word_01);
  docObj.writeln(word_a1);
  docObj.writeln(word_b1);
  docObj.writeln(word_d1);
  docObj.writeln(word_f1);


  docObj.writeln('\n</BODY>\n</HTML>');
  docObj.close();
  docObj_h.writeln('\n</BODY>\n</HTML>');
  docObj_h.close();
}



function Encrypt_and_Save() {

   // Encrypt

   //localStorage.Note3_Content = document.ANNO_FORM.A1.value;

   //var Nametext_input = document.getElementById("FirstName").value; 
   var Nametext_input = document.getElementById("A1").value; 

   var Key_input = document.getElementById("Key").value; 

   var encryptedName = CryptoJS.AES.encrypt(Nametext_input, Key_input);

   //encryptedName = CryptoJS.AES.encrypt(Nametext_input, 'secret key 123');

   var encryptedName_Str = encryptedName.toString();

   //Encrypted_Name = encryptedName;

   //Encrypted_Name = encryptedName_Str;

   //document.getElementById("Encrypted_Name").innerHTML = encryptedName_Str;

   // Save to LocalStorage

   localStorage.MyNote = encryptedName;

}

function Read_and_Decrypt() {

   // Read from LocalStorage

   // document.getElementById("A1").value = localStorage.Note3_Content;

   if(localStorage.MyNote) {
      //localStorage.Name = localStorage.Name;
   }else {
      localStorage.MyNote = '';
   }

   var encryptedName = localStorage.MyNote;


   // Decrypt
   //var decryptedName  = CryptoJS.AES.decrypt(Encrypted_Name.toString(), 'secret key 123'); // secret key 123
   //var decryptedName  = CryptoJS.AES.decrypt(Encrypted_Name.toString(), 'secret key 123'); // secret key 123
   //var decryptedName  = CryptoJS.AES.decrypt(Encrypted_Name, 'secret key 123'); // secret key 123

   var Key_input = document.getElementById("Key").value;

   var decryptedName  = CryptoJS.AES.decrypt(encryptedName.toString(), Key_input); // secret key 123

   var decryptedName_Str = decryptedName.toString(CryptoJS.enc.Utf8);

   //document.getElementById("Decrypted_Name").innerHTML = decryptedName_Str;
   document.getElementById("A1").value = decryptedName_Str;

}





// Determine the type of search, and make
// sure the user has entered something
function validate(entry) {

  if(entry=='MyNote') {

     document.getElementById("search_result").innerHTML = '';

     document.getElementById("My_Note").style.visibility='visible';
     document.getElementById("My_Note").style.height = "92%";

  }
  else {

     document.getElementById("My_Note").style.visibility='hidden';
     document.getElementById("My_Note").style.height = "0%";

     if (entry.charAt(0) == "+") {
       entry = entry.substring(1,entry.length);
       searchType = SEARCHALL;
       }
     else if (entry.substring(0,4) == "url:") {
       entry = entry.substring(5,entry.length);
       searchType = SEARCHURL;
       }
     else { searchType = SEARCHANY; }
     while (entry.charAt(0) == ' ') {
       entry = entry.substring(1,entry.length);
       document.search.query.value = entry;
       }
     while (entry.charAt(entry.length - 1) == ' ') {
       entry = entry.substring(0,entry.length - 1);
       document.search.query.value = entry;
       }
   /*  if (entry.length < 3) {
       alert("You cannot search strings that small. Elaborate a little.");
       document.search.query.focus();
       return;
       }
   */  convertString(entry);

  } // End of if(entry=='MyNote')

} // End of function validate(entry)

// Put the search terms in an array and
// and call appropriate search algorithm
function convertString(reentry) {
  var searchArray = reentry.split(" ");
  if (searchType == (SEARCHANY | SEARCHALL)) { requireAll(searchArray); }
  else { allowAny(searchArray); }
  }

// Define a function to perform a search that requires
// a match of any of the terms the user provided
function allowAny(t) {
  var findings = new Array(0);

  nowbook = 0;
  nowchapter = 0;
  for (i = 0; i < profiles.length; i++) {
    var oneline = profiles[i];
    var ok = false;
    var compareElement  = profiles[i].toUpperCase();
    if(searchType == SEARCHANY) { var refineElement  = compareElement.substring(0,compareElement.indexOf('|HTTP')); }
    else { var refineElement = compareElement.substring(compareElement.indexOf('|HTTP'), compareElement.length); }
    for (j = 0; j < t.length; j++) {
      var compareString = t[j];
      var temp = "";

//      if (profiles[i].indexOf(document.search.query.value) != -1) {
      if (compareElement.indexOf(compareString) != -1) {
      	ok = true;
        while(chapter_lines[book_chapters[nowbook]+nowchapter+1] < i) {
       	  nowchapter++;
          if(nowchapter + book_chapters[nowbook] > book_chapters[nowbook+1]) {
      	    nowchapter = 0;
      	    nowbook++;
          }
        }
        findbook[findings.length] = nowbook;
        findchapter[findings.length] = nowchapter;

        while(oneline.indexOf(compareString) != -1) {
          temp += oneline.substring(0, oneline.indexOf(compareString)) + 
            '<font color="ff0000">' + compareString + '</font>';
        
          oneline = oneline.substring(oneline.indexOf(compareString)+compareString.length, oneline.length);
        }
        temp += oneline;
        oneline = temp;
//        findings[findings.length] = profiles[i];
//        break;
        }
      }
      if(ok)
        findings[findings.length] = oneline;
    }
  verifyManage(findings);
  }

// Define a function to perform a search that requires
// a match of all terms the user provided
function requireAll(t) {
  var findings = new Array();
  var k = 0;

  nowbook = 0;
  nowchapter = 0;
  for (i = 0; i < profiles.length; i++) {
    var allConfirmation = true;
    var allString       = profiles[i];
    var refineAllString = allString.substring(0,allString.indexOf(' '));
    for (j = 0; j < t.length; j++) {
      var allElement = t[j];
      if (refineAllString.indexOf(allElement) == -1) {
        allConfirmation = false;
        continue;
        }
      }
    if (allConfirmation) {
      while(chapter_lines[book_chapters[nowbook]+nowchapter+1] < i) {
      	nowchapter++;
      	if(nowchapter + book_chapters[nowbook] > book_chapters[nowbook+1]) {
      	  nowchapter = 0;
      	  nowbook++;
      	}
      }
      findbook[k] = nowbook;
      findchapter[k++] = nowchapter;
      findings[findings.length] = profiles[i];
//      docObj.writeln('k = ' + k + ' findbook[k] = ' + findbook[k] + 'findchapter[k] = ' + findchapter[k] + 
//      'findings[findings.length] = ' + findings[findings.length-1] + ' <br />\n');
      }
    }
  verifyManage(findings);
  }

// Determine whether the search was successful
// If so print the results; if not, indicate that, too
function verifyManage(resultSet) {
  if (resultSet.length == 0) { noMatch(); }
  else {
    copyArray = resultSet;
    formatResults(copyArray, currentMatch, showMatches);
    }
  }

// Define a function that indicates that the returned no results
function noMatch() {
  //docObj.open();
  //docObj.writeln('<HTML><HEAD>' + 
  //  '<meta http-equiv="Content-Type" content="text/html; charset=big5">' +
  //  '<TITLE>Search Results</TITLE></HEAD>' +
  //  '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">' +
//    profiles[0] +
  //  '<TABLE WIDTH=90% BORDER=0 ALIGN=CENTER><TR><TD VALIGN=TOP><FONT FACE=Arial><B><DL>' +
  //  '<HR NOSHADE WIDTH=100%>"' + document.search.query.value +
  //  '" returned no results.<HR NOSHADE WIDTH=100%></TD></TR></TABLE></BODY></HTML>');
  //docObj.close();
  //document.search.query.select();

   document.getElementById("search_result").innerHTML = '<b><center>'+'無符合之資料'+'</center></b>';

}

// Define a function to print the results of a successful search
function formatResults(results, reference, offset) {
  var currentRecord = (results.length < reference + offset ? results.length : reference + offset);

  var text_result="";

  // For Setting Search's Verse Font Size
  //if(parent.command.document.SVS.SearchVerseSize[0].checked)
  //   search_sec_size = "14";
  //if(parent.command.document.SVS.SearchVerseSize[1].checked)
  //   search_sec_size = "16";
  //if(parent.command.document.SVS.SearchVerseSize[2].checked)
  //   search_sec_size = "18";
  //if(parent.command.document.SVS.SearchVerseSize[3].checked)
  //   search_sec_size = "20";
  //if(parent.command.document.SVS.SearchVerseSize[4].checked)
  //   search_sec_size = "22";
  //if(parent.command.document.SVS.SearchVerseSize[5].checked)
  //   search_sec_size = "24";

  //docObj.open();
  //docObj.writeln('<HTML>\n<HEAD>\n<TITLE>Search Results</TITLE>\n' + 
  //'<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
  //'p1 { font-size:14pt }\n' + 'p2 { font-size:16pt }\n' + 'p3 { font-size:18pt }\n' +
  //'p4 { font-size:20pt }\n' + 'p5 { font-size:22pt }\n' + 'p6 { font-size:24pt }\n' +
  //'</style>\n' +
  //'<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
  //  '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');

  //docObj.writeln('<script>\n' +
  //               'function query_open(fb,fc,fs)\n' +
  //               '{\n' +
  //               '  if(parent.command.win1.closed)\n' +
  //               '     alert("請先選取查詢連結開啟於->新視窗，並按 <設定查詢連結> 鈕!!");\n' +
  //               '  else\n' +
  //               '   { parent.command.win1.frames[0].readchapter(fb,fc,fs);\n' +
  //               '     parent.command.win1.focus();return false; }\n' +
  //               '}\n' +
  //               '<\/script>\n');  

  //docObj.writeln('Search Query: <I>' + parent.command.document.search.query.value + '</I><BR>\n' +
  //  'Search Results: <I>' + (reference + 1) + ' - ' +
  //  currentRecord + ' of ' + results.length + '</I><br />' +
  //  '\n\n<!-- Begin result set //-->\n\n\t<UL>');

  //var open_win_l = eval(open_win);

//  if (open_win_l==2)
//     docObj.writeln('※ 欲點選查詢結果，請先'+'<a href="" onClick="open_win1(); return false;">' + '開啟新視窗' + '</a>\n '+
//                    '，查詢結果將顯示於新開啟視窗中，重新查詢請重開新視窗 ※');  

  if (searchType == SEARCHURL) {
    for (var i = reference; i < currentRecord; i++) {
//      var divide = results[i].split("|");
      //docObj.writeln('\t<li>' + results[i] + '</li><P />\n');
    }
  }
  else {
//    docObj.writeln('findbook.length = ' + findbook.length + ' <br /> \n');

      
    for (var i = reference; i < currentRecord; i++) {
//      var divide = results[i].split('|');
      var oneline = results[i].substring(results[i].indexOf(" "), results[i].length);
      //var oneline_S = '<p1>' + oneline + '</p1>';

      var bnum_1 = results[i].substring(0, results[i].indexOf("%"));
      var bname = results[i].substring(results[i].indexOf("%")+1, results[i].indexOf("^"));
      var cname = results[i].substring(results[i].indexOf("^")+1, results[i].indexOf(":"));
      var sname = results[i].substring(results[i].indexOf(":")+1, results[i].indexOf(" "));

      var temp = bname + ' ' + cname + ':' + sname ;

      if(search_sec_size==14){                                                        // Add 2017.05.29 for test
         var temp_S = '<p1>' + temp + '</p1>';
         var oneline_S = '<p1>' + oneline + '</p1>';
      }

      if(search_sec_size==16){                                                        // Add 2017.05.29 for test
         var temp_S = '<p2>' + temp + '</p2>';
         var oneline_S = '<p2>' + oneline + '</p2>';
      }

      if(search_sec_size==18){                                                        // Add 2017.05.29 for test
         var temp_S = '<p3>' + temp + '</p3>';
         var oneline_S = '<p3>' + oneline + '</p3>';
      }

      if(search_sec_size==20){                                                        // Add 2017.05.29 for test
         var temp_S = '<p4>' + temp + '</p4>';
         var oneline_S = '<p4>' + oneline + '</p4>';
      }

      if(search_sec_size==22){                                                        // Add 2017.05.29 for test
         var temp_S = '<p5>' + temp + '</p5>';
         var oneline_S = '<p5>' + oneline + '</p5>';
      }

      if(search_sec_size==24){                                                        // Add 2017.05.29 for test
         var temp_S = '<p6>' + temp + '</p6>';
         var oneline_S = '<p6>' + oneline + '</p6>';
      }


         var temp_S = temp ;
         var oneline_S = oneline ;


      //var temp_S = '<p1>' + temp + '</p1>';
      var findb = bnum_1;
      var findchap = cname - 1;
      var findsec = sname;

//      var bcsname2 = bname + ' 第' + cname + '篇' + ' 第' + sname + '節' + '</ol>';

//      var temp = results[i].substring(0, results[i].indexOf(" "));

//         alert("open new window!!");
//      else

      //if (open_win_l==2){
      //   docObj.writeln('<li><a href="" onClick="query_open('+findb+','+findchap+','+findsec+');return false;">' + temp_S + '</a> ' + oneline_S + '</li>\n');
      //   }
      //else
      //   docObj.writeln('<li><a href="" onClick="parent.command.readchapter(' + findb+ ', ' + findchap+ ',' + findsec+ '); return false;">' + temp_S + '</a> ' + oneline_S + '</li>\n');

//      docObj.writeln('\t<li>' + oneline + '</li><P />\n');


       text_result += '<a href="" onClick="readchapter3(' + findb+ ', ' + findchap+ ',' + findsec+ ');return false;">' + temp_S + '</a> ' + oneline_S + '<br>';

       document.getElementById("search_result").innerHTML = text_result;


    } // End of for





         //docObj.writeln('<li><a href="" onClick="parent.command.readchapter(' + findb+ ', ' + findchap+ ',' + findsec+ '); return false;">' + temp_S + '</a> ' + oneline_S + '</li>\n');

//'<li><a href="" onClick="parent.command.readchapter(' + findb+ ', ' + findchap+ ',' + findsec+ '); return false;">' + temp_S + '</a> ' + oneline_S + '</li>\n');      


       //text_result += '<a href="" onClick="readchapter(' + findb+ ', ' + findchap+ ',' + findsec+ ');return false;">' + temp_S + '</a> ' + oneline_S + '<br>';

       //document.getElementById("search_result").innerHTML = text_result;

    }
  //docObj.writeln('\n\t</UL>\n\n<!-- End result set //-->\n\n');
//  prevNextResults(results.length, reference, offset);
//  docObj.writeln('<HR NOSHADE WIDTH=100%>' +
  //docObj.writeln('\n</BODY>\n</HTML>');
  //docObj.close();
//  document.search.query.select();
  }

// Define a function to dynamically display Prev and Next buttons
function prevNextResults(ceiling, reference, offset) {
  docObj.writeln('<CENTER><FORM>');
  if(reference > 0) {
    docObj.writeln('<INPUT TYPE=BUTTON VALUE="Prev ' + offset + ' Results" ' +
      'onClick="parent.command.formatResults(parent.command.copyArray, ' +
      (reference - offset) + ', ' + offset + ')">');
    }
  if(reference >= 0 && reference + offset < ceiling) {
    var trueTop = ((ceiling - (offset + reference) < offset) ? ceiling - (reference + offset) : offset);
    var howMany = (trueTop > 1 ? "s" : "");
    docObj.writeln('<INPUT TYPE=BUTTON VALUE="Next ' + trueTop + ' Result' + howMany + '" ' +
      'onClick="parent.command.formatResults(parent.command.copyArray, ' +
      (reference + offset) + ', ' + offset + ')">');
    }
  docObj.writeln('</CENTER>');
  }

function open_win1()
{
//   win1=window.open('index.html','fullscreen1','fullscreen,scrollbars');
   win1=window.open('index.html');
}

