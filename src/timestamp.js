export default function secondsToTimestamp(seconds) {    //formats seconds into mm:ss if less than an hour, hh:mm:ss if greater than an hour
    const timeString = new Date(seconds * 1000).toISOString();
    return seconds >= 3600 ? timeString.substr(11, 8) : timeString.substr(14, 5);
}
