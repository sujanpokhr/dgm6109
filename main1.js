'use strict';
let svg=d3.select("#canvas")
    .append("svg")
    .attr("width",400)
    .attr("height",400) ;
    let circle=svg.append("circle")
    .attr("cx",200)
    .attr("cy",200)
    .attr("r",50)
    .style("fill","green");  
    let rx=circle.attr("cx");
    let ry=circle.attr("cy");
    let myrect=svg.append("rect")
    .attr("width",100)
    .attr("height",100)
    .attr("x",rx)
    .attr("y",ry)
    .style("fill","pink");