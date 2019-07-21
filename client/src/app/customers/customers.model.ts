export class Vehicle {
    constructor(
      public REGISTRATION_PLATE: string,
      public CAR_BRAND: string,
      public CAR_MODEL: string,
      public KMS_REGISTERED: number,
      public CYLINDER_CAPACITY: number,
      public REGISTRATION_DATE: Date,
      public FABRICATION_DATE: Date,
      public VEHICLE_IDENTIFICATION_NUMBER  : string,
      public KILLOWATT: number,
      public HORSEPOWER  : number,
      public FUEL: string,
      public CREATED_DATE: Date,
      public MODIFIED_DATE: Date,
    ) { }
}