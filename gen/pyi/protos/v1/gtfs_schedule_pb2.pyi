from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar, Optional, Union

CONTINUOUS_DROP_OFF_CONTINUOUS_STOPPING: ContinuousDropOff
CONTINUOUS_DROP_OFF_MUST_COORDINATE_WITH_DRIVER: ContinuousDropOff
CONTINUOUS_DROP_OFF_MUST_PHONE_AGENCY: ContinuousDropOff
CONTINUOUS_DROP_OFF_NO_CONTINUOUS_STOPPING: ContinuousDropOff
CONTINUOUS_PICKUP_MUST_COORDINATE_WITH_DRIVER: ContinuousPickup
CONTINUOUS_PICKUP_MUST_PHONE_AGENCY: ContinuousPickup
CONTINUOUS_PICKUP_NO_CONTINUOUS_STOPPING: ContinuousPickup
CONTINUOUS_PICKUP_STOPPING: ContinuousPickup
DESCRIPTOR: _descriptor.FileDescriptor

class Agency(_message.Message):
    __slots__ = ["agency_email", "agency_fare_url", "agency_id", "agency_lang", "agency_name", "agency_phone", "agency_timezone", "agency_url"]
    AGENCY_EMAIL_FIELD_NUMBER: ClassVar[int]
    AGENCY_FARE_URL_FIELD_NUMBER: ClassVar[int]
    AGENCY_ID_FIELD_NUMBER: ClassVar[int]
    AGENCY_LANG_FIELD_NUMBER: ClassVar[int]
    AGENCY_NAME_FIELD_NUMBER: ClassVar[int]
    AGENCY_PHONE_FIELD_NUMBER: ClassVar[int]
    AGENCY_TIMEZONE_FIELD_NUMBER: ClassVar[int]
    AGENCY_URL_FIELD_NUMBER: ClassVar[int]
    agency_email: str
    agency_fare_url: str
    agency_id: str
    agency_lang: str
    agency_name: str
    agency_phone: str
    agency_timezone: str
    agency_url: str
    def __init__(self, agency_id: Optional[str] = ..., agency_name: Optional[str] = ..., agency_url: Optional[str] = ..., agency_timezone: Optional[str] = ..., agency_lang: Optional[str] = ..., agency_phone: Optional[str] = ..., agency_fare_url: Optional[str] = ..., agency_email: Optional[str] = ...) -> None: ...

class Route(_message.Message):
    __slots__ = ["agency_id", "continuous_drop_off", "continuous_pickup", "network_id", "route_color", "route_desc", "route_id", "route_long_name", "route_short_name", "route_sort_order", "route_text_color", "route_type", "route_url"]
    class RouteType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    AGENCY_ID_FIELD_NUMBER: ClassVar[int]
    CONTINUOUS_DROP_OFF_FIELD_NUMBER: ClassVar[int]
    CONTINUOUS_PICKUP_FIELD_NUMBER: ClassVar[int]
    NETWORK_ID_FIELD_NUMBER: ClassVar[int]
    ROUTE_COLOR_FIELD_NUMBER: ClassVar[int]
    ROUTE_DESC_FIELD_NUMBER: ClassVar[int]
    ROUTE_ID_FIELD_NUMBER: ClassVar[int]
    ROUTE_LONG_NAME_FIELD_NUMBER: ClassVar[int]
    ROUTE_SHORT_NAME_FIELD_NUMBER: ClassVar[int]
    ROUTE_SORT_ORDER_FIELD_NUMBER: ClassVar[int]
    ROUTE_TEXT_COLOR_FIELD_NUMBER: ClassVar[int]
    ROUTE_TYPE_AERIAL_LIFT_SUSPENDED_CABLE_CAR: Route.RouteType
    ROUTE_TYPE_BUS: Route.RouteType
    ROUTE_TYPE_CABLE_TRAM: Route.RouteType
    ROUTE_TYPE_FERRY: Route.RouteType
    ROUTE_TYPE_FIELD_NUMBER: ClassVar[int]
    ROUTE_TYPE_FUNICULAR: Route.RouteType
    ROUTE_TYPE_MONORAIL: Route.RouteType
    ROUTE_TYPE_RAIL: Route.RouteType
    ROUTE_TYPE_SUBWAY_METRO: Route.RouteType
    ROUTE_TYPE_TRAM_STREETCAR_LIGHTRAIL: Route.RouteType
    ROUTE_TYPE_TROLLEYBUS: Route.RouteType
    ROUTE_URL_FIELD_NUMBER: ClassVar[int]
    agency_id: str
    continuous_drop_off: ContinuousDropOff
    continuous_pickup: ContinuousPickup
    network_id: str
    route_color: str
    route_desc: str
    route_id: str
    route_long_name: str
    route_short_name: str
    route_sort_order: int
    route_text_color: str
    route_type: Route.RouteType
    route_url: str
    def __init__(self, route_id: Optional[str] = ..., agency_id: Optional[str] = ..., route_short_name: Optional[str] = ..., route_long_name: Optional[str] = ..., route_desc: Optional[str] = ..., route_type: Optional[Union[Route.RouteType, str]] = ..., route_url: Optional[str] = ..., route_color: Optional[str] = ..., route_text_color: Optional[str] = ..., route_sort_order: Optional[int] = ..., continuous_pickup: Optional[Union[ContinuousPickup, str]] = ..., continuous_drop_off: Optional[Union[ContinuousDropOff, str]] = ..., network_id: Optional[str] = ...) -> None: ...

class Stop(_message.Message):
    __slots__ = ["level_id", "location_type", "parent_station", "platform_code", "stop_code", "stop_desc", "stop_id", "stop_lat", "stop_lon", "stop_name", "stop_timezone", "stop_url", "tts_stop_name", "wheelchair_boarding", "zone_id"]
    class LocationType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class WheelchairBoarding(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    LEVEL_ID_FIELD_NUMBER: ClassVar[int]
    LOCATION_TYPE_BOARDING_AREA: Stop.LocationType
    LOCATION_TYPE_ENTRANCE_EXIT: Stop.LocationType
    LOCATION_TYPE_FIELD_NUMBER: ClassVar[int]
    LOCATION_TYPE_GENERIC_NODE: Stop.LocationType
    LOCATION_TYPE_STATION: Stop.LocationType
    LOCATION_TYPE_STOP: Stop.LocationType
    PARENT_STATION_FIELD_NUMBER: ClassVar[int]
    PLATFORM_CODE_FIELD_NUMBER: ClassVar[int]
    STOP_CODE_FIELD_NUMBER: ClassVar[int]
    STOP_DESC_FIELD_NUMBER: ClassVar[int]
    STOP_ID_FIELD_NUMBER: ClassVar[int]
    STOP_LAT_FIELD_NUMBER: ClassVar[int]
    STOP_LON_FIELD_NUMBER: ClassVar[int]
    STOP_NAME_FIELD_NUMBER: ClassVar[int]
    STOP_TIMEZONE_FIELD_NUMBER: ClassVar[int]
    STOP_URL_FIELD_NUMBER: ClassVar[int]
    TTS_STOP_NAME_FIELD_NUMBER: ClassVar[int]
    WHEELCHAIR_BOARDING_FIELD_NUMBER: ClassVar[int]
    WHEELCHAIR_BOARDING_NOT_POSSIBLE: Stop.WheelchairBoarding
    WHEELCHAIR_BOARDING_NO_INFO: Stop.WheelchairBoarding
    WHEELCHAIR_BOARDING_POSSIBLE: Stop.WheelchairBoarding
    ZONE_ID_FIELD_NUMBER: ClassVar[int]
    level_id: str
    location_type: Stop.LocationType
    parent_station: str
    platform_code: str
    stop_code: str
    stop_desc: str
    stop_id: str
    stop_lat: float
    stop_lon: float
    stop_name: str
    stop_timezone: str
    stop_url: str
    tts_stop_name: str
    wheelchair_boarding: Stop.WheelchairBoarding
    zone_id: str
    def __init__(self, stop_id: Optional[str] = ..., stop_code: Optional[str] = ..., stop_name: Optional[str] = ..., tts_stop_name: Optional[str] = ..., stop_desc: Optional[str] = ..., stop_lat: Optional[float] = ..., stop_lon: Optional[float] = ..., zone_id: Optional[str] = ..., stop_url: Optional[str] = ..., location_type: Optional[Union[Stop.LocationType, str]] = ..., parent_station: Optional[str] = ..., stop_timezone: Optional[str] = ..., wheelchair_boarding: Optional[Union[Stop.WheelchairBoarding, str]] = ..., level_id: Optional[str] = ..., platform_code: Optional[str] = ...) -> None: ...

class StopTime(_message.Message):
    __slots__ = ["arrival_time", "continuous_drop_off", "continuous_pickup", "departure_time", "drop_off_type", "pickup_type", "shape_dist_traveled", "stop_headsign", "stop_id", "stop_sequence", "timepoint", "trip_id"]
    class DropOffType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class PickupType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class TimePoint(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    ARRIVAL_TIME_FIELD_NUMBER: ClassVar[int]
    CONTINUOUS_DROP_OFF_FIELD_NUMBER: ClassVar[int]
    CONTINUOUS_PICKUP_FIELD_NUMBER: ClassVar[int]
    DEPARTURE_TIME_FIELD_NUMBER: ClassVar[int]
    DROP_OFF_TYPE_FIELD_NUMBER: ClassVar[int]
    DROP_OFF_TYPE_MUST_COORDINATE_WITH_DRIVER: StopTime.DropOffType
    DROP_OFF_TYPE_MUST_PHONE_AGENCY: StopTime.DropOffType
    DROP_OFF_TYPE_NONE_AVAILABLE: StopTime.DropOffType
    DROP_OFF_TYPE_REGULARLY_SCHEDULED: StopTime.DropOffType
    PICKUP_TYPE_FIELD_NUMBER: ClassVar[int]
    PICKUP_TYPE_MUST_COORDINATE_WITH_DRIVER: StopTime.PickupType
    PICKUP_TYPE_MUST_PHONE_AGENCY: StopTime.PickupType
    PICKUP_TYPE_NONE_AVAILABLE: StopTime.PickupType
    PICKUP_TYPE_REGULARLY_SCHEDULED: StopTime.PickupType
    SHAPE_DIST_TRAVELED_FIELD_NUMBER: ClassVar[int]
    STOP_HEADSIGN_FIELD_NUMBER: ClassVar[int]
    STOP_ID_FIELD_NUMBER: ClassVar[int]
    STOP_SEQUENCE_FIELD_NUMBER: ClassVar[int]
    TIMEPOINT_FIELD_NUMBER: ClassVar[int]
    TIME_POINT_APPROXIMATE: StopTime.TimePoint
    TIME_POINT_EXACT: StopTime.TimePoint
    TRIP_ID_FIELD_NUMBER: ClassVar[int]
    arrival_time: str
    continuous_drop_off: ContinuousDropOff
    continuous_pickup: ContinuousPickup
    departure_time: str
    drop_off_type: StopTime.DropOffType
    pickup_type: StopTime.PickupType
    shape_dist_traveled: float
    stop_headsign: str
    stop_id: str
    stop_sequence: int
    timepoint: int
    trip_id: str
    def __init__(self, trip_id: Optional[str] = ..., arrival_time: Optional[str] = ..., departure_time: Optional[str] = ..., stop_id: Optional[str] = ..., stop_sequence: Optional[int] = ..., stop_headsign: Optional[str] = ..., pickup_type: Optional[Union[StopTime.PickupType, str]] = ..., drop_off_type: Optional[Union[StopTime.DropOffType, str]] = ..., continuous_pickup: Optional[Union[ContinuousPickup, str]] = ..., continuous_drop_off: Optional[Union[ContinuousDropOff, str]] = ..., shape_dist_traveled: Optional[float] = ..., timepoint: Optional[int] = ...) -> None: ...

class Trip(_message.Message):
    __slots__ = ["bikes_allowed", "block_id", "direction_id", "route_id", "service_id", "shape_id", "trip_headsign", "trip_id", "trip_short_name", "wheelchair_accessible"]
    class BikeAllowance(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class Direction(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class WheelchairAccessibility(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    BIKES_ALLOWED_FIELD_NUMBER: ClassVar[int]
    BIKE_ALLOWANCE_ALLOWED: Trip.BikeAllowance
    BIKE_ALLOWANCE_NOT_ALLOWED: Trip.BikeAllowance
    BIKE_ALLOWANCE_NO_INFO: Trip.BikeAllowance
    BLOCK_ID_FIELD_NUMBER: ClassVar[int]
    DIRECTION_ID_FIELD_NUMBER: ClassVar[int]
    DIRECTION_ONE_DIRECTION: Trip.Direction
    DIRECTION_OPPOSITE: Trip.Direction
    ROUTE_ID_FIELD_NUMBER: ClassVar[int]
    SERVICE_ID_FIELD_NUMBER: ClassVar[int]
    SHAPE_ID_FIELD_NUMBER: ClassVar[int]
    TRIP_HEADSIGN_FIELD_NUMBER: ClassVar[int]
    TRIP_ID_FIELD_NUMBER: ClassVar[int]
    TRIP_SHORT_NAME_FIELD_NUMBER: ClassVar[int]
    WHEELCHAIR_ACCESSIBILITY_ACCESSIBLE: Trip.WheelchairAccessibility
    WHEELCHAIR_ACCESSIBILITY_NOT_ACCESSIBLE: Trip.WheelchairAccessibility
    WHEELCHAIR_ACCESSIBILITY_NO_INFO: Trip.WheelchairAccessibility
    WHEELCHAIR_ACCESSIBLE_FIELD_NUMBER: ClassVar[int]
    bikes_allowed: Trip.BikeAllowance
    block_id: str
    direction_id: Trip.Direction
    route_id: str
    service_id: str
    shape_id: str
    trip_headsign: str
    trip_id: str
    trip_short_name: str
    wheelchair_accessible: Trip.WheelchairAccessibility
    def __init__(self, route_id: Optional[str] = ..., service_id: Optional[str] = ..., trip_id: Optional[str] = ..., trip_headsign: Optional[str] = ..., trip_short_name: Optional[str] = ..., direction_id: Optional[Union[Trip.Direction, str]] = ..., block_id: Optional[str] = ..., shape_id: Optional[str] = ..., wheelchair_accessible: Optional[Union[Trip.WheelchairAccessibility, str]] = ..., bikes_allowed: Optional[Union[Trip.BikeAllowance, str]] = ...) -> None: ...

class ContinuousPickup(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []

class ContinuousDropOff(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
