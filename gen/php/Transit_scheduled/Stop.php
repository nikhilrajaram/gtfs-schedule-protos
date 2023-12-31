<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: protos/v1/gtfs-schedule.proto

namespace Transit_scheduled;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Stops where vehicles pick up or drop off riders. Also defines stations and
 * station entrances.
 *
 * Generated from protobuf message <code>transit_scheduled.Stop</code>
 */
class Stop extends \Google\Protobuf\Internal\Message
{
    /**
     * Identifies a location: stop/platform, station, entrance/exit, generic node
     * or boarding area (see location_type).
     * Multiple routes may use the same stop_id.
     * Required
     *
     * Generated from protobuf field <code>string stop_id = 1;</code>
     */
    protected $stop_id = '';
    /**
     * Short text or a number that identifies the location for riders. These codes
     * are often used in phone-based transit information systems or printed on
     * signage to make it easier for riders to get information for a particular
     * location. The stop_code may be the same as stop_id if it is public facing.
     * This field should be left empty for locations without a code presented to
     * riders.
     *
     * Generated from protobuf field <code>string stop_code = 2;</code>
     */
    protected $stop_code = '';
    /**
     * Name of the location. The stop_name should match the agency's rider-facing
     * name for the location as printed on a timetable, published online, or
     * represented on signage. For translations into other languages, use
     * translations.txt.
     * When the location is a boarding area (location_type=4), the stop_name
     * should contains the name of the boarding area as displayed by the agency.
     * It could be just one letter (like on some European intercity railway
     * stations), or text like “Wheelchair boarding area” (NYC’s Subway) or “Head
     * of short trains” (Paris’ RER).
     * Conditionally Required:
     * - Required for locations which are stops (location_type=0), stations
     * (location_type=1) or entrances/exits (location_type=2).
     * - Optional for locations which are generic nodes (location_type=3) or
     * boarding areas (location_type=4).
     *
     * Generated from protobuf field <code>string stop_name = 3;</code>
     */
    protected $stop_name = '';
    /**
     * Readable version of the stop_name. See "Text-to-speech field" in the Term
     * Definitions for more https://gtfs.org/schedule/reference/#term-definitions.
     *
     * Generated from protobuf field <code>string tts_stop_name = 4;</code>
     */
    protected $tts_stop_name = '';
    /**
     * Description of the location that provides useful, quality information.
     * Should not be a duplicate of stop_name.
     *
     * Generated from protobuf field <code>string stop_desc = 5;</code>
     */
    protected $stop_desc = '';
    /**
     * Latitude of the location.
     * For stops/platforms (location_type=0) and boarding area (location_type=4),
     * the coordinates must be the ones of the bus pole — if exists — and
     * otherwise of where the travelers are boarding the vehicle (on the sidewalk
     * or the platform, and not on the roadway or the track where the vehicle
     * stops).
     * Conditionally Required:
     * - Required for locations which are stops (location_type=0), stations
     * (location_type=1) or entrances/exits (location_type=2).
     * - Optional for locations which are generic nodes (location_type=3) or
     * boarding areas (location_type=4).
     *
     * Generated from protobuf field <code>double stop_lat = 6;</code>
     */
    protected $stop_lat = 0.0;
    /**
     * Longitude of the location.
     * For stops/platforms (location_type=0) and boarding area (location_type=4),
     * the coordinates must be the ones of the bus pole — if exists — and
     * otherwise of where the travelers are boarding the vehicle (on the sidewalk
     * or the platform, and not on the roadway or the track where the vehicle
     * stops).
     * Conditionally Required:
     * - Required for locations which are stops (location_type=0), stations
     * (location_type=1) or entrances/exits (location_type=2).
     * - Optional for locations which are generic nodes (location_type=3) or
     * boarding areas (location_type=4).
     *
     * Generated from protobuf field <code>double stop_lon = 7;</code>
     */
    protected $stop_lon = 0.0;
    /**
     * Identifies the fare zone for a stop. If this record represents a station or
     * station entrance, the zone_id is ignored.
     * Conditionally Required:
     * - Required if providing fare information using fare_rules.txt
     * - Optional otherwise.
     *
     * Generated from protobuf field <code>string zone_id = 8;</code>
     */
    protected $zone_id = '';
    /**
     * URL of a web page about the location. This should be different from the
     * agency.agency_url and the routes.route_url field values.
     *
     * Generated from protobuf field <code>string stop_url = 9;</code>
     */
    protected $stop_url = '';
    /**
     * Location type.
     *
     * Generated from protobuf field <code>.transit_scheduled.Stop.LocationType location_type = 10;</code>
     */
    protected $location_type = 0;
    /**
     * Defines hierarchy between the different locations defined in stops.txt. It
     * contains the ID of the parent location, as followed:
     * - Stop/platform (location_type=0): the parent_station field contains the ID
     * of a station.
     * - Station (location_type=1): this field must be empty.
     * - Entrance/exit (location_type=2) or generic node (location_type=3): the
     * parent_station field contains the ID of a station (location_type=1)
     * - Boarding Area (location_type=4): the parent_station field contains ID of
     * a platform.
     * Conditionally Required:
     * - Required for locations which are entrances (location_type=2), generic
     * nodes (location_type=3) or boarding areas (location_type=4).
     * - Optional for stops/platforms (location_type=0).
     * - Forbidden for stations (location_type=1).
     *
     * Generated from protobuf field <code>string parent_station = 11;</code>
     */
    protected $parent_station = '';
    /**
     * Timezone of the location. If the location has a parent station, it inherits
     * the parent station’s timezone instead of applying its own. Stations and
     * parentless stops with empty stop_timezone inherit the timezone specified by
     * agency.agency_timezone. If stop_timezone values are provided, the times in
     * stop_times.txt should be entered as the time since midnight in the timezone
     * specified by agency.agency_timezone. This ensures that the time values in a
     * trip always increase over the course of a trip, regardless of which
     * timezones the trip crosses.
     *
     * Generated from protobuf field <code>string stop_timezone = 12;</code>
     */
    protected $stop_timezone = '';
    /**
     * Indicates whether wheelchair boardings are possible from the location.
     *
     * Generated from protobuf field <code>.transit_scheduled.Stop.WheelchairBoarding wheelchair_boarding = 13;</code>
     */
    protected $wheelchair_boarding = 0;
    /**
     * Level of the location. The same level may be used by multiple unlinked
     * stations.
     *
     * Generated from protobuf field <code>string level_id = 14;</code>
     */
    protected $level_id = '';
    /**
     * Platform identifier for a platform stop (a stop belonging to a station).
     * This should be just the platform identifier (eg. "G" or "3"). Words like
     * “platform” or "track" (or the feed’s language-specific equivalent) should
     * not be included. This allows feed consumers to more easily internationalize
     * and localize the platform identifier into other languages.
     *
     * Generated from protobuf field <code>string platform_code = 15;</code>
     */
    protected $platform_code = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $stop_id
     *           Identifies a location: stop/platform, station, entrance/exit, generic node
     *           or boarding area (see location_type).
     *           Multiple routes may use the same stop_id.
     *           Required
     *     @type string $stop_code
     *           Short text or a number that identifies the location for riders. These codes
     *           are often used in phone-based transit information systems or printed on
     *           signage to make it easier for riders to get information for a particular
     *           location. The stop_code may be the same as stop_id if it is public facing.
     *           This field should be left empty for locations without a code presented to
     *           riders.
     *     @type string $stop_name
     *           Name of the location. The stop_name should match the agency's rider-facing
     *           name for the location as printed on a timetable, published online, or
     *           represented on signage. For translations into other languages, use
     *           translations.txt.
     *           When the location is a boarding area (location_type=4), the stop_name
     *           should contains the name of the boarding area as displayed by the agency.
     *           It could be just one letter (like on some European intercity railway
     *           stations), or text like “Wheelchair boarding area” (NYC’s Subway) or “Head
     *           of short trains” (Paris’ RER).
     *           Conditionally Required:
     *           - Required for locations which are stops (location_type=0), stations
     *           (location_type=1) or entrances/exits (location_type=2).
     *           - Optional for locations which are generic nodes (location_type=3) or
     *           boarding areas (location_type=4).
     *     @type string $tts_stop_name
     *           Readable version of the stop_name. See "Text-to-speech field" in the Term
     *           Definitions for more https://gtfs.org/schedule/reference/#term-definitions.
     *     @type string $stop_desc
     *           Description of the location that provides useful, quality information.
     *           Should not be a duplicate of stop_name.
     *     @type float $stop_lat
     *           Latitude of the location.
     *           For stops/platforms (location_type=0) and boarding area (location_type=4),
     *           the coordinates must be the ones of the bus pole — if exists — and
     *           otherwise of where the travelers are boarding the vehicle (on the sidewalk
     *           or the platform, and not on the roadway or the track where the vehicle
     *           stops).
     *           Conditionally Required:
     *           - Required for locations which are stops (location_type=0), stations
     *           (location_type=1) or entrances/exits (location_type=2).
     *           - Optional for locations which are generic nodes (location_type=3) or
     *           boarding areas (location_type=4).
     *     @type float $stop_lon
     *           Longitude of the location.
     *           For stops/platforms (location_type=0) and boarding area (location_type=4),
     *           the coordinates must be the ones of the bus pole — if exists — and
     *           otherwise of where the travelers are boarding the vehicle (on the sidewalk
     *           or the platform, and not on the roadway or the track where the vehicle
     *           stops).
     *           Conditionally Required:
     *           - Required for locations which are stops (location_type=0), stations
     *           (location_type=1) or entrances/exits (location_type=2).
     *           - Optional for locations which are generic nodes (location_type=3) or
     *           boarding areas (location_type=4).
     *     @type string $zone_id
     *           Identifies the fare zone for a stop. If this record represents a station or
     *           station entrance, the zone_id is ignored.
     *           Conditionally Required:
     *           - Required if providing fare information using fare_rules.txt
     *           - Optional otherwise.
     *     @type string $stop_url
     *           URL of a web page about the location. This should be different from the
     *           agency.agency_url and the routes.route_url field values.
     *     @type int $location_type
     *           Location type.
     *     @type string $parent_station
     *           Defines hierarchy between the different locations defined in stops.txt. It
     *           contains the ID of the parent location, as followed:
     *           - Stop/platform (location_type=0): the parent_station field contains the ID
     *           of a station.
     *           - Station (location_type=1): this field must be empty.
     *           - Entrance/exit (location_type=2) or generic node (location_type=3): the
     *           parent_station field contains the ID of a station (location_type=1)
     *           - Boarding Area (location_type=4): the parent_station field contains ID of
     *           a platform.
     *           Conditionally Required:
     *           - Required for locations which are entrances (location_type=2), generic
     *           nodes (location_type=3) or boarding areas (location_type=4).
     *           - Optional for stops/platforms (location_type=0).
     *           - Forbidden for stations (location_type=1).
     *     @type string $stop_timezone
     *           Timezone of the location. If the location has a parent station, it inherits
     *           the parent station’s timezone instead of applying its own. Stations and
     *           parentless stops with empty stop_timezone inherit the timezone specified by
     *           agency.agency_timezone. If stop_timezone values are provided, the times in
     *           stop_times.txt should be entered as the time since midnight in the timezone
     *           specified by agency.agency_timezone. This ensures that the time values in a
     *           trip always increase over the course of a trip, regardless of which
     *           timezones the trip crosses.
     *     @type int $wheelchair_boarding
     *           Indicates whether wheelchair boardings are possible from the location.
     *     @type string $level_id
     *           Level of the location. The same level may be used by multiple unlinked
     *           stations.
     *     @type string $platform_code
     *           Platform identifier for a platform stop (a stop belonging to a station).
     *           This should be just the platform identifier (eg. "G" or "3"). Words like
     *           “platform” or "track" (or the feed’s language-specific equivalent) should
     *           not be included. This allows feed consumers to more easily internationalize
     *           and localize the platform identifier into other languages.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Protos\V1\GtfsSchedule::initOnce();
        parent::__construct($data);
    }

    /**
     * Identifies a location: stop/platform, station, entrance/exit, generic node
     * or boarding area (see location_type).
     * Multiple routes may use the same stop_id.
     * Required
     *
     * Generated from protobuf field <code>string stop_id = 1;</code>
     * @return string
     */
    public function getStopId()
    {
        return $this->stop_id;
    }

    /**
     * Identifies a location: stop/platform, station, entrance/exit, generic node
     * or boarding area (see location_type).
     * Multiple routes may use the same stop_id.
     * Required
     *
     * Generated from protobuf field <code>string stop_id = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setStopId($var)
    {
        GPBUtil::checkString($var, True);
        $this->stop_id = $var;

        return $this;
    }

    /**
     * Short text or a number that identifies the location for riders. These codes
     * are often used in phone-based transit information systems or printed on
     * signage to make it easier for riders to get information for a particular
     * location. The stop_code may be the same as stop_id if it is public facing.
     * This field should be left empty for locations without a code presented to
     * riders.
     *
     * Generated from protobuf field <code>string stop_code = 2;</code>
     * @return string
     */
    public function getStopCode()
    {
        return $this->stop_code;
    }

    /**
     * Short text or a number that identifies the location for riders. These codes
     * are often used in phone-based transit information systems or printed on
     * signage to make it easier for riders to get information for a particular
     * location. The stop_code may be the same as stop_id if it is public facing.
     * This field should be left empty for locations without a code presented to
     * riders.
     *
     * Generated from protobuf field <code>string stop_code = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setStopCode($var)
    {
        GPBUtil::checkString($var, True);
        $this->stop_code = $var;

        return $this;
    }

    /**
     * Name of the location. The stop_name should match the agency's rider-facing
     * name for the location as printed on a timetable, published online, or
     * represented on signage. For translations into other languages, use
     * translations.txt.
     * When the location is a boarding area (location_type=4), the stop_name
     * should contains the name of the boarding area as displayed by the agency.
     * It could be just one letter (like on some European intercity railway
     * stations), or text like “Wheelchair boarding area” (NYC’s Subway) or “Head
     * of short trains” (Paris’ RER).
     * Conditionally Required:
     * - Required for locations which are stops (location_type=0), stations
     * (location_type=1) or entrances/exits (location_type=2).
     * - Optional for locations which are generic nodes (location_type=3) or
     * boarding areas (location_type=4).
     *
     * Generated from protobuf field <code>string stop_name = 3;</code>
     * @return string
     */
    public function getStopName()
    {
        return $this->stop_name;
    }

    /**
     * Name of the location. The stop_name should match the agency's rider-facing
     * name for the location as printed on a timetable, published online, or
     * represented on signage. For translations into other languages, use
     * translations.txt.
     * When the location is a boarding area (location_type=4), the stop_name
     * should contains the name of the boarding area as displayed by the agency.
     * It could be just one letter (like on some European intercity railway
     * stations), or text like “Wheelchair boarding area” (NYC’s Subway) or “Head
     * of short trains” (Paris’ RER).
     * Conditionally Required:
     * - Required for locations which are stops (location_type=0), stations
     * (location_type=1) or entrances/exits (location_type=2).
     * - Optional for locations which are generic nodes (location_type=3) or
     * boarding areas (location_type=4).
     *
     * Generated from protobuf field <code>string stop_name = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setStopName($var)
    {
        GPBUtil::checkString($var, True);
        $this->stop_name = $var;

        return $this;
    }

    /**
     * Readable version of the stop_name. See "Text-to-speech field" in the Term
     * Definitions for more https://gtfs.org/schedule/reference/#term-definitions.
     *
     * Generated from protobuf field <code>string tts_stop_name = 4;</code>
     * @return string
     */
    public function getTtsStopName()
    {
        return $this->tts_stop_name;
    }

    /**
     * Readable version of the stop_name. See "Text-to-speech field" in the Term
     * Definitions for more https://gtfs.org/schedule/reference/#term-definitions.
     *
     * Generated from protobuf field <code>string tts_stop_name = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setTtsStopName($var)
    {
        GPBUtil::checkString($var, True);
        $this->tts_stop_name = $var;

        return $this;
    }

    /**
     * Description of the location that provides useful, quality information.
     * Should not be a duplicate of stop_name.
     *
     * Generated from protobuf field <code>string stop_desc = 5;</code>
     * @return string
     */
    public function getStopDesc()
    {
        return $this->stop_desc;
    }

    /**
     * Description of the location that provides useful, quality information.
     * Should not be a duplicate of stop_name.
     *
     * Generated from protobuf field <code>string stop_desc = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setStopDesc($var)
    {
        GPBUtil::checkString($var, True);
        $this->stop_desc = $var;

        return $this;
    }

    /**
     * Latitude of the location.
     * For stops/platforms (location_type=0) and boarding area (location_type=4),
     * the coordinates must be the ones of the bus pole — if exists — and
     * otherwise of where the travelers are boarding the vehicle (on the sidewalk
     * or the platform, and not on the roadway or the track where the vehicle
     * stops).
     * Conditionally Required:
     * - Required for locations which are stops (location_type=0), stations
     * (location_type=1) or entrances/exits (location_type=2).
     * - Optional for locations which are generic nodes (location_type=3) or
     * boarding areas (location_type=4).
     *
     * Generated from protobuf field <code>double stop_lat = 6;</code>
     * @return float
     */
    public function getStopLat()
    {
        return $this->stop_lat;
    }

    /**
     * Latitude of the location.
     * For stops/platforms (location_type=0) and boarding area (location_type=4),
     * the coordinates must be the ones of the bus pole — if exists — and
     * otherwise of where the travelers are boarding the vehicle (on the sidewalk
     * or the platform, and not on the roadway or the track where the vehicle
     * stops).
     * Conditionally Required:
     * - Required for locations which are stops (location_type=0), stations
     * (location_type=1) or entrances/exits (location_type=2).
     * - Optional for locations which are generic nodes (location_type=3) or
     * boarding areas (location_type=4).
     *
     * Generated from protobuf field <code>double stop_lat = 6;</code>
     * @param float $var
     * @return $this
     */
    public function setStopLat($var)
    {
        GPBUtil::checkDouble($var);
        $this->stop_lat = $var;

        return $this;
    }

    /**
     * Longitude of the location.
     * For stops/platforms (location_type=0) and boarding area (location_type=4),
     * the coordinates must be the ones of the bus pole — if exists — and
     * otherwise of where the travelers are boarding the vehicle (on the sidewalk
     * or the platform, and not on the roadway or the track where the vehicle
     * stops).
     * Conditionally Required:
     * - Required for locations which are stops (location_type=0), stations
     * (location_type=1) or entrances/exits (location_type=2).
     * - Optional for locations which are generic nodes (location_type=3) or
     * boarding areas (location_type=4).
     *
     * Generated from protobuf field <code>double stop_lon = 7;</code>
     * @return float
     */
    public function getStopLon()
    {
        return $this->stop_lon;
    }

    /**
     * Longitude of the location.
     * For stops/platforms (location_type=0) and boarding area (location_type=4),
     * the coordinates must be the ones of the bus pole — if exists — and
     * otherwise of where the travelers are boarding the vehicle (on the sidewalk
     * or the platform, and not on the roadway or the track where the vehicle
     * stops).
     * Conditionally Required:
     * - Required for locations which are stops (location_type=0), stations
     * (location_type=1) or entrances/exits (location_type=2).
     * - Optional for locations which are generic nodes (location_type=3) or
     * boarding areas (location_type=4).
     *
     * Generated from protobuf field <code>double stop_lon = 7;</code>
     * @param float $var
     * @return $this
     */
    public function setStopLon($var)
    {
        GPBUtil::checkDouble($var);
        $this->stop_lon = $var;

        return $this;
    }

    /**
     * Identifies the fare zone for a stop. If this record represents a station or
     * station entrance, the zone_id is ignored.
     * Conditionally Required:
     * - Required if providing fare information using fare_rules.txt
     * - Optional otherwise.
     *
     * Generated from protobuf field <code>string zone_id = 8;</code>
     * @return string
     */
    public function getZoneId()
    {
        return $this->zone_id;
    }

    /**
     * Identifies the fare zone for a stop. If this record represents a station or
     * station entrance, the zone_id is ignored.
     * Conditionally Required:
     * - Required if providing fare information using fare_rules.txt
     * - Optional otherwise.
     *
     * Generated from protobuf field <code>string zone_id = 8;</code>
     * @param string $var
     * @return $this
     */
    public function setZoneId($var)
    {
        GPBUtil::checkString($var, True);
        $this->zone_id = $var;

        return $this;
    }

    /**
     * URL of a web page about the location. This should be different from the
     * agency.agency_url and the routes.route_url field values.
     *
     * Generated from protobuf field <code>string stop_url = 9;</code>
     * @return string
     */
    public function getStopUrl()
    {
        return $this->stop_url;
    }

    /**
     * URL of a web page about the location. This should be different from the
     * agency.agency_url and the routes.route_url field values.
     *
     * Generated from protobuf field <code>string stop_url = 9;</code>
     * @param string $var
     * @return $this
     */
    public function setStopUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->stop_url = $var;

        return $this;
    }

    /**
     * Location type.
     *
     * Generated from protobuf field <code>.transit_scheduled.Stop.LocationType location_type = 10;</code>
     * @return int
     */
    public function getLocationType()
    {
        return $this->location_type;
    }

    /**
     * Location type.
     *
     * Generated from protobuf field <code>.transit_scheduled.Stop.LocationType location_type = 10;</code>
     * @param int $var
     * @return $this
     */
    public function setLocationType($var)
    {
        GPBUtil::checkEnum($var, \Transit_scheduled\Stop\LocationType::class);
        $this->location_type = $var;

        return $this;
    }

    /**
     * Defines hierarchy between the different locations defined in stops.txt. It
     * contains the ID of the parent location, as followed:
     * - Stop/platform (location_type=0): the parent_station field contains the ID
     * of a station.
     * - Station (location_type=1): this field must be empty.
     * - Entrance/exit (location_type=2) or generic node (location_type=3): the
     * parent_station field contains the ID of a station (location_type=1)
     * - Boarding Area (location_type=4): the parent_station field contains ID of
     * a platform.
     * Conditionally Required:
     * - Required for locations which are entrances (location_type=2), generic
     * nodes (location_type=3) or boarding areas (location_type=4).
     * - Optional for stops/platforms (location_type=0).
     * - Forbidden for stations (location_type=1).
     *
     * Generated from protobuf field <code>string parent_station = 11;</code>
     * @return string
     */
    public function getParentStation()
    {
        return $this->parent_station;
    }

    /**
     * Defines hierarchy between the different locations defined in stops.txt. It
     * contains the ID of the parent location, as followed:
     * - Stop/platform (location_type=0): the parent_station field contains the ID
     * of a station.
     * - Station (location_type=1): this field must be empty.
     * - Entrance/exit (location_type=2) or generic node (location_type=3): the
     * parent_station field contains the ID of a station (location_type=1)
     * - Boarding Area (location_type=4): the parent_station field contains ID of
     * a platform.
     * Conditionally Required:
     * - Required for locations which are entrances (location_type=2), generic
     * nodes (location_type=3) or boarding areas (location_type=4).
     * - Optional for stops/platforms (location_type=0).
     * - Forbidden for stations (location_type=1).
     *
     * Generated from protobuf field <code>string parent_station = 11;</code>
     * @param string $var
     * @return $this
     */
    public function setParentStation($var)
    {
        GPBUtil::checkString($var, True);
        $this->parent_station = $var;

        return $this;
    }

    /**
     * Timezone of the location. If the location has a parent station, it inherits
     * the parent station’s timezone instead of applying its own. Stations and
     * parentless stops with empty stop_timezone inherit the timezone specified by
     * agency.agency_timezone. If stop_timezone values are provided, the times in
     * stop_times.txt should be entered as the time since midnight in the timezone
     * specified by agency.agency_timezone. This ensures that the time values in a
     * trip always increase over the course of a trip, regardless of which
     * timezones the trip crosses.
     *
     * Generated from protobuf field <code>string stop_timezone = 12;</code>
     * @return string
     */
    public function getStopTimezone()
    {
        return $this->stop_timezone;
    }

    /**
     * Timezone of the location. If the location has a parent station, it inherits
     * the parent station’s timezone instead of applying its own. Stations and
     * parentless stops with empty stop_timezone inherit the timezone specified by
     * agency.agency_timezone. If stop_timezone values are provided, the times in
     * stop_times.txt should be entered as the time since midnight in the timezone
     * specified by agency.agency_timezone. This ensures that the time values in a
     * trip always increase over the course of a trip, regardless of which
     * timezones the trip crosses.
     *
     * Generated from protobuf field <code>string stop_timezone = 12;</code>
     * @param string $var
     * @return $this
     */
    public function setStopTimezone($var)
    {
        GPBUtil::checkString($var, True);
        $this->stop_timezone = $var;

        return $this;
    }

    /**
     * Indicates whether wheelchair boardings are possible from the location.
     *
     * Generated from protobuf field <code>.transit_scheduled.Stop.WheelchairBoarding wheelchair_boarding = 13;</code>
     * @return int
     */
    public function getWheelchairBoarding()
    {
        return $this->wheelchair_boarding;
    }

    /**
     * Indicates whether wheelchair boardings are possible from the location.
     *
     * Generated from protobuf field <code>.transit_scheduled.Stop.WheelchairBoarding wheelchair_boarding = 13;</code>
     * @param int $var
     * @return $this
     */
    public function setWheelchairBoarding($var)
    {
        GPBUtil::checkEnum($var, \Transit_scheduled\Stop\WheelchairBoarding::class);
        $this->wheelchair_boarding = $var;

        return $this;
    }

    /**
     * Level of the location. The same level may be used by multiple unlinked
     * stations.
     *
     * Generated from protobuf field <code>string level_id = 14;</code>
     * @return string
     */
    public function getLevelId()
    {
        return $this->level_id;
    }

    /**
     * Level of the location. The same level may be used by multiple unlinked
     * stations.
     *
     * Generated from protobuf field <code>string level_id = 14;</code>
     * @param string $var
     * @return $this
     */
    public function setLevelId($var)
    {
        GPBUtil::checkString($var, True);
        $this->level_id = $var;

        return $this;
    }

    /**
     * Platform identifier for a platform stop (a stop belonging to a station).
     * This should be just the platform identifier (eg. "G" or "3"). Words like
     * “platform” or "track" (or the feed’s language-specific equivalent) should
     * not be included. This allows feed consumers to more easily internationalize
     * and localize the platform identifier into other languages.
     *
     * Generated from protobuf field <code>string platform_code = 15;</code>
     * @return string
     */
    public function getPlatformCode()
    {
        return $this->platform_code;
    }

    /**
     * Platform identifier for a platform stop (a stop belonging to a station).
     * This should be just the platform identifier (eg. "G" or "3"). Words like
     * “platform” or "track" (or the feed’s language-specific equivalent) should
     * not be included. This allows feed consumers to more easily internationalize
     * and localize the platform identifier into other languages.
     *
     * Generated from protobuf field <code>string platform_code = 15;</code>
     * @param string $var
     * @return $this
     */
    public function setPlatformCode($var)
    {
        GPBUtil::checkString($var, True);
        $this->platform_code = $var;

        return $this;
    }

}

