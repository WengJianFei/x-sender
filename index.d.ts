export interface MentionItem {
    id: string;
    name: string;
    avatar?: string | URL;
    pinyin?: string;
}

export interface TriggerItem {
    id: string;
    name: string;
    pinyin?: string;
}

export interface SelectItem {
    id: string;
    name: string;
    preview?: string | URL;
}

export interface MentionConfig {
    dialogTitle: string;
    callEvery?: boolean;
    everyText?: string;
    asyncMatch?: { (matchStr: string): Promise<MentionItem[]> };
    emptyText?: string;
    options: MentionItem[];
}

export interface TriggerConfig {
    dialogTitle: string;
    keyMap?: string[];
    key: string;
    options: TriggerItem[];
}

export interface SelectConfig {
    dialogTitle: string;
    key: string;
    options: SelectItem[];
}

export interface TipConfig {
    tipTemplate?: string;
    dialogTemplate?: string;
    closeNames?: string[];
}

export interface UpdateOption {
    placeholder?: string;
    chatStyle?: CSSStyleDeclaration;
    maxLength?: number;
    keyboardWrapFun?: { (event: KeyboardEvent): boolean };
    keyboardSendFun?: { (event: KeyboardEvent): boolean };
    mentionConfig?: MentionConfig;
    triggerConfig?: TriggerConfig[];
    selectConfig?: SelectConfig[];
    tipConfig?: TipConfig;
}

export interface Options extends UpdateOption {
    device?: 'pc' | 'h5' | 'auto';
    autoFocus?: boolean;
}

export interface DeviceInfo {
    isTablet: boolean;
    isPhone: boolean;
    isAndroid: boolean;
    isIOS: boolean;
    isPc: boolean;
    isIPhone: boolean;
    isIPad: boolean;
    isWindows: boolean;
    isMacOS: boolean;
    isLinux: boolean;
    isWechat: boolean;
    isMobile: boolean;
}

export interface TagData {
    mention: { id: string; name: string }[];
    trigger: { [keyName: string]: { id: string; name: string }[] };
    select: { [keyName: string]: { id: string; name: string }[] };
    input: { [keyName: string]: { text: string; placeholder: string }[] };
}

export interface WriteProps {
    type: 'Write';
    text: string;
}

export interface MentionProps {
    type: 'Mention';
    id: string;
    name: string;
}

export interface TriggerProps {
    type: 'Trigger';
    id: string;
    name: string;
    key: string;
}

export interface SelectProps {
    type: 'Select';
    id: string;
    name: string;
    key: string;
}

export interface InputProps {
    type: 'Input';
    text: string;
    placeholder: string;
    key: string;
}

export interface CustomProps {
    type: 'Custom';
    html: string;
}

export type AnyTagProps = WriteProps | MentionProps | TriggerProps | SelectProps | InputProps | CustomProps

export type FocusType = 'first' | 'last' | 'mark'

export interface ResetConfig {
    clearHistory?: boolean;
    chatNode?: AnyTagProps[][];
}

export class ChatElement {
    container: HTMLElement;
    rollBox: HTMLElement;
    richText: HTMLElement;
    placeholder: HTMLElement;
    dialogRoot: HTMLElement;
}

export class ChatEditor {
    isComposition: boolean;
    textLength: number;
    NODES: any;
}

export class Bus {
    on(key: string, eventName: string, callback: Function | Promise<any>)
    emit(eventName: string, ...args: any[])
    off(key: string, eventName: string)
    offKeyEvent(key: string)
}

declare class XSender {
    static version: string;
    options: Options;
    deviceInfo: DeviceInfo;
    chatElement: ChatElement;
    chatEditor: ChatEditor;
    bus: Bus;
    constructor(container: HTMLElement, options: Options)
    updateConfig(options: UpdateOption): void
    nextTick(callback?: Function | Promise<any>): Promise<void>
    getSelection(): Selection
    getHtml(options?: { identifyLink?: boolean; saveTagData?: boolean }): string
    getText(): string
    getTagData(): TagData
    setLineBreak(): Promise<void>
    setHtml(html: string): Promise<void>
    setText(text: string): Promise<void>
    setMention(mention: Omit<MentionProps, 'type'>): Promise<void>
    setTrigger(trigger: Omit<TriggerProps, 'type'>): Promise<void>
    setSelect(select: Omit<SelectProps, 'type'>): Promise<void>
    setInput(input: Omit<InputProps, 'type'>): Promise<void>
    setChatNode(chatNode: AnyTagProps[][]): Promise<void>
    removeMention(ids?: MentionProps['id'][]): Promise<void>
    removeTrigger(key: TriggerProps['key'], ids?: TriggerProps['id'][]): Promise<void>
    removeSelect(key: SelectProps['key'], ids?: SelectProps['id'][]): Promise<void>
    removeInput(key: InputProps['key']): Promise<void>
    reverseHtml(html: string, append?: boolean): Promise<void>
    reset(resetConfig: ResetConfig): Promise<void>
    undo(): Promise<void>
    redo(): Promise<void>
    move(length: number): void
    backspace(length: number): Promise<void>
    focus(type: FocusType): void
    disable(): void
    enable(): void
    isEmpty(trim?: boolean): boolean
    destroy(): void
    showSelectPopup(key: string, el: HTMLElement): void
    showTip(props: Record<string, string>): void
    closeTip(): void
}
export default XSender
