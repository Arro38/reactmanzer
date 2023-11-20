import { Separator } from "../ui/separator";

function Title({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <Separator className="my-4" />
    </>
  );
}

export default Title;
