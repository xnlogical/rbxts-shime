declare class Shime {
    public constructor(
        parent: GuiObject,
        time = 1,
        style = Enum.EasingStyle.Linear,
        repeatCount = -1,
        reverses = false,
        delayTime = 0,
    );

    public GetFrame(): Frame;
    public GetGradient(): UIGradient;
    public GetCorner(): UICorner;
    public Play(): void;
    public Pause(): void;
    public Cancel(): void;
}

export = Shime;
