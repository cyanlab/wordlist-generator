let single, left, right;

function get(id){return document.getElementById(id);}

  function Init(){
    	single = get("i_single_red");
    	single.contentWindow.document.designMode = "On";

    	left = get("i_left_red");
    	left.contentWindow.document.designMode = "On";

      right = document.get("i_right_red");
      right.contentWindow.document.designMode = "On";
    }

  function doStyle(style)
    {document.getElementById("iframe_redactor").contentWindow.document.execCommand(style, false, null);
  }

  function doURL()
    {var mylink = prompt("Enter a URL:", "http://");
  if ((mylink != null) && (mylink != "")) {
     document.getElementById("iframe_redactor").contentWindow.document.execCommand("CreateLink",false,mylink);
  }
 }