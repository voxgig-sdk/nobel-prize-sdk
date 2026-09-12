export interface Laureate {
    born?: string;
    bornCity?: string;
    bornCountry?: string;
    bornCountryCode?: string;
    died?: string;
    diedCity?: string;
    diedCountry?: string;
    diedCountryCode?: string;
    firstname?: string;
    gender?: string;
    id?: string;
    prizes?: any[];
    surname?: string;
}
export interface LaureateListMatch {
    born_city?: string;
    born_country?: string;
    died_city?: string;
    died_country?: string;
    firstname?: string;
    gender?: string;
    id?: number;
    surname?: string;
}
export interface Prize {
    category?: string;
    laureates?: any[];
    overallMotivation?: string;
    year?: string;
}
export interface PrizeListMatch {
    category?: string;
    year?: number;
}
