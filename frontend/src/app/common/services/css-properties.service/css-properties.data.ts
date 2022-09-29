import { type } from "os";

enum CSSPropertyStatus {
    DEPRECATED,
    EXPERIMENTAL,
    STANDART_TRACK
}
export type Browser = 'chrome' | 'chrome_android' | 'edge' | 'firefox' | 'firefox_android' | 'ie' | 'oculus' | 'opera' | 'opera_android' | 'safari' | 'safari_ios' | 'samsunginternet_android' | 'webview_android';

interface CSSProperty {
    status: CSSPropertyStatus,
    support: Map<Browser, { version: string, other?: Array<{ prefix: string, version: string }> }>

}
export const CssProperties = {
    'sizes': {
        'width': {
            status: '',
            support: []
        }
    }
}