"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _styles = require("@mui/material/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _styles.styled)(_Button["default"])(function (_ref) {
  var theme = _ref.theme,
      ownerState = _ref.ownerState;
  var palette = theme.palette,
      functions = theme.functions,
      borders = theme.borders,
      boxShadows = theme.boxShadows;
  var color = ownerState.color,
      variant = ownerState.variant,
      size = ownerState.size,
      circular = ownerState.circular,
      iconOnly = ownerState.iconOnly;
  var white = palette.white,
      text = palette.text,
      transparent = palette.transparent,
      gradients = palette.gradients,
      dark = palette.dark;
  var boxShadow = functions.boxShadow,
      linearGradient = functions.linearGradient,
      pxToRem = functions.pxToRem,
      rgba = functions.rgba;
  var borderRadius = borders.borderRadius;
  var colored = boxShadows.colored; // styles for the button with variant="contained"

  var containedStyles = function containedStyles() {
    // background color value
    var backgroundValue = palette[color] ? palette[color].main : white.main; // backgroundColor value when button is focused

    var focusedBackgroundValue = palette[color] ? palette[color].focus : white.focus; // boxShadow value

    var boxShadowValue = colored[color] ? "".concat(boxShadow([0, 3], [3, 0], palette[color].main, 0.15), ", ").concat(boxShadow([0, 3], [1, -2], palette[color].main, 0.2), ", ").concat(boxShadow([0, 1], [5, 0], palette[color].main, 0.15)) : "none"; // boxShadow value when button is hovered

    var hoveredBoxShadowValue = colored[color] ? "".concat(boxShadow([0, 14], [26, -12], palette[color].main, 0.4), ", ").concat(boxShadow([0, 4], [23, 0], palette[color].main, 0.15), ", ").concat(boxShadow([0, 8], [10, -5], palette[color].main, 0.2)) : "none"; // color value

    var colorValue = white.main;

    if (color === "default" || !palette[color]) {
      colorValue = text.main;
    } else if (color === "white" || color === "light") {
      colorValue = dark.main;
    } // color value when button is focused


    var focusedColorValue = white.main;

    if (color === "darfault") {
      focusedColorValue = text.main;
    } else if (color === "white") {
      focusedColorValue = dark.main;
    } else if (color === "primary" || color === "error" || color === "dark") {
      focusedColorValue = white.main;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,
      "&:hover": {
        backgroundColor: backgroundValue,
        boxShadow: hoveredBoxShadowValue
      },
      "&:focus:not(:hover)": {
        backgroundColor: focusedBackgroundValue,
        boxShadow: palette[color] ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5) : boxShadow([0, 0], [0, 3.2], white.main, 0.5)
      },
      "&:disabled": {
        backgroundColor: backgroundValue,
        color: focusedColorValue
      }
    };
  }; // styles for the button with variant="outlined"


  var outliedStyles = function outliedStyles() {
    // background color value
    var backgroundValue = color === "white" ? rgba(white.main, 0.1) : transparent.main; // color value

    var colorValue = palette[color] ? palette[color].main : white.main; // boxShadow value

    var boxShadowValue = palette[color] ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5) : boxShadow([0, 0], [0, 3.2], white.main, 0.5); // border color value

    var borderColorValue = palette[color] ? palette[color].main : rgba(white.main, 0.75);

    if (color === "white") {
      borderColorValue = rgba(white.main, 0.75);
    }

    return {
      background: backgroundValue,
      color: colorValue,
      borderColor: borderColorValue,
      "&:hover": {
        background: transparent.main,
        borderColor: colorValue
      },
      "&:focus:not(:hover)": {
        background: transparent.main,
        boxShadow: boxShadowValue
      },
      "&:active:not(:hover)": {
        backgroundColor: colorValue,
        color: white.main,
        opacity: 0.85
      },
      "&:disabled": {
        color: colorValue,
        borderColor: colorValue
      }
    };
  }; // styles for the button with variant="gradient"


  var gradientStyles = function gradientStyles() {
    // background value
    var backgroundValue = color === "white" || !gradients[color] ? white.main : linearGradient(gradients[color].main, gradients[color].state); // boxShadow value

    var boxShadowValue = colored[color] ? "".concat(boxShadow([0, 3], [3, 0], palette[color].main, 0.15), ", ").concat(boxShadow([0, 3], [1, -2], palette[color].main, 0.2), ", ").concat(boxShadow([0, 1], [5, 0], palette[color].main, 0.15)) : "none"; // boxShadow value when button is hovered

    var hoveredBoxShadowValue = colored[color] ? "".concat(boxShadow([0, 14], [26, -12], palette[color].main, 0.4), ", ").concat(boxShadow([0, 4], [23, 0], palette[color].main, 0.15), ", ").concat(boxShadow([0, 8], [10, -5], palette[color].main, 0.2)) : "none"; // color value

    var colorValue = white.main;

    if (color === "white") {
      colorValue = text.main;
    } else if (color === "light") {
      colorValue = gradients.dark.state;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,
      "&:hover": {
        backgroundColor: white.main,
        boxShadow: hoveredBoxShadowValue
      },
      "&:focus:not(:hover)": {
        boxShadow: boxShadowValue
      },
      "&:disabled": {
        background: backgroundValue,
        color: colorValue
      }
    };
  }; // styles for the button with variant="text"


  var textStyles = function textStyles() {
    // color value
    var colorValue = palette[color] ? palette[color].main : white.main; // color value when button is focused

    var focusedColorValue = palette[color] ? palette[color].focus : white.focus;
    return {
      color: colorValue,
      "&:hover": {
        color: focusedColorValue
      },
      "&:focus:not(:hover)": {
        color: focusedColorValue
      }
    };
  }; // styles for the button with circular={true}


  var circularStyles = function circularStyles() {
    return {
      borderRadius: borderRadius.section
    };
  }; // styles for the button with iconOnly={true}


  var iconOnlyStyles = function iconOnlyStyles() {
    // width, height, minWidth and minHeight values
    var sizeValue = pxToRem(38);

    if (size === "small") {
      sizeValue = pxToRem(25.4);
    } else if (size === "large") {
      sizeValue = pxToRem(70);
    } // padding value


    var paddingValue = "".concat(pxToRem(11), " ").concat(pxToRem(11), " ").concat(pxToRem(10));

    if (size === "small") {
      paddingValue = pxToRem(4.5);
    } else if (size === "large") {
      paddingValue = pxToRem(25);
    }

    return {
      width: sizeValue,
      minWidth: sizeValue,
      height: sizeValue,
      minHeight: sizeValue,
      padding: paddingValue,
      "& .material-icons": {
        marginTop: 0
      },
      "&:hover, &:focus, &:active": {
        transform: "none"
      }
    };
  };

  return _objectSpread({}, variant === "contained" && containedStyles(), {}, variant === "outlined" && outliedStyles(), {}, variant === "gradient" && gradientStyles(), {}, variant === "text" && textStyles(), {}, circular && circularStyles(), {}, iconOnly && iconOnlyStyles());
});

exports["default"] = _default;
//# sourceMappingURL=MKButtonRoot.dev.js.map
