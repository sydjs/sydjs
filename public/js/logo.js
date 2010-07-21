window.onload = function () {
    var step = 10,
        pi = Math.PI,
        W = 75,
        H = 48,
        dots = [[[17,8],[11,8],[8,11],[8,13],[11,16],[15,16],[18,18],[18,21],[16,24],[8,24]],
                [[22,8],[26,18],[26,24],[26,18],[30,8]],
                [[35,8],[41,8],[44,11],[44,21],[41,24],[35,24],[35,8]],
                [[55,8],[55,26],[53,29],[48,29],[46,27]],
                [[71,8],[65,8],[62,11],[62,13],[65,16],[69,16],[72,18],[72,21],[70,24],[62,24]]
            ],
        r = Raphael(0, 0, W * step, H * step),
        grid = {
            getPath: function () {
                var shps = [], left = [], right = [];
                for (var i = 0, ii = this.outlines.length; i < ii; i++) {
                    outline = this.outlines[i];
                    shps.push("M");
                    left = [];
                    right = [];
                    for (var j = 0, jj = outline[0].length; j < jj; j++) {
                        left.push(outline[0][j][0] + (Math.random() > .5) * step);
                        left.push(outline[0][j][1] + (Math.random() > .5) * step);
                        right.push(outline[1][j][0] + (Math.random() > .5) * step);
                        right.push(outline[1][j][1] + (Math.random() > .5) * step);
                    }
                    shps = shps.concat(left, right, "z");
                }
                return shps.join();
            },
            init: function (dots, r) {
                r.clear();
                this.shapes = r.path().attr({stroke: "none", fill: "hsb(" + Math.random() + ", .75, .5)", opacity: .5});

                var s = "M", p, n, datap, datan;
                this.sdata = [];
                this.outlines = [];
                for (var j = 0, jj = dots.length; j < jj; j++) {
                    var data = dots[j],
                        outline = this.outlines[j] = [[],[]],
                        i = 0,
                        ii = data.length,
                        last = ii - 1;
                    for (; i < ii; i++) {
                        this.sdata.push(data[i][0] * step + .5);
                        this.sdata.push(data[i][1] * step + .5);

                        datap = data[i - 1];
                        datan = data[i + 1];
                        if ((!i || i == last) && data[0][0] == data[last][0] && data[0][1] == data[last][1]) {
                            if (!i) {
                                datap = data[last - 1];
                            } else {
                                outline[0].push(outline[0][0]);
                                outline[1].unshift(outline[1][outline[1].length - 1]);
                                continue;
                            }
                        }

                        p = n = null;
                        if (datap) {
                            p = Raphael.angle(datap[0], datap[1], data[i][0], data[i][1]);
                        }
                        if (datan) {
                            n = Raphael.angle(datan[0], datan[1], data[i][0], data[i][1]);
                        }
                        var a;
                        if (p == null) {
                            a = (n + 90) * pi / 180;
                        } else if (n == null || p == n) {
                            a = (p - 90) * pi / 180;
                        } else {
                            a = (n + (p - n) / 2) * pi / 180;
                        }
                        if (p - n < 0 && p != null && n != null) {
                            a += pi;
                        }
                        var dist = step * 2 - .1,
                            l = [   data[i][0] * step + dist * Math.cos(a),
                                    data[i][1] * step + dist * Math.sin(a),
                                    data[i][0] * step + dist * Math.cos(a + pi),
                                    data[i][1] * step + dist * Math.sin(a + pi)];
                        // r.path("M" + l).attr({stroke: "#ecc"});
                        for (var k = 0, kk = l.length; k < kk; k++) {
                            l[k] = ~~(l[k] / step) * step + .5;
                        }
                        r.rect(l[0], l[1], step, step).attr({stroke: "#000", opacity: .1});
                        r.rect(l[2], l[3], step, step).attr({stroke: "#000", opacity: .1});
                        outline[0].push([l[0], l[1]]);
                        outline[1].unshift([l[2], l[3]]);
                        if (p == n) {
                            outline[0].push([l[2], l[3]]);
                            outline[1].unshift([l[0], l[1]]);
                        }
                    }
                    this.sdata.push("M");
                }
                r.path("M" + this.sdata).attr({opacity: .3, "stroke-dasharray": ". "});
                this.shapes.attr({path: this.getPath()});
                setTimeout(this.anim, 1000);
            },
            anim: function () {
                grid.shapes.animate({path: grid.getPath(), fill: "hsb(" + Math.random() + ", .75, .5)"}, 5000);
                setTimeout(grid.anim, 7000);
            }
        };
        
        
        grid.init(dots, r);
};