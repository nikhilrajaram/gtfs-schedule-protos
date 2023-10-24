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

goog.provide('proto.transit_scheduled.StopTime');
goog.provide('proto.transit_scheduled.StopTime.DropOffType');
goog.provide('proto.transit_scheduled.StopTime.PickupType');
goog.provide('proto.transit_scheduled.StopTime.TimePoint');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.transit_scheduled.ContinuousDropOff');
goog.forwardDeclare('proto.transit_scheduled.ContinuousPickup');
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
proto.transit_scheduled.StopTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transit_scheduled.StopTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transit_scheduled.StopTime.displayName = 'proto.transit_scheduled.StopTime';
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
proto.transit_scheduled.StopTime.prototype.toObject = function(opt_includeInstance) {
  return proto.transit_scheduled.StopTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transit_scheduled.StopTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_scheduled.StopTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    tripId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    arrivalTime: jspb.Message.getFieldWithDefault(msg, 2, ""),
    departureTime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    stopId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    stopSequence: jspb.Message.getFieldWithDefault(msg, 5, 0),
    stopHeadsign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    pickupType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    dropOffType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    continuousPickup: jspb.Message.getFieldWithDefault(msg, 9, 0),
    continuousDropOff: jspb.Message.getFieldWithDefault(msg, 10, 0),
    shapeDistTraveled: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    timepoint: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.transit_scheduled.StopTime}
 */
proto.transit_scheduled.StopTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transit_scheduled.StopTime;
  return proto.transit_scheduled.StopTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transit_scheduled.StopTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transit_scheduled.StopTime}
 */
proto.transit_scheduled.StopTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTripId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setArrivalTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDepartureTime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStopId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStopSequence(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStopHeadsign(value);
      break;
    case 7:
      var value = /** @type {!proto.transit_scheduled.StopTime.PickupType} */ (reader.readEnum());
      msg.setPickupType(value);
      break;
    case 8:
      var value = /** @type {!proto.transit_scheduled.StopTime.DropOffType} */ (reader.readEnum());
      msg.setDropOffType(value);
      break;
    case 9:
      var value = /** @type {!proto.transit_scheduled.ContinuousPickup} */ (reader.readEnum());
      msg.setContinuousPickup(value);
      break;
    case 10:
      var value = /** @type {!proto.transit_scheduled.ContinuousDropOff} */ (reader.readEnum());
      msg.setContinuousDropOff(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setShapeDistTraveled(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimepoint(value);
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
proto.transit_scheduled.StopTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transit_scheduled.StopTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transit_scheduled.StopTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_scheduled.StopTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTripId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArrivalTime();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDepartureTime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStopId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStopSequence();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getStopHeadsign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPickupType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getDropOffType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getContinuousPickup();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getContinuousDropOff();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getShapeDistTraveled();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getTimepoint();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.transit_scheduled.StopTime.PickupType = {
  PICKUP_TYPE_REGULARLY_SCHEDULED: 0,
  PICKUP_TYPE_NONE_AVAILABLE: 1,
  PICKUP_TYPE_MUST_PHONE_AGENCY: 2,
  PICKUP_TYPE_MUST_COORDINATE_WITH_DRIVER: 3
};

/**
 * @enum {number}
 */
proto.transit_scheduled.StopTime.DropOffType = {
  DROP_OFF_TYPE_REGULARLY_SCHEDULED: 0,
  DROP_OFF_TYPE_NONE_AVAILABLE: 1,
  DROP_OFF_TYPE_MUST_PHONE_AGENCY: 2,
  DROP_OFF_TYPE_MUST_COORDINATE_WITH_DRIVER: 3
};

/**
 * @enum {number}
 */
proto.transit_scheduled.StopTime.TimePoint = {
  TIME_POINT_APPROXIMATE: 0,
  TIME_POINT_EXACT: 1
};

/**
 * optional string trip_id = 1;
 * @return {string}
 */
proto.transit_scheduled.StopTime.prototype.getTripId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setTripId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string arrival_time = 2;
 * @return {string}
 */
proto.transit_scheduled.StopTime.prototype.getArrivalTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setArrivalTime = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string departure_time = 3;
 * @return {string}
 */
proto.transit_scheduled.StopTime.prototype.getDepartureTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setDepartureTime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string stop_id = 4;
 * @return {string}
 */
proto.transit_scheduled.StopTime.prototype.getStopId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setStopId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 stop_sequence = 5;
 * @return {number}
 */
proto.transit_scheduled.StopTime.prototype.getStopSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setStopSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string stop_headsign = 6;
 * @return {string}
 */
proto.transit_scheduled.StopTime.prototype.getStopHeadsign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setStopHeadsign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional PickupType pickup_type = 7;
 * @return {!proto.transit_scheduled.StopTime.PickupType}
 */
proto.transit_scheduled.StopTime.prototype.getPickupType = function() {
  return /** @type {!proto.transit_scheduled.StopTime.PickupType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.transit_scheduled.StopTime.PickupType} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setPickupType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional DropOffType drop_off_type = 8;
 * @return {!proto.transit_scheduled.StopTime.DropOffType}
 */
proto.transit_scheduled.StopTime.prototype.getDropOffType = function() {
  return /** @type {!proto.transit_scheduled.StopTime.DropOffType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.transit_scheduled.StopTime.DropOffType} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setDropOffType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional ContinuousPickup continuous_pickup = 9;
 * @return {!proto.transit_scheduled.ContinuousPickup}
 */
proto.transit_scheduled.StopTime.prototype.getContinuousPickup = function() {
  return /** @type {!proto.transit_scheduled.ContinuousPickup} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.transit_scheduled.ContinuousPickup} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setContinuousPickup = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional ContinuousDropOff continuous_drop_off = 10;
 * @return {!proto.transit_scheduled.ContinuousDropOff}
 */
proto.transit_scheduled.StopTime.prototype.getContinuousDropOff = function() {
  return /** @type {!proto.transit_scheduled.ContinuousDropOff} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.transit_scheduled.ContinuousDropOff} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setContinuousDropOff = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional float shape_dist_traveled = 11;
 * @return {number}
 */
proto.transit_scheduled.StopTime.prototype.getShapeDistTraveled = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setShapeDistTraveled = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional uint32 timepoint = 12;
 * @return {number}
 */
proto.transit_scheduled.StopTime.prototype.getTimepoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.transit_scheduled.StopTime} returns this
 */
proto.transit_scheduled.StopTime.prototype.setTimepoint = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};

