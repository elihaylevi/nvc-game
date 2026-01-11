// needs/needs.js - בנק צרכים ואסטרטגיות מורחב
const nvcNeedsBank = [
    // --- קטגוריית חיבור (Connection) ---
    {
        word: "אמפתיה",
        isNeed: true,
        category: "חיבור",
        explanation: "הצורך להיות מובן ולהרגיש שמישהו אחר נמצא איתנו בחוויה שלנו.",
        type: "need"
    },
    {
        word: "ביטחון",
        isNeed: true,
        category: "חיבור",
        explanation: "הצורך להרגיש מוגנים ורגועים בתוך קשר או בתוך סביבה.",
        type: "need"
    },
    {
        word: "שייכות",
        isNeed: true,
        category: "חיבור",
        explanation: "הצורך להרגיש חלק מקבוצה או קהילה שמקבלת אותנו כפי שאנחנו.",
        type: "need"
    },
    {
        word: "קרבה",
        isNeed: true,
        category: "חיבור",
        explanation: "הצורך באינטימיות ומגע אנושי חם.",
        type: "need"
    },

    // --- קטגוריית אוטונומיה (Autonomy) ---
    {
        word: "בחירה",
        isNeed: true,
        category: "אוטונומיה",
        explanation: "הצורך האנושי היסודי להחליט על הצעדים שלנו ועל הערכים שמובילים אותנו.",
        type: "need"
    },
    {
        word: "חופש",
        isNeed: true,
        category: "אוטונומיה",
        explanation: "הצורך במרחב פעולה ותנועה ללא כפייה חיצונית.",
        type: "need"
    },
    {
        word: "עצמאות",
        isNeed: true,
        category: "אוטונומיה",
        explanation: "היכולת לנהל את המשאבים והזמן שלי לפי הבנתי.",
        type: "need"
    },

    // --- קטגוריית יושרה ומשמעות (Integrity & Meaning) ---
    {
        word: "למידה",
        isNeed: true,
        category: "יושרה",
        explanation: "הצורך בהתפתחות, גילוי והבנה מעמיקה יותר של העולם.",
        type: "need"
    },
    {
        word: "אותנטיות",
        isNeed: true,
        category: "יושרה",
        explanation: "הצורך להיות נאמנים לעצמנו ולהביע את האמת הפנימית שלנו.",
        type: "need"
    },
    {
        word: "תרומה",
        isNeed: true,
        category: "יושרה",
        explanation: "הצורך לדעת שלמעשים שלנו יש ערך עבור אחרים או עבור העולם.",
        type: "need"
    },

    // --- קטגוריית רווחה (Well-being) ---
    {
        word: "מנוחה",
        isNeed: true,
        category: "רווחה",
        explanation: "צורך פיזי ונפשי חיוני להתאוששות ושמירה על חיוניות.",
        type: "need"
    },
    {
        word: "סדר",
        isNeed: true,
        category: "רווחה",
        explanation: "הצורך בארגון ויזואלי או מבני שיוצר תחושת שקט ובהירות.",
        type: "need"
    },
    {
        word: "שלווה",
        isNeed: true,
        category: "רווחה",
        explanation: "הצורך בשקט פנימי ובהיעדר קונפליקט מעיק.",
        type: "need"
    },

    // --- אסטרטגיות (IsNeed: false) - "התחפושות" של הצרכים ---
    {
        word: "כסף",
        isNeed: false,
        explanation: "אסטרטגיה להשגת ביטחון, חופש או הנאה. הצורך הוא מה שכסף מאפשר לנו להשיג.",
        type: "need"
    },
    {
        word: "להיות צודק/ת",
        isNeed: false,
        explanation: "אסטרטגיה המנסה להגן על הצורך ב'נראות' או 'הערכה'. ב-NVC, צדק הוא לרוב מחסום לחיבור.",
        type: "need"
    },
    {
        word: "שליטה",
        isNeed: false,
        explanation: "ניסיון להשיג 'ודאות' או 'ביטחון' דרך ניהול של אחרים. הצורך הוא ביטחון, השליטה היא הדרך.",
        type: "need"
    },
    {
        word: "כבוד",
        isNeed: false,
        explanation: "מילה מורכבת שלעיתים כוללת דרישה לצייתנות. הצרכים מתחת הם לרוב 'התחשבות' או 'הערכה'.",
        type: "need"
    },
    {
        word: "ניצחון",
        isNeed: false,
        explanation: "אסטרטגיה למילוי צורך ביכולת או ערך עצמי. בחיבור מקרב, אנחנו מחפשים פתרון שבו כולם מנצחים.",
        type: "need"
    },
    {
        word: "עזרה",
        isNeed: false,
        explanation: "עזרה היא פעולה ספציפית. הצרכים הם 'תמיכה', 'הדדיות' או 'הקלה'.",
        type: "need"
    },
    {
        word: "שקט",
        isNeed: false,
        explanation: "שקט הוא מצב חיצוני. הצורך הוא לרוב 'מנוחה', 'ריכוז' או 'שלווה'.",
        type: "need"
    },
    {
        word: "נקמה",
        isNeed: false,
        explanation: "אסטרטגיה טרגית שנועדה לתת 'נראות' לכאב שלנו. הצורך הוא צדק מקרב או הבנה לעומק הפגיעה.",
        type: "need"
    }
];

// מטריצת הקטגוריות הקבועה למשחק
const needsMatrix = {
    "חיבור": ["אמפתיה", "קרבה", "ביטחון", "שייכות"],
    "אוטונומיה": ["בחירה", "חופש", "מרחב", "עצמאות"],
    "יושרה": ["משמעות", "כנות", "למידה", "אותנטיות"],
    "רווחה": ["מנוחה", "סדר", "שלווה", "בריאות"]
};