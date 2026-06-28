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
         *   (request: meridian.IUserHeartbeatRequest, callback: meridian.EmployeeRpcService.GetEmployeesCallback): void;
         *   (request: meridian.IUserHeartbeatRequest): Promise<meridian.EmployeeListResponse>;
         *   readonly name: "GetEmployees";
         *   readonly path: "/meridian.EmployeeRpcService/GetEmployees";
         *   readonly requestType: "UserHeartbeatRequest";
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
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, EmployeeRpcService.prototype.getEmployees, $root.meridian.UserHeartbeatRequest, $root.meridian.EmployeeListResponse, request, callback);
        }, {
            name: { value: "GetEmployees" },
            path: { value: "/meridian.EmployeeRpcService/GetEmployees" },
            requestType: { value: "UserHeartbeatRequest" },
            responseType: { value: "EmployeeListResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: true }
        });

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#sendMessage}.
         * @memberof meridian.EmployeeRpcService
         * @typedef SendMessageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meridian.ChatWindowResponse} [response] ChatWindowResponse
         */

        /**
         * Calls SendMessage.
         * @memberof meridian.EmployeeRpcService
         * @typedef SendMessage
         * @type {{
         *   (request: meridian.IChatMessageRequest, callback: meridian.EmployeeRpcService.SendMessageCallback): void;
         *   (request: meridian.IChatMessageRequest): Promise<meridian.ChatWindowResponse>;
         *   readonly name: "SendMessage";
         *   readonly path: "/meridian.EmployeeRpcService/SendMessage";
         *   readonly requestType: "ChatMessageRequest";
         *   readonly responseType: "ChatWindowResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls SendMessage.
         * @name meridian.EmployeeRpcService#sendMessage
         * @type {meridian.EmployeeRpcService.SendMessage}
         */
        $Object.defineProperties(EmployeeRpcService.prototype.sendMessage = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, EmployeeRpcService.prototype.sendMessage, $root.meridian.ChatMessageRequest, $root.meridian.ChatWindowResponse, request, callback);
        }, {
            name: { value: "SendMessage" },
            path: { value: "/meridian.EmployeeRpcService/SendMessage" },
            requestType: { value: "ChatMessageRequest" },
            responseType: { value: "ChatWindowResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
        });

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#listenMessages}.
         * @memberof meridian.EmployeeRpcService
         * @typedef ListenMessagesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meridian.ChatMessageResponse} [response] ChatMessageResponse
         */

        /**
         * Calls ListenMessages.
         * @memberof meridian.EmployeeRpcService
         * @typedef ListenMessages
         * @type {{
         *   (request: meridian.IUserHeartbeatRequest, callback: meridian.EmployeeRpcService.ListenMessagesCallback): void;
         *   (request: meridian.IUserHeartbeatRequest): Promise<meridian.ChatMessageResponse>;
         *   readonly name: "ListenMessages";
         *   readonly path: "/meridian.EmployeeRpcService/ListenMessages";
         *   readonly requestType: "UserHeartbeatRequest";
         *   readonly responseType: "ChatMessageResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: true;
         * }}
         */

        /**
         * Calls ListenMessages.
         * @name meridian.EmployeeRpcService#listenMessages
         * @type {meridian.EmployeeRpcService.ListenMessages}
         */
        $Object.defineProperties(EmployeeRpcService.prototype.listenMessages = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, EmployeeRpcService.prototype.listenMessages, $root.meridian.UserHeartbeatRequest, $root.meridian.ChatMessageResponse, request, callback);
        }, {
            name: { value: "ListenMessages" },
            path: { value: "/meridian.EmployeeRpcService/ListenMessages" },
            requestType: { value: "UserHeartbeatRequest" },
            responseType: { value: "ChatMessageResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: true }
        });

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#getChatHistory}.
         * @memberof meridian.EmployeeRpcService
         * @typedef GetChatHistoryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meridian.ChatHistoryResponse} [response] ChatHistoryResponse
         */

        /**
         * Calls GetChatHistory.
         * @memberof meridian.EmployeeRpcService
         * @typedef GetChatHistory
         * @type {{
         *   (request: meridian.IChatHistoryRequest, callback: meridian.EmployeeRpcService.GetChatHistoryCallback): void;
         *   (request: meridian.IChatHistoryRequest): Promise<meridian.ChatHistoryResponse>;
         *   readonly name: "GetChatHistory";
         *   readonly path: "/meridian.EmployeeRpcService/GetChatHistory";
         *   readonly requestType: "ChatHistoryRequest";
         *   readonly responseType: "ChatHistoryResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls GetChatHistory.
         * @name meridian.EmployeeRpcService#getChatHistory
         * @type {meridian.EmployeeRpcService.GetChatHistory}
         */
        $Object.defineProperties(EmployeeRpcService.prototype.getChatHistory = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, EmployeeRpcService.prototype.getChatHistory, $root.meridian.ChatHistoryRequest, $root.meridian.ChatHistoryResponse, request, callback);
        }, {
            name: { value: "GetChatHistory" },
            path: { value: "/meridian.EmployeeRpcService/GetChatHistory" },
            requestType: { value: "ChatHistoryRequest" },
            responseType: { value: "ChatHistoryResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
        });

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#getMeetings}.
         * @memberof meridian.EmployeeRpcService
         * @typedef GetMeetingsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {meridian.MeetingListResponse} [response] MeetingListResponse
         */

        /**
         * Calls GetMeetings.
         * @memberof meridian.EmployeeRpcService
         * @typedef GetMeetings
         * @type {{
         *   (request: meridian.IMeetingRequest, callback: meridian.EmployeeRpcService.GetMeetingsCallback): void;
         *   (request: meridian.IMeetingRequest): Promise<meridian.MeetingListResponse>;
         *   readonly name: "GetMeetings";
         *   readonly path: "/meridian.EmployeeRpcService/GetMeetings";
         *   readonly requestType: "MeetingRequest";
         *   readonly responseType: "MeetingListResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls GetMeetings.
         * @name meridian.EmployeeRpcService#getMeetings
         * @type {meridian.EmployeeRpcService.GetMeetings}
         */
        $Object.defineProperties(EmployeeRpcService.prototype.getMeetings = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, EmployeeRpcService.prototype.getMeetings, $root.meridian.MeetingRequest, $root.meridian.MeetingListResponse, request, callback);
        }, {
            name: { value: "GetMeetings" },
            path: { value: "/meridian.EmployeeRpcService/GetMeetings" },
            requestType: { value: "MeetingRequest" },
            responseType: { value: "MeetingListResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
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

    meridian.UserHeartbeatRequest = (function() {

        /**
         * Properties of a UserHeartbeatRequest.
         * @typedef {Object} meridian.UserHeartbeatRequest.$Properties
         * @property {number|null} [employeeId] UserHeartbeatRequest employeeId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a UserHeartbeatRequest.
         * @memberof meridian
         * @interface IUserHeartbeatRequest
         * @augments meridian.UserHeartbeatRequest.$Properties
         * @deprecated Use meridian.UserHeartbeatRequest.$Properties instead.
         */

        /**
         * Shape of a UserHeartbeatRequest.
         * @typedef {meridian.UserHeartbeatRequest.$Properties} meridian.UserHeartbeatRequest.$Shape
         */

        /**
         * Constructs a new UserHeartbeatRequest.
         * @memberof meridian
         * @classdesc Represents a UserHeartbeatRequest.
         * @constructor
         * @param {meridian.UserHeartbeatRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const UserHeartbeatRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * UserHeartbeatRequest employeeId.
         * @member {number} employeeId
         * @memberof meridian.UserHeartbeatRequest
         * @instance
         */
        UserHeartbeatRequest.prototype.employeeId = 0;

        /**
         * Creates a new UserHeartbeatRequest instance using the specified properties.
         * @function create
         * @memberof meridian.UserHeartbeatRequest
         * @static
         * @param {meridian.UserHeartbeatRequest.$Properties=} [properties] Properties to set
         * @returns {meridian.UserHeartbeatRequest} UserHeartbeatRequest instance
         * @type {{
         *   (properties: meridian.UserHeartbeatRequest.$Shape): meridian.UserHeartbeatRequest & meridian.UserHeartbeatRequest.$Shape;
         *   (properties?: meridian.UserHeartbeatRequest.$Properties): meridian.UserHeartbeatRequest;
         * }}
         */
        UserHeartbeatRequest.create = function(properties) {
            return new UserHeartbeatRequest(properties);
        };

        /**
         * Encodes the specified UserHeartbeatRequest message. Does not implicitly {@link meridian.UserHeartbeatRequest.verify|verify} messages.
         * @function encode
         * @memberof meridian.UserHeartbeatRequest
         * @static
         * @param {meridian.UserHeartbeatRequest.$Properties} message UserHeartbeatRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserHeartbeatRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.employeeId != null && $Object.hasOwnProperty.call(message, "employeeId") && message.employeeId !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.employeeId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UserHeartbeatRequest message, length delimited. Does not implicitly {@link meridian.UserHeartbeatRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.UserHeartbeatRequest
         * @static
         * @param {meridian.UserHeartbeatRequest.$Properties} message UserHeartbeatRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserHeartbeatRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a UserHeartbeatRequest message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.UserHeartbeatRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.UserHeartbeatRequest & meridian.UserHeartbeatRequest.$Shape} UserHeartbeatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserHeartbeatRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.UserHeartbeatRequest(), value;
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
         * Decodes a UserHeartbeatRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.UserHeartbeatRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.UserHeartbeatRequest & meridian.UserHeartbeatRequest.$Shape} UserHeartbeatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserHeartbeatRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserHeartbeatRequest message.
         * @function verify
         * @memberof meridian.UserHeartbeatRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserHeartbeatRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.employeeId != null && $Object.hasOwnProperty.call(message, "employeeId"))
                if (!$util.isInteger(message.employeeId))
                    return "employeeId: integer expected";
            return null;
        };

        /**
         * Creates a UserHeartbeatRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.UserHeartbeatRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.UserHeartbeatRequest} UserHeartbeatRequest
         */
        UserHeartbeatRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.UserHeartbeatRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.UserHeartbeatRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.UserHeartbeatRequest();
            if (object.employeeId != null)
                if ($Number(object.employeeId) !== 0)
                    message.employeeId = object.employeeId | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserHeartbeatRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.UserHeartbeatRequest
         * @static
         * @param {meridian.UserHeartbeatRequest} message UserHeartbeatRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserHeartbeatRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.employeeId = 0;
            if (message.employeeId != null && $Object.hasOwnProperty.call(message, "employeeId"))
                object.employeeId = message.employeeId;
            return object;
        };

        /**
         * Converts this UserHeartbeatRequest to JSON.
         * @function toJSON
         * @memberof meridian.UserHeartbeatRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserHeartbeatRequest.prototype.toJSON = function() {
            return UserHeartbeatRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UserHeartbeatRequest
         * @function getTypeUrl
         * @memberof meridian.UserHeartbeatRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UserHeartbeatRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.UserHeartbeatRequest";
        };

        return UserHeartbeatRequest;
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
         * @property {boolean|null} [isOnline] EmployeeResponse isOnline
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
         * EmployeeResponse isOnline.
         * @member {boolean} isOnline
         * @memberof meridian.EmployeeResponse
         * @instance
         */
        EmployeeResponse.prototype.isOnline = false;

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
            if (message.isOnline != null && $Object.hasOwnProperty.call(message, "isOnline") && message.isOnline !== false)
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isOnline);
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
                case 8: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.isOnline = value;
                        else
                            delete message.isOnline;
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
            if (message.isOnline != null && $Object.hasOwnProperty.call(message, "isOnline"))
                if (typeof message.isOnline !== "boolean")
                    return "isOnline: boolean expected";
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
            if (object.isOnline != null)
                if (object.isOnline)
                    message.isOnline = $Boolean(object.isOnline);
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
                object.isOnline = false;
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
            if (message.isOnline != null && $Object.hasOwnProperty.call(message, "isOnline"))
                object.isOnline = message.isOnline;
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

    meridian.ChatMessageRequest = (function() {

        /**
         * Properties of a ChatMessageRequest.
         * @typedef {Object} meridian.ChatMessageRequest.$Properties
         * @property {number|null} [senderId] ChatMessageRequest senderId
         * @property {number|null} [receiverId] ChatMessageRequest receiverId
         * @property {string|null} [text] ChatMessageRequest text
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ChatMessageRequest.
         * @memberof meridian
         * @interface IChatMessageRequest
         * @augments meridian.ChatMessageRequest.$Properties
         * @deprecated Use meridian.ChatMessageRequest.$Properties instead.
         */

        /**
         * Shape of a ChatMessageRequest.
         * @typedef {meridian.ChatMessageRequest.$Properties} meridian.ChatMessageRequest.$Shape
         */

        /**
         * Constructs a new ChatMessageRequest.
         * @memberof meridian
         * @classdesc Represents a ChatMessageRequest.
         * @constructor
         * @param {meridian.ChatMessageRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ChatMessageRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ChatMessageRequest senderId.
         * @member {number} senderId
         * @memberof meridian.ChatMessageRequest
         * @instance
         */
        ChatMessageRequest.prototype.senderId = 0;

        /**
         * ChatMessageRequest receiverId.
         * @member {number} receiverId
         * @memberof meridian.ChatMessageRequest
         * @instance
         */
        ChatMessageRequest.prototype.receiverId = 0;

        /**
         * ChatMessageRequest text.
         * @member {string} text
         * @memberof meridian.ChatMessageRequest
         * @instance
         */
        ChatMessageRequest.prototype.text = "";

        /**
         * Creates a new ChatMessageRequest instance using the specified properties.
         * @function create
         * @memberof meridian.ChatMessageRequest
         * @static
         * @param {meridian.ChatMessageRequest.$Properties=} [properties] Properties to set
         * @returns {meridian.ChatMessageRequest} ChatMessageRequest instance
         * @type {{
         *   (properties: meridian.ChatMessageRequest.$Shape): meridian.ChatMessageRequest & meridian.ChatMessageRequest.$Shape;
         *   (properties?: meridian.ChatMessageRequest.$Properties): meridian.ChatMessageRequest;
         * }}
         */
        ChatMessageRequest.create = function(properties) {
            return new ChatMessageRequest(properties);
        };

        /**
         * Encodes the specified ChatMessageRequest message. Does not implicitly {@link meridian.ChatMessageRequest.verify|verify} messages.
         * @function encode
         * @memberof meridian.ChatMessageRequest
         * @static
         * @param {meridian.ChatMessageRequest.$Properties} message ChatMessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessageRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId") && message.senderId !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.senderId);
            if (message.receiverId != null && $Object.hasOwnProperty.call(message, "receiverId") && message.receiverId !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.receiverId);
            if (message.text != null && $Object.hasOwnProperty.call(message, "text") && message.text !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ChatMessageRequest message, length delimited. Does not implicitly {@link meridian.ChatMessageRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.ChatMessageRequest
         * @static
         * @param {meridian.ChatMessageRequest.$Properties} message ChatMessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessageRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ChatMessageRequest message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.ChatMessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.ChatMessageRequest & meridian.ChatMessageRequest.$Shape} ChatMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessageRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.ChatMessageRequest(), value;
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
                            message.senderId = value;
                        else
                            delete message.senderId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.receiverId = value;
                        else
                            delete message.receiverId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.text = value;
                        else
                            delete message.text;
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
         * Decodes a ChatMessageRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.ChatMessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.ChatMessageRequest & meridian.ChatMessageRequest.$Shape} ChatMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessageRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatMessageRequest message.
         * @function verify
         * @memberof meridian.ChatMessageRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMessageRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId"))
                if (!$util.isInteger(message.senderId))
                    return "senderId: integer expected";
            if (message.receiverId != null && $Object.hasOwnProperty.call(message, "receiverId"))
                if (!$util.isInteger(message.receiverId))
                    return "receiverId: integer expected";
            if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a ChatMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.ChatMessageRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.ChatMessageRequest} ChatMessageRequest
         */
        ChatMessageRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.ChatMessageRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.ChatMessageRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.ChatMessageRequest();
            if (object.senderId != null)
                if ($Number(object.senderId) !== 0)
                    message.senderId = object.senderId | 0;
            if (object.receiverId != null)
                if ($Number(object.receiverId) !== 0)
                    message.receiverId = object.receiverId | 0;
            if (object.text != null)
                if (typeof object.text !== "string" || object.text.length)
                    message.text = $String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a ChatMessageRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.ChatMessageRequest
         * @static
         * @param {meridian.ChatMessageRequest} message ChatMessageRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessageRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.senderId = 0;
                object.receiverId = 0;
                object.text = "";
            }
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId"))
                object.senderId = message.senderId;
            if (message.receiverId != null && $Object.hasOwnProperty.call(message, "receiverId"))
                object.receiverId = message.receiverId;
            if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this ChatMessageRequest to JSON.
         * @function toJSON
         * @memberof meridian.ChatMessageRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessageRequest.prototype.toJSON = function() {
            return ChatMessageRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ChatMessageRequest
         * @function getTypeUrl
         * @memberof meridian.ChatMessageRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ChatMessageRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.ChatMessageRequest";
        };

        return ChatMessageRequest;
    })();

    meridian.ChatMessageResponse = (function() {

        /**
         * Properties of a ChatMessageResponse.
         * @typedef {Object} meridian.ChatMessageResponse.$Properties
         * @property {number|null} [senderId] ChatMessageResponse senderId
         * @property {number|null} [receiverId] ChatMessageResponse receiverId
         * @property {string|null} [text] ChatMessageResponse text
         * @property {string|null} [time] ChatMessageResponse time
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ChatMessageResponse.
         * @memberof meridian
         * @interface IChatMessageResponse
         * @augments meridian.ChatMessageResponse.$Properties
         * @deprecated Use meridian.ChatMessageResponse.$Properties instead.
         */

        /**
         * Shape of a ChatMessageResponse.
         * @typedef {meridian.ChatMessageResponse.$Properties} meridian.ChatMessageResponse.$Shape
         */

        /**
         * Constructs a new ChatMessageResponse.
         * @memberof meridian
         * @classdesc Represents a ChatMessageResponse.
         * @constructor
         * @param {meridian.ChatMessageResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ChatMessageResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ChatMessageResponse senderId.
         * @member {number} senderId
         * @memberof meridian.ChatMessageResponse
         * @instance
         */
        ChatMessageResponse.prototype.senderId = 0;

        /**
         * ChatMessageResponse receiverId.
         * @member {number} receiverId
         * @memberof meridian.ChatMessageResponse
         * @instance
         */
        ChatMessageResponse.prototype.receiverId = 0;

        /**
         * ChatMessageResponse text.
         * @member {string} text
         * @memberof meridian.ChatMessageResponse
         * @instance
         */
        ChatMessageResponse.prototype.text = "";

        /**
         * ChatMessageResponse time.
         * @member {string} time
         * @memberof meridian.ChatMessageResponse
         * @instance
         */
        ChatMessageResponse.prototype.time = "";

        /**
         * Creates a new ChatMessageResponse instance using the specified properties.
         * @function create
         * @memberof meridian.ChatMessageResponse
         * @static
         * @param {meridian.ChatMessageResponse.$Properties=} [properties] Properties to set
         * @returns {meridian.ChatMessageResponse} ChatMessageResponse instance
         * @type {{
         *   (properties: meridian.ChatMessageResponse.$Shape): meridian.ChatMessageResponse & meridian.ChatMessageResponse.$Shape;
         *   (properties?: meridian.ChatMessageResponse.$Properties): meridian.ChatMessageResponse;
         * }}
         */
        ChatMessageResponse.create = function(properties) {
            return new ChatMessageResponse(properties);
        };

        /**
         * Encodes the specified ChatMessageResponse message. Does not implicitly {@link meridian.ChatMessageResponse.verify|verify} messages.
         * @function encode
         * @memberof meridian.ChatMessageResponse
         * @static
         * @param {meridian.ChatMessageResponse.$Properties} message ChatMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessageResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId") && message.senderId !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.senderId);
            if (message.receiverId != null && $Object.hasOwnProperty.call(message, "receiverId") && message.receiverId !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.receiverId);
            if (message.text != null && $Object.hasOwnProperty.call(message, "text") && message.text !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
            if (message.time != null && $Object.hasOwnProperty.call(message, "time") && message.time !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.time);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ChatMessageResponse message, length delimited. Does not implicitly {@link meridian.ChatMessageResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.ChatMessageResponse
         * @static
         * @param {meridian.ChatMessageResponse.$Properties} message ChatMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessageResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ChatMessageResponse message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.ChatMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.ChatMessageResponse & meridian.ChatMessageResponse.$Shape} ChatMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessageResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.ChatMessageResponse(), value;
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
                            message.senderId = value;
                        else
                            delete message.senderId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.receiverId = value;
                        else
                            delete message.receiverId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.text = value;
                        else
                            delete message.text;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.time = value;
                        else
                            delete message.time;
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
         * Decodes a ChatMessageResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.ChatMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.ChatMessageResponse & meridian.ChatMessageResponse.$Shape} ChatMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessageResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatMessageResponse message.
         * @function verify
         * @memberof meridian.ChatMessageResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMessageResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId"))
                if (!$util.isInteger(message.senderId))
                    return "senderId: integer expected";
            if (message.receiverId != null && $Object.hasOwnProperty.call(message, "receiverId"))
                if (!$util.isInteger(message.receiverId))
                    return "receiverId: integer expected";
            if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.time != null && $Object.hasOwnProperty.call(message, "time"))
                if (!$util.isString(message.time))
                    return "time: string expected";
            return null;
        };

        /**
         * Creates a ChatMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.ChatMessageResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.ChatMessageResponse} ChatMessageResponse
         */
        ChatMessageResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.ChatMessageResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.ChatMessageResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.ChatMessageResponse();
            if (object.senderId != null)
                if ($Number(object.senderId) !== 0)
                    message.senderId = object.senderId | 0;
            if (object.receiverId != null)
                if ($Number(object.receiverId) !== 0)
                    message.receiverId = object.receiverId | 0;
            if (object.text != null)
                if (typeof object.text !== "string" || object.text.length)
                    message.text = $String(object.text);
            if (object.time != null)
                if (typeof object.time !== "string" || object.time.length)
                    message.time = $String(object.time);
            return message;
        };

        /**
         * Creates a plain object from a ChatMessageResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.ChatMessageResponse
         * @static
         * @param {meridian.ChatMessageResponse} message ChatMessageResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessageResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.senderId = 0;
                object.receiverId = 0;
                object.text = "";
                object.time = "";
            }
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId"))
                object.senderId = message.senderId;
            if (message.receiverId != null && $Object.hasOwnProperty.call(message, "receiverId"))
                object.receiverId = message.receiverId;
            if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                object.text = message.text;
            if (message.time != null && $Object.hasOwnProperty.call(message, "time"))
                object.time = message.time;
            return object;
        };

        /**
         * Converts this ChatMessageResponse to JSON.
         * @function toJSON
         * @memberof meridian.ChatMessageResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessageResponse.prototype.toJSON = function() {
            return ChatMessageResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ChatMessageResponse
         * @function getTypeUrl
         * @memberof meridian.ChatMessageResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ChatMessageResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.ChatMessageResponse";
        };

        return ChatMessageResponse;
    })();

    meridian.ChatWindowResponse = (function() {

        /**
         * Properties of a ChatWindowResponse.
         * @typedef {Object} meridian.ChatWindowResponse.$Properties
         * @property {boolean|null} [success] ChatWindowResponse success
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ChatWindowResponse.
         * @memberof meridian
         * @interface IChatWindowResponse
         * @augments meridian.ChatWindowResponse.$Properties
         * @deprecated Use meridian.ChatWindowResponse.$Properties instead.
         */

        /**
         * Shape of a ChatWindowResponse.
         * @typedef {meridian.ChatWindowResponse.$Properties} meridian.ChatWindowResponse.$Shape
         */

        /**
         * Constructs a new ChatWindowResponse.
         * @memberof meridian
         * @classdesc Represents a ChatWindowResponse.
         * @constructor
         * @param {meridian.ChatWindowResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ChatWindowResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ChatWindowResponse success.
         * @member {boolean} success
         * @memberof meridian.ChatWindowResponse
         * @instance
         */
        ChatWindowResponse.prototype.success = false;

        /**
         * Creates a new ChatWindowResponse instance using the specified properties.
         * @function create
         * @memberof meridian.ChatWindowResponse
         * @static
         * @param {meridian.ChatWindowResponse.$Properties=} [properties] Properties to set
         * @returns {meridian.ChatWindowResponse} ChatWindowResponse instance
         * @type {{
         *   (properties: meridian.ChatWindowResponse.$Shape): meridian.ChatWindowResponse & meridian.ChatWindowResponse.$Shape;
         *   (properties?: meridian.ChatWindowResponse.$Properties): meridian.ChatWindowResponse;
         * }}
         */
        ChatWindowResponse.create = function(properties) {
            return new ChatWindowResponse(properties);
        };

        /**
         * Encodes the specified ChatWindowResponse message. Does not implicitly {@link meridian.ChatWindowResponse.verify|verify} messages.
         * @function encode
         * @memberof meridian.ChatWindowResponse
         * @static
         * @param {meridian.ChatWindowResponse.$Properties} message ChatWindowResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatWindowResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.success != null && $Object.hasOwnProperty.call(message, "success") && message.success !== false)
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ChatWindowResponse message, length delimited. Does not implicitly {@link meridian.ChatWindowResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.ChatWindowResponse
         * @static
         * @param {meridian.ChatWindowResponse.$Properties} message ChatWindowResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatWindowResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ChatWindowResponse message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.ChatWindowResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.ChatWindowResponse & meridian.ChatWindowResponse.$Shape} ChatWindowResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatWindowResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.ChatWindowResponse(), value;
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
         * Decodes a ChatWindowResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.ChatWindowResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.ChatWindowResponse & meridian.ChatWindowResponse.$Shape} ChatWindowResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatWindowResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatWindowResponse message.
         * @function verify
         * @memberof meridian.ChatWindowResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatWindowResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates a ChatWindowResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.ChatWindowResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.ChatWindowResponse} ChatWindowResponse
         */
        ChatWindowResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.ChatWindowResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.ChatWindowResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.ChatWindowResponse();
            if (object.success != null)
                if (object.success)
                    message.success = $Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from a ChatWindowResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.ChatWindowResponse
         * @static
         * @param {meridian.ChatWindowResponse} message ChatWindowResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatWindowResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this ChatWindowResponse to JSON.
         * @function toJSON
         * @memberof meridian.ChatWindowResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatWindowResponse.prototype.toJSON = function() {
            return ChatWindowResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ChatWindowResponse
         * @function getTypeUrl
         * @memberof meridian.ChatWindowResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ChatWindowResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.ChatWindowResponse";
        };

        return ChatWindowResponse;
    })();

    meridian.ChatHistoryRequest = (function() {

        /**
         * Properties of a ChatHistoryRequest.
         * @typedef {Object} meridian.ChatHistoryRequest.$Properties
         * @property {number|null} [senderId] ChatHistoryRequest senderId
         * @property {number|null} [receiverId] ChatHistoryRequest receiverId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ChatHistoryRequest.
         * @memberof meridian
         * @interface IChatHistoryRequest
         * @augments meridian.ChatHistoryRequest.$Properties
         * @deprecated Use meridian.ChatHistoryRequest.$Properties instead.
         */

        /**
         * Shape of a ChatHistoryRequest.
         * @typedef {meridian.ChatHistoryRequest.$Properties} meridian.ChatHistoryRequest.$Shape
         */

        /**
         * Constructs a new ChatHistoryRequest.
         * @memberof meridian
         * @classdesc Represents a ChatHistoryRequest.
         * @constructor
         * @param {meridian.ChatHistoryRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ChatHistoryRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ChatHistoryRequest senderId.
         * @member {number} senderId
         * @memberof meridian.ChatHistoryRequest
         * @instance
         */
        ChatHistoryRequest.prototype.senderId = 0;

        /**
         * ChatHistoryRequest receiverId.
         * @member {number} receiverId
         * @memberof meridian.ChatHistoryRequest
         * @instance
         */
        ChatHistoryRequest.prototype.receiverId = 0;

        /**
         * Creates a new ChatHistoryRequest instance using the specified properties.
         * @function create
         * @memberof meridian.ChatHistoryRequest
         * @static
         * @param {meridian.ChatHistoryRequest.$Properties=} [properties] Properties to set
         * @returns {meridian.ChatHistoryRequest} ChatHistoryRequest instance
         * @type {{
         *   (properties: meridian.ChatHistoryRequest.$Shape): meridian.ChatHistoryRequest & meridian.ChatHistoryRequest.$Shape;
         *   (properties?: meridian.ChatHistoryRequest.$Properties): meridian.ChatHistoryRequest;
         * }}
         */
        ChatHistoryRequest.create = function(properties) {
            return new ChatHistoryRequest(properties);
        };

        /**
         * Encodes the specified ChatHistoryRequest message. Does not implicitly {@link meridian.ChatHistoryRequest.verify|verify} messages.
         * @function encode
         * @memberof meridian.ChatHistoryRequest
         * @static
         * @param {meridian.ChatHistoryRequest.$Properties} message ChatHistoryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatHistoryRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId") && message.senderId !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.senderId);
            if (message.receiverId != null && $Object.hasOwnProperty.call(message, "receiverId") && message.receiverId !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.receiverId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ChatHistoryRequest message, length delimited. Does not implicitly {@link meridian.ChatHistoryRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.ChatHistoryRequest
         * @static
         * @param {meridian.ChatHistoryRequest.$Properties} message ChatHistoryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatHistoryRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ChatHistoryRequest message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.ChatHistoryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.ChatHistoryRequest & meridian.ChatHistoryRequest.$Shape} ChatHistoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatHistoryRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.ChatHistoryRequest(), value;
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
                            message.senderId = value;
                        else
                            delete message.senderId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.receiverId = value;
                        else
                            delete message.receiverId;
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
         * Decodes a ChatHistoryRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.ChatHistoryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.ChatHistoryRequest & meridian.ChatHistoryRequest.$Shape} ChatHistoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatHistoryRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatHistoryRequest message.
         * @function verify
         * @memberof meridian.ChatHistoryRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatHistoryRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId"))
                if (!$util.isInteger(message.senderId))
                    return "senderId: integer expected";
            if (message.receiverId != null && $Object.hasOwnProperty.call(message, "receiverId"))
                if (!$util.isInteger(message.receiverId))
                    return "receiverId: integer expected";
            return null;
        };

        /**
         * Creates a ChatHistoryRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.ChatHistoryRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.ChatHistoryRequest} ChatHistoryRequest
         */
        ChatHistoryRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.ChatHistoryRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.ChatHistoryRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.ChatHistoryRequest();
            if (object.senderId != null)
                if ($Number(object.senderId) !== 0)
                    message.senderId = object.senderId | 0;
            if (object.receiverId != null)
                if ($Number(object.receiverId) !== 0)
                    message.receiverId = object.receiverId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChatHistoryRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.ChatHistoryRequest
         * @static
         * @param {meridian.ChatHistoryRequest} message ChatHistoryRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatHistoryRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.senderId = 0;
                object.receiverId = 0;
            }
            if (message.senderId != null && $Object.hasOwnProperty.call(message, "senderId"))
                object.senderId = message.senderId;
            if (message.receiverId != null && $Object.hasOwnProperty.call(message, "receiverId"))
                object.receiverId = message.receiverId;
            return object;
        };

        /**
         * Converts this ChatHistoryRequest to JSON.
         * @function toJSON
         * @memberof meridian.ChatHistoryRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatHistoryRequest.prototype.toJSON = function() {
            return ChatHistoryRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ChatHistoryRequest
         * @function getTypeUrl
         * @memberof meridian.ChatHistoryRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ChatHistoryRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.ChatHistoryRequest";
        };

        return ChatHistoryRequest;
    })();

    meridian.ChatHistoryResponse = (function() {

        /**
         * Properties of a ChatHistoryResponse.
         * @typedef {Object} meridian.ChatHistoryResponse.$Properties
         * @property {Array.<meridian.ChatMessageResponse.$Properties>|null} [messages] ChatHistoryResponse messages
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ChatHistoryResponse.
         * @memberof meridian
         * @interface IChatHistoryResponse
         * @augments meridian.ChatHistoryResponse.$Properties
         * @deprecated Use meridian.ChatHistoryResponse.$Properties instead.
         */

        /**
         * Shape of a ChatHistoryResponse.
         * @typedef {meridian.ChatHistoryResponse.$Properties} meridian.ChatHistoryResponse.$Shape
         */

        /**
         * Constructs a new ChatHistoryResponse.
         * @memberof meridian
         * @classdesc Represents a ChatHistoryResponse.
         * @constructor
         * @param {meridian.ChatHistoryResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ChatHistoryResponse = function (properties) {
            this.messages = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ChatHistoryResponse messages.
         * @member {Array.<meridian.ChatMessageResponse.$Properties>} messages
         * @memberof meridian.ChatHistoryResponse
         * @instance
         */
        ChatHistoryResponse.prototype.messages = $util.emptyArray;

        /**
         * Creates a new ChatHistoryResponse instance using the specified properties.
         * @function create
         * @memberof meridian.ChatHistoryResponse
         * @static
         * @param {meridian.ChatHistoryResponse.$Properties=} [properties] Properties to set
         * @returns {meridian.ChatHistoryResponse} ChatHistoryResponse instance
         * @type {{
         *   (properties: meridian.ChatHistoryResponse.$Shape): meridian.ChatHistoryResponse & meridian.ChatHistoryResponse.$Shape;
         *   (properties?: meridian.ChatHistoryResponse.$Properties): meridian.ChatHistoryResponse;
         * }}
         */
        ChatHistoryResponse.create = function(properties) {
            return new ChatHistoryResponse(properties);
        };

        /**
         * Encodes the specified ChatHistoryResponse message. Does not implicitly {@link meridian.ChatHistoryResponse.verify|verify} messages.
         * @function encode
         * @memberof meridian.ChatHistoryResponse
         * @static
         * @param {meridian.ChatHistoryResponse.$Properties} message ChatHistoryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatHistoryResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.messages != null && message.messages.length)
                for (let i = 0; i < message.messages.length; ++i)
                    $root.meridian.ChatMessageResponse.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ChatHistoryResponse message, length delimited. Does not implicitly {@link meridian.ChatHistoryResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.ChatHistoryResponse
         * @static
         * @param {meridian.ChatHistoryResponse.$Properties} message ChatHistoryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatHistoryResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ChatHistoryResponse message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.ChatHistoryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.ChatHistoryResponse & meridian.ChatHistoryResponse.$Shape} ChatHistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatHistoryResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.ChatHistoryResponse();
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
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.meridian.ChatMessageResponse.decode(reader, reader.uint32(), $undefined, _depth + 1));
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
         * Decodes a ChatHistoryResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.ChatHistoryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.ChatHistoryResponse & meridian.ChatHistoryResponse.$Shape} ChatHistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatHistoryResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatHistoryResponse message.
         * @function verify
         * @memberof meridian.ChatHistoryResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatHistoryResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.messages != null && $Object.hasOwnProperty.call(message, "messages")) {
                if (!$Array.isArray(message.messages))
                    return "messages: array expected";
                for (let i = 0; i < message.messages.length; ++i) {
                    let error = $root.meridian.ChatMessageResponse.verify(message.messages[i], _depth + 1);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ChatHistoryResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.ChatHistoryResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.ChatHistoryResponse} ChatHistoryResponse
         */
        ChatHistoryResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.ChatHistoryResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.ChatHistoryResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.ChatHistoryResponse();
            if (object.messages) {
                if (!$Array.isArray(object.messages))
                    throw $TypeError(".meridian.ChatHistoryResponse.messages: array expected");
                message.messages = $Array(object.messages.length);
                for (let i = 0; i < object.messages.length; ++i) {
                    if (!$util.isObject(object.messages[i]))
                        throw $TypeError(".meridian.ChatHistoryResponse.messages: object expected");
                    message.messages[i] = $root.meridian.ChatMessageResponse.fromObject(object.messages[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ChatHistoryResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.ChatHistoryResponse
         * @static
         * @param {meridian.ChatHistoryResponse} message ChatHistoryResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatHistoryResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (message.messages && message.messages.length) {
                object.messages = $Array(message.messages.length);
                for (let j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.meridian.ChatMessageResponse.toObject(message.messages[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this ChatHistoryResponse to JSON.
         * @function toJSON
         * @memberof meridian.ChatHistoryResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatHistoryResponse.prototype.toJSON = function() {
            return ChatHistoryResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ChatHistoryResponse
         * @function getTypeUrl
         * @memberof meridian.ChatHistoryResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ChatHistoryResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.ChatHistoryResponse";
        };

        return ChatHistoryResponse;
    })();

    meridian.MeetingRequest = (function() {

        /**
         * Properties of a MeetingRequest.
         * @typedef {Object} meridian.MeetingRequest.$Properties
         * @property {number|null} [employeeId] MeetingRequest employeeId
         * @property {string|null} [departmentName] MeetingRequest departmentName
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a MeetingRequest.
         * @memberof meridian
         * @interface IMeetingRequest
         * @augments meridian.MeetingRequest.$Properties
         * @deprecated Use meridian.MeetingRequest.$Properties instead.
         */

        /**
         * Shape of a MeetingRequest.
         * @typedef {meridian.MeetingRequest.$Properties} meridian.MeetingRequest.$Shape
         */

        /**
         * Constructs a new MeetingRequest.
         * @memberof meridian
         * @classdesc Represents a MeetingRequest.
         * @constructor
         * @param {meridian.MeetingRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const MeetingRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * MeetingRequest employeeId.
         * @member {number} employeeId
         * @memberof meridian.MeetingRequest
         * @instance
         */
        MeetingRequest.prototype.employeeId = 0;

        /**
         * MeetingRequest departmentName.
         * @member {string} departmentName
         * @memberof meridian.MeetingRequest
         * @instance
         */
        MeetingRequest.prototype.departmentName = "";

        /**
         * Creates a new MeetingRequest instance using the specified properties.
         * @function create
         * @memberof meridian.MeetingRequest
         * @static
         * @param {meridian.MeetingRequest.$Properties=} [properties] Properties to set
         * @returns {meridian.MeetingRequest} MeetingRequest instance
         * @type {{
         *   (properties: meridian.MeetingRequest.$Shape): meridian.MeetingRequest & meridian.MeetingRequest.$Shape;
         *   (properties?: meridian.MeetingRequest.$Properties): meridian.MeetingRequest;
         * }}
         */
        MeetingRequest.create = function(properties) {
            return new MeetingRequest(properties);
        };

        /**
         * Encodes the specified MeetingRequest message. Does not implicitly {@link meridian.MeetingRequest.verify|verify} messages.
         * @function encode
         * @memberof meridian.MeetingRequest
         * @static
         * @param {meridian.MeetingRequest.$Properties} message MeetingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeetingRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.employeeId != null && $Object.hasOwnProperty.call(message, "employeeId") && message.employeeId !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.employeeId);
            if (message.departmentName != null && $Object.hasOwnProperty.call(message, "departmentName") && message.departmentName !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.departmentName);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified MeetingRequest message, length delimited. Does not implicitly {@link meridian.MeetingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.MeetingRequest
         * @static
         * @param {meridian.MeetingRequest.$Properties} message MeetingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeetingRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a MeetingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.MeetingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.MeetingRequest & meridian.MeetingRequest.$Shape} MeetingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeetingRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.MeetingRequest(), value;
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
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.departmentName = value;
                        else
                            delete message.departmentName;
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
         * Decodes a MeetingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.MeetingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.MeetingRequest & meridian.MeetingRequest.$Shape} MeetingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeetingRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MeetingRequest message.
         * @function verify
         * @memberof meridian.MeetingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MeetingRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.employeeId != null && $Object.hasOwnProperty.call(message, "employeeId"))
                if (!$util.isInteger(message.employeeId))
                    return "employeeId: integer expected";
            if (message.departmentName != null && $Object.hasOwnProperty.call(message, "departmentName"))
                if (!$util.isString(message.departmentName))
                    return "departmentName: string expected";
            return null;
        };

        /**
         * Creates a MeetingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.MeetingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.MeetingRequest} MeetingRequest
         */
        MeetingRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.MeetingRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.MeetingRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.MeetingRequest();
            if (object.employeeId != null)
                if ($Number(object.employeeId) !== 0)
                    message.employeeId = object.employeeId | 0;
            if (object.departmentName != null)
                if (typeof object.departmentName !== "string" || object.departmentName.length)
                    message.departmentName = $String(object.departmentName);
            return message;
        };

        /**
         * Creates a plain object from a MeetingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.MeetingRequest
         * @static
         * @param {meridian.MeetingRequest} message MeetingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MeetingRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.employeeId = 0;
                object.departmentName = "";
            }
            if (message.employeeId != null && $Object.hasOwnProperty.call(message, "employeeId"))
                object.employeeId = message.employeeId;
            if (message.departmentName != null && $Object.hasOwnProperty.call(message, "departmentName"))
                object.departmentName = message.departmentName;
            return object;
        };

        /**
         * Converts this MeetingRequest to JSON.
         * @function toJSON
         * @memberof meridian.MeetingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MeetingRequest.prototype.toJSON = function() {
            return MeetingRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for MeetingRequest
         * @function getTypeUrl
         * @memberof meridian.MeetingRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        MeetingRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.MeetingRequest";
        };

        return MeetingRequest;
    })();

    meridian.MeetingMessage = (function() {

        /**
         * Properties of a MeetingMessage.
         * @typedef {Object} meridian.MeetingMessage.$Properties
         * @property {number|null} [id] MeetingMessage id
         * @property {string|null} [title] MeetingMessage title
         * @property {string|null} [departmentName] MeetingMessage departmentName
         * @property {string|null} [timeString] MeetingMessage timeString
         * @property {string|null} [meetLink] MeetingMessage meetLink
         * @property {Array.<number>|null} [attendeeIds] MeetingMessage attendeeIds
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a MeetingMessage.
         * @memberof meridian
         * @interface IMeetingMessage
         * @augments meridian.MeetingMessage.$Properties
         * @deprecated Use meridian.MeetingMessage.$Properties instead.
         */

        /**
         * Shape of a MeetingMessage.
         * @typedef {meridian.MeetingMessage.$Properties} meridian.MeetingMessage.$Shape
         */

        /**
         * Constructs a new MeetingMessage.
         * @memberof meridian
         * @classdesc Represents a MeetingMessage.
         * @constructor
         * @param {meridian.MeetingMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const MeetingMessage = function (properties) {
            this.attendeeIds = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * MeetingMessage id.
         * @member {number} id
         * @memberof meridian.MeetingMessage
         * @instance
         */
        MeetingMessage.prototype.id = 0;

        /**
         * MeetingMessage title.
         * @member {string} title
         * @memberof meridian.MeetingMessage
         * @instance
         */
        MeetingMessage.prototype.title = "";

        /**
         * MeetingMessage departmentName.
         * @member {string} departmentName
         * @memberof meridian.MeetingMessage
         * @instance
         */
        MeetingMessage.prototype.departmentName = "";

        /**
         * MeetingMessage timeString.
         * @member {string} timeString
         * @memberof meridian.MeetingMessage
         * @instance
         */
        MeetingMessage.prototype.timeString = "";

        /**
         * MeetingMessage meetLink.
         * @member {string} meetLink
         * @memberof meridian.MeetingMessage
         * @instance
         */
        MeetingMessage.prototype.meetLink = "";

        /**
         * MeetingMessage attendeeIds.
         * @member {Array.<number>} attendeeIds
         * @memberof meridian.MeetingMessage
         * @instance
         */
        MeetingMessage.prototype.attendeeIds = $util.emptyArray;

        /**
         * Creates a new MeetingMessage instance using the specified properties.
         * @function create
         * @memberof meridian.MeetingMessage
         * @static
         * @param {meridian.MeetingMessage.$Properties=} [properties] Properties to set
         * @returns {meridian.MeetingMessage} MeetingMessage instance
         * @type {{
         *   (properties: meridian.MeetingMessage.$Shape): meridian.MeetingMessage & meridian.MeetingMessage.$Shape;
         *   (properties?: meridian.MeetingMessage.$Properties): meridian.MeetingMessage;
         * }}
         */
        MeetingMessage.create = function(properties) {
            return new MeetingMessage(properties);
        };

        /**
         * Encodes the specified MeetingMessage message. Does not implicitly {@link meridian.MeetingMessage.verify|verify} messages.
         * @function encode
         * @memberof meridian.MeetingMessage
         * @static
         * @param {meridian.MeetingMessage.$Properties} message MeetingMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeetingMessage.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.title != null && $Object.hasOwnProperty.call(message, "title") && message.title !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.departmentName != null && $Object.hasOwnProperty.call(message, "departmentName") && message.departmentName !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.departmentName);
            if (message.timeString != null && $Object.hasOwnProperty.call(message, "timeString") && message.timeString !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.timeString);
            if (message.meetLink != null && $Object.hasOwnProperty.call(message, "meetLink") && message.meetLink !== "")
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.meetLink);
            if (message.attendeeIds != null && message.attendeeIds.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (let i = 0; i < message.attendeeIds.length; ++i)
                    writer.int32(message.attendeeIds[i]);
                writer.ldelim();
            }
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified MeetingMessage message, length delimited. Does not implicitly {@link meridian.MeetingMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.MeetingMessage
         * @static
         * @param {meridian.MeetingMessage.$Properties} message MeetingMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeetingMessage.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a MeetingMessage message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.MeetingMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.MeetingMessage & meridian.MeetingMessage.$Shape} MeetingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeetingMessage.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.MeetingMessage(), value;
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
                            message.title = value;
                        else
                            delete message.title;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.departmentName = value;
                        else
                            delete message.departmentName;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.timeString = value;
                        else
                            delete message.timeString;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.meetLink = value;
                        else
                            delete message.meetLink;
                        continue;
                    }
                case 6: {
                        if (wireType === 2) {
                            if (!(message.attendeeIds && message.attendeeIds.length))
                                message.attendeeIds = [];
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.attendeeIds.push(reader.int32());
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.attendeeIds && message.attendeeIds.length))
                            message.attendeeIds = [];
                        message.attendeeIds.push(reader.int32());
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
         * Decodes a MeetingMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.MeetingMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.MeetingMessage & meridian.MeetingMessage.$Shape} MeetingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeetingMessage.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MeetingMessage message.
         * @function verify
         * @memberof meridian.MeetingMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MeetingMessage.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.departmentName != null && $Object.hasOwnProperty.call(message, "departmentName"))
                if (!$util.isString(message.departmentName))
                    return "departmentName: string expected";
            if (message.timeString != null && $Object.hasOwnProperty.call(message, "timeString"))
                if (!$util.isString(message.timeString))
                    return "timeString: string expected";
            if (message.meetLink != null && $Object.hasOwnProperty.call(message, "meetLink"))
                if (!$util.isString(message.meetLink))
                    return "meetLink: string expected";
            if (message.attendeeIds != null && $Object.hasOwnProperty.call(message, "attendeeIds")) {
                if (!$Array.isArray(message.attendeeIds))
                    return "attendeeIds: array expected";
                for (let i = 0; i < message.attendeeIds.length; ++i)
                    if (!$util.isInteger(message.attendeeIds[i]))
                        return "attendeeIds: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a MeetingMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.MeetingMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.MeetingMessage} MeetingMessage
         */
        MeetingMessage.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.MeetingMessage)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.MeetingMessage: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.MeetingMessage();
            if (object.id != null)
                if ($Number(object.id) !== 0)
                    message.id = object.id | 0;
            if (object.title != null)
                if (typeof object.title !== "string" || object.title.length)
                    message.title = $String(object.title);
            if (object.departmentName != null)
                if (typeof object.departmentName !== "string" || object.departmentName.length)
                    message.departmentName = $String(object.departmentName);
            if (object.timeString != null)
                if (typeof object.timeString !== "string" || object.timeString.length)
                    message.timeString = $String(object.timeString);
            if (object.meetLink != null)
                if (typeof object.meetLink !== "string" || object.meetLink.length)
                    message.meetLink = $String(object.meetLink);
            if (object.attendeeIds) {
                if (!$Array.isArray(object.attendeeIds))
                    throw $TypeError(".meridian.MeetingMessage.attendeeIds: array expected");
                message.attendeeIds = $Array(object.attendeeIds.length);
                for (let i = 0; i < object.attendeeIds.length; ++i)
                    message.attendeeIds[i] = object.attendeeIds[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a MeetingMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.MeetingMessage
         * @static
         * @param {meridian.MeetingMessage} message MeetingMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MeetingMessage.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.attendeeIds = [];
            if (options.defaults) {
                object.id = 0;
                object.title = "";
                object.departmentName = "";
                object.timeString = "";
                object.meetLink = "";
            }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                object.title = message.title;
            if (message.departmentName != null && $Object.hasOwnProperty.call(message, "departmentName"))
                object.departmentName = message.departmentName;
            if (message.timeString != null && $Object.hasOwnProperty.call(message, "timeString"))
                object.timeString = message.timeString;
            if (message.meetLink != null && $Object.hasOwnProperty.call(message, "meetLink"))
                object.meetLink = message.meetLink;
            if (message.attendeeIds && message.attendeeIds.length) {
                object.attendeeIds = $Array(message.attendeeIds.length);
                for (let j = 0; j < message.attendeeIds.length; ++j)
                    object.attendeeIds[j] = message.attendeeIds[j];
            }
            return object;
        };

        /**
         * Converts this MeetingMessage to JSON.
         * @function toJSON
         * @memberof meridian.MeetingMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MeetingMessage.prototype.toJSON = function() {
            return MeetingMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for MeetingMessage
         * @function getTypeUrl
         * @memberof meridian.MeetingMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        MeetingMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.MeetingMessage";
        };

        return MeetingMessage;
    })();

    meridian.MeetingListResponse = (function() {

        /**
         * Properties of a MeetingListResponse.
         * @typedef {Object} meridian.MeetingListResponse.$Properties
         * @property {Array.<meridian.MeetingMessage.$Properties>|null} [meetings] MeetingListResponse meetings
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a MeetingListResponse.
         * @memberof meridian
         * @interface IMeetingListResponse
         * @augments meridian.MeetingListResponse.$Properties
         * @deprecated Use meridian.MeetingListResponse.$Properties instead.
         */

        /**
         * Shape of a MeetingListResponse.
         * @typedef {meridian.MeetingListResponse.$Properties} meridian.MeetingListResponse.$Shape
         */

        /**
         * Constructs a new MeetingListResponse.
         * @memberof meridian
         * @classdesc Represents a MeetingListResponse.
         * @constructor
         * @param {meridian.MeetingListResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const MeetingListResponse = function (properties) {
            this.meetings = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * MeetingListResponse meetings.
         * @member {Array.<meridian.MeetingMessage.$Properties>} meetings
         * @memberof meridian.MeetingListResponse
         * @instance
         */
        MeetingListResponse.prototype.meetings = $util.emptyArray;

        /**
         * Creates a new MeetingListResponse instance using the specified properties.
         * @function create
         * @memberof meridian.MeetingListResponse
         * @static
         * @param {meridian.MeetingListResponse.$Properties=} [properties] Properties to set
         * @returns {meridian.MeetingListResponse} MeetingListResponse instance
         * @type {{
         *   (properties: meridian.MeetingListResponse.$Shape): meridian.MeetingListResponse & meridian.MeetingListResponse.$Shape;
         *   (properties?: meridian.MeetingListResponse.$Properties): meridian.MeetingListResponse;
         * }}
         */
        MeetingListResponse.create = function(properties) {
            return new MeetingListResponse(properties);
        };

        /**
         * Encodes the specified MeetingListResponse message. Does not implicitly {@link meridian.MeetingListResponse.verify|verify} messages.
         * @function encode
         * @memberof meridian.MeetingListResponse
         * @static
         * @param {meridian.MeetingListResponse.$Properties} message MeetingListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeetingListResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.meetings != null && message.meetings.length)
                for (let i = 0; i < message.meetings.length; ++i)
                    $root.meridian.MeetingMessage.encode(message.meetings[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified MeetingListResponse message, length delimited. Does not implicitly {@link meridian.MeetingListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof meridian.MeetingListResponse
         * @static
         * @param {meridian.MeetingListResponse.$Properties} message MeetingListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MeetingListResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a MeetingListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof meridian.MeetingListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {meridian.MeetingListResponse & meridian.MeetingListResponse.$Shape} MeetingListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeetingListResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.meridian.MeetingListResponse();
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
                        if (!(message.meetings && message.meetings.length))
                            message.meetings = [];
                        message.meetings.push($root.meridian.MeetingMessage.decode(reader, reader.uint32(), $undefined, _depth + 1));
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
         * Decodes a MeetingListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof meridian.MeetingListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {meridian.MeetingListResponse & meridian.MeetingListResponse.$Shape} MeetingListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MeetingListResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MeetingListResponse message.
         * @function verify
         * @memberof meridian.MeetingListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MeetingListResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.meetings != null && $Object.hasOwnProperty.call(message, "meetings")) {
                if (!$Array.isArray(message.meetings))
                    return "meetings: array expected";
                for (let i = 0; i < message.meetings.length; ++i) {
                    let error = $root.meridian.MeetingMessage.verify(message.meetings[i], _depth + 1);
                    if (error)
                        return "meetings." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MeetingListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof meridian.MeetingListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {meridian.MeetingListResponse} MeetingListResponse
         */
        MeetingListResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.meridian.MeetingListResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".meridian.MeetingListResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.meridian.MeetingListResponse();
            if (object.meetings) {
                if (!$Array.isArray(object.meetings))
                    throw $TypeError(".meridian.MeetingListResponse.meetings: array expected");
                message.meetings = $Array(object.meetings.length);
                for (let i = 0; i < object.meetings.length; ++i) {
                    if (!$util.isObject(object.meetings[i]))
                        throw $TypeError(".meridian.MeetingListResponse.meetings: object expected");
                    message.meetings[i] = $root.meridian.MeetingMessage.fromObject(object.meetings[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MeetingListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof meridian.MeetingListResponse
         * @static
         * @param {meridian.MeetingListResponse} message MeetingListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MeetingListResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.meetings = [];
            if (message.meetings && message.meetings.length) {
                object.meetings = $Array(message.meetings.length);
                for (let j = 0; j < message.meetings.length; ++j)
                    object.meetings[j] = $root.meridian.MeetingMessage.toObject(message.meetings[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this MeetingListResponse to JSON.
         * @function toJSON
         * @memberof meridian.MeetingListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MeetingListResponse.prototype.toJSON = function() {
            return MeetingListResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for MeetingListResponse
         * @function getTypeUrl
         * @memberof meridian.MeetingListResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        MeetingListResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/meridian.MeetingListResponse";
        };

        return MeetingListResponse;
    })();

    return meridian;
})();

export {
  $root as default
};
