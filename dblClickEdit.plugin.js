//META{"name":"dblClickEdit"}*//

var dblClickEdit = function () {};

dblClickEdit.prototype.start = function () {
    document.addEventListener("dblclick", dblClickEventListener);
};

dblClickEdit.prototype.load = function () {};
dblClickEdit.prototype.unload = function () {
    document.removeEventListener("dblclick", dblClickEventListener);
};
dblClickEdit.prototype.stop = function () {
    document.removeEventListener("dblclick", dblClickEventListener);
};

dblClickEdit.prototype.getName = function () {
    return "Double click edit";
};
dblClickEdit.prototype.getDescription = function () {
    return "Double click messages to edit them";
};
dblClickEdit.prototype.getVersion = function () {
    return "1.1.0";
};
dblClickEdit.prototype.getAuthor = function () {
    return "phit";
};

function dblClickEventListener(e) {
    var parents = getParents(e.target, "message_ccca67")
    if (parents.length > 0) {
        var msg = parents[parents.length - 1];
        var opt = msg.querySelectorAll(".button_d4bf9b");
        for (i = 0; i < opt.length; i++) {
            if (opt[i].getAttribute('aria-label') ==  'Edit') {
                opt[i].click();
                break;
            }
        }
    }
}

function getParents(el, untilClass) {
    var parents = [];
    var p = el.parentNode;
    var iter = 0;
    while (iter < 5 && p !== undefined && p.classList !== undefined && !p.classList.contains(untilClass)) {
        var o = p;
        if (p.classList.contains(untilClass)) {
            parents.push(o);
        }
        p = o.parentNode;
        iter++;
    }
    if (p.classList.contains(untilClass)) {
        var o = p;
        parents.push(o);
    }
    return parents;
}
