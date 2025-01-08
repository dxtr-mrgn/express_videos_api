export const isInEnum = (value: string, enumeration: any): boolean =>
    !Object.values(enumeration).includes(value as keyof typeof enumeration);