const cache = {
    mul: {},
    fix: {},
    swi: {}
};

const CLICK_DELAY = 200;

const getCache = (type, name) => {
    if (!cache[type]) {
        return [];
    }
    let val = cache[type][name];
    if (val) {
        return val;
    }
    try {
        let sqlite = openSQLite(Attach.getPath("d_points.db"));
        val = sqlite.queryList("select * from points where name = ? and type = ?", name, type);
        cache[type][name] = val;
        return val;
    } catch (e) {
        console.log(e);
        return [];
    }
}
function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

const runMul = (name, isClick, position) => {
    let list = getCache("mul", name);
    for (let row of list) {
        let x1 = row.x1;
        let y1 = row.y1;
        let x2 = row.x2;
        let y2 = row.y2;
        let rIntX = -1;
        let rIntY = -1;
        if (position) {
            x1 = position[0];
            y1 = position[1];
            x2 = position[2];
            y2 = position[3];
        }
        if (row.tolerance) {
            [rIntX, rIntY] = Findscr.findComplexMultiColor(x1, y1, x2, y2, row.color, row.feature, row.exCal, row.dir, row.sim, row.tolerance);
        } else {
            [rIntX, rIntY] = Findscr.findMultiColor(x1, y1, x2, y2, row.color, row.feature, row.dir, row.sim);
        }
        if (rIntX != -1 && rIntY != -1) {
            if (isClick) {
                Input.tap((rIntX + row.dx + random(row.rx)), (rIntY + row.dy + random(row.ry)), 1);
                Thread.sleep(CLICK_DELAY);
            }
            return [rIntX, rIntY];
        }
    }
    return [-1, -1];
}




const tapSwi = (name)=>{
    let list = getCache("swi", name);
    for (let row of list) {
        let x1=row.x1+random(row.dx);
		let y1=row.y1+random(row.dy);
		let x2=row.x2+random(row.rx);
		let y2=row.y2+random(row.ry);
		let time=row.swit;
        Input.swipe(x1,y1,x2,y2,time);
        return true;
    }

}

const tapFix = (name, del = 100) => {
    let list = getCache("fix", name);
    for (let row of list) {
        let x1 = row.x1 + random(row.rx);
        let y1 = row.y1 + random(row.ry);
        Input.tap(x1, y1, 5);
        Thread.sleep(del);
        return true;
    }

};


const tapMul = (name) => {
    let [x] = runMul(name, true);
    return x > -1;
}

const seeMul = (name) => {
    let [x] = runMul(name, false);
    return x > -1;
}

export {
    tapMul,
    seeMul,
    tapFix,
    tapSwi
}