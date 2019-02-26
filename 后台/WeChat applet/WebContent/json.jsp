<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=GBK"
    pageEncoding="GBK" import="java.util.Date"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

<script type="text/javascript">


function parseJson1(){
	//json×Ö·û´®
	var str='{"empno":999,"ename":"hsz"}';

	//json×Ö·û´®->json¶ÔÏó
	var obj=eval('('+str+')');
	alert(obj.ename);
}

function parseJson2(){
	//json×Ö·û´®
	var str='{"empno":999,"ename":"hsz"}';

	//json×Ö·û´®->json¶ÔÏó
	var obj=(new Function("return"+str))();
	alert(obj.ename);
}


function parseJson3(){
	//json×Ö·û´®
	var str='{"empno":999,"ename":"hsz"}';

	//json×Ö·û´®->json¶ÔÏó
	var obj=JSON.parse(str);
	alert(obj.ename);
	
	//json¶ÔÏó->json×Ö·û´®
	var str2=JSON.stringify(obj);
	alert(str2);
}



</script>

</head>
<body>
<input type="button" value="parseJson1" onclick="parseJson1()"/>
<input type="button" value="parseJson2" onclick="parseJson2()"/>
<input type="button" value="parseJson3" onclick="parseJson3()"/>
</body>
</html>