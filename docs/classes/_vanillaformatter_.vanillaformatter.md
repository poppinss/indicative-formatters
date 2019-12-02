[indicative-formatters](../README.md) › ["VanillaFormatter"](../modules/_vanillaformatter_.md) › [VanillaFormatter](_vanillaformatter_.vanillaformatter.md)

# Class: VanillaFormatter

Vanilla formatter is a plain formatter to collect validation
errors

## Hierarchy

* **VanillaFormatter**

## Implements

* ErrorFormatterContract

## Index

### Properties

* [errors](_vanillaformatter_.vanillaformatter.md#errors)

### Methods

* [addError](_vanillaformatter_.vanillaformatter.md#adderror)
* [toJSON](_vanillaformatter_.vanillaformatter.md#tojson)

## Properties

###  errors

• **errors**: *[VanillaErrorNode](../modules/_vanillaformatter_.md#vanillaerrornode)[]* =  []

## Methods

###  addError

▸ **addError**(`error`: Error | string, `field`: string, `rule`: string): *void*

Adds error to the list of existing errors

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error &#124; string |
`field` | string |
`rule` | string |

**Returns:** *void*

___

###  toJSON

▸ **toJSON**(): *[VanillaErrorNode](../modules/_vanillaformatter_.md#vanillaerrornode)[] | null*

Returns an array of errors or `null` when there are no
errors

**Returns:** *[VanillaErrorNode](../modules/_vanillaformatter_.md#vanillaerrornode)[] | null*
