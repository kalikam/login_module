// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//

var login = Titanium.UI.createWindow({  
    title:'Login',  
    tabBarHidden:true,  
    url:'main_window/login.js'  
});  
var loginTab = Titanium.UI.createTab({  
    title:"Login",  
    window:login  
});  
tabGroup.addTab(loginTab);

//
// create controls tab and root window
//




//
//  add tabs
//



// open tab group
tabGroup.open();
