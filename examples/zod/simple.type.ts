/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as ValidatedUserValidator } from './schemas/validated-user.schema.js'

export interface UserSchema {
    email: string
    id: number
    username: string
}

export interface ValidatedUser {
    email: string
    id: number
    username: string
}

export const ValidatedUser = {
    validate: ValidatedUserValidator as ValidateFunction<ValidatedUser>,
    get schema() {
        return ValidatedUser.validate.schema
    },
    get errors() {
        return ValidatedUser.validate.errors ?? undefined
    },
    is: (o: unknown): o is ValidatedUser => ValidatedUser.validate(o) === true,
    parse: (o: unknown): { right: ValidatedUser } | { left: DefinedError[] } => {
        if (ValidatedUser.is(o)) {
            return { right: o }
        }
        return { left: (ValidatedUser.errors ?? []) as DefinedError[] }
    },
} as const
