
function isEmpty(x){
	var r=!x&&x!=0;
	if(!r){
		var l=x.length;
		if(l!='undefined'&&l<1){
			r=1
		}else{
			switch(typeof x){
				case 'string':r=/^\s*$/.test(x);break;
				case 'object':if(String(x)=="[object Object]"){r=1;for(var i in x){r=0;break}};
			}
		}
	};
	return r;
};




//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.clear();
var A=[],B=[];
[[],null,""," ","   ","\t\t","\t\t\t","\n\r",0,1,false,true,{},{ee:2,oop:33},void(0),[2,3,4],"mmm",Math,new Date,isEmpty,new String,function(){}].forEach(
 function(x){
 var k= isEmpty(x);dest= k?A:B;dest.push(x);
 //console.log(k,x)
 }
);
console.log("#true");console.dir(A);
console.log("#false");console.dir(B);
/*
#true
	0: Array[0]
	1: null
	2: ""
	3: " "
	4: "   "
	5: "		"
	6: "			"
	7: "\n"
	8: Object
	9: undefined
	10: String
	11: function (){}

#false
	0: 0
	1: 1
	2: false
	3: true
	4: Object
	5: Array[3]
	6: "mmm"
	7: MathConstructor
	8: Sun Dec 08 2013 18:49:24 GMT+0100 (W. Europe Standard Time)
	9: function isEmpty(x){
*/
