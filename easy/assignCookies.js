/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);

    let gIndex = 0;
    let sIndex = 0;
    while (gIndex < g.length && sIndex < s.length)
    {
        if (g[gIndex] <= s[sIndex])
        {
            gIndex += 1;
        }

        sIndex += 1;
    }

    return gIndex;
};
