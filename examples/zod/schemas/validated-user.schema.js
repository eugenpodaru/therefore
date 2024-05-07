/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"ValidatedUser","$ref":"#/$defs/Local","$defs":{"Local":{"type":"object","properties":{"id":{"type":"number"},"username":{"type":"string","minLength":3},"email":{"type":"string","format":"email"}},"required":["email","id","username"],"additionalProperties":true}}};const schema12 = {"type":"object","properties":{"id":{"type":"number"},"username":{"type":"string","minLength":3},"email":{"type":"string","format":"email"}},"required":["email","id","username"],"additionalProperties":true};const func4 = require("ajv/dist/runtime/ucs2length").default;const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;const _errs0 = errors;if(errors === _errs0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((((data.email === undefined) && (missing0 = "email")) || ((data.id === undefined) && (missing0 = "id"))) || ((data.username === undefined) && (missing0 = "username"))){validate10.errors = [{instancePath,schemaPath:"#/$defs/Local/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.id !== undefined){let data0 = data.id;const _errs3 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/$defs/Local/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid1 = _errs3 === errors;}else {var valid1 = true;}if(valid1){if(data.username !== undefined){let data1 = data.username;const _errs5 = errors;if(errors === _errs5){if(typeof data1 === "string"){if(func4(data1) < 3){validate10.errors = [{instancePath:instancePath+"/username",schemaPath:"#/$defs/Local/properties/username/minLength",keyword:"minLength",params:{limit: 3},message:"must NOT have fewer than 3 characters"}];return false;}}else {validate10.errors = [{instancePath:instancePath+"/username",schemaPath:"#/$defs/Local/properties/username/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid1 = _errs5 === errors;}else {var valid1 = true;}if(valid1){if(data.email !== undefined){let data2 = data.email;const _errs7 = errors;if(errors === _errs7){if(errors === _errs7){if(typeof data2 === "string"){if(!(formats0.test(data2))){validate10.errors = [{instancePath:instancePath+"/email",schemaPath:"#/$defs/Local/properties/email/format",keyword:"format",params:{format: "email"},message:"must match format \""+"email"+"\""}];return false;}}else {validate10.errors = [{instancePath:instancePath+"/email",schemaPath:"#/$defs/Local/properties/email/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid1 = _errs7 === errors;}else {var valid1 = true;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/$defs/Local/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;