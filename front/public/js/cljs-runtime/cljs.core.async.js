goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14436 = arguments.length;
switch (G__14436) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14441 = (function (f,blockable,meta14442){
this.f = f;
this.blockable = blockable;
this.meta14442 = meta14442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14443,meta14442__$1){
var self__ = this;
var _14443__$1 = this;
return (new cljs.core.async.t_cljs$core$async14441(self__.f,self__.blockable,meta14442__$1));
}));

(cljs.core.async.t_cljs$core$async14441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14443){
var self__ = this;
var _14443__$1 = this;
return self__.meta14442;
}));

(cljs.core.async.t_cljs$core$async14441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14442","meta14442",215183520,null)], null);
}));

(cljs.core.async.t_cljs$core$async14441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14441");

(cljs.core.async.t_cljs$core$async14441.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14441.
 */
cljs.core.async.__GT_t_cljs$core$async14441 = (function cljs$core$async$__GT_t_cljs$core$async14441(f__$1,blockable__$1,meta14442){
return (new cljs.core.async.t_cljs$core$async14441(f__$1,blockable__$1,meta14442));
});

}

return (new cljs.core.async.t_cljs$core$async14441(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14467 = arguments.length;
switch (G__14467) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14486 = arguments.length;
switch (G__14486) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14495 = arguments.length;
switch (G__14495) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17777 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17777) : fn1.call(null,val_17777));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17777) : fn1.call(null,val_17777));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14504 = arguments.length;
switch (G__14504) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17791 = n;
var x_17792 = (0);
while(true){
if((x_17792 < n__5636__auto___17791)){
(a[x_17792] = x_17792);

var G__17793 = (x_17792 + (1));
x_17792 = G__17793;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14535 = (function (flag,meta14536){
this.flag = flag;
this.meta14536 = meta14536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14537,meta14536__$1){
var self__ = this;
var _14537__$1 = this;
return (new cljs.core.async.t_cljs$core$async14535(self__.flag,meta14536__$1));
}));

(cljs.core.async.t_cljs$core$async14535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14537){
var self__ = this;
var _14537__$1 = this;
return self__.meta14536;
}));

(cljs.core.async.t_cljs$core$async14535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14536","meta14536",-207662668,null)], null);
}));

(cljs.core.async.t_cljs$core$async14535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14535");

(cljs.core.async.t_cljs$core$async14535.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14535.
 */
cljs.core.async.__GT_t_cljs$core$async14535 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14535(flag__$1,meta14536){
return (new cljs.core.async.t_cljs$core$async14535(flag__$1,meta14536));
});

}

return (new cljs.core.async.t_cljs$core$async14535(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14542 = (function (flag,cb,meta14543){
this.flag = flag;
this.cb = cb;
this.meta14543 = meta14543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14544,meta14543__$1){
var self__ = this;
var _14544__$1 = this;
return (new cljs.core.async.t_cljs$core$async14542(self__.flag,self__.cb,meta14543__$1));
}));

(cljs.core.async.t_cljs$core$async14542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14544){
var self__ = this;
var _14544__$1 = this;
return self__.meta14543;
}));

(cljs.core.async.t_cljs$core$async14542.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14542.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14542.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14542.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14543","meta14543",1589599742,null)], null);
}));

(cljs.core.async.t_cljs$core$async14542.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14542");

(cljs.core.async.t_cljs$core$async14542.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14542");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14542.
 */
cljs.core.async.__GT_t_cljs$core$async14542 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14542(flag__$1,cb__$1,meta14543){
return (new cljs.core.async.t_cljs$core$async14542(flag__$1,cb__$1,meta14543));
});

}

return (new cljs.core.async.t_cljs$core$async14542(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14553_SHARP_){
var G__14555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14553_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14555) : fret.call(null,G__14555));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14554_SHARP_){
var G__14556 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14554_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14556) : fret.call(null,G__14556));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17816 = (i + (1));
i = G__17816;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17855 = arguments.length;
var i__5770__auto___17856 = (0);
while(true){
if((i__5770__auto___17856 < len__5769__auto___17855)){
args__5775__auto__.push((arguments[i__5770__auto___17856]));

var G__17857 = (i__5770__auto___17856 + (1));
i__5770__auto___17856 = G__17857;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14611){
var map__14612 = p__14611;
var map__14612__$1 = cljs.core.__destructure_map(map__14612);
var opts = map__14612__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14609){
var G__14610 = cljs.core.first(seq14609);
var seq14609__$1 = cljs.core.next(seq14609);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14610,seq14609__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14642 = arguments.length;
switch (G__14642) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14323__auto___17860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_14733){
var state_val_14737 = (state_14733[(1)]);
if((state_val_14737 === (7))){
var inst_14697 = (state_14733[(2)]);
var state_14733__$1 = state_14733;
var statearr_14744_17862 = state_14733__$1;
(statearr_14744_17862[(2)] = inst_14697);

(statearr_14744_17862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (1))){
var state_14733__$1 = state_14733;
var statearr_14747_17863 = state_14733__$1;
(statearr_14747_17863[(2)] = null);

(statearr_14747_17863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (4))){
var inst_14679 = (state_14733[(7)]);
var inst_14679__$1 = (state_14733[(2)]);
var inst_14681 = (inst_14679__$1 == null);
var state_14733__$1 = (function (){var statearr_14761 = state_14733;
(statearr_14761[(7)] = inst_14679__$1);

return statearr_14761;
})();
if(cljs.core.truth_(inst_14681)){
var statearr_14762_17864 = state_14733__$1;
(statearr_14762_17864[(1)] = (5));

} else {
var statearr_14763_17865 = state_14733__$1;
(statearr_14763_17865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (13))){
var state_14733__$1 = state_14733;
var statearr_14774_17866 = state_14733__$1;
(statearr_14774_17866[(2)] = null);

(statearr_14774_17866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (6))){
var inst_14679 = (state_14733[(7)]);
var state_14733__$1 = state_14733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14733__$1,(11),to,inst_14679);
} else {
if((state_val_14737 === (3))){
var inst_14699 = (state_14733[(2)]);
var state_14733__$1 = state_14733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14733__$1,inst_14699);
} else {
if((state_val_14737 === (12))){
var state_14733__$1 = state_14733;
var statearr_14804_17868 = state_14733__$1;
(statearr_14804_17868[(2)] = null);

(statearr_14804_17868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (2))){
var state_14733__$1 = state_14733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14733__$1,(4),from);
} else {
if((state_val_14737 === (11))){
var inst_14690 = (state_14733[(2)]);
var state_14733__$1 = state_14733;
if(cljs.core.truth_(inst_14690)){
var statearr_14805_17870 = state_14733__$1;
(statearr_14805_17870[(1)] = (12));

} else {
var statearr_14806_17871 = state_14733__$1;
(statearr_14806_17871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (9))){
var state_14733__$1 = state_14733;
var statearr_14807_17872 = state_14733__$1;
(statearr_14807_17872[(2)] = null);

(statearr_14807_17872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (5))){
var state_14733__$1 = state_14733;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14808_17874 = state_14733__$1;
(statearr_14808_17874[(1)] = (8));

} else {
var statearr_14809_17875 = state_14733__$1;
(statearr_14809_17875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (14))){
var inst_14695 = (state_14733[(2)]);
var state_14733__$1 = state_14733;
var statearr_14810_17876 = state_14733__$1;
(statearr_14810_17876[(2)] = inst_14695);

(statearr_14810_17876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (10))){
var inst_14687 = (state_14733[(2)]);
var state_14733__$1 = state_14733;
var statearr_14811_17877 = state_14733__$1;
(statearr_14811_17877[(2)] = inst_14687);

(statearr_14811_17877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14737 === (8))){
var inst_14684 = cljs.core.async.close_BANG_(to);
var state_14733__$1 = state_14733;
var statearr_14812_17879 = state_14733__$1;
(statearr_14812_17879[(2)] = inst_14684);

(statearr_14812_17879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13737__auto__ = null;
var cljs$core$async$state_machine__13737__auto____0 = (function (){
var statearr_14820 = [null,null,null,null,null,null,null,null];
(statearr_14820[(0)] = cljs$core$async$state_machine__13737__auto__);

(statearr_14820[(1)] = (1));

return statearr_14820;
});
var cljs$core$async$state_machine__13737__auto____1 = (function (state_14733){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_14733);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e14822){var ex__13740__auto__ = e14822;
var statearr_14823_17880 = state_14733;
(statearr_14823_17880[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_14733[(4)]))){
var statearr_14825_17881 = state_14733;
(statearr_14825_17881[(1)] = cljs.core.first((state_14733[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17882 = state_14733;
state_14733 = G__17882;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13737__auto__ = function(state_14733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13737__auto____1.call(this,state_14733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13737__auto____0;
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13737__auto____1;
return cljs$core$async$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_14826 = f__14324__auto__();
(statearr_14826[(6)] = c__14323__auto___17860);

return statearr_14826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14841){
var vec__14842 = p__14841;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14842,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14842,(1),null);
var job = vec__14842;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14323__auto___17884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_14850){
var state_val_14851 = (state_14850[(1)]);
if((state_val_14851 === (1))){
var state_14850__$1 = state_14850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14850__$1,(2),res,v);
} else {
if((state_val_14851 === (2))){
var inst_14847 = (state_14850[(2)]);
var inst_14848 = cljs.core.async.close_BANG_(res);
var state_14850__$1 = (function (){var statearr_14872 = state_14850;
(statearr_14872[(7)] = inst_14847);

return statearr_14872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14850__$1,inst_14848);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0 = (function (){
var statearr_14873 = [null,null,null,null,null,null,null,null];
(statearr_14873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__);

(statearr_14873[(1)] = (1));

return statearr_14873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1 = (function (state_14850){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_14850);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e14874){var ex__13740__auto__ = e14874;
var statearr_14875_17888 = state_14850;
(statearr_14875_17888[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_14850[(4)]))){
var statearr_14876_17913 = state_14850;
(statearr_14876_17913[(1)] = cljs.core.first((state_14850[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17914 = state_14850;
state_14850 = G__17914;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__ = function(state_14850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1.call(this,state_14850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_14877 = f__14324__auto__();
(statearr_14877[(6)] = c__14323__auto___17884);

return statearr_14877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14878){
var vec__14883 = p__14878;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(1),null);
var job = vec__14883;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17915 = n;
var __17916 = (0);
while(true){
if((__17916 < n__5636__auto___17915)){
var G__14891_17917 = type;
var G__14891_17918__$1 = (((G__14891_17917 instanceof cljs.core.Keyword))?G__14891_17917.fqn:null);
switch (G__14891_17918__$1) {
case "compute":
var c__14323__auto___17920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17916,c__14323__auto___17920,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async){
return (function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = ((function (__17916,c__14323__auto___17920,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async){
return (function (state_14904){
var state_val_14905 = (state_14904[(1)]);
if((state_val_14905 === (1))){
var state_14904__$1 = state_14904;
var statearr_14906_17921 = state_14904__$1;
(statearr_14906_17921[(2)] = null);

(statearr_14906_17921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (2))){
var state_14904__$1 = state_14904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14904__$1,(4),jobs);
} else {
if((state_val_14905 === (3))){
var inst_14902 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14904__$1,inst_14902);
} else {
if((state_val_14905 === (4))){
var inst_14894 = (state_14904[(2)]);
var inst_14895 = process__$1(inst_14894);
var state_14904__$1 = state_14904;
if(cljs.core.truth_(inst_14895)){
var statearr_14926_17922 = state_14904__$1;
(statearr_14926_17922[(1)] = (5));

} else {
var statearr_14927_17923 = state_14904__$1;
(statearr_14927_17923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (5))){
var state_14904__$1 = state_14904;
var statearr_14929_17924 = state_14904__$1;
(statearr_14929_17924[(2)] = null);

(statearr_14929_17924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (6))){
var state_14904__$1 = state_14904;
var statearr_14930_17925 = state_14904__$1;
(statearr_14930_17925[(2)] = null);

(statearr_14930_17925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (7))){
var inst_14900 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_14931_17926 = state_14904__$1;
(statearr_14931_17926[(2)] = inst_14900);

(statearr_14931_17926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17916,c__14323__auto___17920,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async))
;
return ((function (__17916,switch__13736__auto__,c__14323__auto___17920,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0 = (function (){
var statearr_14932 = [null,null,null,null,null,null,null];
(statearr_14932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__);

(statearr_14932[(1)] = (1));

return statearr_14932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1 = (function (state_14904){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_14904);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e14934){var ex__13740__auto__ = e14934;
var statearr_14936_17927 = state_14904;
(statearr_14936_17927[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_14904[(4)]))){
var statearr_14937_17928 = state_14904;
(statearr_14937_17928[(1)] = cljs.core.first((state_14904[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17929 = state_14904;
state_14904 = G__17929;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__ = function(state_14904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1.call(this,state_14904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__;
})()
;})(__17916,switch__13736__auto__,c__14323__auto___17920,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async))
})();
var state__14325__auto__ = (function (){var statearr_14939 = f__14324__auto__();
(statearr_14939[(6)] = c__14323__auto___17920);

return statearr_14939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(__17916,c__14323__auto___17920,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async))
);


break;
case "async":
var c__14323__auto___17930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17916,c__14323__auto___17930,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async){
return (function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = ((function (__17916,c__14323__auto___17930,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async){
return (function (state_14952){
var state_val_14953 = (state_14952[(1)]);
if((state_val_14953 === (1))){
var state_14952__$1 = state_14952;
var statearr_14961_17931 = state_14952__$1;
(statearr_14961_17931[(2)] = null);

(statearr_14961_17931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (2))){
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14952__$1,(4),jobs);
} else {
if((state_val_14953 === (3))){
var inst_14950 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14952__$1,inst_14950);
} else {
if((state_val_14953 === (4))){
var inst_14942 = (state_14952[(2)]);
var inst_14943 = async(inst_14942);
var state_14952__$1 = state_14952;
if(cljs.core.truth_(inst_14943)){
var statearr_15011_17932 = state_14952__$1;
(statearr_15011_17932[(1)] = (5));

} else {
var statearr_15012_17933 = state_14952__$1;
(statearr_15012_17933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (5))){
var state_14952__$1 = state_14952;
var statearr_15015_17934 = state_14952__$1;
(statearr_15015_17934[(2)] = null);

(statearr_15015_17934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (6))){
var state_14952__$1 = state_14952;
var statearr_15017_17935 = state_14952__$1;
(statearr_15017_17935[(2)] = null);

(statearr_15017_17935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (7))){
var inst_14948 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_15018_17964 = state_14952__$1;
(statearr_15018_17964[(2)] = inst_14948);

(statearr_15018_17964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17916,c__14323__auto___17930,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async))
;
return ((function (__17916,switch__13736__auto__,c__14323__auto___17930,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0 = (function (){
var statearr_15019 = [null,null,null,null,null,null,null];
(statearr_15019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__);

(statearr_15019[(1)] = (1));

return statearr_15019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1 = (function (state_14952){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_14952);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15020){var ex__13740__auto__ = e15020;
var statearr_15021_17965 = state_14952;
(statearr_15021_17965[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_14952[(4)]))){
var statearr_15022_17968 = state_14952;
(statearr_15022_17968[(1)] = cljs.core.first((state_14952[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17975 = state_14952;
state_14952 = G__17975;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__ = function(state_14952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1.call(this,state_14952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__;
})()
;})(__17916,switch__13736__auto__,c__14323__auto___17930,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async))
})();
var state__14325__auto__ = (function (){var statearr_15023 = f__14324__auto__();
(statearr_15023[(6)] = c__14323__auto___17930);

return statearr_15023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(__17916,c__14323__auto___17930,G__14891_17917,G__14891_17918__$1,n__5636__auto___17915,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14891_17918__$1)].join('')));

}

var G__17976 = (__17916 + (1));
__17916 = G__17976;
continue;
} else {
}
break;
}

var c__14323__auto___17977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_15064){
var state_val_15065 = (state_15064[(1)]);
if((state_val_15065 === (7))){
var inst_15046 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
var statearr_15066_17978 = state_15064__$1;
(statearr_15066_17978[(2)] = inst_15046);

(statearr_15066_17978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (1))){
var state_15064__$1 = state_15064;
var statearr_15067_17979 = state_15064__$1;
(statearr_15067_17979[(2)] = null);

(statearr_15067_17979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (4))){
var inst_15027 = (state_15064[(7)]);
var inst_15027__$1 = (state_15064[(2)]);
var inst_15028 = (inst_15027__$1 == null);
var state_15064__$1 = (function (){var statearr_15070 = state_15064;
(statearr_15070[(7)] = inst_15027__$1);

return statearr_15070;
})();
if(cljs.core.truth_(inst_15028)){
var statearr_15071_17980 = state_15064__$1;
(statearr_15071_17980[(1)] = (5));

} else {
var statearr_15072_17981 = state_15064__$1;
(statearr_15072_17981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (6))){
var inst_15027 = (state_15064[(7)]);
var inst_15032 = (state_15064[(8)]);
var inst_15032__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15037 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15038 = [inst_15027,inst_15032__$1];
var inst_15039 = (new cljs.core.PersistentVector(null,2,(5),inst_15037,inst_15038,null));
var state_15064__$1 = (function (){var statearr_15073 = state_15064;
(statearr_15073[(8)] = inst_15032__$1);

return statearr_15073;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15064__$1,(8),jobs,inst_15039);
} else {
if((state_val_15065 === (3))){
var inst_15048 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15064__$1,inst_15048);
} else {
if((state_val_15065 === (2))){
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15064__$1,(4),from);
} else {
if((state_val_15065 === (9))){
var inst_15043 = (state_15064[(2)]);
var state_15064__$1 = (function (){var statearr_15074 = state_15064;
(statearr_15074[(9)] = inst_15043);

return statearr_15074;
})();
var statearr_15075_17982 = state_15064__$1;
(statearr_15075_17982[(2)] = null);

(statearr_15075_17982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (5))){
var inst_15030 = cljs.core.async.close_BANG_(jobs);
var state_15064__$1 = state_15064;
var statearr_15076_17983 = state_15064__$1;
(statearr_15076_17983[(2)] = inst_15030);

(statearr_15076_17983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (8))){
var inst_15032 = (state_15064[(8)]);
var inst_15041 = (state_15064[(2)]);
var state_15064__$1 = (function (){var statearr_15082 = state_15064;
(statearr_15082[(10)] = inst_15041);

return statearr_15082;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15064__$1,(9),results,inst_15032);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0 = (function (){
var statearr_15087 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__);

(statearr_15087[(1)] = (1));

return statearr_15087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1 = (function (state_15064){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_15064);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15088){var ex__13740__auto__ = e15088;
var statearr_15089_17984 = state_15064;
(statearr_15089_17984[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15064[(4)]))){
var statearr_15090_17985 = state_15064;
(statearr_15090_17985[(1)] = cljs.core.first((state_15064[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17986 = state_15064;
state_15064 = G__17986;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__ = function(state_15064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1.call(this,state_15064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_15104 = f__14324__auto__();
(statearr_15104[(6)] = c__14323__auto___17977);

return statearr_15104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


var c__14323__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_15209){
var state_val_15210 = (state_15209[(1)]);
if((state_val_15210 === (7))){
var inst_15205 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
var statearr_15211_17987 = state_15209__$1;
(statearr_15211_17987[(2)] = inst_15205);

(statearr_15211_17987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (20))){
var state_15209__$1 = state_15209;
var statearr_15212_17988 = state_15209__$1;
(statearr_15212_17988[(2)] = null);

(statearr_15212_17988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (1))){
var state_15209__$1 = state_15209;
var statearr_15213_17989 = state_15209__$1;
(statearr_15213_17989[(2)] = null);

(statearr_15213_17989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (4))){
var inst_15107 = (state_15209[(7)]);
var inst_15107__$1 = (state_15209[(2)]);
var inst_15110 = (inst_15107__$1 == null);
var state_15209__$1 = (function (){var statearr_15214 = state_15209;
(statearr_15214[(7)] = inst_15107__$1);

return statearr_15214;
})();
if(cljs.core.truth_(inst_15110)){
var statearr_15215_17990 = state_15209__$1;
(statearr_15215_17990[(1)] = (5));

} else {
var statearr_15216_17991 = state_15209__$1;
(statearr_15216_17991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (15))){
var inst_15122 = (state_15209[(8)]);
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15209__$1,(18),to,inst_15122);
} else {
if((state_val_15210 === (21))){
var inst_15200 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
var statearr_15217_17994 = state_15209__$1;
(statearr_15217_17994[(2)] = inst_15200);

(statearr_15217_17994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (13))){
var inst_15202 = (state_15209[(2)]);
var state_15209__$1 = (function (){var statearr_15218 = state_15209;
(statearr_15218[(9)] = inst_15202);

return statearr_15218;
})();
var statearr_15219_17995 = state_15209__$1;
(statearr_15219_17995[(2)] = null);

(statearr_15219_17995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (6))){
var inst_15107 = (state_15209[(7)]);
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15209__$1,(11),inst_15107);
} else {
if((state_val_15210 === (17))){
var inst_15195 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
if(cljs.core.truth_(inst_15195)){
var statearr_15220_17998 = state_15209__$1;
(statearr_15220_17998[(1)] = (19));

} else {
var statearr_15221_17999 = state_15209__$1;
(statearr_15221_17999[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (3))){
var inst_15207 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15209__$1,inst_15207);
} else {
if((state_val_15210 === (12))){
var inst_15119 = (state_15209[(10)]);
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15209__$1,(14),inst_15119);
} else {
if((state_val_15210 === (2))){
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15209__$1,(4),results);
} else {
if((state_val_15210 === (19))){
var state_15209__$1 = state_15209;
var statearr_15223_18000 = state_15209__$1;
(statearr_15223_18000[(2)] = null);

(statearr_15223_18000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (11))){
var inst_15119 = (state_15209[(2)]);
var state_15209__$1 = (function (){var statearr_15224 = state_15209;
(statearr_15224[(10)] = inst_15119);

return statearr_15224;
})();
var statearr_15225_18010 = state_15209__$1;
(statearr_15225_18010[(2)] = null);

(statearr_15225_18010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (9))){
var state_15209__$1 = state_15209;
var statearr_15228_18011 = state_15209__$1;
(statearr_15228_18011[(2)] = null);

(statearr_15228_18011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (5))){
var state_15209__$1 = state_15209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15236_18012 = state_15209__$1;
(statearr_15236_18012[(1)] = (8));

} else {
var statearr_15237_18013 = state_15209__$1;
(statearr_15237_18013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (14))){
var inst_15122 = (state_15209[(8)]);
var inst_15124 = (state_15209[(11)]);
var inst_15122__$1 = (state_15209[(2)]);
var inst_15123 = (inst_15122__$1 == null);
var inst_15124__$1 = cljs.core.not(inst_15123);
var state_15209__$1 = (function (){var statearr_15240 = state_15209;
(statearr_15240[(8)] = inst_15122__$1);

(statearr_15240[(11)] = inst_15124__$1);

return statearr_15240;
})();
if(inst_15124__$1){
var statearr_15241_18014 = state_15209__$1;
(statearr_15241_18014[(1)] = (15));

} else {
var statearr_15242_18015 = state_15209__$1;
(statearr_15242_18015[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (16))){
var inst_15124 = (state_15209[(11)]);
var state_15209__$1 = state_15209;
var statearr_15246_18016 = state_15209__$1;
(statearr_15246_18016[(2)] = inst_15124);

(statearr_15246_18016[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (10))){
var inst_15116 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
var statearr_15248_18017 = state_15209__$1;
(statearr_15248_18017[(2)] = inst_15116);

(statearr_15248_18017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (18))){
var inst_15192 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
var statearr_15257_18018 = state_15209__$1;
(statearr_15257_18018[(2)] = inst_15192);

(statearr_15257_18018[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (8))){
var inst_15113 = cljs.core.async.close_BANG_(to);
var state_15209__$1 = state_15209;
var statearr_15269_18019 = state_15209__$1;
(statearr_15269_18019[(2)] = inst_15113);

(statearr_15269_18019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0 = (function (){
var statearr_15270 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__);

(statearr_15270[(1)] = (1));

return statearr_15270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1 = (function (state_15209){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_15209);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15271){var ex__13740__auto__ = e15271;
var statearr_15272_18020 = state_15209;
(statearr_15272_18020[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15209[(4)]))){
var statearr_15276_18021 = state_15209;
(statearr_15276_18021[(1)] = cljs.core.first((state_15209[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18022 = state_15209;
state_15209 = G__18022;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__ = function(state_15209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1.call(this,state_15209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_15277 = f__14324__auto__();
(statearr_15277[(6)] = c__14323__auto__);

return statearr_15277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));

return c__14323__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15280 = arguments.length;
switch (G__15280) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15292 = arguments.length;
switch (G__15292) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15319 = arguments.length;
switch (G__15319) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14323__auto___18044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_15346){
var state_val_15347 = (state_15346[(1)]);
if((state_val_15347 === (7))){
var inst_15342 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
var statearr_15351_18045 = state_15346__$1;
(statearr_15351_18045[(2)] = inst_15342);

(statearr_15351_18045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (1))){
var state_15346__$1 = state_15346;
var statearr_15352_18046 = state_15346__$1;
(statearr_15352_18046[(2)] = null);

(statearr_15352_18046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (4))){
var inst_15323 = (state_15346[(7)]);
var inst_15323__$1 = (state_15346[(2)]);
var inst_15324 = (inst_15323__$1 == null);
var state_15346__$1 = (function (){var statearr_15357 = state_15346;
(statearr_15357[(7)] = inst_15323__$1);

return statearr_15357;
})();
if(cljs.core.truth_(inst_15324)){
var statearr_15358_18047 = state_15346__$1;
(statearr_15358_18047[(1)] = (5));

} else {
var statearr_15359_18048 = state_15346__$1;
(statearr_15359_18048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (13))){
var state_15346__$1 = state_15346;
var statearr_15360_18049 = state_15346__$1;
(statearr_15360_18049[(2)] = null);

(statearr_15360_18049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (6))){
var inst_15323 = (state_15346[(7)]);
var inst_15329 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15323) : p.call(null,inst_15323));
var state_15346__$1 = state_15346;
if(cljs.core.truth_(inst_15329)){
var statearr_15361_18050 = state_15346__$1;
(statearr_15361_18050[(1)] = (9));

} else {
var statearr_15362_18051 = state_15346__$1;
(statearr_15362_18051[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (3))){
var inst_15344 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15346__$1,inst_15344);
} else {
if((state_val_15347 === (12))){
var state_15346__$1 = state_15346;
var statearr_15363_18052 = state_15346__$1;
(statearr_15363_18052[(2)] = null);

(statearr_15363_18052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (2))){
var state_15346__$1 = state_15346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15346__$1,(4),ch);
} else {
if((state_val_15347 === (11))){
var inst_15323 = (state_15346[(7)]);
var inst_15333 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15346__$1,(8),inst_15333,inst_15323);
} else {
if((state_val_15347 === (9))){
var state_15346__$1 = state_15346;
var statearr_15368_18055 = state_15346__$1;
(statearr_15368_18055[(2)] = tc);

(statearr_15368_18055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (5))){
var inst_15326 = cljs.core.async.close_BANG_(tc);
var inst_15327 = cljs.core.async.close_BANG_(fc);
var state_15346__$1 = (function (){var statearr_15371 = state_15346;
(statearr_15371[(8)] = inst_15326);

return statearr_15371;
})();
var statearr_15373_18056 = state_15346__$1;
(statearr_15373_18056[(2)] = inst_15327);

(statearr_15373_18056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (14))){
var inst_15340 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
var statearr_15377_18057 = state_15346__$1;
(statearr_15377_18057[(2)] = inst_15340);

(statearr_15377_18057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (10))){
var state_15346__$1 = state_15346;
var statearr_15378_18058 = state_15346__$1;
(statearr_15378_18058[(2)] = fc);

(statearr_15378_18058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15347 === (8))){
var inst_15335 = (state_15346[(2)]);
var state_15346__$1 = state_15346;
if(cljs.core.truth_(inst_15335)){
var statearr_15379_18059 = state_15346__$1;
(statearr_15379_18059[(1)] = (12));

} else {
var statearr_15380_18060 = state_15346__$1;
(statearr_15380_18060[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13737__auto__ = null;
var cljs$core$async$state_machine__13737__auto____0 = (function (){
var statearr_15383 = [null,null,null,null,null,null,null,null,null];
(statearr_15383[(0)] = cljs$core$async$state_machine__13737__auto__);

(statearr_15383[(1)] = (1));

return statearr_15383;
});
var cljs$core$async$state_machine__13737__auto____1 = (function (state_15346){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_15346);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15384){var ex__13740__auto__ = e15384;
var statearr_15385_18061 = state_15346;
(statearr_15385_18061[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15346[(4)]))){
var statearr_15386_18062 = state_15346;
(statearr_15386_18062[(1)] = cljs.core.first((state_15346[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18063 = state_15346;
state_15346 = G__18063;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13737__auto__ = function(state_15346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13737__auto____1.call(this,state_15346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13737__auto____0;
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13737__auto____1;
return cljs$core$async$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_15387 = f__14324__auto__();
(statearr_15387[(6)] = c__14323__auto___18044);

return statearr_15387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14323__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_15426){
var state_val_15427 = (state_15426[(1)]);
if((state_val_15427 === (7))){
var inst_15414 = (state_15426[(2)]);
var state_15426__$1 = state_15426;
var statearr_15429_18066 = state_15426__$1;
(statearr_15429_18066[(2)] = inst_15414);

(statearr_15429_18066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (1))){
var inst_15392 = init;
var inst_15393 = inst_15392;
var state_15426__$1 = (function (){var statearr_15430 = state_15426;
(statearr_15430[(7)] = inst_15393);

return statearr_15430;
})();
var statearr_15431_18067 = state_15426__$1;
(statearr_15431_18067[(2)] = null);

(statearr_15431_18067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (4))){
var inst_15396 = (state_15426[(8)]);
var inst_15396__$1 = (state_15426[(2)]);
var inst_15398 = (inst_15396__$1 == null);
var state_15426__$1 = (function (){var statearr_15433 = state_15426;
(statearr_15433[(8)] = inst_15396__$1);

return statearr_15433;
})();
if(cljs.core.truth_(inst_15398)){
var statearr_15434_18068 = state_15426__$1;
(statearr_15434_18068[(1)] = (5));

} else {
var statearr_15435_18069 = state_15426__$1;
(statearr_15435_18069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (6))){
var inst_15396 = (state_15426[(8)]);
var inst_15401 = (state_15426[(9)]);
var inst_15393 = (state_15426[(7)]);
var inst_15401__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15393,inst_15396) : f.call(null,inst_15393,inst_15396));
var inst_15402 = cljs.core.reduced_QMARK_(inst_15401__$1);
var state_15426__$1 = (function (){var statearr_15436 = state_15426;
(statearr_15436[(9)] = inst_15401__$1);

return statearr_15436;
})();
if(inst_15402){
var statearr_15437_18070 = state_15426__$1;
(statearr_15437_18070[(1)] = (8));

} else {
var statearr_15438_18071 = state_15426__$1;
(statearr_15438_18071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (3))){
var inst_15416 = (state_15426[(2)]);
var state_15426__$1 = state_15426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15426__$1,inst_15416);
} else {
if((state_val_15427 === (2))){
var state_15426__$1 = state_15426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15426__$1,(4),ch);
} else {
if((state_val_15427 === (9))){
var inst_15401 = (state_15426[(9)]);
var inst_15393 = inst_15401;
var state_15426__$1 = (function (){var statearr_15439 = state_15426;
(statearr_15439[(7)] = inst_15393);

return statearr_15439;
})();
var statearr_15440_18072 = state_15426__$1;
(statearr_15440_18072[(2)] = null);

(statearr_15440_18072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (5))){
var inst_15393 = (state_15426[(7)]);
var state_15426__$1 = state_15426;
var statearr_15441_18078 = state_15426__$1;
(statearr_15441_18078[(2)] = inst_15393);

(statearr_15441_18078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (10))){
var inst_15412 = (state_15426[(2)]);
var state_15426__$1 = state_15426;
var statearr_15442_18079 = state_15426__$1;
(statearr_15442_18079[(2)] = inst_15412);

(statearr_15442_18079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (8))){
var inst_15401 = (state_15426[(9)]);
var inst_15404 = cljs.core.deref(inst_15401);
var state_15426__$1 = state_15426;
var statearr_15444_18080 = state_15426__$1;
(statearr_15444_18080[(2)] = inst_15404);

(statearr_15444_18080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13737__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13737__auto____0 = (function (){
var statearr_15445 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15445[(0)] = cljs$core$async$reduce_$_state_machine__13737__auto__);

(statearr_15445[(1)] = (1));

return statearr_15445;
});
var cljs$core$async$reduce_$_state_machine__13737__auto____1 = (function (state_15426){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_15426);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15446){var ex__13740__auto__ = e15446;
var statearr_15447_18081 = state_15426;
(statearr_15447_18081[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15426[(4)]))){
var statearr_15448_18082 = state_15426;
(statearr_15448_18082[(1)] = cljs.core.first((state_15426[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18083 = state_15426;
state_15426 = G__18083;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13737__auto__ = function(state_15426){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13737__auto____1.call(this,state_15426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13737__auto____0;
cljs$core$async$reduce_$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13737__auto____1;
return cljs$core$async$reduce_$_state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_15449 = f__14324__auto__();
(statearr_15449[(6)] = c__14323__auto__);

return statearr_15449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));

return c__14323__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14323__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_15456){
var state_val_15457 = (state_15456[(1)]);
if((state_val_15457 === (1))){
var inst_15451 = cljs.core.async.reduce(f__$1,init,ch);
var state_15456__$1 = state_15456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15456__$1,(2),inst_15451);
} else {
if((state_val_15457 === (2))){
var inst_15453 = (state_15456[(2)]);
var inst_15454 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15453) : f__$1.call(null,inst_15453));
var state_15456__$1 = state_15456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15456__$1,inst_15454);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13737__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13737__auto____0 = (function (){
var statearr_15470 = [null,null,null,null,null,null,null];
(statearr_15470[(0)] = cljs$core$async$transduce_$_state_machine__13737__auto__);

(statearr_15470[(1)] = (1));

return statearr_15470;
});
var cljs$core$async$transduce_$_state_machine__13737__auto____1 = (function (state_15456){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_15456);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15471){var ex__13740__auto__ = e15471;
var statearr_15472_18087 = state_15456;
(statearr_15472_18087[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15456[(4)]))){
var statearr_15473_18088 = state_15456;
(statearr_15473_18088[(1)] = cljs.core.first((state_15456[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18089 = state_15456;
state_15456 = G__18089;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13737__auto__ = function(state_15456){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13737__auto____1.call(this,state_15456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13737__auto____0;
cljs$core$async$transduce_$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13737__auto____1;
return cljs$core$async$transduce_$_state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_15474 = f__14324__auto__();
(statearr_15474[(6)] = c__14323__auto__);

return statearr_15474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));

return c__14323__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15476 = arguments.length;
switch (G__15476) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14323__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_15502){
var state_val_15503 = (state_15502[(1)]);
if((state_val_15503 === (7))){
var inst_15484 = (state_15502[(2)]);
var state_15502__$1 = state_15502;
var statearr_15504_18111 = state_15502__$1;
(statearr_15504_18111[(2)] = inst_15484);

(statearr_15504_18111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (1))){
var inst_15478 = cljs.core.seq(coll);
var inst_15479 = inst_15478;
var state_15502__$1 = (function (){var statearr_15505 = state_15502;
(statearr_15505[(7)] = inst_15479);

return statearr_15505;
})();
var statearr_15506_18112 = state_15502__$1;
(statearr_15506_18112[(2)] = null);

(statearr_15506_18112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (4))){
var inst_15479 = (state_15502[(7)]);
var inst_15482 = cljs.core.first(inst_15479);
var state_15502__$1 = state_15502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15502__$1,(7),ch,inst_15482);
} else {
if((state_val_15503 === (13))){
var inst_15496 = (state_15502[(2)]);
var state_15502__$1 = state_15502;
var statearr_15520_18113 = state_15502__$1;
(statearr_15520_18113[(2)] = inst_15496);

(statearr_15520_18113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (6))){
var inst_15487 = (state_15502[(2)]);
var state_15502__$1 = state_15502;
if(cljs.core.truth_(inst_15487)){
var statearr_15522_18118 = state_15502__$1;
(statearr_15522_18118[(1)] = (8));

} else {
var statearr_15523_18120 = state_15502__$1;
(statearr_15523_18120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (3))){
var inst_15500 = (state_15502[(2)]);
var state_15502__$1 = state_15502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15502__$1,inst_15500);
} else {
if((state_val_15503 === (12))){
var state_15502__$1 = state_15502;
var statearr_15524_18125 = state_15502__$1;
(statearr_15524_18125[(2)] = null);

(statearr_15524_18125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (2))){
var inst_15479 = (state_15502[(7)]);
var state_15502__$1 = state_15502;
if(cljs.core.truth_(inst_15479)){
var statearr_15525_18126 = state_15502__$1;
(statearr_15525_18126[(1)] = (4));

} else {
var statearr_15526_18127 = state_15502__$1;
(statearr_15526_18127[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (11))){
var inst_15493 = cljs.core.async.close_BANG_(ch);
var state_15502__$1 = state_15502;
var statearr_15527_18128 = state_15502__$1;
(statearr_15527_18128[(2)] = inst_15493);

(statearr_15527_18128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (9))){
var state_15502__$1 = state_15502;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15528_18130 = state_15502__$1;
(statearr_15528_18130[(1)] = (11));

} else {
var statearr_15531_18131 = state_15502__$1;
(statearr_15531_18131[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (5))){
var inst_15479 = (state_15502[(7)]);
var state_15502__$1 = state_15502;
var statearr_15532_18132 = state_15502__$1;
(statearr_15532_18132[(2)] = inst_15479);

(statearr_15532_18132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (10))){
var inst_15498 = (state_15502[(2)]);
var state_15502__$1 = state_15502;
var statearr_15536_18133 = state_15502__$1;
(statearr_15536_18133[(2)] = inst_15498);

(statearr_15536_18133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (8))){
var inst_15479 = (state_15502[(7)]);
var inst_15489 = cljs.core.next(inst_15479);
var inst_15479__$1 = inst_15489;
var state_15502__$1 = (function (){var statearr_15540 = state_15502;
(statearr_15540[(7)] = inst_15479__$1);

return statearr_15540;
})();
var statearr_15541_18134 = state_15502__$1;
(statearr_15541_18134[(2)] = null);

(statearr_15541_18134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13737__auto__ = null;
var cljs$core$async$state_machine__13737__auto____0 = (function (){
var statearr_15546 = [null,null,null,null,null,null,null,null];
(statearr_15546[(0)] = cljs$core$async$state_machine__13737__auto__);

(statearr_15546[(1)] = (1));

return statearr_15546;
});
var cljs$core$async$state_machine__13737__auto____1 = (function (state_15502){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_15502);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15547){var ex__13740__auto__ = e15547;
var statearr_15548_18150 = state_15502;
(statearr_15548_18150[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15502[(4)]))){
var statearr_15549_18151 = state_15502;
(statearr_15549_18151[(1)] = cljs.core.first((state_15502[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18152 = state_15502;
state_15502 = G__18152;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13737__auto__ = function(state_15502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13737__auto____1.call(this,state_15502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13737__auto____0;
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13737__auto____1;
return cljs$core$async$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_15551 = f__14324__auto__();
(statearr_15551[(6)] = c__14323__auto__);

return statearr_15551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));

return c__14323__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15559 = arguments.length;
switch (G__15559) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18161 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18161(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18164 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18164(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18165 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18165(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18170 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18170(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15574 = (function (ch,cs,meta15575){
this.ch = ch;
this.cs = cs;
this.meta15575 = meta15575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15576,meta15575__$1){
var self__ = this;
var _15576__$1 = this;
return (new cljs.core.async.t_cljs$core$async15574(self__.ch,self__.cs,meta15575__$1));
}));

(cljs.core.async.t_cljs$core$async15574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15576){
var self__ = this;
var _15576__$1 = this;
return self__.meta15575;
}));

(cljs.core.async.t_cljs$core$async15574.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15574.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15574.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15574.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15574.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15574.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15575","meta15575",-645608385,null)], null);
}));

(cljs.core.async.t_cljs$core$async15574.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15574");

(cljs.core.async.t_cljs$core$async15574.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15574");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15574.
 */
cljs.core.async.__GT_t_cljs$core$async15574 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15574(ch__$1,cs__$1,meta15575){
return (new cljs.core.async.t_cljs$core$async15574(ch__$1,cs__$1,meta15575));
});

}

return (new cljs.core.async.t_cljs$core$async15574(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14323__auto___18171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_15739){
var state_val_15740 = (state_15739[(1)]);
if((state_val_15740 === (7))){
var inst_15734 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_15742_18172 = state_15739__$1;
(statearr_15742_18172[(2)] = inst_15734);

(statearr_15742_18172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (20))){
var inst_15630 = (state_15739[(7)]);
var inst_15642 = cljs.core.first(inst_15630);
var inst_15643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15642,(0),null);
var inst_15644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15642,(1),null);
var state_15739__$1 = (function (){var statearr_15744 = state_15739;
(statearr_15744[(8)] = inst_15643);

return statearr_15744;
})();
if(cljs.core.truth_(inst_15644)){
var statearr_15745_18173 = state_15739__$1;
(statearr_15745_18173[(1)] = (22));

} else {
var statearr_15746_18174 = state_15739__$1;
(statearr_15746_18174[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (27))){
var inst_15675 = (state_15739[(9)]);
var inst_15593 = (state_15739[(10)]);
var inst_15673 = (state_15739[(11)]);
var inst_15680 = (state_15739[(12)]);
var inst_15680__$1 = cljs.core._nth(inst_15673,inst_15675);
var inst_15681 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15680__$1,inst_15593,done);
var state_15739__$1 = (function (){var statearr_15789 = state_15739;
(statearr_15789[(12)] = inst_15680__$1);

return statearr_15789;
})();
if(cljs.core.truth_(inst_15681)){
var statearr_15790_18175 = state_15739__$1;
(statearr_15790_18175[(1)] = (30));

} else {
var statearr_15791_18176 = state_15739__$1;
(statearr_15791_18176[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (1))){
var state_15739__$1 = state_15739;
var statearr_15792_18183 = state_15739__$1;
(statearr_15792_18183[(2)] = null);

(statearr_15792_18183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (24))){
var inst_15630 = (state_15739[(7)]);
var inst_15649 = (state_15739[(2)]);
var inst_15651 = cljs.core.next(inst_15630);
var inst_15602 = inst_15651;
var inst_15603 = null;
var inst_15604 = (0);
var inst_15605 = (0);
var state_15739__$1 = (function (){var statearr_15795 = state_15739;
(statearr_15795[(13)] = inst_15604);

(statearr_15795[(14)] = inst_15603);

(statearr_15795[(15)] = inst_15649);

(statearr_15795[(16)] = inst_15605);

(statearr_15795[(17)] = inst_15602);

return statearr_15795;
})();
var statearr_15798_18184 = state_15739__$1;
(statearr_15798_18184[(2)] = null);

(statearr_15798_18184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (39))){
var state_15739__$1 = state_15739;
var statearr_15802_18185 = state_15739__$1;
(statearr_15802_18185[(2)] = null);

(statearr_15802_18185[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (4))){
var inst_15593 = (state_15739[(10)]);
var inst_15593__$1 = (state_15739[(2)]);
var inst_15594 = (inst_15593__$1 == null);
var state_15739__$1 = (function (){var statearr_15803 = state_15739;
(statearr_15803[(10)] = inst_15593__$1);

return statearr_15803;
})();
if(cljs.core.truth_(inst_15594)){
var statearr_15804_18186 = state_15739__$1;
(statearr_15804_18186[(1)] = (5));

} else {
var statearr_15805_18187 = state_15739__$1;
(statearr_15805_18187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (15))){
var inst_15604 = (state_15739[(13)]);
var inst_15603 = (state_15739[(14)]);
var inst_15605 = (state_15739[(16)]);
var inst_15602 = (state_15739[(17)]);
var inst_15626 = (state_15739[(2)]);
var inst_15627 = (inst_15605 + (1));
var tmp15799 = inst_15604;
var tmp15800 = inst_15603;
var tmp15801 = inst_15602;
var inst_15602__$1 = tmp15801;
var inst_15603__$1 = tmp15800;
var inst_15604__$1 = tmp15799;
var inst_15605__$1 = inst_15627;
var state_15739__$1 = (function (){var statearr_15806 = state_15739;
(statearr_15806[(18)] = inst_15626);

(statearr_15806[(13)] = inst_15604__$1);

(statearr_15806[(14)] = inst_15603__$1);

(statearr_15806[(16)] = inst_15605__$1);

(statearr_15806[(17)] = inst_15602__$1);

return statearr_15806;
})();
var statearr_15807_18188 = state_15739__$1;
(statearr_15807_18188[(2)] = null);

(statearr_15807_18188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (21))){
var inst_15654 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_15811_18189 = state_15739__$1;
(statearr_15811_18189[(2)] = inst_15654);

(statearr_15811_18189[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (31))){
var inst_15680 = (state_15739[(12)]);
var inst_15684 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15680);
var state_15739__$1 = state_15739;
var statearr_15813_18191 = state_15739__$1;
(statearr_15813_18191[(2)] = inst_15684);

(statearr_15813_18191[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (32))){
var inst_15675 = (state_15739[(9)]);
var inst_15673 = (state_15739[(11)]);
var inst_15674 = (state_15739[(19)]);
var inst_15672 = (state_15739[(20)]);
var inst_15686 = (state_15739[(2)]);
var inst_15690 = (inst_15675 + (1));
var tmp15808 = inst_15673;
var tmp15809 = inst_15674;
var tmp15810 = inst_15672;
var inst_15672__$1 = tmp15810;
var inst_15673__$1 = tmp15808;
var inst_15674__$1 = tmp15809;
var inst_15675__$1 = inst_15690;
var state_15739__$1 = (function (){var statearr_15814 = state_15739;
(statearr_15814[(9)] = inst_15675__$1);

(statearr_15814[(11)] = inst_15673__$1);

(statearr_15814[(19)] = inst_15674__$1);

(statearr_15814[(21)] = inst_15686);

(statearr_15814[(20)] = inst_15672__$1);

return statearr_15814;
})();
var statearr_15815_18199 = state_15739__$1;
(statearr_15815_18199[(2)] = null);

(statearr_15815_18199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (40))){
var inst_15703 = (state_15739[(22)]);
var inst_15707 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15703);
var state_15739__$1 = state_15739;
var statearr_15816_18200 = state_15739__$1;
(statearr_15816_18200[(2)] = inst_15707);

(statearr_15816_18200[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (33))){
var inst_15693 = (state_15739[(23)]);
var inst_15696 = cljs.core.chunked_seq_QMARK_(inst_15693);
var state_15739__$1 = state_15739;
if(inst_15696){
var statearr_15826_18201 = state_15739__$1;
(statearr_15826_18201[(1)] = (36));

} else {
var statearr_15827_18238 = state_15739__$1;
(statearr_15827_18238[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (13))){
var inst_15619 = (state_15739[(24)]);
var inst_15623 = cljs.core.async.close_BANG_(inst_15619);
var state_15739__$1 = state_15739;
var statearr_15828_18242 = state_15739__$1;
(statearr_15828_18242[(2)] = inst_15623);

(statearr_15828_18242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (22))){
var inst_15643 = (state_15739[(8)]);
var inst_15646 = cljs.core.async.close_BANG_(inst_15643);
var state_15739__$1 = state_15739;
var statearr_15846_18243 = state_15739__$1;
(statearr_15846_18243[(2)] = inst_15646);

(statearr_15846_18243[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (36))){
var inst_15693 = (state_15739[(23)]);
var inst_15698 = cljs.core.chunk_first(inst_15693);
var inst_15699 = cljs.core.chunk_rest(inst_15693);
var inst_15700 = cljs.core.count(inst_15698);
var inst_15672 = inst_15699;
var inst_15673 = inst_15698;
var inst_15674 = inst_15700;
var inst_15675 = (0);
var state_15739__$1 = (function (){var statearr_15848 = state_15739;
(statearr_15848[(9)] = inst_15675);

(statearr_15848[(11)] = inst_15673);

(statearr_15848[(19)] = inst_15674);

(statearr_15848[(20)] = inst_15672);

return statearr_15848;
})();
var statearr_15849_18244 = state_15739__$1;
(statearr_15849_18244[(2)] = null);

(statearr_15849_18244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (41))){
var inst_15693 = (state_15739[(23)]);
var inst_15709 = (state_15739[(2)]);
var inst_15710 = cljs.core.next(inst_15693);
var inst_15672 = inst_15710;
var inst_15673 = null;
var inst_15674 = (0);
var inst_15675 = (0);
var state_15739__$1 = (function (){var statearr_15853 = state_15739;
(statearr_15853[(9)] = inst_15675);

(statearr_15853[(11)] = inst_15673);

(statearr_15853[(19)] = inst_15674);

(statearr_15853[(20)] = inst_15672);

(statearr_15853[(25)] = inst_15709);

return statearr_15853;
})();
var statearr_15856_18245 = state_15739__$1;
(statearr_15856_18245[(2)] = null);

(statearr_15856_18245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (43))){
var state_15739__$1 = state_15739;
var statearr_15858_18246 = state_15739__$1;
(statearr_15858_18246[(2)] = null);

(statearr_15858_18246[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (29))){
var inst_15718 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_15859_18247 = state_15739__$1;
(statearr_15859_18247[(2)] = inst_15718);

(statearr_15859_18247[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (44))){
var inst_15727 = (state_15739[(2)]);
var state_15739__$1 = (function (){var statearr_15861 = state_15739;
(statearr_15861[(26)] = inst_15727);

return statearr_15861;
})();
var statearr_15862_18248 = state_15739__$1;
(statearr_15862_18248[(2)] = null);

(statearr_15862_18248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (6))){
var inst_15664 = (state_15739[(27)]);
var inst_15663 = cljs.core.deref(cs);
var inst_15664__$1 = cljs.core.keys(inst_15663);
var inst_15665 = cljs.core.count(inst_15664__$1);
var inst_15666 = cljs.core.reset_BANG_(dctr,inst_15665);
var inst_15671 = cljs.core.seq(inst_15664__$1);
var inst_15672 = inst_15671;
var inst_15673 = null;
var inst_15674 = (0);
var inst_15675 = (0);
var state_15739__$1 = (function (){var statearr_15879 = state_15739;
(statearr_15879[(9)] = inst_15675);

(statearr_15879[(11)] = inst_15673);

(statearr_15879[(27)] = inst_15664__$1);

(statearr_15879[(19)] = inst_15674);

(statearr_15879[(28)] = inst_15666);

(statearr_15879[(20)] = inst_15672);

return statearr_15879;
})();
var statearr_15880_18253 = state_15739__$1;
(statearr_15880_18253[(2)] = null);

(statearr_15880_18253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (28))){
var inst_15693 = (state_15739[(23)]);
var inst_15672 = (state_15739[(20)]);
var inst_15693__$1 = cljs.core.seq(inst_15672);
var state_15739__$1 = (function (){var statearr_15881 = state_15739;
(statearr_15881[(23)] = inst_15693__$1);

return statearr_15881;
})();
if(inst_15693__$1){
var statearr_15882_18254 = state_15739__$1;
(statearr_15882_18254[(1)] = (33));

} else {
var statearr_15883_18255 = state_15739__$1;
(statearr_15883_18255[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (25))){
var inst_15675 = (state_15739[(9)]);
var inst_15674 = (state_15739[(19)]);
var inst_15677 = (inst_15675 < inst_15674);
var inst_15678 = inst_15677;
var state_15739__$1 = state_15739;
if(cljs.core.truth_(inst_15678)){
var statearr_15884_18258 = state_15739__$1;
(statearr_15884_18258[(1)] = (27));

} else {
var statearr_15885_18260 = state_15739__$1;
(statearr_15885_18260[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (34))){
var state_15739__$1 = state_15739;
var statearr_15886_18262 = state_15739__$1;
(statearr_15886_18262[(2)] = null);

(statearr_15886_18262[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (17))){
var state_15739__$1 = state_15739;
var statearr_15887_18299 = state_15739__$1;
(statearr_15887_18299[(2)] = null);

(statearr_15887_18299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (3))){
var inst_15736 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15739__$1,inst_15736);
} else {
if((state_val_15740 === (12))){
var inst_15659 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_15888_18300 = state_15739__$1;
(statearr_15888_18300[(2)] = inst_15659);

(statearr_15888_18300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (2))){
var state_15739__$1 = state_15739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15739__$1,(4),ch);
} else {
if((state_val_15740 === (23))){
var state_15739__$1 = state_15739;
var statearr_15889_18301 = state_15739__$1;
(statearr_15889_18301[(2)] = null);

(statearr_15889_18301[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (35))){
var inst_15716 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_15890_18302 = state_15739__$1;
(statearr_15890_18302[(2)] = inst_15716);

(statearr_15890_18302[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (19))){
var inst_15630 = (state_15739[(7)]);
var inst_15634 = cljs.core.chunk_first(inst_15630);
var inst_15635 = cljs.core.chunk_rest(inst_15630);
var inst_15636 = cljs.core.count(inst_15634);
var inst_15602 = inst_15635;
var inst_15603 = inst_15634;
var inst_15604 = inst_15636;
var inst_15605 = (0);
var state_15739__$1 = (function (){var statearr_15891 = state_15739;
(statearr_15891[(13)] = inst_15604);

(statearr_15891[(14)] = inst_15603);

(statearr_15891[(16)] = inst_15605);

(statearr_15891[(17)] = inst_15602);

return statearr_15891;
})();
var statearr_15892_18303 = state_15739__$1;
(statearr_15892_18303[(2)] = null);

(statearr_15892_18303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (11))){
var inst_15630 = (state_15739[(7)]);
var inst_15602 = (state_15739[(17)]);
var inst_15630__$1 = cljs.core.seq(inst_15602);
var state_15739__$1 = (function (){var statearr_15930 = state_15739;
(statearr_15930[(7)] = inst_15630__$1);

return statearr_15930;
})();
if(inst_15630__$1){
var statearr_15931_18304 = state_15739__$1;
(statearr_15931_18304[(1)] = (16));

} else {
var statearr_15932_18305 = state_15739__$1;
(statearr_15932_18305[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (9))){
var inst_15661 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_15934_18306 = state_15739__$1;
(statearr_15934_18306[(2)] = inst_15661);

(statearr_15934_18306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (5))){
var inst_15600 = cljs.core.deref(cs);
var inst_15601 = cljs.core.seq(inst_15600);
var inst_15602 = inst_15601;
var inst_15603 = null;
var inst_15604 = (0);
var inst_15605 = (0);
var state_15739__$1 = (function (){var statearr_15973 = state_15739;
(statearr_15973[(13)] = inst_15604);

(statearr_15973[(14)] = inst_15603);

(statearr_15973[(16)] = inst_15605);

(statearr_15973[(17)] = inst_15602);

return statearr_15973;
})();
var statearr_15974_18308 = state_15739__$1;
(statearr_15974_18308[(2)] = null);

(statearr_15974_18308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (14))){
var state_15739__$1 = state_15739;
var statearr_15975_18310 = state_15739__$1;
(statearr_15975_18310[(2)] = null);

(statearr_15975_18310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (45))){
var inst_15724 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_15980_18311 = state_15739__$1;
(statearr_15980_18311[(2)] = inst_15724);

(statearr_15980_18311[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (26))){
var inst_15664 = (state_15739[(27)]);
var inst_15720 = (state_15739[(2)]);
var inst_15721 = cljs.core.seq(inst_15664);
var state_15739__$1 = (function (){var statearr_15981 = state_15739;
(statearr_15981[(29)] = inst_15720);

return statearr_15981;
})();
if(inst_15721){
var statearr_15982_18315 = state_15739__$1;
(statearr_15982_18315[(1)] = (42));

} else {
var statearr_15983_18316 = state_15739__$1;
(statearr_15983_18316[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (16))){
var inst_15630 = (state_15739[(7)]);
var inst_15632 = cljs.core.chunked_seq_QMARK_(inst_15630);
var state_15739__$1 = state_15739;
if(inst_15632){
var statearr_15991_18317 = state_15739__$1;
(statearr_15991_18317[(1)] = (19));

} else {
var statearr_15992_18318 = state_15739__$1;
(statearr_15992_18318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (38))){
var inst_15713 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_16049_18322 = state_15739__$1;
(statearr_16049_18322[(2)] = inst_15713);

(statearr_16049_18322[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (30))){
var state_15739__$1 = state_15739;
var statearr_16050_18323 = state_15739__$1;
(statearr_16050_18323[(2)] = null);

(statearr_16050_18323[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (10))){
var inst_15603 = (state_15739[(14)]);
var inst_15605 = (state_15739[(16)]);
var inst_15614 = cljs.core._nth(inst_15603,inst_15605);
var inst_15619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15614,(0),null);
var inst_15620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15614,(1),null);
var state_15739__$1 = (function (){var statearr_16051 = state_15739;
(statearr_16051[(24)] = inst_15619);

return statearr_16051;
})();
if(cljs.core.truth_(inst_15620)){
var statearr_16052_18326 = state_15739__$1;
(statearr_16052_18326[(1)] = (13));

} else {
var statearr_16053_18327 = state_15739__$1;
(statearr_16053_18327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (18))){
var inst_15657 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_16082_18329 = state_15739__$1;
(statearr_16082_18329[(2)] = inst_15657);

(statearr_16082_18329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (42))){
var state_15739__$1 = state_15739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15739__$1,(45),dchan);
} else {
if((state_val_15740 === (37))){
var inst_15593 = (state_15739[(10)]);
var inst_15703 = (state_15739[(22)]);
var inst_15693 = (state_15739[(23)]);
var inst_15703__$1 = cljs.core.first(inst_15693);
var inst_15704 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15703__$1,inst_15593,done);
var state_15739__$1 = (function (){var statearr_16083 = state_15739;
(statearr_16083[(22)] = inst_15703__$1);

return statearr_16083;
})();
if(cljs.core.truth_(inst_15704)){
var statearr_16084_18331 = state_15739__$1;
(statearr_16084_18331[(1)] = (39));

} else {
var statearr_16085_18332 = state_15739__$1;
(statearr_16085_18332[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (8))){
var inst_15604 = (state_15739[(13)]);
var inst_15605 = (state_15739[(16)]);
var inst_15607 = (inst_15605 < inst_15604);
var inst_15608 = inst_15607;
var state_15739__$1 = state_15739;
if(cljs.core.truth_(inst_15608)){
var statearr_16088_18333 = state_15739__$1;
(statearr_16088_18333[(1)] = (10));

} else {
var statearr_16090_18334 = state_15739__$1;
(statearr_16090_18334[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13737__auto__ = null;
var cljs$core$async$mult_$_state_machine__13737__auto____0 = (function (){
var statearr_16093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16093[(0)] = cljs$core$async$mult_$_state_machine__13737__auto__);

(statearr_16093[(1)] = (1));

return statearr_16093;
});
var cljs$core$async$mult_$_state_machine__13737__auto____1 = (function (state_15739){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_15739);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e16094){var ex__13740__auto__ = e16094;
var statearr_16095_18336 = state_15739;
(statearr_16095_18336[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15739[(4)]))){
var statearr_16146_18337 = state_15739;
(statearr_16146_18337[(1)] = cljs.core.first((state_15739[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18338 = state_15739;
state_15739 = G__18338;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13737__auto__ = function(state_15739){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13737__auto____1.call(this,state_15739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13737__auto____0;
cljs$core$async$mult_$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13737__auto____1;
return cljs$core$async$mult_$_state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_16147 = f__14324__auto__();
(statearr_16147[(6)] = c__14323__auto___18171);

return statearr_16147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16149 = arguments.length;
switch (G__16149) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18341 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18341(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18342 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18342(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18369 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18369(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18374 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18374(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18375 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18375(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18383 = arguments.length;
var i__5770__auto___18384 = (0);
while(true){
if((i__5770__auto___18384 < len__5769__auto___18383)){
args__5775__auto__.push((arguments[i__5770__auto___18384]));

var G__18385 = (i__5770__auto___18384 + (1));
i__5770__auto___18384 = G__18385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16205){
var map__16209 = p__16205;
var map__16209__$1 = cljs.core.__destructure_map(map__16209);
var opts = map__16209__$1;
var statearr_16210_18392 = state;
(statearr_16210_18392[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16214_18393 = state;
(statearr_16214_18393[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16217_18401 = state;
(statearr_16217_18401[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16196){
var G__16197 = cljs.core.first(seq16196);
var seq16196__$1 = cljs.core.next(seq16196);
var G__16198 = cljs.core.first(seq16196__$1);
var seq16196__$2 = cljs.core.next(seq16196__$1);
var G__16199 = cljs.core.first(seq16196__$2);
var seq16196__$3 = cljs.core.next(seq16196__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16197,G__16198,G__16199,seq16196__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16242 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16243){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16243 = meta16243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16244,meta16243__$1){
var self__ = this;
var _16244__$1 = this;
return (new cljs.core.async.t_cljs$core$async16242(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16243__$1));
}));

(cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16244){
var self__ = this;
var _16244__$1 = this;
return self__.meta16243;
}));

(cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16243","meta16243",-487028473,null)], null);
}));

(cljs.core.async.t_cljs$core$async16242.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16242");

(cljs.core.async.t_cljs$core$async16242.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16242");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16242.
 */
cljs.core.async.__GT_t_cljs$core$async16242 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16242(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16243){
return (new cljs.core.async.t_cljs$core$async16242(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16243));
});

}

return (new cljs.core.async.t_cljs$core$async16242(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14323__auto___18479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_16376){
var state_val_16377 = (state_16376[(1)]);
if((state_val_16377 === (7))){
var inst_16333 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
if(cljs.core.truth_(inst_16333)){
var statearr_16380_18481 = state_16376__$1;
(statearr_16380_18481[(1)] = (8));

} else {
var statearr_16381_18482 = state_16376__$1;
(statearr_16381_18482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (20))){
var inst_16325 = (state_16376[(7)]);
var state_16376__$1 = state_16376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16376__$1,(23),out,inst_16325);
} else {
if((state_val_16377 === (1))){
var inst_16307 = calc_state();
var inst_16308 = cljs.core.__destructure_map(inst_16307);
var inst_16309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16308,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16308,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16308,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16312 = inst_16307;
var state_16376__$1 = (function (){var statearr_16382 = state_16376;
(statearr_16382[(8)] = inst_16309);

(statearr_16382[(9)] = inst_16310);

(statearr_16382[(10)] = inst_16311);

(statearr_16382[(11)] = inst_16312);

return statearr_16382;
})();
var statearr_16383_18483 = state_16376__$1;
(statearr_16383_18483[(2)] = null);

(statearr_16383_18483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (24))){
var inst_16315 = (state_16376[(12)]);
var inst_16312 = inst_16315;
var state_16376__$1 = (function (){var statearr_16384 = state_16376;
(statearr_16384[(11)] = inst_16312);

return statearr_16384;
})();
var statearr_16385_18484 = state_16376__$1;
(statearr_16385_18484[(2)] = null);

(statearr_16385_18484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (4))){
var inst_16328 = (state_16376[(13)]);
var inst_16325 = (state_16376[(7)]);
var inst_16324 = (state_16376[(2)]);
var inst_16325__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16324,(0),null);
var inst_16327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16324,(1),null);
var inst_16328__$1 = (inst_16325__$1 == null);
var state_16376__$1 = (function (){var statearr_16386 = state_16376;
(statearr_16386[(13)] = inst_16328__$1);

(statearr_16386[(7)] = inst_16325__$1);

(statearr_16386[(14)] = inst_16327);

return statearr_16386;
})();
if(cljs.core.truth_(inst_16328__$1)){
var statearr_16387_18485 = state_16376__$1;
(statearr_16387_18485[(1)] = (5));

} else {
var statearr_16388_18486 = state_16376__$1;
(statearr_16388_18486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (15))){
var inst_16317 = (state_16376[(15)]);
var inst_16348 = (state_16376[(16)]);
var inst_16348__$1 = cljs.core.empty_QMARK_(inst_16317);
var state_16376__$1 = (function (){var statearr_16408 = state_16376;
(statearr_16408[(16)] = inst_16348__$1);

return statearr_16408;
})();
if(inst_16348__$1){
var statearr_16409_18487 = state_16376__$1;
(statearr_16409_18487[(1)] = (17));

} else {
var statearr_16410_18488 = state_16376__$1;
(statearr_16410_18488[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (21))){
var inst_16315 = (state_16376[(12)]);
var inst_16312 = inst_16315;
var state_16376__$1 = (function (){var statearr_16411 = state_16376;
(statearr_16411[(11)] = inst_16312);

return statearr_16411;
})();
var statearr_16412_18489 = state_16376__$1;
(statearr_16412_18489[(2)] = null);

(statearr_16412_18489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (13))){
var inst_16340 = (state_16376[(2)]);
var inst_16341 = calc_state();
var inst_16312 = inst_16341;
var state_16376__$1 = (function (){var statearr_16414 = state_16376;
(statearr_16414[(17)] = inst_16340);

(statearr_16414[(11)] = inst_16312);

return statearr_16414;
})();
var statearr_16415_18490 = state_16376__$1;
(statearr_16415_18490[(2)] = null);

(statearr_16415_18490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (22))){
var inst_16368 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
var statearr_16417_18491 = state_16376__$1;
(statearr_16417_18491[(2)] = inst_16368);

(statearr_16417_18491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (6))){
var inst_16327 = (state_16376[(14)]);
var inst_16331 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16327,change);
var state_16376__$1 = state_16376;
var statearr_16419_18492 = state_16376__$1;
(statearr_16419_18492[(2)] = inst_16331);

(statearr_16419_18492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (25))){
var state_16376__$1 = state_16376;
var statearr_16420_18493 = state_16376__$1;
(statearr_16420_18493[(2)] = null);

(statearr_16420_18493[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (17))){
var inst_16318 = (state_16376[(18)]);
var inst_16327 = (state_16376[(14)]);
var inst_16350 = (inst_16318.cljs$core$IFn$_invoke$arity$1 ? inst_16318.cljs$core$IFn$_invoke$arity$1(inst_16327) : inst_16318.call(null,inst_16327));
var inst_16351 = cljs.core.not(inst_16350);
var state_16376__$1 = state_16376;
var statearr_16422_18494 = state_16376__$1;
(statearr_16422_18494[(2)] = inst_16351);

(statearr_16422_18494[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (3))){
var inst_16372 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16376__$1,inst_16372);
} else {
if((state_val_16377 === (12))){
var state_16376__$1 = state_16376;
var statearr_16424_18506 = state_16376__$1;
(statearr_16424_18506[(2)] = null);

(statearr_16424_18506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (2))){
var inst_16315 = (state_16376[(12)]);
var inst_16312 = (state_16376[(11)]);
var inst_16315__$1 = cljs.core.__destructure_map(inst_16312);
var inst_16317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16315__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16315__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16315__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16376__$1 = (function (){var statearr_16427 = state_16376;
(statearr_16427[(12)] = inst_16315__$1);

(statearr_16427[(15)] = inst_16317);

(statearr_16427[(18)] = inst_16318);

return statearr_16427;
})();
return cljs.core.async.ioc_alts_BANG_(state_16376__$1,(4),inst_16319);
} else {
if((state_val_16377 === (23))){
var inst_16359 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
if(cljs.core.truth_(inst_16359)){
var statearr_16428_18507 = state_16376__$1;
(statearr_16428_18507[(1)] = (24));

} else {
var statearr_16429_18508 = state_16376__$1;
(statearr_16429_18508[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (19))){
var inst_16354 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
var statearr_16430_18509 = state_16376__$1;
(statearr_16430_18509[(2)] = inst_16354);

(statearr_16430_18509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (11))){
var inst_16327 = (state_16376[(14)]);
var inst_16337 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16327);
var state_16376__$1 = state_16376;
var statearr_16431_18510 = state_16376__$1;
(statearr_16431_18510[(2)] = inst_16337);

(statearr_16431_18510[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (9))){
var inst_16317 = (state_16376[(15)]);
var inst_16344 = (state_16376[(19)]);
var inst_16327 = (state_16376[(14)]);
var inst_16344__$1 = (inst_16317.cljs$core$IFn$_invoke$arity$1 ? inst_16317.cljs$core$IFn$_invoke$arity$1(inst_16327) : inst_16317.call(null,inst_16327));
var state_16376__$1 = (function (){var statearr_16502 = state_16376;
(statearr_16502[(19)] = inst_16344__$1);

return statearr_16502;
})();
if(cljs.core.truth_(inst_16344__$1)){
var statearr_16503_18511 = state_16376__$1;
(statearr_16503_18511[(1)] = (14));

} else {
var statearr_16504_18512 = state_16376__$1;
(statearr_16504_18512[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (5))){
var inst_16328 = (state_16376[(13)]);
var state_16376__$1 = state_16376;
var statearr_16505_18514 = state_16376__$1;
(statearr_16505_18514[(2)] = inst_16328);

(statearr_16505_18514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (14))){
var inst_16344 = (state_16376[(19)]);
var state_16376__$1 = state_16376;
var statearr_16506_18515 = state_16376__$1;
(statearr_16506_18515[(2)] = inst_16344);

(statearr_16506_18515[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (26))){
var inst_16364 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
var statearr_16507_18516 = state_16376__$1;
(statearr_16507_18516[(2)] = inst_16364);

(statearr_16507_18516[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (16))){
var inst_16356 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
if(cljs.core.truth_(inst_16356)){
var statearr_16508_18517 = state_16376__$1;
(statearr_16508_18517[(1)] = (20));

} else {
var statearr_16509_18518 = state_16376__$1;
(statearr_16509_18518[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (10))){
var inst_16370 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
var statearr_16510_18519 = state_16376__$1;
(statearr_16510_18519[(2)] = inst_16370);

(statearr_16510_18519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (18))){
var inst_16348 = (state_16376[(16)]);
var state_16376__$1 = state_16376;
var statearr_16511_18520 = state_16376__$1;
(statearr_16511_18520[(2)] = inst_16348);

(statearr_16511_18520[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (8))){
var inst_16325 = (state_16376[(7)]);
var inst_16335 = (inst_16325 == null);
var state_16376__$1 = state_16376;
if(cljs.core.truth_(inst_16335)){
var statearr_16518_18521 = state_16376__$1;
(statearr_16518_18521[(1)] = (11));

} else {
var statearr_16521_18523 = state_16376__$1;
(statearr_16521_18523[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13737__auto__ = null;
var cljs$core$async$mix_$_state_machine__13737__auto____0 = (function (){
var statearr_16522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16522[(0)] = cljs$core$async$mix_$_state_machine__13737__auto__);

(statearr_16522[(1)] = (1));

return statearr_16522;
});
var cljs$core$async$mix_$_state_machine__13737__auto____1 = (function (state_16376){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_16376);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e16523){var ex__13740__auto__ = e16523;
var statearr_16524_18532 = state_16376;
(statearr_16524_18532[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_16376[(4)]))){
var statearr_16525_18533 = state_16376;
(statearr_16525_18533[(1)] = cljs.core.first((state_16376[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18534 = state_16376;
state_16376 = G__18534;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13737__auto__ = function(state_16376){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13737__auto____1.call(this,state_16376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13737__auto____0;
cljs$core$async$mix_$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13737__auto____1;
return cljs$core$async$mix_$_state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_16526 = f__14324__auto__();
(statearr_16526[(6)] = c__14323__auto___18479);

return statearr_16526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18552 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18552(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18559 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18559(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18562 = (function() {
var G__18563 = null;
var G__18563__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18563__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18563 = function(p,v){
switch(arguments.length){
case 1:
return G__18563__1.call(this,p);
case 2:
return G__18563__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18563.cljs$core$IFn$_invoke$arity$1 = G__18563__1;
G__18563.cljs$core$IFn$_invoke$arity$2 = G__18563__2;
return G__18563;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16566 = arguments.length;
switch (G__16566) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18562(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18562(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16589 = arguments.length;
switch (G__16589) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16583_SHARP_){
if(cljs.core.truth_((p1__16583_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16583_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16583_SHARP_.call(null,topic)))){
return p1__16583_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16583_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16595 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16596){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16596 = meta16596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16597,meta16596__$1){
var self__ = this;
var _16597__$1 = this;
return (new cljs.core.async.t_cljs$core$async16595(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16596__$1));
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16597){
var self__ = this;
var _16597__$1 = this;
return self__.meta16596;
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16595.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16596","meta16596",1028164073,null)], null);
}));

(cljs.core.async.t_cljs$core$async16595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16595");

(cljs.core.async.t_cljs$core$async16595.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16595.
 */
cljs.core.async.__GT_t_cljs$core$async16595 = (function cljs$core$async$__GT_t_cljs$core$async16595(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16596){
return (new cljs.core.async.t_cljs$core$async16595(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16596));
});

}

return (new cljs.core.async.t_cljs$core$async16595(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14323__auto___18585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_16724){
var state_val_16725 = (state_16724[(1)]);
if((state_val_16725 === (7))){
var inst_16720 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16726_18586 = state_16724__$1;
(statearr_16726_18586[(2)] = inst_16720);

(statearr_16726_18586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (20))){
var state_16724__$1 = state_16724;
var statearr_16727_18591 = state_16724__$1;
(statearr_16727_18591[(2)] = null);

(statearr_16727_18591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (1))){
var state_16724__$1 = state_16724;
var statearr_16728_18592 = state_16724__$1;
(statearr_16728_18592[(2)] = null);

(statearr_16728_18592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (24))){
var inst_16699 = (state_16724[(7)]);
var inst_16712 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16699);
var state_16724__$1 = state_16724;
var statearr_16729_18598 = state_16724__$1;
(statearr_16729_18598[(2)] = inst_16712);

(statearr_16729_18598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (4))){
var inst_16621 = (state_16724[(8)]);
var inst_16621__$1 = (state_16724[(2)]);
var inst_16622 = (inst_16621__$1 == null);
var state_16724__$1 = (function (){var statearr_16730 = state_16724;
(statearr_16730[(8)] = inst_16621__$1);

return statearr_16730;
})();
if(cljs.core.truth_(inst_16622)){
var statearr_16731_18599 = state_16724__$1;
(statearr_16731_18599[(1)] = (5));

} else {
var statearr_16732_18600 = state_16724__$1;
(statearr_16732_18600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (15))){
var inst_16693 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16733_18606 = state_16724__$1;
(statearr_16733_18606[(2)] = inst_16693);

(statearr_16733_18606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (21))){
var inst_16717 = (state_16724[(2)]);
var state_16724__$1 = (function (){var statearr_16734 = state_16724;
(statearr_16734[(9)] = inst_16717);

return statearr_16734;
})();
var statearr_16735_18607 = state_16724__$1;
(statearr_16735_18607[(2)] = null);

(statearr_16735_18607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (13))){
var inst_16664 = (state_16724[(10)]);
var inst_16667 = cljs.core.chunked_seq_QMARK_(inst_16664);
var state_16724__$1 = state_16724;
if(inst_16667){
var statearr_16736_18608 = state_16724__$1;
(statearr_16736_18608[(1)] = (16));

} else {
var statearr_16737_18609 = state_16724__$1;
(statearr_16737_18609[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (22))){
var inst_16705 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
if(cljs.core.truth_(inst_16705)){
var statearr_16738_18610 = state_16724__$1;
(statearr_16738_18610[(1)] = (23));

} else {
var statearr_16740_18611 = state_16724__$1;
(statearr_16740_18611[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (6))){
var inst_16701 = (state_16724[(11)]);
var inst_16621 = (state_16724[(8)]);
var inst_16699 = (state_16724[(7)]);
var inst_16699__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16621) : topic_fn.call(null,inst_16621));
var inst_16700 = cljs.core.deref(mults);
var inst_16701__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16700,inst_16699__$1);
var state_16724__$1 = (function (){var statearr_16752 = state_16724;
(statearr_16752[(11)] = inst_16701__$1);

(statearr_16752[(7)] = inst_16699__$1);

return statearr_16752;
})();
if(cljs.core.truth_(inst_16701__$1)){
var statearr_16756_18614 = state_16724__$1;
(statearr_16756_18614[(1)] = (19));

} else {
var statearr_16762_18615 = state_16724__$1;
(statearr_16762_18615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (25))){
var inst_16714 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16772_18616 = state_16724__$1;
(statearr_16772_18616[(2)] = inst_16714);

(statearr_16772_18616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (17))){
var inst_16664 = (state_16724[(10)]);
var inst_16674 = cljs.core.first(inst_16664);
var inst_16685 = cljs.core.async.muxch_STAR_(inst_16674);
var inst_16686 = cljs.core.async.close_BANG_(inst_16685);
var inst_16687 = cljs.core.next(inst_16664);
var inst_16639 = inst_16687;
var inst_16640 = null;
var inst_16641 = (0);
var inst_16642 = (0);
var state_16724__$1 = (function (){var statearr_16773 = state_16724;
(statearr_16773[(12)] = inst_16641);

(statearr_16773[(13)] = inst_16642);

(statearr_16773[(14)] = inst_16640);

(statearr_16773[(15)] = inst_16639);

(statearr_16773[(16)] = inst_16686);

return statearr_16773;
})();
var statearr_16774_18618 = state_16724__$1;
(statearr_16774_18618[(2)] = null);

(statearr_16774_18618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (3))){
var inst_16722 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16724__$1,inst_16722);
} else {
if((state_val_16725 === (12))){
var inst_16695 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16776_18619 = state_16724__$1;
(statearr_16776_18619[(2)] = inst_16695);

(statearr_16776_18619[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (2))){
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16724__$1,(4),ch);
} else {
if((state_val_16725 === (23))){
var state_16724__$1 = state_16724;
var statearr_16777_18621 = state_16724__$1;
(statearr_16777_18621[(2)] = null);

(statearr_16777_18621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (19))){
var inst_16701 = (state_16724[(11)]);
var inst_16621 = (state_16724[(8)]);
var inst_16703 = cljs.core.async.muxch_STAR_(inst_16701);
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16724__$1,(22),inst_16703,inst_16621);
} else {
if((state_val_16725 === (11))){
var inst_16639 = (state_16724[(15)]);
var inst_16664 = (state_16724[(10)]);
var inst_16664__$1 = cljs.core.seq(inst_16639);
var state_16724__$1 = (function (){var statearr_16778 = state_16724;
(statearr_16778[(10)] = inst_16664__$1);

return statearr_16778;
})();
if(inst_16664__$1){
var statearr_16783_18622 = state_16724__$1;
(statearr_16783_18622[(1)] = (13));

} else {
var statearr_16784_18623 = state_16724__$1;
(statearr_16784_18623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (9))){
var inst_16697 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16788_18624 = state_16724__$1;
(statearr_16788_18624[(2)] = inst_16697);

(statearr_16788_18624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (5))){
var inst_16628 = cljs.core.deref(mults);
var inst_16629 = cljs.core.vals(inst_16628);
var inst_16630 = cljs.core.seq(inst_16629);
var inst_16639 = inst_16630;
var inst_16640 = null;
var inst_16641 = (0);
var inst_16642 = (0);
var state_16724__$1 = (function (){var statearr_16790 = state_16724;
(statearr_16790[(12)] = inst_16641);

(statearr_16790[(13)] = inst_16642);

(statearr_16790[(14)] = inst_16640);

(statearr_16790[(15)] = inst_16639);

return statearr_16790;
})();
var statearr_16791_18630 = state_16724__$1;
(statearr_16791_18630[(2)] = null);

(statearr_16791_18630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (14))){
var state_16724__$1 = state_16724;
var statearr_16795_18635 = state_16724__$1;
(statearr_16795_18635[(2)] = null);

(statearr_16795_18635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (16))){
var inst_16664 = (state_16724[(10)]);
var inst_16669 = cljs.core.chunk_first(inst_16664);
var inst_16670 = cljs.core.chunk_rest(inst_16664);
var inst_16671 = cljs.core.count(inst_16669);
var inst_16639 = inst_16670;
var inst_16640 = inst_16669;
var inst_16641 = inst_16671;
var inst_16642 = (0);
var state_16724__$1 = (function (){var statearr_16796 = state_16724;
(statearr_16796[(12)] = inst_16641);

(statearr_16796[(13)] = inst_16642);

(statearr_16796[(14)] = inst_16640);

(statearr_16796[(15)] = inst_16639);

return statearr_16796;
})();
var statearr_16797_18636 = state_16724__$1;
(statearr_16797_18636[(2)] = null);

(statearr_16797_18636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (10))){
var inst_16641 = (state_16724[(12)]);
var inst_16642 = (state_16724[(13)]);
var inst_16640 = (state_16724[(14)]);
var inst_16639 = (state_16724[(15)]);
var inst_16655 = cljs.core._nth(inst_16640,inst_16642);
var inst_16656 = cljs.core.async.muxch_STAR_(inst_16655);
var inst_16657 = cljs.core.async.close_BANG_(inst_16656);
var inst_16658 = (inst_16642 + (1));
var tmp16792 = inst_16641;
var tmp16793 = inst_16640;
var tmp16794 = inst_16639;
var inst_16639__$1 = tmp16794;
var inst_16640__$1 = tmp16793;
var inst_16641__$1 = tmp16792;
var inst_16642__$1 = inst_16658;
var state_16724__$1 = (function (){var statearr_16810 = state_16724;
(statearr_16810[(12)] = inst_16641__$1);

(statearr_16810[(13)] = inst_16642__$1);

(statearr_16810[(14)] = inst_16640__$1);

(statearr_16810[(17)] = inst_16657);

(statearr_16810[(15)] = inst_16639__$1);

return statearr_16810;
})();
var statearr_16815_18637 = state_16724__$1;
(statearr_16815_18637[(2)] = null);

(statearr_16815_18637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (18))){
var inst_16690 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16816_18638 = state_16724__$1;
(statearr_16816_18638[(2)] = inst_16690);

(statearr_16816_18638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (8))){
var inst_16641 = (state_16724[(12)]);
var inst_16642 = (state_16724[(13)]);
var inst_16652 = (inst_16642 < inst_16641);
var inst_16653 = inst_16652;
var state_16724__$1 = state_16724;
if(cljs.core.truth_(inst_16653)){
var statearr_16820_18639 = state_16724__$1;
(statearr_16820_18639[(1)] = (10));

} else {
var statearr_16822_18640 = state_16724__$1;
(statearr_16822_18640[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13737__auto__ = null;
var cljs$core$async$state_machine__13737__auto____0 = (function (){
var statearr_16828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16828[(0)] = cljs$core$async$state_machine__13737__auto__);

(statearr_16828[(1)] = (1));

return statearr_16828;
});
var cljs$core$async$state_machine__13737__auto____1 = (function (state_16724){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_16724);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e16835){var ex__13740__auto__ = e16835;
var statearr_16836_18641 = state_16724;
(statearr_16836_18641[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_16724[(4)]))){
var statearr_16841_18642 = state_16724;
(statearr_16841_18642[(1)] = cljs.core.first((state_16724[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18643 = state_16724;
state_16724 = G__18643;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13737__auto__ = function(state_16724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13737__auto____1.call(this,state_16724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13737__auto____0;
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13737__auto____1;
return cljs$core$async$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_16856 = f__14324__auto__();
(statearr_16856[(6)] = c__14323__auto___18585);

return statearr_16856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16876 = arguments.length;
switch (G__16876) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16878 = arguments.length;
switch (G__16878) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16882 = arguments.length;
switch (G__16882) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14323__auto___18682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_16937){
var state_val_16938 = (state_16937[(1)]);
if((state_val_16938 === (7))){
var state_16937__$1 = state_16937;
var statearr_16939_18683 = state_16937__$1;
(statearr_16939_18683[(2)] = null);

(statearr_16939_18683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (1))){
var state_16937__$1 = state_16937;
var statearr_16940_18684 = state_16937__$1;
(statearr_16940_18684[(2)] = null);

(statearr_16940_18684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (4))){
var inst_16894 = (state_16937[(7)]);
var inst_16893 = (state_16937[(8)]);
var inst_16896 = (inst_16894 < inst_16893);
var state_16937__$1 = state_16937;
if(cljs.core.truth_(inst_16896)){
var statearr_16941_18688 = state_16937__$1;
(statearr_16941_18688[(1)] = (6));

} else {
var statearr_16942_18689 = state_16937__$1;
(statearr_16942_18689[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (15))){
var inst_16919 = (state_16937[(9)]);
var inst_16924 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16919);
var state_16937__$1 = state_16937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16937__$1,(17),out,inst_16924);
} else {
if((state_val_16938 === (13))){
var inst_16919 = (state_16937[(9)]);
var inst_16919__$1 = (state_16937[(2)]);
var inst_16920 = cljs.core.some(cljs.core.nil_QMARK_,inst_16919__$1);
var state_16937__$1 = (function (){var statearr_16943 = state_16937;
(statearr_16943[(9)] = inst_16919__$1);

return statearr_16943;
})();
if(cljs.core.truth_(inst_16920)){
var statearr_16944_18690 = state_16937__$1;
(statearr_16944_18690[(1)] = (14));

} else {
var statearr_16945_18691 = state_16937__$1;
(statearr_16945_18691[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (6))){
var state_16937__$1 = state_16937;
var statearr_16946_18692 = state_16937__$1;
(statearr_16946_18692[(2)] = null);

(statearr_16946_18692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (17))){
var inst_16926 = (state_16937[(2)]);
var state_16937__$1 = (function (){var statearr_16948 = state_16937;
(statearr_16948[(10)] = inst_16926);

return statearr_16948;
})();
var statearr_16949_18693 = state_16937__$1;
(statearr_16949_18693[(2)] = null);

(statearr_16949_18693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (3))){
var inst_16931 = (state_16937[(2)]);
var state_16937__$1 = state_16937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16937__$1,inst_16931);
} else {
if((state_val_16938 === (12))){
var _ = (function (){var statearr_16950 = state_16937;
(statearr_16950[(4)] = cljs.core.rest((state_16937[(4)])));

return statearr_16950;
})();
var state_16937__$1 = state_16937;
var ex16947 = (state_16937__$1[(2)]);
var statearr_16952_18697 = state_16937__$1;
(statearr_16952_18697[(5)] = ex16947);


if((ex16947 instanceof Object)){
var statearr_16953_18698 = state_16937__$1;
(statearr_16953_18698[(1)] = (11));

(statearr_16953_18698[(5)] = null);

} else {
throw ex16947;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (2))){
var inst_16892 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16893 = cnt;
var inst_16894 = (0);
var state_16937__$1 = (function (){var statearr_16954 = state_16937;
(statearr_16954[(7)] = inst_16894);

(statearr_16954[(8)] = inst_16893);

(statearr_16954[(11)] = inst_16892);

return statearr_16954;
})();
var statearr_16958_18699 = state_16937__$1;
(statearr_16958_18699[(2)] = null);

(statearr_16958_18699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (11))){
var inst_16898 = (state_16937[(2)]);
var inst_16899 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16937__$1 = (function (){var statearr_16959 = state_16937;
(statearr_16959[(12)] = inst_16898);

return statearr_16959;
})();
var statearr_16960_18700 = state_16937__$1;
(statearr_16960_18700[(2)] = inst_16899);

(statearr_16960_18700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (9))){
var inst_16894 = (state_16937[(7)]);
var _ = (function (){var statearr_16964 = state_16937;
(statearr_16964[(4)] = cljs.core.cons((12),(state_16937[(4)])));

return statearr_16964;
})();
var inst_16905 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16894) : chs__$1.call(null,inst_16894));
var inst_16906 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16894) : done.call(null,inst_16894));
var inst_16907 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16905,inst_16906);
var ___$1 = (function (){var statearr_16965 = state_16937;
(statearr_16965[(4)] = cljs.core.rest((state_16937[(4)])));

return statearr_16965;
})();
var state_16937__$1 = state_16937;
var statearr_16966_18704 = state_16937__$1;
(statearr_16966_18704[(2)] = inst_16907);

(statearr_16966_18704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (5))){
var inst_16917 = (state_16937[(2)]);
var state_16937__$1 = (function (){var statearr_16967 = state_16937;
(statearr_16967[(13)] = inst_16917);

return statearr_16967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16937__$1,(13),dchan);
} else {
if((state_val_16938 === (14))){
var inst_16922 = cljs.core.async.close_BANG_(out);
var state_16937__$1 = state_16937;
var statearr_16968_18712 = state_16937__$1;
(statearr_16968_18712[(2)] = inst_16922);

(statearr_16968_18712[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (16))){
var inst_16929 = (state_16937[(2)]);
var state_16937__$1 = state_16937;
var statearr_16969_18713 = state_16937__$1;
(statearr_16969_18713[(2)] = inst_16929);

(statearr_16969_18713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (10))){
var inst_16894 = (state_16937[(7)]);
var inst_16910 = (state_16937[(2)]);
var inst_16911 = (inst_16894 + (1));
var inst_16894__$1 = inst_16911;
var state_16937__$1 = (function (){var statearr_16970 = state_16937;
(statearr_16970[(7)] = inst_16894__$1);

(statearr_16970[(14)] = inst_16910);

return statearr_16970;
})();
var statearr_16971_18715 = state_16937__$1;
(statearr_16971_18715[(2)] = null);

(statearr_16971_18715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16938 === (8))){
var inst_16915 = (state_16937[(2)]);
var state_16937__$1 = state_16937;
var statearr_16972_18716 = state_16937__$1;
(statearr_16972_18716[(2)] = inst_16915);

(statearr_16972_18716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13737__auto__ = null;
var cljs$core$async$state_machine__13737__auto____0 = (function (){
var statearr_16973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16973[(0)] = cljs$core$async$state_machine__13737__auto__);

(statearr_16973[(1)] = (1));

return statearr_16973;
});
var cljs$core$async$state_machine__13737__auto____1 = (function (state_16937){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_16937);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e16974){var ex__13740__auto__ = e16974;
var statearr_16975_18717 = state_16937;
(statearr_16975_18717[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_16937[(4)]))){
var statearr_16976_18718 = state_16937;
(statearr_16976_18718[(1)] = cljs.core.first((state_16937[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18719 = state_16937;
state_16937 = G__18719;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13737__auto__ = function(state_16937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13737__auto____1.call(this,state_16937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13737__auto____0;
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13737__auto____1;
return cljs$core$async$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_16978 = f__14324__auto__();
(statearr_16978[(6)] = c__14323__auto___18682);

return statearr_16978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16982 = arguments.length;
switch (G__16982) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___18721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_17043){
var state_val_17044 = (state_17043[(1)]);
if((state_val_17044 === (7))){
var inst_16996 = (state_17043[(7)]);
var inst_16995 = (state_17043[(8)]);
var inst_16995__$1 = (state_17043[(2)]);
var inst_16996__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16995__$1,(0),null);
var inst_16997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16995__$1,(1),null);
var inst_16998 = (inst_16996__$1 == null);
var state_17043__$1 = (function (){var statearr_17047 = state_17043;
(statearr_17047[(7)] = inst_16996__$1);

(statearr_17047[(9)] = inst_16997);

(statearr_17047[(8)] = inst_16995__$1);

return statearr_17047;
})();
if(cljs.core.truth_(inst_16998)){
var statearr_17048_18722 = state_17043__$1;
(statearr_17048_18722[(1)] = (8));

} else {
var statearr_17049_18723 = state_17043__$1;
(statearr_17049_18723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (1))){
var inst_16985 = cljs.core.vec(chs);
var inst_16986 = inst_16985;
var state_17043__$1 = (function (){var statearr_17050 = state_17043;
(statearr_17050[(10)] = inst_16986);

return statearr_17050;
})();
var statearr_17051_18724 = state_17043__$1;
(statearr_17051_18724[(2)] = null);

(statearr_17051_18724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (4))){
var inst_16986 = (state_17043[(10)]);
var state_17043__$1 = state_17043;
return cljs.core.async.ioc_alts_BANG_(state_17043__$1,(7),inst_16986);
} else {
if((state_val_17044 === (6))){
var inst_17039 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
var statearr_17052_18726 = state_17043__$1;
(statearr_17052_18726[(2)] = inst_17039);

(statearr_17052_18726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (3))){
var inst_17041 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17043__$1,inst_17041);
} else {
if((state_val_17044 === (2))){
var inst_16986 = (state_17043[(10)]);
var inst_16988 = cljs.core.count(inst_16986);
var inst_16989 = (inst_16988 > (0));
var state_17043__$1 = state_17043;
if(cljs.core.truth_(inst_16989)){
var statearr_17055_18731 = state_17043__$1;
(statearr_17055_18731[(1)] = (4));

} else {
var statearr_17056_18732 = state_17043__$1;
(statearr_17056_18732[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (11))){
var inst_16986 = (state_17043[(10)]);
var inst_17032 = (state_17043[(2)]);
var tmp17053 = inst_16986;
var inst_16986__$1 = tmp17053;
var state_17043__$1 = (function (){var statearr_17060 = state_17043;
(statearr_17060[(11)] = inst_17032);

(statearr_17060[(10)] = inst_16986__$1);

return statearr_17060;
})();
var statearr_17061_18740 = state_17043__$1;
(statearr_17061_18740[(2)] = null);

(statearr_17061_18740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (9))){
var inst_16996 = (state_17043[(7)]);
var state_17043__$1 = state_17043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17043__$1,(11),out,inst_16996);
} else {
if((state_val_17044 === (5))){
var inst_17037 = cljs.core.async.close_BANG_(out);
var state_17043__$1 = state_17043;
var statearr_17062_18765 = state_17043__$1;
(statearr_17062_18765[(2)] = inst_17037);

(statearr_17062_18765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (10))){
var inst_17035 = (state_17043[(2)]);
var state_17043__$1 = state_17043;
var statearr_17063_18766 = state_17043__$1;
(statearr_17063_18766[(2)] = inst_17035);

(statearr_17063_18766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17044 === (8))){
var inst_16996 = (state_17043[(7)]);
var inst_16997 = (state_17043[(9)]);
var inst_16986 = (state_17043[(10)]);
var inst_16995 = (state_17043[(8)]);
var inst_17027 = (function (){var cs = inst_16986;
var vec__16991 = inst_16995;
var v = inst_16996;
var c = inst_16997;
return (function (p1__16979_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16979_SHARP_);
});
})();
var inst_17028 = cljs.core.filterv(inst_17027,inst_16986);
var inst_16986__$1 = inst_17028;
var state_17043__$1 = (function (){var statearr_17076 = state_17043;
(statearr_17076[(10)] = inst_16986__$1);

return statearr_17076;
})();
var statearr_17077_18767 = state_17043__$1;
(statearr_17077_18767[(2)] = null);

(statearr_17077_18767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13737__auto__ = null;
var cljs$core$async$state_machine__13737__auto____0 = (function (){
var statearr_17078 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17078[(0)] = cljs$core$async$state_machine__13737__auto__);

(statearr_17078[(1)] = (1));

return statearr_17078;
});
var cljs$core$async$state_machine__13737__auto____1 = (function (state_17043){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_17043);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e17079){var ex__13740__auto__ = e17079;
var statearr_17080_18768 = state_17043;
(statearr_17080_18768[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_17043[(4)]))){
var statearr_17081_18769 = state_17043;
(statearr_17081_18769[(1)] = cljs.core.first((state_17043[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18770 = state_17043;
state_17043 = G__18770;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13737__auto__ = function(state_17043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13737__auto____1.call(this,state_17043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13737__auto____0;
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13737__auto____1;
return cljs$core$async$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_17082 = f__14324__auto__();
(statearr_17082[(6)] = c__14323__auto___18721);

return statearr_17082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17084 = arguments.length;
switch (G__17084) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___18773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_17108){
var state_val_17109 = (state_17108[(1)]);
if((state_val_17109 === (7))){
var inst_17090 = (state_17108[(7)]);
var inst_17090__$1 = (state_17108[(2)]);
var inst_17091 = (inst_17090__$1 == null);
var inst_17092 = cljs.core.not(inst_17091);
var state_17108__$1 = (function (){var statearr_17110 = state_17108;
(statearr_17110[(7)] = inst_17090__$1);

return statearr_17110;
})();
if(inst_17092){
var statearr_17111_18774 = state_17108__$1;
(statearr_17111_18774[(1)] = (8));

} else {
var statearr_17112_18775 = state_17108__$1;
(statearr_17112_18775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17109 === (1))){
var inst_17085 = (0);
var state_17108__$1 = (function (){var statearr_17113 = state_17108;
(statearr_17113[(8)] = inst_17085);

return statearr_17113;
})();
var statearr_17114_18780 = state_17108__$1;
(statearr_17114_18780[(2)] = null);

(statearr_17114_18780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17109 === (4))){
var state_17108__$1 = state_17108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17108__$1,(7),ch);
} else {
if((state_val_17109 === (6))){
var inst_17103 = (state_17108[(2)]);
var state_17108__$1 = state_17108;
var statearr_17122_18781 = state_17108__$1;
(statearr_17122_18781[(2)] = inst_17103);

(statearr_17122_18781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17109 === (3))){
var inst_17105 = (state_17108[(2)]);
var inst_17106 = cljs.core.async.close_BANG_(out);
var state_17108__$1 = (function (){var statearr_17129 = state_17108;
(statearr_17129[(9)] = inst_17105);

return statearr_17129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17108__$1,inst_17106);
} else {
if((state_val_17109 === (2))){
var inst_17085 = (state_17108[(8)]);
var inst_17087 = (inst_17085 < n);
var state_17108__$1 = state_17108;
if(cljs.core.truth_(inst_17087)){
var statearr_17136_18782 = state_17108__$1;
(statearr_17136_18782[(1)] = (4));

} else {
var statearr_17137_18783 = state_17108__$1;
(statearr_17137_18783[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17109 === (11))){
var inst_17085 = (state_17108[(8)]);
var inst_17095 = (state_17108[(2)]);
var inst_17096 = (inst_17085 + (1));
var inst_17085__$1 = inst_17096;
var state_17108__$1 = (function (){var statearr_17138 = state_17108;
(statearr_17138[(10)] = inst_17095);

(statearr_17138[(8)] = inst_17085__$1);

return statearr_17138;
})();
var statearr_17139_18790 = state_17108__$1;
(statearr_17139_18790[(2)] = null);

(statearr_17139_18790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17109 === (9))){
var state_17108__$1 = state_17108;
var statearr_17147_18791 = state_17108__$1;
(statearr_17147_18791[(2)] = null);

(statearr_17147_18791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17109 === (5))){
var state_17108__$1 = state_17108;
var statearr_17151_18792 = state_17108__$1;
(statearr_17151_18792[(2)] = null);

(statearr_17151_18792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17109 === (10))){
var inst_17100 = (state_17108[(2)]);
var state_17108__$1 = state_17108;
var statearr_17155_18793 = state_17108__$1;
(statearr_17155_18793[(2)] = inst_17100);

(statearr_17155_18793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17109 === (8))){
var inst_17090 = (state_17108[(7)]);
var state_17108__$1 = state_17108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17108__$1,(11),out,inst_17090);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13737__auto__ = null;
var cljs$core$async$state_machine__13737__auto____0 = (function (){
var statearr_17160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17160[(0)] = cljs$core$async$state_machine__13737__auto__);

(statearr_17160[(1)] = (1));

return statearr_17160;
});
var cljs$core$async$state_machine__13737__auto____1 = (function (state_17108){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_17108);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e17163){var ex__13740__auto__ = e17163;
var statearr_17164_18794 = state_17108;
(statearr_17164_18794[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_17108[(4)]))){
var statearr_17166_18795 = state_17108;
(statearr_17166_18795[(1)] = cljs.core.first((state_17108[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18796 = state_17108;
state_17108 = G__18796;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13737__auto__ = function(state_17108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13737__auto____1.call(this,state_17108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13737__auto____0;
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13737__auto____1;
return cljs$core$async$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_17167 = f__14324__auto__();
(statearr_17167[(6)] = c__14323__auto___18773);

return statearr_17167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17171 = (function (f,ch,meta17172){
this.f = f;
this.ch = ch;
this.meta17172 = meta17172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17173,meta17172__$1){
var self__ = this;
var _17173__$1 = this;
return (new cljs.core.async.t_cljs$core$async17171(self__.f,self__.ch,meta17172__$1));
}));

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17173){
var self__ = this;
var _17173__$1 = this;
return self__.meta17172;
}));

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17176 = (function (f,ch,meta17172,_,fn1,meta17177){
this.f = f;
this.ch = ch;
this.meta17172 = meta17172;
this._ = _;
this.fn1 = fn1;
this.meta17177 = meta17177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17178,meta17177__$1){
var self__ = this;
var _17178__$1 = this;
return (new cljs.core.async.t_cljs$core$async17176(self__.f,self__.ch,self__.meta17172,self__._,self__.fn1,meta17177__$1));
}));

(cljs.core.async.t_cljs$core$async17176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17178){
var self__ = this;
var _17178__$1 = this;
return self__.meta17177;
}));

(cljs.core.async.t_cljs$core$async17176.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17168_SHARP_){
var G__17184 = (((p1__17168_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17168_SHARP_) : self__.f.call(null,p1__17168_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17184) : f1.call(null,G__17184));
});
}));

(cljs.core.async.t_cljs$core$async17176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17172","meta17172",-1213923576,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17171","cljs.core.async/t_cljs$core$async17171",38131374,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17177","meta17177",459775275,null)], null);
}));

(cljs.core.async.t_cljs$core$async17176.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17176");

(cljs.core.async.t_cljs$core$async17176.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17176");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17176.
 */
cljs.core.async.__GT_t_cljs$core$async17176 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17176(f__$1,ch__$1,meta17172__$1,___$2,fn1__$1,meta17177){
return (new cljs.core.async.t_cljs$core$async17176(f__$1,ch__$1,meta17172__$1,___$2,fn1__$1,meta17177));
});

}

return (new cljs.core.async.t_cljs$core$async17176(self__.f,self__.ch,self__.meta17172,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17199 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17199) : self__.f.call(null,G__17199));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17172","meta17172",-1213923576,null)], null);
}));

(cljs.core.async.t_cljs$core$async17171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17171");

(cljs.core.async.t_cljs$core$async17171.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17171.
 */
cljs.core.async.__GT_t_cljs$core$async17171 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17171(f__$1,ch__$1,meta17172){
return (new cljs.core.async.t_cljs$core$async17171(f__$1,ch__$1,meta17172));
});

}

return (new cljs.core.async.t_cljs$core$async17171(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17214 = (function (f,ch,meta17215){
this.f = f;
this.ch = ch;
this.meta17215 = meta17215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17216,meta17215__$1){
var self__ = this;
var _17216__$1 = this;
return (new cljs.core.async.t_cljs$core$async17214(self__.f,self__.ch,meta17215__$1));
}));

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17216){
var self__ = this;
var _17216__$1 = this;
return self__.meta17215;
}));

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17214.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17215","meta17215",-1499565005,null)], null);
}));

(cljs.core.async.t_cljs$core$async17214.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17214");

(cljs.core.async.t_cljs$core$async17214.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17214");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17214.
 */
cljs.core.async.__GT_t_cljs$core$async17214 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17214(f__$1,ch__$1,meta17215){
return (new cljs.core.async.t_cljs$core$async17214(f__$1,ch__$1,meta17215));
});

}

return (new cljs.core.async.t_cljs$core$async17214(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17217 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17217 = (function (p,ch,meta17218){
this.p = p;
this.ch = ch;
this.meta17218 = meta17218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17219,meta17218__$1){
var self__ = this;
var _17219__$1 = this;
return (new cljs.core.async.t_cljs$core$async17217(self__.p,self__.ch,meta17218__$1));
}));

(cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17219){
var self__ = this;
var _17219__$1 = this;
return self__.meta17218;
}));

(cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17217.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17218","meta17218",-186529077,null)], null);
}));

(cljs.core.async.t_cljs$core$async17217.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17217");

(cljs.core.async.t_cljs$core$async17217.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17217");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17217.
 */
cljs.core.async.__GT_t_cljs$core$async17217 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17217(p__$1,ch__$1,meta17218){
return (new cljs.core.async.t_cljs$core$async17217(p__$1,ch__$1,meta17218));
});

}

return (new cljs.core.async.t_cljs$core$async17217(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17245 = arguments.length;
switch (G__17245) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___18817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_17281){
var state_val_17282 = (state_17281[(1)]);
if((state_val_17282 === (7))){
var inst_17277 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17283_18818 = state_17281__$1;
(statearr_17283_18818[(2)] = inst_17277);

(statearr_17283_18818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (1))){
var state_17281__$1 = state_17281;
var statearr_17284_18819 = state_17281__$1;
(statearr_17284_18819[(2)] = null);

(statearr_17284_18819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (4))){
var inst_17263 = (state_17281[(7)]);
var inst_17263__$1 = (state_17281[(2)]);
var inst_17264 = (inst_17263__$1 == null);
var state_17281__$1 = (function (){var statearr_17286 = state_17281;
(statearr_17286[(7)] = inst_17263__$1);

return statearr_17286;
})();
if(cljs.core.truth_(inst_17264)){
var statearr_17287_18820 = state_17281__$1;
(statearr_17287_18820[(1)] = (5));

} else {
var statearr_17288_18821 = state_17281__$1;
(statearr_17288_18821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (6))){
var inst_17263 = (state_17281[(7)]);
var inst_17268 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17263) : p.call(null,inst_17263));
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17268)){
var statearr_17289_18822 = state_17281__$1;
(statearr_17289_18822[(1)] = (8));

} else {
var statearr_17290_18823 = state_17281__$1;
(statearr_17290_18823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (3))){
var inst_17279 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17281__$1,inst_17279);
} else {
if((state_val_17282 === (2))){
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17281__$1,(4),ch);
} else {
if((state_val_17282 === (11))){
var inst_17271 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17291_18824 = state_17281__$1;
(statearr_17291_18824[(2)] = inst_17271);

(statearr_17291_18824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (9))){
var state_17281__$1 = state_17281;
var statearr_17292_18825 = state_17281__$1;
(statearr_17292_18825[(2)] = null);

(statearr_17292_18825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (5))){
var inst_17266 = cljs.core.async.close_BANG_(out);
var state_17281__$1 = state_17281;
var statearr_17293_18826 = state_17281__$1;
(statearr_17293_18826[(2)] = inst_17266);

(statearr_17293_18826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (10))){
var inst_17274 = (state_17281[(2)]);
var state_17281__$1 = (function (){var statearr_17296 = state_17281;
(statearr_17296[(8)] = inst_17274);

return statearr_17296;
})();
var statearr_17299_18827 = state_17281__$1;
(statearr_17299_18827[(2)] = null);

(statearr_17299_18827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (8))){
var inst_17263 = (state_17281[(7)]);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17281__$1,(11),out,inst_17263);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13737__auto__ = null;
var cljs$core$async$state_machine__13737__auto____0 = (function (){
var statearr_17301 = [null,null,null,null,null,null,null,null,null];
(statearr_17301[(0)] = cljs$core$async$state_machine__13737__auto__);

(statearr_17301[(1)] = (1));

return statearr_17301;
});
var cljs$core$async$state_machine__13737__auto____1 = (function (state_17281){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_17281);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e17303){var ex__13740__auto__ = e17303;
var statearr_17305_18836 = state_17281;
(statearr_17305_18836[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_17281[(4)]))){
var statearr_17306_18837 = state_17281;
(statearr_17306_18837[(1)] = cljs.core.first((state_17281[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18838 = state_17281;
state_17281 = G__18838;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13737__auto__ = function(state_17281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13737__auto____1.call(this,state_17281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13737__auto____0;
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13737__auto____1;
return cljs$core$async$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_17307 = f__14324__auto__();
(statearr_17307[(6)] = c__14323__auto___18817);

return statearr_17307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17310 = arguments.length;
switch (G__17310) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14323__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_17383){
var state_val_17384 = (state_17383[(1)]);
if((state_val_17384 === (7))){
var inst_17379 = (state_17383[(2)]);
var state_17383__$1 = state_17383;
var statearr_17385_18840 = state_17383__$1;
(statearr_17385_18840[(2)] = inst_17379);

(statearr_17385_18840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (20))){
var inst_17349 = (state_17383[(7)]);
var inst_17360 = (state_17383[(2)]);
var inst_17361 = cljs.core.next(inst_17349);
var inst_17334 = inst_17361;
var inst_17335 = null;
var inst_17336 = (0);
var inst_17337 = (0);
var state_17383__$1 = (function (){var statearr_17386 = state_17383;
(statearr_17386[(8)] = inst_17335);

(statearr_17386[(9)] = inst_17336);

(statearr_17386[(10)] = inst_17337);

(statearr_17386[(11)] = inst_17334);

(statearr_17386[(12)] = inst_17360);

return statearr_17386;
})();
var statearr_17387_18841 = state_17383__$1;
(statearr_17387_18841[(2)] = null);

(statearr_17387_18841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (1))){
var state_17383__$1 = state_17383;
var statearr_17388_18842 = state_17383__$1;
(statearr_17388_18842[(2)] = null);

(statearr_17388_18842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (4))){
var inst_17323 = (state_17383[(13)]);
var inst_17323__$1 = (state_17383[(2)]);
var inst_17324 = (inst_17323__$1 == null);
var state_17383__$1 = (function (){var statearr_17389 = state_17383;
(statearr_17389[(13)] = inst_17323__$1);

return statearr_17389;
})();
if(cljs.core.truth_(inst_17324)){
var statearr_17390_18843 = state_17383__$1;
(statearr_17390_18843[(1)] = (5));

} else {
var statearr_17391_18844 = state_17383__$1;
(statearr_17391_18844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (15))){
var state_17383__$1 = state_17383;
var statearr_17395_18845 = state_17383__$1;
(statearr_17395_18845[(2)] = null);

(statearr_17395_18845[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (21))){
var state_17383__$1 = state_17383;
var statearr_17396_18851 = state_17383__$1;
(statearr_17396_18851[(2)] = null);

(statearr_17396_18851[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (13))){
var inst_17335 = (state_17383[(8)]);
var inst_17336 = (state_17383[(9)]);
var inst_17337 = (state_17383[(10)]);
var inst_17334 = (state_17383[(11)]);
var inst_17345 = (state_17383[(2)]);
var inst_17346 = (inst_17337 + (1));
var tmp17392 = inst_17335;
var tmp17393 = inst_17336;
var tmp17394 = inst_17334;
var inst_17334__$1 = tmp17394;
var inst_17335__$1 = tmp17392;
var inst_17336__$1 = tmp17393;
var inst_17337__$1 = inst_17346;
var state_17383__$1 = (function (){var statearr_17397 = state_17383;
(statearr_17397[(8)] = inst_17335__$1);

(statearr_17397[(9)] = inst_17336__$1);

(statearr_17397[(10)] = inst_17337__$1);

(statearr_17397[(14)] = inst_17345);

(statearr_17397[(11)] = inst_17334__$1);

return statearr_17397;
})();
var statearr_17398_18852 = state_17383__$1;
(statearr_17398_18852[(2)] = null);

(statearr_17398_18852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (22))){
var state_17383__$1 = state_17383;
var statearr_17403_18853 = state_17383__$1;
(statearr_17403_18853[(2)] = null);

(statearr_17403_18853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (6))){
var inst_17323 = (state_17383[(13)]);
var inst_17332 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17323) : f.call(null,inst_17323));
var inst_17333 = cljs.core.seq(inst_17332);
var inst_17334 = inst_17333;
var inst_17335 = null;
var inst_17336 = (0);
var inst_17337 = (0);
var state_17383__$1 = (function (){var statearr_17404 = state_17383;
(statearr_17404[(8)] = inst_17335);

(statearr_17404[(9)] = inst_17336);

(statearr_17404[(10)] = inst_17337);

(statearr_17404[(11)] = inst_17334);

return statearr_17404;
})();
var statearr_17410_18854 = state_17383__$1;
(statearr_17410_18854[(2)] = null);

(statearr_17410_18854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (17))){
var inst_17349 = (state_17383[(7)]);
var inst_17353 = cljs.core.chunk_first(inst_17349);
var inst_17354 = cljs.core.chunk_rest(inst_17349);
var inst_17355 = cljs.core.count(inst_17353);
var inst_17334 = inst_17354;
var inst_17335 = inst_17353;
var inst_17336 = inst_17355;
var inst_17337 = (0);
var state_17383__$1 = (function (){var statearr_17412 = state_17383;
(statearr_17412[(8)] = inst_17335);

(statearr_17412[(9)] = inst_17336);

(statearr_17412[(10)] = inst_17337);

(statearr_17412[(11)] = inst_17334);

return statearr_17412;
})();
var statearr_17418_18859 = state_17383__$1;
(statearr_17418_18859[(2)] = null);

(statearr_17418_18859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (3))){
var inst_17381 = (state_17383[(2)]);
var state_17383__$1 = state_17383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17383__$1,inst_17381);
} else {
if((state_val_17384 === (12))){
var inst_17369 = (state_17383[(2)]);
var state_17383__$1 = state_17383;
var statearr_17427_18860 = state_17383__$1;
(statearr_17427_18860[(2)] = inst_17369);

(statearr_17427_18860[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (2))){
var state_17383__$1 = state_17383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17383__$1,(4),in$);
} else {
if((state_val_17384 === (23))){
var inst_17377 = (state_17383[(2)]);
var state_17383__$1 = state_17383;
var statearr_17428_18862 = state_17383__$1;
(statearr_17428_18862[(2)] = inst_17377);

(statearr_17428_18862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (19))){
var inst_17364 = (state_17383[(2)]);
var state_17383__$1 = state_17383;
var statearr_17429_18864 = state_17383__$1;
(statearr_17429_18864[(2)] = inst_17364);

(statearr_17429_18864[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (11))){
var inst_17349 = (state_17383[(7)]);
var inst_17334 = (state_17383[(11)]);
var inst_17349__$1 = cljs.core.seq(inst_17334);
var state_17383__$1 = (function (){var statearr_17432 = state_17383;
(statearr_17432[(7)] = inst_17349__$1);

return statearr_17432;
})();
if(inst_17349__$1){
var statearr_17433_18868 = state_17383__$1;
(statearr_17433_18868[(1)] = (14));

} else {
var statearr_17434_18869 = state_17383__$1;
(statearr_17434_18869[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (9))){
var inst_17371 = (state_17383[(2)]);
var inst_17372 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17383__$1 = (function (){var statearr_17440 = state_17383;
(statearr_17440[(15)] = inst_17371);

return statearr_17440;
})();
if(cljs.core.truth_(inst_17372)){
var statearr_17441_18870 = state_17383__$1;
(statearr_17441_18870[(1)] = (21));

} else {
var statearr_17442_18871 = state_17383__$1;
(statearr_17442_18871[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (5))){
var inst_17326 = cljs.core.async.close_BANG_(out);
var state_17383__$1 = state_17383;
var statearr_17443_18872 = state_17383__$1;
(statearr_17443_18872[(2)] = inst_17326);

(statearr_17443_18872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (14))){
var inst_17349 = (state_17383[(7)]);
var inst_17351 = cljs.core.chunked_seq_QMARK_(inst_17349);
var state_17383__$1 = state_17383;
if(inst_17351){
var statearr_17444_18874 = state_17383__$1;
(statearr_17444_18874[(1)] = (17));

} else {
var statearr_17445_18875 = state_17383__$1;
(statearr_17445_18875[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (16))){
var inst_17367 = (state_17383[(2)]);
var state_17383__$1 = state_17383;
var statearr_17446_18876 = state_17383__$1;
(statearr_17446_18876[(2)] = inst_17367);

(statearr_17446_18876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17384 === (10))){
var inst_17335 = (state_17383[(8)]);
var inst_17337 = (state_17383[(10)]);
var inst_17343 = cljs.core._nth(inst_17335,inst_17337);
var state_17383__$1 = state_17383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17383__$1,(13),out,inst_17343);
} else {
if((state_val_17384 === (18))){
var inst_17349 = (state_17383[(7)]);
var inst_17358 = cljs.core.first(inst_17349);
var state_17383__$1 = state_17383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17383__$1,(20),out,inst_17358);
} else {
if((state_val_17384 === (8))){
var inst_17336 = (state_17383[(9)]);
var inst_17337 = (state_17383[(10)]);
var inst_17340 = (inst_17337 < inst_17336);
var inst_17341 = inst_17340;
var state_17383__$1 = state_17383;
if(cljs.core.truth_(inst_17341)){
var statearr_17447_18897 = state_17383__$1;
(statearr_17447_18897[(1)] = (10));

} else {
var statearr_17448_18898 = state_17383__$1;
(statearr_17448_18898[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13737__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13737__auto____0 = (function (){
var statearr_17449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17449[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13737__auto__);

(statearr_17449[(1)] = (1));

return statearr_17449;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13737__auto____1 = (function (state_17383){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_17383);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e17450){var ex__13740__auto__ = e17450;
var statearr_17451_18899 = state_17383;
(statearr_17451_18899[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_17383[(4)]))){
var statearr_17452_18900 = state_17383;
(statearr_17452_18900[(1)] = cljs.core.first((state_17383[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18901 = state_17383;
state_17383 = G__18901;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13737__auto__ = function(state_17383){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13737__auto____1.call(this,state_17383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13737__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13737__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_17453 = f__14324__auto__();
(statearr_17453[(6)] = c__14323__auto__);

return statearr_17453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));

return c__14323__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17455 = arguments.length;
switch (G__17455) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17471 = arguments.length;
switch (G__17471) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17474 = arguments.length;
switch (G__17474) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___18905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_17503){
var state_val_17504 = (state_17503[(1)]);
if((state_val_17504 === (7))){
var inst_17498 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
var statearr_17505_18906 = state_17503__$1;
(statearr_17505_18906[(2)] = inst_17498);

(statearr_17505_18906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (1))){
var inst_17480 = null;
var state_17503__$1 = (function (){var statearr_17508 = state_17503;
(statearr_17508[(7)] = inst_17480);

return statearr_17508;
})();
var statearr_17512_18911 = state_17503__$1;
(statearr_17512_18911[(2)] = null);

(statearr_17512_18911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (4))){
var inst_17483 = (state_17503[(8)]);
var inst_17483__$1 = (state_17503[(2)]);
var inst_17484 = (inst_17483__$1 == null);
var inst_17485 = cljs.core.not(inst_17484);
var state_17503__$1 = (function (){var statearr_17514 = state_17503;
(statearr_17514[(8)] = inst_17483__$1);

return statearr_17514;
})();
if(inst_17485){
var statearr_17515_18955 = state_17503__$1;
(statearr_17515_18955[(1)] = (5));

} else {
var statearr_17518_18956 = state_17503__$1;
(statearr_17518_18956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (6))){
var state_17503__$1 = state_17503;
var statearr_17523_18959 = state_17503__$1;
(statearr_17523_18959[(2)] = null);

(statearr_17523_18959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (3))){
var inst_17500 = (state_17503[(2)]);
var inst_17501 = cljs.core.async.close_BANG_(out);
var state_17503__$1 = (function (){var statearr_17527 = state_17503;
(statearr_17527[(9)] = inst_17500);

return statearr_17527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17503__$1,inst_17501);
} else {
if((state_val_17504 === (2))){
var state_17503__$1 = state_17503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17503__$1,(4),ch);
} else {
if((state_val_17504 === (11))){
var inst_17483 = (state_17503[(8)]);
var inst_17492 = (state_17503[(2)]);
var inst_17480 = inst_17483;
var state_17503__$1 = (function (){var statearr_17531 = state_17503;
(statearr_17531[(10)] = inst_17492);

(statearr_17531[(7)] = inst_17480);

return statearr_17531;
})();
var statearr_17532_18969 = state_17503__$1;
(statearr_17532_18969[(2)] = null);

(statearr_17532_18969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (9))){
var inst_17483 = (state_17503[(8)]);
var state_17503__$1 = state_17503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17503__$1,(11),out,inst_17483);
} else {
if((state_val_17504 === (5))){
var inst_17480 = (state_17503[(7)]);
var inst_17483 = (state_17503[(8)]);
var inst_17487 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17483,inst_17480);
var state_17503__$1 = state_17503;
if(inst_17487){
var statearr_17536_18974 = state_17503__$1;
(statearr_17536_18974[(1)] = (8));

} else {
var statearr_17538_18975 = state_17503__$1;
(statearr_17538_18975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (10))){
var inst_17495 = (state_17503[(2)]);
var state_17503__$1 = state_17503;
var statearr_17539_18980 = state_17503__$1;
(statearr_17539_18980[(2)] = inst_17495);

(statearr_17539_18980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17504 === (8))){
var inst_17480 = (state_17503[(7)]);
var tmp17534 = inst_17480;
var inst_17480__$1 = tmp17534;
var state_17503__$1 = (function (){var statearr_17543 = state_17503;
(statearr_17543[(7)] = inst_17480__$1);

return statearr_17543;
})();
var statearr_17544_18981 = state_17503__$1;
(statearr_17544_18981[(2)] = null);

(statearr_17544_18981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13737__auto__ = null;
var cljs$core$async$state_machine__13737__auto____0 = (function (){
var statearr_17545 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17545[(0)] = cljs$core$async$state_machine__13737__auto__);

(statearr_17545[(1)] = (1));

return statearr_17545;
});
var cljs$core$async$state_machine__13737__auto____1 = (function (state_17503){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_17503);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e17546){var ex__13740__auto__ = e17546;
var statearr_17547_18985 = state_17503;
(statearr_17547_18985[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_17503[(4)]))){
var statearr_17548_18987 = state_17503;
(statearr_17548_18987[(1)] = cljs.core.first((state_17503[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18988 = state_17503;
state_17503 = G__18988;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13737__auto__ = function(state_17503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13737__auto____1.call(this,state_17503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13737__auto____0;
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13737__auto____1;
return cljs$core$async$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_17549 = f__14324__auto__();
(statearr_17549[(6)] = c__14323__auto___18905);

return statearr_17549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17552 = arguments.length;
switch (G__17552) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___18990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_17593){
var state_val_17594 = (state_17593[(1)]);
if((state_val_17594 === (7))){
var inst_17589 = (state_17593[(2)]);
var state_17593__$1 = state_17593;
var statearr_17595_18991 = state_17593__$1;
(statearr_17595_18991[(2)] = inst_17589);

(statearr_17595_18991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (1))){
var inst_17556 = (new Array(n));
var inst_17557 = inst_17556;
var inst_17558 = (0);
var state_17593__$1 = (function (){var statearr_17596 = state_17593;
(statearr_17596[(7)] = inst_17558);

(statearr_17596[(8)] = inst_17557);

return statearr_17596;
})();
var statearr_17597_18992 = state_17593__$1;
(statearr_17597_18992[(2)] = null);

(statearr_17597_18992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (4))){
var inst_17561 = (state_17593[(9)]);
var inst_17561__$1 = (state_17593[(2)]);
var inst_17562 = (inst_17561__$1 == null);
var inst_17563 = cljs.core.not(inst_17562);
var state_17593__$1 = (function (){var statearr_17598 = state_17593;
(statearr_17598[(9)] = inst_17561__$1);

return statearr_17598;
})();
if(inst_17563){
var statearr_17599_18993 = state_17593__$1;
(statearr_17599_18993[(1)] = (5));

} else {
var statearr_17600_18994 = state_17593__$1;
(statearr_17600_18994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (15))){
var inst_17583 = (state_17593[(2)]);
var state_17593__$1 = state_17593;
var statearr_17601_18995 = state_17593__$1;
(statearr_17601_18995[(2)] = inst_17583);

(statearr_17601_18995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (13))){
var state_17593__$1 = state_17593;
var statearr_17602_18996 = state_17593__$1;
(statearr_17602_18996[(2)] = null);

(statearr_17602_18996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (6))){
var inst_17558 = (state_17593[(7)]);
var inst_17579 = (inst_17558 > (0));
var state_17593__$1 = state_17593;
if(cljs.core.truth_(inst_17579)){
var statearr_17603_18997 = state_17593__$1;
(statearr_17603_18997[(1)] = (12));

} else {
var statearr_17604_18998 = state_17593__$1;
(statearr_17604_18998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (3))){
var inst_17591 = (state_17593[(2)]);
var state_17593__$1 = state_17593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17593__$1,inst_17591);
} else {
if((state_val_17594 === (12))){
var inst_17557 = (state_17593[(8)]);
var inst_17581 = cljs.core.vec(inst_17557);
var state_17593__$1 = state_17593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17593__$1,(15),out,inst_17581);
} else {
if((state_val_17594 === (2))){
var state_17593__$1 = state_17593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17593__$1,(4),ch);
} else {
if((state_val_17594 === (11))){
var inst_17573 = (state_17593[(2)]);
var inst_17574 = (new Array(n));
var inst_17557 = inst_17574;
var inst_17558 = (0);
var state_17593__$1 = (function (){var statearr_17625 = state_17593;
(statearr_17625[(10)] = inst_17573);

(statearr_17625[(7)] = inst_17558);

(statearr_17625[(8)] = inst_17557);

return statearr_17625;
})();
var statearr_17626_19046 = state_17593__$1;
(statearr_17626_19046[(2)] = null);

(statearr_17626_19046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (9))){
var inst_17557 = (state_17593[(8)]);
var inst_17571 = cljs.core.vec(inst_17557);
var state_17593__$1 = state_17593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17593__$1,(11),out,inst_17571);
} else {
if((state_val_17594 === (5))){
var inst_17558 = (state_17593[(7)]);
var inst_17566 = (state_17593[(11)]);
var inst_17561 = (state_17593[(9)]);
var inst_17557 = (state_17593[(8)]);
var inst_17565 = (inst_17557[inst_17558] = inst_17561);
var inst_17566__$1 = (inst_17558 + (1));
var inst_17567 = (inst_17566__$1 < n);
var state_17593__$1 = (function (){var statearr_17628 = state_17593;
(statearr_17628[(12)] = inst_17565);

(statearr_17628[(11)] = inst_17566__$1);

return statearr_17628;
})();
if(cljs.core.truth_(inst_17567)){
var statearr_17630_19049 = state_17593__$1;
(statearr_17630_19049[(1)] = (8));

} else {
var statearr_17631_19050 = state_17593__$1;
(statearr_17631_19050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (14))){
var inst_17586 = (state_17593[(2)]);
var inst_17587 = cljs.core.async.close_BANG_(out);
var state_17593__$1 = (function (){var statearr_17640 = state_17593;
(statearr_17640[(13)] = inst_17586);

return statearr_17640;
})();
var statearr_17641_19053 = state_17593__$1;
(statearr_17641_19053[(2)] = inst_17587);

(statearr_17641_19053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (10))){
var inst_17577 = (state_17593[(2)]);
var state_17593__$1 = state_17593;
var statearr_17642_19054 = state_17593__$1;
(statearr_17642_19054[(2)] = inst_17577);

(statearr_17642_19054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (8))){
var inst_17566 = (state_17593[(11)]);
var inst_17557 = (state_17593[(8)]);
var tmp17632 = inst_17557;
var inst_17557__$1 = tmp17632;
var inst_17558 = inst_17566;
var state_17593__$1 = (function (){var statearr_17643 = state_17593;
(statearr_17643[(7)] = inst_17558);

(statearr_17643[(8)] = inst_17557__$1);

return statearr_17643;
})();
var statearr_17644_19055 = state_17593__$1;
(statearr_17644_19055[(2)] = null);

(statearr_17644_19055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13737__auto__ = null;
var cljs$core$async$state_machine__13737__auto____0 = (function (){
var statearr_17645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17645[(0)] = cljs$core$async$state_machine__13737__auto__);

(statearr_17645[(1)] = (1));

return statearr_17645;
});
var cljs$core$async$state_machine__13737__auto____1 = (function (state_17593){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_17593);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e17646){var ex__13740__auto__ = e17646;
var statearr_17647_19062 = state_17593;
(statearr_17647_19062[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_17593[(4)]))){
var statearr_17648_19064 = state_17593;
(statearr_17648_19064[(1)] = cljs.core.first((state_17593[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19065 = state_17593;
state_17593 = G__19065;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13737__auto__ = function(state_17593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13737__auto____1.call(this,state_17593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13737__auto____0;
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13737__auto____1;
return cljs$core$async$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_17649 = f__14324__auto__();
(statearr_17649[(6)] = c__14323__auto___18990);

return statearr_17649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17652 = arguments.length;
switch (G__17652) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___19071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14324__auto__ = (function (){var switch__13736__auto__ = (function (state_17706){
var state_val_17707 = (state_17706[(1)]);
if((state_val_17707 === (7))){
var inst_17701 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17708_19076 = state_17706__$1;
(statearr_17708_19076[(2)] = inst_17701);

(statearr_17708_19076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (1))){
var inst_17656 = [];
var inst_17657 = inst_17656;
var inst_17658 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17706__$1 = (function (){var statearr_17709 = state_17706;
(statearr_17709[(7)] = inst_17658);

(statearr_17709[(8)] = inst_17657);

return statearr_17709;
})();
var statearr_17710_19081 = state_17706__$1;
(statearr_17710_19081[(2)] = null);

(statearr_17710_19081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (4))){
var inst_17661 = (state_17706[(9)]);
var inst_17661__$1 = (state_17706[(2)]);
var inst_17662 = (inst_17661__$1 == null);
var inst_17663 = cljs.core.not(inst_17662);
var state_17706__$1 = (function (){var statearr_17722 = state_17706;
(statearr_17722[(9)] = inst_17661__$1);

return statearr_17722;
})();
if(inst_17663){
var statearr_17727_19084 = state_17706__$1;
(statearr_17727_19084[(1)] = (5));

} else {
var statearr_17728_19087 = state_17706__$1;
(statearr_17728_19087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (15))){
var inst_17657 = (state_17706[(8)]);
var inst_17693 = cljs.core.vec(inst_17657);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17706__$1,(18),out,inst_17693);
} else {
if((state_val_17707 === (13))){
var inst_17685 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17737_19090 = state_17706__$1;
(statearr_17737_19090[(2)] = inst_17685);

(statearr_17737_19090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (6))){
var inst_17657 = (state_17706[(8)]);
var inst_17690 = inst_17657.length;
var inst_17691 = (inst_17690 > (0));
var state_17706__$1 = state_17706;
if(cljs.core.truth_(inst_17691)){
var statearr_17738_19097 = state_17706__$1;
(statearr_17738_19097[(1)] = (15));

} else {
var statearr_17739_19098 = state_17706__$1;
(statearr_17739_19098[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (17))){
var inst_17698 = (state_17706[(2)]);
var inst_17699 = cljs.core.async.close_BANG_(out);
var state_17706__$1 = (function (){var statearr_17740 = state_17706;
(statearr_17740[(10)] = inst_17698);

return statearr_17740;
})();
var statearr_17741_19100 = state_17706__$1;
(statearr_17741_19100[(2)] = inst_17699);

(statearr_17741_19100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (3))){
var inst_17703 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17706__$1,inst_17703);
} else {
if((state_val_17707 === (12))){
var inst_17657 = (state_17706[(8)]);
var inst_17678 = cljs.core.vec(inst_17657);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17706__$1,(14),out,inst_17678);
} else {
if((state_val_17707 === (2))){
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17706__$1,(4),ch);
} else {
if((state_val_17707 === (11))){
var inst_17661 = (state_17706[(9)]);
var inst_17657 = (state_17706[(8)]);
var inst_17665 = (state_17706[(11)]);
var inst_17675 = inst_17657.push(inst_17661);
var tmp17742 = inst_17657;
var inst_17657__$1 = tmp17742;
var inst_17658 = inst_17665;
var state_17706__$1 = (function (){var statearr_17743 = state_17706;
(statearr_17743[(7)] = inst_17658);

(statearr_17743[(12)] = inst_17675);

(statearr_17743[(8)] = inst_17657__$1);

return statearr_17743;
})();
var statearr_17744_19102 = state_17706__$1;
(statearr_17744_19102[(2)] = null);

(statearr_17744_19102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (9))){
var inst_17658 = (state_17706[(7)]);
var inst_17671 = cljs.core.keyword_identical_QMARK_(inst_17658,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17706__$1 = state_17706;
var statearr_17745_19103 = state_17706__$1;
(statearr_17745_19103[(2)] = inst_17671);

(statearr_17745_19103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (5))){
var inst_17661 = (state_17706[(9)]);
var inst_17658 = (state_17706[(7)]);
var inst_17666 = (state_17706[(13)]);
var inst_17665 = (state_17706[(11)]);
var inst_17665__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17661) : f.call(null,inst_17661));
var inst_17666__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17665__$1,inst_17658);
var state_17706__$1 = (function (){var statearr_17746 = state_17706;
(statearr_17746[(13)] = inst_17666__$1);

(statearr_17746[(11)] = inst_17665__$1);

return statearr_17746;
})();
if(inst_17666__$1){
var statearr_17747_19104 = state_17706__$1;
(statearr_17747_19104[(1)] = (8));

} else {
var statearr_17748_19105 = state_17706__$1;
(statearr_17748_19105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (14))){
var inst_17661 = (state_17706[(9)]);
var inst_17665 = (state_17706[(11)]);
var inst_17680 = (state_17706[(2)]);
var inst_17681 = [];
var inst_17682 = inst_17681.push(inst_17661);
var inst_17657 = inst_17681;
var inst_17658 = inst_17665;
var state_17706__$1 = (function (){var statearr_17749 = state_17706;
(statearr_17749[(14)] = inst_17682);

(statearr_17749[(7)] = inst_17658);

(statearr_17749[(8)] = inst_17657);

(statearr_17749[(15)] = inst_17680);

return statearr_17749;
})();
var statearr_17750_19107 = state_17706__$1;
(statearr_17750_19107[(2)] = null);

(statearr_17750_19107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (16))){
var state_17706__$1 = state_17706;
var statearr_17751_19108 = state_17706__$1;
(statearr_17751_19108[(2)] = null);

(statearr_17751_19108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (10))){
var inst_17673 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
if(cljs.core.truth_(inst_17673)){
var statearr_17752_19218 = state_17706__$1;
(statearr_17752_19218[(1)] = (11));

} else {
var statearr_17753_19220 = state_17706__$1;
(statearr_17753_19220[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (18))){
var inst_17695 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17754_19227 = state_17706__$1;
(statearr_17754_19227[(2)] = inst_17695);

(statearr_17754_19227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (8))){
var inst_17666 = (state_17706[(13)]);
var state_17706__$1 = state_17706;
var statearr_17756_19232 = state_17706__$1;
(statearr_17756_19232[(2)] = inst_17666);

(statearr_17756_19232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13737__auto__ = null;
var cljs$core$async$state_machine__13737__auto____0 = (function (){
var statearr_17757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17757[(0)] = cljs$core$async$state_machine__13737__auto__);

(statearr_17757[(1)] = (1));

return statearr_17757;
});
var cljs$core$async$state_machine__13737__auto____1 = (function (state_17706){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13736__auto__(state_17706);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e17758){var ex__13740__auto__ = e17758;
var statearr_17759_19238 = state_17706;
(statearr_17759_19238[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_17706[(4)]))){
var statearr_17760_19239 = state_17706;
(statearr_17760_19239[(1)] = cljs.core.first((state_17706[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19241 = state_17706;
state_17706 = G__19241;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13737__auto__ = function(state_17706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13737__auto____1.call(this,state_17706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13737__auto____0;
cljs$core$async$state_machine__13737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13737__auto____1;
return cljs$core$async$state_machine__13737__auto__;
})()
})();
var state__14325__auto__ = (function (){var statearr_17762 = f__14324__auto__();
(statearr_17762[(6)] = c__14323__auto___19071);

return statearr_17762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
