"use strict";
// Certainly! Below is a TypeScript code snippet that uses D3.js to draw a random spline through more than 5 points. It also labels each point with its corresponding number above the point:
Object.defineProperty(exports, "__esModule", { value: true });
// ```typescript
var d3 = require("d3");
// Generate random points
var points = d3.range(6).map(function (i) { return ({
    x: Math.random() * 800,
    y: Math.random() * 600,
    label: (i + 1).toString()
}); });
// Create the SVG container
var svg = d3.select('body').append('svg')
    .attr('width', 800)
    .attr('height', 600);
// Draw the spline
var line = d3.line()
    .x(function (d) { return d.x; })
    .y(function (d) { return d.y; })
    .curve(d3.curveCatmullRom.alpha(0.5)); // Using Catmull-Rom spline
svg.append('path')
    .datum(points)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 2)
    .attr('d', line);
// Draw the points
svg.selectAll('circle')
    .data(points)
    .enter().append('circle')
    .attr('cx', function (d) { return d.x; })
    .attr('cy', function (d) { return d.y; })
    .attr('r', 4)
    .attr('fill', 'red');
// Label the points
svg.selectAll('text')
    .data(points)
    .enter().append('text')
    .attr('x', function (d) { return d.x; })
    .attr('y', function (d) { return d.y - 10; })
    .text(function (d) { return d.label; })
    .attr('font-family', 'sans-serif')
    .attr('font-size', '12px')
    .attr('fill', 'black')
    .attr('text-anchor', 'middle');
// ```
// This code will create an SVG element on the page, draw a spline through the random points, and label each point with its number above it. Make sure to have D3.js installed in your project to run this code. You can adjust the number of points and the dimensions of the SVG as needed. Enjoy your coding with D3.js! 😊.
// Source: Conversation with Bing, 12/8/2023
// (1) github.com. https://github.com/borntofrappe/learning-d3/tree/0fb2e2d7b565eb796f53f2ebdf55a1976fa59472/Force%20Simulation%2FREADME.md.
// (2) github.com. https://github.com/zhiao777774/AIdel/tree/1b6d187b9536e1823bf970a4986374808809e7a8/simulator%2Fstatic%2Fjs%2Fgridview.js.
// (3) en.wikipedia.org. https://en.wikipedia.org/wiki/TypeScript.
