
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

   if(O_nowbook==nowbook && O_nowchapter==nowchapter && O_nowsection==nowsection){
      Send_to_win34(10,0,0,0,0,0,0,0);
   }
   else {
      var BookName=BookAbbr2[nowbook];
      Send_to_win34(2, BookName, nowchapter+1,nowsection,nowbook,0,0,0);
      O_nowbook=nowbook;
      O_nowchapter=nowchapter;
      O_nowsection=nowsection;
   }

   //Send_to_win34(2,'Ex',nowchapter+1,nowsection,0,0,0,0);
}

function Go_to_Original_text_web2(){

   //if(O2_nowbook==nowbook && O2_nowchapter==nowchapter && O2_nowsection==nowsection){
   //   Send_to_win34(100,0,0,0,0,0,0,0);
   //}
   //else {
      var BookName=BookAbbr3[nowbook];
      Send_to_win34(22, BookName, nowchapter+1,nowsection,nowbook,0,0,0);
      O2_nowbook=nowbook;
      O2_nowchapter=nowchapter;
      O2_nowsection=nowsection;
   //}

   //Send_to_win34(2,'Ex',nowchapter+1,nowsection,0,0,0,0);
}


function Listen_NKJV_web(){

   if(L_nowbook==nowbook && L_nowchapter==nowchapter){
      Send_to_win34(13,0,0,0,0,0,0,0);
   }
   else {
      Send_to_win34(12, nowbook+1, nowchapter+1,0,0,0,0,0);
      L_nowbook=nowbook;
      L_nowchapter=nowchapter;
   }

   //Send_to_win34(2,'Ex',nowchapter+1,nowsection,0,0,0,0);
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
      write_to_json_1(99,99,99);
   }

   if(myselectValue=="1"){
      write_to_json_2(99,99,99);
   }

   if(myselectValue=="2"){
      write_to_json_3(99,99,99);
   }

   if(myselectValue=="3"){
      write_to_json_4(99,99,99);
   }

   if(myselectValue=="4"){
      write_to_json_5(99,99,99);
   }

   if(myselectValue=="5"){
      write_to_json_6(99,99,99);
   }

   if(myselectValue=="6"){
      write_to_json_7(99,99,99);
   }

   if(myselectValue=="7"){
      write_to_json_8(99,99,99);
   }

   if(myselectValue=="8"){
      write_to_json_9(99,99,99);
   }

   if(myselectValue=="9"){
      write_to_json_10(99,99,99);
   }

   if(myselectValue=="10"){
      write_to_json_11(99,99,99);
   }

   if(myselectValue=="11"){
      write_to_json_12(99,99,99);
   }

   if(myselectValue=="12"){
      write_to_json_13(99,99,99);
   }

   if(myselectValue=="13"){
      write_to_json_14(99,99,99);
   }

   if(myselectValue=="14"){
      write_to_json_All();
   }

}


// --- for Testing Writing Bible Reading Record to file

function write_to_json_1(arg1, arg2, arg3, arg4){ // arg4 = 1 means clear all bookmarks

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

   const store1 = new Store3({
     // We'll call our data file 'Bible-Bookmark-1'
     configName: 'Bible-Bookmark-1',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store1.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-1 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store1.set('windowBounds', { minWidth, minHeight, maxWidth });

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

}


function write_to_json_2(arg1, arg2, arg3, arg4){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Store Bible Reading Records in somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Store Bible Reading Records in my dropbox directory

   const {dialog} = require('electron').remote

   // First instantiate the class
   // For Store Bible Reading Records 2
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store2 = new Store3({
     // We'll call our data file 'Bible-Bookmark-2'
     configName: 'Bible-Bookmark-2',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store2.get('windowBounds');

// Writing records
// store2.set('windowBounds', { minWidth, minHeight, maxWidth });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store2.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-2 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store2.set('windowBounds', { minWidth, minHeight, maxWidth });

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

}


function write_to_json_3(arg1, arg2, arg3, arg4){

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
     // We'll call our data file 'Bible-Bookmark-3'
     configName: 'Bible-Bookmark-3',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });


    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-3 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

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

}

function write_to_json_4(arg1, arg2, arg3, arg4){

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
     // We'll call our data file 'Bible-Bookmark-4'
     configName: 'Bible-Bookmark-4',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-4 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

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

}

function write_to_json_5(arg1, arg2, arg3, arg4){

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
     // We'll call our data file 'Bible-Bookmark-5'
     configName: 'Bible-Bookmark-5',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-5 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

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

}

function write_to_json_6(arg1, arg2, arg3, arg4){

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
     // We'll call our data file 'Bible-Bookmark-6'
     configName: 'Bible-Bookmark-6',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-6 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

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

}

function write_to_json_7(arg1, arg2, arg3, arg4){

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
     // We'll call our data file 'Bible-Bookmark-7'
     configName: 'Bible-Bookmark-7',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-7 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

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

}

function write_to_json_8(arg1, arg2, arg3, arg4){

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
     // We'll call our data file 'Bible-Bookmark-8'
     configName: 'Bible-Bookmark-8',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-8 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();
            //read_bookmark8(); // for test

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}

function write_to_json_9(arg1, arg2, arg3, arg4){

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
     // We'll call our data file 'Bible-Bookmark-9'
     configName: 'Bible-Bookmark-9',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-9 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();
            //read_bookmark8();read_bookmark9(); // for test

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}

function write_to_json_10(arg1, arg2, arg3, arg4){

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
     // We'll call our data file 'Bible-Bookmark-10'
     configName: 'Bible-Bookmark-10',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-10 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();
            //read_bookmark8();read_bookmark13();read_bookmark14(); // for test

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}

function write_to_json_11(arg1, arg2, arg3, arg4){

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
     // We'll call our data file 'Bible-Bookmark-11'
     configName: 'Bible-Bookmark-11',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-11 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();
            //read_bookmark8();read_bookmark13();read_bookmark14(); // for test

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}

function write_to_json_12(arg1, arg2, arg3, arg4){

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
     // We'll call our data file 'Bible-Bookmark-12'
     configName: 'Bible-Bookmark-12',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-12 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();
            //read_bookmark8();read_bookmark13();read_bookmark14(); // for test

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}

function write_to_json_13(arg1, arg2, arg3, arg4){

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
     // We'll call our data file 'Bible-Bookmark-13'
     configName: 'Bible-Bookmark-13',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-13 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

            //dialog.showMessageBox({message: '已儲存'});

	    isShow = true;
	    document.getElementById('a1').innerText = "隱藏書籤";
            read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
            read_bookmark5();read_bookmark6();read_bookmark7();
            read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
            read_bookmark12();read_bookmark13();read_bookmark14();
            //read_bookmark8();read_bookmark13();read_bookmark14(); // for test

          }
          if(buttons[buttonIndex]=='Cancel'){
            console.log('Cancel is clicked. ');
          }
       });

    }  // End if arg4

}

function write_to_json_14(arg1, arg2, arg3, arg4){

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

    if(arg1==99 && arg2==99 && arg3==99 && arg4==1){

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

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

         if(arg1==99 && arg2==99 && arg3==99){
            var BCSName = '清除書籤-14 ?';
         }

       var buttons = ['OK', 'Cancel'];

       dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

          if(buttons[buttonIndex]=='OK'){
            console.log('OK is clicked. ');

            var minWidth = arg1;
            var minHeight = arg2;
            var maxWidth = arg3;

            store3.set('windowBounds', { minWidth, minHeight, maxWidth });

            //read_bookmark3();

            //dialog.showMessageBox({message: '已儲存'});

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

    }  // End if arg4

}

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

    // ---- for dialog 

    var BCSName = '清除所有書籤 ?';

    var buttons = ['OK', 'Cancel'];

    dialog.showMessageBox({ type: 'info', buttons: buttons, message: BCSName }, function (buttonIndex) {

       if(buttons[buttonIndex]=='OK'){
         console.log('OK is clicked. ');

         write_to_json_1(99,99,99,1);write_to_json_2(99,99,99,1);write_to_json_3(99,99,99,1);
         write_to_json_4(99,99,99,1);write_to_json_5(99,99,99,1);write_to_json_6(99,99,99,1);
         write_to_json_7(99,99,99,1);write_to_json_8(99,99,99,1);write_to_json_9(99,99,99,1);
         write_to_json_10(99,99,99,1);write_to_json_11(99,99,99,1);write_to_json_12(99,99,99,1);
         write_to_json_13(99,99,99,1);write_to_json_14(99,99,99,1);

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark1");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}

function read_bookmark2(){   // read & show bookmark2

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 2
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store2 = new Store3({
     // We'll call our data file 'Bible-Bookmark-2'
     configName: 'Bible-Bookmark-2',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store2.get('windowBounds');

// Writing records
// store2.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store2.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark2");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}

function read_bookmark3(){   // read & show bookmark3

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-3'
     configName: 'Bible-Bookmark-3',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark3");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}

function read_bookmark4(){   // read & show bookmark1

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store4.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark4");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store5.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark5");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}

function read_bookmark6(){   // read & show bookmark1

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store6.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark6");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}

function read_bookmark7(){   // read & show bookmark1

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store7.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark7");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store8.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark8");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}

function read_bookmark9(){   // read & show bookmark9

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store9.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark9");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}

function read_bookmark10(){   // read & show bookmark10

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store10.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark10");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}

function read_bookmark11(){   // read & show bookmark11

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store11.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark11");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}

function read_bookmark12(){   // read & show bookmark12

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store12.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark12");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}

function read_bookmark13(){   // read & show bookmark13

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store13.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark13");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}

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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store14.get('windowBounds');

   //readchapter(minWidth, minHeight, maxWidth);
   show_bookmark(minWidth, minHeight, maxWidth , "bookmark14");
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)

}



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
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

// Writing records
// store1.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store1.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //show_bookmark1(minWidth, minHeight, maxWidth);
   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}


function read_from_json_2(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory

   // First instantiate the class
   // For Reading Bible Reading Records 2
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store2 = new Store3({
     // We'll call our data file 'Bible-Bookmark-2'
     configName: 'Bible-Bookmark-2',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store2.get('windowBounds');

// Writing records
// store2.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store2.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}


function read_from_json_3(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-3'
     configName: 'Bible-Bookmark-3',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}


function read_from_json_4(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-4'
     configName: 'Bible-Bookmark-4',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}


function read_from_json_5(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-5'
     configName: 'Bible-Bookmark-5',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}


function read_from_json_6(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-6'
     configName: 'Bible-Bookmark-6',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}

function read_from_json_7(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-7'
     configName: 'Bible-Bookmark-7',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}

function read_from_json_8(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-8'
     configName: 'Bible-Bookmark-8',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();
   //read_bookmark8();  // for test

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}

function read_from_json_9(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-9'
     configName: 'Bible-Bookmark-9',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();
   //read_bookmark8();read_bookmark9();  // for test

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}

function read_from_json_10(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-10'
     configName: 'Bible-Bookmark-10',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();
   //read_bookmark8();read_bookmark13();read_bookmark14();  // for test

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}

function read_from_json_11(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-11'
     configName: 'Bible-Bookmark-11',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();
   //read_bookmark8();read_bookmark13();read_bookmark14();  // for test

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}

function read_from_json_12(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-12'
     configName: 'Bible-Bookmark-12',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();
   //read_bookmark8();read_bookmark13();read_bookmark14();  // for test

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}

function read_from_json_13(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-13'
     configName: 'Bible-Bookmark-13',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();
   //read_bookmark8();read_bookmark13();read_bookmark14();  // for test

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}

function read_from_json_14(){

   const remote = require('electron').remote;
   const BrowserWindow = remote.BrowserWindow;
   //const Store3 = require('./store.js');  // Read Bible Reading Records form somewhere directory,for R45g
   const Store3 = require('./store3.js');  // Read Bible Reading Records form my dropbox directory


   // First instantiate the class
   // For Reading Bible Reading Records 3
   // minWidth  -- for Book
   // minHeight -- for chapter
   // maxWidth  -- for verse

   const store3 = new Store3({
     // We'll call our data file 'Bible-Bookmark-14'
     configName: 'Bible-Bookmark-14',
     defaults: {
    
       windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
     }
   });

// Reading records
// let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

// Writing records
// store3.set('windowBounds', { minWidth, minHeight, maxWidth });

   let { minWidth, minHeight, maxWidth } = store3.get('windowBounds');

   if(minWidth==99 && minHeight==99 && maxWidth==99){
      // Do nothing.
   }
   else{
      readchapter(minWidth, minHeight, maxWidth);
   }

   isShow = true;
   document.getElementById('a1').innerText = "隱藏書籤";
   read_bookmark1();read_bookmark2();read_bookmark3();read_bookmark4();
   read_bookmark5();read_bookmark6();read_bookmark7();
   read_bookmark8();read_bookmark9();read_bookmark10();read_bookmark11();
   read_bookmark12();read_bookmark13();read_bookmark14();
   //read_bookmark8();read_bookmark14();  // for test

   //Send_to_win34(1,minWidth,minHeight,maxWidth,BibleVersion_Disp,disp_secs_a,0)
   
}



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



function show_bookmark(bnum, cnum, snum , bookmark_num) {

  var EmptyBookmark = 0;

  if(bnum==99 && cnum==99 && snum==99){

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
      var BookMark= BookName + " " + ChapName + ":" + sname;  //

      if(EmptyBookmark==1){  // 當書籤為空時，add on 2017/08/12

         BookMark=" ";

      }

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

   for ( var ii=1001; ii<1008; ii++ ) {

      document.getElementById(ii).innerHTML = "";
      document.getElementById(ii+1000).innerHTML = "";

   }

}

function clear_area_R_for_7() {

   for ( var ii=3001; ii<3008; ii++ ) {

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


function readchapter(bnum, cnum ,snum) {

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


  sec_size = "24";


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


  bcs_size = "24";


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

  }

  if(document.DVN.DVNumber[1].checked) {

     disp_secs_a = "7";

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

      var bcsname1 = bname + ' 第' + cname + '章' + '</ol>';
      var bcsname2 = bname + ' 第' + cname + '篇' + '</ol>';

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


      if(bname!="詩篇") {
         //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
         document.getElementById("p1").innerHTML = bcsname1;
      }
      else {
         //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
         document.getElementById("p1").innerHTML = bcsname2;
      }

      document.getElementById("p2").innerHTML = bcsname3;

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

            clear_area_1L();
            clear_area_1R();
            clear_area_LC();
            clear_area_RC();

            document.getElementById(Lnum++).innerHTML = oneline_1_num;
            document.getElementById(Lvers++).innerHTML = oneline_1_vers;

            document.getElementById(Rnum++).innerHTML = oneline_2_num;
            document.getElementById(Rvers++).innerHTML = oneline_2_vers;

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

  //docObj.writeln('\n</BODY>\n</HTML>');
  //docObj2.writeln('\n</BODY>\n</HTML>');
  //docObj.close();
  //docObj2.close();
  //docObj_h.writeln('\n</BODY>\n</HTML>');
  //docObj_h.close();
  nowbook = bnum;
  nowchapter = cnum;
  nowsection = snum;

  b_int = bnum;
  c_int = cnum;
  v_int = snum;
}


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


      if(bname!="詩篇") {
         //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
         document.getElementById("p1").innerHTML = bcsname1;
      }
      else {
         //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
         document.getElementById("p1").innerHTML = bcsname2;
      }

      document.getElementById("p2").innerHTML = bcsname3;

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


      if(bname!="詩篇") {
         //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
         document.getElementById("p1").innerHTML = bcsname1;
      }
      else {
         //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
         document.getElementById("p1").innerHTML = bcsname2;
      }

      document.getElementById("p2").innerHTML = bcsname3;

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


      if(bname!="詩篇") {
         //docObj_h.writeln(bcsname1_1.fontcolor(bcs_color));
         document.getElementById("p1").innerHTML = bcsname1;
      }
      else {
         //docObj_h.writeln(bcsname2_1.fontcolor(bcs_color));
         document.getElementById("p1").innerHTML = bcsname2;
      }

      document.getElementById("p2").innerHTML = bcsname3;

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


// Determine the type of search, and make
// sure the user has entered something
function validate(entry) {
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
  }

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
  docObj.open();
  docObj.writeln('<HTML><HEAD>' + 
    '<meta http-equiv="Content-Type" content="text/html; charset=big5">' +
    '<TITLE>Search Results</TITLE></HEAD>' +
    '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">' +
//    profiles[0] +
    '<TABLE WIDTH=90% BORDER=0 ALIGN=CENTER><TR><TD VALIGN=TOP><FONT FACE=Arial><B><DL>' +
    '<HR NOSHADE WIDTH=100%>"' + document.search.query.value +
    '" returned no results.<HR NOSHADE WIDTH=100%></TD></TR></TABLE></BODY></HTML>');
  docObj.close();
  document.search.query.select();
  }

// Define a function to print the results of a successful search
function formatResults(results, reference, offset) {
  var currentRecord = (results.length < reference + offset ? results.length : reference + offset);


  // For Setting Search's Verse Font Size
  if(parent.command.document.SVS.SearchVerseSize[0].checked)
     search_sec_size = "14";
  if(parent.command.document.SVS.SearchVerseSize[1].checked)
     search_sec_size = "16";
  if(parent.command.document.SVS.SearchVerseSize[2].checked)
     search_sec_size = "18";
  if(parent.command.document.SVS.SearchVerseSize[3].checked)
     search_sec_size = "20";
  if(parent.command.document.SVS.SearchVerseSize[4].checked)
     search_sec_size = "22";
  if(parent.command.document.SVS.SearchVerseSize[5].checked)
     search_sec_size = "24";

  docObj.open();
  docObj.writeln('<HTML>\n<HEAD>\n<TITLE>Search Results</TITLE>\n' + 
  '<style type="text/css">\n' + 'body{font-family:標楷體}\n' +
  'p1 { font-size:14pt }\n' + 'p2 { font-size:16pt }\n' + 'p3 { font-size:18pt }\n' +
  'p4 { font-size:20pt }\n' + 'p5 { font-size:22pt }\n' + 'p6 { font-size:24pt }\n' +
  '</style>\n' +
  '<meta http-equiv="Content-Type" content="text/html; charset=big5">\n</HEAD>' +
    '<BODY BGCOLOR=WHITE TEXT=BLACK background="back5.jpg">');

  docObj.writeln('<script>\n' +
                 'function query_open(fb,fc,fs)\n' +
                 '{\n' +
                 '  if(parent.command.win1.closed)\n' +
                 '     alert("請先選取查詢連結開啟於->新視窗，並按 <設定查詢連結> 鈕!!");\n' +
                 '  else\n' +
                 '   { parent.command.win1.frames[0].readchapter(fb,fc,fs);\n' +
                 '     parent.command.win1.focus();return false; }\n' +
                 '}\n' +
                 '<\/script>\n');  

  docObj.writeln('Search Query: <I>' + parent.command.document.search.query.value + '</I><BR>\n' +
    'Search Results: <I>' + (reference + 1) + ' - ' +
    currentRecord + ' of ' + results.length + '</I><br />' +
    '\n\n<!-- Begin result set //-->\n\n\t<UL>');

  var open_win_l = eval(open_win);

//  if (open_win_l==2)
//     docObj.writeln('※ 欲點選查詢結果，請先'+'<a href="" onClick="open_win1(); return false;">' + '開啟新視窗' + '</a>\n '+
//                    '，查詢結果將顯示於新開啟視窗中，重新查詢請重開新視窗 ※');  

  if (searchType == SEARCHURL) {
    for (var i = reference; i < currentRecord; i++) {
//      var divide = results[i].split("|");
      docObj.writeln('\t<li>' + results[i] + '</li><P />\n');
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



      //var temp_S = '<p1>' + temp + '</p1>';
      var findb = bnum_1;
      var findchap = cname - 1;
      var findsec = sname;

//      var bcsname2 = bname + ' 第' + cname + '篇' + ' 第' + sname + '節' + '</ol>';

//      var temp = results[i].substring(0, results[i].indexOf(" "));

//         alert("open new window!!");
//      else

      if (open_win_l==2){
         docObj.writeln('<li><a href="" onClick="query_open('+findb+','+findchap+','+findsec+');return false;">' + temp_S + '</a> ' + oneline_S + '</li>\n');
         }
      else
         docObj.writeln('<li><a href="" onClick="parent.command.readchapter(' + findb+ ', ' + findchap+ ',' + findsec+ '); return false;">' + temp_S + '</a> ' + oneline_S + '</li>\n');

//      docObj.writeln('\t<li>' + oneline + '</li><P />\n');
      }
    }
  docObj.writeln('\n\t</UL>\n\n<!-- End result set //-->\n\n');
//  prevNextResults(results.length, reference, offset);
//  docObj.writeln('<HR NOSHADE WIDTH=100%>' +
  docObj.writeln('\n</BODY>\n</HTML>');
  docObj.close();
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

