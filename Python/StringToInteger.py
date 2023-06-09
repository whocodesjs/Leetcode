# Implements the atoi function which converts a string to an integer.
# The function discards leading whitespace characters and finds the first
# non-whitespace character. It then parses an optional sign followed by
# numerical digits and interprets them as a numerical value.
# Additional characters after the integral number are ignored.
# If the first sequence of non-whitespace characters is not a valid
# integral number or no such sequence exists, the function returns 0.
# Note:
# Only the space character ' ' is considered as whitespace.
# The function assumes a 32-bit signed integer range: [−2^31,  2^31 − 1].
# If the value is out of the representable range, INT_MAX (2^31 − 1) or
# INT_MIN (−2^31) is returned.

class Solution:
    def myAtoi(self, str: str) -> int:
        str = str.strip()  # Remove leading and trailing whitespace
        if not str:  # Check if string is empty
            return 0
        sign = 1  # Initialize sign to positive
        if str[0] in ('-', '+'):  # Check if first character is a sign
            sign = -1 if str[0] == '-' else 1
            str = str[1:]  # Remove the sign character
        num = 0
        for char in str:
            if not char.isdigit():  # Check if the character is a digit
                break
            num = num * 10 + int(char)  # Convert the digit character to an integer and add it to the number
        num = sign * num  # Apply the sign to the number
        # Check if the number exceeds the limits
        if num > 2**31 - 1:  # If the number is larger than the maximum allowed positive value
            return 2**31 - 1  # Return the maximum allowed positive value
        elif num < -2**31:  # If the number is smaller than the minimum allowed negative value
            return -2**31  # Return the minimum allowed negative value
        return num  # Return the final number
