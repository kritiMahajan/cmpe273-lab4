$(document).ready(function(){
    var elements = $('td[title="status"]');
    for( i=0; i<elements.length; i++ ){
            var whatStatus = elements[i].innerHTML;
            var numId = elements[i].id.slice("6");
            var actualId = "#"+numId;
            if(whatStatus == "lost")
                    {
                            $(actualId).attr("disabled","disabled");
                    }
            else{
                    $(actualId).removeAttr("disabled");
            }
    }
    
});
    

$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on isbn ' + isbn);
	Callback(isbn);
	$("#"+isbn).attr("disabled", "disabled");
	window.location.reload(true);
});



function Callback(isbn)
{
	
	$.ajax({
	    type: "PUT",
	    url: "/library/v1/books/"+isbn+"/?status=lost",
	    contentType: "application/json",
	    success: function() {
            window.location.reload();
	    },
	    error: function() {
            window.location.relaod();
    }
	});
	$(status).text("lost")
	
	
}