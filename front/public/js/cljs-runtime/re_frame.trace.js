goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22507){
var map__22508 = p__22507;
var map__22508__$1 = cljs.core.__destructure_map(map__22508);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__22511_22540 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__22512_22541 = null;
var count__22513_22542 = (0);
var i__22514_22543 = (0);
while(true){
if((i__22514_22543 < count__22513_22542)){
var vec__22525_22544 = chunk__22512_22541.cljs$core$IIndexed$_nth$arity$2(null,i__22514_22543);
var k_22545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22525_22544,(0),null);
var cb_22546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22525_22544,(1),null);
try{var G__22529_22547 = cljs.core.deref(re_frame.trace.traces);
(cb_22546.cljs$core$IFn$_invoke$arity$1 ? cb_22546.cljs$core$IFn$_invoke$arity$1(G__22529_22547) : cb_22546.call(null,G__22529_22547));
}catch (e22528){var e_22548 = e22528;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22545,"while storing",cljs.core.deref(re_frame.trace.traces),e_22548], 0));
}

var G__22549 = seq__22511_22540;
var G__22550 = chunk__22512_22541;
var G__22551 = count__22513_22542;
var G__22552 = (i__22514_22543 + (1));
seq__22511_22540 = G__22549;
chunk__22512_22541 = G__22550;
count__22513_22542 = G__22551;
i__22514_22543 = G__22552;
continue;
} else {
var temp__5804__auto___22553 = cljs.core.seq(seq__22511_22540);
if(temp__5804__auto___22553){
var seq__22511_22554__$1 = temp__5804__auto___22553;
if(cljs.core.chunked_seq_QMARK_(seq__22511_22554__$1)){
var c__5568__auto___22555 = cljs.core.chunk_first(seq__22511_22554__$1);
var G__22556 = cljs.core.chunk_rest(seq__22511_22554__$1);
var G__22557 = c__5568__auto___22555;
var G__22558 = cljs.core.count(c__5568__auto___22555);
var G__22559 = (0);
seq__22511_22540 = G__22556;
chunk__22512_22541 = G__22557;
count__22513_22542 = G__22558;
i__22514_22543 = G__22559;
continue;
} else {
var vec__22530_22560 = cljs.core.first(seq__22511_22554__$1);
var k_22561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530_22560,(0),null);
var cb_22562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530_22560,(1),null);
try{var G__22534_22563 = cljs.core.deref(re_frame.trace.traces);
(cb_22562.cljs$core$IFn$_invoke$arity$1 ? cb_22562.cljs$core$IFn$_invoke$arity$1(G__22534_22563) : cb_22562.call(null,G__22534_22563));
}catch (e22533){var e_22564 = e22533;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22561,"while storing",cljs.core.deref(re_frame.trace.traces),e_22564], 0));
}

var G__22565 = cljs.core.next(seq__22511_22554__$1);
var G__22566 = null;
var G__22567 = (0);
var G__22568 = (0);
seq__22511_22540 = G__22565;
chunk__22512_22541 = G__22566;
count__22513_22542 = G__22567;
i__22514_22543 = G__22568;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
