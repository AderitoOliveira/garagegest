
export class Customer {

  constructor(
    public CLIENT_ID: number,
    public NAME: string,
    public ADDRESS: string,
    public CITY_LOCATION: number,
    public FISCAL_CODE: string,
    public IDENTITY_CARD: string,
    public PHONE_NUMBER: number,
    public EMAIL_ADDRESS: string,
    public NICKNAME: string,
    public CREATED_DATE: Date,
    public MODIFIED_DATE: Date,
  ) { }

}