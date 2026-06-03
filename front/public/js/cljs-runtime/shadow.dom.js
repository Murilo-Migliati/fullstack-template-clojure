goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19367 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19367(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19368 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19368(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18053 = coll;
var G__18054 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18053,G__18054) : shadow.dom.lazy_native_coll_seq.call(null,G__18053,G__18054));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18092 = arguments.length;
switch (G__18092) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18101 = arguments.length;
switch (G__18101) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18110 = arguments.length;
switch (G__18110) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18124 = arguments.length;
switch (G__18124) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18142 = arguments.length;
switch (G__18142) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18167 = arguments.length;
switch (G__18167) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18169){if((e18169 instanceof Object)){
var e = e18169;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18169;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18177 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18178 = null;
var count__18179 = (0);
var i__18180 = (0);
while(true){
if((i__18180 < count__18179)){
var el = chunk__18178.cljs$core$IIndexed$_nth$arity$2(null,i__18180);
var handler_19390__$1 = ((function (seq__18177,chunk__18178,count__18179,i__18180,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18177,chunk__18178,count__18179,i__18180,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19390__$1);


var G__19391 = seq__18177;
var G__19392 = chunk__18178;
var G__19393 = count__18179;
var G__19394 = (i__18180 + (1));
seq__18177 = G__19391;
chunk__18178 = G__19392;
count__18179 = G__19393;
i__18180 = G__19394;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18177);
if(temp__5804__auto__){
var seq__18177__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18177__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18177__$1);
var G__19395 = cljs.core.chunk_rest(seq__18177__$1);
var G__19396 = c__5568__auto__;
var G__19397 = cljs.core.count(c__5568__auto__);
var G__19398 = (0);
seq__18177 = G__19395;
chunk__18178 = G__19396;
count__18179 = G__19397;
i__18180 = G__19398;
continue;
} else {
var el = cljs.core.first(seq__18177__$1);
var handler_19399__$1 = ((function (seq__18177,chunk__18178,count__18179,i__18180,el,seq__18177__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18177,chunk__18178,count__18179,i__18180,el,seq__18177__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19399__$1);


var G__19400 = cljs.core.next(seq__18177__$1);
var G__19401 = null;
var G__19402 = (0);
var G__19403 = (0);
seq__18177 = G__19400;
chunk__18178 = G__19401;
count__18179 = G__19402;
i__18180 = G__19403;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18182 = arguments.length;
switch (G__18182) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18215 = cljs.core.seq(events);
var chunk__18216 = null;
var count__18217 = (0);
var i__18218 = (0);
while(true){
if((i__18218 < count__18217)){
var vec__18225 = chunk__18216.cljs$core$IIndexed$_nth$arity$2(null,i__18218);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18225,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18225,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19405 = seq__18215;
var G__19406 = chunk__18216;
var G__19407 = count__18217;
var G__19408 = (i__18218 + (1));
seq__18215 = G__19405;
chunk__18216 = G__19406;
count__18217 = G__19407;
i__18218 = G__19408;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18215);
if(temp__5804__auto__){
var seq__18215__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18215__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18215__$1);
var G__19409 = cljs.core.chunk_rest(seq__18215__$1);
var G__19410 = c__5568__auto__;
var G__19411 = cljs.core.count(c__5568__auto__);
var G__19412 = (0);
seq__18215 = G__19409;
chunk__18216 = G__19410;
count__18217 = G__19411;
i__18218 = G__19412;
continue;
} else {
var vec__18228 = cljs.core.first(seq__18215__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18228,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19416 = cljs.core.next(seq__18215__$1);
var G__19417 = null;
var G__19418 = (0);
var G__19419 = (0);
seq__18215 = G__19416;
chunk__18216 = G__19417;
count__18217 = G__19418;
i__18218 = G__19419;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18231 = cljs.core.seq(styles);
var chunk__18232 = null;
var count__18233 = (0);
var i__18234 = (0);
while(true){
if((i__18234 < count__18233)){
var vec__18265 = chunk__18232.cljs$core$IIndexed$_nth$arity$2(null,i__18234);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18265,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18265,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19420 = seq__18231;
var G__19421 = chunk__18232;
var G__19422 = count__18233;
var G__19423 = (i__18234 + (1));
seq__18231 = G__19420;
chunk__18232 = G__19421;
count__18233 = G__19422;
i__18234 = G__19423;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18231);
if(temp__5804__auto__){
var seq__18231__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18231__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18231__$1);
var G__19424 = cljs.core.chunk_rest(seq__18231__$1);
var G__19425 = c__5568__auto__;
var G__19426 = cljs.core.count(c__5568__auto__);
var G__19427 = (0);
seq__18231 = G__19424;
chunk__18232 = G__19425;
count__18233 = G__19426;
i__18234 = G__19427;
continue;
} else {
var vec__18270 = cljs.core.first(seq__18231__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18270,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19431 = cljs.core.next(seq__18231__$1);
var G__19432 = null;
var G__19433 = (0);
var G__19434 = (0);
seq__18231 = G__19431;
chunk__18232 = G__19432;
count__18233 = G__19433;
i__18234 = G__19434;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18274_19436 = key;
var G__18274_19437__$1 = (((G__18274_19436 instanceof cljs.core.Keyword))?G__18274_19436.fqn:null);
switch (G__18274_19437__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19441 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19441,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19441,"aria-");
}
})())){
el.setAttribute(ks_19441,value);
} else {
(el[ks_19441] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18307){
var map__18309 = p__18307;
var map__18309__$1 = cljs.core.__destructure_map(map__18309);
var props = map__18309__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18309__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18312 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18312,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18312,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18312,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18319 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18319,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18319;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18330 = arguments.length;
switch (G__18330) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18343){
var vec__18344 = p__18343;
var seq__18345 = cljs.core.seq(vec__18344);
var first__18346 = cljs.core.first(seq__18345);
var seq__18345__$1 = cljs.core.next(seq__18345);
var nn = first__18346;
var first__18346__$1 = cljs.core.first(seq__18345__$1);
var seq__18345__$2 = cljs.core.next(seq__18345__$1);
var np = first__18346__$1;
var nc = seq__18345__$2;
var node = vec__18344;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18370 = nn;
var G__18371 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18370,G__18371) : create_fn.call(null,G__18370,G__18371));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18372 = nn;
var G__18373 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18372,G__18373) : create_fn.call(null,G__18372,G__18373));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18376 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18376,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18376,(1),null);
var seq__18379_19449 = cljs.core.seq(node_children);
var chunk__18380_19450 = null;
var count__18381_19451 = (0);
var i__18382_19452 = (0);
while(true){
if((i__18382_19452 < count__18381_19451)){
var child_struct_19453 = chunk__18380_19450.cljs$core$IIndexed$_nth$arity$2(null,i__18382_19452);
var children_19454 = shadow.dom.dom_node(child_struct_19453);
if(cljs.core.seq_QMARK_(children_19454)){
var seq__18460_19455 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19454));
var chunk__18462_19456 = null;
var count__18463_19457 = (0);
var i__18464_19458 = (0);
while(true){
if((i__18464_19458 < count__18463_19457)){
var child_19459 = chunk__18462_19456.cljs$core$IIndexed$_nth$arity$2(null,i__18464_19458);
if(cljs.core.truth_(child_19459)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19459);


var G__19460 = seq__18460_19455;
var G__19461 = chunk__18462_19456;
var G__19462 = count__18463_19457;
var G__19463 = (i__18464_19458 + (1));
seq__18460_19455 = G__19460;
chunk__18462_19456 = G__19461;
count__18463_19457 = G__19462;
i__18464_19458 = G__19463;
continue;
} else {
var G__19464 = seq__18460_19455;
var G__19465 = chunk__18462_19456;
var G__19466 = count__18463_19457;
var G__19467 = (i__18464_19458 + (1));
seq__18460_19455 = G__19464;
chunk__18462_19456 = G__19465;
count__18463_19457 = G__19466;
i__18464_19458 = G__19467;
continue;
}
} else {
var temp__5804__auto___19468 = cljs.core.seq(seq__18460_19455);
if(temp__5804__auto___19468){
var seq__18460_19469__$1 = temp__5804__auto___19468;
if(cljs.core.chunked_seq_QMARK_(seq__18460_19469__$1)){
var c__5568__auto___19470 = cljs.core.chunk_first(seq__18460_19469__$1);
var G__19471 = cljs.core.chunk_rest(seq__18460_19469__$1);
var G__19472 = c__5568__auto___19470;
var G__19473 = cljs.core.count(c__5568__auto___19470);
var G__19474 = (0);
seq__18460_19455 = G__19471;
chunk__18462_19456 = G__19472;
count__18463_19457 = G__19473;
i__18464_19458 = G__19474;
continue;
} else {
var child_19475 = cljs.core.first(seq__18460_19469__$1);
if(cljs.core.truth_(child_19475)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19475);


var G__19476 = cljs.core.next(seq__18460_19469__$1);
var G__19477 = null;
var G__19478 = (0);
var G__19479 = (0);
seq__18460_19455 = G__19476;
chunk__18462_19456 = G__19477;
count__18463_19457 = G__19478;
i__18464_19458 = G__19479;
continue;
} else {
var G__19480 = cljs.core.next(seq__18460_19469__$1);
var G__19481 = null;
var G__19482 = (0);
var G__19483 = (0);
seq__18460_19455 = G__19480;
chunk__18462_19456 = G__19481;
count__18463_19457 = G__19482;
i__18464_19458 = G__19483;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19454);
}


var G__19484 = seq__18379_19449;
var G__19485 = chunk__18380_19450;
var G__19486 = count__18381_19451;
var G__19487 = (i__18382_19452 + (1));
seq__18379_19449 = G__19484;
chunk__18380_19450 = G__19485;
count__18381_19451 = G__19486;
i__18382_19452 = G__19487;
continue;
} else {
var temp__5804__auto___19488 = cljs.core.seq(seq__18379_19449);
if(temp__5804__auto___19488){
var seq__18379_19489__$1 = temp__5804__auto___19488;
if(cljs.core.chunked_seq_QMARK_(seq__18379_19489__$1)){
var c__5568__auto___19490 = cljs.core.chunk_first(seq__18379_19489__$1);
var G__19491 = cljs.core.chunk_rest(seq__18379_19489__$1);
var G__19492 = c__5568__auto___19490;
var G__19493 = cljs.core.count(c__5568__auto___19490);
var G__19494 = (0);
seq__18379_19449 = G__19491;
chunk__18380_19450 = G__19492;
count__18381_19451 = G__19493;
i__18382_19452 = G__19494;
continue;
} else {
var child_struct_19495 = cljs.core.first(seq__18379_19489__$1);
var children_19496 = shadow.dom.dom_node(child_struct_19495);
if(cljs.core.seq_QMARK_(children_19496)){
var seq__18495_19497 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19496));
var chunk__18497_19498 = null;
var count__18498_19499 = (0);
var i__18499_19500 = (0);
while(true){
if((i__18499_19500 < count__18498_19499)){
var child_19501 = chunk__18497_19498.cljs$core$IIndexed$_nth$arity$2(null,i__18499_19500);
if(cljs.core.truth_(child_19501)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19501);


var G__19518 = seq__18495_19497;
var G__19519 = chunk__18497_19498;
var G__19520 = count__18498_19499;
var G__19521 = (i__18499_19500 + (1));
seq__18495_19497 = G__19518;
chunk__18497_19498 = G__19519;
count__18498_19499 = G__19520;
i__18499_19500 = G__19521;
continue;
} else {
var G__19522 = seq__18495_19497;
var G__19523 = chunk__18497_19498;
var G__19524 = count__18498_19499;
var G__19525 = (i__18499_19500 + (1));
seq__18495_19497 = G__19522;
chunk__18497_19498 = G__19523;
count__18498_19499 = G__19524;
i__18499_19500 = G__19525;
continue;
}
} else {
var temp__5804__auto___19526__$1 = cljs.core.seq(seq__18495_19497);
if(temp__5804__auto___19526__$1){
var seq__18495_19527__$1 = temp__5804__auto___19526__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18495_19527__$1)){
var c__5568__auto___19528 = cljs.core.chunk_first(seq__18495_19527__$1);
var G__19529 = cljs.core.chunk_rest(seq__18495_19527__$1);
var G__19530 = c__5568__auto___19528;
var G__19531 = cljs.core.count(c__5568__auto___19528);
var G__19532 = (0);
seq__18495_19497 = G__19529;
chunk__18497_19498 = G__19530;
count__18498_19499 = G__19531;
i__18499_19500 = G__19532;
continue;
} else {
var child_19533 = cljs.core.first(seq__18495_19527__$1);
if(cljs.core.truth_(child_19533)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19533);


var G__19534 = cljs.core.next(seq__18495_19527__$1);
var G__19535 = null;
var G__19536 = (0);
var G__19537 = (0);
seq__18495_19497 = G__19534;
chunk__18497_19498 = G__19535;
count__18498_19499 = G__19536;
i__18499_19500 = G__19537;
continue;
} else {
var G__19538 = cljs.core.next(seq__18495_19527__$1);
var G__19539 = null;
var G__19540 = (0);
var G__19541 = (0);
seq__18495_19497 = G__19538;
chunk__18497_19498 = G__19539;
count__18498_19499 = G__19540;
i__18499_19500 = G__19541;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19496);
}


var G__19542 = cljs.core.next(seq__18379_19489__$1);
var G__19543 = null;
var G__19544 = (0);
var G__19545 = (0);
seq__18379_19449 = G__19542;
chunk__18380_19450 = G__19543;
count__18381_19451 = G__19544;
i__18382_19452 = G__19545;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18544 = cljs.core.seq(node);
var chunk__18545 = null;
var count__18546 = (0);
var i__18547 = (0);
while(true){
if((i__18547 < count__18546)){
var n = chunk__18545.cljs$core$IIndexed$_nth$arity$2(null,i__18547);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19546 = seq__18544;
var G__19547 = chunk__18545;
var G__19548 = count__18546;
var G__19549 = (i__18547 + (1));
seq__18544 = G__19546;
chunk__18545 = G__19547;
count__18546 = G__19548;
i__18547 = G__19549;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18544);
if(temp__5804__auto__){
var seq__18544__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18544__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18544__$1);
var G__19550 = cljs.core.chunk_rest(seq__18544__$1);
var G__19551 = c__5568__auto__;
var G__19552 = cljs.core.count(c__5568__auto__);
var G__19553 = (0);
seq__18544 = G__19550;
chunk__18545 = G__19551;
count__18546 = G__19552;
i__18547 = G__19553;
continue;
} else {
var n = cljs.core.first(seq__18544__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19554 = cljs.core.next(seq__18544__$1);
var G__19555 = null;
var G__19556 = (0);
var G__19557 = (0);
seq__18544 = G__19554;
chunk__18545 = G__19555;
count__18546 = G__19556;
i__18547 = G__19557;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18576 = arguments.length;
switch (G__18576) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18579 = arguments.length;
switch (G__18579) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18613 = arguments.length;
switch (G__18613) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19564 = arguments.length;
var i__5770__auto___19565 = (0);
while(true){
if((i__5770__auto___19565 < len__5769__auto___19564)){
args__5775__auto__.push((arguments[i__5770__auto___19565]));

var G__19566 = (i__5770__auto___19565 + (1));
i__5770__auto___19565 = G__19566;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18657_19567 = cljs.core.seq(nodes);
var chunk__18658_19568 = null;
var count__18659_19569 = (0);
var i__18660_19570 = (0);
while(true){
if((i__18660_19570 < count__18659_19569)){
var node_19571 = chunk__18658_19568.cljs$core$IIndexed$_nth$arity$2(null,i__18660_19570);
fragment.appendChild(shadow.dom._to_dom(node_19571));


var G__19572 = seq__18657_19567;
var G__19573 = chunk__18658_19568;
var G__19574 = count__18659_19569;
var G__19575 = (i__18660_19570 + (1));
seq__18657_19567 = G__19572;
chunk__18658_19568 = G__19573;
count__18659_19569 = G__19574;
i__18660_19570 = G__19575;
continue;
} else {
var temp__5804__auto___19576 = cljs.core.seq(seq__18657_19567);
if(temp__5804__auto___19576){
var seq__18657_19577__$1 = temp__5804__auto___19576;
if(cljs.core.chunked_seq_QMARK_(seq__18657_19577__$1)){
var c__5568__auto___19578 = cljs.core.chunk_first(seq__18657_19577__$1);
var G__19579 = cljs.core.chunk_rest(seq__18657_19577__$1);
var G__19580 = c__5568__auto___19578;
var G__19581 = cljs.core.count(c__5568__auto___19578);
var G__19582 = (0);
seq__18657_19567 = G__19579;
chunk__18658_19568 = G__19580;
count__18659_19569 = G__19581;
i__18660_19570 = G__19582;
continue;
} else {
var node_19583 = cljs.core.first(seq__18657_19577__$1);
fragment.appendChild(shadow.dom._to_dom(node_19583));


var G__19584 = cljs.core.next(seq__18657_19577__$1);
var G__19585 = null;
var G__19586 = (0);
var G__19587 = (0);
seq__18657_19567 = G__19584;
chunk__18658_19568 = G__19585;
count__18659_19569 = G__19586;
i__18660_19570 = G__19587;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18644){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18644));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18678_19588 = cljs.core.seq(scripts);
var chunk__18679_19589 = null;
var count__18680_19590 = (0);
var i__18681_19591 = (0);
while(true){
if((i__18681_19591 < count__18680_19590)){
var vec__18701_19593 = chunk__18679_19589.cljs$core$IIndexed$_nth$arity$2(null,i__18681_19591);
var script_tag_19594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701_19593,(0),null);
var script_body_19595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701_19593,(1),null);
eval(script_body_19595);


var G__19596 = seq__18678_19588;
var G__19597 = chunk__18679_19589;
var G__19598 = count__18680_19590;
var G__19599 = (i__18681_19591 + (1));
seq__18678_19588 = G__19596;
chunk__18679_19589 = G__19597;
count__18680_19590 = G__19598;
i__18681_19591 = G__19599;
continue;
} else {
var temp__5804__auto___19600 = cljs.core.seq(seq__18678_19588);
if(temp__5804__auto___19600){
var seq__18678_19601__$1 = temp__5804__auto___19600;
if(cljs.core.chunked_seq_QMARK_(seq__18678_19601__$1)){
var c__5568__auto___19602 = cljs.core.chunk_first(seq__18678_19601__$1);
var G__19603 = cljs.core.chunk_rest(seq__18678_19601__$1);
var G__19604 = c__5568__auto___19602;
var G__19605 = cljs.core.count(c__5568__auto___19602);
var G__19606 = (0);
seq__18678_19588 = G__19603;
chunk__18679_19589 = G__19604;
count__18680_19590 = G__19605;
i__18681_19591 = G__19606;
continue;
} else {
var vec__18705_19607 = cljs.core.first(seq__18678_19601__$1);
var script_tag_19608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18705_19607,(0),null);
var script_body_19609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18705_19607,(1),null);
eval(script_body_19609);


var G__19610 = cljs.core.next(seq__18678_19601__$1);
var G__19611 = null;
var G__19612 = (0);
var G__19613 = (0);
seq__18678_19588 = G__19610;
chunk__18679_19589 = G__19611;
count__18680_19590 = G__19612;
i__18681_19591 = G__19613;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18708){
var vec__18709 = p__18708;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18709,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18709,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18727 = arguments.length;
switch (G__18727) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18747 = cljs.core.seq(style_keys);
var chunk__18748 = null;
var count__18749 = (0);
var i__18750 = (0);
while(true){
if((i__18750 < count__18749)){
var it = chunk__18748.cljs$core$IIndexed$_nth$arity$2(null,i__18750);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19630 = seq__18747;
var G__19631 = chunk__18748;
var G__19632 = count__18749;
var G__19633 = (i__18750 + (1));
seq__18747 = G__19630;
chunk__18748 = G__19631;
count__18749 = G__19632;
i__18750 = G__19633;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18747);
if(temp__5804__auto__){
var seq__18747__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18747__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18747__$1);
var G__19634 = cljs.core.chunk_rest(seq__18747__$1);
var G__19635 = c__5568__auto__;
var G__19636 = cljs.core.count(c__5568__auto__);
var G__19637 = (0);
seq__18747 = G__19634;
chunk__18748 = G__19635;
count__18749 = G__19636;
i__18750 = G__19637;
continue;
} else {
var it = cljs.core.first(seq__18747__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19638 = cljs.core.next(seq__18747__$1);
var G__19639 = null;
var G__19640 = (0);
var G__19641 = (0);
seq__18747 = G__19638;
chunk__18748 = G__19639;
count__18749 = G__19640;
i__18750 = G__19641;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18752,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18771 = k18752;
var G__18771__$1 = (((G__18771 instanceof cljs.core.Keyword))?G__18771.fqn:null);
switch (G__18771__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18752,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18776){
var vec__18777 = p__18776;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18777,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18777,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18751){
var self__ = this;
var G__18751__$1 = this;
return (new cljs.core.RecordIter((0),G__18751__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18753,other18754){
var self__ = this;
var this18753__$1 = this;
return (((!((other18754 == null)))) && ((((this18753__$1.constructor === other18754.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18753__$1.x,other18754.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18753__$1.y,other18754.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18753__$1.__extmap,other18754.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18752){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18786 = k18752;
var G__18786__$1 = (((G__18786 instanceof cljs.core.Keyword))?G__18786.fqn:null);
switch (G__18786__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18752);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18751){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18787 = cljs.core.keyword_identical_QMARK_;
var expr__18788 = k__5352__auto__;
if(cljs.core.truth_((pred__18787.cljs$core$IFn$_invoke$arity$2 ? pred__18787.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18788) : pred__18787.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18788)))){
return (new shadow.dom.Coordinate(G__18751,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18787.cljs$core$IFn$_invoke$arity$2 ? pred__18787.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18788) : pred__18787.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18788)))){
return (new shadow.dom.Coordinate(self__.x,G__18751,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18751),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18751){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18751,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18756){
var extmap__5385__auto__ = (function (){var G__18797 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18756,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18756)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18797);
} else {
return G__18797;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18756),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18756),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18799,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18803 = k18799;
var G__18803__$1 = (((G__18803 instanceof cljs.core.Keyword))?G__18803.fqn:null);
switch (G__18803__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18799,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18804){
var vec__18805 = p__18804;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18805,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18805,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18798){
var self__ = this;
var G__18798__$1 = this;
return (new cljs.core.RecordIter((0),G__18798__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18800,other18801){
var self__ = this;
var this18800__$1 = this;
return (((!((other18801 == null)))) && ((((this18800__$1.constructor === other18801.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18800__$1.w,other18801.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18800__$1.h,other18801.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18800__$1.__extmap,other18801.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18799){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18828 = k18799;
var G__18828__$1 = (((G__18828 instanceof cljs.core.Keyword))?G__18828.fqn:null);
switch (G__18828__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18799);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18798){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18830 = cljs.core.keyword_identical_QMARK_;
var expr__18831 = k__5352__auto__;
if(cljs.core.truth_((pred__18830.cljs$core$IFn$_invoke$arity$2 ? pred__18830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18831) : pred__18830.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18831)))){
return (new shadow.dom.Size(G__18798,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18830.cljs$core$IFn$_invoke$arity$2 ? pred__18830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18831) : pred__18830.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18831)))){
return (new shadow.dom.Size(self__.w,G__18798,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18798),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18798){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18798,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18802){
var extmap__5385__auto__ = (function (){var G__18846 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18802,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18802)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18846);
} else {
return G__18846;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18802),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18802),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19748 = (i + (1));
var G__19749 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19748;
ret = G__19749;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18855){
var vec__18856 = p__18855;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18856,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18866 = arguments.length;
switch (G__18866) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19751 = ps;
var G__19752 = (i + (1));
el__$1 = G__19751;
i = G__19752;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18924 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18932_19756 = cljs.core.seq(props);
var chunk__18934_19757 = null;
var count__18935_19758 = (0);
var i__18936_19759 = (0);
while(true){
if((i__18936_19759 < count__18935_19758)){
var vec__18999_19760 = chunk__18934_19757.cljs$core$IIndexed$_nth$arity$2(null,i__18936_19759);
var k_19761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18999_19760,(0),null);
var v_19762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18999_19760,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19761);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19761),v_19762);


var G__19763 = seq__18932_19756;
var G__19764 = chunk__18934_19757;
var G__19765 = count__18935_19758;
var G__19766 = (i__18936_19759 + (1));
seq__18932_19756 = G__19763;
chunk__18934_19757 = G__19764;
count__18935_19758 = G__19765;
i__18936_19759 = G__19766;
continue;
} else {
var temp__5804__auto___19767 = cljs.core.seq(seq__18932_19756);
if(temp__5804__auto___19767){
var seq__18932_19768__$1 = temp__5804__auto___19767;
if(cljs.core.chunked_seq_QMARK_(seq__18932_19768__$1)){
var c__5568__auto___19769 = cljs.core.chunk_first(seq__18932_19768__$1);
var G__19770 = cljs.core.chunk_rest(seq__18932_19768__$1);
var G__19771 = c__5568__auto___19769;
var G__19772 = cljs.core.count(c__5568__auto___19769);
var G__19773 = (0);
seq__18932_19756 = G__19770;
chunk__18934_19757 = G__19771;
count__18935_19758 = G__19772;
i__18936_19759 = G__19773;
continue;
} else {
var vec__19003_19774 = cljs.core.first(seq__18932_19768__$1);
var k_19775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19003_19774,(0),null);
var v_19776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19003_19774,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19775);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19775),v_19776);


var G__19777 = cljs.core.next(seq__18932_19768__$1);
var G__19778 = null;
var G__19779 = (0);
var G__19780 = (0);
seq__18932_19756 = G__19777;
chunk__18934_19757 = G__19778;
count__18935_19758 = G__19779;
i__18936_19759 = G__19780;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19019 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19019,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19019,(1),null);
var seq__19026_19781 = cljs.core.seq(node_children);
var chunk__19028_19782 = null;
var count__19029_19783 = (0);
var i__19030_19784 = (0);
while(true){
if((i__19030_19784 < count__19029_19783)){
var child_struct_19785 = chunk__19028_19782.cljs$core$IIndexed$_nth$arity$2(null,i__19030_19784);
if((!((child_struct_19785 == null)))){
if(typeof child_struct_19785 === 'string'){
var text_19787 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19787),child_struct_19785].join(''));
} else {
var children_19788 = shadow.dom.svg_node(child_struct_19785);
if(cljs.core.seq_QMARK_(children_19788)){
var seq__19159_19789 = cljs.core.seq(children_19788);
var chunk__19162_19790 = null;
var count__19163_19791 = (0);
var i__19164_19792 = (0);
while(true){
if((i__19164_19792 < count__19163_19791)){
var child_19793 = chunk__19162_19790.cljs$core$IIndexed$_nth$arity$2(null,i__19164_19792);
if(cljs.core.truth_(child_19793)){
node.appendChild(child_19793);


var G__19794 = seq__19159_19789;
var G__19795 = chunk__19162_19790;
var G__19796 = count__19163_19791;
var G__19797 = (i__19164_19792 + (1));
seq__19159_19789 = G__19794;
chunk__19162_19790 = G__19795;
count__19163_19791 = G__19796;
i__19164_19792 = G__19797;
continue;
} else {
var G__19798 = seq__19159_19789;
var G__19799 = chunk__19162_19790;
var G__19800 = count__19163_19791;
var G__19801 = (i__19164_19792 + (1));
seq__19159_19789 = G__19798;
chunk__19162_19790 = G__19799;
count__19163_19791 = G__19800;
i__19164_19792 = G__19801;
continue;
}
} else {
var temp__5804__auto___19802 = cljs.core.seq(seq__19159_19789);
if(temp__5804__auto___19802){
var seq__19159_19803__$1 = temp__5804__auto___19802;
if(cljs.core.chunked_seq_QMARK_(seq__19159_19803__$1)){
var c__5568__auto___19804 = cljs.core.chunk_first(seq__19159_19803__$1);
var G__19805 = cljs.core.chunk_rest(seq__19159_19803__$1);
var G__19806 = c__5568__auto___19804;
var G__19807 = cljs.core.count(c__5568__auto___19804);
var G__19808 = (0);
seq__19159_19789 = G__19805;
chunk__19162_19790 = G__19806;
count__19163_19791 = G__19807;
i__19164_19792 = G__19808;
continue;
} else {
var child_19809 = cljs.core.first(seq__19159_19803__$1);
if(cljs.core.truth_(child_19809)){
node.appendChild(child_19809);


var G__19810 = cljs.core.next(seq__19159_19803__$1);
var G__19811 = null;
var G__19812 = (0);
var G__19813 = (0);
seq__19159_19789 = G__19810;
chunk__19162_19790 = G__19811;
count__19163_19791 = G__19812;
i__19164_19792 = G__19813;
continue;
} else {
var G__19814 = cljs.core.next(seq__19159_19803__$1);
var G__19815 = null;
var G__19816 = (0);
var G__19817 = (0);
seq__19159_19789 = G__19814;
chunk__19162_19790 = G__19815;
count__19163_19791 = G__19816;
i__19164_19792 = G__19817;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19788);
}
}


var G__19818 = seq__19026_19781;
var G__19819 = chunk__19028_19782;
var G__19820 = count__19029_19783;
var G__19821 = (i__19030_19784 + (1));
seq__19026_19781 = G__19818;
chunk__19028_19782 = G__19819;
count__19029_19783 = G__19820;
i__19030_19784 = G__19821;
continue;
} else {
var G__19822 = seq__19026_19781;
var G__19823 = chunk__19028_19782;
var G__19824 = count__19029_19783;
var G__19825 = (i__19030_19784 + (1));
seq__19026_19781 = G__19822;
chunk__19028_19782 = G__19823;
count__19029_19783 = G__19824;
i__19030_19784 = G__19825;
continue;
}
} else {
var temp__5804__auto___19826 = cljs.core.seq(seq__19026_19781);
if(temp__5804__auto___19826){
var seq__19026_19827__$1 = temp__5804__auto___19826;
if(cljs.core.chunked_seq_QMARK_(seq__19026_19827__$1)){
var c__5568__auto___19828 = cljs.core.chunk_first(seq__19026_19827__$1);
var G__19829 = cljs.core.chunk_rest(seq__19026_19827__$1);
var G__19830 = c__5568__auto___19828;
var G__19831 = cljs.core.count(c__5568__auto___19828);
var G__19832 = (0);
seq__19026_19781 = G__19829;
chunk__19028_19782 = G__19830;
count__19029_19783 = G__19831;
i__19030_19784 = G__19832;
continue;
} else {
var child_struct_19833 = cljs.core.first(seq__19026_19827__$1);
if((!((child_struct_19833 == null)))){
if(typeof child_struct_19833 === 'string'){
var text_19834 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19834),child_struct_19833].join(''));
} else {
var children_19835 = shadow.dom.svg_node(child_struct_19833);
if(cljs.core.seq_QMARK_(children_19835)){
var seq__19298_19836 = cljs.core.seq(children_19835);
var chunk__19300_19837 = null;
var count__19301_19838 = (0);
var i__19302_19839 = (0);
while(true){
if((i__19302_19839 < count__19301_19838)){
var child_19840 = chunk__19300_19837.cljs$core$IIndexed$_nth$arity$2(null,i__19302_19839);
if(cljs.core.truth_(child_19840)){
node.appendChild(child_19840);


var G__19841 = seq__19298_19836;
var G__19842 = chunk__19300_19837;
var G__19843 = count__19301_19838;
var G__19844 = (i__19302_19839 + (1));
seq__19298_19836 = G__19841;
chunk__19300_19837 = G__19842;
count__19301_19838 = G__19843;
i__19302_19839 = G__19844;
continue;
} else {
var G__19845 = seq__19298_19836;
var G__19846 = chunk__19300_19837;
var G__19847 = count__19301_19838;
var G__19848 = (i__19302_19839 + (1));
seq__19298_19836 = G__19845;
chunk__19300_19837 = G__19846;
count__19301_19838 = G__19847;
i__19302_19839 = G__19848;
continue;
}
} else {
var temp__5804__auto___19849__$1 = cljs.core.seq(seq__19298_19836);
if(temp__5804__auto___19849__$1){
var seq__19298_19850__$1 = temp__5804__auto___19849__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19298_19850__$1)){
var c__5568__auto___19851 = cljs.core.chunk_first(seq__19298_19850__$1);
var G__19852 = cljs.core.chunk_rest(seq__19298_19850__$1);
var G__19853 = c__5568__auto___19851;
var G__19854 = cljs.core.count(c__5568__auto___19851);
var G__19855 = (0);
seq__19298_19836 = G__19852;
chunk__19300_19837 = G__19853;
count__19301_19838 = G__19854;
i__19302_19839 = G__19855;
continue;
} else {
var child_19856 = cljs.core.first(seq__19298_19850__$1);
if(cljs.core.truth_(child_19856)){
node.appendChild(child_19856);


var G__19857 = cljs.core.next(seq__19298_19850__$1);
var G__19858 = null;
var G__19859 = (0);
var G__19860 = (0);
seq__19298_19836 = G__19857;
chunk__19300_19837 = G__19858;
count__19301_19838 = G__19859;
i__19302_19839 = G__19860;
continue;
} else {
var G__19861 = cljs.core.next(seq__19298_19850__$1);
var G__19862 = null;
var G__19863 = (0);
var G__19864 = (0);
seq__19298_19836 = G__19861;
chunk__19300_19837 = G__19862;
count__19301_19838 = G__19863;
i__19302_19839 = G__19864;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19835);
}
}


var G__19865 = cljs.core.next(seq__19026_19827__$1);
var G__19866 = null;
var G__19867 = (0);
var G__19868 = (0);
seq__19026_19781 = G__19865;
chunk__19028_19782 = G__19866;
count__19029_19783 = G__19867;
i__19030_19784 = G__19868;
continue;
} else {
var G__19869 = cljs.core.next(seq__19026_19827__$1);
var G__19870 = null;
var G__19871 = (0);
var G__19872 = (0);
seq__19026_19781 = G__19869;
chunk__19028_19782 = G__19870;
count__19029_19783 = G__19871;
i__19030_19784 = G__19872;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19873 = arguments.length;
var i__5770__auto___19874 = (0);
while(true){
if((i__5770__auto___19874 < len__5769__auto___19873)){
args__5775__auto__.push((arguments[i__5770__auto___19874]));

var G__19875 = (i__5770__auto___19874 + (1));
i__5770__auto___19874 = G__19875;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19329){
var G__19330 = cljs.core.first(seq19329);
var seq19329__$1 = cljs.core.next(seq19329);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19330,seq19329__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19336 = arguments.length;
switch (G__19336) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__14323__auto___19879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_19350){
var state_val_19351 = (state_19350[(1)]);
if((state_val_19351 === (1))){
var state_19350__$1 = state_19350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19350__$1,(2),once_or_cleanup);
} else {
if((state_val_19351 === (2))){
var inst_19347 = (state_19350[(2)]);
var inst_19348 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19350__$1 = (function (){var statearr_19360 = state_19350;
(statearr_19360[(7)] = inst_19347);

return statearr_19360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19350__$1,inst_19348);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13737__auto__ = null;
var shadow$dom$state_machine__13737__auto____0 = (function (){
var statearr_19361 = [null,null,null,null,null,null,null,null];
(statearr_19361[(0)] = shadow$dom$state_machine__13737__auto__);

(statearr_19361[(1)] = (1));

return statearr_19361;
});
var shadow$dom$state_machine__13737__auto____1 = (function (state_19350){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_19350);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e19362){var ex__13740__auto__ = e19362;
var statearr_19363_19880 = state_19350;
(statearr_19363_19880[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_19350[(4)]))){
var statearr_19364_19881 = state_19350;
(statearr_19364_19881[(1)] = cljs.core.first((state_19350[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19882 = state_19350;
state_19350 = G__19882;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
shadow$dom$state_machine__13737__auto__ = function(state_19350){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13737__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13737__auto____1.call(this,state_19350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13737__auto____0;
shadow$dom$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13737__auto____1;
return shadow$dom$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_19365 = f__14324__auto__();
(statearr_19365[(6)] = c__14323__auto___19879);

return statearr_19365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
