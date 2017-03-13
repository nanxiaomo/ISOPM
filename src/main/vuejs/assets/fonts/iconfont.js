;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-mima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.293333 10.049255 510.293333 10.049255c74.782118 0 142.767686 30.579451 192.020078 79.811765 49.232314 49.242353 79.801725 117.227922 79.801725 192.030118l0 56.641255c-4.196392-0.532078-8.583529-0.863373-13.000784-0.863373L657.648941 337.66902l0-55.777882c0-40.377725-16.604863-77.251765-43.329255-103.966118-26.704314-26.724392-63.588392-43.329255-104.016314-43.329255l0 0c-40.468078 0-77.332078 16.604863-104.056471 43.329255-26.704314 26.714353-43.299137 63.588392-43.299137 103.966118l0 55.777882L254.84549 337.66902c-5.611922 0-11.093333 0.501961-16.494431 1.395451l0-57.163294c0-74.802196 30.58949-142.787765 79.841882-192.030118C367.48549 40.628706 435.471059 10.049255 510.293333 10.049255L510.293333 10.049255z"  ></path>' +
    '' +
    '<path d="M769.114353 368.790588 254.84549 368.790588c-54.292078 0-98.665412 44.433569-98.665412 98.665412l0 447.849412c0 54.201725 44.433569 98.635294 98.665412 98.635294l514.278902 0c54.272 0 98.705569-44.433569 98.705569-98.635294l0-447.849412C867.819922 413.224157 823.446588 368.790588 769.114353 368.790588zM598.27702 865.862275 435.722039 865.862275l33.119373-191.789176c-28.862745-17.02651-48.25851-48.449255-48.25851-84.399686 0-54.081255 43.801098-97.872314 97.882353-97.872314 54.041098 0 97.942588 43.791059 97.942588 97.872314 0 37.034667-20.590431 69.260549-50.959059 85.935686L598.27702 865.862275z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanjiaowangtubiao01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M682.666667 537.6c72.533333-55.466667 123.733333-140.8 123.733333-238.933333 0-162.133333-132.266667-298.666667-298.666667-298.666667-162.133333 0-298.666667 132.266667-298.666667 298.666667 0 98.133333 51.2 187.733333 123.733333 243.2C157.866667 605.866667 34.133333 780.8 34.133333 981.333333c0 25.6 21.333333 42.666667 42.666667 42.666667 25.6 0 42.666667-21.333333 42.666667-42.666667 0-213.333333 170.666667-384 384-384 0 0 4.266667 0 4.266667 0 0 0 0 0 4.266667 0 213.333333 0 384 170.666667 384 384 0 25.6 21.333333 42.666667 42.666667 42.666667 25.6 0 42.666667-21.333333 42.666667-42.666667C989.866667 776.533333 861.866667 605.866667 682.666667 537.6L682.666667 537.6zM298.666667 298.666667c0-115.2 93.866667-209.066667 209.066667-209.066667s209.066667 93.866667 209.066667 209.066667c0 115.2-93.866667 209.066667-209.066667 209.066667S298.666667 413.866667 298.666667 298.666667L298.666667 298.666667zM298.666667 298.666667"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)