# Google map scroller
JS plugin to move camera focus of google maps in a nice and configurable way between any points on map. 
 There is a panTo function of google maps, but it doesn't have such a nice feature to controll the speed and steps of camera move.
 
# Test run

1 -  add html to your page
```
<div class="map_keep">
    <div id="map" class="map_keep__map"></div>
    <div class="infinite-carousel"></div>
</div>
```
 2 - Include 3 js files
```
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
<script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
<script src="js/map_scroller.js"></script>
```

 3 -  Include css file
```
<link rel="stylesheet" href="css/style.css">
```
with this 3 steps all would run with defaults.


# Params

Main params for configuration are set at the start of index.js file. Var names sounds for themselves.
 
First block is for configuration of classes and plugin to be adopted for your project styles and classes.
```
var _carouselBaseSelector = ".infinite-carousel",
       _selectedClassHTML = "selected",
       _selectedClass = "." + _selectedClassHTML,
       _listItemClassHTML = "map_keep__button",
       _listItemClass = "." + _listItemClassHTML,
       ...
``` 

Second block has input for map and scroller : data_options. Format was tken from original google map doc.



Infinite Carousel function is responsible for the animation & movement of vertical scroller.
It can move in 2 directions. 

```$js
$.fn.infiniteCarousel = function (config) {
    config = $.extend({
        itemsPerMove: 2,
        duration: 1000,
        vertical: false
        
    }, config);
    ...

```
This method fires ``google_map_scroller:move`` event to tell any other plugin that a move took place. By default on such a `move` click (selection of button) triggers.

Next Or Prev movements are availiable. By default the scroller moves only in one direction and controls are hidden. 
To make controls visible remove this css styles: 

```css
.map_keep .control {
  visibility: hidden;
}
```

The mainfunction that is responsible for animated movements is `EasingAnimator.prototype.easeProp`
It counts steps for map to move from point A to point B.

In ``initilise`` function there are params: 
```js
    easingAnimator.duration = 6000;
    easingAnimator.step = 10;
```
They are responsible for the great experience of  user. The higher `duration` is, the longer camera movement would take. The smaller `step` is , the smoother movement would be.


Of cource this plugin providesability to stop animation on mouse over buttons.
```js
var cursorOnScroller = false;
$(document).on({
    mouseenter: function mouseenter() {
        cursorOnScroller = true;
    },
    mouseleave: function mouseleave() {
        cursorOnScroller = false;
    }
}, _listViewClass);
```
And when cursor is not over, animation would be triggered every n seconds
```js

window.setInterval(function () {
    if (cursorOnScroller) {
        console.info("Google_map_scroller: Waiting for cursor pointer to leave");
    } else {
        $(_carouselBaseSelector + ' ' + _scrollNextClass).click();
    }
}, 3000); 
```
There is a list of things that would be nice to add. Soon I'll add a list. 
Would be glad to see any pull requests if you feel that you can improve this prof of concept any how and maybe suggestions or issue's.
 



# Maintainers
Name            | Github     | Twitter     |
--------------- | ---------- | ----------- |
Nikita barishev | Altenrion  | @landerfeld |

# License

MIT.
