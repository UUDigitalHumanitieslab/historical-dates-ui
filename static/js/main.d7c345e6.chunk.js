(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(20)},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),i=t.n(c),l=(t(19),t(3)),s=t(2),o=t(5),u=t(4),d=t(8),m=t(6),v=t(7),h=t(1),y=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state=a.parseRomanNumber(e.value),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(function(){return a.parseRomanNumber(e.value)})}},{key:"render",value:function(){var e="".concat(this.props.className," ").concat("invalid"!==this.state.type?"input":"input is-danger").trimLeft(),a=this.state.text;return n.createElement("input",{spellCheck:!1,className:e,type:"text",value:a,placeholder:this.props.placeholder,onKeyDown:this.keydown.bind(this),onChange:this.change.bind(this)})}},{key:"keydown",value:function(e){switch(e.keyCode){case 40:this.shiftNumber(!0);break;case 38:this.shiftNumber(!1)}}},{key:"change",value:function(e){this.props.onChange(a.parseRomanNumber(e.target.value))}},{key:"shiftNumber",value:function(e){var t=this;this.setState(function(n){if("invalid"===n.type)return{};var r=a.parseRomanNumber(n.text);if("invalid"===r.type)return{};var c=r.value+(e?1:-1),i={text:"roman"===r.type&&c>=0?Object(h.toRomanNumber)(c):c.toString(),numeric:c};return t.props.onChange(a.parseRomanNumber(i.text)),i})}}],[{key:"parseRomanNumber",value:function(e){var a="".concat(e).toUpperCase().replace(/[\. ]/g,"").trim();if(/^-?[0-9]+$/.test(a))return{type:"arabic",text:e.toString(),value:parseInt(a)};try{return{type:"roman",text:(e||"").toString(),value:Object(h.fromRomanNumber)(a)||0}}catch(t){if(t instanceof h.InvalidDateException)return{type:"invalid",text:e.toString(),value:0};throw t}}}]),a}(n.Component);y.defaultProps={className:"",value:"",onChange:function(){}};var p=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).change=function(e){var a=Object(v.a)({},e.target.name,parseInt(e.target.value.replace(/[^0-9]/g,""))||0);t.setState(function(e,n){var r=t.parseState(Object.assign({},e,a));return r.valid&&n.onChange(r),r})},t.changeYear=function(e){t.setState(function(a,n){var r=t.parseState(Object.assign({},a,"invalid"!==e.type?{year:e.value,yearText:e.text,valid:!0}:{valid:!1}));return r.valid&&n.onChange(r),r})},t.state=Object.assign({},e,{valid:!0}),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){var a=this;this.setState(function(t,n){return t.calendar!==e.calendar&&(e=a.parseState(e),n.onChange(e)),e})}},{key:"parseState",value:function(e){try{var a=Object(h.createDate)(e.year,e.month,e.day,e.calendar);return Object.assign({},e,{date:a,valid:!0})}catch(t){if(t instanceof h.InvalidDateException)return Object.assign({},e,{valid:!1});throw t}}},{key:"render",value:function(){var e=this.state,a=e.day,t=e.month,r=e.yearText,c=e.valid,i=c?"select":"select is-danger",l=c?"input":"input is-danger";return n.createElement("div",{className:"field has-addons"},n.createElement("div",{className:"control"},n.createElement("div",{className:i},n.createElement("select",{name:"day",value:a,onChange:this.change},this.days().map(function(e){return n.createElement("option",{key:e||0,value:e},void 0===e?"":"".concat(e))})))),n.createElement("div",{className:"control"},n.createElement("div",{className:i},n.createElement("select",{name:"month",value:t,onChange:this.change},["","January","February","March","April","May","June","July","August","September","October","November","December"].map(function(e,a){return n.createElement("option",{key:a,value:0===a?void 0:a},e)})))),n.createElement("div",{className:"control"},n.createElement(y,{className:l,value:r,onChange:this.changeYear})))}},{key:"days",value:function(){for(var e=[void 0],a=1;a<32;a++)e.push(a);return e}}]),a}(n.Component);p.defaultProps={onChange:function(){},calendar:"gregorian",valid:!0};var g=t(12),f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).change=function(e){var a=Object(v.a)({},e.target.name,e.target.value);t.setState(function(e,n){var r=Object.assign({},n,e,a);return t.parseState(r,n).newState})},t.state=Object.assign({},e),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){var a=this;this.setState(function(t,n){var r;if(e=Object.assign({},n,t,e),t.calendar!==e.calendar){var c=a.parseState(e,n);r=c.yearValue,e=c.newState}else r=y.parseRomanNumber(e.year).value;return y.parseRomanNumber(t.year).value===r&&(e.year=t.year),e})}},{key:"changeYear",value:function(e){var a=this;this.setState(function(t,n){var r=Object.assign({},n,t,{year:e.text,valid:"invalid"!==e.type});return a.parseState(r,n,"invalid"!==e.type).newState})}},{key:"parseState",value:function(e,a){var t,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e.year.toString(),c=y.parseRomanNumber(r).value;if(n){try{switch(e.day){case"easter":t=Object(h.calcEaster)(c,e.calendar).sunday;break;case"unknown":t=Object(h.createDate)(c,1,1,e.calendar);break;default:t=Object(h.calcEaster)(c,e.calendar)[e.day]}}catch(i){if(i instanceof h.InvalidDateException)return e.valid=!1,{newState:e,yearValue:c};throw i}e=Object.assign(e,{year:r,date:t,valid:n}),a.onChange(e)}return{newState:e,yearValue:c}}},{key:"render",value:function(){var e=this.state,a=e.day,t=e.year,r=e.valid;return n.createElement("div",{className:"field has-addons"},n.createElement("div",{className:"control"},n.createElement("div",{className:"select"},n.createElement("select",{name:"day",value:a,onChange:this.change},n.createElement("option",{value:"easter"},"Easter"),n.createElement("option",{value:"septuagesima"},"Septuagesima"),n.createElement("option",{value:"ashWednesday"},"Ash Wednesday"),n.createElement("option",{value:"ascensionDay"},"Ascension Day"),n.createElement("option",{value:"pentecost"},"Pentecost"),n.createElement("option",{value:"trinitySunday"},"Trinity Sunday"),n.createElement("option",{value:"corpusChristi"},"Corpus Christi"),n.createElement("option",{value:"adventSunday"},"Advent Sunday"),n.createElement("option",{value:"unknown"},"Unknown")))),n.createElement("div",{className:"control"},n.createElement(y,{className:r?"input":"input is-danger",placeholder:"year",value:t,onChange:this.changeYear.bind(this)})))}}]),a}(n.Component);f.defaultProps={onChange:function(){},day:"easter",calendar:"gregorian",valid:!0};var b=t(9),E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).change=function(e){var a=Object(v.a)({},e.target.name,e.target.value);t.setState(function(e){var n=Object.assign({},e,a);return t.parseState(n)})},t.state=Object.assign({},e),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){var a=this;this.setState(function(t,n){return e=Object.assign({},n,t,e),t.calendar!==e.calendar&&(e=a.parseState(e)),e})}},{key:"changeYear",value:function(e){var a=this;this.setState(function(t){var n=Object.assign({},t,{year:e.text,yearType:e.type});return a.parseState(n,"invalid"!==e.type)})}},{key:"parseState",value:function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{var t=e.yearType&&"arabic"===e.yearType?Object(h.toRomanNumber)(parseInt(e.year)):e.year,n=new h.RomanDate(e.day,e.text,e.month,t,e.calendar).toDate();e=Object.assign({},e,{date:n,valid:a})}catch(r){if(!(r instanceof h.InvalidDateException))throw r;e=Object.assign({},e,{valid:!1})}return e.valid&&e.onChange(e),e}},{key:"render",value:function(){var e=this.state,a=e.day,t=e.text,r=e.month,c=e.year,i=e.valid,l=i?"select":"select is-danger",s=i?"input":"input is-danger";return n.createElement("div",{className:"field has-addons"},n.createElement("div",{className:"control"},n.createElement("div",{className:l},n.createElement("select",{name:"day",value:a,onChange:this.change},Object.keys(h.RomanDays).map(function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("div",{className:"control"},n.createElement("div",{className:l},n.createElement("select",{name:"text",value:t,onChange:this.change},[""].concat(Object(b.a)(Object.keys(h.RomanTexts))).map(function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("div",{className:"control"},n.createElement("div",{className:l},n.createElement("select",{name:"month",value:r,onChange:this.change},[""].concat(Object(b.a)(Object.keys(h.RomanMonths))).map(function(e){return n.createElement("option",{key:e,value:e},e)})))),n.createElement("div",{className:"control"},n.createElement(y,{className:s,value:c,onChange:this.changeYear.bind(this)})))}}]),a}(n.Component);E.defaultProps={onChange:function(){},calendar:"gregorian",valid:!0};var j=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).change=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.setDerivedState(Object(g.a)(Object(v.a)({},e.target.name,e.target.value),a?{offsetDays:0}:{}))},t.state={calendar:e.calendar,date:e.date,text:e.text,type:e.type,offsetDays:e.offsetDays,holiday:e.holiday,roman:e.roman,gregorianDate:e.date.toGregorian(),julianDate:e.date.toJulian(),yearText:(e.date.year||"").toString()},t}return Object(m.a)(a,e),Object(s.a)(a,null,[{key:"defaultProps",get:function(){var e=Object(h.createDate)(void 0,void 0,void 0,"gregorian");return{calendar:"unknown",date:e,holiday:"easter",roman:h.RomanDate.fromDate(e),offsetDays:0,onChange:function(){}}}}]),Object(s.a)(a,[{key:"deriveState",value:function(e,a){var t,n=Object.assign({calendar:e.calendar,date:e.date,offsetDays:e.offsetDays},a);n.offsetDays=parseInt(n.offsetDays||"0");var r=n.date.addDays(n.offsetDays);return t=Object.assign({},n,{gregorianDate:r.toGregorian(),julianDate:r.toJulian()}),e.type===t.type&&e.calendar===t.calendar&&e.gregorianDate.equals(t.gregorianDate)||this.emitState(Object.assign(e,t)),t.offsetDays=t.offsetDays.toString(),t}},{key:"setDerivedState",value:function(e){var a=this;this.setState(function(t){return a.deriveState(t,e)})}},{key:"emitState",value:function(e){var a={calendar:e.calendar,type:e.type,offsetDays:e.offsetDays,gregorianDate:e.gregorianDate};switch("julian"===e.calendar&&(a.julianDate=e.julianDate),e.type){case"plain":a.date=e.date;break;case"holiday":a.holiday=e.holiday;break;case"roman":a.roman={day:e.roman.day,text:e.roman.text,month:e.roman.month,year:e.roman.year}}this.props.onChange(a)}},{key:"componentWillReceiveProps",value:function(e){var a=this,t={text:e.text,type:e.type,onChange:e.onChange};this.setState(function(e){if(e.text!==t.text&&t.text){var n=!1;try{var r=Object(h.createDateFromString)(t.text,"gregorian");t=Object.assign({},t,{date:r,yearText:(r.year||"").toString(),type:"plain"}),n=!0}catch(i){if(!(i instanceof h.InvalidDateException))throw i}if(!n)try{var c=h.RomanDate.fromString(t.text,"unknown"===a.state.calendar?"gregorian":a.state.calendar);t=Object.assign({},t,{roman:c,date:c.toDate(),type:"roman"})}catch(i){if(!(i instanceof h.InvalidDateException))throw i}}return a.deriveState(e,t)})}},{key:"render",value:function(){var e,a=this,t=this.state,r=t.calendar,c=t.date,i=t.holiday,l=t.roman,s=t.type,o=t.offsetDays,u=t.gregorianDate,d=t.julianDate,m=t.yearText,v="julian"!==r?"gregorian":"julian";switch(s){case"plain":e=n.createElement(p,{onChange:function(e){a.setDerivedState({date:Object(h.createDate)(e.year,e.month,e.day,e.calendar),yearText:e.yearText})},calendar:v,day:c.day,month:c.month,year:c.year,yearText:m});break;case"holiday":e=n.createElement(f,{onChange:function(e){a.setDerivedState({holiday:e.day,date:e.date,year:e.year})},calendar:v,day:i,year:c.year||""});break;case"roman":e=n.createElement(E,{onChange:function(e){a.setDerivedState({roman:e,date:e.date})},calendar:v,day:l.day,text:l.text,month:l.month,year:l.year})}var y="",g="";return s&&("holiday"===s&&(y=n.createElement("div",{className:"field"},n.createElement("label",{className:"label"},"Offset Days"),n.createElement("div",{className:"control"},n.createElement("input",{className:"input",type:"number",placeholder:"0",name:"offsetDays",value:o,onChange:this.change})))),g=n.createElement("div",{className:"columns"},n.createElement("div",{className:"column"},n.createElement("div",{className:"field"},n.createElement("div",{className:"control"},n.createElement("label",{className:"radio"},n.createElement("input",{type:"radio",name:"calendar",onChange:this.change,value:"gregorian",checked:"gregorian"===r}),"Gregorian Date (new style)"))),u.toString()),n.createElement("div",{className:"column"},n.createElement("div",{className:"field"},n.createElement("div",{className:"control"},n.createElement("label",{className:"radio"},n.createElement("input",{type:"radio",name:"calendar",onChange:this.change,value:"julian",checked:"julian"===r}),"Julian Date (old style)"))),d.toString()),n.createElement("div",{className:"column"},n.createElement("div",{className:"field"},n.createElement("div",{className:"control"},n.createElement("label",{className:"radio"},n.createElement("input",{type:"radio",name:"calendar",onChange:this.change,value:"unknown",checked:"unknown"===r}),"Unknown"))),u.toString()))),n.createElement("div",null,n.createElement("div",{className:"field"},n.createElement("div",{className:"control"},n.createElement("label",{className:"radio"},n.createElement("input",{type:"radio",name:"type",onChange:function(e){return a.change(e,!0)},value:"plain",checked:"plain"===s}),"Plain date"),n.createElement("label",{className:"radio"},n.createElement("input",{type:"radio",name:"type",onChange:this.change,value:"holiday",checked:"holiday"===s}),"Holiday"),n.createElement("label",{className:"radio"},n.createElement("input",{type:"radio",name:"type",onChange:function(e){return a.change(e,!0)},value:"roman",checked:"roman"===s}),"Roman date"),n.createElement("label",{className:"radio"},n.createElement("input",{type:"radio",name:"type",onChange:function(e){return a.change(e,!0)},value:void 0,checked:!s}),"Other/Unknown"))),e,y,g)}}]),a}(n.Component),O=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state=Object.assign({text:"",data:""},e),t.changeText=t.changeText.bind(Object(d.a)(t)),t.displayState=t.displayState.bind(Object(d.a)(t)),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"changeText",value:function(e){var a=e.target.value;this.setState(function(e){return{data:Object.assign({},e.data,{text:a}),text:a}})}},{key:"displayState",value:function(e){this.setState({data:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Transcribed Date"),r.a.createElement("input",{className:"input",type:"text",value:this.state.text,onChange:this.changeText})),r.a.createElement(j,{text:this.state.text,type:this.state.data.type,onChange:this.displayState}))),r.a.createElement("br",null),r.a.createElement("pre",{className:"code"},JSON.stringify(this.state.data,null,4)))}}]),a}(n.Component);i.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d7c345e6.chunk.js.map