export class Booking {
  constructor(
    guideId,
    numberVisitor,
    startTour,
    startTime,
    endTime,
    status,
    cardNumber,
    totalAmount
  ) {
    this.guideId = guideId;
    this.numberVisitor = numberVisitor;
    this.startTour = startTour;
    this.startTime = startTime;
    this.endTime = endTime;
    this.status = status;
    this.cardNumber = cardNumber;
    this.totalAmount = totalAmount;
  }
}
