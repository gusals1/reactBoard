/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerVidyard"],{

/***/ "./node_modules/react-player/lib/players/Vidyard.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Vidyard.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Vidyard_exports = {};\n__export(Vidyard_exports, {\n  default: () => Vidyard\n});\nmodule.exports = __toCommonJS(Vidyard_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://play.vidyard.com/embed/v4.js\";\nconst SDK_GLOBAL = \"VidyardV4\";\nconst SDK_GLOBAL_READY = \"onVidyardAPI\";\nclass Vidyard extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"mute\", () => {\n      this.setVolume(0);\n    });\n    __publicField(this, \"unmute\", () => {\n      if (this.props.volume !== null) {\n        this.setVolume(this.props.volume);\n      }\n    });\n    __publicField(this, \"ref\", (container) => {\n      this.container = container;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url) {\n    const { playing, config, onError, onDuration } = this.props;\n    const id = url && url.match(import_patterns.MATCH_URL_VIDYARD)[1];\n    if (this.player) {\n      this.stop();\n    }\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then((Vidyard2) => {\n      if (!this.container)\n        return;\n      Vidyard2.api.addReadyListener((data, player) => {\n        if (this.player) {\n          return;\n        }\n        this.player = player;\n        this.player.on(\"ready\", this.props.onReady);\n        this.player.on(\"play\", this.props.onPlay);\n        this.player.on(\"pause\", this.props.onPause);\n        this.player.on(\"seek\", this.props.onSeek);\n        this.player.on(\"playerComplete\", this.props.onEnded);\n      }, id);\n      Vidyard2.api.renderPlayer({\n        uuid: id,\n        container: this.container,\n        autoplay: playing ? 1 : 0,\n        ...config.options\n      });\n      Vidyard2.api.getPlayerMetadata(id).then((meta) => {\n        this.duration = meta.length_in_seconds;\n        onDuration(meta.length_in_seconds);\n      });\n    }, onError);\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n    window.VidyardV4.api.destroyPlayer(this.player);\n  }\n  seekTo(amount, keepPlaying = true) {\n    this.callPlayer(\"seek\", amount);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  setPlaybackRate(rate) {\n    this.callPlayer(\"setPlaybackSpeed\", rate);\n  }\n  getDuration() {\n    return this.duration;\n  }\n  getCurrentTime() {\n    return this.callPlayer(\"currentTime\");\n  }\n  getSecondsLoaded() {\n    return null;\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\"div\", { style }, /* @__PURE__ */ import_react.default.createElement(\"div\", { ref: this.ref }));\n  }\n}\n__publicField(Vidyard, \"displayName\", \"Vidyard\");\n__publicField(Vidyard, \"canPlay\", import_patterns.canPlay.vidyard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1ZpZHlhcmQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOEJBQThCO0FBQ3ZHO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQywwREFBVTtBQUNyQyxzQkFBc0IsbUJBQU8sQ0FBQyxnRUFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1Q0FBdUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLE9BQU8sOERBQThELGVBQWU7QUFDM0o7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9WaWR5YXJkLmpzPzFkYzMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIFZpZHlhcmRfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoVmlkeWFyZF9leHBvcnRzLCB7XG4gIGRlZmF1bHQ6ICgpID0+IFZpZHlhcmRcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoVmlkeWFyZF9leHBvcnRzKTtcbnZhciBpbXBvcnRfcmVhY3QgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgaW1wb3J0X3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGltcG9ydF9wYXR0ZXJucyA9IHJlcXVpcmUoXCIuLi9wYXR0ZXJuc1wiKTtcbmNvbnN0IFNES19VUkwgPSBcImh0dHBzOi8vcGxheS52aWR5YXJkLmNvbS9lbWJlZC92NC5qc1wiO1xuY29uc3QgU0RLX0dMT0JBTCA9IFwiVmlkeWFyZFY0XCI7XG5jb25zdCBTREtfR0xPQkFMX1JFQURZID0gXCJvblZpZHlhcmRBUElcIjtcbmNsYXNzIFZpZHlhcmQgZXh0ZW5kcyBpbXBvcnRfcmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiY2FsbFBsYXllclwiLCBpbXBvcnRfdXRpbHMuY2FsbFBsYXllcik7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm11dGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWb2x1bWUoMCk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInVubXV0ZVwiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy52b2x1bWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRWb2x1bWUodGhpcy5wcm9wcy52b2x1bWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJyZWZcIiwgKGNvbnRhaW5lcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbk1vdW50ICYmIHRoaXMucHJvcHMub25Nb3VudCh0aGlzKTtcbiAgfVxuICBsb2FkKHVybCkge1xuICAgIGNvbnN0IHsgcGxheWluZywgY29uZmlnLCBvbkVycm9yLCBvbkR1cmF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlkID0gdXJsICYmIHVybC5tYXRjaChpbXBvcnRfcGF0dGVybnMuTUFUQ0hfVVJMX1ZJRFlBUkQpWzFdO1xuICAgIGlmICh0aGlzLnBsYXllcikge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICAgICgwLCBpbXBvcnRfdXRpbHMuZ2V0U0RLKShTREtfVVJMLCBTREtfR0xPQkFMLCBTREtfR0xPQkFMX1JFQURZKS50aGVuKChWaWR5YXJkMikgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgVmlkeWFyZDIuYXBpLmFkZFJlYWR5TGlzdGVuZXIoKGRhdGEsIHBsYXllcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMucGxheWVyLm9uKFwicmVhZHlcIiwgdGhpcy5wcm9wcy5vblJlYWR5KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIub24oXCJwbGF5XCIsIHRoaXMucHJvcHMub25QbGF5KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIub24oXCJwYXVzZVwiLCB0aGlzLnByb3BzLm9uUGF1c2UpO1xuICAgICAgICB0aGlzLnBsYXllci5vbihcInNlZWtcIiwgdGhpcy5wcm9wcy5vblNlZWspO1xuICAgICAgICB0aGlzLnBsYXllci5vbihcInBsYXllckNvbXBsZXRlXCIsIHRoaXMucHJvcHMub25FbmRlZCk7XG4gICAgICB9LCBpZCk7XG4gICAgICBWaWR5YXJkMi5hcGkucmVuZGVyUGxheWVyKHtcbiAgICAgICAgdXVpZDogaWQsXG4gICAgICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXG4gICAgICAgIGF1dG9wbGF5OiBwbGF5aW5nID8gMSA6IDAsXG4gICAgICAgIC4uLmNvbmZpZy5vcHRpb25zXG4gICAgICB9KTtcbiAgICAgIFZpZHlhcmQyLmFwaS5nZXRQbGF5ZXJNZXRhZGF0YShpZCkudGhlbigobWV0YSkgPT4ge1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gbWV0YS5sZW5ndGhfaW5fc2Vjb25kcztcbiAgICAgICAgb25EdXJhdGlvbihtZXRhLmxlbmd0aF9pbl9zZWNvbmRzKTtcbiAgICAgIH0pO1xuICAgIH0sIG9uRXJyb3IpO1xuICB9XG4gIHBsYXkoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGxheVwiKTtcbiAgfVxuICBwYXVzZSgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwYXVzZVwiKTtcbiAgfVxuICBzdG9wKCkge1xuICAgIHdpbmRvdy5WaWR5YXJkVjQuYXBpLmRlc3Ryb3lQbGF5ZXIodGhpcy5wbGF5ZXIpO1xuICB9XG4gIHNlZWtUbyhhbW91bnQsIGtlZXBQbGF5aW5nID0gdHJ1ZSkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNlZWtcIiwgYW1vdW50KTtcbiAgICBpZiAoIWtlZXBQbGF5aW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgfVxuICB9XG4gIHNldFZvbHVtZShmcmFjdGlvbikge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNldFZvbHVtZVwiLCBmcmFjdGlvbik7XG4gIH1cbiAgc2V0UGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRQbGF5YmFja1NwZWVkXCIsIHJhdGUpO1xuICB9XG4gIGdldER1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmR1cmF0aW9uO1xuICB9XG4gIGdldEN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoXCJjdXJyZW50VGltZVwiKTtcbiAgfVxuICBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc3BsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgZGlzcGxheVxuICAgIH07XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGUgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHRoaXMucmVmIH0pKTtcbiAgfVxufVxuX19wdWJsaWNGaWVsZChWaWR5YXJkLCBcImRpc3BsYXlOYW1lXCIsIFwiVmlkeWFyZFwiKTtcbl9fcHVibGljRmllbGQoVmlkeWFyZCwgXCJjYW5QbGF5XCIsIGltcG9ydF9wYXR0ZXJucy5jYW5QbGF5LnZpZHlhcmQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-player/lib/players/Vidyard.js\n");

/***/ })

}]);