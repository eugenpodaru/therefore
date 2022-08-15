/**
 * Generated by @zefiros-software/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","oneOf":[{"type":"number"},{"type":"array","items":{"$ref":"#"}}]};const wrapper0 = {validate: validate10};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;const _errs0 = errors;let valid0 = false;let passing0 = null;const _errs1 = errors;if(!((typeof data == "number") && (isFinite(data)))){const err0 = {instancePath,schemaPath:"#/oneOf/0/type",keyword:"type",params:{type: "number"},message:"must be number"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}var _valid0 = _errs1 === errors;if(_valid0){valid0 = true;passing0 = 0;}const _errs3 = errors;if(errors === _errs3){if(Array.isArray(data)){var valid1 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){const _errs5 = errors;if(!(wrapper0.validate(data[i0], {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors);errors = vErrors.length;}var valid1 = _errs5 === errors;if(!valid1){break;}}}else {const err1 = {instancePath,schemaPath:"#/oneOf/1/type",keyword:"type",params:{type: "array"},message:"must be array"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}}var _valid0 = _errs3 === errors;if(_valid0 && valid0){valid0 = false;passing0 = [passing0, 1];}else {if(_valid0){valid0 = true;passing0 = 1;}}if(!valid0){const err2 = {instancePath,schemaPath:"#/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;validate10.errors = vErrors;return false;}else {errors = _errs0;if(vErrors !== null){if(_errs0){vErrors.length = _errs0;}else {vErrors = null;}}}validate10.errors = vErrors;return errors === 0;}