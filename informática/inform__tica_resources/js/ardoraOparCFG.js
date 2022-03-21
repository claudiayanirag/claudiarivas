//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=3;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=10; scoreInc=10; scoreDec=8
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Copperplate / Copperplate Gothic Light, sans-serif";
var fActi="'Times New Roman', Times, serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Es correcto!"; messageTime="Se acabó el tiempo."; messageError="Inténtalo de nuevo!"; messageErrorG="Inténtalo de nuevo!"; messageAttempts="Se acabaron los numeros de intentos."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5mb3JtX190aWNh"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="inform__tica_resources/media/";
var indexG=0;
var words1G=["QWJyaXIgbG9zIG9qb3M=","ZGVzcGVydGFyc2U=","c2VudGFyc2U=","bWV0ZXIgZWwgcHJpbWVyIHBpZSBlbiBsYSBzYW5kYWxpYQ==","bWV0ZXIgZWwgc2VndW5kbyBwaWUgZW4gbGEgc2FuZGFsaWE=","bGV2YW50YXJzZQ=="];
var words2G=[];
var words3G=[];
var c1=[14,11,8,34,35,10];
var c2=[];
var c3=[];
