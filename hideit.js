$(document).ready(function () {
    if (window==window.top) {
        
        /*
        var observer = new WebKitMutationObserver(function(mutations, observer) {
              console.log(mutations, observer);
        });
        
        observer.observe(document, {
           subtree: true,
           childList: true,
           characterData: true,
           attributes: true      
        });
*/
/*
        document.body.addEventListener("DOMNodeInserted", function(evt) {
            console.log(evt);
            var node = evt.target;
            if (node.nodeType == 1 && node.tagName == "li" && $(node).hasClass(".uiStreamStory")) {
                console.log("New story added");
                hideSponsored();
            }
        }, false);
*/
/*
        $("#home_stream").mutationSummary("connect", function () { 
            console.log("RUNNING");
            hideSponsored();
        }, [{ all: true }]);
*/
        hideSponsored();
    }
});

function hideSponsored() {
    
    // hide news feed sponsored stories
   var items = $('a[href="/about/ads"]');
   console.log(items.length);

   items.each(function () {
        $(this).closest(".uiStreamStory").remove();
        console.log("remove a sponsored story");
   });

   // hide sidebar ads
  // $("[data-adblock-hash]").remove();
}
