"use strict";

/* === Helper Function === */
function closedPolygon(...coords) {
  let points = "";
  for (let i = 0; i < coords.length; i += 2) {
    points += coords[i] + "," + coords[i + 1] + " ";
  }
  return points.trim() + " " + coords[0] + "," + coords[1];
}

/* === Fish Drawing Function (Recentered) === */
function fish(svg, fishX, fishY, origin, choice = "") {
  // Group everything so it can be positioned as a unit
  let group = svg.append("g")
    .attr("transform", `translate(${fishX}, ${fishY})`);

  // Fish Tail
  group.append("polyline")
    .attr("points", closedPolygon(-80, 0, -140, -50, -140, 50))
    .attr("fill", "rgb(176,162,215)");

  // Fish Body (ellipse)
  group.append("ellipse")
    .attr("cx", -30)
    .attr("cy", 0)
    .attr("rx", 50)
    .attr("ry", 50)
    .attr("fill", "rgb(200,234,242)");

  // Fish Rectangle (back body)
  group.append("rect")
    .attr("x", 20)
    .attr("y", -50)
    .attr("width", 60)
    .attr("height", 100)
    .attr("fill", "rgb(200,234,242)");

  // Upper Fin
  group.append("polyline")
    .attr("points", closedPolygon(20, -50, -15, -95, 75, -50))
    .attr("fill", "rgb(176,162,215)");

  // Lower Fin
  group.append("polyline")
    .attr("points", closedPolygon(20, 50, 10, 80, 75, 50))
    .attr("fill", "rgb(176,162,215)");

  // Fish Head
  group.append("polyline")
    .attr("points", closedPolygon(80, -50, 180, 0, 80, 50))
    .attr("fill", "rgb(200,234,242)");

  // Decorative shapes
  group.append("polyline")
    .attr("points", closedPolygon(80, -50, 30, -25, 80, 0))
    .attr("fill", "rgb(140,202,231)");

  group.append("polyline")
    .attr("points", closedPolygon(80, 0, 30, 25, 80, 50))
    .attr("fill", "rgb(140,202,231)");

  group.append("polyline")
    .attr("points", closedPolygon(130, -25, 80, 0, 130, 25))
    .attr("fill", "rgb(111,157,211)");

  group.append("polyline")
    .attr("points", closedPolygon(30, -25, 80, 0, 30, 25, -20, 0))
    .attr("fill", "rgb(111,157,211)");

  // Eye
  group.append("circle")
    .attr("cx", 150)
    .attr("cy", -5)
    .attr("r", 5)
    .attr("fill", "rgb(26,42,73)");

  // Optional bubbles
  if (choice === "Bubbles") {
    group.append("ellipse")
      .attr("cx", 200)
      .attr("cy", -60)
      .attr("rx", 6)
      .attr("ry", 6)
      .attr("fill", "rgb(215,248,255)");

    group.append("ellipse")
      .attr("cx", 220)
      .attr("cy", -90)
      .attr("rx", 8)
      .attr("ry", 8)
      .attr("fill", "rgb(228,247,251)");

    group.append("ellipse")
      .attr("cx", 240)
      .attr("cy", -120)
      .attr("rx", 10)
      .attr("ry", 10)
      .attr("fill", "rgb(235,249,251)");
  }

  // Optional origin point
  if (origin) {
    group.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 3)
      .attr("fill", "deeppink");
  }

  return svg;
}
