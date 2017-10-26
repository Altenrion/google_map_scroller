/**
 * ==============================================
 * Params: Default params. Change for your taste
 * ==============================================
 */
var _carouselBaseSelector = ".infinite-carousel",
    _selectedClassHTML = "selected",
    _selectedClass = "." + _selectedClassHTML,
    _listItemClassHTML = "map_keep__button",
    _listItemClass = "." + _listItemClassHTML,
    _listClassHTML = "map_keep__button_list",
    _listClass = "." + _listClassHTML,
    _listViewClassHTML = "map_keep__button_viewport",
    _listViewClass = "." + _listViewClassHTML,
    _scrollNextClassHTML = "next",
    _scrollNextClass = "." + _scrollNextClassHTML,
    _scrollPrevClassHTML = "prev",
    _scrollPrevClass = "." + _scrollPrevClassHTML,
    _scrollConrollClassHTML = "control",
    _scrollConrollClass = '.' + _scrollConrollClassHTML;


/**
 * =======================================
 * Params: init and input data.
 * =======================================
 *
 * data_options - is the object of points on map to be scrolled. Format is taken from official google maps doc.
 *
 */
var map,
    EasingAnimator = function EasingAnimator(opt) {
        opt = opt || {};
        this.easingInterval = opt.easingInterval;
        this.duration = opt.duration || 1000;
        this.step = opt.step || 50;
        this.easingFn = opt.easingFn || function easeInOutElastic(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        };
        this.callBack = opt.callBack || function () {};
    },
    point_icon = "img/point1.png",

    data_options = {
        generate_controls : false,
        locations : [
            {
                lat : 56.13863363,
                lon : 37.49602139,
                animation : google.maps.Animation.DROP,
                html : "Питомник Графство Багиры",
                icon : "img/point2.png",
            },
            {
                lat : 58.493333,
                lon : 31.241667,
                animation : google.maps.Animation.DROP,
                html : "Новгород",
                icon : point_icon,
            },{
                lat : 55.755826,
                lon : 37.6173,
                animation : google.maps.Animation.DROP,
                html : "Москва",
                icon : point_icon,
            },{
                lat : 51.533333,
                lon : 46.016667,
                animation : google.maps.Animation.DROP,
                html : "Саратов",
                icon : point_icon,
            },{
                lat : 45.05,
                lon : 41.983333,
                animation : google.maps.Animation.DROP,
                html : "Ставрополь",
                icon : point_icon,
            },{
                lat : 50.4501,
                lon : 30.5234,
                animation : google.maps.Animation.DROP,
                html : "Киев",
                icon : point_icon,
            },{
                lat : 43.133333,
                lon : 131.9,
                animation : google.maps.Animation.DROP,
                html : "Владивосток",
                icon : point_icon,
            },{
                lat : 56.8389261,
                lon : 60.6057025,
                animation : google.maps.Animation.DROP,
                html : "Екатиринбург",
                icon : point_icon,
            },{
                lat : 59.9342802,
                lon : 30.3350986,
                animation : google.maps.Animation.DROP,
                html : "Санкт-Петербург",
                icon : point_icon,
            },{
                lat : 45.033333,
                lon : 38.966667,
                animation : google.maps.Animation.DROP,
                html : "Краснодар",
                icon : point_icon,
            },{
                lat : 52.3702157,
                lon : 4.8951679,
                animation : google.maps.Animation.DROP,
                html : "Амстердам",
                icon : point_icon,
            },{
                lat : 40.2731911,
                lon : -76.8867008,
                animation : google.maps.Animation.DROP,
                html : "Гаррисберг",
                icon : point_icon,
            },{
                lat : 56.9496487,
                lon : 24.1051864,
                animation : google.maps.Animation.DROP,
                html : "Рига",
                icon : point_icon,
            },{
                lat : 60.1733244,
                lon : 24.9410248,
                animation : google.maps.Animation.DROP,
                html : "Хельсинки",
                icon : point_icon,
            },{
                lat : 56.2965039,
                lon : 43.9360589,
                animation : google.maps.Animation.DROP,
                html : "Нижний Новгород",
                icon : point_icon,
            },{
                lat : 44.716667,
                lon : 37.75,
                animation : google.maps.Animation.DROP,
                html : "Новороссийск",
                icon : point_icon,
            },{
                lat : 68.9585244,
                lon : 33.0826598,
                animation : google.maps.Animation.DROP,
                html : "Мурманск",
                icon : point_icon,
            },{
                lat : 55.790278,
                lon : 49.134722,
                animation : google.maps.Animation.DROP,
                html : "Казань",
                icon : point_icon,
            },{
                lat : 55.1644419,
                lon : 61.4368431,
                animation : google.maps.Animation.DROP,
                html : "Челябинск",
                icon : point_icon,
            },{
                lat : 48.5027313,
                lon : 135.0662599,
                animation : google.maps.Animation.DROP,
                html : "Хабаровск",
                icon : point_icon,
            },{
                lat : 46.886967,
                lon : 142.71745,
                animation : google.maps.Animation.DROP,
                html : "Ю-Сахалинск",
                icon : point_icon,
            },{
                lat : 43.585278,
                lon : 39.720278,
                animation : google.maps.Animation.DROP,
                html : "Сочи",
                icon : point_icon,
            },{
                lat : 57.6260744,
                lon : 39.8844708,
                animation : google.maps.Animation.DROP,
                html : "Ярославль",
                icon : point_icon,
            },{
                lat : 54.7903112,
                lon : 32.0503663,
                animation : google.maps.Animation.DROP,
                html : "Смоленск",
                icon : point_icon,
            },{
                lat : 51.7091957,
                lon : 36.1562241,
                animation : google.maps.Animation.DROP,
                html : "Курск",
                icon : point_icon,
            },{
                lat : 61.666667,
                lon : 50.816667,
                animation : google.maps.Animation.DROP,
                html : "Сыктывкар",
                icon : point_icon,
            },{
                lat : 61.2559503,
                lon : 73.3845471,
                animation : google.maps.Animation.DROP,
                html : "Сургут",
                icon : point_icon,
            },{
                lat : 44.716667,
                lon : 37.75,
                animation : google.maps.Animation.DROP,
                html : "Новороссийск",
                icon : point_icon,
            },{
                lat : 47.233333,
                lon : 39.7,
                animation : google.maps.Animation.DROP,
                html : "Ростов на Дону",
                icon : point_icon,
            },{
                lat : 58.133333,
                lon : 52.666667,
                animation : google.maps.Animation.DROP,
                html : "Глазов",
                icon : point_icon,
            },
        ],
        map_options: {
            center: { lat: 55.763585, lng: 37.560883 },
            mapTypeId: google.maps.MapTypeId.ROADMAP,

            scrollwheel: false,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            zoom: 5,
            disableDefaultUI: true

        }

    };



/**
 * ========================================================
 * Function: infiniteCarousel - count points and move focus
 * ========================================================
 */
$.fn.infiniteCarousel = function (config) {
    config = $.extend({
        itemsPerMove: 2,
        duration: 1000,
        vertical: false

    }, config);

    var viewportEl = this.find(_listViewClass),
        listEl = viewportEl.find(_listClass);
    var first = listEl.children(":first"),
        last = listEl.children(":last");

    var distance, prevProp, nextProp;
    if (config.vertical) {
        distance = Math.max(first.outerHeight(true), last.outerHeight(true)) * config.itemsPerMove;
        prevProp = { 'scrollTop': "-=" + distance };
        nextProp = { 'scrollTop': distance };
    } else {
        distance = Math.max(first.outerWidth(true), last.outerWidth(true)) * config.itemsPerMove;
        prevProp = { 'scrollLeft': "-=" + distance };
        nextProp = { 'scrollLeft': '+=' + distance };
    }

    function move(config) {
        if (config.dir === _scrollNextClassHTML) {
            viewportEl.stop().animate(nextProp, {
                duration: config.duration,
                complete: function complete() {
                    config.vertical ? viewportEl.scrollTop(0) : viewportEl.scrollLeft(0);
                    repeatRun(function () {

                        listEl.children(":last").after(listEl.children(":first"));
                    }, config.itemsPerMove);
                }
            });
        }

        if (config.dir === _scrollPrevClassHTML) {
            for (var i = 0; i < config.itemsPerMove; i++) {
                listEl.prepend(listEl.children(":last"));
            }
            viewportEl[config.vertical ? 'scrollTop' : 'scrollLeft'](distance).stop().animate(prevProp, {
                duration: config.duration
            });
        }

        $('body').trigger("google_map_scroller:move");
    }

    function repeatRun(func, times) {
        for (var i = 0; i < times; i++) {
            func();
        }
    }

    this.find(_scrollPrevClass).click(function () {
        move($.extend(config, {
            dir: _scrollPrevClassHTML
        }));
    });

    this.find(_scrollNextClass).click(function () {
        move($.extend(config, {
            dir: _scrollNextClassHTML
        }));
    });

    return this;
};

$('body').on("google_map_scroller:move", function(){
    $(_listItemClass).removeClass(_selectedClassHTML);
    $(_listItemClass).eq(5).addClass(_selectedClassHTML).trigger("click");
});


/**
 * ========================================================
 * Function: prepareLoopList - creates list html elements
 * ========================================================
 */
$.fn.prepareLoopList = function (options) {
    var html = "<button class='" + _scrollConrollClassHTML + ' ' + _scrollPrevClassHTML + "'>pre</button><div class='" + _listViewClassHTML + "'><div class='" + _listClassHTML + "'>";

    for (var marker in options.locations) {
        var obj = options.locations[marker];

        html += "<div class='" + _listItemClassHTML + "'>" + obj.html + "</div>";
    }
    html += "</div></div><button class='" + _scrollConrollClassHTML + " " + _scrollNextClassHTML + "'>next</button>";

    $(this).append(html);
    return this;
};

$(_carouselBaseSelector).prepareLoopList(data_options).infiniteCarousel({
    itemsPerMove: 1,
    duration: 500,
    vertical: true
});


EasingAnimator.makeFromCallback = function (callBack) {
    return new EasingAnimator({
        callBack: callBack
    });
};

EasingAnimator.prototype.easeProp = function (obj, propDict) {
    propDict = propDict || {};

    var self = this,
        t = 0,
        out_vals = JSON.parse(JSON.stringify(obj));

    clearInterval(self.easingInterval);
    self.easingInterval = setInterval(function () {
        t += self.step;
        if (t >= self.duration) {
            clearInterval(self.easingInterval);
            self.callBack(propDict);
            return;
        }
        var percent = self.easingFn(t, 0, 1, self.duration);
        Object.keys(propDict).forEach(function (key, i) {
            var old_val = obj[key];

            out_vals[key] = old_val - percent * (old_val - propDict[key]);
        });
        self.callBack(out_vals);
    }, self.step);
};


/**
 * ===========================================
 * Function: initialize - renders map & points
 * ===========================================
 */
function initialize() {

    var gmap_options = data_options;
    var points = [],
        sel_point = 0;

    for (var marker in gmap_options.locations) {
        var obj = gmap_options.locations[marker];
        points.push({ lat: obj.lat, lng: obj.lon });
    }

    map = new google.maps.Map(document.getElementById('map'), gmap_options.map_options);

    var easingAnimator = EasingAnimator.makeFromCallback(function (latLng) {
        map.setCenter(latLng);
    });
    easingAnimator.duration = 6000;
    easingAnimator.step = 10;

    var newMarkers = new Array();

    for (var marker in gmap_options.locations) {
        var obj = gmap_options.locations[marker];
        newMarkers.push(new google.maps.Marker({
            position: new google.maps.LatLng(obj.lat, obj.lon),
            map: this.map,
            title: obj.html,
            icon : obj.icon,
        }));
    }

    map.markers = newMarkers;

    Array.prototype.slice.apply(document.querySelectorAll(_listItemClass)).map(function (dom_elem, i) {
        dom_elem.addEventListener('click', function (event) {
            var point = map.getCenter();

            easingAnimator.easeProp({
                lat: point.lat(),
                lng: point.lng()
            }, points[i]);
        });
    });
}



google.maps.event.addDomListener(window, 'load', initialize);



/**
 * =============================================================
 * hover checker: if cursor is hovering buttons - no auto scroll
 * =============================================================
 */
var cursorOnScroller = false;
$(document).on({
    mouseenter: function mouseenter() {
        cursorOnScroller = true;
    },
    mouseleave: function mouseleave() {
        cursorOnScroller = false;
    }
}, _listViewClass);

window.setInterval(function () {
    if (cursorOnScroller) {
        console.info("Google_map_scroller: Waiting for cursor pointer to leave");
    } else {
        $(_carouselBaseSelector + ' ' + _scrollNextClass).click();
    }
}, 3000);

$("body").on("click", _listItemClass, function () {
    $(_listItemClass).removeClass(_selectedClassHTML);
    $(this).addClass(_selectedClassHTML);
});