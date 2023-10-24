<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: protos/v1/gtfs-schedule.proto

namespace Transit_scheduled\Stop;

use UnexpectedValueException;

/**
 * Location type. Valid options are:
 *   0 (or blank) - Stop (or Platform). A location where passengers board or
 *   disembark from a transit vehicle. Is called a platform when defined
 *   within a parent_station.
 *   1 - Station. A physical structure or area that contains one or more
 *   platform.
 *   2 - Entrance/Exit. A location where passengers can enter or exit a
 *   station from the street. If an entrance/exit belongs to multiple
 *   stations, it may be linked by pathways to both, but the data provider
 *   must pick one of them as parent.
 *   3 - Generic Node. A location within a station, not matching any other
 *   location_type, that may be used to link together pathways define in
 *   pathways.txt.
 *   4 - Boarding Area. A specific location on a platform, where passengers
 *   can board and/or alight vehicles.
 *
 * Protobuf type <code>transit_scheduled.Stop.LocationType</code>
 */
class LocationType
{
    /**
     * Generated from protobuf enum <code>LOCATION_TYPE_STOP = 0;</code>
     */
    const LOCATION_TYPE_STOP = 0;
    /**
     * Generated from protobuf enum <code>LOCATION_TYPE_STATION = 1;</code>
     */
    const LOCATION_TYPE_STATION = 1;
    /**
     * Generated from protobuf enum <code>LOCATION_TYPE_ENTRANCE_EXIT = 2;</code>
     */
    const LOCATION_TYPE_ENTRANCE_EXIT = 2;
    /**
     * Generated from protobuf enum <code>LOCATION_TYPE_GENERIC_NODE = 3;</code>
     */
    const LOCATION_TYPE_GENERIC_NODE = 3;
    /**
     * Generated from protobuf enum <code>LOCATION_TYPE_BOARDING_AREA = 4;</code>
     */
    const LOCATION_TYPE_BOARDING_AREA = 4;

    private static $valueToName = [
        self::LOCATION_TYPE_STOP => 'LOCATION_TYPE_STOP',
        self::LOCATION_TYPE_STATION => 'LOCATION_TYPE_STATION',
        self::LOCATION_TYPE_ENTRANCE_EXIT => 'LOCATION_TYPE_ENTRANCE_EXIT',
        self::LOCATION_TYPE_GENERIC_NODE => 'LOCATION_TYPE_GENERIC_NODE',
        self::LOCATION_TYPE_BOARDING_AREA => 'LOCATION_TYPE_BOARDING_AREA',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(LocationType::class, \Transit_scheduled\Stop_LocationType::class);

