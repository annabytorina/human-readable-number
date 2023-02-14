const dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(num) {

    let n = num.toString().split('');
    switch (n.length) {
        case 1: return dg[num];
        case 2: if (num<20) {
                    return tn[num%10];
                } else if (Number(n[1]) === 0) {
                    return `${tw[Number(n[0])- 2]}`;
                } else return `${tw[Number(n[0])- 2]} ${dg[Number(n[1])]}`;
        case 3: if (Number(n[1]) > 0 & Number(n[1]) < 2 ) {
                    return `${dg[Number(n[0])]} hundred ${tn[Number(n[2])]}`;
                } else  if (Number(n[1]) === 0) {
                            if (Number(n[2]) === 0) {
                                return `${dg[Number(n[0])]} hundred`;
                            } else  return `${dg[Number(n[0])]} hundred ${dg[Number(n[2])]}`;
                } else return Number(n[2]) === 0 ? `${dg[Number(n[0])]} hundred ${tw[Number(n[1])- 2]}` : `${dg[Number(n[0])]} hundred ${tw[Number(n[1])- 2]} ${dg[Number(n[2])]}`;
    }
    
}

