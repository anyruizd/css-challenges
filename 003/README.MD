# What I learned
 
This challenge consisted in recreating the movement of the sun throughout a day in a circular frame with a pyramid as the main object, including the shadow and its animation.
For this purpose, I divided the whole picture into small pieces, given by the sky, the sun, the pyramid, the ground and the pyramid shadow, all embedded in a circled container.

### Sky
The main container served as the sky. To create the sky, I used a box with a 100% `border-radius` and assigned the corresponding color. 

### Sun
As before, to create the sun I used a box with a 100% `border-radius`. To make the animation I read [here](https://stackoverflow.com/questions/37902679/transform-rotate-and-translate-of-circle-img-inside-another-img) and [here](https://stackoverflow.com/questions/46949940/css-animate-object-in-curved-path) that to rotate and translate the sun across an arc, the key concept is the `transform-origin` CSS property, which allows setting the transformation (rotation in this case) axis to a point different from the element center. That is to say, without the origin modification, the element would have rotated around its center.

### Pyramid
To create the pyramid and its shadowed side I created two superposed triangles with a div and its pseudo-element. This time I learned [here](https://css-tricks.com/snippets/css/css-triangle/) to make triangles by using a single box with zero width and height. The actual width and height of the triangle is determined by the width of the border. The following is the code snippet I used to create the triangle:

``` css
.triangle {
  border-bottom: 58px solid white;
  border-left: 58px solid transparent;
  border-right: 58px solid transparent;
  height: 0;
  width: 0;
}
```
As you can see, `border-bottom` is colored while `border-left` & `border-right` stay transparent, resulting in an equilateral triangle in a normal position. 

### Ground 
To create the ground I read [here](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path) about the `clip-path` property, which allows you to make complex shapes in CSS. Also, I found [this](https://bennettfeely.com/clippy/) resource that is a clip-path maker, then I created a semi-circle element by using `clip-path: circle(50% at 90px -34px);`.


### Pyramid shadow
To create the pyramid projection on the floor, I made a triangle by using the prior technique (a box with zero width and height and colored borders) and I applied a skew transformation. Besides, it was necessary to change the transformation axis to be left-top (and not center-center) by using `transform-origin` property.

Finally, the big remember for this challenge is KEYFRAMES CLOSING BRACKETS DON'T USE THE SEMICOLON 😛

