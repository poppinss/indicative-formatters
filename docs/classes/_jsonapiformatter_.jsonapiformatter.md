[indicative-formatters](../README.md) › ["JsonApiFormatter"](../modules/_jsonapiformatter_.md) › [JsonApiFormatter](_jsonapiformatter_.jsonapiformatter.md)

# Class: JsonApiFormatter

Vanilla formatter is a plain formatter to collect validation
errors

## Hierarchy

* **JsonApiFormatter**

## Implements

* ErrorFormatterContract

## Index

### Properties

* [errors](_jsonapiformatter_.jsonapiformatter.md#errors)

### Methods

* [addError](_jsonapiformatter_.jsonapiformatter.md#adderror)
* [toJSON](_jsonapiformatter_.jsonapiformatter.md#tojson)

## Properties

###  errors

• **errors**: *[JsonApiErrorNode](../modules/_jsonapiformatter_.md#jsonapierrornode)[]* =  []

## Methods

###  addError

▸ **addError**(`error`: Error | string, `field`: string, `rule`: string, `args`: Array): *void*

Adds error to the list of existing errors

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error &#124; string |
`field` | string |
`rule` | string |
`args` | Array |

**Returns:** *void*

___

###  toJSON

▸ **toJSON**(): *object | null*

Returns an array of errors or `null` when there are no
errors

**Returns:** *object | null*
