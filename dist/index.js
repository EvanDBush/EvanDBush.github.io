/**
    * @name ityped
    * @description Dead simple Animated Typing with no dependencies
    * @author Luis Vinícius
    * @email luisviniciusbarreto@gmail.com
    */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.ityped = {})));
}(this, (function (exports) { 'use strict';

/**
 * @name setProps
 * @description Set the ityped properties configuration
 * @param {Object} config The configuration properties
 * @return {Promise}
 */
var setProps = function setProps(_ref) {
  var _ref$strings = _ref.strings,
      strings = _ref$strings === undefined ? [
        "Ice, ice baby",
        "Alright stop, collaborate and listen, Ice is back with my brand new invention",
        "Something grabs a hold of me tightly, Flow like a harpoon daily and nightly",
        "Will it ever stop? Yo, I don't know. Turn off the lights, and I'll glow",
        "To the extreme, I rock a mic like a vandal. Light up a stage and wax a chump like a candle",
        "Dance, go rush to the speaker that booms. I'm killing your brain like a poisonous mushroom",
        "Deadly, when I play a dope melody, Anything less than the best is a felony",
        "Love it or leave it, you better gangway. You better hit bull's eye, the kid don't play",
        "If there was a problem, yo, I'll solve it. Check out the hook while my DJ revolves it",
        "Vanilla Ice, ice baby",
        "Now that the party is jumping. With the bass kicked in, and the Vegas are pumping",
        "Quick to the point, to the point, no faking, Cooking MCs like a pound of bacon",
        "Burning them, if you ain't quick and nimble. I go crazy when I hear a cymbal",
        "And a hi-hat with a souped up tempo, I'm on a roll, it's time to go solo",
        "Rollin' in my 5.0, With my rag-top down so my hair can blow",
        'The girlies on standby, waving just to say "Hi" "Did you stop?" "No, I just drove by"',
        "Kept on, pursuing to the next stop I busted a left, and I'm heading to the next block",
        "The block was dead, yo So I continued to A1A Beachfront Avenue",
        "Girls were hot wearing less than bikinis Rockman lovers driving Lamborghinis",
        "Jealous, 'cause I'm out getting mine Shay with a gauge, and Vanilla with a nine",
        "Ready for the chumps on the wall The chumps acting ill because they're full of eight ball",
        "Gunshots rang out like a bell I grabbed my nine, all I heard were shells",
        "Falling on the concrete real fast Jumped in my car, slammed on the gas",
        "Bumper to bumper, the avenue's packed I'm trying to get away before the jackers jack",
        "Police on the scene, you know what I mean They passed me up, confronted all the dope fiends",
        "Take heed cause I'm a lyrical poet Miami's on the scene, just in case you didn't know it",
        "My town, that created all the bass sound nough to shake and kick holes in the ground",
        "'Cause my style's like a chemical spill Feasible rhymes that you can vision and feel",
        "Conducted and formed, this is a hell of a concept We make it hype, and you want to step",
        "With this, Shay plays on the fade Slice like a ninja, cut like a razor blade",
        'So fast, other DJs say "Damn!" If my rhyme was a drug, Id sell it by the gram',
        "Keep my composure, when it's time to get loose Magnetized by the mic while I kick my juice",
        "If there was a problem, yo, I'll solve it Check out the hook while my DJ revolves it",
        "Yo man, let's get out of here Word to your mother",
        "Ice, ice baby, too cold Ice, Ice Baby, too Cold, too Cold Ice, Ice Baby, too Cold,", 
        "too Cold Ice, Ice baby, too cold, too cold"
      ] : _ref$strings,
      _ref$typeSpeed = _ref.typeSpeed,
      typeSpeed = _ref$typeSpeed === undefined ? 40 : _ref$typeSpeed,
      _ref$backSpeed = _ref.backSpeed,
      backSpeed = _ref$backSpeed === undefined ? 0 : _ref$backSpeed,
      _ref$backDelay = _ref.backDelay,
      backDelay = _ref$backDelay === undefined ? 500 : _ref$backDelay,
      _ref$startDelay = _ref.startDelay,
      startDelay = _ref$startDelay === undefined ? 200 : _ref$startDelay,
      _ref$cursorChar = _ref.cursorChar,
      cursorChar = _ref$cursorChar === undefined ? '|' : _ref$cursorChar,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? false : _ref$placeholder,
      _ref$showCursor = _ref.showCursor,
      showCursor = _ref$showCursor === undefined ? true : _ref$showCursor,
      _ref$disableBackTypin = _ref.disableBackTyping,
      disableBackTyping = _ref$disableBackTypin === undefined ? false : _ref$disableBackTypin,
      _ref$onFinished = _ref.onFinished,
      onFinished = _ref$onFinished === undefined ? function () {} : _ref$onFinished,
      _ref$loop = _ref.loop,
      loop = _ref$loop === undefined ? true : _ref$loop;
  return {
    strings: strings,
    typeSpeed: typeSpeed,
    backSpeed: backSpeed,
    cursorChar: cursorChar,
    backDelay: backDelay,
    placeholder: placeholder,
    startDelay: startDelay,
    showCursor: showCursor,
    loop: loop,
    disableBackTyping: disableBackTyping,
    onFinished: onFinished
  };
};

var init = function init(element, properties) {
  var i = 0,
      l = void 0,
      STRINGS_TO_ITERATE = void 0;

  var typewrite = function typewrite(strings, props) {
    if (i === l) if (props.loop) i = 0;
    setTimeout(function () {
      typeString(strings[i], props);
    }, props.startDelay);
  };

  var typeString = function typeString(str, props) {
    var index = 0,
        strLen = str.length;
    var intervalID = setInterval(function () {
      props.placeholder ? element.placeholder += str[index] : element.textContent += str[index];
      if (++index === strLen) return onStringTyped(intervalID, props);
    }, props.typeSpeed);
  };

  var onStringTyped = function onStringTyped(id, props) {
    clearInterval(id);
    if (props.disableBackTyping && i === l - 1) {
      return props.onFinished();
    }
    if (!props.loop && i === l - 1) {
      return props.onFinished();
    }
    setTimeout(function () {
      return eraseString(props);
    }, props.backDelay);
  };

  var eraseString = function eraseString(props) {
    var str = props.placeholder ? element.placeholder : element.textContent,
        strLen = str.length;
    var intervalID = setInterval(function () {
      props.placeholder ? element.placeholder = element.placeholder.substr(0, --strLen) : element.textContent = str.substr(0, --strLen);
      if (strLen === 0) return onStringErased(intervalID, props);
    }, props.backSpeed);
  };

  var onStringErased = function onStringErased(id, props) {
    clearInterval(id);
    ++i;
    typewrite(STRINGS_TO_ITERATE, props);
  };

  var setCursor = function setCursor(element, props) {
    var cursorSpan = document.createElement('h2');
    cursorSpan.classList.add('ityped-cursor');
    cursorSpan.textContent = '|';
    cursorSpan.textContent = props.cursorChar;
    element.insertAdjacentElement('afterend', cursorSpan);
  };

  var startTyping = function startTyping(prop) {
    var props = setProps(prop || {});
    var strings = props.strings;
    STRINGS_TO_ITERATE = strings;
    l = strings.length;
    if (typeof element === "string") element = document.querySelector(element);
    if (props.showCursor) setCursor(element, props);
    typewrite(strings, props);
  };

  return startTyping(properties);
};

exports.init = init;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
