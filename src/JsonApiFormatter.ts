/**
 * @module indicative-formatters
 */

/*
 * indicative-formatters
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { ParsedRule } from 'indicative-parser'
import { ErrorFormatterContract } from 'indicative-compiler'

/**
 * Shape of error node
 */
export type JsonApiErrorNode = {
  source: {
    pointer: string,
  },
  title: string,
  detail: string,
  meta: {
    args: string[],
  },
}

/**
 * Vanilla formatter is a plain formatter to collect validation
 * errors
 */
export class JsonApiFormatter implements ErrorFormatterContract {
  public errors: JsonApiErrorNode[] = []

  /**
   * Adds error to the list of existing errors
   */
  public addError (
    error: Error | string,
    field: string,
    rule: ParsedRule['name'],
    args: ParsedRule['args'],
  ): void {
    let message = ''
    let validation = rule

    if (error instanceof Error) {
      message = error.message
      validation = 'ENGINE_EXCEPTION'
    } else {
      message = error
    }

    this.errors.push({
      source: { pointer: field },
      title: validation,
      detail: message,
      meta: { args },
    })
  }

  /**
   * Returns an array of errors or `null` when there are no
   * errors
   */
  public toJSON (): { errors: JsonApiErrorNode[] } | null {
    return this.errors.length ? { errors: this.errors } : null
  }
}
