### What I learned
For this challenge I wanted to use divs and pseudo-elements in order to create the 100 number. When creating number 1, I used a div for the larger line and a `::before` pseudo-element for the smallest one. In this [MDN article](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) I found out that pseudoelements are inline by default so if you want to style them with empty content it is necessary to change their display to be different than inline, in this case I used `display: inline-block;`.  
Another thing I learned while creating number 1 was that I needed to set the stacking order of pseudo-element to put it below its parent element. For this I read [here](https://stackoverflow.com/questions/3032856/is-it-possible-to-set-the-stacking-order-of-pseudo-elements-below-their-parent-e
) that I had to create a new stacking context on the parent of the element with the pseudo-element by giving them positions (relative to the parent and absolute to the pseudo-element) and z-index (positive to the parent and negative to the pseudo-element). By creating a new context, it was no longer necessary to give `display: inline-block;` to the pseudo-element, so I removed it. A generic example of the code I used is shown below: 
``` css
.parent {
    position: relative;
    z-index: 1;
}
.pseudo-parent {
    position: absolute;
    /* no z-index allowed */
}
.pseudo-parent::before {
    position: absolute;
    top:0;
    z-index: -1;
}
```
When creating the missing numbers (00) I wanted to use also a div for the first 0 and a pseudo-element for the second one, but I don't know why, when I was trying to give them a border, the pseudo-element growth out of control, so I decided to use a div for each 0. 
