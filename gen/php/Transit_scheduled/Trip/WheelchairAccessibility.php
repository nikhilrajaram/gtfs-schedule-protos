<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: protos/v1/gtfs-schedule.proto

namespace Transit_scheduled\Trip;

use UnexpectedValueException;

/**
 * Indicates wheelchair accessibility. Valid options are:
 *   0 or empty - No accessibility information for the trip.
 *   1 - Vehicle being used on this particular trip can accommodate at least
 *   one rider in a wheelchair.
 *   2 - No riders in wheelchairs can be accommodated on this trip.
 *
 * Protobuf type <code>transit_scheduled.Trip.WheelchairAccessibility</code>
 */
class WheelchairAccessibility
{
    /**
     * Generated from protobuf enum <code>WHEELCHAIR_ACCESSIBILITY_NO_INFO = 0;</code>
     */
    const WHEELCHAIR_ACCESSIBILITY_NO_INFO = 0;
    /**
     * Generated from protobuf enum <code>WHEELCHAIR_ACCESSIBILITY_ACCESSIBLE = 1;</code>
     */
    const WHEELCHAIR_ACCESSIBILITY_ACCESSIBLE = 1;
    /**
     * Generated from protobuf enum <code>WHEELCHAIR_ACCESSIBILITY_NOT_ACCESSIBLE = 2;</code>
     */
    const WHEELCHAIR_ACCESSIBILITY_NOT_ACCESSIBLE = 2;

    private static $valueToName = [
        self::WHEELCHAIR_ACCESSIBILITY_NO_INFO => 'WHEELCHAIR_ACCESSIBILITY_NO_INFO',
        self::WHEELCHAIR_ACCESSIBILITY_ACCESSIBLE => 'WHEELCHAIR_ACCESSIBILITY_ACCESSIBLE',
        self::WHEELCHAIR_ACCESSIBILITY_NOT_ACCESSIBLE => 'WHEELCHAIR_ACCESSIBILITY_NOT_ACCESSIBLE',
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
class_alias(WheelchairAccessibility::class, \Transit_scheduled\Trip_WheelchairAccessibility::class);

