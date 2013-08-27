/*Updated to v2 by Claus T Nielsen (Xipher.dk */
/* Powershell 1.0 syntax contributed by Joel Bennett */
SyntaxHighlighter.brushes.PowerShell = function()
{
	var keywords =	'while until trap switch return ref process param in if global: function foreach for finally filter end elseif else do default continue break begin \\? % #script #private #local #global';

	var operators = 'and as band bnot bor bxor casesensitive ccontains ceq cge cgt cle clike clt cmatch cne cnotcontains cnotlike cnotmatch contains creplace eq exact f file ge gt icontains ieq ige igt ile ilike ilt imatch ine inotcontains inotlike inotmatch ireplace is isnot le like lt match ne not notcontains notlike notmatch or regex replace wildcard';

	var verbs = 'Write Wrap Width Where Whatif Warning Wait Version Verify Verbose Value UserName URL Update Unlock Unique Uninstall TypeName TrustLevel Trusted Truncate Trace TimeStamp TimeOut TID Test Temp Tee Suspend Strict Stop Statistic State Start Split Speed SortBy Sort Size SID Shortname Set Send Select Scope SaveCred Role Retry Resume Restore Restart Resolve Resize Repair Rename Remove Regex Recurse Receive Reason ReadOnly Read Push Property Prompt Privilege Priority PrinterName PrincipalName PortName Pop Ping Password PassThru ParentID Parameter Owner Overwrite Output Out Operation Notify NewLine New Name Move Most Modified Minimum Migrate Merge Measure Maximum MacName LogName Log Lock Location LineCount Limit KeyLength KeyContainerName KeyAlgorithm Join JobName IpAddress Invoke Interval InterfaceName Interactive Install Insert Input Initialize Incremental Include Import Ignore Id Group Get From Format ForEach Force Follow Filter FileName Fast Export Exclude Exact EventName ErrorLimit ErrorLevel Erase Encrypt Encoding Enable Elapsed DriveName Drain DomainName Disconnect Disable DirectoryName Description Descending Delete Default Debug Data Verbs CSPType CSPName Created Create Count Copy ConvertTo ConvertFrom Convert Continuous Connect Confirm ComputerName Compress Compatible Compare Command ClusterName Clear ClassName Checkpoint Char CertUsage CertSubjectName CertStoreLocation CertSerialNumber CertRequestFileName CertIssuerName CertFile CaseSensitive Cache BlockCount Binary Before AttributeName AssemblyName Ascending As ApplicationName Allocation All After Add ACL Accessed';

	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,					   							    css: 'color4' },	// one line comments
		{ regex: new RegExp('@"\\n[\\s\\S]*?\\n"@', 'gm'),			   		   		                                css: 'string' },	// double quoted here-strings
        { regex: new RegExp("@'\\n[\\s\\S]*?\\n'@", 'gm'),			                                                css: 'string' },	// single quoted here-strings
		{ regex: new RegExp('"(?:\\$\\([^\\)]*\\)|[^"]|`")*[^`]"','g'),						   		            css: 'string' },	// double quoted strings
		{ regex: new RegExp("'[^']*'", 'g'),						   		                                        css: 'string' },	// single quoted strings
		{ regex: new RegExp('(?:'+verbs.replace(/ /g, '\\b|\\b')+')-[a-zA-Z_][a-zA-Z0-9_]*', 'gmi'),	            css: 'cmdlet' },	// cmdlets
		{ regex: new RegExp('\\[[A-Z_\\[][A-Z0-9_. ,\\[\\]]*\\]*', 'gi'),	                                        css: 'color2' },	   // .Net [Type]s
		{ regex: new RegExp('\\$(?:(?:global|script|private|env):)?[A-Z0-9_]+', 'gi'),	                            css: 'variable' },// $variables
		{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),	                                                css: 'keyword' },	// keywords
		{ regex: new RegExp('-'+this.getKeywords(operators), 'gmi'),                                               css: 'constants' },	// operators
		{ regex: new RegExp('\\s+-[a-zA-Z_][a-zA-Z0-9_]*', 'gmi'),                                                  css: 'color1' }	// operators
		]
		
	this.forHtmlScript({ left: /(&lt;|<|\[)%/g, right: /%(&gt;|>|\])/g });
};

SyntaxHighlighter.brushes.PowerShell.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.PowerShell.aliases	= ['powershell', 'posh', 'ps', 'psh'];
