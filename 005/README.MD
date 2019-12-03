# What I learned

This challenge consisted in creating a line chart that shows a weekly report with two lines, each one formed by several points. When moving the mouse over each point a small popup label containing text with a numerical value is displayed.

Once the card layout was made, I researched about how to make charts in pure HTML and CSS. I found [here](https://css-tricks.com/how-to-make-charts-with-svg/#article-header-id-5) that the best way to make them is by using SVG and also I found a very useful guide of how to make my own line chart.

## Creating the lines

First of all, to create the lines, I learned that I could use a polyline embed into an SVG. A polyline is an SVG basic shape that allows us to create straight lines by attaching a list of points which are pairs of x,y absolute coordinates.
To style created lines, it was necessary to learn about some SVG properties:
* The `fill` property allows us to define the color of the shape inside its outline. By default, SVG polylines are filled with black color and it is necessary to assign it a `none` value.
* The `stroke` property allows us to set the color of the line drawn around the object. This property was set to red or blue depending on the color of the line.
* The `stroke-width` property defines the width of the line, this property was used with a value of 2.
* The `stroke-linecap` property defines the shape of the ends of lines, this property was
set to round.
* The `points` property allows us to define the list of points required to draw the polyline. 

## Creating the points

Once the lines were created, the points were remarked by adding a new SVG bashic shape, `circle` which has three main properties: 
* The `cx` property defines the x-axis coordinate of the center of the element.
* The `cy` property defines the y-axis coordinate of the center of the element.
* The `r` property defines the radius of the element. 
All the _x,y_ coordinates of the points were matched with the _x,y_ coordinatesof the lines and styled with the corresponding colors. 


## Creating the semi-grid lines

## Creating the x-axis labels

## Creating the legends

## Creating the tooltips

I wanted to create the tooltips by using SVG, I think this could be more difficult but I wanted to practice and learn the SVG essentials. This decision costed me much more time, and after almost five months I realised it was much better to end my exercise by looking for other ways to make tooltips. 
So, I found this way
https://medium.freecodecamp.org/a-step-by-step-guide-to-making-pure-css-tooltips-3d5a3e237346
https://webdesign.tutsplus.com/tutorials/css-tooltip-magic--cms-28082
 [] -> attribute selector https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
 Positioning a tooltip on an SVG https://codepen.io/billdwhite/pen/rgEbc
Make tooltips using SVG paths https://medium.com/welldone-software/tooltips-using-svg-path-1bd69cc7becd

http://jxnblk.com/paths/ AMAZING TO CREATE PATHSSSS

https://mavo.io/demos/svgpath/

CSS TRICKS https://css-tricks.com/tools-visualize-edit-svg-paths-kinda/ tools to visualize paths