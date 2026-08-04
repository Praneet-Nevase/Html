function palindrome(mystring)
{
    var input = mystring.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var reversedinput = input.split('').reverse().join('');

    if (input == reversedinput)
    {
        document.write("<div>" + mystring + " is a palindrome" + "</div>");
    }
    else
    {
        document.write("<div>" + mystring + " is not a palindrome" + "</div>");
    }    
}
palindrome("madam")
palindrome("yaey")
palindrome("Madam, I'm Adam")
palindrome("A man, a plan, a canal - Panama")
palindrome("Was it a car or a cat I saw?")
palindrome("Step on no pets")
palindrome("Eva can I see bees in a cave?")
palindrome("Malayalam")
palindrome("Radar")
palindrome("Rotator")
palindrome("Never even")