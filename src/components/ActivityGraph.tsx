import { useMemo } from "react";

/**
 * Decorative build-activity visualisation.
 * This is a portfolio design element — it is not real contribution data.
 */
const LEVEL_VARS = ["--level-0", "--level-1", "--level-2", "--level-3", "--level-4"];
const WEEKS = 26;
const DAYS = 7;

function makeGrid() {
  const cells: number[] = [];
  for (let i = 0; i < WEEKS * DAYS; i += 1) {
    // Deterministic pseudo-random pattern so SSR and client match.
    const n = (Math.sin(i * 12.9898) * 43758.5453) % 1;
    const v = Math.abs(n);
    const level = v > 0.86 ? 4 : v > 0.7 ? 3 : v > 0.5 ? 2 : v > 0.28 ? 1 : 0;
    cells.push(level);
  }
  return cells;
}

export function ActivityGraph() {
  const cells = useMemo(makeGrid, []);

  return (
    <div className="gh-card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
        <p className="font-mono text-xs text-muted-foreground">build activity</p>
        <p className="font-mono text-[10px] text-muted-foreground/80">
          decorative visualisation — not live GitHub data
        </p>
      </div>

      <div className="overflow-x-auto p-4">
        <div
          className="grid w-max grid-flow-col gap-[3px]"
          style={{ gridTemplateRows: `repeat(${DAYS}, minmax(0, 1fr))` }}
          aria-hidden="true"
        >
          {cells.map((level, i) => (
            <span
              key={i}
              className="h-[11px] w-[11px] rounded-[2px] opacity-0 transition-transform duration-150 hover:scale-125 motion-reduce:opacity-100"
              style={{
                backgroundColor: `var(${LEVEL_VARS[level]})`,
                animation: `fade-in 320ms ease-out ${Math.min(i * 3, 900)}ms forwards`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 border-t border-border px-4 py-2.5">
        <span className="font-mono text-[10px] text-muted-foreground">less</span>
        {LEVEL_VARS.map((v) => (
          <span
            key={v}
            className="h-[11px] w-[11px] rounded-[2px]"
            style={{ backgroundColor: `var(${v})` }}
            aria-hidden="true"
          />
        ))}
        <span className="font-mono text-[10px] text-muted-foreground">more</span>
      </div>
    </div>
  );
}
