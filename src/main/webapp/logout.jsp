<%
String returl = request.getParameter("returl");
session.invalidate();
returl = (returl==null)?"":returl;
response.sendRedirect(returl);
%>