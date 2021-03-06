/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * Refer 13.1; 
 * It is a SyntaxError if the Identifier "eval" or the Identifier "arguments" occurs within a FormalParameterList
 * of a strict mode FunctionDeclaration or FunctionExpression.
 *
 * @path ch13/13.1/13.1-21-s.js
 * @description StrictMode - SyntaxError is thrown if the identifier 'arguments' appears within a FormalParameterList of a strict mode FunctionExpression in strict eval code
 * @onlyStrict
 */


function testcase() {

        try {
            eval("'use strict'; var _13_1_21_fun = function (arguments) { }");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
