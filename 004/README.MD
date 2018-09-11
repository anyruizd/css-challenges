# What I learned
 
This challenge consisted in creating a loading screen composed of three concentric circles that enlarge and contract one after another. For this, I just created three circles and gave them position absolute.
As the three circles were white, I needed to add some shadow to their borders in order to differentiate them from each other, so I read [here](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) about the `box-shadow` property and its syntax: `box-shadow: offset-x offset-y blur-radiusx spread-radius color;`.
About the animations, I learned that I could use the `single-animation-direction: alternate;` property in order to reverse the animation direction each cycle. In this way, the animation direction will reverse once the first iteration has been played, instead of start the animation again in the same direction.


