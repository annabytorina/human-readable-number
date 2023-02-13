const dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(num) {

    let n = num.toString().split('');
    if (n.length === 1) {
        return dg[num];
    } else if (n.length === 2 & num<20) {
        return tn[num%10];
    } else if (n.length === 2 & num>=20) {
       return `${tw[Number(n[0])- 2]} ${dg[Number(n[1])]}`;
    }
    if (n.length === 3) {
        return Number(n[2]) === 0 ? `${dg[Number(n[0])]} hundred ${tw[Number(n[1])- 2]}` : `${dg[Number(n[0])]} hundred ${tw[Number(n[1])- 2]} ${dg[Number(n[2])]}`;
    }
    /*if (n.length === 4) {
        return `${dg[Number(n[0])]} thousand ${dg[Number(n[1])]} hundred ${tw[Number(n[2])- 2]} ${dg[Number(n[3])]}`;
    }*/

}

