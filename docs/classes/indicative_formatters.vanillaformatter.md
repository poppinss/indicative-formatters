> **[indicative-formatters](../README.md)**

[Globals](../README.md) / [indicative-formatters](../modules/indicative_formatters.md) / [VanillaFormatter](indicative_formatters.vanillaformatter.md) /

# Class: VanillaFormatter

Vanilla formatter is a plain formatter to collect validation
errors

## Hierarchy

* **VanillaFormatter**

## Implements

* `ErrorFormatterContract<VanillaErrorNode>`

### Index

#### Properties

* [errors](indicative_formatters.vanillaformatter.md#errors)

#### Methods

* [addError](indicative_formatters.vanillaformatter.md#adderror)
* [toJSON](indicative_formatters.vanillaformatter.md#tojson)

## Properties

###  errors

• **errors**: *[VanillaErrorNode](../modules/indicative_formatters.md#vanillaerrornode)[]* =  []

## Methods

###  addError

▸ **addError**(`error`: `Error` | string, `field`: string, `rule`: string): *void*

Adds error to the list of existing errors

**Parameters:**

Name | Type |
------ | ------ |
`error` | `Error` \| string |
`field` | string |
`rule` | string |

**Returns:** *void*

___

###  toJSON

▸ **toJSON**(): *[VanillaErrorNode](../modules/indicative_formatters.md#vanillaerrornode)[] | null*

Returns an array of errors or `null` when there are no
errors

**Returns:** *[VanillaErrorNode](../modules/indicative_formatters.md#vanillaerrornode)[] | null*