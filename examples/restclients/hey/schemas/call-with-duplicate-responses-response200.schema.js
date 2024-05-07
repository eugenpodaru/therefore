/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"CallWithDuplicateResponsesResponse200","allOf":[{"$ref":"#/$defs/ModelWithBoolean"},{"$ref":"#/$defs/ModelWithInteger"}],"$defs":{"ModelWithBoolean":{"type":"object","description":"This is a model with one boolean property","properties":{"prop":{"type":"boolean","description":"This is a simple boolean property"}},"additionalProperties":true},"ModelWithInteger":{"type":"object","description":"This is a model with one number property","properties":{"prop":{"type":"integer","description":"This is a simple number property"}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"This is a model with one boolean property","properties":{"prop":{"type":"boolean","description":"This is a simple boolean property"}},"additionalProperties":true};const schema13 = {"type":"object","description":"This is a model with one number property","properties":{"prop":{"type":"integer","description":"This is a simple number property"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;const _errs0 = errors;const _errs1 = errors;if(errors === _errs1){if(data && typeof data == "object" && !Array.isArray(data)){if(data.prop !== undefined){if(typeof data.prop !== "boolean"){validate10.errors = [{instancePath:instancePath+"/prop",schemaPath:"#/$defs/ModelWithBoolean/properties/prop/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}}}else {validate10.errors = [{instancePath,schemaPath:"#/$defs/ModelWithBoolean/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs0 === errors;if(valid0){const _errs6 = errors;const _errs7 = errors;if(errors === _errs7){if(data && typeof data == "object" && !Array.isArray(data)){if(data.prop !== undefined){let data1 = data.prop;if(!(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/prop",schemaPath:"#/$defs/ModelWithInteger/properties/prop/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}}}else {validate10.errors = [{instancePath,schemaPath:"#/$defs/ModelWithInteger/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs6 === errors;}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;