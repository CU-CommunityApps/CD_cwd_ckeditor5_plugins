!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.insertafterelement=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,n)=>{e.exports=n("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,n)=>{e.exports=n("dll-reference CKEditor5.dll")("./src/ui.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{"use strict";n.d(r,{default:()=>c});var e=n("ckeditor5/src/core.js"),t=n("ckeditor5/src/ui.js");class o extends e.Plugin{init(){const e=this.editor;e.ui.componentFactory.add("insertafterelement",(function(){const n=new t.ButtonView;n.set({label:"Insert After Element",icon:'<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"\n "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">\n<svg version="1.0" xmlns="http://www.w3.org/2000/svg"\n width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"\n preserveAspectRatio="xMidYMid meet">\n<metadata>\nCreated by potrace 1.16, written by Peter Selinger 2001-2019\n</metadata>\n<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"\nfill="#000000" stroke="none">\n<path d="M3615 5024 l-50 -95 -102 -55 c-57 -31 -103 -57 -103 -59 0 -2 42\n-26 93 -54 51 -28 100 -58 109 -68 8 -10 36 -58 63 -107 41 -77 49 -86 58 -70\n6 10 32 57 58 102 46 83 47 84 140 135 51 29 94 56 94 61 0 5 -42 32 -94 61\nl-94 52 -52 93 c-28 52 -56 95 -61 97 -5 2 -31 -40 -59 -93z"/>\n<path d="M1530 4577 l-66 -122 -119 -67 c-66 -36 -120 -70 -120 -75 1 -4 54\n-37 119 -73 l119 -66 66 -122 c36 -67 68 -122 71 -122 3 0 35 56 72 124 l67\n123 121 64 c66 35 118 68 117 73 -2 4 -56 38 -122 75 l-119 66 -66 122 c-36\n67 -67 122 -70 122 -3 0 -34 -55 -70 -122z"/>\n<path d="M2883 4479 c-53 -10 -86 -33 -112 -80 -20 -35 -21 -51 -21 -386 l0\n-349 -257 -182 c-142 -100 -268 -191 -279 -200 -57 -48 -73 -161 -31 -223 33\n-49 77 -69 310 -140 l207 -63 -1289 -1291 c-914 -914 -1295 -1301 -1306 -1327\n-21 -52 -19 -96 7 -148 32 -62 77 -90 145 -90 30 0 68 7 86 16 18 9 611 595\n1319 1302 859 859 1289 1281 1293 1271 3 -7 34 -108 70 -224 36 -115 73 -221\n83 -235 25 -35 99 -70 147 -70 45 0 102 30 133 70 10 14 99 138 196 275 l177\n250 353 0 352 0 37 25 c68 45 96 143 62 213 -8 18 -102 149 -209 292 l-194\n260 99 290 c55 159 104 309 110 333 24 109 -56 212 -165 212 -19 0 -175 -47\n-348 -105 -172 -58 -318 -103 -325 -101 -7 3 -121 87 -254 187 -311 234 -312\n234 -396 218z"/>\n<path d="M4827 3799 c-8 -13 -23 -41 -33 -61 -13 -29 -32 -45 -80 -70 -34 -18\n-60 -36 -57 -40 2 -5 30 -21 61 -37 44 -22 62 -38 75 -67 10 -22 25 -50 34\n-62 15 -24 15 -24 51 39 31 52 47 68 94 93 32 17 58 33 58 36 0 3 -27 20 -59\n37 -49 27 -65 43 -94 94 l-34 62 -16 -24z"/>\n<path d="M4390 2173 c0 -5 17 -65 37 -135 l36 -127 -38 -131 c-21 -71 -36\n-133 -33 -136 3 -3 64 12 136 34 l130 39 132 -39 c73 -22 134 -37 137 -35 2 3\n-13 64 -35 137 l-39 132 39 130 c22 72 37 133 34 136 -3 3 -64 -12 -136 -33\nl-129 -38 -128 37 c-139 39 -143 40 -143 29z"/>\n<path d="M3505 1454 c-103 -184 -93 -173 -190 -226 -49 -27 -94 -53 -98 -57\n-5 -5 36 -33 91 -62 l100 -53 53 -98 c30 -54 57 -98 61 -98 4 0 30 44 59 98\nl52 98 99 52 c54 29 98 56 98 60 0 4 -45 30 -99 59 -93 50 -99 55 -130 113\n-18 33 -43 79 -56 102 l-24 42 -16 -30z"/>\n</g>\n</svg>\n',tooltip:!0});const r=t=>{let n=e.model.document.selection.getSelectedBlocks();n=Array.from(n),n.forEach((e=>{let n=e.parent,r=e;for(;"$root"!=n.name;){if("$root"==n.parent.name){r=n;break}n=n.parent}t.insertElement("paragraph",r,"end"),t.insertElement("paragraph",r,"after")}))};return n.on("execute",(()=>{e.model.change(r)})),n}))}}const c={Insertafterelement:o}})(),r=r.default})()));