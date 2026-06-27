/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Number = $util.global.Number, $String = $util.global.String, $Boolean = $util.global.Boolean, $Array = $util.global.Array;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const meridian = $root.meridian = (() => {

    /**
     * Namespace meridian.
     * @exports meridian
     * @namespace
     */
    const meridian = {};

    meridian.EmployeeRpcService = (function() {

        /**
         * Constructs a new EmployeeRpcService service.
         * @memberof meridian
         * @classdesc Represents an EmployeeRpcService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        const EmployeeRpcService = function(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        };

        $Object.defineProperty(EmployeeRpcService.prototype = $Object.create($protobuf.rpc.Service.prototype), "constructor", { value: EmployeeRpcService, writable: true, enumerable: false, configurable: true });

        /**
         * Creates new EmployeeRpcService service using the specified rpc implementation.
         * @function create
         * @memberof meridian.EmployeeRpcService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {EmployeeRpcService} RPC service. Useful where requests and/or responses are streamed.
         */
        EmployeeRpcService.create = function(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#updateHybridSchedule}.
         * @memberof meridian.EmployeeRpcService
         * @typedef UpdateHybridScheduleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meridian.LoginResponse} [response] LoginResponse
         */

        /**
         * Calls UpdateHybridSchedule.
         * @memberof meridian.EmployeeRpcService
         * @typedef UpdateHybridSchedule
         * @type {{
         *   (request: meridian.IUpdateScheduleRequest, callback: meridian.EmployeeRpcService.UpdateHybridScheduleCallback): void;
         *   (request: meridian.IUpdateScheduleRequest): Promise<meridian.LoginResponse>;
         *   readonly name: "UpdateHybridSchedule";
         *   readonly path: "/meridian.EmployeeRpcService/UpdateHybridSchedule";
         *   readonly requestType: "UpdateScheduleRequest";
         *   readonly responseType: "LoginResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls UpdateHybridSchedule.
         * @name meridian.EmployeeRpcService#updateHybridSchedule
         * @type {meridian.EmployeeRpcService.UpdateHybridSchedule}
         */
        $Object.defineProperties(EmployeeRpcService.prototype.updateHybridSchedule = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, EmployeeRpcService.prototype.updateHybridSchedule, $root.meridian.UpdateScheduleRequest, $root.meridian.LoginResponse, request, callback);
        }, {
            name: { value: "UpdateHybridSchedule" },
            path: { value: "/meridian.EmployeeRpcService/UpdateHybridSchedule" },
            requestType: { value: "UpdateScheduleRequest" },
            responseType: { value: "LoginResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
        });

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#login}.
         * @memberof meridian.EmployeeRpcService
         * @typedef LoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meridian.LoginResponse} [response] LoginResponse
         */

        /**
         * Calls Login.
         * @memberof meridian.EmployeeRpcService
         * @typedef Login
         * @type {{
         *   (request: meridian.ILoginRequest, callback: meridian.EmployeeRpcService.LoginCallback): void;
         *   (request: meridian.ILoginRequest): Promise<meridian.LoginResponse>;
         *   readonly name: "Login";
         *   readonly path: "/meridian.EmployeeRpcService/Login";
         *   readonly requestType: "LoginRequest";
         *   readonly responseType: "LoginResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls Login.
         * @name meridian.EmployeeRpcService#login
         * @type {meridian.EmployeeRpcService.Login}
         */
        $Object.defineProperties(EmployeeRpcService.prototype.login = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, EmployeeRpcService.prototype.login, $root.meridian.LoginRequest, $root.meridian.LoginResponse, request, callback);
        }, {
            name: { value: "Login" },
            path: { value: "/meridian.EmployeeRpcService/Login" },
            requestType: { value: "LoginRequest" },
            responseType: { value: "LoginResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
        });

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#getEmployees}.
         * @memberof meridian.EmployeeRpcService
         * @typedef GetEmployeesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meridian.EmployeeListResponse} [response] EmployeeListResponse
         */

        /**
         * Calls GetEmployees.
         * @memberof meridian.EmployeeRpcService
         * @typedef GetEmployees
         * @type {{
         *   (request: meridian.IEmptyRequest, callback: meridian.EmployeeRpcService.GetEmployeesCallback): void;
         *   (request: meridian.IEmptyRequest): Promise<meridian.EmployeeListResponse>;
         *   readonly name: "GetEmployees";
         *   readonly path: "/meridian.EmployeeRpcService/GetEmployees";
         *   readonly requestType: "EmptyRequest";
         *   readonly responseType: "EmployeeListResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: true;
         * }}
         */

        /**
         * Calls GetEmployees.
         * @name meridian.EmployeeRpcService#getEmployees
         * @type {meridian.EmployeeRpcService.GetEmployees}
         */
        $Object.defineProperties(EmployeeRpcService.prototype.getEmployees = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, EmployeeRpcService.prototype.getEmployees, $root.meridian.EmptyRequest, $root.meridian.EmployeeListResponse, request, callback);
        }, {
            name: { value: "GetEmployees" },
            path: { value: "/meridian.EmployeeRpcService/GetEmployees" },
            requestType: { value: "EmptyRequest" },
            responseType: { value: "EmployeeListResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: true }
        });

        return EmployeeRpcService;
    })();

    meridian.EmptyRequest = (function() {

        /**
         * Properties of an EmptyRequest.
         * @typedef {Object} meridian.EmptyRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an EmptyRequest.
         * @memberof meridian
         * @interface IEmptyRequest
         * @augments meridian.EmptyRequest.$Properties
         * @deprecated Use meridian.EmptyRequest.$Properties instead.
         */

        /**
         * Shape of an EmptyRequest.
         * @typedef {meridian.EmptyRequest.$Properties} meridian.EmptyRequest.$Shape
         */

        /**
         * Constructs a new EmptyRequest.
         * @memberof meridian
         * @classdesc Represents an EmptyRequest.
         * @constructor
         * @param {meridian.EmptyRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const EmptyRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Creates a new EmptyRequest instance using the specified properties.
         * @function create
         * @memberof meridian.EmptyRequest
         * @static
         * @param {meridian.EmptyRequest.$Properties=} [properties] Properties to set
         * @returns {meridian.EmptyRequest} EmptyRequest instance
         * @type {{
         *   (properties: meridian.EmptyRequest.$Shape): meridian.EmptyRequest & meridian.EmptyRequest.$Shape;
         *   (properties?: meridian.EmptyRequest.$Properties): meridian.EmptyRequest;
         * }}
         */
        EmptyRequest.create = function(properties) {
            return new EmptyRequest(properties);
        };

        /**
         * Encodes the specified EmptyRequest message. Does not implicitly {@link meridian.EmptyRequest.verify|verify} messages.
         * @function encode
         * @memberof meridian.EmptyRequest
         * @static
         * @param {meridian.EmptyRequest.$Properties} message EmptyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified EmptyRequest message, length delimited. Does not implicitly {@link meridian.EmptyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.EmptyRequest
         * @static
         * @param {meridian.EmptyRequest.$Properties} message EmptyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmptyRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.EmptyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.EmptyRequest & meridian.EmptyRequest.$Shape} EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.EmptyRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.EmptyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.EmptyRequest & meridian.EmptyRequest.$Shape} EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmptyRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmptyRequest message.
         * @function verify
         * @memberof meridian.EmptyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmptyRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            return null;
        };

        /**
         * Creates an EmptyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.EmptyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.EmptyRequest} EmptyRequest
         */
        EmptyRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.EmptyRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.EmptyRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            return new $root.meridian.EmptyRequest();
        };

        /**
         * Creates a plain object from an EmptyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.EmptyRequest
         * @static
         * @param {meridian.EmptyRequest} message EmptyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmptyRequest.toObject = function () {
            return {};
        };

        /**
         * Converts this EmptyRequest to JSON.
         * @function toJSON
         * @memberof meridian.EmptyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmptyRequest.prototype.toJSON = function() {
            return EmptyRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for EmptyRequest
         * @function getTypeUrl
         * @memberof meridian.EmptyRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        EmptyRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.EmptyRequest";
        };

        return EmptyRequest;
    })();

    meridian.DepartmentResponse = (function() {

        /**
         * Properties of a DepartmentResponse.
         * @typedef {Object} meridian.DepartmentResponse.$Properties
         * @property {number|null} [id] DepartmentResponse id
         * @property {string|null} [name] DepartmentResponse name
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DepartmentResponse.
         * @memberof meridian
         * @interface IDepartmentResponse
         * @augments meridian.DepartmentResponse.$Properties
         * @deprecated Use meridian.DepartmentResponse.$Properties instead.
         */

        /**
         * Shape of a DepartmentResponse.
         * @typedef {meridian.DepartmentResponse.$Properties} meridian.DepartmentResponse.$Shape
         */

        /**
         * Constructs a new DepartmentResponse.
         * @memberof meridian
         * @classdesc Represents a DepartmentResponse.
         * @constructor
         * @param {meridian.DepartmentResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const DepartmentResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * DepartmentResponse id.
         * @member {number} id
         * @memberof meridian.DepartmentResponse
         * @instance
         */
        DepartmentResponse.prototype.id = 0;

        /**
         * DepartmentResponse name.
         * @member {string} name
         * @memberof meridian.DepartmentResponse
         * @instance
         */
        DepartmentResponse.prototype.name = "";

        /**
         * Creates a new DepartmentResponse instance using the specified properties.
         * @function create
         * @memberof meridian.DepartmentResponse
         * @static
         * @param {meridian.DepartmentResponse.$Properties=} [properties] Properties to set
         * @returns {meridian.DepartmentResponse} DepartmentResponse instance
         * @type {{
         *   (properties: meridian.DepartmentResponse.$Shape): meridian.DepartmentResponse & meridian.DepartmentResponse.$Shape;
         *   (properties?: meridian.DepartmentResponse.$Properties): meridian.DepartmentResponse;
         * }}
         */
        DepartmentResponse.create = function(properties) {
            return new DepartmentResponse(properties);
        };

        /**
         * Encodes the specified DepartmentResponse message. Does not implicitly {@link meridian.DepartmentResponse.verify|verify} messages.
         * @function encode
         * @memberof meridian.DepartmentResponse
         * @static
         * @param {meridian.DepartmentResponse.$Properties} message DepartmentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepartmentResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DepartmentResponse message, length delimited. Does not implicitly {@link meridian.DepartmentResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.DepartmentResponse
         * @static
         * @param {meridian.DepartmentResponse.$Properties} message DepartmentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepartmentResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a DepartmentResponse message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.DepartmentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.DepartmentResponse & meridian.DepartmentResponse.$Shape} DepartmentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepartmentResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.DepartmentResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.id = value;
                        else
                            delete message.id;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DepartmentResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.DepartmentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.DepartmentResponse & meridian.DepartmentResponse.$Shape} DepartmentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepartmentResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DepartmentResponse message.
         * @function verify
         * @memberof meridian.DepartmentResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DepartmentResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a DepartmentResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.DepartmentResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.DepartmentResponse} DepartmentResponse
         */
        DepartmentResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.DepartmentResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.DepartmentResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.DepartmentResponse();
            if (object.id != null)
                if ($Number(object.id) !== 0)
                    message.id = object.id | 0;
            if (object.name != null)
                if (typeof object.name !== "string" || object.name.length)
                    message.name = $String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a DepartmentResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.DepartmentResponse
         * @static
         * @param {meridian.DepartmentResponse} message DepartmentResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DepartmentResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this DepartmentResponse to JSON.
         * @function toJSON
         * @memberof meridian.DepartmentResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DepartmentResponse.prototype.toJSON = function() {
            return DepartmentResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DepartmentResponse
         * @function getTypeUrl
         * @memberof meridian.DepartmentResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DepartmentResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.DepartmentResponse";
        };

        return DepartmentResponse;
    })();

    meridian.HybridScheduleResponse = (function() {

        /**
         * Properties of a HybridScheduleResponse.
         * @typedef {Object} meridian.HybridScheduleResponse.$Properties
         * @property {boolean|null} [monday] HybridScheduleResponse monday
         * @property {boolean|null} [tuesday] HybridScheduleResponse tuesday
         * @property {boolean|null} [wednesday] HybridScheduleResponse wednesday
         * @property {boolean|null} [thursday] HybridScheduleResponse thursday
         * @property {boolean|null} [friday] HybridScheduleResponse friday
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a HybridScheduleResponse.
         * @memberof meridian
         * @interface IHybridScheduleResponse
         * @augments meridian.HybridScheduleResponse.$Properties
         * @deprecated Use meridian.HybridScheduleResponse.$Properties instead.
         */

        /**
         * Shape of a HybridScheduleResponse.
         * @typedef {meridian.HybridScheduleResponse.$Properties} meridian.HybridScheduleResponse.$Shape
         */

        /**
         * Constructs a new HybridScheduleResponse.
         * @memberof meridian
         * @classdesc Represents a HybridScheduleResponse.
         * @constructor
         * @param {meridian.HybridScheduleResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const HybridScheduleResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * HybridScheduleResponse monday.
         * @member {boolean} monday
         * @memberof meridian.HybridScheduleResponse
         * @instance
         */
        HybridScheduleResponse.prototype.monday = false;

        /**
         * HybridScheduleResponse tuesday.
         * @member {boolean} tuesday
         * @memberof meridian.HybridScheduleResponse
         * @instance
         */
        HybridScheduleResponse.prototype.tuesday = false;

        /**
         * HybridScheduleResponse wednesday.
         * @member {boolean} wednesday
         * @memberof meridian.HybridScheduleResponse
         * @instance
         */
        HybridScheduleResponse.prototype.wednesday = false;

        /**
         * HybridScheduleResponse thursday.
         * @member {boolean} thursday
         * @memberof meridian.HybridScheduleResponse
         * @instance
         */
        HybridScheduleResponse.prototype.thursday = false;

        /**
         * HybridScheduleResponse friday.
         * @member {boolean} friday
         * @memberof meridian.HybridScheduleResponse
         * @instance
         */
        HybridScheduleResponse.prototype.friday = false;

        /**
         * Creates a new HybridScheduleResponse instance using the specified properties.
         * @function create
         * @memberof meridian.HybridScheduleResponse
         * @static
         * @param {meridian.HybridScheduleResponse.$Properties=} [properties] Properties to set
         * @returns {meridian.HybridScheduleResponse} HybridScheduleResponse instance
         * @type {{
         *   (properties: meridian.HybridScheduleResponse.$Shape): meridian.HybridScheduleResponse & meridian.HybridScheduleResponse.$Shape;
         *   (properties?: meridian.HybridScheduleResponse.$Properties): meridian.HybridScheduleResponse;
         * }}
         */
        HybridScheduleResponse.create = function(properties) {
            return new HybridScheduleResponse(properties);
        };

        /**
         * Encodes the specified HybridScheduleResponse message. Does not implicitly {@link meridian.HybridScheduleResponse.verify|verify} messages.
         * @function encode
         * @memberof meridian.HybridScheduleResponse
         * @static
         * @param {meridian.HybridScheduleResponse.$Properties} message HybridScheduleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HybridScheduleResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.monday != null && $Object.hasOwnProperty.call(message, "monday") && message.monday !== false)
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.monday);
            if (message.tuesday != null && $Object.hasOwnProperty.call(message, "tuesday") && message.tuesday !== false)
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.tuesday);
            if (message.wednesday != null && $Object.hasOwnProperty.call(message, "wednesday") && message.wednesday !== false)
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.wednesday);
            if (message.thursday != null && $Object.hasOwnProperty.call(message, "thursday") && message.thursday !== false)
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.thursday);
            if (message.friday != null && $Object.hasOwnProperty.call(message, "friday") && message.friday !== false)
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.friday);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified HybridScheduleResponse message, length delimited. Does not implicitly {@link meridian.HybridScheduleResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.HybridScheduleResponse
         * @static
         * @param {meridian.HybridScheduleResponse.$Properties} message HybridScheduleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HybridScheduleResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a HybridScheduleResponse message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.HybridScheduleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.HybridScheduleResponse & meridian.HybridScheduleResponse.$Shape} HybridScheduleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HybridScheduleResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.HybridScheduleResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.monday = value;
                        else
                            delete message.monday;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.tuesday = value;
                        else
                            delete message.tuesday;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.wednesday = value;
                        else
                            delete message.wednesday;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.thursday = value;
                        else
                            delete message.thursday;
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.friday = value;
                        else
                            delete message.friday;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a HybridScheduleResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.HybridScheduleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.HybridScheduleResponse & meridian.HybridScheduleResponse.$Shape} HybridScheduleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HybridScheduleResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HybridScheduleResponse message.
         * @function verify
         * @memberof meridian.HybridScheduleResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HybridScheduleResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.monday != null && $Object.hasOwnProperty.call(message, "monday"))
                if (typeof message.monday !== "boolean")
                    return "monday: boolean expected";
            if (message.tuesday != null && $Object.hasOwnProperty.call(message, "tuesday"))
                if (typeof message.tuesday !== "boolean")
                    return "tuesday: boolean expected";
            if (message.wednesday != null && $Object.hasOwnProperty.call(message, "wednesday"))
                if (typeof message.wednesday !== "boolean")
                    return "wednesday: boolean expected";
            if (message.thursday != null && $Object.hasOwnProperty.call(message, "thursday"))
                if (typeof message.thursday !== "boolean")
                    return "thursday: boolean expected";
            if (message.friday != null && $Object.hasOwnProperty.call(message, "friday"))
                if (typeof message.friday !== "boolean")
                    return "friday: boolean expected";
            return null;
        };

        /**
         * Creates a HybridScheduleResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.HybridScheduleResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.HybridScheduleResponse} HybridScheduleResponse
         */
        HybridScheduleResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.HybridScheduleResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.HybridScheduleResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.HybridScheduleResponse();
            if (object.monday != null)
                if (object.monday)
                    message.monday = $Boolean(object.monday);
            if (object.tuesday != null)
                if (object.tuesday)
                    message.tuesday = $Boolean(object.tuesday);
            if (object.wednesday != null)
                if (object.wednesday)
                    message.wednesday = $Boolean(object.wednesday);
            if (object.thursday != null)
                if (object.thursday)
                    message.thursday = $Boolean(object.thursday);
            if (object.friday != null)
                if (object.friday)
                    message.friday = $Boolean(object.friday);
            return message;
        };

        /**
         * Creates a plain object from a HybridScheduleResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.HybridScheduleResponse
         * @static
         * @param {meridian.HybridScheduleResponse} message HybridScheduleResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HybridScheduleResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.monday = false;
                object.tuesday = false;
                object.wednesday = false;
                object.thursday = false;
                object.friday = false;
            }
            if (message.monday != null && $Object.hasOwnProperty.call(message, "monday"))
                object.monday = message.monday;
            if (message.tuesday != null && $Object.hasOwnProperty.call(message, "tuesday"))
                object.tuesday = message.tuesday;
            if (message.wednesday != null && $Object.hasOwnProperty.call(message, "wednesday"))
                object.wednesday = message.wednesday;
            if (message.thursday != null && $Object.hasOwnProperty.call(message, "thursday"))
                object.thursday = message.thursday;
            if (message.friday != null && $Object.hasOwnProperty.call(message, "friday"))
                object.friday = message.friday;
            return object;
        };

        /**
         * Converts this HybridScheduleResponse to JSON.
         * @function toJSON
         * @memberof meridian.HybridScheduleResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HybridScheduleResponse.prototype.toJSON = function() {
            return HybridScheduleResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for HybridScheduleResponse
         * @function getTypeUrl
         * @memberof meridian.HybridScheduleResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        HybridScheduleResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.HybridScheduleResponse";
        };

        return HybridScheduleResponse;
    })();

    meridian.EmployeeResponse = (function() {

        /**
         * Properties of an EmployeeResponse.
         * @typedef {Object} meridian.EmployeeResponse.$Properties
         * @property {number|null} [id] EmployeeResponse id
         * @property {string|null} [firstName] EmployeeResponse firstName
         * @property {string|null} [lastName] EmployeeResponse lastName
         * @property {string|null} [slackHandle] EmployeeResponse slackHandle
         * @property {string|null} [hireDate] EmployeeResponse hireDate
         * @property {meridian.DepartmentResponse.$Properties|null} [department] EmployeeResponse department
         * @property {meridian.HybridScheduleResponse.$Properties|null} [hybridSchedule] EmployeeResponse hybridSchedule
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an EmployeeResponse.
         * @memberof meridian
         * @interface IEmployeeResponse
         * @augments meridian.EmployeeResponse.$Properties
         * @deprecated Use meridian.EmployeeResponse.$Properties instead.
         */

        /**
         * Shape of an EmployeeResponse.
         * @typedef {meridian.EmployeeResponse.$Properties} meridian.EmployeeResponse.$Shape
         */

        /**
         * Constructs a new EmployeeResponse.
         * @memberof meridian
         * @classdesc Represents an EmployeeResponse.
         * @constructor
         * @param {meridian.EmployeeResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const EmployeeResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * EmployeeResponse id.
         * @member {number} id
         * @memberof meridian.EmployeeResponse
         * @instance
         */
        EmployeeResponse.prototype.id = 0;

        /**
         * EmployeeResponse firstName.
         * @member {string} firstName
         * @memberof meridian.EmployeeResponse
         * @instance
         */
        EmployeeResponse.prototype.firstName = "";

        /**
         * EmployeeResponse lastName.
         * @member {string} lastName
         * @memberof meridian.EmployeeResponse
         * @instance
         */
        EmployeeResponse.prototype.lastName = "";

        /**
         * EmployeeResponse slackHandle.
         * @member {string} slackHandle
         * @memberof meridian.EmployeeResponse
         * @instance
         */
        EmployeeResponse.prototype.slackHandle = "";

        /**
         * EmployeeResponse hireDate.
         * @member {string} hireDate
         * @memberof meridian.EmployeeResponse
         * @instance
         */
        EmployeeResponse.prototype.hireDate = "";

        /**
         * EmployeeResponse department.
         * @member {meridian.DepartmentResponse.$Properties|null|undefined} department
         * @memberof meridian.EmployeeResponse
         * @instance
         */
        EmployeeResponse.prototype.department = null;

        /**
         * EmployeeResponse hybridSchedule.
         * @member {meridian.HybridScheduleResponse.$Properties|null|undefined} hybridSchedule
         * @memberof meridian.EmployeeResponse
         * @instance
         */
        EmployeeResponse.prototype.hybridSchedule = null;

        /**
         * Creates a new EmployeeResponse instance using the specified properties.
         * @function create
         * @memberof meridian.EmployeeResponse
         * @static
         * @param {meridian.EmployeeResponse.$Properties=} [properties] Properties to set
         * @returns {meridian.EmployeeResponse} EmployeeResponse instance
         * @type {{
         *   (properties: meridian.EmployeeResponse.$Shape): meridian.EmployeeResponse & meridian.EmployeeResponse.$Shape;
         *   (properties?: meridian.EmployeeResponse.$Properties): meridian.EmployeeResponse;
         * }}
         */
        EmployeeResponse.create = function(properties) {
            return new EmployeeResponse(properties);
        };

        /**
         * Encodes the specified EmployeeResponse message. Does not implicitly {@link meridian.EmployeeResponse.verify|verify} messages.
         * @function encode
         * @memberof meridian.EmployeeResponse
         * @static
         * @param {meridian.EmployeeResponse.$Properties} message EmployeeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmployeeResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.firstName != null && $Object.hasOwnProperty.call(message, "firstName") && message.firstName !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
            if (message.lastName != null && $Object.hasOwnProperty.call(message, "lastName") && message.lastName !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastName);
            if (message.slackHandle != null && $Object.hasOwnProperty.call(message, "slackHandle") && message.slackHandle !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.slackHandle);
            if (message.hireDate != null && $Object.hasOwnProperty.call(message, "hireDate") && message.hireDate !== "")
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.hireDate);
            if (message.department != null && $Object.hasOwnProperty.call(message, "department"))
                $root.meridian.DepartmentResponse.encode(message.department, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.hybridSchedule != null && $Object.hasOwnProperty.call(message, "hybridSchedule"))
                $root.meridian.HybridScheduleResponse.encode(message.hybridSchedule, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified EmployeeResponse message, length delimited. Does not implicitly {@link meridian.EmployeeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.EmployeeResponse
         * @static
         * @param {meridian.EmployeeResponse.$Properties} message EmployeeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmployeeResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an EmployeeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.EmployeeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.EmployeeResponse & meridian.EmployeeResponse.$Shape} EmployeeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmployeeResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.EmployeeResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.id = value;
                        else
                            delete message.id;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.firstName = value;
                        else
                            delete message.firstName;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.lastName = value;
                        else
                            delete message.lastName;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.slackHandle = value;
                        else
                            delete message.slackHandle;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.hireDate = value;
                        else
                            delete message.hireDate;
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.department = $root.meridian.DepartmentResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.department);
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        message.hybridSchedule = $root.meridian.HybridScheduleResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.hybridSchedule);
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an EmployeeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.EmployeeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.EmployeeResponse & meridian.EmployeeResponse.$Shape} EmployeeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmployeeResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmployeeResponse message.
         * @function verify
         * @memberof meridian.EmployeeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmployeeResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.firstName != null && $Object.hasOwnProperty.call(message, "firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.lastName != null && $Object.hasOwnProperty.call(message, "lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.slackHandle != null && $Object.hasOwnProperty.call(message, "slackHandle"))
                if (!$util.isString(message.slackHandle))
                    return "slackHandle: string expected";
            if (message.hireDate != null && $Object.hasOwnProperty.call(message, "hireDate"))
                if (!$util.isString(message.hireDate))
                    return "hireDate: string expected";
            if (message.department != null && $Object.hasOwnProperty.call(message, "department")) {
                let error = $root.meridian.DepartmentResponse.verify(message.department, _depth + 1);
                if (error)
                    return "department." + error;
            }
            if (message.hybridSchedule != null && $Object.hasOwnProperty.call(message, "hybridSchedule")) {
                let error = $root.meridian.HybridScheduleResponse.verify(message.hybridSchedule, _depth + 1);
                if (error)
                    return "hybridSchedule." + error;
            }
            return null;
        };

        /**
         * Creates an EmployeeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.EmployeeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.EmployeeResponse} EmployeeResponse
         */
        EmployeeResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.EmployeeResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.EmployeeResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.EmployeeResponse();
            if (object.id != null)
                if ($Number(object.id) !== 0)
                    message.id = object.id | 0;
            if (object.firstName != null)
                if (typeof object.firstName !== "string" || object.firstName.length)
                    message.firstName = $String(object.firstName);
            if (object.lastName != null)
                if (typeof object.lastName !== "string" || object.lastName.length)
                    message.lastName = $String(object.lastName);
            if (object.slackHandle != null)
                if (typeof object.slackHandle !== "string" || object.slackHandle.length)
                    message.slackHandle = $String(object.slackHandle);
            if (object.hireDate != null)
                if (typeof object.hireDate !== "string" || object.hireDate.length)
                    message.hireDate = $String(object.hireDate);
            if (object.department != null) {
                if (!$util.isObject(object.department))
                    throw $TypeError(".meridian.EmployeeResponse.department: object expected");
                message.department = $root.meridian.DepartmentResponse.fromObject(object.department, _depth + 1);
            }
            if (object.hybridSchedule != null) {
                if (!$util.isObject(object.hybridSchedule))
                    throw $TypeError(".meridian.EmployeeResponse.hybridSchedule: object expected");
                message.hybridSchedule = $root.meridian.HybridScheduleResponse.fromObject(object.hybridSchedule, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from an EmployeeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.EmployeeResponse
         * @static
         * @param {meridian.EmployeeResponse} message EmployeeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmployeeResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.firstName = "";
                object.lastName = "";
                object.slackHandle = "";
                object.hireDate = "";
                object.department = null;
                object.hybridSchedule = null;
            }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.firstName != null && $Object.hasOwnProperty.call(message, "firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && $Object.hasOwnProperty.call(message, "lastName"))
                object.lastName = message.lastName;
            if (message.slackHandle != null && $Object.hasOwnProperty.call(message, "slackHandle"))
                object.slackHandle = message.slackHandle;
            if (message.hireDate != null && $Object.hasOwnProperty.call(message, "hireDate"))
                object.hireDate = message.hireDate;
            if (message.department != null && $Object.hasOwnProperty.call(message, "department"))
                object.department = $root.meridian.DepartmentResponse.toObject(message.department, options, _depth + 1);
            if (message.hybridSchedule != null && $Object.hasOwnProperty.call(message, "hybridSchedule"))
                object.hybridSchedule = $root.meridian.HybridScheduleResponse.toObject(message.hybridSchedule, options, _depth + 1);
            return object;
        };

        /**
         * Converts this EmployeeResponse to JSON.
         * @function toJSON
         * @memberof meridian.EmployeeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmployeeResponse.prototype.toJSON = function() {
            return EmployeeResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for EmployeeResponse
         * @function getTypeUrl
         * @memberof meridian.EmployeeResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        EmployeeResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.EmployeeResponse";
        };

        return EmployeeResponse;
    })();

    meridian.EmployeeListResponse = (function() {

        /**
         * Properties of an EmployeeListResponse.
         * @typedef {Object} meridian.EmployeeListResponse.$Properties
         * @property {Array.<meridian.EmployeeResponse.$Properties>|null} [employees] EmployeeListResponse employees
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an EmployeeListResponse.
         * @memberof meridian
         * @interface IEmployeeListResponse
         * @augments meridian.EmployeeListResponse.$Properties
         * @deprecated Use meridian.EmployeeListResponse.$Properties instead.
         */

        /**
         * Shape of an EmployeeListResponse.
         * @typedef {meridian.EmployeeListResponse.$Properties} meridian.EmployeeListResponse.$Shape
         */

        /**
         * Constructs a new EmployeeListResponse.
         * @memberof meridian
         * @classdesc Represents an EmployeeListResponse.
         * @constructor
         * @param {meridian.EmployeeListResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const EmployeeListResponse = function (properties) {
            this.employees = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * EmployeeListResponse employees.
         * @member {Array.<meridian.EmployeeResponse.$Properties>} employees
         * @memberof meridian.EmployeeListResponse
         * @instance
         */
        EmployeeListResponse.prototype.employees = $util.emptyArray;

        /**
         * Creates a new EmployeeListResponse instance using the specified properties.
         * @function create
         * @memberof meridian.EmployeeListResponse
         * @static
         * @param {meridian.EmployeeListResponse.$Properties=} [properties] Properties to set
         * @returns {meridian.EmployeeListResponse} EmployeeListResponse instance
         * @type {{
         *   (properties: meridian.EmployeeListResponse.$Shape): meridian.EmployeeListResponse & meridian.EmployeeListResponse.$Shape;
         *   (properties?: meridian.EmployeeListResponse.$Properties): meridian.EmployeeListResponse;
         * }}
         */
        EmployeeListResponse.create = function(properties) {
            return new EmployeeListResponse(properties);
        };

        /**
         * Encodes the specified EmployeeListResponse message. Does not implicitly {@link meridian.EmployeeListResponse.verify|verify} messages.
         * @function encode
         * @memberof meridian.EmployeeListResponse
         * @static
         * @param {meridian.EmployeeListResponse.$Properties} message EmployeeListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmployeeListResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.employees != null && message.employees.length)
                for (let i = 0; i < message.employees.length; ++i)
                    $root.meridian.EmployeeResponse.encode(message.employees[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified EmployeeListResponse message, length delimited. Does not implicitly {@link meridian.EmployeeListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.EmployeeListResponse
         * @static
         * @param {meridian.EmployeeListResponse.$Properties} message EmployeeListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmployeeListResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an EmployeeListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.EmployeeListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.EmployeeListResponse & meridian.EmployeeListResponse.$Shape} EmployeeListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmployeeListResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.EmployeeListResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.employees && message.employees.length))
                            message.employees = [];
                        message.employees.push($root.meridian.EmployeeResponse.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an EmployeeListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.EmployeeListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.EmployeeListResponse & meridian.EmployeeListResponse.$Shape} EmployeeListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmployeeListResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmployeeListResponse message.
         * @function verify
         * @memberof meridian.EmployeeListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmployeeListResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.employees != null && $Object.hasOwnProperty.call(message, "employees")) {
                if (!$Array.isArray(message.employees))
                    return "employees: array expected";
                for (let i = 0; i < message.employees.length; ++i) {
                    let error = $root.meridian.EmployeeResponse.verify(message.employees[i], _depth + 1);
                    if (error)
                        return "employees." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EmployeeListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.EmployeeListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.EmployeeListResponse} EmployeeListResponse
         */
        EmployeeListResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.EmployeeListResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.EmployeeListResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.EmployeeListResponse();
            if (object.employees) {
                if (!$Array.isArray(object.employees))
                    throw $TypeError(".meridian.EmployeeListResponse.employees: array expected");
                message.employees = $Array(object.employees.length);
                for (let i = 0; i < object.employees.length; ++i) {
                    if (!$util.isObject(object.employees[i]))
                        throw $TypeError(".meridian.EmployeeListResponse.employees: object expected");
                    message.employees[i] = $root.meridian.EmployeeResponse.fromObject(object.employees[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EmployeeListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.EmployeeListResponse
         * @static
         * @param {meridian.EmployeeListResponse} message EmployeeListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmployeeListResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.employees = [];
            if (message.employees && message.employees.length) {
                object.employees = $Array(message.employees.length);
                for (let j = 0; j < message.employees.length; ++j)
                    object.employees[j] = $root.meridian.EmployeeResponse.toObject(message.employees[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this EmployeeListResponse to JSON.
         * @function toJSON
         * @memberof meridian.EmployeeListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmployeeListResponse.prototype.toJSON = function() {
            return EmployeeListResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for EmployeeListResponse
         * @function getTypeUrl
         * @memberof meridian.EmployeeListResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        EmployeeListResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.EmployeeListResponse";
        };

        return EmployeeListResponse;
    })();

    meridian.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @typedef {Object} meridian.LoginRequest.$Properties
         * @property {string|null} [username] LoginRequest username
         * @property {string|null} [password] LoginRequest password
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a LoginRequest.
         * @memberof meridian
         * @interface ILoginRequest
         * @augments meridian.LoginRequest.$Properties
         * @deprecated Use meridian.LoginRequest.$Properties instead.
         */

        /**
         * Shape of a LoginRequest.
         * @typedef {meridian.LoginRequest.$Properties} meridian.LoginRequest.$Shape
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof meridian
         * @classdesc Represents a LoginRequest.
         * @constructor
         * @param {meridian.LoginRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const LoginRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * LoginRequest username.
         * @member {string} username
         * @memberof meridian.LoginRequest
         * @instance
         */
        LoginRequest.prototype.username = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof meridian.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof meridian.LoginRequest
         * @static
         * @param {meridian.LoginRequest.$Properties=} [properties] Properties to set
         * @returns {meridian.LoginRequest} LoginRequest instance
         * @type {{
         *   (properties: meridian.LoginRequest.$Shape): meridian.LoginRequest & meridian.LoginRequest.$Shape;
         *   (properties?: meridian.LoginRequest.$Properties): meridian.LoginRequest;
         * }}
         */
        LoginRequest.create = function(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link meridian.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof meridian.LoginRequest
         * @static
         * @param {meridian.LoginRequest.$Properties} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.username != null && $Object.hasOwnProperty.call(message, "username") && message.username !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && $Object.hasOwnProperty.call(message, "password") && message.password !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link meridian.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.LoginRequest
         * @static
         * @param {meridian.LoginRequest.$Properties} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.LoginRequest & meridian.LoginRequest.$Shape} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.LoginRequest(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.username = value;
                        else
                            delete message.username;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.password = value;
                        else
                            delete message.password;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.LoginRequest & meridian.LoginRequest.$Shape} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof meridian.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.LoginRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.LoginRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.LoginRequest();
            if (object.username != null)
                if (typeof object.username !== "string" || object.username.length)
                    message.username = $String(object.username);
            if (object.password != null)
                if (typeof object.password !== "string" || object.password.length)
                    message.password = $String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.LoginRequest
         * @static
         * @param {meridian.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                object.username = message.username;
            if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof meridian.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function() {
            return LoginRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for LoginRequest
         * @function getTypeUrl
         * @memberof meridian.LoginRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        LoginRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.LoginRequest";
        };

        return LoginRequest;
    })();

    meridian.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @typedef {Object} meridian.LoginResponse.$Properties
         * @property {boolean|null} [success] LoginResponse success
         * @property {string|null} [token] LoginResponse token
         * @property {meridian.EmployeeResponse.$Properties|null} [employee] LoginResponse employee
         * @property {string|null} [errorMessage] LoginResponse errorMessage
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a LoginResponse.
         * @memberof meridian
         * @interface ILoginResponse
         * @augments meridian.LoginResponse.$Properties
         * @deprecated Use meridian.LoginResponse.$Properties instead.
         */

        /**
         * Shape of a LoginResponse.
         * @typedef {meridian.LoginResponse.$Properties} meridian.LoginResponse.$Shape
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof meridian
         * @classdesc Represents a LoginResponse.
         * @constructor
         * @param {meridian.LoginResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const LoginResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * LoginResponse success.
         * @member {boolean} success
         * @memberof meridian.LoginResponse
         * @instance
         */
        LoginResponse.prototype.success = false;

        /**
         * LoginResponse token.
         * @member {string} token
         * @memberof meridian.LoginResponse
         * @instance
         */
        LoginResponse.prototype.token = "";

        /**
         * LoginResponse employee.
         * @member {meridian.EmployeeResponse.$Properties|null|undefined} employee
         * @memberof meridian.LoginResponse
         * @instance
         */
        LoginResponse.prototype.employee = null;

        /**
         * LoginResponse errorMessage.
         * @member {string} errorMessage
         * @memberof meridian.LoginResponse
         * @instance
         */
        LoginResponse.prototype.errorMessage = "";

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof meridian.LoginResponse
         * @static
         * @param {meridian.LoginResponse.$Properties=} [properties] Properties to set
         * @returns {meridian.LoginResponse} LoginResponse instance
         * @type {{
         *   (properties: meridian.LoginResponse.$Shape): meridian.LoginResponse & meridian.LoginResponse.$Shape;
         *   (properties?: meridian.LoginResponse.$Properties): meridian.LoginResponse;
         * }}
         */
        LoginResponse.create = function(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link meridian.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof meridian.LoginResponse
         * @static
         * @param {meridian.LoginResponse.$Properties} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.success != null && $Object.hasOwnProperty.call(message, "success") && message.success !== false)
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.token != null && $Object.hasOwnProperty.call(message, "token") && message.token !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            if (message.employee != null && $Object.hasOwnProperty.call(message, "employee"))
                $root.meridian.EmployeeResponse.encode(message.employee, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.errorMessage != null && $Object.hasOwnProperty.call(message, "errorMessage") && message.errorMessage !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.errorMessage);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link meridian.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.LoginResponse
         * @static
         * @param {meridian.LoginResponse.$Properties} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.LoginResponse & meridian.LoginResponse.$Shape} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.LoginResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.success = value;
                        else
                            delete message.success;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.token = value;
                        else
                            delete message.token;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.employee = $root.meridian.EmployeeResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.employee);
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.errorMessage = value;
                        else
                            delete message.errorMessage;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.LoginResponse & meridian.LoginResponse.$Shape} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof meridian.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.employee != null && $Object.hasOwnProperty.call(message, "employee")) {
                let error = $root.meridian.EmployeeResponse.verify(message.employee, _depth + 1);
                if (error)
                    return "employee." + error;
            }
            if (message.errorMessage != null && $Object.hasOwnProperty.call(message, "errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.LoginResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.LoginResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.LoginResponse();
            if (object.success != null)
                if (object.success)
                    message.success = $Boolean(object.success);
            if (object.token != null)
                if (typeof object.token !== "string" || object.token.length)
                    message.token = $String(object.token);
            if (object.employee != null) {
                if (!$util.isObject(object.employee))
                    throw $TypeError(".meridian.LoginResponse.employee: object expected");
                message.employee = $root.meridian.EmployeeResponse.fromObject(object.employee, _depth + 1);
            }
            if (object.errorMessage != null)
                if (typeof object.errorMessage !== "string" || object.errorMessage.length)
                    message.errorMessage = $String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.LoginResponse
         * @static
         * @param {meridian.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.success = false;
                object.token = "";
                object.employee = null;
                object.errorMessage = "";
            }
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
                object.success = message.success;
            if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                object.token = message.token;
            if (message.employee != null && $Object.hasOwnProperty.call(message, "employee"))
                object.employee = $root.meridian.EmployeeResponse.toObject(message.employee, options, _depth + 1);
            if (message.errorMessage != null && $Object.hasOwnProperty.call(message, "errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof meridian.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function() {
            return LoginResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for LoginResponse
         * @function getTypeUrl
         * @memberof meridian.LoginResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        LoginResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.LoginResponse";
        };

        return LoginResponse;
    })();

    meridian.UpdateScheduleRequest = (function() {

        /**
         * Properties of an UpdateScheduleRequest.
         * @typedef {Object} meridian.UpdateScheduleRequest.$Properties
         * @property {number|null} [employeeId] UpdateScheduleRequest employeeId
         * @property {boolean|null} [monday] UpdateScheduleRequest monday
         * @property {boolean|null} [tuesday] UpdateScheduleRequest tuesday
         * @property {boolean|null} [wednesday] UpdateScheduleRequest wednesday
         * @property {boolean|null} [thursday] UpdateScheduleRequest thursday
         * @property {boolean|null} [friday] UpdateScheduleRequest friday
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an UpdateScheduleRequest.
         * @memberof meridian
         * @interface IUpdateScheduleRequest
         * @augments meridian.UpdateScheduleRequest.$Properties
         * @deprecated Use meridian.UpdateScheduleRequest.$Properties instead.
         */

        /**
         * Shape of an UpdateScheduleRequest.
         * @typedef {meridian.UpdateScheduleRequest.$Properties} meridian.UpdateScheduleRequest.$Shape
         */

        /**
         * Constructs a new UpdateScheduleRequest.
         * @memberof meridian
         * @classdesc Represents an UpdateScheduleRequest.
         * @constructor
         * @param {meridian.UpdateScheduleRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const UpdateScheduleRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * UpdateScheduleRequest employeeId.
         * @member {number} employeeId
         * @memberof meridian.UpdateScheduleRequest
         * @instance
         */
        UpdateScheduleRequest.prototype.employeeId = 0;

        /**
         * UpdateScheduleRequest monday.
         * @member {boolean} monday
         * @memberof meridian.UpdateScheduleRequest
         * @instance
         */
        UpdateScheduleRequest.prototype.monday = false;

        /**
         * UpdateScheduleRequest tuesday.
         * @member {boolean} tuesday
         * @memberof meridian.UpdateScheduleRequest
         * @instance
         */
        UpdateScheduleRequest.prototype.tuesday = false;

        /**
         * UpdateScheduleRequest wednesday.
         * @member {boolean} wednesday
         * @memberof meridian.UpdateScheduleRequest
         * @instance
         */
        UpdateScheduleRequest.prototype.wednesday = false;

        /**
         * UpdateScheduleRequest thursday.
         * @member {boolean} thursday
         * @memberof meridian.UpdateScheduleRequest
         * @instance
         */
        UpdateScheduleRequest.prototype.thursday = false;

        /**
         * UpdateScheduleRequest friday.
         * @member {boolean} friday
         * @memberof meridian.UpdateScheduleRequest
         * @instance
         */
        UpdateScheduleRequest.prototype.friday = false;

        /**
         * Creates a new UpdateScheduleRequest instance using the specified properties.
         * @function create
         * @memberof meridian.UpdateScheduleRequest
         * @static
         * @param {meridian.UpdateScheduleRequest.$Properties=} [properties] Properties to set
         * @returns {meridian.UpdateScheduleRequest} UpdateScheduleRequest instance
         * @type {{
         *   (properties: meridian.UpdateScheduleRequest.$Shape): meridian.UpdateScheduleRequest & meridian.UpdateScheduleRequest.$Shape;
         *   (properties?: meridian.UpdateScheduleRequest.$Properties): meridian.UpdateScheduleRequest;
         * }}
         */
        UpdateScheduleRequest.create = function(properties) {
            return new UpdateScheduleRequest(properties);
        };

        /**
         * Encodes the specified UpdateScheduleRequest message. Does not implicitly {@link meridian.UpdateScheduleRequest.verify|verify} messages.
         * @function encode
         * @memberof meridian.UpdateScheduleRequest
         * @static
         * @param {meridian.UpdateScheduleRequest.$Properties} message UpdateScheduleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateScheduleRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.employeeId != null && $Object.hasOwnProperty.call(message, "employeeId") && message.employeeId !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.employeeId);
            if (message.monday != null && $Object.hasOwnProperty.call(message, "monday") && message.monday !== false)
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.monday);
            if (message.tuesday != null && $Object.hasOwnProperty.call(message, "tuesday") && message.tuesday !== false)
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.tuesday);
            if (message.wednesday != null && $Object.hasOwnProperty.call(message, "wednesday") && message.wednesday !== false)
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.wednesday);
            if (message.thursday != null && $Object.hasOwnProperty.call(message, "thursday") && message.thursday !== false)
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.thursday);
            if (message.friday != null && $Object.hasOwnProperty.call(message, "friday") && message.friday !== false)
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.friday);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UpdateScheduleRequest message, length delimited. Does not implicitly {@link meridian.UpdateScheduleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.UpdateScheduleRequest
         * @static
         * @param {meridian.UpdateScheduleRequest.$Properties} message UpdateScheduleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateScheduleRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an UpdateScheduleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.UpdateScheduleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.UpdateScheduleRequest & meridian.UpdateScheduleRequest.$Shape} UpdateScheduleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateScheduleRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.UpdateScheduleRequest(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.employeeId = value;
                        else
                            delete message.employeeId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.monday = value;
                        else
                            delete message.monday;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.tuesday = value;
                        else
                            delete message.tuesday;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.wednesday = value;
                        else
                            delete message.wednesday;
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.thursday = value;
                        else
                            delete message.thursday;
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.friday = value;
                        else
                            delete message.friday;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an UpdateScheduleRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.UpdateScheduleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.UpdateScheduleRequest & meridian.UpdateScheduleRequest.$Shape} UpdateScheduleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateScheduleRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateScheduleRequest message.
         * @function verify
         * @memberof meridian.UpdateScheduleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateScheduleRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.employeeId != null && $Object.hasOwnProperty.call(message, "employeeId"))
                if (!$util.isInteger(message.employeeId))
                    return "employeeId: integer expected";
            if (message.monday != null && $Object.hasOwnProperty.call(message, "monday"))
                if (typeof message.monday !== "boolean")
                    return "monday: boolean expected";
            if (message.tuesday != null && $Object.hasOwnProperty.call(message, "tuesday"))
                if (typeof message.tuesday !== "boolean")
                    return "tuesday: boolean expected";
            if (message.wednesday != null && $Object.hasOwnProperty.call(message, "wednesday"))
                if (typeof message.wednesday !== "boolean")
                    return "wednesday: boolean expected";
            if (message.thursday != null && $Object.hasOwnProperty.call(message, "thursday"))
                if (typeof message.thursday !== "boolean")
                    return "thursday: boolean expected";
            if (message.friday != null && $Object.hasOwnProperty.call(message, "friday"))
                if (typeof message.friday !== "boolean")
                    return "friday: boolean expected";
            return null;
        };

        /**
         * Creates an UpdateScheduleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.UpdateScheduleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.UpdateScheduleRequest} UpdateScheduleRequest
         */
        UpdateScheduleRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.UpdateScheduleRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.UpdateScheduleRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.UpdateScheduleRequest();
            if (object.employeeId != null)
                if ($Number(object.employeeId) !== 0)
                    message.employeeId = object.employeeId | 0;
            if (object.monday != null)
                if (object.monday)
                    message.monday = $Boolean(object.monday);
            if (object.tuesday != null)
                if (object.tuesday)
                    message.tuesday = $Boolean(object.tuesday);
            if (object.wednesday != null)
                if (object.wednesday)
                    message.wednesday = $Boolean(object.wednesday);
            if (object.thursday != null)
                if (object.thursday)
                    message.thursday = $Boolean(object.thursday);
            if (object.friday != null)
                if (object.friday)
                    message.friday = $Boolean(object.friday);
            return message;
        };

        /**
         * Creates a plain object from an UpdateScheduleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.UpdateScheduleRequest
         * @static
         * @param {meridian.UpdateScheduleRequest} message UpdateScheduleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateScheduleRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.employeeId = 0;
                object.monday = false;
                object.tuesday = false;
                object.wednesday = false;
                object.thursday = false;
                object.friday = false;
            }
            if (message.employeeId != null && $Object.hasOwnProperty.call(message, "employeeId"))
                object.employeeId = message.employeeId;
            if (message.monday != null && $Object.hasOwnProperty.call(message, "monday"))
                object.monday = message.monday;
            if (message.tuesday != null && $Object.hasOwnProperty.call(message, "tuesday"))
                object.tuesday = message.tuesday;
            if (message.wednesday != null && $Object.hasOwnProperty.call(message, "wednesday"))
                object.wednesday = message.wednesday;
            if (message.thursday != null && $Object.hasOwnProperty.call(message, "thursday"))
                object.thursday = message.thursday;
            if (message.friday != null && $Object.hasOwnProperty.call(message, "friday"))
                object.friday = message.friday;
            return object;
        };

        /**
         * Converts this UpdateScheduleRequest to JSON.
         * @function toJSON
         * @memberof meridian.UpdateScheduleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateScheduleRequest.prototype.toJSON = function() {
            return UpdateScheduleRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UpdateScheduleRequest
         * @function getTypeUrl
         * @memberof meridian.UpdateScheduleRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UpdateScheduleRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.UpdateScheduleRequest";
        };

        return UpdateScheduleRequest;
    })();

    return meridian;
})();

export {
  $root as default
};
