window.onload = function () {
	
	 var words = ['helsinki', 'moon', 'jesus', 'sun', 'volvo', 'mango', 'lucifer', 'vatican',
        'reptile', 'darkness', 'horse', 'vampire', 'dracula', 'skidrow', 'metallica', 'nirvana', 'snow', 'rain', 'grey',
        'evil', 'demons', 'asus', 'acer', 'lenovo', 'iphone', 'mercedes'];
		
		
		 var hints = ['capital of finland', 'bright and round object in the sky at night', 'Our savior', 'The natural source of vitamin d', 'swedish car brand', 'exotic fruit ', ' a proud, rebellious archangel', 'Home of the pope',
        'cold-blooded animal', 'the polar opposite of brightness', ' a large animal which people can ride', 'a creature from folklore that subsists by feeding on the vital essence', 'Prince of darkness and count of transylvania', 'American rock band', 'american rock band', 'american rock band', 'atmospheric water vapour frozen into ice crystals and falling in light white flakes', 'the condensed moisture of the atmosphere falling visibly in separate drops', 'a cool, neutral, and balanced color associated with sad mood',
        'profoundly immoral and wicked', 'classic italian horror movie from dario argento', 'computer manufacturer', 'computer manufacturer', 'computer manufacturer', 'phone manufacturer', 'famous german car brand'];
		
	var magicNumber= Math.floor(Math.random() * words.length) + 0; 
	hintIndex=2;
	lifeIndex=6;
	ResurrectionIndex=2;
	
	
		
		
		
	
	function loadvalue(hintIndex,LifeIndex,ResurrectionIndex){
		var a=document.getElementById("playervalue");
		var b=document.getElementById("tipvalue");
		var c=document.getElementById("crossvalue");
		a.innerHTML=lifeIndex;
		b.innerHTML=hintIndex;
		c.innerHTML=ResurrectionIndex;
		
		
	}
	loadvalue(hintIndex,lifeIndex,ResurrectionIndex);
	
	function updatelife(lifeIndex){
		var a=document.getElementById("playervalue");
		
		a.innerHTML=lifeIndex;
	}
	document.getElementById("tipic").addEventListener("click", function(){

		if(hintIndex>0){
		alert(hints[magicNumber]);
		hintIndex--;
		
		var b=document.getElementById("tipvalue");
		b.innerHTML=hintIndex;}
		else{
			return false;
		}
	});
	
	
	document.getElementById("crossic").addEventListener("click", function(){

		if(ResurrectionIndex>0){
			ResurrectionIndex--;
		mistakecounter--;
		lifeIndex++;
		loadvalue(hintIndex,lifeIndex,ResurrectionIndex);
		
		var c=document.getElementById("crossvalue");
		c.innerHTML=ResurrectionIndex;}
		else{
			return false;
		}
	});
	
	function updateres(ResurrectionIndex){
		var c=document.getElementById("crossvalue");
		c.innerHTML=ResurrectionIndex;
	}
	function drawstart() {
	  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("death");
	  ctx.drawImage( img, 0, 0, img.width,img.height, 0, 0,c.width,c.height );
	}
	
	function emptycanvas(){
		
		
		 var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
		ctx.clearRect(0, 0, c.width, c.height);
	}
	
	
	
	 $(function() {  
$("#tooltip1").tooltip(); 
$("#tooltip2").tooltip();
$("#tooltip3").tooltip(); 
  
});  
	
	drawstart();
var indexes=['6','6','6'];
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
		 
		
		
		
		
		
var magicWord=words[magicNumber];
var magicHint=hints[magicNumber];
var magicWordarr= magicWord.split("");
var magicWordarr2= magicWord.split("");
var magicWordarrfilter =[...new Set(magicWordarr)];

		
		console.log(magicNumber); // the number
		console.log(magicWord);
		console.log(magicWord.length);
		console.log(magicWordarr);
		console.log(magicWordarr2);
		console.log(magicWordarrfilter);
		var myWord=[];
		 var buttons =function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
	
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter'+i;
	  list.className = 'button';
      list.innerHTML = alphabet[i];
      //check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
	  
    }
  }
  
  var inputs=function () {
	  selectdiv = document.getElementById('display');
	  for (var z=0;z< magicWord.length;z++){
	  
	  
    input = document.createElement('input');
	
  input.setAttribute("type", "text");
  input.setAttribute("readonly", true);
   input.id='myinput'+z;
   input.classList.add("inputclass");
   input.name=z;
  selectdiv.appendChild(input);
  }
  }
  
	 var printit=function () {
	  selectdiv2 = document.querySelectorAll(".x3");
	  for (var q=0;z< indexes.length;q++){
	  
	  
    
  }
  }  
	  
  inputs();
  buttons();
  var posarr=[];
  function removeItem(arr,value) {
  var i = 0;
  
  while (i < arr.length) {
    if (arr[i] === value) {
		
      arr.splice(i, 1);
	
    } else {
      ++i;
    }
  }
  return arr;
   
}

    function findpos(arr2,value2) {
  arr2.forEach(function(x,i){
    x === value2 && posarr.push('myinput'+i); 
  });
}

function write(arr3,value3) {
  arr3.forEach(function(item,index){
    //x === value2 && posarr.push('myinput'+i); 
	 //var x[index] = value3;
	 document.getElementById(item).value = value3;
	 posarr=[];
  });
}

function changeclass(id){
document.getElementById(id).classList.remove('button');	
document.getElementById(id).classList.add('button2');	
}
 function winner(){


var r= confirm('you win');
r;
if (r==true)
  {
  location.reload();
  }
else
  {
  setTimeout(function(){location.reload(); }, 3000);
  }
 }

function loser(){

var r= confirm('you lose');
r;
if (r==true)
  {
  location.reload();
  }
else
  {
  setTimeout(function(){location.reload(); }, 3000);
  }
}	
  function status( win,lose){
	  if(win.length==0 && mistakecounter<6){winner();}
	  if(mistakecounter==6){loser();}	 
//else{return false;}
return win;	  
	  
  }
  
  function draw(num) {
	  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("scream");
	  if(num==1){
		  
		  emptycanvas();
		  ctx.drawImage( img, 0, 300, img.width,img.height, 0, 132,c.width,c.height );}
	  
	  if(num==2){ctx.drawImage( img, 0, 300, img.width,img.height, 0, 132,c.width,c.height );
	              ctx.drawImage( img, 0, 250, img.width,img.height, 0, 112,c.width,c.height );
	   }
	    if(num===3){ctx.drawImage( img, 0, 300, img.width,img.height, 0, 132,c.width,c.height );
		ctx.drawImage( img, 0, 250, img.width,img.height, 0, 112,c.width,c.height );
		ctx.drawImage( img, 0, 200, img.width,img.height, 0, 92,c.width,c.height );
		}
		 if(num==4){ctx.drawImage( img, 0, 300, img.width,img.height, 0, 132,c.width,c.height );
		 ctx.drawImage( img, 0, 250, img.width,img.height, 0, 112,c.width,c.height );
		 ctx.drawImage( img, 0, 200, img.width,img.height, 0, 92,c.width,c.height );
		 ctx.drawImage( img, 0, 160, img.width,img.height, 0, 71,c.width,c.height );
		 
		 }
		  if(num==5){ctx.drawImage( img, 0, 300, img.width,img.height, 0, 132,c.width,c.height );
		  ctx.drawImage( img, 0, 250, img.width,img.height, 0, 112,c.width,c.height );
		  ctx.drawImage( img, 0, 200, img.width,img.height, 0, 92,c.width,c.height );
		  ctx.drawImage( img, 0, 160, img.width,img.height, 0, 71,c.width,c.height );
		  ctx.drawImage( img, 0,98, img.width,img.height, 0, 42,c.width,c.height );
		  }
		   if(num==6){ctx.drawImage( img, 0, 300, img.width,img.height, 0, 132,c.width,c.height );
		   ctx.drawImage( img, 0, 250, img.width,img.height, 0, 112,c.width,c.height );
		   ctx.drawImage( img, 0, 200, img.width,img.height, 0, 92,c.width,c.height );
		   ctx.drawImage( img, 0, 160, img.width,img.height, 0, 71,c.width,c.height );
		   ctx.drawImage( img, 0,98, img.width,img.height, 0, 42,c.width,c.height );
		   ctx.drawImage( img, 0, 0, img.width,img.height, 0, 0,c.width,c.height );
		   }
  
  
}
  var selectors = document.querySelectorAll(".button");
  console.log(selectors);
  var mistakecounter=0;
  
  for (var j=0;j< selectors.length;j++){
  selectors[j].addEventListener('click', function(event) {
// alert(this.innerHTML);
 if(magicWordarrfilter.includes(this.innerHTML)){
	 removeItem(magicWordarr,this.innerHTML);
	 findpos(magicWordarr2,this.innerHTML);
	 write(posarr,this.innerHTML);
	 changeclass(this.id);
	 
	 //var y =magicWordarr2.indexof(this.innerHTML);
	 //posarr.push(y);
	 //alert(this.id);
	  myWord.push(this.innerHTML);
	  console.log('my word and posarr');
 console.log(myWord);//the word i wrote
 //console.log(posarr);//positions
 }
else{
	changeclass(this.id);
	mistakecounter++;
	lifeIndex--;
	updatelife(lifeIndex);
	draw(mistakecounter);
	
}
console.log('magicWordarr');
console.log(mistakecounter);

 //var x=document.getElementById("myinput");
 //x.value=myWord;
 status(magicWordarr,mistakecounter);
 console.log(magicWordarr);
  });
  
  }
  
  
}