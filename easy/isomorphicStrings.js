/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = {};
    let mapT = {};

    for (let i = 0; i < s.length; i++)
    {
        if (mapS[s[i]] === mapT[t[i]])
        {
            mapS[s[i]] = i;
            mapT[t[i]] = i;
        }
        else
        {
            return false;
        }
    }

    return true;
};
