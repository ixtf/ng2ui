export interface ILang {
    code: string;
    title: string;
}
export class AppConfig {

    public static DEFAULT_LANG: ILang = {code: 'zh_CN', title: '中文简体'};
    public static SUPPORTED_LANGUAGES: Array<ILang> = [
        {code: 'en', title: 'English'},
        {code: 'es', title: 'Spanish'},
        {code: 'fr', title: 'French'},
        {code: 'ru', title: 'Russian'},
        {code: 'bg', title: 'Bulgarian'}
    ];

}