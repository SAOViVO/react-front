export function toHoursAndMinutes(totalSeconds: number) {
    const totalMs = totalSeconds * 1000;
    const result = new Date(totalMs).toISOString().slice(11, 19);
    return result;
}
