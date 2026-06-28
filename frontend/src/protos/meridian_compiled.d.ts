import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace meridian. */
export namespace meridian {

    /** Represents an EmployeeRpcService */
    class EmployeeRpcService extends $protobuf.rpc.Service {

        /**
         * Constructs a new EmployeeRpcService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new EmployeeRpcService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EmployeeRpcService;

        /** Calls UpdateHybridSchedule. */
        updateHybridSchedule: meridian.EmployeeRpcService.UpdateHybridSchedule;

        /** Calls Login. */
        login: meridian.EmployeeRpcService.Login;

        /** Calls GetEmployees. */
        getEmployees: meridian.EmployeeRpcService.GetEmployees;

        /** Calls SendMessage. */
        sendMessage: meridian.EmployeeRpcService.SendMessage;

        /** Calls ListenMessages. */
        listenMessages: meridian.EmployeeRpcService.ListenMessages;

        /** Calls GetChatHistory. */
        getChatHistory: meridian.EmployeeRpcService.GetChatHistory;

        /** Calls GetMeetings. */
        getMeetings: meridian.EmployeeRpcService.GetMeetings;
    }

    namespace EmployeeRpcService {

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#updateHybridSchedule}.
         * @param error Error, if any
         * @param [response] LoginResponse
         */
        type UpdateHybridScheduleCallback = (error: (Error|null), response?: meridian.LoginResponse) => void;

        /** Calls UpdateHybridSchedule. */
        type UpdateHybridSchedule = {
          (request: meridian.IUpdateScheduleRequest, callback: meridian.EmployeeRpcService.UpdateHybridScheduleCallback): void;
          (request: meridian.IUpdateScheduleRequest): Promise<meridian.LoginResponse>;
          readonly name: "UpdateHybridSchedule";
          readonly path: "/meridian.EmployeeRpcService/UpdateHybridSchedule";
          readonly requestType: "UpdateScheduleRequest";
          readonly responseType: "LoginResponse";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#login}.
         * @param error Error, if any
         * @param [response] LoginResponse
         */
        type LoginCallback = (error: (Error|null), response?: meridian.LoginResponse) => void;

        /** Calls Login. */
        type Login = {
          (request: meridian.ILoginRequest, callback: meridian.EmployeeRpcService.LoginCallback): void;
          (request: meridian.ILoginRequest): Promise<meridian.LoginResponse>;
          readonly name: "Login";
          readonly path: "/meridian.EmployeeRpcService/Login";
          readonly requestType: "LoginRequest";
          readonly responseType: "LoginResponse";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#getEmployees}.
         * @param error Error, if any
         * @param [response] EmployeeListResponse
         */
        type GetEmployeesCallback = (error: (Error|null), response?: meridian.EmployeeListResponse) => void;

        /** Calls GetEmployees. */
        type GetEmployees = {
          (request: meridian.IUserHeartbeatRequest, callback: meridian.EmployeeRpcService.GetEmployeesCallback): void;
          (request: meridian.IUserHeartbeatRequest): Promise<meridian.EmployeeListResponse>;
          readonly name: "GetEmployees";
          readonly path: "/meridian.EmployeeRpcService/GetEmployees";
          readonly requestType: "UserHeartbeatRequest";
          readonly responseType: "EmployeeListResponse";
          readonly requestStream: undefined;
          readonly responseStream: true;
        };

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#sendMessage}.
         * @param error Error, if any
         * @param [response] ChatWindowResponse
         */
        type SendMessageCallback = (error: (Error|null), response?: meridian.ChatWindowResponse) => void;

        /** Calls SendMessage. */
        type SendMessage = {
          (request: meridian.IChatMessageRequest, callback: meridian.EmployeeRpcService.SendMessageCallback): void;
          (request: meridian.IChatMessageRequest): Promise<meridian.ChatWindowResponse>;
          readonly name: "SendMessage";
          readonly path: "/meridian.EmployeeRpcService/SendMessage";
          readonly requestType: "ChatMessageRequest";
          readonly responseType: "ChatWindowResponse";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#listenMessages}.
         * @param error Error, if any
         * @param [response] ChatMessageResponse
         */
        type ListenMessagesCallback = (error: (Error|null), response?: meridian.ChatMessageResponse) => void;

        /** Calls ListenMessages. */
        type ListenMessages = {
          (request: meridian.IUserHeartbeatRequest, callback: meridian.EmployeeRpcService.ListenMessagesCallback): void;
          (request: meridian.IUserHeartbeatRequest): Promise<meridian.ChatMessageResponse>;
          readonly name: "ListenMessages";
          readonly path: "/meridian.EmployeeRpcService/ListenMessages";
          readonly requestType: "UserHeartbeatRequest";
          readonly responseType: "ChatMessageResponse";
          readonly requestStream: undefined;
          readonly responseStream: true;
        };

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#getChatHistory}.
         * @param error Error, if any
         * @param [response] ChatHistoryResponse
         */
        type GetChatHistoryCallback = (error: (Error|null), response?: meridian.ChatHistoryResponse) => void;

        /** Calls GetChatHistory. */
        type GetChatHistory = {
          (request: meridian.IChatHistoryRequest, callback: meridian.EmployeeRpcService.GetChatHistoryCallback): void;
          (request: meridian.IChatHistoryRequest): Promise<meridian.ChatHistoryResponse>;
          readonly name: "GetChatHistory";
          readonly path: "/meridian.EmployeeRpcService/GetChatHistory";
          readonly requestType: "ChatHistoryRequest";
          readonly responseType: "ChatHistoryResponse";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };

        /**
         * Callback as used by {@link meridian.EmployeeRpcService#getMeetings}.
         * @param error Error, if any
         * @param [response] MeetingListResponse
         */
        type GetMeetingsCallback = (error: (Error|null), response?: meridian.MeetingListResponse) => void;

        /** Calls GetMeetings. */
        type GetMeetings = {
          (request: meridian.IMeetingRequest, callback: meridian.EmployeeRpcService.GetMeetingsCallback): void;
          (request: meridian.IMeetingRequest): Promise<meridian.MeetingListResponse>;
          readonly name: "GetMeetings";
          readonly path: "/meridian.EmployeeRpcService/GetMeetings";
          readonly requestType: "MeetingRequest";
          readonly responseType: "MeetingListResponse";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };
    }

    /**
     * Properties of an EmptyRequest.
     * @deprecated Use meridian.EmptyRequest.$Properties instead.
     */
    interface IEmptyRequest extends meridian.EmptyRequest.$Properties {
    }

    /** Represents an EmptyRequest. */
    class EmptyRequest {

        /**
         * Constructs a new EmptyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.EmptyRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new EmptyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmptyRequest instance
         */
        static create(properties: meridian.EmptyRequest.$Shape): meridian.EmptyRequest & meridian.EmptyRequest.$Shape;
        static create(properties?: meridian.EmptyRequest.$Properties): meridian.EmptyRequest;

        /**
         * Encodes the specified EmptyRequest message. Does not implicitly {@link meridian.EmptyRequest.verify|verify} messages.
         * @param message EmptyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.EmptyRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmptyRequest message, length delimited. Does not implicitly {@link meridian.EmptyRequest.verify|verify} messages.
         * @param message EmptyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.EmptyRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.EmptyRequest & meridian.EmptyRequest.$Shape} EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.EmptyRequest & meridian.EmptyRequest.$Shape;

        /**
         * Decodes an EmptyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.EmptyRequest & meridian.EmptyRequest.$Shape} EmptyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.EmptyRequest & meridian.EmptyRequest.$Shape;

        /**
         * Verifies an EmptyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmptyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmptyRequest
         */
        static fromObject(object: { [k: string]: any }): meridian.EmptyRequest;

        /**
         * Creates a plain object from an EmptyRequest message. Also converts values to other types if specified.
         * @param message EmptyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.EmptyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmptyRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for EmptyRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace EmptyRequest {

        /** Properties of an EmptyRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an EmptyRequest. */
        type $Shape = meridian.EmptyRequest.$Properties;
    }

    /**
     * Properties of a UserHeartbeatRequest.
     * @deprecated Use meridian.UserHeartbeatRequest.$Properties instead.
     */
    interface IUserHeartbeatRequest extends meridian.UserHeartbeatRequest.$Properties {
    }

    /** Represents a UserHeartbeatRequest. */
    class UserHeartbeatRequest {

        /**
         * Constructs a new UserHeartbeatRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.UserHeartbeatRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UserHeartbeatRequest employeeId. */
        employeeId: number;

        /**
         * Creates a new UserHeartbeatRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserHeartbeatRequest instance
         */
        static create(properties: meridian.UserHeartbeatRequest.$Shape): meridian.UserHeartbeatRequest & meridian.UserHeartbeatRequest.$Shape;
        static create(properties?: meridian.UserHeartbeatRequest.$Properties): meridian.UserHeartbeatRequest;

        /**
         * Encodes the specified UserHeartbeatRequest message. Does not implicitly {@link meridian.UserHeartbeatRequest.verify|verify} messages.
         * @param message UserHeartbeatRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.UserHeartbeatRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserHeartbeatRequest message, length delimited. Does not implicitly {@link meridian.UserHeartbeatRequest.verify|verify} messages.
         * @param message UserHeartbeatRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.UserHeartbeatRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserHeartbeatRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.UserHeartbeatRequest & meridian.UserHeartbeatRequest.$Shape} UserHeartbeatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.UserHeartbeatRequest & meridian.UserHeartbeatRequest.$Shape;

        /**
         * Decodes a UserHeartbeatRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.UserHeartbeatRequest & meridian.UserHeartbeatRequest.$Shape} UserHeartbeatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.UserHeartbeatRequest & meridian.UserHeartbeatRequest.$Shape;

        /**
         * Verifies a UserHeartbeatRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserHeartbeatRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserHeartbeatRequest
         */
        static fromObject(object: { [k: string]: any }): meridian.UserHeartbeatRequest;

        /**
         * Creates a plain object from a UserHeartbeatRequest message. Also converts values to other types if specified.
         * @param message UserHeartbeatRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.UserHeartbeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserHeartbeatRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UserHeartbeatRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UserHeartbeatRequest {

        /** Properties of a UserHeartbeatRequest. */
        interface $Properties {

            /** UserHeartbeatRequest employeeId */
            employeeId?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UserHeartbeatRequest. */
        type $Shape = meridian.UserHeartbeatRequest.$Properties;
    }

    /**
     * Properties of a DepartmentResponse.
     * @deprecated Use meridian.DepartmentResponse.$Properties instead.
     */
    interface IDepartmentResponse extends meridian.DepartmentResponse.$Properties {
    }

    /** Represents a DepartmentResponse. */
    class DepartmentResponse {

        /**
         * Constructs a new DepartmentResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.DepartmentResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DepartmentResponse id. */
        id: number;

        /** DepartmentResponse name. */
        name: string;

        /**
         * Creates a new DepartmentResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DepartmentResponse instance
         */
        static create(properties: meridian.DepartmentResponse.$Shape): meridian.DepartmentResponse & meridian.DepartmentResponse.$Shape;
        static create(properties?: meridian.DepartmentResponse.$Properties): meridian.DepartmentResponse;

        /**
         * Encodes the specified DepartmentResponse message. Does not implicitly {@link meridian.DepartmentResponse.verify|verify} messages.
         * @param message DepartmentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.DepartmentResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DepartmentResponse message, length delimited. Does not implicitly {@link meridian.DepartmentResponse.verify|verify} messages.
         * @param message DepartmentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.DepartmentResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DepartmentResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.DepartmentResponse & meridian.DepartmentResponse.$Shape} DepartmentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.DepartmentResponse & meridian.DepartmentResponse.$Shape;

        /**
         * Decodes a DepartmentResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.DepartmentResponse & meridian.DepartmentResponse.$Shape} DepartmentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.DepartmentResponse & meridian.DepartmentResponse.$Shape;

        /**
         * Verifies a DepartmentResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DepartmentResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DepartmentResponse
         */
        static fromObject(object: { [k: string]: any }): meridian.DepartmentResponse;

        /**
         * Creates a plain object from a DepartmentResponse message. Also converts values to other types if specified.
         * @param message DepartmentResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.DepartmentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DepartmentResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DepartmentResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DepartmentResponse {

        /** Properties of a DepartmentResponse. */
        interface $Properties {

            /** DepartmentResponse id */
            id?: (number|null);

            /** DepartmentResponse name */
            name?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DepartmentResponse. */
        type $Shape = meridian.DepartmentResponse.$Properties;
    }

    /**
     * Properties of a HybridScheduleResponse.
     * @deprecated Use meridian.HybridScheduleResponse.$Properties instead.
     */
    interface IHybridScheduleResponse extends meridian.HybridScheduleResponse.$Properties {
    }

    /** Represents a HybridScheduleResponse. */
    class HybridScheduleResponse {

        /**
         * Constructs a new HybridScheduleResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.HybridScheduleResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** HybridScheduleResponse monday. */
        monday: boolean;

        /** HybridScheduleResponse tuesday. */
        tuesday: boolean;

        /** HybridScheduleResponse wednesday. */
        wednesday: boolean;

        /** HybridScheduleResponse thursday. */
        thursday: boolean;

        /** HybridScheduleResponse friday. */
        friday: boolean;

        /**
         * Creates a new HybridScheduleResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HybridScheduleResponse instance
         */
        static create(properties: meridian.HybridScheduleResponse.$Shape): meridian.HybridScheduleResponse & meridian.HybridScheduleResponse.$Shape;
        static create(properties?: meridian.HybridScheduleResponse.$Properties): meridian.HybridScheduleResponse;

        /**
         * Encodes the specified HybridScheduleResponse message. Does not implicitly {@link meridian.HybridScheduleResponse.verify|verify} messages.
         * @param message HybridScheduleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.HybridScheduleResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HybridScheduleResponse message, length delimited. Does not implicitly {@link meridian.HybridScheduleResponse.verify|verify} messages.
         * @param message HybridScheduleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.HybridScheduleResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HybridScheduleResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.HybridScheduleResponse & meridian.HybridScheduleResponse.$Shape} HybridScheduleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.HybridScheduleResponse & meridian.HybridScheduleResponse.$Shape;

        /**
         * Decodes a HybridScheduleResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.HybridScheduleResponse & meridian.HybridScheduleResponse.$Shape} HybridScheduleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.HybridScheduleResponse & meridian.HybridScheduleResponse.$Shape;

        /**
         * Verifies a HybridScheduleResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HybridScheduleResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HybridScheduleResponse
         */
        static fromObject(object: { [k: string]: any }): meridian.HybridScheduleResponse;

        /**
         * Creates a plain object from a HybridScheduleResponse message. Also converts values to other types if specified.
         * @param message HybridScheduleResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.HybridScheduleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HybridScheduleResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for HybridScheduleResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HybridScheduleResponse {

        /** Properties of a HybridScheduleResponse. */
        interface $Properties {

            /** HybridScheduleResponse monday */
            monday?: (boolean|null);

            /** HybridScheduleResponse tuesday */
            tuesday?: (boolean|null);

            /** HybridScheduleResponse wednesday */
            wednesday?: (boolean|null);

            /** HybridScheduleResponse thursday */
            thursday?: (boolean|null);

            /** HybridScheduleResponse friday */
            friday?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HybridScheduleResponse. */
        type $Shape = meridian.HybridScheduleResponse.$Properties;
    }

    /**
     * Properties of an EmployeeResponse.
     * @deprecated Use meridian.EmployeeResponse.$Properties instead.
     */
    interface IEmployeeResponse extends meridian.EmployeeResponse.$Properties {
    }

    /** Represents an EmployeeResponse. */
    class EmployeeResponse {

        /**
         * Constructs a new EmployeeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.EmployeeResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** EmployeeResponse id. */
        id: number;

        /** EmployeeResponse firstName. */
        firstName: string;

        /** EmployeeResponse lastName. */
        lastName: string;

        /** EmployeeResponse slackHandle. */
        slackHandle: string;

        /** EmployeeResponse hireDate. */
        hireDate: string;

        /** EmployeeResponse department. */
        department?: (meridian.DepartmentResponse.$Properties|null);

        /** EmployeeResponse hybridSchedule. */
        hybridSchedule?: (meridian.HybridScheduleResponse.$Properties|null);

        /** EmployeeResponse isOnline. */
        isOnline: boolean;

        /**
         * Creates a new EmployeeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmployeeResponse instance
         */
        static create(properties: meridian.EmployeeResponse.$Shape): meridian.EmployeeResponse & meridian.EmployeeResponse.$Shape;
        static create(properties?: meridian.EmployeeResponse.$Properties): meridian.EmployeeResponse;

        /**
         * Encodes the specified EmployeeResponse message. Does not implicitly {@link meridian.EmployeeResponse.verify|verify} messages.
         * @param message EmployeeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.EmployeeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmployeeResponse message, length delimited. Does not implicitly {@link meridian.EmployeeResponse.verify|verify} messages.
         * @param message EmployeeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.EmployeeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmployeeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.EmployeeResponse & meridian.EmployeeResponse.$Shape} EmployeeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.EmployeeResponse & meridian.EmployeeResponse.$Shape;

        /**
         * Decodes an EmployeeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.EmployeeResponse & meridian.EmployeeResponse.$Shape} EmployeeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.EmployeeResponse & meridian.EmployeeResponse.$Shape;

        /**
         * Verifies an EmployeeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmployeeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmployeeResponse
         */
        static fromObject(object: { [k: string]: any }): meridian.EmployeeResponse;

        /**
         * Creates a plain object from an EmployeeResponse message. Also converts values to other types if specified.
         * @param message EmployeeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.EmployeeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmployeeResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for EmployeeResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace EmployeeResponse {

        /** Properties of an EmployeeResponse. */
        interface $Properties {

            /** EmployeeResponse id */
            id?: (number|null);

            /** EmployeeResponse firstName */
            firstName?: (string|null);

            /** EmployeeResponse lastName */
            lastName?: (string|null);

            /** EmployeeResponse slackHandle */
            slackHandle?: (string|null);

            /** EmployeeResponse hireDate */
            hireDate?: (string|null);

            /** EmployeeResponse department */
            department?: (meridian.DepartmentResponse.$Properties|null);

            /** EmployeeResponse hybridSchedule */
            hybridSchedule?: (meridian.HybridScheduleResponse.$Properties|null);

            /** EmployeeResponse isOnline */
            isOnline?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an EmployeeResponse. */
        type $Shape = meridian.EmployeeResponse.$Properties;
    }

    /**
     * Properties of an EmployeeListResponse.
     * @deprecated Use meridian.EmployeeListResponse.$Properties instead.
     */
    interface IEmployeeListResponse extends meridian.EmployeeListResponse.$Properties {
    }

    /** Represents an EmployeeListResponse. */
    class EmployeeListResponse {

        /**
         * Constructs a new EmployeeListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.EmployeeListResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** EmployeeListResponse employees. */
        employees: meridian.EmployeeResponse.$Properties[];

        /**
         * Creates a new EmployeeListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmployeeListResponse instance
         */
        static create(properties: meridian.EmployeeListResponse.$Shape): meridian.EmployeeListResponse & meridian.EmployeeListResponse.$Shape;
        static create(properties?: meridian.EmployeeListResponse.$Properties): meridian.EmployeeListResponse;

        /**
         * Encodes the specified EmployeeListResponse message. Does not implicitly {@link meridian.EmployeeListResponse.verify|verify} messages.
         * @param message EmployeeListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.EmployeeListResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmployeeListResponse message, length delimited. Does not implicitly {@link meridian.EmployeeListResponse.verify|verify} messages.
         * @param message EmployeeListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.EmployeeListResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmployeeListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.EmployeeListResponse & meridian.EmployeeListResponse.$Shape} EmployeeListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.EmployeeListResponse & meridian.EmployeeListResponse.$Shape;

        /**
         * Decodes an EmployeeListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.EmployeeListResponse & meridian.EmployeeListResponse.$Shape} EmployeeListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.EmployeeListResponse & meridian.EmployeeListResponse.$Shape;

        /**
         * Verifies an EmployeeListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmployeeListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmployeeListResponse
         */
        static fromObject(object: { [k: string]: any }): meridian.EmployeeListResponse;

        /**
         * Creates a plain object from an EmployeeListResponse message. Also converts values to other types if specified.
         * @param message EmployeeListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.EmployeeListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmployeeListResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for EmployeeListResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace EmployeeListResponse {

        /** Properties of an EmployeeListResponse. */
        interface $Properties {

            /** EmployeeListResponse employees */
            employees?: (meridian.EmployeeResponse.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an EmployeeListResponse. */
        type $Shape = meridian.EmployeeListResponse.$Properties;
    }

    /**
     * Properties of a LoginRequest.
     * @deprecated Use meridian.LoginRequest.$Properties instead.
     */
    interface ILoginRequest extends meridian.LoginRequest.$Properties {
    }

    /** Represents a LoginRequest. */
    class LoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.LoginRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LoginRequest username. */
        username: string;

        /** LoginRequest password. */
        password: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        static create(properties: meridian.LoginRequest.$Shape): meridian.LoginRequest & meridian.LoginRequest.$Shape;
        static create(properties?: meridian.LoginRequest.$Properties): meridian.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link meridian.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.LoginRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link meridian.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.LoginRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.LoginRequest & meridian.LoginRequest.$Shape} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.LoginRequest & meridian.LoginRequest.$Shape;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.LoginRequest & meridian.LoginRequest.$Shape} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.LoginRequest & meridian.LoginRequest.$Shape;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        static fromObject(object: { [k: string]: any }): meridian.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LoginRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LoginRequest {

        /** Properties of a LoginRequest. */
        interface $Properties {

            /** LoginRequest username */
            username?: (string|null);

            /** LoginRequest password */
            password?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LoginRequest. */
        type $Shape = meridian.LoginRequest.$Properties;
    }

    /**
     * Properties of a LoginResponse.
     * @deprecated Use meridian.LoginResponse.$Properties instead.
     */
    interface ILoginResponse extends meridian.LoginResponse.$Properties {
    }

    /** Represents a LoginResponse. */
    class LoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.LoginResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LoginResponse success. */
        success: boolean;

        /** LoginResponse token. */
        token: string;

        /** LoginResponse employee. */
        employee?: (meridian.EmployeeResponse.$Properties|null);

        /** LoginResponse errorMessage. */
        errorMessage: string;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        static create(properties: meridian.LoginResponse.$Shape): meridian.LoginResponse & meridian.LoginResponse.$Shape;
        static create(properties?: meridian.LoginResponse.$Properties): meridian.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link meridian.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.LoginResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link meridian.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.LoginResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.LoginResponse & meridian.LoginResponse.$Shape} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.LoginResponse & meridian.LoginResponse.$Shape;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.LoginResponse & meridian.LoginResponse.$Shape} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.LoginResponse & meridian.LoginResponse.$Shape;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        static fromObject(object: { [k: string]: any }): meridian.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LoginResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LoginResponse {

        /** Properties of a LoginResponse. */
        interface $Properties {

            /** LoginResponse success */
            success?: (boolean|null);

            /** LoginResponse token */
            token?: (string|null);

            /** LoginResponse employee */
            employee?: (meridian.EmployeeResponse.$Properties|null);

            /** LoginResponse errorMessage */
            errorMessage?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LoginResponse. */
        type $Shape = meridian.LoginResponse.$Properties;
    }

    /**
     * Properties of an UpdateScheduleRequest.
     * @deprecated Use meridian.UpdateScheduleRequest.$Properties instead.
     */
    interface IUpdateScheduleRequest extends meridian.UpdateScheduleRequest.$Properties {
    }

    /** Represents an UpdateScheduleRequest. */
    class UpdateScheduleRequest {

        /**
         * Constructs a new UpdateScheduleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.UpdateScheduleRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UpdateScheduleRequest employeeId. */
        employeeId: number;

        /** UpdateScheduleRequest monday. */
        monday: boolean;

        /** UpdateScheduleRequest tuesday. */
        tuesday: boolean;

        /** UpdateScheduleRequest wednesday. */
        wednesday: boolean;

        /** UpdateScheduleRequest thursday. */
        thursday: boolean;

        /** UpdateScheduleRequest friday. */
        friday: boolean;

        /**
         * Creates a new UpdateScheduleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateScheduleRequest instance
         */
        static create(properties: meridian.UpdateScheduleRequest.$Shape): meridian.UpdateScheduleRequest & meridian.UpdateScheduleRequest.$Shape;
        static create(properties?: meridian.UpdateScheduleRequest.$Properties): meridian.UpdateScheduleRequest;

        /**
         * Encodes the specified UpdateScheduleRequest message. Does not implicitly {@link meridian.UpdateScheduleRequest.verify|verify} messages.
         * @param message UpdateScheduleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.UpdateScheduleRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateScheduleRequest message, length delimited. Does not implicitly {@link meridian.UpdateScheduleRequest.verify|verify} messages.
         * @param message UpdateScheduleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.UpdateScheduleRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateScheduleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.UpdateScheduleRequest & meridian.UpdateScheduleRequest.$Shape} UpdateScheduleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.UpdateScheduleRequest & meridian.UpdateScheduleRequest.$Shape;

        /**
         * Decodes an UpdateScheduleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.UpdateScheduleRequest & meridian.UpdateScheduleRequest.$Shape} UpdateScheduleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.UpdateScheduleRequest & meridian.UpdateScheduleRequest.$Shape;

        /**
         * Verifies an UpdateScheduleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateScheduleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateScheduleRequest
         */
        static fromObject(object: { [k: string]: any }): meridian.UpdateScheduleRequest;

        /**
         * Creates a plain object from an UpdateScheduleRequest message. Also converts values to other types if specified.
         * @param message UpdateScheduleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.UpdateScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateScheduleRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UpdateScheduleRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UpdateScheduleRequest {

        /** Properties of an UpdateScheduleRequest. */
        interface $Properties {

            /** UpdateScheduleRequest employeeId */
            employeeId?: (number|null);

            /** UpdateScheduleRequest monday */
            monday?: (boolean|null);

            /** UpdateScheduleRequest tuesday */
            tuesday?: (boolean|null);

            /** UpdateScheduleRequest wednesday */
            wednesday?: (boolean|null);

            /** UpdateScheduleRequest thursday */
            thursday?: (boolean|null);

            /** UpdateScheduleRequest friday */
            friday?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an UpdateScheduleRequest. */
        type $Shape = meridian.UpdateScheduleRequest.$Properties;
    }

    /**
     * Properties of a ChatMessageRequest.
     * @deprecated Use meridian.ChatMessageRequest.$Properties instead.
     */
    interface IChatMessageRequest extends meridian.ChatMessageRequest.$Properties {
    }

    /** Represents a ChatMessageRequest. */
    class ChatMessageRequest {

        /**
         * Constructs a new ChatMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.ChatMessageRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChatMessageRequest senderId. */
        senderId: number;

        /** ChatMessageRequest receiverId. */
        receiverId: number;

        /** ChatMessageRequest text. */
        text: string;

        /**
         * Creates a new ChatMessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessageRequest instance
         */
        static create(properties: meridian.ChatMessageRequest.$Shape): meridian.ChatMessageRequest & meridian.ChatMessageRequest.$Shape;
        static create(properties?: meridian.ChatMessageRequest.$Properties): meridian.ChatMessageRequest;

        /**
         * Encodes the specified ChatMessageRequest message. Does not implicitly {@link meridian.ChatMessageRequest.verify|verify} messages.
         * @param message ChatMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.ChatMessageRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessageRequest message, length delimited. Does not implicitly {@link meridian.ChatMessageRequest.verify|verify} messages.
         * @param message ChatMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.ChatMessageRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.ChatMessageRequest & meridian.ChatMessageRequest.$Shape} ChatMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.ChatMessageRequest & meridian.ChatMessageRequest.$Shape;

        /**
         * Decodes a ChatMessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.ChatMessageRequest & meridian.ChatMessageRequest.$Shape} ChatMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.ChatMessageRequest & meridian.ChatMessageRequest.$Shape;

        /**
         * Verifies a ChatMessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessageRequest
         */
        static fromObject(object: { [k: string]: any }): meridian.ChatMessageRequest;

        /**
         * Creates a plain object from a ChatMessageRequest message. Also converts values to other types if specified.
         * @param message ChatMessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.ChatMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessageRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatMessageRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatMessageRequest {

        /** Properties of a ChatMessageRequest. */
        interface $Properties {

            /** ChatMessageRequest senderId */
            senderId?: (number|null);

            /** ChatMessageRequest receiverId */
            receiverId?: (number|null);

            /** ChatMessageRequest text */
            text?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatMessageRequest. */
        type $Shape = meridian.ChatMessageRequest.$Properties;
    }

    /**
     * Properties of a ChatMessageResponse.
     * @deprecated Use meridian.ChatMessageResponse.$Properties instead.
     */
    interface IChatMessageResponse extends meridian.ChatMessageResponse.$Properties {
    }

    /** Represents a ChatMessageResponse. */
    class ChatMessageResponse {

        /**
         * Constructs a new ChatMessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.ChatMessageResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChatMessageResponse senderId. */
        senderId: number;

        /** ChatMessageResponse receiverId. */
        receiverId: number;

        /** ChatMessageResponse text. */
        text: string;

        /** ChatMessageResponse time. */
        time: string;

        /**
         * Creates a new ChatMessageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessageResponse instance
         */
        static create(properties: meridian.ChatMessageResponse.$Shape): meridian.ChatMessageResponse & meridian.ChatMessageResponse.$Shape;
        static create(properties?: meridian.ChatMessageResponse.$Properties): meridian.ChatMessageResponse;

        /**
         * Encodes the specified ChatMessageResponse message. Does not implicitly {@link meridian.ChatMessageResponse.verify|verify} messages.
         * @param message ChatMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.ChatMessageResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessageResponse message, length delimited. Does not implicitly {@link meridian.ChatMessageResponse.verify|verify} messages.
         * @param message ChatMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.ChatMessageResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.ChatMessageResponse & meridian.ChatMessageResponse.$Shape} ChatMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.ChatMessageResponse & meridian.ChatMessageResponse.$Shape;

        /**
         * Decodes a ChatMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.ChatMessageResponse & meridian.ChatMessageResponse.$Shape} ChatMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.ChatMessageResponse & meridian.ChatMessageResponse.$Shape;

        /**
         * Verifies a ChatMessageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessageResponse
         */
        static fromObject(object: { [k: string]: any }): meridian.ChatMessageResponse;

        /**
         * Creates a plain object from a ChatMessageResponse message. Also converts values to other types if specified.
         * @param message ChatMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.ChatMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessageResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatMessageResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatMessageResponse {

        /** Properties of a ChatMessageResponse. */
        interface $Properties {

            /** ChatMessageResponse senderId */
            senderId?: (number|null);

            /** ChatMessageResponse receiverId */
            receiverId?: (number|null);

            /** ChatMessageResponse text */
            text?: (string|null);

            /** ChatMessageResponse time */
            time?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatMessageResponse. */
        type $Shape = meridian.ChatMessageResponse.$Properties;
    }

    /**
     * Properties of a ChatWindowResponse.
     * @deprecated Use meridian.ChatWindowResponse.$Properties instead.
     */
    interface IChatWindowResponse extends meridian.ChatWindowResponse.$Properties {
    }

    /** Represents a ChatWindowResponse. */
    class ChatWindowResponse {

        /**
         * Constructs a new ChatWindowResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.ChatWindowResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChatWindowResponse success. */
        success: boolean;

        /**
         * Creates a new ChatWindowResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatWindowResponse instance
         */
        static create(properties: meridian.ChatWindowResponse.$Shape): meridian.ChatWindowResponse & meridian.ChatWindowResponse.$Shape;
        static create(properties?: meridian.ChatWindowResponse.$Properties): meridian.ChatWindowResponse;

        /**
         * Encodes the specified ChatWindowResponse message. Does not implicitly {@link meridian.ChatWindowResponse.verify|verify} messages.
         * @param message ChatWindowResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.ChatWindowResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatWindowResponse message, length delimited. Does not implicitly {@link meridian.ChatWindowResponse.verify|verify} messages.
         * @param message ChatWindowResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.ChatWindowResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatWindowResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.ChatWindowResponse & meridian.ChatWindowResponse.$Shape} ChatWindowResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.ChatWindowResponse & meridian.ChatWindowResponse.$Shape;

        /**
         * Decodes a ChatWindowResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.ChatWindowResponse & meridian.ChatWindowResponse.$Shape} ChatWindowResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.ChatWindowResponse & meridian.ChatWindowResponse.$Shape;

        /**
         * Verifies a ChatWindowResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatWindowResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatWindowResponse
         */
        static fromObject(object: { [k: string]: any }): meridian.ChatWindowResponse;

        /**
         * Creates a plain object from a ChatWindowResponse message. Also converts values to other types if specified.
         * @param message ChatWindowResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.ChatWindowResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatWindowResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatWindowResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatWindowResponse {

        /** Properties of a ChatWindowResponse. */
        interface $Properties {

            /** ChatWindowResponse success */
            success?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatWindowResponse. */
        type $Shape = meridian.ChatWindowResponse.$Properties;
    }

    /**
     * Properties of a ChatHistoryRequest.
     * @deprecated Use meridian.ChatHistoryRequest.$Properties instead.
     */
    interface IChatHistoryRequest extends meridian.ChatHistoryRequest.$Properties {
    }

    /** Represents a ChatHistoryRequest. */
    class ChatHistoryRequest {

        /**
         * Constructs a new ChatHistoryRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.ChatHistoryRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChatHistoryRequest senderId. */
        senderId: number;

        /** ChatHistoryRequest receiverId. */
        receiverId: number;

        /**
         * Creates a new ChatHistoryRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatHistoryRequest instance
         */
        static create(properties: meridian.ChatHistoryRequest.$Shape): meridian.ChatHistoryRequest & meridian.ChatHistoryRequest.$Shape;
        static create(properties?: meridian.ChatHistoryRequest.$Properties): meridian.ChatHistoryRequest;

        /**
         * Encodes the specified ChatHistoryRequest message. Does not implicitly {@link meridian.ChatHistoryRequest.verify|verify} messages.
         * @param message ChatHistoryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.ChatHistoryRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatHistoryRequest message, length delimited. Does not implicitly {@link meridian.ChatHistoryRequest.verify|verify} messages.
         * @param message ChatHistoryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.ChatHistoryRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatHistoryRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.ChatHistoryRequest & meridian.ChatHistoryRequest.$Shape} ChatHistoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.ChatHistoryRequest & meridian.ChatHistoryRequest.$Shape;

        /**
         * Decodes a ChatHistoryRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.ChatHistoryRequest & meridian.ChatHistoryRequest.$Shape} ChatHistoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.ChatHistoryRequest & meridian.ChatHistoryRequest.$Shape;

        /**
         * Verifies a ChatHistoryRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatHistoryRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatHistoryRequest
         */
        static fromObject(object: { [k: string]: any }): meridian.ChatHistoryRequest;

        /**
         * Creates a plain object from a ChatHistoryRequest message. Also converts values to other types if specified.
         * @param message ChatHistoryRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.ChatHistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatHistoryRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatHistoryRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatHistoryRequest {

        /** Properties of a ChatHistoryRequest. */
        interface $Properties {

            /** ChatHistoryRequest senderId */
            senderId?: (number|null);

            /** ChatHistoryRequest receiverId */
            receiverId?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatHistoryRequest. */
        type $Shape = meridian.ChatHistoryRequest.$Properties;
    }

    /**
     * Properties of a ChatHistoryResponse.
     * @deprecated Use meridian.ChatHistoryResponse.$Properties instead.
     */
    interface IChatHistoryResponse extends meridian.ChatHistoryResponse.$Properties {
    }

    /** Represents a ChatHistoryResponse. */
    class ChatHistoryResponse {

        /**
         * Constructs a new ChatHistoryResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.ChatHistoryResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChatHistoryResponse messages. */
        messages: meridian.ChatMessageResponse.$Properties[];

        /**
         * Creates a new ChatHistoryResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatHistoryResponse instance
         */
        static create(properties: meridian.ChatHistoryResponse.$Shape): meridian.ChatHistoryResponse & meridian.ChatHistoryResponse.$Shape;
        static create(properties?: meridian.ChatHistoryResponse.$Properties): meridian.ChatHistoryResponse;

        /**
         * Encodes the specified ChatHistoryResponse message. Does not implicitly {@link meridian.ChatHistoryResponse.verify|verify} messages.
         * @param message ChatHistoryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.ChatHistoryResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatHistoryResponse message, length delimited. Does not implicitly {@link meridian.ChatHistoryResponse.verify|verify} messages.
         * @param message ChatHistoryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.ChatHistoryResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatHistoryResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.ChatHistoryResponse & meridian.ChatHistoryResponse.$Shape} ChatHistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.ChatHistoryResponse & meridian.ChatHistoryResponse.$Shape;

        /**
         * Decodes a ChatHistoryResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.ChatHistoryResponse & meridian.ChatHistoryResponse.$Shape} ChatHistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.ChatHistoryResponse & meridian.ChatHistoryResponse.$Shape;

        /**
         * Verifies a ChatHistoryResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatHistoryResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatHistoryResponse
         */
        static fromObject(object: { [k: string]: any }): meridian.ChatHistoryResponse;

        /**
         * Creates a plain object from a ChatHistoryResponse message. Also converts values to other types if specified.
         * @param message ChatHistoryResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.ChatHistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatHistoryResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatHistoryResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatHistoryResponse {

        /** Properties of a ChatHistoryResponse. */
        interface $Properties {

            /** ChatHistoryResponse messages */
            messages?: (meridian.ChatMessageResponse.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatHistoryResponse. */
        type $Shape = meridian.ChatHistoryResponse.$Properties;
    }

    /**
     * Properties of a MeetingRequest.
     * @deprecated Use meridian.MeetingRequest.$Properties instead.
     */
    interface IMeetingRequest extends meridian.MeetingRequest.$Properties {
    }

    /** Represents a MeetingRequest. */
    class MeetingRequest {

        /**
         * Constructs a new MeetingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.MeetingRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MeetingRequest employeeId. */
        employeeId: number;

        /** MeetingRequest departmentName. */
        departmentName: string;

        /**
         * Creates a new MeetingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MeetingRequest instance
         */
        static create(properties: meridian.MeetingRequest.$Shape): meridian.MeetingRequest & meridian.MeetingRequest.$Shape;
        static create(properties?: meridian.MeetingRequest.$Properties): meridian.MeetingRequest;

        /**
         * Encodes the specified MeetingRequest message. Does not implicitly {@link meridian.MeetingRequest.verify|verify} messages.
         * @param message MeetingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.MeetingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MeetingRequest message, length delimited. Does not implicitly {@link meridian.MeetingRequest.verify|verify} messages.
         * @param message MeetingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.MeetingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MeetingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.MeetingRequest & meridian.MeetingRequest.$Shape} MeetingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.MeetingRequest & meridian.MeetingRequest.$Shape;

        /**
         * Decodes a MeetingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.MeetingRequest & meridian.MeetingRequest.$Shape} MeetingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.MeetingRequest & meridian.MeetingRequest.$Shape;

        /**
         * Verifies a MeetingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MeetingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MeetingRequest
         */
        static fromObject(object: { [k: string]: any }): meridian.MeetingRequest;

        /**
         * Creates a plain object from a MeetingRequest message. Also converts values to other types if specified.
         * @param message MeetingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.MeetingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MeetingRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MeetingRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MeetingRequest {

        /** Properties of a MeetingRequest. */
        interface $Properties {

            /** MeetingRequest employeeId */
            employeeId?: (number|null);

            /** MeetingRequest departmentName */
            departmentName?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MeetingRequest. */
        type $Shape = meridian.MeetingRequest.$Properties;
    }

    /**
     * Properties of a MeetingMessage.
     * @deprecated Use meridian.MeetingMessage.$Properties instead.
     */
    interface IMeetingMessage extends meridian.MeetingMessage.$Properties {
    }

    /** Represents a MeetingMessage. */
    class MeetingMessage {

        /**
         * Constructs a new MeetingMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.MeetingMessage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MeetingMessage id. */
        id: number;

        /** MeetingMessage title. */
        title: string;

        /** MeetingMessage departmentName. */
        departmentName: string;

        /** MeetingMessage timeString. */
        timeString: string;

        /** MeetingMessage meetLink. */
        meetLink: string;

        /** MeetingMessage attendeeIds. */
        attendeeIds: number[];

        /**
         * Creates a new MeetingMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MeetingMessage instance
         */
        static create(properties: meridian.MeetingMessage.$Shape): meridian.MeetingMessage & meridian.MeetingMessage.$Shape;
        static create(properties?: meridian.MeetingMessage.$Properties): meridian.MeetingMessage;

        /**
         * Encodes the specified MeetingMessage message. Does not implicitly {@link meridian.MeetingMessage.verify|verify} messages.
         * @param message MeetingMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.MeetingMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MeetingMessage message, length delimited. Does not implicitly {@link meridian.MeetingMessage.verify|verify} messages.
         * @param message MeetingMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.MeetingMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MeetingMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.MeetingMessage & meridian.MeetingMessage.$Shape} MeetingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.MeetingMessage & meridian.MeetingMessage.$Shape;

        /**
         * Decodes a MeetingMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.MeetingMessage & meridian.MeetingMessage.$Shape} MeetingMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.MeetingMessage & meridian.MeetingMessage.$Shape;

        /**
         * Verifies a MeetingMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MeetingMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MeetingMessage
         */
        static fromObject(object: { [k: string]: any }): meridian.MeetingMessage;

        /**
         * Creates a plain object from a MeetingMessage message. Also converts values to other types if specified.
         * @param message MeetingMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.MeetingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MeetingMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MeetingMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MeetingMessage {

        /** Properties of a MeetingMessage. */
        interface $Properties {

            /** MeetingMessage id */
            id?: (number|null);

            /** MeetingMessage title */
            title?: (string|null);

            /** MeetingMessage departmentName */
            departmentName?: (string|null);

            /** MeetingMessage timeString */
            timeString?: (string|null);

            /** MeetingMessage meetLink */
            meetLink?: (string|null);

            /** MeetingMessage attendeeIds */
            attendeeIds?: (number[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MeetingMessage. */
        type $Shape = meridian.MeetingMessage.$Properties;
    }

    /**
     * Properties of a MeetingListResponse.
     * @deprecated Use meridian.MeetingListResponse.$Properties instead.
     */
    interface IMeetingListResponse extends meridian.MeetingListResponse.$Properties {
    }

    /** Represents a MeetingListResponse. */
    class MeetingListResponse {

        /**
         * Constructs a new MeetingListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: meridian.MeetingListResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MeetingListResponse meetings. */
        meetings: meridian.MeetingMessage.$Properties[];

        /**
         * Creates a new MeetingListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MeetingListResponse instance
         */
        static create(properties: meridian.MeetingListResponse.$Shape): meridian.MeetingListResponse & meridian.MeetingListResponse.$Shape;
        static create(properties?: meridian.MeetingListResponse.$Properties): meridian.MeetingListResponse;

        /**
         * Encodes the specified MeetingListResponse message. Does not implicitly {@link meridian.MeetingListResponse.verify|verify} messages.
         * @param message MeetingListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: meridian.MeetingListResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MeetingListResponse message, length delimited. Does not implicitly {@link meridian.MeetingListResponse.verify|verify} messages.
         * @param message MeetingListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: meridian.MeetingListResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MeetingListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {meridian.MeetingListResponse & meridian.MeetingListResponse.$Shape} MeetingListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meridian.MeetingListResponse & meridian.MeetingListResponse.$Shape;

        /**
         * Decodes a MeetingListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {meridian.MeetingListResponse & meridian.MeetingListResponse.$Shape} MeetingListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meridian.MeetingListResponse & meridian.MeetingListResponse.$Shape;

        /**
         * Verifies a MeetingListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MeetingListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MeetingListResponse
         */
        static fromObject(object: { [k: string]: any }): meridian.MeetingListResponse;

        /**
         * Creates a plain object from a MeetingListResponse message. Also converts values to other types if specified.
         * @param message MeetingListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: meridian.MeetingListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MeetingListResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MeetingListResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MeetingListResponse {

        /** Properties of a MeetingListResponse. */
        interface $Properties {

            /** MeetingListResponse meetings */
            meetings?: (meridian.MeetingMessage.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MeetingListResponse. */
        type $Shape = meridian.MeetingListResponse.$Properties;
    }
}
