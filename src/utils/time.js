class Time {
  /**
   *
   * @param {时间戳} timestamp
   * @param {时间样式} style
   * @param {校验规则} rules
   */
  constructor(timestamp, style, rules) {
    this.timestamp = timestamp;
    this.style = style;
    this.rules = rules;
  }
  /**
   * @param {时间格式} sytle
   * @param {拼接规则} rule
   * @example 生成2017.07.08
   * let time = new Time(new Date().getTime(),"YYY.MM.DD",".")
   * time.getTime()
   * @example  生成2017.7.8
   * let time = new Time(new Date().getTime(),"YYY.mm.dd",".")
   * time.getTime()
   */
 getTime() {
  let   date = new Date(this.timestamp);
  let   timeObject = {
      YYY: date.getFullYear(), //年
      MM: format(date.getMonth() + 1), //月
      mm: date.getMonth() + 1,
      DD: format(date.getDate()), //日
      dd: date.getDate(),
      H: format(date.getHours()), //时
      h: date.getHours(),
      M: format(date.getMinutes()), //分
      m:date.getMinutes(),
      S: format(date.getSeconds()), //秒
      s: date.getSeconds(),
      MS: date.getMilliseconds() //毫秒
    };
  function format(nums){
        nums=String(nums)
      if (nums.length === 1) {
        return "0" + nums;
      }
      return nums;
    }
    let timeStyle = this.style.split(this.rules);
    let newTime=timeStyle.map(value=>timeObject[value])
    return newTime.join(this.rules);
  }
}
export default Time;
