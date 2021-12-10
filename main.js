$(document).ready(function () {
    var body=$('body')
    var divHome=divhome()
    body.append(divHome)
    var divAdmin=divadmin()
    body.append(divAdmin)
    divAdmin.hide()
    var divClient=divclient()
    body.append(divClient)
    divClient.hide()
});

function creataccount(){
    console.log("rrrr")
    $('#signin').hide();    
    $("#divCreatclient").show();
}
function login(){
    var user=$("#username").val()
    var ps=$('#password').val()
    var x=false
    for(var i=0;i<clients.length;i++)
    if (user===clients[i].username&&ps===clients[i].password){
    x= true
    }
    if (x){
        $("#divHome").hide()
        $("#divClient").show()
        $('#profilTitle2').html(user)
    }else{
    alert("go again")
    }
}
function creatperson(){
    console.log("yalla")
    
    var name=$('#namecdmin').val()
    var mail=$('#mailcdmin').val() 
    var telephone=$("#telcdmin").val()
    var password=$("#pwc").val()
    var username=$('#userc').val()
    if(name!==''&&telephone!==''&&password!==''&&username!==''&&mail.includes("@")==true){
        var client=makeclient($('#namecdmin').val(),$('#mailcdmin').val(),$("#telcdmin").val(),$("#pwc").val(),$('#userc').val())
            clients.push(client)
            console.log(clients)
            $("#divHome").hide()
            $('#signin').show();    
            $("#divCreatclient").hide();
            $("#divClient").show()
            $('#profilTitle2').html(username)
            home()
    }else{ 
        alert("error try again") 
        }  
}
function goOut(){
    console.log('out')
    $("#divHome").show()
    $("#divClient").hide()
    

}
function login2(){
$('#signin').show();    
$("#divCreatclient").hide();
}
function home(){
    

    

}
//////////Principal Div///////////
function divhome(){
    var divHome=$('<div id="divHome"></div>')
    $(divHome).addClass("page")
    var divsignIn=divSingIn()
    divHome.append(divsignIn)
    var divcreatclient=divcreatClient()
    divHome.append(divcreatclient)
    $(divcreatclient).addClass('formulaire')
    $(divcreatclient).hide()
    return divHome
}
function divadmin(){
    var divAdmin=$('<div id="divAdmin"></div>')
    $(divAdmin).addClass("page")
    var barreAdmin=barreadmin()
    // barreAdmin.addClass("barre")
    divAdmin.append(barreAdmin)
    
    return divAdmin
}

function divclient(){
    
    var divClient=$('<div id="divClient"></div>')
    divClient.addClass("page")

    var barreClient=barreclient()
    var zoneArticle=zonearticle()
    
    divClient.append(barreClient,zoneArticle)
    return divClient

}

//////////Secondary Div///////////
function divSingIn(){
    var divSingIn=$('<div id="singin"></div>')
    var username=$('<input id="username" type="text">username</input>')
    var passwords=$('<input id="password" type="password">password</input></br>')
    var logIn=$('<button id="login" onclick="login()">Log In</button>')
    var creatAccount=$('<button id="creatAccount" onclick="creataccount()" >Create new account</button>')
    var forgotPassword=$('<button id="forgetpassword">Forgot password?</button>')
    divSingIn.append(username,passwords,logIn,creatAccount,forgotPassword)
    
    return divSingIn
    
}
function barreadmin(){
    var barre=$('<div id="barreadmin"></div>')    
    
    var homeTitle=('<h1 id="homeTitle">HOME</h1>')
    var taskBarre=('<div id="taskBarre" >TASK</div>')
    var profilTitle=('<div id="profilTitle">profil</div>')
    var goOut=('<h2 id="goOut">Go Out</h2>')
   
    $(barre).append(homeTitle)
    $(barre).append(taskBarre)
    $(barre).append(profilTitle)
    $(barre).append(goOut)
    return barre
}
function barreclient(){
    var barre=$('<div id="barreclient"></div>')    
    
    var homeTitle=('<h1 id="homeTitle2" onclick="home()">HOME</h1>')
    var catecories=('<input type= id="catecories" >CATEGORIES</div>')
    var profilTitle=('<div id="profilTitle2">profil</div>')
    var goOut=('<h2 id="goOut2" onclick="goOut()">Go Out</h2>')
   
    $(barre).append(homeTitle)
    $(barre).append(catecories)
    $(barre).append(profilTitle)
    $(barre).append(goOut)
    return barre
}
function zonearticle(){
    var zoneArticle=$('<div id="zoneArticle"></div>')
    var zoneArticleA=$('<div id="zoneArticleA"></div>')
    var zoneArticleB=$('<div id="zoneArticleB"></div>')
    for(var i=0;i<3;i++){
    var divArticle=divarticle(i)
    $(divArticle).attr('class','art1')
    zoneArticleA.append(divArticle)
    }
    for(var i=3;i<6;i++){
    var divArticle=divarticle(i)
    $(divArticle).attr('class','art2')
    zoneArticleB.append(divArticle)
    }
    
    zoneArticle.append(zoneArticleA,zoneArticleB)

    return zoneArticle


}

function divcreatClient(){
    var divCreatclient=$('<div id="divCreatclient"><input id="</div>')
    var name=$("<input id=namecdmin type=text>")
    var mail=$('<input id="mailcdmin"type="text">mail</input>') 
    var telephone=$('<input id="telcdmin" type="text">telephone</input>')
    var password=$('<input id="pwc" type="password">password</input>')
    var username=$('<input id="userc" type="text">username</input>')
    var button=$("<button id='creatcl' onclick='creatperson()'>join us</button>")
    var button2=$("<button id='login2' onclick='login2()'>Log In</button>")
    divCreatclient.append(name,mail,telephone,password,username,button,button2)
    return divCreatclient

}
function divcreatAdmin(){
    var divCreatAdmin=$('<div id="divCreatAdmin"><input id="</div>')
    var name=$('#nameAdmin').val()
    var mail=$('#mailAdmin').val() 
    telephone=$("#telAdmin").val()
    password=$("#pwa").val()
    username=$('#userA').val()

    divCreatAdmin= makeAdmin(name,mail,telephone,password,username)
}
// function divcreatProduct(){
//     var button=('<#addProd')
//     button.click(function(){
//     var brand=$("#brand").val()
//     var model=$('#model').val()
//     var descreption=$("#desc").val()
//     var category=$("#cat").val()
//     var price=$('#price').val()
    
//     article=makeArticle(brand,model,descreption,category,price,quantity)
//     })
//     articles.push(article)
    
// }
/*

}
function creatDivJournal(){

}
function creatDivFacturation(){

}
*/

///////// little function ////////
function divarticle(i){
     var divArticle=$('<div class=box>ARTICLE</div>')
     
     var titleArticle=$('<h1 class=title>title</h1>')
     titleArticle.text(articles[i].model+" "+articles[i].brand)
     var priceAricle=$('<h2 class=price type="text">price</h2>')
     $(priceAricle).text(articles[i].price)

     var descArticle=('<p></p>')
     $(descArticle).text(articles[i].descreption)

     var buy=('<button>BUY</button>')
     $(divArticle).append(titleArticle,descArticle,priceAricle,buy)
     return divArticle
}   

 /*
//////////Data Modeling///////////
*/

var clients=[{name:'khalil',
    mail:'khalilmedkraiem@gmail.com',
    telephone:'52701262',
    password:'11019029',
    username:'khalil'}]

article1=makeArticle("nikon","D610","full frame camera","dslr",3000,6)
article2=makeArticle("canon","6D","full frame camera","dslr",3000,6)
article3=makeArticle("sony","alpha7II","full frame camera","slr",3000,6)
article4=makeArticle("sony","NX5","full frame camera","camescope",3000,6)
article5=makeArticle("godox","660TT","full frame camera","flash",3000,6)
article6=makeArticle("aputure","TX1S","full frame camera","trigger",3000,6)
var articles=[article1,article2,article3,article4,article5,article6]
function makeArticle(brand,model,descreption,category,price,quantity){
    return{
        brand:brand,
        model:model,
        descreption:descreption,
        category:category,
        price:price,
        quantity:quantity,
        ajouterNewQuantity:inc,
        modifierPrice:modifierPrice

    }
}
function modifierPrice(price){
    this.price=this.price+price
}
function inc(newQuatity){
    this.quatity=this.quatity+newQuatity
}
function makeclient(name,mail,telephone,password,username){
    return{
        name:name,
        mail:mail,
        telephone:telephone,
        password:password,
        username:username
        }
}


function searchCat(string){
    var categories=[]
    for(var i=0;i<articles.length;i++){
        if (string===articles[i].category){
            categories.push(articles[i])
        }
    }
    return catecories
}

