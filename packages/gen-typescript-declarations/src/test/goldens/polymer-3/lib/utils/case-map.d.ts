/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/utils/case-map.js
 */


// tslint:disable:variable-name API description

export {dashToCamelCase};


/**
 * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
 * (e.g. `fooBarBaz`).
 *
 * @returns Camel-case representation of the identifier
 */
declare function dashToCamelCase(dash: string): string;

export {camelToDashCase};


/**
 * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
 * (e.g. `foo-bar-baz`).
 *
 * @returns Dash-case representation of the identifier
 */
declare function camelToDashCase(camel: string): string;
