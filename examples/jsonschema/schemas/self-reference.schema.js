/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"SelfReference","type":"object","properties":{"foo":{"type":"string","title":"foo"},"bar":{"title":"bar","$ref":"#"}},"additionalProperties":true};const wrapper0 = {validate: validate10};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.foo !== undefined){const _errs2 = errors;if(typeof data.foo !== "string"){validate10.errors = [{instancePath:instancePath+"/foo",schemaPath:"#/properties/foo/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.bar !== undefined){const _errs4 = errors;if(!(wrapper0.validate(data.bar, {instancePath:instancePath+"/bar",parentData:data,parentDataProperty:"bar",rootData}))){vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors);errors = vErrors.length;}var valid0 = _errs4 === errors;}else {var valid0 = true;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;