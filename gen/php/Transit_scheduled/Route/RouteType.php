<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: protos/v1/gtfs-schedule.proto

namespace Transit_scheduled\Route;

use UnexpectedValueException;

/**
 * Indicates the type of transportation used on a route. Valid options are:
 *   0 - Tram, Streetcar, Light rail. Any light rail or street level system
 *   within a metropolitan area.
 *   1 - Subway, Metro. Any underground rail system within a metropolitan
 *   area.
 *   2 - Rail. Used for intercity or long-distance travel.
 *   3 - Bus. Used for short- and long-distance bus routes.
 *   4 - Ferry. Used for short- and long-distance boat service.
 *   5 - Cable tram. Used for street-level rail cars where the cable runs
 *   beneath the vehicle (e.g., cable car in San Francisco).
 *   6 - Aerial lift, suspended cable car (e.g., gondola lift, aerial
 *   tramway). Cable transport where cabins, cars, gondolas or open chairs are
 *   suspended by means of one or more cables.
 *   7 - Funicular. Any rail system designed for steep inclines.
 *   11 - Trolleybus. Electric buses that draw power from overhead wires using
 *   poles.
 *   12 - Monorail. Railway in which the track consists of a single rail or a
 *   beam.
 *
 * Protobuf type <code>transit_scheduled.Route.RouteType</code>
 */
class RouteType
{
    /**
     * Generated from protobuf enum <code>ROUTE_TYPE_TRAM_STREETCAR_LIGHTRAIL = 0;</code>
     */
    const ROUTE_TYPE_TRAM_STREETCAR_LIGHTRAIL = 0;
    /**
     * Generated from protobuf enum <code>ROUTE_TYPE_SUBWAY_METRO = 1;</code>
     */
    const ROUTE_TYPE_SUBWAY_METRO = 1;
    /**
     * Generated from protobuf enum <code>ROUTE_TYPE_RAIL = 2;</code>
     */
    const ROUTE_TYPE_RAIL = 2;
    /**
     * Generated from protobuf enum <code>ROUTE_TYPE_BUS = 3;</code>
     */
    const ROUTE_TYPE_BUS = 3;
    /**
     * Generated from protobuf enum <code>ROUTE_TYPE_FERRY = 4;</code>
     */
    const ROUTE_TYPE_FERRY = 4;
    /**
     * Generated from protobuf enum <code>ROUTE_TYPE_CABLE_TRAM = 5;</code>
     */
    const ROUTE_TYPE_CABLE_TRAM = 5;
    /**
     * Generated from protobuf enum <code>ROUTE_TYPE_AERIAL_LIFT_SUSPENDED_CABLE_CAR = 6;</code>
     */
    const ROUTE_TYPE_AERIAL_LIFT_SUSPENDED_CABLE_CAR = 6;
    /**
     * Generated from protobuf enum <code>ROUTE_TYPE_FUNICULAR = 7;</code>
     */
    const ROUTE_TYPE_FUNICULAR = 7;
    /**
     * Generated from protobuf enum <code>ROUTE_TYPE_TROLLEYBUS = 11;</code>
     */
    const ROUTE_TYPE_TROLLEYBUS = 11;
    /**
     * Generated from protobuf enum <code>ROUTE_TYPE_MONORAIL = 12;</code>
     */
    const ROUTE_TYPE_MONORAIL = 12;

    private static $valueToName = [
        self::ROUTE_TYPE_TRAM_STREETCAR_LIGHTRAIL => 'ROUTE_TYPE_TRAM_STREETCAR_LIGHTRAIL',
        self::ROUTE_TYPE_SUBWAY_METRO => 'ROUTE_TYPE_SUBWAY_METRO',
        self::ROUTE_TYPE_RAIL => 'ROUTE_TYPE_RAIL',
        self::ROUTE_TYPE_BUS => 'ROUTE_TYPE_BUS',
        self::ROUTE_TYPE_FERRY => 'ROUTE_TYPE_FERRY',
        self::ROUTE_TYPE_CABLE_TRAM => 'ROUTE_TYPE_CABLE_TRAM',
        self::ROUTE_TYPE_AERIAL_LIFT_SUSPENDED_CABLE_CAR => 'ROUTE_TYPE_AERIAL_LIFT_SUSPENDED_CABLE_CAR',
        self::ROUTE_TYPE_FUNICULAR => 'ROUTE_TYPE_FUNICULAR',
        self::ROUTE_TYPE_TROLLEYBUS => 'ROUTE_TYPE_TROLLEYBUS',
        self::ROUTE_TYPE_MONORAIL => 'ROUTE_TYPE_MONORAIL',
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
class_alias(RouteType::class, \Transit_scheduled\Route_RouteType::class);

