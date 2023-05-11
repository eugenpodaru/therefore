/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import cartItemSchema from './schemas/cart-item.schema.json' assert { type: 'json' }
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

export interface CartItem {
    id: string
    name: string
    price: number
    size?: Size
}

export const CartItem = {
    validate: new AjvValidator.default({
        strict: true,
        strictTypes: true,
        useDefaults: true,
        strictSchema: false,
        logger: false,
        loopRequired: 5,
        loopEnum: 5,
    }).compile<CartItem>(cartItemSchema),
    schema: cartItemSchema,
    get errors() {
        return CartItem.validate.errors ?? undefined
    },
    is: (o: unknown): o is CartItem => CartItem.validate(o) === true,
    assert: (o: unknown) => {
        if (!CartItem.validate(o)) {
            throw new AjvValidator.ValidationError(CartItem.errors ?? [])
        }
    },
} as const

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL'
