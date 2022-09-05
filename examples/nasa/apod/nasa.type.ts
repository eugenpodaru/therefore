/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'

export type GetApodResponse = unknown[]

export const GetApodResponse = {
    validate: require('./schemas/get-apod-response.schema.js') as ValidateFunction<GetApodResponse>,
    get schema() {
        return GetApodResponse.validate.schema
    },
    source: `${__dirname}/../nasa.schema`,
    sourceSymbol: 'Apod.getApodResponse',
    is: (o: unknown): o is GetApodResponse => GetApodResponse.validate(o) === true,
} as const
