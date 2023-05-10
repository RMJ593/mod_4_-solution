var a=new Array();
a[0]="john";
a[1]="Joe";
a[2]="loreal";
a[3]="Delies";
a[4]="cathy";
a[5]="Jose";
a[6]="yohan";
a[7]="johnson";



for (var i = 0; i < a.length; i++) {
	if(a[i].charAt(0)==='J'|| a[i].charAt(0)==='j'){
        document.write("Goodbye "+ a[i] + "<br>")
	}
    else{
		document.write("Hello "+ a[i] +"<br>")
	}
}