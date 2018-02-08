// 在当前页面注入脚本
injectJs(chrome.extension.getURL('angular.min.js'));
injectJs(chrome.extension.getURL('app.js'));

/**
 * 将chrome环境的js插入到dom
 * @param srcFile chrome.extension.getURL('jquery.min.js');
 */
function injectJs(srcFile) {
    var scr = document.createElement('script');
    scr.src = srcFile;
    document.getElementsByTagName('head')[0].appendChild(scr);
}


/**
 * 函数队列
 * @param processTime 间隔时间 default 1000
 * @example
 * var queue = new QueueEnginer(2000);
 * queue.add(function () {console.log(1);});
 * queue.add(function () {console.log(2);});
 * queue.end(function(){alert('执行完毕');});
 * queue.start();
 */
function QueueEnginer(processTime) {
    this.Queue = []; // 队列数组
    this.processTime = processTime || 1000;
}
QueueEnginer.prototype = {
    // 创建队列
    add: function (fn) {
        this.Queue.push({
            fn: fn
        });
    },
    // 处理队列
    process: function () {
        // 取出队列中的第一个
        // 并从this.Queue中删除这个事件
        var queue = this.Queue.shift();

        // 如果队列已空，执行end()
        // 并退出运行
        if(!queue) {
            if(typeof this.endFun === 'function') {
                this.endFun();
            }
            return;
        };

        // 执行事件
        queue.fn();

        // 清除当前queue
        queue = null;

        // 继续执行下一个队列
        this.start();
    },
    // 开始队列
    start: function () {
        var _this = this;
        // 执行当前queue
        setTimeout(function () {
            _this.process();
        }, _this.processTime);
    },
    endFun: null,
    // 队列结束回调
    end: function (fn) {
        if(typeof fn === 'function') {
            this.endFun = fn;
        }
    }
}

/**
 * 扩展日期函数
 * @param format
 * @returns {*}
 * @example var d =new Date().format('yyyy-MM-dd');
 */
Date.prototype.format =function(format)
{
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
        (this.getFullYear()+"").substr(4- RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length==1? o[k] :
                ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}

/**
 * 数组去重
 * @param key
 * @returns arr
 * @example var newArr = arr.unique('nickname');
 */
Array.prototype.unique = function (key) {
	var key = key || null, temp;
	var hash = {};

	this.forEach(function (v) {
		// 根据传入的key判断哪个作为唯一
		key ? temp = v[key] : temp = v;

		// 用v作为hash的key，这样重复的key会被覆盖的
		hash[temp] = v;
	});

	// 恢复数组
	var arr = [];
	for(var i in hash) {
		arr.push(hash[i]);
	}

	return arr;
}
