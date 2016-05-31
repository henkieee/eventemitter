var PageBus = require('./pageEvent.js');
var pb = PageBus('pagebus');
var ul = document.querySelector("#list");
var msg = document.querySelector("#msg");

pb.on('hello', function(msg)
           {
	           var li = document.createElement("li");
	           li.appendChild(document.createTextNode(msg));
	           ul.appendChild(li);
           });


document.querySelector("button").onclick = function()
{
	pb.emit('hello', msg.value);
	msg.value = '';
};