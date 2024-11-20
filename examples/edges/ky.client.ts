/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError } from 'ajv'
import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'

import { CreateConnectTokenRequest, CreateConnectTokenResponse } from './ky.type.js'

/**
 * Token SDK
 */
export class KyurlencodedClient {
    public client: KyInstance

    public auth: {
        basic?: [username: string, password: string] | (() => Promise<[username: string, password: string]>)
    }

    public availableAuth: Set<string>
    public defaultAuth: string[][] | string[] | undefined

    public constructor({
        prefixUrl,
        options,
        auth = {},
        defaultAuth,
        client = ky,
    }: {
        prefixUrl: string
        options?: Options
        auth: {
            basic?: [username: string, password: string] | (() => Promise<[username: string, password: string]>)
        }
        defaultAuth?: string[][] | string[]
        client?: KyInstance
    }) {
        this.client = client.extend({ prefixUrl, throwHttpErrors: false, ...options })
        this.auth = auth
        this.availableAuth = new Set(Object.keys(auth))
        this.defaultAuth = defaultAuth
    }

    /**
     * POST /connect/token
     */
    public createConnectToken({
        body,
    }: { body: CreateConnectTokenRequest }): Promise<
        | SuccessResponse<'200', CreateConnectTokenResponse>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<StatusCode<1 | 3 | 4 | 5>, string, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(CreateConnectTokenRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        const _form = new URLSearchParams()
        for (const [key, value] of Object.entries(_body.right as CreateConnectTokenRequest)) {
            if (value !== null && value !== undefined) {
                _form.set(key, value as string)
            }
        }
        return this.awaitResponse(
            this.buildClient().post('connect/token', {
                body: _form,
            }),
            {
                200: CreateConnectTokenResponse,
            },
            'json',
        ) as ReturnType<this['createConnectToken']>
    }

    public validateRequestBody<Parser extends { parse: (o: unknown) => { left: DefinedError[] } | { right: Body } }, Body>(
        parser: Parser,
        body: unknown,
    ) {
        const _body = parser.parse(body)
        if ('left' in _body) {
            return {
                statusCode: undefined,
                status: undefined,
                headers: undefined,
                left: body,
                validationErrors: _body.left,
                where: 'request:body',
            } satisfies FailureResponse<undefined, unknown, 'request:body', undefined>
        }
        return _body
    }

    public async awaitResponse<
        I,
        S extends Record<PropertyKey, { parse: (o: I) => { left: DefinedError[] } | { right: unknown } } | undefined>,
    >(response: ResponsePromise<I>, schemas: S, responseType?: 'json' | 'text') {
        const result = await response
        const _body = (await (responseType !== undefined ? result[responseType]() : result.text())) as I
        const status =
            result.status < 200
                ? 'informational'
                : result.status < 300
                  ? 'success'
                  : result.status < 400
                    ? 'redirection'
                    : result.status < 500
                      ? 'client-error'
                      : 'server-error'
        const validator = schemas[result.status] ?? schemas.default
        const body = validator?.parse?.(_body)
        if (result.status < 200 || result.status >= 300) {
            return {
                statusCode: result.status.toString(),
                status,
                headers: result.headers,
                left: body !== undefined && 'right' in body ? body.right : _body,
                validationErrors: body !== undefined && 'left' in body ? body.left : undefined,
                where: 'response:statuscode',
            }
        }
        if (body === undefined || 'left' in body) {
            return {
                statusCode: result.status.toString(),
                status,
                headers: result.headers,
                left: _body,
                validationErrors: body?.left,
                where: 'response:body',
            }
        }
        return { statusCode: result.status.toString(), status, headers: result.headers, right: _body }
    }

    protected buildBasicClient(client: KyInstance) {
        return client.extend({
            hooks: {
                beforeRequest: [
                    async (options) => {
                        const basic = this.auth.basic
                        if (basic !== undefined) {
                            const [username, password] = typeof basic === 'function' ? await basic() : basic
                            options.headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`)
                        }
                    },
                ],
            },
        })
    }

    protected buildClient(auths: string[][] | string[] | undefined = this.defaultAuth, client?: KyInstance): KyInstance {
        const auth = (auths ?? [...this.availableAuth])
            .map((auth) => (Array.isArray(auth) ? auth : [auth]))
            .filter((auth) => auth.every((a) => this.availableAuth.has(a)))
        let chosenClient = client ?? this.client
        for (const chosen of auth[0] ?? []) {
            if (chosen === 'basic') {
                chosenClient = this.buildBasicClient(chosenClient)
            }
        }
        return chosenClient
    }
}

export type Status<Major> = Major extends string
    ? Major extends `1${number}`
        ? 'informational'
        : Major extends `2${number}`
          ? 'success'
          : Major extends `3${number}`
            ? 'redirection'
            : Major extends `4${number}`
              ? 'client-error'
              : 'server-error'
    : undefined
export interface SuccessResponse<StatusCode extends string, T> {
    statusCode: StatusCode
    status: Status<StatusCode>
    headers: Headers
    right: T
}
export interface FailureResponse<StatusCode = string, T = unknown, Where = never, HeaderResponse = Headers> {
    statusCode: StatusCode
    status: Status<StatusCode>
    headers: HeaderResponse
    validationErrors: DefinedError[] | undefined
    left: T
    where: Where
}
export type StatusCode<Major extends number = 1 | 2 | 3 | 4 | 5> = `${Major}${number}`