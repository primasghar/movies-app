declare module '*.png' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
}

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}