/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"MultipartRequestRequest","type":"object","properties":{"content":{"type":"string"},"data":{"anyOf":[{"$ref":"#/$defs/ModelWithString"},{"type":"null"}]}},"additionalProperties":true,"$defs":{"ModelWithString":{"type":"object","description":"This is a model with one string property","properties":{"prop":{"type":"string","description":"This is a simple string property"}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"This is a model with one string property","properties":{"prop":{"type":"string","description":"This is a simple string property"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.content !== undefined){const _errs2 = errors;if(typeof data.content !== "string"){validate10.errors = [{instancePath:instancePath+"/content",schemaPath:"#/properties/content/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.data !== undefined){let data1 = data.data;const _errs4 = errors;const _errs5 = errors;let valid1 = false;const _errs6 = errors;const _errs7 = errors;if(errors === _errs7){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){if(data1.prop !== undefined){if(typeof data1.prop !== "string"){const err0 = {instancePath:instancePath+"/data/prop",schemaPath:"#/$defs/ModelWithString/properties/prop/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}}}else {const err1 = {instancePath:instancePath+"/data",schemaPath:"#/$defs/ModelWithString/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}}var _valid0 = _errs6 === errors;valid1 = valid1 || _valid0;if(!valid1){const _errs12 = errors;if(data1 !== null){const err2 = {instancePath:instancePath+"/data",schemaPath:"#/properties/data/anyOf/1/type",keyword:"type",params:{type: "null"},message:"must be null"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}var _valid0 = _errs12 === errors;valid1 = valid1 || _valid0;}if(!valid1){const err3 = {instancePath:instancePath+"/data",schemaPath:"#/properties/data/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};if(vErrors === null){vErrors = [err3];}else {vErrors.push(err3);}errors++;validate10.errors = vErrors;return false;}else {errors = _errs5;if(vErrors !== null){if(_errs5){vErrors.length = _errs5;}else {vErrors = null;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;