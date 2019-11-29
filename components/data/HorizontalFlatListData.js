
var horizontalStatus = {
    rainy:{
        ios:"ios-rainy",
        android: "md-rainy"
    },
    cloud: {
        ios: "ios-cloudy",
        android:"md_cloudy"
    },
    thunderstorm: {
        ios: "ios-thunderstorm",
        android:"md-thunderstorm"
    },
    sunny: {
        ios: "ios-sunny",
        android:"android-sunny"
    }
};
var horizontalFlatListData = [
    {
        hour: "1 AM",
        status: horizontalStatus.rainy,
        degress:57
    },
    {
        hour:"2 AM",
        status:horizontalStatus.sunny,
    },
    {
        hour:"3 AM",
        status:horizontalStatus.thunderstorm,
    },
    {
        hour:"4 AM",
        status:horizontalStatus.cloud,
    },
    {
        hour:"5 AM",
        status:horizontalStatus.thunderstorm,
    },
    {
        hour:"6 AM",
        status:horizontalStatus.rainy,
    },
    {
        hour:"7 AM",
        status:horizontalStatus.cloud,
    },
    {
        hour:"8 AM",
        status:horizontalStatus.rainy,
    },
    {
        hour:"9 AM",
        status:horizontalStatus.sunny,
    },

];

export {horizontalStatus};
export {horizontalFlatListData};