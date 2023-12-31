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

goog.provide('proto.transit_scheduled.Stop');
goog.provide('proto.transit_scheduled.Stop.LocationType');
goog.provide('proto.transit_scheduled.Stop.WheelchairBoarding');

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
proto.transit_scheduled.Stop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transit_scheduled.Stop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transit_scheduled.Stop.displayName = 'proto.transit_scheduled.Stop';
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
proto.transit_scheduled.Stop.prototype.toObject = function(opt_includeInstance) {
  return proto.transit_scheduled.Stop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transit_scheduled.Stop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_scheduled.Stop.toObject = function(includeInstance, msg) {
  var f, obj = {
    stopId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stopCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stopName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ttsStopName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    stopDesc: jspb.Message.getFieldWithDefault(msg, 5, ""),
    stopLat: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    stopLon: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    zoneId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    stopUrl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    locationType: jspb.Message.getFieldWithDefault(msg, 10, 0),
    parentStation: jspb.Message.getFieldWithDefault(msg, 11, ""),
    stopTimezone: jspb.Message.getFieldWithDefault(msg, 12, ""),
    wheelchairBoarding: jspb.Message.getFieldWithDefault(msg, 13, 0),
    levelId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    platformCode: jspb.Message.getFieldWithDefault(msg, 15, "")
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
 * @return {!proto.transit_scheduled.Stop}
 */
proto.transit_scheduled.Stop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transit_scheduled.Stop;
  return proto.transit_scheduled.Stop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transit_scheduled.Stop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transit_scheduled.Stop}
 */
proto.transit_scheduled.Stop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStopId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStopCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStopName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTtsStopName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStopDesc(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopLat(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopLon(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStopUrl(value);
      break;
    case 10:
      var value = /** @type {!proto.transit_scheduled.Stop.LocationType} */ (reader.readEnum());
      msg.setLocationType(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentStation(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setStopTimezone(value);
      break;
    case 13:
      var value = /** @type {!proto.transit_scheduled.Stop.WheelchairBoarding} */ (reader.readEnum());
      msg.setWheelchairBoarding(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevelId(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformCode(value);
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
proto.transit_scheduled.Stop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transit_scheduled.Stop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transit_scheduled.Stop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_scheduled.Stop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStopId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStopCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStopName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTtsStopName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStopDesc();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStopLat();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getStopLon();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getZoneId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStopUrl();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLocationType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getParentStation();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getStopTimezone();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getWheelchairBoarding();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getLevelId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPlatformCode();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.transit_scheduled.Stop.LocationType = {
  LOCATION_TYPE_STOP: 0,
  LOCATION_TYPE_STATION: 1,
  LOCATION_TYPE_ENTRANCE_EXIT: 2,
  LOCATION_TYPE_GENERIC_NODE: 3,
  LOCATION_TYPE_BOARDING_AREA: 4
};

/**
 * @enum {number}
 */
proto.transit_scheduled.Stop.WheelchairBoarding = {
  WHEELCHAIR_BOARDING_NO_INFO: 0,
  WHEELCHAIR_BOARDING_POSSIBLE: 1,
  WHEELCHAIR_BOARDING_NOT_POSSIBLE: 2
};

/**
 * optional string stop_id = 1;
 * @return {string}
 */
proto.transit_scheduled.Stop.prototype.getStopId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setStopId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stop_code = 2;
 * @return {string}
 */
proto.transit_scheduled.Stop.prototype.getStopCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setStopCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string stop_name = 3;
 * @return {string}
 */
proto.transit_scheduled.Stop.prototype.getStopName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setStopName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string tts_stop_name = 4;
 * @return {string}
 */
proto.transit_scheduled.Stop.prototype.getTtsStopName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setTtsStopName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string stop_desc = 5;
 * @return {string}
 */
proto.transit_scheduled.Stop.prototype.getStopDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setStopDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double stop_lat = 6;
 * @return {number}
 */
proto.transit_scheduled.Stop.prototype.getStopLat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setStopLat = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double stop_lon = 7;
 * @return {number}
 */
proto.transit_scheduled.Stop.prototype.getStopLon = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setStopLon = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string zone_id = 8;
 * @return {string}
 */
proto.transit_scheduled.Stop.prototype.getZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string stop_url = 9;
 * @return {string}
 */
proto.transit_scheduled.Stop.prototype.getStopUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setStopUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional LocationType location_type = 10;
 * @return {!proto.transit_scheduled.Stop.LocationType}
 */
proto.transit_scheduled.Stop.prototype.getLocationType = function() {
  return /** @type {!proto.transit_scheduled.Stop.LocationType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.transit_scheduled.Stop.LocationType} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setLocationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string parent_station = 11;
 * @return {string}
 */
proto.transit_scheduled.Stop.prototype.getParentStation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setParentStation = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string stop_timezone = 12;
 * @return {string}
 */
proto.transit_scheduled.Stop.prototype.getStopTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setStopTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional WheelchairBoarding wheelchair_boarding = 13;
 * @return {!proto.transit_scheduled.Stop.WheelchairBoarding}
 */
proto.transit_scheduled.Stop.prototype.getWheelchairBoarding = function() {
  return /** @type {!proto.transit_scheduled.Stop.WheelchairBoarding} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.transit_scheduled.Stop.WheelchairBoarding} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setWheelchairBoarding = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional string level_id = 14;
 * @return {string}
 */
proto.transit_scheduled.Stop.prototype.getLevelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setLevelId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string platform_code = 15;
 * @return {string}
 */
proto.transit_scheduled.Stop.prototype.getPlatformCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_scheduled.Stop} returns this
 */
proto.transit_scheduled.Stop.prototype.setPlatformCode = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


