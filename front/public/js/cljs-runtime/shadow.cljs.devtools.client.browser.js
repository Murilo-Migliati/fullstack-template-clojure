goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21517 = arguments.length;
var i__5770__auto___21518 = (0);
while(true){
if((i__5770__auto___21518 < len__5769__auto___21517)){
args__5775__auto__.push((arguments[i__5770__auto___21518]));

var G__21519 = (i__5770__auto___21518 + (1));
i__5770__auto___21518 = G__21519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21083){
var G__21084 = cljs.core.first(seq21083);
var seq21083__$1 = cljs.core.next(seq21083);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21084,seq21083__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21092 = cljs.core.seq(sources);
var chunk__21093 = null;
var count__21094 = (0);
var i__21095 = (0);
while(true){
if((i__21095 < count__21094)){
var map__21104 = chunk__21093.cljs$core$IIndexed$_nth$arity$2(null,i__21095);
var map__21104__$1 = cljs.core.__destructure_map(map__21104);
var src = map__21104__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21104__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21104__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21104__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21104__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21107){var e_21521 = e21107;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21521);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21521.message)].join('')));
}

var G__21522 = seq__21092;
var G__21523 = chunk__21093;
var G__21524 = count__21094;
var G__21525 = (i__21095 + (1));
seq__21092 = G__21522;
chunk__21093 = G__21523;
count__21094 = G__21524;
i__21095 = G__21525;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21092);
if(temp__5804__auto__){
var seq__21092__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21092__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21092__$1);
var G__21526 = cljs.core.chunk_rest(seq__21092__$1);
var G__21527 = c__5568__auto__;
var G__21528 = cljs.core.count(c__5568__auto__);
var G__21529 = (0);
seq__21092 = G__21526;
chunk__21093 = G__21527;
count__21094 = G__21528;
i__21095 = G__21529;
continue;
} else {
var map__21108 = cljs.core.first(seq__21092__$1);
var map__21108__$1 = cljs.core.__destructure_map(map__21108);
var src = map__21108__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21111){var e_21530 = e21111;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21530);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21530.message)].join('')));
}

var G__21531 = cljs.core.next(seq__21092__$1);
var G__21532 = null;
var G__21533 = (0);
var G__21534 = (0);
seq__21092 = G__21531;
chunk__21093 = G__21532;
count__21094 = G__21533;
i__21095 = G__21534;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21113 = cljs.core.seq(js_requires);
var chunk__21114 = null;
var count__21115 = (0);
var i__21116 = (0);
while(true){
if((i__21116 < count__21115)){
var js_ns = chunk__21114.cljs$core$IIndexed$_nth$arity$2(null,i__21116);
var require_str_21535 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21535);


var G__21537 = seq__21113;
var G__21538 = chunk__21114;
var G__21539 = count__21115;
var G__21540 = (i__21116 + (1));
seq__21113 = G__21537;
chunk__21114 = G__21538;
count__21115 = G__21539;
i__21116 = G__21540;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21113);
if(temp__5804__auto__){
var seq__21113__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21113__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21113__$1);
var G__21541 = cljs.core.chunk_rest(seq__21113__$1);
var G__21542 = c__5568__auto__;
var G__21543 = cljs.core.count(c__5568__auto__);
var G__21544 = (0);
seq__21113 = G__21541;
chunk__21114 = G__21542;
count__21115 = G__21543;
i__21116 = G__21544;
continue;
} else {
var js_ns = cljs.core.first(seq__21113__$1);
var require_str_21545 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21545);


var G__21546 = cljs.core.next(seq__21113__$1);
var G__21547 = null;
var G__21548 = (0);
var G__21549 = (0);
seq__21113 = G__21546;
chunk__21114 = G__21547;
count__21115 = G__21548;
i__21116 = G__21549;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21125){
var map__21126 = p__21125;
var map__21126__$1 = cljs.core.__destructure_map(map__21126);
var msg = map__21126__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21127(s__21128){
return (new cljs.core.LazySeq(null,(function (){
var s__21128__$1 = s__21128;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21128__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21135 = cljs.core.first(xs__6360__auto__);
var map__21135__$1 = cljs.core.__destructure_map(map__21135);
var src = map__21135__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21135__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21135__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__21128__$1,map__21135,map__21135__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21126,map__21126__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21127_$_iter__21129(s__21130){
return (new cljs.core.LazySeq(null,((function (s__21128__$1,map__21135,map__21135__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21126,map__21126__$1,msg,info,reload_info){
return (function (){
var s__21130__$1 = s__21130;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21130__$1);
if(temp__5804__auto____$1){
var s__21130__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21130__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21130__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21132 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21131 = (0);
while(true){
if((i__21131 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__21131);
cljs.core.chunk_append(b__21132,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21550 = (i__21131 + (1));
i__21131 = G__21550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21132),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21127_$_iter__21129(cljs.core.chunk_rest(s__21130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21132),null);
}
} else {
var warning = cljs.core.first(s__21130__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21127_$_iter__21129(cljs.core.rest(s__21130__$2)));
}
} else {
return null;
}
break;
}
});})(s__21128__$1,map__21135,map__21135__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21126,map__21126__$1,msg,info,reload_info))
,null,null));
});})(s__21128__$1,map__21135,map__21135__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21126,map__21126__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21127(cljs.core.rest(s__21128__$1)));
} else {
var G__21551 = cljs.core.rest(s__21128__$1);
s__21128__$1 = G__21551;
continue;
}
} else {
var G__21552 = cljs.core.rest(s__21128__$1);
s__21128__$1 = G__21552;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21136_21553 = cljs.core.seq(warnings);
var chunk__21137_21554 = null;
var count__21138_21555 = (0);
var i__21139_21556 = (0);
while(true){
if((i__21139_21556 < count__21138_21555)){
var map__21147_21557 = chunk__21137_21554.cljs$core$IIndexed$_nth$arity$2(null,i__21139_21556);
var map__21147_21558__$1 = cljs.core.__destructure_map(map__21147_21557);
var w_21559 = map__21147_21558__$1;
var msg_21560__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21558__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21558__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21558__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21558__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21563)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21561),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21562),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21560__$1)].join(''));


var G__21564 = seq__21136_21553;
var G__21565 = chunk__21137_21554;
var G__21566 = count__21138_21555;
var G__21567 = (i__21139_21556 + (1));
seq__21136_21553 = G__21564;
chunk__21137_21554 = G__21565;
count__21138_21555 = G__21566;
i__21139_21556 = G__21567;
continue;
} else {
var temp__5804__auto___21568 = cljs.core.seq(seq__21136_21553);
if(temp__5804__auto___21568){
var seq__21136_21569__$1 = temp__5804__auto___21568;
if(cljs.core.chunked_seq_QMARK_(seq__21136_21569__$1)){
var c__5568__auto___21570 = cljs.core.chunk_first(seq__21136_21569__$1);
var G__21571 = cljs.core.chunk_rest(seq__21136_21569__$1);
var G__21572 = c__5568__auto___21570;
var G__21573 = cljs.core.count(c__5568__auto___21570);
var G__21574 = (0);
seq__21136_21553 = G__21571;
chunk__21137_21554 = G__21572;
count__21138_21555 = G__21573;
i__21139_21556 = G__21574;
continue;
} else {
var map__21151_21578 = cljs.core.first(seq__21136_21569__$1);
var map__21151_21579__$1 = cljs.core.__destructure_map(map__21151_21578);
var w_21580 = map__21151_21579__$1;
var msg_21581__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21151_21579__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21151_21579__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21151_21579__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21151_21579__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21584)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21582),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21583),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21581__$1)].join(''));


var G__21585 = cljs.core.next(seq__21136_21569__$1);
var G__21586 = null;
var G__21587 = (0);
var G__21588 = (0);
seq__21136_21553 = G__21585;
chunk__21137_21554 = G__21586;
count__21138_21555 = G__21587;
i__21139_21556 = G__21588;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21124_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21124_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21155){
var map__21156 = p__21155;
var map__21156__$1 = cljs.core.__destructure_map(map__21156);
var msg = map__21156__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21156__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21156__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21157 = cljs.core.seq(updates);
var chunk__21159 = null;
var count__21160 = (0);
var i__21161 = (0);
while(true){
if((i__21161 < count__21160)){
var path = chunk__21159.cljs$core$IIndexed$_nth$arity$2(null,i__21161);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21366_21589 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21370_21590 = null;
var count__21371_21591 = (0);
var i__21372_21592 = (0);
while(true){
if((i__21372_21592 < count__21371_21591)){
var node_21593 = chunk__21370_21590.cljs$core$IIndexed$_nth$arity$2(null,i__21372_21592);
if(cljs.core.not(node_21593.shadow$old)){
var path_match_21594 = shadow.cljs.devtools.client.browser.match_paths(node_21593.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21594)){
var new_link_21595 = (function (){var G__21406 = node_21593.cloneNode(true);
G__21406.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21594),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21406;
})();
(node_21593.shadow$old = true);

(new_link_21595.onload = ((function (seq__21366_21589,chunk__21370_21590,count__21371_21591,i__21372_21592,seq__21157,chunk__21159,count__21160,i__21161,new_link_21595,path_match_21594,node_21593,path,map__21156,map__21156__$1,msg,updates,reload_info){
return (function (e){
var seq__21407_21596 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21409_21597 = null;
var count__21410_21598 = (0);
var i__21411_21599 = (0);
while(true){
if((i__21411_21599 < count__21410_21598)){
var map__21415_21600 = chunk__21409_21597.cljs$core$IIndexed$_nth$arity$2(null,i__21411_21599);
var map__21415_21601__$1 = cljs.core.__destructure_map(map__21415_21600);
var task_21602 = map__21415_21601__$1;
var fn_str_21603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415_21601__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415_21601__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21605 = goog.getObjectByName(fn_str_21603,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21604)].join(''));

(fn_obj_21605.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21605.cljs$core$IFn$_invoke$arity$2(path,new_link_21595) : fn_obj_21605.call(null,path,new_link_21595));


var G__21606 = seq__21407_21596;
var G__21607 = chunk__21409_21597;
var G__21608 = count__21410_21598;
var G__21609 = (i__21411_21599 + (1));
seq__21407_21596 = G__21606;
chunk__21409_21597 = G__21607;
count__21410_21598 = G__21608;
i__21411_21599 = G__21609;
continue;
} else {
var temp__5804__auto___21610 = cljs.core.seq(seq__21407_21596);
if(temp__5804__auto___21610){
var seq__21407_21611__$1 = temp__5804__auto___21610;
if(cljs.core.chunked_seq_QMARK_(seq__21407_21611__$1)){
var c__5568__auto___21612 = cljs.core.chunk_first(seq__21407_21611__$1);
var G__21613 = cljs.core.chunk_rest(seq__21407_21611__$1);
var G__21614 = c__5568__auto___21612;
var G__21615 = cljs.core.count(c__5568__auto___21612);
var G__21616 = (0);
seq__21407_21596 = G__21613;
chunk__21409_21597 = G__21614;
count__21410_21598 = G__21615;
i__21411_21599 = G__21616;
continue;
} else {
var map__21416_21617 = cljs.core.first(seq__21407_21611__$1);
var map__21416_21618__$1 = cljs.core.__destructure_map(map__21416_21617);
var task_21619 = map__21416_21618__$1;
var fn_str_21620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21416_21618__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21416_21618__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21622 = goog.getObjectByName(fn_str_21620,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21621)].join(''));

(fn_obj_21622.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21622.cljs$core$IFn$_invoke$arity$2(path,new_link_21595) : fn_obj_21622.call(null,path,new_link_21595));


var G__21623 = cljs.core.next(seq__21407_21611__$1);
var G__21624 = null;
var G__21625 = (0);
var G__21626 = (0);
seq__21407_21596 = G__21623;
chunk__21409_21597 = G__21624;
count__21410_21598 = G__21625;
i__21411_21599 = G__21626;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21593);
});})(seq__21366_21589,chunk__21370_21590,count__21371_21591,i__21372_21592,seq__21157,chunk__21159,count__21160,i__21161,new_link_21595,path_match_21594,node_21593,path,map__21156,map__21156__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21594], 0));

goog.dom.insertSiblingAfter(new_link_21595,node_21593);


var G__21627 = seq__21366_21589;
var G__21628 = chunk__21370_21590;
var G__21629 = count__21371_21591;
var G__21630 = (i__21372_21592 + (1));
seq__21366_21589 = G__21627;
chunk__21370_21590 = G__21628;
count__21371_21591 = G__21629;
i__21372_21592 = G__21630;
continue;
} else {
var G__21631 = seq__21366_21589;
var G__21632 = chunk__21370_21590;
var G__21633 = count__21371_21591;
var G__21634 = (i__21372_21592 + (1));
seq__21366_21589 = G__21631;
chunk__21370_21590 = G__21632;
count__21371_21591 = G__21633;
i__21372_21592 = G__21634;
continue;
}
} else {
var G__21635 = seq__21366_21589;
var G__21636 = chunk__21370_21590;
var G__21637 = count__21371_21591;
var G__21638 = (i__21372_21592 + (1));
seq__21366_21589 = G__21635;
chunk__21370_21590 = G__21636;
count__21371_21591 = G__21637;
i__21372_21592 = G__21638;
continue;
}
} else {
var temp__5804__auto___21639 = cljs.core.seq(seq__21366_21589);
if(temp__5804__auto___21639){
var seq__21366_21640__$1 = temp__5804__auto___21639;
if(cljs.core.chunked_seq_QMARK_(seq__21366_21640__$1)){
var c__5568__auto___21641 = cljs.core.chunk_first(seq__21366_21640__$1);
var G__21642 = cljs.core.chunk_rest(seq__21366_21640__$1);
var G__21643 = c__5568__auto___21641;
var G__21644 = cljs.core.count(c__5568__auto___21641);
var G__21645 = (0);
seq__21366_21589 = G__21642;
chunk__21370_21590 = G__21643;
count__21371_21591 = G__21644;
i__21372_21592 = G__21645;
continue;
} else {
var node_21646 = cljs.core.first(seq__21366_21640__$1);
if(cljs.core.not(node_21646.shadow$old)){
var path_match_21647 = shadow.cljs.devtools.client.browser.match_paths(node_21646.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21647)){
var new_link_21648 = (function (){var G__21418 = node_21646.cloneNode(true);
G__21418.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21647),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21418;
})();
(node_21646.shadow$old = true);

(new_link_21648.onload = ((function (seq__21366_21589,chunk__21370_21590,count__21371_21591,i__21372_21592,seq__21157,chunk__21159,count__21160,i__21161,new_link_21648,path_match_21647,node_21646,seq__21366_21640__$1,temp__5804__auto___21639,path,map__21156,map__21156__$1,msg,updates,reload_info){
return (function (e){
var seq__21420_21649 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21422_21650 = null;
var count__21423_21651 = (0);
var i__21424_21652 = (0);
while(true){
if((i__21424_21652 < count__21423_21651)){
var map__21428_21653 = chunk__21422_21650.cljs$core$IIndexed$_nth$arity$2(null,i__21424_21652);
var map__21428_21654__$1 = cljs.core.__destructure_map(map__21428_21653);
var task_21655 = map__21428_21654__$1;
var fn_str_21656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21428_21654__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21428_21654__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21658 = goog.getObjectByName(fn_str_21656,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21657)].join(''));

(fn_obj_21658.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21658.cljs$core$IFn$_invoke$arity$2(path,new_link_21648) : fn_obj_21658.call(null,path,new_link_21648));


var G__21670 = seq__21420_21649;
var G__21671 = chunk__21422_21650;
var G__21672 = count__21423_21651;
var G__21673 = (i__21424_21652 + (1));
seq__21420_21649 = G__21670;
chunk__21422_21650 = G__21671;
count__21423_21651 = G__21672;
i__21424_21652 = G__21673;
continue;
} else {
var temp__5804__auto___21674__$1 = cljs.core.seq(seq__21420_21649);
if(temp__5804__auto___21674__$1){
var seq__21420_21675__$1 = temp__5804__auto___21674__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21420_21675__$1)){
var c__5568__auto___21676 = cljs.core.chunk_first(seq__21420_21675__$1);
var G__21677 = cljs.core.chunk_rest(seq__21420_21675__$1);
var G__21678 = c__5568__auto___21676;
var G__21679 = cljs.core.count(c__5568__auto___21676);
var G__21680 = (0);
seq__21420_21649 = G__21677;
chunk__21422_21650 = G__21678;
count__21423_21651 = G__21679;
i__21424_21652 = G__21680;
continue;
} else {
var map__21429_21681 = cljs.core.first(seq__21420_21675__$1);
var map__21429_21682__$1 = cljs.core.__destructure_map(map__21429_21681);
var task_21683 = map__21429_21682__$1;
var fn_str_21684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21429_21682__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21429_21682__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21686 = goog.getObjectByName(fn_str_21684,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21685)].join(''));

(fn_obj_21686.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21686.cljs$core$IFn$_invoke$arity$2(path,new_link_21648) : fn_obj_21686.call(null,path,new_link_21648));


var G__21687 = cljs.core.next(seq__21420_21675__$1);
var G__21688 = null;
var G__21689 = (0);
var G__21690 = (0);
seq__21420_21649 = G__21687;
chunk__21422_21650 = G__21688;
count__21423_21651 = G__21689;
i__21424_21652 = G__21690;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21646);
});})(seq__21366_21589,chunk__21370_21590,count__21371_21591,i__21372_21592,seq__21157,chunk__21159,count__21160,i__21161,new_link_21648,path_match_21647,node_21646,seq__21366_21640__$1,temp__5804__auto___21639,path,map__21156,map__21156__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21647], 0));

goog.dom.insertSiblingAfter(new_link_21648,node_21646);


var G__21691 = cljs.core.next(seq__21366_21640__$1);
var G__21692 = null;
var G__21693 = (0);
var G__21694 = (0);
seq__21366_21589 = G__21691;
chunk__21370_21590 = G__21692;
count__21371_21591 = G__21693;
i__21372_21592 = G__21694;
continue;
} else {
var G__21695 = cljs.core.next(seq__21366_21640__$1);
var G__21696 = null;
var G__21697 = (0);
var G__21698 = (0);
seq__21366_21589 = G__21695;
chunk__21370_21590 = G__21696;
count__21371_21591 = G__21697;
i__21372_21592 = G__21698;
continue;
}
} else {
var G__21699 = cljs.core.next(seq__21366_21640__$1);
var G__21700 = null;
var G__21701 = (0);
var G__21702 = (0);
seq__21366_21589 = G__21699;
chunk__21370_21590 = G__21700;
count__21371_21591 = G__21701;
i__21372_21592 = G__21702;
continue;
}
}
} else {
}
}
break;
}


var G__21703 = seq__21157;
var G__21704 = chunk__21159;
var G__21705 = count__21160;
var G__21706 = (i__21161 + (1));
seq__21157 = G__21703;
chunk__21159 = G__21704;
count__21160 = G__21705;
i__21161 = G__21706;
continue;
} else {
var G__21707 = seq__21157;
var G__21708 = chunk__21159;
var G__21709 = count__21160;
var G__21710 = (i__21161 + (1));
seq__21157 = G__21707;
chunk__21159 = G__21708;
count__21160 = G__21709;
i__21161 = G__21710;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21157);
if(temp__5804__auto__){
var seq__21157__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21157__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21157__$1);
var G__21711 = cljs.core.chunk_rest(seq__21157__$1);
var G__21712 = c__5568__auto__;
var G__21713 = cljs.core.count(c__5568__auto__);
var G__21714 = (0);
seq__21157 = G__21711;
chunk__21159 = G__21712;
count__21160 = G__21713;
i__21161 = G__21714;
continue;
} else {
var path = cljs.core.first(seq__21157__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21430_21715 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21434_21716 = null;
var count__21435_21717 = (0);
var i__21436_21718 = (0);
while(true){
if((i__21436_21718 < count__21435_21717)){
var node_21719 = chunk__21434_21716.cljs$core$IIndexed$_nth$arity$2(null,i__21436_21718);
if(cljs.core.not(node_21719.shadow$old)){
var path_match_21720 = shadow.cljs.devtools.client.browser.match_paths(node_21719.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21720)){
var new_link_21721 = (function (){var G__21464 = node_21719.cloneNode(true);
G__21464.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21720),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21464;
})();
(node_21719.shadow$old = true);

(new_link_21721.onload = ((function (seq__21430_21715,chunk__21434_21716,count__21435_21717,i__21436_21718,seq__21157,chunk__21159,count__21160,i__21161,new_link_21721,path_match_21720,node_21719,path,seq__21157__$1,temp__5804__auto__,map__21156,map__21156__$1,msg,updates,reload_info){
return (function (e){
var seq__21465_21722 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21467_21723 = null;
var count__21468_21724 = (0);
var i__21469_21725 = (0);
while(true){
if((i__21469_21725 < count__21468_21724)){
var map__21474_21726 = chunk__21467_21723.cljs$core$IIndexed$_nth$arity$2(null,i__21469_21725);
var map__21474_21727__$1 = cljs.core.__destructure_map(map__21474_21726);
var task_21728 = map__21474_21727__$1;
var fn_str_21729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21474_21727__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21474_21727__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21731 = goog.getObjectByName(fn_str_21729,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21730)].join(''));

(fn_obj_21731.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21731.cljs$core$IFn$_invoke$arity$2(path,new_link_21721) : fn_obj_21731.call(null,path,new_link_21721));


var G__21732 = seq__21465_21722;
var G__21733 = chunk__21467_21723;
var G__21734 = count__21468_21724;
var G__21735 = (i__21469_21725 + (1));
seq__21465_21722 = G__21732;
chunk__21467_21723 = G__21733;
count__21468_21724 = G__21734;
i__21469_21725 = G__21735;
continue;
} else {
var temp__5804__auto___21736__$1 = cljs.core.seq(seq__21465_21722);
if(temp__5804__auto___21736__$1){
var seq__21465_21737__$1 = temp__5804__auto___21736__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21465_21737__$1)){
var c__5568__auto___21738 = cljs.core.chunk_first(seq__21465_21737__$1);
var G__21739 = cljs.core.chunk_rest(seq__21465_21737__$1);
var G__21740 = c__5568__auto___21738;
var G__21741 = cljs.core.count(c__5568__auto___21738);
var G__21742 = (0);
seq__21465_21722 = G__21739;
chunk__21467_21723 = G__21740;
count__21468_21724 = G__21741;
i__21469_21725 = G__21742;
continue;
} else {
var map__21475_21743 = cljs.core.first(seq__21465_21737__$1);
var map__21475_21744__$1 = cljs.core.__destructure_map(map__21475_21743);
var task_21745 = map__21475_21744__$1;
var fn_str_21746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21475_21744__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21475_21744__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21748 = goog.getObjectByName(fn_str_21746,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21747)].join(''));

(fn_obj_21748.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21748.cljs$core$IFn$_invoke$arity$2(path,new_link_21721) : fn_obj_21748.call(null,path,new_link_21721));


var G__21749 = cljs.core.next(seq__21465_21737__$1);
var G__21750 = null;
var G__21751 = (0);
var G__21752 = (0);
seq__21465_21722 = G__21749;
chunk__21467_21723 = G__21750;
count__21468_21724 = G__21751;
i__21469_21725 = G__21752;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21719);
});})(seq__21430_21715,chunk__21434_21716,count__21435_21717,i__21436_21718,seq__21157,chunk__21159,count__21160,i__21161,new_link_21721,path_match_21720,node_21719,path,seq__21157__$1,temp__5804__auto__,map__21156,map__21156__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21720], 0));

goog.dom.insertSiblingAfter(new_link_21721,node_21719);


var G__21753 = seq__21430_21715;
var G__21754 = chunk__21434_21716;
var G__21755 = count__21435_21717;
var G__21756 = (i__21436_21718 + (1));
seq__21430_21715 = G__21753;
chunk__21434_21716 = G__21754;
count__21435_21717 = G__21755;
i__21436_21718 = G__21756;
continue;
} else {
var G__21758 = seq__21430_21715;
var G__21759 = chunk__21434_21716;
var G__21760 = count__21435_21717;
var G__21761 = (i__21436_21718 + (1));
seq__21430_21715 = G__21758;
chunk__21434_21716 = G__21759;
count__21435_21717 = G__21760;
i__21436_21718 = G__21761;
continue;
}
} else {
var G__21763 = seq__21430_21715;
var G__21764 = chunk__21434_21716;
var G__21765 = count__21435_21717;
var G__21766 = (i__21436_21718 + (1));
seq__21430_21715 = G__21763;
chunk__21434_21716 = G__21764;
count__21435_21717 = G__21765;
i__21436_21718 = G__21766;
continue;
}
} else {
var temp__5804__auto___21767__$1 = cljs.core.seq(seq__21430_21715);
if(temp__5804__auto___21767__$1){
var seq__21430_21768__$1 = temp__5804__auto___21767__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21430_21768__$1)){
var c__5568__auto___21769 = cljs.core.chunk_first(seq__21430_21768__$1);
var G__21770 = cljs.core.chunk_rest(seq__21430_21768__$1);
var G__21771 = c__5568__auto___21769;
var G__21772 = cljs.core.count(c__5568__auto___21769);
var G__21773 = (0);
seq__21430_21715 = G__21770;
chunk__21434_21716 = G__21771;
count__21435_21717 = G__21772;
i__21436_21718 = G__21773;
continue;
} else {
var node_21774 = cljs.core.first(seq__21430_21768__$1);
if(cljs.core.not(node_21774.shadow$old)){
var path_match_21775 = shadow.cljs.devtools.client.browser.match_paths(node_21774.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21775)){
var new_link_21776 = (function (){var G__21476 = node_21774.cloneNode(true);
G__21476.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21775),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21476;
})();
(node_21774.shadow$old = true);

(new_link_21776.onload = ((function (seq__21430_21715,chunk__21434_21716,count__21435_21717,i__21436_21718,seq__21157,chunk__21159,count__21160,i__21161,new_link_21776,path_match_21775,node_21774,seq__21430_21768__$1,temp__5804__auto___21767__$1,path,seq__21157__$1,temp__5804__auto__,map__21156,map__21156__$1,msg,updates,reload_info){
return (function (e){
var seq__21477_21778 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21479_21779 = null;
var count__21480_21780 = (0);
var i__21481_21781 = (0);
while(true){
if((i__21481_21781 < count__21480_21780)){
var map__21487_21783 = chunk__21479_21779.cljs$core$IIndexed$_nth$arity$2(null,i__21481_21781);
var map__21487_21784__$1 = cljs.core.__destructure_map(map__21487_21783);
var task_21785 = map__21487_21784__$1;
var fn_str_21786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21487_21784__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21487_21784__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21801 = goog.getObjectByName(fn_str_21786,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21787)].join(''));

(fn_obj_21801.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21801.cljs$core$IFn$_invoke$arity$2(path,new_link_21776) : fn_obj_21801.call(null,path,new_link_21776));


var G__21802 = seq__21477_21778;
var G__21803 = chunk__21479_21779;
var G__21804 = count__21480_21780;
var G__21805 = (i__21481_21781 + (1));
seq__21477_21778 = G__21802;
chunk__21479_21779 = G__21803;
count__21480_21780 = G__21804;
i__21481_21781 = G__21805;
continue;
} else {
var temp__5804__auto___21806__$2 = cljs.core.seq(seq__21477_21778);
if(temp__5804__auto___21806__$2){
var seq__21477_21807__$1 = temp__5804__auto___21806__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21477_21807__$1)){
var c__5568__auto___21808 = cljs.core.chunk_first(seq__21477_21807__$1);
var G__21809 = cljs.core.chunk_rest(seq__21477_21807__$1);
var G__21810 = c__5568__auto___21808;
var G__21811 = cljs.core.count(c__5568__auto___21808);
var G__21812 = (0);
seq__21477_21778 = G__21809;
chunk__21479_21779 = G__21810;
count__21480_21780 = G__21811;
i__21481_21781 = G__21812;
continue;
} else {
var map__21491_21813 = cljs.core.first(seq__21477_21807__$1);
var map__21491_21814__$1 = cljs.core.__destructure_map(map__21491_21813);
var task_21815 = map__21491_21814__$1;
var fn_str_21816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491_21814__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491_21814__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21818 = goog.getObjectByName(fn_str_21816,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21817)].join(''));

(fn_obj_21818.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21818.cljs$core$IFn$_invoke$arity$2(path,new_link_21776) : fn_obj_21818.call(null,path,new_link_21776));


var G__21819 = cljs.core.next(seq__21477_21807__$1);
var G__21820 = null;
var G__21821 = (0);
var G__21822 = (0);
seq__21477_21778 = G__21819;
chunk__21479_21779 = G__21820;
count__21480_21780 = G__21821;
i__21481_21781 = G__21822;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21774);
});})(seq__21430_21715,chunk__21434_21716,count__21435_21717,i__21436_21718,seq__21157,chunk__21159,count__21160,i__21161,new_link_21776,path_match_21775,node_21774,seq__21430_21768__$1,temp__5804__auto___21767__$1,path,seq__21157__$1,temp__5804__auto__,map__21156,map__21156__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21775], 0));

goog.dom.insertSiblingAfter(new_link_21776,node_21774);


var G__21823 = cljs.core.next(seq__21430_21768__$1);
var G__21824 = null;
var G__21825 = (0);
var G__21826 = (0);
seq__21430_21715 = G__21823;
chunk__21434_21716 = G__21824;
count__21435_21717 = G__21825;
i__21436_21718 = G__21826;
continue;
} else {
var G__21827 = cljs.core.next(seq__21430_21768__$1);
var G__21828 = null;
var G__21829 = (0);
var G__21830 = (0);
seq__21430_21715 = G__21827;
chunk__21434_21716 = G__21828;
count__21435_21717 = G__21829;
i__21436_21718 = G__21830;
continue;
}
} else {
var G__21831 = cljs.core.next(seq__21430_21768__$1);
var G__21832 = null;
var G__21833 = (0);
var G__21834 = (0);
seq__21430_21715 = G__21831;
chunk__21434_21716 = G__21832;
count__21435_21717 = G__21833;
i__21436_21718 = G__21834;
continue;
}
}
} else {
}
}
break;
}


var G__21835 = cljs.core.next(seq__21157__$1);
var G__21836 = null;
var G__21837 = (0);
var G__21838 = (0);
seq__21157 = G__21835;
chunk__21159 = G__21836;
count__21160 = G__21837;
i__21161 = G__21838;
continue;
} else {
var G__21839 = cljs.core.next(seq__21157__$1);
var G__21840 = null;
var G__21841 = (0);
var G__21842 = (0);
seq__21157 = G__21839;
chunk__21159 = G__21840;
count__21160 = G__21841;
i__21161 = G__21842;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21492){
var map__21493 = p__21492;
var map__21493__$1 = cljs.core.__destructure_map(map__21493);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21494){
var map__21495 = p__21494;
var map__21495__$1 = cljs.core.__destructure_map(map__21495);
var _ = map__21495__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21496,done,error){
var map__21497 = p__21496;
var map__21497__$1 = cljs.core.__destructure_map(map__21497);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21497__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21498,done,error){
var map__21499 = p__21498;
var map__21499__$1 = cljs.core.__destructure_map(map__21499);
var msg = map__21499__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21500){
var map__21501 = p__21500;
var map__21501__$1 = cljs.core.__destructure_map(map__21501);
var src = map__21501__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21501__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21502 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21502) : done.call(null,G__21502));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21504){
var map__21505 = p__21504;
var map__21505__$1 = cljs.core.__destructure_map(map__21505);
var msg__$1 = map__21505__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21505__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21506){var ex = e21506;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21507){
var map__21508 = p__21507;
var map__21508__$1 = cljs.core.__destructure_map(map__21508);
var env = map__21508__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21508__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21512){
var map__21513 = p__21512;
var map__21513__$1 = cljs.core.__destructure_map(map__21513);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21515){
var map__21516 = p__21515;
var map__21516__$1 = cljs.core.__destructure_map(map__21516);
var svc = map__21516__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21516__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
