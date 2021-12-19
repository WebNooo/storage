export type IconType = keyof typeof import('../components/ui/icon/icons') | '';

export interface IconPropsType {
    name: IconType;
    color?: string;
    size?: number;
    className?: string;
}
