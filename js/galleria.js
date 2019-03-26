
	
var i=0;
var j;
var KuvaNyt;
var vaaraKuva;
var kuvat = new Array();
kuvat[0] = "kuva1";
kuvat[1] = "kuva2";
kuvat[2] = "kuva3";
kuvat[3] = "kuva4";
kuvat[4] = "kuva5";
kuvat[5] = "kuva6";
kuvat[6] = "kuva7";
kuvat[7] = "kuva8";
kuvat[8] = "kuva9";
kuvat[9] = "kuva10";
kuvat[10] = "kuva11";
kuvat[11] = "kuva12";




function Seuraava()
{
//Siirtää kuvataulukon indeksiä eteenpäin ja näyttää  vastaavan id:n kuvan
if (i<kuvat.length-1)
{i++;}
else
{i=0;}
KuvaNyt = document.getElementById(kuvat[i]);
KuvaNyt.style.display = "block";  
document.getElementById(i).className="Valittu";
//ne joiden id ei oo sama olioon asetetun id:n kanssa piilotetaan.
for(j=0;j<kuvat.length;j++)
{
if(i!=j)
	{vaaraKuva = document.getElementById(kuvat[j]);
	vaaraKuva.style.display = "none";
	document.getElementById(j).className="EiValittu";
	}
}

}

function Edellinen()
{
//Siirtää kuvataulukon indeksiä eteenpäin ja näyttää  vastaavan id:n kuvan
if (i>0)
{i--;}
else
{i=kuvat.length-1;}
KuvaNyt = document.getElementById(kuvat[i]);
KuvaNyt.style.display = "block";
document.getElementById(i).className="Valittu";
//ne joiden id ei oo sama olioon asetetun id:n kanssa piilotetaan.
for(j=0;j<kuvat.length;j++)
{
if(i!=j)
	{vaaraKuva = document.getElementById(kuvat[j]);
	vaaraKuva.style.display = "none";
	document.getElementById(j).className="EiValittu";
	}
}
}
//tällä kontrolloidaan thumnailssien painamista
function Vaihda(pass){

  i=pass;
  KuvaNyt = document.getElementById(kuvat[i]);
  KuvaNyt.style.display = "block";
  document.getElementById(i).className="Valittu";
  
  /*ne joiden id ei oo sama piilotetaan. Koska thumnailsseja on sama määrä kuin 
   kuva-id:itä Kuvat-listassa, voidaan käyttää samaa for-luuppia kumpiinkin kuviin*/
for(j=0;j<kuvat.length;j++)
{
if(i!=j)
	{vaaraKuva = document.getElementById(kuvat[j]);
	vaaraKuva.style.display = "none";
	document.getElementById(j).className="EiValittu";
	}
}
}
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
		
		
		/* Check the location of each desired element */
        $('.gallery').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
            
					
				var pic=document.getElementById("nolla");
				
                $(pic).animate({'opacity':'1'},50);
               
            }
        });
	});	
	
});


