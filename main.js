const electron = require('electron')


// Module to control application life.

//const app = electron.app


// Module to create native browser window.

const BrowserWindow = electron.BrowserWindow


const path = require('path')

const url = require('url')


const globalShortcut = electron.globalShortcut;
//const otherWindowIPC = require('other-window-ipc');
const ipc = require('electron').ipcMain
const Store = require('./store.js');
const Store2 = require('./store2.js');
const Store3 = require('./store3.js');
const dialog = require('electron').dialog;

//const electronLocalshortcut = require('electron-localshortcut')


// ----------------


const {app, Menu} = require('electron')

const template = [
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {role: 'reload'},
      {role: 'forcereload'},
      {role: 'toggledevtools'},
      {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'Key',
    submenu: [
      {
        label: 'alt-p:local-shortcut',
        accelerator: 'alt+p',
        click () { console.log('alt+p is pressed') }
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })

  // Edit menu
  template[1].submenu.push(
    {type: 'separator'},
    {
      label: 'Speech',
      submenu: [
        {role: 'startspeaking'},
        {role: 'stopspeaking'}
      ]
    }
  )

  // Window menu
  template[3].submenu = [
    {role: 'close'},
    {role: 'minimize'},
    {role: 'zoom'},
    {type: 'separator'},
    {role: 'front'}
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)


// ----------------


// For Writing Bible Reading Recodrs Test

// First instantiate the class
// For Store Bible Reading Records
// minWidth  -- for Book1
// minHeight -- for chapter1
// maxWidth  -- for verse1

const store3d = new Store3({    // Store in my dropbox
  // We'll call our data file 'Reading-Bible-Record1'
  configName: 'Reading-Bible-Record1',
  defaults: {
    
    windowBounds: { minWidth: 44, minHeight: 4, maxWidth: 12 }
  }
});

// Reading records
// let { minWidth, minHeight, maxWidth } = store3d.get('windowBounds');

// Writing records
// store3d.set('windowBounds', { minWidth, minHeight, maxWidth });





// -----------------


// Keep a global reference of the window object, if you don't, the window will

// be closed automatically when the JavaScript object is garbage collected.

//let mainWindow



let window;     // for bible2.html,  win,     Command Window
//let window2;    // for head.html,    win2,    Head Window ,  for display Book, Chapter, Verse
//let window3;    // for main.html,    win3,    Chinese Bible Window
//let window4;    // for main2.html,   win4,    English Bible Window

let window5;    // for result.html,   win5,    Search Result Window

let window7;    // for original text bible

let window4;    // for original_2 text bible

let window8;    // for search.html,   win8,    Search input Window

let window9;    // for listen NKJV bible


let alts_flag=0;  // 1: alt+s been pressed



// First instantiate the class
// For index.html
//const store = new Store2({
//  // We'll call our data file 'user-preferences-index'
//  configName: 'user-preferences-index',
//  defaults: {
//    // 1300x300 is the default size of our window, index.html
//    windowBounds: { width: 1300, height: 300, x: 10, y:20 }
//  }
//});

// For index2.html
//const store2 = new Store2({
//  // We'll call our data file 'user-preferences-index2'
//  configName: 'user-preferences-index2',
//  defaults: {
//    // 400x300 is the default size of our window, index2.html
//    windowBounds: { width2: 400, height2: 300 }
//  }
//});



app.on('ready', function() {

  var screenElectron = electron.screen;

  var mainScreen = screenElectron.getPrimaryDisplay();
  var allScreens = screenElectron.getAllDisplays();

  console.log(mainScreen, allScreens);


  var dimensions = mainScreen.size;
  console.log(dimensions.width + "x" + dimensions.height);


  //var electronScreen = electron.screen;
  //var size = electronScreen.getPrimaryDisplay().Bonds;

  //var size = electronScreen.getPrimaryDisplay().workAreaSize;
  //mainWindow = new BrowserWindow({ width: size.width, height: size.height });

  // First we'll get our height and width. This will be the defaults if there wasn't anything saved
  // for index.html
  //let { width, height, x, y } = store.get('windowBounds');

  // Pass those values in to the BrowserWindow options, 
  // for index.html
  //window = new BrowserWindow({ width, height, x, y, autoHideMenuBar: true });
  //window.setPosition(x,y);


  // First we'll get our height and width. This will be the defaults if there wasn't anything saved
  // for index2.html
  //let { width2, height2 } = store2.get('windowBounds');

  // Pass those values in to the BrowserWindow options, 
  // for index2.html
  //window2 = new BrowserWindow({ width2, height2, autoHideMenuBar: true });


  //let width1  = width;
  //let height1 = heigh;
  //let { Width, Height } = store2.get('windowBounds');
  //console.log('width= ', &(width), 'height= ', &(height));

  // Pass those values in to the BrowserWindow options
  //window = new BrowserWindow({ width, height, autoHideMenuBar: true });
  //window2 = new BrowserWindow({ Width, Height, autoHideMenuBar: true });

  //mainWindow = new BrowserWindow({ width: size.width, height: size.height });

  window = new BrowserWindow({width: dimensions.width, height: dimensions.height, x: 0, y:0, autoHideMenuBar: true});

  //window = new BrowserWindow({width: 1370, height: 750, x: 0, y:0, autoHideMenuBar: true});
  //window.maximize();
  //window = new BrowserWindow({width: 1370, height: 115, x: 0, y:0, autoHideMenuBar: true, frame: false});
  window.loadURL('file://' + __dirname + '/bible2.html');
  //window.setPosition(10,20);

  window7 = new BrowserWindow({width: dimensions.width, height: dimensions.height, x: 0, y:0, autoHideMenuBar: true,frame: false, show: false});

  window7.loadURL('http://bible.fhl.net/new/parsing.php?nodic=01&graph=1&engs=Gen&chap=1&sec=1&mode=3&m=');  // for test

  window4 = new BrowserWindow({width: dimensions.width, height: dimensions.height, x: 0, y:0, autoHideMenuBar: true,frame: false, show: false});

  window4.loadURL('https://biblehub.com/interlinear/genesis/1-1.htm');  // for test

  //window2 = new BrowserWindow({width: 1370, height: 80, x: 0, y:100, autoHideMenuBar: true, frame: false});
  //window2 = new BrowserWindow({width: 400, height: 300, autoHideMenuBar: true});
  //window2 = new BrowserWindow({width1, height1, autoHideMenuBar: true});
  //window2.loadURL('file://' + __dirname + '/head.html');
  //window2.setPosition(20,350);

  //window3 = new BrowserWindow({width: 685, height: 615, x: 0, y:115, autoHideMenuBar: true, frame: false});
  //window3 = new BrowserWindow({width: 400, height: 200, x: 0, y:650, autoHideMenuBar: true, show: false});
  //window3 = new BrowserWindow({width1, height1, autoHideMenuBar: true});
  //window3.loadURL('file://' + __dirname + '/main.html');
  //window3.setPosition(450,350);

  //window4 = new BrowserWindow({width: 685, height: 615, x: 985, y:115, autoHideMenuBar: true, frame: false});
  //window4 = new BrowserWindow({width: 400, height: 200, x: 715, y:650, autoHideMenuBar: true, show: false});
  //window4 = new BrowserWindow({width1, height1, autoHideMenuBar: true});
  //window4.loadURL('file://' + __dirname + '/main2.html');
  //window4.setPosition(450,350);

  window5 = new BrowserWindow({width: 685, height: 595, x: 342, y:125, autoHideMenuBar: true, frame: false, show: false});
  //window5.setClosable(false);
  //window5 = new BrowserWindow({width: 400, height: 300, autoHideMenuBar: true});
  //window5 = new BrowserWindow({width1, height1, autoHideMenuBar: true});
  window5.loadURL('file://' + __dirname + '/result.html');
  //window5.setPosition(450,350);

  window8 = new BrowserWindow({width: 685, height: 55, x: 342, y:70, autoHideMenuBar: true, frame: false, show: false});
  //window5.setClosable(false);
  //window5 = new BrowserWindow({width: 400, height: 300, autoHideMenuBar: true});
  //window5 = new BrowserWindow({width1, height1, autoHideMenuBar: true});
  window8.loadURL('file://' + __dirname + '/search.html');
  //window5.setPosition(450,350);

  window9 = new BrowserWindow({width: dimensions.width/2, height: 300, x: 0, y:0, autoHideMenuBar: true,frame: false, show: false});


 
  //When bible2.html close, close head.html, main.html, main2.html too
  window.on('closed', function() {
    window = null;
    //if(window2!=null){
    //  window2.close();
    //}
    //if(window3!=null){
    //  window3.close();
    //}
    if(window4!=null){
      window4.close();
    }
    if(window5!=null){
      window5.close();
    }
    if(window7!=null){
      window7.close();
    }
    if(window8!=null){
      window8.close();
    }
    if(window9!=null){
      window9.close();
    }
  });

  //When bible2.html minimize, hide win5
  window.on('minimize', function() {

    if(window4!=null){
      window4.hide();
    }
    if(window5!=null){
      window5.hide();
    }
    if(window7!=null){
      window7.hide();
    }
    if(window8!=null){
      window8.hide();
    }
    if(window9!=null){
      window9.hide();
    }

  });



  //When head.html close, set windows2 = null
  //window2.on('closed', function() {
  //  window2 = null;
  //});

  //When main.html close, set windows3 = null
  //window3.on('closed', function() {
  //  window3 = null;
  //  if(window!=null){
  //    window.close();
  //  }
  //  if(window4!=null){
  //    window4.close();
  //  }
  //  if(window5!=null){
  //    window5.close();
  //  }
  //});

  //When main2.html close, set windows4 = null
  //window4.on('closed', function() {
  //  window4 = null;
  //  if(window!=null){
  //    window.close();
  //  }
  //  if(window3!=null){
  //    window3.close();
  //  }
  //  if(window5!=null){
  //    window5.close();
  //  }
  //});





  //When win4 close, set windows4 = null, load a new window4 for next time use
  window4.on('closed', function() {
    window4 = null;

    //window4 = new BrowserWindow({width: dimensions.width, height: dimensions.height, x: 0, y:0, autoHideMenuBar: true,frame: false, show: false});

    //window4.loadURL('https://biblehub.com/interlinear/genesis/1-1.htm');  // for test

    if(window!=null){
      window.close();
    }

    //if(window3!=null){
    //  window3.close();
    //}
    //if(window4!=null){
    //  window4.close();
    //}
  });


  //When win5 close, set windows5 = null
  window5.on('closed', function() {
    window5 = null;
    if(window!=null){
      window.close();
    }
    //if(window3!=null){
    //  window3.close();
    //}
    //if(window4!=null){
    //  window4.close();
    //}
  });

  //When win7 close, set windows7 = null
  window7.on('closed', function() {
    window7 = null;
    if(window!=null){
      window.close();
    }
    //if(window3!=null){
    //  window3.close();
    //}
    //if(window4!=null){
    //  window4.close();
    //}
  });

  //When win8 close, set windows8 = null
  window8.on('closed', function() {
    window8 = null;
    if(window!=null){
      window.close();
    }
  });

  //When win9 close, set windows9 = null
  window9.on('closed', function() {
    window9 = null;
    if(window!=null){
      window.close();
    }
  });

  //When bible2.html restore from minimize, show rest of windows
  window.on('restore', function() {
    //if(window2!=null){
    //   window2.show();
    //}
    //if(window3!=null){
    //   window3.show();
    //}
    //if(window4!=null){
    //   window4.show();
    //}
  });




  // For dialog test
  // Register a 'ctrl+w' shortcut listener and Writing Bible Reading Recodrs
  var ret = globalShortcut.register('ctrl+w', function() {
    console.log('ctrl+w is pressed. ');

    // ---- for dialog test

    var buttons = ['OK', 'Cancel'];

    dialog.showMessageBox({ type: 'info', buttons: buttons, message: 'Exit?' }, function (buttonIndex) {
       if(buttons[buttonIndex]=='OK')
         console.log('OK is clicked. ');
       if(buttons[buttonIndex]=='Cancel')
         console.log('Cancel is clicked. ');
    });


    //dialog.showMessageBox({ type: 'info', buttons: buttons, message: 'Exit?' }, function (buttonIndex) {
    //   updateFooter("Exit: " + buttons[buttonIndex]);
    //});



    //dialog.showMessageBox({buttons: ['hello']});

  });
  // End of dialog test



  // Register a 'ctrl+left' shortcut listener and Move index2 window to left handside & turn to fullscreen mode
  var ret = globalShortcut.register('ctrl+left', function() {
    console.log('ctrl+left is pressed. Move index2 window to left handside & turn to fullscreen mode');
    //window2.setPosition(-410,0);
    //window2.setFullScreen(true);
  });

  // Register a 'ctrl+right' shortcut listener and Move index2 window to right handside & turn to fullscreen mode
  var ret = globalShortcut.register('ctrl+right', function() {
    console.log('ctrl+right is pressed. Move index2 window to right handside & turn to fullscreen mode');
    //window2.setPosition(1380,0);
    //window2.setFullScreen(true);
    //window2.setBounds({width:1024, height:660, x:1367, y:0});   // using these set to display win2 on top
    //window4.setBounds({width:1024, height:108, x:1367, y:661}); // and win4 on button
  });

  // Register a 'ctrl+up' shortcut listener and Move index2 window to above & turn to fullscreen mode
  var ret = globalShortcut.register('ctrl+up', function() {
    console.log('ctrl+up is pressed. Move index2 window to above & turn to fullscreen mode');
    //window2.setPosition(20,-100);
    //window2.setFullScreen(true);
  });



  // Register a 'alt+s' shortcut listener and Shows and gives focus to the window
  var ret = globalShortcut.register('alt+s', function() {
    console.log('alt+s is pressed. ');
    if(window!=null){
      //window.show();
      window.setSize(1366, 238);
      window.show();
      alts_flag=1;
    }
    //if(window2!=null){
    //  window2.show();
    //}
    //if(window3!=null){
    //  window3.show();
    //}
    //if(window4!=null){
    //  window4.show();
    //}
  });

  // Register a 'alt+d' shortcut listener and Shows and gives focus to the window
  var ret = globalShortcut.register('alt+d', function() {
    console.log('alt+d is pressed. ');
    if(window!=null){

      //window = new BrowserWindow({width: dimensions.width, height: dimensions.height, x: 0, y:0, autoHideMenuBar: true});

      window.setSize(dimensions.width, dimensions.height);
      window.show();
      //alts_flag=1;
    }

  });

  // Register a 'alt+x' shortcut listener and Hides the window 
  var ret = globalShortcut.register('alt+x', function() {
    console.log('alt+x is pressed. ');
    if(window!=null){
      window.hide();
    }
    //if(window2!=null){
    //  window2.hide();
    //}
    //if(window3!=null){
    //  window3.hide();
    //}
    if(window4!=null){
      window4.hide();
    }
    if(window5!=null){
      window5.hide();
    }
    if(window7!=null){
      window7.hide();
    }
    if(window8!=null){
      window8.hide();
    }
    if(window9!=null){
      window9.hide();
    }
  });

  // Register a 'alt+o' shortcut listener and Shows and gives focus to the window & window2 & window4
  var ret = globalShortcut.register('alt+o', function() {
    //console.log('alt+o is pressed. Shows and gives focus to the window & window2 & window4');
    if(window7!=null){
      window7.show();
    }

  }); 

  // Register a 'alt+f' shortcut listener and Shows and gives focus to the window & window2 & window4
  var ret = globalShortcut.register('alt+f', function() {
    //console.log('alt+f is pressed. Shows and gives focus to the window & window2 & window4');

    if(window8!=null){
      window8.show();
    }
    if(window5!=null){
      window5.show();
    }

  }); 



  // Register a 'ctrl+s' shortcut listener and Shows and gives focus to the window & window2 & window4
  //var ret = globalShortcut.register('ctrl+s', function() {
  //  console.log('ctrl+s is pressed. Shows and gives focus to the window & window2 & window4');
  //  if(window!=null){
  //    window.show();
  //  }
    //if(window2!=null){
    //  window2.show();
    //}
    //if(window3!=null){
    //  window3.show();
    //}
    //if(window4!=null){
    //  window4.show();
    //}
  //});

  // Register a 'ctrl+h' shortcut listener and Hides the window & window2 & window4
  //var ret = globalShortcut.register('ctrl+h', function() {
  //  console.log('ctrl+h is pressed. Shows and gives focus to the window & window2 & window4');
  //  if(window!=null){
  //    window.hide();
  //  }
    //if(window2!=null){
    //  window2.hide();
    //}
    //if(window3!=null){
    //  window3.hide();
    //}
  //  if(window5!=null){
  //    window5.hide();
  //  }
  //});


  // Register a 'ctrl+b' shortcut listener and Starting listening below keyboard events
  var ret = globalShortcut.register('ctrl+b', function() {
    console.log('ctrl+b is pressed. Starting listening some keyboard event');

    // Register a 'right' shortcut listener.
    //var ret = globalShortcut.register('right', function() {
    //  console.log('right is pressed');
    //});

    // Register a 'left' shortcut listener.
    //var ret = globalShortcut.register('left', function() {
    //  console.log('left is pressed');
    //});

    // Register a '0' shortcut listener.
    var ret = globalShortcut.register('0', function() {
      console.log('0 is pressed');
      //window.webContents.sendInputEvent({keyCode: 'o', type: 'char'});
    });

    // Register a 'j' shortcut listener.
    var ret = globalShortcut.register('j', function() {
      console.log('j is pressed');
      //window.webContents.sendInputEvent({keyCode: 'j', type: 'char'});
      //window.webContents.on('did-finish-load', function() {
      //window.webContents.send('ping-j', 'Hi Joyce');
      //window2.webContents.send('ping-j', 'Hi Joyce');
      //});
    });

    // Register a 'c' shortcut listener.
    var ret = globalShortcut.register('c', function() {
      console.log('c is pressed');
      //window.webContents.sendInputEvent({keyCode: 'c', type: 'char'});
      //window.webContents.on('did-finish-load', function() {
      //window.webContents.send('ping-c', 'Bye Christine');
      //});
    });

    // Register a 's' shortcut listener.
    var ret = globalShortcut.register('s', function() {
      console.log('s is pressed');
      //window2.webContents.sendInputEvent({keyCode: 's', type: 'char'});
      //window.webContents.on('did-finish-load', function() {
      //window2.webContents.send('ping-s', 'Hi Scott');
      //});
    });

    // Register a 'k' shortcut listener.
    var ret = globalShortcut.register('k', function() {
      console.log('k is pressed');
      //window2.webContents.sendInputEvent({keyCode: 'k', type: 'char'});
      //window.webContents.on('did-finish-load', function() {
      //window2.webContents.send('ping-k', 'Bye Katy');
      //});
    });

  }); //End of Register a 'ctrl+b' shortcut listener


  // Register a 'ctrl+i' shortcut listener and 
  // Stopping listening below keyboard events,
  // Except Ctrl+I and Ctrl+B
  var ret = globalShortcut.register('ctrl+i', function() {
    console.log('ctrl+i is pressed. Stopping listening some keyboard event');

    globalShortcut.unregister('right');
    globalShortcut.unregister('left');
    globalShortcut.unregister('o');
    globalShortcut.unregister('j');
    globalShortcut.unregister('c');
    globalShortcut.unregister('s');
    globalShortcut.unregister('k');

  }); //End of Register a 'ctrl+i' shortcut listener





  //window.webContents.on('did-finish-load', function() {
  //  window.webContents.send('ping', 'Hi Joyce');
  //});

  ipc.on('asynchronous-message', function (event, arg) { // Listening message from index

    // send an asynchronous message back to the sender
    event.sender.send('asynchronous-reply', 'Receive message from index.html');  
  })

  ipc.on('asynchronous-message-to-win34', function (event, arg1,arg2,arg3,arg4,arg5,arg6,arg7) { // Listening message from bible2.html

    if(arg1==0){  // Close All windows
       if(window!=null){
         window.close();
       }
    }



    if(arg1==9){  // Minimize window, and hide rest of windows

       if(window!=null){
         window.minimize();
       }
       //if(window2!=null){
       //  window2.hide();
       //}
       if(window3!=null){
         window3.hide();
       }
       if(window4!=null){
         window4.hide();
       }
       if(window5!=null){
         window5.hide();
       }
       if(window7!=null){
         window7.hide();
       }
       if(window8!=null){
         window8.hide();
       }
       if(window9!=null){
         window9.hide();
       }
    }  // End of arg1==9

    if(arg1==8){  // Show all windows, except window5

       if(window!=null){
         window.show();
       }
       //if(window2!=null){
       //  window2.show();
       //}
       if(window3!=null){
         window3.show();
       }
       if(window4!=null){
         window4.show();
       }     
    }  // End of arg1==8

    if(arg1==7){  // Show window5

       if(window5!=null){
         window5.show();
       }
    }  // End of arg1==7

    if(arg1==6){  // For Sending arg to win5's function validate for producing search results

       //console.log('receive data from win. ');  // for debug
       //console.log(arg2);                       // for debug
       //console.log(app.getPath('userData'));
       window5.webContents.send('ping-win5', arg1,arg2,arg3,arg4,arg5,arg6,arg7);     // After Receive args from bible2.html 

       if(window5!=null){
         window5.show();
       }

    }  // End of arg1==6                                                              // Send them to win5 via chanel:'ping-win5' 

    if(arg1==5){  // For Sending findbook, findchap, findsec to bible2.html

       window.webContents.send('ping-win', arg1,arg2,arg3,arg4,arg5,arg6,arg7);

    }  // End of arg1==5

    if(arg1==4){  // Hide window5

       if(window5!=null){
         window5.hide();
       }
       if(window8!=null){
         window8.hide();
       }

    }  // End of arg1==4

    if(arg1==3){  // Show Help information in window5

       if(window5!=null){
         window5.webContents.send('ping-win5', arg1,arg2,arg3,arg4,arg5,arg6,arg7);
         window5.show();
       }

    }  // End of arg1==3


    if(arg1==2){  // Send information to original bible web site

       if(window7!=null){

         let vbook = arg2;         
         let vchap = arg3;
         let vsec = arg4;

         if(arg5<39){  // Old Testament
            window7.loadURL('http://bible.fhl.net/new/parsing.php?nodic=01&graph=1&engs=' + vbook + '&chap=' + vchap + '&sec=' + vsec + '&mode=3&m=');
         }

         if(arg5>38){  // New Testament

                             //http://bible.fhl.net/new/fhlwhparsing.php?nodic=01&graph=1&engs=Matt&chap=1&sec=1&mode=3&m=

            window7.loadURL('http://bible.fhl.net/new/fhlwhparsing.php?nodic=01&graph=1&engs=' + vbook + '&chap=' + vchap + '&sec=' + vsec + '&mode=3&m=');
         }

         window7.show();
       }

    }  // End of arg1==2

    if(arg1==22){  // Send information to original_2 bible web site

       if(window4!=null){

         let vbook = arg2;         
         let vchap = arg3;
         let vsec = arg4;

         //if(arg5<39){  // Old Testament

         window4.loadURL('https://biblehub.com/interlinear/' + vbook + '/' + vchap + '-' + vsec + '.htm');

         //https://biblehub.com/interlinear/revelation/1-1.htm

         //}

         //if(arg5>38){  // New Testament

                             //http://bible.fhl.net/new/fhlwhparsing.php?nodic=01&graph=1&engs=Matt&chap=1&sec=1&mode=3&m=

         //   window4.loadURL('http://bible.fhl.net/new/fhlwhparsing.php?nodic=01&graph=1&engs=' + vbook + '&chap=' + vchap + '&sec=' + vsec + '&mode=3&m=');
         //}

         window4.show();
       }

    }  // End of arg1==22


    if(arg1==10){  // Show window7

       if(window7!=null){

          window7.show();
       }

    }  // End of arg1==10

    if(arg1==100){  // Show window4

       if(window4!=null){

          window4.show();
       }

    }  // End of arg1==100


    if(arg1==11){  // restore window to origin size

       if(alts_flag==1){

         //width: dimensions.width, height: dimensions.height
         //window.setSize(dimensions.width, dimensions.height);
         //window.setSize(1366, 168);
         window.maximize();
         alts_flag=0;

       }
    }

    if(arg1==12){  // Send information to Listen NKJV bible web site

       if(window9!=null){

         let lbook = arg2;         
         let lchap = arg3;

         // https://www.blueletterbible.org/audio_video/popPlayer.cfm?type=nkjv_n&b=1&c=1

         // window7.loadURL('http://bible.fhl.net/new/fhlwhparsing.php?nodic=01&graph=1&engs=' + vbook + '&chap=' + vchap + '&sec=' + vsec + '&mode=3&m=');

         window9.loadURL('https://www.blueletterbible.org/audio_video/popPlayer.cfm?type=nkjv_n&b=' + lbook + '&c=' + lchap);


         window9.show();
       }

    }  // End of arg1==12

    if(arg1==13){  // Show window9

       if(window9!=null){

          window9.show();
       }

    }  // End of arg1==13


    if(arg1==1){
       window3.webContents.send('ping-win3', arg1,arg2,arg3,arg4,arg5,arg6,arg7);     // After Receive args from bible2.html 
                                                                                      // Send them to win3 via chanel:'ping-win3' 
       window4.webContents.send('ping-win4', arg1,arg2,arg3,arg4,arg5,arg6,arg7);     // After Receive args from bible2.html 
                                                                                      // Send them to win4 via chanel:'ping-win4'  

       if(window!=null){
         window.show();
       }
       //if(window2!=null){
       //  window2.show();
       //}
       if(window3!=null){
         window3.show();
       }
       if(window4!=null){
         window4.show();
       }     
    }  // End of arg1==1

    //window3.webContents.send('ping-win3', arg1,arg2,arg3,arg4,arg5,arg6,arg7);     // After Receive args from bible2.html 
                                                                                     // Send them to win3 via chanel:'ping-win3'
  })


  ipc.on('asynchronous-message-to-win4', function (event, arg1,arg2,arg3,arg4,arg5,arg6,arg7) { // Listening message from bible2.html

    window4.webContents.send('ping-win4', arg1,arg2,arg3,arg4,arg5,arg6,arg7);     // After Receive args from bible2.html 
                                                                                   // Send them to win4 via chanel:'ping-win4'
  })


});





app.on('will-quit', function() {
  // Unregister a shortcut.
  globalShortcut.unregister('ctrl+x');

  // Unregister all shortcuts.
  globalShortcut.unregisterAll();
});



// Quit when all windows are closed.

app.on('window-all-closed', function () {

  // On OS X it is common for applications and their menu bar

  // to stay active until the user quits explicitly with Cmd + Q

  if (process.platform !== 'darwin') {

    app.quit()

  }

})



app.on('activate', function () {

  // On OS X it's common to re-create a window in the app when the

  // dock icon is clicked and there are no other windows open.

  if (mainWindow === null) {

    createWindow()

  }

})



// In this file you can include the rest of your app's specific main process

// code. You can also put them in separate files and require them here.
