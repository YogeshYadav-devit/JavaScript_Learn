enum Direction{
    East,
    Wast,
    North,
    South
}
enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
  }
 const startingDirection = Direction.East;
const currentStatus = StatusCodes.OK;

const okNumber = StatusCodes.OK;
const okNumberIndex = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

enum GamePadInput {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

  const enum MouseAction {
    MouseDown,
    MouseUpOutside,
    MouseUpInside,
  }
  ////

  enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}
function getPrintMediaCode(mediaName: string): number {
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