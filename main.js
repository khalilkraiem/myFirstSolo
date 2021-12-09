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
        $('#divClient').show()
    }
    alert("go again")
}
function creatperson(){
    console.log("yalla")
    var name=$('#namecdmin').val()
    var mail=$('#mailcdmin').val() 
    var telephone=$("#telcdmin").val()
    var password=$("#pwc").val()
    var username=$('#userc').val()
    var client=makeClient(name,mail,telephone,password,username)
    clients.push(client)
    console.log(clients)
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
    
    var homeTitle=('<h1 id="homeTitle2">HOME</h1>')
    var catecories=('<div id="catecories" >CATEGORIES</div>')
    var profilTitle=('<div id="profilTitle2">profil</div>')
    var goOut=('<h2 id="goOut2">Go Out</h2>')
   
    $(barre).append(homeTitle)
    $(barre).append(catecories)
    $(barre).append(profilTitle)
    $(barre).append(goOut)
    return barre
}
function zonearticle(){
    var zoneArticle=$('<div id="zoneArticle"></div>')

    var divArticle1=divarticle()
    $(divArticle1).attr('id','art1')
    var divArticle2=divarticle()
    $(divArticle2).attr('id','art2')
    var divArticle3=divarticle()
    $(divArticle3).attr('id','art3')
    var divArticle4=divarticle()
    $(divArticle4).attr('id','art4')
    var divArticle5=divarticle()
    $(divArticle5).attr('id','art5')
    var divArticle6=divarticle()
    $(divArticle6).attr('id','art6')

    zoneArticle.append(divArticle1,divArticle2,divArticle3,divArticle4,divArticle5,divArticle6)

    return zoneArticle


}

function divcreatClient(){
    var divCreatclient=$('<div id="divCreatclient"><input id="</div>')
    var name=$('<input id="#namecdmin">name</input>')
    var mail=$('<input id="#mailcdmin">mail</input>') 
    var telephone=$('<input id="#telcdmin">telephone</input>')
    var password=$('<input id="#pwc" type="password">password</input>')
    var username=$('<input id="#userc">username</input>')
    var button=$("<button id='creatcl' onclick='creatperson'>join us</button>")
    divCreatclient.append(name,mail,telephone,password,username,button)
    return divCreatclient

}
function divcreatAdmin(){
    divCreatAdmin=$('<div id="divCreatAdmin"><input id="</div>')
    var name=$('#nameAdmin').val()
    var mail=$('#mailAdmin').val() 
    telephone=$("#telAdmin").val()
    password=$("#pwa").val()
    username=$('#userA').val()

    divCreatAdmin= makeAdmin(name,mail,telephone,password,username)
}
function divcreatProduct(){
    var button=('<#addProd')
    button.click(function(){
    var brand=$("#brand").val()
    var model=$('#model').val()
    var descreption=$("#desc").val()
    var category=$("#cat").val()
    var price=$('#price').val()
    
    article=makeArticle(brand,model,descreption,category,price,quantity)
    })
    articles.push(article)
    
}
/*

}
function creatDivJournal(){

}
function creatDivFacturation(){

}
*/

///////// little function ////////
function divarticle(){
     var divArticle=$('<div class="box">ARTICLE</div>')
     var titleArticle=$('<h1 ">title</h1>')
     var priceAricle=$('<h2 id="price" type="text">price</h2>')
     var descArticle=('<p></p>')
     var buy=('<button>BUY</button>')
     $(divArticle).append(titleArticle,descArticle,priceAricle,buy)
     return divArticle
}   

 /*
//////////Data Modeling///////////
*/

var clients=[]
var articles=[]

function makeArticle(){
    return{
        brand:brand,
        model:model,
        descreption:descreption,
        category:category,
        price:price,
        quatity:quatity,
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
function makeClient(name,mail,telephone,password,username){
    return{
        name:name,
        mail:mail,
        telephone:telephone,
        password:password,
        username:username,
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

