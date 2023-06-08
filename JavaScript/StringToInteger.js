/** Implements the atoi function in JavaScript. */

/**
 * @param {string} s
 * @return {number}
 */

/** 1. Discard all leading whitespaces
 *  2. Check if the next character is '-' or '+'
 *  3. Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
 *  4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
 *  5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
 *  6. Return the integer as the final result.
 * 
 * Note:
 *  Only the space character ' ' is considered a whitespace character.
 */ 


var myAtoi = function(s) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    let i = 0;
    let sign = 1;
    let result = 0;

    while (s[i] === ' ') i++;
    
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i++] === '+' ? 1 : -1;
    }
    
    while (s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i++] - '0');
    }
    
    result *= sign;
    
    return Math.max(Math.min(result, INT_MAX), INT_MIN);
};



