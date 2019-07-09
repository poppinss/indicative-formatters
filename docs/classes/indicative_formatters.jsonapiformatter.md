> **[indicative-formatters](../README.md)**

[Globals](../README.md) / [indicative-formatters](../modules/indicative_formatters.md) / [JsonApiFormatter](indicative_formatters.jsonapiformatter.md) /

# Class: JsonApiFormatter

Vanilla formatter is a plain formatter to collect validation
errors

## Hierarchy

* **JsonApiFormatter**

## Implements

* `ErrorFormatterContract`

### Index

#### Properties

* [errors](indicative_formatters.jsonapiformatter.md#errors)

#### Methods

* [addError](indicative_formatters.jsonapiformatter.md#adderror)
* [toJSON](indicative_formatters.jsonapiformatter.md#tojson)

## Properties

###  errors

• **errors**: *[JsonApiErrorNode](../modules/indicative_formatters.md#jsonapierrornode)[]* =  []

## Methods

###  addError

▸ **addError**(`error`: `Error` | string, `field`: string, `rule`: string, `args`: `Array`): *void*

Adds error to the list of existing errors

**Parameters:**

Name | Type |
------ | ------ |
`error` | `Error` \| string |
`field` | string |
`rule` | string |
`args` | `Array` |

**Returns:** *void*

___

###  toJSON

▸ **toJSON**(): *object | null*

Returns an array of errors or `null` when there are no
errors

**Returns:** *object | null*