// source: protos/v1/gtfs-schedule.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.transit_scheduled.Trip');
goog.provide('proto.transit_scheduled.Trip.BikeAllowance');
goog.provide('proto.transit_scheduled.Trip.Direction');
goog.provide('proto.transit_scheduled.Trip.WheelchairAccessibility');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transit_scheduled.Trip = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transit_scheduled.Trip, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transit_scheduled.Trip.displayName = 'proto.transit_scheduled.Trip';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transit_scheduled.Trip.prototype.toObject = function(opt_includeInstance) {
  return proto.transit_scheduled.Trip.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transit_scheduled.Trip} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_scheduled.Trip.toObject = function(includeInstance, msg) {
  var f, obj = {
    routeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    serviceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tripId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tripHeadsign: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tripShortName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    directionId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    blockId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    shapeId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    wheelchairAccessible: jspb.Message.getFieldWithDefault(msg, 9, 0),
    bikesAllowed: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transit_scheduled.Trip}
 */
proto.transit_scheduled.Trip.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transit_scheduled.Trip;
  return proto.transit_scheduled.Trip.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transit_scheduled.Trip} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transit_scheduled.Trip}
 */
proto.transit_scheduled.Trip.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRouteId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTripId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTripHeadsign(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTripShortName(value);
      break;
    case 6:
      var value = /** @type {!proto.transit_scheduled.Trip.Direction} */ (reader.readEnum());
      msg.setDirectionId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setShapeId(value);
      break;
    case 9:
      var value = /** @type {!proto.transit_scheduled.Trip.WheelchairAccessibility} */ (reader.readEnum());
      msg.setWheelchairAccessible(value);
      break;
    case 10:
      var value = /** @type {!proto.transit_scheduled.Trip.BikeAllowance} */ (reader.readEnum());
      msg.setBikesAllowed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transit_scheduled.Trip.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transit_scheduled.Trip.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transit_scheduled.Trip} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_scheduled.Trip.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRouteId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTripId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTripHeadsign();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTripShortName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDirectionId();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getBlockId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getShapeId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getWheelchairAccessible();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getBikesAllowed();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.transit_scheduled.Trip.Direction = {
  DIRECTION_ONE_DIRECTION: 0,
  DIRECTION_OPPOSITE: 1
};

/**
 * @enum {number}
 */
proto.transit_scheduled.Trip.WheelchairAccessibility = {
  WHEELCHAIR_ACCESSIBILITY_NO_INFO: 0,
  WHEELCHAIR_ACCESSIBILITY_ACCESSIBLE: 1,
  WHEELCHAIR_ACCESSIBILITY_NOT_ACCESSIBLE: 2
};

/**
 * @enum {number}
 */
proto.transit_scheduled.Trip.BikeAllowance = {
  BIKE_ALLOWANCE_NO_INFO: 0,
  BIKE_ALLOWANCE_ALLOWED: 1,
  BIKE_ALLOWANCE_NOT_ALLOWED: 2
};

/**
 * optional string route_id = 1;
 * @return {string}
 */
proto.transit_scheduled.Trip.prototype.getRouteId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Trip} returns this
 */
proto.transit_scheduled.Trip.prototype.setRouteId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string service_id = 2;
 * @return {string}
 */
proto.transit_scheduled.Trip.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Trip} returns this
 */
proto.transit_scheduled.Trip.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string trip_id = 3;
 * @return {string}
 */
proto.transit_scheduled.Trip.prototype.getTripId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Trip} returns this
 */
proto.transit_scheduled.Trip.prototype.setTripId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string trip_headsign = 4;
 * @return {string}
 */
proto.transit_scheduled.Trip.prototype.getTripHeadsign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Trip} returns this
 */
proto.transit_scheduled.Trip.prototype.setTripHeadsign = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string trip_short_name = 5;
 * @return {string}
 */
proto.transit_scheduled.Trip.prototype.getTripShortName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Trip} returns this
 */
proto.transit_scheduled.Trip.prototype.setTripShortName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Direction direction_id = 6;
 * @return {!proto.transit_scheduled.Trip.Direction}
 */
proto.transit_scheduled.Trip.prototype.getDirectionId = function() {
  return /** @type {!proto.transit_scheduled.Trip.Direction} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.transit_scheduled.Trip.Direction} value
 * @return {!proto.transit_scheduled.Trip} returns this
 */
proto.transit_scheduled.Trip.prototype.setDirectionId = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string block_id = 7;
 * @return {string}
 */
proto.transit_scheduled.Trip.prototype.getBlockId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Trip} returns this
 */
proto.transit_scheduled.Trip.prototype.setBlockId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string shape_id = 8;
 * @return {string}
 */
proto.transit_scheduled.Trip.prototype.getShapeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Trip} returns this
 */
proto.transit_scheduled.Trip.prototype.setShapeId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional WheelchairAccessibility wheelchair_accessible = 9;
 * @return {!proto.transit_scheduled.Trip.WheelchairAccessibility}
 */
proto.transit_scheduled.Trip.prototype.getWheelchairAccessible = function() {
  return /** @type {!proto.transit_scheduled.Trip.WheelchairAccessibility} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.transit_scheduled.Trip.WheelchairAccessibility} value
 * @return {!proto.transit_scheduled.Trip} returns this
 */
proto.transit_scheduled.Trip.prototype.setWheelchairAccessible = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional BikeAllowance bikes_allowed = 10;
 * @return {!proto.transit_scheduled.Trip.BikeAllowance}
 */
proto.transit_scheduled.Trip.prototype.getBikesAllowed = function() {
  return /** @type {!proto.transit_scheduled.Trip.BikeAllowance} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.transit_scheduled.Trip.BikeAllowance} value
 * @return {!proto.transit_scheduled.Trip} returns this
 */
proto.transit_scheduled.Trip.prototype.setBikesAllowed = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


