function validateForm()
{
	var nm=document.myform.name.value;
	var nameLen=nm.length;
	console.log(nm);
	console.log(nameLen);
	if(nameLen>100){
		alert("Name must not exceed 100 characters");
		return false;
	}

	var number=document.myform.phno.value;
	var numLen=number.length;
	console.log(number);
	console.log(numLen)
	if(numLen>10)
	{
		alert("Number must not exceed 10 digits");
		return false;
	}

	var mail=document.myform.emailaddress.value;
	var submail=mail.slice(-11);
	console.log(submail);
	if((submail==="@sastra.edu")==false)
	{
		alert("Invalid Email ID");
		return false;
	}

	printData();

		
}

function DeptIssues(option)
{
	var selectobject=["EEE","CSE","MECH","CIVIL"];
	if(option===2)
	{
		var gdata=disableSecondDept();
		document.getElementById(String(gdata)).disabled=true;
		return true;
	}
	if(option===1)
	{
		if(selectobject)
		{
			enableOther(selectobject);
		}
	}
}

function disableSecondDept()
{
	var dept1=document.getElementById("d1").value;
	return dept1;
}

function enableOther(selectobject)
{
	for(z=0;z<selectobject.length;z++)
	{
		document.getElementById(selectobject[z]).disabled=false;
	}
}

function printData()
{
	var data=constructData();
	console.log(data);
	var constructElement = function([key, value]) {
      return `<p class='result-item'>${key}: ${value}</p>`;
    };

    var resultHtml = (Object.entries(data) || []).reduce(function(innerHtml, keyValuePair) {
      //debugger
      return innerHtml + constructElement(keyValuePair);
    }, '');
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = resultHtml;
    console.log(resultHtml);
    resultsDiv.classList.remove("hide");

}

function constructData()
{
	var keys=["name","phno","emailaddress","department1","department2"];
	var dict={};
	for(z=0;z<keys.length;z++)
	{
		dict[String(keys[z])]=String(document.myform[keys[z]].value);
	}
	
	return dict;
}