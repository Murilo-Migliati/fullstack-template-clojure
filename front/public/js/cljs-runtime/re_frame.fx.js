goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__22825 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22826 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22826);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___22904 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___22904)){
var new_db_22905 = temp__5804__auto___22904;
var fexpr__22828_22906 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22828_22906.cljs$core$IFn$_invoke$arity$1 ? fexpr__22828_22906.cljs$core$IFn$_invoke$arity$1(new_db_22905) : fexpr__22828_22906.call(null,new_db_22905));
} else {
}

var seq__22829 = cljs.core.seq(effects_without_db);
var chunk__22830 = null;
var count__22831 = (0);
var i__22832 = (0);
while(true){
if((i__22832 < count__22831)){
var vec__22851 = chunk__22830.cljs$core$IIndexed$_nth$arity$2(null,i__22832);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22851,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22851,(1),null);
var temp__5802__auto___22907 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22907)){
var effect_fn_22908 = temp__5802__auto___22907;
(effect_fn_22908.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22908.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22908.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22909 = seq__22829;
var G__22910 = chunk__22830;
var G__22911 = count__22831;
var G__22912 = (i__22832 + (1));
seq__22829 = G__22909;
chunk__22830 = G__22910;
count__22831 = G__22911;
i__22832 = G__22912;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22829);
if(temp__5804__auto__){
var seq__22829__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22829__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22829__$1);
var G__22913 = cljs.core.chunk_rest(seq__22829__$1);
var G__22914 = c__5568__auto__;
var G__22915 = cljs.core.count(c__5568__auto__);
var G__22916 = (0);
seq__22829 = G__22913;
chunk__22830 = G__22914;
count__22831 = G__22915;
i__22832 = G__22916;
continue;
} else {
var vec__22854 = cljs.core.first(seq__22829__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22854,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22854,(1),null);
var temp__5802__auto___22917 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22917)){
var effect_fn_22918 = temp__5802__auto___22917;
(effect_fn_22918.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22918.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22918.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22919 = cljs.core.next(seq__22829__$1);
var G__22920 = null;
var G__22921 = (0);
var G__22922 = (0);
seq__22829 = G__22919;
chunk__22830 = G__22920;
count__22831 = G__22921;
i__22832 = G__22922;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22483__auto___22923 = re_frame.interop.now();
var duration__22484__auto___22924 = (end__22483__auto___22923 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22484__auto___22924,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22483__auto___22923);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22825);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___22925 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___22925)){
var new_db_22926 = temp__5804__auto___22925;
var fexpr__22857_22927 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22857_22927.cljs$core$IFn$_invoke$arity$1 ? fexpr__22857_22927.cljs$core$IFn$_invoke$arity$1(new_db_22926) : fexpr__22857_22927.call(null,new_db_22926));
} else {
}

var seq__22858 = cljs.core.seq(effects_without_db);
var chunk__22859 = null;
var count__22860 = (0);
var i__22861 = (0);
while(true){
if((i__22861 < count__22860)){
var vec__22868 = chunk__22859.cljs$core$IIndexed$_nth$arity$2(null,i__22861);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22868,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22868,(1),null);
var temp__5802__auto___22928 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22928)){
var effect_fn_22929 = temp__5802__auto___22928;
(effect_fn_22929.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22929.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22929.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22930 = seq__22858;
var G__22931 = chunk__22859;
var G__22932 = count__22860;
var G__22933 = (i__22861 + (1));
seq__22858 = G__22930;
chunk__22859 = G__22931;
count__22860 = G__22932;
i__22861 = G__22933;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22858);
if(temp__5804__auto__){
var seq__22858__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22858__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22858__$1);
var G__22934 = cljs.core.chunk_rest(seq__22858__$1);
var G__22935 = c__5568__auto__;
var G__22936 = cljs.core.count(c__5568__auto__);
var G__22937 = (0);
seq__22858 = G__22934;
chunk__22859 = G__22935;
count__22860 = G__22936;
i__22861 = G__22937;
continue;
} else {
var vec__22871 = cljs.core.first(seq__22858__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22871,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22871,(1),null);
var temp__5802__auto___22938 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22938)){
var effect_fn_22939 = temp__5802__auto___22938;
(effect_fn_22939.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22939.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22939.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22940 = cljs.core.next(seq__22858__$1);
var G__22941 = null;
var G__22942 = (0);
var G__22943 = (0);
seq__22858 = G__22940;
chunk__22859 = G__22941;
count__22860 = G__22942;
i__22861 = G__22943;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__22874){
var map__22875 = p__22874;
var map__22875__$1 = cljs.core.__destructure_map(map__22875);
var effect = map__22875__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22875__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22875__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__22876 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22877 = null;
var count__22878 = (0);
var i__22879 = (0);
while(true){
if((i__22879 < count__22878)){
var effect = chunk__22877.cljs$core$IIndexed$_nth$arity$2(null,i__22879);
re_frame.fx.dispatch_later(effect);


var G__22944 = seq__22876;
var G__22945 = chunk__22877;
var G__22946 = count__22878;
var G__22947 = (i__22879 + (1));
seq__22876 = G__22944;
chunk__22877 = G__22945;
count__22878 = G__22946;
i__22879 = G__22947;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22876);
if(temp__5804__auto__){
var seq__22876__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22876__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22876__$1);
var G__22948 = cljs.core.chunk_rest(seq__22876__$1);
var G__22949 = c__5568__auto__;
var G__22950 = cljs.core.count(c__5568__auto__);
var G__22951 = (0);
seq__22876 = G__22948;
chunk__22877 = G__22949;
count__22878 = G__22950;
i__22879 = G__22951;
continue;
} else {
var effect = cljs.core.first(seq__22876__$1);
re_frame.fx.dispatch_later(effect);


var G__22952 = cljs.core.next(seq__22876__$1);
var G__22953 = null;
var G__22954 = (0);
var G__22955 = (0);
seq__22876 = G__22952;
chunk__22877 = G__22953;
count__22878 = G__22954;
i__22879 = G__22955;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__22880 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__22881 = null;
var count__22882 = (0);
var i__22883 = (0);
while(true){
if((i__22883 < count__22882)){
var vec__22890 = chunk__22881.cljs$core$IIndexed$_nth$arity$2(null,i__22883);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22890,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22890,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22956 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22956)){
var effect_fn_22957 = temp__5802__auto___22956;
(effect_fn_22957.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22957.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22957.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22958 = seq__22880;
var G__22959 = chunk__22881;
var G__22960 = count__22882;
var G__22961 = (i__22883 + (1));
seq__22880 = G__22958;
chunk__22881 = G__22959;
count__22882 = G__22960;
i__22883 = G__22961;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22880);
if(temp__5804__auto__){
var seq__22880__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22880__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22880__$1);
var G__22962 = cljs.core.chunk_rest(seq__22880__$1);
var G__22963 = c__5568__auto__;
var G__22964 = cljs.core.count(c__5568__auto__);
var G__22965 = (0);
seq__22880 = G__22962;
chunk__22881 = G__22963;
count__22882 = G__22964;
i__22883 = G__22965;
continue;
} else {
var vec__22893 = cljs.core.first(seq__22880__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22966 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22966)){
var effect_fn_22967 = temp__5802__auto___22966;
(effect_fn_22967.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22967.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22967.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22968 = cljs.core.next(seq__22880__$1);
var G__22969 = null;
var G__22970 = (0);
var G__22971 = (0);
seq__22880 = G__22968;
chunk__22881 = G__22969;
count__22882 = G__22970;
i__22883 = G__22971;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__22896 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22897 = null;
var count__22898 = (0);
var i__22899 = (0);
while(true){
if((i__22899 < count__22898)){
var event = chunk__22897.cljs$core$IIndexed$_nth$arity$2(null,i__22899);
re_frame.router.dispatch(event);


var G__22972 = seq__22896;
var G__22973 = chunk__22897;
var G__22974 = count__22898;
var G__22975 = (i__22899 + (1));
seq__22896 = G__22972;
chunk__22897 = G__22973;
count__22898 = G__22974;
i__22899 = G__22975;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22896);
if(temp__5804__auto__){
var seq__22896__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22896__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22896__$1);
var G__22976 = cljs.core.chunk_rest(seq__22896__$1);
var G__22977 = c__5568__auto__;
var G__22978 = cljs.core.count(c__5568__auto__);
var G__22979 = (0);
seq__22896 = G__22976;
chunk__22897 = G__22977;
count__22898 = G__22978;
i__22899 = G__22979;
continue;
} else {
var event = cljs.core.first(seq__22896__$1);
re_frame.router.dispatch(event);


var G__22980 = cljs.core.next(seq__22896__$1);
var G__22981 = null;
var G__22982 = (0);
var G__22983 = (0);
seq__22896 = G__22980;
chunk__22897 = G__22981;
count__22898 = G__22982;
i__22899 = G__22983;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__22900 = cljs.core.seq(value);
var chunk__22901 = null;
var count__22902 = (0);
var i__22903 = (0);
while(true){
if((i__22903 < count__22902)){
var event = chunk__22901.cljs$core$IIndexed$_nth$arity$2(null,i__22903);
clear_event(event);


var G__22984 = seq__22900;
var G__22985 = chunk__22901;
var G__22986 = count__22902;
var G__22987 = (i__22903 + (1));
seq__22900 = G__22984;
chunk__22901 = G__22985;
count__22902 = G__22986;
i__22903 = G__22987;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22900);
if(temp__5804__auto__){
var seq__22900__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22900__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22900__$1);
var G__22988 = cljs.core.chunk_rest(seq__22900__$1);
var G__22989 = c__5568__auto__;
var G__22990 = cljs.core.count(c__5568__auto__);
var G__22991 = (0);
seq__22900 = G__22988;
chunk__22901 = G__22989;
count__22902 = G__22990;
i__22903 = G__22991;
continue;
} else {
var event = cljs.core.first(seq__22900__$1);
clear_event(event);


var G__22992 = cljs.core.next(seq__22900__$1);
var G__22993 = null;
var G__22994 = (0);
var G__22995 = (0);
seq__22900 = G__22992;
chunk__22901 = G__22993;
count__22902 = G__22994;
i__22903 = G__22995;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
