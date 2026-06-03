goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19091){
var map__19092 = p__19091;
var map__19092__$1 = cljs.core.__destructure_map(map__19092);
var m = map__19092__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19307_19671 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19308_19672 = null;
var count__19309_19673 = (0);
var i__19310_19674 = (0);
while(true){
if((i__19310_19674 < count__19309_19673)){
var f_19675 = chunk__19308_19672.cljs$core$IIndexed$_nth$arity$2(null,i__19310_19674);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19675], 0));


var G__19676 = seq__19307_19671;
var G__19677 = chunk__19308_19672;
var G__19678 = count__19309_19673;
var G__19679 = (i__19310_19674 + (1));
seq__19307_19671 = G__19676;
chunk__19308_19672 = G__19677;
count__19309_19673 = G__19678;
i__19310_19674 = G__19679;
continue;
} else {
var temp__5804__auto___19680 = cljs.core.seq(seq__19307_19671);
if(temp__5804__auto___19680){
var seq__19307_19681__$1 = temp__5804__auto___19680;
if(cljs.core.chunked_seq_QMARK_(seq__19307_19681__$1)){
var c__5568__auto___19682 = cljs.core.chunk_first(seq__19307_19681__$1);
var G__19683 = cljs.core.chunk_rest(seq__19307_19681__$1);
var G__19684 = c__5568__auto___19682;
var G__19685 = cljs.core.count(c__5568__auto___19682);
var G__19686 = (0);
seq__19307_19671 = G__19683;
chunk__19308_19672 = G__19684;
count__19309_19673 = G__19685;
i__19310_19674 = G__19686;
continue;
} else {
var f_19692 = cljs.core.first(seq__19307_19681__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19692], 0));


var G__19693 = cljs.core.next(seq__19307_19681__$1);
var G__19694 = null;
var G__19695 = (0);
var G__19696 = (0);
seq__19307_19671 = G__19693;
chunk__19308_19672 = G__19694;
count__19309_19673 = G__19695;
i__19310_19674 = G__19696;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19697 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19697], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19697)))?cljs.core.second(arglists_19697):arglists_19697)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19338_19698 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19339_19699 = null;
var count__19340_19700 = (0);
var i__19341_19701 = (0);
while(true){
if((i__19341_19701 < count__19340_19700)){
var vec__19356_19702 = chunk__19339_19699.cljs$core$IIndexed$_nth$arity$2(null,i__19341_19701);
var name_19703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356_19702,(0),null);
var map__19359_19704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356_19702,(1),null);
var map__19359_19705__$1 = cljs.core.__destructure_map(map__19359_19704);
var doc_19706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19359_19705__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19359_19705__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19703], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19707], 0));

if(cljs.core.truth_(doc_19706)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19706], 0));
} else {
}


var G__19708 = seq__19338_19698;
var G__19709 = chunk__19339_19699;
var G__19710 = count__19340_19700;
var G__19711 = (i__19341_19701 + (1));
seq__19338_19698 = G__19708;
chunk__19339_19699 = G__19709;
count__19340_19700 = G__19710;
i__19341_19701 = G__19711;
continue;
} else {
var temp__5804__auto___19712 = cljs.core.seq(seq__19338_19698);
if(temp__5804__auto___19712){
var seq__19338_19713__$1 = temp__5804__auto___19712;
if(cljs.core.chunked_seq_QMARK_(seq__19338_19713__$1)){
var c__5568__auto___19714 = cljs.core.chunk_first(seq__19338_19713__$1);
var G__19715 = cljs.core.chunk_rest(seq__19338_19713__$1);
var G__19716 = c__5568__auto___19714;
var G__19717 = cljs.core.count(c__5568__auto___19714);
var G__19718 = (0);
seq__19338_19698 = G__19715;
chunk__19339_19699 = G__19716;
count__19340_19700 = G__19717;
i__19341_19701 = G__19718;
continue;
} else {
var vec__19380_19719 = cljs.core.first(seq__19338_19713__$1);
var name_19720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19380_19719,(0),null);
var map__19383_19721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19380_19719,(1),null);
var map__19383_19722__$1 = cljs.core.__destructure_map(map__19383_19721);
var doc_19723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19383_19722__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19383_19722__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19720], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19724], 0));

if(cljs.core.truth_(doc_19723)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19723], 0));
} else {
}


var G__19725 = cljs.core.next(seq__19338_19713__$1);
var G__19726 = null;
var G__19727 = (0);
var G__19728 = (0);
seq__19338_19698 = G__19725;
chunk__19339_19699 = G__19726;
count__19340_19700 = G__19727;
i__19341_19701 = G__19728;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19384 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19385 = null;
var count__19386 = (0);
var i__19387 = (0);
while(true){
if((i__19387 < count__19386)){
var role = chunk__19385.cljs$core$IIndexed$_nth$arity$2(null,i__19387);
var temp__5804__auto___19729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19729__$1)){
var spec_19730 = temp__5804__auto___19729__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19730)], 0));
} else {
}


var G__19731 = seq__19384;
var G__19732 = chunk__19385;
var G__19733 = count__19386;
var G__19734 = (i__19387 + (1));
seq__19384 = G__19731;
chunk__19385 = G__19732;
count__19386 = G__19733;
i__19387 = G__19734;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19384);
if(temp__5804__auto____$1){
var seq__19384__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19384__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19384__$1);
var G__19735 = cljs.core.chunk_rest(seq__19384__$1);
var G__19736 = c__5568__auto__;
var G__19737 = cljs.core.count(c__5568__auto__);
var G__19738 = (0);
seq__19384 = G__19735;
chunk__19385 = G__19736;
count__19386 = G__19737;
i__19387 = G__19738;
continue;
} else {
var role = cljs.core.first(seq__19384__$1);
var temp__5804__auto___19739__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19739__$2)){
var spec_19740 = temp__5804__auto___19739__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19740)], 0));
} else {
}


var G__19741 = cljs.core.next(seq__19384__$1);
var G__19742 = null;
var G__19743 = (0);
var G__19744 = (0);
seq__19384 = G__19741;
chunk__19385 = G__19742;
count__19386 = G__19743;
i__19387 = G__19744;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19745 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19746 = cljs.core.ex_cause(t);
via = G__19745;
t = G__19746;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19445 = datafied_throwable;
var map__19445__$1 = cljs.core.__destructure_map(map__19445);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19445__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19445__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19445__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19446 = cljs.core.last(via);
var map__19446__$1 = cljs.core.__destructure_map(map__19446);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19446__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19446__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19446__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19447 = data;
var map__19447__$1 = cljs.core.__destructure_map(map__19447);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19447__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19447__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19447__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19448 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19448__$1 = cljs.core.__destructure_map(map__19448);
var top_data = map__19448__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19448__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19502 = phase;
var G__19502__$1 = (((G__19502 instanceof cljs.core.Keyword))?G__19502.fqn:null);
switch (G__19502__$1) {
case "read-source":
var map__19503 = data;
var map__19503__$1 = cljs.core.__destructure_map(map__19503);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19503__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19503__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19504 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19504__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19504,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19504);
var G__19504__$2 = (cljs.core.truth_((function (){var fexpr__19506 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19506.cljs$core$IFn$_invoke$arity$1 ? fexpr__19506.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19506.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19504__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19504__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19504__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19504__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19507 = top_data;
var G__19507__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19507,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19507);
var G__19507__$2 = (cljs.core.truth_((function (){var fexpr__19508 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19508.cljs$core$IFn$_invoke$arity$1 ? fexpr__19508.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19508.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19507__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19507__$1);
var G__19507__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19507__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19507__$2);
var G__19507__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19507__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19507__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19507__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19507__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19509 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19509,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19509,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19509,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19509,(3),null);
var G__19512 = top_data;
var G__19512__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19512,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19512);
var G__19512__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19512__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19512__$1);
var G__19512__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19512__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19512__$2);
var G__19512__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19512__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19512__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19512__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19512__$4;
}

break;
case "execution":
var vec__19513 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19513,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19513,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19513,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19513,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19444_SHARP_){
var or__5045__auto__ = (p1__19444_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19516 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19516.cljs$core$IFn$_invoke$arity$1 ? fexpr__19516.cljs$core$IFn$_invoke$arity$1(p1__19444_SHARP_) : fexpr__19516.call(null,p1__19444_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19517 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19517__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19517,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19517);
var G__19517__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19517__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19517__$1);
var G__19517__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19517__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19517__$2);
var G__19517__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19517__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19517__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19517__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19517__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19502__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19618){
var map__19619 = p__19618;
var map__19619__$1 = cljs.core.__destructure_map(map__19619);
var triage_data = map__19619__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19619__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19619__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19619__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19619__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19619__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19619__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19619__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19619__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19621 = phase;
var G__19621__$1 = (((G__19621 instanceof cljs.core.Keyword))?G__19621.fqn:null);
switch (G__19621__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19622 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19623 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19624 = loc;
var G__19625 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19626_19884 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19627_19885 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19628_19886 = true;
var _STAR_print_fn_STAR__temp_val__19629_19887 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19628_19886);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19629_19887);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19616_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19616_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19627_19885);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19626_19884);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19622,G__19623,G__19624,G__19625) : format.call(null,G__19622,G__19623,G__19624,G__19625));

break;
case "macroexpansion":
var G__19643 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19644 = cause_type;
var G__19645 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19646 = loc;
var G__19647 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19643,G__19644,G__19645,G__19646,G__19647) : format.call(null,G__19643,G__19644,G__19645,G__19646,G__19647));

break;
case "compile-syntax-check":
var G__19648 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19649 = cause_type;
var G__19650 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19651 = loc;
var G__19652 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19648,G__19649,G__19650,G__19651,G__19652) : format.call(null,G__19648,G__19649,G__19650,G__19651,G__19652));

break;
case "compilation":
var G__19653 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19654 = cause_type;
var G__19655 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19656 = loc;
var G__19657 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19653,G__19654,G__19655,G__19656,G__19657) : format.call(null,G__19653,G__19654,G__19655,G__19656,G__19657));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19658 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19659 = symbol;
var G__19660 = loc;
var G__19661 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19662_19888 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19663_19889 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19664_19890 = true;
var _STAR_print_fn_STAR__temp_val__19665_19891 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19664_19890);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19665_19891);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19617_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19617_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19663_19889);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19662_19888);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19658,G__19659,G__19660,G__19661) : format.call(null,G__19658,G__19659,G__19660,G__19661));
} else {
var G__19666 = "Execution error%s at %s(%s).\n%s\n";
var G__19667 = cause_type;
var G__19668 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19669 = loc;
var G__19670 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19666,G__19667,G__19668,G__19669,G__19670) : format.call(null,G__19666,G__19667,G__19668,G__19669,G__19670));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19621__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
