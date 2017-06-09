export class Bar {
  label: string;
  startDate: Date;
  endDate: Date;

  // calculated
  startPoint: number;
  endPoint: number;
  visible: boolean;

  constructor(options: {
    label: string,
    startDate: Date,
    endDate: Date,
  }) {
    this.label = options.label;


    if (+options.startDate < +options.endDate) {
      this.startDate = options.startDate;
      this.endDate = options.endDate;
    } else {
      this.startDate = options.endDate;
      this.endDate = options.startDate;
    }
  }

  get width() {
    return this.endPoint - this.startPoint;
  }
}
