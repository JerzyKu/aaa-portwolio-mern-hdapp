
export default function age(inputDate) {
    const now = new Date()
    const past = new Date(inputDate).getTime()
    return `${inputDate} -------------- ${now}`
} 