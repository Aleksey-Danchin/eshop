(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-115e7a7b"],{"11e9":function(t,e,i){var a=i("52a7"),r=i("4630"),s=i("6821"),n=i("6a99"),c=i("69a8"),o=i("c69a"),l=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?l:function(t,e){if(t=s(t),e=n(e,!0),o)try{return l(t,e)}catch(i){}if(c(t,e))return r(!a.f.call(t,e),t[e])}},2923:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container p-0"},[i("div",{staticClass:"heading-1"},[t._v(t._s(t.item.rc.label)+", "+t._s(t.item.square)+" м2 за "+t._s(t.item.ppsm*t.item.square)+" ₽ ")]),i("div",{staticClass:"object"},[t._m(0),i("div",{staticClass:"object__desc"},[i("div",{staticClass:"object__desc-name"},[i("div",{staticClass:"object__desc-title"},[t._v("Студия, "+t._s(t.item.square)+" м2")]),i("div",{staticClass:"button-favourite",on:{click:function(e){return t.$store.dispatch("likeHandler",t.item.id)}}},[i("i",{staticClass:"fas fa-heart",style:{color:t.item.favorite&&"red"}}),t._v(" В избранное\n\t\t\t\t\t")])]),t._m(1),t._m(2),i("div",{staticClass:"button-order"},[t._v("Забронировать")]),i("div",{staticClass:"button-preview"},[t._v("Записаться на просмотр")])])])]),t._m(3),t._m(4),t._m(5)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"object__photo"},[i("div",{staticClass:"object__photo-wrapper"},[i("img",{attrs:{src:"/img/slider-item/photo.png",alt:""}})]),i("div",{staticClass:"object__photo-prev"},[i("img",{attrs:{src:"/img/slider-item/left.png",alt:""}})]),i("div",{staticClass:"object__photo-next"},[i("img",{attrs:{src:"/img/slider-item/right.png",alt:""}})]),i("div",{staticClass:"object__photo-slider-nav slider-nav"},[i("div",{staticClass:"slider-nav__dot slider-nav__dot--active"}),i("div",{staticClass:"slider-nav__dot"}),i("div",{staticClass:"slider-nav__dot"}),i("div",{staticClass:"slider-nav__dot"})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"object__desc-details"},[i("div",{staticClass:"params"},[i("div",{staticClass:"params__item"},[i("div",{staticClass:"params__definition"},[t._v("Корпус")]),i("div",{staticClass:"params__value"},[t._v("3")])]),i("div",{staticClass:"params__item"},[i("div",{staticClass:"params__definition"},[t._v("Секция")]),i("div",{staticClass:"params__value"},[t._v("1")])]),i("div",{staticClass:"params__item"},[i("div",{staticClass:"params__definition"},[t._v("Этаж")]),i("div",{staticClass:"params__value"},[t._v("8")])]),i("div",{staticClass:"params__item"},[i("div",{staticClass:"params__definition"},[t._v("Номер")]),i("div",{staticClass:"params__value"},[t._v("121")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[i("div",{staticClass:"details__row"},[i("div",{staticClass:"details__name"},[t._v("Стоимость")]),i("div",{staticClass:"details__value details__value--price"},[t._v("4 200 000 ₽")])]),i("div",{staticClass:"details__row"},[i("div",{staticClass:"details__name"},[t._v("Цена за м2")]),i("div",{staticClass:"details__value"},[t._v("64 000 ₽/м2")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"heading-slider"},[t._v("Галерея комплекса")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider"},[i("div",{staticClass:"slider__photo-wrapper"},[i("div",{staticClass:"slider__photo"},[i("img",{attrs:{src:"/img/gallery/img.jpg",alt:""}})])]),i("div",{staticClass:"slider__control slider__control--prev slider__control--disabled"},[i("img",{attrs:{src:"/img/gallery/gallery-prev.png",alt:""}})]),i("div",{staticClass:"slider__control slider__control--next"},[i("img",{attrs:{src:"/img/gallery/gallery-next.png",alt:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("a",{staticClass:"back-to-results",attrs:{href:"#"}},[t._v("← Вернуться к результатам поиска")])])}],s=(i("ac4d"),i("8a81"),i("ac6a"),{computed:{productId:function(){return parseInt(this.$route.params.productId)},item:function(){var t=!0,e=!1,i=void 0;try{for(var a,r=this.$store.state.items[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var s=a.value;if(s.id===this.productId)return s}}catch(n){e=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(e)throw i}}}}}),n=s,c=i("2877"),o=Object(c["a"])(n,a,r,!1,null,null,null);e["default"]=o.exports},"37c8":function(t,e,i){e.f=i("2b4c")},"3a72":function(t,e,i){var a=i("7726"),r=i("8378"),s=i("2d00"),n=i("37c8"),c=i("86cc").f;t.exports=function(t){var e=r.Symbol||(r.Symbol=s?{}:a.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:n.f(t)})}},"67ab":function(t,e,i){var a=i("ca5a")("meta"),r=i("d3f4"),s=i("69a8"),n=i("86cc").f,c=0,o=Object.isExtensible||function(){return!0},l=!i("79e5")(function(){return o(Object.preventExtensions({}))}),u=function(t){n(t,a,{value:{i:"O"+ ++c,w:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,a)){if(!o(t))return"F";if(!e)return"E";u(t)}return t[a].i},d=function(t,e){if(!s(t,a)){if(!o(t))return!0;if(!e)return!1;u(t)}return t[a].w},v=function(t){return l&&_.NEED&&o(t)&&!s(t,a)&&u(t),t},_=t.exports={KEY:a,NEED:!1,fastKey:f,getWeak:d,onFreeze:v}},"7bbc":function(t,e,i){var a=i("6821"),r=i("9093").f,s={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return r(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==s.call(t)?c(t):r(a(t))}},"8a81":function(t,e,i){"use strict";var a=i("7726"),r=i("69a8"),s=i("9e1e"),n=i("5ca1"),c=i("2aba"),o=i("67ab").KEY,l=i("79e5"),u=i("5537"),f=i("7f20"),d=i("ca5a"),v=i("2b4c"),_=i("37c8"),p=i("3a72"),m=i("d4c0"),h=i("1169"),b=i("cb7c"),y=i("d3f4"),g=i("4bf8"),C=i("6821"),S=i("6a99"),w=i("4630"),O=i("2aeb"),L=i("7bbc"),j=i("11e9"),E=i("2621"),P=i("86cc"),T=i("0d58"),N=j.f,k=P.f,x=L.f,M=a.Symbol,F=a.JSON,$=F&&F.stringify,D="prototype",I=v("_hidden"),G=v("toPrimitive"),V={}.propertyIsEnumerable,J=u("symbol-registry"),A=u("symbols"),H=u("op-symbols"),q=Object[D],R="function"==typeof M&&!!E.f,K=a.QObject,W=!K||!K[D]||!K[D].findChild,Y=s&&l(function(){return 7!=O(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,i){var a=N(q,e);a&&delete q[e],k(t,e,i),a&&t!==q&&k(q,e,a)}:k,z=function(t){var e=A[t]=O(M[D]);return e._k=t,e},B=R&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},Q=function(t,e,i){return t===q&&Q(H,e,i),b(t),e=S(e,!0),b(i),r(A,e)?(i.enumerable?(r(t,I)&&t[I][e]&&(t[I][e]=!1),i=O(i,{enumerable:w(0,!1)})):(r(t,I)||k(t,I,w(1,{})),t[I][e]=!0),Y(t,e,i)):k(t,e,i)},U=function(t,e){b(t);var i,a=m(e=C(e)),r=0,s=a.length;while(s>r)Q(t,i=a[r++],e[i]);return t},X=function(t,e){return void 0===e?O(t):U(O(t),e)},Z=function(t){var e=V.call(this,t=S(t,!0));return!(this===q&&r(A,t)&&!r(H,t))&&(!(e||!r(this,t)||!r(A,t)||r(this,I)&&this[I][t])||e)},tt=function(t,e){if(t=C(t),e=S(e,!0),t!==q||!r(A,e)||r(H,e)){var i=N(t,e);return!i||!r(A,e)||r(t,I)&&t[I][e]||(i.enumerable=!0),i}},et=function(t){var e,i=x(C(t)),a=[],s=0;while(i.length>s)r(A,e=i[s++])||e==I||e==o||a.push(e);return a},it=function(t){var e,i=t===q,a=x(i?H:C(t)),s=[],n=0;while(a.length>n)!r(A,e=a[n++])||i&&!r(q,e)||s.push(A[e]);return s};R||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(i){this===q&&e.call(H,i),r(this,I)&&r(this[I],t)&&(this[I][t]=!1),Y(this,t,w(1,i))};return s&&W&&Y(q,t,{configurable:!0,set:e}),z(t)},c(M[D],"toString",function(){return this._k}),j.f=tt,P.f=Q,i("9093").f=L.f=et,i("52a7").f=Z,E.f=it,s&&!i("2d00")&&c(q,"propertyIsEnumerable",Z,!0),_.f=function(t){return z(v(t))}),n(n.G+n.W+n.F*!R,{Symbol:M});for(var at="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;at.length>rt;)v(at[rt++]);for(var st=T(v.store),nt=0;st.length>nt;)p(st[nt++]);n(n.S+n.F*!R,"Symbol",{for:function(t){return r(J,t+="")?J[t]:J[t]=M(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in J)if(J[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),n(n.S+n.F*!R,"Object",{create:X,defineProperty:Q,defineProperties:U,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:it});var ct=l(function(){E.f(1)});n(n.S+n.F*ct,"Object",{getOwnPropertySymbols:function(t){return E.f(g(t))}}),F&&n(n.S+n.F*(!R||l(function(){var t=M();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))})),"JSON",{stringify:function(t){var e,i,a=[t],r=1;while(arguments.length>r)a.push(arguments[r++]);if(i=e=a[1],(y(e)||void 0!==t)&&!B(t))return h(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!B(e))return e}),a[1]=e,$.apply(F,a)}}),M[D][G]||i("32e9")(M[D],G,M[D].valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(a.JSON,"JSON",!0)},9093:function(t,e,i){var a=i("ce10"),r=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},ac4d:function(t,e,i){i("3a72")("asyncIterator")},ac6a:function(t,e,i){for(var a=i("cadf"),r=i("0d58"),s=i("2aba"),n=i("7726"),c=i("32e9"),o=i("84f2"),l=i("2b4c"),u=l("iterator"),f=l("toStringTag"),d=o.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},_=r(v),p=0;p<_.length;p++){var m,h=_[p],b=v[h],y=n[h],g=y&&y.prototype;if(g&&(g[u]||c(g,u,d),g[f]||c(g,f,h),o[h]=d,b))for(m in a)g[m]||s(g,m,a[m],!0)}},d4c0:function(t,e,i){var a=i("0d58"),r=i("2621"),s=i("52a7");t.exports=function(t){var e=a(t),i=r.f;if(i){var n,c=i(t),o=s.f,l=0;while(c.length>l)o.call(t,n=c[l++])&&e.push(n)}return e}}}]);
//# sourceMappingURL=chunk-115e7a7b.bb5736fe.js.map