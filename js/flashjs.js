//Doris (dorisyu@yahoo-inc.com)
var g,a,p,m,v,ie,ns,cw,mov_top;
g=navigator;
a=g.userAgent;
p=g.appVersion;
cw=document.body.clientWidth;
if(navigator.userAgent.indexOf("Netscape")!=-1){
 ns=true;

}
m=p.indexOf('MSIE');

if (m!=-1 && a.indexOf('Win')!=-1) {
 v=parseFloat(p.substring(m+4));

 if (v>=5) {
  ie=true;
  if(cw >800)	{
        move_top =0;
  }else {		
    move_top =0;
   }
 }
 else{ ns=true;}
}

// New Stuff
var BPselects = document.getElementsByTagName("select");

function OffSelect() {
  for (BPfu=0;BPfu<BPselects.length;BPfu++) {
   BPselects[BPfu].style.visibility="hidden";
  }
}

function OnSelect() {
   for (BPfu=0;BPfu<BPselects.length;BPfu++) {
    BPselects[BPfu].style.visibility="visible";
  }
}

function resize() {
document.all.div_1ST.style.pixelLeft=(document.body.clientWidth-Lwidth);
	if((document.body.clientWidth-(780+Swidth*2))>0){
		document.all.div_1ST_img.style.pixelLeft=(document.body.clientWidth-Swidth+document.body.scrollLeft);
	}
	else{
	
		document.all.div_1ST_img.style.pixelLeft=780+((document.body.clientWidth-780)/2);
	}
}

function turnpage() {
 OffSelect()
// ob=document.all.first_img;
// ob.style.visibility="hidden";
 sob=document.all.first_img;
 sob.style.visibility="hidden";
 sob.style.display="none";
 ob=document.all.showSwf;
 ob.style.visibility="visible";
 ob.style.display="inline";
 ob.play();
 flashPlayTr();
}

function BPdone1ST(s){

 if (s=='close') { 
    OnSelect();
    ob=document.all.first_img;
    ob.style.visibility="visible";
    ob.style.display="inline";
    ob.src=smallSWF;
    ob=document.all.showSwf;
    ob.style.visibility="hidden";
    ob.style.display="none";
    ob.rewind();    
    closeTr();
   }

}
function SwfAction(s){
 if (s=='done') { 
    OnSelect();
    ob=document.all.first_img;
    ob.style.visibility="visible";
    ob.style.display="inline";
    ob.src=smallSWF;
    ob=document.all.showSwf;
    ob.style.visibility="hidden";
    ob.style.display="none";
    ob.rewind();    
    closeTr();
   }

}

function showSwf_DoFSCommand(command, args) {
  if (command == 'bp_click1' || command == 'event_click1') {
    window.open ( advUrl1,'_blank');
  }else if (command == 'bp_click2' || command == 'event_click2') {
    window.open ( advUrl2,'_blank');
  }else if (command == 'bp_click3'  || command == 'event_click3') {
    window.open ( advUrl3,'_blank');
  }else if (command == 'bp_click4' || command == 'event_click4') {
    window.open ( advUrl4,'_blank');
  }
}


if (ie) {

 if (document.body.clientWidth < Lwidth) {
 Lheight=Math.floor(Lheight*document.body.clientWidth/Lwidth);
 Lwidth=document.body.clientWidth;
 }

 document.write('<div id=div_1ST_img style="position:absolute;height:100;width:100;top:0;right:0;visibility:visible;display:inline;z-index:103"><OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+Swidth+'" height="'+Sheight+'"  id="first_img" style="visibility:visible;display:inline"><PARAM NAME=movie VALUE="'+smallSWF+'"><PARAM NAME=quality VALUE=autohigh><PARAM NAME=loop VALUE=true><param name=wmode value=transparent><param name=play value=true></OBJECT></div>');
 document.write('<div id=div_1ST style="position:absolute;height:'+Lheight+';width:'+Lwidth+';top:'+move_top+';right:0;visibility:hidden;display:inline;z-index:103"><OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ID=showSwf WIDTH='+Lwidth+' HEIGHT='+Lheight+' style="visibility:hidden;display:none"><PARAM NAME=movie VALUE="'+firstSWF+'"><PARAM NAME=quality VALUE=autohigh><PARAM NAME=loop VALUE=true><param name=wmode value=transparent><param name=play value=true></OBJECT></div>');

  document.write('<scr'+'ipt language=VBS'+'cript\>\n');
  document.write('on error resume next \n');
  document.write(' Sub showSwf_FSCommand(ByVal command, ByVal args)\n');
  document.write(' call showSwf_DoFSCommand(command, args)\n');
  document.write(' end sub\n');
  document.write('</scrip'+'t\> \n');
	if((document.body.clientWidth-(780+Swidth*2))>0){
		document.all.div_1ST_img.style.pixelLeft=(document.body.clientWidth-Swidth+document.body.scrollLeft);
	}
	else{
	
		document.all.div_1ST_img.style.pixelLeft=780+((document.body.clientWidth-780)/2);
	}
 window.onresize=resize;
 window.onscroll=resize; 


}


function openWin(x) {
	window.open (x,'_blank');
}
