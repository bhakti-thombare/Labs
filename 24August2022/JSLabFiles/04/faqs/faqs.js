window.onload = function () {
    var faqs = $("faqs");
    var h2_elements = faqs.getElementsByTagName("h2");
    		    
    var headingNode;
    // TODO
    // Get all <h2> elements
    for(var i = 0; i < h2_elements.length; i++){
        headingNode = h2_elements[i];
    
    // Attach event handler
    headingNode.onclick = function() {
         //When var h2 = this used, it will open the respective faqs
         var h2 = this; 

       //When   var h2 = headingNode; used, it will open only third faq
        //  var h2 = headingNode;
      
        if(h2.getAttribute("class") == "plus"){
            h2.setAttribute("class","minus");
        }
        else{
            h2.setAttribute("class","plus");
        }

        if(h2.nextElementSibling.getAttribute("class") == "closed"){
            h2.nextElementSibling.setAttribute("class","open")
        }
        else{
            h2.nextElementSibling.setAttribute("class","closed");
        }
        
    }

}
}
var $ = function (id) {
	return document.getElementById(id);
}