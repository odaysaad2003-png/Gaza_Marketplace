type SoftGradientBackgroundProps = {
    children: React.ReactNode;
};

export function SoftGradientBackground({children}: SoftGradientBackgroundProps) {
    return (
        <div className="relative min-h-screen overflow-hidden bg-background">
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute right-[-12rem] top-[-10rem] h-80 w-80 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15" />
                <div className="absolute left-[-10rem] top-1/4 h-96 w-96 rounded-full bg-accent/70 blur-3xl dark:bg-accent/20" />
                <div className="absolute bottom-[-14rem] right-1/3 h-[28rem] w-[28rem] rounded-full bg-secondary/80 blur-3xl dark:bg-secondary/20" />
            </div>

            {children}
        </div>
    );
}
