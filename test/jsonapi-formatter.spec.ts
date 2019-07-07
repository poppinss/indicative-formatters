/*
 * indicative-formatters
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { JsonApiFormatter } from '../src/JsonApiFormatter'
import * as test from 'japa'

test.group('JsonApi formatter', () => {
  test('add error message as a string', (assert) => {
    const formatter = new JsonApiFormatter()
    formatter.addError('Invalid username', 'username', 'required', [])

    assert.deepEqual(formatter.toJSON(), {
      errors: [{
        title: 'required',
        detail: 'Invalid username',
        source: {
          pointer: 'username',
        },
        meta: {
          args: [],
        },
      }],
    })
  })

  test('set meta args', (assert) => {
    const formatter = new JsonApiFormatter()
    formatter.addError('Invalid dob', 'dob', 'date_format', ['yy-mm-dd'])

    assert.deepEqual(formatter.toJSON(), {
      errors: [{
        title: 'date_format',
        detail: 'Invalid dob',
        source: {
          pointer: 'dob',
        },
        meta: {
          args: ['yy-mm-dd'],
        },
      }],
    })
  })

  test('add error object message as a string', (assert) => {
    const formatter = new JsonApiFormatter()
    formatter.addError(new Error('Blow up'), 'username', 'required', [])

    assert.deepEqual(formatter.toJSON(), {
      errors: [
        {
          title: 'ENGINE_EXCEPTION',
          detail: 'Blow up',
          source: {
            pointer: 'username',
          },
          meta: {
            args: [],
          },
        },
      ],
    })
  })

  test('return null when there are zero errors', (assert) => {
    const formatter = new JsonApiFormatter()
    assert.isNull(formatter.toJSON())
  })
})
