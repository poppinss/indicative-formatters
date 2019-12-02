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
export type VanillaErrorNode = {
  message: string,
  validation: string,
  field: string,
}

/**
 * Vanilla formatter is a plain formatter to collect validation
 * errors
 */
export class VanillaFormatter implements ErrorFormatterContract {
  public errors: VanillaErrorNode[] = []

  /**
   * Adds error to the list of existing errors
   */
  public addError (
    error: Error | string,
    field: string,
    rule: ParsedRule['name'],
  ): void {
    let message = ''
    let validation = rule

    if (error instanceof Error) {
      message = error.message
      validation = 'ENGINE_EXCEPTION'
    } else {
      message = error
    }

    this.errors.push({ message, validation, field })
  }

  /**
   * Returns an array of errors or `null` when there are no
   * errors
   */
  public toJSON (): VanillaErrorNode[] | null {
    return this.errors.length ? this.errors : null
  }
}
