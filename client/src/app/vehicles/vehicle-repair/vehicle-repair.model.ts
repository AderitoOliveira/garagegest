export class VehicleRepair {
  length: number;
    constructor(
      public VEHICLE_ID: number,
      public REPAIR_ID: number,
      public REPAIR_DATE: Date,
      public TOTAL_TO_PAY: number
    ) { }
  }
  