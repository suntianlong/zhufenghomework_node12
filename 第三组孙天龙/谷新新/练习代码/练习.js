function Man(){
    this._events={};
};
var man=new Man();
Man.prototype.on=function(eventName,callback){
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName]=[callback];
    }
};
Man.prototype.emit=function(eventName){
    var args=[].slice.call(arguments,1);
    if(this._events[eventName]){
        var that=this;
        this._events[eventName].forEach(function(item){
            item.apply(that,args);
        })
    }
};
Man.prototype.removeListener=function(eventName,callback){
    if(this._events[eventName]){
        this._events[eventName]=this._events[eventName].filter(function(item){
            return item !=callback;
        })
    }
};

Man.prototype.once=function(eventName,callback){
    console.log(args);
    function one(){
        callback.apply(arguments);
        this.removeListener(eventName,one);
    }
    this.on(eventName,one)
};
function buyPack(who) {
    console.log(`买包给${who}`);
}
function buyCar(who) {
    console.log(`买车给${who}`);
}
man.on('有钱了',buyPack);
man.on('有钱了',buyCar);
man.removeListener('有钱了',buyCar);
man.emit('有钱了','妹子');


//-------------------------------------------------


/*

function Man(){
    this._events={};
};
var man =new Man();
Man.prototype.on=function(eventName,callback){
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName]=[callback];
    }
};
Man.prototype.emit=function(eventName){
    var args=[].slice.call(arguments,1);
    if(this._events[eventName]){
        var that=this;
        this._events[eventName].forEach(function(item){
            item.apply(that,args);
        })
    }
};
Man.prototype.removeListener=function(eventName,callback){
    if(this._events[eventName]){

            this._events[eventName]=this._events[eventName].filter(function(item){
                return item !=callback;
            })
        }
    };

Man.prototype.once=function(eventName,callback){
    console.log(args)
    function one(){
        callback.apply(this,arguments);
        this.removeListener(eventName,one);
    }
    this.on(eventName,one)
};
function buyPack(who){
    console.log(`买包给${who}`)
}
function buyCar(who){
    console.log(`买车给${who}`)
}
man.on('有钱了',buyPack);
man.on('有钱了',buyCar);
man.removeListener('有钱了',buyCar);
man.emit('有钱了','妹子');

*/













