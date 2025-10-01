   "use strict";

    // Output helper function
    function output(content, htmlFlag) {
      let o = document.getElementById("output");
      if (content == undefined) {
        console.log("WARNING: No content to output");
      } else {
        if (!htmlFlag) {
          let p = document.createElement("p");
          let tn = document.createTextNode(content);
          p.appendChild(tn);
          o.appendChild(p);
        } else {
          o.innerHTML += content;
        }
      }
    }