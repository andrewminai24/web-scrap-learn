function jumpkickTest(){

    var url = "https://me.jumpkick.info/aaa-cp/api/cpUsers/login/"; // declares URL varialble API (place to retrieve data from)
    var userManagerurl = "https://me.jumpkick.info/#!/packages/user-manager"; //declares userManagerurl variable to retreieve the packages from the user manager
    var payload = {"u":"xyz@xyz.org","p":"placeHolder","t":null,"cpDb":"jkdpad_all","dataDb":""};

    var opt = {"payload":payload, "method":"post","followRedirects" : true,}; //logs onto the webpage


    Logger.log("MyRequest: " +  UrlFetchApp.getRequest(url) ); //retrieves data from the logger and gets My request: the url stated.
    var response = UrlFetchApp.fetch(encodeURI(url),opt); //declares variable called response to fetch
    Logger.log("Response: " + response);
    // Logs on the Logger "Response: " + response
    Logger.log("Response...:" + JSON.stringify(response.getAllHeaders()));

}

function jkCreateUser() {

    var payload = {"method":"post","table":"cpUsers","cpDb":"jkdpad_all","t":"412722LKT2a3aKgIElILiyvSvObZW1cdm1l3","dataDb":"nextgenp_main","user_full_name":"GREGRY TEST"}
    var opt = {"payload":payload};
    var response = UrlFetchApp.fetch(encodeURI("https://www.ngpf.org/aaa-content/packages/tracking-manager/api/log-user.php?t=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIxMDk3In0.lThkVKNzbqyf4Rx04QLFHNiFiv-Dgs-How1bHq8M7c0"),opt);
    Logger.log(response);
//t: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIxMTA0In0.4F4w6kNuZ3rRpaVyWcrmROJxLzGGnQe29IUL94sfwQI


}


function jumpkickLogin () {

    var url = "https://me.jumpkick.info/aaa-cp/api/cpUsers/login/";
    var userManagerurl = "https://me.jumpkick.info/#!/packages/user-manager";
    var payload = {"u":"xyz@xyz.org","p":"placeHolder","t":null,"cpDb":"jkdpad_all","dataDb":""};
    var opt = {"payload":payload, "method":"post","followRedirects" : true,};


    var response = UrlFetchApp.fetch(encodeURI(url),opt);
    var sessionDetails = response.getAllHeaders()['Set-Cookie'];

    return sessionDetails
}

function getJumpkickUserById ( id , headers ) {

    var payload = {"method":"get","table":"cpUsers","record":id,"cpDb":"jkdpad_all","t":"412722LKT2a3aKgIElILiyvSvObZW1cdm1l3","dataDb":"nextgenp_main"}
    var opt = {"payload":payload, "headers" : {"Cookie" : headers},};
    var response = UrlFetchApp.fetch(encodeURI("https://me.jumpkick.info/aaa-cp/angular/stuff/packages/user-manager/api/crud/"),opt);

    return response
}


function updateJumpkickUser( userNum , updateStatus  ) {

    var headers = jumpkickLogin();
    var payload = {"method":"updateUser_type","table":"cpUsers","record":userNum,"type":updateStatus,"cpDb":"jkdpad_all","t":"412722LKT2a3aKgIElILiyvSvObZW1cdm1l3","dataDb":"nextgenp_main"}
    var opt = {"payload":payload, "headers" : {"Cookie" : headers},};
    var response = UrlFetchApp.fetch(encodeURI("https://me.jumpkick.info/aaa-cp/angular/stuff/packages/user-manager/api/crud/"),opt);

}

function getFincampList () {

    var headers = jumpkickLogin();

    var payload = {"method":"get","record":"20","stateParams":{"#":null,"categoryRoot":"19","categoryLevel":"20"},"t":"412722LKT2a3aKgIElILiyvSvObZW1cdm1l3","cpDb":"jkdpad_all","dataDb":"nextgenp_main"}
    var opt = {"payload":payload, "headers" : {"Cookie" : headers},};
    var response = UrlFetchApp.fetch(encodeURI("https://me.jumpkick.info/aaa-content/user/packages/categories/api/cpCategoriesLevels/get/"),opt);

    //Logger.log("Response: " + response );
    Logger.log("Response.getContextText: " + response.getContentText());
    // Logger.log("Response.getAllHeaders: " + JSON.stringify(response.getAllHeaders()));

}




function createJumpkickVpd ( tags )

{

    var headers = jumpkickLogin();

//  {"values":{"virtualPds_date":"2019-02-14","virtualPds_name":"Virtual PD Test Page","virtualPds_description":"<p>This is a test description.</p>","virtualPds_virtualPdURL":"www.testurl.com","virtualPds_startTime":"15:00:00","virtualPds_endTime":"16:00:00"},"details":{"table":"virtualPds"},"options":[],"t":"412722LKT2a3aKgIElILiyvSvObZW1cdm1l3","cpDb":"jkdpad_all","dataDb":"nextgenp_main"}

    var payload = {"method":"post","values":{"virtualPds_name":"Test3","virtualPds_description":"<p>Test 3</p>"},"details":{"table":"virtualPds"},"options":"[]","t":"412722LKT2a3aKgIElILiyvSvObZW1cdm1l3","cpDb":"jkdpad_all","dataDb":"nextgenp_main"};
    var opt = {"payload":payload, "headers" : {"Cookie" : headers}};

    Logger.log ( "Options: " + JSON.stringify(opt) );
    var response = UrlFetchApp.fetch(encodeURI("https://me.jumpkick.info/aaa-cp/api/jkd/add/"),opt);

    Logger.log ("Response: " + response) ;
    Logger.log ("Response.getResponseCode: " + response.getResponseCode());
    Logger.log ( "Response.responseCode: " + JSON.stringify(response.getHeaders()));

}

function deleteJumpkickVpd ( )
{
    var headers = jumpkickLogin();

    var payload = {"method":"post","details":{"table":"virtualPds","record":"7"},"t":"412722LKT2a3aKgIElILiyvSvObZW1cdm1l3","cpDb":"jkdpad_all","dataDb":"nextgenp_main"};

    var opt = {"payload":payload, "headers" : {"Cookie" : headers},};
    var response = UrlFetchApp.fetch(encodeURI("https://me.jumpkick.info/aaa-cp/api/jkd/delete/"), opt);

    Logger.log ("Response: " + response) ;
}

function updateJumpkickVpd(){

//{"values":{"virtualPds_recordNumber":"5","virtualPds_date":null,"virtualPds_name":"Test","virtualPds_description":"<p>asdf</p>","virtualPds_virtualPdURL":null,"virtualPds_startTime":null,"virtualPds_endTime":null},"details":{"table":"virtualPds","record":"5"},"t":"412722LKT2a3aKgIElILiyvSvObZW1cdm1l3","cpDb":"jkdpad_all","dataDb":"nextgenp_main"}
    var headers = jumpkickLogin();

    var payload = {"method":"post","values":{"virtualPds_recordNumber":"5","virtualPds_date":null,"virtualPds_name":"Test2","virtualPds_description":"<p>asdf</p>","virtualPds_virtualPdURL":null,"virtualPds_startTime":null,"virtualPds_endTime":null},"details":{"table":"virtualPds","record":"5"},"t":"412722LKT2a3aKgIElILiyvSvObZW1cdm1l3","cpDb":"jkdpad_all","dataDb":"nextgenp_main"};

    var opt = {"payload":payload, "headers" : {"Cookie" : headers},};
    var response = UrlFetchApp.fetch(encodeURI("https://me.jumpkick.info/aaa-cp/api/jkd/delete/"), opt);

    Logger.log ("Response: " + response) ;

}
