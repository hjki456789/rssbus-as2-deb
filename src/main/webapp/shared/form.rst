<rsb:equals attr="_request.request_method" value="POST"> <!-- IF FORM POST THEN SEND EMAIL -->
	
	<rsb:try>
				
		<rsb:call op="formProcessor.rsb" />
				
		<!-- SUCCESS-->
		<h2>Thank you!</h2> <!-- Important, do not change title -->
		
		<p>
			Thank you for your feedback.  If you have submitted a question, a member of our team will respond to your inquiry 
			as soon as possible.  
		</p>
				
		<rsb:catch code="*">
			<!-- ERROR [_code] : [_description]  -->
			<h2 class='red'>Error Sending Request</h2>
			<br>
			<p>
				We are sorry, but there was an error while attempting to send you request.
			</p>
			<p>
				We still want to hear from you.&nbsp; Please send your feedback directly
				to <a href="mailto:info@[x|db('company.rs.email')]">info@[x|db('company.rs.email')]</span></a> and a 
				a member of our team will contact you. We apologize for any 
				inconvenience this may cause.
			</p>
		</rsb:catch>
		
	</rsb:try>
				
</rsb:equals>



