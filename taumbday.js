function taumBday(bn, wn, bcn, wcn, zn) {
    let b = BigInt(bn);
    let w = BigInt(wn);
    let bc = BigInt(bcn);
    let wc = BigInt(wcn);
    let z = BigInt(zn);

    if (bc === wc) {
        return ((b * bc) + (w * wc));
    }
    else if ((bc + z) < wc) {
        return (((b + w) * bc) + (w * z));
    } else if ((wc + z) < bc) {
        return (((b + w) * wc) + (b * z));
    } else {
        return ((b * bc) + (w * wc));
    }
}

console.log(
	    taumBday(742407782, 90529439, 847666641, 8651519, 821801924),
	    taumBday(142640749, 652432197, 701695848, 936714099, 324221606),
	    taumBday(736418699, 754161925, 912285746, 841360803, 736841333),
	    taumBday(177076565, 651852957, 926160119, 137199984, 872396383),
	    taumBday(232813954, 654376491, 933554781, 63130979, 441062505),
	    taumBday(988402860, 283959645, 572488886, 802335530, 193057740),
	    taumBday(571683259, 397259663, 136103531, 271866251, 405911181),
);
