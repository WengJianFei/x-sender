export type BusEventKey = string | symbol;

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
    options?: MentionItem[];
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
    multiple?: boolean;
    emptyText?: string;
    showSearch?: boolean;
    placeholder?: string;
    searchEmptyText?: string;
}

export interface TipConfig {
    tipTemplate?: string;
    dialogTemplate?: string;
    closeNames?: string[];
    offsetTop?: number;
}

export interface UpdateOption {
    placeholder?: string;
    chatStyle?: Partial<CSSStyleDeclaration>;
    maxLength?: number;
    keyboardWrapFun?: { (event: KeyboardEvent): boolean };
    keyboardSendFun?: { (event: KeyboardEvent): boolean };
    mentionConfig?: MentionConfig;
    triggerConfig?: TriggerConfig[];
    selectConfig?: SelectConfig[];
    tipConfig?: TipConfig | boolean;
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
    text?: string;
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

export interface GetHtmlConfig {
    saveTagData?: boolean;
    identifyLink?: boolean;
}

export class ChatElement {
    container: HTMLElement;
    rollBox: HTMLElement;
    richText: HTMLElement;
    placeholder: HTMLElement;
    dialogRoot: HTMLElement;
}

export class Grid {
    type: 'Grid';
    $el: HTMLElement;
    children: (Write | Input | Mention | Trigger | Select)[];
    context: ChatElement;
    renderChildren(model: AnyTagProps[]): void
}
export class Write {
    type: 'Write';
    $el: HTMLElement;
    context: Grid;
    text: string;
    focus(offset?: number): void
    syncNode(): void
}
export class Input {
    type: 'Input';
    $el: HTMLElement;
    context: Grid;
    key: string;
    placeholder: string;
    text: string;
    focus(offset?: number): void
    syncNode(): void
}
export class Mention {
    type: 'Mention';
    $el: HTMLElement;
    context: Grid;
    id: string;
    name: string;
}
export class Trigger {
    type: 'Trigger';
    $el: HTMLElement;
    context: Grid;
    id: string;
    name: string;
    key: string;
}
export class Select {
    type: 'Select';
    $el: HTMLElement;
    context: Grid;
    id: string;
    name: string;
    key: string;
    updateTag (tag: SelectItem)
}

export class ChatEditor {
    isComposition: boolean;
    textLength: number;
    NODES: Grid[];
    compileNodes(nodes: Grid[]): AnyTagProps[][]
}

export class Bus {
    on(key: BusEventKey, eventName: BusEventKey, callback: Function | Promise<any>)
    emit(eventName: BusEventKey, ...args: any[])
    off(key: BusEventKey, eventName: BusEventKey)
    offKeyEvent(key: BusEventKey)
}

export class Component {
    type: string;
    data: Record<string, any>;
    remove()
    render(): string
}

declare class XSender {
    static version: string;
    static EventSet: {
        EVENT_COMMON_SEND: symbol;
        EVENT_COMMON_CHANGE: symbol;
        EVENT_COMMON_DESTROY: symbol;
        EVENT_COMMON_TIP_STATE: symbol;
        EVENT_COMMON_DIALOG_CLOSE: symbol;
        EVENT_COMMON_SELECT_ACTIVE: symbol;
        EVENT_EDITOR_INSERT_MENTION: symbol;
        EVENT_EDITOR_INSERT_TRIGGER: symbol;
        EVENT_EDITOR_INSERT_SELECT: symbol;
        EVENT_EDITOR_INSERT_INPUT: symbol;
        EVENT_EDITOR_INSERT_CUSTOM: symbol;
    };
    static Component: Component;
    options: Options;
    deviceInfo: DeviceInfo;
    chatElement: ChatElement;
    chatEditor: ChatEditor;
    bus: Bus;
    constructor(container: HTMLElement, options?: Options)
    updateConfig(options: UpdateOption): void
    nextTick(callback?: Function | Promise<any>): Promise<void>
    getSelection(): Selection
    getModel(): AnyTagProps[][]
    getHtml(config?: GetHtmlConfig): string
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
    reset(resetConfig?: ResetConfig): Promise<void>
    undo(): Promise<void>
    redo(): Promise<void>
    jumpPrev(type: 'start' | 'end'): void
    jumpNext(type: 'start' | 'end'): void
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
    getCurrentNode(): { node: Node, offset: number, instance: Write | Input }
    useComponent(type: string, component: typeof Component): void
    setComponent(type: string, data: object): Promise<void>
}
export default XSender
