goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__20310__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20311__i = 0, G__20311__a = new Array(arguments.length -  0);
while (G__20311__i < G__20311__a.length) {G__20311__a[G__20311__i] = arguments[G__20311__i + 0]; ++G__20311__i;}
  args = new cljs.core.IndexedSeq(G__20311__a,0,null);
} 
return G__20310__delegate.call(this,args);};
G__20310.cljs$lang$maxFixedArity = 0;
G__20310.cljs$lang$applyTo = (function (arglist__20312){
var args = cljs.core.seq(arglist__20312);
return G__20310__delegate(args);
});
G__20310.cljs$core$IFn$_invoke$arity$variadic = G__20310__delegate;
return G__20310;
})()
);

(o.error = (function() { 
var G__20313__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20314__i = 0, G__20314__a = new Array(arguments.length -  0);
while (G__20314__i < G__20314__a.length) {G__20314__a[G__20314__i] = arguments[G__20314__i + 0]; ++G__20314__i;}
  args = new cljs.core.IndexedSeq(G__20314__a,0,null);
} 
return G__20313__delegate.call(this,args);};
G__20313.cljs$lang$maxFixedArity = 0;
G__20313.cljs$lang$applyTo = (function (arglist__20315){
var args = cljs.core.seq(arglist__20315);
return G__20313__delegate(args);
});
G__20313.cljs$core$IFn$_invoke$arity$variadic = G__20313__delegate;
return G__20313;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
