[indicative-formatters](../README.md) > [indicative-formatters](../modules/indicative_formatters.md) > [VanillaFormatter](../classes/indicative_formatters.vanillaformatter.md)

# Class: VanillaFormatter

Vanilla formatter is a plain formatter to collect validation errors

## Hierarchy

**VanillaFormatter**

## Implements

* `ErrorFormatterContract`<[VanillaErrorNode](../modules/indicative_formatters.md#vanillaerrornode)>

## Index

### Properties

* [errors](indicative_formatters.vanillaformatter.md#errors)

### Methods

* [addError](indicative_formatters.vanillaformatter.md#adderror)
* [toJSON](indicative_formatters.vanillaformatter.md#tojson)

---

## Properties

<a id="errors"></a>

###  errors

**● errors**: *[VanillaErrorNode](../modules/indicative_formatters.md#vanillaerrornode)[]* =  []

___

## Methods

<a id="adderror"></a>

###  addError

▸ **addError**(error: *`Error` \| `string`*, field: *`string`*, rule: *`ParsedRule`*): `void`

Adds error to the list of existing errors

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `Error` \| `string` |
| field | `string` |
| rule | `ParsedRule` |

**Returns:** `void`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): [VanillaErrorNode](../modules/indicative_formatters.md#vanillaerrornode)[] \| `null`

Returns an array of errors or `null` when there are no errors

**Returns:** [VanillaErrorNode](../modules/indicative_formatters.md#vanillaerrornode)[] \| `null`

___

