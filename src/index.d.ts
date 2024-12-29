import React from 'react';

export interface CosmoPickerProps {
    value: string;
    onChange: (date: string) => void;
    icon?: React.ReactNode;
    startYear?: number;
    endYear?: number;
    dayBorderRadius?: string;
    inputWidth?: string;
    inputFontSize?: string;
    inputFontWeight?: string | number;
    inputBackgroundColor?: string;
}

export declare const CosmoPicker: React.FC<CosmoPickerProps>;
