goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17161,res){
var map__17162 = p__17161;
var map__17162__$1 = cljs.core.__destructure_map(map__17162);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17162__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17162__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17165 = res;
var G__17165__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17165,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17165);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17165__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17165__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17170 = arguments.length;
switch (G__17170) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17174,msg,handlers,timeout_after_ms){
var map__17175 = p__17174;
var map__17175__$1 = cljs.core.__destructure_map(map__17175);
var runtime = map__17175__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17175__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17553 = arguments.length;
var i__5770__auto___17554 = (0);
while(true){
if((i__5770__auto___17554 < len__5769__auto___17553)){
args__5775__auto__.push((arguments[i__5770__auto___17554]));

var G__17555 = (i__5770__auto___17554 + (1));
i__5770__auto___17554 = G__17555;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17182,ev,args){
var map__17183 = p__17182;
var map__17183__$1 = cljs.core.__destructure_map(map__17183);
var runtime = map__17183__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17183__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17185 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17188 = null;
var count__17189 = (0);
var i__17190 = (0);
while(true){
if((i__17190 < count__17189)){
var ext = chunk__17188.cljs$core$IIndexed$_nth$arity$2(null,i__17190);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17605 = seq__17185;
var G__17606 = chunk__17188;
var G__17607 = count__17189;
var G__17608 = (i__17190 + (1));
seq__17185 = G__17605;
chunk__17188 = G__17606;
count__17189 = G__17607;
i__17190 = G__17608;
continue;
} else {
var G__17609 = seq__17185;
var G__17610 = chunk__17188;
var G__17611 = count__17189;
var G__17612 = (i__17190 + (1));
seq__17185 = G__17609;
chunk__17188 = G__17610;
count__17189 = G__17611;
i__17190 = G__17612;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17185);
if(temp__5804__auto__){
var seq__17185__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17185__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17185__$1);
var G__17613 = cljs.core.chunk_rest(seq__17185__$1);
var G__17614 = c__5568__auto__;
var G__17615 = cljs.core.count(c__5568__auto__);
var G__17616 = (0);
seq__17185 = G__17613;
chunk__17188 = G__17614;
count__17189 = G__17615;
i__17190 = G__17616;
continue;
} else {
var ext = cljs.core.first(seq__17185__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17617 = cljs.core.next(seq__17185__$1);
var G__17618 = null;
var G__17619 = (0);
var G__17620 = (0);
seq__17185 = G__17617;
chunk__17188 = G__17618;
count__17189 = G__17619;
i__17190 = G__17620;
continue;
} else {
var G__17621 = cljs.core.next(seq__17185__$1);
var G__17622 = null;
var G__17623 = (0);
var G__17624 = (0);
seq__17185 = G__17621;
chunk__17188 = G__17622;
count__17189 = G__17623;
i__17190 = G__17624;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17179){
var G__17180 = cljs.core.first(seq17179);
var seq17179__$1 = cljs.core.next(seq17179);
var G__17181 = cljs.core.first(seq17179__$1);
var seq17179__$2 = cljs.core.next(seq17179__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17180,G__17181,seq17179__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17237,p__17238){
var map__17239 = p__17237;
var map__17239__$1 = cljs.core.__destructure_map(map__17239);
var runtime = map__17239__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17239__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17240 = p__17238;
var map__17240__$1 = cljs.core.__destructure_map(map__17240);
var msg = map__17240__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17240__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17241 = cljs.core.deref(state_ref);
var map__17241__$1 = cljs.core.__destructure_map(map__17241);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17241__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17241__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17242){
var map__17243 = p__17242;
var map__17243__$1 = cljs.core.__destructure_map(map__17243);
var runtime = map__17243__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17243__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17250,msg){
var map__17251 = p__17250;
var map__17251__$1 = cljs.core.__destructure_map(map__17251);
var runtime = map__17251__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17251__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17422,key,p__17423){
var map__17425 = p__17422;
var map__17425__$1 = cljs.core.__destructure_map(map__17425);
var state = map__17425__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17425__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17426 = p__17423;
var map__17426__$1 = cljs.core.__destructure_map(map__17426);
var spec = map__17426__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17426__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17430,key,spec){
var map__17431 = p__17430;
var map__17431__$1 = cljs.core.__destructure_map(map__17431);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17431__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17435_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17435_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17436_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17436_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17437_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17437_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17438_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17438_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17439_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17439_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17466,key){
var map__17467 = p__17466;
var map__17467__$1 = cljs.core.__destructure_map(map__17467);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17467__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17468,msg){
var map__17470 = p__17468;
var map__17470__$1 = cljs.core.__destructure_map(map__17470);
var runtime = map__17470__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17470__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17506,p__17507){
var map__17509 = p__17506;
var map__17509__$1 = cljs.core.__destructure_map(map__17509);
var runtime = map__17509__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17509__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17510 = p__17507;
var map__17510__$1 = cljs.core.__destructure_map(map__17510);
var msg = map__17510__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17516 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17519 = null;
var count__17520 = (0);
var i__17521 = (0);
while(true){
if((i__17521 < count__17520)){
var map__17533 = chunk__17519.cljs$core$IIndexed$_nth$arity$2(null,i__17521);
var map__17533__$1 = cljs.core.__destructure_map(map__17533);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17533__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17714 = seq__17516;
var G__17715 = chunk__17519;
var G__17716 = count__17520;
var G__17717 = (i__17521 + (1));
seq__17516 = G__17714;
chunk__17519 = G__17715;
count__17520 = G__17716;
i__17521 = G__17717;
continue;
} else {
var G__17718 = seq__17516;
var G__17719 = chunk__17519;
var G__17720 = count__17520;
var G__17721 = (i__17521 + (1));
seq__17516 = G__17718;
chunk__17519 = G__17719;
count__17520 = G__17720;
i__17521 = G__17721;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17516);
if(temp__5804__auto__){
var seq__17516__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17516__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17516__$1);
var G__17723 = cljs.core.chunk_rest(seq__17516__$1);
var G__17724 = c__5568__auto__;
var G__17725 = cljs.core.count(c__5568__auto__);
var G__17726 = (0);
seq__17516 = G__17723;
chunk__17519 = G__17724;
count__17520 = G__17725;
i__17521 = G__17726;
continue;
} else {
var map__17541 = cljs.core.first(seq__17516__$1);
var map__17541__$1 = cljs.core.__destructure_map(map__17541);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17541__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17729 = cljs.core.next(seq__17516__$1);
var G__17730 = null;
var G__17731 = (0);
var G__17732 = (0);
seq__17516 = G__17729;
chunk__17519 = G__17730;
count__17520 = G__17731;
i__17521 = G__17732;
continue;
} else {
var G__17733 = cljs.core.next(seq__17516__$1);
var G__17734 = null;
var G__17735 = (0);
var G__17736 = (0);
seq__17516 = G__17733;
chunk__17519 = G__17734;
count__17520 = G__17735;
i__17521 = G__17736;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
