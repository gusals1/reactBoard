/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerTwitch"],{

/***/ "./node_modules/react-player/lib/players/Twitch.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Twitch.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Twitch_exports = {};\n__export(Twitch_exports, {\n  default: () => Twitch\n});\nmodule.exports = __toCommonJS(Twitch_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://player.twitch.tv/js/embed/v1.js\";\nconst SDK_GLOBAL = \"Twitch\";\nconst PLAYER_ID_PREFIX = \"twitch-player-\";\nclass Twitch extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"playerID\", this.props.config.playerId || `${PLAYER_ID_PREFIX}${(0, import_utils.randomString)()}`);\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"setMuted\", true);\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"setMuted\", false);\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url, isReady) {\n    const { playsinline, onError, config, controls } = this.props;\n    const isChannel = import_patterns.MATCH_URL_TWITCH_CHANNEL.test(url);\n    const id = isChannel ? url.match(import_patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(import_patterns.MATCH_URL_TWITCH_VIDEO)[1];\n    if (isReady) {\n      if (isChannel) {\n        this.player.setChannel(id);\n      } else {\n        this.player.setVideo(\"v\" + id);\n      }\n      return;\n    }\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Twitch2) => {\n      this.player = new Twitch2.Player(this.playerID, {\n        video: isChannel ? \"\" : id,\n        channel: isChannel ? id : \"\",\n        height: \"100%\",\n        width: \"100%\",\n        playsinline,\n        autoplay: this.props.playing,\n        muted: this.props.muted,\n        // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859\n        controls: isChannel ? true : controls,\n        time: (0, import_utils.parseStartTime)(url),\n        ...config.options\n      });\n      const { READY, PLAYING, PAUSE, ENDED, ONLINE, OFFLINE, SEEK } = Twitch2.Player;\n      this.player.addEventListener(READY, this.props.onReady);\n      this.player.addEventListener(PLAYING, this.props.onPlay);\n      this.player.addEventListener(PAUSE, this.props.onPause);\n      this.player.addEventListener(ENDED, this.props.onEnded);\n      this.player.addEventListener(SEEK, this.props.onSeek);\n      this.player.addEventListener(ONLINE, this.props.onLoaded);\n      this.player.addEventListener(OFFLINE, this.props.onLoaded);\n    }, onError);\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n    this.callPlayer(\"pause\");\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"seek\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  getDuration() {\n    return this.callPlayer(\"getDuration\");\n  }\n  getCurrentTime() {\n    return this.callPlayer(\"getCurrentTime\");\n  }\n  getSecondsLoaded() {\n    return null;\n  }\n  render() {\n    const style = {\n      width: \"100%\",\n      height: \"100%\"\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\"div\", { style, id: this.playerID });\n  }\n}\n__publicField(Twitch, \"displayName\", \"Twitch\");\n__publicField(Twitch, \"canPlay\", import_patterns.canPlay.twitch);\n__publicField(Twitch, \"loopOnEnded\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1R3aXRjaC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSw4QkFBOEI7QUFDdkc7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLDRDQUFPO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLDBEQUFVO0FBQ3JDLHNCQUFzQixtQkFBTyxDQUFDLGdFQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGlCQUFpQixFQUFFLGlDQUFpQztBQUN6SDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUNBQXlDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxjQUFjLHNEQUFzRDtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsMEJBQTBCO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9Ud2l0Y2guanM/NTFmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xudmFyIF9fcHVibGljRmllbGQgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIF9fZGVmTm9ybWFsUHJvcChvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgVHdpdGNoX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KFR3aXRjaF9leHBvcnRzLCB7XG4gIGRlZmF1bHQ6ICgpID0+IFR3aXRjaFxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhUd2l0Y2hfZXhwb3J0cyk7XG52YXIgaW1wb3J0X3JlYWN0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGltcG9ydF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBpbXBvcnRfcGF0dGVybnMgPSByZXF1aXJlKFwiLi4vcGF0dGVybnNcIik7XG5jb25zdCBTREtfVVJMID0gXCJodHRwczovL3BsYXllci50d2l0Y2gudHYvanMvZW1iZWQvdjEuanNcIjtcbmNvbnN0IFNES19HTE9CQUwgPSBcIlR3aXRjaFwiO1xuY29uc3QgUExBWUVSX0lEX1BSRUZJWCA9IFwidHdpdGNoLXBsYXllci1cIjtcbmNsYXNzIFR3aXRjaCBleHRlbmRzIGltcG9ydF9yZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJjYWxsUGxheWVyXCIsIGltcG9ydF91dGlscy5jYWxsUGxheWVyKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwicGxheWVySURcIiwgdGhpcy5wcm9wcy5jb25maWcucGxheWVySWQgfHwgYCR7UExBWUVSX0lEX1BSRUZJWH0keygwLCBpbXBvcnRfdXRpbHMucmFuZG9tU3RyaW5nKSgpfWApO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJtdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcihcInNldE11dGVkXCIsIHRydWUpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJ1bm11dGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKFwic2V0TXV0ZWRcIiwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gIH1cbiAgbG9hZCh1cmwsIGlzUmVhZHkpIHtcbiAgICBjb25zdCB7IHBsYXlzaW5saW5lLCBvbkVycm9yLCBjb25maWcsIGNvbnRyb2xzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzQ2hhbm5lbCA9IGltcG9ydF9wYXR0ZXJucy5NQVRDSF9VUkxfVFdJVENIX0NIQU5ORUwudGVzdCh1cmwpO1xuICAgIGNvbnN0IGlkID0gaXNDaGFubmVsID8gdXJsLm1hdGNoKGltcG9ydF9wYXR0ZXJucy5NQVRDSF9VUkxfVFdJVENIX0NIQU5ORUwpWzFdIDogdXJsLm1hdGNoKGltcG9ydF9wYXR0ZXJucy5NQVRDSF9VUkxfVFdJVENIX1ZJREVPKVsxXTtcbiAgICBpZiAoaXNSZWFkeSkge1xuICAgICAgaWYgKGlzQ2hhbm5lbCkge1xuICAgICAgICB0aGlzLnBsYXllci5zZXRDaGFubmVsKGlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheWVyLnNldFZpZGVvKFwidlwiICsgaWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAoMCwgaW1wb3J0X3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCkudGhlbigoVHdpdGNoMikgPT4ge1xuICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgVHdpdGNoMi5QbGF5ZXIodGhpcy5wbGF5ZXJJRCwge1xuICAgICAgICB2aWRlbzogaXNDaGFubmVsID8gXCJcIiA6IGlkLFxuICAgICAgICBjaGFubmVsOiBpc0NoYW5uZWwgPyBpZCA6IFwiXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgcGxheXNpbmxpbmUsXG4gICAgICAgIGF1dG9wbGF5OiB0aGlzLnByb3BzLnBsYXlpbmcsXG4gICAgICAgIG11dGVkOiB0aGlzLnByb3BzLm11dGVkLFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vQ29va1BldGUvcmVhY3QtcGxheWVyL2lzc3Vlcy83MzMjaXNzdWVjb21tZW50LTU0OTA4NTg1OVxuICAgICAgICBjb250cm9sczogaXNDaGFubmVsID8gdHJ1ZSA6IGNvbnRyb2xzLFxuICAgICAgICB0aW1lOiAoMCwgaW1wb3J0X3V0aWxzLnBhcnNlU3RhcnRUaW1lKSh1cmwpLFxuICAgICAgICAuLi5jb25maWcub3B0aW9uc1xuICAgICAgfSk7XG4gICAgICBjb25zdCB7IFJFQURZLCBQTEFZSU5HLCBQQVVTRSwgRU5ERUQsIE9OTElORSwgT0ZGTElORSwgU0VFSyB9ID0gVHdpdGNoMi5QbGF5ZXI7XG4gICAgICB0aGlzLnBsYXllci5hZGRFdmVudExpc3RlbmVyKFJFQURZLCB0aGlzLnByb3BzLm9uUmVhZHkpO1xuICAgICAgdGhpcy5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihQTEFZSU5HLCB0aGlzLnByb3BzLm9uUGxheSk7XG4gICAgICB0aGlzLnBsYXllci5hZGRFdmVudExpc3RlbmVyKFBBVVNFLCB0aGlzLnByb3BzLm9uUGF1c2UpO1xuICAgICAgdGhpcy5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihFTkRFRCwgdGhpcy5wcm9wcy5vbkVuZGVkKTtcbiAgICAgIHRoaXMucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoU0VFSywgdGhpcy5wcm9wcy5vblNlZWspO1xuICAgICAgdGhpcy5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihPTkxJTkUsIHRoaXMucHJvcHMub25Mb2FkZWQpO1xuICAgICAgdGhpcy5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihPRkZMSU5FLCB0aGlzLnByb3BzLm9uTG9hZGVkKTtcbiAgICB9LCBvbkVycm9yKTtcbiAgfVxuICBwbGF5KCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBsYXlcIik7XG4gIH1cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGF1c2VcIik7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwYXVzZVwiKTtcbiAgfVxuICBzZWVrVG8oc2Vjb25kcywga2VlcFBsYXlpbmcgPSB0cnVlKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2Vla1wiLCBzZWNvbmRzKTtcbiAgICBpZiAoIWtlZXBQbGF5aW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgfVxuICB9XG4gIHNldFZvbHVtZShmcmFjdGlvbikge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNldFZvbHVtZVwiLCBmcmFjdGlvbik7XG4gIH1cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbFBsYXllcihcImdldER1cmF0aW9uXCIpO1xuICB9XG4gIGdldEN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoXCJnZXRDdXJyZW50VGltZVwiKTtcbiAgfVxuICBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICB9O1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlLCBpZDogdGhpcy5wbGF5ZXJJRCB9KTtcbiAgfVxufVxuX19wdWJsaWNGaWVsZChUd2l0Y2gsIFwiZGlzcGxheU5hbWVcIiwgXCJUd2l0Y2hcIik7XG5fX3B1YmxpY0ZpZWxkKFR3aXRjaCwgXCJjYW5QbGF5XCIsIGltcG9ydF9wYXR0ZXJucy5jYW5QbGF5LnR3aXRjaCk7XG5fX3B1YmxpY0ZpZWxkKFR3aXRjaCwgXCJsb29wT25FbmRlZFwiLCB0cnVlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-player/lib/players/Twitch.js\n");

/***/ })

}]);