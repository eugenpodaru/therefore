/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"User","type":"object","properties":{"id":{"type":"integer","title":"id"},"username":{"type":"string","title":"username"},"firstName":{"type":"string","title":"firstName"},"lastName":{"type":"string","title":"lastName"},"email":{"type":"string","title":"email"},"password":{"type":"string","title":"password"},"phone":{"type":"string","title":"phone"},"userStatus":{"type":"integer","title":"userStatus","description":"User Status"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.id !== undefined){let data0 = data.id;const _errs2 = errors;if(!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.username !== undefined){const _errs4 = errors;if(typeof data.username !== "string"){validate10.errors = [{instancePath:instancePath+"/username",schemaPath:"#/properties/username/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.firstName !== undefined){const _errs6 = errors;if(typeof data.firstName !== "string"){validate10.errors = [{instancePath:instancePath+"/firstName",schemaPath:"#/properties/firstName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.lastName !== undefined){const _errs8 = errors;if(typeof data.lastName !== "string"){validate10.errors = [{instancePath:instancePath+"/lastName",schemaPath:"#/properties/lastName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.email !== undefined){const _errs10 = errors;if(typeof data.email !== "string"){validate10.errors = [{instancePath:instancePath+"/email",schemaPath:"#/properties/email/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.password !== undefined){const _errs12 = errors;if(typeof data.password !== "string"){validate10.errors = [{instancePath:instancePath+"/password",schemaPath:"#/properties/password/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.phone !== undefined){const _errs14 = errors;if(typeof data.phone !== "string"){validate10.errors = [{instancePath:instancePath+"/phone",schemaPath:"#/properties/phone/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.userStatus !== undefined){let data7 = data.userStatus;const _errs16 = errors;if(!(((typeof data7 == "number") && (!(data7 % 1) && !isNaN(data7))) && (isFinite(data7)))){validate10.errors = [{instancePath:instancePath+"/userStatus",schemaPath:"#/properties/userStatus/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs16 === errors;}else {var valid0 = true;}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;