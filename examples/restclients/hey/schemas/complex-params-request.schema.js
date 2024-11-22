/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import { default as ajvDistRuntimeUcs2LengthDefault } from 'ajv/dist/runtime/ucs2length.js';
import { default as ajvDistRuntimeEqualDefault } from 'ajv/dist/runtime/equal.js';
"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"ComplexParamsRequest","type":"object","properties":{"enabled":{"type":"boolean","default":true},"key":{"type":["string","null"],"maxLength":64,"pattern":"^[a-zA-Z0-9_]*$"},"listOfModels":{"type":["array","null"],"items":{"$ref":"#/$defs/ModelWithString"}},"listOfStrings":{"type":["array","null"],"items":{"type":"string"}},"name":{"type":["string","null"],"maxLength":255},"parameters":{"anyOf":[{"$ref":"#/$defs/ModelWithString"},{"$ref":"#/$defs/ModelWithEnum"},{"$ref":"#/$defs/ModelWithArray"},{"$ref":"#/$defs/ModelWithDictionary"}]},"type":{"enum":["Monkey","Horse","Bird"]},"user":{"type":"object","properties":{"id":{"type":"integer"},"name":{"type":["string","null"]}},"additionalProperties":true}},"required":["key","name","parameters","type"],"additionalProperties":true,"$defs":{"ModelWithString":{"type":"object","description":"This is a model with one string property","properties":{"prop":{"type":"string","description":"This is a simple string property"}},"additionalProperties":true},"ModelWithEnum":{"type":"object","description":"This is a model with one enum","properties":{"bool":{"description":"Simple boolean enum","const":true},"foo_bar-enum":{"description":"This is a simple enum with strings","enum":["Success","Warning","Error","ØÆÅ字符串"]},"statusCode":{"description":"These are the HTTP error code enums","enum":["100","200 FOO","300 FOO_BAR","400 foo-bar","500 foo.bar","600 foo&bar"]}},"additionalProperties":true},"ModelWithArray":{"type":"object","description":"This is a model with one property containing an array","properties":{"prop":{"type":"array","items":{"$ref":"#/$defs/ModelWithString"}},"propWithFile":{"type":"array","items":{}},"propWithNumber":{"type":"array","items":{"type":"number"}}},"additionalProperties":true},"ModelWithDictionary":{"type":"object","description":"This is a model with one property containing a dictionary","properties":{"prop":{"type":"object","additionalProperties":{"type":"string"}}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"This is a model with one string property","properties":{"prop":{"type":"string","description":"This is a simple string property"}},"additionalProperties":true};const schema14 = {"type":"object","description":"This is a model with one enum","properties":{"bool":{"description":"Simple boolean enum","const":true},"foo_bar-enum":{"description":"This is a simple enum with strings","enum":["Success","Warning","Error","ØÆÅ字符串"]},"statusCode":{"description":"These are the HTTP error code enums","enum":["100","200 FOO","300 FOO_BAR","400 foo-bar","500 foo.bar","600 foo&bar"]}},"additionalProperties":true};const schema17 = {"type":"object","description":"This is a model with one property containing a dictionary","properties":{"prop":{"type":"object","additionalProperties":{"type":"string"}}},"additionalProperties":true};const func4 = (ajvDistRuntimeUcs2LengthDefault.default ?? ajvDistRuntimeUcs2LengthDefault);const func0 = (ajvDistRuntimeEqualDefault.default ?? ajvDistRuntimeEqualDefault);const pattern0 = new RegExp("^[a-zA-Z0-9_]*$", "u");const schema15 = {"type":"object","description":"This is a model with one property containing an array","properties":{"prop":{"type":"array","items":{"$ref":"#/$defs/ModelWithString"}},"propWithFile":{"type":"array","items":{}},"propWithNumber":{"type":"array","items":{"type":"number"}}},"additionalProperties":true};function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.prop !== undefined){let data0 = data.prop;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){let data1 = data0[i0];const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){if(data1.prop !== undefined){if(typeof data1.prop !== "string"){validate11.errors = [{instancePath:instancePath+"/prop/" + i0+"/prop",schemaPath:"#/$defs/ModelWithString/properties/prop/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate11.errors = [{instancePath:instancePath+"/prop/" + i0,schemaPath:"#/$defs/ModelWithString/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/prop",schemaPath:"#/properties/prop/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.propWithFile !== undefined){const _errs10 = errors;if(errors === _errs10){if(!(Array.isArray(data.propWithFile))){validate11.errors = [{instancePath:instancePath+"/propWithFile",schemaPath:"#/properties/propWithFile/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.propWithNumber !== undefined){let data4 = data.propWithNumber;const _errs12 = errors;if(errors === _errs12){if(Array.isArray(data4)){var valid4 = true;const len1 = data4.length;for(let i1=0; i1<len1; i1++){let data5 = data4[i1];const _errs14 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate11.errors = [{instancePath:instancePath+"/propWithNumber/" + i1,schemaPath:"#/properties/propWithNumber/items/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs14 === errors;if(!valid4){break;}}}else {validate11.errors = [{instancePath:instancePath+"/propWithNumber",schemaPath:"#/properties/propWithNumber/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs12 === errors;}else {var valid0 = true;}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.enabled === undefined){data.enabled = true;}let missing0;if(((((data.key === undefined) && (missing0 = "key")) || ((data.name === undefined) && (missing0 = "name"))) || ((data.parameters === undefined) && (missing0 = "parameters"))) || ((data.type === undefined) && (missing0 = "type"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs2 = errors;if(typeof data.enabled !== "boolean"){validate10.errors = [{instancePath:instancePath+"/enabled",schemaPath:"#/properties/enabled/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs2 === errors;if(valid0){if(data.key !== undefined){let data1 = data.key;const _errs4 = errors;if((typeof data1 !== "string") && (data1 !== null)){validate10.errors = [{instancePath:instancePath+"/key",schemaPath:"#/properties/key/type",keyword:"type",params:{type: schema11.properties.key.type},message:"must be string,null"}];return false;}if(errors === _errs4){if(typeof data1 === "string"){if(func4(data1) > 64){validate10.errors = [{instancePath:instancePath+"/key",schemaPath:"#/properties/key/maxLength",keyword:"maxLength",params:{limit: 64},message:"must NOT have more than 64 characters"}];return false;}else {if(!pattern0.test(data1)){validate10.errors = [{instancePath:instancePath+"/key",schemaPath:"#/properties/key/pattern",keyword:"pattern",params:{pattern: "^[a-zA-Z0-9_]*$"},message:"must match pattern \""+"^[a-zA-Z0-9_]*$"+"\""}];return false;}}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.listOfModels !== undefined){let data2 = data.listOfModels;const _errs6 = errors;if((!(Array.isArray(data2))) && (data2 !== null)){validate10.errors = [{instancePath:instancePath+"/listOfModels",schemaPath:"#/properties/listOfModels/type",keyword:"type",params:{type: schema11.properties.listOfModels.type},message:"must be array,null"}];return false;}if(errors === _errs6){if(Array.isArray(data2)){var valid1 = true;const len0 = data2.length;for(let i0=0; i0<len0; i0++){let data3 = data2[i0];const _errs8 = errors;const _errs9 = errors;if(errors === _errs9){if(data3 && typeof data3 == "object" && !Array.isArray(data3)){if(data3.prop !== undefined){if(typeof data3.prop !== "string"){validate10.errors = [{instancePath:instancePath+"/listOfModels/" + i0+"/prop",schemaPath:"#/$defs/ModelWithString/properties/prop/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate10.errors = [{instancePath:instancePath+"/listOfModels/" + i0,schemaPath:"#/$defs/ModelWithString/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs8 === errors;if(!valid1){break;}}}}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.listOfStrings !== undefined){let data5 = data.listOfStrings;const _errs14 = errors;if((!(Array.isArray(data5))) && (data5 !== null)){validate10.errors = [{instancePath:instancePath+"/listOfStrings",schemaPath:"#/properties/listOfStrings/type",keyword:"type",params:{type: schema11.properties.listOfStrings.type},message:"must be array,null"}];return false;}if(errors === _errs14){if(Array.isArray(data5)){var valid4 = true;const len1 = data5.length;for(let i1=0; i1<len1; i1++){const _errs16 = errors;if(typeof data5[i1] !== "string"){validate10.errors = [{instancePath:instancePath+"/listOfStrings/" + i1,schemaPath:"#/properties/listOfStrings/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs16 === errors;if(!valid4){break;}}}}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){let data7 = data.name;const _errs18 = errors;if((typeof data7 !== "string") && (data7 !== null)){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: schema11.properties.name.type},message:"must be string,null"}];return false;}if(errors === _errs18){if(typeof data7 === "string"){if(func4(data7) > 255){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit: 255},message:"must NOT have more than 255 characters"}];return false;}}}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.parameters !== undefined){let data8 = data.parameters;const _errs20 = errors;const _errs21 = errors;let valid5 = false;const _errs22 = errors;const _errs23 = errors;if(errors === _errs23){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){if(data8.prop !== undefined){if(typeof data8.prop !== "string"){const err0 = {instancePath:instancePath+"/parameters/prop",schemaPath:"#/$defs/ModelWithString/properties/prop/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}}}else {const err1 = {instancePath:instancePath+"/parameters",schemaPath:"#/$defs/ModelWithString/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}}var _valid0 = _errs22 === errors;valid5 = valid5 || _valid0;if(!valid5){const _errs28 = errors;const _errs29 = errors;if(errors === _errs29){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){if(data8.bool !== undefined){const _errs32 = errors;if(true !== data8.bool){const err2 = {instancePath:instancePath+"/parameters/bool",schemaPath:"#/$defs/ModelWithEnum/properties/bool/const",keyword:"const",params:{allowedValue: true},message:"must be equal to constant"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}var valid9 = _errs32 === errors;}else {var valid9 = true;}if(valid9){if(data8["foo_bar-enum"] !== undefined){let data11 = data8["foo_bar-enum"];const _errs33 = errors;if(!((((data11 === "Success") || (data11 === "Warning")) || (data11 === "Error")) || (data11 === "ØÆÅ字符串"))){const err3 = {instancePath:instancePath+"/parameters/foo_bar-enum",schemaPath:"#/$defs/ModelWithEnum/properties/foo_bar-enum/enum",keyword:"enum",params:{allowedValues: schema14.properties["foo_bar-enum"].enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err3];}else {vErrors.push(err3);}errors++;}var valid9 = _errs33 === errors;}else {var valid9 = true;}if(valid9){if(data8.statusCode !== undefined){const _errs34 = errors;let valid10;valid10 = false;for(const v0 of schema14.properties.statusCode.enum){if(func0(data8.statusCode, v0)){valid10 = true;break;}}if(!valid10){const err4 = {instancePath:instancePath+"/parameters/statusCode",schemaPath:"#/$defs/ModelWithEnum/properties/statusCode/enum",keyword:"enum",params:{allowedValues: schema14.properties.statusCode.enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err4];}else {vErrors.push(err4);}errors++;}var valid9 = _errs34 === errors;}else {var valid9 = true;}}}}else {const err5 = {instancePath:instancePath+"/parameters",schemaPath:"#/$defs/ModelWithEnum/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err5];}else {vErrors.push(err5);}errors++;}}var _valid0 = _errs28 === errors;valid5 = valid5 || _valid0;if(!valid5){const _errs35 = errors;if(!(validate11(data8, {instancePath:instancePath+"/parameters",parentData:data,parentDataProperty:"parameters",rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var _valid0 = _errs35 === errors;valid5 = valid5 || _valid0;if(!valid5){const _errs36 = errors;const _errs37 = errors;if(errors === _errs37){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){if(data8.prop !== undefined){let data13 = data8.prop;const _errs40 = errors;if(errors === _errs40){if(data13 && typeof data13 == "object" && !Array.isArray(data13)){for(const key0 in data13){const _errs43 = errors;if(typeof data13[key0] !== "string"){const err6 = {instancePath:instancePath+"/parameters/prop/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"#/$defs/ModelWithDictionary/properties/prop/additionalProperties/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err6];}else {vErrors.push(err6);}errors++;}var valid13 = _errs43 === errors;if(!valid13){break;}}}else {const err7 = {instancePath:instancePath+"/parameters/prop",schemaPath:"#/$defs/ModelWithDictionary/properties/prop/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err7];}else {vErrors.push(err7);}errors++;}}}}else {const err8 = {instancePath:instancePath+"/parameters",schemaPath:"#/$defs/ModelWithDictionary/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err8];}else {vErrors.push(err8);}errors++;}}var _valid0 = _errs36 === errors;valid5 = valid5 || _valid0;}}}if(!valid5){const err9 = {instancePath:instancePath+"/parameters",schemaPath:"#/properties/parameters/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};if(vErrors === null){vErrors = [err9];}else {vErrors.push(err9);}errors++;validate10.errors = vErrors;return false;}else {errors = _errs21;if(vErrors !== null){if(_errs21){vErrors.length = _errs21;}else {vErrors = null;}}}var valid0 = _errs20 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){let data15 = data.type;const _errs45 = errors;if(!(((data15 === "Monkey") || (data15 === "Horse")) || (data15 === "Bird"))){validate10.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema11.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs45 === errors;}else {var valid0 = true;}if(valid0){if(data.user !== undefined){let data16 = data.user;const _errs46 = errors;if(errors === _errs46){if(data16 && typeof data16 == "object" && !Array.isArray(data16)){if(data16.id !== undefined){let data17 = data16.id;const _errs49 = errors;if(!(((typeof data17 == "number") && (!(data17 % 1) && !isNaN(data17))) && (isFinite(data17)))){validate10.errors = [{instancePath:instancePath+"/user/id",schemaPath:"#/properties/user/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid14 = _errs49 === errors;}else {var valid14 = true;}if(valid14){if(data16.name !== undefined){let data18 = data16.name;const _errs51 = errors;if((typeof data18 !== "string") && (data18 !== null)){validate10.errors = [{instancePath:instancePath+"/user/name",schemaPath:"#/properties/user/properties/name/type",keyword:"type",params:{type: schema11.properties.user.properties.name.type},message:"must be string,null"}];return false;}var valid14 = _errs51 === errors;}else {var valid14 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/user",schemaPath:"#/properties/user/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs46 === errors;}else {var valid0 = true;}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;