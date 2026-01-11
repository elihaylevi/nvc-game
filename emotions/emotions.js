// data.js - בנק רגשות ופרשנויות מורחב
const nvcBank = [
    // --- רגשות נקיים (isFeeling: true) ---
    {
        word: "עצוב/ה",
        isFeeling: true,
        explanation: "רגש נקי המבטא חוסר בחיבור, באובדן או בצורך שלא נענה.",
        type: "feeling"
    },
    {
        word: "מתוסכל/ת",
        isFeeling: true,
        explanation: "רגש שעולה כאשר יש מחסום בדרך להגשמת צורך מסוים.",
        type: "feeling"
    },
    {
        word: "מפוחד/ת",
        isFeeling: true,
        explanation: "תגובה רגשית בסיסית לסכנה או לאי-ודאות לגבי צורך בביטחון.",
        type: "feeling"
    },
    {
        word: "בודד/ת",
        isFeeling: true,
        explanation: "רגש נקי המצביע על צורך בשייכות, חברה או חיבור.",
        type: "feeling"
    },
    {
        word: "נלהב/ת",
        isFeeling: true,
        explanation: "רגש חיובי המעיד על צרכים של חיוניות, עניין ומשמעות שמתמלאים.",
        type: "feeling"
    },
    {
        word: "חסר/ת אונים",
        isFeeling: true,
        explanation: "רגש נקי המתאר חוויה של קושי להשפיע על המציאות באותו רגע.",
        type: "feeling"
    },
    {
        word: "עצבני/ת",
        isFeeling: true,
        explanation: "מצב רגשי המתאר מתח פנימי.",
        type: "feeling"
    },
    {
        word: "מבולבל/ת",
        isFeeling: true,
        explanation: "רגש המעיד על צורך בבהירות, סדר או הבנה.",
        type: "feeling"
    },
    {
        word: "נינוח/ה",
        isFeeling: true,
        explanation: "רגש המעיד על כך שצורכי הביטחון והשלווה שלך נענים כעת.",
        type: "feeling"
    },
    {
        word: "המום/ה",
        isFeeling: true,
        explanation: "רגש המבטא עוצמה גבוהה של גירויים, חיוביים או שליליים.",
        type: "feeling"
    },

    // --- פרשנויות ושיפוטים (isFeeling: false) ---
    {
        word: "נבגד/ת",
        isFeeling: false,
        explanation: "זו פרשנות על כך שמישהו הפר אמון. הרגש מתחת עשוי להיות 'כאב' או 'פחד'.",
        type: "feeling"
    },
    {
        word: "דחוי/ה",
        isFeeling: false,
        explanation: "זו מחשבה: 'הם דחו אותי'. הרגש האמיתי הוא כנראה 'עצב' או 'בדידות'.",
        type: "feeling"
    },
    {
        word: "לא מוערך/ת",
        isFeeling: false,
        explanation: "שיפוט על כך שהאחר לא נותן הערכה. הרגש עשוי להיות 'ייאוש' או 'תסכול'.",
        type: "feeling"
    },
    {
        word: "מותקף/ת",
        isFeeling: false,
        explanation: "פרשנות על התנהגות הזולת. הרגש עשוי להיות 'פחד' או 'הלם'.",
        type: "feeling"
    },
    {
        word: "מנוצל/ת",
        isFeeling: false,
        explanation: "שיפוט של המצב: 'מישהו משתמש בי'. הרגש עשוי להיות 'כעס' או 'עייפות'.",
        type: "feeling"
    },
    {
        word: "מואשם/ת",
        isFeeling: false,
        explanation: "מחשבה על מה שמישהו אומר עליך. הרגש יכול להיות 'עלבון' או 'בהלה'.",
        type: "feeling"
    },
    {
        word: "נטוש/ה",
        isFeeling: false,
        explanation: "פרשנות למעשה של מישהו שעזב. הרגש הנקי הוא 'פחד' או 'עצב עמוק'.",
        type: "feeling"
    },
    {
        word: "מבוטל/ת",
        isFeeling: false,
        explanation: "מחשבה שמישהו לא סופר אותך. הרגש עשוי להיות 'חוסר ערך' או 'כאב'.",
        type: "feeling"
    },
    {
        word: "לא מובן/ת",
        isFeeling: false,
        explanation: "זו קביעה על המצב השכלי של האחר. הרגש הוא לרוב 'תסכול'.",
        type: "feeling"
    },
    {
        word: "נרדף/ת",
        isFeeling: false,
        explanation: "תיאור של סיטואציה שבה מישהו פועל נגדך. הרגש הוא לרוב 'פחד' או 'חרדה'.",
        type: "feeling"
    },
    {
        word: "מוזנח/ת",
        isFeeling: false,
        explanation: "שיפוט על כך שמישהו לא דואג לך. הרגש עשוי להיות 'עצב' או 'חוסר אונים'.",
        type: "feeling"
    },
    {
        word: "מאוים/ת",
        isFeeling: false,
        explanation: "פרשנות לכוונות של האחר. הרגש הנקי הוא 'פחד'.",
        type: "feeling"
    },
    {
        word: "נשלט/ת",
        isFeeling: false,
        explanation: "מחשבה על כך שמישהו אחר מנהל אותי. הרגש עשוי להיות 'זעם' או 'רצון בחופש'.",
        type: "feeling"
    },
    {
        word: "פגוע/ה",
        isFeeling: false,
        explanation: "למרות שזה נשמע כמו רגש, זו מילה כללית שמתארת שמישהו עשה לי משהו. עדיף להשתמש ב'כואב לי'.",
        type: "feeling"
    },
    {
        word: "לא רצוי/ה",
        isFeeling: false,
        explanation: "שיפוט לגבי המקום שלי בקבוצה. הרגש הוא לרוב 'בדידות'.",
        type: "feeling"
    },
    {
        word: "מושפל/ת",
        isFeeling: false,
        explanation: "פרשנות לפעולה של מישהו אחר כלפיי. הרגש הוא 'בושה' או 'עלבון'.",
        type: "feeling"
    },
    {
        word: "לחוץ/ה",
        isFeeling: true,
        explanation: "רגש נקי המתאר עומס פנימי וצורך בשלווה או בסיוע.",
        type: "feeling"
    },
    {
        word: "מוערך/ת",
        isFeeling: false,
        explanation: "שיפוט חיובי! זו עדיין פרשנות על מה שאחרים חושבים עליי. הרגש הוא 'שמחה' או 'סיפוק'.",
        type: "feeling"
    },
    {
        word: "סקרן/ית",
        isFeeling: true,
        explanation: "רגש נקי המעיד על עניין וצורך בלמידה או גילוי.",
        type: "feeling"
    },
    {
        word: "מרומה/ית",
        isFeeling: false,
        explanation: "מחשבה שמישהו שיקר לי. הרגש עשוי להיות 'כעס' או 'אכזבה'.",
        type: "feeling"
    }
];