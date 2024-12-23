/**
 * Преобразует номер телефона в формат для WhatsApp.
 * Удаляет все символы, кроме цифр, и убирает символ `+`.
 *
 * @param phoneNumberRaw - Исходный номер телефона (например, "+995 (57) 119-96-78").
 * @returns Номер телефона в формате для WhatsApp (например, "995571199678").
 */
const formatPhoneNumber = (phoneNumberRaw: string): string => {
  return phoneNumberRaw.replace(/[^+\d]/g, '').replace('+', '');
};

export default formatPhoneNumber;
