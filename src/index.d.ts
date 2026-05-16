declare class Shime {
    public constructor(
        parent: GuiObject,
        time?: number,
        style?: Enum.EasingStyle,
        repeatCount?: number,
        reverses?: boolean,
        delayTime?: number,
    );

    public GetFrame(): Frame;
    public GetGradient(): UIGradient;
    public GetCorner(): UICorner;
    public Play(): void;
    public Pause(): void;
    public Cancel(): void;
}

export = Shime;
