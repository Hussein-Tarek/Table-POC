function convertNum(day: string) {
  const arabicIndicToStandardArabic = {
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
  };

  const standardArabicNumber = day.replace(
    /[٠-٩]/g,
    (match) =>
      arabicIndicToStandardArabic[
        match as keyof typeof arabicIndicToStandardArabic
      ]
  );
  const parsedNumber = parseInt(standardArabicNumber, 10);
  return parsedNumber;
}
export function convertArabicDate(arabicDate: string): Date | null {
  const arabicMonths = {
    يناير: "January",
    فبراير: "February",
    مارس: "March",
    أبريل: "April",
    مايو: "May",
    يونيو: "June",
    يوليو: "July",
    أغسطس: "August",
    سبتمبر: "September",
    أكتوبر: "October",
    نوفمبر: "November",
    ديسمبر: "December",
  };

  const parts = arabicDate.split(" ");

  const day = convertNum(parts[0]);
  const month = arabicMonths[parts[1] as keyof typeof arabicMonths];
  const year = convertNum(parts[2]);

  if (!isNaN(day) && month && !isNaN(year)) {
    return new Date(`${month} ${day}, ${year}`);
  } else {
    return null;
  }
}
