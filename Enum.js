var Direction;
(function (Direction) {
    Direction[Direction["East"] = 0] = "East";
    Direction[Direction["Wast"] = 1] = "Wast";
    Direction[Direction["North"] = 2] = "North";
    Direction[Direction["South"] = 3] = "South";
})(Direction || (Direction = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
var startingDirection = Direction.East;
var currentStatus = StatusCodes.OK;
var okNumber = StatusCodes.OK;
var okNumberIndex = StatusCodes["OK"];
var stringBadRequest = StatusCodes[400];
var GamePadInput;
(function (GamePadInput) {
    GamePadInput["Up"] = "UP";
    GamePadInput["Down"] = "DOWN";
    GamePadInput["Left"] = "LEFT";
    GamePadInput["Right"] = "RIGHT";
})(GamePadInput || (GamePadInput = {}));
// const enum MouseAction {
//   MouseDown,
//   MouseUpOutside,
//   MouseUpInside,
// }
////
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getPrintMediaCode(mediaName) {
    if (mediaName === 'newsletter') {
        return 5;
    }
}
PrintMedia.Newsletter; // returns 5
PrintMedia.Magazine; // returns 15
// function getMedia(mediaName: string): PrintMedia {
//     if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
//         return PrintMedia.Magazine;
//     }
//  }
// let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine
// console.log(mediaType)
