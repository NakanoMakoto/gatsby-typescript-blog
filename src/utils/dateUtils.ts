import moment from "moment";

export default class DateUtils {
  public static formatDate(date: string, format?: string): string {
    const dateFormat: string = format ? format : "YYYY/MM/DD";
    const baseDate: string = new Date(date).toISOString();
    return moment(baseDate).format(dateFormat);
  }
}
