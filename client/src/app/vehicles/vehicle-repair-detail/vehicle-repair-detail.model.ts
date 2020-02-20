export class VehicleRepairDetail {
    constructor(
      public VEHICLE_ID: number,
      public REPAIR_ID: number,
      public REPAIR_DATE: Date,
      public DESCRIPTION: string,
      public QUANTITY: number,
      public UNIT_PRICE: number,
      public VALUE_ADDED_TAX: number,
      public VALUE_TO_PAY: number
    ) { }
  }
  