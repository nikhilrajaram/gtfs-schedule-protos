<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: protos/v1/gtfs-schedule.proto

namespace Transit_scheduled\Trip;

use UnexpectedValueException;

/**
 * Indicates whether bikes are allowed. Valid options are:
 *   0 or empty - No bike information for the trip.
 *   1 - Vehicle being used on this particular trip can accommodate at least
 *   one bicycle.
 *   2 - No bicycles are allowed on this trip.
 *
 * Protobuf type <code>transit_scheduled.Trip.BikeAllowance</code>
 */
class BikeAllowance
{
    /**
     * Generated from protobuf enum <code>BIKE_ALLOWANCE_NO_INFO = 0;</code>
     */
    const BIKE_ALLOWANCE_NO_INFO = 0;
    /**
     * Generated from protobuf enum <code>BIKE_ALLOWANCE_ALLOWED = 1;</code>
     */
    const BIKE_ALLOWANCE_ALLOWED = 1;
    /**
     * Generated from protobuf enum <code>BIKE_ALLOWANCE_NOT_ALLOWED = 2;</code>
     */
    const BIKE_ALLOWANCE_NOT_ALLOWED = 2;

    private static $valueToName = [
        self::BIKE_ALLOWANCE_NO_INFO => 'BIKE_ALLOWANCE_NO_INFO',
        self::BIKE_ALLOWANCE_ALLOWED => 'BIKE_ALLOWANCE_ALLOWED',
        self::BIKE_ALLOWANCE_NOT_ALLOWED => 'BIKE_ALLOWANCE_NOT_ALLOWED',
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
class_alias(BikeAllowance::class, \Transit_scheduled\Trip_BikeAllowance::class);

