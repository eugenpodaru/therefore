/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"PostServiceWithEmptyTagRequest","anyOf":[{"type":"object","additionalProperties":true},{"$ref":"#/$defs/ModelWithReadOnlyAndWriteOnly"},{"$ref":"#/$defs/ModelWithArrayReadOnlyAndWriteOnly"}],"$defs":{"ModelWithReadOnlyAndWriteOnly":{"type":"object","properties":{"bar":{"type":"string"},"baz":{"type":"string"},"foo":{"type":"string"}},"required":["bar","baz","foo"],"additionalProperties":true},"ModelWithArrayReadOnlyAndWriteOnly":{"type":"object","description":"This is a model with one property containing an array","properties":{"prop":{"type":"array","items":{"$ref":"#/$defs/ModelWithReadOnlyAndWriteOnly"}},"propWithFile":{"type":"array","items":{}},"propWithNumber":{"type":"array","items":{"type":"number"}}},"additionalProperties":true}}};const schema12 = {"type":"object","properties":{"bar":{"type":"string"},"baz":{"type":"string"},"foo":{"type":"string"}},"required":["bar","baz","foo"],"additionalProperties":true};const schema13 = {"type":"object","description":"This is a model with one property containing an array","properties":{"prop":{"type":"array","items":{"$ref":"#/$defs/ModelWithReadOnlyAndWriteOnly"}},"propWithFile":{"type":"array","items":{}},"propWithNumber":{"type":"array","items":{"type":"number"}}},"additionalProperties":true};function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.prop !== undefined){let data0 = data.prop;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){let data1 = data0[i0];const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){let missing0;if((((data1.bar === undefined) && (missing0 = "bar")) || ((data1.baz === undefined) && (missing0 = "baz"))) || ((data1.foo === undefined) && (missing0 = "foo"))){validate11.errors = [{instancePath:instancePath+"/prop/" + i0,schemaPath:"#/$defs/ModelWithReadOnlyAndWriteOnly/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data1.bar !== undefined){const _errs8 = errors;if(typeof data1.bar !== "string"){validate11.errors = [{instancePath:instancePath+"/prop/" + i0+"/bar",schemaPath:"#/$defs/ModelWithReadOnlyAndWriteOnly/properties/bar/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs8 === errors;}else {var valid3 = true;}if(valid3){if(data1.baz !== undefined){const _errs10 = errors;if(typeof data1.baz !== "string"){validate11.errors = [{instancePath:instancePath+"/prop/" + i0+"/baz",schemaPath:"#/$defs/ModelWithReadOnlyAndWriteOnly/properties/baz/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs10 === errors;}else {var valid3 = true;}if(valid3){if(data1.foo !== undefined){const _errs12 = errors;if(typeof data1.foo !== "string"){validate11.errors = [{instancePath:instancePath+"/prop/" + i0+"/foo",schemaPath:"#/$defs/ModelWithReadOnlyAndWriteOnly/properties/foo/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}}}}}else {validate11.errors = [{instancePath:instancePath+"/prop/" + i0,schemaPath:"#/$defs/ModelWithReadOnlyAndWriteOnly/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/prop",schemaPath:"#/properties/prop/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.propWithFile !== undefined){const _errs14 = errors;if(errors === _errs14){if(!(Array.isArray(data.propWithFile))){validate11.errors = [{instancePath:instancePath+"/propWithFile",schemaPath:"#/properties/propWithFile/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.propWithNumber !== undefined){let data6 = data.propWithNumber;const _errs16 = errors;if(errors === _errs16){if(Array.isArray(data6)){var valid4 = true;const len1 = data6.length;for(let i1=0; i1<len1; i1++){let data7 = data6[i1];const _errs18 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate11.errors = [{instancePath:instancePath+"/propWithNumber/" + i1,schemaPath:"#/properties/propWithNumber/items/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs18 === errors;if(!valid4){break;}}}else {validate11.errors = [{instancePath:instancePath+"/propWithNumber",schemaPath:"#/properties/propWithNumber/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs16 === errors;}else {var valid0 = true;}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;const _errs0 = errors;let valid0 = false;const _errs1 = errors;if(errors === _errs1){if(data && typeof data == "object" && !Array.isArray(data)){}else {const err0 = {instancePath,schemaPath:"#/anyOf/0/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}}var _valid0 = _errs1 === errors;valid0 = valid0 || _valid0;if(!valid0){const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((((data.bar === undefined) && (missing0 = "bar")) || ((data.baz === undefined) && (missing0 = "baz"))) || ((data.foo === undefined) && (missing0 = "foo"))){const err1 = {instancePath,schemaPath:"#/$defs/ModelWithReadOnlyAndWriteOnly/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}else {if(data.bar !== undefined){const _errs8 = errors;if(typeof data.bar !== "string"){const err2 = {instancePath:instancePath+"/bar",schemaPath:"#/$defs/ModelWithReadOnlyAndWriteOnly/properties/bar/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data.baz !== undefined){const _errs10 = errors;if(typeof data.baz !== "string"){const err3 = {instancePath:instancePath+"/baz",schemaPath:"#/$defs/ModelWithReadOnlyAndWriteOnly/properties/baz/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err3];}else {vErrors.push(err3);}errors++;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data.foo !== undefined){const _errs12 = errors;if(typeof data.foo !== "string"){const err4 = {instancePath:instancePath+"/foo",schemaPath:"#/$defs/ModelWithReadOnlyAndWriteOnly/properties/foo/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err4];}else {vErrors.push(err4);}errors++;}var valid2 = _errs12 === errors;}else {var valid2 = true;}}}}}else {const err5 = {instancePath,schemaPath:"#/$defs/ModelWithReadOnlyAndWriteOnly/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err5];}else {vErrors.push(err5);}errors++;}}var _valid0 = _errs4 === errors;valid0 = valid0 || _valid0;if(!valid0){const _errs14 = errors;if(!(validate11(data, {instancePath,parentData,parentDataProperty,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var _valid0 = _errs14 === errors;valid0 = valid0 || _valid0;}}if(!valid0){const err6 = {instancePath,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};if(vErrors === null){vErrors = [err6];}else {vErrors.push(err6);}errors++;validate10.errors = vErrors;return false;}else {errors = _errs0;if(vErrors !== null){if(_errs0){vErrors.length = _errs0;}else {vErrors = null;}}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;